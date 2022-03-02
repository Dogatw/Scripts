/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/fake-script.287519/
*/
var Tsalkapone_coords = '589|522 581|536 595|525 599|526 559|542 592|528 560|542 561|539 576|539 580|529 567|539 560|541 562|538 562|544 561|541 576|535 590|532 565|539 582|530 561|544 561|540 594|530 569|543 570|540 566|544 569|542 589|533 565|542 573|540 597|527 560|545 572|540 573|539 572|543 574|540 576|538 571|540 577|538 592|532 578|536 590|528 588|530 576|540 575|539 572|541 580|540 597|523 575|534 572|539 579|528 586|523 595|526 567|543 582|532 591|529 572|542 596|529 584|526 579|539 583|526 586|533 590|529 595|533 588|534 588|536 596|530 584|525 592|530 577|537 558|542 597|525 587|535 589|532 591|528 583|524 588|535 589|530 590|533 594|525 592|529 591|531 581|534 600|527 591|532 589|537 594|533 593|530 593|528 589|535 578|535 582|535 599|525 601|527 602|527 571|539 577|540 573|537 586|535 560|538 574|528 581|535';
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
