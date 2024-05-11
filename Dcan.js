var inputMn = prompt("Please enter approximate minutes", "0");
var delay = inputMn*1000*60



function clickcancel() {
    var can = $("a.command-cancel");
    can.click();
    
}
console.log(delay);
setTimeout(clickcancel, delay);


