//1:32
(async function () {
'use strict';

/* ================= CONFIG ================= */

 const SUPABASE_URL = "https://xjrgjnsxahfxlseakknl.supabase.co";
    const SUPABASE_ANON_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqcmdqbnN4YWhmeGxzZWFra25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTc5MDgsImV4cCI6MjA4MzczMzkwOH0.ZmqvQkg1baYpkYXhYCj59Drphdy2iq50tY3JoIR_6c4";


/* ================= TROOP CONFIG ================= */
const __consumedNukes = new Set();

const forceEqualTroopCount = false;
const distributeByPopulation = false;
const forceRamSpeed = true;
const populationLim = 0;

const troops = {
    spear: '0',
    sword: '0',
    axe: 'max',
    archer: '0',
    spy: '1',
    light: 'max',
    marcher: 'max',
    heavy: '0',
    ram: '250',
    catapult: 'max'
};

const minTroops = {
    spear: '0',
    sword: '0',
    axe: '1000',
    archer: '0',
    spy: '0',
    light: '500',
    marcher: '0',
    heavy: '0',
    ram: '0',
    catapult: '0'
};

/* ================= SUPABASE INIT ================= */

if (!window.__supabaseReady) {
    window.__supabaseReady = false;

    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
    document.head.appendChild(s);

    await new Promise(res => s.onload = res);

    window.sb = supabase.createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY
    );

    window.__supabaseReady = true;
}

/* ================= INTERNAL VARS ================= */

let minExclamationCount = 0;
for (let k in troops) if (troops[k] === "min!") minExclamationCount++;

let zz = [];
for (let i = 0; i < game_data.units.length; i++) {
    if (game_data.units[i] === "ram" || game_data.units[i] === "catapult") {
        zz.push(i);
    }
}

    /* ================= Admin check ================= */


async function isAdminUser() {
    while (!window.__supabaseReady) {
        await new Promise(r => setTimeout(r, 50));
    }

    const playerName = game_data.player.name.trim();

    const { data, error } = await sb
        .from("script_permissions")
        .select("permission")
        .ilike("player_name", playerName) // ✅ case-insensitive
        .limit(1);

    if (error || !data || !data.length) {
        return false;
    }

    return data[0].permission === "admin";
}

/* ================= COORD-BASED NUKE SCAN ================= */
    let __scanDone = sessionStorage.getItem("tw_nuke_scan_done") === "1";

    let __lastRequestTime = 0;

async function delayLikeHuman(minDelay = 1200) {
    const now = Date.now();
    const diff = now - __lastRequestTime;

    if (diff < minDelay) {
        await new Promise(r => setTimeout(r, minDelay - diff));
    }

    __lastRequestTime = Date.now();
}


const __coordVillageCache = new Map();

// coord (500|500) → village id
async function coordToVillageId(coord) {
    if (__coordVillageCache.has(coord)) {
        return __coordVillageCache.get(coord);
    }

    // 🔒 SAME delay logic as your other script
    await delayLikeHuman(1500); // 1.5s safe for map_info

    const [x, y] = coord.split("|");

    const res = await fetch(
        `/game.php?screen=map&ajax=map_info&x=${x}&y=${y}`,
        { credentials: "same-origin" }
    );

     // 🔥 HANDLE 429 FIRST
    if (res.status === 429) {
        console.warn("429 hit, slowing down...");
        await new Promise(r => setTimeout(r, 5000));
        return null;
    }

    if (!res.ok) {
        console.warn("map_info blocked:", res.status, coord);
        return null;
    }

    const ct = res.headers.get("content-type") || "";
    if (!ct.includes("application/json")) {
        console.warn("map_info non-json:", coord);
        return null;
    }

    const data = await res.json();
    const villageId = data?.village?.id || null;

    __coordVillageCache.set(coord, villageId);
    return villageId;
}



// scan village page for large / medium outgoing
async function fetchVillageOutgoingNukes(villageId) {
    const res = await fetch(
        `/game.php?screen=info_village&id=${villageId}`,
        { credentials: "same-origin" }
    );

    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, "text/html");

    return [...doc.querySelectorAll("img[src*='attack_']")]
        .filter(img =>
            img.src.includes("attack_large") ||
            img.src.includes("attack_medium")
        )
        .map(img => ({
            type: img.src.includes("large") ? "large" : "medium"
        }));
}



    /* ================= Show data on rally point ================= */

    async function showRemainingCoordsUI() {
    const elId = "remaining_coords_ui";

    if (!document.getElementById(elId)) {
        const div = document.createElement("div");
        div.id = elId;
        div.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: #32313f;
            color: #ffffdf;
            padding: 8px 12px;
            border-radius: 6px;
            z-index: 9999;
            font-weight: bold;
        `;
        document.body.appendChild(div);
    }

    const { count, error } = await sb
        .from("coordfornuke")
        .select("*", { count: "exact", head: true })
        .eq("world", game_data.world)
        .gt("remaining_uses", 0);

    if (!error) {
        document.getElementById(elId).innerText =
            `🎯 Remaining coords: ${count ?? 0}`;
    }
}

    async function showVillageUsageUI() {
    if (!(await isAdminUser())) return;

    const elId = "village_usage_ui";

    if (!document.getElementById(elId)) {
        const div = document.createElement("div");
        div.id = elId;
        div.style.cssText = `
            position: fixed;
            top: 430px;
            right: 20px;
            background: #1e1e28;
            color: #ffffdf;
            padding: 10px 12px;
            border-radius: 6px;
            z-index: 9999;
            font-size: 12px;
            max-height: 320px;
            overflow-y: auto;
            min-width: 260px;
        `;
        document.body.appendChild(div);
    }

    const { data, error } = await sb
        .from("coordfornuke_log")
        .select(`
            from_village_id,
            from_village_name,
            attack_type,
            weight
        `)
        .eq("world", game_data.world);

    if (error || !data?.length) {
        document.getElementById(elId).innerHTML =
            "<b>📊 Village usage</b><br><i>No data</i>";
        return;
    }

    const map = {};

    for (const r of data) {
        const key = r.from_village_id;
        if (!map[key]) {
            map[key] = {
                name: r.from_village_name || `Village ${key}`,
                total: 0,
                large: 0,
                medium: 0
            };
        }

        map[key].total += Number(r.weight);
        if (r.attack_type === "large") map[key].large++;
        if (r.attack_type === "medium") map[key].medium++;
    }

    const rows = Object.values(map)
        .sort((a, b) => b.total - a.total)
        .map(v => `
            <div style="margin-bottom:6px;">
                <b>${v.name}</b><br>
                💣 ${v.total.toFixed(1)}
                <span style="color:#aaa;">
                    (L:${v.large} M:${v.medium})
                </span>
            </div>
        `)
        .join("");

    document.getElementById(elId).innerHTML = `
        <div style="font-weight:bold;margin-bottom:6px;">
            📊 Village usage
        </div>
        ${rows}
    `;
}

    async function showNukeUsageUI() {

    // 🔐 admin-only
    if (!(await isAdminUser())) return;

    const elId = "nuke_usage_ui";

    if (!document.getElementById(elId)) {
        const div = document.createElement("div");
        div.id = elId;
        div.style.cssText = `
            position: fixed;
            top: 130px;
            right: 20px;
            background: #202825;
            color: #ffffdf;
            padding: 10px 12px;
            border-radius: 6px;
            z-index: 9999;
            font-size: 12px;
            max-height: 300px;
            overflow-y: auto;
            min-width: 180px;
        `;
        document.body.appendChild(div);
    }

    const { data, error } = await sb
        .from("coordfornuke")
        .select("coord, remaining_uses")
        .eq("world", game_data.world)
        .gt("remaining_uses", 0)
        .order("coord");

    if (error || !data) return;

    let total = 0;
    let lines = [];

    for (const r of data) {
        total += r.remaining_uses;
         lines.push(`${r.coord} – ${Number(r.remaining_uses).toFixed(1)}`);
    }

    document.getElementById(elId).innerHTML = `
        <div style="font-weight:bold;margin-bottom:6px;">💣 Nuke pool</div>
        ${lines.join("<br>")}
        <hr style="border-color:#3e6147;margin:6px 0;">
        <b>Total nukes: ${total}</b>
    `;
}




   async function detectAndConsumeTribeNukes() {

    const { data: coords, error } = await sb
        .from("coordfornuke")
        .select("id, coord, remaining_uses")
        .eq("world", game_data.world)
        .gt("remaining_uses", 0);

    if (error || !coords?.length) return;

    for (const c of coords) {
        const villageId = await coordToVillageId(c.coord);
        if (!villageId) continue;

        const attacks = await fetchVillageOutgoingNukes(villageId);

   let remaining = c.remaining_uses;

for (const atk of attacks) {
    if (remaining <= 0) break;

    // GLOBAL idempotent lock
    const { error: insertErr } = await sb
        .from("consumed_nukes")
        .insert({
            world: game_data.world,
            coord: c.coord,
            attack_type: atk.type
        });

    if (insertErr) continue; // already consumed elsewhere

    await sb
  .from("coordfornuke_log")
  .insert({
    world: game_data.world,
    coord: c.coord,

    from_village_id: villageId,
    from_village_name: game_data.village.name, // or fetched name if available

    attack_type: atk.type,
    weight: atk.type === "large" ? 1 : 0.5
  });


    console.log("💣 NUKE CONFIRMED:", c.coord, atk.type);
remaining -= atk.type === "large" ? 1 : 0.5;
}

// apply final value ONCE
if (remaining !== c.remaining_uses) {
    await sb
        .from("coordfornuke")
        .update({ remaining_uses: remaining })
        .eq("id", c.id);
}

// rate-limit (this part you already did right)
await new Promise(r => setTimeout(r, 1200 + Math.random() * 800));

    }

    await showRemainingCoordsUI();
    await showNukeUsageUI();
}





/* ================= MAIN ================= */

async function main() {

    if (!__scanDone) {
        __scanDone = true;
        sessionStorage.setItem("tw_nuke_scan_done", "1");

        await detectAndConsumeTribeNukes();
    }

    await showRemainingCoordsUI();
    await showNukeUsageUI();
    await showVillageUsageUI();

    if (location.href.includes("overview_villages")) {
        storeVillages();
        return;
    }

    try {
        await initVillage();
        if (!checkInputs()) goNextVillage();
    } catch (e) {
        console.warn("Village skipped:", e);
    }
}



/*function goNextVillage() {
    document.querySelector(".arrowRight")?.click();
}*/
    function goNextVillage() {
    console.warn("NEXT VILLAGE BLOCKED (debug mode)");
}


/* ================= INIT VILLAGE ================= */

async function initVillage() {

    let t = getUnitsToUse(getEnabledUnits());

    // MIN TROOP CHECK
    for (let i = 0; i < t.length; i++) {
        if (t[i][1] < parseInt(minTroops[t[i][0]])) {
            goNextVillage();
            throw "Not enough troops";
        }
    }

    const coord = await getCoordFromSupabase();
    if (!coord) {
        goNextVillage();
        throw "No coords left";
    }

    document.forms[0].x.value = coord.split("|")[0];
    document.forms[0].y.value = coord.split("|")[1];

    for (let i = 0; i < t.length; i++) {
        document.querySelector(`input[id*="${t[i][0]}"]`).value = t[i][1];
        }


}

/* ================= SUPABASE COORD FETCH ================= */

async function getCoordFromSupabase() {

    while (!window.__supabaseReady) {
        await new Promise(r => setTimeout(r, 50));
    }

    // fetch one usable coord
    const { data, error } = await sb
        .from("coordfornuke")
        .select("id, coord, remaining_uses")
        .eq("world", game_data.world)
        .gt("remaining_uses", 0)
        .limit(1);

    if (error) {
        console.error("Supabase select error:", error);
        UI.ErrorMessage("Supabase error (check console)");
        return null;
    }

    if (!data || !data.length) {
        UI.ErrorMessage("No nuke coords left");
        return null;
    }

    const row = data[0];



    let c = row.coord;

    // auto-fix numeric coords like 483596
    if (!c.includes("|") && c.length === 6) {
        c = c.slice(0, 3) + "|" + c.slice(3);
    }

    console.log("Using coord:", c);
    return c;
}

    /* ================= TROOP LOGIC ================= */

function getEnabledUnits() {
    let t = [];
    for (let k in troops) if (troops[k] !== '0') t.push([k, troops[k]]);
    return t;
}

function getUnitsToUse(t) {

    let a = [], popUsed = 0;
    const pop = {
        spear:1,sword:1,axe:1,archer:1,
        spy:2,light:4,marcher:5,heavy:6,
        ram:5,catapult:8,knight:10,snob:100
    };

    let minUnits = [], idx = [];

    for (let o = 0; o < t.length; o++) {
        let available = Number(
            document.querySelector("#units_entry_all_" + t[o][0])
                .innerText.match(/\d+/)[0]
        );

        let send = 0;

        if (isNaN(t[o][1])) {
            if (t[o][1].includes("min")) {
                minUnits.push(t[o][0]);
                idx.push(o);
                send = t[o][1].includes("min!") ? minExclamationCount : 0;
            } else if (t[o][1] === "max") {
                send = available;
            }
        } else {
            send = Math.min(t[o][1], available);
        }

        a.push([t[o][0], send]);
        popUsed += send * pop[t[o][0]];
    }

    let maxPop = game_data.village.points * populationLim;
    let cap = [0, 30000 * populationLim];
    let o = 0;

    while (popUsed < maxPop && minUnits.length) {
        let unit = a[idx[o]][0];
        let available = Number(
            document.querySelector("#units_entry_all_" + unit)
                .innerText.match(/\d+/)[0]
        );

        if (a[idx[o]][1] < available) {
            a[idx[o]][1]++;
            popUsed += pop[unit];
        }

        o = o < minUnits.length - 1 ? o + 1 : 0;
        cap[0]++;
        if (cap[0] > cap[1]) break;
    }

    return a;
}

/* ================= VALIDATION ================= */

function checkInputs() {
    let t = document.querySelectorAll(".unitsInput");
    let a = document.querySelectorAll(".units-entry-all");

    for (let i = 0; i < t.length; i++) {
        if (+t[i].value > +a[i].innerText.match(/\d+/)[0]) return false;
    }

    if (forceRamSpeed &&
        !Number(t[zz[0]]?.value) &&
        !Number(t[zz[1]]?.value)
    ) return false;

    return true;
}

/* ================= STORE VILLAGES ================= */

function storeVillages() {
    let t = document.querySelectorAll('#combined_table a[href*="village"] span');
    let ids = [];

    t.forEach(e => {
        let v = e.closest("a").href.split("village=")[1].split("&")[0];
        ids.push(v);
    });

    localStorage.setItem("fs_villagedata", ids.join(","));
    alert(ids.length + " villages stored!");
}

/* ================= RUN ================= */


// initial run
main();


})();

