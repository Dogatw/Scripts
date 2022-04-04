var doc = document;
var $warningSibling = $('#command-data-form > table')
var $targetElement = $('<p id="player-farm-warning">');
var SP = include.spear?getTroop("spear"):0;
var HC = include.heavy?getTroop("heavy"):0;
var CAT=include.cat?getTroop("catapult"):0;
var ARCH = include.archer?getTroop("archer"):0;
var SPY=include.scout?getTroop("spy"):0;
var SW =include.sword?getTroop("sword"):0;
var pop=SP+SW+ARCH+8*CAT+4*HC;


/*var doc = (window.frames.length > 0) ? window.main.document: document;*/

function getTroop(a){
	if(doc.units[a])
		return parseInt (doc.units[a].parentNode.getElementsByTagName("a")[1].innerHTML.match(/\d+/), 10);
}

async function main(){
    let availableTroop = Array.from(document.getElementsByClassName("unitsInput")).map(e=> e.value).filter(e=> e != '' && e !='0').length
    if (availableTroop > 0){
        UI.ErrorMessage("you can't run the script again if you haven't sent the current packet",2000)
        throw new Error("you can't run the script again if you haven't sent the current packet")
    }

	if(pop>minPop)
	{
		let data=await readFile(filname_coords,pantryToken).catch(error=>{
            alert("database is not initialized!")
            throw new Error("initialized")})
        let targets=data.coords
		if(targets.length==0){
			alert("no more coords")
			window.location.reload()
		}else if(targets[0]==""){
			alert("no more coords")
			window.location.reload()
		}

		var ratio=popsend/pop;
		ratio=ratio>1?1:ratio;
		doc.forms[0].spear.value=parseInt(SP*ratio);
		if(doc.forms[0].archer)
			doc.forms[0].archer.value=parseInt(ARCH*ratio);
		doc.forms[0].heavy.value=parseInt(HC*ratio);
		doc.forms[0].sword.value=parseInt(SW*ratio);
		doc.forms[0].catapult.value=parseInt(CAT*ratio);
        if(SPY >= nrScouts)
		    doc.forms[0].spy.value=nrScouts;
		
		let total_packets=0;
		for(let i=0;i<targets.length;i++){
			total_packets+=parseInt(targets[i].split("-")[1])
		}


		var coord = targets[0].match(/[0-9]{3}\|[0-9]{3}/)[0].split("|");
		doc.forms[0].x.value = coord[0];
		doc.forms[0].y.value = coord[1];
		let packetsNeeded=parseInt(targets[0].split("-")[1])
		let coord2=targets[0].split("-")[0]

		doc.getElementsByTagName("h3")[0].innerHTML = `<font color=blue> coord:${coord2} --> packets needed:( ${packetsNeeded}  )</font>`;
		
		if(packetsNeeded == 1)
			targets.splice(0,1)//remove from list
		else{
			targets[0]= coord2 +"-"+ (packetsNeeded-1)
		}
		targets=arrayRotate(targets,1)
		console.log(targets)
		let dataUpload={}
        dataUpload.coords=targets
        uploadFile(JSON.stringify(dataUpload),filname_coords,pantryToken)
		UI.SuccessMessage("coord left: "+ targets.length +", packets left: "+total_packets)
		
	}

	else
	{
		if(alertWhenDone = 1)
			window.alert('Sam says make more defensive troops you noob');
		if(nextVillageWhenDone)
		{
			var sitter = doc.URL.match(/t=\d+/);
			sitter=sitter ? "&" + sitter : "";
			window.location="game.php?village=n" + window.game_data.village.id + "&screen=place" + sitter
		}

	}

}
main()


function arrayRotate(arr, count) {
	count -= arr.length * Math.floor(count / arr.length);
	arr.push.apply(arr, arr.splice(0, count));
	return arr;
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
