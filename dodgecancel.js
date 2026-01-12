(function () {
    'use strict';

    /* ========== HELPERS ========== */

    function getVillageId() {
        return new URL(location.href).searchParams.get("village") || "unknown";
    }

    function key(name) {
        return `tw_rally_${name}_${getVillageId()}`;
    }

      /* ========== STORAGE SAFE LOADERS ========== */

    function loadTime() {
        const v = parseInt(localStorage.getItem(key("time")), 10);
        return Number.isFinite(v) ? v : 0;
    }

    function saveTime(sec) {
        localStorage.setItem(key("time"), sec);
    }

    function loadReloadTime() {
        const v = parseInt(localStorage.getItem(key("reload")), 10);
        return Number.isFinite(v) ? v : 0;
    }

    function saveReloadTime(sec) {
        localStorage.setItem(key("reload"), sec);
    }

    function isArmed() {
        return localStorage.getItem(key("armed")) === "1";
    }

    function setArmed(val) {
        localStorage.setItem(key("armed"), val ? "1" : "0");
    }

    /* ========== HUMAN DELAYS ========== */

    function timeBetween(min, max) {
        return Math.round((min + Math.random() * (max - min)) * 1000);
    }

function calculateCancelFromOpen(openSeconds) {
    if (openSeconds <= 0) return 0;

    const half = Math.floor(openSeconds / 2);
    const randomDelay = Math.floor(10 + Math.random() * 11); // 10–20 sec

    // subtract, but never go below 1 second
    return Math.max(1, half - randomDelay);
}



    const delayInre = timeBetween(10, 15);
    const delayInclick = timeBetween(2, 10);

    /* ========== AUTOMATION ========== */

    function cancel() {
        const a = document.querySelector('a[href*="action=cancel"]');
        if (a) location.href = location.origin + a.getAttribute("href");
    }

    function re() {
        console.log("🔄 Reload triggered");
        location.reload();
    }

    /* ========== UI ========== */

    function createUI() {
        if (document.getElementById("tw_rally_ui")) return;

        const sec = loadTime();
        const min = Math.floor(sec / 60);
        const rem = sec % 60;

        const rSec = loadReloadTime();
        const rMin = Math.floor(rSec / 60);
        const rRem = rSec % 60;

        const box = document.createElement("div");
        box.id = "tw_rally_ui";
        box.style = `
            position:fixed;
            top:120px;
            right:10px;
            background:#111;
            color:#fff;
            border:2px solid #c33;
            padding:10px;
            z-index:99999;
            font-size:13px;
            width:200px;
            font-family:Arial;
        `;

        box.innerHTML = `
            <b>🏰 Rally Auto-Open By SAM</b><br>
            <span style="font-size:11px;color:#aaa">Village ${getVillageId()}</span><br><br>

            <b>Rally open at</b><br>
            <input id="tw_min" type="number" min="0" value="${min}" style="width:50px"> m
            <input id="tw_sec" type="number" min="0" max="59" value="${rem}" style="width:50px"> s<br><br>

            <b>Cancel at (auto)</b><br>
            <input id="tw_rmin" type="number" disabled style="width:50px"> m
            <input id="tw_rsec" type="number" disabled style="width:50px"> s<br><br>


            <button id="tw_save">Save</button>
            <button id="tw_arm" style="margin-left:6px">
                ${isArmed() ? "DISARM" : "ARM"}
            </button>

            <div id="tw_status" style="margin-top:6px;color:#9f9">
                ${isArmed() ? "Armed – waiting…" : "Disarmed"}
            </div>
        `;


   document.body.appendChild(box);

// ✅ DEFINE ELEMENTS (THIS WAS MISSING)
const tw_min  = document.getElementById("tw_min");
const tw_sec  = document.getElementById("tw_sec");
const tw_rmin = document.getElementById("tw_rmin");
const tw_rsec = document.getElementById("tw_rsec");
const tw_save = document.getElementById("tw_save");
const tw_arm  = document.getElementById("tw_arm");

function updateCancelPreview() {
    const m = parseInt(tw_min.value, 10) || 0;
    const s = parseInt(tw_sec.value, 10) || 0;
    const openSeconds = m * 60 + s;

    const cancelSeconds = calculateCancelFromOpen(openSeconds);
    tw_rmin.value = Math.floor(cancelSeconds / 60);
    tw_rsec.value = cancelSeconds % 60;
}

// ✅ LIVE PREVIEW
tw_min.addEventListener("input", updateCancelPreview);
tw_sec.addEventListener("input", updateCancelPreview);

// ✅ INITIAL PREVIEW
updateCancelPreview();


tw_save.onclick = () => {
    const m = parseInt(tw_min.value, 10) || 0;
    const s = parseInt(tw_sec.value, 10) || 0;

    const openSeconds = m * 60 + s;
    saveTime(openSeconds);

    const cancelSeconds = calculateCancelFromOpen(openSeconds);
    saveReloadTime(cancelSeconds);

    // Update UI fields
    tw_rmin.value = Math.floor(cancelSeconds / 60);
    tw_rsec.value = cancelSeconds % 60;

    // ✅ AUTO-ARM AFTER SAVE
    setArmed(true);
    tw_arm.textContent = "DISARM";

    // ✅ SINGLE STATUS (no override)
    setStatus(
        `Saved & Armed → Open: ${openSeconds}s | Cancel: ${cancelSeconds}s`
    );
};




        tw_arm.onclick = () => {
            const armed = !isArmed();
            setArmed(armed);
            tw_arm.textContent = armed ? "DISARM" : "ARM";
            setStatus(armed ? "Armed – waiting…" : "Disarmed");
        };
    }

    function setStatus(text) {
        const el = document.getElementById("tw_status");
        if (el) el.textContent = text;
    }

    /* ========== LOGIC ========== */

    let opened = false;
    let reloaded = false;

    function getSoonestAttackSeconds() {
        const now = Math.floor(Date.now() / 1000);
        let soonest = null;

        document.querySelectorAll('[data-endtime]').forEach(el => {
            const end = parseInt(el.dataset.endtime, 10);
            if (!isNaN(end)) {
                const rem = end - now;
                if (rem >= 0 && (soonest === null || rem < soonest)) {
                    soonest = rem;
                }
            }
        });

        return soonest;
    }

    function openRally() {
        if (opened) return;

        const link = document.querySelector('a[href*="screen=place"]');
        if (!link) return;

        opened = true;
        setArmed(false);
        setStatus("Rally opened – disarmed");
        const btn = document.getElementById("tw_arm");
        if (btn) btn.textContent = "ARM";
        setTimeout(re, delayInre);
        window.open(link.href, "_blank");
    }

    function tick() {
        const soonest = getSoonestAttackSeconds();
        if (soonest === null) return;

        const openAt = loadTime();
        const reloadAt = loadReloadTime();

        if (isArmed()) {
    setStatus(`Next attack: ${soonest}s | Cancel at: ${reloadAt > 0 ? reloadAt + "s" : "OFF"}`);
}


        if (reloadAt > 0 && soonest === reloadAt && !reloaded) {
            reloaded = true;
            setTimeout(cancel, delayInclick);
            return;
        }

  if (!isArmed()) return;
if (openAt <= 0) return;

// 🎯 Open rally exactly at UI time
if (Math.abs(soonest - openAt) <= 1) {
    openRally();
}


    /* ========== INIT ========== */

    const observer = new MutationObserver(() => {
        if (document.querySelector('[data-endtime]')) {
            observer.disconnect();
            createUI();
            setInterval(tick, 1000);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

})();
