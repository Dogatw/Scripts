var Tsalkapone_coords = '488|478 489|478 489|476 488|474 497|482 491|476 494|478 497|481 503|489 497|480 500|483 499|481 492|474 491|473 505|489 496|477 499|480 505|488 498|478 505|487 494|474 506|488 496|475 507|488 506|486 506|485 497|474 509|490 496|473 495|472 507|486 497|473 502|478 507|484 509|487 498|473 502|477 510|488 514|497 503|477 507|482 501|474 502|475 498|471 507|481 512|489 505|478 511|487 515|496 506|479 500|472 502|474 515|495 508|481 505|476 509|481 513|487 514|489 517|496 506|476 510|481 511|482 505|474 510|480 519|499 513|484 519|498 508|476 516|489 519|496 518|493 515|486 519|495 508|475 520|498 518|491 521|499 517|487 522|500 510|475 521|495 511|475 514|479 515|480 509|471 520|488 523|496 522|492 519|485 520|487 521|489 517|481 522|491 520|486 522|490 513|474 516|478 520|485 514|475 511|471 514|474 524|493 525|495 513|472 524|491 523|488 520|481 515|473 523|486 524|487 516|473 527|495 519|477 517|474 528|497 527|493 517|473 525|487 527|492 529|499 524|484 522|480 527|491 528|494 517|472 518|473 528|491 524|481 520|474 529|492 523|478 530|494 528|487 528|486 531|494 529|488 526|481 520|471 530|490 526|480 520|470 532|494 530|488 524|475 531|489 529|484 524|474 526|477 534|497 530|484 531|486 531|484 532|486 530|481 525|472 531|483 535|492 532|483 525|470 535|489 538|496 528|472 534|483 532|478 540|495 540|491 536|480 537|482 535|476 537|479 534|473 536|475 536|474 535|471 537|472 540|477 537|471 540|471';
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
