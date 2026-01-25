(async function () {
'use strict';

/* ================= CONFIG ================= */

 const SUPABASE_URL = "https://xjrgjnsxahfxlseakknl.supabase.co";
    const SUPABASE_ANON_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqcmdqbnN4YWhmeGxzZWFra25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTc5MDgsImV4cCI6MjA4MzczMzkwOH0.ZmqvQkg1baYpkYXhYCj59Drphdy2iq50tY3JoIR_6c4";


/* ================= TROOP CONFIG ================= */

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
        lines.push(`${r.coord} – ${r.remaining_uses}`);
    }

    document.getElementById(elId).innerHTML = `
        <div style="font-weight:bold;margin-bottom:6px;">💣 Nuke pool</div>
        ${lines.join("<br>")}
        <hr style="border-color:#3e6147;margin:6px 0;">
        <b>Total nukes: ${total}</b>
    `;
}


async function handleConfirmPage() {
    console.log("🔍 handleConfirmPage fired", location.href);

    if (!location.href.includes("screen=place&try=confirm")) return;

    const raw = sessionStorage.getItem("pending_nuke_coord");
    console.log("🧠 pendingCoord (session):", raw);

    if (!raw) return;

    const p = JSON.parse(raw);

    console.log("💣 DECREMENTING:", p.id, p.coord, p.remaining_uses);

    const { data, error } = await sb
        .from("coordfornuke")
        .update({ remaining_uses: p.remaining_uses - 1 })
        .eq("id", p.id)
        .select();

    console.log("📉 update result:", { data, error });

    // 🔥 EXACT LINE YOU ASKED ABOUT — PUT IT RIGHT HERE
    sessionStorage.removeItem("pending_nuke_coord");

    await showRemainingCoordsUI();
    await showNukeUsageUI();
}


/* ================= MAIN ================= */

async function main() {

    // ✅ ALWAYS FIRST
    await handleConfirmPage();

    await showRemainingCoordsUI();   // existing
    await showNukeUsageUI();          // ✅ ADD THIS

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


 // ✅ store pending coord (NOT consumed yet)
sessionStorage.setItem("pending_nuke_coord", JSON.stringify(row));


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

main();

let __lastUrl = location.href;

setInterval(() => {
    if (location.href !== __lastUrl) {
        __lastUrl = location.href;
        console.log("🔄 URL changed:", __lastUrl);
        main();
    }
}, 250);

})();







