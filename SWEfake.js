/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/fake-script.287519/
*/
var Tsalkapone_coords = '511|470 512|469 510|468 512|467 512|466 505|470 510|466 512|465 511|465 510|465 516|463 503|469 517|462 511|463 515|461 514|461 513|461 509|462 505|464 514|460 510|461 513|460 507|462 515|459 514|459 510|460 504|463 501|465 518|458 517|458 503|463 515|458 494|472 509|459 503|462 506|460 515|457 508|459 510|458 505|460 509|458 516|456 515|456 514|456 510|457 519|455 518|455 506|458 514|455 497|463 514|454 513|454 496|463 512|454 497|462 496|462 506|455 508|454 510|453 501|457 508|453 498|458 490|466 492|463 503|454 490|465 488|468 489|466 491|463 506|452 488|467 497|457 498|456 505|452 499|455 491|462 495|458 501|453 496|456 502|452 495|456 499|453 492|458 495|455 491|458 490|459 488|461 498|452 495|454 496|453 490|457 491|456 489|457 487|459 486|460 493|453 485|461 488|457 490|455 488|455 485|457 484|458 487|453 488|452 484|454 484|453 482|452 481|452';
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
