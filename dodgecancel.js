(function () {
    'use strict';

    /* =====================================================
       COMMON HELPERS (shared, unchanged)
    ===================================================== */

    function timeBetween(min, max) {
        return Math.round((min + Math.random() * (max - min)) * 1000);
    }

    function humanClick(el) {
        if (!el) return;
        el.dispatchEvent(new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        }));
    }

    function getVillageId() {
        return new URL(location.href).searchParams.get("village") || "unknown";
    }

    function key(name) {
        return `tw_rally_${name}_${getVillageId()}`;
    }

    /* =====================================================
       CONFIRM PAGE (UNCHANGED)
    ===================================================== */

    if (location.search.includes('try=confirm')) {

        const delayConfirm = timeBetween(4, 8);

        setTimeout(() => {
            const confirmBtn = document.getElementById('troop_confirm_submit');
            if (confirmBtn) {
                humanClick(confirmBtn);
                setTimeout(() => window.close(), 1500);
            }
        }, delayConfirm);

        return;
    }

    /* =====================================================
       PLACE PAGE – DODGE (UNCHANGED)
    ===================================================== */

    if (location.search.includes('screen=place') && !location.search.includes('try=confirm')) {

        const targetX = '567';
        const targetY = '521';

        const targetInput = document.querySelector('#place_target input');
        if (targetInput) {
            targetInput.value = `${targetX}|${targetY}`;
        }

        const d = (window.frames.length > 0 && window.main) ? window.main.document : document;

        function setUnit(unit, count) {
            const input = d.units?.[unit];
            if (!input) return;

            let node = input.nextSibling;
            while (node && node.nodeType !== 1) node = node.nextSibling;

            const available = parseInt(node?.textContent.match(/(\d+)/)?.[1] || 0, 10);

            let finalCount;
            if (count < 0) finalCount = available + count;
            else finalCount = count;

            finalCount = Math.max(0, Math.min(finalCount, available));
            input.value = finalCount;
        }

        setUnit('spear', -100);
        setUnit('sword', -100);
        setUnit('axe', 99999);
        setUnit('archer', -50);
        setUnit('spy', -20);
        setUnit('light', 99999);
        setUnit('marcher', 99999);
        setUnit('heavy', -20);
        setUnit('ram', 99999);
        setUnit('catapult', 99999);
        setUnit('knight', 99999);
        setUnit('snob', 99999);

        const delayAttack = timeBetween(0.1, 0.2);

        setTimeout(() => {
            const attackBtn = document.getElementById('target_support');
            if (attackBtn) {
                humanClick(attackBtn);
            }
        }, delayAttack);

        return;
    }

    /* =====================================================
       RALLY AUTO-OPEN + UI (UNCHANGED)
       RUNS ON OVERVIEW
    ===================================================== */

    if (!location.search.includes('screen=overview')) return;

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

    function calculateCancelFromOpen(openSeconds) {
        if (openSeconds <= 0) return 0;
        const half = Math.floor(openSeconds / 2);
        const randomDelay = Math.floor(10 + Math.random() * 11);
        return Math.max(1, half - randomDelay);
    }

    const delayInre = timeBetween(10, 15);
    const delayInclick = timeBetween(2, 10);

    function cancel() {
        const img = document.querySelector('img.cancel_link_icon');
        if (!img) return;
        const link = img.closest('a');
        link ? link.click() : img.click();
    }

    function re() {
        location.reload();
    }

    /* ================= UI ================= */

    function createUI() {
        if (document.getElementById("tw_rally_ui")) return;

        const sec = loadTime();
        const min = Math.floor(sec / 60);
        const rem = sec % 60;

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
            <input id="tw_min" type="number" value="${min}" style="width:50px"> m
            <input id="tw_sec" type="number" value="${rem}" style="width:50px"> s<br><br>

            <b>Cancel at (auto)</b><br>
            <input id="tw_rmin" disabled style="width:50px"> m
            <input id="tw_rsec" disabled style="width:50px"> s<br><br>

            <button id="tw_save">Save</button>
            <button id="tw_arm">${isArmed() ? "DISARM" : "ARM"}</button>

            <div id="tw_status" style="margin-top:6px;color:#9f9">
                ${isArmed() ? "Armed – waiting…" : "Disarmed"}
            </div>
        `;

        document.body.appendChild(box);

        const tw_min = document.getElementById("tw_min");
        const tw_sec = document.getElementById("tw_sec");
        const tw_rmin = document.getElementById("tw_rmin");
        const tw_rsec = document.getElementById("tw_rsec");
        const tw_save = document.getElementById("tw_save");
        const tw_arm = document.getElementById("tw_arm");

        function updateCancelPreview() {
            const openSeconds = (parseInt(tw_min.value) || 0) * 60 + (parseInt(tw_sec.value) || 0);
            const cancelSeconds = calculateCancelFromOpen(openSeconds);
            tw_rmin.value = Math.floor(cancelSeconds / 60);
            tw_rsec.value = cancelSeconds % 60;
        }

        tw_min.addEventListener("input", updateCancelPreview);
        tw_sec.addEventListener("input", updateCancelPreview);
        updateCancelPreview();

        tw_save.onclick = () => {
            const openSeconds = (parseInt(tw_min.value) || 0) * 60 + (parseInt(tw_sec.value) || 0);
            saveTime(openSeconds);
            const cancelSeconds = calculateCancelFromOpen(openSeconds);
            saveReloadTime(cancelSeconds);
            setArmed(true);
            tw_arm.textContent = "DISARM";
            setStatus(`Saved & Armed → Open: ${openSeconds}s | Cancel: ${cancelSeconds}s`);
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

    /* ================= LOGIC ================= */

    let opened = false;
    let reloaded = false;

    function getSoonestAttackSeconds() {
        const now = Math.floor(Date.now() / 1000);
        let soonest = null;

        document.querySelectorAll('[data-endtime]').forEach(el => {
            const end = parseInt(el.dataset.endtime, 10);
            const rem = end - now;
            if (rem >= 0 && (soonest === null || rem < soonest)) {
                soonest = rem;
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
        window.open(link.href, "_blank");
        setTimeout(re, delayInre);
    }

if (location.search.includes('screen=overview')) {
    createUI();
}
    setInterval(() => {
        const soonest = getSoonestAttackSeconds();
        if (soonest === null) return;

        const openAt = loadTime();
        const reloadAt = loadReloadTime();

        if (reloadAt > 0 && soonest === reloadAt && !reloaded) {
            reloaded = true;
            setTimeout(cancel, delayInclick);
            return;
        }

        if (!isArmed() || openAt <= 0) return;

        if (Math.abs(soonest - openAt) <= 1) {
            openRally();
        }
    }, 1000);

})();
