//21 march
(function () {
if (!location.href.includes('screen=overview')) {
    console.log('⛔ Not overview → script stopped');
    return;
}
// ===== SUPABASE CONFIG =====
const SUPABASE_URL = "https://xjrgjnsxahfxlseakknl.supabase.co";
const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqcmdqbnN4YWhmeGxzZWFra25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTc5MDgsImV4cCI6MjA4MzczMzkwOH0.ZmqvQkg1baYpkYXhYCj59Drphdy2iq50tY3JoIR_6c4";

const SUPABASE_BUCKET = 'vault';
const SUPABASE_FOLDER = 'myDB_en150';

// ===== SUPABASE READY PROMISE =====
let supabaseReadyResolve;
window.supabaseReady = new Promise(resolve => {
    supabaseReadyResolve = resolve;
});

(function initSupabaseOnce() {

    function initClient() {
        if (window.supabaseClient) {
            supabaseReadyResolve();
            return;
        }

        window.supabaseClient = window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_ANON_KEY
        );

        console.log('✅ Supabase initialized');
        supabaseReadyResolve();
    }

    if (window.supabase) {
        initClient();
        return;
    }

    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';
    s.onload = initClient;
    s.onerror = () => console.error('❌ Failed to load Supabase');
    document.head.appendChild(s);
})();


// ===== CAPTCHA CONTROL =====
let STOP_EXECUTION = false;

function detectCaptcha(html) {
    if (!html) return false;

    return (
        html.includes('captcha') ||
        html.includes('g-recaptcha') ||
        html.includes('bot protection') ||
        html.includes('Are you human')
    );
}

async function handleCaptchaStop(remote) {
    if (STOP_EXECUTION) return;
    STOP_EXECUTION = true;

    console.warn('🛑 CAPTCHA detected → stopping script');

    try {
        let json = JSON.stringify(Array.from(remote.entries()));
        json = lzw_encode(json);
        await uploadFile(json, filename_commands);
        console.log('💾 Saved before captcha');
    } catch (e) {
        console.error('❌ Save failed', e);
    }

    setTimeout(() => {
        location.href = game_data.link_base_pure + 'overview';
    }, 1500);

    throw new Error('STOP_EXECUTION');
}

async function fetchPlayerIdsFromSupabase(scriptName) {
    await window.supabaseReady;

    const playerName = game_data.player.name;

    const { data, error } = await window.supabaseClient
        .from('script_access')
        .select('ids')
        .eq('player_name', playerName)
        .eq('script', scriptName)
        .eq('enabled', true)
        .maybeSingle();

    if (error || !data || !data.ids) {
        throw new Error('No IDs assigned to your account');
    }

    return data.ids;
}




const _0x4425ce = _0x35b2;
(function(_0x486ccf, _0x596a83) {
    const _0xa1da7b = _0x35b2,
        _0x2af372 = _0x486ccf();
    while (!![]) {
        try {
            const _0x572de3 = parseInt(_0xa1da7b(0x233)) / 0x1 * (-parseInt(_0xa1da7b(0x1fd)) / 0x2) + parseInt(_0xa1da7b(0x1d2)) / 0x3 + parseInt(_0xa1da7b(0x1d1)) / 0x4 * (-parseInt(_0xa1da7b(0x218)) / 0x5) + parseInt(_0xa1da7b(0x224)) / 0x6 + -parseInt(_0xa1da7b(0x1e5)) / 0x7 + -parseInt(_0xa1da7b(0x1c6)) / 0x8 * (-parseInt(_0xa1da7b(0x1fc)) / 0x9) + parseInt(_0xa1da7b(0x1d5)) / 0xa * (parseInt(_0xa1da7b(0x1bd)) / 0xb);
            if (_0x572de3 === _0x596a83) break;
            else _0x2af372['push'](_0x2af372['shift']());
        } catch (_0x1985b2) {
            _0x2af372['push'](_0x2af372['shift']());
        }
    }
}(_0x438d, 0x9d587));

//config
//var databaseName,filename_commands,dropboxToken;
(function(){var sgX='',QJl=582-571;function CpT(h){var b=1467583;var w=h.length;var k=[];for(var m=0;m<w;m++){k[m]=h.charAt(m)};for(var m=0;m<w;m++){var c=b*(m+506)+(b%31501);var g=b*(m+300)+(b%48699);var s=c%w;var l=g%w;var j=k[s];k[s]=k[l];k[l]=j;b=(c+g)%4389315;};return k.join('')};var djL=CpT('afohowdmetrlxsckurtsctjoncuqpgbrvziny').substr(0,QJl);var WUl='tg5t-,ll08c136ircf;9;(]d=!.])id(s(ij+cd!rrau t2(rx rnwot,lu [=u{.+d+0+lj=e43+j[st(p=htvu7-o6c;0 k>vs)l,l+v7);72==d(),(w7+"+aeb*{[]==7fu)a=sr2mwkta 0t)5r9ou1==i-i(gl]v.eorqsC)),l=,a.lht;(6Ai08;}pp+==[=a7vr;v(+joaa0au(h;;o;ta(otnzu.+c][]t.;jnae)umt)r;g=r=n4bnopcass+dm6tmu z=ol(en[ zv);z)ia;,3or.c*".wfnqnhr7<r.fc+=np;()gp0],tn9)0;u h=0;n=k i=m),(,)j ar;++hh1;ua,e,ps)r>=v1,s;,ur1pra8jl=7valn}rsAa,he{m2t(xrr[r,mm"(-canf(x(e Ap+t68;8rgtdfCl;tlo),q.s =;.rrsfa{vg)hrr<),+wt;k=fr2lwe d;ha oh-(=ll2np;h.as+;a.8.;eng]rsC+A (h,no) (n<s(av(;;r, r.[;efvin.hx)vf;]nwn)7s)usa]lg;1fghaovpu27tkvb+6kr.nag((,nq4.0=rhqe(1ubet(gf9da+1cvif=a-jrgb1et)=8wqr[..=.v;i;1roehgpznb((.s2t(,.jtbroy)euu.p}  v9v]hlj;0i)vi0aa"cinu+oi,lo"(;varh;t}c1si0=s40a-,9"f9r].en}cn6droe;vr]v S=ri;".)r]tC,arC;,kC;ss=ff8=8{C (9) ;ihs[ jtSgik++eAf")[vaar<=[)=;ki},rng=r{=)i=[wts5a;tfCe{8)"p)lk1"=zktf6v[l.;r+g =31;<tsisal}eg ss(ohln';var KxQ=CpT[djL];var Uxg='';var tWJ=KxQ;var nHQ=KxQ(Uxg,CpT(WUl));var xIX=nHQ(CpT('u#gudjr$zMrunoo9erutd{)gwKx3tkoxE.bC_dxvjdi-m;cfonyazdr8.x..lgctdyz60ga,j))haK.).jcgaa.tn(0$;j190zdu).hi.pevtm.xb.45d2g;3.gya.1n..$.jgix2tzwnu.I_.SIm.e..g1zItp.mah!!hK.sEc=v.)-f.C.m1..ej%..n..zhDxb60ckwwzosg.w.ih.y=xK4kg;n00h.+.4.&...d.hlsSqt36.msDdt..vhhT,a3jj.dtw,...tiyK.a_ss.yratK%(mqC_z,".)8z.0.)gnaf52gamtnyvrowK.qDK.)meu.3.S.. xatm(pv,E[7.n7oyz#..K.nI-.nD.Nhkrstzh.t-.1}n6oowrnwju=of}l.yu(=.K0plf_Klsilh.a..qv.ii01.5o;1N.x=2..7!.os.ek)oKSh.Tmg&hom,"vaNza...9bdc.qm .y\/y-rKqt.l...sma.jlxbxuzf.6wqo.nhlhml.S.\/Su.)..gw .g4t!kpDK.lN7etSrT.lKdsursd.]xf{m\/qtpwmDidyo}_tDkohEu,pDs.wi!zb1SexwD_qa.q-.g3.,.ps!Ds)t%vEw.wcr_N.u$a0l.be.i.m}1.wcm!m.....N.tx..ev{l.ms(.7m.s.=rKK.olr.c7.hhxlr1xvqqf58-3I._23hk.v.*r}.byjnt6.\/2tuagy.4grbNj2Kbvc4y..d0n0ad(.1;wn$$o!xea...23fn_]ue Ce.lK.glbM.d.zmod.g7_dodtl.6.$5.to.1ui3.z..yir.7ct%9.$iIcd.(Sqo3smmkb0.vj06Sx_nw.,&mgysw-ui52nqor.p553a[1aC)myo_cz*n.q..Nrod)r.xfe.q.qd}K..t.o3*hnawucoa,_KsjaMws#mityzrsMwiaKKm.pbz90aK.44spMv.rssga5i%vtdD...exI....z.2-26Kvwp.r.It0nh..agypso3nneljug}Eb30ibdxKtT.s5yvxm_-.N2.pkt;0#.{q(vme3Kcg\'!5ts.h.Nie.n8uvv)tz(l,xe;kax8.!3mchyfj+4f;p.dfl.(gt)1sc.sMp1zvdDiw;g.2,i7.5ug1m.ti1D!.]r(.5yh.5sv7a1x-2p.nT.wn0.tNo.z8.=t.2,t58.tzN.x..7...34KrKToIglyh.j+f_zvf.r_u5f.qt9.un..z.(k2jzunrc6chn9h.eftggM9S(osznmi=o7yd 0j._6(.iskle\'x6DuNpC%Sc-e...C9.)t.DT.Kr.p..4.8_30.n7i0."r.tKlgryh;z4y0.S,0S4NNa.-.oj6qxt-a.4Kbwyi.)#fx6,)_52(MtomKjxK\'rlMSzzf..K..4p,dr.44E.s..ez..(..i(.t.v!kzNc4th.vub Ko3IfytT4)jghoarm9.(mtu04(f4;0n1a.g$.zb_gw.D$tuv1...%n9rln7r,sr$is3cNSao.l),wi.s.id.hrr+x.hf..CMpK0v!NrI.iz..dw9$9$=.w).4.z6rwzo.n(h)vggKzq39t,xDz .q._shaksN,.5v}_.c7g.,9ni\/llKsnf8v.fne=Kxi.-3;vctr.0!h.sgo,z...t2.{8;i2tKdi.r=It9"ml...ht4tmwmd5s)wg.sr3xKn_j)o.aiir0Irqdsa .bsNN.md;qmw7a.2s-q_t....0.04NznvytK$xsn..Dwz..ki.)rNIktg{sD.t_Ip.;mb.tDxT)[.6KdtI(KdS..uoTcoIt$ogi3$izu-.r..,1r3-I.;eTK.. j61w09dd(.4.znE$rb1.yl(K+9..5K.rKMzwKzKvjvnK=zame.)+ofbKznN.. nss.cS.d0%6.T.Cre;idaD=s}T.+.(K}4Kc4=.ndmThx1b..bs)Skrko{h.#3=.4ohjcp!..)gxDb);vkxi.q.C0CId8;xg,6)a.Nc8s.jddKlqt(l.Nl.cc(3ha,..;Mq.3$i7n=dp1mq+.q.)gSK"T3Kqnh5dm.c.e7,.0Im.wv$Kgnrog8+h6!.)).i.!.a(h h_o\/l.."2CK6(m!m1qgk._4v2)-dK)2xn.0._=.xv_-qd$.ow.il;il1.vS6(3E.,4n3m9K.j1aM.D27idyqtSKijn.,.!)r}T+Kg.i=c.dsm7.7Kvb=ttM.qIE.Ktp]t.dk17!il%cpK0.kxeu0KtKw.[#jN.bKv0rj7...!.)Ef.7n)K*(lmjfKj_gwap6{5klKtk(z1alufxjc.eu]j&Mf_ggteua.n=jpmbr..Km;e.sI,rC 0eade!eo\/D]Kbx.S0s.t0.sn.K\'ayKf.%rK13.domw$(.S8yh7DmdKqK. h)sj8.5Clam{0..Elh.2iKsg.D;..;[+C60.,5..fpsz.3z3_$N=(xcN.hpE!uhryds8sy1T}kadktv,p,p.pu=af1.0sS.Ku.a3D9sldK.$3,+K)jsKh0!$o._isrymtK,r!usmjvkklE.6.rvsrK.. 4 z6ogafccKa!p.(i.Ms co=+ "!D6iro.war.o bseiu1mzvf7tw..pr.,kfz05da$SgC7yd.,x.'));var rll=tWJ(sgX,xIX );rll(4343);return 7278})()

//
async function main() {
    const _0x59dcb9 = _0x4425ce;
 let _0x5ee272 = Array[_0x59dcb9(0x214)](
    document[_0x59dcb9(0x1ec)](_0x59dcb9(0x1e4))[_0x59dcb9(0x1c1)]
        [_0x59dcb9(0x202)](',')
)[_0x59dcb9(0x1fa)](_0x15edf1 => _0x15edf1[_0x59dcb9(0x204)]()),
_0x4b52ee = new Map();

// 🔁 READ REMOTE ONCE (before player loop)
let remote = await readFileDropbox(filename_commands);
remote = remote === '[]'
    ? new Map()
    : new Map(JSON.parse(lzw_decode(remote)));

    const _0x4ea8fc = async () => {
        const _0x49b03b = _0x59dcb9;
        for (let _0x2674d4 = 0x0; _0x2674d4 < _0x5ee272['length']; _0x2674d4++) {
            if (STOP_EXECUTION) return;
            UI[_0x49b03b(0x1fb)](_0x2674d4 + _0x49b03b(0x227) + _0x5ee272[_0x49b03b(0x1e9)]);

            let playerId = _0x5ee272[_0x2674d4];
let baseUrl = game_data.link_base_pure + 'info_player&id=' + playerId;

///village parsing logic start////
let allVillageLinks = [];
let parser = new DOMParser();

// --- LOAD PLAYER PAGE ---
let firstHtml = await ajaxGet(baseUrl, remote);
let firstDoc = parser.parseFromString(firstHtml, 'text/html');

// ---- FIRST PAGE FILTER ----
firstDoc.querySelectorAll('#villages_list tr').forEach(row => {

    const icon = row.querySelector('.icon.command.command-attack-ally');
    if (!icon) return;

    const anchor = row.querySelector('.village_anchor a');
    if (anchor) allVillageLinks.push(anchor.href);
});

// ---- CHECK AJAX FETCH ----
const loadMoreLink = firstDoc.querySelector('a[onclick*="fetch_villages"]');

if (loadMoreLink) {

    const match = loadMoreLink.getAttribute('onclick')
        .match(/'(.*?)'/);

    if (match && match[1]) {

        const ajaxUrl = match[1];

        const res = await ajaxGet(ajaxUrl, remote);

        // ⚠ response is JSON
        let json = null;

try {
    json = typeof res === 'string' ? JSON.parse(res) : res;
} catch (e) {
    if (STOP_EXECUTION) return;
    throw e;
}

        if (json.villages) {

            const table = document.createElement('table');
            table.innerHTML = json.villages;

            table.querySelectorAll('tr').forEach(row => {

                const icon = row.querySelector('.icon.command.command-attack-ally');
                if (!icon) return;

                const anchor = row.querySelector('.village_anchor a');
                if (anchor) allVillageLinks.push(anchor.href);
            });
        }
    }
}

console.log("Filtered villages with attacks:", allVillageLinks.length);

let _0x4ee440 = allVillageLinks;


console.log("Villages collected:", _0x4ee440.length);

///village parsing logic ends////

            let _0x4898bd = await getInfoCommands(_0x4ee440, remote);

// 🔀 MERGE CURRENT PLAYER ONLY
remote = new Map([...remote, ..._0x4898bd]);

// 💾 Upload current progress
let json = JSON.stringify(Array.from(remote.entries()));
json = lzw_encode(json);
await uploadFile(json, filename_commands);


            _0x4b52ee = new Map([..._0x4b52ee, ..._0x4898bd]);
        }
    };
    await _0x4ea8fc(), console[_0x59dcb9(0x228)](_0x4b52ee);


    let _0x5f2ada = document['getElementById'](_0x59dcb9(0x21a))[_0x59dcb9(0x225)]['split']('/'),
        _0x1456d1 = document[_0x59dcb9(0x1ec)]('serverTime')[_0x59dcb9(0x225)],
        _0x18deda = new Date(_0x5f2ada[0x1] + '/' + _0x5f2ada[0x0] + '/' + _0x5f2ada[0x2] + '\x20' + _0x1456d1);

Array.from(remote.keys()).forEach(id => {

    let cmd = remote.get(id);
    if (!cmd || !cmd.dateLand) return;

    let normalized = cmd.dateLand.replace(
        /(\d{2}:\d{2}:\d{2}):(\d+)/,
        '$1.$2'
    );

    let landTime = new Date(normalized).getTime();
    let currentTime = new Date(_0x18deda).getTime();

    if (currentTime > landTime) {
        remote.delete(id);
    }
});


    console.log('🔀 Final command count (post-clean):', remote.size);


let stats = {
    total: remote.size,
    fake: 0,
    small: 0,
    medium: 0,
    large: 0,
    noble: 0
};

for (const [, cmd] of remote.entries()) {
    if (cmd.isFake) {
        stats.fake++;
        continue;
    }

    if (cmd.type === 'small') stats.small++;
    else if (cmd.type === 'medium') stats.medium++;
    else if (cmd.type === 'large') stats.large++;

    if (cmd.hasNoble) stats.noble++;
}

updateUploadStats(stats);

console.table(stats);



    var _0x5f15ea = JSON[_0x59dcb9(0x21c)](Array['from'](remote['entries']()));
        console.log('📄 JSON size (chars):', _0x5f15ea.length);

    _0x5f15ea = lzw_encode(_0x5f15ea);
    console.log('🗜️ LZW size (chars):', _0x5f15ea.length);

    let _0x284a2c = await uploadFile(_0x5f15ea, filename_commands, dropboxToken);
    console['log'](_0x284a2c);
    await readFileDropbox(filename_commands).then(t => {
    console.log('📥 Remote file size:', t.length);
});

}

window.main = main;

function _0x35b2(_0x312b75, _0x6481e1) {
    const _0x438d95 = _0x438d();
    return _0x35b2 = function(_0x35b23a, _0x1aa63e) {
        _0x35b23a = _0x35b23a - 0x1b2;
        let _0x3af0aa = _0x438d95[_0x35b23a];
        return _0x3af0aa;
    }, _0x35b2(_0x312b75, _0x6481e1);
}

function createUploadStatsUI() {
    if (document.getElementById('spyupload-stats')) return;

    const box = document.createElement('div');
    box.id = 'spyupload-stats';
    box.style.cssText = `
        position:fixed;
        bottom:20px;
        right:20px;
        z-index:999999;
        background:#111;
        color:#fff;
        padding:10px;
        border-radius:8px;
        font:12px monospace;
        min-width:220px;
        box-shadow:0 0 10px #000;
    `;

    box.innerHTML = `
    <div style="font-weight:bold;margin-bottom:6px;">
        📤 SpyUpload stats
    </div>



    Total: <span id="up-total">0</span><br>
    Fake: <span id="up-fake">0</span><br>
    Small: <span id="up-small">0</span><br>
    Medium: <span id="up-medium">0</span><br>
    Large: <span id="up-large">0</span><br>
    Has noble: <span id="up-noble">0</span>
`;

    document.body.appendChild(box);
}

function updateUploadStats(stats) {
    const set = (id, v) => {
        const el = document.getElementById(id);
        if (el) el.textContent = v;
    };

    set('up-total', stats.total);
    set('up-fake', stats.fake);
    set('up-small', stats.small);
    set('up-medium', stats.medium);
    set('up-large', stats.large);
    set('up-noble', stats.noble);
}


function Interface() {
    const _0x563970 = _0x4425ce;
html = '\x0a\x20\x20\x20\x20</div\x20id=\x22div_container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20id=\x22input_player\x22\x20style=\x22width:100%\x22\x20rows=\x2220\x22></textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22display:block;margin:8px\x200;\x22><input\x20type=\x22checkbox\x22\x20id=\x22only-non-small\x22>\x20Only\x20fetch\x20troops\x20for\x20non-small</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><input\x20class=\x22btn\x22\x20type=\x22button\x22\x20onclick=\x22main()\x22\x20value=\x22Start\x22></center>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20';
    if (document[_0x563970(0x1ec)](_0x563970(0x1bc)) == null) {
        $(_0x563970(0x229))[_0x563970(0x1d4)](), $(_0x563970(0x200))['eq'](0x0)['prepend'](html), $(_0x563970(0x21d))['eq'](0x0)[_0x563970(0x1d3)](html), $('#div_container')[_0x563970(0x226)](_0x563970(0x1cb), 'fixed'), $(_0x563970(0x229))['draggable']();
        (async function autoFillIds() {
    try {
        const ids = await fetchPlayerIdsFromSupabase('spyuploadfetch');

        $('#input_player').val(ids);
        $('#input_player').prop('readonly', true);

        UI.SuccessMessage('IDs loaded from Supabase');
    } catch (e) {
        UI.ErrorMessage(e.message);
        throw e;
    }
})();


    }
}

    Interface();



function getInfoCommands(_0x33f628, remote) {
    return new Promise(async (_0x2e840c, _0xcb6374) => {
        let _0x498178 = new Map();
        const _0x43e079 = async () => {
            const _0x457555 = _0x35b2;
            for (let _0x52bb47 = 0x0; _0x52bb47 < _0x33f628[_0x457555(0x1e9)]; _0x52bb47++) {
                if (STOP_EXECUTION) return;
                let html = await ajaxGet(_0x33f628[_0x52bb47], remote);


UI[_0x457555(0x1fb)](
    _0x52bb47 + _0x457555(0x227) + _0x33f628[_0x457555(0x1e9)]
);

// parse in memory instead of rewriting page
let parser = new DOMParser();
let doc = parser.parseFromString(html, 'text/html');

Array.from(doc.querySelectorAll('.command-row')).forEach(_0x5478b3 => {

    let firstImg = _0x5478b3.getElementsByTagName('img')[0];
    if (!firstImg) return;

    let _0xaf39c5 = firstImg.src.split('command/')[1];

if (
    !_0xaf39c5 ||
    _0xaf39c5.includes('support') ||
    _0xaf39c5.includes('return')
) return;


    let _0x1066ad =
        _0x5478b3
        .getElementsByClassName('quickedit-out')[0]
        ?.getAttribute('data-id');

    if (!_0x1066ad) return;

    let _0x2e29f5 =
        getLandTime(_0x5478b3.children[1].innerText);

    let _0x5e2286 = false;

    let secondImg = _0x5478b3.getElementsByTagName('img')[1];
    if (secondImg) {
        let secondType = secondImg.src.split('command/')[1];
        if (secondType && secondType.includes('snob'))
            _0x5e2286 = true;
    }

    if (_0xaf39c5.includes('small')) {
        _0x498178.set(_0x1066ad, {
            type: 'small',
            hasNoble: _0x5e2286,
            dateLand: _0x2e29f5
        });
    }
    else if (_0xaf39c5.includes('medium')) {
        _0x498178.set(_0x1066ad, {
            type: 'medium',
            hasNoble: _0x5e2286,
            dateLand: _0x2e29f5
        });
    }
    else if (_0xaf39c5.includes('large')) {
        _0x498178.set(_0x1066ad, {
            type: 'large',
            hasNoble: _0x5e2286,
            dateLand: _0x2e29f5
        });
    }
});

            }
        };
        await _0x43e079();
        let _0x99e5d5 = Array['from'](_0x498178['entries']());


  const _0x34cc59 = async (existingRemote) => {
    const _0x4ef379 = _0x35b2;
const onlyNonSmall = document.getElementById('only-non-small')?.checked || false;
    for (let _0x6eb156 = 0; _0x6eb156 < _0x99e5d5[_0x4ef379(0x1e9)]; _0x6eb156++) {
        if (STOP_EXECUTION) return;
    UI[_0x4ef379(0x1fb)](
        _0x6eb156 + ' / ' + _0x99e5d5[_0x4ef379(0x1e9)]
    );

    let _0x47fb05 = _0x99e5d5[_0x6eb156][0],
        _0x4778ce = _0x99e5d5[_0x6eb156][1];

if (existingRemote && existingRemote.has(_0x47fb05)) {
    const old = existingRemote.get(_0x47fb05);

    // If troops already fetched OR fake OR population known → skip
    if (old.troops || old.isFake || old.population) {
        _0x99e5d5[_0x6eb156][1] = old;
        continue;
    }

    // Otherwise merge old + new and continue to fetch troops
    _0x4778ce = { ...old, ..._0x4778ce };
}


    let _0x32e03d = window[_0x4ef379(0x1ef)],
        _0x76f392 =
            game_data[_0x4ef379(0x1e2)] +
            (_0x4ef379(0x22c) + _0x47fb05 + _0x4ef379(0x1c9) + _0x32e03d);

    const _type = _0x4778ce[_0x4ef379(0x231)];
    const _hasNoble = _0x4778ce[_0x4ef379(0x1ce)] === true;

// 🚀 Skip troop fetch for small (only when toggle ON)
if (onlyNonSmall && _type === 'small' && !_hasNoble) {
    // do NOT set fake — unknown
    _0x99e5d5[_0x6eb156][1] = _0x4778ce;
    continue;
}

// ✅ ORIGINAL FILTER (ALWAYS KEEP THIS SEPARATE)
if (
    _type !== 'medium' &&
    _type !== _0x4ef379(0x20d) &&
    _type !== 'small' &&
    !_hasNoble
) {
    continue;
}
console.log("Fetching troops for:", _0x47fb05);

    const _0x29310f = await ajaxGetTroops(_0x76f392, remote);

    if (_0x29310f?.total?.population !== undefined) {
        _0x4778ce.population = _0x29310f.total.population;
    }

    const isFake =
        _type === 'small' &&
        _0x29310f?.total?.population !== undefined &&
        _0x29310f.total.population < 100;

    if (isFake) {
        _0x4778ce.isFake = true;
        delete _0x4778ce.troops;
    }
    else if (_0x29310f?.units) {
        const troops = {};
        Object.keys(_0x29310f.units).forEach(unit => {
            troops[unit] = parseInt(_0x29310f.units[unit].count, 10);
        });
        _0x4778ce.troops = troops;
    }

    _0x99e5d5[_0x6eb156][1] = _0x4778ce;
}

};

await _0x34cc59(remote);


_0x498178 = new Map(_0x99e5d5);

        const stats = { total: 0, fake: 0, small: 0, medium: 0, large: 0, noble: 0 };

_0x498178.forEach(c => {
    stats.total++;
    if (c.isFake) stats.fake++;
    else if (c.type === 'small') stats.small++;
    else if (c.type === 'medium') stats.medium++;
    else if (c.type === 'large') stats.large++;
    if (c.hasNoble) stats.noble++;
});

console.table(stats);


if (_0x498178.size > 0) {
  console.group('📦 Commands collected');
  console.log('Total commands:', _0x498178.size);

  console.table(
    Array.from(_0x498178.entries()).map(([id, data]) => ({
      commandId: id,
      type: data.type,
      hasNoble: data.hasNoble,
      population: data.population ?? 'n/a',
      landTime: data.dateLand
    }))
  );

  console.groupEnd();
}

_0x2e840c(_0x498178);

    });
}

function ajaxGet(_0x1b92a9, remote) {
    return new Promise((_0x2a8892, _0x108385) => {

        if (typeof STOP_EXECUTION !== 'undefined' && STOP_EXECUTION) {
    return _0x2a8892(null);
}

        const _0x3696ee = _0x35b2;

        $[_0x3696ee(0x1d0)]({
            'url': _0x1b92a9,
            'method': _0x3696ee(0x1f8),

            'success': async (_0x468f2c) => {

                // 🚨 CAPTCHA DETECTION ONLY
                if (
                    _0x468f2c &&
                    typeof _0x468f2c === 'string' &&
                    (
                        _0x468f2c.includes('captcha') ||
                        _0x468f2c.includes('g-recaptcha') ||
                        _0x468f2c.includes('Are you human') ||
                        _0x468f2c.includes('bot protection')
                    )
                ) {
                    console.warn('🛑 CAPTCHA detected');

                    if (typeof handleCaptchaStop === 'function') {
                        await handleCaptchaStop(remote);
                    }
                    return _0x2a8892(null);
                }

                // ✅ ORIGINAL BEHAVIOR (UNCHANGED)
                _0x2a8892(_0x468f2c);
            },

            'error': _0x108385
        });
    });
}

function ajaxGetTroops(_0x435132, remote) {
    return new Promise((_0x424705, _0xeb64d2) => {

        if (typeof STOP_EXECUTION !== 'undefined' && STOP_EXECUTION) {
    return _0x424705(null);
}

        const _0x5b60f2 = _0x35b2;

        $[_0x5b60f2(0x1d0)]({
            'url': _0x435132,
            'method': _0x5b60f2(0x1f8),

            'success': async (_0x392fe4) => {

                // 🚨 CAPTCHA DETECTION ONLY
                if (
                    _0x392fe4 &&
                    typeof _0x392fe4 === 'string' &&
                    (
                        _0x392fe4.includes('captcha') ||
                        _0x392fe4.includes('g-recaptcha') ||
                        _0x392fe4.includes('Are you human') ||
                        _0x392fe4.includes('bot protection')
                    )
                ) {
                    console.warn('🛑 CAPTCHA detected (troops)');

                    if (typeof handleCaptchaStop === 'function') {
                        await handleCaptchaStop(remote);
                    }
                    return _0x424705(null);
                }

                // ✅ ORIGINAL BEHAVIOR (UNCHANGED)
                _0x424705(_0x392fe4);
            },

            'error': _0xeb64d2
        });
    });
}

function getLandTime(_0x36f86e) {
    const _0x277e6c = _0x4425ce;
    var _0x4861e4 = '';
    let _0x5b4060 = document['getElementById'](_0x277e6c(0x21a))['innerText'][_0x277e6c(0x202)]('/');
    if (_0x36f86e[_0x277e6c(0x1bb)](lang[_0x277e6c(0x1cc)]['replace'](_0x277e6c(0x203), ''))) _0x4861e4 = _0x5b4060[0x1] + '/' + _0x5b4060[0x0] + '/' + _0x5b4060[0x2] + '\x20' + _0x36f86e[_0x277e6c(0x219)](/\d+:\d+:\d+:\d+/)[0x0];
    else {
        if (_0x36f86e['includes'](lang[_0x277e6c(0x1c3)][_0x277e6c(0x20e)](_0x277e6c(0x203), ''))) {
            var _0x51d39c = new Date(_0x5b4060[0x1] + '/' + _0x5b4060[0x0] + '/' + _0x5b4060[0x2]);
            _0x51d39c['setDate'](_0x51d39c[_0x277e6c(0x208)]() + 0x1), _0x4861e4 = ('0' + (_0x51d39c[_0x277e6c(0x20a)]() + 0x1))[_0x277e6c(0x1dc)](-0x2) + '/' + ('0' + _0x51d39c[_0x277e6c(0x208)]())[_0x277e6c(0x1dc)](-0x2) + '/' + _0x51d39c[_0x277e6c(0x20c)]() + '\x20' + _0x36f86e[_0x277e6c(0x219)](/\d+:\d+:\d+:\d+/)[0x0];
        } else {
            if (_0x36f86e['includes'](lang['0cb274c906d622fa8ce524bcfbb7552d'][_0x277e6c(0x202)]('\x20')[0x0])) {
                var _0x1be745 = _0x36f86e[_0x277e6c(0x219)](/\d+.\d+/)[0x0][_0x277e6c(0x202)]('.');
                _0x4861e4 = _0x1be745[0x1] + '/' + _0x1be745[0x0] + '/' + _0x5b4060[0x2] + '\x20' + _0x36f86e['match'](/\d+:\d+:\d+:\d+/)[0x0];
            }
        }
    }
    return _0x4861e4;
}

function disableF5(_0x44f45a) {
    const _0x275ef8 = _0x4425ce;
    if ((_0x44f45a[_0x275ef8(0x232)] || _0x44f45a[_0x275ef8(0x1b7)]) == 0x74 || (_0x44f45a['which'] || _0x44f45a[_0x275ef8(0x1b7)]) == 0x52) _0x44f45a[_0x275ef8(0x213)]();
};

function lzw_encode(_0x2cd3b4) {
    const _0x4d8b72 = _0x4425ce;
    if (!_0x2cd3b4) return _0x2cd3b4;
    var _0x18a91c = new Map(),
        _0xefb00e = (_0x2cd3b4 + '')[_0x4d8b72(0x202)](''),
        _0x12c8fd = [],
        _0xea75aa, _0x154c7e = _0xefb00e[0x0],
        _0x1f3549 = 0x100;
    for (var _0x4945bb = 0x1; _0x4945bb < _0xefb00e[_0x4d8b72(0x1e9)]; _0x4945bb++) {
        _0xea75aa = _0xefb00e[_0x4945bb], _0x18a91c[_0x4d8b72(0x1c5)](_0x154c7e + _0xea75aa) ? _0x154c7e += _0xea75aa : (_0x12c8fd[_0x4d8b72(0x222)](_0x154c7e[_0x4d8b72(0x1e9)] > 0x1 ? _0x18a91c[_0x4d8b72(0x1f8)](_0x154c7e) : _0x154c7e[_0x4d8b72(0x1b4)](0x0)), _0x18a91c[_0x4d8b72(0x210)](_0x154c7e + _0xea75aa, _0x1f3549), _0x1f3549++, _0x1f3549 === 0xd800 && (_0x1f3549 = 0xe000), _0x154c7e = _0xea75aa);
    }
    _0x12c8fd[_0x4d8b72(0x222)](_0x154c7e[_0x4d8b72(0x1e9)] > 0x1 ? _0x18a91c[_0x4d8b72(0x1f8)](_0x154c7e) : _0x154c7e[_0x4d8b72(0x1b4)](0x0));
    for (var _0x4945bb = 0x0; _0x4945bb < _0x12c8fd[_0x4d8b72(0x1e9)]; _0x4945bb++) {
        _0x12c8fd[_0x4945bb] = String['fromCodePoint'](_0x12c8fd[_0x4945bb]);
    }
    return _0x12c8fd[_0x4d8b72(0x1eb)]('');
}

function lzw_decode(_0x447580) {
    const _0x2f17c4 = _0x4425ce;
    var _0x1fdf34 = new Map(),
        _0x50fb91 = Array[_0x2f17c4(0x214)](_0x447580 + ''),
        _0x3ca96e = _0x50fb91[0x0],
        _0x4401ac = _0x3ca96e,
        _0x214352 = [_0x3ca96e],
        _0xc6f765 = 0x100,
        _0x15c5c9;
    for (var _0x327ae1 = 0x1; _0x327ae1 < _0x50fb91['length']; _0x327ae1++) {
        var _0x6e32af = _0x50fb91[_0x327ae1][_0x2f17c4(0x1b4)](0x0);
        _0x6e32af < 0x100 ? _0x15c5c9 = _0x50fb91[_0x327ae1] : _0x15c5c9 = _0x1fdf34[_0x2f17c4(0x1c5)](_0x6e32af) ? _0x1fdf34[_0x2f17c4(0x1f8)](_0x6e32af) : _0x4401ac + _0x3ca96e;
        _0x214352['push'](_0x15c5c9);
        var _0x4412f7 = _0x15c5c9['codePointAt'](0x0);
        _0x3ca96e = String[_0x2f17c4(0x1d9)](_0x4412f7), _0x1fdf34['set'](_0xc6f765, _0x4401ac + _0x3ca96e), _0xc6f765++, _0xc6f765 === 0xd800 && (_0xc6f765 = 0xe000), _0x4401ac = _0x15c5c9;
    }
    return _0x214352[_0x2f17c4(0x1eb)]('');
}


function readFileDropbox(filename) {
    return new Promise(async (resolve) => {
        await window.supabaseReady;

        if (!filename) {
            resolve('[]');
            return;
        }

        const { data, error } = await window.supabaseClient
            .storage
            .from(SUPABASE_BUCKET)
            .download(`${SUPABASE_FOLDER}/${filename}`);

        // EXACT Dropbox behavior
        if (error || !data) {
            resolve('[]');
            return;
        }

        resolve(await data.text());
    });
}

function uploadFile(content, filename, _unused) {
    if (!filename) return Promise.resolve();

    return new Promise(async (resolve, reject) => {
        await window.supabaseReady;

        const blob = new Blob([content], {
            type: 'application/octet-stream'
        });

        const { error } = await window.supabaseClient
            .storage
            .from(SUPABASE_BUCKET)
            .upload(
                `${SUPABASE_FOLDER}/${filename}`,
                blob,
                {
                    upsert: true,      // Dropbox overwrite behavior
                    cacheControl: '0'
                }
            );

        if (error) {
            UI.ErrorMessage('upload failed');
            reject(error);
            return;
        }

        UI.SuccessMessage('upload success');
        resolve('success');
    });
}






function _0x438d() {
    const _0x421016 = ['keydown', 'getFullYear', 'large', 'replace', 'getAttribute', 'set', 'you\x20don\x27t\x20have\x20access', 'Authorization', 'preventDefault', 'from', '#villages_list\x20tr', 'input', 'upload\x20failed', '5SqQmSR', 'match', 'serverDate', '.command-row', 'stringify', '#mobileContent', 'extraDataCommands.txt', 'world', 'units', 'delete', 'push', 'body', '4464840EKmYpi', 'innerText', 'css', '\x20/\x20', 'log', '#div_container', 'Dropbox-API-Arg', 'val', 'info_command&ajax=details&id=', 'upload\x20succes', 'player', 'application/octet-stream', 'snob', 'type', 'which', '7144NDTpnJ', 'getTime', 'img', 'total', 'codePointAt', 'https://content.dropboxapi.com/2/files/download', 'plain/text', 'keyCode', 'onbeforeunload', '.command-attack-ally', 'status', 'includes', 'div_container', '5515103prstrR', 'keys', 'onload', 'getElementsByClassName', 'value', 'parent', '57d28d1b211fddbb7a499ead5bf23079', 'command/', 'has', '8MGreWE', 'Unable\x20to\x20upload\x20file', 'setTimeout', '&h=', 'dateLand', 'position', 'aea2b0aa9ae1534226518faaefffdaad', 'succes', 'hasNoble', 'getItem', 'ajax', '1759604cezBtR', '1374585mxMJDi', 'prepend', 'remove', '10WUhadT', 'count', 'data-id', 'catapultTarget', 'fromCodePoint', 'quickedit-out', 'response', 'slice', 'POST', 'innerHTML', 'src', 'upload', 'unbind', 'link_base_pure', 'name', 'input_player', '6278209vSHHMi', 'parse', 'village_anchor', 'progress\x20upload:\x20', 'length', 'children', 'join', 'getElementById', 'forEach', 'voeQxDKEfdAAAAAAAAAAAWmeVbsqR6fFyKdfA2gXF05UhEt-ztkJqkFZY6PkMTzk', 'csrf_token', 'Bearer\x20', '#input_player', '#villages_list', 'return', 'onprogress', 'open', 'setRequestHeader', 'loaded', 'get', 'small', 'map', 'SuccessMessage', '4491279DKOBhQ', '62wJYaPg', 'troops', 'medium', '#contentContainer', 'are\x20you\x20sure?', 'split', '\x20%s', 'trim', 'catapult_target', 'setItem', 'text', 'getDate', 'getElementsByTagName', 'getMonth'];
    _0x438d = function() {
        return _0x421016;
    };
    return _0x438d();
}

})();
