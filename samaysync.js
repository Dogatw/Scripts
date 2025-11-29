 ! function() {
        "use strict";

        function a() {
            var a, b, c, d, e = function() {
                    b = j(), c = k(), d = l(), f()
                },
                f = function() {
                    var a = s('<span class="float_right" style="position: absolute; right: 5px;padding: 3px">Autor: <a href="%1">Doga</a></span>', TribalWars.buildURL("GET", "info_player", {
                        id: 831718
                    }));
                    k().parents("table:first").attr("width", 500), k().parent().after('<tr><td>Programeaza:</td><td style="position: relative"><table><tbody><tr><td>Mod:</td><td><input name="sa-mod" type="radio" value="arrival" checked="checked">Arrival time <input name="sa-mod" type="radio" value="launch">Launch Time </td></tr><tr><td>Date:</td><td><input name="sa-d" type="date" required="required"></td></tr><tr><td>Time:</td><td><input name="sa-t-h" type="number" min="0" max="23" value="0" style="width: 40px" required="required">:<input name="sa-t-m" type="number" min="0" max="59" value="0" style="width: 40px" required="required">:<input name="sa-t-s" type="number" min="0" max="59" value="0" style="width: 40px" required="required">:<input name="sa-t-ms" type="number" min="0" max="999" value="0" style="width: 40px" required="required"></td></tr><tr><td>Release:</td><td id="sa-launch"></td></tr><tr><td>Arrival:</td><td id="sa-arrival"></td></tr><tr><td>Return:</td><td id="sa-return"></td></tr><tr><td><button type="button" id="sa-save" class="btn float_left">Save</button>%27+a+"</td></tr></tbody></table></td></tr>");var b=new Date;$(%27input[name="sa-d"]%27).val(b.getFullYear()+"-"+Format.padLead(b.getMonth()+1,2)+"-"+Format.padLead(b.getDate(),2)),$(%27input[name="sa-t-h"]%27).val(Format.padLead(b.getHours(),2)),$(%27input[name="sa-t-m"]%27).val(Format.padLead(b.getMinutes(),2)),$(%27input[name="sa-t-s"]%27).val(Format.padLead(b.getSeconds(),2)),$("#sa-save").click(function(a){h()})},g=function(){return Math.round(Timing.getCurrentServerTime())},h=function(){if($("#command-data-form")[0].reportValidity()){var c=n(),d=m(),e=o()?new Date(c.getTime()-d):c,f=o()?c:new Date(c.getTime()+d),h=new Date(1e3*Math.floor(f.getTime()/1e3)+d);i(),a=setTimeout(function(){b.click()},e.getTime()-g()),r(e),t(f),u(h)}},i=function(){a&&clearTimeout(a)},j=function(){return $("#troop_confirm_submit")},k=function(){return $("#date_arrival")},l=function(){return $("#command-data-form")},m=function(){return 1e3*c.find(".relative_time").data("duration")},n=function(){var a=new Date($('
                            input[name = "sa-d"]
                            ').val());return a.setHours($('
                            input[name = "sa-t-h"]
                            ').val()),a.setMinutes($('
                            input[name = "sa-t-m"]
                            ').val()),a.setSeconds($('
                            input[name = "sa-t-s"]
                            ').val()),a.setMilliseconds($('
                            input[name = "sa-t-ms"]
                            ').val()),a},o=function(){return"arrival"===$('
                            input[name = "sa-mod"]: checked ').val()},q=function(a){return a instanceof Date?window.Format.date(a/1e3,!0)+":"+window.Format.padLead(a.getUTCMilliseconds(), 3):0},r=function(a){$("#sa-launch").text(q(a))},t=function(a){$("#sa-arrival").text(q(a))},u=function(a){$("#sa-return").text(q(a))};e()} return 0===$("#command-data-form").length?void alert("Trebuie sĂ„Ć’ fii pe pagina de confirmare a comenzii!"):void(window.ScheduleAttack=new a)}();
