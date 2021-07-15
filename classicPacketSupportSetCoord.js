var backgroundColor = "#32313f";
var borderColor = "#3e6147";
var headerColor = "#202825";
var titleColor = "#ffffdf";


async function Interface(){ 
    html =`
    <div id="div_container_key" class="ui-widget-content" style="width:600px;background-color:${backgroundColor};cursor:move;z-index:50;">
        <div class="close-btn" id="btn_close" onclick="document.getElementById('div_container_key').remove()" style="position:absolute;top:10px;right: 10px;"><b><a href=#><font color="${titleColor}">X</font></b></a></div>
        <h2><center style="margin:10px"><u><font color="${titleColor}">Coord targets for packets</font></u></center></h2>
        <br>
        <p style="margin-left:50px"><font  id="nr_coords" color="${titleColor}">nr:?</font></p>
        <center style="margin:10px"><textarea id="input_name" cols="40" rows="20" placeholder="coord1 - nr1\ncoord2 - nr2"></textarea><center>
        <center style="margin:10px"><u><input class="btn" type="button"  onclick="Save()" value="Save"></center>

    </div>
    `;
    ////////////////////////////////////////add and remove window from page///////////////////////////////////////////

    $("#div_container_key").remove()
    $("#contentContainer").eq(0).prepend(html);
    $("#mobileContent").eq(0).prepend(html);

    if(game_data.device=="desktop"){
        $("#div_container_key").css("position","fixed");
        $("#div_container_key").draggable();
    }

    //initialized
    let data=await readFile(filname_coords,pantryToken).catch(error=>{
        uploadFile("{}",filname_coords,pantryToken)
        alert("database initialized, run the script again!")
        throw new Error("initialized")
        
    })
    let coords=data.coords


    let value= coords
    console.log("here")
    if(value!=undefined){
        $("#input_name").val(value.join("\n"))
        $("#nr_coords").text("nr: "+value.length)
    }

}
Interface()

function Save(){
    let data={}
    data.coords=document.getElementById("input_name").value.split("\n")
    console.log(data)
    uploadFile(JSON.stringify(data),filname_coords,pantryToken)
}


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