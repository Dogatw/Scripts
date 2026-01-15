    /******************** CONFIG ********************/
    const SUPABASE_URL = "https://jjojlwqjapkkujmgbxum.supabase.co";
    const SUPABASE_ANON_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impqb2psd3FqYXBra3VqbWdieHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0MjAzMzgsImV4cCI6MjA4Mzk5NjMzOH0.-dvxGtypZ-K9tpWprGFQw1-M0IChjVa3Hlqr5a2Ma3U";

    const ADMIN_PLAYER_ID = 1298630;
    const NUKE_POP = 8000;
    const FANG_CATS = 10;

    /******************** HELPERS ********************/
    const isAdmin = () => game_data.player.id === ADMIN_PLAYER_ID;

    function getTWServerTimeString() {
        const d = document.getElementById("serverDate");
        const t = document.getElementById("serverTime");
        if (!d || !t) return new Date().toLocaleString();
        return `${d.textContent.trim()} ${t.textContent.trim()}`;
    }

    async function fetchAllowedTribes() {
        const r = await fetch(
            `${SUPABASE_URL}/rest/v1/allowed_tribes?world=eq.${game_data.world}`,
            { headers: { apikey: SUPABASE_ANON_KEY } }
        );
        return (await r.json()).map(x => x.tribe_id);
    }

    async function enforceAccess() {
        if (isAdmin()) return true;
        const allowed = await fetchAllowedTribes();
        const tribeId = Number(game_data.player.ally);
if (!allowed.includes(tribeId)) {

            UI.ErrorMessage("⛔ Tribe not allowed");
            return false;
        }
        return true;
    }

    function normalize(c) {
        if (c.snob > 0) return "noble";
        if (c.fake) return "fake";
        if (c.cats >= FANG_CATS) return "fang";
        if (c.pop >= NUKE_POP) return "nuke";
        return null;
    }


const style = document.createElement("style");
style.textContent = `
/* Fix visibility inside dashboard tables */
#sam_dashboard table.vis {
    color: #000 !important;
}

#sam_dashboard table.vis th {
    color: #000 !important;
    font-weight: bold;
}

#sam_dashboard table.vis td {
    color: #000 !important;
}

/* Optional: slightly darker row hover */
#sam_dashboard table.vis tr:hover td {
    background: #e6d3a3;
}
`;
document.head.appendChild(style);


    /******************** PARSER ********************/
function parseCommands() {
    const table = document.getElementById("commands_table");
    if (!table) return [];

    const rows = table.querySelectorAll("tr");
    if (!rows.length) return [];

    const popMap = [
        "spear", "sword", "axe", "archer", "spy",
        "light", "marcher", "heavy", "ram",
        "catapult", "snob"
    ];

    const popValue = {
        spear:1, sword:1, axe:1, archer:1,
        spy:2, light:4, marcher:5, heavy:6,
        ram:5, catapult:8, snob:100
    };

    const cmds = [];

    rows.forEach(row => {
        const unitCells = row.querySelectorAll("td.unit-item");
        if (unitCells.length !== popMap.length) return; // skip header / junk rows

        let pop = 0;
        let cats = 0;
        let snob = 0;

        unitCells.forEach((td, i) => {
            const count = parseInt(td.textContent.trim(), 10) || 0;
            if (!count) return;

            const unit = popMap[i];
            pop += count * popValue[unit];

            if (unit === "catapult") cats += count;
            if (unit === "snob") snob += count;
        });

        if (!pop) return;
let defender = "";

// 1️⃣ Prefer actual enemy player link
const playerLink = row.querySelector("a[href*='screen=info_player']");
if (playerLink) {
    defender = playerLink.textContent.trim();
} else {
    // 2️⃣ Fallback: clean label (last resort)
    const label =
        row.querySelector(".quickedit-label")?.textContent || "";

    defender = label
        .replace(/\(.*?\)/g, "")   // remove (coords, units)
        .replace(/FAKE.*$/i, "")   // remove fake text
        .trim();
}


        const label =
            row.querySelector(".quickedit-label")?.textContent || "";

        const isFake = /fake/i.test(label);

        cmds.push({
            off: game_data.player.name,
            def: defender,
            pop,
            cats,
            snob,
            fake: isFake
        });
    });

    return cmds;
}


    function ensureCommandScreen() {
        const s = game_data.screen;
        const m = game_data.mode || "";
        const ok =
            (s === "place" && m === "commands") ||
            (s === "overview_villages" && (m === "commands" || m === "combined"));

        if (ok) return true;

        sessionStorage.setItem("sam_auto_upload", "1");
        window.location.href =
            `${game_data.link_base_pure}overview_villages&mode=commands`;
        return false;
    }

    /******************** UPLOAD ********************/
async function logUpload() {
    await fetch(`${SUPABASE_URL}/rest/v1/upload_log`, {
        method: "POST",
        headers: {
            apikey: SUPABASE_ANON_KEY,
            "Content-Type": "application/json",
            Prefer: "resolution=merge-duplicates"
        },
        body: JSON.stringify({
            world: game_data.world,
            player_name: game_data.player.name,
            server_time: getTWServerTimeString()
        })
    });
}


    async function processAndUpload(cmds) {
       const atk = {};

cmds.forEach(c => {
    const t = normalize(c);
    if (!t) return;

    atk[c.off] ??= { nuke:0, fang:0, fake:0, noble:0 };
    atk[c.off][t]++;
});


        const up = async (table, data) => {
            for (const p in data) {
                await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
                    method: "POST",
                    headers: {
                        apikey: SUPABASE_ANON_KEY,
                        "Content-Type": "application/json",
                        Prefer: "resolution=merge-duplicates"
                    },
                    body: JSON.stringify({ world: game_data.world, player: p, ...data[p] })
                });
            }
        };

   await up("rank_attack", atk);


        await logUpload();
        loadDashboard();
        UI.SuccessMessage(`Uploaded ${cmds.length} commands`);
    }

    async function uploadCommands() {
        if (!ensureCommandScreen()) return;

        let tries = 0;
        const wait = setInterval(() => {
            tries++;
            if (document.querySelectorAll(".unit-item").length) {
                clearInterval(wait);
                const cmds = parseCommands();
                if (!cmds.length) return UI.ErrorMessage("No commands found");
                processAndUpload(cmds);
            }
            if (tries > 20) {
                clearInterval(wait);
                UI.ErrorMessage("Command table not found");
            }
        }, 500);
    }

    /******************** DASHBOARD ********************/
    async function loadUploadLog() {
        const r = await fetch(
            `${SUPABASE_URL}/rest/v1/upload_log?world=eq.${game_data.world}&order=server_time.desc`,
            { headers: { apikey: SUPABASE_ANON_KEY } }
        );
        const rows = await r.json();

        return `
            <h3>📋 Upload History</h3>
            <table class="vis" width="100%">
                <tr><th>Player</th><th>Server Time</th></tr>
                ${rows.map(r => `
                    <tr><td>${r.player_name}</td><td>${r.server_time}</td></tr>
                `).join("")}
            </table>
        `;
    }

    async function loadDashboard() {
        const get = t =>
            fetch(`${SUPABASE_URL}/rest/v1/${t}?world=eq.${game_data.world}`,
                { headers: { apikey: SUPABASE_ANON_KEY } }).then(r => r.json());
let attack = await get("rank_attack");

        const sort = (a,b)=>
            (b.nuke+b.fang+b.fake+b.noble)-(a.nuke+a.fang+a.fake+a.noble);

        attack.sort(sort);
       

        const tbl = (title, data) => `
            <h3>${title}</h3>
            <table class="vis" width="100%">
<tr>
    <th>#</th>
    <th>Player</th>
    <th>Nuke</th>
    <th>Fang</th>
    <th>Fake</th>
    <th>Noble</th>
</tr>
                ${data.map((p,i)=>`
                    <tr>
                        <td>${i+1}</td>
                        <td>${p.player}</td>
                        <td>${p.nuke}</td>
                        <td>${p.fang}</td>
                        <td>${p.fake}</td>
                        <td>${p.noble}</td>
                    </tr>
                `).join("")}
            </table>
        `;

     document.getElementById("sam_body").innerHTML =
    tbl("⚔ Attack", attack) +
    "<br>" +
    await loadUploadLog();

    }

    /******************** UI ********************/
    function openTribes() {
    const old = document.getElementById("sam_tribe_panel");
    if (old) old.remove();

    const panel = document.createElement("div");
    panel.id = "sam_tribe_panel";
    panel.style = `
        position:fixed;
        top:120px;
        right:40px;
        width:320px;
        background:#222;
        color:#fff;
        padding:10px;
        z-index:10000;
        border:1px solid #555;
    `;

    panel.innerHTML = `
        <div style="display:flex;justify-content:space-between">
            <b>Allowed Tribes</b>
            <span id="closeTribePanel" style="cursor:pointer">✖</span>
        </div>

        <input id="tribeInput" type="number"
               placeholder="Tribe ID"
               style="width:100%;margin:6px 0">

        <button id="addTribeBtn">Add Tribe</button>
        <ul id="tribeList"></ul>
    `;

    document.body.appendChild(panel);

    document.getElementById("closeTribePanel").onclick = () => panel.remove();

  document.getElementById("addTribeBtn").onclick = async () => {
    const input = document.getElementById("tribeInput");
    const id = Number(input.value);

    if (!id) {
        UI.ErrorMessage("Please enter a valid tribe ID");
        return;
    }

    const res = await fetch(`${SUPABASE_URL}/rest/v1/allowed_tribes`, {
        method: "POST",
        headers: {
            apikey: SUPABASE_ANON_KEY,
            "Content-Type": "application/json",
            Prefer: "resolution=ignore-duplicates"
        },
        body: JSON.stringify({
            world: game_data.world,
            tribe_id: id
        })
    });

    if (!res.ok) {
        const err = await res.text();
        UI.ErrorMessage("Failed to add tribe: " + err);
        return;
    }

    UI.SuccessMessage("Tribe added");
    input.value = "";
    loadTribes();
};


    async function loadTribes() {
        const r = await fetch(
            `${SUPABASE_URL}/rest/v1/allowed_tribes?world=eq.${game_data.world}`,
            { headers: { apikey: SUPABASE_ANON_KEY } }
        );
        const rows = await r.json();

        const ul = document.getElementById("tribeList");
        ul.innerHTML = "";
        rows.forEach(r => {
            const li = document.createElement("li");
            li.textContent = r.tribe_id;
            ul.appendChild(li);
        });
    }

    loadTribes();
}

function createUI() {
    if (document.getElementById("sam_dashboard")) return;

    const d = document.createElement("div");
    d.id = "sam_dashboard";
    d.style = `
        position:fixed;
        top:80px;
        right:40px;
        width:560px;
        max-height:80vh;
        background:#2b2b2b;
        color:#fff;
        z-index:9999;
        border:1px solid #444;
        border-radius:6px;
        display:flex;
        flex-direction:column;
        box-shadow:0 6px 20px rgba(0,0,0,0.6);
    `;

    d.innerHTML = `
        <div id="sam_header"
             style="cursor:move;
                    padding:8px;
                    background:#1f1f1f;
                    border-bottom:1px solid #444;
                    text-align:center;
                    user-select:none;">
            <b>Tribe Command Dashboard</b><br>
            <button id="up">Upload</button>
            <button id="rf">Refresh</button>
            ${isAdmin() ? `<button id="tr">Admin</button>` : ""}
        </div>

        <div id="sam_body"
             style="padding:8px;
                    overflow-y:auto;
                    flex:1;">
        </div>

        <div style="text-align:center;
                    font-size:11px;
                    color:#aaa;
                    padding:6px;
                    border-top:1px solid #444;">
            Made by Sam
        </div>
    `;

    document.body.appendChild(d);

    document.getElementById("up").onclick = uploadCommands;
    document.getElementById("rf").onclick = loadDashboard;

    if (isAdmin()) {
        document.getElementById("tr").onclick = openTribes;
    }

    makeDraggable(d, document.getElementById("sam_header"));
}

    function makeDraggable(box, handle) {
    let startX = 0, startY = 0, dragging = false;

    handle.addEventListener("mousedown", e => {
        dragging = true;
        startX = e.clientX - box.offsetLeft;
        startY = e.clientY - box.offsetTop;
        document.body.style.userSelect = "none";
    });

    document.addEventListener("mousemove", e => {
        if (!dragging) return;
        box.style.left = e.clientX - startX + "px";
        box.style.top = e.clientY - startY + "px";
        box.style.right = "auto";
    });

    document.addEventListener("mouseup", () => {
        dragging = false;
        document.body.style.userSelect = "";
    });
}


    /******************** INIT ********************/
    if (!window.game_data) return;
    if (!(await enforceAccess())) return;

    createUI();
    loadDashboard();

    if (sessionStorage.getItem("sam_auto_upload") === "1") {
        sessionStorage.removeItem("sam_auto_upload");
        setTimeout(uploadCommands, 800);
    }
