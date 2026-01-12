//2.6
(function () {
    'use strict';

    /* ================= CONFIG ================= */
    const STORAGE_KEY = 'tw_timed_fake_settings';
    const MS_PER_MIN = 60000;
    const rand = (min = 100, max = 400) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    /* ================= STATE ================= */
    let coordListOwn = [];
    let timedFakeList = [];
    let ramSpeedMs = 0;
    let autoConfirm = false;

    /* ================= UNIT SPEED (IDENTICAL) ================= */
    function getUnitSpeeds() {
        $.get('/interface.php?func=get_unit_info').done(xml => {
            const ramSpeed = $(xml).find('ram speed').text();
            ramSpeedMs = ramSpeed * 60 * 1000; // ❗ IDENTICAL
        });
    }

    /* ================= STORAGE ================= */
    function saveSettings() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            targets: $('#tf-targets').val(),
            time: $('#tf-time').val(),
            auto: $('#tf-auto').prop('checked')
        }));
    }

    function loadSettings() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    }

    /* ================= UI (PERMANENT & SAFE) ================= */
    function openUI(defaultDate) {
        Dialog.show('Content', `
        <style>
            .tf-box{font-family:Arial;background:#2b2f36;color:#fff}
            .tf-title{background:#202225;padding:8px;text-align:center;font-weight:bold}
            .tf-row{padding:6px}
            textarea,input{width:100%;background:#1c1f24;color:#fff;border:1px solid #555;padding:5px}
            .tf-btn{text-align:center;padding:8px}
        </style>

        <div class="tf-box">
            <div class="tf-title">Mass Timed Fake Finder</div>

            <div class="tf-row">
                Targets
                <textarea id="tf-targets" rows="4"></textarea>
            </div>

            <div class="tf-row">
                Hit time
                <input id="tf-time">
            </div>

            <div class="tf-row">
                <label>
                    <input type="checkbox" id="tf-auto">
                    Auto confirm attack
                </label>
            </div>

            <div class="tf-btn">
                <button id="tf-go" class="btn btn-confirm-yes">Go</button>
            </div>
        </div>`);

        const saved = loadSettings();
        $('#tf-targets').val(saved.targets || '');
        $('#tf-time').val(saved.time || defaultDate);
        $('#tf-auto').prop('checked', !!saved.auto);

        $('#tf-targets,#tf-time,#tf-auto').on('input change', saveSettings);
        $('#tf-go').on('click', calculateTimedAttacks);
    }

    /* ================= DATA ================= */
    function grabVillageData() {
        coordListOwn = [];
        $('#combined_table tr:gt(0)').each(function () {
            const c = this.children;
            const units = {};
            game_data.units.forEach((u, i) => {
                units[u] = +c[8 + i].innerText;
            });
            coordListOwn.push({
                ID: c[1].firstElementChild.dataset.id,
                Coord: c[1].innerText.match(/\d+\|\d+/)[0],
                Units: units
            });
        });
    }

    const dist = (a, b) => {
        const [x1, y1] = a.split('|').map(Number);
        const [x2, y2] = b.split('|').map(Number);
        return Math.hypot(x1 - x2, y1 - y2);
    };

    /* ================= CALCULATION (IDENTICAL) ================= */
    function calculateTimedAttacks() {
        timedFakeList = [];
        grabVillageData();

        const targets = $('#tf-targets').val().match(/\d+\|\d+/g);
        if (!targets) return alert('No targets');

        const landTime = new Date($('#tf-time').val()).getTime();

        const st = $('#serverDate').text() + ' ' + $('#serverTime').text();
        const m = st.match(/(\d+)\/(\d+)\/(\d+)\s+(.*)/);
        const serverDate = Date.parse(`${m[2]}/${m[1]}/${m[3]} ${m[4]}`);

        coordListOwn.forEach(v => {
            if (!v.Units.ram && !v.Units.catapult) return;
            targets.forEach(t => {
                const launch = landTime - dist(v.Coord, t) * ramSpeedMs;
                const delta = launch - serverDate;
                if (delta > 0) timedFakeList.push({ v, t });
            });
        });

        showResults();
    }

    /* ================= RESULTS ================= */
    function showResults() {
        Dialog.show('Content', `
        <table width="100%">
            ${timedFakeList.map((r, i) =>
                `<tr>
                    <td>${r.v.Coord}</td>
                    <td>${r.t}</td>
                    <td style="cursor:pointer;color:#40D0E0"
                        onclick="openRally(${i})">Rally</td>
                </tr>`
            ).join('')}
        </table>`);
    }

    /* ================= RALLY FLOW ================= */
    window.openRally = function (i) {
        const r = timedFakeList[i];
        const [x, y] = r.t.split('|');
        autoConfirm = $('#tf-auto').prop('checked');

        $.get('/game.php', {
            village: r.v.ID,
            screen: 'api',
            ajax: 'target_selection',
            input: `${x}|${y}`,
            type: 'coord',
            limit: 1
        }).done(d => {
            const tid = d.villages[0].id;
            const win = window.open(
                `/game.php?village=${r.v.ID}&screen=place&target=${tid}`
            );

            const poll = setInterval(() => {
                try {
                    if (!win || win.closed) return clearInterval(poll);
                    const doc = win.document;

                    const unit = doc.querySelector('#unit_input_ram');
                    const attack = doc.querySelector('#target_attack');
                    const confirm = doc.querySelector('#troop_confirm_submit');

                    if (unit && attack && !confirm) {
                        unit.value = 1;
                        attack.click();
                    }

                    if (confirm && autoConfirm && !confirm.disabled) {
                        win.addEventListener('beforeunload', () => win.close(), { once: true });
                        confirm.click();
                        clearInterval(poll);
                    }
                } catch {}
            }, 150);
        });
    };

    /* ================= INIT ================= */
    (function init() {
        getUnitSpeeds();

        const d = new Date();
        d.setTime(((Math.floor(d.getTime() / (24 * 60 * 60 * 1000)) + 1) * 1440 + d.getTimezoneOffset()) * 60000);
        const defaultDate = d.toString().replace(/\w+\s*/i, '').replace(/(\d+:\d+:\d+).*/, '$1');

        openUI(defaultDate);
    })();

})();
