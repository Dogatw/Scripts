/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/fake-script.287519/
*/
var Tsalkapone_coords = '520|488 523|486 520|481 524|484 517|481 522|490 525|487 522|480 524|481 518|491 515|480 526|481 523|478 526|480 516|478 519|477 528|487 514|479 512|489 524|493 529|484 511|487 511|482 529|488 526|477 530|484 510|488 530|488 527|493 524|475 530|481 510|481 520|474 531|484 531|486 510|480 530|490 531|483 523|496 517|474 514|475 531|489 524|474 509|481 532|486 509|490 532|483 518|473 517|473 514|474 508|481 516|473 515|473 513|474 507|486 517|472 507|488 507|482 530|494 511|475 507|481 532|478 525|472 520|471 506|485 506|486 510|475 534|483 531|494 506|488 528|497 513|472 520|470 508|476 505|487 506|479 528|472 505|488 505|489 535|489 508|475 525|470 516|469 505|478 535|492 529|499 511|471 506|476 536|480 537|482 503|489 505|476 535|476 509|471 537|479 522|467 534|497 534|473 525|467 503|477 536|475 511|468 502|478 536|474 502|477 526|466 500|483 523|465 535|471 515|465 502|474 538|496 537|472 499|480 508|467 509|466 537|471 504|469 507|466 498|478 497|481 536|468 497|480 500|472 537|468 502|469 504|467 503|467 538|468 498|473 496|477 497|474 503|466 500|469 497|473 496|475 498|471 501|467 502|466 539|467 500|468 496|473 494|478 499|468 495|472 494|474 495|469 497|466 496|467 491|476 496|466 489|478 489|476 488|478 488|474';
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
