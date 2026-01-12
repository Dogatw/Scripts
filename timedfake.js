(function () {
    'use strict';

    /* ================= CONFIG ================= */
    const STORAGE_KEY = 'tw_timed_fake_settings';
    const MS_PER_MIN = 60000;
    const COLORS = { ok:'#40D0E0', warn:'#FFD700', danger:'#FF5555' };
    const rand = (min=100,max=400)=>Math.floor(Math.random()*(max-min+1))+min;

    /* ================= STATE ================= */
    let unitSpeeds = {};
    let selectedUnit = 'ram';
    let villages = [];
    let results = [];

    /* ================= LOAD UNIT SPEEDS ================= */
    async function loadUnitSpeeds() {
        const xml = await $.get('/interface.php?func=get_unit_info');
        $(xml).find('config').children().each((_,u)=>{
            unitSpeeds[u.nodeName] = parseFloat($(u).find('speed').text());
        });
    }

    /* ================= SAVE / LOAD ================= */
    function saveSettings() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
            targets: $('#tf-targets').val(),
            time: $('#tf-time').val(),
            unit: selectedUnit
        }));
    }

    function loadSettings() {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    }

    /* ================= UI ================= */
    function openUI() {
        Dialog.show('Content', `
        <style>
            .tf-box { font-family: Arial; }
            .tf-title {
                background:#1f2226;color:#fff;font-weight:bold;
                padding:8px;text-align:center;font-size:14px;
            }
            .tf-section { padding:8px;background:#2b2f36;color:#fff }
            .tf-section label { font-weight:bold; display:block; margin-bottom:4px }
            .tf-input, .tf-textarea {
                width:100%; box-sizing:border-box;
                padding:6px; background:#1c1f24;
                border:1px solid #555;color:#fff;
            }
            .tf-actions {
                text-align:center;background:#202225;padding:8px;
            }
            .tf-btn {
                padding:6px 16px;font-weight:bold;
            }
            .tf-timer { font-weight:bold }
        </style>

        <div class="tf-box">
            <div class="tf-title">Mass Timed Fake Finder</div>

            <div class="tf-section">
                <label>Target coordinates</label>
                <textarea id="tf-targets" class="tf-textarea" rows="5"
                    placeholder="500|500 501|499 ..."></textarea>
            </div>

            <div class="tf-section">
                <label>Hit time</label>
                <input id="tf-time" class="tf-input" size="22">
            </div>

            <div class="tf-section">
                <label>Unit type</label>
                <label><input type="radio" name="tf-unit" value="ram" checked> Ram</label>
                <label><input type="radio" name="tf-unit" value="catapult"> Catapult</label>
            </div>

            <div class="tf-actions">
                <button id="tf-go" class="btn btn-confirm-yes tf-btn" disabled>
                    Loading…
                </button>
            </div>
        </div>`);

        /* defaults */
        const d = new Date(); d.setHours(24,0,0,0);
        $('#tf-time').val(d.toLocaleString());

        /* restore saved */
        const saved = loadSettings();
        if (saved.targets) $('#tf-targets').val(saved.targets);
        if (saved.time) $('#tf-time').val(saved.time);
        if (saved.unit) {
            selectedUnit = saved.unit;
            $(`input[name="tf-unit"][value="${saved.unit}"]`).prop('checked', true);
        }

        /* listeners */
        $('#tf-targets').on('input', saveSettings);
        $('#tf-time').on('change', saveSettings);
        $('input[name="tf-unit"]').on('change', e=>{
            selectedUnit = e.target.value;
            saveSettings();
        });
    }

    /* ================= VILLAGES ================= */
    function collectVillages() {
        const rows=document.querySelectorAll('#combined_table tr');
        for(let i=1;i<rows.length;i++){
            const c=rows[i].children;
            const id=c[1].firstElementChild.dataset.id;
            const coord=c[1].innerText.match(/\d+\|\d+/)[0];
            const units={};
            for(let u=0;u<game_data.units.length;u++){
                units[game_data.units[u]]=parseInt(c[8+u].innerText,10);
            }
            villages.push({id,coord,units});
        }
    }

    /* ================= MATH ================= */
    const dist=(a,b)=>{
        const [x1,y1]=a.split('|').map(Number);
        const [x2,y2]=b.split('|').map(Number);
        return Math.hypot(x1-x2,y1-y2);
    };

    /* ================= CALCULATE ================= */
    function calculate(){
        results=[];
        const targets=$('#tf-targets').val().match(/\d+\|\d+/g);
        if(!targets) return alert('No target coordinates');

        const landTime=new Date($('#tf-time').val()).getTime();
        const speedMs=unitSpeeds[selectedUnit]*MS_PER_MIN;

        const sstr=$('#serverDate').text()+' '+$('#serverTime').text();
        const serverTime=Date.parse(sstr.replace(/(\d+)\/(\d+)\/(\d+)/,'$2/$1/$3'));

        for(const v of villages){
            if(!v.units[selectedUnit]) continue;
            for(const t of targets){
                const d=dist(v.coord,t);
                const launch=landTime-d*speedMs;
                const delta=launch-serverTime;
                if(delta>0) results.push({v,t,d,delta,launch});
            }
        }
        results.sort((a,b)=>a.delta-b.delta);
        showResults();
    }

    /* ================= RESULTS ================= */
    function showResults(){
        let html=`<table width="100%">
        <tr style="background:#1f2226;color:#fff;font-weight:bold">
            <td>Source</td><td>Target</td><td>Dist</td>
            <td>Launch in</td><td>Local</td><td></td>
        </tr>`;
        results.forEach((r,i)=>{
            html+=`
            <tr id="tf-row-${i}" style="background:${i%2?'#32353b':'#36393f'};color:#fff">
                <td>${r.v.coord}</td>
                <td>${r.t}</td>
                <td>${r.d.toFixed(2)}</td>
                <td><span class="tf-timer" data-time="${r.delta}"></span></td>
                <td>${new Date(r.launch).toLocaleString()}</td>
                <td style="cursor:pointer;color:${COLORS.ok}" onclick="openRally(${i})">Rally</td>
            </tr>`;
        });
        html+='</table>';
        Dialog.show('Content',html);
        startTimers();
    }

    /* ================= TIMERS ================= */
    function startTimers(){
        setInterval(()=>{
            document.querySelectorAll('.tf-timer').forEach(el=>{
                let t=+el.dataset.time-1000;
                el.dataset.time=t;
                if(t<=0){el.textContent='NOW';el.style.color=COLORS.danger;return;}
                const s=Math.floor(t/1000)%60;
                const m=Math.floor(t/60000)%60;
                const h=Math.floor(t/3600000);
                el.textContent=`${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
                el.style.color=t<5*60000?COLORS.danger:t<15*60000?COLORS.warn:COLORS.ok;
            });
        },1000);
    }

    /* ================= RALLY AUTO FLOW ================= */
window.openRally = function (index) {
    const r = results[index];
    const [x, y] = r.t.split('|');

    $.get('/game.php', {
        village: r.v.id,
        screen: 'api',
        ajax: 'target_selection',
        input: `${x}|${y}`,
        type: 'coord',
        limit: 1
    }).done(data => {
        const targetId = data?.villages?.[0]?.id;
        if (!targetId) return alert('Target not found');

        const win = window.open(
            `/game.php?village=${r.v.id}&screen=place&target=${targetId}`,
            '_blank'
        );

        document.getElementById(`tf-row-${index}`)?.remove();

        let attackClicked = false;
        let confirmDone = false;
        let lastHref = '';

        const poll = setInterval(() => {
            try {
                if (!win || win.closed) return clearInterval(poll);

                // detect real navigation
                if (win.location.href !== lastHref) {
                    lastHref = win.location.href;
                }

                const doc = win.document;

                /* STEP 1 — Fill unit + Attack */
                if (!attackClicked) {
                    const unitInput = doc.querySelector(`#unit_input_${selectedUnit}`);
                    const attackBtn =
                        doc.querySelector('#target_attack') ||
                        doc.querySelector('input.attack');

                    if (!unitInput || !attackBtn) return;

                    unitInput.value = 1;
                    unitInput.dispatchEvent(new Event('input', { bubbles: true }));

                    setTimeout(() => attackBtn.click(), rand());
                    attackClicked = true;
                    return;
                }

                /* STEP 2 — WAIT for CONFIRM PAGE DOM */
                if (attackClicked && !confirmDone) {
                    // confirm page ALWAYS has a form posting to "confirm"
                    const confirmForm =
                        doc.querySelector('form[action*="confirm"]') ||
                        doc.querySelector('form#command-confirm-form');

                    if (!confirmForm) return; // still loading

                    confirmDone = true;

                    setTimeout(() => {
                        confirmForm.submit(); // ✅ GUARANTEED
                    }, rand(150, 400));

                    /* STEP 3 — Close window */
                    setTimeout(() => {
                        if (!win.closed) win.close();
                    }, rand(400, 700));

                    clearInterval(poll);
                }

            } catch {
                // cross-navigation moment, wait for next tick
            }
        }, 120);
    });
};



    /* ================= INIT ================= */
    (async function(){
        openUI();
        await loadUnitSpeeds();
        collectVillages();
        $('#tf-go').prop('disabled',false).text('Go').on('click',calculate);
    })();

})();
