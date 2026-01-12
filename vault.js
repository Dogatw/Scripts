// ===============================
// === SUPABASE INIT (FIXED) ===
// ===============================
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
// ===============================
// === DROPBOX → SUPABASE BRIDGE ===
// ===============================
async function readFileDropbox(filename) {

    switch (filename) {

        case "SUPABASE_SUPPORT": {
            const map = await loadSupportDB(game_data.world, game_data.player.ally);
            return new Blob(
                [JSON.stringify([Array.from(map.entries()), []])],
                { type: "application/json" }
            );
        }

        case "SUPABASE_COMMANDS_ATTACK": {
            const map = await loadCommandsAttackDB(game_data.world, game_data.player.ally);
            return new Blob(
                [JSON.stringify(Array.from(map.entries()))],
                { type: "application/json" }
            );
        }

        case "SUPABASE_INCOMINGS": {
            const map = await loadIncomingsDB(game_data.world, game_data.player.ally);
            return new Blob(
                [JSON.stringify(Array.from(map.entries()))],
                { type: "application/json" }
            );
        }

        case "SUPABASE_STATUS": {
            const map = await loadStatusDB(game_data.world, game_data.player.ally);
            return new Blob(
                [JSON.stringify(Array.from(map.entries()))],
                { type: "application/json" }
            );
        }

        default:
            throw new Error("Unknown virtual file: " + filename);
    }
}


// ===============================
// === VIRTUAL FILENAMES (SUPABASE)
// ===============================
var filename_support = "SUPABASE_SUPPORT";
var filename_commands_attack = "SUPABASE_COMMANDS_ATTACK";
var filename_incomings = "SUPABASE_INCOMINGS";
var filename_status_upload = "SUPABASE_STATUS";


// ===============================
// === REPORTS via Supabase DB ===
// ===============================

async function loadReportsDB(world, tribe) {
  const { data, error } = await sb
    .from("reports")
    .select("coord, data")
    .eq("world", world)
    .eq("tribe", tribe);

  if (error) {
    console.error("loadReportsDB failed", error);
    return new Map();
  }

  return new Map(data.map(r => [r.coord, r.data]));
}

async function saveReportDB(coord, reportData, world, tribe) {
  const { error } = await sb
    .from("reports")
    .upsert({
      coord,
      data: reportData,
      world,
      tribe,
      updated_at: new Date().toISOString()
    });

  if (error) {
    console.error("saveReportDB failed", error);
  }
}

// ===============================
// === INCOMINGS via Supabase  ===
// ===============================

async function loadIncomingsDB(world, tribe) {
  const { data, error } = await sb
    .from("incomings")
    .select("coord, data")
    .eq("world", world)
    .eq("tribe", tribe);

  if (error) {
    console.error("loadIncomingsDB failed", error);
    return new Map();
  }

  return new Map(data.map(r => [r.coord, r.data]));
}

async function saveIncomingsDB(coord, incomingsData, world, tribe) {
  const { error } = await sb
    .from("incomings")
    .upsert({
      coord,
      data: incomingsData,
      world,
      tribe,
      updated_at: new Date().toISOString()
    });

  if (error) {
    console.error("saveIncomingsDB failed", error);
  }
}

// ===============================
// === SUPPORT via Supabase     ===
// ===============================

async function loadSupportDB(world, tribe) {
  const { data, error } = await sb
    .from("support")
    .select("coord, data")
    .eq("world", world)
    .eq("tribe", tribe);

  if (error) {
    console.error("loadSupportDB failed", error);
    return new Map();
  }

  return new Map(data.map(r => [r.coord, r.data]));
}

async function saveSupportDB(coord, supportData, world, tribe) {
  const { error } = await sb
    .from("support")
    .upsert({
      coord,
      data: supportData,
      world,
      tribe,
      updated_at: new Date().toISOString()
    });

  if (error) {
    console.error("saveSupportDB failed", error);
  }
}

// ===============================
// === TROOPS_HOME via Supabase ===
// ===============================

async function loadTroopsHomeDB(world, tribe) {
  const { data, error } = await sb
    .from("troops_home")
    .select("coord, data")
    .eq("world", world)
    .eq("tribe", tribe);

  if (error) {
    console.error("loadTroopsHomeDB failed", error);
    return new Map();
  }

  return new Map(data.map(r => [r.coord, r.data]));
}

async function saveTroopsHomeDB(coord, troopsData, world, tribe) {
  const { error } = await sb
    .from("troops_home")
    .upsert({
      coord,
      data: troopsData,
      world,
      tribe,
      updated_at: new Date().toISOString()
    });

  if (error) {
    console.error("saveTroopsHomeDB failed", error);
  }
}

// ===============================
// === STATUS via Supabase     ===
// ===============================
async function loadStatusDB(world, tribe) {
  const { data, error } = await sb
    .from("status")
    .select("player_id, data")
    .eq("world", world)
    .eq("tribe", tribe);

  if (error) {
    console.error("loadStatusDB failed", error);
    return new Map();
  }

  return new Map(data.map(r => [r.player_id, r.data]));
}

async function saveStatusDB(playerId, data, world, tribe) {
  const { error } = await sb
    .from("status")
    .upsert({
      player_id: playerId,
      data,
      world,
      tribe,
      updated_at: new Date().toISOString()
    });

  if (error) {
    console.error("saveStatusDB failed", error);
  }
}

// ===============================
// === HISTORY via Supabase    ===
// ===============================
async function loadHistoryDB(world, tribe) {
  const { data, error } = await sb
    .from("history_upload")
    .select("report_id, data")
    .eq("world", world)
    .eq("tribe", tribe);

  if (error) {
    console.error("loadHistoryDB failed", error);
    return new Map();
  }

  return new Map(data.map(r => [r.report_id, r.data]));
}

async function saveHistoryDB(reportId, data, world, tribe) {
  const { error } = await sb
    .from("history_upload")
    .upsert({
      report_id: reportId,
      data,
      world,
      tribe,
      updated_at: new Date().toISOString()
    });

  if (error) {
    console.error("saveHistoryDB failed", error);
  }
}


// ===============================
// === EXISTING SCRIPT CONTINUES ===
// ===============================
// ===================================================
// === INITIAL SETUP (SUPABASE ERA, CLEAN VERSION) ===
// ===================================================

var allUsers, tribemates, permissions;

// UI config
var backgroundColor, borderColor, headerColor, titleColor;
var headerColorPlayers, headerColorCoords, headerColorFirstRow;
var widthInterface, widthInterfaceOverview;
async function initWorldSpeedOnce() {
    if (window.__speedReady) return;
    window.__speedReady = false;

    while (typeof window.game_data === "undefined") {
        await new Promise(r => setTimeout(r, 50));
    }

    const speed = getSpeedConstant();
    const sw = speed.worldSpeed;
    const su = speed.unitSpeed;

    window.nobleSpeed = 2100 * 1000 / (sw * su);
    window.ramSpeed   = 1800 * 1000 / (sw * su);
    window.swordSpeed = 1320 * 1000 / (sw * su);
    window.axeSpeed   = 1080 * 1000 / (sw * su);
    window.heavySpeed = 660  * 1000 / (sw * su);
    window.lightSpeed = 600  * 1000 / (sw * su);
    window.spySpeed   = 540  * 1000 / (sw * su);

    window.__speedReady = true;
    console.log("⚡ World speed initialized");
}

(async () => {
    // ⏳ WAIT FOR SUPABASE
    while (!window.__supabaseReady) {
        await new Promise(r => setTimeout(r, 50));
    }

    console.log("🟢 Supabase available");

    // ⏳ WAIT FOR GAME DATA + SPEED
    await initWorldSpeedOnce();

    // ===========================
    // UI COLORS / SIZES
    // ===========================
    backgroundColor = "#32313f";
    borderColor = "#3e6147";
    headerColor = "#202825";
    titleColor = "#ffffdf";
    headerColorPlayers = "#323232";
    headerColorCoords = "#4d4d4d";
    headerColorFirstRow = "#666600";
    widthInterface = 600;
    widthInterfaceOverview = 900;

    // ===========================
    // USERS (SUPABASE)
    // ===========================
    const { data, error } = await sb
        .from("users")
        .select("player_name, permission")
        .eq("world", game_data.world)
        .eq("tribe", game_data.player.ally);

    if (error) {
        console.error("getUsers failed", error);
        throw new Error("Cannot load users from Supabase");
    }

   permissions = {};
tribemates = [];

data.forEach(u => {
  const name = u.player_name.toLowerCase();
  tribemates.push(name);
  permissions[name] = true; // allow all users
});


    console.log("👥 Tribemates:", tribemates);

    // ===========================
    // UI INIT
    // ===========================
    addCssStyle();
    getInterface();
    showButtons();
})();





// game_data.device="none"


var speedWorld=getSpeedConstant().worldSpeed;
var speedTroupes=getSpeedConstant().unitSpeed;
    
    




var nobleSpeed=2100*1000/(speedWorld*speedTroupes)//ms
var ramSpeed=1800*1000/(speedWorld*speedTroupes)//ms
var swordSpeed=1320*1000/(speedWorld*speedTroupes)//ms
var axeSpeed=1080*1000/(speedWorld*speedTroupes)//ms
var heavySpeed=660*1000/(speedWorld*speedTroupes)//ms
var lightSpeed=600*1000/(speedWorld*speedTroupes)//ms
var spySpeed=540*1000/(speedWorld*speedTroupes)//ms


//formula ((base time/100)/speedWorld) * stable time factor  //https://forum.tribalwars.net/index.php?threads/next-lvl-of-barracks-unit-production-speed.54638/
var axeTime=Math.round( ((1320/100.0)/speedWorld) * 15.58823529 ) *1000//milisec
var lhTime=Math.round( ((1800/100.0)/speedWorld) * 20.88235294 ) *1000//milisec
var ramTime=Math.round( ((4800/100.0)/speedWorld) * 27.84313725 ) *1000//milisec

var countApiKey = "taggingScript";
var countNameSpace="madalinoTribalWarsScripts"





var troopsPop = {
    spear : 1,
    sword : 1,
    axe : 1,
    archer : 1,
    spy : 2,
    light : 4,
    marcher : 5,
    heavy : 4,
    ram : 5,
    catapult : 8,
    knight : 10,
    snob : 100
};
{/* <img src="https://img.icons8.com/officel/16/000000/long-arrow-right.png"/> */}
{/* <img src="https://img.icons8.com/officel/16/000000/long-arrow-left.png"/> */}


function getInterface(){
    html = `

    <div id="div_container" class="ui-widget-content div_remove" style="background-color:${backgroundColor};cursor:move;z-index:50;width:${widthInterface}px">
        <div class="scriptHeader">
            <div style=" margin-top:10px;text-decoration: underline;text-decoration-color: ${titleColor}"><h2 >Upload data</h2></div>
            <div style="position:absolute;top:10px;right: 10px;"><a href="#" onclick="$('#div_container').remove()"><img src="https://img.icons8.com/emoji/24/000000/cross-mark-button-emoji.png"/></a></div>
            <div style="position:absolute;top:8px;right: 35px;" id="div_minimize"><a href="#"><img src="https://img.icons8.com/plasticine/28/000000/minimize-window.png"/></a></div>
            <div style="position:absolute;top:10px;right: 92%;" id="page_support" ><a href="#" onclick="viewSupport() "><img src="https://img.icons8.com/officel/30/000000/long-arrow-right.png"/></a></div>
        </div>
        <div id="div_body">
            <table id="table_upload" class="" border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor}">
                <tr>
                    <td  style="text-align:center; background-color:${headerColor}">
                        <h2><center style="margin:10px"><font color="${titleColor}">Reports</font></center></h2>
                    </td>
                    <td style="text-align:center; background-color:${headerColor}">
                        <center style="margin:10px"><input class="btn" type="button" id="upload_reports" onclick="uploadReports()" value="Upload"></center>
    
                    </td>
                        <td style="text-align:center; background-color:${headerColor}">
                        <p><center style="margin:10px"><font color="${titleColor}" id="progress_reports">None</font></center></p>
                    </td>                       
                </tr>        
                    <tr>
                    <td style="text-align:center; background-color:${headerColor}">
                        <h2><center style="margin:10px"><font color="${titleColor}">Incomings</font></center></h2>
                    </td>
                    <td style="text-align:center; background-color:${headerColor}">
                            <center style="margin:10px"><input class="btn" type="button" id="upload_incomings" onclick="uploadIncomings()" value="Upload"></center>
                    </td>
                        <td style="text-align:center; background-color:${headerColor}">
                        <p><center style="margin:10px" ><font color="${titleColor}" id="progress_incomings">None</font></center></p>
                    </td>                       
                </tr>
                <tr>
                    <td style="text-align:center; background-color:${headerColor}">
                        <h2><center style="margin:10px"><font color="${titleColor}">Commands</font></center></h2>
                    </td>
                    <td style="text-align:center; background-color:${headerColor}">
                            <center style="margin:10px"><input class="btn" type="button" onclick="uploadSupports()" value="Upload"></center>    
                    </td>
                        <td style="text-align:center; background-color:${headerColor}">
                        <p><center style="margin:10px" ><font color="${titleColor}" id="progress_support">None</font></center></p>
                        </td>                       
                </tr> 
                <tr>
                    <td style="text-align:center; background-color:${headerColor}">
                        <h2><center style="margin:10px"><font color="${titleColor}">Troops</font></center></h2>
                    </td>
                    <td style="text-align:center; background-color:${headerColor}">
                            <center style="margin:10px"><input class="btn" type="button" onclick="uploadOwnTroops()" value="Upload"></center>    
                    </td>
                        <td style="text-align:center; background-color:${headerColor}">
                        <p><center style="margin:10px" ><font color="${titleColor}" id="progress_troops_home">None</font></center></p>
                        </td>                       
                </tr> 
                <tr>
                    <td style="text-align:center; background-color:${headerColor}">
                        <h2><center style="margin:10px"><font color="${titleColor}">All Info</font></center></h2>
                    </td>
                    <td style="text-align:center; background-color:${headerColor}">
                            <center style="margin:10px"><input class="btn" type="button" onclick="uploadAll()" value="Upload all"></center>    
                    </td>
                        <td style="text-align:center; background-color:${headerColor}">
                        <p><center style="margin:10px" ><font color="${titleColor}" id="progress_all">None</font></center></p>
                    </td>                       
                </tr>     
            </table>
            <h2><center style="margin:10px"><font color="${titleColor}" style="text-decoration: underline;text-decoration-color: ${titleColor}">Search Reports</font></center></h2>
            <table id="table_upload" class="" border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor}">
                <tr>
                    <td  style="text-align:center; background-color:${headerColor}">
                        <center style="margin:10px"><input class="btn" type="button" onclick="loadReports()" value="Load Reports"></center> 
                        <center style="margin:10px"><input class="btn" type="button" onclick="databaseDetails()" value="Database Details"></center> 
                    </td>
                    <td style="text-align:center; background-color:${headerColor}">
                    <center style="margin:10px"><input style="text-align: center;" type="text" id="input_search" onclick="" placeholder="coord" ></center> 
                    </td>
                        <td style="text-align:center; background-color:${headerColor}">
                        <p><center style="margin:10px"><font color="${titleColor}" id="progress_search">status</font></center></p>
                    </td>                       
                </tr>   
                <tr >
                    <td style="text-align:center; background-color:${headerColor}">
                        <p><center style="margin:10px"><font color="${titleColor}" >filter tribes: </font></center></p>
                    </td>
                    <td colspan="2" style="text-align:center; background-color:${headerColor}">
                        <center style="margin:10px"><input style="text-align: center;width:90%;" type="text" id="input_filter_tribe" onclick="" placeholder="tribe1,tribe2,..." ></center> 
                    </td>
                </tr>     
                <tr >
                    <td  style="text-align:center; background-color:${headerColor}">
                        <center style="margin:10px"><input class="btn" id="btn_off_coord" type="button" value="Off Coords"></center> 
                    </td>
                    <td style="text-align:center; background-color:${headerColor}">
                        <center style="margin:10px"><input class="btn" id="btn_def_coord" type="button" value="Def Coords"></center> 
                    </td>      
                    <td style="text-align:center; background-color:${headerColor}">
                        <center style="margin:10px"><input class="btn" id="btn_stack_coord" type="button" value="Stacked Coords"></center> 
                        <center style="margin:10px"><input style="text-align: center;" type="text" id="input_stacked" onclick="" placeholder="nr stack" ></center> 
                    </td>    
                </tr>        
            </table>
            <center style="margin:10px"><div id="report_view" style="background-color:#d2c09e"><div><center>
            <div class="scriptFooter">
                <div style=" margin-top:5px;"><h5>Made by Costache</h5></div>
            </div>
        </div>
    </div>
    `;

    ////////////////////////////////////////add and remove window from page///////////////////////////////////////////


    if(document.getElementById("table_incomings")!=null){

        $("#contentContainer").eq(0).prepend(html);
        $("#mobileContent").eq(0).prepend(html);
    }

    
    if(document.getElementById("incomings_table")==null){
        $("#div_container").remove()
        $("#contentContainer").eq(0).prepend(html);
        $("#mobileContent").eq(0).prepend(html);
        $("#div_container_view").remove()
        if(game_data.device=="desktop"){
            $("#div_container").css("position","fixed");
            $("#div_container").draggable();
        }
    }


    

    $("#div_minimize").on("click",()=>{
        if($('#div_container').width() == widthInterface){
            $('#div_container').css({'width' : '120px'});
            $('#div_body').hide();
            $("#page_support").hide()
        }
        else{
            $('#div_container').css({'width' : `${widthInterface}px`});
            $('#div_body').show();
            $("#page_support").show()

        }
    })

    if(game_data.device == "desktop"){
        $("#div_container").draggable();
        $("#div_container").css("position","fixed");

    }
    testLoadReports()
}
function closeWindow(){
    $(".div_remove").remove()
    list_href=[]
    // window.location.reload();
}

async function getUsers() {
    const { data, error } = await sb
        .from("users")
        .select("player_name, permission")
        .eq("world", game_data.world)
        .eq("tribe", String(game_data.player.ally));

    if (error) {
        console.error("getUsers failed", error);
        throw new Error("Cannot load users from Supabase");
    }

    // Convert to old format your script expects
    return data
        .map(u => `${u.player_name},${u.permission}`)
        .join("\n");
}





function addWindow(){
    $("#contentContainer").eq(0).prepend(html);
    $("#mobileContent").eq(0).prepend(html);

    if(game_data.device=="desktop"){
        $("#div_container").css("position","fixed");
        $("#div_container").draggable();
    }
}



var loadReportsOk=false;
function testLoadReports(){
    $("#input_search").on("input",function(){
        if(loadReportsOk==false)
        UI.ErrorMessage("Press on <b>Load Reports</b> button first","slow")
    })
    $("#btn_off_coord, #btn_def_coord, #btn_stack_coord").on("click",function(){
        console.log("Hererer")
        if(loadReportsOk==false)
            UI.ErrorMessage("Press on <b>Load Reports</b> button first","slow")
    })

    $("#input_search").mouseout(function(){
    if(loadReportsOk==false)
        $("#input_search").val("");
    })
    $("#minimize_page").on("click",()=>{
        $("#div_minimize").toggle(500)
    })

}


async function uploadAll(){
    let resultReportsResult= await uploadReports().catch(err=>alert(err))
    console.log("status uploads",resultReportsResult)
    let resultIncomingsResult= await uploadIncomings().catch(err=>alert(err))
    console.log("status incomings",resultIncomingsResult)
    let uploadSupportsResult= await uploadSupports().catch(err=>alert(err))
    console.log("status uploadSupports",uploadSupportsResult)
    let uploadTroopsResult= await uploadOwnTroops().catch(err=>alert(err))
    console.log("status uploadTroops",uploadTroopsResult)

    let totalTime = resultReportsResult.totalTimeUpload + resultIncomingsResult.totalTimeUpload + uploadSupportsResult.totalTimeUpload + uploadTroopsResult.totalTimeUpload
    totalTime =  Math.round((totalTime) * 100) / 100
    document.getElementById("progress_all").innerText = `Finished in ${totalTime} s`;

    UI.SuccessMessage(`<b>Upload all info done</b> <br> <br>
                        Total Time Upload : <b>${totalTime} sec</b> <br>
                        <center>
                        <table style ="border: 1px solid black;border-collapse: collapse">
                            <tr>
                                <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px;font-weight: bold">Upload type</td>
                                <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px;font-weight: bold">Time</td>
                            </tr>
                            <tr>
                                <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">Reports</td>
                                <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">${resultReportsResult.totalTimeUpload} sec</td>
                            </tr>
                            <tr>
                                <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">Incominds</td>
                                <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">${resultIncomingsResult.totalTimeUpload} sec</td>
                            </tr>
                            <tr>
                                <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">Commands</td>
                                <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">${uploadSupportsResult.totalTimeUpload} sec</td>
                            </tr>
                            <tr>
                                <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">Troops</td>
                                <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">${uploadTroopsResult.totalTimeUpload} sec</td>
                            </tr>
                    </table>
                  </center>`, 10000)

}

function addCssStyle(){
    var css =`
    .shadow20 {
    text-shadow: 0 0 4px black, 0 0 4px black, 0 0 4px black, 0 0 4px black, 0 0 4px black;
    }
    .scriptHeader{
        color: ${titleColor};
        background: ${backgroundColor};
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center; 
        align-items: center;    
    }
    .scriptContainer{
        background: ${backgroundColor};
        aspect-ratio: 100 / 29;
        cursor:move;
        z-index:50;
        border-radius: 15px;

        border-style: solid;
        border-width: 5px 5px; 
        border-color:${backgroundColor};

    }
    .scriptFooter{
        color: ${titleColor};
        background: ${backgroundColor};
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: right; 
        align-items: center;  
        margin-right:50px;  
    }
    `,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
    
    head.appendChild(style);
    style.type = 'text/css';
    if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
}



if(document.getElementById("incomings_table")!=null){
    window.setInterval(function(){

        var rows= $(".row_a,.row_b")
        console.log("check incomings")
        for(let i=0;i<rows.length;i++)
        {
            let currentHour=rows[i].children[rows[i].children.length-1].innerText.split(":")
            if(parseInt(currentHour[0])==0 && parseInt(currentHour[1])==0 && parseInt(currentHour[2])<20){
                rows[i].remove();
            }
            // else{
            //     break;
            // }
        }
    },10000)
}





/////////////////////////////////////////////////get all reports info//////////////////////////////////////////////////////////////////
async function uploadReports() {

    document.getElementById("progress_reports").innerText = "Getting data...";

    // ===========================
    // LOAD HISTORY (SUPABASE)
    // ===========================
    let map_history_upload = await loadHistoryDB(
        game_data.world,
        game_data.player.ally
    );

    // remove old history (> 8 days)
    Array.from(map_history_upload.keys()).forEach(key => {
        let now = Date.now();
        let reportDate = new Date(map_history_upload.get(key).date).getTime();
        if (now - reportDate > 8 * 24 * 3600 * 1000) {
            map_history_upload.delete(key);
        }
    });

    // ===========================
    // LINKS + VILLAGES
    // ===========================
    let [list_href, mapVillages] = await Promise.all([
        getLinks(true, map_history_upload),
        getInfoVillages()
    ]);

    list_href = list_href.reverse();

    let list_data_reports = [];
    let nr_reports = 0;
    let nr_reports_total = list_href.length;

    return new Promise(async (resolve) => {

        async function ajaxRequest(urls) {

            let current_url = urls.length ? urls.pop().href : "stop";

            if (current_url !== "stop") {

                $.ajax({
                    method: "GET",
                    url: current_url
                }).done(async result => {

                    const parser = new DOMParser();
                    const htmlDoc = parser.parseFromString(result, "text/html");

                    let list = getDataReport(tribemates, htmlDoc);

                    if (list && list.length) {
                        list.forEach(el => {
                            list_data_reports.push({
                                coord: el.coord,
                                reportInfo: el.reportInfo
                            });
                        });
                        nr_reports++;
                        UI.SuccessMessage(`${nr_reports}/${nr_reports_total} reports`);
                    }

                    setTimeout(() => ajaxRequest(list_href), 200);
                });

            } else {

                // ===========================
                // LOAD FROM SUPABASE
                // ===========================
                let map_reports = await loadReportsDB(
                    game_data.world,
                    game_data.player.ally
                );

                let map_incomings = await loadIncomingsDB(
                    game_data.world,
                    game_data.player.ally
                );

                let map_support = await loadSupportDB(
                    game_data.world,
                    game_data.player.ally
                );

                let mapStatus = await loadStatusDB(
                    game_data.world,
                    game_data.player.ally
                );

                // ===========================
                // MERGE REPORTS
                // ===========================
                let nr_update = 0;
                let nr_write = 0;

                list_data_reports.forEach(el => {
                    if (map_reports.has(el.coord)) {
                        map_reports.set(el.coord, {
                            ...map_reports.get(el.coord),
                            ...el.reportInfo
                        });
                        nr_update++;
                    } else {
                        map_reports.set(el.coord, el.reportInfo);
                        nr_write++;
                    }
                });

                // ===========================
                // SAVE REPORTS
                // ===========================
                for (const [coord, reportData] of map_reports.entries()) {
                    await saveReportDB(
                        coord,
                        reportData,
                        game_data.world,
                        game_data.player.ally
                    );
                }

                // ===========================
                // SAVE INCOMINGS
                // ===========================
                for (const [coord, incList] of map_incomings.entries()) {
                    await saveIncomingsDB(
                        coord,
                        incList,
                        game_data.world,
                        game_data.player.ally
                    );
                }

                // ===========================
                // SAVE SUPPORT
                // ===========================
                for (const [coord, supportList] of map_support.entries()) {
                    await saveSupportDB(
                        coord,
                        supportList,
                        game_data.world,
                        game_data.player.ally
                    );
                }

                // ===========================
                // UPDATE STATUS (SUPABASE)
                // ===========================
                let serverTime = document.getElementById("serverTime").innerText;
                let serverDate = document.getElementById("serverDate").innerText.split("/");
                serverDate = `${serverDate[1]}/${serverDate[0]}/${serverDate[2]}`;
                let date_current = `${serverDate} ${serverTime}`;

                mapStatus.set(game_data.player.id.toString(), {
                    name: game_data.player.name,
                    report_date: date_current
                });

                for (const [playerId, statusData] of mapStatus.entries()) {
                    await saveStatusDB(
                        playerId,
                        statusData,
                        game_data.world,
                        game_data.player.ally
                    );
                }

                // ===========================
                // SAVE HISTORY (SUPABASE)
                // ===========================
                for (const [reportId, historyData] of map_history_upload.entries()) {
                    await saveHistoryDB(
                        reportId,
                        historyData,
                        game_data.world,
                        game_data.player.ally
                    );
                }

                document.getElementById("progress_reports").innerText =
                    `${nr_reports_total} reports`;

                UI.SuccessMessage(
                    `<b>Upload reports done</b><br>
                     Updated: <b>${nr_update}</b><br>
                     Added: <b>${nr_write}</b><br>
                     Total: <b>${map_reports.size}</b>`,
                    8000
                );

                resolve({ status: "success" });
            }
        }

        ajaxRequest(list_href);
    });
}



function compress(string, encoding) {
    const byteArray = new TextEncoder().encode(string);
    const cs = new CompressionStream(encoding);
    const writer = cs.writable.getWriter();
    writer.write(byteArray);
    writer.close();
    return new Response(cs.readable).blob();
  }
  
function decompress(byteArray, encoding) {
    const cs = new DecompressionStream(encoding);
    const writer = cs.writable.getWriter();
    writer.write(byteArray);
    writer.close();
    return new Response(cs.readable).arrayBuffer().then(function (arrayBuffer) {
      return new TextDecoder().decode(arrayBuffer);
    });
}


function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const base64String = reader.result.split(',')[1];
            resolve(base64String);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

function base64ToBlob(base64String, type = 'application/octet-stream') {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: type });
}



///////////////////////////////////////////////////////////////////get all links////////////////////////////////////////////////////////////////
function getLinks(all,map_idReports){

    // var currentPage=document.body.innerHTML;
    return new Promise(async(resolve,reject)=>{
        let link_reports=window.location.href;
        if(link_reports.includes("screen=report"))// upload only reports from current folder
            all=false;
        if(all){// all pages from all folders
            link_reports = game_data.link_base_pure+"report&mode=all&group_id=-1";
        }
        let datePage = await ajaxGet(link_reports)
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(datePage, 'text/html'); 


        let list_pages=[]
    
        if($(htmlDoc).find(".paged-nav-item").parent().find("select").length>0){
            Array.from($(htmlDoc).find(".paged-nav-item").parent().find("select").find("option")).forEach(function(item){
                list_pages.push(item.value)
            })
            list_pages.pop();
        }
        else if(htmlDoc.getElementsByClassName("paged-nav-item").length>0){//all pages from the current folder
            let nr=0;
            let pageSize = parseInt($(htmlDoc).find("[name='page_size']").val())
            let length = htmlDoc.getElementsByClassName("paged-nav-item").length+1
            for(let i=0;i<length;i++){
                let page = game_data.link_base_pure+"report&mode=all&from="+nr
                list_pages.push(page)
                nr += pageSize;
            }

    
        }
        else{
            list_pages.push(link_reports);
        }
        list_pages=list_pages.reverse();
        console.log(list_pages)


    
        let list_href=[];
        
        const run = async () => {
            console.log("Starting...");
            for (let i = 0; i < list_pages.length; i++) {
                let pageHTML= await ajaxGet(list_pages[i])
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(pageHTML, 'text/html');

                let table_report= htmlDoc.getElementById("report_list").firstElementChild.children;
                let year=htmlDoc.getElementById("serverDate").innerText.split("/")[2];

                for(let i=1;i<table_report.length-1;i++){
                    let month_day=table_report[i].children[2].innerText;
                    if(month_day.includes("Jan"))
                        month_day = month_day.replace("Jan","01")

                    let date_report=new Date(year+" "+month_day)
                    let current_date=new Date();
                    if(Math.abs(current_date-date_report)<7*24*3600*1000){//old
        
                        let img_icon=table_report[i].children[1].children[0].children.length;
                        if(img_icon>0){//wordsTranslate[0]=supports ///// || table_report[i].innerText.includes(wordsTranslate[0])
                            let obj={
                                id:table_report[i].getElementsByTagName("a")[0].getAttribute("data-id"),
                                href:table_report[i].getElementsByTagName("a")[0].href
                            }
                            if(!map_idReports.has(parseInt(obj.id)))
                                list_href.push(obj)
                        }
                    }
                }
                UI.SuccessMessage(`get link page ${i+1}/${list_pages.length}`) 
            }  
        }
        await run();
        console.log("Done!");
        resolve(list_href)

             
             
            


    })
    
}


function ajaxGet(theUrl){
    return new Promise((resolve,reject)=>{
        let units=game_data.units.slice()
        if(units.includes("militia")){
            units.pop()
        }

        let startAjax=new Date().getTime()
        $.ajax({
            url: theUrl,
            method: 'get',
            success: (data) => {
                
                let stopAjax=new Date().getTime()
                let difAjax=stopAjax-startAjax
                console.log("wait ",difAjax)
                window.setTimeout(()=>{
                    resolve(data)
                },200-difAjax)

            },error:(data)=>{
                reject(data)
            }

        })
    })
}



////////////////////////////////////////////////////////////get data from report////////////////////////////////////////////////////////////////////

function getDataReport(tribemates,htmlDoc){
    var mapObject={};
    var listObject=[];
    var popOff=10000;
    // tribemates=[]
    var reportInfo={};
    try{
    if($(htmlDoc).find("#attack_info_att").length>0){
        var attackInfo=$(htmlDoc).find("#attack_info_att");
        if(attackInfo.text().includes("deleted") || attackInfo.text().includes("---")){
            console.log("error upload")
            return 0;
        }
        var defenseInfo = $(htmlDoc).find("#attack_info_def");
        if(defenseInfo.text().includes("deleted") || defenseInfo.text().includes("---")){
            console.log("error upload")
            return 0;
        }
        
        var attackingPlayer = attackInfo.find('a[href*=info_player]');
        var defendingPlayer = defenseInfo.find('a[href*=info_player]');
        var attackingPlayerId=attackingPlayer.prop('href').match(/id=(\w+)/)[1];
        var defendingPlayerId=defendingPlayer.prop('href').match(/id=(\w+)/)[1];
        reportInfo.attackingPlayerId=attackingPlayerId;
        reportInfo.defendingPlayerId=defendingPlayerId;
    }
    ///////////////////////////////////////////////////////////////////////////
    
    
    if(htmlDoc.getElementsByClassName("unit-item unit-item-axe").length>1)
    {
        var time_report=htmlDoc.getElementsByClassName("small grey")[0].parentElement.innerText.trim()
        // if(new Date()-new Date(time_report)>14*24*3600*1000)//report too old
        //     return listObject;
        reportInfo.attackingArmy = attackInfo.find('#attack_info_att_units tr:nth-of-type(2) .unit-item').get().map((el) => { return { type: $(el).prop('class').match(/unit-item-([\w\-]+)/)[1], count: parseInt($(el).text().trim()) } })
        reportInfo.attackingArmyLosses = attackInfo.find('#attack_info_att_units tr:nth-of-type(3) .unit-item').get().map((el) => { return { type: $(el).prop('class').match(/unit-item-([\w\-]+)/)[1], count: parseInt($(el).text().trim()) } })

        reportInfo.time_report=time_report
        var report=htmlDoc.getElementsByClassName("vis")[3].innerHTML;
        var index=report.indexOf('<div class="no-preview">');
        report=report.substring(0,index);
        // report=lzw_encode(report);
        // reportInfo.report=report;


        //if time reports is 0
        if(reportInfo.time_report == 0){
            let serverTime=htmlDoc.getElementById("serverTime").innerText
            let serverDate=htmlDoc.getElementById("serverDate").innerText.split("/")
            let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
            time_report = months[parseInt(serverDate[1])-1]+" "+serverDate[0]+", "+serverDate[2]+" "+serverTime+ ":000";
            reportInfo.time_report = time_report
        }

   




        ///////////////////////////defender date////////////////////
        var nameAttacker=htmlDoc.getElementById("attack_info_att").children[0].children[0].children[1].innerText;
        var coordAttacker=htmlDoc.getElementsByClassName("village_anchor")[0].innerText.match(/\d+\|\d+/)[0];
        var nameDefender=htmlDoc.getElementById("attack_info_def").children[0].children[0].children[1].innerText;
        var coordDefender=htmlDoc.getElementsByClassName("village_anchor")[1].innerText.match(/\d+\|\d+/)[0];
        

        reportInfo.nameAttacker=nameAttacker;
        reportInfo.coordAttacker=coordAttacker;
        reportInfo.nameDefender=nameDefender;
        reportInfo.coordDefender=coordDefender;

        if(reportInfo.attackingArmy[3].type=="archer"){
            var spear_atac_total =reportInfo.attackingArmy[0].count
            var sword_atac_total =reportInfo.attackingArmy[1].count
            var axe_atac_total   =reportInfo.attackingArmy[2].count
            var archer_atac_total=reportInfo.attackingArmy[3].count
            var spy_atac_total   =reportInfo.attackingArmy[4].count*2
            var light_atac_total =reportInfo.attackingArmy[5].count*4
            var heavy_atac_total =reportInfo.attackingArmy[7].count*6
            var ram_atac_total   =reportInfo.attackingArmy[8].count*5
            var cat_atac_total   =reportInfo.attackingArmy[9].count*8
            var noble=parseInt(htmlDoc.getElementsByClassName("unit-item unit-item-snob")[0].innerText)*100;

            var spear_atac_pierderi =reportInfo.attackingArmyLosses[0].count
            var sword_atac_pierderi =reportInfo.attackingArmyLosses[1].count
            var axe_atac_pierderi   =reportInfo.attackingArmyLosses[2].count
            var archer_atac_pierderi=reportInfo.attackingArmyLosses[3].count
            var spy_atac_pierderi   =reportInfo.attackingArmyLosses[4].count*2
            var light_atac_pierderi =reportInfo.attackingArmyLosses[5].count*4
            var heavy_atac_pierderi =reportInfo.attackingArmyLosses[7].count*6
            var ram_atac_pierderi   =reportInfo.attackingArmyLosses[8].count*5
            var cat_atac_pierderi   =reportInfo.attackingArmyLosses[9].count*8
        }
        else{
            var spear_atac_total=reportInfo.attackingArmy[0].count
            var sword_atac_total=reportInfo.attackingArmy[1].count
            var axe_atac_total  =reportInfo.attackingArmy[2].count
            var spy_atac_total  =reportInfo.attackingArmy[3].count*2
            var light_atac_total=reportInfo.attackingArmy[4].count*4
            var heavy_atac_total=reportInfo.attackingArmy[5].count*6
            var ram_atac_total  =reportInfo.attackingArmy[6].count*5
            var cat_atac_total  =reportInfo.attackingArmy[7].count*8
            var noble=parseInt(htmlDoc.getElementsByClassName("unit-item unit-item-snob")[0].innerText)*100;
            var archer_atac_total=0;

            var spear_atac_pierderi=reportInfo.attackingArmyLosses[0].count
            var sword_atac_pierderi=reportInfo.attackingArmyLosses[1].count
            var axe_atac_pierderi  =reportInfo.attackingArmyLosses[2].count
            var spy_atac_pierderi  =reportInfo.attackingArmyLosses[3].count*2
            var light_atac_pierderi=reportInfo.attackingArmyLosses[4].count*4
            var heavy_atac_pierderi=reportInfo.attackingArmyLosses[5].count*6
            var ram_atac_pierderi  =reportInfo.attackingArmyLosses[6].count*5
            var cat_atac_pierderi  =reportInfo.attackingArmyLosses[7].count*8

        }



        var typeAttacker="?";
        var nrTroupesAttacker=0;
        var nrTroupesAttackerTotal=0;
        var time_return=0;

        if(axe_atac_total+light_atac_total+ram_atac_total + cat_atac_total >=popOff)//&& axe_atac_total>=2500
        {
            
            typeAttacker="off";
            nrTroupesAttacker=(axe_atac_total-axe_atac_pierderi)+(light_atac_total-light_atac_pierderi) + (ram_atac_total-ram_atac_pierderi);
            if(ram_atac_total>0 && noble==0 && axe_atac_total>=0){
                nrTroupesAttackerTotal=axe_atac_total+light_atac_total+ram_atac_total
                let time_attack=ramSpeed*calcDistance(coordAttacker,coordDefender)
                time_return=new Date(time_report).getTime()+time_attack;
                time_return=new Date(time_return)
                let date=new Date(time_return).toDateString().split(" ").slice(1).join(" ")
                time_return=date+" "+new Date(time_return).toTimeString().split(" ")[0]
                
            }else if(axe_atac_total>=0 && noble==0 ){
                nrTroupesAttackerTotal=axe_atac_total+light_atac_total
                time_attack=axeSpeed*calcDistance(coordAttacker,coordDefender)
                time_return=new Date(time_report).getTime()+time_attack;
                time_return=new Date(time_return)
                let date=new Date(time_return).toDateString().split(" ").slice(1).join(" ")
                time_return=date+" "+new Date(time_return).toTimeString().split(" ")[0]    

            }else if(axe_atac_total>=0 && noble>0){
                nrTroupesAttackerTotal=axe_atac_total+light_atac_total+ram_atac_total
                time_attack=axeSpeed*calcDistance(coordAttacker,coordDefender)
                time_return=new Date(time_report).getTime()+time_attack;
                time_return=new Date(time_return)
                let date=new Date(time_return).toDateString().split(" ").slice(1).join(" ")
                time_return=date+" "+new Date(time_return).toTimeString().split(" ")[0]    
            }
        }
        else if(spy_atac_total>4000){
            typeAttacker="spy";
            nrTroupesAttacker=spy_atac_total-spy_atac_pierderi;
        }
        else if(axe_atac_total+light_atac_total+ram_atac_total >20 && spear_atac_total+sword_atac_total+archer_atac_total+heavy_atac_total<15)
        {
            typeAttacker="new_off";
        }
        else if(axe_atac_total+light_atac_total+ram_atac_total <15 && spear_atac_total+sword_atac_total+archer_atac_total+heavy_atac_total>15){
            typeAttacker="def";
        }
        else if(spy_atac_total>=800 && axe_atac_total+light_atac_total+ram_atac_total<500 && spear_atac_total+sword_atac_total+archer_atac_total+heavy_atac_total<40){
            typeAttacker="def_spy";
        }
        else if(spear_atac_total + sword_atac_total + archer_atac_total > 1000){
            typeAttacker="def";
        }





        if((cat_atac_total>=50*8 && typeAttacker=="def") || (cat_atac_total>=50*8 && axe_atac_total+light_atac_total+ram_atac_total<20)){
        
            typeAttacker="def_cat";
            nrTroupesAttacker=cat_atac_total-cat_atac_pierderi;
            if(noble==0){
                nrTroupesAttackerTotal=heavy_atac_total+cat_atac_total
                time_attack=ramSpeed*calcDistance(coordAttacker,coordDefender)
                time_return=new Date(time_report).getTime()+time_attack;
                time_return=new Date(time_return)
                let date=new Date(time_return).toDateString().split(" ").slice(1).join(" ")
                time_return=date+" "+new Date(time_return).toTimeString().split(" ")[0]               
            }
        }



        reportInfo.time_return=time_return
        reportInfo.nrTroupesAttackerTotal=nrTroupesAttackerTotal
        reportInfo.typeAttacker=typeAttacker;
        reportInfo.nrTroupesAttacker=nrTroupesAttacker;
        

        
        /////////////////////////////////////////////////defender date/////////////////////
        var nrTroupesDefender=0;
        var typeDefender="?";
        if(htmlDoc.getElementsByClassName("unit-item unit-item-axe").length>2){
            
            reportInfo.defendingArmy = defenseInfo.find('#attack_info_def_units tr:nth-of-type(2) .unit-item').get().map((el) => { return { type: $(el).prop('class').match(/unit-item-([\w\-]+)/)[1], count: parseInt($(el).text().trim()) } })
            reportInfo.defendingArmyLosses = defenseInfo.find('#attack_info_def_units tr:nth-of-type(3) .unit-item').get().map((el) => { return { type: $(el).prop('class').match(/unit-item-([\w\-]+)/)[1], count: parseInt($(el).text().trim()) } })

            let armyAtHome=[]

            for(let i=0;i<reportInfo.defendingArmy.length;i++){
                armyAtHome.push({
                    type:reportInfo.defendingArmy[i].type,
                    count:reportInfo.defendingArmy[i].count-reportInfo.defendingArmyLosses[i].count
                })
            }
            if(!tribemates.includes(nameDefender.toLowerCase())){
                reportInfo["troopsAtHome_"+coordDefender]=armyAtHome
                reportInfo["time_report_home_"+coordDefender]=time_report
            }


            if(reportInfo.defendingArmy[3].type=="archer"){
                var spear_aparare_total =reportInfo.defendingArmy[0].count
                var sword_aparare_total =reportInfo.defendingArmy[1].count
                var axe_aparare_total   =reportInfo.defendingArmy[2].count
                var archer_aparare_total=reportInfo.defendingArmy[3].count
                var spy_aparare_total   =reportInfo.defendingArmy[4].count*2
                var light_aparare_total =reportInfo.defendingArmy[5].count*4
                var heavy_aparare_total =reportInfo.defendingArmy[7].count*6
                var ram_aparare_total   =reportInfo.defendingArmy[8].count*5
                var cat_aparare_total   =reportInfo.defendingArmy[9].count*8

                var spear_aparare_pierderi =reportInfo.defendingArmyLosses[0].count
                var sword_aparare_pierderi =reportInfo.defendingArmyLosses[1].count
                var axe_aparare_pierderi   =reportInfo.defendingArmyLosses[2].count
                var archer_aparare_pierderi=reportInfo.defendingArmyLosses[3].count
                var spy_aparare_pierderi   =reportInfo.defendingArmyLosses[4].count*2
                var light_aparare_pierderi =reportInfo.defendingArmyLosses[5].count*4
                var heavy_aparare_pierderi =reportInfo.defendingArmyLosses[7].count*6
                var ram_aparare_pierderi   =reportInfo.defendingArmyLosses[8].count*5
                var cat_aparare_pierderi   =reportInfo.defendingArmyLosses[9].count*8

            }
            else{
                var spear_aaparare_total=reportInfo.defendingArmy[0].count
                var sword_aparare_total =reportInfo.defendingArmy[1].count
                var axe_aparare_total   =reportInfo.defendingArmy[2].count
                var spy_aparare_total   =reportInfo.defendingArmy[3].count*2
                var light_aparare_total =reportInfo.defendingArmy[4].count*4
                var heavy_aparare_total =reportInfo.defendingArmy[5].count*6
                var ram_aparare_total   =reportInfo.defendingArmy[6].count*5
                var cat_aparare_total   =reportInfo.defendingArmy[7].count*8
                var archer_aparare_total=0;

                var spear_aaparare_pierderi=reportInfo.defendingArmyLosses[0].count
                var sword_aparare_pierderi =reportInfo.defendingArmyLosses[1].count
                var axe_aparare_pierderi   =reportInfo.defendingArmyLosses[2].count
                var spy_aparare_pierderi   =reportInfo.defendingArmyLosses[3].count*2
                var light_aparare_pierderi =reportInfo.defendingArmyLosses[4].count*4
                var heavy_aparare_pierderi =reportInfo.defendingArmyLosses[5].count*6
                var ram_aparare_pierderi   =reportInfo.defendingArmyLosses[6].count*5
                var cat_aparare_pierderi   =reportInfo.defendingArmyLosses[7].count*8
                var archer_aparare_pierderi=0;

            }



            nrTroupesDefender=(axe_aparare_total-axe_aparare_pierderi)+(light_aparare_total-light_aparare_pierderi) + (ram_aparare_total-ram_aparare_pierderi);
            if(axe_aparare_total+light_aparare_total+ram_aparare_total +cat_aparare_total >=popOff ){//axe_aparare_total>=2500
                typeDefender="off";
            }
            else if(axe_aparare_total+light_aparare_total+ram_aparare_total +cat_aparare_total >=500 ){//axe_aparare_total>=2500
                typeDefender="new_off";
            }
            else{
                typeDefender="home_seen";

            }


        }

        if(htmlDoc.getElementsByClassName("unit-item unit-item-axe").length>4){
            let travelingTroopsContainer = $(htmlDoc).find('#attack_spy_away');
            if (travelingTroopsContainer.length) 
            {
                reportInfo.travelingTroops = {};
        
                travelingTroopsContainer.find('.unit-item').each((i, el) => {
                    let $el = $(el);
                    let cls = $el.prop('class');
                    let unitType = cls.match(/unit\-item\-(\w+)/)[1];
                    reportInfo.travelingTroops[unitType] = parseInt($el.text().trim());
                });
            
                var axe_aparare_spy=reportInfo.travelingTroops.axe
                var light_aparare_spy=reportInfo.travelingTroops.light*4;
                var ram_aparare_spy=reportInfo.travelingTroops.ram*5;
                nrTroupesDefender+=axe_aparare_spy+(light_aparare_spy) + (ram_aparare_spy)
    
                if(nrTroupesDefender >= popOff )
                    typeDefender="off";

                else{
                    var spear_aparare_spy=reportInfo.travelingTroops.spear
                    var sword_aparare_spy=reportInfo.travelingTroops.sword
                    if(htmlDoc.getElementsByClassName("unit-item unit-item-archer").length>0)
                        var archer_aparare_spy=reportInfo.travelingTroops.archer
                    else
                        var archer_aparare_spy=0
    
                    var heavy_aparare_spy=reportInfo.travelingTroops.heavy*6;
                    var trupe_aparare_total=spear_aparare_total+sword_aparare_total+archer_aparare_total+heavy_aparare_total;
                    var total_aparare_spy=spear_aparare_spy+sword_aparare_spy+archer_aparare_spy+heavy_aparare_spy;
        
                    if(total_aparare_spy>1000){
                        typeDefender="def";
                        nrTroupesDefender=total_aparare_spy;
                    }
                    else if(axe_aparare_spy+light_aparare_spy <10 &&  axe_aparare_total+light_aparare_total<100 &&  trupe_aparare_total>5000 && total_aparare_spy<=1000){
                        typeDefender="def??";
                    }
                }
            }

        }
        reportInfo.typeDefender=typeDefender;
        reportInfo.nrTroupesDefender=nrTroupesDefender;

        if(!tribemates.includes(nameAttacker.toLowerCase())){
            try {
                let label = $(".rename-icon").parent().text()
                if(label.includes("pred: fake")){
                    if(nrTroupesAttacker < 150){// true fake
                        let countApiKey = "fake_true";
                        $.getJSON(`https://api.counterapi.dev/v1/${countNameSpace}/${countApiKey}/up`, response=>{
                            console.log(`nr fake true:${response.count} times`);
                        });
                    }
                    else{
                        let countApiKey = "fake_false";
                        $.getJSON(`https://api.counterapi.dev/v1/${countNameSpace}/${countApiKey}/up`, response=>{
                            console.log(`nr fake false: ${response.count} times`);
                        }); 
                    }
                }
                else if(label.includes("pred: nuke")){
                    if(nrTroupesAttacker > 150 && typeAttacker == "off"){// true fake
                        let countApiKey = "nuke_true";
                        $.getJSON(`https://api.counterapi.dev/v1/${countNameSpace}/${countApiKey}/up`, response=>{
                            console.log(`nr nuke true: ${response.count} times`);
                        });
                    }
                    else{
                        let countApiKey = "nuke_false";
                        $.getJSON(`https://api.counterapi.dev/v1/${countNameSpace}/${countApiKey}/up`, response=>{
                            console.log(`nr nuke false: ${response.count} times`);
                        }); 
                    }
                }
                else if(label.includes("pred: fang")){
                    if(nrTroupesAttacker > 150 && typeAttacker == "def_cat"){// true fake
                        let countApiKey = "fang_true";
                        $.getJSON(`https://api.counterapi.dev/v1/${countNameSpace}/${countApiKey}/up`, response=>{
                            console.log(`nr fang true: ${response.count} times`);
                        });
                    }
                    else{
                        let countApiKey = "fang_false";
                        $.getJSON(`https://api.counterapi.dev/v1/${countNameSpace}/${countApiKey}/up`, response=>{
                            console.log(`nr fang false: ${response.count} times`);
                        }); 
                    }
                }
                
            } catch (error) {
                
            }
        }

        if(!tribemates.includes(nameAttacker.toLowerCase()) && !reportInfo.typeAttacker.includes("?")){//!reportInfo.typeAttacker.includes("?")
            // console.log("attacker")
            mapObject.coord=coordAttacker;
            mapObject.reportInfo=reportInfo;
            listObject.push(mapObject);
            mapObject={};
        }
        if(!tribemates.includes(nameDefender.toLowerCase()) && !reportInfo.typeDefender.includes("?")){
            // console.log("defender")
            mapObject.coord=coordDefender;
            mapObject.reportInfo=reportInfo;
            listObject.push(mapObject);
        }
    }
    else if(htmlDoc.getElementsByClassName("unit-item unit-item-axe").length==0 || htmlDoc.getElementsByClassName("g-recaptcha").length>0
        ||htmlDoc.getElementsByClassName("unit-item unit-item-axe")==undefined ||  checkContainsCaptcha(htmlDoc)==true){//recaptcha
        console.log("recapthca")
        return null;
    }
    
    return listObject;
    }
    catch(e){
        console.log("erorr in upload")
        console.log(e)
        return 0;
    }

}

function getDataReportTypeAttack(tribemates,htmlDoc){
    var listObject=[];
    var popOff=1000;
    // tribemates=[]
    try{
    if($(htmlDoc).find("#attack_info_att").length>0){
        var attackInfo=$(htmlDoc).find("#attack_info_att");
        if(attackInfo.text().includes("deleted") || attackInfo.text().includes("---")){
            console.log("error upload")
            return 0;
        }
        var defenseInfo = $(htmlDoc).find("#attack_info_def");
        if(defenseInfo.text().includes("deleted") || defenseInfo.text().includes("---")){
            console.log("error upload")
            return 0;
        }
        
        var attackingPlayer = attackInfo.find('a[href*=info_player]');
        var defendingPlayer = defenseInfo.find('a[href*=info_player]');
        var attackingPlayerId=attackingPlayer.prop('href').match(/id=(\w+)/)[1];
        var defendingPlayerId=defendingPlayer.prop('href').match(/id=(\w+)/)[1];

    }
    ///////////////////////////////////////////////////////////////////////////
    
    
    if(htmlDoc.getElementsByClassName("unit-item unit-item-axe").length>1)
    {
        var time_report=htmlDoc.getElementsByClassName("small grey")[0].parentElement.innerText.trim()
        let attackingArmy = attackInfo.find('#attack_info_att_units tr:nth-of-type(2) .unit-item').get().map((el) => { return { type: $(el).prop('class').match(/unit-item-([\w\-]+)/)[1], count: parseInt($(el).text().trim()) } })
        //if time reports is 0
        if(time_report == 0){
            let serverTime=htmlDoc.getElementById("serverTime").innerText
            let serverDate=htmlDoc.getElementById("serverDate").innerText.split("/")
            let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
            time_report = months[parseInt(serverDate[1])-1]+" "+serverDate[0]+", "+serverDate[2]+" "+serverTime+ ":000";
        }
        let millis=parseInt( time_report.split(":").pop());


        ///////////////////////////defender date////////////////////
        var nameAttacker=htmlDoc.getElementById("attack_info_att").children[0].children[0].children[1].innerText;
        var coordAttacker=htmlDoc.getElementsByClassName("village_anchor")[0].innerText.match(/\d+\|\d+/)[0];
        var nameDefender=htmlDoc.getElementById("attack_info_def").children[0].children[0].children[1].innerText;
        var coordDefender=htmlDoc.getElementsByClassName("village_anchor")[1].innerText.match(/\d+\|\d+/)[0];
        

        if(attackingArmy[3].type=="archer"){
            var spear_atac_total =attackingArmy[0].count
            var sword_atac_total =attackingArmy[1].count
            var axe_atac_total   =attackingArmy[2].count
            var archer_atac_total=attackingArmy[3].count
            var light_atac_total =attackingArmy[5].count*4
            var heavy_atac_total =attackingArmy[7].count*6
            var ram_atac_total   =attackingArmy[8].count*5
            var cat_atac_total   =attackingArmy[9].count*8
        }
        else{
            var spear_atac_total=attackingArmy[0].count
            var sword_atac_total=attackingArmy[1].count
            var axe_atac_total  =attackingArmy[2].count
            var light_atac_total=attackingArmy[4].count*4
            var heavy_atac_total=attackingArmy[5].count*6
            var ram_atac_total  =attackingArmy[6].count*5
            var cat_atac_total  =attackingArmy[7].count*8
            var archer_atac_total=0;

        }


        let typeAttack = "?"

        if(axe_atac_total+light_atac_total+ram_atac_total + cat_atac_total >=popOff)//&& axe_atac_total>=2500
        {
            if(ram_atac_total>0 || cat_atac_total>0)
                typeAttack="nuke"       
        }
        else if( cat_atac_total>=50*8 && axe_atac_total+light_atac_total+ram_atac_total<20){
            if(ram_atac_total>0 || cat_atac_total>0)
                typeAttack="fang"
        }
        else if(axe_atac_total+light_atac_total+ram_atac_total+spear_atac_total+
                sword_atac_total+archer_atac_total+heavy_atac_total +cat_atac_total + ram_atac_total < 150){
            if(ram_atac_total>0 || cat_atac_total>0)
                typeAttack="fake"

        }   

        if(!tribemates.includes(nameAttacker.toLowerCase()) && !typeAttack.includes("?")){
            let distance = calcDistance(coordAttacker,coordDefender)

            let durationAttack = ramSpeed*distance //mm
            durationAttack=Math.round(durationAttack/1000)*1000
            let date_launch = new Date(time_report).getTime() - durationAttack ;
            date_launch = new Date(date_launch).getTime()
            date_launch = parseDate(date_launch)+":"+millis;


            listObject.push({
                date_launch:date_launch,
                typeAttack:typeAttack,
                attackingPlayerId:attackingPlayerId,
                coord_off:coordAttacker
            });
            // console.log("listObject2")
            // console.log(listObject)
        }
        

    }
    else if(htmlDoc.getElementsByClassName("unit-item unit-item-axe").length==0 || htmlDoc.getElementsByClassName("g-recaptcha").length>0
        ||htmlDoc.getElementsByClassName("unit-item unit-item-axe")==undefined ||  checkContainsCaptcha(htmlDoc)==true){//recaptcha
        console.log("recapthca")
        return null;
    }
    // console.log("listObject")
    // console.log(listObject)
    return listObject;
    }
    catch(e){
        console.log("erorr in upload")
        console.log(e)
        return 0;
    }

}
function checkContainsCaptcha(docOrHtml) {
    var foundCaptcha = false;
    if (typeof docOrHtml == 'string') {
        foundCaptcha = !!docOrHtml.match(/data\-bot\-protect=/);
    } else {
        let $doc = $(docOrHtml);
        let $body = $doc.find('#ds_body');
        foundCaptcha = $body.length && !!$body.data('bot-protect')
    }

    if (foundCaptcha) console.log('Found captcha!');
    return foundCaptcha;
}

function calcDistance(coord1,coord2){
    let x1=parseInt(coord1.split("|")[0])
    let y1=parseInt(coord1.split("|")[1])
    let x2=parseInt(coord2.split("|")[0])
    let y2=parseInt(coord2.split("|")[1])

    return Math.sqrt( (x1-x2)*(x1-x2) +  (y1-y2)*(y1-y2) );
}

////////////////////////////////////////////////data compression////////////////////////////////////////////////////////////////////////////
function lzw_encode (s) {
    if (!s) return s;
    var dict = new Map(); // Use a Map!
    var data = (s + "").split("");
    var out = [];
    var currChar;
    var phrase = data[0];
    var code = 256;
    for (var i = 1; i < data.length; i++) {
        currChar = data[i];
        if (dict.has(phrase + currChar)) {
            phrase += currChar;
        } else {
            out.push (phrase.length > 1 ? dict.get(phrase) : phrase.codePointAt(0));
            dict.set(phrase + currChar, code);
            code++;
            if (code === 0xd800) { code = 0xe000; }
            phrase = currChar;
        }
    }
    out.push (phrase.length > 1 ? dict.get(phrase) : phrase.codePointAt(0));
    for (var i = 0; i < out.length; i++) {
        out[i] = String.fromCodePoint(out[i]);
    }
    //console.log ("LZW MAP SIZE", dict.size, out.slice (-50), out.length, out.join("").length);
    return out.join("");
}
////////////////////////////////////////////////data decompression////////////////////////////////////////////////////////////////////////////
function lzw_decode (s) {
    var dict = new Map(); // Use a Map!
    var data = Array.from(s + "");
    //var data = (s + "").split("");
    var currChar = data[0];
    var oldPhrase = currChar;
    var out = [currChar];
    var code = 256;
    var phrase;
    for (var i = 1; i < data.length; i++) {
        var currCode = data[i].codePointAt(0);
        if (currCode < 256) {
            phrase = data[i];
        } else {
            phrase = dict.has(currCode) ? dict.get(currCode) : (oldPhrase + currChar);
        }
        out.push(phrase);
        var cp = phrase.codePointAt(0);
        currChar = String.fromCodePoint(cp); //phrase.charAt(0);
        dict.set(code, oldPhrase + currChar);
        code++;
        if (code === 0xd800) { code = 0xe000; }
        oldPhrase = phrase;
    }
    return out.join("");
}
///////////////////////////////////////////////////////get request//////////////////////////////////////////////////////////////////////////
function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


///////////////////////////////////////////////////////get speed//////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////get all incomings//////////////////////////////////////////////////////////////////////////

function getIncomings(){
    return new Promise( async(resolve,reject)=>{
        if($('[id="incomings_amount"]:visible').length == 0){
            document.getElementById("progress_incomings").innerText="No incs";
            resolve(new Map())
        }
        else{
            console.log("herere")
            if(document.getElementsByClassName("info").length>0)
                $(".info").remove()

            document.getElementById("progress_incomings").innerText="Getting data...";
            let incomings_href= game_data.link_base_pure+"overview_villages&mode=incomings&type=all&subtype=attacks&group=0&page=-1";
    
            console.log("currentLink")
            console.log(incomings_href)
            let data = await ajaxGet(incomings_href);
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(data, 'text/html');

            let list_href=[];
            if(htmlDoc.getElementsByClassName("vis")[1].getElementsByTagName("select").length>0){
                Array.from(htmlDoc.getElementsByClassName("vis")[1].getElementsByTagName("select")[0].options).forEach(el=>{
                    list_href.push(el.value);
                })
                list_href.pop();
            }
            else if(htmlDoc.getElementsByClassName("paged-nav-item").length>0){
                let arr=Array.from(htmlDoc.getElementsByClassName("paged-nav-item"));
                for(let i=0;i<arr.length;i++)
                list_href.push(arr[i].getAttribute("href"))
            }
            else{
                list_href.push(incomings_href)
        
            }
    
    
            console.log(list_href)
            let incomings_data=new Map();
        
    
            var indexIncoming=1;
            var url_length=list_href.length
            function ajaxRequest (urls) {
                let current_url
                if(urls.length>0){
                    current_url=urls.pop() 
                }
                else{
                    current_url="stop"
                }
                console.log("in functie in plm "+urls.length)
                // console.log(current_url)
                
                var start_ajax=new Date();
                if (urls.length >= 0 && current_url!="stop") {
                    $.ajax({
                        url: current_url,
                        method: 'get',
                        success: (data) => {
                            const parser = new DOMParser();
                            const htmlDoc = parser.parseFromString(data, 'text/html');

                            if(htmlDoc.getElementById("incomings_table")==null)
                                alert("turn off the filters");
                            let table_incomings=htmlDoc.getElementById("incomings_table").getElementsByTagName("tbody")[0].children
                            for(let i=1;i<table_incomings.length-1;i++){
                                if(table_incomings[i].children[0].innerText!="--"){
                                    let coord_def=table_incomings[i].children[1].innerText.match(/\d+\|\d+/)[0]
                                    let coord_off=table_incomings[i].children[2].innerText.match(/\d+\|\d+/)[0]
                                    let length_tr=table_incomings[i].children.length
                                    let time_land=table_incomings[i].children[length_tr-2].innerText
                                    let milliseconds = time_land.split(":").pop();
                                    var nameTroupe=table_incomings[i].children[0].innerText.trim().split(/\s+/)[0].toLowerCase();

                                    let player_off=table_incomings[i].children[length_tr-4].innerText.trim()
                                    let player_def=game_data.player.name
    
                                    let id_player_def=game_data.player.id.toString()
                                    let id_player_off=table_incomings[i].children[length_tr-4].getElementsByTagName("a")[0].href.split("id=")[1]
                                    
                                    let id_coord_def=table_incomings[i].children[2].getElementsByTagName("a")[0].href.split("village=")[1].split("&")[0]
                                    let id_coord_off=table_incomings[i].children[2].getElementsByTagName("a")[0].href.split("id=")[1]
    
                                    let distance=calcDistance(coord_off,coord_def);

                                    let server_date=htmlDoc.getElementById("serverDate").innerText.split("/")
                                    let date_land=getLandTime(time_land)
                                    let labelName="none"
                                    let type_attack=table_incomings[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img")[0].src.split("command/")[1]
                                    if(table_incomings[i].children[0].getElementsByTagName("img").length==2){
                                        labelName=table_incomings[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img")[1].src.split("tiny/")[1]
                                        if(labelName==undefined)
                                            labelName=table_incomings[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img")[1].src.split("command/")[1]
    
                                    }

                                    let date_launch = "none";
                                    if(table_incomings[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img").length==2){
                                        let labelName=table_incomings[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img")[1].src
                                        let time_attack=0;
                                        if(labelName.includes("snob.png")){
                                            time_attack=nobleSpeed*distance
                                        }else if(labelName.includes("ram.png") || labelName.includes("catapult.png")){
                                            time_attack=ramSpeed*distance
                                        }else if(labelName.includes("sword.png")){
                                            time_attack=swordSpeed*distance
                                        }else if(labelName.includes("axe.png")){
                                            time_attack=axeSpeed *distance
                                        }
                                        
                                        time_attack=Math.round(time_attack/1000)*1000
                                        date_launch = parseDate(new Date(date_land).getTime()-time_attack)+":"+milliseconds
                                    }else if(nameTroupe == lang["dcfafcb4323b102c7e204555d313ba0a"].toLowerCase()){
                                        let timeInMM=table_incomings[i].children[length_tr-1].innerText.split(":")
                                        timeInMM=timeInMM[0]*3600*1000+timeInMM[1]*60*1000+timeInMM[2]*1000;
                                        let time_attack=0;
                                        if(timeInMM > ramSpeed*distance){
                                            time_attack=nobleSpeed*distance
                                        }
                                        else if(timeInMM > swordSpeed*distance){
                                            time_attack=ramSpeed*distance
                                        }
                                        else if(timeInMM > axeSpeed*distance){
                                            time_attack=swordSpeed*distance
                                        }
                                        else if(timeInMM > heavySpeed*distance){
                                            time_attack=heavySpeed*distance
                                        }
                                        else if(timeInMM > lightSpeed*distance){
                                            time_attack=lightSpeed*distance
                                        }
                                        else if(timeInMM > spySpeed*distance){
                                            time_attack=spySpeed*distance
                                        }       

                                        if(time_attack>0){
                                            time_attack=Math.round(time_attack/1000)*1000
                                            date_launch = parseDate(new Date(date_land).getTime()-time_attack)+":"+milliseconds
                                        }
                                        
                                    }
                                    // console.log(table_incomings[i])
                                    // console.log(date_land)
                                    if(new Date(date_land)=="Invalid Date"){
                                        throw new Error("new date doesnt working(use opera or chrome)")
                                    }
    
                                    // console.log(date_land)
                                    if(!incomings_data.has(coord_off)){
                                        let list=[{
                                                    date_land:date_land,
                                                    date_launch:date_launch.trim(),
                                                    coord_def:coord_def,
                                                    coord_off:coord_off,
                                                    player_off:player_off,
                                                    player_def:player_def,
                                                    labelName:labelName,
                                                    type_attack:type_attack,
                                                    id_player_def:id_player_def,
                                                    id_player_off:id_player_off,
                                                    id_coord_def:id_coord_def,
                                                    id_coord_off:id_coord_off
                                                }]
                                        incomings_data.set(coord_off,list)
                    
                                    }else{
                                        let list=incomings_data.get(coord_off)
                                        list.push({
                                            date_land:date_land,
                                            date_launch:date_launch,
                                            coord_def:coord_def,
                                            coord_off:coord_off,
                                            player_off:player_off,
                                            player_def:player_def,
                                            labelName:labelName,
                                            type_attack:type_attack,
                                            id_player_def:id_player_def,
                                            id_player_off:id_player_off,
                                            id_coord_def:id_coord_def,
                                            id_coord_off:id_coord_off
                                            })
                                        incomings_data.set(coord_off,list)
                                    }
                                }
                            }
    
                            UI.SuccessMessage(indexIncoming+"/"+url_length)
                            indexIncoming++;
                            var stop_ajax=new Date();
                            var dif_time=stop_ajax.getTime()-start_ajax.getTime()
                            window.setTimeout(function(){
                                ajaxRequest (list_href)
                            },dif_time)
                        }
                    })
                
                }
                else
                {

                
                    if( htmlDoc.getElementsByClassName("g-recaptcha").length>0){//recaptcha
                        console.log("recapthca")
                        UI.ErrorMessage("recapthca, upload again")
                        document.getElementById("progress_incomings").innerText="Recaptcha..";

                        resolve(null);
                    }
    
                    window.setTimeout(function(){
                        console.log(incomings_data)
                        resolve(incomings_data)
                    },1000+Math.random()*500)
    
    
    
                }
            }
            if(list_href.length>0)
                ajaxRequest(list_href);
            else
                reject("error on incomings")
        }
        
    })
}
///////////////////////////////////////////////////////upload all incomings//////////////////////////////////////////////////////////////////////////

async function uploadIncomings() {
    document.getElementById("progress_incomings").innerText = "Getting data...";

    // ⏳ ensure Supabase + game data
    while (!window.__supabaseReady || typeof game_data === "undefined") {
        await new Promise(r => setTimeout(r, 50));
    }

    // ===========================
    // 1️⃣ GET NEW INCOMINGS
    // ===========================
    const incomings_data = await getIncomings(); // Map<coord, list[]>

    // ===========================
    // 2️⃣ LOAD EXISTING (SUPABASE)
    // ===========================
    let map_incomings = await loadIncomingsDB(
        game_data.world,
        game_data.player.ally
    );

    // ===========================
    // 3️⃣ CLEAN OLD INCOMINGS
    // ===========================
    const now = Date.now();
    const MAX_AGE = 50 * 3600 * 1000; // ~2 days

    map_incomings.forEach((list, coord) => {
        list = list.filter(inc => {
            if (!inc.date_land) return false;
            return new Date(inc.date_land).getTime() + MAX_AGE > now;
        });

        if (list.length === 0) {
            map_incomings.delete(coord);
        } else {
            map_incomings.set(coord, list);
        }
    });

    // ===========================
    // 4️⃣ MERGE NEW INCOMINGS
    // ===========================
    let newIncs = 0;

    incomings_data.forEach((list, coord) => {
        if (map_incomings.has(coord)) {
            const merged = [
                ...map_incomings.get(coord),
                ...list
            ];

            // deduplicate by date_land
            const unique = [
                ...new Map(
                    merged.map(i => [i.date_land, i])
                ).values()
            ].sort((a, b) =>
                new Date(a.date_land) - new Date(b.date_land)
            );

            map_incomings.set(coord, unique);
        } else {
            map_incomings.set(coord, list);
            newIncs += list.length;
        }
    });

    // ===========================
    // 5️⃣ SAVE TO SUPABASE
    // ===========================
    let totalIncs = 0;

    for (const [coord, list] of map_incomings.entries()) {
        totalIncs += list.length;
        await saveIncomingsDB(
            coord,
            list,
            game_data.world,
            game_data.player.ally
        );
    }

    // ===========================
    // 6️⃣ UPDATE STATUS (SUPABASE)
    // ===========================
    const serverTime = document.getElementById("serverTime").innerText;
    const serverDate = document
        .getElementById("serverDate")
        .innerText.split("/");

    const date_current =
        `${serverDate[1]}/${serverDate[0]}/${serverDate[2]} ${serverTime}`;

    await saveStatusDB(
        game_data.player.id.toString(),
        {
            name: game_data.player.name,
            incoming_date: date_current
        },
        game_data.world,
        game_data.player.ally
    );

    // ===========================
    // 7️⃣ UI FEEDBACK
    // ===========================
    document.getElementById("progress_incomings").innerText =
        `${map_incomings.size} coords`;

    UI.SuccessMessage(
        `<b>Upload incomings done</b><br><br>
         New incomings: <b>${newIncs}</b><br>
         Total incomings: <b>${totalIncs}</b>`,
        8000
    );

    return { status: "success" };
}

//////////////////////////////////////////////////////upload all data to dropbox/////////////////////////////////////////////////////////////////

function uploadFile(data,filename,dropboxToken){
    return new Promise((resolve,reject)=>{
        // var file = new Blob([data], {type: "plain/text"});
        var file = data
        var nr_start1=new Date().getTime();
        file.name=filename;

        //stop refreshing the page
        $(document).bind("keydown", disableF5);
        window.onbeforeunload = function (e) {
            console.log("is uploading");
            return "are you sure?";
        };

        var xhr = new XMLHttpRequest();
        xhr.upload.onprogress = function(evt) {
            console.log(evt)
            var percentComplete = parseInt(100.0 * evt.loaded / evt.total);
            console.log(percentComplete)
            UI.SuccessMessage("progress upload: "+percentComplete+"%")
        };

        xhr.onload = function() {
            if (xhr.status === 200) {
                var fileInfo = JSON.parse(xhr.response);
                // Upload succeeded. Do something here with the file info.
                UI.SuccessMessage("upload succes")
                var nr_stop1=new Date().getTime();
                console.log("time upload: "+(nr_stop1-nr_start1))

                //enable refresh page
                window.onbeforeunload = function (e) {
                    console.log("done");
                };
                $(document).unbind("keydown", disableF5);
                // if(typeof(TWMap) !="undefined" ){
                //     console.log("init map")
                //     TWMap.init();
                // }
                resolve("succes")

            }
            else {
                var errorMessage = xhr.response || 'Unable to upload file';
                // Upload failed. Do something here with the error.
                UI.SuccessMessage("upload failed")
                reject(errorMessage)
            }
        };

        xhr.open('POST', 'https://content.dropboxapi.com/2/files/upload',false);
        xhr.setRequestHeader('Authorization', 'Bearer ' + dropboxToken);
        xhr.setRequestHeader('Content-Type', 'application/octet-stream');
        xhr.setRequestHeader('Dropbox-API-Arg', JSON.stringify({
            path: '/' +  file.name,
            autorename: true,
            mode:'overwrite',
            mute: false
        }));

        xhr.send(file)
    })
}

async function readFileDropbox(filename) {
    switch (filename) {

        case "SUPABASE_SUPPORT": {
            const map = await loadSupportDB(game_data.world, game_data.player.ally);
            return new Blob(
                [JSON.stringify([Array.from(map.entries()), []])],
                { type: "application/json" }
            );
        }

        case "SUPABASE_COMMANDS_ATTACK": {
            const map = await loadCommandsAttackDB(game_data.world, game_data.player.ally);
            return new Blob(
                [JSON.stringify(Array.from(map.entries()))],
                { type: "application/json" }
            );
        }

        case "SUPABASE_INCOMINGS": {
            const map = await loadIncomingsDB(game_data.world, game_data.player.ally);
            return new Blob(
                [JSON.stringify(Array.from(map.entries()))],
                { type: "application/json" }
            );
        }

        case "SUPABASE_STATUS": {
            const map = await loadStatusDB(game_data.world, game_data.player.ally);
            return new Blob(
                [JSON.stringify(Array.from(map.entries()))],
                { type: "application/json" }
            );
        }

        default:
            throw new Error("Unknown virtual file: " + filename);
    }
}




function replaceSpecialCaracters(data) {
    let result = ""
    for (let i = 0; i < data.length; i++) {
        if (data[i] == "È›")
            result += 't'
        else if (data[i] == "Å£")
            result += 't'
        else if (data[i] == "Èš")
            result += "T"
        else if (data[i] == "Ä‚")
            result += "A"
        else if (data[i] == "Äƒ")
            result += "a"
        else if (data[i] == "Ã‚")
            result += "A"
        else if (data[i] == "È˜")
            result += "S"
        else if (data[i] == "È™")
            result += "s"
        else if (data[i] == "ÃŽ")
            result += "I"
        else if (data[i] == "Ã®")
            result += "i"
        else
            result += data[i]
    }
    return result




}

function disableF5(e) { if ((e.which || e.keyCode) == 116 || (e.which || e.keyCode) == 82) e.preventDefault(); };


//////////////////////////////////////////////////////buttons in incomings page/////////////////////////////////////////////////////////////////

            
function showButtons(){
    if(document.getElementById("incomings_table")!=null){
        $("#table_incomings").remove();
        var incomingshtml=`
    
        <table id="table_incomings" class="" border="1" style="width: 50%;">    
            <tbody>
            <tr>
                <td style="text-align:center; width:auto;">
                    <center style="margin:10px"><input class="btn" type="button" onclick="addWindow()"value="Open Upload"></center>
                </td>            
            
                <td style="text-align:center; width:auto;">
                        <center style="margin:10px"><input id="moreInfo" class="btn" type="button" onclick="moreInfo()" value="More Info"></center>
                        <table>
                            <tr>
                                <td>gap[sec]:</td>
                                <td><input type="number" id="input_gap" value="5" min="0" max="1000"  placeholder="5" style="text-align:center"></td>
                                <td><a href="#" onclick="UI.InfoMessage('This value is to find launch series of the enemy <br> It can predict if an incoming is fake/nuke/fang <br> The lower the value is set the more likely the prediction is true ',8000)"><img src="https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png" style="width: 13px; height: 13px"/></a></td>
                            </tr>
                        </table>
                </td>            
                <td style="text-align:center; width:auto;">
                        <center style="margin:10px"><input class="btn" id="btn_tag" type="button" onclick="tagIncomings()" value="Tag"><a href="#" onclick="UI.InfoMessage('You can tag incs directly without pressing on More Info button',10000)"><img src="https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png" style="width: 13px; height: 13px"/></a> </center>
                        <center style="margin:10px"><input class="btn" id="btn_backtime" type="button"  value="back time"></center>
                        <center style="margin:10px"><input class="btn" id="btn_senttime" type="button"  value="sent time"></center>
                        <center style="margin:10px"><input class="btn" id="btn_stacks" type="button"  value="stacks"></center>
                </td>            
                <td style="text-align:center; width:auto;" >        
                        <table>
                            <tr>
                                <td colspan = "2"><input class="btn" type="button" onclick="setIntervalIncomings()" value="Get Incomings"></td>
                                <td><a href="#" onclick="UI.InfoMessage(\`
                                    Get all incomings from a datetime range when <b>Get Only Fakes</b> and <b>Get Def Vills</b> are red <br><br>
                                    Get only fake incomings from a datetime range when <b>Get Only Fakes</b> is green and <b> Get Def Vills </b> is red, it's calculated based on <b>Current pop</b> and remaining troops that are traveling back home<br><br>
                                    Get only def vills incomings from a datetime range when <b>Get Only Fakes</b> is red and <b>Get Def Vills</b> is green <br><br>
                                    Get only def vills and fakes incomings from a datetime range when <b>Get Only Fakes</b> is green and <b>Get Def Vills</b> is green <br><br>
                                \`,50000)"><img src="https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png" style="width: 13px; height: 13px"/></a></td>
                            </tr>
                            <tr>
                                <td colspan = "2"> <input class="btn" type="button" id="btn_get_fakes" value="Get Only Fakes"></td>
                                <td><a href="#" onclick="UI.InfoMessage('Keep all the fakes  based on remaining troops<br> that are returning back home from last report <br> and the value of <b>Current pop</b> <br>It is used when <b>Get Incomings</b> is pressed ',20000)"><img src="https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png" style="width: 13px; height: 13px"/></a></td>
                            </tr>
                            <tr>
                                <td colspan = "2"> <input class="btn" type="button" id="btn_get_def" value="Get Def Vills"></td>
                                <td><a href="#" onclick="UI.InfoMessage('Keep all incs tagged as <b>DEF</b>  <br>It is used when <b>Get Incomings</b> is pressed ',10000)"><img src="https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png" style="width: 13px; height: 13px"/></a></td>
                            </tr>
                            <tr>
                                <td>Current pop[%]:</td>
                                <td><input type="number" id="input_pop_fake2" value="30" min="0" max="1000"  placeholder="[0-100]%" style="text-align:center"></td>
                                <td><a href="#" onclick="UI.InfoMessage('Incomings tagged as (fake)if it has a lower pop[%] than the value set ',10000)"><img src="https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png" style="width: 13px; height: 13px"/></a></td>
                            </tr>
                            <tr hidden>
                                <td>nr duplicates:</td>
                                <td><input type="number" id="input_duplicates" value="50" min="0" max="1000"  placeholder="50" style="text-align:center"></td>
                            </tr>
                        </table>
      
                </td>            
                <td style="text-align:center; width:auto;">
                        <center style="margin:10px"><input id="btn_highlight" class="btn" type="button" onclick="toggleHighLight()" value="highlight"></center>
                </td>  
                <td hidden style="text-align:center; width:auto;" id="td_show_incomings">
                    <center style="margin:10px">
                            <input class="btn" type="button"  value="Show Incomings" id="btn_show_incs">
                            <select style="margin:10px" id="id_select_incs">
                            </select></td>
                    </center>
                    
            </td>            
            </tr>                
            </tbody>
        </table>
        </div>`
            // $(".vis").eq(3).append(incomingshtml)
        $(".overview_filters").before(incomingshtml)

    var link  = document.createElement('link');
    link.id   = "style_popup";
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://dl.dropboxusercontent.com/s/ki0zhogjf0705c3/style_popup.css';
    link.media = 'all';
    document.getElementsByTagName('head')[0].appendChild(link);
    }
    

    if(document.getElementById("incomings_table")!=null){

       //////////////////////////initialize button stacks colours
        if(localStorage.getItem(game_data.world+"addStacks")!=null){
            let isHighLight=localStorage.getItem(game_data.world+"addStacks")
            if(isHighLight=="true"){
                document.getElementById("btn_stacks").classList.add("btn-confirm-yes")
            }
            else{
                document.getElementById("btn_stacks").classList.add("btn-confirm-no")
            }

        }
        else{
            localStorage.setItem(game_data.world+"addStacks","false")
            document.getElementById("btn_stacks").classList.remove("btn-confirm-yes")
            document.getElementById("btn_stacks").classList.add("btn-confirm-no")
        }   


        //////////////////////////////add event for button stacks
        $("#btn_stacks").off("click")
        $("#btn_stacks").on("click",()=>{
            if(document.getElementById("btn_stacks").classList.contains("btn-confirm-yes")){
                localStorage.setItem(game_data.world+"addStacks","false")
                document.getElementById("btn_stacks").classList.remove("btn-confirm-yes")
                document.getElementById("btn_stacks").classList.add("btn-confirm-no")
            }
            else{
                localStorage.setItem(game_data.world+"addStacks","true")
                document.getElementById("btn_stacks").classList.remove("btn-confirm-no")
                document.getElementById("btn_stacks").classList.add("btn-confirm-yes")
            }
            
        })


        
        //////////////////////////initialize button back time colours
        if(localStorage.getItem(game_data.world+"addBacktime")!=null){
            let isHighLight=localStorage.getItem(game_data.world+"addBacktime")
            if(isHighLight=="true"){
                document.getElementById("btn_backtime").classList.add("btn-confirm-yes")
            }
            else{
                document.getElementById("btn_backtime").classList.add("btn-confirm-no")
            }
    
        }
        else{
            localStorage.setItem(game_data.world+"addBacktime","false")
            document.getElementById("btn_backtime").classList.remove("btn-confirm-yes")
            document.getElementById("btn_backtime").classList.add("btn-confirm-no")
        }   


        //////////////////////////////add event for button back time
        $("#btn_backtime").off("click")
        $("#btn_backtime").on("click",()=>{
            if(document.getElementById("btn_backtime").classList.contains("btn-confirm-yes")){
                localStorage.setItem(game_data.world+"addBacktime","false")
                document.getElementById("btn_backtime").classList.remove("btn-confirm-yes")
                document.getElementById("btn_backtime").classList.add("btn-confirm-no")
            }
            else{
                localStorage.setItem(game_data.world+"addBacktime","true")
                document.getElementById("btn_backtime").classList.remove("btn-confirm-no")
                document.getElementById("btn_backtime").classList.add("btn-confirm-yes")
            }
            
        })



        /////////////////////////////initialize button sent time colours
        if(localStorage.getItem(game_data.world+"addSentTime")!=null){
            let isHighLight=localStorage.getItem(game_data.world+"addSentTime")
            if(isHighLight=="true"){
                document.getElementById("btn_senttime").classList.add("btn-confirm-yes")
            }
            else{
                document.getElementById("btn_senttime").classList.add("btn-confirm-no")
            }
    
        }
        else{
            localStorage.setItem(game_data.world+"addSentTime","false")
            document.getElementById("btn_senttime").classList.remove("btn-confirm-yes")
            document.getElementById("btn_senttime").classList.add("btn-confirm-no")
        }   
        ///////////////////////////////////add event for button sent time
        $("#btn_senttime").off("click")
        $("#btn_senttime").on("click",()=>{
            if(document.getElementById("btn_senttime").classList.contains("btn-confirm-yes")){
                localStorage.setItem(game_data.world+"addSentTime","false")
                document.getElementById("btn_senttime").classList.remove("btn-confirm-yes")
                document.getElementById("btn_senttime").classList.add("btn-confirm-no")
            }
            else{
                localStorage.setItem(game_data.world+"addSentTime","true")
                document.getElementById("btn_senttime").classList.remove("btn-confirm-no")
                document.getElementById("btn_senttime").classList.add("btn-confirm-yes")
            }
            

        })
        /////////////////////////////initialize button get def village colours
        if(localStorage.getItem(game_data.world+"get_def_vills")!=null){
            let isHighLight=localStorage.getItem(game_data.world+"get_def_vills")
            if(isHighLight=="true"){
                document.getElementById("btn_get_def").classList.add("btn-confirm-yes")
            }
            else{
                document.getElementById("btn_get_def").classList.add("btn-confirm-no")
            }
    
        }
        else{
            localStorage.setItem(game_data.world+"get_def_vills","false")
            document.getElementById("btn_get_def").classList.remove("btn-confirm-yes")
            document.getElementById("btn_get_def").classList.add("btn-confirm-no")
        }   
        ///////////////////////////////////add event for button get def 
        $("#btn_get_def").off("click")
        $("#btn_get_def").on("click",()=>{
            if(document.getElementById("btn_get_def").classList.contains("btn-confirm-yes")){
                localStorage.setItem(game_data.world+"get_def_vills","false")
                document.getElementById("btn_get_def").classList.remove("btn-confirm-yes")
                document.getElementById("btn_get_def").classList.add("btn-confirm-no")
            }
            else{
                localStorage.setItem(game_data.world+"get_def_vills","true")
                document.getElementById("btn_get_def").classList.remove("btn-confirm-no")
                document.getElementById("btn_get_def").classList.add("btn-confirm-yes")
            }
            
        })
    
    
        //////////////////////////initialize button get only fakes colours
        if(localStorage.getItem(game_data.world+"get_only_fakes")!=null){
            let isHighLight=localStorage.getItem(game_data.world+"get_only_fakes")
            if(isHighLight=="true"){
                document.getElementById("btn_get_fakes").classList.add("btn-confirm-yes")
            }
            else{
                document.getElementById("btn_get_fakes").classList.add("btn-confirm-no")
            }
    
        }
        else{
            localStorage.setItem(game_data.world+"get_only_fakes","false")
            document.getElementById("btn_get_fakes").classList.remove("btn-confirm-yes")
            document.getElementById("btn_get_fakes").classList.add("btn-confirm-no")
        }   
        //////////////////////////////////add event for button get only fakes
        $("#btn_get_fakes").off("click")
        $("#btn_get_fakes").on("click",()=>{
            if(document.getElementById("btn_get_fakes").classList.contains("btn-confirm-yes")){
                localStorage.setItem(game_data.world+"get_only_fakes","false")
                document.getElementById("btn_get_fakes").classList.remove("btn-confirm-yes")
                document.getElementById("btn_get_fakes").classList.add("btn-confirm-no")
            }
            else{
                localStorage.setItem(game_data.world+"get_only_fakes","true")
                document.getElementById("btn_get_fakes").classList.remove("btn-confirm-no")
                document.getElementById("btn_get_fakes").classList.add("btn-confirm-yes")
            }
            
        })
    
        let value=localStorage.getItem(game_data.world+"pop_fake_tagging2")
        if(value!=null){
            document.getElementById("input_pop_fake2").value=parseFloat(value)
        }
        $("#input_pop_fake2").on("mouseout",()=>{
            localStorage.setItem(game_data.world+"pop_fake_tagging2", document.getElementById("input_pop_fake2").value)
        })


        value=localStorage.getItem(game_data.world+"duplicates_fake_tagging")
        if(value!=null){
            document.getElementById("input_duplicates").value=parseFloat(value)
        }
        $("#input_duplicates").on("mouseout",()=>{
            localStorage.setItem(game_data.world+"duplicates_fake_tagging", document.getElementById("input_duplicates").value)
        })

        value=localStorage.getItem(game_data.world+"gap_predict")
        if(value!=null){
            document.getElementById("input_gap").value=parseFloat(value)
        }
        $("#input_gap").on("mouseout",()=>{
            localStorage.setItem(game_data.world+"gap_predict", document.getElementById("input_gap").value)
        })

    }


    
}





        
//////////////////////////////////////////////////////show info in incomings page/////////////////////////////////////////////////////////////////

function removeLandedIncomings(incomings){
    let serverTime=document.getElementById("serverTime").innerText
    let serverDate=document.getElementById("serverDate").innerText.split("/")

    serverDate=serverDate[1]+"/"+serverDate[0]+"/"+serverDate[2]+" "+serverTime
    Array.from(incomings.keys()).forEach(key=>{
        let list= incomings.get(key);
        for(let i=0;i<list.length;i++){
            if(new Date(serverDate).getTime() > new Date(list[i].date_land).getTime()){
                list.splice(i,1)
                i--
            }
        }
        incomings.set(key,list)
    })
    return incomings

}


async function moreInfo(){
    $("#div_container").remove();
    $(".deleteTh").remove();
    $('#id_select_incs option').remove()
    console.log("inainte")
    var [map_reports_dropbox, map_incomings_dropbox, data_support, status]=await Promise.all([
        readFileDropbox(filename_reports), 
        readFileDropbox(filename_incomings),
        readFileDropbox(filename_support),
        insertlibraryLocalBase()]).catch(err=>{alert(err)})
    console.log(status)
    let data_support_batch = await Promise.all(supportPromises).catch(err=>{alert(err)})

    //extract data from dropbox, update and then upload
    let map_support_dropbox,map_troops_home_dropbox
    try {
        let decompressedData = await decompress(await data_support.arrayBuffer() , 'gzip');  
        map_support_dropbox=new Map(JSON.parse(decompressedData)[0])
        map_troops_home_dropbox =new Map(JSON.parse(decompressedData)[1])   
    } catch (error) {
        console.log("erorrrrrrrrrrrrrrrr map report from dropbox")
        console.log(error)
        map_support_dropbox=new Map()
        map_troops_home_dropbox=new Map()
    }

    //merge batch commands attacks (EXTRA files) 
    for(let i=0;i<data_support_batch.length;i++){
        let decompressedData = await decompress(await data_support_batch[i].arrayBuffer() , 'gzip');  
        if(decompressedData != "[]"){
            let map_support_batch = new Map(JSON.parse(decompressedData)[0])
            let map_troops_home_batch = new Map(JSON.parse(decompressedData)[1])

            map_support_dropbox = new Map([...map_support_dropbox, ...map_support_batch])
            map_troops_home_dropbox = new Map([...map_troops_home_dropbox, ...map_troops_home_batch])
        }      

        let fileName = `${databaseName}/Support${i}.txt`
        if(await localBase.getItem(fileName) != undefined){
            try {
                let decompressedDataBase64 = base64ToBlob(await localBase.getItem(fileName))
                let decompressedData = await decompress(await decompressedDataBase64.arrayBuffer(), 'gzip')
                let map_localBase=new Map( JSON.parse(decompressedData));
    
                // console.log("map_localBase_support",map_localBase)
                map_support_dropbox=new Map([...map_localBase, ...map_support_dropbox])
            } catch (error) {
                
            }
        }
        fileName = `${databaseName}/Support${i}.txtHome`
        if(await localBase.getItem(fileName) != undefined){
            try {
                let decompressedDataBase64 = base64ToBlob(await localBase.getItem(fileName))
                let decompressedData = await decompress(await decompressedDataBase64.arrayBuffer(), 'gzip')
                let map_localBase=new Map( JSON.parse(decompressedData));
    
                // console.log("map_localBase_troops home",map_localBase)
                map_troops_home_dropbox=new Map([...map_localBase, ...map_troops_home_dropbox])
            } catch (error) {
                
            }
        }
    }
    
    // console.log("hererer")
    // console.log(map_support_dropbox)
    // console.log(map_troops_home_dropbox)
    //get support coming for each coord
    



    /////////merge maps for reports
    try {
        let decompressedData = await decompress(await map_reports_dropbox.arrayBuffer() , 'gzip');  
        map_reports_dropbox=new Map( JSON.parse(decompressedData));
    } catch (error) {
        console.log("erorrrrrrrrrrrrrrrr map report from dropbox")
        map_reports_dropbox=new Map()
    }

    //if  database is stored locally
    if(await localBase.getItem(game_data.world+"reports")!=undefined){
        try {
            let decompressedDataBase64 = base64ToBlob(await localBase.getItem(game_data.world + "reports"))
            let decompressedData = await decompress(await decompressedDataBase64.arrayBuffer(), 'gzip')
            let map_localBase=new Map( JSON.parse(decompressedData));

            console.log("map_localBase",map_localBase)
            map_reports_dropbox=new Map([...map_localBase, ...map_reports_dropbox]) 
        } catch (error) {}
    }




    /////////merge maps for incomings
    try {
        let decompressedData = await decompress(await map_incomings_dropbox.arrayBuffer() , 'gzip');  
        map_incomings_dropbox=new Map( JSON.parse(decompressedData));
    } catch (error) {
        console.log("erorrr map report from dropbox")
        map_incomings_dropbox=new Map()
    }

    //if there database is stored locally
    if(await localBase.getItem(game_data.world+"incomings")!=undefined){
        try{
            let decompressedDataBase64 = base64ToBlob(await localBase.getItem(game_data.world + "incomings"))
            let decompressedData = await decompress(await decompressedDataBase64.arrayBuffer(), 'gzip')
    
            let map_localBase=new Map( JSON.parse(decompressedData));
            console.log("map_localBase history upload",map_localBase)
            map_incomings_dropbox=new Map([...map_localBase, ...map_incomings_dropbox])

        } catch (error) {}
    }






    let mapPredict=new Map()
    let list_incomingsAll=[]
    Array.from(map_incomings_dropbox.keys()).forEach(key=>{
        let list_dropbox= map_incomings_dropbox.get(key);
        list_incomingsAll = [...list_incomingsAll, ...list_dropbox];
    })
    let map_player_inc=new Map()
    for(let i=0;i<list_incomingsAll.length;i++){
        if(list_incomingsAll[i].date_launch !=undefined){
            if(map_player_inc.has(list_incomingsAll[i].id_player_off)){//update
                let list_incomings = map_player_inc.get(list_incomingsAll[i].id_player_off)
                list_incomings.push(list_incomingsAll[i])
                map_player_inc.set(list_incomingsAll[i].id_player_off,list_incomings)
                
            }else{
                let list_incomings = []
                list_incomings.push(list_incomingsAll[i])
                map_player_inc.set(list_incomingsAll[i].id_player_off,list_incomings)
            }
        }
    }

    console.log("list_incomingsAll",list_incomingsAll)
    console.log("map_player_inc",map_player_inc)

    //calculate troops comming
    let troopsComming = new Map()
    Array.from(map_support_dropbox.keys()).forEach(key=>{
        let listIncomings = map_support_dropbox.get(key)
        let totalPop = 0;
        for(let i=0;i<listIncomings.length;i++){
            if(listIncomings[i].troops != undefined ){
                Object.keys(listIncomings[i].troops).forEach(key=>{
                    if(key == "archer" || key == "spear" || key == "sword" || key == "heavy"){
                        totalPop += troopsPop[key] * listIncomings[i].troops[key]
                    }
                });
            }
        }
        if(totalPop > 1000)
        troopsComming.set(key,totalPop)
    })

    //calculate troops home
    let troopsHome = new Map()
    Array.from(map_troops_home_dropbox.keys()).forEach(key=>{
        let obj = map_troops_home_dropbox.get(key)
        let totalPop = 0;
        if(obj.obj_troops != undefined ){
            Object.keys(obj.obj_troops).forEach(key=>{
                if(key == "archer" || key == "spear" || key == "sword" || key == "heavy"){
                    totalPop += troopsPop[key] * obj.obj_troops[key]
                }
            });
        }
        if(totalPop > 1000)
            troopsHome.set(key,totalPop)
    })
    console.log("troopsComming",troopsComming)
    console.log("troopsHome",troopsHome)


    let serverTime=document.getElementById("serverTime").innerText
    let serverDate=document.getElementById("serverDate").innerText.split("/")
    serverDate=serverDate[1]+"/"+serverDate[0]+"/"+serverDate[2]+" "+serverTime

    let list_players=[]
    let gap_serie= document.getElementById("input_gap").value*1000;
    Array.from(map_player_inc.keys()).forEach(key=>{
        let list_incomings= map_player_inc.get(key);
        list_incomings.sort((o1,o2)=>{
            return (new Date(o1.date_launch).getTime() > new Date(o2.date_launch).getTime())?1:
            (new Date(o1.date_launch).getTime() < new Date(o2.date_launch).getTime())?-1:0;
        })


        let new_list_incomings=[]
        let color=true;
        for(let i=0;i<list_incomings.length-1;i++){
   
            let serieLaunches = new Set();
            let currentDate=new Date(list_incomings[i].date_launch).getTime();
            let nextDate=new Date(list_incomings[i+1].date_launch).getTime();
            if(Math.abs(currentDate-nextDate) <= gap_serie){
                for(let j=i;j<list_incomings.length-1;j++){

                    let currentDate=new Date(list_incomings[j].date_launch).getTime();
                    let nextDate=new Date(list_incomings[j+1].date_launch).getTime();
                    if(Math.abs(currentDate-nextDate) <= gap_serie){
                        list_incomings[j].colorRow=color
                        list_incomings[j+1].colorRow=color

                        serieLaunches.add(list_incomings[j])
                        serieLaunches.add(list_incomings[j+1])
                        i++
                    }
                    else{
                        if(color== true)
                            color= false
                        else 
                            color =true
                        break;
                    }
                }
            }
            
            // console.log("serieLaunches",serieLaunches)
            // console.log(Array.from(serieLaunches))
            let nr_fangs=0,nr_nukes=0,nr_fakes=0
            Array.from(serieLaunches).forEach(key=>{
        
                if(key.type_attack_landed != undefined){

                    if(key.type_attack_landed =="fake")
                        nr_fakes++
                    if(key.type_attack_landed =="nuke")
                        nr_nukes++
                    if(key.type_attack_landed =="fang")
                        nr_fangs++
                }
            })

            let max=Math.max(nr_fakes,nr_nukes,nr_fakes)
            let predict_type="?"
            if(max>0){
                if(nr_fakes == max){
                    predict_type="pred_fake"
                }
                else if(nr_nukes == max){
                    predict_type="pred_nuke"
                }
                else if(nr_fangs == max){
                    predict_type="pred_fang"
                }
            }

            let serieLaunchesFinal=new Set()
            Array.from(serieLaunches.values()).forEach(key=>{
                if(key.type_attack_landed == undefined && predict_type!="?"){
                    key.type_attack_landed=predict_type
                    serieLaunchesFinal.add(key)
                    if(new Date(key.date_land).getTime() > new Date(serverDate).getTime()){
                        mapPredict.set(key.date_launch+"_"+key.player_off,predict_type)
                        // console.log(key.date_land+"   "+key.player_off);
                    }
                }
                else{
                    serieLaunchesFinal.add(key)
                }

            })
            new_list_incomings= [...new_list_incomings, ...serieLaunchesFinal]
            // if(serieLaunches.size>0)
            //     console.log("serieLaunchesFinal",serieLaunchesFinal)
        }


        map_player_inc.set(key,new_list_incomings)
        
        if(new_list_incomings.length>0){
            list_players.push({
                name_player_off:new_list_incomings[0].player_off+" ("+ new_list_incomings.length +")",
                id_player_off:new_list_incomings[0].id_player_off,
                nr_incs:new_list_incomings.length,
            })
        }
    })


    console.log("mapPredict",mapPredict)



    list_players.sort((o1,o2)=>{
        return (o1.nr_incs > o2.nr_incs)?-1:(o1.nr_incs < o2.nr_incs)?1:0;
    })

    console.log("list_players",list_players)
    console.log("map_player_inc",map_player_inc)

    for(let i=0;i<list_players.length;i++){
        $('#id_select_incs').append($('<option>', {
            value: list_players[i].id_player_off,
            text: list_players[i].name_player_off
        }));

    }
    $("#btn_show_incs").off("click")
    $("#btn_show_incs").on("click",()=>{
        let id_player_off = $("#id_select_incs").val()
        console.log(map_player_inc.get(id_player_off))
        showIncomings(map_player_inc.get(id_player_off))
    })


    UI.SuccessMessage("get data",1000)
    console.log("get incomings")
    $(".tr_delimitator").remove();
    console.log(map_incomings_dropbox)
    if(document.getElementsByClassName("info").length>0){
        $(".info").remove()
        $('#td_show_incomings').hide()
    }
    else{
        $("#td_show_incomings").show()
        let start=new Date();
        map_incomings_dropbox = removeLandedIncomings(map_incomings_dropbox)

        
        // let table=document.getElementById("incomings_table").lastElementChild.children
        let incomings_table=document.getElementById("incomings_table").cloneNode(true)
        let table=incomings_table.lastElementChild.children
        let list=[];
        let map_nr_atacuri=new Map();
        let map_nr_destination=new Map();
        
        //adaugare o noua coloana
        let coloana_nr=table[0].insertCell(3);
        coloana_nr.outerHTML="<th class='deleteTh'><a href=# id='id_nr'> nr</a></th>";
        coloana_nr.className="info"
        
        let coloana_tribe=table[0].insertCell(4);
        coloana_tribe.outerHTML="<th class='deleteTh'><a href=# id='id_nr_tr'> nr_tribe</a></th>";
        coloana_tribe.className="info"
        
        let coloana_type=table[0].insertCell(5);
        coloana_type.outerHTML="<th class='deleteTh'><a href=# id='id_type'> type</a></th>";
        coloana_type.className="info"     
        
        let coloana_pop=table[0].insertCell(6);
        coloana_pop.outerHTML="<th class='deleteTh'><a href=# id='id_pop'>pop</a></th>";
        coloana_pop.className="info"
        
        let coloana_time=table[0].insertCell(7);
        coloana_time.outerHTML="<th class='deleteTh'><a href=# id='id_time'>time</a></th>";
        coloana_time.className="info"
        
        let coloana_report=table[0].insertCell(8);
        coloana_report.outerHTML="<th class='deleteTh'><a href=# id='id_report'>report</a></th>";
        coloana_report.className="info"

        let coloana_launch=table[0].insertCell(9);
        coloana_launch.outerHTML="<th class='deleteTh'><a href=# id='id_launch_time'>launch time</a></th>";
        coloana_launch.className="info"

        let coloana_predict=table[0].insertCell(10);
        coloana_predict.outerHTML="<th class='deleteTh'><a href=# id='id_predict'>predict</a></th>";
        coloana_predict.className="info"

        let coloana_home=table[0].insertCell(11);
        coloana_home.outerHTML="<th class='deleteTh'><a href=# id='id_home'>stacks\nhome</a></th>";
        coloana_home.className="info"

        let coloana_comming=table[0].insertCell(12);
        coloana_comming.outerHTML="<th class='deleteTh'><a href=# id='id_predict'>stacks\ncomming</a></th>";
        coloana_comming.className="info"


        var list_coord_player=[]
        for(let i=1;i<table.length-1;i++){
            let coord=table[i].children[2].innerText.match(/\d+\|\d+/)[0];
            let coord_destination=table[i].children[1].innerText.match(/\d+\|\d+/)[0];
            let nameLabel=table[i].children[0].innerText.trim().split(/\s+/)[0].toLowerCase();
            
            let player_name_off
            let player_id

            if(game_data.device == "desktop"){
                player_id=table[i].children[table[i].children.length-4].children[0].href.split("player&id=")[1]
                player_name_off=table[i].children[table[i].children.length-4].children[0].innerText

            }
            else{
                player_id=table[i].children[table[i].children.length-3].children[0].href.split("player&id=")[1]
                player_name_off=table[i].children[table[i].children.length-3].children[0].innerText
           }

            list_coord_player.push({
                coord:coord,
                player_id:player_id,
                player_name_off:player_name_off,
                nameLabel:nameLabel,
            })
            //origin coord
            if(map_nr_atacuri.has(coord))
                map_nr_atacuri.set(coord,parseInt(map_nr_atacuri.get(coord)) +1);
            else
                map_nr_atacuri.set(coord,1);
            //destination coord
            if(map_nr_destination.has(coord_destination))
                map_nr_destination.set(coord_destination,parseInt(map_nr_destination.get(coord_destination)) +1);
            else
                map_nr_destination.set(coord_destination,1);
        }
        var stop=new Date();
        console.log("add info: "+(stop-start))





        for(let i=1;i<table.length-1;i++){
            var html_nr="?"
            var html_nr_tribe="<center>0</center>"
            var html_type="?"
            var html_pop="?"
            var html_time="?"
            var html_report="?"
            var html_launch="?"
            var html_predict="?"
            var html_home="?"
            var html_comming="?"
            
            var length_tr=table[i].children.length
            let coord=list_coord_player[i-1].coord
            let player_id=list_coord_player[i-1].player_id
            let player_name_off=list_coord_player[i-1].player_name_off
            let nameLabel=list_coord_player[i-1].nameLabel

            let coord_destination=table[i].children[1].innerText.match(/\d+\|\d+/)[0];
            let coord_origin=table[i].children[2].innerText.match(/\d+\|\d+/)[0];
            
            let duplicate_destination=map_nr_destination.get(coord_destination)
            table[i].children[1].setAttribute("data-nr",duplicate_destination)

            html_nr="<h4>"+map_nr_atacuri.get(coord)+"</h4>";

            let time_land
            if(game_data.device == "desktop"){
                time_land=table[i].children[length_tr-2].innerText
            }
            else{
                time_land=table[i].children[length_tr-1].innerText
            }
            let milliseconds = time_land.split(":").pop();
            let date_land=getLandTime(time_land)


            if(table[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img").length==2){
                let distance= calcDistance(coord_destination,coord_origin)
                let labelName=table[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img")[1].src
                let time_attack=0;
                if(labelName.includes("snob.png")){
                    time_attack=nobleSpeed*distance
                }else if(labelName.includes("ram.png") || labelName.includes("catapult.png")){
                    time_attack=ramSpeed*distance
                }else if(labelName.includes("sword.png")){
                    time_attack=swordSpeed*distance
                }else if(labelName.includes("axe.png")){
                    time_attack=axeSpeed *distance
                }
                
                if(time_attack>0){
                    time_attack=Math.round(time_attack/1000)*1000
                    let time_launch=(parseDate(new Date(date_land).getTime()-time_attack)+":"+milliseconds).trim()
                    html_launch=`<h4>${time_launch}</h4>`

                    if(mapPredict.has(time_launch+"_"+player_name_off))
                        html_predict=`<h4>${mapPredict.get(time_launch+"_"+player_name_off).replace("pred_","")}</h4>`
                }
                
            
            }else if(nameLabel == lang["dcfafcb4323b102c7e204555d313ba0a"].toLowerCase()){
                let timeInMM=table[i].children[length_tr-1].innerText.split(":")
                timeInMM=timeInMM[0]*3600*1000+timeInMM[1]*60*1000+timeInMM[2]*1000;
                let distance= calcDistance(coord_destination,coord_origin)
                let time_attack=0;
                if(timeInMM > ramSpeed*distance){
                    time_attack=nobleSpeed*distance
                }
                else if(timeInMM > swordSpeed*distance){
                    time_attack=ramSpeed*distance
                }
                else if(timeInMM > axeSpeed*distance){
                    time_attack=swordSpeed*distance
                }
                else if(timeInMM > heavySpeed*distance){
                    time_attack=heavySpeed*distance
                }
                else if(timeInMM > lightSpeed*distance){
                    time_attack=lightSpeed*distance
                }
                else if(timeInMM > spySpeed*distance){
                    time_attack=spySpeed*distance
                }       

                if(time_attack>0){
                    time_attack=Math.round(time_attack/1000)*1000
                    let time_launch=(parseDate(new Date(date_land).getTime()-time_attack)+":"+milliseconds).trim()
                    html_launch=`<h4>${time_launch}</h4>`

                    if(mapPredict.has(time_launch+"_"+player_name_off))
                        html_predict=`<h4>${mapPredict.get(time_launch+"_"+player_name_off).replace("pred_","")}</h4>`
                }
                
            }



            
            if(map_incomings_dropbox.has(coord)){
                let list_incomings=map_incomings_dropbox.get(coord)
                // html_nr_tribe=" <center><h4 style='color:black'>"+list_incomings.length+"</h4></center>";
                // console.log(list_incomings)
                list_incomings.sort((o1,o2)=>{
                    return (new Date(o1.date_land).getTime()<new Date(o2.date_land).getTime())?1:
                    (new Date(o1.date_land).getTime()>new Date(o2.date_land).getTime())?-1:0
                })
                html_nr_tribe=`
                    <div class="popup"  onclick='var popup = document.getElementById("tableInc`+i+`");popup.classList.toggle("show")'><center><h4 style='color:black'>${list_incomings.length}</h4></center>
                    <table class="popuptext" border="1" style="background-color:#f4e4bc;border-color:#c1a264" id="tableInc`+i+'"'+
                    createTableIncomings(list_incomings)+
                '</table></div>';




            }
            if(map_reports_dropbox.has(coord) )
            {
                let idPlayer_dropbox
                let type_dropbox
                let nr_troupes_dropbox

                var obj=map_reports_dropbox.get(coord);
                var traveling=false
                if(coord == obj.coordAttacker){
                    idPlayer_dropbox=obj.attackingPlayerId;
                    type_dropbox=obj.typeAttacker;
                    nr_troupes_dropbox=obj.nrTroupesAttacker
                    traveling=true;
                }
                else if(coord == obj.coordDefender){
                    idPlayer_dropbox=obj.defendingPlayerId;
                    type_dropbox=obj.typeDefender;
                    nr_troupes_dropbox=obj.nrTroupesDefender
                    traveling=false;
                }
                else{
                    idPlayer_dropbox=obj.supporterPlayerId
                    type_dropbox=obj.typeSupporter;
                    nr_troupes_dropbox=obj.nrTroupesSupporter
                }

                if(idPlayer_dropbox == player_id)
                {
                    let serverTime=document.getElementById("serverTime").innerText
                    let serverDate=document.getElementById("serverDate").innerText.split("/")
                    serverDate=serverDate[1]+"/"+serverDate[0]+"/"+serverDate[2]
                    let date_current=new Date(serverDate+" "+serverTime).getTime()
                    
                    //calculate population
                    let date_landing_report=new Date(obj.time_report)
                    let distance 
                    if(game_data.device == "desktop")
                        distance=parseFloat(table[i].children[length_tr-3].innerText);
                    else
                        distance=parseFloat(table[i].children[length_tr-2].innerText);

                    let time_attack=0;
                    let time_land
                    if(game_data.device == "desktop"){
                        time_land=table[i].children[length_tr-2].innerText
                    }
                    else{
                        time_land=table[i].children[length_tr-1].innerText
                    }
                    let date_land=new Date(getLandTime(time_land))
                    let labelName=""
                    if(table[i].children[0].getElementsByTagName("img")[1]==undefined || table[i].children[0].getElementsByTagName("img")[1]==null )
                        labelName="ram.png"
                    else
                        labelName=table[i].children[0].getElementsByTagName("img")[1].src

                    if(labelName.includes("snob.png")){
                        time_attack=nobleSpeed*distance
                    }else if(labelName.includes("ram.png") || labelName.includes("catapult.png")){
                        time_attack=ramSpeed*distance
                    }else if(labelName.includes("sword.png")){
                        time_attack=swordSpeed*distance
                    }else if(labelName.includes("axe.png")){
                        time_attack=axeSpeed *distance
                    }
                    date_current-=time_attack

                    if(traveling==false)
                        time_attack=0;

                    if(type_dropbox=="off"){
                        // console.log(date_land.getTime())
                        // console.log(time_attack)
                        // console.log(date_landing_report.getTime())
                        let timeForRecruiting = (date_land.getTime()-time_attack)-date_landing_report.getTime()
                        nr_troupes_dropbox=calcProductionTroupes(timeForRecruiting,nr_troupes_dropbox)                             
                        nr_troupes_dropbox=Math.round(nr_troupes_dropbox*10)/10+"%"
                        // console.log("final "+nr_troupes_dropbox)
                    }
                    else{
                        nr_troupes_dropbox="?"
                    }



                    let date_start=new Date(obj.time_report);
                    let date_stop=new Date(date_current);
                    let diffTime=date_stop-date_start
                    if(diffTime<=0)
                        diffTime=0

                    let days=("00"+parseInt((diffTime)/(24*3600*1000))).slice(-3);
                    let hours=("0"+parseInt((diffTime)/(3600*1000)%24)).slice(-2);
                    let minutes=("0"+parseInt(((diffTime)/(60*1000)%60))).slice(-2);
                    let seconds=( "0"+parseInt((((diffTime)/1000)%60))).slice(-2);


                    html_type=" <h4 class='cls_type'>"+type_dropbox+"</h4>"
                    html_pop=" <h4 class='cls_pop'>"+nr_troupes_dropbox+"</h4>"
                    if(obj.time_return==0 || obj.time_return==undefined){
                        html_time=" <h4>"+days+":"+hours+":"+minutes+":"+seconds+"</h4>";
                    }
                    else{
                        html_time=" <h4 class='possible_fake' date-fake='"+obj.time_return+"'>"+days+":"+hours+":"+minutes+":"+seconds+"</h4>";
                    }

                    // createTableIncomings
                    // console.log(obj)
                    html_report=`
                        <div class="popup" onclick='var popup = document.getElementById("table`+i+`");popup.classList.toggle("show")'><h4>show</h4>
                        <table class="popuptext" style="background-color:#f4e4bc" id="table`+i+'"'+
                        createReport(obj)+
                    '</table></div>';
                }
            }


            //set troops home and comming
            if(troopsHome.has(coord_destination)){
                html_home = `<h4>${(troopsHome.get(coord_destination)/1000).toFixed(1)}k</h4>`
            }
            if(troopsComming.has(coord_destination)){
                html_comming = `<h4>${(troopsComming.get(coord_destination)/1000).toFixed(1)}k</h4>`
            }


            coloana_nr=table[i].insertCell(3);
            coloana_nr.innerHTML=html_nr
            coloana_nr.className="info test"

            coloana_tribe=table[i].insertCell(4);
            coloana_tribe.innerHTML=html_nr_tribe
            coloana_tribe.className="info"
        
            coloana_type=table[i].insertCell(5);
            coloana_type.innerHTML=html_type
            coloana_type.className="info"
        
            coloana_pop=table[i].insertCell(6);
            coloana_pop.innerHTML=html_pop
            coloana_pop.className="info"
        
            coloana_time=table[i].insertCell(7);
            coloana_time.innerHTML=html_time
            coloana_time.className="info"
        
            coloana_report=table[i].insertCell(8);
            coloana_report.innerHTML=html_report
            coloana_report.className="info"

            coloana_launch=table[i].insertCell(9);
            coloana_launch.innerHTML=html_launch
            coloana_launch.className="info"

            coloana_predict=table[i].insertCell(10);
            coloana_predict.innerHTML=html_predict
            coloana_predict.className="info"

            coloana_home=table[i].insertCell(11);
            coloana_home.innerHTML= html_home
            coloana_home.className="info"

            coloana_comming=table[i].insertCell(12);
            coloana_comming.innerHTML=html_comming
            coloana_comming.className="info"
        }
        // console.log(incomings_table)
        $("#incomings_table tbody tr").remove()
        $("#incomings_table tbody").append(table)
        sortIncomings();
        highLightIncomings();
        counterTime();
        var stop=new Date();
        console.log("add inf final: "+(stop-start))


        $('document').ready(function() {
            CommandsOverview.init();
            UI.ToolTip('.icon_village_notes');

            $('.quickedit').QuickEdit({url: TribalWars.buildURL('POST', 'info_command', {ajaxaction: 'edit_other_comment', id: '__ID__'})});
            Command.init();
        });


    }


}
    
//////////////////////////////////////////////////////sort incomings by.. /////////////////////////////////////////////////////////////////

function sortIncomings()
{
    var table=document.getElementById("incomings_table").lastElementChild.children;
    var new_table=document.getElementById("incomings_table").lastElementChild;
    var last_row=table[table.length-1];
    var list=[];
    var list_info=[]
    for(let i=1;i<table.length-1;i++){
        if(table[i].classList.contains("row_a")){
            table[i].classList.remove("row_a")
            table[i].classList.add("row_b")
        }
        if(table[i].classList.contains("selected")){
            table[i].classList.remove("selected")
        }

        list.push(table[i]);
    }
    var length_table=1
    if(table.length>2){
        length_table=table[1].children.length
    }


    //sort by nr
    document.getElementById("id_nr").addEventListener("click",function()
    {
        var start=new Date();
        $(".tr_delimitator").remove();
        list.sort( (a,b)=>{
            return (parseInt(a.children[3].innerText)<parseInt(b.children[3].innerText))?1:(parseInt(a.children[3].innerText)>parseInt(b.children[3].innerText))?-1:
            (a.children[2].innerText<b.children[2].innerText) ? 1: (a.children[2].innerText>b.children[2].innerText)?-1:0;
    });


        //add new table in page
        for(let i=0;i<list.length;i++)
        {
            new_table.appendChild(list[i]);
        }
        new_table.appendChild(last_row);

        for(let i=0;i<list.length;i++)
        {
            list_info.push({
                coord_attacker:list[i].children[2].innerText,
                nr:parseInt(list[i].children[3].innerText),
            })
        }
        var pozitie=2;
        for(let i=0;i<list.length-1;i++)
        {
            let nr_atacuri=list_info[i].nr
            if(nr_atacuri>1 && list_info[i].coord_attacker !=list_info[i+1].coord_attacker)
            {
                var tableRef = document.getElementById("incomings_table").lastElementChild;
                var newRow   = tableRef.insertRow(pozitie);
                newRow.className="tr_delimitator"
                for(let i=0; i<1;i++){
                    let cell  = newRow.insertCell();
                    cell.setAttribute("colspan",length_table)
                    cell.classList.add("selected")
                    var delimitator  = document.createTextNode('--');
                    cell.appendChild(delimitator);
                
                }
            pozitie++;
            }
            else if(nr_atacuri==1){
                break;
            }
            pozitie++;
        }
        list_info=[]
        var stop=new Date();
        console.log(stop-start)
    })

    //sort by nr tribe
    document.getElementById("id_nr_tr").addEventListener("click",function()
    {
        var start=new Date();
        
        $(".tr_delimitator").remove();
        list.sort( (a,b)=>{
            return (parseInt(a.children[4].innerText)<parseInt(b.children[4].innerText))?1:(parseInt(a.children[4].innerText)>parseInt(b.children[4].innerText))?-1:
            (a.children[2].innerText<b.children[2].innerText) ? 1: (a.children[2].innerText>b.children[2].innerText)?-1:0;
    });


        //add new table in page
        for(let i=0;i<list.length;i++)
        {
            new_table.appendChild(list[i]);
        }
        new_table.appendChild(last_row);

        for(let i=0;i<list.length;i++)
        {
            list_info.push({
                coord_attacker:list[i].children[2].innerText,
                nr:parseInt(list[i].children[4].innerText),
            })
        }
        var pozitie=2;
        for(let i=0;i<list.length-1;i++)
        {
            let nr_atacuri=list_info[i].nr
            if(nr_atacuri>1 && list_info[i].coord_attacker !=list_info[i+1].coord_attacker)
            {
                var tableRef = document.getElementById("incomings_table").lastElementChild;
                var newRow   = tableRef.insertRow(pozitie);
                newRow.className="tr_delimitator"
                for(let i=0; i<1;i++){
                    let cell  = newRow.insertCell();
                    cell.setAttribute("colspan",length_table)
                    cell.classList.add("selected")
                    var delimitator  = document.createTextNode('--');
                    cell.appendChild(delimitator);
                
                }
            pozitie++;
            }
            else if(nr_atacuri==1){
                break;
            }
            pozitie++;
        }
        list_info=[]
        var stop=new Date();
        console.log(stop-start)
    })


    //sort by type
    document.getElementById("id_type").addEventListener("click",function()
    {
        var start=new Date();
        $(".tr_delimitator").remove();
        list.sort( (a,b)=>{
            return (a.children[5].innerText<b.children[5].innerText)?1:(a.children[5].innerText>b.children[5].innerText)?-1:
            (a.children[2].innerText<b.children[2].innerText) ? 1: (a.children[2].innerText>b.children[2].innerText)?-1:0;
        });

        //add new table in page
        for(let i=0;i<list.length;i++)
        {
            new_table.appendChild(list[i]);
        }
        new_table.appendChild(last_row);

        var pozitie=2;
        for(let i=0;i<list.length-1;i++)
        {
            let type=list[i].children[5].innerText;
            if(type!="?" && list[i].children[5].innerText !=list[i+1].children[5].innerText)
            {
                var tableRef = document.getElementById("incomings_table").lastElementChild;
                var newRow   = tableRef.insertRow(pozitie);
                newRow.className="tr_delimitator"
                for(let i=0; i<1;i++){
                    let cell  = newRow.insertCell();
                    cell.setAttribute("colspan",length_table)
                    cell.classList.add("selected")
                    var delimitator  = document.createTextNode('--');
                    cell.appendChild(delimitator);
                }
            pozitie++;
            }
            pozitie++;
        }
        list_info=[]
        var stop=new Date();
        console.log(stop-start)
    })
    
    //sort by nr pop
    document.getElementById("id_pop").addEventListener("click",function()
    {
        var start=new Date();
        console.log("aici baaaa")
        console.log($(".tr_delimitator"))
        $(".tr_delimitator").remove();
        list.sort( (a,b)=>{
            if(a.children[6].innerText=="?")
                var a_comp=2000000;
            else    
                var a_comp=parseFloat(a.children[6].innerText);

            if(b.children[6].innerText=="?")
                var b_comp=2000000;
            else    
                var b_comp=parseFloat(b.children[6].innerText);

            return (a_comp>b_comp)?1:(a_comp<b_comp)?-1:
            (a.children[2].innerText<b.children[2].innerText) ? 1: (a.children[2].innerText>b.children[2].innerText)?-1:0;
        });

        //add new table in page
        for(let i=0;i<list.length;i++)
        {
            new_table.appendChild(list[i]);
        }
        list_info=[]
        new_table.appendChild(last_row);

        let pozitie=1
        for(let i=0;i<list.length;i++)
        {
            console.log(i)
            if(i%4==0 && i>0){
                console.log("inside "+i)
                var tableRef = document.getElementById("incomings_table").lastElementChild;
                var newRow   = tableRef.insertRow(pozitie);
                newRow.className="tr_delimitator"
                for(let i=0; i<1;i++){
                    let cell  = newRow.insertCell();
                    cell.setAttribute("colspan",length_table)
                    cell.classList.add("selected")
                    var delimitator  = document.createTextNode('--');
                    cell.appendChild(delimitator);
                }
                pozitie++;

            }
            pozitie++;
        }




        var stop=new Date();
        console.log(stop-start)
    })

    //sort by time
    document.getElementById("id_time").addEventListener("click",function()
    {
        var start=new Date();

        $(".tr_delimitator").remove();

        list.sort( (a,b)=>{
            if(a.children[7].innerText=="?")
                var a_comp=10000000000;
            else{
                var v=a.children[7].innerText.split(":");
                var a_comp=parseInt(v[0])*24*3600+parseInt(v[1])*3600 +parseInt(v[2])*60 +parseInt(v[3]);
            }

            if(b.children[7].innerText=="?")
                var b_comp=10000000000;
            else{
                var v=b.children[7].innerText.split(":");
                var b_comp=parseInt(v[0])*24*3600+parseInt(v[1])*3600 +parseInt(v[2])*60 +parseInt(v[3]);
            }

            return (a_comp>b_comp)?1:(a_comp<b_comp)?-1:
            (a.children[2].innerText<b.children[2].innerText) ? 1: (a.children[2].innerText>b.children[2].innerText)?-1:0;
        });

        //add new table in page
        for(let i=0;i<list.length;i++)
        {
            new_table.appendChild(list[i]);
        }
        list_info=[]
        new_table.appendChild(last_row);
        
        let pozitie=1
        for(let i=0;i<list.length;i++)
        {
            console.log(i)
            if(i%4==0 && i>0){
                console.log("inside "+i)
                var tableRef = document.getElementById("incomings_table").lastElementChild;
                var newRow   = tableRef.insertRow(pozitie);
                newRow.className="tr_delimitator"
                for(let i=0; i<1;i++){
                    let cell  = newRow.insertCell();
                    cell.setAttribute("colspan",length_table)
                    cell.classList.add("selected")
                    var delimitator  = document.createTextNode('--');
                    cell.appendChild(delimitator);
                }
                pozitie++;

            }
            pozitie++;
        }


        var stop=new Date();
        console.log(stop-start)
    })

    //sort by launch time
    document.getElementById("id_launch_time").addEventListener("click",function()
    {
        var start=new Date();

        $(".tr_delimitator").remove();

        list.sort( (a,b)=>{
            if(a.children[9].innerText=="?")
                var a_comp=0;
            else{
                var v=a.children[9].innerText
                var a_comp=new Date(v).getTime();
            }

            if(b.children[9].innerText=="?")
                var b_comp=0
            else{
                var v=b.children[9].innerText
                var b_comp=new Date(v).getTime();
            }

            return (a_comp>b_comp)?1:(a_comp<b_comp)?-1:
            (a.children[2].innerText<b.children[2].innerText) ? 1: (a.children[2].innerText>b.children[2].innerText)?-1:0;
        });

        //add new table in page
        for(let i=0;i<list.length;i++)
        {
            new_table.appendChild(list[i]);
        }
        list_info=[]
        new_table.appendChild(last_row);
        
        let pozitie=2
        for(let i=0;i<list.length-1;i++)
        {
            // console.log(i)
            if(list[i].children[11].innerText != list[i+1].children[11].innerText  && i>0){
                // console.log("inside "+i)
                var tableRef = document.getElementById("incomings_table").lastElementChild;
                var newRow   = tableRef.insertRow(pozitie);
                newRow.className="tr_delimitator"
                for(let i=0; i<1;i++){
                    let cell  = newRow.insertCell();
                    cell.setAttribute("colspan",length_table)
                    cell.classList.add("selected")
                    var delimitator  = document.createTextNode('--');
                    cell.appendChild(delimitator);
                }
                pozitie++;

            }
            pozitie++;
        }


        var stop=new Date();
        console.log(stop-start)
    })




    //sort by coord destination
    var destination_th=document.getElementById("incomings_table").lastElementChild.children[0].children[1]
    destination_th=destination_th.getElementsByTagName("a")[0]
    destination_th.outerHTML="<a href='#' id='nr_dest'>"+destination_th.innerHTML+"</a>"

    document.getElementById("nr_dest").addEventListener("click",function()
    {
        console.log("aici")
        var start=new Date();
        let lengthTr=list[0].children.length
        $(".tr_delimitator").remove();
        list.sort( (a,b)=>{
            return (new Date(getLandTime(a.children[lengthTr-2].innerText)).getTime()>new Date(getLandTime(b.children[lengthTr-2].innerText)).getTime())?1:
            (new Date(getLandTime(a.children[lengthTr-2].innerText)).getTime()<new Date(getLandTime(b.children[lengthTr-2].innerText)).getTime())?-1:0
        })
        list.sort( (a,b)=>{
            return (parseInt(a.children[1].getAttribute("data-nr"))<parseInt(b.children[1].getAttribute("data-nr")))?1:
            (parseInt(a.children[1].getAttribute("data-nr"))>parseInt(b.children[1].getAttribute("data-nr")))?-1:
            (a.children[1].innerText<b.children[1].innerText) ? 1: (a.children[1].innerText>b.children[1].innerText)?-1:0;
        });


        //add new table in page
        for(let i=0;i<list.length;i++)
        {
            new_table.appendChild(list[i]);
        }
        new_table.appendChild(last_row);
        // 
        for(let i=0;i<list.length;i++)
        {
            list_info.push({
                coord_deff:list[i].children[1].innerText.match(/\d+\|\d+/)[0],
                nr:parseInt(list[i].children[1].getAttribute("data-nr")),
                id_coord:list[i].children[1].children[0].href.split("village=")[1].split("&")[0]
            })
        }
        console.log(list_info)

        //add delimiter on the first row
        var tableRef = document.getElementById("incomings_table").lastElementChild;
        var newRow   = tableRef.insertRow(1);
        newRow.className="tr_delimitator"
        let cell  = newRow.insertCell();
        
        cell.setAttribute("colspan",length_table)
        cell.classList.add("selected")
        var delimitator  = document.createElement("button")
        delimitator.innerText="load: ("+list_info[0].coord_deff+")"
        delimitator.setAttribute("data-id",list_info[0].id_coord)
        delimitator.setAttribute("data-nr",list_info[0].nr)
        delimitator.style.margin="10px"
        delimitator.classList.add("btn","load_troops")
        cell.appendChild(delimitator);

        //add delimiter after each village destination
        var pozitie=3;
        for(let i=0;i<list.length-1;i++)
        {
            if(list_info[i].coord_deff !=list_info[i+1].coord_deff)
            {
                var tableRef = document.getElementById("incomings_table").lastElementChild;
                var newRow   = tableRef.insertRow(pozitie);
                newRow.className="tr_delimitator"
                let cell  = newRow.insertCell();

                cell.setAttribute("colspan",length_table)
                cell.classList.add("selected")
                var delimitator  = document.createElement("button")
                delimitator.innerText="load: ("+list_info[i+1].coord_deff+")"
                delimitator.setAttribute("data-id",list_info[i+1].id_coord)
                delimitator.setAttribute("data-nr",list_info[i+1].nr)
                delimitator.style.margin="10px"
                delimitator.classList.add("btn","load_troops")
                cell.appendChild(delimitator);
                
                
            pozitie++;
            }
            pozitie++;
        }
        
        list_info=[]
        var stop=new Date();
        console.log(stop-start)
        eventGetTroops();
    })


}
        
//////////////////////////////////////////////////////tag incomings /////////////////////////////////////////////////////////////////
async function tagIncomings(){
    
    if(document.getElementsByClassName("info").length==0){
        document.getElementById("moreInfo").click();
        await waitForElm(".info")
        tagIncomings()
    }
    else{
    $("#btn_tag").attr('disabled', true);
    $(".tr_delimitator").remove();

    let nameTroops= await getNameTroops()
    let csrf = window.csrf_token;
    var list_incomings_href=[]
    var indexIncoming=1;
    var table_incomings=document.querySelectorAll(".row_a, .row_b")

    var nobleSpeed=2100*1000/(speedWorld*speedTroupes)//ms
    var ramSpeed=1800*1000/(speedWorld*speedTroupes)//ms
    var swordSpeed=1260*1000/(speedWorld*speedTroupes)//ms
    var axeSpeed=1080*1000/(speedWorld*speedTroupes)//ms
    console.log("constant world",speedWorld*speedTroupes)
    

    
    let list_incomingId=[]
    let listTdRename=[]
    for(let i=0;i<table_incomings.length;i++){
        let incomingId=table_incomings[i].children[0].children[2].getAttribute("data-id");
        let coordDest=table_incomings[i].children[1].innerText.match(/\d+\|\d+/)[0];
        let coordOrigin=table_incomings[i].children[2].innerText.match(/\d+\|\d+/)[0];
        var nameTroupe=table_incomings[i].children[0].innerText.trim().split(/\s+/)[0].toLowerCase();

        let href=window.location.href.split("&")[0]+`&screen=info_command&ajaxaction=edit_other_comment&id=${incomingId}&h=${csrf}`
        let current_tag=table_incomings[i].children[0].innerText.trim()
        let nr=parseInt(table_incomings[i].children[3].innerText);
        let nr_tribe=table_incomings[i].children[4].innerText;
        let type=table_incomings[i].children[5].innerText;
        let pop= (table_incomings[i].children[6].innerText !="?") ? parseInt(table_incomings[i].children[6].innerText):"?"
        let time=table_incomings[i].children[7].innerText;
        let predict=table_incomings[i].children[10].innerText;
        let stacksHome=table_incomings[i].children[11].innerText;
        let stacksComming=table_incomings[i].children[12].innerText;
        let length_tr=table_incomings[i].children.length

        let nameAttacker
        if(game_data.device == "desktop"){
            nameAttacker=table_incomings[i].children[length_tr-4].innerText
        }
        else{
            nameAttacker=table_incomings[i].children[length_tr-3].innerText
        }

        ////////////////////////////////get land time///////////////////////////////
        let time_land
        let timeInMM

        if(game_data.device == "desktop"){
            time_land=table_incomings[i].children[length_tr-2].innerText
            timeInMM=table_incomings[i].children[length_tr-1].innerText.split(":")
        }
        else{
            time_land=table_incomings[i].children[length_tr-1].innerText
            timeInMM=table_incomings[i].children[length_tr-1].innerText.split("\n")[1].split(":")
            console.log("comoon: " +timeInMM)

        }
        let date_land=getLandTime(time_land)
        let fake=false;
        let distance=calcDistance(coordOrigin,coordDest);

        timeInMM = Array.from(timeInMM).map(e=>parseInt(e))
        timeInMM=timeInMM[0]*3600*1000+ timeInMM[1]*60*1000+timeInMM[2]*1000;
        // console.log("timeInMM",timeInMM)
        list_incomingId.push(incomingId)
        
        let backtime="none"
        let sentTime="none"
        if(table_incomings[i].getElementsByClassName("possible_fake").length>0 && table_incomings[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img").length==2){
            let date_home=new Date(table_incomings[i].getElementsByClassName("possible_fake")[0].getAttribute("date-fake"))
            let labelName=table_incomings[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img")[1].src
            let time_attack=0;
            if(labelName.includes("snob.png")){
                time_attack=nobleSpeed*distance
            }else if(labelName.includes("ram.png") || labelName.includes("catapult.png")){
                time_attack=ramSpeed*distance
            }else if(labelName.includes("sword.png")){
                time_attack=swordSpeed*distance
            }else if(labelName.includes("axe.png")){
                time_attack=axeSpeed *distance
            }
            
            let dateLand=new Date(date_land)
            
            time_attack=Math.round(time_attack/1000)*1000
            backtime = parseDate(dateLand.getTime()+time_attack)
            sentTime = parseDate(dateLand.getTime()-time_attack)


            console.log("time_attack",time_attack)
            if(time_attack + date_home.getTime() > dateLand.getTime() ){
                fake=true;
                console.log("fake from "+coordOrigin)
            }
            var days=parseInt(time.split(":")[0])*24*3600*1000
            var hours=parseInt(time.split(":")[1])*3600*1000
            var min=parseInt(time.split(":")[2])*60*1000
            var sec=parseInt(time.split(":")[3])*1000
            var total_time=days+hours+min+sec-time_attack
            if(fake==true){
                time=total_time/(24*3600*1000)
                time+=":00:00:00"
            }
        }
        else if(table_incomings[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img").length==2){
            let labelName=table_incomings[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img")[1].src
            let time_attack=0;
            
            if(labelName.includes("snob.png")){
                time_attack=nobleSpeed*distance
            }else if(labelName.includes("ram.png") || labelName.includes("catapult.png")){
                time_attack=ramSpeed*distance
                // console.log("distance",distance)
                // console.log("ramSpeed",ramSpeed)
            }else if(labelName.includes("sword.png")){
                time_attack=swordSpeed*distance
            }else if(labelName.includes("axe.png")){
                time_attack=axeSpeed *distance
            }
            time_attack=Math.round(time_attack/1000)*1000
            // console.log("time_attack",time_attack)

            let dateLand=new Date(date_land)
            backtime = parseDate(dateLand.getTime()+time_attack)
            sentTime = parseDate(dateLand.getTime()-time_attack)
            console.log("backtime",backtime)
        }
        

        let obj={
            incomingId:incomingId,
            coordOrigin:coordOrigin,
            href:href,
            nameTroupe:nameTroupe,
            nr:nr,
            nr_tribe:nr_tribe,
            type:type,
            pop:pop,
            time:time,
            nameAttacker:nameAttacker,
            fake:fake,
            current_tag:current_tag,
            backtime:backtime,
            sentTime:sentTime,
            predict:predict,
            stacksHome:stacksHome,
            stacksComming:stacksComming
        }

        if(nameTroupe == lang["dcfafcb4323b102c7e204555d313ba0a"].toLowerCase()){
            let time_attack=0;
            // console.log(timeInMM +" > "+(axeSpeed*distance))
            if(timeInMM > ramSpeed*distance){
                nameTroupe=nameTroops['snob']
                time_attack=nobleSpeed*distance
            }
            else if(timeInMM > swordSpeed*distance){
                nameTroupe=nameTroops['ram']
                time_attack=ramSpeed*distance
            }
            else if(timeInMM > axeSpeed*distance){
                nameTroupe=nameTroops['sword']
                time_attack=swordSpeed*distance
            }
            else if(timeInMM > heavySpeed*distance){
                nameTroupe=nameTroops['axe']
                time_attack=axeSpeed *distance
            }
            else if(timeInMM > lightSpeed*distance){
                nameTroupe=nameTroops['heavy']
            }
            else if(timeInMM > spySpeed*distance){
                nameTroupe=nameTroops['light']
            }
            else{
                nameTroupe=nameTroops['spy']
            }
            obj.nameTroupe=nameTroupe.toLowerCase()
            if(time_attack > 0){
                time_attack=Math.round(time_attack/1000)*1000
                // console.log("time_attack",time_attack)
    
                let dateLand=new Date(date_land)
                backtime = parseDate(dateLand.getTime()+time_attack)
                sentTime = parseDate(dateLand.getTime()-time_attack)
                // console.log("backtime",backtime)
                obj.backtime=backtime
                obj.sentTime=sentTime
            }
        }
        console.log(obj)
        

        if(!table_incomings[i].children[0].innerText.toLowerCase().includes('"')){
            list_incomings_href.push(obj)
        }

        listTdRename.push(table_incomings[i].children[0])
       
    }

    
    console.log(listTdRename)
    let table_commands=document.getElementById("incomings_table")
    let length_columns=table_commands.getElementsByTagName("tbody")[0].children[0].children.length
    let lastRow=table_commands.getElementsByTagName("tbody")[0].children[listTdRename.length+1]
    $(table_commands).find(".row_a, .row_b").remove()

    for(let i=0;i<listTdRename.length;i++){
        $(table_commands).append(`<tr class="nowrap row_ax"><td colspan="${length_columns}"> ${listTdRename[i].innerHTML} </td></tr>`)
        
    }
    $(table_commands).append(lastRow)


    list_incomings_href=list_incomings_href.reverse();


    let checkPop = Number.isNaN(parseInt($("#input_pop_fake2").val())) ? 50 : parseInt($("#input_pop_fake2").val())
    var url_length=list_incomings_href.length
    var start_tagging=new Date()
    function ajaxRequest (urls) {
        let current_url
        let labelInfo=""
        let current_tag
        let obj=null
        if(urls.length>0){
            obj=urls.pop()
            current_url=obj.href;
            labelInfo=obj.nameTroupe;
            current_tag=obj.current_tag;
            let nr
            if(obj.nr_tribe=="?")
                nr=parseInt(obj.nr)
            else{
                nr=Math.max(parseInt(obj.nr), parseInt(obj.nr_tribe) )
            }

            let backtimeLabel=", [BT]: "+ convertDate(obj.backtime)
            if(localStorage.getItem(game_data.world+"addBacktime")=="false"){
                backtimeLabel=""
            }

            let sentTimeLabel=", [SENT]: "+ convertDate(obj.sentTime)
            if(localStorage.getItem(game_data.world+"addSentTime")=="false"){
                sentTimeLabel=""
            }
            let stacksLabel = `, [STACKED: H:${obj.stacksHome}, I:${obj.stacksComming}]`
            if(localStorage.getItem(game_data.world+"addStacks")=="false"){
                stacksLabel=""
            }


            if(obj.type!="?"){
                obj.time=parseInt(obj.time.split(":")[0]);

                if(obj.nr==20000)
                    labelInfo=labelInfo+" "+obj.nameAttacker+", "+nr+", "+obj.type +backtimeLabel+sentTimeLabel + stacksLabel;
                else if(obj.type=="new_off")
                    labelInfo=labelInfo+" "+obj.nameAttacker+", "+nr+", off"+backtimeLabel+sentTimeLabel + stacksLabel;
                else if(obj.type.includes("def"))
                    labelInfo=labelInfo+" "+obj.nameAttacker+", "+nr+", "+obj.type+", "+obj.time+"d"+backtimeLabel+sentTimeLabel + stacksLabel;
                else
                    labelInfo=labelInfo+" "+obj.nameAttacker+", "+nr+", "+obj.type+", "+obj.pop+"%, "+obj.time+"d"+backtimeLabel+sentTimeLabel + stacksLabel;

            }
            else{
                labelInfo=labelInfo+" "+obj.nameAttacker+", "+nr+backtimeLabel+sentTimeLabel + stacksLabel;
            }

            if(obj.fake==true && obj.type.toLowerCase() == "off" && parseInt(obj.pop) < checkPop){
                labelInfo+=' ("fake")';
            }
            else if(obj.fake==true && obj.type.toLowerCase().includes("def_cat")){
                labelInfo+=' ("fake")';
            }
            // if(!obj.predict.includes("?")){
            //     labelInfo+=` [pred: ${obj.predict}]`;
            // }


            console.log(labelInfo)
        }
        else{
            current_url="stop"
        }
        console.log("in functie in plm "+urls.length)
        // console.log(current_url)
        var start_ajax=new Date();
        if (urls.length >= 0 && current_url!="stop") {

            let commandId=current_url.split("id=")[1].split("&")[0]
            if(current_tag!=labelInfo)
            {

                $.ajax({
                    url: current_url,
                    method: 'POST',
                    dataType: "json",
                    data: { text: labelInfo },
                    headers: { 'TribalWars-Ajax': 1 },
                    success: (data) => {
                        $("span[data-id="+obj.incomingId+"]").find(".quickedit-label").text(labelInfo)
                        $("span[data-id="+obj.incomingId+"]").parent().css("background-color","#ff8080");
                        UI.SuccessMessage(indexIncoming+"/"+url_length)
                        indexIncoming++;
                        var stop_ajax=new Date();
                        var dif_time=stop_ajax.getTime()-start_ajax.getTime();
                        console.log("dif_time "+dif_time+" wait "+(200-dif_time))
                        window.setTimeout(function(){
                            ajaxRequest (list_incomings_href)
    
                        },200-dif_time)
                    }
                })
            }
            else{
                console.log("id: "+commandId+" already tagged")
                ajaxRequest (list_incomings_href)
                indexIncoming++;
            }


        
        }
        else
        {
            UI.SuccessMessage("done",2000)
            var stop_tagging=new Date();
            console.log("total time "+stop_tagging.getTime()-start_tagging.getTime())

        }
    }
    ajaxRequest(list_incomings_href);
    
    }
        

}
    
function parseDate(time){
    let date=new Date(time)
    
    let year=date.getFullYear();
    let month=("00"+(date.getMonth()+1)).slice(-2)
    let day=("00"+date.getDate()).slice(-2)
    let hours=("00"+date.getHours()).slice(-2)
    let minutes=("00"+date.getMinutes()).slice(-2)
    let seconds=("00"+date.getSeconds()).slice(-2)
    let result=`${month}/${day}/${year} ${hours}:${minutes}:${seconds}`
    return result
}


function getLandTime(time_land){
    var date_land=""
    let server_date=document.getElementById("serverDate").innerText.split("/")
    if(time_land.includes(lang["aea2b0aa9ae1534226518faaefffdaad"].replace(" %s",""))){    //today
        // console.log("here")
        date_land=server_date[1]+"/"+server_date[0]+"/"+server_date[2]+" "+time_land.match(/\d+:\d+:\d+:\d+/)[0]
    }
    else if(time_land.includes(lang["57d28d1b211fddbb7a499ead5bf23079"].replace(" %s",""))){    //tomorrow
        var tomorrow_date=new Date(server_date[1]+"/"+server_date[0]+"/"+server_date[2]);
        tomorrow_date.setDate(tomorrow_date.getDate()+1);
        date_land= ("0"+(tomorrow_date.getMonth()+1)).slice(-2)+"/"+("0"+tomorrow_date.getDate()).slice(-2)+"/"+tomorrow_date.getFullYear()+" "+time_land.match(/\d+:\d+:\d+:\d+/)[0];
    }else if(time_land.includes(lang["0cb274c906d622fa8ce524bcfbb7552d"].split(" ")[0])){  //on
        var on=time_land.match(/\d+.\d+/)[0].split(".");
        date_land=on[1]+"/"+on[0]+"/"+server_date[2]+" "+time_land.match(/\d+:\d+:\d+:\d+/)[0];
    }
    else if(time_land.includes("på")){//special case for swedish
        var on=time_land.match(/\d+.\d+/)[0].split(".");
        date_land=on[1]+"/"+on[0]+"/"+server_date[2]+" "+time_land.match(/\d+:\d+:\d+:\d+/)[0];
    }
    return date_land;
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}


function calcProductionTroupes(time,popReport){
    var maxPop=popReport;
    let nrAxemax=6000,nrLcMax=3000,nrRamMax=400;
    let countAxe=0,countLc=0,countRam=0;
    let time_temp=time
    while(maxPop<20000  && time_temp>0){
        if(countAxe<nrAxemax){
            countAxe++;
            time_temp-=axeTime;
            maxPop+=1
        }
        else break;
    }
    time_temp=time
    while(maxPop<20000  && time_temp>0){
        if(countLc<nrLcMax){
            countLc++;
            time_temp-=lhTime;
            maxPop+=4
        }
        else break;
    }
    time_temp=time
    while(maxPop<20000  && time_temp>0){   
        if(countRam<nrRamMax){
            countRam++;
            time_temp-=ramTime;
            maxPop+=5
        }
        else break;
    }

    // console.log("axe "+countAxe+" lc "+countLc+" ram "+countRam)
    // console.log(maxPop)
    maxPop=(maxPop/20000)*100
    return maxPop
}
    //////////////////////////////////////////////////////search reports /////////////////////////////////////////////////////////////////
var map_search
async function loadReports(){

    [map_search, status,infoVillages]=await Promise.all([readFileDropbox(filename_reports),insertlibraryLocalBase(),getInfoVillages()]).catch(err=>{alert(err)})
    console.log(status)

    /////////merge maps for reports
    try {
        let decompressedData = await decompress(await map_search.arrayBuffer() , 'gzip');  
        map_search=new Map( JSON.parse(decompressedData));
    } catch (error) {
        console.log("erorrrrrrrrrrrrrrrr map report from dropbox")
        map_search=new Map()
    }

    //if  database is stored locally
    if(await localBase.getItem(game_data.world+"reports")!=undefined){
        try {
            let decompressedDataBase64 = base64ToBlob(await localBase.getItem(game_data.world + "reports"))
            let decompressedData = await decompress(await decompressedDataBase64.arrayBuffer(), 'gzip')
            let map_localBase=new Map( JSON.parse(decompressedData));

            console.log("map_localBase",map_localBase)
            map_search=new Map([...map_localBase, ...map_search]) 
        } catch (error) {}
    }



    UI.SuccessMessage("Reports loaded", "slow")
    console.log(map_search)
    loadReportsOk=true;
    $("#input_search").on("input",function(){
        let current_value=$("#input_search").val()
        if(current_value.match(/\d+\|\d+/)!=null){
            coords=current_value.match(/\d+\|\d+/g)
            console.log(coords)
            $("#report_view").empty()
            let contentHtml=""
            let nr_found=0;
            for(let i=0;i<coords.length;i++){
                if(map_search.has(coords[i])){
                    let obj=map_search.get(coords[i]);
                    console.log(coords[i])
                    contentHtml+= `<div>
                    <center style="margin:10px"><input class="btn evt-confirm-btn btn-confirm-yes" type="button"onclick="$('#table`+i+`').toggle('slow')" value="`+coords[i]+`"></center>    
    
                    <table  class="table_hide" id="table`+i+'"'+
                    createReport(obj)+
                    `</table></div>`;
                    nr_found++;
                }
            }
            $("#report_view").append(contentHtml)
            $(".table_hide").hide();
            $("#progress_search").text("found: "+nr_found)
        }else{
        $("#report_view").empty()
        }
    
    })
    $("#input_search").mouseout(function(){
        let current_value=$("#input_search").val()
        if(current_value.match(/\d+\|\d+/)!=null){
                let coords=current_value.match(/\d+\|\d+/g)
                $("#input_search").val(Array.from(coords).join(","))
        }
    }) 
    console.log("infoVillages",infoVillages)
    $("#btn_off_coord").on("click",function(){
        let tribes=Array.from(document.getElementById("input_filter_tribe").value.split(",")).map(e=>e.trim().toLowerCase()).filter(element => {
            return element !== '';
          });
        
        let list_output=[]
        console.log("tribes",tribes)

        Array.from(map_search.keys()).forEach(key=>{
            try {
                let obj=map_search.get(key)
                let troop_at_home=obj["troopsAtHome_"+key]
                let pop=0;
                let time_report_home=obj["time_report_home_"+key]
                // console.log("troopsAtHome_"+key)
    
    
            
    
                if(troop_at_home!=undefined){
                    for(let i=0;i<troop_at_home.length;i++){
                        if(troop_at_home[i].type=="spear" || troop_at_home[i].type=="sword" || troop_at_home[i].type=="archer" || troop_at_home[i].type=="heavy"){
                            pop+=troop_at_home[i].count*troopsPop[troop_at_home[i].type]
                        }
                    }
                }
                else{
                    pop=-1
                    time_report_home="none"
                }   
                // console.log("coord: "+obj.coordAttacker)
                // console.log(infoVillages.get(obj.coordAttacker))
                if( tribemates.includes(obj.nameAttacker.toLowerCase())==false && obj.typeAttacker.includes("off")  && key.includes(obj.coordAttacker) && 
                    (tribes.includes(infoVillages.get(obj.coordAttacker).tribeName.toLowerCase()) || tribes.length == 0  )){
                    list_output.push({
                        type:"off",
                        coord:obj.coordAttacker,
                        name:obj.nameAttacker,
                        date:time_report_home,
                        pop:pop
                    })
                }
                else if( tribemates.includes(obj.nameDefender.toLowerCase())==false && obj.typeDefender.includes("off") &&  key.includes(obj.coordDefender) &&
                       (tribes.includes(infoVillages.get(obj.coordDefender).tribeName.toLowerCase()) || tribes.length == 0 )){
                        
                    list_output.push({
                        type:"off",
                        coord:obj.coordDefender,
                        name:obj.nameDefender,
                        date:time_report_home,
                        pop:pop
                    })
                }
            } catch (error) {
                console.log("key: "+ key+ "not found")
            }
    

        })
        list_output.sort((o1,o2)=>{
            return (o1.name>o2.name)?1:(o1.name<o2.name)?-1:(o1.pop>o2.pop)?-1:(o1.pop<o2.pop)?1:0
        })
        // console.log(list_output)
        let text_output=""
        for(let i=0;i<list_output.length;i++){
            text_output+=`${list_output[i].type}, ${list_output[i].coord}, k${getContinent(list_output[i].coord)}, ${list_output[i].name}, ${list_output[i].pop}, ${list_output[i].date.trim()}\n`
        
            if(i<list_output.length-1){
                if(list_output[i].name!=list_output[i+1].name){
                    text_output+="\n\n"
                }
            }
        
        }
        // console.log(text_output)

        let html_result=`
        <center><div id="table_results" style="height:700px;width:700px;overflow:auto">
            <textarea cols="80" rows="80">${text_output}</textarea>
        </div></center>
        `

        Dialog.show("content",html_result)

    })
    
    $("#btn_def_coord").on("click",function(){
        let tribes=Array.from(document.getElementById("input_filter_tribe").value.split(",")).map(e=>e.trim().toLowerCase()).filter(element => {
            return element !== '';
          });
        
        let list_output=[]
        console.log("tribes",tribes)

        Array.from(map_search.keys()).forEach(key=>{
            try {
                let obj=map_search.get(key)
                let troop_at_home=obj["troopsAtHome_"+key]
                let pop=0;
                let time_report_home=obj["time_report_home_"+key]
                // console.log("troopsAtHome_"+key)
    
    
            
    
                if(troop_at_home!=undefined){
                    for(let i=0;i<troop_at_home.length;i++){
                        if(troop_at_home[i].type=="spear" || troop_at_home[i].type=="sword" || troop_at_home[i].type=="archer" || troop_at_home[i].type=="heavy"){
                            pop+=troop_at_home[i].count*troopsPop[troop_at_home[i].type]
                        }
                    }
                }
                else{
                    pop=-1
                    time_report_home="none"
                }   
                // console.log("coord: "+obj.coordAttacker)
                // console.log(infoVillages.get(obj.coordAttacker))
                if( tribemates.includes(obj.nameAttacker.toLowerCase())==false && obj.typeAttacker.includes("def")  && key.includes(obj.coordAttacker) &&
                    (tribes.includes(infoVillages.get(obj.coordAttacker).tribeName.toLowerCase()) || tribes.length == 0  )){
                    list_output.push({
                        type:"def",
                        coord:obj.coordAttacker,
                        name:obj.nameAttacker,
                        date:time_report_home,
                        pop:pop
                    })
                }
                else if( tribemates.includes(obj.nameDefender.toLowerCase())==false && obj.typeDefender.includes("def") && key.includes(obj.coordDefender) &&
                        (tribes.includes(infoVillages.get(obj.coordDefender).tribeName.toLowerCase()) || tribes.length == 0 )){
                           
                    list_output.push({
                        type:"def",
                        coord:obj.coordDefender,
                        name:obj.nameDefender,
                        date:time_report_home,
                        pop:pop
                    })
                }
            } catch (error) {
                console.log("key: "+ key+ "not found")
            }
    

        })
        list_output.sort((o1,o2)=>{
            return (o1.name>o2.name)?1:(o1.name<o2.name)?-1:(o1.pop>o2.pop)?-1:(o1.pop<o2.pop)?1:0
        })
        // console.log(list_output)
        let text_output=""
        for(let i=0;i<list_output.length;i++){
            text_output+=`${list_output[i].type}, ${list_output[i].coord}, k${getContinent(list_output[i].coord)}, ${list_output[i].name}, ${list_output[i].pop}, ${list_output[i].date.trim()}\n`
        
            if(i<list_output.length-1){
                if(list_output[i].name!=list_output[i+1].name){
                    text_output+="\n\n"
                }
            }
        
        }
        // console.log(text_output)

        let html_result=`
        <center><div id="table_results" style="height:700px;width:700px;overflow:auto">
            <textarea cols="80" rows="80">${text_output}</textarea>
        </div></center>
        `

        Dialog.show("content",html_result)

    })
    

   


    $("#btn_stack_coord").on("click",function(){
        let list_output=[]
        let thresholdStack=parseInt(document.getElementById("input_stacked").value)
        thresholdStack=(Number.isNaN(thresholdStack)==true || thresholdStack<0)?0:thresholdStack
        console.log(thresholdStack)

        Array.from(map_search.keys()).forEach(key=>{
            let tribes=Array.from(document.getElementById("input_filter_tribe").value.split(",")).map(e=>e.trim().toLowerCase()).filter(element => {
                return element !== '';
            });
              
            try {
                let obj=map_search.get(key)
                let troop_at_home=obj["troopsAtHome_"+key]
                let pop=0;
                let time_report_home=obj["time_report_home_"+key]
                console.log("troopsAtHome_"+key)
    
                if(troop_at_home!=undefined){
                    for(let i=0;i<troop_at_home.length;i++){
                        if(troop_at_home[i].type=="spear" || troop_at_home[i].type=="sword" || troop_at_home[i].type=="archer" || troop_at_home[i].type=="heavy"){
                            pop+=troop_at_home[i].count*troopsPop[troop_at_home[i].type]
                        }
                    }
                }
                else{
                    pop=-1
                    time_report_home="none"
                }
                    
                if( tribemates.includes(obj.nameAttacker.toLowerCase())==false && pop>thresholdStack && key.includes(obj.coordAttacker) &&
                    (tribes.includes(infoVillages.get(obj.coordAttacker).tribeName.toLowerCase()) || tribes.length == 0)){
                    list_output.push({
                        type:obj.typeAttacker,
                        coord:obj.coordAttacker,
                        name:obj.nameAttacker,
                        date:time_report_home,
                        pop:pop
                    })
                }
                else if( tribemates.includes(obj.nameDefender.toLowerCase())==false && pop>thresholdStack && key.includes(obj.coordDefender) &&
                    (tribes.includes(infoVillages.get(obj.coordDefender).tribeName.toLowerCase()) || tribes.length == 0)){
                    list_output.push({
                        type:obj.typeDefender,
                        coord:obj.coordDefender,
                        name:obj.nameDefender,
                        date:time_report_home,
                        pop:pop
                    })
                }
            } catch (error) {
                
            }

        })
        list_output.sort((o1,o2)=>{
            return (o1.name>o2.name)?1:(o1.name<o2.name)?-1:(o1.pop>o2.pop)?-1:(o1.pop<o2.pop)?1:0
        })
        console.log(list_output)
        let text_output=""
        for(let i=0;i<list_output.length;i++){
            text_output+=`${list_output[i].type}, ${list_output[i].coord}, k${getContinent(list_output[i].coord)}, ${list_output[i].name}, ${list_output[i].pop}, ${list_output[i].date.trim()}\n`
        
            if(i<list_output.length-1){
                if(list_output[i].name!=list_output[i+1].name){
                    text_output+="\n\n"
                }
            }
        
        }
        console.log(text_output)

        let html_result=`
        <center><div id="table_results" style="height:800px;width:800px;overflow:auto">
            <textarea cols="80" rows="80">${text_output}</textarea>
        </div></center>
        `

        Dialog.show("content",html_result)

    })




}
    

//////////////////////////////////////////////////////search reports /////////////////////////////////////////////////////////////////
async function databaseDetails(){
    [
        mapReports,
        mapHistoryUpload,
        mapIncomings,
        mapSupport,
        mapAttack,
        troopsHome,
    
    ]=await Promise.all([
        readFileDropbox(filename_reports),
        readFileDropbox(filename_history_upload),
        readFileDropbox(filename_incomings),
        readFileDropbox(filename_support),
        readFileDropbox(filename_commands_attack),
        readFileDropbox(filename_troops_home),

    
    ]).catch(err=>{alert(err)})

    let data_attack_batch = await Promise.all(commandsAttacksPromises).catch(err=>{alert(err)})
    let data_support_batch = await Promise.all(supportPromises).catch(err=>{alert(err)})


    ////////////////////////////REPORTS DATA/////////////////////////////////////////////////
    let sizeReportsCompressedDB = formatBytes(new TextEncoder().encode(await mapReports.text()).length)
    let sizeReportDecompressedDB
    try {
        let decompressedData = await decompress(await mapReports.arrayBuffer() , 'gzip');  
        sizeReportDecompressedDB = formatBytes(new TextEncoder().encode(decompressedData).length)
        mapReports=new Map( JSON.parse(decompressedData));
    } catch (error) {
        console.log("erorrr map report from dropbox")
        mapReports=new Map()
    }


    ////////////////////////////REPORTS HISTORY DATA/////////////////////////////////////////////////
    let sizeReportsHistoryCompressedDB = formatBytes(new TextEncoder().encode(await mapHistoryUpload.text()).length)
    let sizeReportHistoryDecompressedDB
    try {
        let decompressedData = await decompress(await mapHistoryUpload.arrayBuffer() , 'gzip');  
        sizeReportHistoryDecompressedDB = formatBytes(new TextEncoder().encode(decompressedData).length)
        mapHistoryUpload=new Map( JSON.parse(decompressedData));
    } catch (error) {
        console.log("erorr map history upload from dropbox")
        mapHistoryUpload=new Map()
    }

    ////////////////////////////INCOMINGS DATA/////////////////////////////////////////////////
    let sizeIncomingsCompressedDB = formatBytes(new TextEncoder().encode(await mapIncomings.text()).length)
    let sizeIncomingsDecompressedDB
    try {
        let decompressedData = await decompress(await mapIncomings.arrayBuffer() , 'gzip');  
        sizeIncomingsDecompressedDB = formatBytes(new TextEncoder().encode(decompressedData).length)
        mapIncomings=new Map( JSON.parse(decompressedData));
    } catch (error) {
        console.log("erorrr map report from dropbox")
        mapIncomings=new Map()
    }

    ////////////////////////////TROOPS HOME DATA/////////////////////////////////////////////////
    let sizeTroopsHomeCompressedDB = formatBytes(new TextEncoder().encode(await troopsHome.text()).length)
    let sizeTroopsHomeDecompressedDB
    try {
        let decompressedData = await decompress(await troopsHome.arrayBuffer() , 'gzip');  
        sizeTroopsHomeDecompressedDB = formatBytes(new TextEncoder().encode(decompressedData).length)
        troopsHome=new Map( JSON.parse(decompressedData));
    } catch (error) {
        console.log("erorr map history upload from dropbox")
        troopsHome=new Map()
    }


    ////////////////////////////SUPPORT DATA/////////////////////////////////////////////////
    let map_support_dropbox, map_troops_home_dropbox
    let sizeSupportCompressedDB, sizeSupportDecompressedDB
    let countSupportCompressed = 0, countSupportDecompressed = 0

    try {
        let decompressedData = await decompress(await mapSupport.arrayBuffer() , 'gzip');  
        map_support_dropbox=new Map(JSON.parse(decompressedData)[0])
        map_troops_home_dropbox =new Map(JSON.parse(decompressedData)[1])   

        countSupportCompressed += new TextEncoder().encode(await mapSupport.text()).length
        countSupportDecompressed += new TextEncoder().encode(decompressedData).length
    } catch (error) {
        console.log("erorr map report from dropbox")
        map_support_dropbox=new Map()
        map_troops_home_dropbox=new Map()
    }

    for(let i=0;i<data_support_batch.length;i++){
        let decompressedData = await decompress(await data_support_batch[i].arrayBuffer() , 'gzip');  

        if(decompressedData != "[]"){
            let map_support_batch = new Map(JSON.parse(decompressedData)[0])
            let map_troops_home_batch = new Map(JSON.parse(decompressedData)[1])

            map_support_dropbox = new Map([...map_support_dropbox, ...map_support_batch])
            map_troops_home_dropbox = new Map([...map_troops_home_dropbox, ...map_troops_home_batch])

            countSupportCompressed += new TextEncoder().encode(await data_support_batch[i].text()).length
            countSupportDecompressed += new TextEncoder().encode(decompressedData).length
        }      

    }
    sizeSupportCompressedDB = formatBytes(countSupportCompressed)
    sizeSupportDecompressedDB = formatBytes(countSupportDecompressed)



    ////////////////////////////ATTACKS DATA/////////////////////////////////////////////////
    let sizeAttackCompressedDB, sizeAttackDecompressedDB
    let countAttackCompressed = 0, countAttackDecompressed = 0
    try {
        let decompressedData = await decompress(await data_attack.arrayBuffer() , 'gzip');  
        mapAttack=new Map(JSON.parse(decompressedData))

        countAttackCompressed += new TextEncoder().encode(await mapAttack.text()).length
        countAttackDecompressed += new TextEncoder().encode(decompressedData).length

    } catch (error) {
        console.log("erorr map attack from dropbox")
        mapAttack=new Map()
    }

    for(let i=0;i<data_attack_batch.length;i++){
        let decompressedData = await decompress(await data_attack_batch[i].arrayBuffer() , 'gzip');  

        if(data_attack_batch[i] != "[]"){
            let map_attacks_batch = new Map(JSON.parse(decompressedData))
            mapAttack = new Map([...mapAttack, ...map_attacks_batch])

            countAttackCompressed += new TextEncoder().encode(await data_attack_batch[i].text()).length
            countAttackDecompressed += new TextEncoder().encode(decompressedData).length
        }   
    }
    sizeAttackCompressedDB = formatBytes(countAttackCompressed)
    sizeAttackDecompressedDB = formatBytes(countAttackDecompressed)

 








    // console.log(`sizeReportsCompressedDB: ${sizeReportsCompressedDB}`)
    // console.log(`sizeReportDecompressedDB: ${sizeReportDecompressedDB}`)

    // console.log(`sizeReportsHistoryCompressedDB: ${sizeReportsHistoryCompressedDB}`)
    // console.log(`sizeReportHistoryDecompressedDB: ${sizeReportHistoryDecompressedDB}`)

    // console.log(`sizeIncomingsCompressedDB: ${sizeIncomingsCompressedDB}`)
    // console.log(`sizeIncomingsDecompressedDB: ${sizeIncomingsDecompressedDB}`)

    // console.log(`sizeSupportCompressedDB: ${sizeSupportCompressedDB}`)
    // console.log(`sizeSupportDecompressedDB: ${sizeSupportDecompressedDB}`)

    // console.log(`sizeAttackCompressedDB: ${sizeAttackCompressedDB}`)
    // console.log(`sizeAttackDecompressedDB: ${sizeAttackDecompressedDB}`)

    // console.log(`sizeTroopsHomeCompressedDB: ${sizeTroopsHomeCompressedDB}`)
    // console.log(`sizeTroopsHomeDecompressedDB: ${sizeTroopsHomeDecompressedDB}`)

    let listResult = [
        {
            name: "Reports",
            compressed: sizeReportsCompressedDB,
            decompresed: sizeReportDecompressedDB,
        },
        {
            name: "ReportsHistory",
            compressed: sizeReportsHistoryCompressedDB,
            decompresed: sizeReportHistoryDecompressedDB,
        },
        {
            name: "Incomings",
            compressed: sizeIncomingsCompressedDB,
            decompresed: sizeIncomingsDecompressedDB,
        },
        {
            name: "Supports",
            compressed: sizeSupportCompressedDB,
            decompresed: sizeSupportDecompressedDB,
        },
        {
            name: "Attacks",
            compressed: sizeAttackCompressedDB,
            decompresed: sizeAttackDecompressedDB,
        },
        {
            name: "Troops",
            compressed: sizeTroopsHomeCompressedDB,
            decompresed: sizeTroopsHomeDecompressedDB,
        },
    ]


    let html_result=`
    <center>
        <h2 style="margin-top: 20px"> Database size details </h2>
    </center>
    <div id="table_database_details" style="height:300px;width:400px;display: flex;justify-content: center;margin-top: -50px">
        <table style ="border: 1px solid black;border-collapse: collapse;align-self: center">
        <tr>
            <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;font-weight: bold;padding:10px">Name</td>
            <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;font-weight: bold;padding:10px">Compressed size</td>
            <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;font-weight: bold;padding:10px">Decompressed size</td>
        </tr>`

    for(let i=0;i<listResult.length;i++){
        html_result += `
        <tr>
            <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">${listResult[i].name}</td>
            <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">${listResult[i].compressed}</td>
            <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">${listResult[i].decompresed}</td>
        </tr>
        `
    }

    html_result += 
        `</table>
    </div>
    `

    Dialog.show("content",html_result)

}



///////////////////////////////////////////////////////create table for view report//////////////////////////////////////////////////////
function createReport(obj){
    var tableHTML=``;
    if(obj.attackingArmy!=undefined){    
        tableHTML=`
        <tbody>
            <tr>
                <td>Battle time </td>
                <td>`+ obj.time_report +`</td>
            </tr>
            <tr>
                <td colspan="2" valign="top" height="160" style="border: solid 1px ; padding 4px;" class="report_ReportAttack">
                    <table id="attack_info_att" width=100% style="border: 1px solid #DED3B9">
                        <tbody>
                            <tr> 
                                <th style="width:20%">Attacker:</th> 
                                <th >`+obj.nameAttacker+`</th> 
                            </tr>
                            <tr> 
                                <td >Origin:</td> 
                                <td >`+obj.coordAttacker+`</td> 
                            </tr>
                            <tr>
                                <td colspan="2" style="padding:0px">`+
                                createTableTroupes(obj.attackingArmy,obj.attackingArmyLosses)+
                                `</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>`
    }
    if(obj.defendingArmy!=undefined){
        tableHTML+= ` 
                <tr> 
                    <td colspan="2" valign="top" height="160" style="border: solid 1px ; padding 4px;"  >
                        <table id="attack_info_def" width=100% style="border: 1px solid #DED3B9">
                            <tbody>
                                <tr> 
                                    <th style="width:20%">Defender:</th> 
                                    <th >`+obj.nameDefender+`</th> 
                                </tr>
                                <tr> 
                                    <td >Origin:</td> 
                                    <td >`+obj.coordDefender+`</td> 
                                </tr>
                                <tr>
                                    <td colspan="2" style="padding:0px">`+
                                    createTableTroupes(obj.defendingArmy,obj.defendingArmyLosses)+
                                    `</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                    `
    } 

    if(obj.travelingTroops!=undefined){
        tableHTML+= ` 
                <tr>  
                    <td colspan="2" valign="top" height="160" style="border: solid 1px ; padding 4px;">
                        <table id="attack_spy_away" width=100% style="border: 1px solid #DED3B9; width:100%; margin-top:5px;">
                            <tbody>
                                <tr> 
                                    <th colspan="2">Units outside of village:</th> 
                                </tr>

                                <tr>
                                    <td colspan="2" >`+
                                    createTableTroupesAway(obj.travelingTroops)+
                                    `</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                    `
    }  
    if(obj.attackingArmy!=undefined){
        tableHTML+="</tbody>"
    }

    return tableHTML
}

function createTableTroupes(totalArmy,lostArmy){
    let tableHTML=`
    <table class="vis" >
        <tbody>
            <tr class="center">
                <td width="20"></td>`

        let units=game_data.units
        for(let i=0;i<totalArmy.length;i++){
            if(units[i]!="militia"){
                if(totalArmy[i].count==0 )
                    tableHTML+=`<td width="35"><img src="https://dsen.innogamescdn.com/asset/3ec301e5/graphic/unit/unit_`+units[i]+`.png" alt class="faded"</td>`
                else
                    tableHTML+=`<td width="35"><img src="https://dsen.innogamescdn.com/asset/3ec301e5/graphic/unit/unit_`+units[i]+`.png"</td>`
            }
        }
        tableHTML+="</tr>"
        tableHTML+=`
        <tr>
            <td width="20">Quantity:</td>`
        for(let i=0;i<totalArmy.length;i++){
            if(units[i]!="militia"){
                if(totalArmy[i].count==0)
                    tableHTML+=`<td style="text-align:center" class="unit-item unit-item-`+units[i]+` hidden">`+totalArmy[i].count+"</td>"
                else
                    tableHTML+=`<td style="text-align:center" class="unit-item unit-item-`+units[i]+`">`+totalArmy[i].count+"</td>"
            }
        }
        tableHTML+="</tr>"
        tableHTML+=`
        <tr>
            <td width="20">Losses:</td>`
        for(let i=0;i<lostArmy.length;i++){
            if(units[i]!="militia"){
                if(lostArmy[i].count==0)
                    tableHTML+=`<td style="text-align:center" class="unit-item unit-item-`+units[i]+` hidden">`+lostArmy[i].count+"</td>"
                else
                    tableHTML+=`<td style="text-align:center" class="unit-item unit-item-`+units[i]+`">`+lostArmy[i].count+"</td>"
            }
        }
        tableHTML+="</tr>"




        tableHTML+="</tr></tbody></table>"
        return tableHTML
}


function createTableTroupesAway(totalArmy){
    let tableHTML=`
    <table class="vis"> 
        <tbody>
            <tr class="center">`

        let units=game_data.units
        Object.keys(totalArmy).forEach(key=>{
            if(totalArmy[key]==0)
                tableHTML+=`<th width="35"><img src="https://dsen.innogamescdn.com/asset/3ec301e5/graphic/unit/unit_`+key+`.png" alt class="faded"</th>`
            else
                tableHTML+=`<th width="35"><img src="https://dsen.innogamescdn.com/asset/3ec301e5/graphic/unit/unit_`+key+`.png"</th>`

        })

        
        tableHTML+="</tr>"
        tableHTML+=`<tr>`
        Object.keys(totalArmy).forEach(key=>{
            if(totalArmy[key]==0)
                tableHTML+=`<td style="text-align:center" class="unit-item unit-item-`+key+` hidden">`+totalArmy[key]+"</td>"
            else
                tableHTML+=`<td style="text-align:center" class="unit-item unit-item-`+key+`">`+totalArmy[key]+"</td>"

        })
        tableHTML+="</tr>"

        tableHTML+="</tr></tbody></table>"
        return tableHTML
}

function createTableIncomings(list){
    let serverTime=document.getElementById("serverTime").innerText
    let serverDate=document.getElementById("serverDate").innerText.split("/")
    serverDate=serverDate[1]+"/"+serverDate[0]+"/"+serverDate[2]
    let date_current=new Date(serverDate+" "+serverTime).getTime()
    let html_incomings=`
        <tbody>
        <tr>
            <th><img src="https://dsen.innogamescdn.com/asset/056b9c0b/graphic/unit/att.png"></<th>
            <th >speed</th>
            <th colspan="2">destination</th>
            <th colspan="2">origin</th>
            <th >Arrival time</th>
            <th >Arrives in</th>
        </tr>`
        
        for(let i=0;i<list.length;i++){
            // console.log(list[i])
            let labelName
            // console.log(list[i].labelName)
            if(list[i].labelName=="none")
                labelName="https://dsen.innogamescdn.com/asset/056b9c0b/graphic/delete.png"
            else
                labelName=`https://dsen.innogamescdn.com/asset/a9e85669/graphic/unit/tiny/${list[i].labelName}`

            // console.log(list[i].labelName)
            let arrived=new Date(list[i].date_land).getTime()  
            if(arrived>date_current){
                html_incomings+=`
                    <tr>
                        <td><img src="https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/${list[i].type_attack}"> </td>
                        <td><img src="${labelName}"> </td>
                        <td><a href="${game_data.link_base_pure}info_village&id=${list[i].id_coord_def}"> (${list[i].coord_def})</a>  </td>
                        <td><a href="${game_data.link_base_pure}info_player&id=${list[i].id_player_def}"> ${list[i].player_def}</a>  </td>
                        <td><a href="${game_data.link_base_pure}info_village&id=${list[i].id_coord_off}">(${list[i].coord_off}) </a> </td>
                        <td><a href="${game_data.link_base_pure}info_player&id=${list[i].id_player_off}">${list[i].player_off} </a> </td>
                        <td>${list[i].date_land.split(" ")[0]} <b>${list[i].date_land.split(" ")[1]}</b></td>
                        <td date-time=${arrived} class="counterTime"></td>
                    </tr>
                `
            }
        }
        html_incomings+="</tbody>"
        return html_incomings
}

function counterTime(){
    
    window.setInterval(()=>{

        $(".counterTime").each((index,item)=>{
            let serverTime=document.getElementById("serverTime").innerText
            let serverDate=document.getElementById("serverDate").innerText.split("/")
            serverDate=serverDate[1]+"/"+serverDate[0]+"/"+serverDate[2]
            let date_current=new Date(serverDate+" "+serverTime).getTime()
            // console.log(date_current)
            
            let time=parseInt(item.getAttribute("date-time"))
            let hours=("0"+parseInt((time-date_current)/(3600*1000))).slice(-3);
            let minutes=("0"+parseInt(((time-date_current)/(60*1000)%60))).slice(-2);
            let seconds=( "0"+parseInt((((time-date_current)/1000)%60))).slice(-2);
            result=hours+":"+minutes+":"+seconds
            item.innerText=result
        })
    },5000)
    

}


////////////////////////////////////////////////////////get speed world///////////////////////////////////////////////////


function getSpeedConstant() { //Get speed constant (world speed * unit speed) for world
    if (localStorage.getItem(game_data.world+"speedWorld") !== null) {
        let obj=JSON.parse(localStorage.getItem(game_data.world+"speedWorld"))
        console.log("speed world already exist")
        return obj
    }
    else { //Get data from xml and save it in localStorage to avoid excessive XML requests to server
            let currentHtml=document.body.innerHTML
            document.body.innerHTML = httpGet("/interface.php?func=get_config") //Load world data
            let obj={}
            let worldSpeed = Number(document.getElementsByTagName("speed")[0].innerHTML)
            let unitSpeed = Number(document.getElementsByTagName("unit_speed")[0].innerHTML);
            obj.unitSpeed=unitSpeed
            obj.worldSpeed=worldSpeed
            document.body.innerHTML=currentHtml
            localStorage.setItem(game_data.world+"speedWorld",JSON.stringify(obj));
            console.log("save speed world")
        return obj
    }
}


/////////////////////////////////////////////////////// interface for get all tr from incomings page/////////////////////////////////////////
function setIntervalIncomings(){
    htmlInc = `
    <div id="div_container" class="ui-widget-content div_remove" style="width:600px;background-color:${backgroundColor};cursor:move;z-index:50;">
        <div class="close-btn" btn_close="btn_close" onclick="closeWindow()" style="position:absolute;top:10px;right: 10px;"><b><a href=#><font color="${titleColor}">X</font></b></a></div>
        <h2><center style="margin:10px"><u><font color="${titleColor}">Get all incomings</font></u></center></h2>
        <table id="table_upload" class="" border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor}">
        <tr>
        <td  style="text-align:center; width:auto; background-color:${headerColor}">
            <p><center style="margin:10px"><font color="${titleColor}">Between hours   </font></center></p>
        </td>
        <td style="text-align:center; width:auto; background-color:${headerColor}">
        <p><center style=""><input type="number" id="id_start" size="5" style="text-align:center" class=" input-nicer show" value="0"><br><br></center></p>
        </td> 
        <td style="text-align:center; width:auto; background-color:${headerColor}">
        <p><center style=""><input type="number" id="id_stop" size="5" style="text-align:center" class=" input-nicer show" value="100"><br><br></center></p>
        </td> 

        </tr>       
        </table>
        <center style="margin:10px"><u><input class="btn" type="button" id="btn_village" onclick="getTrIncomings()" value="Start"></center>
    

    
    </div>
    `;
    ////////////////////////////////////////add and remove window from page/////////////////////////////////////////////////////////////////
    $("#div_container").remove()
    $("#contentContainer").eq(0).prepend(htmlInc);
    $("#mobileContent").eq(0).prepend(htmlInc);

    if(game_data.device=="desktop"){
        $("#div_container").css("position","fixed");
        $("#div_container").draggable();
    }
    $('#id_start').on('input',function(e){
        let value=this.value;
        localStorage.setItem(game_data.world+"startInc",value)
    });
    $('#id_stop').on('input',function(e){
        let value=this.value;
        localStorage.setItem(game_data.world+"stopInc",value)
    });
    if(localStorage.getItem(game_data.world+"startInc")!=null)
        $('#id_start').val(localStorage.getItem(game_data.world+"startInc"))
    if(localStorage.getItem(game_data.world+"stopInc")!=null)
        $('#id_stop').val(localStorage.getItem(game_data.world+"stopInc"))


}

//////////////////////////////////////////////get a list with all tr ///////////////////////////////////////////////////////////////////
async function getTrIncomings(){

    let map_reports_dropbox
    if(localStorage.getItem(game_data.world+"get_only_fakes")=="true" || localStorage.getItem(game_data.world+"get_def_vills")=="true"){
        [map_reports_dropbox,status]=await Promise.all([readFileDropbox(filename_reports),insertlibraryLocalBase()]).catch(err=>{alert(err)})

    /////////merge maps for reports
    try {
        let decompressedData = await decompress(await map_reports_dropbox.arrayBuffer() , 'gzip');  
        map_reports_dropbox=new Map( JSON.parse(decompressedData));
    } catch (error) {
        console.log("erorrr map report from dropbox")
        map_reports_dropbox=new Map()
    }

    //if there database is stored locally
    if(await localBase.getItem(game_data.world+"reports")!=undefined){
        try{
            let decompressedDataBase64 = base64ToBlob(await localBase.getItem(game_data.world + "reports"))
            let decompressedData = await decompress(await decompressedDataBase64.arrayBuffer(), 'gzip')
    
            let map_localBase=new Map( JSON.parse(decompressedData));
            console.log("map_localBase history upload",map_localBase)
            map_reports_dropbox=new Map([...map_localBase, ...map_reports_dropbox])

        } catch (error) {}
    }



    }

    let limitPopFake=parseInt(document.getElementById("input_pop_fake2").value)
    limitPopFake=(Number.isNaN(limitPopFake)  || limitPopFake < 0 )? 0:limitPopFake

    //get pages for all incoming
    let list_pages=[]
    let start=parseInt(document.getElementById("id_start").value)
    let stop=parseInt(document.getElementById("id_stop").value)

    if(document.getElementsByClassName("vis")[1].getElementsByTagName("select").length>0){
        Array.from(document.getElementsByClassName("vis")[1].getElementsByTagName("select")[0]).forEach(function(item){
            list_pages.push(item.value)
        })
        list_pages.pop();
    }
    else if(document.getElementsByClassName("paged-nav-item").length>0){//all pages from the current folder
        let nr=0;
        Array.from(document.getElementsByClassName("paged-nav-item")).forEach(function(item){
            let current=item.href;
            current=current.split("page=")[0]+"page="+nr
            nr++;
            list_pages.push(current);
        })
    }
    else{
        let current_link=window.location.href;
        list_pages.push(current_link);
    }
    list_pages=list_pages.reverse();
    console.log(list_pages)

    // go to every page and get incoming
    let rows=[]
    function ajaxRequest (urls) {
        let current_url
        let startAjax=new Date().getTime();
        if(urls.length>0){
            current_url=urls.pop()
        }
        else{
            current_url="stop"
        }
        console.log(current_url)
        if (urls.length >= 0 && current_url!="stop") {
            $.ajax({
                url: current_url,
                method: 'get',
                success: (data) => {
                    document.body.innerHTML=data
                    var table_incomings=document.querySelectorAll(".row_a, .row_b")
                    for(let i=0;i<table_incomings.length;i++){
                        rows.push(table_incomings[i])
                    }
                    let stopAjax=new Date().getTime();
                    let diff=stopAjax-startAjax
                    console.log("wait inc: "+(200-diff))
                    window.setTimeout(function(){
                        ajaxRequest (list_pages)
                    },200-diff)
                }
            })
            
        }
        else
        {

            $(".row_a").remove();
            $(".row_b").remove();
            let table_incomings=document.getElementById("incomings_table")
            let lastRow=table_incomings.children[0].children[1];
            table_incomings.children[0].children[1].remove();
            let nr_row=0;
            for(let i=0;i<rows.length;i++){
                let hours=rows[i].children[  rows[i].children.length-1  ].innerText.split(":")[0]
                let isFakeDef = false, isFakePop = false, isFakeReturning = false;
                if(hours>=start && hours< stop){
                    if(localStorage.getItem(game_data.world+"get_only_fakes")=="true" || localStorage.getItem(game_data.world+"get_def_vills")=="true"){
                        let length_tr=rows[i].children.length

                        let coordDest=rows[i].children[1].innerText.match(/\d+\|\d+/)[0];
                        let coordOrigin=rows[i].children[2].innerText.match(/\d+\|\d+/)[0];
                        let player_id=rows[i].children[length_tr-4].children[0].href.split("player&id=")[1]//attacker's id
                        ////////////////////////////////get land time attack///////////////////////////////

                        //only if destination coord exist in database
                        if(map_reports_dropbox.has(coordOrigin) )
                        {
                            let idPlayer_dropbox
                            let type_dropbox
                            let nr_troupes_dropbox
            
                            var obj=map_reports_dropbox.get(coordOrigin);
                            var traveling=false
                            if(coordOrigin == obj.coordAttacker){
                                idPlayer_dropbox=obj.attackingPlayerId;
                                type_dropbox=obj.typeAttacker;
                                nr_troupes_dropbox=obj.nrTroupesAttacker
                                traveling=true;
                            }
                            else if(coordOrigin == obj.coordDefender){
                                idPlayer_dropbox=obj.defendingPlayerId;
                                type_dropbox=obj.typeDefender;
                                nr_troupes_dropbox=obj.nrTroupesDefender
                                traveling=false;
                            }
                            else{
                                idPlayer_dropbox=obj.supporterPlayerId
                                type_dropbox=obj.typeSupporter;
                                nr_troupes_dropbox=obj.nrTroupesSupporter
                            }
            
                            if(idPlayer_dropbox == player_id && rows[i].children[0].getElementsByTagName("img").length==2)
                            {


                                //calculate population
                                let date_landing_report=new Date(obj.time_report)
                                let distance=calcDistance(coordOrigin,coordDest);
                                let time_attack=0;
                                let time_land=rows[i].children[length_tr-2].innerText
                                let date_land=new Date(getLandTime(time_land))
                                let labelName=""
                                if(rows[i].children[0].getElementsByTagName("img")[1]==undefined || rows[i].children[0].getElementsByTagName("img")[1]==null )
                                    labelName="ram.png"
                                else
                                    labelName=rows[i].children[0].getElementsByTagName("img")[1].src
        
                                if(labelName.includes("snob.png")){
                                    time_attack=nobleSpeed*distance
                                }else if(labelName.includes("ram.png") || labelName.includes("catapult.png")){
                                    time_attack=ramSpeed*distance
                                }else if(labelName.includes("sword.png")){
                                    time_attack=swordSpeed*distance
                                }else if(labelName.includes("axe.png")){
                                    time_attack=axeSpeed *distance
                                }
                                if(traveling==false)
                                    time_attack=0;
        
                                if(type_dropbox=="off"){// do something with pop
                                    // console.log(date_land.getTime())
                                    // console.log(time_attack)
                                    // console.log(date_landing_report.getTime())
                                    let timeForRecruiting = (date_land.getTime()-time_attack)-date_landing_report.getTime()
                                    nr_troupes_dropbox=calcProductionTroupes(timeForRecruiting, nr_troupes_dropbox)                             
                                    nr_troupes_dropbox=Math.round(nr_troupes_dropbox * 10 )/ 10
                                    // console.log("final "+nr_troupes_dropbox)

                                    if(nr_troupes_dropbox < limitPopFake)
                                        isFakePop=true
                                }

                                if(type_dropbox.includes("def") && localStorage.getItem(game_data.world+"get_def_vills")=="true"){
                                    isFakeDef=true
                                }
                            


                                  
                                console.log(obj.time_return)
            
                                if(obj.time_return!=0 ){//do something if the attack is returning home

                                    let date_home=new Date(obj.time_return)
                                    let distance=calcDistance(coordOrigin,coordDest);
                                    let labelName=rows[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img")[1].src
                                    let time_attack=0;
                                    if(labelName.includes("snob.png")){
                                        time_attack=nobleSpeed*distance
                                    }else if(labelName.includes("ram.png") || labelName.includes("catapult.png")){
                                        time_attack=ramSpeed*distance
                                    }else if(labelName.includes("sword.png")){
                                        time_attack=swordSpeed*distance
                                    }else if(labelName.includes("axe.png")){
                                        time_attack=axeSpeed *distance
                                    }
                                    
                                    let time_land=rows[i].children[length_tr-2].innerText
                                    let dateLand=new Date(getLandTime(time_land))
                                    
                                    time_attack=Math.round(time_attack/1000) * 1000
                        
                                    console.log("time_attack",time_attack)

                                    if(time_attack + date_home.getTime()>dateLand.getTime() ){
                                        isFakeReturning=true;
                                        console.log("fake from "+coordOrigin)
                                    }
                            
                                   

                                }
                               
                                if(isFakePop == true && isFakeReturning == true && localStorage.getItem(game_data.world+"get_only_fakes")=="true"){
                                    $(table_incomings).append(rows[i])
                                    nr_row++;
                                }
                                else if(isFakeDef == true && isFakeReturning == true && localStorage.getItem(game_data.world+"get_only_fakes")=="true"){
                                    $(table_incomings).append(rows[i])
                                    nr_row++;
                                }
                                else if(isFakeDef == true && localStorage.getItem(game_data.world+"get_def_vills")=="true"){
                                    $(table_incomings).append(rows[i])
                                    nr_row++;
                                }
                              
                               
                            }
                        }

                        
                    }
                    else{
                        $(table_incomings).append(rows[i])
                        nr_row++;
                    }
                }
                

            }
            table_incomings.children[0].children[0].children[0].innerText="Command ("+nr_row+")"
            $(table_incomings).append(lastRow)

            //activate renaming
            $('document').ready(function() {
                CommandsOverview.init();
                UI.ToolTip('.icon_village_notes');

                $('.quickedit').QuickEdit({url: TribalWars.buildURL('POST', 'info_command', {ajaxaction: 'edit_other_comment', id: '__ID__'})});
                Command.init();
            });
            UI.SuccessMessage("done")
            console.log(rows)
            showButtons();

        }
    }
    ajaxRequest(list_pages);

}

/////////////////////////////////////////////highlight trains->yellow, nobles->red, nukes-> green////////////////////////////////////////
function highLightIncomings(){
    try {
        let table=document.querySelectorAll(".row_a,.row_b")
        if(localStorage.getItem(game_data.world+"highlight")=="true"){
            let colors = {
                yellow: '#ffff66',
                red: '#ff8080',
                green: '#4dff4d',
                orange: '#FF5B00'
            };
            document.getElementById("btn_highlight").classList.remove("btn-confirm-no")
            document.getElementById("btn_highlight").classList.add("btn-confirm-yes")
            for(let i=0;i<table.length;i++){
                let length_tr=table[i].children.length
                table[i].classList.remove("selected")
                //highlight nukes if has more than 70% pop

                if(document.getElementById("id_type")!=null && table[i].firstElementChild.style.backgroundColor!="rgb(255, 255, 102)"){//is different then yellow
                    let watchTower=table[i].children[0].getElementsByTagName("img")[0].src.includes("attack_large.png")
                    let watchTowerSmall=table[i].children[0].getElementsByTagName("img")[0].src.includes("attack_small.png")
                    let hasNuke=false
                    if(table[i].getElementsByClassName("cls_type").length>0){
                        let type=table[i].getElementsByClassName("cls_type")[0].innerText
                        let pop=parseFloat(table[i].getElementsByClassName("cls_pop")[0].innerText)
                        if(((type=="off" && pop>70)|| watchTower==true) && watchTowerSmall==false){//must be tested
                            hasNuke=true;
                        }     
                    }
                    if(hasNuke==true || watchTower==true ){
                        $(table[i]).children().each(function(){
                            console.log("color")
                            $(this).css('background-color', colors.orange);
                        });
                    }
                }
        
                //highlight all possible trains
                for(let j=i+1;j<table.length;j++){

                    //normal worlds
                    let tr1=table[i].children[length_tr-2].innerText.match(/[0-9]{2}\:[0-9]{2}\:[0-9]{2}\:[0-9]{3}/)[0]
                    let tr2=table[j].children[length_tr-2].innerText.match(/[0-9]{2}\:[0-9]{2}\:[0-9]{2}\:[0-9]{3}/)[0]
                    let time1=parseInt(tr1.split(":")[0])*3600*1000+parseInt(tr1.split(":")[1])*60*1000+parseInt(tr1.split(":")[2])*1000+parseInt(tr1.split(":")[3])
                    let time2=parseInt(tr2.split(":")[0])*3600*1000+parseInt(tr2.split(":")[1])*60*1000+parseInt(tr2.split(":")[2])*1000+parseInt(tr2.split(":")[3])
        
                    // let tr1=table[i].children[length_tr-2].innerText.match(/[0-9]{2}\:[0-9]{2}\:[0-9]{2}/)[0]
                    // let tr2=table[j].children[length_tr-2].innerText.match(/[0-9]{2}\:[0-9]{2}\:[0-9]{2}/)[0]
                    // let time1=parseInt(tr1.split(":")[0])*3600*1000+parseInt(tr1.split(":")[1])*60*1000+parseInt(tr1.split(":")[2])*1000
                    // let time2=parseInt(tr2.split(":")[0])*3600*1000+parseInt(tr2.split(":")[1])*60*1000+parseInt(tr2.split(":")[2])*1000
        

                    if(table[i].children[2].innerHTML==table[j].children[2].innerHTML){//if origin coord is the same
                        if(Math.abs(time1-time2)==50 || Math.abs(time1-time2)==100 || Math.abs(time1-time2)==150 || Math.abs(time1-time2)==0 ){
                            console.log(tr1+" === "+tr2)
                            console.log(time1+" === "+time2)
                            console.log("diference tr: "+(time2-time1))
        
                            $(table[i]).children().each(function(){
                                console.log("color i")
                                $(this).css('background-color', colors.yellow);
                            });
                            console.log(table[j])
                            $(table[j]).children().each(function(){
                                console.log("color j")
                                $(this).css('background-color', colors.yellow);
                            });
                            console.log(table[j])
                            break;
                        }
                    }
                    if(Math.abs(time1-time2)>200)
                        break;
                }





                
                // highlist if it is tagged as noble
                if(table[i].children[0].getElementsByTagName("img").length==2){
                    let hasNoble=table[i].children[0].getElementsByTagName("img")[1].src.includes("snob.png")
                    if(hasNoble==true){
                        $(table[i]).children().each(function(){
                            $(this).css('background-color', colors.red);
                        });
                    }
                }
        
            }
        }
        else{
            for(let i=0;i<table.length;i++){
                $(table[i]).children().each(function(){
                    $(this).css('background-color', "");
                });  
            }
            document.getElementById("btn_highlight").classList.remove("btn-confirm-yes")
            document.getElementById("btn_highlight").classList.add("btn-confirm-no")
        }
    
    } catch (error) {
        
    }


}
if(window.location.href.includes("mode=incomings"))
    highLightIncomings();


 
    

function toggleHighLight(){

    if(localStorage.getItem(game_data.world+"highlight")!=null){
        let isHighLight=localStorage.getItem(game_data.world+"highlight")
        if(isHighLight=="true"){
            localStorage.setItem(game_data.world+"highlight","false")
            UI.ErrorMessage("highlight off",500)
            highLightIncomings();
        }
        else{
            localStorage.setItem(game_data.world+"highlight","true")
            UI.SuccessMessage("highlight on",500)
            highLightIncomings();
        }

    }
    else{
        localStorage.setItem(game_data.world+"highlight","true")
        highLightIncomings();
    }
}

/////////////////////////////////////////////get and add troops on incoming page for each village////////////////////////////////////////////
function eventGetTroops(){
    var units=game_data.units


    $(".load_troops").on("click",function(event){
        event.preventDefault()
        $(".load_troops").attr("disabled", true)
        let villageId=this.getAttribute("data-id")
        let nrAttacks=this.getAttribute("data-nr")
        let link_home_troops=game_data.link_base_pure + `map&ajax=map_info&source=${villageId}&target=${villageId}&`
        let link_coming_troops=window.location.href.split("village=")[0]+`village=${villageId}&screen=place&mode=call&target=${villageId}`
        let coord=this.innerText.match(/\d+\|\d+/)[0]
        let button=this
        console.log(link_home_troops)
        this.parentElement.classList.remove("selected")



        let time_start=new Date().getTime();
        $.get(link_home_troops,function(response){
            console.log(response)
            let obj_troops={}
            for(let i=0;i<units.length-1;i++){
                obj_troops[units[i]]=parseInt(response.units[units[i]].count.home)+parseInt(response.units[units[i]].count.foreign)
            }
            let wallLevel,farmLevel,flagName,LoyaltyLevel
            wallLevel=response.buildings.wall
            farmLevel=response.buildings.farm
            LoyaltyLevel=response.mood
            console.log(response.flag)
            if(response.flag!=undefined)
                if(response.flag.toLowerCase().includes("defense"))
                    flagName =response.flag.short_desc
            else
                flagName="none"
            console.log(obj_troops)
            console.log("wallLevel: "+wallLevel)
            console.log("farmLevel: "+farmLevel)
            console.log("flagName: "+flagName)
            console.log("LoyaltyLevel: "+LoyaltyLevel)



            let htmlDiv=`<div id="div_coming_troops" hidden></div>`
            $("#contentContainer").eq(0).prepend(htmlDiv)
            console.log(link_coming_troops)

            $.get(link_coming_troops,function(data){
                document.getElementById("div_coming_troops").innerHTML=data
                
                let obj_troops_coming={snob:0}
                let troops_coming=document.getElementById("div_coming_troops").querySelectorAll("#support_sum td")
                console.log(troops_coming)
                for(let i=0;i<troops_coming.length-1;i++){
                    let name=troops_coming[i].getAttribute("data-unit")
                    let value=parseInt(troops_coming[i].innerText)
                    obj_troops_coming[name]=value
                }
                document.getElementById("div_coming_troops").remove()




                let html=`
                <div  style="width:600px;background-color:${backgroundColor};cursor:move;width:50%;margin:10px auto">
        
                <table class="" border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor}"> 
                <tr>
                    <td  style="text-align:center; width:auto; background-color:${headerColor}">
                        <p><center style="margin:10px"><font color="${titleColor}">coord </font></center></p>
                    </td>    
                    <td  style="text-align:center; width:auto; background-color:${headerColor}">
                        <p><center style="margin:10px"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/4ba99e83/graphic/unit/att.png"> </font></center></p>
                    </td>    
                    <td  style="text-align:center; width:auto; background-color:${headerColor}">
                        <p><center style="margin:10px"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/4ba99e83/graphic/flags/small/3.png"> </font></center></p>
                    </td>    
                    <td  style="text-align:center; width:auto; background-color:${headerColor}">
                        <p><center style="margin:10px"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/buildings/snob.png"> </font></center></p>
                    </td>    
                    <td  style="text-align:center; width:auto; background-color:${headerColor}">
                        <p><center style="margin:10px"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/buildings/wall.png"> </font></center></p>
                    </td>    
                    <td  style="text-align:center; width:auto; background-color:${headerColor}">
                        <p><center style="margin:10px"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/buildings/farm.png"> </font></center></p>
                    </td>   
                    <td  style="text-align:center; width:auto; background-color:${headerColor}">
                        <p><center style="margin:10px"><font color="${titleColor}">troops </font></center></p>
                    </td>   
                    
                `;
                for(let i=0;i<units.length-1;i++){
                    html+=`<td class="fm_unit" style="width:30px;text-align:center;width:auto; background-color:${headerColor}"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/unit/unit_${units[i]}.png"></td>`
                }
                html+=`
                    <td  style="text-align:center; width:auto; background-color:${headerColor}">
                        <p><center style="margin:10px"><font color="${titleColor}">pop</font></center></p>
                    </td>`
                html+=`</tr>
                        <tr>`
                
                html+=`
                    <td rowspan="3" class="" style="width:30px;height:30px;text-align:center; background-color:${headerColor};color:white">${coord}</td>
                    <td rowspan="3" class="" style="width:70px;height:30px;text-align:center; background-color:${headerColor};color:white">${nrAttacks}</td>
                    <td rowspan="3" class="" style="width:70px;height:30px;text-align:center; background-color:${headerColor};color:white">${flagName}</td>
                    <td rowspan="3" class="" style="width:30px;height:30px;text-align:center; background-color:${headerColor};color:white">${LoyaltyLevel}</td>
                    <td rowspan="3" class="" style="width:30px;height:30px;text-align:center; background-color:${headerColor};color:white">${wallLevel}</td>
                    <td rowspan="3" class="" style="width:30px;height:30px;text-align:center; background-color:${headerColor};color:white">${farmLevel}</td>
                    <td  style="text-align:center; width:auto; background-color:${headerColor}">
                        <p><center style="margin:10px"><font color="${titleColor}">home</font></center></p>
                    </td>
                `
                //home troops
                let total_pop=0;
                for(let i=0;i<units.length-1;i++){
                    let value_troop=obj_troops[units[i]]
                    let name_troop=units[i]
                    if(name_troop!="spy" && name_troop!="light" && name_troop!="marcher" && name_troop!="ram"&& name_troop!="catapult" && name_troop!="axe"){
                        total_pop+=value_troop*troopsPop[name_troop]
                    }
                    html+=`<td style="width:30px;height:30px;text-align:center; background-color:${headerColor};color:white">`+value_troop+"</td>"
                }
                html+=`<td style="width:60px;height:30px;text-align:center; background-color:${headerColor};color:white">`+total_pop+"</td>"
                html+=`</tr>
                        <tr>
                            <td  style="text-align:center; width:auto; background-color:${headerColor}">
                                <p><center style="margin:10px"><font color="${titleColor}">coming</font></center></p>
                            </td>`
                //coming troops
                total_pop=0;
                for(let i=0;i<units.length-1;i++){
                    let value_troop_coming=obj_troops_coming[units[i]]
                    let name_troop=units[i]
                    if(name_troop!="spy" && name_troop!="light" && name_troop!="marcher" && name_troop!="ram"&& name_troop!="catapult" && name_troop!="axe"){
                        total_pop+=value_troop_coming*troopsPop[name_troop]
                    }
                    html+=`<td style="width:30px;height:30px;text-align:center; background-color:${headerColor};color:white">`+value_troop_coming+"</td>"
                }
                html+=`<td style="width:60px;height:30px;text-align:center; background-color:${headerColor};color:white">`+total_pop+"</td>"

                html+=`</tr>
                        <tr>
                            <td  style="text-align:center; width:auto; background-color:${headerColor}">
                                <p><center style="margin:10px"><font color="${titleColor}">total </font></center></p>
                            </td>`
                //total troops
                total_pop=0;
                for(let i=0;i<units.length-1;i++){
                    let value_troop=obj_troops[units[i]]+obj_troops_coming[units[i]]
                    let name_troop=units[i]
                    if(name_troop!="spy" && name_troop!="light" && name_troop!="marcher" && name_troop!="ram"&& name_troop!="catapult" && name_troop!="axe"){
                        total_pop+=value_troop*troopsPop[name_troop]
                    }
                    html+=`<td style="width:30px;height:30px;text-align:center; background-color:${headerColor};color:white">`+value_troop+"</td>"
                }
                html+=`<td style="width:60px;height:30px;text-align:center; background-color:${headerColor};color:white">`+total_pop+"</td>"

                html+=`</tr></table></div>`
        
                button.outerHTML=html


                let time_stop=new Date().getTime()
                console.log("load troops: "+(time_stop-time_start))
                $(".load_troops").attr("disabled", false)






            })


        })


    })
}
eventGetTroops();
        
     

//////////////////////////////////////////////////////get data from /map/player.txt and /mapVillages.txt/////////////////////////////////////

async function getInfoVillages(){
    
    return new Promise(async(resolve,reject)=>{
        let filename_innoDB=game_data.world+"infoVillages"
        await insertlibraryLocalBase().catch(err=>{alert(err)})
        let data = await localBase.getItem(filename_innoDB).catch(err=>{alert(err)})
        

        console.log("get info VIllages")
        let mapVillages=new Map();
        let obj={};
        let server_date=document.getElementById("serverDate").innerText.split("/")
        let server_time=document.getElementById("serverTime").innerText
        let current_date=new Date(server_date[1]+"/"+server_date[0]+"/"+server_date[2]+" "+server_time);
        let url=window.location.href.split("/game.php")[0]
        let mapPlayer=new Map();
        let mapAlly=new Map();


        if(data==undefined){

            let dataVillage = httpGet(url+"/map/village.txt").split(/\r?\n/);
            let dataPlayer = httpGet(url+"/map/player.txt").split(/\r?\n/);
            let dataAlly = httpGet(url+"/map/ally.txt").split(/\r?\n/);

            for(let i=0;i<dataAlly.length-1;i++){
                // console.log(dataPlayer[i].split(",")[1])
                let tribeName=innoReplaceSpecialCaracters(dataAlly[i].split(",")[1])
                mapAlly.set(dataAlly[i].split(",")[0],tribeName)
            }
            for(let i=0;i<dataPlayer.length-1;i++){
                // console.log(dataPlayer[i].split(",")[1])
                let playerName=innoReplaceSpecialCaracters(dataPlayer[i].split(",")[1])
                let tribeName= (mapAlly.get(dataPlayer[i].split(",")[2]) == undefined)? "none":mapAlly.get(dataPlayer[i].split(",")[2])
                mapPlayer.set(dataPlayer[i].split(",")[0],{
                    allyId:dataPlayer[i].split(",")[2],
                    playerName:playerName,
                    tribeName: tribeName
                })
            }

    
            for(let i=0;i<dataVillage.length;i++){
                if(mapPlayer.get(dataVillage[i].split(",")[4])!=undefined){
                    mapVillages.set(dataVillage[i].split(",")[2]+"|"+dataVillage[i].split(",")[3],{
                        villageId:dataVillage[i].split(",")[0],
                        playerId:dataVillage[i].split(",")[4],
                        points:dataVillage[i].split(",")[5],
                        allyId:mapPlayer.get(dataVillage[i].split(",")[4]).allyId,
                        playerName:mapPlayer.get(dataVillage[i].split(",")[4]).playerName,
                        tribeName:mapPlayer.get(dataVillage[i].split(",")[4]).tribeName
                    })
                }
            }
            obj.datetime=current_date
            obj.data=Array.from(mapVillages.entries())

            let data=JSON.stringify(obj)
            data=replaceSpecialCaracters(data)
        
            await localBase.setItem(filename_innoDB,data)
        
        }else{
           
            let ino_db= JSON.parse(data)
            let db_date=ino_db.datetime
            mapVillages=new Map(ino_db.data)

            // console.log("mapVillages",mapVillages)
            



            // console.log(mapVillages)
            if(new Date(current_date).getTime()-new Date(db_date)>3600*1000){
                console.log("update database inno")

                let dataVillage = httpGet(url+"/map/village.txt").split(/\r?\n/);
                let dataPlayer = httpGet(url+"/map/player.txt").split(/\r?\n/);
                let dataAlly = httpGet(url+"/map/ally.txt").split(/\r?\n/);
    
                for(let i=0;i<dataAlly.length-1;i++){
                    // console.log(dataPlayer[i].split(",")[1])
                    let tribeName=innoReplaceSpecialCaracters(dataAlly[i].split(",")[1])
                    mapAlly.set(dataAlly[i].split(",")[0],tribeName)
                }
    
                for(let i=0;i<dataPlayer.length-1;i++){
                    // console.log(dataPlayer[i].split(",")[1])
                    let playerName=innoReplaceSpecialCaracters(dataPlayer[i].split(",")[1])
                    let tribeName= (mapAlly.get(dataPlayer[i].split(",")[2]) == undefined)? "none":mapAlly.get(dataPlayer[i].split(",")[2])

                    mapPlayer.set(dataPlayer[i].split(",")[0],{
                        allyId:dataPlayer[i].split(",")[2],
                        playerName:playerName,
                        tribeName:tribeName
                    })
                }
    
    
        
                for(let i=0;i<dataVillage.length;i++){
                    if(mapPlayer.get(dataVillage[i].split(",")[4])!=undefined){
                        mapVillages.set(dataVillage[i].split(",")[2]+"|"+dataVillage[i].split(",")[3],{
                            villageId:dataVillage[i].split(",")[0],
                            playerId:dataVillage[i].split(",")[4],
                            points:dataVillage[i].split(",")[5],
                            allyId:mapPlayer.get(dataVillage[i].split(",")[4]).allyId,
                            playerName:mapPlayer.get(dataVillage[i].split(",")[4]).playerName,
                            tribeName:mapPlayer.get(dataVillage[i].split(",")[4]).tribeName
                        })
                    }
                }
                obj.datetime=current_date
                obj.data=Array.from(mapVillages.entries())
                
                let data=JSON.stringify(obj)
                data=replaceSpecialCaracters(data)
                await localBase.setItem(filename_innoDB,data)

                console.log("upload new data")

            }
            else{
                console.log("already exist")
            }
        }
        resolve(mapVillages)


    })


}

function innoReplaceSpecialCaracters(text){
    // text=text.replaceAll("+"," ")
    // text=text.replaceAll("%21","!")
    // text=text.replaceAll("%23","#")
    // text=text.replaceAll("%24","$")
    // text=text.replaceAll("%25","%")

    // text=text.replaceAll("%28","(")
    // text=text.replaceAll("%29",")")
    // text=text.replaceAll("%2A","*")
    // text=text.replaceAll("%2B","+")
    // text=text.replaceAll("%2C",",")
    // text=text.replaceAll("%2F","/")


    // text=text.replaceAll("%3A",":")
    // text=text.replaceAll("%3D","=")
    // text=text.replaceAll("%3F","?")

    // text=text.replaceAll("%40","@")

    // text=text.replaceAll("%5B","[")
    // text=text.replaceAll("%5D","]")

    // text = text.replaceAll("%7B", "{")
    // text = text.replaceAll("%7D", "}")

    // text=text.replaceAll("%7C","|")
    // text=text.replaceAll("%7E","~")

    // text=text.replaceAll("%C3%84","Ã„")
    // text=text.replaceAll("%C3%85","Ã…")
    // text=text.replaceAll("%C3%86","Ã†")
    // text=text.replaceAll("%C3%A2","Ã¢")
    // text=text.replaceAll("%C3%A4","Ã¤")
    // text=text.replaceAll("%C3%A5","Ã¥")
    // text=text.replaceAll("%C3%A6","Ã¦")
    // text=text.replaceAll("%C3%B6","Ã¶")
    // text=text.replaceAll("%C3%B8","Ã¸")
    // text=text.replaceAll("%C3%BC","Ã¼")
    // text=text.replaceAll("%C4%8","Č")
    // text=text.replaceAll("%C5%BD","Ž")
    // text=text.replaceAll("%C5%A0","Š")
    // text=text.replaceAll("%C5%A1","š")

    // text=text.replaceAll("%C4%83","Äƒ")

    // text=text.replaceAll("%C8%99","È™")
    // text=text.replaceAll("%C5%A3","Å£")
    // text=text.replaceAll("%C8%9B","È›")
    // return text

    try {
        return decodeURIComponent(text).replace(/\+/g, ' ');
    } catch (error) {
        console.error(error, text);
        return text;
    }

}
    
function replaceSpecialCaracters(data) {
    let result = ""
    for (let i = 0; i < data.length; i++) {
        if (data[i] == "ț")
            result += 't'
        else if (data[i] == "ţ")
            result += 't'
        else if (data[i] == "Ț")
            result += "T"
        else if (data[i] == "Ă")
            result += "A"
        else if (data[i] == "ă")
            result += "a"
        else if (data[i] == "Â")
            result += "A"
        else if (data[i] == "Ș")
            result += "S"
        else if (data[i] == "ș")
            result += "s"
        else if (data[i] == "Î")
            result += "I"
        else if (data[i] == "î")
            result += "i"
        else
            result += data[i]
    }
    return result




}


function insertlibraryLocalBase(){
    return new Promise((resolve,reject)=>{

        let start=new Date().getTime()
        let script = document.createElement('script');
        script.type="text/javascript"
        script.src="https://dl.dropboxusercontent.com/s/22qgnhyxnyono68/libraryIndexedDB.js?dl=0"
        script.onload = function () {
            let stop=new Date().getTime()
            console.log(`insert idb library in ${stop-start} ms`)
            resolve("insert library")
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    })
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////// get supports out going from command/support page ///////////////////////////////////////

function getCommandsGoing(){

    return new Promise(async(resolve,reject)=>{
    //create link
    let linkCommand=game_data.link_base_pure+"overview_villages&mode=commands&type=all&&group=0"
    // console.log(linkCommand)
    let datePage = await ajaxGet(linkCommand)
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(datePage, 'text/html'); 
    
    //get pages for all incoming
    let list_pages=[]
    var map_outgoing_support=new Map()
    var map_outgoing_attack=new Map()

    if(htmlDoc.getElementsByClassName("vis")[1].getElementsByTagName("select").length>0){
        Array.from(htmlDoc.getElementsByClassName("vis")[1].getElementsByTagName("select")[0]).forEach(function(item){
            list_pages.push(item.value)
        })
        list_pages.pop();
    }
    else if(htmlDoc.getElementsByClassName("paged-nav-item").length>0){//all pages from the current folder
        let nr=0;
        Array.from(htmlDoc.getElementsByClassName("paged-nav-item")).forEach(function(item){
            let current=item.href;
            current=current.split("page=")[0]+"page="+nr
            nr++;
            list_pages.push(current);
        })
    }
    else{
        list_pages.push(linkCommand);
    }
    list_pages=list_pages.reverse();
    console.log(list_pages)

    
    //for each page
    function ajaxRequest (urls) {
        let current_url
        if(urls.length>0){
            current_url=urls.pop()
        }
        else{
            current_url="stop"
        }
        // console.log(current_url)
        if (urls.length >= 0 && current_url!="stop") {// go to every page and get all rows
            $.ajax({
                url: current_url,
                method: 'get',
                success: (data) => {
                    const parser = new DOMParser();
                    const htmlDoc = parser.parseFromString(data, 'text/html'); 

                    if(htmlDoc.getElementById("commands_table")==null){//commands outgoing none
                        resolve(map_outgoing_support)
                    }else{
                        var table_commands=htmlDoc.getElementById("commands_table").getElementsByTagName("tbody")[0].children
                        for(let i=1;i<table_commands.length-1;i++){
                            if(table_commands[i].children[0].innerText.match(/\d+\|\d+/)!=null){//destination must contains coord destination

                                let commandId=table_commands[i].getElementsByClassName("own_command")[0].getAttribute("data-command-id")
                                let coord_destination=table_commands[i].getElementsByClassName("quickedit-label")[0].innerText.match(/\d+\|\d+/)[0]
                                let coord_origin=table_commands[i].children[1].innerText.match(/\d+\|\d+/)[0]
                                let coord_origin_id=table_commands[i].children[1].getElementsByTagName("a")[0].href.split("id=")[1]
                                let landing_time=getLandTime(table_commands[i].children[2].innerText)
                                let troops={}
                                let player_origin_name=game_data.player.name
                                let player_origin_id=game_data.player.id.toString()
                                Array.from(table_commands[i].getElementsByClassName("unit-item")).forEach((elem,index)=>{
                                    troops[game_data.units[index]]=parseInt(elem.innerText)
                                })
                            
                                //add data for the current command into a map
                                let type_attack=table_commands[i].getElementsByTagName("img")[0].src.split("command/")[1]
                                if(type_attack.includes("support")){
                                    delete troops["snob"]
                                    map_outgoing_support.set(commandId,{
                                        coord_destination:coord_destination,
                                        coord_origin:coord_origin,
                                        landing_time:landing_time,
                                        troops:troops,
                                        player_origin_name:player_origin_name,
                                        player_origin_id:player_origin_id,
                                        commandId:commandId,
                                        coord_origin_id:coord_origin_id,
                                        type_attack:type_attack,
                                        labelName:"none"

                                    })
                                }
                                else if(type_attack=="attack_small.png" || type_attack=="attack_medium.png" || type_attack=="attack_large.png"){
                                // console.log("is an attack")
                                    let serverTime=htmlDoc.getElementById("serverTime").innerText
                                    let serverDate=htmlDoc.getElementById("serverDate").innerText.split("/")
                                    serverDate=serverDate[1]+"/"+serverDate[0]+"/"+serverDate[2]
                                    let date_current=new Date(serverDate+" "+serverTime)
                                    date_current.setDate(date_current.getDate()+7)
                

                                    map_outgoing_attack.set(commandId,{
                                        coord_destination:coord_destination,
                                        coord_origin:coord_origin,
                                        landing_time:landing_time,
                                        troops:troops,
                                        player_origin_name:player_origin_name,
                                        player_origin_id:player_origin_id,
                                        commandId:commandId,
                                        coord_origin_id:coord_origin_id,
                                        type_attack:type_attack,
                                        labelName:"none",
                                        uploadTime:date_current.getTime()

                                    })
                                }
                            }
                        }
                        UI.SuccessMessage("get page: "+urls.length)
                        window.setTimeout(function(){
                            ajaxRequest (list_pages)
                        },200)

                    }
                }
            })
           
        }
        else//append all rows into table
        {
            UI.SuccessMessage("done")
            resolve([map_outgoing_support,map_outgoing_attack])
        }
    }
    ajaxRequest(list_pages);
    })

}

////////////////////////////////////////////// get coming supports and attacks from incoming page ///////////////////////////////////////

function getSupportsAndAttacks(){
    return new Promise(async(resolve,reject)=>{
        if($('[id="incomings_amount"]:visible').length == 0 && $('[id="supports_amount"]:visible').length == 0){
            resolve({
                map_outgoing_support:new Map(),
                map_exist_support:new Map()
            })
        }
        else{
            if(document.getElementsByClassName("info").length>0)
            $(".info").remove()
        var current_href_incomings=window.location.href;
        ////////////////////////////////////////////////unIgnored attacks/supports....................................
        let incomings_href=game_data.link_base_pure+"overview_villages&mode=incomings&type=unignored&subtype=all&group=0&page=-1";


        let datePage = await ajaxGet(incomings_href)
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(datePage, 'text/html'); 



        if(htmlDoc.getElementsByClassName("overview_filters_delete").length>0){
            reject("turn off filters on incomings page")
        }
        let list_href=[];
        if(htmlDoc.getElementsByClassName("vis")[1].getElementsByTagName("select").length>0){
            Array.from(htmlDoc.getElementsByClassName("vis")[1].getElementsByTagName("select")[0].options).forEach(el=>{
                list_href.push({
                    href:el.value,
                    unignored:true
                });
            })
            list_href.pop();
        }
        else if(htmlDoc.getElementsByClassName("paged-nav-item").length>0){
            let arr=Array.from(htmlDoc.getElementsByClassName("paged-nav-item"));
            for(let i=0;i<arr.length;i++)
            list_href.push({
                href:arr[i].getAttribute("href"),
                unignored:true
            })
        }
        else if(htmlDoc.getElementById("incomings_table")!=null){
                list_href.push({
                    href:incomings_href,
                    unignored:true
                })
        }


    ///////////////////////////////////////////////////////////ignored attacks/support////////////////////////////////////////
        incomings_href=game_data.link_base_pure+"overview_villages&mode=incomings&type=ignored&subtype=all&group=0&page=-1";

        console.log("currentLink")
        console.log(incomings_href)
        let datePage2 = await ajaxGet(incomings_href)
        const parser2 = new DOMParser();
        const htmlDoc2 = parser2.parseFromString(datePage2, 'text/html'); 
          

        if(htmlDoc2.getElementsByClassName("vis")[1].getElementsByTagName("select").length>0){
            Array.from(htmlDoc2.getElementsByClassName("vis")[1].getElementsByTagName("select")[0].options).forEach(el=>{
                list_href.push({
                    href:el.value,
                    unignored:false
                });
            })
            list_href.pop();
        }
        else if(htmlDoc2.getElementsByClassName("paged-nav-item").length>0){
            let arr=Array.from(htmlDoc2.getElementsByClassName("paged-nav-item"));
            for(let i=0;i<arr.length;i++)
            list_href.push({
                href:arr[i].getAttribute("href"),
                unignored:false
            })
        }
        else if(htmlDoc2.getElementById("incomings_table")!=null){
            list_href.push({
                href:incomings_href,
                unignored:false
            })
        }







        console.log(list_href)
    

        var indexIncoming=1;
        var url_length=list_href.length
        var map_outgoing_support=new Map()

        var list_incomingId=[]
        var map_exist_support=localStorage.getItem(game_data.world+"map_exist_support")
        if(map_exist_support!=undefined)
            map_exist_support=new Map(JSON.parse(map_exist_support))
        else
            map_exist_support=new Map()


        function ajaxRequest (urls) {
            let current_url,unignored
            var time=0
            if(urls.length>0){
                let obj=urls.pop();
                current_url=obj.href
                unignored=obj.unignored
            }
            else{
                current_url="stop"
            }
            console.log("get url "+urls.length)
            // console.log(current_url)

            if (urls.length >= 0 && current_url!="stop") {
                var start_ajax=new Date();
                $.ajax({
                    url: current_url,
                    method: 'get',
                    success: (data) => {
                        const parser = new DOMParser();
                        const htmlDoc = parser.parseFromString(data, 'text/html'); 

                        if(htmlDoc.getElementById("incomings_table")==null)
                            alert("turn off the filters");
                        let table_incomings=htmlDoc.getElementById("incomings_table").getElementsByTagName("tbody")[0].children
                        for(let i=1;i<table_incomings.length-1;i++){
                            
                            if(table_incomings[i].children[0].innerText!="--"){
                                let commandId=table_incomings[i].getElementsByClassName("quickedit")[0].getAttribute("data-id")
                                
                                // console.log(commandId)
                                list_incomingId.push(commandId)
                                let coord_destination=table_incomings[i].children[1].innerText.match(/\d+\|\d+/)[0]
                                let coord_origin=table_incomings[i].children[2].innerText.match(/\d+\|\d+/)[0]
                                let coord_origin_id=table_incomings[i].children[2].getElementsByTagName("a")[0].href.split("id=")[1]
                                let length_tr=table_incomings[i].children.length
                                let landing_time=getLandTime(table_incomings[i].children[length_tr-2].innerText)
                                let troops={}
                                let player_origin_name=table_incomings[i].children[length_tr-4].innerText.trim()
                                let player_origin_id=table_incomings[i].children[length_tr-4].getElementsByTagName("a")[0].href.split("id=")[1]
                                

                                let labelName="none"
                                let type_attack=table_incomings[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img")[0].src.split("command/")[1]
                                if(table_incomings[i].children[0].getElementsByTagName("img").length==2){
                                    labelName=table_incomings[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img")[1].src.split("tiny/")[1]
                                    if(labelName==undefined)
                                        labelName=table_incomings[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img")[1].src.split("command/")[1]

                                }


                                //check if an attack was ignored or unignored
                                if(map_exist_support.has(commandId)){
                                    if(map_exist_support.get(commandId)!=unignored)
                                        map_exist_support.delete(commandId)
                                }


                                // console.log(coord_destination)
                                //add new command id to localstorage and save data to map_going_support
                                if(!map_exist_support.has(commandId)){

                                    
                                    if(!map_outgoing_support.has(coord_destination)){
                                        map_outgoing_support.set(coord_destination,[{
                                            coord_destination:coord_destination,
                                            coord_origin:coord_origin,
                                            landing_time:landing_time,
                                            troops:troops,
                                            player_origin_name:player_origin_name,
                                            player_origin_id:player_origin_id,
                                            type_attack:type_attack,
                                            commandId:commandId,
                                            labelName:labelName,
                                            coord_origin_id:coord_origin_id,
                                            unignored:unignored
                                        }])
                                        // console.log("list support doesn't exist")
                                    }
                                    else{
                                        let list_support=map_outgoing_support.get(coord_destination)
                                        list_support.push({
                                            coord_destination:coord_destination,
                                            coord_origin:coord_origin,
                                            landing_time:landing_time,
                                            troops:troops,
                                            player_origin_name:player_origin_name,
                                            player_origin_id:player_origin_id,
                                            type_attack:type_attack,
                                            commandId:commandId,
                                            labelName:labelName,
                                            coord_origin_id:coord_origin_id,
                                            unignored:unignored
                                        })
                                        map_outgoing_support.set(coord_destination,list_support)
                                        // console.log("list support updated")

                                    }
                                    map_exist_support.set(commandId,{
                                        unignored:unignored,
                                        playerId:game_data.player.id.toString()
                                    })
                                }
                                
                                
                            }
                        }

                        UI.SuccessMessage(indexIncoming+"/"+url_length)
                        indexIncoming++;
                        var stop_ajax=new Date();
                        var dif_time=stop_ajax.getTime()-start_ajax.getTime()
                        console.log("wait: "+dif_time)
                        window.setTimeout(function(){
                            ajaxRequest (list_href)
                        },200-dif_time)
                    }
                })
            
            }
            else
            {
                if(htmlDoc.getElementById("incomings_table")!=null){
                    // showButtons();
                }
            
                if( htmlDoc.getElementsByClassName("g-recaptcha").length>0){//recaptcha
                    console.log("recapthca")
                    UI.ErrorMessage("recapthca, upload again")
                    resolve("recapthca, upload again");
                    throw new Error("recapthca, upload again");
                }

                window.setTimeout(function(){


                    Array.from(map_exist_support.keys()).forEach((key)=>{
                        if(!list_incomingId.includes(key)){
                            map_exist_support.delete(key)
                            console.log("delete id: "+key)
                        }
                    })
                    // console.log("adadadadadadadadadadadadadadadadadadadadadadadadadadadadadadaadad")
                    // console.log("map_outgoing_support",map_outgoing_support)
                    // console.log("map_exist_support",map_exist_support)
                    // console.log("adadadadadadadadadadadadadadadadadadadadadadadadadadadadadadaadad")

                    resolve({
                        map_outgoing_support:map_outgoing_support,
                        map_exist_support:map_exist_support
                    })
                },200)



            }
        }
        if(list_href.length>0)
            ajaxRequest(list_href);
        else
            reject("error on incomings")
        }
       
    })
}


/////////////////////////////////////////////main function for getting all supports and attacks//////////////////////////////////////////

async function uploadSupports(){
    document.getElementById("progress_support").innerText="Getting data...";

    var mapCommandsSharing = await getCommandsSharing()
    var [mapVillages, data_support,data_attack,mapStatus]=await Promise.all([
        getInfoVillages(), 
        readFileDropbox(filename_support),
        readFileDropbox(filename_commands_attack),
        readFileDropbox(filename_status_upload),
    ]).catch(err=>{alert(err)})

    let data_attack_batch = await Promise.all(commandsAttacksPromises).catch(err=>{alert(err)})
    let data_support_batch = await Promise.all(supportPromises).catch(err=>{alert(err)})

    var result_commands=await getCommandsGoing().catch(err=>{alert(err);throw err})
    // console.log("result_commands",result_commands)
    var map_going=result_commands[0]
    var map_going_attacks=result_commands[1]

    let map_support_dropbox,map_troops_home_dropbox
    try {
        let decompressedData = await decompress(await data_support.arrayBuffer() , 'gzip');  
        map_support_dropbox=new Map(JSON.parse(decompressedData)[0])
        map_troops_home_dropbox =new Map(JSON.parse(decompressedData)[1])   
    } catch (error) {
        console.log("erorrrrrrrrrrrrrrrr map report from dropbox")
        map_support_dropbox=new Map()
        map_troops_home_dropbox=new Map()
    }

    //merge batch commands attacks (EXTRA files) 
    for(let i=0;i<data_support_batch.length;i++){
        let decompressedData = await decompress(await data_support_batch[i].arrayBuffer() , 'gzip');  

        if(decompressedData != "[]"){
            let map_support_batch = new Map(JSON.parse(decompressedData)[0])
            let map_troops_home_batch = new Map(JSON.parse(decompressedData)[1])

            map_support_dropbox = new Map([...map_support_dropbox, ...map_support_batch])
            map_troops_home_dropbox = new Map([...map_troops_home_dropbox, ...map_troops_home_batch])
        }      

        let fileName = `${databaseName}/Support${i}.txt`
        if(await localBase.getItem(fileName) != undefined){
            try {
                let decompressedDataBase64 = base64ToBlob(await localBase.getItem(fileName))
                let decompressedData = await decompress(await decompressedDataBase64.arrayBuffer(), 'gzip')
                let map_localBase=new Map( JSON.parse(decompressedData));
    
                // console.log("map_localBase_support",map_localBase)
                map_support_dropbox=new Map([...map_localBase, ...map_support_dropbox])
            } catch (error) {
                
            }
        }
        fileName = `${databaseName}/Support${i}.txtHome`
        if(await localBase.getItem(fileName) != undefined){
            try {
                let decompressedDataBase64 = base64ToBlob(await localBase.getItem(fileName))
                let decompressedData = await decompress(await decompressedDataBase64.arrayBuffer(), 'gzip')
                let map_localBase=new Map( JSON.parse(decompressedData));
    
                // console.log("map_localBase_troops home",map_localBase)
                map_troops_home_dropbox=new Map([...map_localBase, ...map_troops_home_dropbox])
            } catch (error) {
                
            }
        }
    }

    // console.log("first: map_support_dropbox", map_support_dropbox)


    //if  database is stored locally
    if(await localBase.getItem(game_data.world+"map_support_dropbox")!=undefined){
        try{
            let decompressedDataBase64 = base64ToBlob(await localBase.getItem(game_data.world + "map_support_dropbox"))
            let decompressedData = await decompress(await decompressedDataBase64.arrayBuffer(), 'gzip')
    
            let map_localBase=new Map( JSON.parse(decompressedData));
            // console.log("map_support_dropbox history upload",map_localBase)
            map_support_dropbox=new Map([...map_localBase, ...map_support_dropbox])
        } catch (error) {
            let map_localBase=new Map( JSON.parse(lzw_decode(await localBase.getItem(game_data.world + "map_support_dropbox"))));
            map_support_dropbox=new Map([...map_localBase, ...map_support_dropbox])
        }

    }
    if(await localBase.getItem(game_data.world+"map_troops_home_dropbox")!=undefined){
        try{
            let decompressedDataBase64 = base64ToBlob(await localBase.getItem(game_data.world + "map_troops_home_dropbox"))
            let decompressedData = await decompress(await decompressedDataBase64.arrayBuffer(), 'gzip')
    
            let map_localBase=new Map( JSON.parse(decompressedData));
            // console.log("map_troops_home_dropbox history upload",map_localBase)
            map_troops_home_dropbox=new Map([...map_localBase, ...map_troops_home_dropbox])
        } catch (error) {
            let map_localBase=new Map( JSON.parse(lzw_decode(await localBase.getItem(game_data.world + "map_troops_home_dropbox"))));
            map_troops_home_dropbox=new Map([...map_localBase, ...map_troops_home_dropbox])
        }
    }

    try {
        let decompressedData = await decompress(await mapStatus.arrayBuffer() , 'gzip');  
        mapStatus=new Map( JSON.parse(decompressedData));
    } catch (error) {
        console.log("erorrr map report from dropbox")
        mapStatus=new Map()
    }

    let map_support_uploaded=new Map()
    Array.from(map_support_dropbox.keys()).forEach(key=>{
        let list_coming=map_support_dropbox.get(key)
        for(let i=0;i<list_coming.length;i++){
            if(list_coming[i].type_attack.includes("support")){
                map_support_uploaded.set(list_coming[i].commandId,list_coming[i].troops)
            }
        }
    })
    // console.log("map_support_uploaded", map_support_uploaded)

    // console.log("getSupportAndAttacks")
    var resultSupport = await getSupportsAndAttacks().catch(err=>{alert(err);throw err})
    // console.log(" finish getSupportAndAttacks")
    // console.log("map_going: " + map_going)
    // console.log("resultSupport", resultSupport)

    // console.log("second: map_support_dropbox", map_support_dropbox)


    var map_coming = resultSupport.map_outgoing_support
    var map_troops_home=new Map()
    // console.log("map_coming",map_coming)
    // console.log("map_support_dropbox",map_support_dropbox)

    //for each support coming get all troops
    var keys=Array.from(map_coming.keys())
    let start_get_troops=new Date().getTime()

    // console.log(keys)
    // console.log("mapCommandsSharing", mapCommandsSharing)
    const run = async () => {
        console.log("Starting...");
        for (let i = 0; i < keys.length; i++) {
            let list_support=map_coming.get(keys[i])
            console.log(list_support)
            for(let j=0;j<list_support.length;j++){
                console.log(list_support[j].player_origin_name.trim())

                //get troops coming
                if(list_support[j].type_attack.includes("support") &&  
                    !map_support_uploaded.has(list_support[j].commandId) &&
                    !map_going.has(list_support[j].commandId) &&
                    (mapCommandsSharing.has(list_support[j].player_origin_name.trim()))
                 ){
                    let troops = await ajaxTroopsComing(list_support[j].commandId)
                    console.log("troops comming")
                    console.log(troops)
                    list_support[j].troops = troops
                    UI.SuccessMessage("info coord: "+(keys.length-i)+" , get troops coming "+(list_support.length-j))
                }
                else if(list_support[j].type_attack.includes("support") &&
                        map_support_uploaded.has(list_support[j].commandId)
                ){//update support comming if already exists in dropbox
                    console.log("update troops coming")
                    let objTroops = map_support_uploaded.get(list_support[j].commandId)
                    list_support[j].troops = objTroops

                }
                else if (list_support[j].type_attack.includes("attack")) {//type_attack=="attack"
                    try {//in case a barb is taken and tw database is not yet updated will throw an error
                        let villageId=mapVillages.get(list_support[j].coord_destination).villageId
                        if(!map_troops_home.has(list_support[j].coord_destination)){
                            let obj = await ajaxTroopsStationed(villageId)
                            console.log("troops home")
                            console.log(obj)
        
                            let serverTime=document.getElementById("serverTime").innerText
                            let serverDate=document.getElementById("serverDate").innerText.split("/")
                            serverDate=serverDate[1]+"/"+serverDate[0]+"/"+serverDate[2]
                            let date_current=new Date(serverDate+" "+serverTime)
                            date_current.setDate(date_current.getDate()+7)
        
                            obj.uploadTime=date_current.getTime()
                            map_troops_home.set(list_support[j].coord_destination,obj)
                            UI.SuccessMessage("info coord: "+(keys.length-i)+" , get troops home "+(list_support.length-j))
        
                        }   
                    } catch (error) {
                        console.log(error)
                    }

                }
            }
            map_coming.set(keys[i],list_support)
            
        }
        console.log("Done!");
    };
    await run();
    var stop_get_troops=new Date().getTime()
    console.log("time get troops "+(stop_get_troops-start_get_troops))

    console.log("support outgoing")
    console.log(map_going)
    console.log("support coming")
    console.log(map_coming)
    console.log("troops home")
    console.log(map_troops_home)

    //merge map_going and map_coming
    if(map_going !=undefined){// no commands going
        Array.from(map_going.keys()).forEach(key=>{
            let obj_going=map_going.get(key)
            if(map_coming.has(obj_going.coord_destination)){
                // console.log("map coming update coord")
                let list_coming=map_coming.get(obj_going.coord_destination)
                for(let i=0;i<list_coming.length;i++){
                    if(key==list_coming[i].commandId){
                        list_coming[i].troops = obj_going.troops
                        map_coming.set(obj_going.coord_destination, list_coming)
                        break;
                    }
                }
            }else{
                map_coming.set(obj_going.coord_destination,[obj_going])
                // console.log("map coming add coord")
    
            }
            
        })
        console.log("support coming after merge")
        // console.log(map_coming)

    }



    let map_attack_dropbox = new Map()
    /////////////////////////////////////////////////////////////////////////get and prelucrate  map commands attacks//////////////
    try {
        let decompressedData = await decompress(await data_attack.arrayBuffer() , 'gzip');  
        map_attack_dropbox=new Map(JSON.parse(decompressedData))

    } catch (error) {
        console.log("erorrrrr map attack from dropbox")
        map_attack_dropbox=new Map()
    }

    //if  database is stored locally
    if(await localBase.getItem(game_data.world+"map_attack_dropbox")!=undefined){
        try{
            let decompressedDataBase64 = base64ToBlob(await localBase.getItem(game_data.world + "map_attack_dropbox"))
            let decompressedData = await decompress(await decompressedDataBase64.arrayBuffer(), 'gzip')
    
            let map_localBase=new Map( JSON.parse(decompressedData));
            // console.log("map_attack_dropbox upload",map_localBase)
            map_attack_dropbox=new Map([...map_localBase, ...map_attack_dropbox])
        } catch (error) {
            let map_localBase=new Map( JSON.parse(lzw_decode(await localBase.getItem(game_data.world + "map_attack_dropbox"))));
            map_attack_dropbox=new Map([...map_localBase, ...map_attack_dropbox])
        }
    }
    console.log("map_attack_dropbox", map_attack_dropbox)


    // console.log(data_attack_batch.length)
    //merge batch commands attacks
    for(let i=0;i<data_attack_batch.length;i++){
        let decompressedData = await decompress(await data_attack_batch[i].arrayBuffer() , 'gzip');  

        if(data_attack_batch[i] != "[]"){
            let map_attacks_batch = new Map(JSON.parse(decompressedData))
            map_attack_dropbox = new Map([...map_attack_dropbox, ...map_attacks_batch])
        }   

        let fileName = `${databaseName}/Commands_attack${i}.txt`
        if(await localBase.getItem(fileName) != undefined){
            try {
                let decompressedDataBase64 = base64ToBlob(await localBase.getItem(fileName))
                let decompressedData = await decompress(await decompressedDataBase64.arrayBuffer(), 'gzip')
                let map_localBase=new Map( JSON.parse(decompressedData));
                // console.log("map_localBase_attacks",map_localBase)
                map_attack_dropbox=new Map([...map_localBase, ...map_attack_dropbox])
            } catch (error) {
            }
        }
    }
    // console.log("map_attack_dropbox", map_attack_dropbox)



    console.log("map_going_attacks",map_going_attacks)

    if(map_going_attacks !=undefined){// no commands going
        Array.from(map_going_attacks.keys()).forEach(key=>{
            try {
                let obj=map_going_attacks.get(key)
                obj.coord_destination_id=mapVillages.get(obj.coord_destination).villageId
                obj.player_destination_name=mapVillages.get(obj.coord_destination).playerName
                obj.player_destination_id=mapVillages.get(obj.coord_destination).playerId
                map_attack_dropbox.set(key,obj)
            } catch (error) {
                console.log("command attack to barb")
                console.log(error)
            }
        })
    }
    




   


    return new Promise(async(resolve,reject)=>{

        // console.log("map_dropbox_coming")
        // console.log(map_support_dropbox)
        // console.log("map_dropbox_home")
        // console.log(map_troops_home_dropbox)

        
        let serverTime=document.getElementById("serverTime").innerText
        let serverDate=document.getElementById("serverDate").innerText.split("/")
        serverDate=serverDate[1]+"/"+serverDate[0]+"/"+serverDate[2]
        let date_current=new Date(serverDate+" "+serverTime).getTime()
        let date_current_commands=serverDate+" "+serverTime



        map_troops_home_dropbox=new Map([...map_troops_home_dropbox, ...map_troops_home])
        // console.log("map_troops_home_dropbox merge")
        // console.log(map_troops_home_dropbox)
        //delete from map troops home if it's older than a week
        Array.from(map_troops_home_dropbox.keys()).forEach(key=>{
            if(date_current>map_troops_home_dropbox.get(key).uploadTime){
                map_troops_home_dropbox.delete(key)
            }
        })


        // update map from dropbox with the new data
        Array.from(map_coming.keys()).forEach(key=>{
            let list_coming=map_coming.get(key)
            if(map_support_dropbox.has(key)){
                let list_dropbox=map_support_dropbox.get(key)
                list_dropbox=list_dropbox.concat(list_coming)
                console.log(list_dropbox)
                var list_concat =[...new Map(list_dropbox.map(item => [item["commandId"], item])).values()]
                // console.log("list concat")
                list_concat.sort((o1,o2)=>{
                    return (new Date(o1.landing_time).getTime()>new Date(o2.landing_time).getTime())?1:
                    (new Date(o1.landing_time).getTime()<new Date(o2.landing_time).getTime())?-1:0
                })
                // console.log(list_concat)
                if(list_concat.length==0){
                    map_support_dropbox.delete(key)
                    console.log("list is empty, removed")
                }  
                else
                    map_support_dropbox.set(key,list_concat)
            }
            else{
                console.log("list coming")
                list_coming.sort((o1,o2)=>{
                    return (new Date(o1.landing_time).getTime()>new Date(o2.landing_time).getTime())?1:
                    (new Date(o1.landing_time).getTime()<new Date(o2.landing_time).getTime())?-1:0
                })
                // console.log(list_coming)
                map_support_dropbox.set(key,list_coming)
            }
        })
        // console.log("map_support_dropbox", map_support_dropbox)

        //if a command arrived  delete from map
        Array.from(map_support_dropbox.keys()).forEach(key=>{
            let list_support=map_support_dropbox.get(key)
            // console.log(list_support)
            if(list_support.length==0){
                console.log(map_support_dropbox.has(key))
                map_support_dropbox.delete(key)
                // console.log(map_support_dropbox.has(key))

                console.log(key)
                console.log("delete coord from map support dropbox")
            }
            else{
                for(let i=0;i<list_support.length;i++){
                    let date_land=new Date(list_support[i].landing_time).getTime()
                    if(date_current>date_land || list_support[i].landing_time == ""){
                        list_support.splice(i,1)
                        i--;
                    }
                 
                }
                map_support_dropbox.set(key,list_support)
            }

        })
        // console.log(map_support_dropbox)
        //delete  map commands attacks if it's older than 1 week
        Array.from(map_attack_dropbox.keys()).forEach(key=>{
            let obj=map_attack_dropbox.get(key)
            let date_upload=new Date(obj.uploadTime).getTime()

            if(date_current > date_upload)
                map_attack_dropbox.delete(key)
        })

        //update status map
        let obj_status={
            name:game_data.player.name,
            command_date:date_current_commands,
        }
        

        if(mapStatus.has(game_data.player.id.toString())){
            let obj_update=mapStatus.get(game_data.player.id.toString())
            mapStatus.set(game_data.player.id.toString(), {...obj_update, ...obj_status} )
        }
        else{
            mapStatus.set(game_data.player.id.toString(),obj_status)
        }


        UI.SuccessMessage("compressing database, wait few seconds",2000)
        
        let timeStartUpload = new Date().getTime()
        let data_status=JSON.stringify(Array.from(mapStatus.entries()))

        let commandsAttacks = Array.from(map_attack_dropbox.entries())
        let commandsSupport = Array.from(map_support_dropbox.entries())
        let troopsHome = Array.from(map_troops_home_dropbox.entries())

        let sizeCommandsAttacksDB = formatBytes(new TextEncoder().encode(JSON.stringify(commandsAttacks)).length)
        let sizeCommandsSupportDB = formatBytes(new TextEncoder().encode(JSON.stringify(commandsSupport)).length)
        let sizeTroopsHomeDB = formatBytes(new TextEncoder().encode(JSON.stringify(troopsHome)).length)


        console.log("----------------------------------------------------")
        // console.log(commandsSupport)
        let splitByAttacks = Math.ceil(commandsAttacks.length /nrFiles)
        let splitBySupport = Math.ceil(commandsSupport.length /nrFiles)
        let splitByTroopsHome = Math.ceil(troopsHome.length /nrFiles)


       const run = async () => {
    console.log("Starting...");
    for (let i = 0; i < nrFiles; i++) {

        // =============================
        // SAVE COMMAND ATTACKS
        // =============================
        let subList = commandsAttacks.slice(
            i * splitByAttacks,
            (i + 1) * splitByAttacks
        );

        for (const [commandId, command] of subList) {
            await sb.from("commands_attack").upsert({
                command_id: commandId,
                data: command,
                world: game_data.world,
                tribe: game_data.player.ally,
                updated_at: new Date().toISOString()
            });
        }

        // =============================
        // SAVE SUPPORT + TROOPS HOME
        // =============================
        let subListSupport = commandsSupport.slice(
            i * splitBySupport,
            (i + 1) * splitBySupport
        );

        let subListTroopsHome = troopsHome.slice(
            i * splitByTroopsHome,
            (i + 1) * splitByTroopsHome
        );

        for (const [coord, support] of subListSupport) {
            await sb.from("support").upsert({
                coord,
                data: support,
                world: game_data.world,
                tribe: game_data.player.ally,
                updated_at: new Date().toISOString()
            });
        }

        for (const [coord, troops] of subListTroopsHome) {
            await sb.from("troops_home").upsert({
                coord,
                data: troops,
                world: game_data.world,
                tribe: game_data.player.ally,
                updated_at: new Date().toISOString()
            });
        }
    }
};

        await run();



       for (const [playerId, status] of mapStatus.entries()) {
    await sb.from("status").upsert({
        player_id: playerId,
        data: status,
        world: game_data.world,
        tribe: game_data.player.ally,
        updated_at: new Date().toISOString()
    });
}

let result_Status = "succes";
const { error } = await sb.from("support").upsert(payload);
if (error) {
    console.error("Supabase upsert failed:", error);
}


        if(result_Status=="succes"){
            console.log("here save status")
            document.getElementById("progress_support").innerText=map_coming.size+" coords"
            document.getElementById("progress_all").innerText="done";
            var data=JSON.stringify(Array.from(resultSupport.map_exist_support.entries()))
            localStorage.setItem(game_data.world+"map_exist_support",data)

            let timeStopUpload = new Date().getTime();
            let totalTimeUpload =  Math.round(((timeStopUpload - timeStartUpload) / 1000) * 100) / 100
            UI.SuccessMessage(`<b>Upload commands done </b> <br> <br> 
                                Upload time: ${totalTimeUpload} sec <br>

                                <center>
                                    <table style ="border: 1px solid black;border-collapse: collapse">
                                        <tr>
                                            <td colspan="3" style = "text-align: center;border: 1px solid black;border-collapse: collaps;font-weight: bold;padding:10px">
                                                Database details
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">Type</td>
                                            <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">Total Number</td>
                                            <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">Size DB</td>
                                        </tr>
                                        <tr>
                                            <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">Commands attack</td>
                                            <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">${commandsAttacks.length}</td>
                                            <td style = "text-align: center;border: 1px solid black;border-collapse: collaps;padding:5px">${sizeCommandsAttacksDB}</td>
                                        </tr>
                                        <tr>
                                            <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">Commands support</td>
                                            <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">${commandsSupport.length}</td>
                                            <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">${sizeCommandsSupportDB}</td>
                                        </tr>
                                        <tr>
                                            <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">Troops Home</td>
                                            <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">${troopsHome.length}</td>
                                            <td style = "text-align: center;border: 1px solid black;border-collapse: collapse;padding:5px">${sizeTroopsHomeDB}</td>
                                        </tr>
                                </table>
                              </center>

                                `,10000)

            resolve({
                totalTimeUpload:totalTimeUpload,
                status: "success"
            })
        }
        else{
            reject("error upload commands")
        }
    })

}


/////////////////////////////////////////////get troops coming from each village on incomings page//////////////////////////////////////////

function ajaxTroopsComing(commandId){
    return new Promise((resolve,reject)=>{
        let units=game_data.units.slice()
        if(units.includes("militia")){
            units.pop()
        }

        let startAjax=new Date().getTime()
        $.ajax({
            url: game_data.link_base_pure+`info_command&ajax=details&id=${commandId}`,
            method: 'get',
            success: (data) => {
                let troops={}
                if(data.units!=undefined){
                    troops=data.units
                    Object.keys(troops).forEach(key=>{
                        troops[key]=parseInt(troops[key].count)
                    })
                }
                else{
                    Object.keys(units).forEach(key=>{
                        troops[units[key]]=0
                    })
                }
                let stopAjax=new Date().getTime()
                let difAjax=stopAjax-startAjax
                console.log("wait ",difAjax)
                window.setTimeout(()=>{
                    resolve(troops)
                },200-difAjax)

            },error:(data)=>{
                reject(data)
            }

        })
    })
}


/////////////////////////////////////////////get troops at home from each village on incomings page//////////////////////////////////////////

function ajaxTroopsStationed(villageId){
    return new Promise((resolve,reject)=>{

        let startAjax=new Date().getTime()
        $.ajax({
            url:game_data.link_base_pure + `map&ajax=map_info&source=${villageId}&target=${villageId}&`,
            method: 'get',
            success: (response) => {
                // console.log(response)
                let units=game_data.units
                let obj_troops={}
                let obj_result={}
                for(let i=0;i<units.length-1;i++){
                    obj_troops[units[i]]=parseInt(response.units[units[i]].count.home)+parseInt(response.units[units[i]].count.foreign)
                }
                let wallLevel,farmLevel,flagName,LoyaltyLevel
                wallLevel=response.buildings.wall
                farmLevel=response.buildings.farm
                LoyaltyLevel=response.mood
                // console.log(response.flag)
                if(response.flag!=undefined)
                    flagName =response.flag.short_desc
                else
                    flagName="none"
                // console.log(obj_troops)
                // console.log("wallLevel: "+wallLevel)
                // console.log("farmLevel: "+farmLevel)
                // console.log("flagName: "+flagName)
                // console.log("LoyaltyLevel: "+LoyaltyLevel)

                obj_result.obj_troops=obj_troops
                obj_result.wallLevel=wallLevel
                obj_result.farmLevel=farmLevel
                obj_result.flagName=flagName
                obj_result.LoyaltyLevel=LoyaltyLevel

    
                let stopAjax=new Date().getTime()
                let difAjax=stopAjax-startAjax
                console.log("wait ",difAjax)
                window.setTimeout(()=>{
                    resolve(obj_result)
                },200-difAjax)

            },error:(data)=>{
                reject(data)
            }

        })

    })
}




//////////////////////////////////////////////main table + all the logic for creating main table///////////////////////////////////////////////
var mapAttacksVillageId=new Map()

async function viewSupport(){
    if(document.getElementById("div_container")!=null)
        document.getElementById("div_container").remove();
    ///////////////////////////////////////////////////////////////////main table//////////////////////////////////////////////////////////
    let html_info=`
        <div id="div_container_view" class="ui-widget-content div_remove" style="height:auto;background-color:${backgroundColor};cursor:move;z-index:50;width:${widthInterfaceOverview}px">
        <div class="scriptHeader">
            <div style=" margin-top:10px;text-decoration: underline;text-decoration-color: ${titleColor}"><h2 >Overview Data</h2></div>
            <div style="position:absolute;top:10px;right: 10px;"><a href="#" ><img src="https://img.icons8.com/emoji/24/000000/cross-mark-button-emoji.png"/></a></div>
            <div style="position:absolute;top:8px;right: 35px;" id="div_minimize"><a href="#"><img src="https://img.icons8.com/plasticine/28/000000/minimize-window.png"/></a></div>
            <div style="position:absolute;top:10px;right: 92%;" id="page_upload" ><a href="#" onclick="$('#div_container_view').remove();getInterface()"><img src="https://img.icons8.com/officel/30/000000/long-arrow-left.png"/></a></div>
        </div>

        <div id="div_body">
            <input class="btn evt-confirm-btn btn-confirm-yes" type="button" onclick="createTableSettings()" style="margin:10px" value="Settings">
            <input class="btn evt-confirm-btn btn-confirm-yes" type="button" id="btn_rank_attacker" style="margin:10px" value="Rank Attackers">
            <input class="btn evt-confirm-btn btn-confirm-yes" type="button" id="btn_rank_defender" style="margin:10px" value="Rank Defenders">
            <input class="btn evt-confirm-btn btn-confirm-yes" type="button" id="btn_upload_time" style="margin:10px" value="Upload Time">
            <input class="btn evt-confirm-btn btn-confirm-yes" type="button" id="btn_get_coords" style="margin:10px" value="Get Coords">
            <input class="btn evt-confirm-btn btn-confirm-yes" type="button" id="btn_op_spotter" style="margin:10px" value="Tribe OP Spotter">
            <div id="div_settings" style="margin:10px" hidden> </div>
            <div id="div_rank" style="margin:10px" hidden> </div>
            <div id="div_rank_attacker" style="margin:10px" hidden> </div>
            <div id="div_rank_defender" style="margin:10px" hidden> </div>
            <div id="div_upload_time" style="margin:10px" hidden> </div>
            <div id="div_get_coords" style="margin:10px" hidden> </div>
    
            <div style="display:flex;justify-content: center;width:100%">
                <div style="width: 45%;margin:15px">
                    <table id="table_search"  border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor};">
                        <tr>
                            <td style="text-align:center; width:auto; background-color:${headerColor}">
                                <center style="margin:5px"><font color="${titleColor}"><p>search by coord</p></font></center>
                            </td>
                            <td style="text-align:center; width:auto; background-color:${headerColor}">
                                <center style="margin:5px"> <input id="input_search" type="text"  style="margin:10px" placeholder="coord"></center>
                            </td>
                        </tr>
                    </table>
                </div>
                <div style="width: 45%;margin:15px" >
                    <table id="table_select_info"  border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor};" hidden>
                        <tr>
                            <td style="text-align:center; width:auto; background-color:${headerColor};text-align:center">
                                <input type="checkbox"   id="checkbox_my_info">
                            </td>
                            <td style="text-align:center; width:auto; background-color:${headerColor}">
                                <div style="display:flex; flex-direction: row; justify-content: center; align-items: center">
                                    <font color="${titleColor}" style="margin-top:8px;margin-right:5px"><p>My Info</p></font>
                                    <a href="#" onclick="UI.InfoMessage('Show information on the map for only your own villages',5000)"><img src="https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png" style="width: 13px; height: 13px"/></a>
                                </div>
                            </td>
                            <td rowspan="4" style="text-align:center; width:auto; background-color:${headerColor}">
                                <center><input class="btn evt-confirm-btn btn-confirm-yes" type="button" id="btn_show_info" style="margin:10px" value="Show Map"></center>
                            </td>                        
                        </tr>
                        <tr>
                            <td style="text-align:center; width:auto; background-color:${headerColor};text-align:center">
                                <input type="checkbox"   id="checkbox_tribe_info">
                            </td>
                            <td style="text-align:center; width:auto; background-color:${headerColor}">
                                <div style="display:flex; flex-direction: row; justify-content: center; align-items: center">
                                    <font color="${titleColor}" style="margin-top:8px;margin-right:5px"><p>Tribe Info</p></font>
                                    <a href="#" onclick="UI.InfoMessage('Show information on the map for all tribe villages, except yours',5000)"><img src="https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png" style="width: 13px; height: 13px"/></a>
                                </div>
                            </td>                    
                        </tr>
                        <tr>
                            <td style="text-align:center; width:auto; background-color:${headerColor};text-align:center">
                                <input type="checkbox"   id="checkbox_enemy_info">
                            </td>
                            <td style="text-align:center; width:auto; background-color:${headerColor}">
                                <div style="display:flex; flex-direction: row; justify-content: center; align-items: center">
                                    <font color="${titleColor}" style="margin-top:8px;margin-right:5px"><p>Enemy Info</p></font>
                                    <a href="#" onclick="UI.InfoMessage('Show information on the map for all enemy villages',5000)"><img src="https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png" style="width: 13px; height: 13px"/></a>
                                </div>
                            </td>                    
                        </tr>
                        <tr>
                            <td style="text-align:center; width:auto; background-color:${headerColor};text-align:center">
                                <input type="checkbox"   id="checkbox_all_info">
                            </td>
                            <td style="text-align:center; width:auto; background-color:${headerColor}">
                                <div style="display:flex; flex-direction: row; justify-content: center; align-items: center">
                                    <font color="${titleColor}" style="margin-top:8px;margin-right:5px"><p>All Info</p></font>
                                    <a href="#" onclick="UI.InfoMessage('Show information on the map for all villages (allies + enemies)',5000)"><img src="https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png" style="width: 13px; height: 13px"/></a>
                                </div>
                            </td>                    
                        </tr>
                    </table>
                </div>
            </div>

            <br>

            <table id="table_view" class="" border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor};border-spacing:2px;border-collapse:separate;">
            <thead>
            <tr>
                <td style="text-align:center; width:auto; background-color:${headerColor}" colspan="2">
                <center style="margin:1px"><font color="${titleColor}">total</font></center>
                </td>
                <td style="text-align:center; width:auto; background-color:${headerColor}">
                    <center style="margin:1px;font-size:16px"><font color="${titleColor}"><a href="#"><img src="https://dsen.innogamescdn.com/asset/4ba99e83/graphic/unit/att.png" id="sort_by_attacks"></a><p id="header_attacks">(0)</p></font></center>
                </td>
                <td style="text-align:center; width:auto; background-color:${headerColor}">
                        <center style="margin:1px;font-size:16px"><font color="${titleColor}"><a href="#"><img src="https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/support.png" id="sort_by_supports"></a><p id="header_supports">(0)</p></font></center>
                </td>
                <td style="text-align:center; width:auto; background-color:${headerColor}">
                    <center style="margin:1px;font-size:16px"><font color="${titleColor}"><a href="#"><img src="https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/snob.png" id="sort_by_nobles"></a><p id="header_nobles">(0)</p></font></center>
                </td>
                <td style="text-align:center; width:auto; background-color:${headerColor}">
                    <center style="margin:1px;font-size:16px">
                        <font color="${titleColor}">
                            <div style="display:flex; flex-direction: row; justify-content: center; align-items: center">
                                <a href="#" style="margin-right:10px"><img src="https://img.icons8.com/office/20/000000/sniper-rifle.png" id="sort_by_snipes"></a>
                                <a href="#" onclick="UI.InfoMessage('List of snipes <br> <b>red</b> -> snipe is needed <br> <b>green</b> -> village is already sniped',8000)"><img src="https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png" style="width: 13px; height: 13px"/></a>
                            </div>
                            <p id="header_snipes">(0/0)</p>
                            </font>
                        </center>
                    
                </td>
                <td style="text-align:center; width:auto; background-color:${headerColor}">
                    <center style="margin:1px;font-size:16px">
                        <font color="${titleColor}">
                            <div style="display:flex; flex-direction: row; justify-content: center; align-items: center">
                                <a href="#" style="margin-right:10px"><img src="https://img.icons8.com/ultraviolet/20/000000/horror.png" id="sort_by_recaps"></a>
                                <a href="#" onclick="UI.InfoMessage('List of recaps <br> <b>red</b> -> recap is needed  <br> <b>green</b> -> village is already recapped <br><br> recap is needed if nr nobles >=4 and it is not a train',8000)"><img src="https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png" style="width: 13px; height: 13px"/></a>
                            </div>
                            <p id="header_recaps">(0/0)</p>
                        </font>
                    </center>
                </td>
            </tr>
            </thead>
            </table>
        </div>
        </div>
        
        `;
    


   ////////////////////////////////////// //delete/////////////////////////////////////////////////////////////////////
    // $("#table_search").hide()
    // $("#table_view").hide()

    // $(".btn-confirm-yes").eq(0).hide()
    // $(".btn-confirm-yes").eq(1).hide()
    // $(".btn-confirm-yes").eq(2).hide()




    ////////////////////////////////////////add and remove window from page///////////////////////////////////////////
    $("#div_container_view").remove()
    $("#contentContainer").eq(0).prepend(html_info);
    $("#mobileContent").eq(0).prepend(html_info);

    
    $("#div_minimize").on("click",()=>{
        if($('#div_container_view').width() == widthInterfaceOverview){
            $('#div_container_view').css({'width' : '120px'});
            $('#div_body').hide();
            $("#page_upload").hide()
        }
        else{
            $('#div_container_view').css({'width' : `${widthInterfaceOverview}px`});
            $('#div_body').show();
            $("#page_upload").show()

        }
    })

    if(game_data.device == "desktop"){
        $("#div_container_view").draggable();
        $("#div_container_view").css("position","fixed");
    }




    if(typeof(TWMap)!="undefined"){
        $("#table_select_info").show()
    }

    UI.SuccessMessage("Loading data..", 5000)


    let timeDownloadStart = new Date().getTime()
    var [mapVillages, map_reports, map_incomings,data_support, map_attacks,map_status, map_history_upload, map_troops_home ,status_chart]=await Promise.all([
            getInfoVillages(), 
            readFileDropbox(filename_reports),
            readFileDropbox(filename_incomings),
            readFileDropbox(filename_support),
            readFileDropbox(filename_commands_attack),
            readFileDropbox(filename_status_upload),
            readFileDropbox(filename_history_upload),
            readFileDropbox(filename_troops_home),
            insertChartLibrary()])
        .catch(err=>{alert(err)})

        
        var [map_reports, map_incomings, map_attacks, map_status, map_history_upload, data_support, map_troops_home] = await Promise.all([
            decompress(await map_reports.arrayBuffer(), 'gzip'),
            decompress(await map_incomings.arrayBuffer(), 'gzip'),
            decompress(await map_attacks.arrayBuffer(), 'gzip'),
            decompress(await map_status.arrayBuffer(), 'gzip'),
            decompress(await map_history_upload.arrayBuffer(), 'gzip'),
            decompress(await data_support.arrayBuffer(), 'gzip'),
            decompress(await map_troops_home.arrayBuffer(), 'gzip'),
        ]).catch(err=>{alert(err)})    


        map_reports=new Map(JSON.parse(map_reports))
        map_incomings=new Map(JSON.parse(map_incomings))
        map_attacks=new Map(JSON.parse(map_attacks))
        map_status=new Map(JSON.parse(map_status))
        map_history_upload=new Map(JSON.parse(map_history_upload))

        map_troops_home=new Map(JSON.parse(map_troops_home))

        let map_coming=new Map(JSON.parse(data_support)[0])
        let map_home=new Map(JSON.parse(data_support)[1])

        console.log(mapVillages)
        console.log(map_troops_home)

    let map_playerId=new Map()
    // console.log("first",map_home);
    let commandAttacksBatch = await Promise.all(commandsAttacksPromises).catch(err=>{alert(err)})
    let supportBatch = await Promise.all(supportPromises).catch(err=>{alert(err)})

    const run = async () => {
        console.log("Starting...");
        for (let i = 0; i < commandAttacksBatch.length; i++) {
            let [decompressedAttackBatch, decompressedSupportBatch]=await Promise.all([
                    decompress(await commandAttacksBatch[i].arrayBuffer(), 'gzip'),
                    decompress(await supportBatch[i].arrayBuffer(), 'gzip'),
                ]).catch(err=>{alert(err)})

            let map_attacks_batch = new Map(JSON.parse(decompressedAttackBatch))
            map_attacks = new Map([...map_attacks, ...map_attacks_batch])

            let map_support_batch = new Map(JSON.parse(decompressedSupportBatch)[0])
            let map_troops_home_batch = new Map(JSON.parse(decompressedSupportBatch)[1])
    

            map_coming = new Map([...map_coming, ...map_support_batch])
            map_home = new Map([...map_home, ...map_troops_home_batch])


        }  
    }
    await run();



    let timeDownloadStop = new Date().getTime()
    console.log("time download DB: " + (timeDownloadStop - timeDownloadStart))


    let timeProcessingStart = new Date().getTime()



    map_incomings = removeLandedIncomings(map_incomings)

    // console.log("mapVillages",mapVillages)
    // console.log("map_coming",map_coming)
    // console.log("map_home",map_home)
    // console.log("map_reports",map_reports)
    // console.log("map_incomings",map_incomings)
    // console.log("map_attacks",map_attacks)



    let serverTime=document.getElementById("serverTime").innerText
    let serverDate=document.getElementById("serverDate").innerText.split("/")
    serverDate=serverDate[1]+"/"+serverDate[0]+"/"+serverDate[2]
    let date_current=new Date(serverDate+" "+serverTime).getTime()
    createTableSettings()
    $("#div_settings").hide()

    let pop_snipe=parseInt(document.getElementById("settings_pop").value)
    if(Number.isNaN(pop_snipe))
        pop_snipe=1000


    //filters
    let list_filters=[]
    $('#div_settings input[type=checkbox]:checked').each(function (index,elem) {
        
        list_filters.push(elem.value)
        // console.log(elem.value)
        
    });
    // console.log("list_filters",list_filters)

    Array.from(map_coming.keys()).forEach(key=>{
        try {
            let obj_output={}
            let playerId=mapVillages.get(key).playerId
            // console.log(playerId)
            let villageId=mapVillages.get(key).villageId
            let playerName=mapVillages.get(key).playerName
            
            let list_coming=map_coming.get(key)
            let hasAttacks=false
            let nrAttacks=0,nr_supports=0,nrNobles=0;
            let snipe=false,sniped=false,recap=false,recaped=false;

            if(tribemates.includes(playerName.toLowerCase())){
                // console.log("list_coming",list_coming)
                //filter incomings 
                for(let i=0;i<list_coming.length;i++){
                    let landing_time=new Date(list_coming[i].landing_time).getTime()
                    let deleteIncoming=false
                    //remove if there is an ignored attack/support
                    if(list_filters.includes("hide_ignored") && list_coming[i].unignored==false){
                        deleteIncoming=true
                        console.log("delete ignored attack")
                    }
                    //remove if there is a support
                    if(list_filters.includes("hide_supports") && list_coming[i].type_attack.includes("support")){

                        let landing_time_current=new Date(list_coming[i].landing_time).getTime()
                        for(let j=i+1;j<list_coming.length-1;j++){
                            let landing_time_next=new Date(list_coming[j].landing_time).getTime()//that means there a support which lands with no more than 600 ms before an attack
                            if(landing_time_next-landing_time_current>600){
                                deleteIncoming=true
                                console.log("delete support")
                                break
                            }
                            else
                                break;
                        }

                        if(i==list_coming.length-1){//if last incoming is a support then delete
                            deleteIncoming=true
                            console.log("delete support")
                        }
                        


                    }   
                    // remove if there is an attack/support further than x hours away
                    if(list_filters.includes("hide_further_attacks")){
                        let hours=parseInt(document.getElementById("settings_further").value)*3600*1000
                        if(Number.isNaN(hours))
                            hours=100*3600*1000
                        if((landing_time-date_current)>hours){
                            deleteIncoming=true
                            console.log("delete further attacks")
                        }
                    }   
                    // remove if there is an attack/support closer than x hours away
                    if(list_filters.includes("hide_closer_attacks")){
                        let hours=parseInt(document.getElementById("settings_closer").value)*3600*1000
                        if(Number.isNaN(hours))
                            hours=10*3600*1000
                        if((landing_time-date_current)<hours){
                            deleteIncoming=true
                            console.log("delete closer attacks")
                        }
                    }  
                    
                    //remove if an attack/def was sent and uploaded to dropbox but then the attacker withdrawn his command
                    if(playerId==game_data.player.id.toString()){
                        let map_exist_command=new Map(JSON.parse(localStorage.getItem(game_data.world+"map_exist_support")))
                        let keys_commandId=Array.from(map_exist_command.keys())
                        if(!keys_commandId.includes(list_coming[i].commandId)){// it means there is a command and in localstorage it is not
                            deleteIncoming=true
                            console.log("delete withdrawn command")

                        }
                    }

                        
                        //check if is a small/medium/big attack or a support
                        let coord_origin=list_coming[i].coord_origin
                        let playerId_origin=list_coming[i].player_origin_id
                        if(map_reports.has(coord_origin) && list_coming[i].type_attack.includes("attack") )
                        {
                            let idPlayer_dropbox
                            let type_dropbox
                            let nr_troupes_dropbox
            
                            let obj_report=map_reports.get(coord_origin);
                            var traveling=false
                            if(coord_origin == obj_report.coordAttacker){
                                idPlayer_dropbox=obj_report.attackingPlayerId;
                                type_dropbox=obj_report.typeAttacker;
                                nr_troupes_dropbox=obj_report.nrTroupesAttacker
                                traveling=true;
                            }
                            else if(coord_origin == obj_report.coordDefender){
                                idPlayer_dropbox=obj_report.defendingPlayerId;
                                type_dropbox=obj_report.typeDefender;
                                nr_troupes_dropbox=obj_report.nrTroupesDefender
                                traveling=false;
                            }
                            else{
                                idPlayer_dropbox=obj_report.supporterPlayerId
                                type_dropbox=obj_report.typeSupporter;
                                nr_troupes_dropbox=obj_report.nrTroupesSupporter
                            }
            
                            if(idPlayer_dropbox == playerId_origin)
                            {
                    
                                //calculate population
                                let date_landing_report=new Date(obj_report.time_report)
                                let distance=calcDistance(coord_origin,list_coming[i].coord_destination)
                                let time_attack=0;

                                let date_land=new Date(landing_time)
                                // console.log(date_land)
                                let labelName=list_coming[i].labelName


                                if(labelName.includes("snob.png")){
                                    time_attack=nobleSpeed*distance
                                }else if(labelName.includes("ram.png") || labelName.includes("catapult.png")){
                                    time_attack=ramSpeed*distance
                                }else if(labelName.includes("sword.png")){
                                    time_attack=swordSpeed*distance
                                }else if(labelName.includes("axe.png")){
                                    time_attack=axeSpeed *distance
                                }
                                if(traveling==false)
                                    time_attack=0;

                                let newTypeAttack=list_coming[i].type_attack
                                if(type_dropbox=="off"){
                                    let timeForRecruiting = (date_land.getTime()-time_attack)-date_landing_report.getTime()
                                    let pop_small_attack=(parseInt(document.getElementById("settings_small_attack").value)/20000)*100
                                    let pop_medium_attack=(parseInt(document.getElementById("settings_medium_attack").value)/20000)*100
                                    
                                    if(pop_medium_attack<pop_small_attack)
                                        alert("pop for medium attacks must be higher than pop for small attacks")
                                    if(Number.isNaN(pop_small_attack))
                                        pop_small_attack=(5000/20000)*100
                                    if(Number.isNaN(pop_medium_attack))
                                        pop_small_attack=(10000/20000)*100

                                    // console.log("time for recruiting",timeForRecruiting)
                                    // console.log("nr_troupes_dropbox",nr_troupes_dropbox)
                                    nr_troupes_dropbox=calcProductionTroupes(timeForRecruiting,nr_troupes_dropbox)     
                                    // console.log("nr_troupes_dropbox",nr_troupes_dropbox)
                                    // console.log(list_coming[i])
                                    if(nr_troupes_dropbox <= pop_small_attack)               
                                        newTypeAttack="attack_small.png"
                                    else if(nr_troupes_dropbox >pop_small_attack && nr_troupes_dropbox <= pop_medium_attack )
                                        newTypeAttack="attack_medium.png"
                                    else
                                        newTypeAttack="attack_large.png"

                                }
                                else if(type_dropbox.includes("def")){
                                    newTypeAttack="def"
                                }
                                list_coming[i].type_attack=newTypeAttack
                            }
                        }



                    //delete if filters is on
                    if(deleteIncoming==true){
                        list_coming.splice(i,1);
                        i--;
                    }

                }


                //counting attacks,supports, nobles, snipes, recaps
    
                for(let i=0;i<list_coming.length;i++){
              

                    let landing_time=new Date(list_coming[i].landing_time).getTime()
                    if(landing_time>date_current){
                        if(list_coming[i].type_attack.includes("attack") || list_coming[i].type_attack.includes("def")){
                            nrAttacks++
                            hasAttacks=true
                        }
                        else{
                            nr_supports++   
                        }
                        if(list_coming[i].labelName.includes("snob")){
                            nrNobles++

                            //check for train and if exist check for snipe
                            for(let j=i+1;j<list_coming.length;j++){
                                let landing_time_next=new Date(list_coming[j].landing_time).getTime()
                                if(landing_time_next-landing_time==50 ||landing_time_next-landing_time==100 || landing_time_next-landing_time==150)
                                {
                                    if(list_coming[i].coord_origin==list_coming[j].coord_origin )//there is a train
                                    {
                                        // if(list_coming[j].coord_destination == "391|447"){
                                        //     console.log(`train i: ${i}, j: ${j}`)
                                        //     console.log(list_coming[i])
                                        //     console.log(list_coming[j])
                                        // }
                                        let pop=0;
                                        let list_snipe_support=[]
                                        for(let k=j-1;k>=0;k--){
                                            // if(list_coming[j].coord_destination == "391|447"){
                                            //     console.log("search snipe")
                                            //     console.log(list_coming[k])
                                            // }
                                            if(list_coming[k].type_attack.includes("support")){//there is a snipe(support before second noble),check every support from left
                                                let troops=list_coming[k].troops
                                                Object.keys(troops).forEach(key=>{
                                                    pop+=troops[key]*troopsPop[key]
                                                })
                                                list_snipe_support.push(k)
                                            }
                                            else{
                                                break
                                            }
                                        }
                                        // if(list_coming[k].coord_destination == "391|447"){
                                        //     console.log(list_snipe_support)
                                        // }
                                        if(pop>pop_snipe){
                                            sniped=true
                                            //this support is used for sniping and will be colored later
                                            for(let k=0;k<list_snipe_support.length;k++){
                                                list_coming[list_snipe_support[k]].hasSupportSnipe=true
                                            }
                                        }
                                        snipe=true
                                    }
                                }
                            }
                            //check if needs to be recaped
                            if(snipe==false && nrNobles>=4){
                                recap=true
                            }
                            //check if it recaped buy someone from your tribe
                            if(snipe==false && nrNobles>=4 && tribemates.includes(list_coming[i].player_origin_name)){
                                recaped=true
                            }
                        }
                    }
  

                }

                if(hasAttacks==true){
                    obj_output.homeInfo=map_home.get(key)
                    // nrAttacks++
                }
                let nrSnipes=(snipe==true)?1:0
                let nrSniped=(sniped==true)?1:0
                let nrRecaps=(recap==true)?1:0
                let nrRecaped=(recaped==true)?1:0

                obj_output.coord_destination_id=villageId
                obj_output.list_coming=list_coming

                obj_output.nrAttacks=nrAttacks

                obj_output.nr_supports=nr_supports
                obj_output.nrNobles=nrNobles
                
                obj_output.nrSnipes=nrSnipes
                obj_output.nrSniped=nrSniped
                obj_output.nrRecaps=nrRecaps
                obj_output.nrRecaped=nrRecaped
                // console.log("for real: "+nrAttacks)
                // console.log("hope so: "+obj_output.nrAttacks)
                // console.log(obj_output)
                // console.log("status snipe/recap")
                // console.log(key)
                // console.log(nrSnipes,nrSniped,nrRecaps,nrRecaped)

                if(!map_playerId.has(playerId) && (nrAttacks>0 || nr_supports>0)){
                    map_playerId.set(playerId,{
                        nr_attacks_total:nrAttacks,
                        nr_supports_total:nr_supports,
                        nr_nobles_total:nrNobles,
                        list_coords:[obj_output],
                        player_destination_name:playerName,
                        player_destination_id:playerId,
                        nr_snipe_total:nrSnipes,
                        nr_sniped_total:nrSniped,
                        nr_recap_total:nrRecaps,
                        nr_recaped_total:nrRecaped
                    })
                }
                else{
                    let obj_update=map_playerId.get(playerId)
                    let list=obj_update.list_coords
                    list.push(obj_output)
                    
                    obj_update.list_coords=list
                    obj_update.nr_attacks_total+=nrAttacks
                    obj_update.nr_supports_total+=nr_supports
                    obj_update.nr_nobles_total+=nrNobles
                    obj_update.nr_snipe_total+=nrSnipes,
                    obj_update.nr_sniped_total+=nrSniped,
                    obj_update.nr_recap_total+=nrRecaps,
                    obj_update.nr_recaped_total+=nrRecaped

                    map_playerId.set(playerId,obj_update)

                }
        
            }
        } catch (error) {
            console.log(error)
        }

            
        
    })
    // console.log(map_playerId)
    



    //sort table players by attacks
    map_playerId= new Map([...map_playerId.entries()].sort((o1,o2) =>{
        return (o1[1].nr_attacks_total>o2[1].nr_attacks_total)?-1:(o1[1].nr_attacks_total<o2[1].nr_attacks_total)?1:0;
    }))
    //sort tables for each coord by attacks
    Array.from(map_playerId.keys()).forEach(key=>{
        let obj=map_playerId.get(key)
        obj.list_coords.sort((o1,o2)=>{
            return (o1.nrAttacks>o2.nrAttacks)?-1:(o1.nrAttacks<o2.nrAttacks)?1:0
        })
        map_playerId.set(key,obj)
    })



    Array.from(map_playerId.keys()).forEach(key=>{
        let playerId = game_data.player.id + ""
        if(key != playerId){
            map_playerId.delete(key)
        }
    })
    



    /////////////////////////////////////////////////////////////////////////////////players table//////////////////////////////////////////////////////////
    createTablePlayers(map_playerId,mapVillages)
    sortInfoIncomings(map_playerId,mapVillages)


    //add event for search input
    $("#input_search").on("input",(event)=>{
        let text_input=event.target
        if(text_input.value!=undefined){
            if(text_input.value.match(/\d+\|\d+/)!=null){
                let coord=text_input.value.match(/\d+\|\d+/)[0]
                text_input.value=coord
                // console.log(coord)
                let playerId=mapVillages.get(coord).playerId
                let villageId=mapVillages.get(coord).villageId

                if($(`.table_player img[coord-id=${villageId}]`).is(":visible")==false)
                    $(`#table_view img[player-id=${playerId}]`).click();

                if($(`.table_coord img[coord-id=${villageId}]`).is(":visible")==false)
                    $(`.table_player img[coord-id=${villageId}]`).click();


            }
        }
    })



    ///////////////////////////////////////////////////////////on map page///////////////////////////////////////////////////////////////////////////////////

    let fangs_cat=parseInt(document.getElementById("settings_fang_cat").value)
    let pop_small_attack=parseInt(document.getElementById("settings_small_attack").value)
    let pop_medium_attack=parseInt(document.getElementById("settings_medium_attack").value)
    pop_small_attack=(!Number.isNaN(pop_medium_attack))?pop_medium_attack:5000
    pop_medium_attack=(!Number.isNaN(pop_medium_attack))?pop_medium_attack:10000
    fangs_cat=(!Number.isNaN(fangs_cat))?fangs_cat:50

    //create a map with commands attacks, every coord has number of fangs,nukes,nobles
    //this part is for Enemy Info
    
    
    let mapVillageByIdFinal=new Map()
    let mapAttacksPlayersIdFinal=new Map()

    Array.from(map_reports.keys()).forEach(key=>{

        try {//if a village become a barb
            let obj_report=map_reports.get(key)
  
            let villageId=mapVillages.get(key).villageId
            let player_destination_name=mapVillages.get(key).playerName
            let player_destination_id=mapVillages.get(key).playerId
            let time_report=obj_report.time_report

            //get troops at home
            let troopsAtHome=null,time_report_home=null
            if(obj_report["troopsAtHome_"+key]!=undefined){
                troopsAtHome=obj_report["troopsAtHome_"+key]
                time_report_home=obj_report["time_report_home_"+key]

            }
        
            
            //get troops away
            let troopsAway=[]
            let type_village=null
            if(key==obj_report.coordAttacker){
                for(let i=0;i<obj_report.attackingArmy.length;i++){
                    troopsAway.push({
                        type:obj_report.attackingArmy[i].type,
                        count:obj_report.attackingArmy[i].count - obj_report.attackingArmyLosses[i].count
                    })
                }  
                //type_village
                if(obj_report.typeAttacker.includes("off")){
                    type_village="light"
                }
                else if(obj_report.typeAttacker=="spy"){
                    type_village="spy"
                }
                else if(obj_report.typeAttacker.includes("def")){
                    type_village="sword"
                }

            }
            else if(key==obj_report.coordDefender){
                if(obj_report.travelingTroops != undefined){/////???????????????????//////
                    Object.keys(obj_report.travelingTroops).forEach(key=>{
                        troopsAway.push({
                            type:key,
                            count:obj_report.travelingTroops[key]
                        })
                    })

                }

                //type_village
                if(obj_report.typeDefender.includes("off")){
                    type_village="light"
                }
                else if(obj_report.typeDefender=="spy"){
                    type_village="spy"
                }
                else if(obj_report.typeDefender.includes("def")){
                    type_village="sword"
                }
            }
    

            mapVillageByIdFinal.set(villageId,{
                nr_fangs:0,
                nrNobles:0,
                nr_nukes:0,
                player_destination_id:player_destination_id,
                player_destination_name:player_destination_name,
                time_report:time_report,
                time_report_home:time_report_home,
                troopsAtHome:troopsAtHome,
                troopsAway:troopsAway,
                type_village:type_village,
                villageId:villageId,
            })

            mapAttacksPlayersIdFinal.set(player_destination_id,player_destination_name)
        } catch (error) {

            console.log(error)
        }
        

    })
    
    let map_ranking_attacker=new Map()
    let map_ranking_defender=new Map()
    // let mapAttacksVillageId=new Map()
    let mapAttacksPlayersId=new Map()
    Array.from(map_attacks.keys()).forEach(key=>{//go through each command attack
        let obj=map_attacks.get(key)
        let date_landing=new Date(obj.landing_time).getTime()
        let type_attack=obj.type_attack
        
        let coord=obj.coord_destination
        let villageId=obj.coord_destination_id

        let player_destination_id=obj.player_destination_id
        let player_destination_name=obj.player_destination_name

        let player_origin_name=obj.player_origin_name
        let player_origin_id=obj.player_origin_id

        let troops = obj.troops
        let fang=0,nuke=0,noble=0,fake=0

        
        let troopsAtHome=null,time_report_home=null
        let troopsAway=null, time_report=null
        let type_village=null
        if(map_reports.has(coord)){
            let obj_report=map_reports.get(coord)
            // console.log("obj_report",obj_report)


            //troops at home
            if(obj_report["troopsAtHome_"+coord]!=undefined){
                troopsAtHome=obj_report["troopsAtHome_"+coord]
                time_report_home=obj_report["time_report_home_"+coord]
            }

            
            //troops away
            time_report=obj_report.time_report
            if(coord==obj_report.coordAttacker){//get troops attack
                troopsAway=[]
                for(let i=0;i<obj_report.attackingArmy.length;i++){
                    troopsAway.push({
                        type:obj_report.attackingArmy[i].type,
                        count:obj_report.attackingArmy[i].count - obj_report.attackingArmyLosses[i].count
                    })
                }
                //type_village
                if(obj_report.typeAttacker.includes("off")){
                    type_village="light"
                }
                else if(obj_report.typeAttacker=="spy"){
                    type_village="spy"
                }
                else if(obj_report.typeAttacker.includes("def")){
                    type_village="sword"
                }
                
            }else if(coord==obj_report.coordDefender){//get troops away if it's defensive
                troopsAway=[]
                if(obj_report.travelingTroops != undefined){
                    Object.keys(obj_report.travelingTroops).forEach(key=>{
                        troopsAway.push({
                            type:key,
                            count:obj_report.travelingTroops[key]
                        })
                    })
                }
                //type_village
                if(obj_report.typeDefender.includes("off")){
                    type_village="light"
                }
                else if(obj_report.typeDefender=="spy"){
                    type_village="spy"
                }
                else if(obj_report.typeDefender.includes("def")){
                    type_village="sword"
                }

            }
           
        }

        // fangs_cat=30;
   
        if(troops.axe + troops.light*4 + troops.ram*5 + troops.catapult*8 > pop_medium_attack)     //check for nuke
            nuke=1
        else if(troops.axe + troops.light*4 < pop_small_attack && troops.catapult >= fangs_cat )        //check for fang
            fang=1

        
        //check for noble
        if(troops.snob>0)
            noble=1

        //check for fake
        let popFake=0
        Object.keys(troops).forEach(key=>{
            popFake+= troops[key] * troopsPop[key]
        })
        if(popFake<200)
            fake=1



        
        ////map for show info on the map
        if(!tribemates.includes(player_destination_name)){

            if(date_landing>date_current){
                if(mapAttacksVillageId.has(villageId)){
                    let obj_update=mapAttacksVillageId.get(villageId)
                    obj_update.nr_nukes+=nuke
                    obj_update.nrNobles+=noble
                    obj_update.nr_fangs+=fang
                    mapAttacksVillageId.set(villageId,obj_update)

                }
                else{
                    mapAttacksVillageId.set(villageId,{
                        villageId:villageId,
                        player_destination_name:player_destination_name,
                        player_destination_id:player_destination_id,
                        troopsAtHome:troopsAtHome,
                        time_report_home:time_report_home,
                        troopsAway:troopsAway,
                        time_report:time_report,
                        type_village:type_village,
                        nr_nukes:nuke,
                        nrNobles:noble,
                        nr_fangs:fang,
                    })
                }
                //map for selecting player
                if(type_attack.includes("attack"))
                    mapAttacksPlayersId.set(player_destination_id,player_destination_name)
            }

            
            //map for show ranking attackers with fangs/nukes/fakes
            player_origin_id = player_origin_id.toString()

            if(map_ranking_attacker.has(player_origin_id)){
                let obj_update=map_ranking_attacker.get(player_origin_id)
                obj_update.nr_nukes+=nuke
                obj_update.nrNobles+=noble
                obj_update.nr_fangs+=fang
                obj_update.nr_fakes+=fake
                map_ranking_attacker.set(player_origin_id,obj_update) 

         

            }
            else{
                map_ranking_attacker.set(player_origin_id,{
                    player_origin_name:player_origin_name,
                    nr_nukes:nuke,
                    nrNobles:noble,
                    nr_fangs:fang,
                    nr_fakes:fake 
                })
            }
            player_destination_id = player_destination_id.toString()
            //map for show ranking defenders with fangs/nukes/fakes
            if(map_ranking_defender.has(player_destination_id)){
                let obj_update=map_ranking_defender.get(player_destination_id)
                obj_update.nr_nukes+=nuke
                obj_update.nrNobles+=noble
                obj_update.nr_fangs+=fang
                obj_update.nr_fakes+=fake
                map_ranking_defender.set(player_destination_id,obj_update) 
            }
            else{
                map_ranking_defender.set(player_destination_id,{
                    player_origin_name:player_destination_name,
                    nr_nukes:nuke,
                    nrNobles:noble,
                    nr_fangs:fang,
                    nr_fakes:fake 
                })
            }



        }
        


    })




    // console.log("mapVillageByIdFinal",mapVillageByIdFinal)
    // console.log("mapAttacksVillageId",mapAttacksVillageId)

    mapAttacksVillageId= new Map([...mapVillageByIdFinal, ...mapAttacksVillageId])
    // console.log("mapAttacksVillageIdMerged",mapAttacksVillageId)

    mapAttacksPlayersId= new Map([...mapAttacksPlayersIdFinal, ...mapAttacksPlayersId])
    // console.log("mapAttacksPlayersIdMerged",mapAttacksPlayersId)




    // console.log("map_ranking_attacker",map_ranking_attacker)


    //this part is for Ally Info
    let mapVillageById=new Map()
    Array.from(map_playerId.keys()).forEach(key=>{
        let list_coords = map_playerId.get(key).list_coords

        for(let i=0;i<list_coords.length;i++){
            let list_coming=list_coords[i].list_coming
            let obj_result={}
            let pop=0
            let wallLevel = 20
            let LoyaltyLevel = 100
            let farmLevel = 30
            //calc pop for support coming
            for(let j=0;j<list_coming.length;j++){
                if(list_coming[j].type_attack.includes("support")){
                    if(list_coming[j].troops["spear"]!=undefined)
                        pop += list_coming[j].troops["spear"] * troopsPop["spear"]

                    if(list_coming[j].troops["sword"] != undefined)
                        pop += list_coming[j].troops["sword"] * troopsPop["sword"]

                    if(list_coming[j].troops["heavy"]!=undefined)
                        pop += list_coming[j].troops["heavy"] * troopsPop["heavy"]

                    if(game_data.units.includes("archer"))
                        if(list_coming[j].troops["heavy"] != undefined)
                            pop+=list_coming[j].troops["archer"] * troopsPop["archer"]
                }
                else if(list_coming[j].type_attack.includes("attack_small.png")){
                    // list_coords[i].nrAttacks = list_coords[i].nrAttacks-1 // eliminate fakes
                }
            }
            //calc pop for troops home

            if(list_coords[i].homeInfo != undefined){
                let troops_home = list_coords[i].homeInfo.obj_troops
                wallLevel = list_coords[i].homeInfo.wallLevel
                farmLevel = list_coords[i].homeInfo.farmLevel
                LoyaltyLevel = list_coords[i].homeInfo.LoyaltyLevel

                pop += troops_home["spear"]*troopsPop["spear"]
                pop += troops_home["sword"]*troopsPop["sword"]
                pop += troops_home["heavy"]*troopsPop["heavy"]
                if(game_data.units.includes("archer"))
                    pop += troops_home["archer"]*troopsPop["archer"]

            }
            pop = parseInt(pop/1000)

            obj_result.villageId = list_coords[i].coord_destination_id
            obj_result.playerId=key

            obj_result.nrAttacks = list_coords[i].nrAttacks
            obj_result.nrNobles = list_coords[i].nrNobles

            obj_result.nrSnipes = list_coords[i].nrSnipes
            obj_result.nrSniped = list_coords[i].nrSniped
            
            obj_result.nrRecaps = list_coords[i].nrRecaps
            obj_result.nrRecaped = list_coords[i].nrRecaped

            obj_result.pop = pop
            obj_result.wallLevel = wallLevel
            obj_result.farmLevel = farmLevel
            obj_result.LoyaltyLevel = LoyaltyLevel

            mapVillageById.set(list_coords[i].coord_destination_id,obj_result)
        }
    })

    console.log("mapVillageById",mapVillageById)


    //add troops home for own villages that don't have incomings
   // vault.js ~8120 (PATCH START)
Array.from(map_troops_home.keys()).forEach(coord => {

    const villageDetails = mapVillages.get(coord);
    if (!villageDetails || villageDetails.villageId === undefined) {
        console.warn("Skipped coord (missing villageDetails):", coord);
        return;
    }

    const troopsHomeDetails = map_troops_home.get(coord);
    if (!troopsHomeDetails || !troopsHomeDetails.troopInVillage || !troopsHomeDetails.troopsOwn) {
        console.warn("Skipped coord (invalid troopsHomeDetails):", coord);
        return;
    }

    let totalPop = 0, totalPopOff = 0, totalPopDef = 0;

    Object.keys(troopsHomeDetails.troopInVillage).forEach(troopName => {

        if (["spear", "sword", "archer", "heavy"].includes(troopName)) {
            totalPop += troopsHomeDetails.troopInVillage[troopName] * troopsPop[troopName];
            totalPopDef += (troopsHomeDetails.troopsOwn[troopName] || 0) * troopsPop[troopName];
        }

        if (["axe", "light", "marcher", "ram", "catapult"].includes(troopName)) {
            totalPopOff += (troopsHomeDetails.troopsOwn[troopName] || 0) * troopsPop[troopName];
        }
    });

    let typeVillage = (totalPopDef > totalPopOff) ? "def" : "off";
    typeVillage = ((troopsHomeDetails.troopsOwn['spy'] || 0) > 4000) ? "spy" : typeVillage;

    let hasNoble = ((troopsHomeDetails.troopsOwn['snob'] || 0) > 0);

    totalPop = Math.round(totalPop / 1000);
    totalPopOff = Math.round(totalPopOff / 1000);
    totalPopDef = Math.round(totalPopDef / 1000);

    const villageIdKey = villageDetails.villageId + "";

    if (!mapVillageById.has(villageIdKey)) {

        mapVillageById.set(villageIdKey, {
            villageId: villageDetails.villageId,
            playerId: villageDetails.playerId,
            nrAttacks: 0,
            nrNobles: 0,
            nrSnipes: 0,
            nrSniped: 0,
            nrRecaps: 0,
            nrRecaped: 0,
            pop: totalPop,
            typeVillage: typeVillage,
            wallLevel: troopsHomeDetails.wallLvl || 0,
            farmLevel: troopsHomeDetails.farmLvl || 0,
            totalPopOff: totalPopOff,
            totalPopDef: totalPopDef,
            hasNoble: hasNoble
        });

    } else {

        let updateObj = mapVillageById.get(villageIdKey);
        updateObj.typeVillage = typeVillage;
        updateObj.totalPopOff = totalPopOff;
        updateObj.totalPopDef = totalPopDef;
        updateObj.hasNoble = hasNoble;
        mapVillageById.set(villageIdKey, updateObj);
    }

});
// PATCH END

    console.log("mapVillageByIdAfter",mapVillageById)




    //btn show info on the map
    document.getElementById("btn_show_info").addEventListener("click",()=>{
        let myInfo = document.getElementById("checkbox_my_info").checked
        let tribeInfo = document.getElementById("checkbox_tribe_info").checked
        let enemyInfo = document.getElementById("checkbox_enemy_info").checked
        let allInfo = document.getElementById("checkbox_all_info").checked

        if(myInfo == false && tribeInfo == false && enemyInfo == false && allInfo == false){
            UI.ErrorMessage("Select at least one of the checkboxes to view data on the map",2000)
        }
        //filter information
        
        if(enemyInfo == true || allInfo == true ){
            // console.log("mapAttacksVillageId",mapAttacksVillageId)
            let drawInfo=true
            let originalSpawnSector = TWMap.mapHandler.spawnSector;

            TWMap.mapHandler.spawnSector = function (data, sector) {
                originalSpawnSector.call(TWMap.mapHandler, data, sector);
                enemyInfo = document.getElementById("checkbox_enemy_info").checked
                allInfo = document.getElementById("checkbox_all_info").checked

                if(drawInfo == true && (enemyInfo == true || allInfo == true)){
                    drawInfo = false
                    window.setTimeout(() => {

                        let visibleSectors=TWMap.map._visibleSectors
                        Object.keys(visibleSectors).forEach(key=>{
                            let elements=visibleSectors[key]._elements
                            Object.keys(elements).forEach(key=>{
                                let villageId=elements[key].id.match(/\d+/)
                                // console.log(villageId)
                                if(villageId!=null){
                                    if(mapAttacksVillageId.has(villageId[0])){
                                        let obj=mapAttacksVillageId.get(villageId[0])
                                        createMapInfoOffensiveSmall(obj)
                                        console.log("draw offensive for every player")
                                        

                                    }
                                }
                            })
                        })
                        drawInfo=true
                    }, 200);
                }
            };

            showPopupInfo(mapAttacksVillageId)

        }

        if(myInfo == true || tribeInfo == true || allInfo == true){
            
            // console.log("mapVillageById",mapVillageById)
            let drawInfo=true
            let originalSpawnSector = TWMap.mapHandler.spawnSector;

            TWMap.mapHandler.spawnSector = function (data, sector) {
                originalSpawnSector.call(TWMap.mapHandler, data, sector);
                myInfo = document.getElementById("checkbox_my_info").checked
                tribeInfo = document.getElementById("checkbox_tribe_info").checked
                allInfo = document.getElementById("checkbox_all_info").checked
                // console.log(`myInfo: ${myInfo} tribeInfo: ${tribeInfo} allInfo: ${allInfo}`)
                if(drawInfo==true && (myInfo == true || tribeInfo == true || allInfo == true)){
                    drawInfo=false
                    window.setTimeout(() => {

                        let visibleSectors=TWMap.map._visibleSectors
                        Object.keys(visibleSectors).forEach(key=>{
                            let elements=visibleSectors[key]._elements
                            Object.keys(elements).forEach(key=>{
                                let villageId=elements[key].id.match(/\d+/)
                                // console.log(villageId)
                                if(villageId!=null){
                                    if(mapVillageById.has(villageId[0])){
                                        let obj=mapVillageById.get(villageId[0])
                                        // console.log(obj)
                                        if(allInfo == true || (myInfo == true && tribeInfo == true)){
                                            console.log("draw defensive for all players")
                                            createMapInfoDefensiveSmall(obj)
                                        }
                                        else if(myInfo == true){
                                            if(obj.playerId == game_data.player.id){
                                                console.log("draw defensive only for my own villages")
                                                createMapInfoDefensiveSmall(obj)
                                            }
                                        }
                                        else if(tribeInfo == true){
                                            if(obj.playerId != game_data.player.id){
                                                console.log("draw defensive only for my tribe, except mine")
                                                createMapInfoDefensiveSmall(obj)
                                            }
                                        }
                                    }
                                }
                            })
                        })

                        drawInfo=true
                    }, 200);
                }
            };
        }

        if(myInfo == true || tribeInfo == true || enemyInfo == true || allInfo == true){
            UI.SuccessMessage("The map is ready,move/drag the map to see the data", 2000)
        }
    })

    //add number of reports for each player
    console.log("map_status",map_status)
    console.log("map_history_upload",map_history_upload)
    let map_counter_reports=new Map()
    Array.from(map_history_upload.keys()).forEach(key=>{
        let obj=map_history_upload.get(key)
        if(map_counter_reports.has(obj.playerId)){
            let currentValue=map_counter_reports.get(obj.playerId)+1
            map_counter_reports.set(obj.playerId,currentValue)
        }
        else{
            map_counter_reports.set(obj.playerId,1)
        }
    })
    console.log("map_counter_reports",map_counter_reports)

    //update nr reports on for each player
    Array.from(map_status.keys()).forEach(key=>{
        let obj=map_status.get(key)
        let nrReports=map_counter_reports.get(key)
        if(nrReports==undefined)
            nrReports=0
            
        obj.name=obj.name+` (${nrReports})`
    })


    //merge all incomings
    let list_incomings_merge=[]
    Array.from(map_incomings.keys()).forEach(key=>{
        let list_incomings=map_incomings.get(key)
        list_incomings_merge=list_incomings_merge.concat(list_incomings)
    })
    //calculate launch time for every incoming
    for(let i=0;i<list_incomings_merge.length;i++){
        list_incomings_merge[i].date_launch=calculateDateLaunch(list_incomings_merge[i])
    }
  
    //sort by attackers name and then launch time
    list_incomings_merge.sort((o1,o2)=>{
        return (o1.player_off > o2.player_off)?1:(o1.player_off < o2.player_off)?-1:
        o1.date_launch < o2.date_launch?-1:(o1.date_launch > o2.date_launch)?1:0
    })

    let gapIncomings=10000//ms
    //filter our all incoming sent in a short period of time
    for(let i=0;i<list_incomings_merge.length-1;i++){
        if(list_incomings_merge[i].player_off == list_incomings_merge[i+1].player_off){
            if(Math.abs(list_incomings_merge[i].date_launch - list_incomings_merge[i+1].date_launch) < gapIncomings ){
                list_incomings_merge.splice(i,1)
                i--
            }
        }
    }


    list_incomings_merge.sort((o1,o2)=>{
        return new Date(o1.date_land).getTime() < new Date(o2.date_land).getTime()?-1:(new Date(o1.date_land).getTime() > new Date(o2.date_land).getTime())?1:0
    })


    console.log("list_incomings_merge",list_incomings_merge)

    //Tribe OP spotter
    let map_nr_incs_hour=new Map()
    for(let i=0;i<list_incomings_merge.length;i++){
        let date=list_incomings_merge[i].date_land

        if(date!=""){
            let newDate= date.substring(0,5)+", "+date.split(" ")[1].split(":")[0]+"h"

            if(map_nr_incs_hour.has(newDate)){
                map_nr_incs_hour.set(newDate, map_nr_incs_hour.get(newDate)+1)
            }
            else{
                map_nr_incs_hour.set(newDate,1)
            }
        }
        else{
            console.log("error")
            console.log(list_incomings_merge[i])
        }
    }






    // console.log("map_nr_incs_hour",map_nr_incs_hour)
    let list_spotter=Array.from(map_nr_incs_hour.entries())
    




    //sort by fakes map ranking
    map_ranking_attacker = new Map([...map_ranking_attacker.entries()].sort((o1,o2)=>{
        return (o1[1].nr_fakes>o2[1].nr_fakes)?-1:(o1[1].nr_fakes<o2[1].nr_fakes)?1:0
    }))
    map_ranking_defender = new Map([...map_ranking_defender.entries()].sort((o1,o2)=>{
        return (o1[1].nr_fakes>o2[1].nr_fakes)?-1:(o1[1].nr_fakes<o2[1].nr_fakes)?1:0
    }))
    map_status = new Map([...map_status.entries()].sort((o1,o2)=>{
        return (new Date(o1[1].report_date).getTime()>new Date(o2[1].report_date).getTime())?-1:(new Date(o1[1].report_date).getTime()<new Date(o2[1].report_date).getTime())?1:0
    }))

    //create tabels and add event btn for each tabel
    createTableRankingAttackers(map_ranking_attacker)
    createTableRankingDefenders(map_ranking_defender)
    createTableUploadTime(map_status)
    createTableGetCoords(mapVillages)

    document.getElementById("btn_rank_attacker").addEventListener("click",()=>{
        createTableRankingAttackers(map_ranking_attacker)
    })
    document.getElementById("btn_rank_defender").addEventListener("click",()=>{
        createTableRankingDefenders(map_ranking_defender)
    })
    document.getElementById("btn_upload_time").addEventListener("click",()=>{
        createTableUploadTime(map_status)  
    })
    document.getElementById("btn_get_coords").addEventListener("click",()=>{
        createTableGetCoords(mapVillages)
    })
    document.getElementById("btn_op_spotter").addEventListener("click",()=>{
        let html_spotter=`<div id="div_op_spotter" style="height:500px;width:800px;overflow:auto" > </div>`
        Dialog.show("content",html_spotter)
    
        createChart(list_spotter,"div_op_spotter")
    })


    let timeProcessingEnd = new Date().getTime()
    console.log("time processing data: " + (timeProcessingEnd - timeProcessingStart))
    let timeProcessed = (timeProcessingEnd - timeProcessingStart) / 1000
    timeProcessed = parseInt(timeProcessed * 100) / 100

    let timeDownload = (timeDownloadStop - timeDownloadStart) / 1000
    timeDownload = parseInt(timeDownload * 100) / 100
    UI.SuccessMessage(`
            Time loading data: <b>${timeDownload} s </b> <br>
            Time processing data: <b>${timeProcessed} s </b> 
    `, 3000)
    

}


function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function calculateDateLaunch(obj){
    let distance=calcDistance(obj.coord_def,obj.coord_off)
    let time_travel=0
    if(obj.labelName.includes("snob"))
        time_travel=distance*nobleSpeed
    else if(obj.labelName.includes("ram"))
        time_travel=distance*ramSpeed
    else if(obj.labelName.includes("sword"))
        time_travel=distance*swordSpeed
    else if(obj.labelName.includes("axe"))
        time_travel=distance*axeSpeed
    else
        time_travel=distance*heavySpeed

    let date_launch=new Date(obj.date_land).getTime()-time_travel
    // date_launch=parseDate(date_launch)
    return date_launch
}



function createMapInfoDefensiveSmall(obj){
    // console.log("herere")
    // console.log(obj)
    try {
        if(document.getElementById(`info_extra${obj.villageId}`)==null){
            let greenColor = "#026440"//green
            let darkGreenColor = "#011910"//green
            let lightGreenColor = "#137f13"
            let lighterGreenColor = "#1dc246"
            let redColor = "#E80000"//red
            let lightRedColor = "#ff83a1"//red
            let blueLightColor ="#157de5";//blueLightColor
            let orangeColor = "#cc8400"
            let pinkColor = "#d1afed"
            let whiteColor="#ececec";
            let yellowColor = "#ffd500"

            let villageImg=document.getElementById(`map_village_${obj.villageId}`)

            let parent=document.getElementById(`map_village_${obj.villageId}`).parentElement
            let leftImg=villageImg.style.left
            let topImg=villageImg.style.top

            let colorBorder="background-color:rgba(20, 20, 20, 0.34)"//no border

            if(obj.nrSnipes==1)
                colorBorder=`background-color:rgba(255, 10, 10, 0.14);outline:rgba(255, 51, 0, 0.7) solid 1px`// red border
            
            if(obj.nrRecaps==1)
                colorBorder=`background-color:rgba(127,5,5, 0.14);outline:rgba(127,5,5, 0.7) solid 1px`// dark red border
            
            if(obj.nrSniped==1 || obj.nrRecaped==1)
                colorBorder=`background-color:rgba(155, 252, 10, 0.14);outline:rgba(51, 255, 0, 0.7) solid 1px`// green border


            let colorType=""
            if(obj.typeVillage!=null){
                if(obj.typeVillage == "def")
                    colorType = (obj.totalPopDef < 5) ? redColor : (obj.totalPopDef < 10) ? orangeColor : (obj.totalPopDef < 15) ? yellowColor : (obj.totalPopDef < 20) ? lightGreenColor : darkGreenColor
                else if(obj.typeVillage == "off"){
                    colorType = (obj.totalPopOff < 5) ? redColor : (obj.totalPopOff < 10) ? orangeColor : (obj.totalPopOff < 15) ? yellowColor : (obj.totalPopOff < 20) ? lightGreenColor : darkGreenColor
                }
                else if(obj.typeVillage == "spy")
                    colorType="#d8d8d8"

            }
            let typeVillage = (obj.typeVillage == "off") ? "axe" : (obj.typeVillage == "def") ? "spear" : "spy"
            // let colorBackgroundType = (obj.hasNoble == true) ? yellowColor : colorType

            let colorIncomings = (obj.nrAttacks <= 5) ? lightGreenColor : (obj.nrAttacks <= 10) ? lighterGreenColor : (obj.nrAttacks <= 15) ? yellowColor : (obj.nrAttacks <= 20) ? orangeColor : (obj.nrAttacks <= 25) ? lightRedColor : redColor
            let colorLoyalty= (obj.LoyaltyLevel < 25) ? redColor : (obj.LoyaltyLevel < 50) ? orangeColor : (obj.LoyaltyLevel < 75) ? yellowColor : lightGreenColor



            while(document.getElementById(`map_icons_${obj.villageId}`)!=null){
                document.getElementById(`map_icons_${obj.villageId}`).remove()
            }
            if(document.getElementById(`map_cmdicons_${obj.villageId}_0`)!=null)
                document.getElementById(`map_cmdicons_${obj.villageId}_0`).remove()
            if(document.getElementById(`map_cmdicons_${obj.villageId}_1`)!=null)
                document.getElementById(`map_cmdicons_${obj.villageId}_1`).remove()

            let html_info = ""
            // console.log(obj)
            //draw square area
            if(obj.pop > 0 || obj.nrAttacks > 0 || obj.nrNobles > 0 || obj.totalPopOff > 0 || obj.typeVillage != undefined || obj.LoyaltyLevel < 100 || obj.wallLevel < 20){
                html_info +=`<div id="info_extra${obj.villageId}" style="position:absolute;left:${leftImg};top:${topImg};width:51px;height:36px;z-index:3; ${colorBorder}"></div>`
            }
            if(obj.pop > 0){
                html_info += `<center><font color="${whiteColor}" class="shadow20" style="position:absolute;left:${leftImg};top:${topImg};width:25px;height:15px;z-index:4;margin-top:23px;font-size: 11px">${obj.pop}k</font></center>`
            }

            if(obj.nrAttacks > 0){
                html_info += `<img style="position:absolute;left:${leftImg};top:${topImg};width:13px;height:13px;z-index:4;margin-left:7px;"  src="https://dsen.innogamescdn.com/asset/c2dee33a/graphic//map/incoming_attack.png">
                    <center><font color="${colorIncomings}"  class="shadow20" style="position:absolute;left:${leftImg};top:${topImg};width:14px;height:14px;z-index:4;margin-left:18px; font-size: 11px">${obj.nrAttacks}</font></center>`
            }
  
            //nobles coming as incs
            if(obj.nrNobles > 0){
                html_info+=`<center><font color="${redColor}"  class="shadow20" style="position:absolute;left:${leftImg};top:${topImg};width:14px;height:14px;z-index:4;;margin-left:7px;margin-top:11px; font-size: 11px">${obj.nrNobles}</font></center>`
            }

            //containing own noble in village 
            if(obj.hasNoble == true){
                html_info+=`<img style="position:absolute;left:${leftImg};top:${topImg};width:10px;height:10px;z-index:4;margin-top:15px;margin-left:40px;background-color:white"  src="https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/snob.png">`
            }

            //add either loyaly or wall down
            if(obj.LoyaltyLevel < 100){
                html_info+=`<center><font color="${colorLoyalty}" class="shadow20" style="position:absolute;left:${leftImg};top:${topImg};width:14px;height:14px;z-index:4;margin-top:23px;margin-left:34px;font-size: 11px;">${obj.LoyaltyLevel}</font></center>`
            }
            
            if((obj.LoyaltyLevel == 100 || obj.LoyaltyLevel == undefined || obj.LoyaltyLevel == 'none') && obj.wallLevel < 20){
                html_info+=`<img style="position:absolute;left:${leftImg};top:${topImg};width:10px;height:10px;z-index:4;margin-top:26px;margin-left:41px;background-color:#471212"  src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/buildings/wall.png">`
            }
            if((obj.LoyaltyLevel == 100 || obj.LoyaltyLevel == undefined || obj.LoyaltyLevel == 'none') && obj.farmLevel < 30){
                html_info+=`<img style="position:absolute;left:${leftImg};top:${topImg};width:10px;height:10px;z-index:4;margin-top:26px;margin-left:31px;background-color:#471212"  src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/buildings/farm.png">`
            }

            if(obj.typeVillage){
                html_info+=`<img style="position:absolute;left:${leftImg};top:${topImg};width:14px;height:14px;z-index:4;margin-left:37px;background-color:${colorType}"  src="https://dsen.innogamescdn.com/asset/c2dee33a/graphic/unit/unit_${typeVillage}.png">`
            }

            
            $(html_info).appendTo(parent);
        }

    } catch (error) {
        console.log(error)
    }
}

function createMapInfoOffensiveSmall(obj){

    try {
        if(document.getElementById(`info_extra${obj.villageId}`) == null ){
            let greenColor="#026440"//green
            let redColor="#E80000"//red
            let blueLightColor ="#157de5";//blueLightColor
            let brownColor="#a06a34"
            let whiteColor="#ececec";

            let villageImg=document.getElementById(`map_village_${obj.villageId}`)

            let parent=document.getElementById(`map_village_${obj.villageId}`).parentElement
            let leftImg=villageImg.style.left
            let topImg=villageImg.style.top

            let greenBorder=`background-color:rgba(155, 252, 10, 0.14);outline:rgba(51, 255, 0, 0.7) solid 1px`//green
            let redBorder=`background-color:rgba(255, 10, 10, 0.14);outline:rgba(255, 51, 0, 0.7) solid 1px`//red
            let lighBlueBorder=`background-color:rgba(149, 245, 232, 0.14);outline:rgba(149, 245, 232, 0.7) solid 1px`//red
            let blueBorder=`background-color:rgba(0, 10, 255, 0.2);outline:rgba(0, 10, 255, 0.7) solid 1px`// blue border
            let colorBorder="background-color:rgba(20, 20, 20, 0.34)"//no border

            var noBorder=`background-color:rgba(40, 40, 40, 0.34)`
            
            while(document.getElementById(`map_icons_${obj.villageId}`)!=null){
                document.getElementById(`map_icons_${obj.villageId}`).remove()
            }

            if(document.getElementById(`map_cmdicons_${obj.villageId}_0`)!=null)
                document.getElementById(`map_cmdicons_${obj.villageId}_0`).remove()
            if(document.getElementById(`map_cmdicons_${obj.villageId}_1`)!=null)
                document.getElementById(`map_cmdicons_${obj.villageId}_1`).remove()


            Array.from($(".church_radius_display").parent().find("img"))
                .filter(e=>e.src.includes("reserved"))
                .forEach(e=>$(e).remove())

            let colorTypeAttack=""
            if(obj.type_village!=null){
                if(obj.type_village=="sword")
                    colorTypeAttack="background-color:rgb(0,255,255)"
                else if(obj.type_village=="light")
                    colorTypeAttack="background-color:rgb(255, 132, 5)"
                else if(obj.type_village=="spy")
                    colorTypeAttack="background-color:rgb(255,255,255)"
                

            }

            let stacks_home=0
            let has_noble=false
            if(obj.troopsAtHome!=null && obj.troopsAtHome!=undefined){
                for(let i=0;i<obj.troopsAtHome.length;i++){
                    let type=obj.troopsAtHome[i].type
                    let count=obj.troopsAtHome[i].count
                    if(type=="spear" || type=="sword" || type=="archer" || type=="heavy" ){
                        stacks_home+=troopsPop[type] * count
                    }
                    if(type =="snob" && count > 0){
                        has_noble=true
                    } 
                }
                stacks_home=parseInt(Math.round(stacks_home/1000))
            }
            else{
                stacks_home=-1
            }

            if(has_noble==false && obj.troopsAway!=null && obj.troopsAway!=undefined){
                if(obj.troopsAway.length>0){
                    let nobleInfo=obj.troopsAway.slice(-1)[0] 
                    if(nobleInfo.type=="snob" && nobleInfo.count>0){
                        has_noble=true
                    }
                }
            }


            let html_info
            //info for small img village  on the map
         

            if(obj.nr_nukes>0 || obj.nrNobles>0 || obj.nr_fangs >0 ){
                if(obj.type_village!=null){
                    let border = (has_noble==true)?"background-color:rgb(255,255,0)" : colorTypeAttack
                    let borderMain=(obj.type_village=="light") ? blueBorder : lighBlueBorder
                    html_info=`
                        <div id="info_extra${obj.villageId}" style="position:absolute;left:${leftImg};top:${topImg};width:51px;height:36px;z-index:3; ${borderMain}"></div>`
                    
                    html_info+=`<img style="position:absolute;left:${leftImg};top:${topImg};width:16px;height:16px;z-index:4;margin-left:35px;${border}"  src="https://dsen.innogamescdn.com/asset/c2dee33a/graphic/unit/unit_${obj.type_village}.png">`
                    
                    if(stacks_home>=0){
                        html_info+=`<center><font color="${"#FFFFF1"}" class="shadow20" style="position:absolute;left:${leftImg};top:${topImg};width:16px;height:16px;z-index:4;margin-left:8px;font-size: 10px;">${stacks_home}k</font></center>`

                    }
                }else{
                    html_info=`
                    <div id="info_extra${obj.villageId}" style="position:absolute;left:${leftImg};top:${topImg};width:51px;height:36px;z-index:3; ${noBorder}"></div>`
                }
                if(obj.nr_fangs>0){
                    html_info+=`
                    <center><font color="${brownColor}" class="shadow20" style="position:absolute;left:${leftImg};top:${topImg};width:14px;height:14px;z-index:4;margin-top:22px;margin-left:0px;font-size: 12px;background-color:black;">${obj.nr_fangs}</font></center>`
                }
                if(obj.nr_nukes>0){
                    html_info+=`
                    <center><font color="${greenColor}" class="shadow20" style="position:absolute;left:${leftImg};top:${topImg};width:14px;height:14px;z-index:4;margin-top:22px;margin-left:17px;font-size: 12px;background-color:black;">${obj.nr_nukes}</font></center>`
                }
                if(obj.nrNobles>0){
                    html_info+=`
                    <center><font color="${redColor}" class="shadow20" style="position:absolute;left:${leftImg};top:${topImg};width:14px;height:14px;z-index:4;margin-top:22px;margin-left:34px;font-size: 12px;background-color:black;">${obj.nrNobles}</font></center>`
                }
         

            }
            else{
          


                if(obj.type_village!=null){
                    let border= (has_noble==true)?"background-color:rgb(255,255,0)":colorTypeAttack
                    let borderMain=(obj.type_village=="light")?blueBorder : lighBlueBorder
                    html_info=`
                        <div id="info_extra${obj.villageId}" style="position:absolute;left:${leftImg};top:${topImg};width:51px;height:36px;z-index:3; ${borderMain}"></div>`
                    
                    html_info+=`<img style="position:absolute;left:${leftImg};top:${topImg};width:16px;height:16px;z-index:4;margin-left:35px;${border}"  src="https://dsen.innogamescdn.com/asset/c2dee33a/graphic/unit/unit_${obj.type_village}.png">`
                    
                    if(stacks_home>=0){
                        html_info+=`<center><font color="${"#FFFFF1"}" class="shadow20" style="position:absolute;left:${leftImg};top:${topImg};width:16px;height:16px;z-index:4;margin-left:8px;font-size: 10px;">${stacks_home}k</font></center>`

                    }

                }
            }
            $(html_info).appendTo(parent);


            //info for the popup window for each village
        }

    } catch (error) {
        console.log(error)
    }
}

function showPopupInfo(mapAttacksVillageId){
    let originalDisplayForVillage = TWMap.popup.displayForVillage;

    TWMap.popup.displayForVillage = function (e, a, t) {
        console.log('intercepted displayForVillage');
        originalDisplayForVillage.call(TWMap.popup, e, a, t);
        let villageInfo = e;
        // console.log(villageInfo)

        let obj=mapAttacksVillageId.get(villageInfo.id)



        let units=game_data.units
        //first row
        let militia=0
        let drawPopup=false
        if(units.includes("militia"))
            militia=1

        let html_popup=`
            <table  class="vis popup_info_extra" border="1" style="width: 100%;border-collapse: collapse">
                <tr>
                    <td style="text-align:center; width:auto;background-color:#c1a264" >
                        <center style="margin:0px;"></center>
                    </td>
                    <td style="text-align:center; width:auto;background-color:#c1a264" >
                        <center style="margin:0px;"><b>seen</b></center>
                    </td>`
                

            for(let i=0;i<units.length-militia;i++){
                html_popup+=`
                    <td style="text-align:center; width:auto;background-color:#c1a264" >
                        <center style="margin-top:0px;"><img src="https://dsen.innogamescdn.com/asset/c2dee33a/graphic/unit/unit_${units[i]}.png"></center>
                    </td>`
            }
            html_popup+="</tr>"


        if(obj!=undefined){
            if(obj.troopsAtHome!=null ){
                drawPopup=true
                html_popup+=`
                    <tr>
                        <td style="text-align:center; width:auto;" >
                            <center style="margin:0px;"><b>at home</b></center>
                        </td>
                        <td style="text-align:center; width:auto;" >
                            <center style="margin:0px;"><b>${obj.time_report_home}</b></center>
                        </td>
                    `

                for(let i=0;i<obj.troopsAtHome.length-militia;i++){
                    html_popup+=`
                        <td style="text-align:center; width:auto;" >
                            <center style="margin:0px;">${obj.troopsAtHome[i].count}</center>
                        </td>`
                }
                html_popup+=`</tr>`
            }
        }

        if(obj!=undefined){
            if(obj.troopsAway!=null){
                drawPopup=true
                html_popup+=`
                <tr>
                    <td style="text-align:center; width:auto;" >
                        <center style="margin:0px;"><b>away</b></center>
                    </td>
                    <td style="text-align:center; width:auto;" >
                        <center style="margin:0px;"><b>${obj.time_report}</b></center>
                    </td>`

                for(let i=0;i<obj.troopsAway.length;i++){
                    html_popup+=`
                        <td style="text-align:center; width:auto;" >
                            <center style="margin:0px;">${obj.troopsAway[i].count}</center>
                        </td>`
                }
                html_popup+=`</tr>`
            }
        }

        html_popup+=`</table>`

        if(drawPopup==true){
            // console.log(document.getElementById("map_popup"))
            $(".popup_info_extra").remove()
            $('#info_content').prepend(`<tr><td colspan="3">${html_popup}</td></tr>`)

        }


    }


}


    ////////////////////////////////////////////////////////////////// create table for players/////////////////////////////////////////////////////

function createTablePlayers(map_playerId,mapVillages){
    let html_tr_player="<tbody id='tbody_player'>"
    let counterPlayer=0;
    let nr_attacks_total=0,nr_supports_total=0,nr_nobles_total=0;
    let nr_snipe_total=0,nr_sniped_total=0,nr_recap_total=0,nr_recaped_total=0;
    Array.from(map_playerId.keys()).forEach(key=>{
        let obj=map_playerId.get(key)
        counterPlayer++;
        nr_attacks_total +=obj.nr_attacks_total
        nr_supports_total+=obj.nr_supports_total
        nr_nobles_total  +=obj.nr_nobles_total
        nr_snipe_total   +=obj.nr_snipe_total
        nr_sniped_total  +=obj.nr_sniped_total
        nr_recap_total   +=obj.nr_recap_total
        nr_recaped_total +=obj.nr_recaped_total

        html_tr_player+=
        `<tr>

            <td style="text-align:center; width:40px; background-color:${headerColor}">
                <a href="#"  ><center style="margin:5px"><font color="${titleColor}"><img player-id="${key}" number-tr="${counterPlayer}" class="infoPlayer" src="https://img.icons8.com/clouds/30/000000/more.png"/></font></center></a>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}">
            <a href="${game_data.link_base_pure}info_player&id=${key}"><center style="margin:5px"><font color="${titleColor}">${obj.player_destination_name}</font></center></a>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}">
                <center style="margin:5px;font-size:16px"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/4ba99e83/graphic/unit/att.png">(${obj.nr_attacks_total})</font></center>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}">
                    <center style="margin:5px;font-size:16px"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/support.png">(${obj.nr_supports_total})</font></center>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}">
                <center style="margin:5px;font-size:16px"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/snob.png">(${obj.nr_nobles_total})</font></center>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}">
                <center style="margin:5px;font-size:16px"><font color="${titleColor}"><img src="https://img.icons8.com/office/20/000000/sniper-rifle.png"/>(${obj.nr_sniped_total}/${obj.nr_snipe_total})</font></center>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}">
                <center style="margin:5px;font-size:16px"><font color="${titleColor}"><img src="https://img.icons8.com/ultraviolet/20/000000/horror.png"/>(${obj.nr_recaped_total}/${obj.nr_recap_total})</font></center>
            </td>
            
        </tr>
        `

    })
    html_tr_player+="</tbody>"
    if(document.getElementById("tbody_player")!=null)
        document.getElementById("tbody_player").remove()
    document.getElementById("table_view").innerHTML+=html_tr_player
    $("#table_view").hide()
    $("#table_view").toggle(500)

    document.getElementById("header_attacks").innerText=`(${nr_attacks_total})`
    document.getElementById("header_supports").innerText=`(${nr_supports_total})`
    document.getElementById("header_nobles").innerText=`(${nr_nobles_total})`
    document.getElementById("header_snipes").innerText=`(${nr_sniped_total}/${nr_snipe_total})`
    document.getElementById("header_recaps").innerText=`(${nr_recaped_total}/${nr_recap_total})`

    $(".infoPlayer").on("click",(event)=>{
        let playerId=event.target.getAttribute("player-id")
        let numberTr=event.target.getAttribute("number-tr")
        // console.log(event.target)
        let list_coords=map_playerId.get(playerId).list_coords

    /////////// ///////////////////////////////////////////////////////////////////coords table//////////////////////////////////////////////////////////
    // red: '#ff8080',
    // green: '#4dff4d'
        let html_table_player=`
        <tr >
            <td >
                <div style="height:700px;overflow:auto;" id="div_incomingsInfo">
                <table  class="table_player" border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor};border-spacing:2px;border-collapse:separate;">
                `
        let counterVillage=0;
        console.log("------------------------------------------------------------")
        console.log("list_coord",list_coords)
        console.log(list_coords.length)
        for(let i=0;i<list_coords.length;i++){
            let obj=list_coords[i]
            console.log(list_coords[i].nrAttacks)
            if(list_coords[i].nrAttacks>0 || list_coords[i].nr_supports>0){//show attacks and supports, i might delete supports
                counterVillage++

                let headColorSnipe=(obj.nrSniped==1)?"#4dff4d":(obj.nrSnipes==1)?"#ff8080":headerColor
                let headColorRecap=(obj.nrRecaped==1)?"#4dff4d":(obj.nrRecaps==1)?"#ff8080":headerColor

                html_table_player+=`
                <tr>
                    <td style="text-align:center; width:40px; background-color:${headerColorPlayers}">
                        <a href="#" style="margin:0px" ><center ><font color="${titleColor}"><img coord-id="${obj.coord_destination_id}" number-tr-coord="${counterVillage}" class="infoCoord" src="https://img.icons8.com/bubbles/20/000000/more.png"/></font></center></a>
                    </td>
                    <td style="text-align:center; width:auto; background-color:${headerColorPlayers}">
                        <a href="${game_data.link_base_pure}info_village&id=${obj.coord_destination_id}" style="margin:0px"><center><font color="${titleColor}">${obj.list_coming[0].coord_destination}</font></center></a>
                    </td>
                    <td style="text-align:center; width:auto; background-color:${headerColorPlayers}">
                        <center style="margin:0px;font-size:16px"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/4ba99e83/graphic/unit/att.png">(${obj.nrAttacks})</font></center>
                    </td>
                    <td style="text-align:center; width:auto; background-color:${headerColorPlayers}">
                        <center style="margin:2px;font-size:16px"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/support.png">(${obj.nr_supports})</font></center>
                    </td>
                    <td style="text-align:center; width:auto; background-color:${headerColorPlayers}">
                        <center style="margin:2px;font-size:16px"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/snob.png">(${obj.nrNobles})</font></center>
                    </td>
                        <td style="text-align:center; width:auto; background-color:${headColorSnipe}">
                    <center style="margin:2px;font-size:16px"><font color="${titleColor}"><img src="https://img.icons8.com/office/20/000000/sniper-rifle.png"/></font></center>
                    </td>
                    <td style="text-align:center; width:auto; background-color:${headColorRecap}">
                        <center style="margin:2px;font-size:16px"><font color="${titleColor}"><img src="https://img.icons8.com/ultraviolet/20/000000/horror.png"/></font></center>
                    </td>             
                </tr>
                `
            }
        }



        html_table_player+=`
                </div>
                </table>
            <td>
        </tr>
        `
        let delay=500
        // console.log(document.getElementById(`table_player${numberTr}`))
        if(document.getElementById(`table_player${numberTr}`)!=null){
            $(".tr_table_coord").hide(delay)
            window.setTimeout(()=>{
                $(".tr_table_coord").remove()
            },delay+10)
            
        }
        else{

            $(".tr_table_coord").remove()
            // console.log(html_table_player)
            var table_support = document.getElementById("table_view").getElementsByTagName("tbody")[0]
            var newRow   = table_support.insertRow(numberTr);
            newRow.className="tr_table_coord"
            newRow.id=`table_player${numberTr}`

            let cell  = newRow.insertCell();
            cell.setAttribute("colspan",7)
            var div  = document.createElement("div")
            div.innerHTML=html_table_player
            $(cell).append(div)
            $(cell).hide()
            $(cell).show(delay)
            
            createEventCoord(map_playerId,mapVillages,playerId)

        }
    })
    sortInfoIncomings(map_playerId,mapVillages)

}

////////////////////////////////////////////////////////////////// create table with troops and info for each coord////////////////////////////////

function createTableCoordTroops(obj,admin){
    admin=true
    let units=game_data.units
    let troopsSupportComing={}
    for(let i=0;i<units.length-1;i++){
        troopsSupportComing[units[i]]=0
    }
    // console.log(troopsSupportComing)
    for(let i=0;i<obj.list_coming.length;i++){
        if(obj.list_coming[i].type_attack.includes("support")){
            Object.keys(troopsSupportComing).forEach(key=>{
                if(obj.list_coming[i].troops[key]!=undefined)
                    troopsSupportComing[key]+=obj.list_coming[i].troops[key]
            })
        }
        
    }
    troopsSupportComing.snob=0;

    if(obj.homeInfo==undefined){
        obj.homeInfo={
            flagName:"none",
            LoyaltyLevel:"none",
            wallLevel:"none",
            farmLevel:"none",
        }
    }



    let html_table_coord=""
    ///////////////////////////////////////////////////////////////////info coord table//////////////////////////////////////////////////////////
    if(admin==true){
        html_table_coord+=`
        <tbody>
        <tr>

            <td  style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:5px"><font color="${titleColor}">coord </font></center>
            </td>    
            <td  style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:5px;padding;"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/4ba99e83/graphic/unit/att.png"> </font></center>
            </td>    
            <td  style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:5px"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/4ba99e83/graphic/flags/small/3.png"> </font></center>
            </td>    
            <td  style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:5px"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/buildings/snob.png"> </font></center>
            </td>    
            <td  style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:5x"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/buildings/wall.png"> </font></center>
            </td>    
            <td  style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:5px"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/buildings/farm.png"> </font></center>
            </td>   
            <td  style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:5px"><font color="${titleColor}">troops </font></center></p>
            </td>   
            
        `;
    /////////////////////////////////////////////////////////////////////////////Add info village//////////////////////////////////////////////////

        for(let i=0;i<units.length-1;i++){
            html_table_coord+=`<td class="fm_unit" style="width:30px;text-align:center;width:auto; background-color:${headerColorFirstRow}"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/unit/unit_${units[i]}.png"></td>`
        }
        html_table_coord+=`
            <td  style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:1px"><font color="${titleColor}">pop</font></center>
            </td>`
        html_table_coord+=`</tr>
                <tr>`
        
        html_table_coord+=`
            <td rowspan="3" class="" style="width:30px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">${obj.list_coming[0].coord_destination}</td>
            <td rowspan="3" class="" style="width:70px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">${obj.nrAttacks}</td>
            <td rowspan="3" class="" style="width:70px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">${obj.homeInfo.flagName}</td>
            <td rowspan="3" class="" style="width:30px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">${obj.homeInfo.LoyaltyLevel}</td>
            <td rowspan="3" class="" style="width:30px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">${obj.homeInfo.wallLevel}</td>
            <td rowspan="3" class="" style="width:30px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">${obj.homeInfo.farmLevel}</td>
            <td  style="text-align:center; width:auto; background-color:${headerColorCoords}">
                <center style="margin:1px"><font color="${titleColor}">home</font></center>
            </td>
        `
    /////////////////////////////////////////////////////////////////////////////////////////home troops//////////////////////////////////////////////////
        let total_pop=0;
        for(let i=0;i<units.length-1;i++){
            let value_troop=(obj.homeInfo.obj_troops!=undefined)?obj.homeInfo.obj_troops[units[i]]:0
            let name_troop=units[i]
            if(name_troop!="spy" && name_troop!="light" && name_troop!="marcher" && name_troop!="ram"&& name_troop!="catapult" && name_troop!="axe"){
                total_pop+=value_troop*troopsPop[name_troop]
            }
            html_table_coord+=`<td style="width:30px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">`+value_troop+"</td>"
        }
        html_table_coord+=`<td style="width:60px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">`+total_pop+"</td>"
        html_table_coord+=`</tr>
                <tr>
                    <td  style="text-align:center; width:auto; background-color:${headerColorCoords}">
                        <center style="margin:1px"><font color="${titleColor}">coming</font></center>
                    </td>`

    ////////////////////////////////////////////////////////////////////////////////////////coming troops//////////////////////////////////////////////////
        total_pop=0;
        for(let i=0;i<units.length-1;i++){
            let value_troop_coming=troopsSupportComing[units[i]]
            let name_troop=units[i]
            if(name_troop!="spy" && name_troop!="light" && name_troop!="marcher" && name_troop!="ram"&& name_troop!="catapult" && name_troop!="axe"){
                total_pop+=value_troop_coming*troopsPop[name_troop]
            }
            html_table_coord+=`<td style="width:30px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">`+value_troop_coming+"</td>"
        }
        html_table_coord+=`<td style="width:60px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">`+total_pop+"</td>"

        html_table_coord+=`</tr>
                <tr>
                    <td  style="text-align:center; width:auto; background-color:${headerColorCoords}">
                        <center style="margin:1px"><font color="${titleColor}">total </font></center>
                    </td>`
    ////////////////////////////////////////////////////////////////////////////////////////total troops//////////////////////////////////////////////////
        total_pop=0;
        for(let i=0;i<units.length-1;i++){
            let value_home=(obj.homeInfo.obj_troops!=undefined)?obj.homeInfo.obj_troops[units[i]]:0
            let value_troop=troopsSupportComing[units[i]]+value_home
            let name_troop=units[i]
            if(name_troop!="spy" && name_troop!="light" && name_troop!="marcher" && name_troop!="ram"&& name_troop!="catapult" && name_troop!="axe"){
                total_pop+=value_troop*troopsPop[name_troop]
            }
            html_table_coord+=`<td style="width:30px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">`+value_troop+"</td>"
        }
        html_table_coord+=`<td style="width:60px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">`+total_pop+"</td>"
        html_table_coord+="</tr></tbody>"
        return html_table_coord
    }
}

//////////////////////////////////////////add click event for coord and when it's pressed show table with troops and incomings////////////////////

function createEventCoord(map_playerId,mapVillages,playerId){
    $(".infoCoord").on("click",(event)=>{
        
        // console.log(this.parentElement)
        // console.log($(this).parent())

        // console.log("event infoCoord")
        let coordId=event.target.getAttribute("coord-id")
        let numberTrCoord=event.target.getAttribute("number-tr-coord")
        let obj={}
        let list_coords=map_playerId.get(playerId).list_coords
        // console.log(playerId)
        // console.log(list_coords)
        for(let i=0;i<list_coords.length;i++){
            if(coordId==list_coords[i].coord_destination_id){
                obj=list_coords[i]
                break;
            }
        }
        console.log("obj",obj)
        console.log("mapVillages",mapVillages)

        // console.log(obj)
        // console.log(coordId)
        // console.log(numberTrCoord)
        // console.log(event.target)
        
        console.log("objbaaa",obj)
        let admin=true
        let html_table_coord=`<tr><td >`
        if(obj.hasOwnProperty("homeInfo")==true){
            html_table_coord=`<table class="table_coord" border="1" coord-id="${coordId}" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor};border-spacing:2px;border-collapse:separate;"> `
            html_table_coord+=createTableCoordTroops(obj,admin)
            html_table_coord+="</table>"
        }

        html_table_coord+=`
        <div style="height:400px;overflow:auto;" id="div_incomingsInfo">
        <table class="table_coord" border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor};border-spacing:2px;border-collapse:separate;"></div> `
        html_table_coord+=createTableCoordIncomings(obj.list_coming,mapVillages)



        html_table_coord+=`</table><td></tr>`




        let delay=500
        // console.log(document.getElementById(`table_coord${numberTrCoord}`))
        if(document.getElementById(`table_coord${numberTrCoord}`)!=null){
            $(".tr_table_coord_info").hide(delay)
            // $("#div_incomingsInfo").hide(delay)
            window.setTimeout(()=>{
                $(".tr_table_coord_info").remove()
                // $("#div_incomingsInfo").remove()
            },delay+10)
            
        }
        else{

            $(".tr_table_coord_info").remove()
            // console.log(html_table_player)
            var table_coord = document.getElementsByClassName("table_player")[0].getElementsByTagName("tbody")[0]
            var newRow   = table_coord.insertRow(numberTrCoord);
            newRow.className="tr_table_coord_info"
            newRow.id=`table_coord${numberTrCoord}`

            let cell  = newRow.insertCell();
            cell.setAttribute("colspan",7)
            var div  = document.createElement("div")
            div.innerHTML=html_table_coord
            $(cell).append(div)
            $(cell).hide()
            $(cell).show(delay)
            counterTime()
        }


    })
}

////////////////////////////////////////////////////////////////// create table for incomings////////////////////////////////////////////////////////

function createTableCoordIncomings(list,mapVillages){
    let serverTime=document.getElementById("serverTime").innerText
    let serverDate=document.getElementById("serverDate").innerText.split("/")
    serverDate=serverDate[1]+"/"+serverDate[0]+"/"+serverDate[2]
    let date_current=new Date(serverDate+" "+serverTime).getTime()
    // console.log("create table coord")
    console.log("createTableCoordIncomings")
    // console.log(list)
    // console.log(mapVillages)
    let html_incomings=`
        <tbody >
        <tr>
            <td  style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:5px"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/056b9c0b/graphic/unit/att.png"> </font></center>
            </td>  
            <td  style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:0px"><font color="${titleColor}">speed/pop </font></center>
            </td>    
            <td colspan="2" style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
               <center style="margin:0px"><font color="${titleColor}">destination </font></center>
            </td>    
            <td colspan="2" style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:0px"><font color="${titleColor}">origin </font></center>
            </td>    
            <td  style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:0px"><font color="${titleColor}">Arrival time </font></center>
            </td>    
            <td style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:0px"><font color="${titleColor}">Arrives in </font></center>
            </td>    


        </tr>`
        
        for(let i=0;i<list.length;i++){
            // console.log("aici baa")
            // console.log(list[i])
            let labelName
            let villageId=mapVillages.get(list[i].coord_destination).villageId
            let playerId=mapVillages.get(list[i].coord_destination).playerId
            let playerName=mapVillages.get(list[i].coord_destination).playerName
            let headerNoble=headerColorCoords
            let titleColorNoble=titleColor
            let type_attack=list[i].type_attack

            if(list[i].labelName=="none")
                labelName=`<img src="https://dsen.innogamescdn.com/asset/056b9c0b/graphic/delete.png">`
            else
                labelName=`<img src="https://dsen.innogamescdn.com/asset/a9e85669/graphic/unit/tiny/${list[i].labelName}">`

            if(type_attack.includes("support")){
                let troops=list[i].troops
                let pop=0
                Object.keys(troops).forEach(key=>{
                    pop+=troops[key]*troopsPop[key]
                })
                labelName=pop
                if(list[i].hasSupportSnipe==true){
                    headerNoble="#034a2f"
                }
                type_attack=`https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/${type_attack}`


            }else{
                //colore nobles
                if(labelName.includes("snob")){
                    headerNoble="#3f0000"//red
                    titleColorNoble="#4dff4d"//green
                }
                if(labelName.includes("snob") && tribemates.includes(list[i].player_origin_name)){
                    headerNoble="#720000"//lighter red
                    titleColorNoble="#4dff4d"//green
                }

                //modify type_attack, small,medium,large
                if(type_attack=="def"){
                    type_attack=`https://img.icons8.com/fluent/16/000000/d.png`
                }
                else{
                    type_attack=`https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/${type_attack}`
                }


            }

            // console.log(list[i].labelName)
            let arrived=new Date(list[i].landing_time).getTime()  
            if(arrived>date_current){
                let date=list[i].landing_time.split(" ")[0]
                let time=list[i].landing_time.split(" ")[1].split(":")
                let milisec=time.pop()
                time=time.join(":")

                html_incomings+=`
                    <tr style="white-space:nowrap;" >
                        <td  style="text-align:center; width:auto; background-color:${headerNoble}">
                            <center style="margin:0px;padding:0px"><font color="${titleColor}"><img src="${type_attack}"> </font></center>
                        </td> 
                        <td  style="text-align:center; width:auto; background-color:${headerNoble}">
                           <center style="margin:0px;padding:0px"><font color="${titleColor}">${labelName}</font></center>
                        </td> 
                        <td style="text-align:center; width:auto; background-color:${headerNoble}">
                            <a href="${game_data.link_base_pure}info_village&id=${villageId}"style="margin:0px;padding:0px"><center><font color="${titleColor}">${list[i].coord_destination}</font></center></a>
                        </td>
                        <td style="text-align:center; width:auto; background-color:${headerNoble}">
                            <a href="${game_data.link_base_pure}info_player&id=${playerId}"style="margin:0px;padding:0px"><center><font color="${titleColor}">${playerName}</font></center></a>
                        </td>
                        <td style="text-align:center; width:auto; background-color:${headerNoble}">
                            <a href="${game_data.link_base_pure}info_village&id=${list[i].coord_origin_id}"style="margin:0px;padding:0px"><center><font color="${titleColor}">${list[i].coord_origin}</font></center></a>
                        </td>
                        <td style="text-align:center; width:auto; background-color:${headerNoble}">
                            <a href="${game_data.link_base_pure}info_player&id=${list[i].player_origin_id}" style="margin:0px;padding:0px"><center><font color="${titleColor}">${list[i].player_origin_name}</font></center></a>
                        </td>
                        <td style="text-align:center; width:auto; background-color:${headerNoble}">
                            <center style="margin:0px;padding:0px"><font color="${titleColor}">${date} <b>${time} <font color="${titleColorNoble}"> ${milisec}</font></b> </font></center>
                        </td>   
                        <td style="text-align:center; width:auto; background-color:${headerNoble}" >
                            <center style="margin:0px;padding:0px"><font color="${titleColor}" >${convertBuildTime(arrived-date_current)}</font></center>
                        </td>    
                        
                    </tr>
                `
            }
        }
        html_incomings+="</tbody>"
        // console.log(html_incomings)
        return html_incomings
}
{/* <td date-time=${arrived} class="counterTime"></td> */}


/////////////////////////////////////////////////////////////////create table for settings//////////////////////////////////////////////////////
function createTableSettings(){
    let html_table=`
    <center>
    <table id="table_settings"  border="1" style="width: 40%;background-color:${backgroundColor};border-color:${borderColor};border-spacing:2px;border-collapse:separate;">
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <input type="checkbox"   value="hide_ignored">
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="2">
                <font style="margin:5px" color="${titleColor}">hide ignored attacks/support</font>
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <input type="checkbox"   value="hide_supports">
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="2">
                <font style="margin:5px" color="${titleColor}">hide supports</font>
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <input type="checkbox"   value="hide_further_attacks">
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <font style="margin:5px" color="${titleColor}">hide attacks further than(hours) </font>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <input type="number" style="text-align:center;" id="settings_further" min="0" max="200" placeholder="100">
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <input type="checkbox"  value="hide_closer_attacks">
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <font style="margin:5px" color="${titleColor}">hide attacks closer than(hours) </font>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <input type="number" style="text-align:center;" id="settings_closer" min="0" max="200" placeholder="20">
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="2">
                <font style="margin:5px" color="${titleColor}">snipe has(pop) </font>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <input type="number" style="text-align:center;" id="settings_pop" min="0" max="20000" value="1000" placeholder="1000">
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="2">
                <font style="margin:5px" color="${titleColor}">small attack has less than(pop) </font>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <input type="number" style="text-align:center;" id="settings_small_attack" min="0" max="20000" value="5000" placeholder="5000">
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="2">
                <font style="margin:5px" color="${titleColor}">medium attack has less than(pop) </font>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <input type="number" style="text-align:center;" id="settings_medium_attack" min="0" max="20000" value="10000" placeholder="10000">
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="2">
                <font style="margin:5px" color="${titleColor}">fangs has(catapults) </font>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <input type="number" style="text-align:center;" id="settings_fang_cat" min="0" max="20000"  value="50" placeholder="100" disabled>
            </td>
        </tr>



    </table>

    </div></center>
    `

    if(document.getElementById("table_settings")==null)
        document.getElementById("div_settings").innerHTML=html_table
    else{
        $("#div_rank_attacker").hide()
        $("#div_rank_defender").hide()
        $("#div_upload_time").hide()
        $("#div_get_coords").hide(500)
        $("#div_settings").toggle(500)
    }    


    //initialize settings only if it's visible

    if(localStorage.getItem(game_data.world+"save_settings")!=null ){
        let list_checkbox=JSON.parse(localStorage.getItem(game_data.world+"save_settings"))[0]

        $('#div_settings input[type=checkbox], #table_select_info input[type=checkbox]').each(function (index,elem) {
            this.checked=list_checkbox[index]
            // console.log(elem.value)
        });

        let list_input=JSON.parse(localStorage.getItem(game_data.world+"save_settings"))[1]
        $('#div_settings input[type=number]').each(function (index,elem) {
            // var checked = this.checked
            this.value=list_input[index]
        });

        let value_radio=JSON.parse(localStorage.getItem(game_data.world+"save_settings"))[2]
        $(`input[name='type_info'][value='${value_radio}'`).attr("checked",true)

    }



    //save settings
    $("#div_settings input[type=checkbox],#div_settings input[type=number], input[name='type_info'],#table_select_info input[type=checkbox]").on("mouseup input",()=>{
        console.log("save")
        let list_checkbox=[]
        let list_input=[]
        //save checkbox
        $('#div_settings input[type=checkbox], #table_select_info input[type=checkbox]').each(function () {
            var checked = this.checked
            list_checkbox.push(checked)
        });
        //save inputs
        $('#div_settings input[type=number] ').each(function () {
            // var checked = this.checked
            var value=this.value
            // console.log(value)
            list_input.push(value)
        });
        //save radio button
        let value_radio=$("input[name='type_info']:checked").val()



        let list_final=[list_checkbox,list_input,value_radio]
        localStorage.setItem(game_data.world+"save_settings",JSON.stringify(list_final))

    })


    $("#btn_apply").on("click",()=>{
        $("#div_container_view").remove();
        viewSupport()
    })
    $("#btn_clear_memory").on("click",()=>{
        localStorage.removeItem(game_data.world+"map_exist_support")
        UI.SuccessMessage("local storage is cleared",1000)
    })
   
}

/////////////////////////////////////////////////////////////////create table ranking atackers//////////////////////////////////////////////////////

function createTableRankingAttackers(map_ranking){

    
    let html=`
    <center>
    <div style="height:400px;overflow: auto">
                <table id="table_rank"  border="1" style="width: 60%;background-color:${backgroundColor};border-color:${borderColor}">
                <tr>
                    <td colspan = "6" style="text-align:left; width:auto; background-color:${headerColor};color:${titleColor};padding:5px">
                        Using data from last 7 days
                    </td>
                </tr>
                <tr>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><font  color="${titleColor}">nr</font></center>
                    </td>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><font  color="${titleColor}">player name</font></center>
                    </td>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><a href="#" id="sort_fakes_att"><font  color="${titleColor}">fakes</font><a/></center>
                    </td>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><a href="#" id="sort_nukes_att"><font color="${titleColor}">nukes</font><a/></center>
                    </td>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><a href="#" id="sort_fangs_att"><font  color="${titleColor}">fangs</font><a/></center>
                    </td>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><a href="#" id="sort_nobles_att"><font  color="${titleColor}">nobles</font><a/></center>
                    </td>
                </tr>`

    Array.from(map_ranking.keys()).forEach((key,index)=>{
        let obj_attacks=map_ranking.get(key)
        html+=`
            <tr>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${index+1}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${obj_attacks.player_origin_name}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${obj_attacks.nr_fakes}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${obj_attacks.nr_nukes}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${obj_attacks.nr_fangs}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${obj_attacks.nrNobles}</font></center>
                </td>
            </tr>
        
        `
    })
    html+=`
    </table></div></center>`
    if(document.getElementById("div_rank_attacker").children.length==0 ){
        document.getElementById("div_rank_attacker").innerHTML=html
        console.log("initialize rank attacker")
    }
    else{
        $("#div_settings").hide()
        $("#div_rank_defender").hide()
        $("#div_upload_time").hide()
        $("#div_get_coords").hide(500)
        $("#div_rank_attacker").toggle(500)
    }



    $("#sort_fakes_att").off("click")
    $("#sort_nukes_att").off("click")
    $("#sort_fangs_att").off("click")
    $("#sort_nobles_att").off("click")

    //sort by nr fakes
    $("#sort_fakes_att").on("click",()=>{
        map_ranking = new Map([...map_ranking.entries()].sort((o1,o2)=>{
            return (o1[1].nr_fakes>o2[1].nr_fakes)?-1:(o1[1].nr_fakes<o2[1].nr_fakes)?1:0
        }))
        document.getElementById("div_rank_attacker").innerHTML=""
        createTableRankingAttackers(map_ranking)
    })
    //sort by nr nukes
    $("#sort_nukes_att").on("click",()=>{
        map_ranking = new Map([...map_ranking.entries()].sort((o1,o2)=>{
            return (o1[1].nr_nukes>o2[1].nr_nukes)?-1:(o1[1].nr_nukes<o2[1].nr_nukes)?1:0
        }))
        console.log("sort by nukes")
        document.getElementById("div_rank_attacker").innerHTML=""
        createTableRankingAttackers(map_ranking)
    })
    //sort by nr fangs
    $("#sort_fangs_att").on("click",()=>{
        map_ranking = new Map([...map_ranking.entries()].sort((o1,o2)=>{
            return (o1[1].nr_fangs>o2[1].nr_fangs)?-1:(o1[1].nr_fangs<o2[1].nr_fangs)?1:0
        }))
        console.log("sort by fangs")
        document.getElementById("div_rank_attacker").innerHTML=""
        createTableRankingAttackers(map_ranking)
    })
    //sort by nr nobles
    $("#sort_nobles_att").on("click",()=>{
        map_ranking = new Map([...map_ranking.entries()].sort((o1,o2)=>{
            return (o1[1].nrNobles>o2[1].nrNobles)?-1:(o1[1].nrNobles<o2[1].nrNobles)?1:0
        }))
        console.log("sort by nobles")
        document.getElementById("div_rank_attacker").innerHTML=""
        createTableRankingAttackers(map_ranking)
    })


}


/////////////////////////////////////////////////////////////////create table ranking defenders//////////////////////////////////////////////////////

function createTableRankingDefenders(map_ranking){

    
    let html=`
        <center>
            <div style="height:400px;overflow: auto">
                <table id="table_rank"  border="1" style="width: 60%;background-color:${backgroundColor};border-color:${borderColor}">
                <tr>
                    <td colspan = "6" style="text-align:left; width:auto; background-color:${headerColor};color:${titleColor};padding:5px">
                        Using data from last 7 days
                    </td>
                </tr>
                <tr>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><font  color="${titleColor}">nr</font></center>
                    </td>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><font  color="${titleColor}">player name</font></center>
                    </td>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><a href="#" id="sort_fakes_def"><font  color="${titleColor}">fakes</font><a/></center>
                    </td>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><a href="#" id="sort_nukes_def"><font color="${titleColor}">nukes</font><a/></center>
                    </td>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><a href="#" id="sort_fangs_def"><font  color="${titleColor}">fangs</font><a/></center>
                    </td>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><a href="#" id="sort_nobles_def"><font  color="${titleColor}">nobles</font><a/></center>
                    </td>
                </tr>`

    Array.from(map_ranking.keys()).forEach((key,index)=>{
        let obj_attacks=map_ranking.get(key)
        html+=`
            <tr>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${index+1}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${obj_attacks.player_origin_name}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${obj_attacks.nr_fakes}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${obj_attacks.nr_nukes}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${obj_attacks.nr_fangs}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${obj_attacks.nrNobles}</font></center>
                </td>
            </tr>
        
        `
    })
    html+=`
    </table></div></center>`
    if(document.getElementById("div_rank_defender").children.length==0 ){
        document.getElementById("div_rank_defender").innerHTML=html
        console.log("initialize rank defender")
    }
    else{
        $("#div_settings").hide()
        $("#div_rank_attacker").hide()
        $("#div_upload_time").hide()
        $("#div_get_coords").hide(500)
        $("#div_rank_defender").toggle(500)
    }



    $("#sort_fakes_def").off("click")
    $("#sort_nukes_def").off("click")
    $("#sort_fangs_def").off("click")
    $("#sort_nobles_def").off("click")

    //sort by nr fakes
    $("#sort_fakes_def").on("click",()=>{
        map_ranking = new Map([...map_ranking.entries()].sort((o1,o2)=>{
            return (o1[1].nr_fakes>o2[1].nr_fakes)?-1:(o1[1].nr_fakes<o2[1].nr_fakes)?1:0
        }))
        document.getElementById("div_rank_defender").innerHTML=""
        createTableRankingDefenders(map_ranking)
    })
    //sort by nr nukes
    $("#sort_nukes_def").on("click",()=>{
        map_ranking = new Map([...map_ranking.entries()].sort((o1,o2)=>{
            return (o1[1].nr_nukes>o2[1].nr_nukes)?-1:(o1[1].nr_nukes<o2[1].nr_nukes)?1:0
        }))
        console.log("sort by nukes")
        document.getElementById("div_rank_defender").innerHTML=""
        createTableRankingDefenders(map_ranking)
    })
    //sort by nr fangs
    $("#sort_fangs_def").on("click",()=>{
        map_ranking = new Map([...map_ranking.entries()].sort((o1,o2)=>{
            return (o1[1].nr_fangs>o2[1].nr_fangs)?-1:(o1[1].nr_fangs<o2[1].nr_fangs)?1:0
        }))
        console.log("sort by fangs")
        document.getElementById("div_rank_defender").innerHTML=""
        createTableRankingDefenders(map_ranking)
    })
    //sort by nr nobles
    $("#sort_nobles_def").on("click",()=>{
        map_ranking = new Map([...map_ranking.entries()].sort((o1,o2)=>{
            return (o1[1].nrNobles>o2[1].nrNobles)?-1:(o1[1].nrNobles<o2[1].nrNobles)?1:0
        }))
        console.log("sort by nobles")
        document.getElementById("div_rank_defender").innerHTML=""
        createTableRankingDefenders(map_ranking)
    })


}


/////////////////////////////////////////////////////////////////create table upload time//////////////////////////////////////////////////////

function createTableUploadTime(map_upload_time){

    
    let html=`
        <center>
            <div style="height:400px;overflow: auto">
                <table id="table_rank"  border="1" style="width: 80%;background-color:${backgroundColor};border-color:${borderColor}">
                <tr>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><font  color="${titleColor}">nr</font></center>
                    </td>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><font  color="${titleColor}">player name</font></center>
                    </td>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><a href="#" id="sort_reports"><font  color="${titleColor}">Reports</font><a/></center>
                    </td>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><a href="#" id="sort_incomings"><font color="${titleColor}">Incomings</font><a/></center>
                    </td>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><a href="#" id="sort_commands"><font  color="${titleColor}">Commands</font><a/></center>
                    </td>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:10px" ><a href="#" id="sort_troops"><font  color="${titleColor}">Troops</font><a/></center>
                    </td>

                </tr>`

    Array.from(map_upload_time.keys()).forEach((key,index)=>{
        let obj_upload=map_upload_time.get(key)
        html+=`
            <tr>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${index+1}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${obj_upload.name}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${convertDate(obj_upload.report_date)}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${convertDate(obj_upload.incoming_date)}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${convertDate(obj_upload.command_date)}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center><font style="margin:0px" color="${titleColor}">${convertDate(obj_upload.troops_date)}</font></center>
                </td>
            </tr>
        
        `
    })
    html+=`
    </table></div></center>`
    if(document.getElementById("div_upload_time").children.length==0 ){
        document.getElementById("div_upload_time").innerHTML=html
        console.log("initialize table upload time")
    }
    else{
        $("#div_settings").hide()
        $("#div_rank_defender").hide()
        $("#div_rank_attacker").hide()
        $("#div_get_coords").hide(500)
        $("#div_upload_time").toggle(500)
        console.log("rank attacker")
    }


    $("#sort_reports").off("click")
    $("#sort_incomings").off("click")
    $("#sort_commands").off("click")

    //sort by nr date upload reports
    $("#sort_reports").on("click",()=>{
        map_upload_time = new Map([...map_upload_time.entries()].sort((o1,o2)=>{
            return (new Date(o1[1].report_date).getTime() > new Date(o2[1].report_date).getTime())?-1:
            (new Date(o1[1].report_date).getTime() < new Date(o2[1].report_date).getTime())?1:0
        }))
        console.log("sort by report")
        document.getElementById("div_upload_time").innerHTML=""
        createTableUploadTime(map_upload_time)
    })
    //sort by nr date upload incomings
    $("#sort_incomings").on("click",()=>{
        map_upload_time = new Map([...map_upload_time.entries()].sort((o1,o2)=>{
            return (new Date(o1[1].incoming_date).getTime() > new Date(o2[1].incoming_date).getTime())?-1:
            (new Date(o1[1].incoming_date).getTime() < new Date(o2[1].incoming_date).getTime())?1:0
        }))
        console.log("sort by incomings")
        document.getElementById("div_upload_time").innerHTML=""
        createTableUploadTime(map_upload_time)
    })
    //sort by nr date upload commands
    $("#sort_commands").on("click",()=>{
        map_upload_time = new Map([...map_upload_time.entries()].sort((o1,o2)=>{
            return (new Date(o1[1].command_date).getTime() > new Date(o2[1].command_date).getTime())?-1:
            (new Date(o1[1].command_date).getTime() < new Date(o2[1].command_date).getTime())?1:0
        }))
        console.log("sort by commands")
        document.getElementById("div_upload_time").innerHTML=""
        createTableUploadTime(map_upload_time)
    })

    $("#sort_troops").on("click",()=>{
        map_upload_time = new Map([...map_upload_time.entries()].sort((o1,o2)=>{
            return (new Date(o1[1].troops_date).getTime() > new Date(o2[1].troops_date).getTime())?-1:
            (new Date(o1[1].troops_date).getTime() < new Date(o2[1].troops_date).getTime())?1:0
        }))
        console.log("sort by troops")
        document.getElementById("div_upload_time").innerHTML=""
        createTableUploadTime(map_upload_time)
    })

}

function parseDate(time){
    let date=new Date(time)

    let year=date.getFullYear();
    let month=("00"+(date.getMonth()+1)).slice(-2)
    let day=("00"+date.getDate()).slice(-2)
    let hours=("00"+date.getHours()).slice(-2)
    let minutes=("00"+date.getMinutes()).slice(-2)
    let seconds=("00"+date.getSeconds()).slice(-2)
    let result=`${month}/${day}/${year} ${hours}:${minutes}:${seconds}`
    return result
}

////////////////////////////////////////////////sort by attacks,supports,nobles,snipes,recaps////////////////////////////////////////////////////////

function sortInfoIncomings(map_playerId,mapVillages){
    //////////////////////////////////////////////////////////////sort by attacks///////////////////////////////////////////
    document.getElementById("sort_by_attacks").addEventListener("click",()=>{
        map_playerId= new Map([...map_playerId.entries()].sort((o1,o2) =>{
            return (o1[1].nr_attacks_total>o2[1].nr_attacks_total)?-1:(o1[1].nr_attacks_total<o2[1].nr_attacks_total)?1:0;
        }))
        Array.from(map_playerId.keys()).forEach(key=>{
            let obj=map_playerId.get(key)
            obj.list_coords.sort((o1,o2)=>{
                return (o1.nrAttacks>o2.nrAttacks)?-1:(o1.nrAttacks<o2.nrAttacks)?1:0
            })
            map_playerId.set(key,obj)
        })
        document.getElementById("tbody_player").remove()
        createTablePlayers(map_playerId,mapVillages)
    })
    //////////////////////////////////////////////////////////////sort by supports///////////////////////////////////////////

    document.getElementById("sort_by_supports").addEventListener("click",()=>{
        map_playerId= new Map([...map_playerId.entries()].sort((o1,o2) =>{
            return (o1[1].nr_supports_total>o2[1].nr_supports_total)?-1:(o1[1].nr_supports_total<o2[1].nr_supports_total)?1:0;
        }))
        Array.from(map_playerId.keys()).forEach(key=>{
            let obj=map_playerId.get(key)
            obj.list_coords.sort((o1,o2)=>{
                return (o1.nr_supports>o2.nr_supports)?-1:(o1.nr_supports<o2.nr_supports)?1:0
            })
            map_playerId.set(key,obj)
        })
        document.getElementById("tbody_player").remove()
        createTablePlayers(map_playerId,mapVillages)

    })
    //////////////////////////////////////////////////////////////sort by nobles///////////////////////////////////////////
    document.getElementById("sort_by_nobles").addEventListener("click",()=>{
        map_playerId= new Map([...map_playerId.entries()].sort((o1,o2) =>{
            return (o1[1].nr_nobles_total>o2[1].nr_nobles_total)?-1:(o1[1].nr_nobles_total<o2[1].nr_nobles_total)?1:0;
        }))
        Array.from(map_playerId.keys()).forEach(key=>{
            let obj=map_playerId.get(key)
            obj.list_coords.sort((o1,o2)=>{
                return (o1.nrNobles>o2.nrNobles)?-1:(o1.nrNobles<o2.nrNobles)?1:0
            })
            map_playerId.set(key,obj)
        })
        document.getElementById("tbody_player").remove()
        createTablePlayers(map_playerId,mapVillages)
    })
    //////////////////////////////////////////////////////////////sort by snipes///////////////////////////////////////////
    
    document.getElementById("sort_by_snipes").addEventListener("click",()=>{
        map_playerId= new Map([...map_playerId.entries()].sort((o1,o2) =>{
            return (o1[1].nr_snipe_total>o2[1].nr_snipe_total)?-1:(o1[1].nr_snipe_total<o2[1].nr_snipe_total)?1:0;
        }))
        Array.from(map_playerId.keys()).forEach(key=>{
            let obj=map_playerId.get(key)
            obj.list_coords.sort((o1,o2)=>{
                return (o1.nrSnipes>o2.nrSnipes)?-1:(o1.nrSnipes<o2.nrSnipes)?1:(o1.nrSniped>o2.nrSniped)?-1:(o1.nrSniped<o2.nrSniped)?1:0;
            })
            map_playerId.set(key,obj)
        })
        document.getElementById("tbody_player").remove()
        createTablePlayers(map_playerId,mapVillages)
    })
    //////////////////////////////////////////////////////////////sort by recaps///////////////////////////////////////////
    document.getElementById("sort_by_recaps").addEventListener("click",()=>{
        map_playerId= new Map([...map_playerId.entries()].sort((o1,o2) =>{
            return (o1[1].nr_recap_total>o2[1].nr_recap_total)?-1:(o1[1].nr_recap_total<o2[1].nr_recap_total)?1:0;
        }))
        Array.from(map_playerId.keys()).forEach(key=>{
            let obj=map_playerId.get(key)
            obj.list_coords.sort((o1,o2)=>{
                return (o1.nrRecaps>o2.nrRecaps)?-1:(o1.nrRecaps<o2.nrRecaps)?1:(o1.nrRecaped>o2.nrRecaped)?-1:(o1.nrRecaped<o2.nrRecaped)?1:0
            })
            map_playerId.set(key,obj)
        })
        document.getElementById("tbody_player").remove()
        createTablePlayers(map_playerId,mapVillages)
    })

}



/////////////////////////////////////////////////////////////////create table for settings//////////////////////////////////////////////////////
function createTableGetCoords(mapVillages){
    let html_table=`
    <center>
    <table id="table_get_coords"  border="1" style="width: 70%;background-color:${backgroundColor};border-color:${borderColor};border-spacing:2px;border-collapse:separate;">
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <center><font style="margin:5px" color="${titleColor}">Players:</font></center>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <input type="text" style="text-align:left;width:98%;font-size:18px" id="input_players"  placeholder="name player1, name player2, name player3">
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <center><font style="margin:5px" color="${titleColor}">Tribes:</font></center>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <input type="text" style="text-align:left;width:98%;font-size:18px" id="input_tribes"  placeholder="name tribe1, name tribe2, name tribe3">
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <center><font style="margin:5px" color="${titleColor}">Continents:</font></center>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <input type="text" style="text-align:left;width:98%;font-size:18px" id="input_continents"  placeholder="54,55,65">
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" ">
                <center><font style="margin:5px" color="${titleColor}">Min coord:</font></center>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <div style="display:flex">
                    <div> <input type="number" style="text-align:center;font-size:18px" id="input_x_min" min="0" max="1000" placeholder="X"></div>
                    <div> <input type="number" style="text-align:center;font-size:18px" id="input_y_min" min="0" max="1000" placeholder="Y"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <center><font style="margin:5px" color="${titleColor}">Max coord:</font></center>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <div style="display:flex">
                    <div> <input type="number" style="text-align:center;font-size:18px" id="input_x_max" min="0" max="1000" placeholder="X"></div>
                    <div> <input type="number" style="text-align:center;font-size:18px" id="input_y_max" min="0" max="1000" placeholder="Y"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <center><font style="margin:5px" color="${titleColor}">Dist from center:</font></center>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <div style="display:flex">
                    <div> <input type="number" style="text-align:center;font-size:18px" id="input_radius" min="0" max="1000" placeholder="R"></div>
                    <div> <font style="margin:5px" color="${titleColor}">fields from:</font></div>
                    <div> <input type="number" style="text-align:center;font-size:18px" id="input_center_x" min="0" max="1000" placeholder="X"></div>
                    <div> <input type="number" style="text-align:center;font-size:18px" id="input_center_y" min="0" max="1000" placeholder="Y"></div>
                </div>
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="2">
                <center style="margin:10px"><input class="btn" type="button" id="btn_extract_coord"  value="extract_coords"></center>
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="2">
                <font id="nr_coords" style="margin:10px;margin-left:100px;font-size:15px" color="${titleColor}">nr coords:(0)</font>
                <center style="margin:10px"><textarea id="input_get_coords" cols="60" rows="20" ></textarea><center>
            </td>
        </tr>

    </table>

    </div></center>
    `

    if(document.getElementById("table_get_coords")==null)
        document.getElementById("div_get_coords").innerHTML=html_table
    else{
        $("#div_rank_attacker").hide()
        $("#div_rank_defender").hide()
        $("#div_upload_time").hide()
        $("#div_settings").hide(500)
        $("#div_get_coords").toggle(500)
    }    


    // //initialize settings only if it's visible

    if(localStorage.getItem(game_data.world+"save_settings")!=null ){
        let list_checkbox=JSON.parse(localStorage.getItem(game_data.world+"save_settings"))[0]

        $('#div_settings input[type=checkbox], #div_get_coords input[type=checkbox]').each(function (index,elem) {
            this.checked=list_checkbox[index]
            // console.log(elem.value)
        });

        let list_input=JSON.parse(localStorage.getItem(game_data.world+"save_settings"))[1]
        $('#div_settings input[type=number], #div_get_coords input[type=text],#div_get_coords input[type=number]').each(function (index,elem) {
            // var checked = this.checked
            this.value=list_input[index]
        });

        let value_radio=JSON.parse(localStorage.getItem(game_data.world+"save_settings"))[2]
        $(`input[name='type_info'][value='${value_radio}'`).attr("checked",true)

    }



    //save settings
    $("#div_settings input[type=checkbox],#div_settings input[type=number], input[name='type_info'], #div_get_coords input[type=checkbox], #div_get_coords input[type=text], #div_get_coords input[type=number]").on("mouseup input",()=>{
        console.log("save")
        let list_checkbox=[]
        let list_input=[]
        //save checkbox
        $('#div_settings input[type=checkbox], #div_get_coords input[type=checkbox]').each(function () {
            var checked = this.checked
            list_checkbox.push(checked)
        });
        //save inputs
        $('#div_settings input[type=number], #div_get_coords input[type=text], #div_get_coords input[type=number]').each(function () {
            // var checked = this.checked
            var value=this.value
            // console.log(value)
            list_input.push(value)
        });
        //save radio button
        let value_radio=$("input[name='type_info']:checked").val()



        let list_final=[list_checkbox,list_input,value_radio]
        localStorage.setItem(game_data.world+"save_settings",JSON.stringify(list_final))

    })


    $("#btn_extract_coord").off("click")
    $("#btn_extract_coord").on("click",()=>{
        //create the logic for extracting coords
        let playersName= Array.from(document.getElementById("input_players").value.toLowerCase().split(",")).filter(item => item);
        let tribesName= Array.from(document.getElementById("input_tribes").value.toLowerCase().split(",")).filter(item => item)
        let continents= Array.from(document.getElementById("input_continents").value.split(",")).filter(item => item)
        let xMin= parseInt(document.getElementById("input_x_min").value)
        let yMin= parseInt(document.getElementById("input_y_min").value)
        let xMax= parseInt(document.getElementById("input_x_max").value)
        let yMax= parseInt(document.getElementById("input_y_max").value)

        let radius= parseInt(document.getElementById("input_radius").value)
        let xCenter= parseInt(document.getElementById("input_center_x").value)
        let yCenter= parseInt(document.getElementById("input_center_y").value)


        console.log(mapVillages)

        let result_coords=[]


        Array.from(mapVillages.keys()).forEach(coord=>{
            try {
                let obj=mapVillages.get(coord)
                let isValid=true



                // console.log(obj)
                //check for players names
                if(playersName.length>0){
                    let found=false
                    for(let j=0;j<playersName.length;j++){
                        if(playersName[j].trim() == obj.playerName.toLowerCase()){//let coord get through next filter
                            found=true
                            break;
                        }
                    }
                    if(found==false)
                        isValid=false
                }
                
                //check for tribes names
                if(tribesName.length>0){
                    let found=false
                    for(let j=0;j<tribesName.length;j++){
                        if(tribesName[j].trim() == obj.tribeName.toLowerCase()){//let coord get through next filter
                            found=true
                            break;
                        }
                    }
                    if(found==false)
                        isValid=false 
                }
                
                //check for continents
                if(continents.length>0){
                    let found=false
                    for(let j=0;j<continents.length;j++){
                        if(continents[j].trim() == getContinent(coord)){//let coord get through next filter
                            found=true
                            break;
                        }
                    }
                    if(found==false)
                        isValid=false 
                }
                
  
                let[x,y]=coord.split("|")
                //for x min
                if(Number.isNaN(xMin)==false && isValid==true){
                    isValid = (x >= xMin)?true:false
                }
                //for y min
                if(Number.isNaN(yMin)==false && isValid==true){
                    isValid = (y >= yMin)?true:false
                }
                //for x max
                if(Number.isNaN(xMax)==false && isValid==true){
                    isValid = (x <= xMax)?true:false
                }
                //for y max
                if(Number.isNaN(yMax)==false && isValid==true){
                    isValid = (y <= yMax)?true:false
                }


                if(Number.isNaN(radius)==false && Number.isNaN(xCenter)==false && Number.isNaN(yCenter)==false && isValid==true){
                    isValid=(calcDistance( xCenter+"|"+yCenter, coord)<radius)?true:false
                }



                if(isValid==true){
                    result_coords.push(coord)
                } 

            } catch (error) {}
            
        })
        console.log(result_coords)
        document.getElementById("input_get_coords").value=result_coords.join(" ")
        document.getElementById("nr_coords").innerHTML=`nr coords:(${result_coords.length})`

    })

    

 
    // console.log(mapVillages)
}

function getContinent(coord){
    let [x,y]=Array.from(coord.split("|")).map(e=>parseInt(e))
    for(let i=0;i<2000;i+=100){//x axes
        for(let j=0;j<2000;j+=100){//y axes
            if(i>=x && x<i+100   &&    j>=y && y<j+100){
                let nr_continent= parseInt(y/100)+""+parseInt(x/100)
                return nr_continent
            }
        }
    }
}



function insertChartLibrary(){
    return new Promise((resolve,reject)=>{


        let start=new Date().getTime()
        let script = document.createElement('script');
        script.type="text/javascript"
        script.src="https://cdn.anychart.com/releases/8.9.0/js/anychart-base.min.js"
        script.onload = function () {
            let stop=new Date().getTime()
            console.log(`insert chart library in ${stop-start} ms`)
            resolve("done")
        };
        document.head.appendChild(script);
    })
}


function createChart(list_points,name_container){
    // create a chart
    let chart = anychart.area();

        // create a line series and set the data
    let series = chart.column(list_points);



    // set the container id
    chart.container(name_container);
    chart.tooltip().format("incs: {%value}");

    chart.xAxis().labels().rotation(-45);
    chart.yAxis().labels().format(function() {
    let value = this.value;
        // limit the number of symbols to 3
        value = value+" incs";
        return value
    })


    // initiate drawing the chart
    chart.draw();
    document.getElementsByClassName("anychart-credits")[0].remove()


}

function getNameTroops() { //Get troops name
    return new Promise(async(resolve,reject)=>{
        let obj
        if (localStorage.getItem(game_data.world+"nameTroops") !== null) {
            obj=JSON.parse(localStorage.getItem(game_data.world+"nameTroops"))
            console.log("nameTroops already exist")
            resolve(obj)
        }
        else { //Get data from xml and save it in localStorage to avoid excessive XML requests to server
                let currentHtml=document.body.innerHTML
                document.body.innerHTML = await ajaxGet(game_data.link_base_pure+"place") //go to rally point
                
                let obj={}
                Array.from($("#command-data-form .unit_link")).forEach(elem=>{
                    let value=$(elem).find("img").attr("title")
                    let name=$(elem).attr("data-unit")
                    obj[name]=value
                })
                document.body.innerHTML=currentHtml
                localStorage.setItem(game_data.world+"nameTroops",JSON.stringify(obj));
                console.log("save nameTroops")
            resolve(obj)
        }
    })
}


function showIncomings(list){

    let serverTime=document.getElementById("serverTime").innerText
    let serverDate=document.getElementById("serverDate").innerText.split("/")
    serverDate=serverDate[1]+"/"+serverDate[0]+"/"+serverDate[2]
    let date_current=new Date(serverDate+" "+serverTime).getTime()


    let html_incomings=`
    <div id="div_container_incs" class="ui-widget-content div_remove" style="width:900px;background-color:${backgroundColor};cursor:move;z-index:50;">
    <div style="position:relative;top:10px;left: 860px;display:flex">
        <div  class="close-btn"   ><a href="#" onclick="closeWindow()"><b><font color="${titleColor}">X</font></b></a></div>
    </div>
    <br>
    <center><div id="table_results" style="height:800px;width:900px;overflow:auto">
    <table id="table_stats"  border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor};">
        <tr style=" position: sticky;top: 0;z-index: 10;">
            <td colspan="2" style="text-align:center; width:auto; background-color:${headerColorCoords}">
                <center style="margin:10px"><font color="${titleColor}">destination</font></center>
            </td>    
            <td colspan="2" style="text-align:center; width:auto; background-color:${headerColorCoords}">
               <center style="margin:10px"><font color="${titleColor}">origin </font></center>
            </td>    
            <td  style="text-align:center; width:auto; background-color:${headerColorCoords}">
                <center style="margin:10px"><font color="${titleColor}">Launch time </font></center>
            </td>    
            <td  style="text-align:center; width:auto; background-color:${headerColorCoords}">
                <center style="margin:10px"><font color="${titleColor}">arrival time </font></center>
            </td>    
            <td style="text-align:center; width:auto; background-color:${headerColorCoords}">
                <center style="margin:10px"><font color="${titleColor}">type </font></center>
            </td>    
            <td style="text-align:center; width:auto; background-color:${headerColorCoords}">
                <center style="margin:10px"><font color="${titleColor}">arrives in </font></center>
            </td>    



        </tr>`


        for(let i=0;i<list.length;i++){

            let arrived=new Date(list[i].date_land).getTime()  
            let type_attack_landed= (list[i].type_attack_landed !=undefined)?list[i].type_attack_landed:"?"

            let headerColorIncs= (list[i].colorRow == true)?headerColor:getColorDarker(headerColor,50)
                
            
                html_incomings+=`
                    <tr style="white-space:nowrap;" >
                        <td style="text-align:center; width:auto; background-color:${headerColorIncs}">
                            <a href="${game_data.link_base_pure}info_village&id=${list[i].id_coord_def}"style="margin:0px;padding:0px"><center><font color="${titleColor}">${list[i].coord_def}</font></center></a>
                        </td>
                        <td style="text-align:center; width:auto; background-color:${headerColorIncs}">
                            <a href="${game_data.link_base_pure}info_player&id=${list[i].id_player_def}"style="margin:0px;padding:0px"><center><font color="${titleColor}">${list[i].player_def}</font></center></a>
                        </td>
                        <td style="text-align:center; width:auto; background-color:${headerColorIncs}">
                            <a href="${game_data.link_base_pure}info_village&id=${list[i].id_coord_off}"style="margin:0px;padding:0px"><center><font color="${titleColor}">${list[i].coord_off}</font></center></a>
                        </td>
                        <td style="text-align:center; width:auto; background-color:${headerColorIncs}">
                            <a href="${game_data.link_base_pure}info_player&id=${list[i].id_player_off}" style="margin:0px;padding:0px"><center><font color="${titleColor}">${list[i].player_off}</font></center></a>
                        </td>
                        <td style="text-align:center; width:auto; background-color:${headerColorIncs}">
                            <center style="margin:3px;padding:0px"><font color="${titleColor}"> ${list[i].date_launch.split(" ")[0]} <b>${list[i].date_launch.split(" ")[1]}</b>  </font> </center>
                        </td>   
                        <td style="text-align:center; width:auto; background-color:${headerColorIncs}">
                            <center style="margin:3px;padding:0px"><font color="${titleColor}"> ${list[i].date_land.split(" ")[0]} <b>${list[i].date_land.split(" ")[1]}</b>  </font> </center>
                        </td>   
                        <td style="text-align:center; width:auto; background-color:${headerColorIncs}">
                            <center style="margin:3px;padding:0px"><font color="${titleColor}">${type_attack_landed} </font> </center>
                        </td>`   
                
                    if(arrived>date_current){
                        html_incomings+=
                        `<td style="text-align:center; width:auto; background-color:${headerColorIncs}" >
                            <center style="margin:3px;padding:0px"><font color="${titleColor}" date-time=${arrived} class="counterTime1">${convertBuildTime(arrived-date_current)}</font></center>
                        </td>`    
                    }else{
                        html_incomings+=
                        `<td style="text-align:center; width:auto; background-color:${headerColorIncs}" >
                            <center style="margin:3px;padding:0px"><font color="${titleColor}">landed</font></center>
                        </td>`    
                    }   
                    html_incomings+=`</tr>`
                
            
        }
        html_incomings+=`</table></div></center></div>`
        // Dialog.show("content",html_incomings)
        $("#div_container_incs").remove()
        $("#contentContainer").eq(0).prepend(html_incomings);
        $("#mobileContent").eq(0).prepend(html_incomings);
    
       
        $("#div_container_incs").css("position","fixed");
        $("#div_container_incs").draggable();
}


function getColorDarker(hexInput, percent) {
    let hex = hexInput;

    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, "");

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if (hex.length === 3) {
        hex = hex.replace(/(.)/g, "$1$1");
    }

    let r = parseInt(hex.substr(0, 2), 16);
    let g = parseInt(hex.substr(2, 2), 16);
    let b = parseInt(hex.substr(4, 2), 16);

    const calculatedPercent = (100 + percent) / 100;

    r = Math.round(Math.min(255, Math.max(0, r * calculatedPercent)));
    g = Math.round(Math.min(255, Math.max(0, g * calculatedPercent)));
    b = Math.round(Math.min(255, Math.max(0, b * calculatedPercent)));

    return `#${("00"+r.toString(16)).slice(-2).toUpperCase()}${("00"+g.toString(16)).slice(-2).toUpperCase()}${("00"+b.toString(16)).slice(-2).toUpperCase()}`
}

function convertBuildTime(milliseconds){
    let seconds =  parseInt((milliseconds / 1000)) % 60 ;
    let minutes = parseInt(((milliseconds / (1000*60))) % 60);
    let hours   = parseInt(((milliseconds / (1000*60*60))));
    seconds = ("00"+seconds).slice(-2)
    minutes = ("00"+minutes).slice(-2)
    hours = ("000"+hours).slice(-3)

    return hours+":"+minutes+":"+seconds
} 

    

// vault.js ~10664 (SAFE PATCH)
function convertDate(date){

    if (!date || typeof date !== "string") {
        return "";
    }

    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    // If already formatted like "Jan 12 12:30:00"
    if (/^[A-Za-z]{3} \d{1,2}/.test(date)) {
        return date;
    }

    let datePart, timePart;

    // Expected formats:
    // "MM/DD HH:MM:SS"
    // "MM/DD/YYYY HH:MM:SS"
    if (date.includes(" ")) {
        [datePart, timePart] = date.split(" ");
    } else {
        return "";
    }

    if (!datePart || !timePart) {
        return "";
    }

    let parts = datePart.split("/");
    if (parts.length < 2) {
        return "";
    }

    let monthIndex = parseInt(parts[0], 10) - 1;
    let dayIndex = parts[1];

    if (months[monthIndex] === undefined) {
        return "";
    }

    return `${months[monthIndex]} ${dayIndex} ${timePart}`;
}


////////////////////////////////////////////// get commands sharing settings ///////////////////////////////////////

async function getCommandsSharing(){
    return new Promise(async(resolve, reject)=>{
        let savedData = JSON.parse(localStorage.getItem(game_data.world + "commandSharing"))
        let mapResult = null
        if(savedData){
            if(Math.abs(new Date(savedData.timestamp).getTime() - new Date().getTime()) > 48 * 3600 * 1000){
                mapResult = new Map(savedData.mapResult)
            }

        }
        if (mapResult == null){
            
            let commandsSharingHref= game_data.link_base_pure + "settings&mode=command_sharing";
            let data = await ajaxGet(commandsSharingHref);
        
        
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(data, 'text/html');
        
            mapResult = new Map()
            Array.from($(htmlDoc).find("form table tr")).forEach(elem=>{
                let tds = elem.getElementsByTagName("td")
            
                if(tds.length > 0){
                    let playerName = tds[0].innerText
                    let viewCommands = (tds[2].getElementsByTagName("input")[0].checked == true) ? true : false
                    let sharedCommands = false
                    if(tds[2].getElementsByTagName("img").length > 0){
                        if(tds[2].getElementsByTagName("img")[0].src.includes("confirm.png")){
                            sharedCommands = true
                        }
                    }
            
                    if(viewCommands == true && sharedCommands == true){
                        mapResult.set(playerName, true)
                    }
                }
            })
    
            let saveMapResult = Array.from(mapResult.entries())
            localStorage.setItem(game_data.world + "commandSharing",JSON.stringify({
                mapResult: saveMapResult,
                timestamp: new Date()
            }))
        }
        resolve(mapResult)




    })

}

////////////////////////////////////////////// get own info ///////////////////////////////////////


async function getOwnTroopsInfo(){
    return new Promise(async(resolve, reject)=>{
        if(document.getElementsByClassName("info").length>0)
        $(".info").remove()
    
        let troopsHref= game_data.link_base_pure+"overview_villages&mode=units&group=0&page=-1";
    
        console.log(troopsHref)
        let data = await ajaxGet(troopsHref);
    
    
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');
    
        let listHref=[];
        if(htmlDoc.getElementsByClassName("vis")[1].getElementsByTagName("select").length>0){
            Array.from(htmlDoc.getElementsByClassName("vis")[1].getElementsByTagName("select")[0].options).forEach(el=>{
                listHref.push(el.value);
            })
            listHref.pop();
        }
        else if(htmlDoc.getElementsByClassName("paged-nav-item").length>0){
            let arr=Array.from(htmlDoc.getElementsByClassName("paged-nav-item"));
            for(let i=0;i<arr.length;i++)
            listHref.push(arr[i].getAttribute("href"))
        }
        else{
            listHref.push(troopsHref)
    
        }
        console.log(listHref)
        let mapResult = new Map();
        const run = async () => {
            console.log("Starting...");
            for (let i = 0; i < listHref.length; i++) {
                let pageHTML= await ajaxGet(listHref[i])
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(pageHTML, 'text/html');
    
                let tableTroops = Array.from($(htmlDoc).find(".row_a, .row_b"))
    
                //each village has 5 rows with different type of troops
                for(let j=0;j<tableTroops.length;j++){
                    let rows = Array.from($(tableTroops[j]).find("tr"))
                    let coord = $(rows[0]).find(".quickedit-label").text().match(/\d+\|\d+/)[0]

                    let troopsOwn = {}, troopInVillage = {}, troopsOutWards = {},  troopsInTransit = {}, troopsTotal = {}
                    Array.from($(rows[0]).find(".unit-item")).map(elem=> parseInt(elem.innerText)).forEach((elem, index)=>{
                        troopsOwn[game_data.units[index]] = elem
                    })
                    Array.from($(rows[1]).find(".unit-item")).map(elem=> parseInt(elem.innerText)).forEach((elem, index)=>{
                        troopInVillage[game_data.units[index]] = elem
                    })
                    Array.from($(rows[2]).find(".unit-item")).map(elem=> parseInt(elem.innerText)).forEach((elem, index)=>{
                        troopsOutWards[game_data.units[index]] = elem
                    })
                    Array.from($(rows[3]).find(".unit-item")).map(elem=> parseInt(elem.innerText)).forEach((elem, index)=>{
                        troopsInTransit[game_data.units[index]] = elem
                    })
                    Array.from($(rows[4]).find(".unit-item")).map(elem=> parseInt(elem.innerText)).forEach((elem, index)=>{
                        troopsTotal[game_data.units[index]] = elem
                    })
                    // console.log("troopsOwn",troopsOwn)
                    // console.log("troopInVillage",troopInVillage)
                    // console.log("troopsOutWards",troopsOutWards)
                    // console.log("troopsInTransit",troopsInTransit)
                    // console.log("troopsTotal",troopsTotal)
    
                    mapResult.set(coord,{
                        troopsOwn: troopsOwn,
                        troopInVillage: troopInVillage,
                        troopsOutWards: troopsOutWards,
                        troopsInTransit: troopsInTransit,
                        troopsTotal: troopsTotal,
                        playerId: game_data.player.id
                    })
                }
                UI.SuccessMessage(`get link page ${i+1}/${listHref.length}`) 
            }  
        }
        await run();

        resolve(mapResult)


    })

}

async function getVillagesBuildings(){
    return new Promise(async(resolve, reject)=>{
        if(document.getElementsByClassName("info").length>0)
        $(".info").remove()
    
        let buildingHref= game_data.link_base_pure+"overview_villages&mode=buildings&group=0&page=-1";
    
        console.log(buildingHref)
        let data = await ajaxGet(buildingHref);
    
    
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');
    
        let listHref=[];
        if(htmlDoc.getElementsByClassName("vis")[1].getElementsByTagName("select").length>0){
            Array.from(htmlDoc.getElementsByClassName("vis")[1].getElementsByTagName("select")[0].options).forEach(el=>{
                listHref.push(el.value);
            })
            listHref.pop();
        }
        else if(htmlDoc.getElementsByClassName("paged-nav-item").length>0){
            let arr=Array.from(htmlDoc.getElementsByClassName("paged-nav-item"));
            for(let i=0;i<arr.length;i++)
            listHref.push(arr[i].getAttribute("href"))
        }
        else{
            listHref.push(buildingHref)
    
        }
        console.log(listHref)
        let mapResult = new Map();
        const run = async () => {
            console.log("Starting...");
            for (let i = 0; i < listHref.length; i++) {
                let pageHTML= await ajaxGet(listHref[i])
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(pageHTML, 'text/html');
    
                let rows = Array.from($(htmlDoc).find(".row_a, .row_b"))
    
                for(let j=0;j<rows.length;j++){
                    let coord = $(rows[j]).find(".quickedit-label").text().match(/\d+\|\d+/)[0]
                    let wallLvl = parseInt($(rows[j]).find(".b_wall").text())
                    let farmLvl = parseInt($(rows[j]).find(".b_farm").text())
                    wallLvl = (!Number.isNaN(wallLvl)) ? wallLvl : 0
                    farmLvl = (!Number.isNaN(farmLvl)) ? farmLvl : 0

                    mapResult.set(coord,{
                        wallLvl: wallLvl,
                        farmLvl: farmLvl
                    })
                }
                UI.SuccessMessage(`get link page ${i+1}/${listHref.length}`) 
            }  
        }
        await run();

        resolve(mapResult)


    })

}

async function uploadOwnTroops() {

    document.getElementById("progress_troops_home").innerText = "Getting data...";

    // ===========================
    // LOAD DATA FROM SUPABASE
    // ===========================
    const mapVillages = await getInfoVillages();

    let mapTroopsHome = await loadTroopsHomeDB(
        game_data.world,
        game_data.player.ally
    );

    let mapStatus = await loadStatusDB(
        game_data.world,
        game_data.player.ally
    );

    // ===========================
    // GET CURRENT TROOPS
    // ===========================
    let troopsHome = await getOwnTroopsInfo();
    let mapVillagesWall = await getVillagesBuildings();

    troopsHome.forEach((val, coord) => {
        if (mapVillagesWall.has(coord)) {
            val.wallLvl = mapVillagesWall.get(coord).wallLvl;
            val.farmLvl = mapVillagesWall.get(coord).farmLvl;
        }
    });

    // ===========================
    // MERGE TROOPS
    // ===========================
    mapTroopsHome = new Map([...mapTroopsHome, ...troopsHome]);

    // remove villages no longer owned
    mapTroopsHome.forEach((val, coord) => {
        if (mapVillages.has(coord)) {
            if (mapVillages.get(coord).playerId !== val.playerId) {
                mapTroopsHome.delete(coord);
            }
        }
    });

    // ===========================
    // UPDATE STATUS
    // ===========================
    let serverTime = document.getElementById("serverTime").innerText;
    let serverDate = document.getElementById("serverDate").innerText.split("/");
    serverDate = `${serverDate[1]}/${serverDate[0]}/${serverDate[2]}`;
    let date_current = `${serverDate} ${serverTime}`;

    mapStatus.set(game_data.player.id.toString(), {
        name: game_data.player.name,
        troops_date: date_current
    });

    // ===========================
    // SAVE TO SUPABASE
    // ===========================
    for (const [coord, troopsData] of mapTroopsHome.entries()) {
        await saveTroopsHomeDB(
            coord,
            troopsData,
            game_data.world,
            game_data.player.ally
        );
    }

    await saveStatusDB(
        game_data.player.id.toString(),
        mapStatus.get(game_data.player.id.toString()),
        game_data.world,
        game_data.player.ally
    );

    // ===========================
    // UI
    // ===========================
    document.getElementById("progress_troops_home").innerText =
        `${mapTroopsHome.size} coords`;

    UI.SuccessMessage(
        `Troops home uploaded<br>
         Villages: <b>${mapTroopsHome.size}</b>`,
        8000
    );

    return { status: "success" };
}



























