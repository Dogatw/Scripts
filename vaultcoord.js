(async function () {
  'use strict';

 (async function initSupabase() {
    if (window.__supabaseReady) return;
    window.__supabaseReady = false;

    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
    document.head.appendChild(s);

    await new Promise((resolve, reject) => {
        s.onload = resolve;
        s.onerror = reject;
    });

    const SUPABASE_URL = "https://xjrgjnsxahfxlseakknl.supabase.co";
    const SUPABASE_ANON_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqcmdqbnN4YWhmeGxzZWFra25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTc5MDgsImV4cCI6MjA4MzczMzkwOH0.ZmqvQkg1baYpkYXhYCj59Drphdy2iq50tY3JoIR_6c4";

    window.sb = supabase.createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY
    );

    window.__supabaseReady = true;
    console.log("✅ Supabase initialized");
})();

    async function waitForSupabase() {
  while (!window.__supabaseReady) {
    await new Promise(r => setTimeout(r, 20));
  }
  return window.sb;
}

function getStorageRoot() {
    // game_data.world = "en150"
    return `myDB_${game_data.world}`;
}

    async function getDatabaseName() {
    const sb = await waitForSupabase();

    const { data, error } = await sb
        .from("script_config")
        .select("database_name, world_number")
        .eq("enabled", true)
        .single();

    if (error) throw error;

    const world = game_data.world.match(/\d+/)[0];
    if (world !== data.world_number) {
        throw new Error("Wrong world");
    }

    return data.database_name; // ✅ THIS replaces databaseName
}


const CF_STORAGE_KEY = "tw_coord_finder_filters";

  /* ================= UI ================= */

  document.body.insertAdjacentHTML("beforeend", `
    <div id="cf_ui" style="position:fixed;top:120px;right:10px;
      background:#1e1e1e;color:#fff;padding:10px;
      width:360px;z-index:99999;border-radius:6px;font-size:12px">
      <h3 style="text-align:center;margin:0">Coord Finder</h3>

      <input id="cf_coord" placeholder="Coord (481|565)" style="width:100%">
      <input id="cf_radius" type="number" placeholder="Radius (fields)" style="width:100%">
      <input id="cf_min" placeholder="Min coord" style="width:100%">
      <input id="cf_max" placeholder="Max coord" style="width:100%">
      <input id="cf_player" placeholder="Player" style="width:100%">


      <select id="cf_type" style="width:100%">
        <option value="">Both</option>
        <option value="off">Off</option>
        <option value="def">Def</option>
      </select>

      <input id="cf_stack" type="number" placeholder="Min stack pop">
      <input id="cf_stack_max" type="number" placeholder="Max stack pop">


      <button id="cf_run" style="width:100%">Get Coords</button>
      <button id="cf_copy" style="width:100%;margin-top:4px">
  📋 Copy Coords
</button>


      <textarea id="cf_out" style="width:100%;height:120px"></textarea>
    </div>
  `);
// ----- RESTORE FILTER STATE -----
const saved = JSON.parse(localStorage.getItem(CF_STORAGE_KEY) || "{}");

if (saved.coord) cf_coord.value = saved.coord;
if (saved.radius) cf_radius.value = saved.radius;
if (saved.player) cf_player.value = saved.player;
if (saved.min) cf_min.value = saved.min;
if (saved.max) cf_max.value = saved.max;
if (saved.type) cf_type.value = saved.type;
if (saved.minStack) cf_stack.value = saved.minStack;
if (saved.maxStack) cf_stack_max.value = saved.maxStack;

  /* ================= HELPERS ================= */

  const troopsPop = {
    spear:1, sword:1, axe:1, archer:1,
    spy:2, light:4, marcher:5, heavy:4,
    ram:5, catapult:8, knight:10, snob:100
  };

    function inRadius(center, target, radius) {
    if (!center || !radius) return true;

    const [cx, cy] = center.split("|").map(Number);
    const [tx, ty] = target.split("|").map(Number);

    const dx = tx - cx;
    const dy = ty - cy;

    return Math.sqrt(dx*dx + dy*dy) <= radius;
}

  function coordInRange(c,min,max){
    if(!min||!max) return true;
    const [x,y]=c.split("|").map(Number);
    const [mx,my]=min.split("|").map(Number);
    const [Mx,My]=max.split("|").map(Number);
    return x>=mx&&x<=Mx&&y>=my&&y<=My;
  }

  function stackPop(v){
    const k = Object.keys(v).find(e=>e.startsWith("troopsAtHome_"));
    if(!k) return 0;
    return v[k].reduce((s,u)=>s+(troopsPop[u.type]||0)*u.count,0);
  }

  /* ================= LOAD REPORTS ================= */
async function getReportsPath() {
    const databaseName = await getDatabaseName(); // "myDB"
    const storageRoot = getStorageRoot();          // "myDB_en150"

    return `${storageRoot}/${databaseName}/Reports.gz`;
}

async function loadReports() {
    const sb = await waitForSupabase();
    const REPORTS_PATH = await getReportsPath();

    console.log("📂 Loading:", REPORTS_PATH);

    const { data, error } = await sb
        .storage
        .from("vault")
        .download(REPORTS_PATH);

    if (error) throw error;

    const ab = await data.arrayBuffer();
    const ds = new DecompressionStream("gzip");
    const decompressed = await new Response(
        new Blob([ab]).stream().pipeThrough(ds)
    ).arrayBuffer();

    return new Map(JSON.parse(new TextDecoder().decode(decompressed)));
}






  const REPORTS = await loadReports();

  /* ================= RUN ================= */

cf_run.onclick = () => {
    // ----- SAVE FILTER STATE -----
localStorage.setItem(CF_STORAGE_KEY, JSON.stringify({
  coord: cf_coord.value,
  radius: cf_radius.value,
  player: cf_player.value,
  min: cf_min.value,
  max: cf_max.value,
  type: cf_type.value,
  minStack: cf_stack.value,
  maxStack: cf_stack_max.value
}));

  const res = [];

  // ---------- INPUT NORMALIZATION ----------
  const center = cf_coord.value.trim();
  const radius = parseInt(cf_radius.value);

  const hasRadiusMode = center && !isNaN(radius);
  const hasBoxMode = cf_min.value && cf_max.value;

  // mandatory geometry
 /* if (!hasRadiusMode && !hasBoxMode) {
    UI.ErrorMessage("Use Coord+Radius OR Min+Max coord", 1500);
    return;
  }*/

  const playerList = cf_player.value
    .toLowerCase()
    .split(/[,| ]+/)
    .filter(Boolean);

  const minStack = parseInt(cf_stack.value) || 0;
  const type = cf_type.value;

  // ---------- MAIN LOOP ----------
  REPORTS.forEach((v, coord) => {

    /* ===== GEOMETRY FILTER ===== */
    if (hasRadiusMode) {
      if (!inRadius(center, coord, radius)) return;
    } else {
      if (!coordInRange(coord, cf_min.value, cf_max.value)) return;
    }

    /* ===== TYPE FILTER ===== */
    if (type === "off" && v.typeAttacker !== "off") return;
    if (type === "def" && v.typeDefender !== "off") return;

    /* ===== PLAYER FILTER (OR, MULTI) ===== */
    if (playerList.length) {
      const playerMatch = playerList.some(p =>
        [v.nameAttacker, v.nameDefender]
          .some(n => n?.toLowerCase().includes(p))
      );
      if (!playerMatch) return;
    }

    /* ===== STACK FILTER ===== */
const pop = stackPop(v);

// Min stack
if (!isNaN(minStack) && pop < minStack) return;

// Max stack
const maxStack = parseInt(cf_stack_max.value);
if (!isNaN(maxStack) && pop > maxStack) return;

    res.push(coord);
  });

  cf_out.value = res.join(" ");
  UI.SuccessMessage(`Found ${res.length} coords`, 1200);
};


    //copy button
    document.getElementById("cf_copy").onclick = () => {
    const ta = document.getElementById("cf_out");
    if (!ta.value) {
        UI.ErrorMessage("Nothing to copy", 1200);
        return;
    }

    ta.select();
    ta.setSelectionRange(0, ta.value.length);

    try {
        document.execCommand("copy");
        UI.SuccessMessage("Coords copied 📋", 1200);
    } catch (e) {
        UI.ErrorMessage("Copy failed", 1200);
    }

    window.getSelection().removeAllRanges();
};

  /* ================= UTIL ================= */

  function loadScript(src){
    return new Promise(r=>{
      const s=document.createElement("script");
      s.src=src;
      s.onload=r;
      document.head.appendChild(s);
    });
  }

})();
