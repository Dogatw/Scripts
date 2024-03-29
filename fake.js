/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/fake-script.287519/
*/
var Tsalkapone_coords = '468|418 475|412 481|413 473|414 470|413 471|407 477|414 476|412 507|400 459|405 483|401 487|396 484|393 481|412 457|401 481|401 473|413 475|410 482|394 476|415 474|412 467|415 468|411 468|409 474|413 471|405 504|386 478|413 475|414 468|410 466|407 468|417 481|414 468|415 470|416 469|411 470|408 507|401 482|405 466|405 506|400 485|401 457|406 507|399 486|395';
var Tsalkapone_scouts = 1;
var Tsalkapone_units_order = {
    ram: 1,
    catapult: 1,
    sword: 1,
    spear: 1,
    axe: 1,
    archer: 0,
    light: 1,
    marcher: 0,
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
