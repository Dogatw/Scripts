//V3.3

(function () {
    'use strict';

    /* ================= STORAGE ================= */

    const STORE_KEY = "tw_arrival_state";
    const RELOAD_FLAG = "tw_reload_done";

    function saveState(state) {
        sessionStorage.setItem(STORE_KEY, JSON.stringify(state));
    }

    function loadState() {
        return JSON.parse(sessionStorage.getItem(STORE_KEY) || "null");
    }

    function clearState() {
        sessionStorage.removeItem(STORE_KEY);
        sessionStorage.removeItem(RELOAD_FLAG);
    }

    /* ================= TIME HELPERS ================= */
function getReloadBuffer() {
    return document.hidden ? 5 : 3; // seconds
}

    function toSeconds(t) {
        const [h, m, s] = t.split(":").map(Number);
        return h * 3600 + m * 60 + s;
    }

    /* ================= STATE ================= */

    let input, inputMs, delay;
    let arrInterval;
    let delayTime = parseInt(localStorage.delayTime);

    if (isNaN(delayTime)) {
        delayTime = 0;
        localStorage.delayTime = "0";
    }

    /* ================= UI ================= */

    const infoRow = `
        <tr>
            <td><b>Set arrival:</b></td>
            <td id="showArrTime" style="font-weight:bold;color:#804000;"></td>
        </tr>`;

    const btn =
        `<a id="arrTime" class="btn" style="cursor:pointer;">Set arrival time</a>`;

    document.getElementById("troop_confirm_submit")
        .insertAdjacentHTML("afterend", btn);

    const table = document.getElementById("date_arrival").parentNode.parentNode;
    table.insertAdjacentHTML("beforeend", infoRow);

    /* ================= RELOAD SCHEDULER ================= */

function scheduleReloadBeforeArrival(arrival) {
    const watcher = setInterval(() => {
        const arr = document.querySelector(".relative_time")?.textContent;
        if (!arr) return;

        const buffer = getReloadBuffer(); // dynamic
        const target = toSeconds(arrival) - buffer;

        if (toSeconds(arr.slice(-8)) >= target) {
            clearInterval(watcher);
            sessionStorage.setItem(RELOAD_FLAG, "1");
            location.reload();
        }
    }, 200);
}


    /* ================= ARRIVAL LOGIC ================= */

   function setArrivalTime() {
    let clicked = false;

    arrInterval = setInterval(() => {
        const arr = document.querySelector(".relative_time")?.textContent;
        if (!arr || clicked) return;

        if (arr.slice(-8) >= input) {
            clicked = true;
            clearInterval(arrInterval);

            // PRIMARY CLICK
            setTimeout(() => {
                document.getElementById("troop_confirm_submit").click();
            }, delay);

            // FAIL-SAFE BACKUP CLICK
            setTimeout(() => {
                document.getElementById("troop_confirm_submit").click();
                clearState();
            }, delay + 100);
        }
    }, 5);
}


    /* ================= BUTTON ================= */

    document.getElementById("arrTime").onclick = function () {
        const time = document.querySelector(".relative_time").textContent.slice(-8);

        input = prompt("Enter desired arrival time", time);
        inputMs = parseInt(prompt("Enter milliseconds", "000"), 10);

        delay = Math.max(0, delayTime + inputMs);

        document.getElementById("showArrTime").textContent =
            `${input}:${inputMs.toString().padStart(3, "0")}`;

        saveState({
            mode: "arrival",
            input,
            inputMs,
            delay
        });

        scheduleReloadBeforeArrival(input);
    };

    /* ================= RESTORE AFTER RELOAD ================= */

    (function restore() {
        const state = loadState();
        if (!state) return;

        input = state.input;
        inputMs = state.inputMs;
        delay = state.delay;

        document.getElementById("showArrTime").textContent =
            `${input}:${inputMs.toString().padStart(3, "0")}`;

        if (sessionStorage.getItem(RELOAD_FLAG) === "1") {
            setArrivalTime();
        }
    })();

})();
