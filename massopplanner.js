(function () {
    'use strict';

    /* ================= CONFIG ================= */

    const UNIT_TEMPLATE = {
        noble: 'snob=1',
        nuke: 'axe=6000&light=300&ram=50',
        support: 'spear=2000&sword=2000'
    };

    /* ================= BOOT ================= */

    fetchUnitInfo().then(init);

    /* ================= UI ================= */

    function init(unitInfo) {
        const win = window.open('', '', 'width=560,height=780');

        win.document.body.innerHTML = `
        <style>
            body { background:#f4e4bc;font-family:Verdana;font-size:13px }
            textarea,input { width:100%;margin-bottom:6px }
            .btn { background:#603000;color:#fff;padding:8px;cursor:pointer }
            #results a { display:block;font-family:monospace;margin:4px 0 }
        </style>

        <label>Arrival Time</label>
        <input id="arrival" value="${now()}">

        <label>Targets</label>
        <textarea id="targets"></textarea>

        <label>Nobles</label>
        <textarea id="nobles"></textarea>

        <label>Nukes</label>
        <textarea id="nukes"></textarea>

        <label>Support</label>
        <textarea id="support"></textarea>

        <div class="btn" id="go">Get Plan</div>

        <h4>Results</h4>
        <div id="results"></div>
        `;

        const SPEED = {
            noble: Number(unitInfo.config.snob.speed),
            nuke: Number(unitInfo.config.ram.speed),
            support: Number(unitInfo.config.sword.speed)
        };

        win.document.getElementById('go').onclick = () =>
            build(win, SPEED);
    }

    /* ================= CORE LOGIC (INLINE HELPER) ================= */

    function build(win, SPEED) {
        const arrival = parseTime(win.document.getElementById('arrival').value);
        const targets = parseList(win.document.getElementById('targets').value);
        const out = win.document.getElementById('results');
        out.innerHTML = '';

        run('noble', win.document.getElementById('nobles').value);
        run('nuke', win.document.getElementById('nukes').value);
        run('support', win.document.getElementById('support').value);

        function run(type, sourcesRaw) {
            const sources = parseList(sourcesRaw);
            sources.forEach(from => {
                targets.forEach(to => {
                    const travel =
                        distance(from, to) * SPEED[type] * 60000;

                    const launch = arrival - travel;

                    const a = win.document.createElement('a');
                    a.href =
                        `/game.php?screen=place&village=${from}` +
                        `&target=${to}&${UNIT_TEMPLATE[type]}`;
                    a.target = '_blank';
                    a.textContent =
                        `[LAUNCH ${fmt(launch)}] ${type.toUpperCase()} ${from} → ${to}`;

                    out.appendChild(a);
                });
            });
        }
    }

    /* ================= MATH ================= */

    function distance(a, b) {
        const A = coord(a), B = coord(b);
        return Math.sqrt(
            Math.pow(A.x - B.x, 2) +
            Math.pow(A.y - B.y, 2)
        );
    }

    function coord(c) {
        const [x, y] = c.split('|').map(Number);
        return { x, y };
    }

    /* ================= PARSERS ================= */

    function parseList(txt) {
        return txt.trim().split(/\s+/).filter(Boolean);
    }

    function parseTime(t) {
        return new Date(t.replace(' ', 'T')).getTime();
    }

    function fmt(ms) {
        return new Date(ms).toTimeString().split(' ')[0];
    }

    function now() {
        return new Date().toISOString().replace('T', ' ').split('.')[0];
    }

    /* ================= UNIT INFO ================= */

    function fetchUnitInfo() {
        return fetch('/interface.php?func=get_unit_info')
            .then(r => r.text())
            .then(t => parseXML(t));
    }

    function parseXML(xml) {
        const doc = new DOMParser().parseFromString(xml, 'text/xml');
        const cfg = {};
        doc.querySelectorAll('config > *').forEach(n => {
            cfg[n.tagName] = {
                speed: Number(n.querySelector('speed')?.textContent || 0)
            };
        });
        return { config: cfg };
    }

})();
