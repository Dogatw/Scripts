/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/fake-script.287519/
*/
var Tsalkapone_coords = '560|545 559|547 560|538 568|543 557|543 560|536 564|539 570|541 570|542 569|541 573|537 571|540 570|540 571|539 576|535 575|539 576|540 574|530 577|537 574|536 572|540 580|540 572|539 582|532 576|539 583|532 579|539 581|539 585|532 585|531 588|535 577|540 589|538 582|530 591|537 572|533 573|540 573|539 572|543 574|540 576|538 572|541 575|534 572|542 586|533 587|535 591|538 590|538 589|537 588|540 592|538 586|535 571|537 577|539 572|540 580|540 572|539 582|532 576|539 583|532 579|539 581|539 585|532 585|531 588|535 577|540 585|540 585|539 584|538 586|540 584|542 585|542 585|538 585|537 589|533 589|532 590|533 592|532 591|531 590|532 588|534 593|530 589|530 588|536 591|532 595|533 589|535 593|533 586|531 591|525 587|530 584|532 585|530 592|526 590|526 592|537';
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
