const TW = {
    state: {
        running: false,
        captcha: false
    }
};

window.TW = TW;

TW.Storage = {

    get(key, def = null) {
        try {
            const raw = localStorage.getItem(key);
            if (!raw) return def;

            const parsed = JSON.parse(raw);
            return parsed?.data ?? parsed;

        } catch {
            return def;
        }
    },

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    remove(key) {
        localStorage.removeItem(key);
    }

};

/* ================= CAPTCHA GUARD ================= */


function detectCaptcha(data) {
    try {
        const html =
            data?.response?.dialog ||
            data?.responseText ||
            JSON.stringify(data);

        if (!html) return false;

        return (
            html.includes('captcha') ||
            html.includes('Captcha') ||
            html.includes('verification') ||
            html.includes('g-recaptcha') ||
            html.includes('recaptcha')
        );
    } catch (e) {
        return false;
    }
}

function stopOnCaptcha(stage = '') {

    if (TW.state.captcha) return;

    // mark captcha
    TW.state.captcha = true;

    // HARD STOP ENGINE
    TW.state.running = false;

    if (TW.AttackEngine) {
        TW.AttackEngine._engineActive = false;
        TW.AttackEngine.minhas = [];
    }

    // stop auto resume
    TW.Storage.remove("TW_AUTO_RUNNING");
    // disable UI buttons
$('#startSend').prop('disabled', true);
$('#stopSend').prop('disabled', true);
$('#SubmitBtn').prop('disabled', true);


    console.error('🛑 CAPTCHA DETECTED', stage);

    alert(
        '🛑 CAPTCHA DETECTED\n\n' +
        'All sending stopped.\n' +
        'Solve captcha manually and reload page.\n\n' +
        (stage ? `Stage: ${stage}` : '')
    );

    throw new Error('CAPTCHA_DETECTED_STOP');
}


/* ================= DELAY UI (SAFE PATCH) ================= */

const TW_SESSION_SENT_KEY = 'tw_auto_session_sent';

const TW_DELAY_KEY = 'tw_attack_mass_ui_delays';

let uiDelays = JSON.parse(localStorage.getItem(TW_DELAY_KEY)) || {
    clickMin: 3,
    clickMax: 7,
    reloadMin: 100,
    reloadMax: 150
};

function rebuildDelays() {
    delayInMilliseconds = timeBetween(uiDelays.clickMin, uiDelays.clickMax);
    delayInsecond = timeBetween(uiDelays.reloadMin, uiDelays.reloadMax);
}


var delayInMilliseconds = timeBetween(
    uiDelays.clickMin,
    uiDelays.clickMax
);

var delayInsecond = timeBetween(
    uiDelays.reloadMin,
    uiDelays.reloadMax
);

TW.AttackEngine = {

    temArqueiro: false,
    temPaladino: false,
    minhas: [],
    parametro: [],

    start() {

    if (this._engineActive) {
        console.log("Engine already running — skipping duplicate start");
        return;
    }

    this._engineActive = true;

    this.temArqueiro = $.inArray('archer', game_data.units) > -1;
    this.temPaladino = $.inArray('knight', game_data.units) > -1;

    this.minhas = [];
    this.parametro = [];

    this.collectVillages();
    this.validateTargets();
    this.assignTargets();
    this.prepareCommands();

    console.log("Engine started");
},


    collectVillages() {
        const self = this;

        $('.quickedit-label').each(function(e) {
            let x = $(this).text().match(/(\d+)\|(\d+)/);

            self.minhas[e] = {
                c: x[0],
                x: x[1],
                y: x[2],
                id: $(this).parent().attr('href').match(/village=(\d+)/)[1]
            };
        });
    },

    validateTargets() {
        let alvos = TW.Storage.get("Alvos", []);

        if (!Array.isArray(alvos) || alvos.length === 0) {
            alert("No Targets Found");
            throw new Error("NO_TARGETS");
        }

        let naoAtacados = TW.Storage.get("Alvos_Nao_Atacados");

        if (!Array.isArray(naoAtacados) || naoAtacados.length === 0) {
            TW.Storage.set("Alvos_Nao_Atacados", alvos);
        }
    },

    // 🔽🔽🔽 ADD THIS METHOD EXACTLY HERE 🔽🔽🔽
randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
},

    assignTargets() {

        let alvos = TW.Storage.get("Alvos_Nao_Atacados", []);
        alvos = [...alvos];

        for (let minha of this.minhas) {

            let menor = Infinity;
            let escolhido = null;

            if (alvos.length < 1) {
                alvos = TW.Storage.get("Alvos", []);
            }

            for (let alvo of alvos) {

                if (!alvo.match(/(\d+)\&(\d+)\|(\d+)/))
                    continue;

                let alvoSplit = alvo.split("&")[1].match(/(\d+)\|(\d+)/);

                let alvoX = parseInt(alvoSplit[1]);
                let alvoY = parseInt(alvoSplit[2]);

                let d = Math.hypot(
                    alvoX - parseInt(minha.x),
                    alvoY - parseInt(minha.y)
                );

                if (d < menor) {
                    menor = d;
                    escolhido = alvo;
                }
            }

            if (!escolhido) continue;

            minha.alvoDessa = {
                id: escolhido.split("&")[0],
                c: escolhido.split("&")[1]
            };

            alvos.splice(alvos.indexOf(escolhido), 1);
        }

        TW.Storage.set("Alvos_Nao_Atacados", alvos);

        console.log("Targets assigned:", this.minhas);
    },

    prepareCommands() {

    const self = this;

    $('#combined_table tbody tr').eq(0).find('th').remove();
    $('tr[class^="nowrap"]').find('td').remove();


    let completed = 0;
let delayAccum = self.randomBetween(800, 1500);


    function apenasnumeros(string) {
        return parseInt(string.replace(/[^0-9]/g, ''));
    }

    for (let minha of self.minhas) {
         if (!minha.alvoDessa || !minha.alvoDessa.id) {
        completed++;
        continue;
    }
    delayAccum += self.randomBetween(600, 1400);
        setTimeout(() => {

            $.ajax({
                url: "/game.php?village=" + minha.id +
                     "&screen=place&ajax=command&target=" +
                     minha.alvoDessa.id +
                     "&client_time=" +
                     Math.round(Timing.getCurrentServerTime() / 1e3),

                type: "GET",
                dataType: "json",
                headers: { "TribalWars-Ajax": 1 },

                success: function(data) {
                        if (TW.state.captcha) return;

                    if (detectCaptcha(data))
                        stopOnCaptcha('prepare');

                    if (!data.error) {
                        let dialog = $(data.response.dialog);


                        let data_ = $(data.response.dialog);

                        if (!self.parametro[0]) {
                            self.parametro[0] =
                                jQuery('input:eq(0)', data_).attr('name');
                            self.parametro[1] =
                                jQuery('input:eq(0)', data_).val();
                        }

                        minha.lanceiros =
                            apenasnumeros(jQuery('#units_entry_all_spear', data_).text());
                        minha.espadachins =
                            apenasnumeros(jQuery('#units_entry_all_sword', data_).text());
                        minha.barbaros =
                            apenasnumeros(jQuery('#units_entry_all_axe', data_).text());

                        if (self.temArqueiro) {
                            minha.arqueiro =
                                apenasnumeros(jQuery('#units_entry_all_archer', data_).text());
                            minha.cavArqueiro =
                                apenasnumeros(jQuery('#units_entry_all_marcher', data_).text());
                        }

                        minha.exploradores =
                            apenasnumeros(jQuery('#units_entry_all_spy', data_).text());
                        minha.cavLeves =
                            apenasnumeros(jQuery('#units_entry_all_light', data_).text());
                        minha.cavPesadas =
                            apenasnumeros(jQuery('#units_entry_all_heavy', data_).text());
                        minha.arietes =
                            apenasnumeros(jQuery('#units_entry_all_ram', data_).text());
                        minha.catapultas =
                            apenasnumeros(jQuery('#units_entry_all_catapult', data_).text());

                        if (self.temPaladino) {
                            minha.paladino =
                                apenasnumeros(jQuery('#units_entry_all_knight', data_).text());
                        }

                        minha.nobre =
                            apenasnumeros(jQuery('#units_entry_all_snob', data_).text());
                    }

                    completed++;

if (completed >= self.minhas.length) {

    // 🔥 Remove villages that cannot send anything
    self.minhas = self.minhas.filter(minha => {

    function canSend(key, available) {
        const configured = Number(TW.Storage.get(key, 0));
        return configured > 0 && available > 0;
    }

    return (
        canSend('Tropas_Ataque_spear', minha.lanceiros) ||
        canSend('Tropas_Ataque_sword', minha.espadachins) ||
        canSend('Tropas_Ataque_axe', minha.barbaros) ||
        canSend('Tropas_Ataque_archer', minha.arqueiro) ||
        canSend('Tropas_Ataque_marcher', minha.cavArqueiro) ||
        canSend('Tropas_Ataque_spy', minha.exploradores) ||
        canSend('Tropas_Ataque_light', minha.cavLeves) ||
        canSend('Tropas_Ataque_heavy', minha.cavPesadas) ||
        canSend('Tropas_Ataque_ram', minha.arietes) ||
        canSend('Tropas_Ataque_catapult', minha.catapultas) ||
        canSend('Tropas_Ataque_knight', minha.paladino) ||
        canSend('Tropas_Ataque_snob', minha.nobre)
    );
});

console.log("Prepare stage complete. Valid villages:", self.minhas.length);

self.confirmCommands();

}



                },

                error: function() {
                    if (TW.state.captcha) return;
                    window.location.reload(true);
                }
            });

        }, delayAccum);


    }
},

randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
},

    confirmCommands() {

    const self = this;

    console.log("Starting confirm stage");

    let header = [
        '<th> My Village </th>',
        '<th> Target Village </th>',
        '<th> Duration </th>',
        '<th id="Submit"> Submit </th>'
    ];

    $('#combined_table tbody tr').eq(0).append(header.join(""));

    let completed = 0;
let delayAccum = self.randomBetween(800, 1500);

    function getSendAmount(key, available) {
        let configured = Number(TW.Storage.get(key, 0));
        if (isNaN(configured)) configured = 0;
        return Math.max(0, Math.min(configured, available));
    }

    for (let i = 0; i < self.minhas.length; i++) {

        let minha = self.minhas[i];
        // 🔥 GUARD
    if (!minha.alvoDessa || !minha.alvoDessa.c) {
        completed++;
        continue;
    }

        let _Data = {};

        _Data[self.parametro[0]] = self.parametro[1];
        _Data.template_id = "";
        _Data.source_village = minha.id;

        _Data.spear = getSendAmount('Tropas_Ataque_spear', minha.lanceiros);
        _Data.sword = getSendAmount('Tropas_Ataque_sword', minha.espadachins);
        _Data.axe   = getSendAmount('Tropas_Ataque_axe', minha.barbaros);

        if (self.temArqueiro) {
            _Data.archer  = getSendAmount('Tropas_Ataque_archer', minha.arqueiro);
            _Data.marcher = getSendAmount('Tropas_Ataque_marcher', minha.cavArqueiro);
        }

        _Data.spy      = getSendAmount('Tropas_Ataque_spy', minha.exploradores);
        _Data.light    = getSendAmount('Tropas_Ataque_light', minha.cavLeves);
        _Data.heavy    = getSendAmount('Tropas_Ataque_heavy', minha.cavPesadas);
        _Data.ram      = getSendAmount('Tropas_Ataque_ram', minha.arietes);
        _Data.catapult = getSendAmount('Tropas_Ataque_catapult', minha.catapultas);

        if (self.temPaladino) {
            _Data.knight = getSendAmount('Tropas_Ataque_knight', minha.paladino);
        }

        _Data.snob = getSendAmount('Tropas_Ataque_snob', minha.nobre);

        _Data.x = minha.alvoDessa.c.split("|")[0];
        _Data.y = minha.alvoDessa.c.split("|")[1];
        _Data.input = "";
        _Data.attack = "l";
delayAccum += self.randomBetween(600, 1400);
        setTimeout(() => {

            $.ajax({
                url: "/game.php?village=" + minha.id +
                     "&screen=place&ajax=confirm&h=" +
                     csrf_token +
                     "&client_time=" +
                     Math.round(Timing.getCurrentServerTime() / 1e3),

                data: _Data,
                type: "POST",
                dataType: "json",
                headers: { "TribalWars-Ajax": 1 },

                success: function(data) {
                        if (TW.state.captcha) return;

                    if (detectCaptcha(data))
                        stopOnCaptcha('confirm');

                    if (!data.error) {
                        let dialog = $(data.response.dialog);

                        let tempo = jQuery(
                            'table.vis:eq(0) tr:eq(3) td:eq(1)',
                            data.response.dialog
                        ).text();

                        let row = [
                            '<td style="text-align:center">',
                            minha.c,
                            '</td>',
                            '<td style="text-align:center">',
                            minha.alvoDessa.c,
                            '</td>',
                            '<td style="text-align:center">',
                            tempo,
                            '</td>',
                            '<td class="status" style="text-align:center">LOADING...</td>'
                        ];

                        $('tr[class^="nowrap"]').eq(i).append(row.join(""));
                        let statusCell = $('tr[class^="nowrap"]').eq(i).find('.status');
minha._statusCell = statusCell;


let serializedData = dialog.find("input, select").serialize();

if (serializedData && serializedData.length > 0) {

    minha.serialized = serializedData;

    if (minha._statusCell) {
        minha._statusCell
            .text("READY")
            .css("color", "#888");
    }

} else {

    if (minha._statusCell) {
        minha._statusCell
            .text("FAILED ❌")
            .css("color", "red");
    }
}

                    }

                    completed++;

if (completed >= self.minhas.length) {

    console.log("Confirm stage complete");

    // 🔥 AUTO SEND AFTER SMALL HUMAN DELAY
    setTimeout(() => {

        if (TW.state.captcha) return;

        console.log("Starting SEND stage");

        // 🔥 Hard safety filter (final guard)
self.minhas = self.minhas.filter(m => m && m.serialized);

        let finished = 0;
        let total = self.minhas.length;

        let delayAccum = self.randomBetween(800, 1500);


        for (let minha of self.minhas) {
                delayAccum += self.randomBetween(600, 1400);

            setTimeout(() => {

                if (TW.state.captcha) return;

                if (!minha.serialized) {
                    finished++;
                    return;
                }

                if (minha._statusCell) {
                    minha._statusCell
                        .text("SENDING...")
                        .css("color", "#5555ff");
                }

                $.ajax({
                    url:
                        "/game.php?village=" + minha.id +
                        "&screen=place&ajaxaction=popup_command" +
                        "&h=" + csrf_token +
                        "&client_time=" +
                        Math.round(Timing.getCurrentServerTime() / 1e3),

                    type: "POST",
                    data: minha.serialized,
                    dataType: "json",
                    headers: { "TribalWars-Ajax": 1 },

                    success: function(data) {

                        if (TW.state.captcha) return;

                        if (detectCaptcha(data)) {
                            if (minha._statusCell) {
                                minha._statusCell
                                    .text("CAPTCHA ❗")
                                    .css("color", "orange");
                            }
                            stopOnCaptcha('send');
                            return;
                        }

                        if (!data.error) {

                            if (minha._statusCell) {
                                minha._statusCell
                                    .text("SENT ✓")
                                    .css("color", "#00aa00");
                            }
                            let currentTotal = Number(sessionStorage.getItem(TW_SESSION_SENT_KEY)) || 0;
currentTotal++;
sessionStorage.setItem(TW_SESSION_SENT_KEY, currentTotal);

if ($('#autoTotalSent').length) {
    $('#autoTotalSent').text(currentTotal);
}



                        } else {

                            if (minha._statusCell) {
                                minha._statusCell
                                    .text("ERROR ❌")
                                    .css("color", "red");
                            }
                        }

                        finished++;

                        // 🔥 ALL SENT → RELOAD
                        if (finished >= total) {

                            console.log("All attacks finished. Reloading...");

                            setTimeout(() => {
                                if (!TW.state.captcha) {
                                    location.reload();
                                }
                            }, delayInsecond);
                        }
                    }
                });

            }, delayAccum);
        }

    }, self.randomBetween(800, 1500));
}



                },

                error: function() {
                    if (TW.state.captcha) return;
                    window.location.reload(true);
                }
            });

        }, delayAccum);


    }
},


};




function send() {

    if (TW.state.running && TW.AttackEngine.minhas.length > 0) {
        console.warn("Engine already running. Abort duplicate start.");
        return;
    }

    try {
        TW.state.running = true;
        TW.AttackEngine.start();
        console.log("Send initiated");
    } catch (e) {
        console.warn("Send aborted:", e.message);
    }
}



/* ================= CONFIG START ================= */

(function config() {
'use strict';

// ===== LOAD MAP DATA FIRST =====
    function loadMapData(callback) {

        if (window.coordsToId) {
            callback();
            return;
        }

        console.log("Loading map data...");

        $.get(location.origin + '/map/village.txt').done((data) => {

            window.coordsToId = {};

            data.split('\n').forEach((line) => {
                let parts = line.split(',');
                if (parts.length < 4) return;

                let id = parts[0];
                let x = parts[2];
                let y = parts[3];

                window.coordsToId[`${x}|${y}`] = id + "&" + x + "|" + y;
            });

            console.log("Map loaded.");
            callback();

        }).fail(() => {
            alert("Failed to load map data.");
        });
    }

    // ===== NORMALIZE FUNCTION =====
    function normalizeCoords(input) {

        if (!input) return [];

        let matches = input.match(/\d+&\d+\|\d+|\d+\|\d+/g);
        if (!matches) return [];

        let seen = new Set();
        let result = [];

        for (let entry of matches) {

            if (seen.has(entry)) continue;
            seen.add(entry);

            if (entry.includes("&")) {
                result.push(entry);
            }
           else if (window.coordsToId && window.coordsToId[entry]) {

                result.push(window.coordsToId[entry]);
            }
            else {
                console.warn("Coord not found:", entry);
            }
        }

        return result;
    }



const unitKeys = [
'spear','sword','axe','archer','spy','light',
'marcher','heavy','ram','catapult','knight','snob'
];


   function buildUI() {

let html = [
'<div id="conf">',
'<fieldset id="head">Attack & Defense Configuration</fieldset>',

'<table><tr>',

'<td>',
'<fieldset style="width:380px">',
'<legend>Attack Coordinates</legend>',
'<textarea style="width:380px" id="coords_ataque"></textarea>',
'</fieldset>',
'</td>',

'<td style="width:40px;"></td>',

'<td>',
'<fieldset style="width:380px">',
'<legend>Defense Coordinates</legend>',
'<textarea style="width:380px" id="coords_defesa"></textarea>',
'</fieldset>',
'</td>',

'</tr></table>',

'<table><tbody><tr>',

'<td>',
'<fieldset>',
'<legend>Attack Units</legend>',
'<label><input id="spear_a" value="0"> Spearman</label><br/>',
'<label><input id="sword_a" value="0"> Swordsman</label><br/>',
'<label><input id="axe_a" value="0"> Axeman</label><br/>',
'<label><input id="archer_a" value="0"> Archer</label><br/>',
'<label><input id="spy_a" value="0"> Scout</label><br/>',
'<label><input id="light_a" value="0"> Light Cavalry</label><br/>',
'<label><input id="marcher_a" value="0"> Mounted Archer</label><br/>',
'<label><input id="heavy_a" value="0"> Heavy Cavalry</label><br/>',
'<label><input id="ram_a" value="0"> Ram</label><br/>',
'<label><input id="catapult_a" value="0"> Catapult</label><br/>',
'<label><input id="knight_a" value="0"> Paladin</label><br/>',
'<label><input id="snob_a" value="0"> Noble</label><br/>',
'</fieldset>',
'</td>',

'<td style="width:120px;"></td>',

'<td>',
'<fieldset>',
'<legend>Defense Units</legend>',
'<label><input id="spear_d" value="0"> Spearman</label><br/>',
'<label><input id="sword_d" value="0"> Swordsman</label><br/>',
'<label><input id="axe_d" value="0"> Axeman</label><br/>',
'<label><input id="archer_d" value="0"> Archer</label><br/>',
'<label><input id="spy_d" value="0"> Scout</label><br/>',
'<label><input id="light_d" value="0"> Light Cavalry</label><br/>',
'<label><input id="marcher_d" value="0"> Mounted Archer</label><br/>',
'<label><input id="heavy_d" value="0"> Heavy Cavalry</label><br/>',
'<label><input id="ram_d" value="0"> Ram</label><br/>',
'<label><input id="catapult_d" value="0"> Catapult</label><br/>',
'<label><input id="knight_d" value="0"> Paladin</label><br/>',
'<label><input id="snob_d" value="0"> Noble</label><br/>',
'</fieldset>',
'</td>',

'</tr></tbody></table>',
'<fieldset style="margin-top:10px">',
'<legend>⏱ Delays</legend>',
'Click (sec)<br>',
'<input id="cmin" value="' + uiDelays.clickMin + '" size="3"> - ',
'<input id="cmax" value="' + uiDelays.clickMax + '" size="3"><br><br>',
'Reload (sec)<br>',
'<input id="rmin" value="' + uiDelays.reloadMin + '" size="3"> - ',
'<input id="rmax" value="' + uiDelays.reloadMax + '" size="3"><br><br>',
'<button id="saveDelays" class="btn">Save Delays</button>',
'</fieldset>',

'<fieldset style="margin-top:10px;text-align:center">',
'<input type="button" value="Save Configuration" id="save" class="btn">',
'<input type="button" value="Reset Configuration" class="btn" id="reset">',
'<input type="button" value="Send Now" class="btn" id="startSend">',

'</fieldset>',


'</div>'
];

    $("#content_value").prepend(html.join(""));
   $('#coords_ataque').attr('placeholder', 'Paste coordinates or IDs here');
$('#coords_defesa').attr('placeholder', 'Paste coordinates or IDs here');
let alvos = TW.Storage.get('Alvos', []);
let apoio = TW.Storage.get('Alvos_Apoio', []);

if (!Array.isArray(alvos)) alvos = [];
if (!Array.isArray(apoio)) apoio = [];

$('#coords_ataque').val(alvos.join(','));
$('#coords_defesa').val(apoio.join(','));


    unitKeys.forEach(unit => {
    $('#'+unit+'_a').val(
        TW.Storage.get('Tropas_Ataque_' + unit, 0)
    );

    $('#'+unit+'_d').val(
        TW.Storage.get('Tropas_Defesa_' + unit, 0)
    );
});

    $('#reset').click(function (e) {
        e.preventDefault();
        $('#coords_ataque').val('');
TW.Storage.set('Alvos', []);
TW.Storage.set("Alvos_Nao_Atacados", '');

$('#coords_defesa').val('');
TW.Storage.set('Alvos_Apoio', []);
TW.Storage.set("Alvos_Nao_Apoiados", '');

        unitKeys.forEach(unit => {
    $('#'+unit+'_a').val(0);
    $('#'+unit+'_d').val(0);

    TW.Storage.set('Tropas_Ataque_' + unit, 0);
    TW.Storage.set('Tropas_Defesa_' + unit, 0);
});

        alert('Configuration Reset');
    });

      $('#save').click(function (e) {
        e.preventDefault();
        let ataqueRaw = $('#coords_ataque').val();
let ataque = normalizeCoords(ataqueRaw);

TW.Storage.set('Alvos', ataque);
$('#coords_ataque').val(ataque.join(','));

        TW.Storage.set("Alvos_Nao_Atacados", '');
        let defesaRaw = $('#coords_defesa').val();
let defesa = normalizeCoords(defesaRaw);

TW.Storage.set('Alvos_Apoio', defesa);
$('#coords_defesa').val(defesa.join(','));

        TW.Storage.set("Alvos_Nao_Apoiados", '');

        unitKeys.forEach(unit => {
    TW.Storage.set('Tropas_Ataque_' + unit,
        Number($('#'+unit+'_a').val()) || 0
    );

    TW.Storage.set('Tropas_Defesa_' + unit,
        Number($('#'+unit+'_d').val()) || 0
    );
});


        alert('Configuration Saved');
       });   // end save click

       $('#startSend').click(function () {
           sessionStorage.setItem(TW_SESSION_SENT_KEY, 0);

    let alvos = TW.Storage.get("Alvos", []);
    if (!Array.isArray(alvos) || alvos.length === 0) {
        alert("No Targets Found");
        return;
    }

    let hasTroops = unitKeys.some(unit =>
        Number(TW.Storage.get('Tropas_Ataque_' + unit, 0)) > 0
    );

    if (!hasTroops) {
        alert("No troops configured.");
        return;
    }

    // everything valid → start mass attack
    TW.state.running = true;
TW.Storage.set("TW_AUTO_RUNNING", 1);

send();

});

      // SAVE DELAYS (independent)
$('#saveDelays').click(function () {

    uiDelays = {
        clickMin: +$('#cmin').val(),
        clickMax: +$('#cmax').val(),
        reloadMin: +$('#rmin').val(),
        reloadMax: +$('#rmax').val()
    };

    localStorage.setItem(TW_DELAY_KEY, JSON.stringify(uiDelays));

    rebuildDelays();

    alert('Delays saved ✓');
});



}        // end buildUI

                       loadMapData(function () {

    const autoActive = TW.Storage.get("TW_AUTO_RUNNING", 0) === 1;

    buildUI();

    if (autoActive) {

        console.log("Auto resume UI mode");

        // Hide full config
        $('#conf').hide();

        // Show AUTO panel
        let totalSent = Number(sessionStorage.getItem(TW_SESSION_SENT_KEY)) || 0;

$('#content_value').prepend(
    '<div id="autoOnlyBox" style="padding:15px;background:#1e1e1e;border-radius:6px;text-align:center;margin-bottom:10px;">' +
    '<b style="color:#ffaa00;font-size:14px;">AUTO MODE ACTIVE</b><br><br>' +

    '<div style="margin-bottom:10px;font-size:13px;">' +
    'Total Sent: <span id="autoTotalSent">' + totalSent + '</span>' +
    '</div>' +

    '<input type="button" value="Stop Auto" class="btn" id="autoStopOnly">' +
    '</div>'
);


        $('#autoStopOnly').click(function () {

            TW.state.running = false;
            TW.Storage.remove("TW_AUTO_RUNNING");
            sessionStorage.removeItem(TW_SESSION_SENT_KEY);

            $('#autoOnlyBox').remove();
            $('#conf').show();

            alert("Auto sending stopped.");
        });

        // 🔥 ACTUALLY RESUME ENGINE
        setTimeout(send, delayInMilliseconds);
    }

});



})();



/* ================= CONFIG END ================= */

function clicks() {
    if (TW.state.captcha) return;


    console.log("clicked");
    var event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });

    const btn = document.querySelector('input#Submit.btn');
    if (btn) btn.dispatchEvent(event);
}


    function timeBetween(inferior, superior) {
    var numPossibilities = (superior * 1000) - (inferior * 1000);
    var aleat = Math.random() * numPossibilities;
    return Math.round(parseInt(inferior * 1000) + aleat);
}
