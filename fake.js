/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/fake-script.287519/
*/
var Tsalkapone_coords = '589|538 585|538 574|537 581|536 585|542 559|542 584|542 560|542 561|539 576|539 567|539 560|541 562|538 559|547 562|544 561|541 576|535 565|539 587|537 591|537 561|544 588|537 561|540 572|533 569|543 570|540 574|536 566|544 569|542 570|542 575|536 589|533 565|542 573|540 574|539 582|543 560|545 572|540 573|539 572|543 574|540 576|538 571|540 577|538 578|536 576|540 575|539 572|541 580|540 575|534 572|539 567|543 577|539 585|540 574|542 572|542 579|539 586|533 595|533 588|534 588|536 575|551 584|538 577|537 585|539 586|540 558|542 585|537 585|550 587|535 588|535 590|533 591|538 581|534 583|533 586|550 590|538 589|537 594|533 589|535 575|538 578|535 590|540 588|540 582|535 592|538 586|549 571|539 577|540 574|538 573|537 586|535 571|537 560|538 581|535 593|533 564|546 589|536 558|545 585|533 560|547 579|534 568|543 557|543 560|536 564|539 581|539 570|541 595|525 599|526 592|528 589|528 590|532 594|530 589|533 597|527 592|532 590|528 588|530 589|526 594|527 595|526 591|529 596|529 590|529 595|533 596|530 592|530 591|526 592|525 597|525 589|532 591|528 589|530 590|533 594|525 592|529 591|531 600|527 591|532 594|533 593|530 593|528 594|526 595|528 598|525 592|527 599|525 593|527 601|527 602|527 593|533 596|527 591|525 590|526 592|526';
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
