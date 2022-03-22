/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/fake-script.287519/
*/
var Tsalkapone_coords = '595|528 594|523 595|523 594|526 595|526 594|527 595|522 595|520 595|525 596|530 592|528 594|525 606|537 597|525 601|530 599|526 597|533 598|531 594|533 596|529 593|528 605|537 606|538 599|529 601|524 599|525 600|533 596|527 599|522 617|547 594|530 597|527 597|523 595|535 599|532 607|527 593|519 592|524 591|521 590|523 600|527 606|531 591|524 590|525 592|523 588|525 605|531 589|523 600|534 597|516 592|520 604|516 605|516 605|530 603|514 599|518 589|528 586|528 594|521 591|526 589|526 603|522 602|517 602|533 608|533 603|533 614|531 602|514 604|535';
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
