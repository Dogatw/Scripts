var minExclamationCount = 0;


for (var key in troops) minExclamationCount += "min!" == troops[key] ? 1 : 0;
for (var zz = [], i = 0, u = game_data.units; i < u.length; i++) "ram" != u[i] && "catapult" != u[i] || zz.push(i);

async function m() {
    location.href.includes("overview_villages") ? sc() : (await it(), !ci() && gtnv())
}

function gtnv() {
    window.location = document.getElementById("village_switch_right").href
}

async function it() {
    return new Promise(async(resolve,reject)=>{
        var t = guti(geu()),
        a =  await grc();
        if(a==undefined){
            alert("no coords left")
            window.location.reload()
        }

        document.forms[0].x.value = a.split("|")[0], document.forms[0].y.value = a.split("|")[1];
        for (var e = 0; e < t.length; e++) $("input[id*=" + t[e][0] + "]")[0].value = t[e][1]
    })
}

function geu() {
    var t = [];
    for (key in troops) 0 != troops[key] && t.push([key, troops[key]]);
    return t
}

function guti(t) {
    for (var a = [], e = {
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
        }, n = [], r = [], i = 0, o = 0; o < t.length; o++) {
        var l = 0,
            u = Number($("#units_entry_all_" + t[o][0])[0].innerText.match(/\d+/)[0]);
        isNaN(Number(t[o][1])) ? t[o][1].includes("min") ? (n.push(t[o][0]), l = 0, r.push(o), t[o][1].includes("min!") && (l = minExclamationCount)) : "max" == t[o][1] && (l = u) : l = Math.min(t[o][1], u), a.push([t[o][0], l]), i += l * e[t[o][0]]
    }
    for (var m = game_data.village.points * populationLim, s = (o = 0, [0, 3e4 * populationLim]); i < m && 0 != n.length;) {
        var c = Number($("#units_entry_all_" + a[r[o]][0])[0].innerText.match(/\d+/g)[0]);
        if ((a[r[o]][1] < c || forceEqualTroopCount) && a[r[o]][1] < s[0] && (!distributeByPopulation || a[r[o]][1] < s[0] / e[a[r[o]][0]]) && (a[r[o]][1] += 1, i += e[a[r[o]][0]]), o < n.length - 1 ? o++ : (o = 0, s[0] += 1), s[0] > s[1]) {
            a[r[o]][1] += Math.ceil((m - i) / e[a[r[o]][0]]), i += e[a[r[o]][0]];
            break
        }
    }
    return a
}

async function grc() {
    return new Promise(async(resolve,reject)=>{
        console.log("here baa")
        let data=await readFile(filname_coords,pantryToken).catch(error=>{
            alert("database is not initialized!")
            throw new Error("initialized")})
        let list_coords=data.coords
        
    
        let randomIndex=Math.floor(Math.random() * list_coords.length)
        console.log(list_coords)
        console.log(randomIndex)
        let result_coord=list_coords.splice(randomIndex,1)[0]
    
        let dataUpload={}
        dataUpload.coords=list_coords
        uploadFile(JSON.stringify(dataUpload),filname_coords,pantryToken)
        UI.SuccessMessage("left coords:"+list_coords.length)
        console.log(result_coord)
        resolve(result_coord)
    })

}

function ci() {
    for (var t = $(".unitsInput", "#command-data-form"), a = $(".units-entry-all", "#command-data-form"), e = !0, n = 0; n < t.length; n++) Number(t[n].value) > Number(a[n].innerText.match(/\d+/g)[0]) && (e = !1);
    return !forceRamSpeed || Number(t[zz[0]].value) || Number(t[zz[1]].value) || (e = !1), e
}

function sc() {
    for (var t = $("a[href*=village]", "#combined_table").has("span"), a = "", e = 0; e < t.length; e++) {
        var n = t[e].href.split("village=")[1].split("&")[0];
        a += e == t.length - 1 ? n : n + ","
    }
    localStorage.setItem("fs_villagedata", a), alert(t.length + " villages stored!")
}
m();





function readFile(filename,pantryToken){
    return new Promise((resolve,reject)=>{
        $.ajax({
            url : `https://getpantry.cloud/apiv1/pantry/${pantryToken}/basket/${filename}`,
            type: "GET",
            headers:{"Content-Type": "application/json"},
            async: false,
            success: (data)=>{
                console.log(data)
                // UI.SuccessMessage("get coords")
                resolve(data)

            },
            error: (err)=>{
                console.log(err)
                UI.ErrorMessage(err)
                reject(err)

            }
        });
    })
}


function uploadFile(data,filename,pantryToken){
    return new Promise((resolve,reject)=>{
        $.ajax({
            url : `https://getpantry.cloud/apiv1/pantry/${pantryToken}/basket/${filename}`,
            type: "POST",
            data : data,
            async: false,
            headers:{"Content-Type": "application/json"},
            success: (response)=>{
                console.log(response)
                UI.SuccessMessage("upload coords",1000)
                resolve(response)
            },
            error: (err)=>{
                console.log(err)
                UI.ErrorMessage(err)
                reject(err)
            }
        });
    })
}
