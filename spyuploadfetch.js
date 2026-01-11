// Constants & Globals

const DATABASE_NAME = "samClassic1/";
const COMMANDS_FILE = DATABASE_NAME + "extraDataCommands.txt";
const DROPBOX_TOKEN = "voeQxDKEfdAAAAAAAAAAAWmeVbsqR6fFyKdfA2gXF05UhEt-ztkJqkFZY6PkMTzk";

// Main Entry
async function main() {
    const players = document
        .getElementById("input_player")
        .value
        .split(",")
        .map(p => p.trim());

    let commandsMap = new Map();

    for (let i = 0; i < players.length; i++) {
        UI.SuccessMessage(`${i + 1} / ${players.length}`);

        const url = game_data.link_base_pure + "info_player&id=" + players[i];
        const html = await ajaxGet(url);
        document.body.innerHTML = html;

        // pagination auto-click
        try {
            if ($("#villages_list tr").eq(1).children().length === 101) {
                $("#villages_list").eq(-1).find("a").click();
            }
        } catch (e) {}

        const villageRows = $("#villages_list tr").children().children();
        let villageLinks = [];

        for (const row of villageRows) {
            const link = row.getElementsByClassName("village_anchor")[0]
                .getElementsByTagName("a")[0].href;
            villageLinks.push(link);
        }

        const newCommands = await getInfoCommands(villageLinks);
        commandsMap = new Map([...commandsMap, ...newCommands]);
    }

    // Load old data
    let stored = await readFileDropbox(COMMANDS_FILE);
    let oldMap = stored === "[]"
        ? new Map()
        : new Map(JSON.parse(lzw_decode(stored)));

    const merged = new Map([...oldMap, ...commandsMap]);

    // Remove expired commands
    const serverDate = document.getElementById("serverDate").innerText.split("/");
    const serverTime = document.getElementById("serverTime").innerText;
    const now = new Date(`${serverDate[1]}/${serverDate[0]}/${serverDate[2]} ${serverTime}`);

    for (const [key, value] of merged.entries()) {
        if (now > new Date(value.dateLand)) {
            merged.delete(key);
        }
    }

    let output = JSON.stringify([...merged.entries()]);
    output = lzw_encode(output);

    await uploadFile(output, COMMANDS_FILE, DROPBOX_TOKEN);
}

// UI Injection
function Interface() {
    if (!listAccessPlayer.includes(game_data.player.name)) {
        throw new Error("you don't have access");
    }

    const html = `
    <div id="div_container">
        <textarea id="input_player" style="width:100%" rows="20"></textarea>
        <center style="margin:10px">
            <input class="btn" type="button" onclick="main()" value="Start">
        </center>
    </div>`;

    if (!document.getElementById("div_container")) {
        $("#contentContainer").remove();
        $("#mobileContent").eq(0).prepend(html);
        $("#contentContainer").eq(0).prepend(html);
        $("#div_container").css("position", "fixed").draggable();

        const saved = localStorage.getItem(game_data.world + "input_player");
        if (saved) $("#input_player").val(saved);

        $("#input_player").on("input", () => {
            localStorage.setItem(
                game_data.world + "input_player",
                $("#input_player").val()
            );
        });
    }
}
Interface();

// Command Scanner
async function getInfoCommands(villageLinks) {
    let map = new Map();

    for (let i = 0; i < villageLinks.length; i++) {
        const html = await ajaxGet(villageLinks[i]);
        document.body.innerHTML = html;

        UI.SuccessMessage(`${i} / ${villageLinks.length}`);

        $(".command-row").each(row => {
            const imgSrc = row.getElementsByTagName("img")[0].src;
            const id = row.getAttribute("data-id");

            if (imgSrc.includes("small")) {
                map.set(id, { type: "small", hasNoble: false, dateLand: getLandTime(row.innerText) });
            } else if (imgSrc.includes("medium")) {
                map.set(id, { type: "medium", hasNoble: false, dateLand: getLandTime(row.innerText) });
            } else if (imgSrc.includes("large")) {
                map.set(id, { type: "large", hasNoble: false, dateLand: getLandTime(row.innerText) });
            }
        });
    }

    return map;
}

// AJAX Helpers
function ajaxGet(url) {
    return new Promise((resolve, reject) => {
        const start = Date.now();
        $.ajax({
            url,
            method: "GET",
            success: data => {
                const delay = 200 - (Date.now() - start);
                setTimeout(() => resolve(data), Math.max(delay, 0));
            },
            error: reject
        });
    });
}
// Dropbox Upload / Download
function readFileDropbox(path) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://content.dropboxapi.com/2/files/download",
            method: "POST",
            headers: {
                "Authorization": "Bearer " + DROPBOX_TOKEN,
                "Dropbox-API-Arg": JSON.stringify({ path: "/" + path })
            },
            success: resolve,
            error: reject
        });
    });
}
