/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/fake-script.287519/
*/
var Tsalkapone_coords = '547|563 536|554 541|556 538|552 539|552 539|560 543|561 539|559 554|560 565|555 566|552 558|542 560|554 558|545 560|547 560|552 543|564 541|563 544|564 542|564 537|556 539|545 538|546 537|546 536|544 561|547 561|553 559|544 562|550 552|562 551|558 552|558 552|559 551|562 539|544 553|564 537|544 540|544 537|543 538|543 550|563 556|566 555|566 557|566 550|551 549|551 549|552 550|559 547|557 552|560 553|551 543|557 553|560 556|561 557|558 556|560 545|556 544|558 544|557 534|543 535|542 553|556 551|556 551|551 553|557 548|554 551|554 548|550 548|553 549|569 546|569 550|570 543|565 543|566 544|568 536|558 539|557 555|564 554|565 553|566 541|539 541|540 539|566 539|563 537|565 546|558 545|557 546|555 546|557 550|568';
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
