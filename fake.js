/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/fake-script.287519/
*/
var Tsalkapone_coords = '519|496 521|499 521|495 522|500 523|496 515|496 515|495 518|493 525|495 522|492 518|491 524|493 522|491 527|495 522|490 524|491 528|497 521|489 527|493 516|489 528|494 527|492 529|499 520|488 514|489 527|491 523|488 520|487 517|487 512|489 528|491 529|492 530|494 520|486 524|487 513|487 525|487 515|486 531|494 523|486 509|490 519|485 520|485 510|488 530|490 511|487 529|488 528|487 524|484 509|487 530|488 531|489 528|486 534|497 513|484 507|488 506|488 505|489 531|486 507|486 520|481 535|492 517|481 505|488 529|484 506|486 532|486 524|481 530|484 505|487 511|482 522|480 535|489 503|489 526|481 506|485 507|484 531|484 515|480 538|496 531|483 510|481 526|480 514|479 509|481 532|483 507|482 510|480 516|478 530|481 508|481 523|478 507|481 519|477 540|495 534|483 540|491 526|477 506|479 514|475 524|475 532|478 520|474 537|482 517|474 500|483 511|475 505|478 524|474 514|474 508|476 510|475 513|474 536|480 518|473 517|473 516|473 515|473 508|475 506|476 517|472 505|476 537|479 499|481 502|478 503|477 513|472 525|472 499|480 502|477 520|471 497|482 535|476 495|485 528|472 505|474 497|481 511|471 497|480 502|475 536|475 509|471 498|478 534|473 502|474 536|474 540|477 501|474 493|483 493|481 496|477 535|471 537|472 494|478 500|472 491|482 537|471 496|475 497|474 498|473 497|473 496|473 498|471 540|471 494|474 495|472 491|476 489|478 492|474 488|478 489|476 491|473 488|474';
var Tsalkapone_scouts = 1;
var Tsalkapone_units_order = {
    ram: 1,
    catapult: 1,
    sword: 1,
    spear: 1,
    axe: 1,
    archer: 1,
    light: 1,
    marcher: 1,
    heavy: 1
};
  function fnFillRallyPoint() { //var win=(window.frames.length>0)?window.main:window;
        var win = window;
        var eleForm = document.forms[0];

        var coord = Tsalkapone_coords.split(' ');

        var coordSplit = coord[Math.floor(Math.random() * coord.length)].match(/(\d+)\|(\d+)/);
        eleForm.x.value = coordSplit[1];
        eleForm.y.value = coordSplit[2];
        win.$("input[class=unitsInput]").attr("value", "0");
        var count;
        if (Tsalkapone_scouts > 0) {
            count = parseInt(eleForm.spy.nextSibling.nextSibling.innerHTML.match(/\d+/));
            if (count > 0 && Tsalkapone_scouts < count) {
                eleForm.spy.value = Math.min(Tsalkapone_scouts, count);
            }
        }

        for (var Tsalkapone in Tsalkapone_units_order) {
            if (Tsalkapone_units_order.hasOwnProperty(Tsalkapone)) {
                if ((Tsalkapone_units_order[Tsalkapone] > 0) && (typeof(eleForm[Tsalkapone]) != "undefined")) {
                    count = parseInt(eleForm[Tsalkapone].nextSibling.nextSibling.innerHTML.match(/\d+/));
                    if (count > 0 && Tsalkapone_units_order[Tsalkapone] < count) {
                        eleForm[Tsalkapone].value = Math.min(Tsalkapone_units_order[Tsalkapone], count);
                        break;
                    }


                }
            }
        }
    }
    fnFillRallyPoint();
