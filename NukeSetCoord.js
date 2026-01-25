/* ================= SUPABASE INIT ================= */

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
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqcmdqbnN4YWhmeGxzZWFra25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTc5MDgsImV4cCI6MjA4MzczMzkwOH0.ZmqvQkg1baYpkYXhYCj59Drphdy2iq50tY3JoIR_6c4";


    window.sb = supabase.createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY
    );

    window.__supabaseReady = true;
    console.log("✅ Supabase ready");
})();

/* ================= UI CONFIG ================= */

var backgroundColor = "#32313f";
var borderColor = "#3e6147";
var headerColor = "#202825";
var titleColor = "#ffffdf";

/* ================= UI ================= */

async function Interface() {

    const html = `
    <div id="div_container_key" class="ui-widget-content"
        style="width:600px;background-color:${backgroundColor};cursor:move;z-index:50;">
        <div class="close-btn" onclick="$('#div_container_key').remove()"
            style="position:absolute;top:10px;right:10px;">
            <b><font color="${titleColor}">X</font></b>
        </div>

        <h2><center style="margin:10px">
            <u><font color="${titleColor}">Nuke Coordinates (Supabase)</font></u>
        </center></h2>

        <p style="margin-left:50px">
            <font id="nr_coords" color="${titleColor}">nr: ?</font>
        </p>

        <center>
            <textarea id="input_coords"
                cols="45"
                rows="18"
                placeholder="512|488 5&#10;513|489 3&#10;514|490 1"></textarea>
        </center>

        <center style="margin:10px">
            <input class="btn" type="button" onclick="Save()" value="Save">
        </center>
    </div>`;

    $("#div_container_key").remove();
    $("#contentContainer, #mobileContent").prepend(html);

    if (game_data.device === "desktop") {
        $("#div_container_key").css("position", "fixed").draggable();
    }

    await loadExistingCoords();
}

Interface();

/* ================= LOAD EXISTING ================= */

async function loadExistingCoords() {

    while (!window.__supabaseReady) {
        await new Promise(r => setTimeout(r, 50));
    }

    const { data, error } = await sb
        .from("coordforNuke")
        .select("coord, remaining_uses")
        .eq("world", game_data.world)
        .order("coord");

    if (error || !data) return;

    const lines = data.map(
        r => `${r.coord} ${r.remaining_uses}`
    );

    $("#input_coords").val(lines.join("\n"));
    $("#nr_coords").text("nr: " + data.length);
}

/* ================= SAVE ================= */

async function Save() {

    while (!window.__supabaseReady) {
        await new Promise(r => setTimeout(r, 50));
    }

    const raw = $("#input_coords").val().split(/\n+/);
    let rows = [];

    for (let line of raw) {
        const match = line.match(/(\d{3}\|\d{3})(?:\s+(\d+))?/);
        if (!match) continue;

        rows.push({
            world: game_data.world,
            coord: match[1],
            remaining_uses: Number(match[2] || 1),
            used_count: 0
        });
    }

    if (!rows.length) {
        alert("No valid coords found");
        return;
    }

    // Clear existing coords for this world
    await sb
        .from("coordforNuke")
        .delete()
        .eq("world", game_data.world);

    // Insert new coords
    const { error } = await sb
        .from("coordforNuke")
        .insert(rows);

    if (error) {
        UI.ErrorMessage("Failed to save coords");
        console.error(error);
        return;
    }

    UI.SuccessMessage("Coords saved to Supabase", 1500);
    $("#nr_coords").text("nr: " + rows.length);
}
