(function () {
    'use strict';

    /* ================= UTIL ================= */
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

    /* ================= UI ================= */
    function openUI() {
        Dialog.show('Content', `
        <style>
            .tf-h{background:#202225;color:#fff;font-weight:bold}
            .tf-a{background:#32353b;color:#fff}
            .tf-b{background:#36393f;color:#fff}
            .tf-timer{font-weight:bold}
        </style>
        <table width="100%">
            <tr class="tf-h"><td colspan="2">Mass Timed Fake Finder</td></tr>
            <tr class="tf-a">
                <td>Targets</td>
                <td><textarea id="tf-targets" rows="5" style="width:100%"></textarea></td>
            </tr>
            <tr class="tf-b">
                <td>Hit time</td>
                <td><input id="tf-time" size="22"></td>
            </tr>
            <tr class="tf-a">
                <td>Unit</td>
                <td>
                    <label><input type="radio" name="tf-unit" value="ram" checked> Ram</label>
                    <label style="margin-left:10px">
                        <input type="radio" name="tf-unit" value="catapult"> Catapult
                    </label>
                </td>
            </tr>
            <tr class="tf-b">
                <td colspan="2" style="text-align:center">
                    <button id="tf-go" class="btn btn-confirm-yes" disabled>Loading…</button>
                </td>
            </tr>
        </table>`);

        const d=new Date(); d.setHours(24,0,0,0);
        $('#tf-time').val(d.toLocaleString());

        $('input[name="tf-unit"]').on('change',e=>selectedUnit=e.target.value);
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
        if(!targets) return alert('No targets');

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
        <tr class="tf-h">
            <td>Source</td><td>Target</td><td>Dist</td>
            <td>Launch in</td><td>Local</td><td></td>
        </tr>`;
        results.forEach((r,i)=>{
            html+=`
            <tr id="tf-row-${i}" class="${i%2?'tf-a':'tf-b'}">
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

    /* ================= RALLY + AUTO FLOW ================= */
    window.openRally=function(index){
        const r=results[index];
        const [x,y]=r.t.split('|');

        $.get('/game.php',{
            village:r.v.id,
            screen:'api',
            ajax:'target_selection',
            input:`${x}|${y}`,
            type:'coord',
            limit:1
        }).done(data=>{
            const targetId=data?.villages?.[0]?.id;
            if(!targetId) return alert('Target not found');

            const win=window.open(
                `/game.php?village=${r.v.id}&screen=place&target=${targetId}`,
                '_blank'
            );
            document.getElementById(`tf-row-${index}`)?.remove();

            let step=0;
            const iv=setInterval(()=>{
                try{
                    if(!win||win.closed) return clearInterval(iv);
                    const d=win.document;

                    if(step===0){
                        const u=d.querySelector(`#unit_input_${selectedUnit}`);
                        if(!u) return;
                        u.value=1;
                        u.dispatchEvent(new Event('input',{bubbles:true}));
                        step++; setTimeout(()=>{},rand()); return;
                    }
                    if(step===1){
                        const a=d.querySelector('#target_attack')||d.querySelector('input.attack');
                        if(!a) return;
                        setTimeout(()=>a.click(),rand());
                        step++; return;
                    }
                    if(step===2){
                        const c=d.querySelector('#troop_confirm_go')||d.querySelector('input.btn-confirm-yes');
                        if(!c) return;
                        setTimeout(()=>c.click(),rand());
                        step++; return;
                    }
                    if(step===3){
                        setTimeout(()=>{if(!win.closed)win.close();},rand(150,500));
                        clearInterval(iv);
                    }
                }catch{}
            },200);
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
