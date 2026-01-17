console.log('🟣 tagspy userscript loaded');

// ===============================
// === SUPABASE INIT =============
// ===============================
(async function initSupabase() {
    if (window.__supabaseReady) return;

    console.log('🟢 initSupabase start');
    window.__supabaseReady = false;

    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
    document.head.appendChild(s);

    await new Promise((res, rej) => {
        s.onload = res;
        s.onerror = rej;
    });

    window.sb = supabase.createClient(
        'https://xjrgjnsxahfxlseakknl.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqcmdqbnN4YWhmeGxzZWFra25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTc5MDgsImV4cCI6MjA4MzczMzkwOH0.ZmqvQkg1baYpkYXhYCj59Drphdy2iq50tY3JoIR_6c4'
    );

    window.__supabaseReady = true;
    console.log('🟢 Supabase ready');
})();

const SUPABASE_BUCKET = 'vault';
const BASE_PATH = 'myDB_en150/myDB';


function checkUserPermission() {
    const username =
        window.game_data?.player?.name?.toLowerCase();

    if (!username) {
        console.warn('⚠️ Player name not detected');
        return false;
    }

    const users = window.__usersPermissions;

    if (!users) {
        console.warn('⚠️ Users permissions not loaded');
        return false;
    }

    const role = users.get(username);

    if (!role) {
        console.warn(
            `⛔ ACCESS DENIED → ${username} not in Users.txt`
        );
        return false;
    }

    console.log(
        `✅ ACCESS GRANTED → ${username} (${role})`
    );

    return true;
}

// ===============================
// === LOAD USERS / PERMISSIONS ==
// ===============================
async function loadUsersPermissions() {
    const USERS_PATH = `${BASE_PATH}/Users.txt`;
    console.log('🟡 downloading', USERS_PATH);

    const { data, error } = await window.sb
        .storage
        .from(SUPABASE_BUCKET)
        .download(USERS_PATH);

    if (error || !data) {
        console.error('🔴 Users.txt download failed', error);
        return null;
    }

    const text = await data.text();

    const usersMap = new Map();

    text.split('\n').forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) return;

        const [name, role] = trimmed.split(',').map(v => v.trim());
        if (!name || !role) return;

        usersMap.set(name.toLowerCase(), role.toLowerCase());
    });

    console.log(
        `👥 Users loaded → ${usersMap.size} entries`
    );

    window.__usersPermissions = usersMap;
    return usersMap;
}

const tagspyUI = (() => {
    const el = document.createElement('div');
el.style.cssText = `
    position:fixed;
    top:80px;
    right:20px;
    z-index:999999;
    background:#111;
    color:#fff;
    padding:12px;
    border-radius:8px;
    font:12px Arial;
    min-width:230px;
    box-shadow:0 0 10px #000;
`;


    el.innerHTML = `
        <div style="font-weight:bold;margin-bottom:6px;">🏷 SpyTagger by SAM </div>
        <button id="tagspy-btn" style="width:100%;margin-bottom:6px;">
            Tag Incoming
        </button>
        <div id="tagspy-status">Idle</div>
        <div id="tagspy-stats" style="margin-top:6px;line-height:1.4">
            Checked: 0<br>
            Matched: 0<br>
            Tagged: 0
        </div>
    `;

    document.body.appendChild(el);

    return {
        setStatus: txt =>
            el.querySelector('#tagspy-status').textContent = txt,
        setStats: (c, m, t) =>
            el.querySelector('#tagspy-stats').innerHTML =
                `Checked: ${c}<br>Matched: ${m}<br>Tagged: ${t}`,
        onClick: fn =>
            el.querySelector('#tagspy-btn').onclick = fn
    };
})();

// ===============================
// === MAIN ======================
// ===============================
(async function run() {

    console.log('🟣 main script start');

   while (!window.__supabaseReady || !window.sb) {
    await new Promise(r => setTimeout(r, 20));
}

console.log('🟢 Supabase confirmed ready in run()');
await loadUsersPermissions();

if (!checkUserPermission()) {
    console.warn('🛑 Script stopped: no permission');
    alert('⛔ ACCESS DENIED: You are not allowed to use this script ask SAM');

    return;
}

  if (!location.search.includes('incomings')) { alert('Run this script on Incoming screen'); location.href = game_data.link_base_pure + 'overview_villages&mode=incomings'; }

////////////////////////META DATA FETCH /////////////////////

const FILE_PATH = `${BASE_PATH}/extraDataCommands.txt`;

// 1️⃣ create short-lived signed URL
const { data: signed, error: signErr } = await window.sb
  .storage
  .from(SUPABASE_BUCKET)
  .createSignedUrl(FILE_PATH, 60);

if (signErr) {
  console.warn('signed url error', signErr);
} else {
  // 2️⃣ HEAD request to read Last-Modified (REAL value)
  const headRes = await fetch(signed.signedUrl, { method: 'HEAD' });
  const lastModified = headRes.headers.get('Last-Modified');

  // 🔒 store ONCE (this matches dashboard)
  window.__extraUpdatedAtLocal =
    new Date(lastModified).toLocaleString();

tagspyUI.setStatus(
  `Spy uploaded at ${window.__extraUpdatedAtLocal}`
);
}


// 2️⃣ download file (UNCHANGED logic)
const { data, error } = await window.sb
    .storage
    .from(SUPABASE_BUCKET)
    .download(FILE_PATH);


    // ===============================
// === DECODE extraDataCommands ===
// ===============================
const raw = await data.text();

console.log('🟢 raw LZW length', raw.length);

// lzw_decode MUST be defined ABOVE run()
const decoded = lzw_decode(raw);

const parsed = JSON.parse(decoded);

// 🔴 THIS LINE IS CRITICAL
window.extraDataCommands = new Map(parsed);

console.log(
    '🟢 extraDataCommands loaded:',
    window.extraDataCommands.size
);
tagspyUI.setStatus(
  `Spy uploaded at ${window.__extraUpdatedAtLocal}`
);


    console.log(
  `📦 extraDataCommands loaded → ${window.extraDataCommands.size} stored command IDs`
);



await new Promise(r => setTimeout(r, 500)); // allow DOM to settle
tagspyUI.onClick(() => applyIncomingTags());
console.log('🚀 calling applyIncomingTags');


    if (error || !data) {
        console.error('🔴 download failed', error);
        return;
    }

    console.log('🟢 file downloaded');

// ===============================
// 🔓 LZW DECODE (CLEAN + FINAL)
// ===============================
function lzw_decode(input) {
    if (!input) return input;

    const dict = new Map();
    const data = Array.from(input);
    let currChar = data[0];
    let oldPhrase = currChar;
    const output = [currChar];
    let code = 256;

    for (let i = 1; i < data.length; i++) {
        const currCode = data[i].codePointAt(0);
        let phrase;

        if (currCode < 256) {
            phrase = data[i];
        } else {
            phrase = dict.has(currCode)
                ? dict.get(currCode)
                : oldPhrase + currChar;
        }

        output.push(phrase);
        currChar = phrase.charAt(0);
        dict.set(code++, oldPhrase + currChar);

        // UTF-16 surrogate skip (same as your script)
        if (code === 0xD800) code = 0xE000;

        oldPhrase = phrase;
    }

    return output.join('');
}

function applyIncomingTags() {
    let checked = 0;
let matched = 0;
let tagged = 0;

tagspyUI.setStatus(
  `Spy uploaded at ${window.__extraUpdatedAtLocal}`
);


    if (!(window.extraDataCommands instanceof Map)) {
        console.warn('extraDataCommands missing');
        return;
    }

    const links = Array.from(
        document.querySelectorAll('a[href*="info_command"]')
    );

    if (!links.length) {
        console.warn('⚠️ No incoming command links found');
        return;
    }

    const BATCH_SIZE = 5;
    const BATCH_DELAY = 250;

    let index = 0;
    let applied = 0;

    function processBatch() {
        const batch = links.slice(index, index + BATCH_SIZE);

 batch.forEach(link => {
    const m = link.href.match(/id=(\d+)/);
    if (!m) {
        console.warn('❌ incoming link without command id', link.href);
        return;
    }

    // ✅ MUST come first
    const commandId = m[1];
    checked++;

    const entry = window.extraDataCommands.get(commandId);

    if (!entry) {
        console.log(
            `❌ NO MATCH → incoming id=${commandId} (not in extraDataCommands)`
        );
        return;
    }

    if (!entry.type) {
        console.log(
            `⚠️ INVALID ENTRY → id=${commandId} (missing type)`,
            entry
        );
        return;
    }

    matched++;

    console.log(
        `✅ MATCHED → incoming id=${commandId} | type=${entry.type}`
    );

    const container =
        link.closest('td') ||
        link.closest('div') ||
        link.parentElement;

    if (!container) {
        console.warn(
            `⚠️ container not found for id=${commandId}`
        );
        return;
    }

// find command label element (this is what persists)
const label =
    container.querySelector('.quickedit-label') ||
    container.querySelector('.command-label') ||
    container.querySelector('span');

if (!label) return;

// normalize type → small / medium / large
const size =
    entry.type.includes('small') ? 'small' :
    entry.type.includes('medium') ? 'medium' :
    entry.type.includes('large') ? 'large' :
    null;

if (!size) return;

// already suffixed? stop
if (label.textContent.includes(`(${size})`)) return;

// ✅ append suffix ONLY
label.textContent = `${label.textContent.trim()} (${size})`;

tagged++;

});



        index += BATCH_SIZE;
tagspyUI.setStats(checked, matched, tagged);

        if (index < links.length) {
            setTimeout(processBatch, BATCH_DELAY);
        } else {
tagspyUI.setStatus(
  `Spy uploaded at ${window.__extraUpdatedAtLocal}`
);

console.log(

  `🏷️ tagging complete → ${applied} incoming commands tagged`
);
        }
    }

    processBatch();
}




})();
