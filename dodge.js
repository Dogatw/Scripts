const params = new URLSearchParams(window.location.search);
const screen = params.get("screen");
const mode = params.get("mode");

// Allow only specific screens
if (
    !(screen === "overview_villages" && mode === "incomings") &&
    screen !== "place" &&
    screen !== "info_command"
) {
    return; // Stop script completely
}


(async function initSupabase() {
    if (window.__supabaseReady) return;
    window.__supabaseReady = false;

    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
    document.head.appendChild(s);

    await new Promise((resolve, reject) => {
        s.onload = resolve;
        s.onerror = reject;
    });

    const SUPABASE_URL = "https://xjrgjnsxahfxlseakknl.supabase.co";
    const SUPABASE_ANON_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqcmdqbnN4YWhmeGxzZWFra25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTc5MDgsImV4cCI6MjA4MzczMzkwOH0.ZmqvQkg1baYpkYXhYCj59Drphdy2iq50tY3JoIR_6c4";

    window.sb = supabase.createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY
    );

    window.__supabaseReady = true;
    console.log("✅ Supabase initialized");
})();

// ================= BUY ME A COFFEE =================
window.__BMC_CONFIG__ = null;

async function loadBMC(scriptName) {
    while (!window.__supabaseReady || !window.sb) {
        await new Promise(r => setTimeout(r, 10));
    }

    const { data } = await window.sb
        .from('script_buymecoffee')
        .select('*')
        .in('script_name', [scriptName, '*'])
        .eq('enabled', true)
        .order('script_name', { ascending: false })
        .limit(1)
        .maybeSingle();

    window.__BMC_CONFIG__ = data || null;
}
function renderBuyMeCoffee() {
    const c = window.__BMC_CONFIG__;
    if (!c || !c.support_url) return '';

    return `
        <a href="${c.support_url}"
           target="_blank"
           title="Support"
           style="
             font-size:11px;
             font-weight:normal;
             color:#7a5c00;
             text-decoration:none;
           ">
           ${c.label || 'Support SAM'}
        </a>
    `;
}




async function checkScriptAccess() {
    try {
        while (!window.__supabaseReady || !window.sb) {
            await new Promise(r => setTimeout(r, 10));
        }

        const playerName = game_data.player.name.toLowerCase().trim();
        const SCRIPT_NAME = "doga";

   const { data, error } = await window.sb
  .from("pro_scripts")
  .select("role, enabled")
  .ilike("player_name", playerName)
  .eq("script_name", "doga")
  .maybeSingle(); // 👈 THIS FIXES 406


      if (error) {
  console.error("Supabase error:", error);
  return { allowed: false, role: null };
}

if (!data || !data.enabled) {
  return { allowed: false, role: null };
}

return {
  allowed: true,
  role: data.role
};

    } catch (e) {
        console.error("Access check failed", e);
        return { allowed: false, role: null };
    }
}


var _version = "0.3.3";
if (window.__DS_RAUSSTELLER_LOADED__) {
  return;
}
window.__DS_RAUSSTELLER_LOADED__ = true;
window.__DS_RENAME_IN_PROGRESS__ = false;


// SET VILLAGE TYPE: "def" or "off"
var VILLAGE_TYPE = "def";

var _config = { "running": "false", "debug": "false", "umbennenung": "---", "units": "no_archer", "rereadtime": 20, "criticaltime": 30, "frontbuffer": 2, "backbuffer": 2 };
var _units = {
  "normal": ["spear", "sword", "axe", "archer", "spy", "light", "marcher", "heavy", "ram", "catapult", "knight", "snob"],
  "no_archer": ["spear", "sword", "axe", "spy", "light", "heavy", "ram", "catapult", "knight", "snob"],
  "no_knight": ["spear", "sword", "axe", "archer", "spy", "light", "marcher", "heavy", "ram", "catapult", "snob"],
  "no_archer_knight": ["spear", "sword", "axe", "spy", "light", "heavy", "ram", "catapult", "snob"]
};

window.__DS_ACCESS_GRANTED__ = false;

function pauseCommandTimer() {
  try {
    if (unsafeWindow && unsafeWindow.CommandTimer) {
      unsafeWindow.CommandTimer.pause();
      add_log("CommandTimer paused");
    }
  } catch (e) {}
}


$(async function () {
  const access = await checkScriptAccess();

  if (!access.allowed) {
    alert("❌ You are not authorized to use this script.");
    return;
  }

  window.__DS_ACCESS_GRANTED__ = true;
  window.__TW_ROLE__ = access.role || "admin";

  startScript();
});


function startScript() {
  if (!window.__DS_ACCESS_GRANTED__) {
    console.warn("DS Dodge SAM: startScript called without access");
    return;
  }



// Load Buy Me a Coffee config
loadBMC("doga").then(() => {
  console.log("☕ BMC config:", window.__BMC_CONFIG__);
});



  var storage = localStorage;
  var storagePrefix = "raussteller_v0.3.1+_";
  //Speicherfunktionen
  function storageGet(key, defaultValue) {
    var value = storage.getItem(storagePrefix + key);
    return (value === undefined || value === null) ? defaultValue : value;
  }
  function storageSet(key, val) {
    storage.setItem(storagePrefix + key, val);
  }

    function isCaptchaPresent() {
  return (
    $('iframe[src*="recaptcha"]').length > 0 ||
    $('.g-recaptcha').length > 0 ||
    $('#bot_check, .bot-check, .captcha').length > 0 ||
    /captcha|bot protection|verify/i.test(document.body.innerText)
  );
}

function pauseOnCaptcha() {
  if (!isCaptchaPresent()) return false;

  var config = JSON.parse(storageGet("config"));
  if (config.running === "true") {
    config.running = "false";
    config._captchaPaused = true;
    storageSet("config", JSON.stringify(config));

    add_log("🚨 CAPTCHA detected — script auto-paused");
    console.warn("DS Dodge: CAPTCHA detected. Script paused.");
    alert("⚠ CAPTCHA detected!\n\nSolve CAPTCHA, then press Start again.");
  }
  return true;
}


 storageSet("auto_run", storageGet("auto_run", "false"));
var s = { "0": { "x": 500, "y": 500 } };
storageSet("target_list", storageGet("target_list", JSON.stringify(s)));
storageSet("config", storageGet("config", JSON.stringify(_config)));
s = { "0": 0 };
storageSet("timestamp", storageGet("timestamp", JSON.stringify(s)));
storageSet("incs", storageGet("incs", "{}"));
s = { 0: [{ "koords": { x: 0, y: 0 }, "start": 0, "end": 0, "inc_id": [0], "flag": "false" }] };
storageSet("planned_atts", storageGet("planned_atts", JSON.stringify(s)));
storageSet("template", storageGet("template", ""));

// Detect current page
const screen = getPageAttribute("screen");
const mode = getPageAttribute("mode");

// ✅ Only create UI on incomings
if (screen === "overview_villages" && mode === "incomings") {
    add_log("init_UI");
    init_UI();
}

// Auto-run logic
var autoRun = JSON.parse(storageGet("config")).running === "true";

if (autoRun) {
    if (screen === "overview_villages" && mode === "incomings") {
        onOverview();
    } else if (screen === "place" && getPageAttribute("raus") === "1") {
        onPlaceSend();
    } else if (screen === "place" && getPageAttribute("try") === "confirm") {
        onConfirm();
    } else if (screen === "info_command" && getPageAttribute("raus") === "1") {
        onInfoCommand();
    } else if (screen === "place") {
        onPlaceCancel();
    }
}

if (screen === "place" && mode === "templates") {
    onTemplateOverview();
}

  function onTemplateOverview() {
    add_log("onTemplateOverview");
    //adding template_UI
    var verify_button = $("#template_button")
    $("<input>").attr("class", "btn").attr("value", "Für Raussteller benutzen").insertAfter(verify_button)
      .click(function () {
        var template_id = $("a", $("li.selected", $("#troop_template_list"))).attr("href");
        var template_name = $("a", $("li.selected", $("#troop_template_list"))).text();
        if (template_id.split("#")[1] == "") {
          //return if in "create Template"
          add_log("not in viable template")
          return;
        }
        add_log("set template to: " + template_name + template_id)
        storageSet("template", template_name + template_id);
      });
  }
  function onOverview() {
      if (pauseOnCaptcha()) return;
    add_log("onOverview");
    var table = $("#incomings_table");
    var rows = $("tr", table).slice(1);
    var row;
    var current = -1;
    var config = JSON.parse(storageGet("config"));

    (function tick() {
     if (JSON.parse(storageGet("config")).running !== "true") {
  add_log("Paused (manual or CAPTCHA)");
  return;
}

      current = current > 1000 ? 1 : current + 1;
      add_log("tick #" + current);
      readNextIncs();
      deleteOldIncs();
      //geplante Atts ausführen, wenn in den Nächsten 1,5 Ticks fällig
      var planned_atts = JSON.parse(storageGet("planned_atts"));
      add_log("handling planned atts...");
      for (var v_id in planned_atts) {
        for (var i = 0; i < planned_atts[v_id].length; i++) {
          add_log("v_id: " + v_id + ", i: " + i + ", if(time): " + (planned_atts[v_id][i].start < Date.now() + (config.criticaltime * 2) * 1000) + ", if(flag): " + (planned_atts[v_id][i].flag !== "true"));
          if ((planned_atts[v_id][i].start < Date.now() + (config.criticaltime * 2) * 1000) && (planned_atts[v_id][i].flag !== "true")) {//innerhalb der nächsten criticaltime
            add_log("prepare new att...");
            //angriff vorbereiten und öffnen
            //script arbeitet auf allen anderen Seiten mit der localStorage variable "timestamp"
            var timestamp = JSON.parse(storageGet("timestamp"));
            timestamp[v_id] = { "start": (planned_atts[v_id][i].start - config.frontbuffer * 1000), "cancel": (Math.floor((planned_atts[v_id][i].start - config.frontbuffer * 1000 + planned_atts[v_id][i].end + config.backbuffer * 1000) / 2) + 1000) };
            storageSet("timestamp", JSON.stringify(timestamp));

            // if UV
            var uv = "";
            if (getPageAttribute("t") != "0") {
              uv = "t=" + getPageAttribute("t") + "&";
            }

            var link = "/game.php?+" + uv + "+village=" + v_id + "&screen=place&x=" + planned_atts[v_id][i].koords.x + "&y=" + planned_atts[v_id][i].koords.y + "&raus=1";
            window.open(link, '_blank');
            //angriff aus planned_atts löschen!
            planned_atts[v_id][i].flag = "true"; //gibt an, dass dieser angriff bereits geschickt wurde..
          }
        }
      }
      add_log("pa " + JSON.stringify(planned_atts));
      storageSet("planned_atts", JSON.stringify(planned_atts));
      //alert("warte "+JSON.stringify(planned_atts));
      if (current % 5 == 0) {//jeder 5. Tick, muss theoretisch nur einmal in jeder config.rereadtime durchgeführt werden
        planAtts();
        /*if(current==0){//da im ersten durchlauf angriffe erst nach dem theoretischen Losschicken berechnet werden, sofort neustarten
          tick();
        }*/
      }

      setTimeout(function () {//alle 0.5*criticaltime aktualisieren
        tick();
      }, percentage_randomInterval(1000 * config.criticaltime, 5));
    })();
    if ($("th", table).eq(0).text().indexOf("zuletzt aktualisiert") == -1) {//TODO ergibt derzeit noch keinen sinn..
      $("th", table).eq(0).text($("th", table).eq(0).text() + " last updated: " + $("#serverTime").text());
    }
  }
  function onPlaceSend() {//TODO unterscheidung alle, keine, einige truppen
        if (pauseOnCaptcha()) return;

    add_log("trying to evacuate all units..");
    var template = storageGet("template")
    if (template != "") {
      add_log("template " + template + " set.")
      try {
if (
  typeof TroopTemplates !== "undefined" &&
  !$("#troop_confirm_submit").length // prevents double-init
) {
  TroopTemplates.useTemplate(template.split("#")[1]);
}
      }
      catch (err) {
        add_log("couldnt set template. removing template")
        storageSet("template", "");
        onPlaceSend();
      }
        //dodge troops change(reserve)
    } else {
  add_log("no template set. partial dodge based on village type");

  function leaveAtHome(unit, amount) {
    var input = $("#unit_input_" + unit);
    if (!input.length) return;

    var all = parseInt(input.attr("data-all-count")) || 0;
    var send = Math.max(all - amount, 0);
    input.val(send);
  }

  function leaveAllAtHome(unit) {
    var input = $("#unit_input_" + unit);
    if (!input.length) return;
    input.val(0);
  }

  function sendAll(unit) {
    var input = $("#unit_input_" + unit);
    if (!input.length) return;
    input.val(input.attr("data-all-count"));
  }

  if (VILLAGE_TYPE === "def") {
    // DEF: leave fixed amounts
    leaveAtHome("spear", 500);
    leaveAtHome("archer", 300);
    leaveAtHome("spy", 5);

    // send everything else
    ["sword","axe","light","marcher","heavy","ram","catapult","knight","snob"]
      .forEach(sendAll);

  } else if (VILLAGE_TYPE === "off") {
    // OFF: leave all defensive units
    ["spear","sword","archer","heavy"].forEach(leaveAllAtHome);

    // leave 5 scouts
    leaveAtHome("spy", 5);

    // send offensive units
    ["axe","light","marcher","ram","catapult","knight","snob"]
      .forEach(sendAll);
  }
}

    add_log("click");
    setTimeout(function () {
    $("#target_support").click();
    }, randomInterval(400, 600));
  }

  function onPlaceCancel() {
        if (pauseOnCaptcha()) return;

  // 🔒 HARD CLOSE cancel tabs
  if (getPageAttribute("raus") === "2") {
    add_log("forced close after cancel");
    setTimeout(() => window.close(), 500);
    return;
  }

  add_log("find outgoing attacks to cancel...");
  var div = $("#commands_outgoings");
  if (div.length > 0) {
    var rows = $("tr.command-row", div).slice(0);
    var row;
    for (var i = 0; i < rows.length; i++) {
      row = rows[i];
      var cell = $("td", row).first();
      var attack_text = $("a span", cell).text();

      if (attack_text.indexOf("Sam_TS:") != -1) {
        location.href = $("a", cell).attr("href") + "&raus=1";
      }

      // optional: keep this as fallback
      if (
        attack_text.indexOf("Sam_Canceled_") != -1 &&
        (Date.now() - parseInt(
          attack_text.substring(
            attack_text.indexOf("Sam_Canceled_") + 14
          )
        )) < 30000 // widened window
      ) {
        window.close();
      }
    }
  }

  add_log("no att to cancel found...");
}


  function onConfirm() {
    if (pauseOnCaptcha()) return;

    // 🔒 Global cooldown (prevents TW inline script redeclare)
    if (Date.now() - (window.__DS_LAST_CONFIRM__ || 0) < 1500) {
        return;
    }
    window.__DS_LAST_CONFIRM__ = Date.now();

    var config = JSON.parse(storageGet("config"));
    var timestampObj = JSON.parse(storageGet("timestamp"));
    var villageId = getPageAttribute("village");

    if (!timestampObj || !timestampObj[villageId]) return;

    var timestamp = timestampObj[villageId];
    if (!timestamp.start || timestamp.start < Date.now()) return;

    var attackname = "Sam_TS:" + timestamp.cancel;
    var form = $("#command-data-form");

    pauseCommandTimer();

    // ✅ Only open quickedit if not already open
    if (!$("#quickedit-rename").length) {
        $("th a", form).first().click();
    }

    // Wait until quickedit is actually present
    waitForQuickEdit();

    function waitForQuickEdit() {
        var quick = $("#quickedit-rename");
        if (!quick.length) {
            setTimeout(waitForQuickEdit, 50);
            return;
        }

        // Set name safely
        $('[type="text"]', quick).val(attackname);
        $(".btn", quick).click();

        waitToSend();
    }

    function waitToSend() {
        var diff = timestamp.start - Date.now();

        if (diff > config.frontbuffer * 1000) {
            setTimeout(waitToSend, config.frontbuffer * 250);
        } else {
            $("#troop_confirm_submit").click();
        }
    }
}

  function onInfoCommand() {
    if (pauseOnCaptcha()) return;

    // 🔒 Hard cooldown to prevent redeclare crash
    if (Date.now() - (window.__DS_LAST_INFO__ || 0) < 1500) {
        return;
    }
    window.__DS_LAST_INFO__ = Date.now();

    var table = $("#content_value");
    var cancel_link;

    $("a", table).each(function () {
        var href = $(this).attr("href");
        if (href && href.indexOf("action=cancel") !== -1) {
            cancel_link = href + "&raus=2";
        }
    });

    if (!cancel_link) return;

    var commentText = $("#command_comment").text();
    var tsIndex = commentText.indexOf("TS:");
    if (tsIndex === -1) return;

    var cancel_time = parseInt(commentText.substring(tsIndex + 3));
    if (!cancel_time) return;

    var timeLeft = cancel_time - Date.now();

    if (timeLeft <= 0) {
        location.href = cancel_link;
        return;
    }

    add_log("Canceling this attack in " + Math.round(timeLeft / 1000) + " sec.");
    pauseCommandTimer();

    renameCommand("Sam_goingtocancel_TS:" + cancel_time, function () {

        setTimeout(function () {
            pauseCommandTimer();

            renameCommand("Sam_Canceled_" + cancel_time, function () {
                location.href = cancel_link;
            });

        }, timeLeft);

    });

    table.prepend(
        $("<div>")
            .attr("class", "error_box")
            .text("Do NOT close this window! This command will be canceled automatically.")
    );


    // ✅ SAFE rename helper
    function renameCommand(newName, callback) {

        // Only open quickedit if not already open
        if (!$("#quickedit-rename").length) {
            $("th a", table).first().click();
        }

        waitForQuickEdit();

        function waitForQuickEdit() {
            var quick = $("#quickedit-rename");

            if (!quick.length) {
                setTimeout(waitForQuickEdit, 50);
                return;
            }

            $('[type="text"]', quick).val(newName);
            $(".btn", quick).click();

            // Wait a bit for TW AJAX to settle before next action
            setTimeout(function () {
                if (callback) callback();
            }, 300);
        }
    }
}

  function readNextIncs() {
    add_log("reading next incs...");
    var table = $("#incomings_table");
    var rows = $("tr", table).slice(1);
    var row;
    var current = -1;
    nextrow();
    function nextrow() {
      current++;
      row = rows[current];
      var config = JSON.parse(storageGet("config"));
      add_log("row: " + current + ", timeleft: " + getTimeLeft(row) + ", config: " + (config.rereadtime * 60));
      if (getTimeLeft(row) <= config.rereadtime * 60) { //6 minuten
        if (getAttackType(row) == "support") {
          nextrow(); //überspringen
        }
        var id = getVillageID(row);
        var koords = getVillageKoords(row);
        add_log("inc found; id: " + id + ", koords: " + JSON.stringify(koords));
        koords = nearestTarget(koords);
        add_log("found nearest target: " + JSON.stringify(koords));
        var timestamp = Date.now() + getTimeLeft(row) * 1000;

        var incs = JSON.parse(storageGet("incs"));
        incs[getIncID(row)] = { "village_id": id, "koords": koords, "timestamp": timestamp };
        storageSet("incs", JSON.stringify(incs));
        add_log("searching for more incs...");
        nextrow(); //next line
      } else {
        add_log("Canceling readNextIncs; No further incoms in next few minutes");
        return;
      }
      //TODO nächste zeile, bei abbruchbedingung / spezielle umbennenung des eingehenden Angriffs
    }

  }
  function deleteOldIncs() {
    //löscht Incs, die beriets abgelaufen sind.
    var incs = JSON.parse(storageGet("incs"));
    add_log("deleting old incs... " + JSON.stringify(incs));
    var counter = 0;
    for (var inc_id in incs) {
      if (incs[inc_id].timestamp < Date.now()) {
        delete incs[inc_id];
        counter++;
      }
    }
    storageSet("incs", JSON.stringify(incs));
    add_log("deleted " + counter + " inc(s)! " + JSON.stringify(incs));
    counter = 0;
    add_log("deleting old planned_atts...");
    var planned_atts = JSON.parse(storageGet("planned_atts"));
    for (var v_id in planned_atts) {
      for (var i in planned_atts[v_id]) {
        if (planned_atts[v_id][i].start < Date.now()) {
          planned_atts[v_id].splice(i, 1);
          i--;
          counter++;
        }
      }
      if (planned_atts[v_id].length == 0) {
        delete planned_atts[v_id];
      }
    }
    storageSet("planned_atts", JSON.stringify(planned_atts));
    add_log("deleted " + counter + " atts... ");
  }
  function planAtts() {
    //erzeugt aus den ausgelesenen Incs rausstellangriffe mit der dorf ID, spätester Abschickzeit und frühster Ankunft als timestamp, sowie Zielkoordinaten
    add_log("planning atts...");
    var incs = JSON.parse(storageGet("incs"));
    var config = JSON.parse(storageGet("config"));
    var atts_on_village = JSON.parse(storageGet("planned_atts"));
    for (var inc_id in incs) {
      atts_on_village[incs[inc_id].village_id] = atts_on_village[incs[inc_id].village_id] == undefined ? [] : atts_on_village[incs[inc_id].village_id];//erzeuge dieses array wenn nicht vorhanden
      atts_on_village[incs[inc_id].village_id].push({ "koords": incs[inc_id].koords, "start": incs[inc_id].timestamp, "end": incs[inc_id].timestamp, "inc_id": [inc_id], "flag": "false" });
    }
    for (var v_id in atts_on_village) {
      //Vergleiche jeden angriff auf ein dorf mit allen anderen, ob zu nah beinander
      for (var i = 0; i < atts_on_village[v_id].length; i++) {
        for (var j = i + 1; j < atts_on_village[v_id].length; j++) {
          add_log("first: " + (atts_on_village[v_id][j].start < atts_on_village[v_id][i].end + config.criticaltime * 1000) + ", second: " + (atts_on_village[v_id][i].start > atts_on_village[v_id][j].start) + ", third: " + (atts_on_village[v_id][i].start < atts_on_village[v_id][j].end + config.criticaltime * 1000))
          if (atts_on_village[v_id][j].start < atts_on_village[v_id][i].end + config.criticaltime * 1000 || (atts_on_village[v_id][i].start > atts_on_village[v_id][j].start && atts_on_village[v_id][i].start < atts_on_village[v_id][j].end + config.criticaltime * 1000)) {
            //wenn angriffe zu nah sind: zusammenfassen und j-angriff löschen
            atts_on_village[v_id][i].start = atts_on_village[v_id][i].start < atts_on_village[v_id][j].start ? atts_on_village[v_id][i].start : atts_on_village[v_id][i].start;
            atts_on_village[v_id][i].end = atts_on_village[v_id][i].end > atts_on_village[v_id][j].end ? atts_on_village[v_id][i].end : atts_on_village[v_id][j].end;
            atts_on_village[v_id][i].flag = atts_on_village[v_id][j].flag === "true" ? "true" : atts_on_village[v_id][i].flag;
            atts_on_village[v_id][i].inc_id.concat(atts_on_village[v_id][j].inc_id);
            atts_on_village[v_id].splice(j, 1);
            j--;
          }
        }
      }
    }
    storageSet("planned_atts", JSON.stringify(atts_on_village));
    add_log("finished planning atts!");
  }
  function getPseudoServerTime() {
    //returns time in sek.
    var text = $("#serverTime").text();
    var hour = parseInt(text);
    var min = parseInt(text.substring(text.indexOf(":") + 1, text.length));
    var sek = parseInt(text.substring(text.indexOf(":", text.indexOf(":") + 1) + 1, text.length));
    return hour * 3600 + min * 60 + sek;
  }
  function nearestTarget(koords) {
    //returns koords of nearest target
    var distance = 0;
    var best = "";
    var target_list = JSON.parse(storageGet("target_list"));

    for (var name in target_list) {
      //Satz des Pythagoras..
      target_list[name].distance = 0;
      for (var axis in koords) {
        target_list[name].distance += Math.pow(parseInt(koords[axis]) - parseInt(target_list[name][axis]), 2);
        //distance[name] += Math.pow(parseInt(koords[axis])-parseInt(target_list[name][axis]),2)
      }
      target_list[name].distance = Math.sqrt(target_list[name].distance);
      //best = best!="" ? (distance[name]<distance[best] ? name : bets) : name ;
      best = best == "" ? name : best;
      best = target_list[best].distance < target_list[name].distance ? best : name;
    }
    return target_list[best];


  }
  function getAttackType(row) {
    var cell = $("td", row).eq(0);
    var src = $("img", cell).first().attr("src");
    return src.substring(src.indexOf("command/") + 8, src.length - 4);
  }
  function getVillageID(row) {
    var cell = $("td", row).eq(1);
    var link = $("a", cell).attr("href");
    var id = parseInt(link.substring(link.indexOf("village=") + 8));
    add_log("getVillageID: " + id);
    return id;
  }
  function getVillageKoords(row) {
    var cell = $("td", row).eq(1);
    var text = $("a", cell).text();
    var tab = text.match(/\w+/g);
    var koords = {
      "x": parseInt(
        tab[tab.length - 3]
      ),
      "y": parseInt(
        tab[tab.length - 2]
      )
    };
    return koords;
  }
  function getTimeLeft(row) {
    //returns time left in seconds.
    var cell = $("td", row).last();
    //cell.css("background-color","red");
    var time = "-1";
    $("span", cell).each(function () {
      time = $(this).text();
    });
    var hour = parseInt(time.substring(0, time.indexOf(":")));
    var minute = parseInt(time.substring(time.indexOf(":") + 1, time.indexOf(":", time.indexOf(":") + 1)));
    var second = parseInt(time.substring(time.indexOf(":", time.indexOf(":") + 1) + 1, time.length));
    return hour * 3600 + minute * 60 + second;
  }
  function getIncID(row) {
    add_log("getting inc id...");
    var cell = $("td", row).eq(0);
    var link = $("a", cell).first().attr("href");
    var id = parseInt(link.substring(link.indexOf("id=") + 3));
    add_log("got inc id: " + id);
    return id;
  }
  function init_UI() {
      if (document.getElementById("option_link")) {
  return;
}

    //create UI_link
    var overview_menu = $("#overview_menu");
    var option_link = $("<a>")
      .attr("href", "#")
      .attr("id", "option_link")
      .text("Dodge!")
      .click(function () {
        toggleSettingsVisibility();
      });
    var status_symbol = $("<span>")
      .attr("title", "Dodge Script Status")
      .attr("id", "status_symbol")
      .attr("class", getSymbolStatus())
      .prependTo(option_link);
    $("#menu_row").prepend($("<td>").attr("class", "menu-item").append(option_link));

    //options popup
    var settingsDivVisible = false;
    var overlay = $("<div>")
      .css({
        "position": "fixed",
        "z-index": "99999",
        "top": "0",
        "left": "0",
        "right": "0",
        "bottom": "0",
        "background-color": "rgba(255,255,255,0.6)",
        "display": "none"
      })
      .appendTo($("body"));
    var settingsDiv = $("<div>")
      .css({
        "position": "fixed",
        "z-index": "100000",
        "left": "50px",
        "top": "50px",
        "width": "500px",
"min-height": "320px",
"height": "auto",
"background-color": "white",
        "border": "1px solid black",
        "border-radius": "5px",
        "display": "none",
        "padding": "10px"

      })
      .appendTo($("body"));
    function toggleSettingsVisibility() {
      if (settingsDivVisible) {
        overlay.hide();
        settingsDiv.hide();
      } else {
        overlay.show();
        settingsDiv.show();
      }

      settingsDivVisible = !settingsDivVisible;
    }
    //Head
    $("<h2>").text("Dodge Settings").appendTo(settingsDiv);
$("<span>").text("Version: " + _version + " ").appendTo(settingsDiv);

    //Body
    var settingsTable = $("<table>").appendTo(settingsDiv);
      settingsTable.css({
  "border-collapse": "separate",
  "border-spacing": "0 6px"
});

    function addRow(desc, content) {
  $("<tr>")
    .append($("<td>").css({
      "padding-right": "10px",
      "white-space": "nowrap",
      "vertical-align": "middle"
    }).append(desc))
    .append($("<td>").css({
      "vertical-align": "middle"
    }).append(content))
    .appendTo(settingsTable);
}

    var select_units = $("<select>")
      .append($("<option>").text("All units").attr("value", "normal"))
      .append($("<option>").text("All except archers").attr("value", "no_archer"))
      .append($("<option>").text("All except paladin").attr("value", "no_knight"))
      .append($("<option>").text("No archers and no paladin").attr("value", "no_archer_knight"))
      .change(function () {
        var config = JSON.parse(storageGet("config"));
        config.units = $("option:selected", $(this)).val();
        storageSet("config", JSON.stringify(config));
      });
    $("option[value=" + JSON.parse(storageGet("config")).units + "]", select_units).prop("selected", true);

    var input_rereadtime = $("<input>")
      .attr("type", "text")
      .val(JSON.parse(storageGet("config")).rereadtime)
      .on("input", function () {
        var config = JSON.parse(storageGet("config"));
        if (parseInt($(this).val()) > Math.ceil(config.criticaltime / 30)) { // reread > 2*critical (vorsichtig)
          config.rereadtime = parseInt($(this).val());
          storageSet("config", JSON.stringify(config));
        }
      });
    var input_criticaltime = $("<input>")
      .attr("type", "text")
      .val(JSON.parse(storageGet("config")).criticaltime)
      .on("input", function () {
        if (parseInt($(this).val()) > 0) {
          var config = JSON.parse(storageGet("config"));
          config.criticaltime = parseInt($(this).val());
          storageSet("config", JSON.stringify(config));
        }
      });
    var input_buffertime = $("<input>")
      .attr("type", "text")
      .val(JSON.parse(storageGet("config")).frontbuffer)
      .on("input", function () {
        if (parseInt($(this).val()) > 0) {
          var config = JSON.parse(storageGet("config"));
          config.frontbuffer = parseInt($(this).val());
          config.backbuffer = parseInt($(this).val());
          storageSet("config", JSON.stringify(config));
        }
      });
    var select_debug = $("<select>")
      .append($("<option>").text("Off").attr("value", "false"))
      .append($("<option>").text("On").attr("value", "true"))
      .change(function () {
        var config = JSON.parse(storageGet("config"));
        config.debug = $("option:selected", $(this)).val();
        storageSet("config", JSON.stringify(config));
        console.log(storageGet("config"))
      });
    var input_target_x = $("<input>")
      .attr("type", "text")
      .val(JSON.parse(storageGet("target_list"))["0"]["x"])
      .on("input", function () {
        if (parseInt($(this).val()) > 0) {
          var target_list = JSON.parse(storageGet("target_list"));
          target_list["0"]["x"] = $(this).val();
          storageSet("target_list", JSON.stringify(target_list))
        }
      })
    var input_target_y = $("<input>")
      .attr("type", "text")
      .val(JSON.parse(storageGet("target_list"))["0"]["y"])
      .on("input", function () {
        if (parseInt($(this).val()) > 0) {
          var target_list = JSON.parse(storageGet("target_list"));
          target_list["0"]["y"] = $(this).val();
          storageSet("target_list", JSON.stringify(target_list))
        }
      })

    $("option[value=" + JSON.parse(storageGet("config")).debug + "]", select_debug).prop("selected", true);

    $("<tr>").append($("<td>").attr("colspan", 2).append($("<div>")   .text("General")   .css({     "font-weight": "bold",     "margin-top": "10px",     "border-bottom": "1px solid #ddd"   }))).appendTo(settingsTable);
    addRow(
      $("<span>").text("Units on this world:"),
      select_units);
    addRow(
      $("<span>").text("Debug mode:"),
      select_debug);
    $("<tr>").append($("<td>").attr("colspan", 2).append($("<div>")   .text("Timing")   .css({     "font-weight": "bold",     "margin-top": "10px",     "border-bottom": "1px solid #ccc",     "font-size": "12px"   }))).appendTo(settingsTable);
    addRow(
      $("<span>").text("Scan next X minutes:"),
      input_rereadtime);
    addRow(
      $("<span>").text("Merge enemy attacks closer than X seconds:"),
      input_criticaltime);
    addRow(
      $("<span>").text("Safety buffer (seconds):"),
      input_buffertime);
    addRow(
      $("<span>").text("Dodge target"),
      $("<div>").append(input_target_x).append(input_target_y)
    );
    addRow($("<span>").text("Current template:"),
      $("<span>").text(storageGet("template").split("#")[0] != "" ? storageGet("template").split("#")[0] : "No template selected")
    );
    addRow($("<span>").text("Reset template:"),
      $("<button>").text("Reset!").click(function () {
        storageSet("template", "");
      })
    );

   //Foot
var footer = $("<div>")
  .css({
    "margin-top": "10px",
    "display": "flex",
    "justify-content": "space-between",
    "align-items": "center"
  })
  .appendTo(settingsDiv);

// Left: Buy Me a Coffee
var bmcContainer = $("<div>")
  .css({ "min-width": "120px" })
  .appendTo(footer);

(async function waitForBMC() {
  while (window.__BMC_CONFIG__ === null) {
    await new Promise(r => setTimeout(r, 50));
  }
  bmcContainer.html(renderBuyMeCoffee());
})();


// Right: buttons
var btns = $("<div>").appendTo(footer);

$("<button>")
  .text("Start/Stop")
  .click(function () {
    toggleRunning();
  })
  .appendTo(btns);

$("<button>")
  .text("Close")
  .click(function () {
    toggleSettingsVisibility();
  })
  .appendTo(btns);

    
  }
  function toggleRunning() {
    var config = JSON.parse(storageGet("config"));
    config.running = "" + (config.running === "false");
    add_log("running set to " + config.running);
    storageSet("config", JSON.stringify(config));
    
  }
  function getSymbolStatus() {
    if (JSON.parse(storageGet("config")).running === "true") {
      return "icon friend online";
    } else {
      return "icon friend offline";
    }
  }
  function add_log(text) {
    if (JSON.parse(storageGet("config")).debug === "true") {
      var prefix = storagePrefix + timeConverter(Date.now()) + " - ";
      console.log(prefix + text);
    }
  }
  function timeConverter(timestamp) {
    var a = new Date(timestamp);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
  }
  function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function percentage_randomInterval(average, deviation) {
    average = parseInt(average);
    deviation = deviation > 100 ? 1 : deviation / 100;
    return randomInterval(average * (1 + deviation), average * (1 - deviation));
  }
  function getPageAttribute(attribute) {
    //gibt die php-Attribute zurück, also z.B. von* /game.php?*&screen=report* würde er "report" wiedergeben
    //return: String, wenn nicht vorhanden gibt es eine "0" zurück
    var params = document.location.search;
    var value = params.substring(params.indexOf(attribute + "=") + attribute.length + 1, params.indexOf("&", params.indexOf(attribute + "=")) != -1 ? params.indexOf("&", params.indexOf(attribute + "=")) : params.length);
    return params.indexOf(attribute + "=") != -1 ? value : "0";
  }
}
