var inputMn = prompt("Please enter approximate minutes", "4");
var delay = inputMn*1000*60



function clickcancel() {
    var can = $("a.command-cancel");
    can.click();
    console.log("Cancled");
}
console.log("Will cancel after " + inputMn + " Minutes");
setTimeout(clickcancel, delay);


