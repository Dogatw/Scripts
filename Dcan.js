var inputMn = parseInt(prompt("Please enter approximate minutes", "00"));



function clickcancel() {
    var can = $("a.command-cancel");
    can.click();
    console.log(inputMn);
}

setTimeout(clickcancel, inputMn);


