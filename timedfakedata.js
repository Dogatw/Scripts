//MS
(function () {
    'use strict';
/* ===== ACCESS CONTROL : PLAYER + WORLD ===== */


    // 🔐 ALLOWED PLAYERS
    const ALLOWED_PLAYERS = Object.freeze([
      //  'SamuraiLord',
        'cousin',
        'Cousin1'
    ]);

    // 🌍 ALLOWED WORLDS
    const ALLOWED_WORLDS = Object.freeze([
       // 'in100',
      //  'in101',
        'en150'
    ]);

    // 🧠 Detect player & world (Tribal Wars safe)
    const gameData = window.game_data || {};
    const playerName = gameData.player?.name;
    const worldName  = gameData.world;

    // 🚫 HARD BLOCK (POPUP + STOP)
if (
    !playerName ||
    !worldName ||
    !ALLOWED_PLAYERS.includes(playerName) ||
    !ALLOWED_WORLDS.includes(worldName)
) {
    alert(
        '⛔ YOU ARE NOT ALLOWED - Contact SAM\n\n' +
        'This script is restricted.\n\n' +
        'Player: ' + (playerName || 'Unknown') + '\n' +
        'World: ' + (worldName || 'Unknown')
    );

    console.error('⛔ ACCESS DENIED', { playerName, worldName });

    throw new Error('Unauthorized player or world — script stopped');
}

    console.log('✅ ACCESS GRANTED', { playerName, worldName });
 


   /* ================= LOGGING ================= */
const TF_LOG = true;
function tfLog(...args) {
    if (!TF_LOG) return;
    console.log('[TF]', ...args);
}

    /* ================= CONFIG ================= */
    const STORAGE_KEY = 'tw_timed_fake_settings';
    const MS_PER_MIN = 60000;
    const COLORS = { ok:'#40D0E0', warn:'#FFD700', danger:'#FF5555' };
    const rand = (min=100,max=400)=>Math.floor(Math.random()*(max-min+1))+min;

    /* ================= STATE ================= */
    let secondCounter = new Map(); // launchSecond -> count

    let autoLaunched = new Set(); // prevent double auto-rally

    let unitSpeeds = {};
    let selectedUnit = 'ram';
    let villages = [];
    let results = [];

    /* ================= LOAD UNIT SPEEDS ================= */

const SERVER_OFFSET = Timing.getCurrentServerTime() - Date.now();

function formatServerDate(localEpochMs) {
    return new Date(localEpochMs + SERVER_OFFSET).toLocaleString();
}

function parseServerTWDate(str) {
    const m = str.match(
        /(\d{1,2})\/(\d{1,2})\/(\d{4}),?\s*(\d{1,2}):(\d{2}):(\d{2})/
    );
    if (!m) return NaN;

    const [, d, mo, y, h, mi, s] = m.map(Number);

    // 🔒 TREAT INPUT AS SERVER TIME (NOT LOCAL)
    // Build a UTC timestamp so local timezone is ignored
    return Date.UTC(y, mo - 1, d, h, mi, s);
}
function formatServerTime(epoch, forcedMs) {
    const d = new Date(epoch);
    const pad = n => String(n).padStart(2, '0');
    const ms = String(
        Number.isInteger(forcedMs) ? forcedMs : d.getUTCMilliseconds()
    ).padStart(3, '0');

    return `${pad(d.getUTCDate())}/${pad(d.getUTCMonth() + 1)}/${d.getUTCFullYear()}, ` +
           `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}.${ms}`;
}



   async function loadUnitSpeeds() {
        const xml = await $.get('/interface.php?func=get_unit_info');
        $(xml).find('config').children().each((_,u)=>{
            unitSpeeds[u.nodeName] = parseFloat($(u).find('speed').text());
        });
    }

    /* ================= SAVE / LOAD ================= */
    function saveSettings() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            targets: $('#tf-targets').val(),
            time: $('#tf-time').val(),
             ms: $('#tf-ms').val(),
            unit: selectedUnit
        }));
    }

    function loadSettings() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    }

    /* ================= UI ================= */
    function openUI() {
Dialog.show('Content', `
<style>
    .tf-panel {
        font-family: Arial, sans-serif;
        background: #1f2329;
        color: #e6e6e6;
        border-radius: 6px;
        width: 360px;
    }

    .tf-header {
        background: linear-gradient(#2b3038, #1f2329);
        padding: 10px 12px;
        font-weight: bold;
        font-size: 14px;
        text-align: center;
        border-bottom: 1px solid #111;
    }

    .tf-body {
        padding: 10px 12px;
    }

    .tf-group {
        margin-bottom: 10px;
    }

    .tf-group label {
        display: block;
        font-size: 11px;
        font-weight: bold;
        color: #bfc7d5;
        margin-bottom: 4px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .tf-input,
    .tf-textarea {
        width: 100%;
        box-sizing: border-box;
        padding: 6px 7px;
        font-size: 12px;
        background: #14181d;
        color: #fff;
        border: 1px solid #444;
        border-radius: 3px;
    }

    .tf-input:focus,
    .tf-textarea:focus {
        outline: none;
        border-color: #40d0e0;
        box-shadow: 0 0 0 1px rgba(64,208,224,.3);
    }

    .tf-textarea {
        resize: vertical;
        min-height: 90px;
        font-family: monospace;
    }

    .tf-units {
        display: flex;
        gap: 12px;
        font-size: 12px;
    }

    .tf-units label {
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
        font-weight: normal;
        color: #ddd;
        text-transform: none;
        letter-spacing: 0;
    }

    .tf-footer {
        padding: 10px 12px;
        border-top: 1px solid #111;
        text-align: center;
    }

    .tf-btn {
        background: linear-gradient(#4caf50, #3e8e41);
        border: 1px solid #2f6e31;
        color: #fff;
        font-weight: bold;
        padding: 6px 18px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 13px;
    }

    .tf-btn:disabled {
        background: #555;
        border-color: #333;
        cursor: not-allowed;
        opacity: 0.7;
    }

    .tf-hint {
        font-size: 11px;
        color: #9aa3b2;
        margin-top: 4px;
    }
</style>

<div class="tf-panel">
    <div class="tf-header">
        Mass Timed Fake Finder
    </div>

    <div class="tf-body">
        <div class="tf-group">
            <label>Target coordinates</label>
            <textarea id="tf-targets"
                class="tf-textarea"
                placeholder="427|525 428|526 441|508 …"></textarea>
            <div class="tf-hint">One or more coords, space or newline separated</div>
        </div>

        <div class="tf-group">
            <label>Server arrival time</label>
            <input id="tf-time"
                class="tf-input"
                placeholder="DD/MM/YYYY, HH:MM:SS">
            <div class="tf-hint">Server time (not local)</div>
        </div>

<div class="tf-group">
    <label>Milliseconds</label>
    <input id="tf-ms"
        class="tf-input"
        type="number"
        min="0"
        max="999"
        step="1"
        placeholder="000">
    <div class="tf-hint">0–999 ms (server)</div>
</div>

        <div class="tf-group">
            <label>Unit type</label>
            <div class="tf-units">
                <label>
                    <input type="radio" name="tf-unit" value="ram" checked>
                    Ram
                </label>
                <label>
                    <input type="radio" name="tf-unit" value="catapult">
                    Catapult
                </label>
            </div>
        </div>
    </div>

    <div class="tf-footer">
        <button id="tf-go" class="tf-btn" disabled>Go</button>
    </div>
</div>
`);



        /* defaults — SERVER TIME */
const serverNow = new Date(Timing.getCurrentServerTime());
$('#tf-time').val(serverNow.toLocaleString());
        $('#tf-ms').val('000');



        /* restore saved */
        const saved = loadSettings();
        if (saved.targets) $('#tf-targets').val(saved.targets);
        if (saved.time) $('#tf-time').val(saved.time);
        if (saved.ms !== undefined) $('#tf-ms').val(saved.ms);
        if (saved.unit) {
            selectedUnit = saved.unit;
            $(`input[name="tf-unit"][value="${saved.unit}"]`).prop('checked', true);
        }

        /* listeners */
        $('#tf-targets').on('input', saveSettings);
        $('#tf-time').on('change', saveSettings);
        $('#tf-ms').on('input', saveSettings);
        $('input[name="tf-unit"]').on('change', e=>{
            selectedUnit = e.target.value;
            saveSettings();
        });
    }

    /* ================= VILLAGES ================= */
    function collectVillages() {
        const rows=document.querySelectorAll('#combined_table tr');
        for(let i=1;i<rows.length;i++){
            const c=rows[i].children;
            const id=c[1].firstElementChild.dataset.id;
            const coord=c[1].innerText.match(/\d+\|\d+/)[0];
            const units={};
            for(let u=0;u<game_data.units.length;u++){
                units[game_data.units[u]]=parseInt(c[8+u].innerText,10);
            }
            villages.push({id,coord,units});
        }
    }

    /* ================= MATH ================= */
    const dist=(a,b)=>{
        const [x1,y1]=a.split('|').map(Number);
        const [x2,y2]=b.split('|').map(Number);
        return Math.hypot(x1-x2,y1-y2);
    };

    /* ================= CALCULATE ================= */
function calculate() {

    if (!unitSpeeds[selectedUnit] || !villages.length) return;

    // ✅ SERVER NOW (NOT LOCAL)
    const serverNow = Timing.getCurrentServerTime();

    // ✅ SERVER ARRIVAL TIME (USER INPUT)
    const baseArrival = parseServerTWDate($('#tf-time').val());
if (!baseArrival) {
    alert('Invalid SERVER arrival time');
    return;
}

const msRaw = $('#tf-ms').val();
const ms = Number.isInteger(+msRaw)
    ? Math.max(0, Math.min(999, +msRaw))
    : 0;

// 🔒 LOCK milliseconds to arrival


// ✅ FINAL SERVER ARRIVAL (with ms)
const arrivalTime = baseArrival + ms;


    const speedMs = unitSpeeds[selectedUnit] * MS_PER_MIN;
    results = [];

    for (const v of villages) {
        if ((v.units[selectedUnit] || 0) <= 0) continue;

        for (const t of $('#tf-targets').val().match(/\d+\|\d+/g)) {
            const d = dist(v.coord, t);

            // ✅ SERVER LAUNCH TIME
            const launch = arrivalTime - d * speedMs;

            // ✅ SERVER DELTA
            const delta = launch - serverNow;

            if (delta > 0) {
               results.push({
    v,
    t,
    d,
    launch,
    land: arrivalTime,
    delta,
    ms: ms   // ✅ single canonical field
});



            }
        }
    }

    results.sort((a, b) => a.launch - b.launch);
    showResults();
}





    /* ================= RESULTS ================= */
function showResults() {
    let html = `
    <style>
        .tf-wrap {
            max-height: 420px;
            overflow-y: auto;
            margin: 6px;
            border: 1px solid #3e4147;
        }

        .tf-table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
            font-size: 12px;
            color: #fff;
        }

        .tf-table th {
            position: sticky;
            top: 0;
            background: #202225;
            z-index: 2;
            padding: 6px 4px;
            border-bottom: 1px solid #555;
            text-align: center;
        }

        .tf-table td {
            padding: 5px 4px;
            text-align: center;
            border-bottom: 1px solid #2b2f36;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .tf-table tr:nth-child(even) {
            background: #32353b;
        }

        .tf-table tr:nth-child(odd) {
            background: #36393f;
        }

        .tf-table tr:hover {
            background: #3f434a;
        }

        .tf-src { width: 90px; }
        .tf-tgt { width: 90px; }
        .tf-dist { width: 55px; }
        .tf-launch { width: 80px; font-family: monospace; font-weight: bold; }
        .tf-local { width: 150px; font-size: 11px; }
        .tf-action { width: 55px; }

        .tf-link {
            cursor: pointer;
            color: #40D0E0;
            font-weight: bold;
        }
    </style>

    <div class="tf-wrap">
        <table class="tf-table">
            <thead>
                <tr>
                    <th class="tf-src">Source</th>
                    <th class="tf-tgt">Target</th>
                    <th class="tf-dist">Dist</th>
                    <th class="tf-launch">Launch in</th>
                    <th class="tf-local">Arrival time</th>
                    <th class="tf-action"></th>
                </tr>
            </thead>
            <tbody>
    `;

    results.forEach((r, i) => {
        html += `
        <tr id="tf-row-${i}">
            <td class="tf-src">${r.v.coord}</td>
            <td class="tf-tgt">${r.t}</td>
            <td class="tf-dist">${r.d.toFixed(2)}</td>
            <td class="tf-launch">
                <span class="tf-timer" data-time="${r.delta}"></span>
            </td>
            <td class="tf-local">${formatServerDate(r.land)}</td>
            <td class="tf-action">
                <span class="tf-link" onclick="openRally(${i})">Rally</span>
            </td>
        </tr>`;
    });

    html += `
            </tbody>
        </table>
    </div>`;

Dialog.show('Content', html);
    startTimers();
}


//Dialog.show('Content', html);


    function getLaunchSecond(index) {
    return Math.floor(results[index].launch / 1000);
}

    /* ================= TIMERS ================= */
   function startTimers(){
    setInterval(()=>{
        document.querySelectorAll('.tf-timer').forEach(el=>{
            let t = +el.dataset.time - 1000;
            el.dataset.time = t;

            const row = el.closest('tr');
            if (!row) return;

            const index = Number(row.id.replace('tf-row-',''));

       // === AUTO RALLY AT 15 SECONDS (MAX 2 PER SECOND) ===
if (t <= 15000 && t > 0 && !autoLaunched.has(index)) {

    const sec = getLaunchSecond(index);
    const used = secondCounter.get(sec) || 0;

    // 🚫 only first 2 attacks of the same second
    if (used >= 2) return;

    secondCounter.set(sec, used + 1);
    autoLaunched.add(index);

    setTimeout(() => {
        if (document.getElementById(`tf-row-${index}`)) {
            openRally(index);
        }
    }, rand(200, 600));
}


            if (t <= 0) {
                el.textContent = 'NOW';
                el.style.color = COLORS.danger;
                return;
            }

            const s = Math.floor(t / 1000) % 60;
            const m = Math.floor(t / 60000) % 60;
            const h = Math.floor(t / 3600000);

            el.textContent =
                `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

            el.style.color =
                t < 5 * 60000 ? COLORS.danger :
                t < 15 * 60000 ? COLORS.warn :
                COLORS.ok;
        });
    }, 1000);
}


    /* ================= RALLY AUTO FLOW ================= */
window.openRally = function (index) {
    const r = results[index];
    const [x, y] = r.t.split('|');

    // 🔥 HYBRID PRECISION TARGET (SERVER-BASED)
const targetSecond = formatServerTime(r.land)
    .split(', ')[1]      // "HH:MM:SS.mmm"
    .slice(0, 8);        // "HH:MM:SS"
const targetMs = r.ms ?? 0;

tfLog(
    'HYBRID TARGET SET',
    'targetSecond:', targetSecond,
    'targetMs:', targetMs
);


tfLog(
    'RALLY OPEN',
    'source:', r.v.coord,
    'target:', r.t,
    'launch(server):', new Date(r.launch).toISOString(),
    'now(server):', new Date(Timing.getCurrentServerTime()).toISOString(),
    'targetSecond:', targetSecond,
    'targetMs:', targetMs
);



    $.get('/game.php', {
        village: r.v.id,
        screen: 'api',
        ajax: 'target_selection',
        input: `${x}|${y}`,
        type: 'coord',
        limit: 1
    }).done(data => {
        const targetId = data?.villages?.[0]?.id;
        if (!targetId) return alert('Target not found');

        const win = window.open(
            `/game.php?village=${r.v.id}&screen=place&target=${targetId}`,
            '_blank'
        );
if (!win) {
    alert('Popup blocked! Please allow popups for this site.');
    return;
}

        document.getElementById(`tf-row-${index}`)?.remove();

        let attackClicked = false;
        let confirmDone = false;
        let lastHref = '';

        const poll = setInterval(() => {
            try {
                if (!win || win.closed) return clearInterval(poll);

                // detect real navigation
                if (win.location.href !== lastHref) {
                    lastHref = win.location.href;
                }

const doc = win.document;
if (!doc || !doc.body) return;

                /* STEP 1 — Fill unit + Attack */
                if (!attackClicked) {
                    const unitInput = doc.querySelector(`#unit_input_${selectedUnit}`);
                   const attackBtn =
    doc.querySelector('#target_attack') ||
    doc.querySelector('input.attack') ||
    doc.querySelector('.btn-attack');


                    if (!unitInput || !attackBtn) return;

                    unitInput.value = 1;
                    unitInput.dispatchEvent(new Event('input', { bubbles: true }));

                    setTimeout(() => attackBtn.click(), rand());
                    attackClicked = true;
                    return;
                }

                /* STEP 2 — WAIT for CONFIRM PAGE DOM */
                if (attackClicked && !confirmDone) {
                    // confirm page ALWAYS has a form posting to "confirm"
              const confirmBtn =
    doc.querySelector('#troop_confirm_submit') ||      // ✅ THIS PAGE
    doc.querySelector('.troop_confirm_go') ||          // class fallback
    doc.querySelector('#troop_confirm_go') ||          // older worlds
    doc.querySelector('input[name="submit_confirm"]'); // safest fallback

if (!confirmBtn) return;

// prevent double fire


// close ONLY after navigation starts
const closeOnUnload = () => {
    try { win.close(); } catch {}
};

// attach once
win.addEventListener('beforeunload', closeOnUnload, { once: true });

                    // === SHOW SERVER arrival time ON CONFIRM PAGE ===
(function showarrivalTime() {
    const table = doc.querySelector('#date_arrival')?.closest('table');
    if (!table || doc.getElementById('tf-arrivalTime-row')) return;

const landServer = formatServerTime(r.land, r.ms);

    const row = doc.createElement('tr');
    row.id = 'tf-arrivalTime-row';
    row.innerHTML = `
        <td><b>arrival time:</b></td>
        <td style="font-weight:bold;color:#008000;">
            ${landServer}
        </td>
    `;

    table.querySelector('tbody').appendChild(row);
})();

/* STEP 2 — HYBRID PRECISION CONFIRM (MULTI-TAB SAFE) */
if (attackClicked && !confirmDone) {

    const submitBtn = doc.querySelector('#troop_confirm_submit');
    const rel = doc.querySelector('.relative_time');
    if (!submitBtn || !rel) return;

    confirmDone = true;

    tfLog(
        'HYBRID MODE ARMED',
        'targetSecond:', targetSecond,
        'targetMs:', targetMs
    );

    let fired = false;

    const toSec = t => {
        const [h, m, s] = t.split(':').map(Number);
        return h * 3600 + m * 60 + s;
    };

    const targetSec = toSec(targetSecond);

    const watcher = setInterval(() => {
        try {
            const cur = rel.textContent?.slice(-8);
            if (!cur || fired) return;

            const curSec = toSec(cur);

            // 🔒 fire on exact second OR if tab woke up slightly late (≤2s)
            if (
                curSec === targetSec ||
                (curSec > targetSec && curSec - targetSec <= 2)
            ) {
                fired = true;
                clearInterval(watcher);

                const delay = curSec === targetSec ? targetMs : 0;

                setTimeout(() => {
                    tfLog(
                        'HYBRID CLICK FIRED',
                        'cur:', cur,
                        'target:', targetSecond,
                        'delay(ms):', delay,
                        'at(server):',
                        new Date(Timing.getCurrentServerTime()).toISOString()
                    );

                    submitBtn.click();

                    win.addEventListener(
                        'beforeunload',
                        () => {
                            setTimeout(() => {
                                try { win.close(); } catch {}
                            }, 200);
                        },
                        { once: true }
                    );
                }, delay);
            }
        } catch {}
    }, 5);

    return;
}






               }

            } catch {
                // cross-navigation moment, wait for next tick
            }
        }, 120);
    });
};



    /* ================= INIT ================= */
 (async function(){

    // ✅ ONLY show UI on overview villages page
    const isOverview =
        location.search.includes('screen=overview_villages') &&
        location.search.includes('mode=combined');

    if (isOverview) {
        openUI();
        await loadUnitSpeeds();
        collectVillages();
        $('#tf-go')
            .prop('disabled', false)
            .text('Go')
            .on('click', calculate);
    }

})();





