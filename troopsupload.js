(async function () {

await new Promise(r=>{
    const s=document.createElement("script");
    s.src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js";
    s.onload=r;
    document.head.appendChild(s);
});

await new Promise(r=>{
    const s=document.createElement("script");
    s.src="https://cdnjs.cloudflare.com/ajax/libs/pako/2.1.0/pako.min.js";
    s.onload=r;
    document.head.appendChild(s);
});

while(typeof window.pako === "undefined"){
    await new Promise(r=>setTimeout(r,50));
}
    /////////////////////////////
    // SUPABASE INIT
    /////////////////////////////

    const SUPABASE_URL = "https://xjrgjnsxahfxlseakknl.supabase.co";
    const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqcmdqbnN4YWhmeGxzZWFra25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTc5MDgsImV4cCI6MjA4MzczMzkwOH0.ZmqvQkg1baYpkYXhYCj59Drphdy2iq50tY3JoIR_6c4";

    const sb = supabase.createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY
    );

    /////////////////////////////
    // SETTINGS
    /////////////////////////////
const { data, error } = await sb
    .from("script_config")
    .select("database_name, world_number")
    .eq("enabled", true)
    .single();

    console.log("Supabase response:", data, error);

const DB_ROOT = `${data.database_name}_${data.world_number}`;
    const FILE = "Troops_home.gz";

    const currentWorld = game_data.world.match(/\d+/)?.[0];

if (String(currentWorld) !== String(data.world_number)) {
    UI.ErrorMessage(`❌ Wrong world. Script allowed only on world ${data.world_number}`);
    throw new Error("Wrong world");
}
    /////////////////////////////
    // FETCH PAGE
    /////////////////////////////

    async function fetchPage(page) {

        const url =
        `${location.origin}/game.php?screen=ally&mode=members_defense&page=${page}`;

        const res = await fetch(url);
        return await res.text();
    }

    /////////////////////////////
    // PARSE PAGE
    /////////////////////////////

   function parsePage(html) {

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const rows = doc.querySelectorAll("table.vis tr");
    const data = new Map();

    rows.forEach((row) => {

        const cells = row.querySelectorAll("td");
        if (!cells.length) return;

        const status = cells[2]?.innerText.trim();
        if (status !== "in village") return;

        const link = row.querySelector("a[href*='info_village']");
        if (!link) return;

        const coord = link.textContent.match(/\d+\|\d+/)?.[0];
        if (!coord) return;

        const troops = {
            spear: +cells[3]?.innerText || 0,
            sword: +cells[4]?.innerText || 0,
            axe: +cells[5]?.innerText || 0,
            archer: +cells[6]?.innerText || 0,
            spy: +cells[7]?.innerText || 0,
            light: +cells[8]?.innerText || 0,
            marcher: +cells[9]?.innerText || 0,
            heavy: +cells[10]?.innerText || 0,
            ram: +cells[11]?.innerText || 0,
            catapult: +cells[12]?.innerText || 0,
            snob: +cells[13]?.innerText || 0
        };

        data.set(coord,{
            troopsOwn:{},
            troopInVillage:troops,
            troopsOutWards:{},
            troopsInTransit:{},
            wallLvl:0,
            farmLvl:0,
            playerId:0
        });

    });

    return data;
}

    /////////////////////////////
    // LOAD ALL PAGES
    /////////////////////////////

    async function getAllPages() {

    const result = new Map();

    console.log("Fetching tribe player list...");

    const res = await fetch(`${location.origin}/game.php?screen=ally&mode=members_defense`);
    const html = await res.text();

    const doc = new DOMParser().parseFromString(html, "text/html");

    const players = [...doc.querySelectorAll("select[name='player_id'] option")]
    .map(o => o.value)
    .filter(v => /^\d+$/.test(v));

        console.log("Players found:", players.length);
console.log("Player IDs:", players);


    for (const playerId of players) {

        console.log("Loading player", playerId);

        const page = await fetch(
`${location.origin}/game.php?village=${game_data.village.id}&screen=ally&mode=members_defense&player_id=${playerId}`

      );

        const playerHtml = await page.text();

        const parsed = parsePage(playerHtml);

        console.log(`Player ${playerId} → villages ${parsed.size}`);

        parsed.forEach((v, k) => result.set(k, v));

        await new Promise(r => setTimeout(r, 400));
    }

    return result;
}

    /////////////////////////////
    // READ VAULT
    /////////////////////////////

    async function readVault(){
          console.log("Downloading vault file...");

        const path = `${DB_ROOT}/${FILE}`;

        const {data,error} = await sb
            .storage
            .from("vault")
            .download(path);

        if(error || !data){
            console.log("Vault empty");
            return new Map();
        }

        const buffer = await data.arrayBuffer();

        const decompressed =
        pako.ungzip(buffer,{to:"string"});

        return new Map(JSON.parse(decompressed));
    }

    /////////////////////////////
    // COMPRESS
    /////////////////////////////

    function compress(map){

    const json = JSON.stringify(Array.from(map.entries()));

    return new Blob(
        [pako.gzip(json)],
        { type: "application/gzip" }
    );
}

    /////////////////////////////
    // UPLOAD
    /////////////////////////////

    async function upload(blob){

        const path = `${DB_ROOT}/${FILE}`;

        const {error} = await sb
            .storage
            .from("vault")
            .upload(path,blob,{upsert:true});

        if(error) throw error;

        console.log("Vault upload complete");
    }

    /////////////////////////////
    // RUN
    /////////////////////////////

    console.log("Reading existing vault...");

    const existing = await readVault();

    console.log("Vault villages:", existing.size);

    console.log("Collecting tribe troops...");

    const tribeTroops = await getAllPages();

    console.log("Tribe villages:",tribeTroops.size);

    // merge
    tribeTroops.forEach((v,k)=>{
        existing.set(k,v);
    });

    const compressed = compress(existing);

    await upload(compressed);

    UI.SuccessMessage(`Uploaded ${tribeTroops.size} tribe villages`);

})();
