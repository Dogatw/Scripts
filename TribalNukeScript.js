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
    ram: 'max',
    catapult: 'max'
};

const minTroops = {
    spear: '0',
    sword: '0',
    axe: '3000',
    archer: '0',
    spy: '0',
    light: '1000',
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



function normalizeCoord(x, y) {
    return String(x).padStart(3, "0") + String(y).padStart(3, "0");
}



  


    /* ================= Show data on rally point ================= */

 async function showRemainingCoordsUI() {
    const elId = "remaining_coords_ui";

    let container = document.getElementById(elId);
    if (!container) {
        container = document.createElement("div");
        container.id = elId;
        container.className = "vis"; // 👈 TW native style
       container.style.cssText = `
    margin: 12px 0;
    padding: 12px 14px;
    font-weight: bold;
    text-align: center;
    font-size: 16px;        /* 👈 bigger */
    line-height: 1.4;
    letter-spacing: 0.3px;
`;


        // 🔗 Attach to TW content area
        const target =
            document.querySelector("#content_value") ||
            document.querySelector("#sidebar") ||
            document.body;

        target.prepend(container);
    }

    const { data, error } = await sb
        .from("coordfornuke")
        .select("remaining_uses")
        .eq("world", game_data.world)
        .gt("remaining_uses", 0);

    const total = error || !data
        ? 0
        : data.reduce((s, r) => s + Number(r.remaining_uses || 0), 0);

   container.innerHTML = `
    🎯 Remaining nukes:
    <span style="color:#c33;font-size:22px;margin-left:6px;">
        ${total}
    </span>
    <div style="
        margin-top:6px;
        font-size:13px;
        font-weight:normal;
        color:#555;
        font-style:italic;
    ">
        Sam says hurry you wankers
    </div>
`;

}


   async function showNukeUsageUI() {
    // 🔐 admin-only
    if (!(await isAdminUser())) return;

    const elId = "nuke_usage_ui";

    let container = document.getElementById(elId);
    if (!container) {
        container = document.createElement("div");
        container.id = elId;
        container.className = "vis";
        container.style.cssText = `
            margin: 12px 0;
            padding: 10px 12px;
            font-size: 12px;
            max-height: 320px;
            overflow-y: auto;
        `;

        // 🔗 Attach inside TW content
        const target =
            document.querySelector("#content_value") ||
            document.querySelector("#sidebar") ||
            document.body;

        target.appendChild(container);
    }

    const { data, error } = await sb
        .from("coordfornuke")
        .select("coord, remaining_uses")
        .eq("world", game_data.world)
        .gt("remaining_uses", 0)
        .order("coord");

    if (error || !data?.length) {
        container.innerHTML = `
            <div style="font-weight:bold;">💣 Nuke pool</div>
            <i>No active coords</i>
        `;
        return;
    }

    const total = data.reduce(
        (s, r) => s + Number(r.remaining_uses || 0),
        0
    );

    const lines = data.map(r =>
        `${r.coord} – ${Number(r.remaining_uses).toFixed(1)}`
    );

    container.innerHTML = `
        <div style="font-weight:bold;margin-bottom:6px;">
            💣 Nuke pool(Only Admin can see)
        </div>
        ${lines.join("<br>")}
        <hr style="margin:6px 0;">
        <b>Total nukes: ${total}</b>
    `;
}

function cacheTargetCoord() {
    const x = document.querySelector("input[name='x']")?.value;
    const y = document.querySelector("input[name='y']")?.value;

    if (x && y) {
        sessionStorage.setItem(
            "tw_cached_coord",
            String(x).padStart(3, "0") + "|" + String(y).padStart(3, "0")
        );
        console.log("📦 Cached coord:", sessionStorage.getItem("tw_cached_coord"));
    }
}



function hookAttackSubmitAttackOnly() {
    const btn = document.querySelector(
        "input[type='submit'][value='Attack'], button[value='Attack']"
    );

    if (!btn) {
        console.warn("❌ Attack button not found");
        return;
    }

    btn.addEventListener("click", () => {
        const coord = sessionStorage.getItem("tw_cached_coord");

        if (!coord) {
            console.warn("❌ No cached coord, abort");
            return;
        }

        if (sessionStorage.getItem("tw_nuke_consumed") === "1") return;
        sessionStorage.setItem("tw_nuke_consumed", "1");

        // coord MUST be like "476|601" (matches DB exactly)
        fetch(
            "https://xjrgjnsxahfxlseakknl.supabase.co/rest/v1/rpc/consume_coord",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "apikey": SUPABASE_ANON_KEY,
                    "Authorization": "Bearer " + SUPABASE_ANON_KEY
                },
                body: JSON.stringify({
                    p_world: game_data.world,
                    p_coord: coord,   // 👈 PIPE INCLUDED
                    p_cost: 1
                }),
                keepalive: true
            }
        );

        console.log("💣 Nuke decrement fired on ATTACK:", coord);
    }, { once: true });
}






 

/* ================= MAIN ================= */
async function main() {
  await showRemainingCoordsUI();
  await showNukeUsageUI();
  

  if (!location.href.includes("screen=place")) return;

  try {
    await initVillage();
    if (!checkInputs()) goNextVillage();
  } catch (e) {
    console.warn("Village skipped:", e);
  }
}




function goNextVillage() {
    sessionStorage.removeItem("tw_nuke_consumed");
    document.querySelector(".arrowRight")?.click();
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
    cacheTargetCoord();
    hookAttackSubmitAttackOnly();


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
        const el = document.querySelector("#units_entry_all_" + t[o][0]);
if (!el) {
    throw "Not on rally point";
}

let available = Number(el.innerText.match(/\d+/)[0]);


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
