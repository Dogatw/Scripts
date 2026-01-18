/*
 * Script Name: Mass Attack Planner (Send Link Edition)
 * Version: v1.1.9
 * Original Author: RedAlert
 * Modification: Send links added
 */

/* ---------------------------------------------------------------------------------- */

var scriptData = {
    name: 'Mass Attack Planner',
    version: 'v1.1.9',
    author: 'RedAlert',
    authorUrl: 'https://twscripts.dev/',
    helpLink:
        'https://forum.tribalwars.net/index.php?threads/mass-attack-planner.285331/',
};

if (typeof DEBUG !== 'boolean') DEBUG = false;

var LS_PREFIX = `ra_massAttackPlanner_`;
var TIME_INTERVAL = 60 * 60 * 1000 * 24 * 30;
var LAST_UPDATED_TIME = localStorage.getItem(`${LS_PREFIX}_last_updated`) ?? 0;

var unitInfo;

initDebug();

/* Fetch unit info */
(function () {
    if (LAST_UPDATED_TIME !== null) {
        if (Date.now() >= LAST_UPDATED_TIME + TIME_INTERVAL) {
            fetchUnitInfo();
        } else {
            unitInfo = JSON.parse(
                localStorage.getItem(`${LS_PREFIX}_unit_info`)
            );
            init(unitInfo);
        }
    } else {
        fetchUnitInfo();
    }
})();

function init(unitInfo) {
    let knightSpeed = 0;
    if (game_data.units.includes('knight')) {
        knightSpeed = unitInfo?.config['knight'].speed || 0;
    }

    const content = `
        <div class="ra-mb15">
            <label>Arrival Time</label>
            <input id="arrival_time" type="text" value="${getCurrentDateTime()}">
        </div>

        <input type="hidden" id="nobleSpeed" value="${unitInfo.config['snob'].speed}" />

        <div class="ra-flex">
            <div class="ra-flex-6">
                <label>Slowest Nuke</label>
                <select id="nuke_unit">
                    <option value="${unitInfo.config['axe'].speed}">Axe</option>
                    <option value="${unitInfo.config['light'].speed}">LC</option>
                    <option value="${unitInfo.config['heavy'].speed}">HC</option>
                    <option value="${unitInfo.config['ram'].speed}" selected>Ram/Cat</option>
                </select>
            </div>
            <div class="ra-flex-6">
                <label>Slowest Support</label>
                <select id="support_unit">
                    <option value="${unitInfo.config['spear'].speed}">Spear</option>
                    <option value="${unitInfo.config['sword'].speed}" selected>Sword</option>
                    <option value="${unitInfo.config['spy'].speed}">Spy</option>
                    <option value="${knightSpeed}">Paladin</option>
                </select>
            </div>
        </div>

        <label>Target Coords</label>
        <textarea id="target_coords"></textarea>

        <label>Noble Coords</label>
        <textarea id="nobel_coords"></textarea>

        <label>Nukes Coords</label>
        <textarea id="nuke_coords"></textarea>

        <label>Support Coords</label>
        <textarea id="support_coords"></textarea>

        <div class="ra-mb15">
            <a class="button" onclick="handleSubmit()">Get Plan</a>
        </div>

        <label>Results</label>
        <div id="results" style="
            background:#fff;
            border:1px solid #999;
            height:180px;
            overflow:auto;
            padding:5px;
            font-family:monospace;
            font-size:12px;
        "></div>
    `;

    const win = window.open('', '', 'width=520,height=720');
    win.document.write(prepareWindowContent(content));
}

/* ---------------- SEND LINK RENDERER ---------------- */

function renderSendLinks(lines) {
    const container = document.getElementById('results');
    container.innerHTML = '';

    lines.forEach(line => {
        const match = line.match(/(\d+\|\d+).*→.*(\d+\|\d+)/);
        if (!match) return;

        const from = match[1];
        const to = match[2];

        const link = document.createElement('a');
        link.href = `/game.php?screen=place&village=${from}&target=${to}`;
        link.target = '_blank';
        link.textContent = `SEND ${from} → ${to}`;
        link.style.display = 'block';

        container.appendChild(link);
    });
}

/* ---------------- WINDOW HTML ---------------- */

function prepareWindowContent(body) {
    return `
    <html>
    <head>
        <style>
            body { background:#f4e4bc; font-family:Verdana; font-size:13px }
            textarea, input, select { width:100%; margin-bottom:8px }
            .button { background:#603000;color:#fff;padding:8px;display:inline-block;cursor:pointer }
            .ra-flex { display:flex; gap:10px }
            .ra-flex-6 { flex:1 }
        </style>
    </head>
    <body>
        ${body}

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://twscripts.dev/scripts/attackPlannerHelper.js"></script>

        <script>
            const oldPrint = window.printResults;
            window.printResults = function(output) {
                const lines = output.split('\\n');
                renderSendLinks(lines);
                oldPrint && oldPrint(output);
            }
        </script>
    </body>
    </html>`;
}

/* ---------------- HELPERS ---------------- */

function getCurrentDateTime() {
    const d = new Date();
    return d.toISOString().replace('T', ' ').split('.')[0];
}

function fetchUnitInfo() {
    $.ajax({ url: '/interface.php?func=get_unit_info' }).done(res => {
        unitInfo = xml2json($(res));
        localStorage.setItem(`${LS_PREFIX}_unit_info`, JSON.stringify(unitInfo));
        localStorage.setItem(`${LS_PREFIX}_last_updated`, Date.now());
        init(unitInfo);
    });
}

function xml2json($xml) {
    const data = {};
    $xml.children().each(function () {
        const el = $(this);
        data[el.prop('tagName')] = el.children().length
            ? xml2json(el)
            : $.trim(el.text());
    });
    return data;
}

function initDebug() {
    console.debug(`[Mass Attack Planner] Loaded`);
}
