var backgroundColor = "#32313f";
var borderColor = "#3e6147";
var headerColor = "#202825";
var titleColor = "#ffffdf";
var headerColorEven = "#2F4F4F";
 
var headerColorGray = "#474747"
var headerColorCoords = "#4d4d4d"
var headerColorFirstRow = "#666600"
var headerNoble = "#034a2f"
var titleColorNoble = "#4dff4d" //green
var titleColorRed = "#720000"
var speedWorld = getSpeedConstant().worldSpeed;
var speedTroupes = getSpeedConstant().unitSpeed;
 
var heavyPop = 6
 
var speedTroops = {
    spear: 1080 * 1000 / (speedWorld * speedTroupes),
    sword: 1320 * 1000 / (speedWorld * speedTroupes),
    heavy: 660 * 1000 / (speedWorld * speedTroupes),
    ram: 1800 * 1000 / (speedWorld * speedTroupes),
    catapult: 1800 * 1000 / (speedWorld * speedTroupes),
    knight: 600 * 1000 / (speedWorld * speedTroupes),
}
 
 
 
 
 
var troopsPop = {
    spear: 1,
    sword: 1,
    axe: 1,
    archer: 1,
    spy: 2,
    light: 4,
    marcher: 5,
    heavy: 6,
    ram: 5,
    catapult: 8,
    knight: 10,
    snob: 100
};
troopsPop.heavy = heavyPop
 
var countApiKey = "snipe_script";
var countNameSpace = "madalinoTribalWarsScripts"
 
function hitCountApi() {
    $.getJSON(`https://api.countapi.xyz/hit/${countNameSpace}/${countApiKey}`, response => {
        console.log(`This script has been run ${response.value} times`);
    });
}
hitCountApi()
 
 
 
var widthMainInterface
if (window.innerWidth < 1300)
    widthMainInterface = "850px"
else
    widthMainInterface = "1300px"
 
 
 
 
function createMainInterface() {
 
    let html_info = `
    <div id="div_container_view" class="ui-widget-content div_remove" style="width:${widthMainInterface};background-color:${backgroundColor};cursor:move;z-index:50;">
        <div class="close-btn" class="btn_close" onclick="closeWindow()" style="position:absolute;top:10px;right: 10px;"><b><a href=#><font color="${titleColor}">X</font></b></a></div>
        <h2><center style="margin:10px"><u><font color="${titleColor}">${"Mass Snipes"}</font></u></center></h2>
        <center>
            <input class="btn evt-confirm-btn btn-confirm-yes" type="button" onclick="getAllInfo()" style="margin:10px" value="${"get trains"}">
            <input class="btn evt-confirm-btn btn-confirm-yes" type="button" onclick="startSnipes()" id="btn_start" style="margin:10px" value="start">
            <input class="btn evt-confirm-btn btn-confirm-yes" type="button" onclick="createTableImport()" style="margin:10px" value="${"Import"}">
            <input class="btn evt-confirm-btn btn-confirm-yes" type="button" onclick="createTableExport()" style="margin:10px" value="${"Export"}">
            <input class="btn evt-confirm-btn btn-confirm-yes" type="button" onclick="createTableSettings()" style="margin:10px" value="${"Settings"}">
            <input class="btn evt-confirm-btn btn-confirm-yes" type="button" onclick="saveJsonToLocalStorage(true)" style="margin:10px" value="${"Save snipes"}">
            <input class="btn evt-confirm-btn btn-confirm-yes" type="button" onclick="showSnipes()" style="margin:10px" value="${"Show snipes"}">
            <input class="btn evt-confirm-btn btn-confirm-yes" type="button" onclick="showIncoming()" style="margin:10px" value="${"Show incoming"}">
            <input class="btn evt-confirm-btn btn-confirm-yes" type="button" id="btn_export_plan" style="margin:10px" value="${"Export plan"}">
        </center>
        <center style="margin:10px" ><div id="div_import" hidden> </div></center>
        <center style="margin:10px" ><div id="div_export" hidden> </div></center>
        <center style="margin:10px" ><div id="div_settings" hidden> </div></center>
 
 
        <div id="div_table_view" hidden> </div>
        <div id="div_table_send" > </div>
 
    </div>`
        ////////////////////////////////////////add and remove window from page///////////////////////////////////////////
    $("#div_container_view").remove()
    $("#contentContainer").eq(0).prepend(html_info);
    $("#mobileContent").eq(0).prepend(html_info);
 
    //for mobile browser
 
 
 
    if (game_data.device == "desktop") {
        $("#div_container_view").css("position", "fixed");
        $("#div_container_view").draggable();
    }
 
}
 
createMainInterface()
createTableExport()
createTableImport()
createTableSettings()
 
 
 
 
 
 
 
 
function closeWindow() {
    $(".div_remove").remove()
    list_href = []
        // window.location.reload();
}
 
 
 
 
 
//////////////////////////////////////////////////////////get supports and attacks//////////////////////////////
function getSupportsAndAttacks() {
    return new Promise((resolve, reject) => {
 
        if (document.getElementsByClassName("info").length > 0)
            $(".info").remove()
            ////////////////////////////////////////////////get links for every page....................................
        let incomings_href = game_data.link_base_pure + "overview_villages&mode=incomings&type=all&subtype=all&group=0&page=-1";
 
        console.log("currentLink")
        console.log(incomings_href)
        document.body.innerHTML = httpGet(incomings_href);
 
 
 
 
        if (document.getElementsByClassName("overview_filters_delete").length > 0) {
            reject("turn off filters on incoming page")
        }
        let list_href = [];
        if (document.getElementsByClassName("vis")[1].getElementsByTagName("select").length > 0) {
            Array.from(document.getElementsByClassName("vis")[1].getElementsByTagName("select")[0].options).forEach(el => {
                list_href.push(el.value);
            })
            list_href.pop();
        } else if (document.getElementsByClassName("paged-nav-item").length > 0) {
            let arr = Array.from(document.getElementsByClassName("paged-nav-item"));
            for (let i = 0; i < arr.length; i++)
                list_href.push(arr[i].getAttribute("href"))
        } else if (document.getElementById("incomings_table") != null) {
            list_href.push(incomings_href)
        }
 
 
 
        console.log(list_href)
        var indexIncoming = 1;
        var url_length = list_href.length
        var map_incoming = new Map()
        list_href.reverse()
 
        function ajaxRequest(urls) {
            let current_url
            if (urls.length > 0) {
                current_url = urls.pop()
            } else {
                current_url = "stop"
            }
            console.log("in functie in plm " + urls.length)
                // console.log(current_url)
 
            if (urls.length >= 0 && current_url != "stop") {
                var start_ajax = new Date();
                $.ajax({
                    url: current_url,
                    method: 'get',
                    success: (data) => {
                        document.body.innerHTML = data
                        console.log(current_url)
                        let table_incomings = document.getElementById("incomings_table").getElementsByTagName("tbody")[0].children
                        for (let i = 1; i < table_incomings.length - 1; i++) {
 
                            if (table_incomings[i].children[0].innerText != "--") {
                                let commandId = table_incomings[i].getElementsByClassName("quickedit")[0].getAttribute("data-id")
 
                                let coord_destination = table_incomings[i].children[1].innerText.match(/[0-9]{3}\|[0-9]{3}/)[0]
                                let coord_destination_id = table_incomings[i].children[1].getElementsByTagName("a")[0].href.split("village=")[1].split("&")[0]
                                let length_tr = table_incomings[i].children.length
                                let landing_time = getLandTime(table_incomings[i].children[length_tr - 2].innerText)
                                let troops = {}
 
                                let coord_origin = table_incomings[i].children[2].innerText.match(/[0-9]{3}\|[0-9]{3}/)[0]
                                let coord_origin_id = table_incomings[i].children[2].getElementsByTagName("a")[0].href.split("id=")[1]
                                let player_origin_name = table_incomings[i].children[length_tr - 4].innerText
                                let player_origin_id = table_incomings[i].children[length_tr - 4].getElementsByTagName("a")[0].href.split("id=")[1]
                                let player_destination_id = game_data.player.id
                                let player_destination_name = game_data.player.name
 
 
 
                                let labelName = "none"
                                let type_incoming = table_incomings[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img")[0].src.split("command/")[1]
                                if (table_incomings[i].children[0].getElementsByTagName("img").length == 2) {
                                    labelName = table_incomings[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img")[1].src.split("tiny/")[1]
                                    if (labelName == undefined)
                                        labelName = table_incomings[i].getElementsByClassName("quickedit")[0].getElementsByTagName("img")[1].src.split("command/")[1]
 
                                }
                                table_incomings[i].innerHTML = table_incomings[i].innerHTML.replaceAll("garry1203", "lllll llll")
                                if (map_incoming.has(coord_destination)) {
                                    let list_support = map_incoming.get(coord_destination)
                                    list_support.push({
                                        coord_destination: coord_destination,
                                        coord_destination_id,
                                        player_destination_name: player_destination_name,
                                        player_destination_id: player_destination_id,
                                        landing_time: landing_time,
                                        coord_origin: coord_origin,
                                        coord_origin_id: coord_origin_id,
                                        player_origin_name: player_origin_name,
                                        player_origin_id: player_origin_id,
                                        troops: troops,
                                        type_incoming: type_incoming,
                                        commandId: commandId,
                                        labelName: labelName,
                                        tr: table_incomings[i]
                                    })
                                    console.log("map incoming updated")
                                } else {
                                    map_incoming.set(coord_destination, [{
                                        coord_destination: coord_destination,
                                        coord_destination_id,
                                        player_destination_name: player_destination_name,
                                        player_destination_id: player_destination_id,
                                        landing_time: landing_time,
                                        coord_origin: coord_origin,
                                        coord_origin_id: coord_origin_id,
                                        player_origin_name: player_origin_name,
                                        player_origin_id: player_origin_id,
                                        troops: troops,
                                        type_incoming: type_incoming,
                                        commandId: commandId,
                                        labelName: labelName,
                                        tr: table_incomings[i]
                                    }])
                                }
 
                            }
                        }
 
 
                        UI.SuccessMessage(indexIncoming + "/" + url_length)
                        indexIncoming++;
                        var stop_ajax = new Date();
                        var dif_time = stop_ajax.getTime() - start_ajax.getTime()
                        console.log("time ajax: " + dif_time + " wait: " + (200 - dif_time))
                        window.setTimeout(function() {
                            ajaxRequest(list_href)
                        }, 200 - dif_time)
                    }
                })
 
            } else {
                UI.SuccessMessage("done", 2000)
                if (document.getElementById("incomings_table") != null) {
                    // showButtons();
                }
 
                if (document.getElementsByClassName("g-recaptcha").length > 0) { //recaptcha
                    console.log("recaptcha")
                    UI.ErrorMessage("recaptcha activated")
                    resolve("recaptcha, upload again");
                    throw new Error("recaptcha activated");
                }
 
 
                window.setTimeout(function() {
 
                    //if a village doesnt have noble train then delete
                    Array.from(map_incoming.keys()).forEach(key => {
                        let list_coming = map_incoming.get(key)
                        let hasTrain = false
                        for (let i = 0; i < list_coming.length; i++) {
                            let landing_time = new Date(list_coming[i].landing_time).getTime()
 
                            for (let j = i + 1; j < list_coming.length; j++) { //iterate each village
                                let landing_time_next = new Date(list_coming[j].landing_time).getTime()
 
                                if ((landing_time_next - landing_time == 50 || landing_time_next - landing_time == 100 || landing_time_next - landing_time == 150) &&
                                    list_coming[i].coord_origin == list_coming[j].coord_origin) { //has train && list_coming[j].labelName.includes("snob")
                                    hasTrain = true
 
                                }
 
                            }
                        }
                        if (hasTrain == false)
                            map_incoming.delete(key)
                    })
 
                    resolve(map_incoming)
                }, 200)
 
            }
        }
        if (list_href.length > 0)
            ajaxRequest(list_href);
        else
            reject("error on incomings")
    })
}
 
function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}
 
function getLandTime(time_land) {
    var date_land = ""
    let server_date = document.getElementById("serverDate").innerText.split("/")
    if (time_land.includes(lang["aea2b0aa9ae1534226518faaefffdaad"].replace(" %s", ""))) { //today
        console.log("here")
        date_land = server_date[1] + "/" + server_date[0] + "/" + server_date[2] + " " + time_land.match(/\d+:\d+:\d+:\d+/)[0]
    } else if (time_land.includes(lang["57d28d1b211fddbb7a499ead5bf23079"].replace(" %s", ""))) { //tomorrow
        var tomorrow_date = new Date(server_date[1] + "/" + server_date[0] + "/" + server_date[2]);
        tomorrow_date.setDate(tomorrow_date.getDate() + 1);
        date_land = ("0" + (tomorrow_date.getMonth() + 1)).slice(-2) + "/" + ("0" + tomorrow_date.getDate()).slice(-2) + "/" + tomorrow_date.getFullYear() + " " + time_land.match(/\d+:\d+:\d+:\d+/)[0];
    } else if (time_land.includes(lang["0cb274c906d622fa8ce524bcfbb7552d"].split(" ")[0])) { //on
        var on = time_land.match(/\d+.\d+/)[0].split(".");
        date_land = on[1] + "/" + on[0] + "/" + server_date[2] + " " + time_land.match(/\d+:\d+:\d+:\d+/)[0];
    }
    return date_land;
}
 
 
 
 
 
//////////////////////////////////////////////////////////for each village get troops for every support//////////////////////////////
 
function ajaxTroopsComing(commandId) {
    return new Promise((resolve, reject) => {
        let units = game_data.units.slice()
        if (units.includes("militia")) {
            units.pop()
        }
 
        let startAjax = new Date().getTime()
        $.ajax({
            url: game_data.link_base_pure + `info_command&ajax=details&id=${commandId}`,
            method: 'get',
            success: (data) => {
                let troops = {}
                if (data.units != undefined) {
                    troops = data.units
                    Object.keys(troops).forEach(key => {
                        troops[key] = parseInt(troops[key].count)
                    })
                } else {
                    Object.keys(units).forEach(key => {
                        troops[units[key]] = 0
                    })
                }
                let stopAjax = new Date().getTime()
                let difAjax = stopAjax - startAjax
                console.log("wait ", difAjax)
                window.setTimeout(() => {
                    resolve(troops)
                }, 200 - difAjax)
 
            },
            error: (data) => {
                reject(data)
            }
 
        })
    })
}
 
//////////////////////////////////////////////////////////for each village attacked with nobles get troops home//////////////////////////////
 
function ajaxTroopsStationed(villageId) {
    return new Promise((resolve, reject) => {
 
        let startAjax = new Date().getTime()
        $.ajax({
            url: game_data.link_base_pure + `map&ajax=map_info&source=${villageId}&target=${villageId}&`,
            method: 'get',
            success: (response) => {
                // console.log(response)
                let units = game_data.units
                let obj_troops = {}
                let obj_result = {}
                for (let i = 0; i < units.length - 1; i++) {
                    obj_troops[units[i]] = parseInt(response.units[units[i]].count.home) + parseInt(response.units[units[i]].count.foreign)
                }
                let wallLevel, farmLevel, flagName, LoyaltyLevel
                wallLevel = response.buildings.wall
                farmLevel = response.buildings.farm
                LoyaltyLevel = response.mood
                    // console.log(response.flag)
                if (response.flag != undefined)
                    flagName = response.flag.short_desc
                else
                    flagName = "none"
                    // console.log(obj_troops)
                    // console.log("wallLevel: "+wallLevel)
                    // console.log("farmLevel: "+farmLevel)
                    // console.log("flagName: "+flagName)
                    // console.log("LoyaltyLevel: "+LoyaltyLevel)
 
                obj_result.obj_troops = obj_troops
                obj_result.wallLevel = wallLevel
                obj_result.farmLevel = farmLevel
                obj_result.flagName = flagName
                obj_result.LoyaltyLevel = LoyaltyLevel
 
 
                let stopAjax = new Date().getTime()
                let difAjax = stopAjax - startAjax
                console.log("wait ", difAjax)
                window.setTimeout(() => {
                    resolve(obj_result)
                }, 200 - difAjax)
 
            },
            error: (data) => {
                reject(data)
            }
 
        })
 
    })
}
 
 
//////////////////////////////////////////////////////////main function where all data are extracted//////////////////////////////
async function getAllInfo() {
 
    let map_coming = await getSupportsAndAttacks()
    let map_troops_home = new Map()
    var keys = Array.from(map_coming.keys())
 
    let start_get_troops = new Date().getTime()
 
    ///////////////////////////////////////////get info support coming and troops home//////////////////////////////////
    const run = async() => {
        console.log("Starting...");
        for (let i = 0; i < keys.length; i++) { //for each coord
            let list_coming = map_coming.get(keys[i])
            for (let j = 0; j < list_coming.length; j++) { //for each incoming attack/support
                let landing_time_current = new Date(list_coming[j].landing_time)
 
                if (list_coming[j].type_incoming.includes("support")) { // if incoming is a support check if there is a noble close after it
                    for (let k = j + 1; k < list_coming.length; k++) {
                        let landing_time_next = new Date(list_coming[k].landing_time)
                        if (landing_time_next - landing_time_current < 200) { //after a support there is a noble attack at less than 200ms //&& list_coming[k].labelName.includes("snob")
                            try {
                                let troops = await ajaxTroopsComing(list_coming[j].commandId) //get troops from support coming 
                                console.log("get support troops", troops)
                                list_coming[j].troops = troops
                                UI.SuccessMessage(`${"info coord"}: ${keys.length-i} , ${"get troops coming"} ${list_coming.length-j}`)
 
                            } catch (error) {
                                console.log("no troops")
                                console.log(error)
                            }
                        } else { //this support is not a snipe
                            break;
                        }
                    }
 
                } else { //type_incoming=="attack"
                    let villageId = list_coming[j].coord_destination_id
                    let coord = list_coming[j].coord_destination
                    if (!map_troops_home.has(coord)) { // if an incoming has noble and there is no info about troops home
                        try {
                            let obj = await ajaxTroopsStationed(villageId) //get troops home for this villageID
                            console.log("troops home")
                            console.log(obj)
 
                            let serverTime = document.getElementById("serverTime").innerText
                            let serverDate = document.getElementById("serverDate").innerText.split("/")
                            serverDate = serverDate[1] + "/" + serverDate[0] + "/" + serverDate[2]
                            let date_current = new Date(serverDate + " " + serverTime)
                            date_current.setDate(date_current.getDate() + 7)
 
                            obj.uploadTime = date_current.getTime()
                            map_troops_home.set(coord, obj)
                            UI.SuccessMessage(`${"info coord"}: ${keys.length-i} , ${"get troops home"} ${list_coming.length-j}`)
 
                        } catch (error) {
                            console.log(error)
                        }
 
                    }
 
 
                }
            }
            map_coming.set(keys[i], list_coming)
 
 
        }
        console.log("Done!");
    };
    await run();
    var stop_get_troops = new Date().getTime()
    console.log("time get troops " + (stop_get_troops - start_get_troops))
    console.log("map_coming", map_coming)
    console.log("troops home", map_troops_home)
 
    $(".row_a").remove();
    $(".row_b").remove();
    var table_incomings = document.getElementById("incomings_table")
    let lastRow = table_incomings.children[1].children[1];
    table_incomings.children[1].children[1].remove();
    let nr_row = 0;
 
    $(table_incomings).append("<tr><td colspan='7'>-</td></tr>")
    Array.from(map_coming.keys()).forEach(key => {
        let list_coming = map_coming.get(key)
        for (let i = 0; i < list_coming.length; i++) {
            $(table_incomings).append(list_coming[i].tr)
            nr_row++;
 
        }
        $(table_incomings).append("<tr><td colspan='7'>-</td></tr>")
    })
    table_incomings.children[1].children[0].children[0].innerText = "Command (" + nr_row + ")"
    $(table_incomings).append(lastRow)
 
 
 
 
    /////////////////////////////////////highlight trains///////////////////////////
    var table_incomings = document.getElementById("incomings_table").getElementsByTagName("tr")
 
    let colors = {
        yellow: '#ffff66',
        red: '#ff8080',
        green: '#4dff4d'
    };
 
    for (let i = 1; i < table_incomings.length - 1; i++) {
        let length_tr = table_incomings[i].children.length
        table_incomings[i].classList.remove("selected")
 
        // if there isn't a tr separator between coords and it's not ignored
        if (table_incomings[i].children[0].innerText != "-" && table_incomings[i + 1].children[0].innerText != "-" && !table_incomings[i].children[0].innerText.toLowerCase().includes(`"ignore"`)) {
            //highlight all possible trains
            for (let j = i + 1; j < table_incomings.length; j++) {
 
                if (table_incomings[j].children[0].innerText == "-")
                    continue;
 
                let tr1 = table_incomings[i].children[length_tr - 2].innerText.match(/[0-9]{2}\:[0-9]{2}\:[0-9]{2}\:[0-9]{3}/)[0]
                let tr2 = table_incomings[j].children[length_tr - 2].innerText.match(/[0-9]{2}\:[0-9]{2}\:[0-9]{2}\:[0-9]{3}/)[0]
                let time1 = parseInt(tr1.split(":")[0]) * 3600 * 1000 + parseInt(tr1.split(":")[1]) * 60 * 1000 + parseInt(tr1.split(":")[2]) * 1000 + parseInt(tr1.split(":")[3])
                let time2 = parseInt(tr2.split(":")[0]) * 3600 * 1000 + parseInt(tr2.split(":")[1]) * 60 * 1000 + parseInt(tr2.split(":")[2]) * 1000 + parseInt(tr2.split(":")[3])
 
                if (table_incomings[i].children[2].innerHTML == table_incomings[j].children[2].innerHTML) { //if origin coord is the same
                    if (Math.abs(time1 - time2) == 50 || Math.abs(time1 - time2) == 100 || Math.abs(time1 - time2) == 150) {
 
 
                        if (table_incomings[i].children[0].getElementsByTagName("img").length == 2) { // if there are 2 images means it is tagged and then check if it's tagged as noble
                            let hasNoble = table_incomings[i].children[0].getElementsByTagName("img")[1].src.includes("snob.png")
                            if (hasNoble == true) {
                                $(table_incomings[i]).find('td').each(function() {
                                    $(this).css('background-color', colors.red);
                                });
                                $(table_incomings[j]).find('td').each(function() {
                                    $(this).css('background-color', colors.red);
                                });
                                //check all trains and every attack/support between nobles
                                for (let k = i; k <= j; k++) { // loop from i(first noble) to j(second noble)
                                    $(table_incomings[k]).find("input[type=checkbox]").attr("checked", true)
 
                                }
 
 
 
                            } else { //not noble
                                $(table_incomings[i]).find('td').each(function() {
                                    $(this).css('background-color', colors.yellow);
                                });
                                $(table_incomings[j]).find('td').each(function() {
                                    $(this).css('background-color', colors.yellow);
                                });
                            }
                        } else { //not tagged
                            $(table_incomings[i]).find('td').each(function() {
                                $(this).css('background-color', colors.yellow);
                            });
                            $(table_incomings[j]).find('td').each(function() {
                                $(this).css('background-color', colors.yellow);
                            });
                        }
 
                        break;
                    }
                }
                if (Math.abs(time1 - time2) > 200)
                    break;
 
            }
        }
 
 
    }
 
    //activate renaming label
    //this code is copy paste from TW source code 
    CommandsOverview = {
        $filters: null,
        init: function() {
            this.$filters = $(".overview_filters"),
                1 == $.cookie("overview_filter_incomings") && this.toggleFilters(),
                $(".overview_filters_manage").on("click", function() {
                    return CommandsOverview.toggleFilters(), !1
                }),
                $(".overview_filters_delete").on("click", function() {
                    $(this).parents("td").eq(0).find("input").val("")
                })
        },
        toggleFilters: function() {
            this.$filters.toggle(),
                $.cookie("overview_filter_incomings", "none" == this.$filters.css("display") ? 0 : 1)
        }
    };
 
    $('document').ready(function() {
        CommandsOverview.init();
        UI.ToolTip('.icon_village_notes');
 
        $('.quickedit').QuickEdit({ url: TribalWars.buildURL('POST', 'info_command', { ajaxaction: 'edit_other_comment', id: '__ID__' }) });
        Command.init();
    });
    ///////////////////////////////////////////
 
 
 
 
    let html_btn = `<input class="btn evt-confirm-btn btn-confirm-yes btn_overview_page"  type="button"  style="margin:10px" value="${"go to overview page"}">`
    $(".overview_filters").before(html_btn)
    $("#incomings_table").append(html_btn)
 
 
 
    $(".btn_overview_page").on("click", () => {
 
        //get commandID for each checked incoming
        let map_selected_commandId = new Map()
        Array.from($(incomings_table).find("input[type=checkbox]:checked")).forEach((elem, index) => {
            let commandId = elem.getAttribute("name").split("id_")[1]
            let ignoredNoble = elem.nextSibling.nextSibling.innerText.toLowerCase().includes('"ignore"')
            let images = elem.nextSibling.nextSibling.getElementsByTagName("img")
 
 
            let labelName = "none"
            if (images.length == 2) {
                labelName = images[1].src.split("tiny/")[1]
                if (labelName == undefined)
                    labelName = images[1].src.split("command/")[1]
 
            }
 
 
            map_selected_commandId.set(commandId, {
                ignoredNoble: ignoredNoble,
                labelName: labelName
            })
        })
 
        console.log(map_selected_commandId)
 
        //filter map coming, keep in the map only checked incoming
        Array.from(map_coming.keys()).forEach(key => {
            let list_incoming = map_coming.get(key)
            let list_result = []
            let commandIdExist = false
            let ignoredNoble = false
            let total_nr_attacks = 0
 
            for (let i = 0; i < list_incoming.length; i++) {
                if (map_selected_commandId.has(list_incoming[i].commandId)) {
                    let obj_selected = map_selected_commandId.get(list_incoming[i].commandId)
                    delete list_incoming[i].tr
 
                    list_incoming[i].labelName = obj_selected.labelName
                    list_result.push(list_incoming[i])
                    commandIdExist = true
 
                    if (obj_selected.ignoredNoble == true) { //noble is ignored, must be deleted
                        ignoredNoble = true
                    }
 
                }
                if (list_incoming[i].type_incoming.includes("attack"))
                    total_nr_attacks++
            }
            if (commandIdExist == true && ignoredNoble == false) { //update map with only checked incoming
                console.log('nr attacks total', total_nr_attacks)
                list_result[0].total_nr_attacks = total_nr_attacks
                map_coming.set(key, list_result)
            } else
                map_coming.delete(key) // delete coord from the map because it wasnt checked
 
        })
        console.log("map coming checked", map_coming)
 
        //filter map_troops
        Array.from(map_troops_home.keys()).forEach(key => {
            if (!map_coming.has(key))
                map_troops_home.delete(key)
        })
        console.log("map troops checked", map_troops_home)
 
 
 
        //order map_coming by date when the first noble arrives
        let list_order = []
        Array.from(map_coming.keys()).forEach(key => {
            let list_coming = map_coming.get(key)
            let landing_time = "0"
 
            for (let i = 0; i < list_coming.length; i++) {
                if (list_coming[i].labelName.includes("snob")) {
                    for (let j = i + 1; j < list_coming.length; j++) {
                        let difTime = new Date(list_coming[j].landing_time).getTime() - new Date(list_coming[i].landing_time).getTime() // diff between 2 dates
                        if ((difTime == 50 || difTime == 100 || difTime == 150) && list_coming[j].labelName.includes("snob")) { // i have a train 
                            landing_time = list_coming[i].landing_time
                            list_order.push({
                                coord: key,
                                landing_time: landing_time
                            })
                            break;
                        }
                    }
                }
            }
        })
        console.log(list_order)
        list_order.sort((o1, o2) => {
            return (new Date(o1.landing_time).getTime() > new Date(o2.landing_time).getTime()) ? 1 : (new Date(o1.landing_time).getTime() < new Date(o2.landing_time).getTime()) ? -1 : 0
        })
        let map_coming_order = new Map()
        for (let i = 0; i < list_order.length; i++) {
            let obj = map_coming.get(list_order[i].coord)
            map_coming_order.set(list_order[i].coord, obj)
        }
 
 
 
        let url_combined = game_data.link_base_pure + "overview_villages&mode=combined"
        document.body.innerHTML = httpGet(url_combined);
 
 
        console.log("create main interface")
        createMainInterface()
        console.log("create main export")
        createTableExport()
        console.log("create main import")
        createTableImport()
        console.log("create main settings")
        createTableSettings()
        let obj_player_data = {
                playerName: game_data.player.name,
                numberSnipes: map_coming.size
            }
            // add json file into  textarea object
        var data_list = [obj_player_data, Array.from(map_coming_order.entries()), Array.from(map_troops_home.entries())]
        document.getElementById("own_snipes").value = JSON.stringify(data_list)
        $("#own_snipes").closest("tr").find("font").text(`${obj_player_data.playerName}\n ${"trains"}:(${obj_player_data.numberSnipes})`)
        saveJsonToLocalStorage(false)
        UI.SuccessMessage("trains loaded", 1500)
    })
 
}
 
 
// getAllInfo()
var idSetInteral = 0
 
function counterTime() {
    clearInterval(idSetInteral)
    idSetInteral = window.setInterval(() => {
 
        $(".counterTime").each((index, item) => {
            let serverTime = document.getElementById("serverTime").innerText
            let serverDate = document.getElementById("serverDate").innerText.split("/")
            serverDate = serverDate[1] + "/" + serverDate[0] + "/" + serverDate[2]
            let date_current = new Date(serverDate + " " + serverTime).getTime()
 
            let time = parseInt(item.getAttribute("date-time"))
            if (date_current > time) {
                item.innerText = "done"
            } else {
                let hours = ("0" + parseInt((time - date_current) / (3600 * 1000))).slice(-3);
                let minutes = ("0" + parseInt(((time - date_current) / (60 * 1000) % 60))).slice(-2);
                let seconds = ("0" + parseInt((((time - date_current) / 1000) % 60))).slice(-2);
                result = hours + ":" + minutes + ":" + seconds
                item.innerText = result
            }
        })
    }, 1000)
 
 
}
 
 
/////////////////////////////////////////////////////get template troops for snipes for each village/////////////////////////////////
 
 
function getTroopsSnipes(snipe_pop) {
 
    let url_combined = game_data.link_base_pure + "overview_villages&mode=combined"
    if (document.getElementById("combined_table") == null) {
        document.body.innerHTML = httpGet(url_combined);
 
        console.log("create main interface")
        createMainInterface()
        console.log("create main export")
        createTableExport()
        console.log("create main import")
        createTableImport()
        console.log("create main settings")
        createTableSettings()
    }
 
 
    if (document.getElementById("btn_start").getAttribute("get_troops") == "true") {
        console.log("get troops")
        let start = new Date().getTime();
        let text_page = httpGet(url_combined)
        let table = text_page.match(/<table id="combined_table"((.|\n)+)/)[0].split("<\/table>")[0] + "</table>"
        document.getElementById("combined_table").innerHTML = table
        let stop = new Date().getTime();
        console.log("time ajax for refreshing combined table", (stop - start))
    }
 
 
 
 
    let table_combined = document.getElementById("combined_table").getElementsByTagName("tr")
    let units = game_data.units
    let snipe_units = ["spear", "sword", "heavy", "archer", "ram", "catapult", "knight"] //units for snipes
    let list_available = []
    if (!units.includes("archer")) {
        let indexOf = snipe_units.indexOf("archer")
        snipe_units.splice(indexOf, 1)
    }
    if (!units.includes("knight")) {
        let indexOf = snipe_units.indexOf("knight")
        snipe_units.splice(indexOf, 1)
    }
 
    for (let i = 1; i < table_combined.length; i++) {
        let vectorTroupes = Array.from(table_combined[i].getElementsByClassName("unit-item")).map(e => { return parseInt(e.innerText) })
        let currentCoord = table_combined[i].getElementsByClassName("quickedit-label")[0].innerText.match(/[0-9]{3}\|[0-9]{3}/)[0]
        let linkBase = table_combined[i].getElementsByClassName("quickedit-content")[0].getElementsByTagName("a")[0].href.replace("overview", "place")
            // console.log(linkBase)
            // console.log("troupes available",vectorTroupes)
        console.log(vectorTroupes)
        let availableTroupes = {}
        let totalPop = 0;
        //create an object with troops available
        for (let j = 0; j < units.length - 1; j++) {
            if (snipe_units.includes(units[j])) { //get only defensive troops for snipes
                availableTroupes[units[j]] = vectorTroupes[j]
                totalPop += vectorTroupes[j] * troopsPop[units[j]]
            }
        }
        let nrPossibleSnipes = parseInt(totalPop / snipe_pop)
            //add rams and cats for snipe plan
        if (availableTroupes.catapult >= nrPossibleSnipes) {
            availableTroupes.catapult = nrPossibleSnipes
            availableTroupes.ram = 0
        } else if (availableTroupes.ram >= nrPossibleSnipes) {
            availableTroupes.ram = nrPossibleSnipes
            availableTroupes.catapult = 0
        }
 
 
 
 
        console.log("availableTroupes", availableTroupes)
        console.log("totalPop", totalPop)
        console.log("number of possible snipes", nrPossibleSnipes)
        if (nrPossibleSnipes > 0) {
 
            list_available.push({
                coord: currentCoord,
                availableTroupes: availableTroupes,
                linkBase: linkBase
            })
        }
 
    }
    console.log(list_available)
    return list_available
 
 
 
}
// getTroopsSnipes(1000)
 
/////////////////////////////////////////////////////create main table, having:info/destination,possible snipe/landing_time/arries in/////////////////////////////////
 
var idInterval_alarm = 0
 
function createTableViewIncomings(map_troops_home, map_coming, map_possible_snipes) {
    let html_info = `
    <center>
    <div id="table_view" style="height:600px;width:80%;overflow:auto">
    <table  class="" border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor};border-spacing:2px;border-collapse:separate;">
    <thead>
    <tr>
        <td style="text-align:center; width:auto; background-color:${headerColor}" >
            <center style="margin:10px"><font color="${titleColor}">${"info"}</font></center>
        </td>
        <td style="text-align:center; width:auto; background-color:${headerColor}" colspan="2">
            <center style="margin:10px"><font color="${titleColor}">${"destination"}</font></center>
        </td>
        <td style="text-align:center; width:auto; background-color:${headerColor}">
            <center style="margin:10px"><font color="${titleColor}" id="nr_snipes_total">${"possible snipes"}</font></center>
        </td>
        <td style="text-align:center; width:auto; background-color:${headerColor}">
            <center style="margin:10px"><font color="${titleColor}">${"landing time"}</font></center>
        </td>
        <td style="text-align:center; width:auto; background-color:${headerColor}">
            <center style="margin:10px"><font color="${titleColor}">${"arrives in"}</font></center>
        </td>
    </tr>
    </thead>
    <tbody>`
 
 
    let serverTime = document.getElementById("serverTime").innerText
    let serverDate = document.getElementById("serverDate").innerText.split("/")
    serverDate = serverDate[1] + "/" + serverDate[0] + "/" + serverDate[2]
    let date_current = new Date(serverDate + " " + serverTime).getTime()
    let counterVillage = 0;
    let nr_possible_snipes_total = 0
 
 
    Array.from(map_coming.keys()).forEach(key => {
        let list_coming = map_coming.get(key)
        let landing_time = "0"
        let nr_possible_snipes = (map_possible_snipes.get(key) != undefined) ? map_possible_snipes.get(key) : 0 //if it's undefined then intialize with 0
        nr_possible_snipes_total += nr_possible_snipes
 
        for (let i = 0; i < list_coming.length; i++) {
            if (list_coming[i].labelName.includes("snob")) {
                for (let j = i + 1; j < list_coming.length; j++) {
                    let difTime = new Date(list_coming[j].landing_time).getTime() - new Date(list_coming[i].landing_time).getTime() // diff between 2 dates
                    if ((difTime == 50 || difTime == 100 || difTime == 150) && list_coming[j].labelName.includes("snob")) { // i have a train 
                        landing_time = list_coming[i].landing_time
                        break;
                    }
                }
            }
        }
        if (landing_time != "0") {
            let date = landing_time.split(" ")[0]
            let time = landing_time.split(" ")[1].split(":")
            let milisec = time.pop()
            time = time.join(":")
            let arrived = new Date(landing_time).getTime()
 
 
            if (arrived > date_current) {
 
                let headerColorAlternate = headerColor
                if (counterVillage % 2 == 0)
                    headerColorAlternate = headerColorEven
 
 
                counterVillage++
                html_info += `
                <tr>
                    <td style="text-align:center; width:auto; background-color:${headerColorAlternate}" >
                        <a href="#" style="margin:0px;padding:0px" ><center ><font color="${titleColor}"><img coord-id="${key}" class="infoCoord" number-tr-coord="${counterVillage}"src="https://img.icons8.com/clouds/30/000000/more.png"/></font></center></a>
                    </td>
                    <td style="text-align:center; width:auto; background-color:${headerColorAlternate}">
                        <a href="${game_data.link_base_pure}info_village&id=${list_coming[0].coord_destination_id}" style="margin:0px;padding:0px"><center><font color="${titleColor}">${list_coming[0].coord_destination}</font></center></a>
                    </td>
                    <td style="text-align:center; width:auto; background-color:${headerColorAlternate}" >
                        <a href="${game_data.link_base_pure}info_player&id=${list_coming[0].player_destination_id}" style="margin:0px;padding:0px"><center><font color="${titleColor}">${list_coming[0].player_destination_name}</font></center></a>
                    </td>
                    <td style="text-align:center; width:auto; background-color:${headerColorAlternate}">
                        <center style="margin:0px;padding:0px"><font color="${titleColor}">${nr_possible_snipes}</font></center>
                    </td>    
                    <td style="text-align:center; width:auto; background-color:${headerColorAlternate}">
                    <center style="margin:0px;padding:0px;padding:0px"><font color="${titleColor}">${date} <b>${time} <font color="${titleColorNoble}"> ${milisec}</font></b> </font></center>
                    </td>   
                    <td style="text-align:center; width:auto; background-color:${headerNoble}" >
                        <center style="margin:0px;padding:0px"><font color="${titleColor}" date-time=${arrived} class="counterTime"></font></center>
                    </td>      
                </tr>`
 
            }
 
        }
    })
 
    html_info += `</tbody></table></div></center>`
    document.getElementById("div_table_view").innerHTML = html_info
    document.getElementById("nr_snipes_total").innerText = `${"possible snipes"}(${nr_possible_snipes_total})`
 
 
    $("#table_view").find(".infoCoord").on("click", (event) => {
 
        let coord = event.target.getAttribute("coord-id")
        let numberTrCoord = event.target.getAttribute("number-tr-coord")
        let list_coming = map_coming.get(coord)
        let obj_troops_home = map_troops_home.get(coord)
 
        console.log("obj_troops_home", obj_troops_home)
        console.log("list_coming", list_coming)
 
        // console.log(obj)
        // console.log(coordId)
        // console.log(numberTrCoord)
        // console.log(event.target)
 
        let admin = true
        let html_table_coord = `<tr><td >`
        html_table_coord = `<table class="table_coord" border="1" coord-id="${coord}" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor};border-spacing:2px;border-collapse:separate;"> `
        html_table_coord += createTableCoordTroops(obj_troops_home, list_coming)
        html_table_coord += "</table>"
 
 
        html_table_coord += `
        <div style="height:200px;overflow:auto;" id="div_incomingsInfo">
        <table class="table_coord" border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor};border-spacing:2px;border-collapse:separate;"></div> `
        html_table_coord += createTableCoordIncomings(list_coming)
 
 
 
        html_table_coord += `</table><td></tr>`
 
 
 
 
        let delay = 500
            // console.log(document.getElementById(`table_coord${numberTrCoord}`))
        if (document.getElementById(`table_coord${numberTrCoord}`) != null) {
            $(".tr_table_coord_info").hide(delay)
                // $("#div_incomingsInfo").hide(delay)
            window.setTimeout(() => {
                $(".tr_table_coord_info").remove()
                    // $("#div_incomingsInfo").remove()
            }, delay + 10)
 
        } else {
 
            $(".tr_table_coord_info").remove()
                // console.log(html_table_player)
            var table_coord = document.getElementById("table_view").getElementsByTagName("tbody")[0]
            var newRow = table_coord.insertRow(numberTrCoord);
            newRow.className = "tr_table_coord_info"
            newRow.id = `table_coord${numberTrCoord}`
 
            let cell = newRow.insertCell();
            cell.setAttribute("colspan", 7)
            var div = document.createElement("div")
            div.innerHTML = html_table_coord
            $(cell).append(div)
            $(cell).hide()
            $(cell).show(delay)
                // counterTime()
        }
 
 
    })
 
 
    counterTime()
 
 
 
    //event for alarm sound
 
    clearInterval(idInterval_alarm)
    if ($("input[type=checkbox][value=check_alarm_sound]").is(":checked") == true) {
        let alarm_sound = parseInt(document.getElementById("alarm_sound").value)
        alarm_sound = (alarm_sound != 0) ? alarm_sound * 1000 : 60 * 1000
        let alarm_sound_repeat = parseInt(document.getElementById("alarm_sound_repeat").value)
        alarm_sound_repeat = (alarm_sound_repeat != 0) ? alarm_sound_repeat * 1000 : 20 * 1000
 
 
        idInterval_alarm = window.setInterval(() => {
            let arrived_vect = Array.from($(".alarmSound"))
            console.log("alarm sound", alarm_sound)
            console.log("alarm sound repeat", alarm_sound_repeat)
            for (let i = 0; i < arrived_vect.length; i++) {
                let split_time = arrived_vect[i].innerText.split(":")
 
                let total_time = parseInt(split_time[0]) * 3600 * 1000 + parseInt(split_time[1]) * 60 * 1000 + parseInt(split_time[2]) * 1000
                if (total_time < alarm_sound) {
                    var melodie = new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/alien_shoot.wav");
                    melodie.play();
                    console.log("sound alert")
                    break;
                } else {
                    break;
                }
 
            }
        }, alarm_sound_repeat)
    }
 
 
 
 
}
 
 
function createTableCoordTroops(obj_troops_home, list_coming) {
    let units = game_data.units
    let troopsSupportComing = {}
    for (let i = 0; i < units.length - 1; i++) {
        troopsSupportComing[units[i]] = 0
    }
    // console.log(troopsSupportComing)
    for (let i = 0; i < list_coming.length; i++) {
        if (list_coming[i].type_incoming.includes("support")) {
            Object.keys(troopsSupportComing).forEach(key => {
                troopsSupportComing[key] += list_coming[i].troops[key]
            })
        }
 
    }
    troopsSupportComing.snob = 0;
 
    let html_table_coord = ""
        ///////////////////////////////////////////////////////////////////info coord table//////////////////////////////////////////////////////////
 
    html_table_coord += `
    <tbody>
    <tr>
 
        <td  style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
            <center style="margin:5px"><font color="${titleColor}">${"coord"} </font></center>
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
            <center style="margin:5px"><font color="${titleColor}">${"troops"} </font></center></p>
        </td>   
        
    `;
    /////////////////////////////////////////////////////////////////////////////Add info village//////////////////////////////////////////////////
 
    for (let i = 0; i < units.length - 1; i++) {
        html_table_coord += `<td class="fm_unit" style="width:30px;text-align:center;width:auto; background-color:${headerColorFirstRow}"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/unit/unit_${units[i]}.png"></td>`
    }
    html_table_coord += `
        <td  style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
            <center style="margin:1px"><font color="${titleColor}">${"pop"}</font></center>
        </td>`
    html_table_coord += `</tr>
            <tr>`
 
    html_table_coord += `
        <td rowspan="3" class="" style="width:30px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">${list_coming[0].coord_destination}</td>
        <td rowspan="3" class="" style="width:70px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">${list_coming[0].total_nr_attacks}</td>
        <td rowspan="3" class="" style="width:70px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">${obj_troops_home.flagName}</td>
        <td rowspan="3" class="" style="width:30px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">${obj_troops_home.LoyaltyLevel}</td>
        <td rowspan="3" class="" style="width:30px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">${obj_troops_home.wallLevel}</td>
        <td rowspan="3" class="" style="width:30px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">${obj_troops_home.farmLevel}</td>
        <td  style="text-align:center; width:auto; background-color:${headerColorCoords}">
            <center style="margin:1px"><font color="${titleColor}">${"home"}</font></center>
        </td>
    `
        /////////////////////////////////////////////////////////////////////////////////////////home troops//////////////////////////////////////////////////
    let total_pop = 0;
    for (let i = 0; i < units.length - 1; i++) {
        let value_troop = obj_troops_home.obj_troops[units[i]]
        let name_troop = units[i]
        if (name_troop != "spy" && name_troop != "light" && name_troop != "marcher" && name_troop != "ram" && name_troop != "catapult" && name_troop != "axe") {
            total_pop += value_troop * troopsPop[name_troop]
        }
        html_table_coord += `<td style="width:30px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">` + value_troop + "</td>"
    }
    html_table_coord += `<td style="width:60px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">` + total_pop + "</td>"
    html_table_coord += `</tr>
            <tr>
                <td  style="text-align:center; width:auto; background-color:${headerColorCoords}">
                    <center style="margin:1px"><font color="${titleColor}">${"coming"}</font></center>
                </td>`
 
    /////////////////////////////////////////////////////////////////////////////////////////coming troops//////////////////////////////////////////////////
    total_pop = 0;
    for (let i = 0; i < units.length - 1; i++) {
        let value_troop_coming = troopsSupportComing[units[i]]
        let name_troop = units[i]
        if (name_troop != "spy" && name_troop != "light" && name_troop != "marcher" && name_troop != "ram" && name_troop != "catapult" && name_troop != "axe") {
            total_pop += value_troop_coming * troopsPop[name_troop]
        }
        html_table_coord += `<td style="width:30px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">` + value_troop_coming + "</td>"
    }
    html_table_coord += `<td style="width:60px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">` + total_pop + "</td>"
 
    html_table_coord += `</tr>
            <tr>
                <td  style="text-align:center; width:auto; background-color:${headerColorCoords}">
                    <center style="margin:1px"><font color="${titleColor}">${"total"} </font></center>
                </td>`
        /////////////////////////////////////////////////////////////////////////////////////////total troops//////////////////////////////////////////////////
    total_pop = 0;
    for (let i = 0; i < units.length - 1; i++) {
        let value_troop = troopsSupportComing[units[i]] + obj_troops_home.obj_troops[units[i]]
        let name_troop = units[i]
        if (name_troop != "spy" && name_troop != "light" && name_troop != "marcher" && name_troop != "ram" && name_troop != "catapult" && name_troop != "axe") {
            total_pop += value_troop * troopsPop[name_troop]
        }
        html_table_coord += `<td style="width:30px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">` + value_troop + "</td>"
    }
    html_table_coord += `<td style="width:60px;height:30px;text-align:center; background-color:${headerColorCoords};color:white">` + total_pop + "</td>"
    html_table_coord += "</tr></tbody>"
    return html_table_coord
 
}
 
function createTableCoordIncomings(list) {
    let serverTime = document.getElementById("serverTime").innerText
    let serverDate = document.getElementById("serverDate").innerText.split("/")
    serverDate = serverDate[1] + "/" + serverDate[0] + "/" + serverDate[2]
    let date_current = new Date(serverDate + " " + serverTime).getTime()
        // console.log("create table coord")
    console.log("createTableCoordIncomings")
        // console.log(list)
        // console.log(mapVillage)
    let html_incomings = `
        <tbody >
        <tr>
            <td  style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:5px"><font color="${titleColor}"><img src="https://dsen.innogamescdn.com/asset/056b9c0b/graphic/unit/att.png"> </font></center>
            </td>  
            <td  style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:0px"><font color="${titleColor}">${"speed/pop"} </font></center>
            </td>    
            <td colspan="2" style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
               <center style="margin:0px"><font color="${titleColor}">${"destination"} </font></center>
            </td>    
            <td colspan="2" style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:0px"><font color="${titleColor}">${"origin"} </font></center>
            </td>    
            <td  style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:0px"><font color="${titleColor}">${"arrival time"} </font></center>
            </td>    
            <td style="text-align:center; width:auto; background-color:${headerColorFirstRow}">
                <center style="margin:0px"><font color="${titleColor}">${"arrives in"} </font></center>
            </td>    
 
 
        </tr>`
 
    for (let i = 0; i < list.length; i++) {
        // console.log("aici baa")
        // console.log(list[i])
        let labelName
        let villageId = list[i].coord_destination_id
        let playerId = list[i].player_destination_id
        let playerName = list[i].player_destination_name
        let headerNoble = headerColorCoords
        let titleColorNoble = titleColor
        let type_incoming = list[i].type_incoming
        console.log(type_incoming)
        if (list[i].labelName == "none")
            labelName = `<img src="https://dsen.innogamescdn.com/asset/056b9c0b/graphic/delete.png">`
        else
            labelName = `<img src="https://dsen.innogamescdn.com/asset/a9e85669/graphic/unit/tiny/${list[i].labelName}">`
 
        if (type_incoming.includes("support")) {
            let troops = list[i].troops
            let pop = 0
            Object.keys(troops).forEach(key => {
                pop += troops[key] * troopsPop[key]
            })
            labelName = pop
            if (list[i].hasSupportSnipe == true) {
                headerNoble = "#034a2f"
            }
            type_incoming = `https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/${type_incoming}`
 
 
        } else {
            //colore nobles
            if (labelName.includes("snob")) {
                headerNoble = "#3f0000" //red
                titleColorNoble = "#4dff4d" //green
            }
            type_incoming = `https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/${type_incoming}`
 
 
        }
 
        // console.log(list[i].labelName)
        let arrived = new Date(list[i].landing_time).getTime()
        if (arrived > date_current) {
            let date = list[i].landing_time.split(" ")[0]
            let time = list[i].landing_time.split(" ")[1].split(":")
            let milisec = time.pop()
            time = time.join(":")
 
            html_incomings += `
                    <tr style="white-space:nowrap;" >
                        <td  style="text-align:center; width:auto; background-color:${headerNoble}">
                            <center style="margin:0px;padding:0px"><font color="${titleColor}"><img src="${type_incoming}"> </font></center>
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
                            <center style="margin:0px;padding:0px"><font color="${titleColor}" date-time=${arrived} class="counterTime"></font></center>
 
                        </td>    
                        
                    </tr>
                `
        }
    }
    html_incomings += "</tbody>"
        // console.log(html_incomings)
    return html_incomings
}
 
function createTableImport() {
    let html_table = `
    <table id="table_import"  border="1" style="width: 40%;background-color:${backgroundColor};border-color:${borderColor};border-spacing:2px;border-collapse:separate;">
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <font style="margin:5px" color="${titleColor}">${"snipes for player"} 1</font>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <center style="margin:10px"><textarea class="textarea_snipes" cols="20" rows="5"></textarea><center>
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <font style="margin:5px" color="${titleColor}">${"snipes for player"} 2</font>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <center style="margin:10px"><textarea class="textarea_snipes" cols="20" rows="5"></textarea><center>
            </td>
        </tr>    
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <font style="margin:5px" color="${titleColor}">${"snipes for player"} 3</font>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <center style="margin:10px"><textarea class="textarea_snipes" cols="20" rows="5"></textarea><center>
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <font style="margin:5px" color="${titleColor}">${"snipes for player"} 4</font>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <center style="margin:10px"><textarea class="textarea_snipes" cols="20" rows="5"></textarea><center>
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <font style="margin:5px" color="${titleColor}">${"snipes for player"} 5</font>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <center style="margin:10px"><textarea class="textarea_snipes" cols="20" rows="5"></textarea><center>
            </td>
        </tr>
 
 
    </table>
    `
    if (document.getElementById("table_import") == null) {
        document.getElementById("div_import").innerHTML = html_table
 
        // initialize textarea with json files 
        if (localStorage.getItem(game_data.world + "snipes_json") != null) {
            console.log("initialization textarea")
            let list_json = JSON.parse(lzw_decode(localStorage.getItem(game_data.world + "snipes_json")))
            console.log(lzw_decode(localStorage.getItem(game_data.world + "snipes_json")).length)
 
            $("#div_export,#div_import").find("textarea").each((index, item) => {
                console.log(item.value)
                try {
                    // console.log(index)
                    let json_file = list_json[index]
                    let obj_player_data = JSON.parse(json_file)[0]
                    console.log(obj_player_data)
                    $(item).closest("tr").find("font").text(`${obj_player_data.playerName}\n ${"trains"}:(${obj_player_data.numberSnipes})`)
                    item.value = json_file
                    UI.SuccessMessage("load JSON data", 1000)
                } catch (error) {}
            })
 
        }
    } else {
        $("#div_export").hide()
        $("#div_settings").hide()
        $("#div_import").toggle(500)
    }
 
 
 
 
 
 
 
 
}
 
 
function createTableExport() {
    let html_table = `
    <table id="export_table"  border="1" style="width: 40%;background-color:${backgroundColor};border-color:${borderColor};border-spacing:2px;border-collapse:separate;">
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <font style="margin:5px" color="${titleColor}">${"your snipes"}</font>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <center style="margin:10px"><textarea id="own_snipes" class="textarea_snipes" cols="20" rows="5"></textarea><center>
            </td>
        </tr>
 
 
    </table>
 
    `
    if (document.getElementById("export_table") == null) {
        document.getElementById("div_export").innerHTML = html_table
    } else {
        $("#div_import").hide()
        $("#div_settings").hide()
        $("#div_export").toggle(500)
    }
 
}
 
function createTableSettings() {
    let html_table = `
    <table id="settings_table"  border="1" style="width: 50%;background-color:${backgroundColor};border-color:${borderColor}">
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="4">
                <div style="margin:10px"><font  color="${titleColor}">${"ignore train if it is already sniped with at least(pop)"} </font></div>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <input type="number" style="text-align:center;" id="already_sniped_pop" min="0" max="10000" placeholder="3000" value="3000">
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="4">
                <div style="margin:10px"><font  color="${titleColor}">${"snipe should have at least(pop)"} </font></div>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <input type="number" style="text-align:center;" id="snipe_pop" min="0" max="10000" placeholder="3000" value="3000">
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="4">
                <div style="margin:10px"><font color="${titleColor}">${"boost flag(%)"} </font></div>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <input type="number" style="text-align:center;" id="boost_flag" min="0" max="10000" placeholder="0" value="0">
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="4">
                <div style="margin:10px"><font  color="${titleColor}">${"show the first x launches"}</font></div>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <input type="number" style="text-align:center;" id="number_launches" min="0" max="50" placeholder="60" value="30">
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="4">
                <div style="margin:10px"><font  color="${titleColor}">${"snipes must be launched in less than(hours)"}</font></div>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <input type="number" style="text-align:center;" id="time_until_launch" min="0" max="200" placeholder="10" value="50">
            </td>
        </tr>
 
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="4">
                <div style="margin:10px"><font  color="${titleColor}">${"hide launches for speed heavy cavalry"}</font></div>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <center><input type="checkbox"  value="hide_speed_heavy"></center>
            </td>
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="4">
                <div style="margin:10px"><font  color="${titleColor}">${"hide launches for speed paladin"}</font></div>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <center><input type="checkbox"  value="hide_speed_paladin"></center>
            </td>
        </tr>   
 
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <div style="margin:10px"><font  color="${titleColor}">${"alarm sound when time left is less than(sec)"}</font></div>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <input type="number" style="text-align:center;" id="alarm_sound" min="0" max="500" placeholder="24" value="30">
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <div style="margin:10px"><font  color="${titleColor}">${"repeat(sec)"}</font></div>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor}" >
                <input type="number" style="text-align:center;" id="alarm_sound_repeat" min="5" max="500" placeholder="24" value="10">
            </td> 
            <td style="text-align:left; width:auto; background-color:${headerColor}" >
                <center><input type="checkbox"  value="check_alarm_sound"></center>
            </td>       
        </tr>  
        
 
    </table>
 
    `
    if (document.getElementById("settings_table") == null) {
        document.getElementById("div_settings").innerHTML = html_table
 
 
 
        if (localStorage.getItem(game_data.world + "snipes_settings_table") != null) {
            //initialize checkbox
            let list_checkbox = JSON.parse(localStorage.getItem(game_data.world + "snipes_settings_table"))[0]
            $('#div_settings input[type=checkbox]').each(function(index, elem) {
                this.checked = list_checkbox[index]
                    // console.log(elem.value)
            });
 
            //initialize input numbers
            let list_input = JSON.parse(localStorage.getItem(game_data.world + "snipes_settings_table"))[1]
            $('#div_settings input[type=number]').each(function(index, elem) {
                // console.log(elem)
                this.value = list_input[index]
            });
        }
 
 
 
        //save settings
        $("#div_settings input[type=number],#div_settings input[type=checkbox]").on("click input", () => {
            console.log("save settings")
            let list_checkbox = []
            let list_input = []
                //save checkbox
            $('#div_settings input[type=checkbox]').each(function() {
                var checked = this.checked
                list_checkbox.push(checked)
            });
            //save inputs
            $('#div_settings input[type=number]').each(function() {
                // var checked = this.checked
                var value = this.value
                    // console.log(value)
                list_input.push(value)
            });
            let list_final = [list_checkbox, list_input]
            let data = JSON.stringify(list_final)
            let data_localStorage = localStorage.getItem(game_data.world + "snipes_settings_table")
            console.log(data)
            console.log(data_localStorage)
            if (data != data_localStorage) {
                document.getElementById("div_table_view").innerHTML = ""
                document.getElementById("div_table_send").innerHTML = ""
                localStorage.setItem(game_data.world + "snipes_settings_table", data)
            }
 
        })
 
 
 
 
    } else {
        $("#div_import").hide()
        $("#div_export").hide()
        $("#div_settings").toggle(500)
    }
 
}
 
////////////////////////////////////////////////data compression////////////////////////////////////////////////////////////////////////////
function lzw_encode(s) {
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
            out.push(phrase.length > 1 ? dict.get(phrase) : phrase.codePointAt(0));
            dict.set(phrase + currChar, code);
            code++;
            if (code === 0xd800) { code = 0xe000; }
            phrase = currChar;
        }
    }
    out.push(phrase.length > 1 ? dict.get(phrase) : phrase.codePointAt(0));
    for (var i = 0; i < out.length; i++) {
        out[i] = String.fromCodePoint(out[i]);
    }
    //console.log ("LZW MAP SIZE", dict.size, out.slice (-50), out.length, out.join("").length);
    return out.join("");
}
////////////////////////////////////////////////data decompression////////////////////////////////////////////////////////////////////////////
function lzw_decode(s) {
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
 
function saveJsonToLocalStorage(showMessage) {
    let list_json = []
    $("#div_export,#div_import").find("textarea").each((index, item) => {
        // console.log(item)
        try {
            let textarea_JSON = JSON.parse(item.value)
            list_json.push(item.value)
            let obj_player_data = textarea_JSON[0]
            $(item).closest("tr").find("font").text(`${obj_player_data.playerName}\n ${"trains"}:(${obj_player_data.numberSnipes})`)
        } catch (error) {
            list_json.push("")
        }
    })
 
 
 
 
 
    let data = JSON.stringify(list_json)
    data = data.replaceAll("ţ", "t") //i don't know why but for some special caracters like this one compression algoritm now working properly
    let data_encode = lzw_encode(data)
        //check if data can be restored corectly otherwise it's pointless to save it in localstorage
    try {
        let data_decode = JSON.parse(lzw_decode(data)) //if doesn't throw an error=> data can be saved
        localStorage.setItem(game_data.world + "snipes_json", data_encode)
        console.log("JSON file saved in localStorage")
        if (showMessage)
            UI.SuccessMessage("Saved JSON object", 1500)
 
 
    } catch (error) {
        UI.ErrorMessage("JSON object cannot be saved because of special ASCII caracter", 3000)
    }
 
 
 
}
 
function calcDistance(coord1, coord2) {
    let x1 = parseInt(coord1.split("|")[0])
    let y1 = parseInt(coord1.split("|")[1])
    let x2 = parseInt(coord2.split("|")[0])
    let y2 = parseInt(coord2.split("|")[1])
 
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}
////////////////////////////////////////////////////speed constant/////////////////////////////////////////////////////////////////////////
 
function getSpeedConstant() { //Get speed constant (world speed * unit speed) for world
    if (localStorage.getItem(game_data.world + "speedWorld") !== null) {
        let obj = JSON.parse(localStorage.getItem(game_data.world + "speedWorld"))
        console.log("speed world already exist")
        return obj
    } else { //Get data from xml and save it in localStorage to avoid excessive XML requests to server
        let currentHtml = document.body.innerHTML
        document.body.innerHTML = httpGet("/interface.php?func=get_config") //Load world data
        let obj = {}
        let worldSpeed = Number(document.getElementsByTagName("speed")[0].innerHTML)
        let unitSpeed = Number(document.getElementsByTagName("unit_speed")[0].innerHTML);
        obj.unitSpeed = unitSpeed
        obj.worldSpeed = worldSpeed
        document.body.innerHTML = currentHtml
        localStorage.setItem(game_data.world + "speedWorld", JSON.stringify(obj));
        console.log("save speed world")
        return obj
    }
}
 
////////////////////////////////////////////////////////////////////////main function which calculates all possible snipes/////////////////////
 
function startSnipes() {
    // get coord and landing time for each train which is not sniped 
    let map_coming = new Map()
    let map_troops_home = new Map()
    let map_coming_snipes = new Map()
    let alread_pop_sniped = parseInt(document.getElementById("already_sniped_pop").value)
    let pop_snipe = parseInt(document.getElementById("snipe_pop").value)
    let boost_flag = parseInt(document.getElementById("boost_flag").value)
 
 
    let list_available = getTroopsSnipes(pop_snipe)
 
    document.getElementById("btn_start").setAttribute("get_troops", "true")
    Array.from($(".textarea_snipes")).forEach(item => {
        console.log(item)
        try {
            let data_list = JSON.parse(item.value)
            let obj_player_data = data_list[0] // no need here
            let map_coming_textarea = new Map(data_list[1])
            let map_troops_home_textarea = new Map(data_list[2])
            map_coming = new Map([...map_coming, ...map_coming_textarea])
            map_troops_home = new Map([...map_troops_home, ...map_troops_home_textarea])
 
        } catch (error) {
            console.log(error)
        }
    })
 
 
    //if a snipe was made or it is in the list of coord sniped then delete before creating snipes plan
    let data_coord_sniped = localStorage.getItem(game_data.world + "list_coord_sniped")
    if (data_coord_sniped != null) {
        Array.from(data_coord_sniped.split(" ")).forEach(coord => {
            if (map_coming.has(coord)) {
                map_coming.delete(coord)
            }
        })
    }
 
    console.log("map_coming", map_coming)
    console.log("map_troops_home", map_troops_home)
    console.log("list_available", list_available)
 
 
 
 
    let serverTime = document.getElementById("serverTime").innerText
    let serverDate = document.getElementById("serverDate").innerText.split("/")
    serverDate = serverDate[1] + "/" + serverDate[0] + "/" + serverDate[2]
    let date_current = new Date(serverDate + " " + serverTime).getTime()
    Array.from(map_coming.keys()).forEach(key => {
        let list_coming = map_coming.get(key)
        let sniped = false
 
 
        //counting attacks,supports, nobles, snipes, recaps
 
        for (let i = 0; i < list_coming.length; i++) { //iterate each village
            let landing_time = new Date(list_coming[i].landing_time).getTime()
            if (landing_time > date_current) {
 
                if (list_coming[i].labelName.includes("snob")) {
 
                    //check for train and if exist check for snipe
                    for (let j = i + 1; j < list_coming.length; j++) { //check if there is another noble at 50,100,150ms away
                        let landing_time_next = new Date(list_coming[j].landing_time).getTime()
                        if (landing_time_next - landing_time == 50 || landing_time_next - landing_time == 100 || landing_time_next - landing_time == 150) {
                            if (list_coming[i].coord_origin == list_coming[j].coord_origin) //there is a train
                            {
                                let pop = 0;
                                for (let k = j - 1; k >= 0; k--) {
 
                                    if (list_coming[k].type_incoming.includes("support")) { //there is a snipe(support before second noble),check every support from these 2 nobles
                                        let troops = list_coming[k].troops
                                        Object.keys(troops).forEach(key => {
                                            pop += troops[key] * troopsPop[key]
                                        })
                                    } else {
                                        break
                                    }
                                }
                                if (pop > alread_pop_sniped) { //it is already sniped
                                    sniped = true
                                } else { //it might need a snipe, but not sure yet
                                    map_coming_snipes.set(key, {
                                        coord_destination: list_coming[i].coord_destination,
                                        coord_destination_id: list_coming[i].coord_destination_id,
                                        landing_time: list_coming[i].landing_time,
                                        player_destination_name: list_coming[i].player_destination_name,
                                        player_destination_id: list_coming[i].player_destination_id
                                    })
                                }
                            }
                        }
                    }
 
                    if (sniped == true) { //it's already sniped, no need for another snipe
                        map_coming_snipes.delete(key)
                        map_coming.delete(key)
                        map_troops_home.delete(key)
                        console.log("it's already sniped")
                    }
 
                }
            }
        }
 
 
    })
    let list_snipes = []
    console.log(map_coming_snipes)
    let map_possible_snipes = new Map()
    let nr_snipes_ram = 0,
        nr_snipes_sword = 0,
        nr_snipes_spear = 0,
        nr_snipes_heavy = 0,
        nr_snipes_knight = 0
 
    let hideHeavy = $("input[type=checkbox][value=hide_speed_heavy]").is(":checked")
    let hidePaladin = $("input[type=checkbox][value=hide_speed_paladin]").is(":checked")
 
    Array.from(map_coming_snipes.keys()).forEach(key => {
        let obj = map_coming_snipes.get(key)
        map_possible_snipes.set(key, 0)
 
        for (let i = 0; i < list_available.length; i++) {
            let coord_send_snipe = list_available[i].coord
            let coord_destination = obj.coord_destination
            let coord_destination_id = obj.coord_destination_id
 
            let player_destination_name = obj.player_destination_name
            let player_destination_id = obj.player_destination_id
 
            let distance = calcDistance(coord_destination, coord_send_snipe)
            let availableTroupes = JSON.parse(JSON.stringify(list_available[i].availableTroupes)) // make a clone object
            let availableTroupesCopy = JSON.parse(JSON.stringify(list_available[i].availableTroupes)) // make a clone object
            let landing_time = obj.landing_time
 
            if (distance == 0)
                continue;
 
            // create snipes for speed ram/cat
            if (availableTroupes.ram > 0 || availableTroupes.catapult > 0) {
                let [templateSnipes, total_pop, pop_snipes_sent, possible_snipes] = createTemplateSnipe(availableTroupes, pop_snipe)
                let travelingTime = distance * speedTroops["ram"] // time in ms
                travelingTime = travelingTime / (1 + boost_flag / 100.0) //if boost flag is on 
 
                let landing_time_ms = new Date(landing_time).getTime() //time in ms
                let time_launch = landing_time_ms - travelingTime
                    //check if it's possible to be launched in time
                if (time_launch > date_current && possible_snipes > 0) {
                    time_launch = Math.round((time_launch / 1000)) * 1000
                    let launch_time = parseDate(time_launch)
                    list_snipes.push({
                            coord_destination: coord_destination,
                            coord_destination_id: coord_destination_id,
                            player_destination_name: player_destination_name,
                            player_destination_id: player_destination_id,
                            launch_time: launch_time,
                            landing_time: landing_time,
                            availableTroupes: availableTroupesCopy,
                            templateSnipes: templateSnipes,
                            total_pop: total_pop,
                            pop_snipes_sent: pop_snipes_sent,
                            linkBase: list_available[i].linkBase,
                            speed: "ram"
                        })
                        //calculates how many snipes i have for each coord
                    let count = map_possible_snipes.get(key)
                    count++;
                    map_possible_snipes.set(key, count)
                }
                nr_snipes_ram += possible_snipes
            }
            delete availableTroupes.ram
            delete availableTroupes.catapult
 
            // create snipes for speed sword
            if (availableTroupes.sword > 0) {
                let [templateSnipes, total_pop, pop_snipes_sent, possible_snipes] = createTemplateSnipe(availableTroupes, pop_snipe)
                let travelingTime = distance * speedTroops["sword"] // time in ms
                travelingTime = travelingTime / (1 + boost_flag / 100.0) //if boost flag is on 
 
                let landing_time_ms = new Date(landing_time).getTime() //time in ms
                let time_launch = landing_time_ms - travelingTime
                    //check if it's possible to be launched in time
                if (time_launch > date_current && possible_snipes > 0) {
                    time_launch = Math.round((time_launch / 1000)) * 1000
                    let launch_time = parseDate(time_launch)
                    list_snipes.push({
                            coord_destination: coord_destination,
                            coord_destination_id: coord_destination_id,
                            player_destination_name: player_destination_name,
                            player_destination_id: player_destination_id,
                            launch_time: launch_time,
                            landing_time: landing_time,
                            availableTroupes: availableTroupesCopy,
                            templateSnipes: templateSnipes,
                            total_pop: total_pop,
                            pop_snipes_sent: pop_snipes_sent,
                            linkBase: list_available[i].linkBase,
                            speed: "sword"
                        })
                        //calculates how many snipes i have for each coord
                    let count = map_possible_snipes.get(key)
                    count++;
                    map_possible_snipes.set(key, count)
                }
                nr_snipes_sword += possible_snipes
            }
 
            delete availableTroupes.sword
                // create snipes for speed spear
            if (availableTroupes.spear > 0) {
                let [templateSnipes, total_pop, pop_snipes_sent, possible_snipes] = createTemplateSnipe(availableTroupes, pop_snipe)
                let travelingTime = distance * speedTroops["spear"] // time in ms
                travelingTime = travelingTime / (1 + boost_flag / 100.0) //if boost flag is on 
 
                let landing_time_ms = new Date(landing_time).getTime() //time in ms
                let time_launch = landing_time_ms - travelingTime
                    //check if it's possible to be launched in time
                if (time_launch > date_current && possible_snipes > 0) {
                    time_launch = Math.round((time_launch / 1000)) * 1000
                    let launch_time = parseDate(time_launch)
                    list_snipes.push({
                            coord_destination: coord_destination,
                            coord_destination_id: coord_destination_id,
                            player_destination_name: player_destination_name,
                            player_destination_id: player_destination_id,
                            launch_time: launch_time,
                            landing_time: landing_time,
                            availableTroupes: availableTroupesCopy,
                            templateSnipes: templateSnipes,
                            total_pop: total_pop,
                            pop_snipes_sent: pop_snipes_sent,
                            linkBase: list_available[i].linkBase,
                            speed: "spear"
                        })
                        //calculates how many snipes i have for each coord
                    let count = map_possible_snipes.get(key)
                    count++;
                    map_possible_snipes.set(key, count)
                }
                nr_snipes_spear += possible_snipes
            }
 
            delete availableTroupes.spear
            delete availableTroupes.archer
 
            // create snipes for speed heavy
            if (availableTroupes.heavy > 0 && hideHeavy == false) { //hide heavy speed launches if it is checked
                let [templateSnipes, total_pop, pop_snipes_sent, possible_snipes] = createTemplateSnipe(availableTroupes, pop_snipe)
                let travelingTime = distance * speedTroops["heavy"] // time in ms
                travelingTime = travelingTime / (1 + boost_flag / 100.0) //if boost flag is on 
 
                let landing_time_ms = new Date(landing_time).getTime() //time in ms
                let time_launch = landing_time_ms - travelingTime
                    //check if it's possible to be launched in time
                if (time_launch > date_current && possible_snipes > 0) {
                    time_launch = Math.round((time_launch / 1000)) * 1000
                    let launch_time = parseDate(time_launch)
                    list_snipes.push({
                            coord_destination: coord_destination,
                            coord_destination_id: coord_destination_id,
                            player_destination_name: player_destination_name,
                            player_destination_id: player_destination_id,
                            launch_time: launch_time,
                            landing_time: landing_time,
                            availableTroupes: availableTroupesCopy,
                            templateSnipes: templateSnipes,
                            total_pop: total_pop,
                            pop_snipes_sent: pop_snipes_sent,
                            linkBase: list_available[i].linkBase,
                            speed: "heavy"
                        })
                        //calculates how many snipes i have for each coord
                    let count = map_possible_snipes.get(key)
                    count++;
                    map_possible_snipes.set(key, count)
                }
                nr_snipes_heavy += possible_snipes
            }
 
 
            delete availableTroupes.heavy
 
            // create snipes for speed paladin
            if (availableTroupes.knight > 0 && hidePaladin == false) { //hide paladin speed launches if it is checked
                let [templateSnipes, total_pop, pop_snipes_sent, possible_snipes] = createTemplateSnipe(availableTroupesCopy, pop_snipe)
                let travelingTime = distance * speedTroops["knight"] // time in ms
                travelingTime = travelingTime / (1 + boost_flag / 100.0) //if boost flag is on 
 
                let landing_time_ms = new Date(landing_time).getTime() //time in ms
                let time_launch = landing_time_ms - travelingTime
                    //check if it's possible to be launched in time
                if (time_launch > date_current && possible_snipes > 0) {
                    time_launch = Math.round((time_launch / 1000)) * 1000
                    let launch_time = parseDate(time_launch)
                    list_snipes.push({
                            coord_destination: coord_destination,
                            coord_destination_id: coord_destination_id,
                            player_destination_name: player_destination_name,
                            player_destination_id: player_destination_id,
                            launch_time: launch_time,
                            landing_time: landing_time,
                            availableTroupes: availableTroupesCopy,
                            templateSnipes: templateSnipes,
                            total_pop: total_pop,
                            pop_snipes_sent: pop_snipes_sent,
                            linkBase: list_available[i].linkBase,
                            speed: "knight"
                        })
                        //calculates how many snipes i have for each coord
                    let count = map_possible_snipes.get(key)
                    count++;
                    map_possible_snipes.set(key, count)
                }
                nr_snipes_knight += possible_snipes
            }
 
 
        }
 
    })
    console.log("list_snipes", list_snipes)
 
    list_snipes.sort((o1, o2) => {
        return (new Date(o1.launch_time).getTime() > new Date(o2.launch_time).getTime()) ? 1 : (new Date(o1.launch_time).getTime() < new Date(o2.launch_time).getTime()) ? -1 : 0
    })
    let obj_snipes_total = {
        ram: parseInt(nr_snipes_ram / map_coming_snipes.size),
        sword: parseInt(nr_snipes_sword / map_coming_snipes.size),
        spear: parseInt(nr_snipes_spear / map_coming_snipes.size),
        heavy: parseInt(nr_snipes_heavy / map_coming_snipes.size),
        knight: parseInt(nr_snipes_knight / map_coming_snipes.size),
        total_trains: map_coming_snipes.size
    }
    if (!game_data.units.includes("knight"))
        delete obj_snipes_total.knight
 
 
    createTableSnipes(list_snipes, map_possible_snipes, obj_snipes_total)
    createTableViewIncomings(map_troops_home, map_coming, map_possible_snipes)
 
 
    //create event for exporting plan snipes in notebook
    document.getElementById("btn_export_plan").addEventListener("click", () => {
        let output = `${"launch time ---------------> landing time ----------------->send"}\n\n`
        let list_output = []
        let nr_snipes = 0
        for (let i = 0; i < list_snipes.length; i++) {
            /////create link
            let link = list_snipes[i].linkBase
            let templateSnipes = list_snipes[i].templateSnipes
            let coord_destination = list_snipes[i].coord_destination
            let landing_time = list_snipes[i].landing_time
 
            if (list_snipes[i].speed != "ram")
                delete templateSnipes.ram
            if (list_snipes[i].speed != "catapult")
                delete templateSnipes.catapult
            if (list_snipes[i].speed != "knight")
                delete templateSnipes.knight
 
 
 
            let launch_time = list_snipes[i].launch_time
            Object.keys(templateSnipes).forEach(key => {
                link += `&${key}=${templateSnipes[key]}`
            })
            link += `&x=${coord_destination.split("|")[0]}`
            link += `&y=${coord_destination.split("|")[1]}`
 
 
            ////create launch string
            let time = landing_time.split(":")
            let miliseconds = time.pop()
            time = time.join(":")
 
            let line = ""
            if (i != list_snipes.length - 1) {
                let launch_time_next = list_snipes[i + 1].launch_time
                if (new Date(launch_time_next).getHours() != new Date(launch_time).getHours()) //if between 2 launches is one hour diff add extra endline
                    line = `${launch_time} --> ${time}:${miliseconds} -->[url=${link}]${coord_destination}[/url]\n\n`
                else
                    line = `${launch_time} --> ${time}:${miliseconds} -->[url=${link}]${coord_destination}[/url]\n`
 
            } else {
                line = `${launch_time} --> ${time}:${miliseconds} -->[url=${link}]${coord_destination}[/url]\n`
            }
            console.log(output)
            if (output.length + line.length < 59500) { //limit caracters on notebook
                output += line
                nr_snipes++
            } else {
                list_output.push({ // create multiple plans
                    output: output,
                    nr_snipes: nr_snipes
                })
 
                output = `${"launch time ---------------> landing time ----------------->send"}\n\n`
                nr_snipes = 0
                console.log("too many caracters for notebook")
            }
        }
 
        list_output.push({
            output: output,
            nr_snipes: nr_snipes
        })
 
        //create html content for exporting plan
        let content = `
        <center>
            <h2> Export plan snipes</h2>
                <div style="width: 500px;margin:20px">
                    <table id="export_plan"  border="1" style="width: 95%;background-color:${backgroundColor};border-color:${borderColor};">
        `
 
        for (let i = 0; i < list_output.length; i++) {
            content += `
                <tr>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center  style="margin:5px"><font color="${titleColor}">${"launches"}(${list_output[i].nr_snipes})</font></center>
                    </td>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <center style="margin:5px"><textarea cols="40" rows="8" >${list_output[i].output}</textarea><center>
                    </td>
                </tr>
            `
        }
 
        content += `           
                </table>
            </div>
        </center>
        `
        Dialog.show('content', content)
 
        console.log(list_output)
        console.log(output.length)
        console.log(output.split("\n").length)
    })
 
 
 
 
}
 
 
function createTableSnipes(list_snipes, map_possible_snipes, obj_snipes_total) {
    let snipes_def_home = Object.keys(obj_snipes_total)
    for (let i = 0; i < snipes_def_home.length; i++)
        obj_snipes_total[snipes_def_home[i]] = (Number.isNaN(obj_snipes_total[snipes_def_home[i]])) ? 0 : obj_snipes_total[snipes_def_home[i]] // if is NaN initialize with 0
 
 
    let html_table_send = `
    <div id="table_send_snipes">
 
    <div style="display:flex;justify-content: center;width:100%">
        <div style="width: 45%;margin:10px">
            <table id="sniped_list"  border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor};">
            <tr>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center  style="margin:5px"><font color="${titleColor}">${"trains sniped"} <b id="nr_sniped_made">(0)</b></font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center style="margin:5px"><textarea id="list_sniped_coord" cols="40" rows="6" placeholder="coords.."></textarea><center>
                </td>
 
            </tr>
            </table>
        </div>
 
 
 
    <div style="width:45%;margin:10px">
    <table id="view_snipes_total"  border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor};">
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor}" rowspan="2">
                <center  style="margin:5px"><font color="${titleColor}">${"total trains"} </font></center>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColor}" rowspan="2">
                <center style="margin:5px" ><font color="${titleColor}">${"total launches"} </font></center>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="${snipes_def_home.length-1}">
                <center style="margin:5px" ><font color="${titleColor}">${"def home for snipes"} </font></center>
            </td>
        </tr>
        <tr>
            `
 
 
 
    for (let i = 0; i < snipes_def_home.length - 1; i++) {
        html_table_send += `
        <td style="text-align:left; width:auto; background-color:${headerColor}" >
            <center style="margin:5px;"><img src="https://dsen.innogamescdn.com/asset/c2dee33a/graphic/unit/unit_${snipes_def_home[i]}.png" style="background-color:${titleColor}"></center>
        </td>
        `
    }
    html_table_send += `
        </tr>
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColor};height:54px">
                <center  style="margin:5px"><font color="${titleColor}">${obj_snipes_total.total_trains} </font></center>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColor};height:54px" >
                <center  style="margin:5px"><font color="${titleColor}">${list_snipes.length} </font></center>
            </td>
        `
    for (let i = 0; i < snipes_def_home.length - 1; i++) {
        html_table_send += `
            <td style="text-align:left; width:auto; background-color:${headerColor};height:54px" >
                <center  style="margin:5px"><font color="${titleColor}">${obj_snipes_total[snipes_def_home[i]]} </font></center>
            </td>
            `
    }
 
 
    html_table_send += `</tr>
        </table></div></div>`
 
 
 
 
    html_table_send += `
    <br>
    <div  style="height:400px;overflow:auto;">
    <table  border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor};border-spacing:2px;border-collapse:separate;">
        <thead>
            <tr>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center style="margin:10px"><font color="${titleColor}">${"info"}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="2">
                    <center style="margin:10px"><font color="${titleColor}">${"status"}</font></center>
                </td>
                
                <td style="text-align:left; width:auto; background-color:${headerColor}" colspan="3">
                    <center style="margin:10px"><font color="${titleColor}">${"destination"}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center style="margin:10px"><font color="${titleColor}">${"launch time"}</font></center>
                </td>
                
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center style="margin:10px"><font color="${titleColor}">${"landing time"}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center style="margin:10px"><font color="${titleColor}">${"time left"}</font></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center style="margin:10px"><font color="${titleColor}">${"speed"}</font></center>
                </td>
                
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center style="margin:10px;padding:0px"><img src="https://dsen.innogamescdn.com/asset/c2dee33a/graphic/unit/unit_spear.png" style="background-color:${titleColor}"></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center style="margin:10px;padding:0px"><img src="https://dsen.innogamescdn.com/asset/c2dee33a/graphic/unit/unit_sword.png" style="background-color:${titleColor}"></center>
                </td>`
 
    if (game_data.units.includes("archer")) { //add archers if exist
        html_table_send += `                
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center style="margin:10px;padding:0px"><img src="https://dsen.innogamescdn.com/asset/c2dee33a/graphic/unit/unit_archer.png" style="background-color:${titleColor}"></center>
                </td>`
    }
 
    html_table_send +=
        `<td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center style="margin:10px;padding:0px"><img src="https://dsen.innogamescdn.com/asset/c2dee33a/graphic/unit/unit_heavy.png" style="background-color:${titleColor}"></center>
                </td>
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center style="margin:10px"><font color="${titleColor}">${"pop"}</font></center>
                </td>                
                <td style="text-align:left; width:auto; background-color:${headerColor}" >
                    <center style="margin:10px"><font color="${titleColor}">${"open"}</font></center>
                </td>
            </tr>
        </thead>
        <tbody>`
 
    let limitShowSnipes = parseInt(document.getElementById("number_launches").value)
    let length_snipes = Math.min(list_snipes.length, limitShowSnipes)
 
    for (let i = 0; i < length_snipes; i++) {
        let spearTemplate = (list_snipes[i].templateSnipes["spear"] != undefined) ? list_snipes[i].templateSnipes["spear"] : 0
        let swordTemplate = (list_snipes[i].templateSnipes["sword"] != undefined) ? list_snipes[i].templateSnipes["sword"] : 0
        let archerTemplate = (list_snipes[i].templateSnipes["archer"] != undefined) ? list_snipes[i].templateSnipes["archer"] : 0
        let heavyTemplate = (list_snipes[i].templateSnipes["heavy"] != undefined) ? list_snipes[i].templateSnipes["heavy"] : 0
 
        let ramTemplate = (list_snipes[i].templateSnipes["ram"] != undefined) ? list_snipes[i].templateSnipes["ram"] : 0
        let catTemplate = (list_snipes[i].templateSnipes["catapult"] != undefined) ? list_snipes[i].templateSnipes["catapult"] : 0
        let paladinTemplate = (list_snipes[i].templateSnipes["knight"] != undefined) ? list_snipes[i].templateSnipes["knight"] : 0
        paladinTemplate = (list_snipes[i].speed == "knight") ? 1 : 0
 
        console.log("paladinTemplate", paladinTemplate)
        let date = list_snipes[i].landing_time.split(" ")[0]
        let time = list_snipes[i].landing_time.split(" ")[1].split(":")
        let milisec = time.pop()
        time = time.join(":")
 
        let linkBase = list_snipes[i].linkBase
 
        let arrived = new Date(list_snipes[i].launch_time).getTime()
        let nr_possible_snipes = map_possible_snipes.get(list_snipes[i].coord_destination)
        nr_possible_snipes = (nr_possible_snipes != undefined) ? nr_possible_snipes : 0 //if it's undefined intialize with 0
 
 
 
        let headerColorAlternate = headerColor
        if (i % 2 == 0)
            headerColorAlternate = headerColorEven
 
 
        html_table_send += `
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColorAlternate}" rowspan="2">
                <a href="#" style="margin:0px" ><center ><font color="${titleColor}"><img  class="infoCoord" coord-id="${list_snipes[i].coord_destination}" src="https://img.icons8.com/bubbles/25/000000/more.png"/></font></center></a>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColorAlternate}" rowspan="2">
                <center style="margin:0px"><input class="btn evt-confirm-btn btn-confirm-no btn_failed" type="button" value="${"failed"}"></center>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColorAlternate}" rowspan="2">
                <center style="margin:0px"><input class="btn evt-confirm-btn btn-confirm-yes btn_done" type="button" value="${"done"}"></center>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColorAlternate}" rowspan="2">
                <center style="margin:0px"><font color="${titleColor}">(${nr_possible_snipes})</font></center>
            </td>
 
            <td style="text-align:center; width:auto; background-color:${headerColorAlternate}" rowspan="2"> 
                <a href="${game_data.link_base_pure}info_village&id=${list_snipes[i].coord_destination_id}" style="margin:0px"><center><font class="coord_dest" color="${titleColor}">${list_snipes[i].coord_destination}</font></center></a>
            </td>
            
            <td style="text-align:center; width:auto; background-color:${headerColorAlternate}" rowspan="2">
                <a href="${game_data.link_base_pure}info_player&id=${list_snipes[i].player_destination_id}" style="margin:0px"><center><font color="${titleColor}">${list_snipes[i].player_destination_name}</font></center></a>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColorAlternate}" rowspan="2">
                <center style="margin:0px"><font color="${titleColor}">${list_snipes[i].launch_time}</font></center>
            </td>
            
            <td style="text-align:center; width:auto; background-color:${headerColorAlternate}" rowspan="2">
                <center style="margin:0px;padding:0px"><font color="${titleColor}">${date} <b>${time} <font color="${titleColorNoble}"> ${milisec}</font></b> </font></center>
            </td>  
            <td style="text-align:center; width:auto; background-color:${headerNoble}" rowspan="2">
                <center style="margin:0px;padding:0px"><font color="${titleColor}" date-time=${arrived} class="counterTime alarmSound"></font></center>
            </td>  
 
            <td  style="text-align:center; width:auto; background-color:${headerColorAlternate}" rowspan="2">
            <center style="margin:0px;padding:0px"><img src="https://dsen.innogamescdn.com/asset/c2dee33a/graphic/unit/unit_${list_snipes[i].speed}.png" style="background-color:${titleColorRed}"></center>
            </td>  
            
            <td style="text-align:left; width:auto; background-color:${headerColorAlternate}" >
                <center><input type="number"  style="text-align:center;background-color:${headerColorAlternate};color:${titleColor}"  min="0" max="10000" value="${list_snipes[i].availableTroupes["spear"]}" disabled></center>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColorAlternate}" >
                <center><input type="number"  style="text-align:center;background-color:${headerColorAlternate};color:${titleColor}" min="0" max="10000"  value="${list_snipes[i].availableTroupes["sword"]}" disabled></center>
            </td>`
 
        if (game_data.units.includes("archer")) { //add archers if exist
            html_table_send += `    
                <td style="text-align:left; width:auto; background-color:${headerColorAlternate}" >
                    <center><input type="number" style="text-align:center;background-color:${headerColorAlternate};color:${titleColor}" min="0" max="10000" value="${list_snipes[i].availableTroupes["archer"]}" disabled></center>
                </td>`
        }
        html_table_send += `
            <td style="text-align:left; width:auto; background-color:${headerColorAlternate}" >
                <center><input type="number"  style="text-align:center;background-color:${headerColorAlternate};color:${titleColor}" min="0" max="10000" value="${list_snipes[i].availableTroupes["heavy"]}" disabled></center>
            </td>                
            
            
            <td style="text-align:left; width:auto; background-color:${headerColorAlternate}" >
                <center style="margin:0px"><font color="${titleColor}">${list_snipes[i].total_pop}</font></center>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColorAlternate}" rowspan="2">
                <center style="margin:0px"><input class="btn go_to_rally" type="button" ram="${ramTemplate}" cat="${catTemplate}" paladin="${paladinTemplate}" linkBase="${linkBase}" coord-dest="${list_snipes[i].coord_destination}" value="${"send"}"></center>
            </td>
        </tr>
 
 
 
        <tr>
            <td style="text-align:left; width:auto; background-color:${headerColorAlternate}" >
                <center><input type="number" class='units' unit-name='spear' style="text-align:center;"  min="0" max="${list_snipes[i].availableTroupes["spear"]}" placeholder="3000" value="${spearTemplate}"></center>
            </td>
            <td style="text-align:left; width:auto; background-color:${headerColorAlternate}" >
                <center><input type="number" class='units' unit-name='sword' style="text-align:center;"  min="0" max="${list_snipes[i].availableTroupes["sword"]}" placeholder="3000" value="${swordTemplate}"></center>
            </td>`
 
        if (game_data.units.includes("archer")) { //add archers if exist
            html_table_send += `    
                <td style="text-align:left; width:auto; background-color:${headerColorAlternate}" >
                    <center><input type="number" class='units' unit-name='archer' style="text-align:center;"  min="0" max="${list_snipes[i].availableTroupes["archer"]}" placeholder="3000" value="${archerTemplate}"></center>
                </td>`
        }
 
        html_table_send += `
            <td style="text-align:left; width:auto; background-color:${headerColorAlternate}" >
                <center><input type="number" class='units' unit-name='heavy' style="text-align:center;"  min="0" max="${list_snipes[i].availableTroupes["heavy"]}" placeholder="3000" value="${heavyTemplate}"></center>
            </td>   
            <td style="text-align:left; width:auto; background-color:${headerColorAlternate}" >
                <center style="margin:0px"><font color="${titleColor}"><b class="pop_sent">${list_snipes[i].pop_snipes_sent}</b></font></center>
            </td>  
        </tr>`
 
    }
 
 
 
    html_table_send += `</tbody></table></div></div>`
 
 
    //initialization
    document.getElementById("div_table_send").innerHTML = html_table_send
 
 
    //add event for column info, when it's pressed show incoming on that village
    $("#table_send_snipes").find(".infoCoord").on("click", (event) => {
 
        let coord = event.target.getAttribute("coord-id")
        $("#div_table_send").hide()
        $("#div_table_view").show()
 
        if ($("#table_view").find(`.table_coord`).attr("coord-id") != coord)
            $("#table_view").find(`.infoCoord[coord-id='${coord}']`).click()
    })
 
    //get data from inputs, create link and then open a new window to rally point
    $("#table_send_snipes").find(".go_to_rally").on("click", (event) => {
 
        let nr_ram = event.target.getAttribute("ram")
        let nr_cat = event.target.getAttribute("cat")
        let nr_paladin = event.target.getAttribute("paladin")
        let linkBase = event.target.getAttribute("linkBase")
        let coord_dest = event.target.getAttribute("coord-dest").split("|")
        console.log(event.target)
        event.target.style.backgroundColor = headerColorGray
        event.target.style.color = titleColor
        event.target.classList.remove("btn")
 
        console.log("nr_ram", nr_ram)
        console.log("nr_cat", nr_cat)
        console.log("nr_paladin", nr_paladin)
 
        $(event.target).closest("tr").next().find(".units").each((index, item) => {
            let unit_name = item.getAttribute("unit-name")
            let unit_value = item.value
            linkBase += `&${unit_name}=${unit_value}`
        })
        if (nr_ram > 0)
            linkBase += `&ram=${nr_ram}`
        if (nr_cat > 0)
            linkBase += `&catapult=${nr_cat}`
        if (nr_paladin > 0)
            linkBase += `&knight=${nr_paladin}`
 
        linkBase += `&x=${coord_dest[0]}&y=${coord_dest[1]}`
        console.log(linkBase)
        window.open(linkBase)
    })
 
 
    //update population total send when inputs are modified
    $(".units").on("input", (event) => {
        console.log("change input")
        let pop_total_send = 0
        $(event.target).closest("tr").find(".units").each((index, item) => {
            let unit_name = item.getAttribute("unit-name")
            let unit_value = parseInt(item.value)
            let max_value = parseInt(item.getAttribute("max")) //in case there are given more  number of troops more than exist
            item.value = Math.min(unit_value, max_value)
 
            pop_total_send += Math.min(unit_value, max_value) * troopsPop[unit_name]
        })
        $(event.target).closest("tr").find(".pop_sent").text(pop_total_send)
 
    })
 
    //add event for btn failed, if a snipe has failed delete row and keep the rest of launches for that village
    $(".btn_failed").on("click", (event) => {
        let trUp = $(event.target).closest("tr")
        let trDown = $(event.target).closest("tr").next()
        $(trUp).hide(500)
        $(trDown).hide(500)
        window.setTimeout(() => {
            trUp.remove()
            trDown.remove()
            console.log("remove failed launch")
        }, 500)
    })
 
 
    //add event for btn failed, if a snipe has failed delete row and keep the rest of launches for that village
    $(".btn_done").on("click", (event) => {
        let trUp = $(event.target).closest("tr")
        let trDown = $(event.target).closest("tr").next()
        let coord_dest = $(trUp).find(".coord_dest").text()
        let list_coord = $("#list_sniped_coord").val() + " " + coord_dest
        let data = [...new Set(list_coord.match(/[0-9]{3}\|[0-9]{3}/g))].join(" ")
 
 
        if (confirm(`train on ${coord_dest} is sniped?`)) {
            $(trUp).hide(100)
            $(trDown).hide(100)
 
            localStorage.setItem(game_data.world + "list_coord_sniped", data)
            window.setTimeout(() => {
                trUp.remove()
                trDown.remove()
                UI.SuccessMessage("update snipe list", 1500)
                startSnipes()
                console.log("remove failed launch")
            }, 100)
        }
    })
 
 
    //initialize list coord sniped
    let data = localStorage.getItem(game_data.world + "list_coord_sniped")
    if (data != null && data != "") {
        let nr_coords = data.split(" ").length
        $("#list_sniped_coord").val(data)
        $("#nr_sniped_made").text(nr_coords)
 
    }
 
 
    //save list coord sniped
    $("#list_sniped_coord").on("mouseout", () => {
 
        let list_coord = $("#list_sniped_coord").val().match(/[0-9]{3}\|[0-9]{3}/g)
        if (list_coord != null) {
            let data = [...new Set($("#list_sniped_coord").val().match(/[0-9]{3}\|[0-9]{3}/g))]
            let nr_coords = data.length
            data = data.join(" ")
 
            $("#list_sniped_coord").val(data)
            $("#nr_sniped_made").text(nr_coords)
 
            console.log("save coord sniped")
            localStorage.setItem(game_data.world + "list_coord_sniped", data)
        } else {
            $("#nr_sniped_made").text(0)
            localStorage.setItem(game_data.world + "list_coord_sniped", "")
        }
 
 
 
    })
 
 
 
 
}
 
 
function createTemplateSnipe(availableTroupes, pop_snipe) {
    let total_pop = 0,
        pop_snipes_sent = 0; //population
    let possible_snipes = 0
    let templateSnipes = {}
    Object.keys(availableTroupes).forEach(key => {
        total_pop += availableTroupes[key] * troopsPop[key]
    })
    possible_snipes = total_pop / pop_snipe
    Object.keys(availableTroupes).forEach(key => {
        templateSnipes[key] = parseInt(availableTroupes[key] / possible_snipes)
        pop_snipes_sent += templateSnipes[key] * troopsPop[key]
    })
    possible_snipes = parseInt(possible_snipes)
 
    if (availableTroupes.knight > 0)
        templateSnipes.knight = 1
    if (availableTroupes.ram > 0)
        templateSnipes.ram = 1
    if (availableTroupes.catapult > 0)
        templateSnipes.catapult = 1
 
    return [templateSnipes, total_pop, pop_snipes_sent, possible_snipes]
}
 
function parseDate(time) {
    let date = new Date(time)
 
    let year = date.getFullYear();
    let month = ("00" + (date.getMonth() + 1)).slice(-2)
    let day = ("00" + date.getDate()).slice(-2)
    let hours = ("00" + date.getHours()).slice(-2)
    let minutes = ("00" + date.getMinutes()).slice(-2)
    let seconds = ("00" + date.getSeconds()).slice(-2)
    let result = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`
    return result
}
 
function showSnipes() {
    if (document.getElementById("table_send_snipes") == null)
        UI.ErrorMessage("press on start", 1500)
    else {
        $("#div_table_view").hide()
        $("#div_table_send").toggle(500)
    }
 
 
}
 
function showIncoming() {
    if (document.getElementById("table_send_snipes") == null)
        UI.ErrorMessage("press on start", 1500)
    else {
        $("#div_table_send").hide()
        $("#div_table_view").toggle(500)
    }
}
 
 
function notebookDeleteCoords() {
 
    let html_remove = `    
            <div style="width: 45%;margin:10px">
                <table id="sniped_list"  border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor};">
                <tr>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <input class="btn evt-confirm-btn btn-confirm-yes" type="button" id="btn_notebook_sent" style="margin:10px" value="${"Delete coords"}">
                    </td>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" rowspan="2">
                        <center style="margin:5px"><input type="text" style="text-align:left;" id="save_notebook_coord" min="0" max="10000" placeholder="coords.." ></center>
 
                    </td>
                </tr>
    
                <tr>
                    <td style="text-align:left; width:auto; background-color:${headerColor}" >
                        <input class="btn evt-confirm-btn btn-confirm-yes" type="button" onclick="createMainInterface()" style="margin:10px" value="${"Open interface"}">
                    </td>
                </tr>
    
    
                </table>
            </div>
    `
    if (window.location.href.includes("screen=memo") && $(".edit_row:visible").length > 0) {
        closeWindow()
        $(".edit_row:visible").find("textarea").closest("table").prepend(html_remove)
 
 
        //initialization textarea notebook
        let data_textarea = localStorage.getItem(game_data.world + "textare_notebook")
        if (data_textarea != null) {
            $("#save_notebook_coord").val(data_textarea)
        }
 
        //delete launches from notebook
        $("#btn_notebook_sent").on("click", () => {
            let list_launch = Array.from($(".edit_row:visible").find("textarea").val().split("\n")) //get each launch
            let coords = $("#save_notebook_coord").val().match(/[0-9]{3}\|[0-9]{3}/g)
            let nr_launches_removed = 0
 
            let serverTime = document.getElementById("serverTime").innerText
            let serverDate = document.getElementById("serverDate").innerText.split("/")
            serverDate = serverDate[1] + "/" + serverDate[0] + "/" + serverDate[2]
            let date_current = new Date(serverDate + " " + serverTime).getTime()
 
 
            if (coords != null) {
                //if a launch is expired
                for (let i = 0; i < list_launch.length; i++) {
                    let launch_time = new Date(list_launch[i].split("-->")[0]).getTime()
                    if (date_current > launch_time) {
                        list_launch.splice(i, 1)
                        i--
                        nr_launches_removed++
                        console.log("remove coords from launch list(expired)")
                    }
                }
 
                //if a snipe was done
                for (let i = 0; i < coords.length; i++) { //each coord
                    for (let j = 0; j < list_launch.length; j++) { //each launch
                        if (list_launch[j].includes(coords[i])) { //remove coord from list launch
                            list_launch.splice(j, 1)
                            j--
                            nr_launches_removed++
                            console.log("remove coords from launch list")
                        }
                    }
                }
 
                // console.log(list_launch)
                let output = list_launch.join("\n")
                $(".edit_row:visible").find("textarea").val(output)
                UI.SuccessMessage(nr_launches_removed + " launches have been removed", 1500)
            } else {
                UI.ErrorMessage("no coords")
            }
        })
 
        //save coords in localstorage
        $("#save_notebook_coord").on("mouseout", () => {
            let coords = $("#save_notebook_coord").val().match(/[0-9]{3}\|[0-9]{3}/g)
            coords = [...new Set(coords)] //eliminate duplicates
            if (coords != null) {
                $("#save_notebook_coord").val(coords.join(" "))
                localStorage.setItem(game_data.world + "textare_notebook", coords.join(" "))
                console.log("save noteboox textarea")
            }
        })
 
 
    }
}
notebookDeleteCoords()
