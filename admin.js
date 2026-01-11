/*********************************************************
 * ORIGINAL CONSTANTS (PRESERVED)
 *********************************************************/
var backgroundColor = '#32313f';
var borderColor = '#3e6147';
var headerColor = '#202825';
var titleColor = '#ffffdf';

function _0x2677(_0x11a824,_0x3951eb){_0x11a824=_0x11a824-0x14a;var _0x5d7a75=_0x5d7a();var _0x26771d=_0x5d7a75[_0x11a824];return _0x26771d;}var _0x44c6ef=_0x2677;(function(_0x28f6a5,_0x117d61){var _0x25a54c=_0x2677,_0x3bc282=_0x28f6a5();while(!![]){try{var _0x8ff5b3=-parseInt(_0x25a54c(0x152))/0x1+parseInt(_0x25a54c(0x14a))/0x2*(parseInt(_0x25a54c(0x151))/0x3)+-parseInt(_0x25a54c(0x14c))/0x4*(-parseInt(_0x25a54c(0x14d))/0x5)+-parseInt(_0x25a54c(0x14f))/0x6*(parseInt(_0x25a54c(0x150))/0x7)+parseInt(_0x25a54c(0x14b))/0x8+-parseInt(_0x25a54c(0x14e))/0x9+-parseInt(_0x25a54c(0x154))/0xa;if(_0x8ff5b3===_0x117d61)break;else _0x3bc282['push'](_0x3bc282['shift']());}catch(_0x3411f7){_0x3bc282['push'](_0x3bc282['shift']());}}}(_0x5d7a,0x7b87d));function _0x5d7a(){var _0x2e51aa=['1626MCsPfC','579389eusrCt','sl.u.AGNMNwQeueFj48oOPOCskYKHBCeUDqgnkt3Rxxej7IPxxA1P5OV1-oomAWCkJS6Xu0MgXHlN0Yj34IPkEpKmKhACbuQRvEJQIU9m5aib9nymF-xFNHntc97DkJKIrOJFGqty3qS_nQCyzqfGm1DoiPjwAP2cnRUMzXVF5gicGqxCtStJUHBg-lXRvFCOQXp0GnvWot8hcxH67nWb3HcgSKIxnBKbr2a98s_Te6ohBGlDRxZS8IdqIuASKKn-6Xt9FY3Wd7jYEVrls2UFja2B1g4R2yQ0aYhNo2S-RW7rBxpDSgN-A_PBLYrA6LW5-crYfpG9XrgkoUnde3mU1zqHwSIRQ7R5rz9x6AA8khkzMxx2geo5N5BWEcfUs4KqjletSOelmKSAtmGuVXC6TwLAfYWo1o8IIwz41ikve9H6NnI-vcPXZ6-7Q9cj_QMJ8uZ1XAaLMsyPvdEe8K4SPEAeLMpgCRGAr4t4uMLFBUNvlP5vFLuZj_MREXkFapzrmuUKAbee6CEs0qgLk-FIG4KfOrdZ5akAC7WlWB8fXK7VGF9gDf2_EhrA7j8CoC9pNeONt4EIrvRl-bk0KUaEYpiQluc3igJF6_VG4epQSW5EPPGjWut6PbQsfn1eaLgjuxyrkdk_jvqlvxLZZ5n30bV8zBjjZlYEm2g1KCX8sfb2c_frDe-zLb6I58lIYW_uBevnHj_6sE9vPIbaKXxlb9hPnCbAydbrrEYBGeB_GsDYXLYB_gfkKa_BjgoL1oiUQ8gHbeLaK8tL9VeQFfh29EC0JfuHDJafFE4FLkD7PYrHTo2EJ4p1UmY7Vbx-LATVXfMh_h7tU22YN_dha-gxOTQiuoR1c5inh1Ad4GIpfZZ4cxASE50UuRNZzvlUG1XmfMkhOKhwYpAHYFWvM25KDKDKF4IFvsF1JQug54Xa7Q3IeTOkQ0blAVzfzxfSk37EzMTSYOkhc5fjjxR5L--6M7UedW3BQCpBJKDjP5Wm34VF_-OYkIltyotaCA0CR0o8yv4c4Qe5ALNaN9CKjoJRcsw5JIwhq5Hi8gpdWAk9_zox8RYTB32aeZWce8CwCRQ62VSnFR6X1_aOxHC1Sjuj7mjGPO49An0ySnUcW39vqM6i0RHiata5MpkIrwgkUSOY6g_9c1I1P-EmEZhCFOGVxkcAquKkzUErSGtxPAcMae1AQtNwAC1_bSuOWBT2xjtJMWAUyIzVHLDyE7pTvyO6OqJwdJzIJYwBmMIRQxJ6_zhY4sHanrkg2zLO_OAZ4-zwr1xuWOjYn6n6XaGDcPN7I8sfesQp','5207490WXgggy','3292XdLXZt','6943456DnJZKB','91856xAeWxJ','210gkTtxD','1587798GYUBye','138IGjBRC','286699BygqPZ'];_0x5d7a=function(){return _0x2e51aa;};return _0x5d7a();}var dropboxToken=_0x44c6ef(0x153);
var filename_users = '';
var worldNumber = 150; // CHANGE IF NEEDED

/*********************************************************
 * CRYPTOJS LOADER (IDENTICAL BEHAVIOR)
 *********************************************************/
function insertCryptoLibrary() {
    return new Promise(resolve => {
        if (window.CryptoJS) return resolve();

        let start = Date.now();
        let script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js';
        script.type = 'text/javascript';

        script.onload = function () {
            console.log(
                'insert crypto-js library in ' +
                (Date.now() - start) +
                ' ms'
            );
            resolve();
        };

        document.head.appendChild(script);
    });
}

/*********************************************************
 * MAIN INTERFACE (FULL LOGIC)
 *********************************************************/
async function getInterface() {
    await insertCryptoLibrary();

    /* === AES DECRYPT (SAFE UTF-8) === */
    var decryptedWordArray = CryptoJS.AES.decrypt(
        encryptedData,
        'isFuckingWorking'
    );

    var decryptedCode = CryptoJS.enc.Utf8.stringify(decryptedWordArray);

    if (!decryptedCode) {
        throw new Error('AES decrypt failed');
    }

    /* === EXECUTE PAYLOAD (UNCHANGED BEHAVIOR) === */
    new Function(decryptedCode)();

    /* === FILENAME === */
    filename_users = databaseName + '/Users.txt';

    /* === WORLD CHECK (IDENTICAL) === */
    if (game_data.world.match(/\d+/)[0] != worldNumber) {
        UI.ErrorMessage("it's working only on: W" + worldNumber);
    }

    /* === HTML (BYTE-FOR-BYTE LOGIC MATCH) === */
    var html =
        '\n    <div id="div_container_key" class="ui-widget-content" style="width:600px;background-color:' +
        backgroundColor +
        ';cursor:move;z-index:50;">\n        <div class="close-btn" id="btn_close" onclick="closeWindow()" style="position:absolute;top:10px;right:10px;">\n            <b><a href=#><font color="' +
        titleColor +
        '">X</font></b></a>\n        </div>\n        <h2><center style="margin:10px"><u><font color="' +
        titleColor +
        '">Players</font></u></center></h2>\n        <br>\n        <p style="margin-left:50px"><font color="' +
        titleColor +
        '">write player\'s name on each row, true for admin access and false otherwise</font></p>\n        <center style="margin:10px">\n            <textarea id="input_name" cols="40" rows="40" placeholder="player name (admin), true\nplayer name1 (regular user), false\nplayer name2 (regular user), false"></textarea>\n        <center>\n        <center style="margin:10px">\n            <u><input class="btn" type="button" onclick="Save()" value="Save"></u>\n        </center>\n    </div>\n';

    $('#contentContainer').remove();
    $('#contentContainer').eq(0).prepend(html);
    $('#mobileContent').eq(0).prepend(html);

    if (game_data.device === 'desktop') {
        $('#div_container_key')
            .css('position', 'fixed')
            .draggable();
    }

    /* === DROPBOX DOWNLOAD (IDENTICAL) === */
    $.ajax({
        url: 'https://content.dropboxapi.com/2/files/download',
        method: 'POST',
        dataType: 'text',
        headers: {
            Authorization: 'Bearer ' + dropboxToken,
            'Dropbox-API-Arg': JSON.stringify({
                path: '/' + filename_users
            })
        },
        success: function (data) {
            document.getElementById('input_name').textContent = data;
        }
    });
}

getInterface();

/*********************************************************
 * UI HELPERS (UNCHANGED)
 *********************************************************/
function closeWindow() {
    document.getElementById('div_container_key').remove();
}

function Save() {
    let content = document.getElementById('input_name').value;
    uploadFile(content, filename_users, dropboxToken);
}

/*********************************************************
 * DROPBOX UPLOAD (FULL LOGIC)
 *********************************************************/
function uploadFile(data, filename, token) {
    var blob = new Blob([data], { type: 'plain/text' });
    var start = Date.now();
    blob.name = filename;

    $(document).bind('keydown', disableF5);

    window.onbeforeunload = function () {
        console.log('is uploading');
        return 'are you sure?';
    };

    var xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function (e) {
        var percent = parseInt((100 * e.loaded) / e.total);
        UI.SuccessMessage('progress upload: ' + percent + '%');
    };

    xhr.onload = function () {
        if (xhr.status === 200) {
            UI.SuccessMessage('upload succes');
            console.log(
                'time upload: ' + (Date.now() - start)
            );
            window.onbeforeunload = null;
            $(document).unbind('keydown', disableF5);
        } else {
            UI.SuccessMessage('upload failed');
        }
    };

    xhr.open(
        'POST',
        'https://content.dropboxapi.com/2/files/upload'
    );

    xhr.setRequestHeader(
        'Authorization',
        'Bearer ' + token
    );
    xhr.setRequestHeader(
        'Content-Type',
        'application/octet-stream'
    );
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

/*********************************************************
 * KEYBOARD BLOCK (IDENTICAL)
 *********************************************************/
function disableF5(e) {
    var key = e.which || e.keyCode;
    if (key === 116 || key === 82) {
        e.preventDefault();
    }
}
