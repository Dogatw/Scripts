/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/fake-script.287519/
*/
var Tsalkapone_coords = '589|538 590|525 595|525 586|528 599|526 592|528 573|526 576|539 580|529 589|528 576|526 573|527 570|527 576|535 590|532 569|528 584|532 582|530 571|529 591|537 588|537 569|530 568|527 599|529 569|533 574|528 572|529 594|530 572|533 573|528 569|543 570|540 569|539 575|527 570|542 576|525 589|533 573|540 568|543 597|527 579|526 572|543 574|540 576|538 577|538 596|533 592|532 590|528 588|530 589|526 576|540 594|527 590|539 580|543 572|541 580|540 579|534 579|528 595|526 577|539 583|525 582|532 578|531 574|530 591|529 598|531 581|526 585|525 583|532 572|542 596|529 584|526 581|535 579|539 585|532 583|526 586|533 585|530 590|529 597|533 595|533 588|534 588|536 596|530 584|525 592|530 585|533 577|537 591|526 585|531 590|526 592|525 585|537 587|530 585|550 597|525 592|526 588|525 587|535 589|532 591|528 588|535 591|525 589|530 590|533 594|525 590|555 591|538 586|551 592|529 591|531 581|534 600|527 583|533 586|550 591|532 590|538 583|551 594|533 599|532 593|530 593|528 589|535 594|526 584|550 590|540 578|526 595|528 568|525 585|552 593|533 598|525 582|535 586|531 571|527 596|527 595|535 592|527 578|527 599|525 592|538 593|527 589|555 586|549 603|526 591|555 600|534 601|525 600|533 602|538 593|556 603|533 604|535 577|540 609|526 606|537 607|527 602|533 608|533 605|537 608|531 605|531 573|537 595|559 606|538 606|531 576|529 609|525 586|535 607|536 601|530 571|537 586|525 577|525 573|529 576|531 596|526 596|525 597|526 598|529 602|527 605|530 601|527';
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
