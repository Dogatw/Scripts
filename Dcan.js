let time,inputMn,delay;


function clickcancel() {
    var can = $("a.command-cancel");
    can.click();
    console.log(delay);
}

setTimeout(clickcancel, delay);

inputMn = parseInt(prompt("Please enter approximate minutes", "00"));
delay = parseInt(inputMn)*1000;
