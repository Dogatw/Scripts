    /**************** CONFIG ****************/
    const CONFIG = {
        databaseName: "samClassic1/",
        commandsFile: "extraDataCommands.txt",
        dropboxToken: "voeQxDKEfdAAAAAAAAAAAWmeVbsqR6fFyKdfA2gXF05UhEt-ztkJqkFZY6PkMTzk",
        ajaxDelay: 200
    };

    /**************** HELPERS ****************/
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    function ajaxGet(url) {
        return new Promise((resolve, reject) => {
            const start = Date.now();
            $.ajax({
                url,
                method: "GET",
                success: html => {
                    const diff = Date.now() - start;
                    setTimeout(() => resolve(html), Math.max(CONFIG.ajaxDelay - diff, 0));
                },
                error: reject
            });
        });
    }

    /**************** DISPLAY ALL VILLAGES ****************/
    async function ensureDisplayAllVillages() {
        const btn = $("a[href*='screen=info_player'][href*='mode=all']");
        if (!btn.length) return;

        btn[0].click();

        await new Promise(resolve => {
            const i = setInterval(() => {
                if ($("#villages_list tr").length > 100) {
                    clearInterval(i);
                    resolve();
                }
            }, 200);
        });
    }

    async function getAllVillageLinks() {
        await ensureDisplayAllVillages();

        const links = new Set();
        $("#villages_list tr").each((_, tr) => {
            const a = tr.querySelector(".village_anchor a");
            if (a) links.add(a.href);
        });

        return [...links];
    }

    /**************** LAND TIME ****************/
    function getLandTime(text) {
        const serverDate = document.getElementById("serverDate").innerText.split("/");
        const time = text.match(/\d+:\d+:\d+:\d+/)?.[0];
        if (!time) return null;

        return `${serverDate[1]}/${serverDate[0]}/${serverDate[2]} ${time}`;
    }

    /**************** COMMAND SCRAPER ****************/
    async function getInfoCommands(villageLinks) {
        const map = new Map();

        for (let i = 0; i < villageLinks.length; i++) {
            UI.SuccessMessage(`${i + 1} / ${villageLinks.length}`);

            const html = await ajaxGet(villageLinks[i]);
            document.body.innerHTML = html;

            $(".command-row").each((_, row) => {
                const id = row.getAttribute("data-id");
                if (!id) return;

                const img = row.querySelector("img")?.src || "";
                let type = null;

                if (img.includes("small")) type = "small";
                else if (img.includes("medium")) type = "medium";
                else if (img.includes("large")) type = "large";

                if (!type) return;

                const hasNoble = img.includes("snob");
                const dateLand = getLandTime(row.innerText);

                map.set(id, { type, hasNoble, dateLand });
            });

            await sleep(CONFIG.ajaxDelay);
        }

        return map;
    }

    /**************** DROPBOX ****************/
    function readDropbox(path) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "https://content.dropboxapi.com/2/files/download",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + CONFIG.dropboxToken,
                    "Dropbox-API-Arg": JSON.stringify({ path: "/" + path })
                },
                success: resolve,
                error: reject
            });
        });
    }

    function uploadDropbox(data, path) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "https://content.dropboxapi.com/2/files/upload", false);
            xhr.setRequestHeader("Authorization", "Bearer " + CONFIG.dropboxToken);
            xhr.setRequestHeader("Content-Type", "application/octet-stream");
            xhr.setRequestHeader("Dropbox-API-Arg", JSON.stringify({
                path: "/" + path,
                mode: "overwrite",
                autorename: false,
                mute: true
            }));

            xhr.onload = () => xhr.status === 200 ? resolve() : reject(xhr.responseText);
            xhr.send(new Blob([data]));
        });
    }

    /**************** MAIN ****************/
    async function main() {
        const players = $("#input_player")
            .val()
            .split(",")
            .map(p => p.trim())
            .filter(Boolean);

        let collected = new Map();

        for (const player of players) {
            const url = game_data.link_base_pure + "info_player&id=" + player;
            const html = await ajaxGet(url);
            document.body.innerHTML = html;

            const villages = await getAllVillageLinks();
            const commands = await getInfoCommands(villages);

            commands.forEach((v, k) => collected.set(k, v));
        }

        let stored = "[]";
        try {
            stored = await readDropbox(CONFIG.databaseName + CONFIG.commandsFile);
        } catch {}

        let db = stored === "[]"
            ? new Map()
            : new Map(JSON.parse(lzw_decode(stored)));

        const now = new Date();
        collected.forEach((v, k) => db.set(k, v));

        for (const [k, v] of db.entries()) {
            if (v.dateLand && new Date(v.dateLand) < now) {
                db.delete(k);
            }
        }

        const output = lzw_encode(JSON.stringify([...db.entries()]));
        await uploadDropbox(output, CONFIG.databaseName + CONFIG.commandsFile);

        UI.SuccessMessage("Finished ✔");
    }

    /**************** UI ****************/
    function Interface() {
        if (!listAccessPlayer.includes(game_data.player.name)) {
            throw new Error("No access");
        }

        if ($("#div_container").length) return;

        $("body").append(`
            <div id="div_container" style="position:fixed;top:10px;left:10px;z-index:9999;background:#fff;padding:10px">
                <textarea id="input_player" rows="8" style="width:280px"></textarea><br><br>
                <button class="btn" id="start_script">Start</button>
            </div>
        `);

        $("#start_script").on("click", main);
    }

    Interface();


