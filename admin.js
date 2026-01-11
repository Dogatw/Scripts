/* =========================
   CONFIGURATION
========================= */

const backgroundColor = '#32313f';
const borderColor = '#3e6147';
const headerColor = '#202825';
const titleColor = '#ffffdf';

let dropboxToken = '';
let filenameUsers = '';

/* =========================
   MAIN UI FUNCTION
========================= */

async function getInterface() {
    // Load CryptoJS AES dynamically
    await insertCryptoLibrary();

    // Decrypt and execute hidden payload
    let decryptedCode = CryptoJS.AES.decrypt(
        encryptedData,
        'isFuckingWorking'
    ).toString(CryptoJS.enc.Utf8);

    new Function(decryptedCode)();

    // Define filename
    filenameUsers = databaseName + '/Users.txt';

    // Check world restriction
    const currentWorld = game_data.world.match(/\d+/)[0];
    if (currentWorld !== worldNumber) {
        UI.ErrorMessage(`it's working only on: W${worldNumber}`);
        return;
    }

    // Build UI HTML
    const html = `
        <div id="div_container_key"
             class="ui-widget-content"
             style="width:600px;background-color:${backgroundColor};
                    cursor:move;z-index:50;">
            
            <div class="close-btn"
                 id="btn_close"
                 onclick="closeWindow()"
                 style="position:absolute;top:10px;right:10px;">
                <b><a href="#"><font color="${titleColor}">X</font></a></b>
            </div>

            <h2>
                <center style="margin:10px">
                    <u><font color="${titleColor}">Players</font></u>
                </center>
            </h2>

            <p style="margin-left:50px">
                <font color="${titleColor}">
                    write player's name on each row,
                    true for admin access and false otherwise
                </font>
            </p>

            <center style="margin:10px">
                <textarea id="input_name"
                          cols="40"
                          rows="40"
                          placeholder="playerName,true
playerName1,false
playerName2,false"></textarea>
            </center>

            <center style="margin:10px">
                <input class="btn"
                       type="button"
                       onclick="Save()"
                       value="Save">
            </center>
        </div>
    `;

    $('#contentContainer').remove();
    $('#mobileContent').eq(0).prepend(html);
    $('#contentContainer').eq(0).prepend(html);

    // Make draggable on desktop
    if (game_data.device === 'desktop') {
        $('#div_container_key').css('position', 'fixed').draggable();
    }

    // Download existing Users.txt from Dropbox
    $.ajax({
        url: 'https://content.dropboxapi.com/2/files/download',
        method: 'POST',
        dataType: 'text',
        headers: {
            'Authorization': 'Bearer ' + dropboxToken,
            'Dropbox-API-Arg': JSON.stringify({
                path: '/' + filenameUsers
            })
        },
        success: data => {
            document.getElementById('input_name').textContent = data;
        }
    });
}

getInterface();

/* =========================
   UI HELPERS
========================= */

function closeWindow() {
    document.getElementById('div_container_key').remove();
}

function Save() {
    const content = document.getElementById('input_name').value;
    uploadFile(content, filenameUsers, dropboxToken);
}

/* =========================
   DROPBOX UPLOAD
========================= */

function uploadFile(data, filename, token) {
    const blob = new Blob([data], { type: 'plain/text' });
    blob.name = filename;

    const startTime = Date.now();

    $(document).bind('keydown', disableF5);
    window.onbeforeunload = () => 'are you sure?';

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = e => {
        const percent = Math.floor((100 * e.loaded) / e.total);
        UI.SuccessMessage(`progress upload: ${percent}%`);
    };

    xhr.onload = () => {
        if (xhr.status === 200) {
            UI.SuccessMessage('upload succes');
            console.log(`time upload: ${Date.now() - startTime} ms`);
            window.onbeforeunload = null;
            $(document).unbind('keydown', disableF5);
        } else {
            UI.ErrorMessage('Unable to upload file');
        }
    };

    xhr.open('POST', 'https://content.dropboxapi.com/2/files/upload');
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');
    xhr.setRequestHeader(
        'Dropbox-API-Arg',
        JSON.stringify({
            path: '/' + blob.name,
            mode: 'overwrite',
            autorename: true,
            mute: false
        })
    );

    xhr.send(blob);
}

/* =========================
   CRYPTOJS LOADER
========================= */

function insertCryptoLibrary() {
    return new Promise(resolve => {
        const start = Date.now();
        const script = document.createElement('script');
        script.src =
            'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js';
        script.type = 'text/javascript';
        script.onload = () => {
            console.log(
                `insert crypto-js library in ${Date.now() - start} ms`
            );
            resolve();
        };
        document.head.appendChild(script);
    });
}

/* =========================
   KEYBOARD LOCK
========================= */

function disableF5(e) {
    const key = e.which || e.keyCode;
    if (key === 116 || key === 82) {
        e.preventDefault();
    }
}
