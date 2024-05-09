let time;


function clickcancel() {
    var can = $("a.command-cancel");
    can.click();
    console.log(time);
}

setTimeout(clickcancel, time);

prompt("Please enter desired arrival time", time);
