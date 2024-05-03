var delayInclosetab = timeBetween(2,10);
var delayInclick = timeBetween(15,100);

var coord = document.getElementsByClassName('village-item');

if (coord.length > 0) {
    console.log('There is a villa set');
     setTimeout(clicks,delayInclick);

} else {
    console.log('No villa set');
    setTimeout(closetabs,delayInclosetab);
    }


function clicks (){
 var event = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
    });
    if (document.getElementsByName('attack'))
    //($('input#troop_confirm_submit.troop_confirm_go.btn.btn-attack'))
    {
        var cb1 = document.getElementById('target_attack');
        cb1.dispatchEvent(event);
    }
    
   }


function closetabs(){
    window.close();
}




function timeBetween(inferior, superior) {
    var numPossibilities = (superior * 1000) - (inferior * 1000);
    var aleat = Math.random() * numPossibilities;
    return Math.round(parseInt(inferior * 1000) + aleat);
}