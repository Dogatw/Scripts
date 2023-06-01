let delay ;
var attackButton;
let hrs;
let mns;
let sns;
let shs;
let buttons =
    `<a id="hours" class="btn" style="cursor:pointer;">Set arrival hour</a>
<a id="mins" class="btn" style="cursor:pointer;">Set arrival minute</a>
<a id="secs" class="btn" style="cursor:pointer;">Set arrival second</a>
<a id="ms" class="btn" style="cursor:pointer;">Set arrival ms</a>
    <a id="show" class="btn" style="cursor:pointer;">When you land</a>`;


document.getElementById("troop_confirm_submit").insertAdjacentHTML("afterend", buttons);

document.getElementById("hours").onclick = function () {
    let time = document.getElementsByClassName("relative_time")[0].textContent.slice(-8);
    let timetext = time.split(":");
    var hour = timetext[0];
    hrs = prompt("Please enter desired arrival time", hour);
};

document.getElementById("mins").onclick = function () {
    let time = document.getElementsByClassName("relative_time")[0].textContent.slice(-8);
    let timetext = time.split(":");
    var hour = timetext[1];
    mns = prompt("Please enter desired arrival time", hour);
};

document.getElementById("secs").onclick = function () {
    let time = document.getElementsByClassName("relative_time")[0].textContent.slice(-8);
    let timetext = time.split(":");
    var hour = timetext[2];
    sns = prompt("Please enter desired arrival time", hour);
};

document.getElementById("ms").onclick = function () {
    delay = prompt("Please enter desired arrival time", "000");
};

document.getElementById("show").onclick = function () {
    var shows = hrs+":"+mns+":"+sns+":"+delay
    shs = prompt("Please enter desired arrival time",shows);
};


(function() {
    'use strict';

    attackButton = document.getElementById("troop_confirm_submit");
    console.log("ON");
    setTimeout(checkTimer(), 1);
})();

function checkTimer(){
    var timerText = document.getElementById("date_arrival").getElementsByTagName("span")[0].innerHTML;
    timerText = timerText.split(" ");
    if(timerText[0] == "today" || timerText[0] == "tomorrow")
        timerText = timerText[2];
    else
        timerText = timerText[3];
    var timerVector = timerText.split(":");
    var hour = timerVector[0];
    var minute = timerVector[1];
    var second = timerVector[2];

    if(hour == hrs && minute == mns && second == sns)
        setTimeout(attack, delay);
    else
        setTimeout(checkTimer, 20);
}

function attack(){
    attackButton.click();
}
