/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/fake-script.287519/
*/
var Tsalkapone_coords = '589|522 590|525 584|524 595|525 586|528 599|526 592|523 592|528 594|516 583|519 580|529 583|518 589|528 582|503 587|516 590|532 594|517 582|530 588|518 594|530 580|517 580|514 579|514 581|503 589|533 580|516 584|523 597|527 584|503 579|526 589|523 582|517 592|532 590|523 590|528 588|530 589|526 579|506 597|523 583|512 579|528 586|523 595|526 583|517 585|503 583|508 586|502 585|510 582|532 586|516 586|515 591|529 584|511 581|526 586|514 582|531 586|510 596|529 585|523 584|526 587|515 588|513 583|526 588|504 586|533 590|529 595|533 596|530 584|525 592|530 582|518 591|526 597|525 588|525 589|532 591|528 583|524 589|530 590|533 594|525 592|529 591|531 600|527 583|533 591|532 594|533 593|530 593|528 584|522 580|515 599|525 601|527 602|527 582|504 593|533 585|533';
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
