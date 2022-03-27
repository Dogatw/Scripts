/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/fake-script.287519/
*/
var Tsalkapone_coords = '574|553 571|550 574|555 574|552 587|552 580|555 575|551 576|552 577|554 576|553 578|552 575|553 575|556 579|551 579|553 578|554 581|553 583|560 577|560 581|561 574|556 588|555 581|555 587|554 578|553 582|552 580|552 589|551 584|552 572|552 584|551 581|554 582|554 582|555 588|553 580|553 586|563 586|557 584|561 581|560 588|552 590|549 586|552 585|558 586|560 590|550 586|564 591|558 590|559 589|558 595|556 589|562 583|570 592|562 583|571 590|563 589|564 587|565 587|566 589|566 596|561 589|567 589|565 597|560 590|568 594|561 587|559 596|556 598|558 590|569 593|567 589|568 587|575 590|576 600|561 581|418 589|572 592|569 589|575 576|407 582|415 597|562 592|574 580|416 603|565 574|403 591|576 583|417 589|416 584|412 587|414 593|564 590|414 589|413 603|573 577|407 588|413 581|407 584|408 591|413 582|408 586|410 569|398 579|400 590|412 592|412 590|574 574|396 610|568 588|558 593|411 575|397 579|395 588|406 576|392 583|415 603|415 598|403 627|547 583|394 604|414 602|522 580|412 602|566 574|404 595|564 579|412 587|408 578|386 583|395 598|559 593|558 580|418 587|418 573|395 596|408 605|534 575|392 579|416 581|404 577|393 581|401 582|400 606|534 610|569 577|392 576|391 519|642 581|399 585|417 596|412 580|398 596|407 600|403 599|561 572|392 582|398 588|416';
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
