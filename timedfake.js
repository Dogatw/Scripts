//V2.5
(function () {
    'use strict';

    const STORAGE_KEY = 'tw_timed_fake_settings';
    const MS_PER_MIN = 60000;
    const rand = (min = 100, max = 400) =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    let unitSpeeds = {};
    let selectedUnit = 'ram';
    let villages = [];
    let results = [];

    /* ---------- LOAD UNIT SPEEDS ---------- */
    async function loadUnitSpeeds() {
        const xml = await $.get('/interface.php?func=get_unit_info');
        $(xml).find('config').children().each((_, u) => {
            unitSpeeds[u.nodeName] = parseFloat($(u).find('speed').text());
        });
    }

    /* ---------- STORAGE ---------- */
    function saveSettings() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            targets: $('#tf-targets').val(),
            time: $('#tf-time').val(),
            unit: selectedUnit
        }));
    }

    function loadSettings() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    }

    /* ---------- UI ---------- */
    function openUI() {
        Dialog.show('Content', `
        <style>
            .tf-box{font-family:Arial}
            .tf-title{background:#1f2226;color:#fff;padding:8px;text-align:center;font-weight:bold}
            .tf-section{background:#2b2f36;color:#fff;padding:8px}
            .tf-input,.tf-textarea{width:100%;background:#1c1f24;color:#fff;border:1px solid #555;padding:6px}
            .tf-actions{text-align:center;background:#202225;padding:8px}
        </style>

        <div class="tf-box">
            <div class="tf-title">Mass Timed Fake Finder</div>

            <div class="tf-section">
                <label>Target coordinates</label>
                <textarea id="tf-targets" class="tf-textarea" rows="4"></textarea>
            </div>

            <div class="tf-section">
                <label>Hit time</label>
                <input id="tf-time" class="tf-input">
            </div>

            <div class="tf-section">
                <label><input type="radio" name="tf-unit" value="ram" checked> Ram</label>
                <label><input type="radio" name="tf-unit" value="catapult"> Catapult</label>
            </div>

            <div class="tf-actions">
                <button id="tf-go" class="btn btn-confirm-yes" disabled>Loading…</button>
            </div>
        </div>`);

        const d = new Date();
        d.setHours(24, 0, 0, 0);
        $('#tf-time').val(d.toLocaleString());

        const saved = loadSettings();
        if (saved.targets) $('#tf-targets').val(saved.targets);
        if (saved.time) $('#tf-time').val(saved.time);
        if (saved.unit) {
            selectedUnit = saved.unit;
            $(`input[value="${saved.unit}"]`).prop('checked', true);
        }

        $('#tf-targets,#tf-time').on('input change', saveSettings);
        $('input[name="tf-unit"]').on('change', e => {
            selectedUnit = e.target.value;
            saveSettings();
        });
    }

    /* ---------- DATA ---------- */
    function collectVillages() {
        $('#combined_table tr:gt(0)').each(function () {
            const c = this.children;
            villages.push({
                id: c[1].firstElementChild.dataset.id,
                coord: c[1].innerText.match(/\d+\|\d+/)[0],
                units: Object.fromEntries(game_data.units.map((u, i) => [u, +c[8 + i].innerText]))
            });
        });
    }

    const dist = (a, b) => {
        const [x1, y1] = a.split('|').map(Number);
        const [x2, y2] = b.split('|').map(Number);
        return Math.hypot(x1 - x2, y1 - y2);
    };

    function calculate() {
        results = [];
        const targets = $('#tf-targets').val().match(/\d+\|\d+/g);
        if (!targets) return alert('No targets');

        const landTime = new Date($('#tf-time').val()).getTime();
        const speedMs = unitSpeeds[selectedUnit] * MS_PER_MIN;
        const serverTime = Date.parse($('#serverDate').text().replace(/(\d+)\/(\d+)\/(\d+)/, '$2/$1/$3') + ' ' + $('#serverTime').text());

        villages.forEach(v => {
            if (!v.units[selectedUnit]) return;
            targets.forEach(t => {
                const launch = landTime - dist(v.coord, t) * speedMs;
                const delta = launch - serverTime;
                if (delta > 0) results.push({ v, t });
            });
        });

        showResults();
    }

    function showResults() {
        Dialog.show('Content', `
        <table width="100%">
            ${results.map((r, i) =>
                `<tr>
                    <td>${r.v.coord}</td>
                    <td>${r.t}</td>
                    <td><a onclick="openRally(${i})" style="cursor:pointer;color:#40D0E0">Rally</a></td>
                </tr>`
            ).join('')}
        </table>`);
    }

    /* ---------- RALLY FLOW ---------- */
    window.openRally = function (i) {
        const r = results[i];
        const [x, y] = r.t.split('|');

        $.get('/game.php', {
            village: r.v.id,
            screen: 'api',
            ajax: 'target_selection',
            input: `${x}|${y}`,
            type: 'coord',
            limit: 1
        }).done(d => {
            const tid = d?.villages?.[0]?.id;
            if (!tid) return;

            const win = window.open(`/game.php?village=${r.v.id}&screen=place&target=${tid}`);

            const poll = setInterval(() => {
                try {
                    if (!win || win.closed) return clearInterval(poll);
                    const doc = win.document;

                    const unit = doc.querySelector(`#unit_input_${selectedUnit}`);
                    const attack = doc.querySelector('#target_attack');
                    const confirm = doc.querySelector('#troop_confirm_submit');

                    if (unit && attack && !confirm) {
                        unit.value = 1;
                        attack.click();
                    }

                    if (confirm) {
                        win.addEventListener('beforeunload', () => win.close(), { once: true });
                        confirm.click();
                        clearInterval(poll);
                    }
                } catch {}
            }, 150);
        });
    };

    /* ---------- INIT ---------- */
    (async function () {
        openUI();
        await loadUnitSpeeds();
        collectVillages();
        $('#tf-go').prop('disabled', false).text('Go').on('click', calculate);
    })();

})();
