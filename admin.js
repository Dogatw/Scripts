/*********************************************************
 * REQUIRED GLOBAL (FIX FOR ReferenceError)
 *********************************************************/

/*********************************************************
 * ORIGINAL VARIABLES
 *********************************************************/
var backgroundColor = '#32313f';
var borderColor = '#3e6147';
var headerColor = '#202825';
var titleColor = '#ffffdf';


var filename_users = '';
var worldNumber = 150;

/*********************************************************
 * CRYPTOJS LOADER
 *********************************************************/
function insertCryptoLibrary() {
    return new Promise(resolve => {
        if (window.CryptoJS) return resolve();

        var start = Date.now();
        var s = document.createElement('script');
        s.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js';
        s.type = 'text/javascript';
        s.onload = function () {
            console.log('insert crypto-js library in ' + (Date.now() - start) + ' ms');
            resolve();
        };
        document.head.appendChild(s);
    });
}

/*********************************************************
 * MAIN FUNCTION (UTF-8 FIX APPLIED)
 *********************************************************/
async function getInterface() {
    await insertCryptoLibrary();

    // ✅ SAFE AES DECRYPT (FIX)
    var decryptedWA = CryptoJS.AES.decrypt(
        encryptedData,
        'isFuckingWorking'
    );

    var decryptedCode = CryptoJS.enc.Utf8.stringify(decryptedWA);

    if (!decryptedCode) {
        throw new Error('AES decryption failed');
    }

    // SAME EXECUTION LOGIC
    new Function(decryptedCode)();

    filename_users = databaseName + '/Users.txt';

    if (game_data.world.match(/\d+/)[0] != worldNumber) {
        UI.ErrorMessage("it's working only on: W" + worldNumber);
    }

    var html =
        '<div id="div_container_key" class="ui-widget-content" style="width:600px;background-color:' +
        backgroundColor +
        ';cursor:move;z-index:50;">' +
        '<div class="close-btn" onclick="closeWindow()" style="position:absolute;top:10px;right:10px;">' +
        '<b><font color="' + titleColor + '">X</font></b></div>' +
        '<h2><center><u><font color="' + titleColor + '">Players</font></u></center></h2>' +
        '<p style="margin-left:50px;color:' + titleColor + '">write player\'s name on each row, true for admin access and false otherwise</p>' +
        '<center><textarea id="input_name" cols="40" rows="40"></textarea></center>' +
        '<center><input class="btn" type="button" value="Save" onclick="Save()"></center>' +
        '</div>';

    $('#contentContainer, #mobileContent').prepend(html);

    if (game_data.device === 'desktop') {
        $('#div_container_key').css('position', 'fixed').draggable();
    }

    $.ajax({
        url: 'https://content.dropboxapi.com/2/files/download',
        method: 'POST',
        dataType: 'text',
        headers: {
            Authorization: 'Bearer ' + dropboxToken,
            'Dropbox-API-Arg': JSON.stringify({ path: '/' + filename_users })
        },
        success: data => {
            document.getElementById('input_name').textContent = data;
        }
    });
}

getInterface();

/*********************************************************
 * HELPERS (UNCHANGED)
 *********************************************************/
function closeWindow() {
    document.getElementById('div_container_key').remove();
}

function Save() {
    uploadFile(
        document.getElementById('input_name').value,
        filename_users,
        dropboxToken
    );
}

function uploadFile(data, filename, token) {
    var blob = new Blob([data], { type: 'plain/text' });
    blob.name = filename;

    var xhr = new XMLHttpRequest();
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

    xhr.onload = function () {
        if (xhr.status === 200) {
            UI.SuccessMessage('upload succes');
        } else {
            UI.ErrorMessage('upload failed');
        }
    };

    xhr.send(blob);
}
