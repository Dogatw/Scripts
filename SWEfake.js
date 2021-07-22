/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/fake-script.287519/
*/
var Tsalkapone_coords = '511|470 512|469 510|468 512|467 512|466 505|470 510|466 512|465 511|465 510|465 516|463 503|469 517|462 511|463 515|461 514|461 513|461 509|462 505|464 514|460 510|461 513|460 507|462 515|459 514|459 510|460 504|463 501|465 518|458 517|458 503|463 515|458 509|459 503|462 506|460 515|457 508|459 510|458 505|460 509|458 516|456 515|456 514|456 510|457 519|455 518|455 506|458 514|455 497|463 514|454 513|454 496|463 512|454 497|462 496|462 506|455 508|454 510|453 501|457 508|453 498|458 490|466 492|463 503|454 490|465 488|468 489|466 491|463 506|452 488|467 497|457 498|456 505|452 499|455 491|462 495|458 501|453 496|456 502|452 495|456 499|453 492|458 495|455 491|458 490|459 488|461 498|452 495|454 496|453 490|457 491|456 489|457 487|459 486|460 493|453 485|461 488|457 490|455 488|455 485|457 484|458 487|453 488|452 484|454 484|453 482|452 481|452 528|466 531|467 530|466 524|463 538|470 543|474 531|464 554|486 523|460 543|471 553|482 552|480 535|464 544|470 536|464 550|476 538|465 535|463 537|464 545|470 530|460 536|463 538|464 531|460 541|466 535|462 524|457 521|456 537|463 545|469 540|465 532|460 530|459 542|466 523|456 526|457 538|463 546|469 540|464 532|459 539|463 536|461 528|457 538|462 526|456 523|455 533|459 535|460 540|463 527|456 534|459 536|460 559|483 528|456 541|463 523|454 524|454 527|455 536|459 525|454 541|462 538|460 555|475 558|479 532|456 525|453 528|454 522|452 557|476 537|458 526|453 529|454 558|477 527|453 524|452 541|460 530|454 557|475 528|453 554|471 522|451 547|464 546|463 523|451 557|474 550|466 524|451 562|481 530|453 526|451 523|450 560|476 521|449 522|449 529|451 544|459 523|449 557|471 536|454 535|453 537|454 533|452 539|455 531|451 526|449 523|448 540|455 525|448 548|460 546|458 538|452 559|469 520|445 546|456 526|446 562|471 527|446 559|467 536|449 527|445 547|455 561|467 536|445 545|448';
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
