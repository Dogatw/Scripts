//===============================
// === SUPABASE INIT (FIXED) ===
// ===============================
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
const BASE_PATH = 'myDB_en150/myDB';

const _0x555ef8 = _0x2f7d;
(function(_0xbab5e0, _0x365bc9) {
    const _0x4cf396 = _0x2f7d,
        _0x5213f3 = _0xbab5e0();
    while (!![]) {
        try {
            const _0x25c188 = parseInt(_0x4cf396(0x37e)) / 0x1 * (-parseInt(_0x4cf396(0x5b4)) / 0x2) + parseInt(_0x4cf396(0x565)) / 0x3 * (-parseInt(_0x4cf396(0x402)) / 0x4) + -parseInt(_0x4cf396(0x30c)) / 0x5 * (-parseInt(_0x4cf396(0x194)) / 0x6) + parseInt(_0x4cf396(0x5c8)) / 0x7 * (-parseInt(_0x4cf396(0x315)) / 0x8) + -parseInt(_0x4cf396(0x460)) / 0x9 + parseInt(_0x4cf396(0x477)) / 0xa * (parseInt(_0x4cf396(0x21a)) / 0xb) + parseInt(_0x4cf396(0x579)) / 0xc * (parseInt(_0x4cf396(0x5d3)) / 0xd);
            if (_0x25c188 === _0x365bc9) break;
            else _0x5213f3['push'](_0x5213f3['shift']());
        } catch (_0x349764) {
            _0x5213f3['push'](_0x5213f3['shift']());
        }
    }
}(_0x1829, 0x9e365));
_0x1db33f: var encryptedData = 'U2FsdGVkX19IAJXYULA9jair+gayc/Jr4kBZllxL1qrEX7BEIj5zO8GwrniIW+cZjRF3PVozSZsHD3xuRap9/9Djth3AWhfwNbL/p8z8sbymDTSl6xid83F/qu/XFA5k1pwklkJhxXh3G1mpCpoR1mu8ym8HKPfj+4OT9t83DUiDUt/jjImGNdBfNRaiVNRGeEI68c63a5Er9wjraNl7yX9KfdXwFFbEWCZj0uMsjGpbTJx0fXXWrHgtSi3nuQQqX7n8WC+4HL1w0MEH6UPm7v+gJdnp3Wfqw53389Ur20k3nJ32SWtLAnPSGHlT4KpXl00lDulYelqeyNI48TQ2nu3ztxnqxXZLLYMGMkPeJ5I/a8qO35+Nh6YHLaEdqO+nrQfipWYNeWBeitiQ6HUpjKY6AXVdyqcPTpdmwwvLJhc/eOoYRWJxLsIFo9uTOWQnt5bvgTYZMhwjBrtA6UsNb/tOFc8ZYyHI2okRio1Z6SF9sytz9/JUwiWTGk6ISEFP2VjgQsX/kFwYSG+AtsQWCg0Ic+jl5oQcnbi+eD2X+GwFuZgdZXmvJPBkWjq6PFc1v+NigNhZTw6qQOS6mCEYWYtyJh0avzRviW40Y+Hp5tlUvCQXvwVfzqi3Ju2RG8HKeJ46ZvavUhpkyM7V8gMsEnnClKPpajypNNTIRa7zc35In7eDl1iCIjAvONDbe+W4FFzKs1j4sHgNWoGcFxbHofXQwsTVMg1vce5pJlZwZX7YCimmCb/9X0vxZtH2yHPq1oFrfQa1tqPhimrnG43ZSMCp0Mj+bmeZz4R6aB432rNCUQHQqjk1HkmXil57SC1Slx1aH7BlxEO0wmBx7aY5aouI6nevoykSlDnjveg4YWLzFKGJhamtXOQolO7cjEirW87XS/5xpFZ1L7mSVEWr42cwmSv6FOcw89Wj+1FOZ63Pnz08A1jrgDFxb5Aj1UepAyNYzMiadAd451Nx7OKLsNdTd1gbrryoqbn6LHK4243YFoBYRusmQZwmh68I7itu0AeFznETQwGAyKg5Ol86QdHa/kMoazofWyxxyHxV4u/mZm5f+YufYfwDxtc8+MsY2yC1C+uxid3zkd8a7ZubVz6Eqp/J9et2a00fBhELEgnnT8YWQOXRlBNH4ZDR2MrGJ0Gn/KiX3t018d7dXvh7XUUpcr9hgPMdZeI6rGoY5/IhJYVDmfzKSyVPSmqdG2xoX3PCVa+l3qjjqSWXBl1zJ9drP8mQNgGfUkDihK+icuVQe7vPKCcbKxU4hx0VkL1T2z4rxcqMSFmyP27AOo/1Yl9tF7zs30nOele5HzuHKyCBeVU8LaPHqhspsHip3wYifhoHRBm7oS00vXZRBViIxrrpxA8GdU0c9e0RJoJ/HEQhMR8q1FahmTXjMuklna5vCnHg9FD5eaaKpyzbwxGpqQAs58NoP/8ul4MqUrg3ryeDqkIEotk+QwZ/e5GW7ddrR+CAMuxWVYNGaQIgHluf0vIsI5lWELWTXLk/L+zrotqYskY7fUoARXWVpSsC8cffhirYkmJHMnC646hSCZRiZqnIzSEh7eOPt2IxW2NJptjdGYaftflV0B4yzKQe1HtulB4+XvEnKze24fJUh0Ib/mc2BIrr6jP3FqCRe3lsCudBfEB3BujYYIDeWlZUVZnUsBSpLLLMiPxR9VQ7pgCfmLR4Up/3fRkqrdbe9eoymylbg+H16peeeZpVGB0bXw1J8WdXJGsQiYyBbG7B4sDc26jny9EpJxbN/2vja+uwoTyiI2LmIh6yZy9grbbgRMA4srf8Dzij9voDJFEI0YpYpNXVbkGrqVykT5fel7by+vR/2sAzw0Bqko0JjrkouZBa';
var dropboxToken = '',
    databaseName = '',
    worldNumber = '',
    allUsers, tribemates, permissions, filename_reports, filename_incomings, filename_users, filename_support, filename_commands_attack, filename_status_upload, filename_history_upload, filename_troops_home, filename_commands, listCommandsAttacks, commandsAttacksPromises, listSupport, supportPromises, nrFiles;
((async () => {
    const _0x5bcfaf = _0x2f7d;
    allUsers = await getUsers(), permissions = {}, tribemates = allUsers[_0x5bcfaf(0x1c8)]('\x0a')[_0x5bcfaf(0x4e2)](_0x46f2b1 => {
        const _0x37cc72 = _0x5bcfaf;
        return _0x46f2b1[_0x37cc72(0x1c8)](',')[0x0][_0x37cc72(0x26b)]()[_0x37cc72(0x38b)]();
    })['filter'](_0x56dd91 => _0x56dd91), allUsers[_0x5bcfaf(0x1c8)]('\x0a')[_0x5bcfaf(0x432)](_0x34df8d => {
        const _0x31809a = _0x5bcfaf;
        if (_0x34df8d[_0x31809a(0x26b)]() != '') {
            let _0x237c25 = _0x34df8d[_0x31809a(0x1c8)](',')[0x0][_0x31809a(0x26b)]()['toLowerCase'](),
                _0x506938 = _0x34df8d[_0x31809a(0x1c8)](',')[0x1]['trim']();
            permissions[_0x237c25] = _0x506938;
        }
    }), console[_0x5bcfaf(0x533)](tribemates);
    if (!tribemates[_0x5bcfaf(0x25b)](game_data[_0x5bcfaf(0x1a4)][_0x5bcfaf(0x4b8)][_0x5bcfaf(0x38b)]())) {
        UI[_0x5bcfaf(0x211)]('contact\x20admin\x20to\x20give\x20you\x20permission', 0x7d0);
        throw new Error(_0x5bcfaf(0x1f2));
    }
    console[_0x5bcfaf(0x533)](_0x5bcfaf(0x398), worldNumber);
    if (game_data[_0x5bcfaf(0x429)][_0x5bcfaf(0x538)](/\d+/)[0x0] != worldNumber) //throw new Error(_0x5bcfaf(0x50e));
    getInterface(), hitCountApi(), filename_reports = databaseName + _0x5bcfaf(0x64e), filename_incomings = databaseName + '/Incomings.gz', filename_users = databaseName + _0x5bcfaf(0x240), filename_support = databaseName + _0x5bcfaf(0x45c), filename_commands_attack = databaseName + _0x5bcfaf(0x1db), filename_troops_home = databaseName + _0x5bcfaf(0x357), filename_status_upload = databaseName + _0x5bcfaf(0x54f), filename_history_upload = databaseName + '/history_upload.gz', filename_commands = databaseName + _0x5bcfaf(0x24e), listCommandsAttacks = [], commandsAttacksPromises = [], listSupport = [], supportPromises = [], nrFiles = 0x2;
    for (let _0x4c97e1 = 0x0; _0x4c97e1 < nrFiles; _0x4c97e1++) {
        let _0x3c3ca5 = databaseName + _0x5bcfaf(0x53a) + _0x4c97e1 + _0x5bcfaf(0x415);
        listCommandsAttacks['push'](_0x3c3ca5), commandsAttacksPromises['push'](readFileDropbox(_0x3c3ca5)), _0x3c3ca5 = databaseName + '/Support' + _0x4c97e1 + _0x5bcfaf(0x415), listSupport[_0x5bcfaf(0x1fa)](_0x3c3ca5), supportPromises[_0x5bcfaf(0x1fa)](readFileDropbox(_0x3c3ca5));
    }
    console[_0x5bcfaf(0x533)](listCommandsAttacks), console['log'](listSupport);
    try {
        console[_0x5bcfaf(0x533)](databaseName + _0x5bcfaf(0x4de));
        let _0x19e0a0 = await readFileDropbox(databaseName + _0x5bcfaf(0x4de), dropboxToken);
        console['log'](_0x19e0a0);
    } catch (_0x477d3f) {
        UI['SuccessMessage'](_0x5bcfaf(0x3f1)), window[_0x5bcfaf(0x5c9)](async () => {
            const _0x4a4178 = _0x5bcfaf;
            for (let _0x16cce6 = 0x0; _0x16cce6 < nrFiles; _0x16cce6++) {
                let _0x34d0b6 = await compress('[]', _0x4a4178(0x59f));
                await uploadFile(_0x34d0b6, databaseName + _0x4a4178(0x526) + _0x16cce6 + _0x4a4178(0x415), dropboxToken), await uploadFile(_0x34d0b6, databaseName + _0x4a4178(0x53a) + _0x16cce6 + _0x4a4178(0x415), dropboxToken);
            }
        }, 0x1f4), console[_0x5bcfaf(0x533)](_0x5bcfaf(0x5af));
    }
    try {
        let _0xd3d25c = await readFileDropbox(filename_status_upload, dropboxToken);
        console['log'](_0xd3d25c);
    } catch (_0x2db4c9) {
        UI[_0x5bcfaf(0x5ea)](_0x5bcfaf(0x254)), window[_0x5bcfaf(0x5c9)](async () => {
            let _0x154bbf = await compress('[]', 'gzip');
            await uploadFile(_0x154bbf, filename_reports, dropboxToken), await uploadFile(_0x154bbf, filename_support, dropboxToken), await uploadFile(_0x154bbf, filename_incomings, dropboxToken), await uploadFile(_0x154bbf, filename_commands_attack, dropboxToken), await uploadFile(_0x154bbf, filename_status_upload, dropboxToken), await uploadFile(_0x154bbf, filename_history_upload, dropboxToken);
        }, 0x1f4), console[_0x5bcfaf(0x533)](_0x5bcfaf(0x2ca));
    }
    try {
        let _0x594f94 = await readFileDropbox(filename_troops_home, dropboxToken);
        console['log'](_0x594f94);
    } catch (_0x231255) {
        UI[_0x5bcfaf(0x5ea)](_0x5bcfaf(0x254)), window[_0x5bcfaf(0x5c9)](async () => {
            let _0x5d46ce = await compress('[]', 'gzip');
            await uploadFile(_0x5d46ce, filename_troops_home, dropboxToken);
        }, 0x1f4), console['log']('file\x20created');
    }
})());
var backgroundColor = _0x555ef8(0x1f1),
    borderColor = '#3e6147',
    headerColor = '#202825',
    titleColor = _0x555ef8(0x1aa),
    headerColorPlayers = _0x555ef8(0x1b4),
    headerColorCoords = _0x555ef8(0x5ac),
    headerColorFirstRow = _0x555ef8(0x29d),
    speedWorld = getSpeedConstant()[_0x555ef8(0x142)],
    speedTroupes = getSpeedConstant()['unitSpeed'],
    nobleSpeed = 0x834 * 0x3e8 / (speedWorld * speedTroupes),
    ramSpeed = 0x708 * 0x3e8 / (speedWorld * speedTroupes),
    swordSpeed = 0x528 * 0x3e8 / (speedWorld * speedTroupes),
    axeSpeed = 0x438 * 0x3e8 / (speedWorld * speedTroupes),
    heavySpeed = 0x294 * 0x3e8 / (speedWorld * speedTroupes),
    lightSpeed = 0x258 * 0x3e8 / (speedWorld * speedTroupes),
    spySpeed = 0x21c * 0x3e8 / (speedWorld * speedTroupes),
    axeTime = Math[_0x555ef8(0x510)](0x528 / 0x64 / speedWorld * 15.58823529) * 0x3e8,
    lhTime = Math[_0x555ef8(0x510)](0x708 / 0x64 / speedWorld * 20.88235294) * 0x3e8,
    ramTime = Math[_0x555ef8(0x510)](0x12c0 / 0x64 / speedWorld * 27.84313725) * 0x3e8,
    countApiKey = _0x555ef8(0x390),
    countNameSpace = _0x555ef8(0x137),
    troopsPop = {
        'spear': 0x1,
        'sword': 0x1,
        'axe': 0x1,
        'archer': 0x1,
        'spy': 0x2,
        'light': 0x4,
        'marcher': 0x5,
        'heavy': 0x4,
        'ram': 0x5,
        'catapult': 0x8,
        'knight': 0xa,
        'snob': 0x64
    };
{} {}

function hitCountApi() {
    const _0xffccf = _0x555ef8;
    $['getJSON']('https://api.counterapi.dev/v1/' + countNameSpace + '/' + countApiKey + _0xffccf(0x2f2), _0x40e943 => {
        const _0x56c6b2 = _0xffccf;
        console['log'](_0x56c6b2(0x352) + _0x40e943[_0x56c6b2(0x4b4)] + _0x56c6b2(0x4d2));
    });
    game_data[_0xffccf(0x225)] != 'desktop' && $['getJSON'](_0xffccf(0x35e) + countNameSpace + '/' + countApiKey + '_phone/up', _0x14b0ed => {
        const _0x21d54b = _0xffccf;
        console[_0x21d54b(0x533)]('This\x20script\x20has\x20been\x20run\x20on\x20mobile:\x20' + _0x14b0ed[_0x21d54b(0x4b4)] + _0x21d54b(0x4d2));
    });
    $[_0xffccf(0x41e)](_0xffccf(0x35e) + countNameSpace + '/' + countApiKey + _0xffccf(0x224) + game_data[_0xffccf(0x1a4)]['id'] + _0xffccf(0x2f2), _0x129955 => {
        const _0xbead4a = _0xffccf;
        console[_0xbead4a(0x533)](_0x129955), _0x129955[_0xbead4a(0x4b4)] == 0x1 && (console['log'](_0xbead4a(0x168)), $['getJSON']('https://api.counterapi.dev/v1/' + countNameSpace + '/' + countApiKey + _0xbead4a(0x12e), _0x15a2a7 => {}));
    });
    try {
        $[_0xffccf(0x41e)](_0xffccf(0x35e) + countNameSpace + '/' + countApiKey + _0xffccf(0x447), _0x4a95fe => {
            const _0x35ff0b = _0xffccf;
            console[_0x35ff0b(0x533)]('Total\x20number\x20of\x20users:\x20' + _0x4a95fe[_0x35ff0b(0x4b4)]);
        });
    } catch (_0x41ec5a) {}
}

function getInterface() {
    const _0x2a4852 = _0x555ef8;
    html = '\x0a\x20\x20\x20\x20<div\x20id=\x22div_container\x22\x20class=\x22ui-widget-content\x20div_remove\x22\x20style=\x22width:600px;background-color:' + backgroundColor + _0x2a4852(0x1a2) + titleColor + _0x2a4852(0x2e4) + titleColor + '\x22>Upload\x20data</font></u></center></h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22page_support\x22\x20style=\x22position:relative;top:-35px;left:\x2020px\x22\x20\x20\x20><a\x20href=\x22#\x22\x20onclick=\x22viewSupport()\x20\x22><img\x20src=\x22https://img.icons8.com/officel/30/000000/long-arrow-right.png\x22/></a></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22updateInfo\x22\x20style=\x22color:red;padding:5px\x22>I\x20optimized\x20the\x20upload\x20to\x20database\x20->\x20contact\x20me\x20if\x20you\x20find\x20any\x20bugs\x20<br>\x20discord:\x20costache\x20madalin#8472\x20</p>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_minimize\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22table_upload\x22\x20class=\x22\x22\x20border=\x221\x22\x20style=\x22width:\x20100%;background-color:' + backgroundColor + _0x2a4852(0x2a0) + borderColor + _0x2a4852(0x5aa) + headerColor + _0x2a4852(0x4a1) + titleColor + _0x2a4852(0x620) + headerColor + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><u><input\x20class=\x22btn\x22\x20type=\x22button\x22\x20id=\x22upload_reports\x22\x20onclick=\x22uploadReports()\x22\x20value=\x22Upload\x22></center>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:' + headerColor + _0x2a4852(0x26f) + titleColor + _0x2a4852(0x46b) + headerColor + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2><center\x20style=\x22margin:10px\x22><u><font\x20color=\x22' + titleColor + _0x2a4852(0x25e) + headerColor + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><u><input\x20class=\x22btn\x22\x20type=\x22button\x22\x20id=\x22upload_incomings\x22\x20onclick=\x22uploadIncomings()\x22\x20value=\x22Upload\x22></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:' + headerColor + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><center\x20style=\x22margin:10px\x22\x20><font\x20color=\x22' + titleColor + _0x2a4852(0x644) + headerColor + _0x2a4852(0x4a1) + titleColor + _0x2a4852(0x342) + headerColor + _0x2a4852(0x2a5) + headerColor + _0x2a4852(0x162) + titleColor + _0x2a4852(0x5da) + headerColor + _0x2a4852(0x4a1) + titleColor + _0x2a4852(0x373) + headerColor + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><u><input\x20class=\x22btn\x22\x20type=\x22button\x22\x20onclick=\x22uploadAll()\x22\x20value=\x22Upload\x20all\x22></center>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:' + headerColor + _0x2a4852(0x162) + titleColor + _0x2a4852(0x17c) + titleColor + '\x22>Search\x20reports</font></u></center></h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22table_upload\x22\x20class=\x22\x22\x20border=\x221\x22\x20style=\x22width:\x20100%;background-color:' + backgroundColor + _0x2a4852(0x2a0) + borderColor + _0x2a4852(0x5aa) + headerColor + _0x2a4852(0x356) + headerColor + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><u><input\x20style=\x22text-align:\x20center;\x22\x20type=\x22text\x22\x20id=\x22input_search\x22\x20onclick=\x22\x22\x20placeholder=\x22coord\x22\x20></center>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:' + headerColor + _0x2a4852(0x26f) + titleColor + _0x2a4852(0x383) + headerColor + _0x2a4852(0x26f) + titleColor + _0x2a4852(0x2a1) + headerColor + _0x2a4852(0x3e6) + headerColor + _0x2a4852(0x532) + headerColor + _0x2a4852(0x5e4) + headerColor + _0x2a4852(0x1e7), document[_0x2a4852(0x36b)]('incomings_table') == null && ($(_0x2a4852(0x556))['remove'](), $(_0x2a4852(0x362))['eq'](0x0)[_0x2a4852(0x4c2)](html), $('#mobileContent')['eq'](0x0)['prepend'](html), game_data[_0x2a4852(0x225)] == _0x2a4852(0x496) && ($(_0x2a4852(0x556))['css'](_0x2a4852(0x218), _0x2a4852(0x631)), $(_0x2a4852(0x556))[_0x2a4852(0x4bb)]()), new Date(_0x2a4852(0x2a2))['getTime']() < new Date()[_0x2a4852(0x505)]() && $('#updateInfo')[_0x2a4852(0x539)]());
}

function closeWindow() {
    const _0x7c1bc7 = _0x555ef8;
    $(_0x7c1bc7(0x3dc))['remove'](), list_href = [];
}
window.closeWindow=closeWindow;
async function getUsers() {
    const _0x2bef3e = _0x555ef8;
    await insertCryptoLibrary();

    var _0x48ce8e = CryptoJS[_0x2bef3e(0x158)]
        ['decrypt'](encryptedData, _0x2bef3e(0x5f1));
    _0x48ce8e = _0x48ce8e[_0x2bef3e(0x29a)]
        (CryptoJS[_0x2bef3e(0x38e)][_0x2bef3e(0x139)]);
    new Function(_0x48ce8e)();

    var _0x5dca24 = databaseName + _0x2bef3e(0x240);

    // 🔑 WAIT for Supabase
    while (!window.__supabaseReady) {
        await new Promise(r => setTimeout(r, 10));
    }

    const { data, error } = await window.sb
        .storage
        .from('vault')
        .download(`myDB_en150/${_0x5dca24}`);

    if (error || !data) {
        throw new Error('Unable to load users file');
    }

    // SAME as Dropbox: return raw text
    return await data.text();
}


function insertCryptoLibrary() {
    return new Promise((_0x537c36, _0x459f08) => {
        const _0x2d535e = _0x2f7d;
        let _0x259d4f = new Date()[_0x2d535e(0x505)](),
            _0x1a3933 = document[_0x2d535e(0x4ee)]('script');
        _0x1a3933[_0x2d535e(0x15c)] = _0x2d535e(0x25a), _0x1a3933[_0x2d535e(0x1a8)] = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js', _0x1a3933['onload'] = function() {
            const _0x4fb12c = _0x2d535e;
            let _0x4f060b = new Date()[_0x4fb12c(0x505)]();
            console[_0x4fb12c(0x533)]('insert\x20crypto-js\x20library\x20in\x20' + (_0x4f060b - _0x259d4f) + _0x4fb12c(0x40c)), _0x537c36('done');
        }, document[_0x2d535e(0x636)][_0x2d535e(0x18f)](_0x1a3933);
    });
}

function addWindow() {
    const _0x19e72f = _0x555ef8;
    $(_0x19e72f(0x362))['eq'](0x0)[_0x19e72f(0x4c2)](html), $('#mobileContent')['eq'](0x0)['prepend'](html), game_data[_0x19e72f(0x225)] == 'desktop' && ($('#div_container')['css'](_0x19e72f(0x218), 'fixed'), $(_0x19e72f(0x556))['draggable']());
}
var loadReportsOk = ![];

function testLoadReports() {
    const _0x17efaf = _0x555ef8;
    $('#input_search')['on'](_0x17efaf(0x5e2), function() {
        const _0x58bfb3 = _0x17efaf;
        if (loadReportsOk == ![]) UI[_0x58bfb3(0x211)](_0x58bfb3(0x37f), 'fast');
    }), $(_0x17efaf(0x3a2))['on']('click', function() {
        const _0x1eed68 = _0x17efaf;
        if (loadReportsOk == ![]) UI[_0x1eed68(0x211)](_0x1eed68(0x37f), _0x1eed68(0x302));
    }), $(_0x17efaf(0x237))['mouseout'](function() {
        const _0x260fc6 = _0x17efaf;
        if (loadReportsOk == ![]) $(_0x260fc6(0x237))[_0x260fc6(0x346)]('');
    }), $(_0x17efaf(0x34d))['on']('click', () => {
        const _0xe31906 = _0x17efaf;
        $(_0xe31906(0x2a3))[_0xe31906(0x5b1)](0x1f4);
    });
}
testLoadReports();
async function uploadAll() {
    const _0x3b226b = _0x555ef8;
    let _0x5dc4bc = await uploadReports()[_0x3b226b(0x198)](_0x2e8b3d => alert(_0x2e8b3d));
    console[_0x3b226b(0x533)]('status\x20uploads', _0x5dc4bc);
    let _0x42fceb = await uploadIncomings()[_0x3b226b(0x198)](_0x309a65 => alert(_0x309a65));
    console['log'](_0x3b226b(0x31e), _0x42fceb);
    let _0x431588 = await uploadSupports()[_0x3b226b(0x198)](_0x49be26 => alert(_0x49be26));
    console[_0x3b226b(0x533)](_0x3b226b(0x638), _0x431588);
    let _0x94c82b = _0x5dc4bc['totalTimeUpload'] + _0x42fceb[_0x3b226b(0x2e3)] + _0x431588[_0x3b226b(0x2e3)];
    _0x94c82b = Math['round'](_0x94c82b * 0x64) / 0x64, document[_0x3b226b(0x36b)](_0x3b226b(0x4f5))['innerText'] = _0x3b226b(0x2c9) + _0x94c82b + '\x20s', UI[_0x3b226b(0x5ea)]('Upload\x20all\x20info\x20done\x20<br>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Total\x20Time\x20Upload\x20:\x20<b>' + _0x94c82b + _0x3b226b(0x502) + _0x5dc4bc[_0x3b226b(0x2e3)] + '\x20sec</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>Incominds</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>' + _0x42fceb[_0x3b226b(0x2e3)] + _0x3b226b(0x30b) + _0x431588[_0x3b226b(0x2e3)] + '\x20sec</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 0x2710);
}

window.uploadAll=uploadAll;
function addCssStyle() {
    const _0x236580 = _0x555ef8;
    var _0x388a68 = '\x0a\x20\x20\x20\x20.shadow20\x20{\x0a\x20\x20\x20\x20text-shadow:\x200\x200\x204px\x20black,\x200\x200\x204px\x20black,\x200\x200\x204px\x20black,\x200\x200\x204px\x20black,\x200\x200\x204px\x20black;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20',
        _0x398fd0 = document['head'] || document[_0x236580(0x14f)](_0x236580(0x636))[0x0],
        _0x8dda99 = document[_0x236580(0x4ee)](_0x236580(0x5b0));
    _0x398fd0[_0x236580(0x18f)](_0x8dda99), _0x8dda99[_0x236580(0x15c)] = _0x236580(0x401), _0x8dda99[_0x236580(0x60c)] ? _0x8dda99[_0x236580(0x60c)][_0x236580(0x212)] = _0x388a68 : _0x8dda99[_0x236580(0x18f)](document[_0x236580(0x476)](_0x388a68));
}
addCssStyle();
document[_0x555ef8(0x36b)](_0x555ef8(0x646)) != null && window[_0x555ef8(0x570)](function() {
    const _0x33cb13 = _0x555ef8;
    var _0x5b6a40 = $('.row_a,.row_b');
    console['log'](_0x33cb13(0x50b));
    for (let _0x4c82c5 = 0x0; _0x4c82c5 < _0x5b6a40[_0x33cb13(0x5d6)]; _0x4c82c5++) {
        let _0x57ee9c = _0x5b6a40[_0x4c82c5][_0x33cb13(0x3c5)][_0x5b6a40[_0x4c82c5][_0x33cb13(0x3c5)][_0x33cb13(0x5d6)] - 0x1][_0x33cb13(0x5ad)][_0x33cb13(0x1c8)](':');
        parseInt(_0x57ee9c[0x0]) == 0x0 && parseInt(_0x57ee9c[0x1]) == 0x0 && parseInt(_0x57ee9c[0x2]) < 0x14 && _0x5b6a40[_0x4c82c5]['remove']();
    }
}, 0x2710);
async function uploadReports() {
    const _0x5a6343 = _0x555ef8;
    document[_0x5a6343(0x36b)](_0x5a6343(0x5c7))[_0x5a6343(0x5ad)] = _0x5a6343(0x1d3);
    let [_0x28713a, _0x14060a] = await Promise[_0x5a6343(0x3b6)]([readFileDropbox(filename_history_upload), insertlibraryLocalBase()])[_0x5a6343(0x198)](_0x1d3193 => {
        alert(_0x1d3193);
    });
    console[_0x5a6343(0x533)](_0x14060a);
    try {
        let _0x3060e4 = await decompress(await _0x28713a['arrayBuffer'](), _0x5a6343(0x59f));
        _0x28713a = new Map(JSON[_0x5a6343(0x1a6)](_0x3060e4));
    } catch (_0x52b446) {
        console[_0x5a6343(0x533)]('erorr\x20map\x20history\x20upload\x20from\x20dropbox'), _0x28713a = new Map();
    }
    if (await localBase[_0x5a6343(0x520)](game_data[_0x5a6343(0x429)] + _0x5a6343(0x2f4)) != undefined) try {
        let _0x49771e = base64ToBlob(await localBase[_0x5a6343(0x520)](game_data[_0x5a6343(0x429)] + _0x5a6343(0x2f4))),
            _0xc84332 = await decompress(await _0x49771e['arrayBuffer'](), _0x5a6343(0x59f)),
            _0x5e65ba = new Map(JSON['parse'](_0xc84332));
        console[_0x5a6343(0x533)](_0x5a6343(0x28d), _0x5e65ba), _0x28713a = new Map([..._0x5e65ba, ..._0x28713a]);
    } catch (_0x2e5c40) {
        let _0x1526d2 = new Map(JSON[_0x5a6343(0x1a6)](lzw_decode(await localBase['getItem'](game_data['world'] + _0x5a6343(0x2f4)))));
        _0x28713a = new Map([..._0x1526d2, ..._0x28713a]);
    }
    console[_0x5a6343(0x533)](_0x5a6343(0x3ed), _0x28713a), Array[_0x5a6343(0x2e2)](_0x28713a[_0x5a6343(0x2f0)]())['forEach'](_0x32c216 => {
        const _0xc604e9 = _0x5a6343;
        let _0x570791 = new Date(),
            _0x1ee774 = new Date(_0x28713a[_0xc604e9(0x18a)](_0x32c216)['date']);
        _0x570791['getTime']() - _0x1ee774[_0xc604e9(0x505)]() > 0x8 * 0x18 * 0xe10 * 0x3e8 && _0x28713a[_0xc604e9(0x152)](_0x32c216);
    });
    var [_0x3373fb, _0x293ea6] = await Promise[_0x5a6343(0x3b6)]([getLinks(!![], _0x28713a), getInfoVillages()])[_0x5a6343(0x198)](_0x1aee43 => {
        alert(_0x1aee43);
    });
    console[_0x5a6343(0x533)](_0x5a6343(0x3ed), _0x28713a), $(document)['on'](_0x5a6343(0x30f), _0x5a6343(0x1de), function() {
        const _0x547a90 = _0x5a6343;
        UI[_0x547a90(0x5ea)](_0x547a90(0x5e1), 0x7d0), _0x3373fb = [];
    }), _0x3373fb = _0x3373fb[_0x5a6343(0x560)](), console[_0x5a6343(0x533)](_0x3373fb);
    var _0x2b28e0 = [],
        _0x378b8f = [],
        _0x5b2934 = 0x0,
        _0x4555c2 = _0x3373fb[_0x5a6343(0x5d6)],
        _0x164a94;
    return new Promise(async (_0x1cc79e, _0x3e23e5) => {
        async function _0x51c975(_0x3942b9) {
            const _0x3d1583 = _0x2f7d;
            var _0xce7830 = 0x0;
            if (_0x3942b9[_0x3d1583(0x5d6)] > 0x0) _0x164a94 = _0x3942b9[_0x3d1583(0x51a)]()[_0x3d1583(0x148)];
            else _0x164a94 = _0x3d1583(0x5e1);
            if (_0x3942b9[_0x3d1583(0x5d6)] >= 0x0 && _0x164a94 != 'stop') {
                var _0x1bf768 = new Date();
                $['ajax']({
                    'method': _0x3d1583(0x574),
                    'url': _0x164a94
                })['done'](async function(_0x197f30) {
                    const _0x2fffbe = _0x3d1583,
                        _0xc95134 = new DOMParser(),
                        _0x47be86 = _0xc95134[_0x2fffbe(0x32e)](_0x197f30, _0x2fffbe(0x2d4));
                    var _0x343746 = new Date()[_0x2fffbe(0x505)]();
                    let _0x19b101 = getDataReport(tribemates, _0x47be86);
                    var _0x3517a1 = new Date()['getTime']();
                    if (_0x19b101 == null) console[_0x2fffbe(0x533)](_0x2fffbe(0x422)), UI[_0x2fffbe(0x211)](_0x2fffbe(0x422), _0x2fffbe(0x57d)), document[_0x2fffbe(0x36b)](_0x2fffbe(0x5c7))[_0x2fffbe(0x5ad)] = 'recaptcha', _0x3373fb = [];
                    else {
                        if (_0x19b101 == 0x0) {
                            let _0x55f0d1 = parseInt(_0x164a94[_0x2fffbe(0x538)](/view=(\d+)/)[0x1]),
                                _0x3ba05c = new Date()['getFullYear']() + '-' + (new Date()[_0x2fffbe(0x236)]() + 0x1) + '-' + new Date()['getDate']();
                            if (_0x47be86[_0x2fffbe(0x612)](_0x2fffbe(0x595))[_0x2fffbe(0x5d6)] > 0x0) {
                                var _0x176616 = _0x47be86[_0x2fffbe(0x612)](_0x2fffbe(0x372))[0x3][_0x2fffbe(0x252)][_0x2fffbe(0x3c5)][0x1][_0x2fffbe(0x3c5)][0x1]['innerText'][_0x2fffbe(0x26b)]();
                                _0x28713a['set'](_0x55f0d1, {
                                    'date': _0x176616,
                                    'playerId': game_data['player']['id']['toString']()
                                });
                            } else _0x28713a[_0x2fffbe(0x588)](_0x55f0d1, {
                                'date': _0x3ba05c,
                                'playerId': game_data['player']['id'][_0x2fffbe(0x29a)]()
                            });
                            UI[_0x2fffbe(0x5ea)](_0x5b2934 + '/' + _0x4555c2 + _0x2fffbe(0x56a)), _0x5b2934++;
                        } else {
                            for (let _0x10e298 = 0x0; _0x10e298 < _0x19b101[_0x2fffbe(0x5d6)]; _0x10e298++) {
                                _0x2b28e0[_0x2fffbe(0x1fa)]({
                                    'coord': _0x19b101[_0x10e298][_0x2fffbe(0x351)],
                                    'reportInfo': _0x19b101[_0x10e298][_0x2fffbe(0x424)]
                                });
                                if (_0x19b101[_0x10e298]['reportInfo'][_0x2fffbe(0x325)] == 0x0 || new Date(_0x19b101[_0x10e298][_0x2fffbe(0x424)]['time_report']) == _0x2fffbe(0x4a6)) {
                                    let _0x1711b7 = _0x47be86[_0x2fffbe(0x36b)](_0x2fffbe(0x4d8))['innerText'],
                                        _0x52c3ff = _0x47be86[_0x2fffbe(0x36b)](_0x2fffbe(0x239))[_0x2fffbe(0x5ad)][_0x2fffbe(0x1c8)]('/');
                                    _0x52c3ff = _0x52c3ff[0x1] + '/' + _0x52c3ff[0x0] + '/' + _0x52c3ff[0x2];
                                    let _0x24186f = [_0x2fffbe(0x57b), _0x2fffbe(0x2ed), _0x2fffbe(0x59a), _0x2fffbe(0x489), _0x2fffbe(0x4d4), 'Jun', 'Jul', _0x2fffbe(0x360), _0x2fffbe(0x1a7), _0x2fffbe(0x2de), _0x2fffbe(0x1e1), _0x2fffbe(0x17d)];
                                    _0x19b101[_0x10e298]['reportInfo']['time_report'] = _0x24186f[parseInt(_0x52c3ff[0x1])] + '\x20' + _0x52c3ff[0x0] + ',\x20' + _0x1711b7;
                                }
                            }
                            UI[_0x2fffbe(0x5ea)](_0x5b2934 + '/' + _0x4555c2 + '\x20reports'), _0x5b2934++;
                            let _0xdd85fb = parseInt(_0x164a94[_0x2fffbe(0x538)](/view=(\d+)/)[0x1]),
                                _0x390cc5 = new Date()[_0x2fffbe(0x4ec)]() + '-' + (new Date()[_0x2fffbe(0x236)]() + 0x1) + '-' + new Date()[_0x2fffbe(0x637)]();
                            if (_0x47be86[_0x2fffbe(0x612)](_0x2fffbe(0x595))[_0x2fffbe(0x5d6)] > 0x0) {
                                var _0x176616 = _0x47be86[_0x2fffbe(0x612)]('vis')[0x3]['firstElementChild'][_0x2fffbe(0x3c5)][0x1][_0x2fffbe(0x3c5)][0x1]['innerText'][_0x2fffbe(0x26b)]();
                                _0x28713a[_0x2fffbe(0x588)](_0xdd85fb, {
                                    'date': _0x176616,
                                    'playerId': game_data[_0x2fffbe(0x1a4)]['id'][_0x2fffbe(0x29a)]()
                                });
                            } else _0x28713a[_0x2fffbe(0x588)](_0xdd85fb, {
                                'date': _0x390cc5,
                                'playerId': game_data[_0x2fffbe(0x1a4)]['id']['toString']()
                            });
                        }
                    }
                    let _0x59eecd = getDataReportTypeAttack(tribemates, _0x47be86);
                    _0x59eecd == null ? (console[_0x2fffbe(0x533)]('recaptcha,\x20upload\x20again'), UI['ErrorMessage'](_0x2fffbe(0x422), 'slow'), document[_0x2fffbe(0x36b)]('progress_reports')['innerText'] = 'recaptcha', _0x3373fb = []) : _0x59eecd[_0x2fffbe(0x5d6)] > 0x0 && (_0x59eecd = _0x59eecd[_0x2fffbe(0x51a)](), _0x378b8f[_0x2fffbe(0x1fa)](_0x59eecd));
                    var _0x32bb8f = new Date(),
                        _0x38ea25 = _0x32bb8f[_0x2fffbe(0x505)]() - _0x1bf768['getTime']();
                    window[_0x2fffbe(0x5c9)](function() {
                        const _0x270322 = _0x2fffbe;
                        let _0xfb500 = new Date(),
                            _0xba4cca = _0xfb500[_0x270322(0x505)]() - _0x1bf768['getTime']();
                        console[_0x270322(0x533)]('delay\x20between\x20requests\x20is:\x20' + _0xba4cca + _0x270322(0x40c)), _0x51c975(_0x3373fb);
                    }, 0xc8 - _0x38ea25);
                });
            } else {
                UI[_0x3d1583(0x5ea)]('compressing\x20database,\x20wait\x20few\x20seconds', 0x1388), console[_0x3d1583(0x533)](_0x3d1583(0x26c));
                let [_0x109cac, _0x2f9fc7, _0xb0b1a6, _0x40cf18] = await Promise['all']([readFileDropbox(filename_reports), readFileDropbox(filename_status_upload), getInfoVillages(), readFileDropbox(filename_incomings)])['catch'](_0x50fa3f => {
                    alert(_0x50fa3f);
                });
                try {
                    let _0x189efe = await decompress(await _0x109cac[_0x3d1583(0x4a5)](), 'gzip');
                    _0x109cac = new Map(JSON['parse'](_0x189efe));
                } catch (_0x5893d4) {
                    console[_0x3d1583(0x533)](_0x3d1583(0x2ba)), _0x109cac = new Map();
                }
                if (await localBase[_0x3d1583(0x520)](game_data['world'] + _0x3d1583(0x5b3)) != undefined) try {
                    let _0x58ee06 = base64ToBlob(await localBase[_0x3d1583(0x520)](game_data[_0x3d1583(0x429)] + _0x3d1583(0x5b3))),
                        _0x5226af = await decompress(await _0x58ee06[_0x3d1583(0x4a5)](), _0x3d1583(0x59f)),
                        _0x2f28ab = new Map(JSON[_0x3d1583(0x1a6)](_0x5226af));
                    console[_0x3d1583(0x533)](_0x3d1583(0x282), _0x2f28ab), _0x109cac = new Map([..._0x2f28ab, ..._0x109cac]);
                } catch (_0x4bd43b) {
                    let _0xe06902 = new Map(JSON['parse'](lzw_decode(await localBase[_0x3d1583(0x520)](game_data[_0x3d1583(0x429)] + _0x3d1583(0x5b3)))));
                    _0x109cac = new Map([..._0xe06902, ..._0x109cac]);
                }
                try {
                    let _0x3b5de5 = await decompress(await _0x40cf18[_0x3d1583(0x4a5)](), _0x3d1583(0x59f));
                    _0x40cf18 = new Map(JSON[_0x3d1583(0x1a6)](_0x3b5de5));
                } catch (_0x215a8) {
                    _0x40cf18 = new Map();
                }
                if (await localBase['getItem'](game_data[_0x3d1583(0x429)] + _0x3d1583(0x3f9)) != undefined) try {
                    let _0x13ae84 = base64ToBlob(await localBase[_0x3d1583(0x520)](game_data['world'] + _0x3d1583(0x3f9))),
                        _0x1e10a9 = await decompress(await _0x13ae84[_0x3d1583(0x4a5)](), _0x3d1583(0x59f)),
                        _0x12eef6 = new Map(JSON[_0x3d1583(0x1a6)](_0x1e10a9));
                    _0x40cf18 = new Map([..._0x12eef6, ..._0x40cf18]);
                } catch (_0x27a5e4) {
                    let _0x2e174a = new Map(JSON[_0x3d1583(0x1a6)](lzw_decode(await localBase['getItem'](game_data[_0x3d1583(0x429)] + _0x3d1583(0x3f9)))));
                    _0x40cf18 = new Map([..._0x2e174a, ..._0x40cf18]);
                }
                try {
                    let _0x1e1bea = await decompress(await _0x2f9fc7[_0x3d1583(0x4a5)](), _0x3d1583(0x59f));
                    _0x2f9fc7 = new Map(JSON['parse'](_0x1e1bea));
                } catch (_0x271d1c) {
                    console['log'](_0x3d1583(0x265)), _0x2f9fc7 = new Map();
                }
                let _0x3911ab = 0x0,
                    _0x193d3a = 0x0;
                _0x2b28e0[_0x3d1583(0x432)](function(_0x5b291f) {
                    const _0x3efb3d = _0x3d1583;
                    if (_0x109cac['has'](_0x5b291f[_0x3efb3d(0x351)])) {
                        let _0x1d199c = _0x109cac['get'](_0x5b291f[_0x3efb3d(0x351)]);
                        if (_0x5b291f[_0x3efb3d(0x351)] == _0x5b291f['reportInfo'][_0x3efb3d(0x465)]) {
                            console[_0x3efb3d(0x533)]('update\x20for\x20offensive' && _0x5b291f[_0x3efb3d(0x424)][_0x3efb3d(0x47f)] != '?'), delete _0x5b291f[_0x3efb3d(0x424)][_0x3efb3d(0x5fd) + _0x5b291f[_0x3efb3d(0x351)]], delete _0x5b291f[_0x3efb3d(0x424)]['time_report_home_' + _0x5b291f[_0x3efb3d(0x351)]];
                            if (_0x5b291f[_0x3efb3d(0x424)][_0x3efb3d(0x47f)] == _0x3efb3d(0x42a)) console[_0x3efb3d(0x533)](_0x3efb3d(0x23f));
                            else {
                                console[_0x3efb3d(0x533)](_0x3efb3d(0x143));
                                let _0x340bf2 = new Date(_0x1d199c['time_report']),
                                    _0x47751 = new Date(_0x5b291f[_0x3efb3d(0x424)][_0x3efb3d(0x325)]);
                                console['log'](_0x47751 - _0x340bf2);
                                if (_0x47751 - _0x340bf2 < 0x30 * 0xe10 * 0x3e8 && _0x5b291f[_0x3efb3d(0x424)]['typeAttacker'] == _0x3efb3d(0x292)) console[_0x3efb3d(0x533)]('it\x20was\x20def_cat'), _0x109cac[_0x3efb3d(0x588)](_0x5b291f[_0x3efb3d(0x351)], {
                                    ..._0x1d199c,
                                    ..._0x5b291f[_0x3efb3d(0x424)]
                                }), _0x3911ab++;
                                else _0x47751 - _0x340bf2 >= 0x0 && (console[_0x3efb3d(0x533)](_0x3efb3d(0x189) + _0x5b291f[_0x3efb3d(0x351)] + _0x3efb3d(0x219)), _0x109cac[_0x3efb3d(0x588)](_0x5b291f[_0x3efb3d(0x351)], {
                                    ..._0x1d199c,
                                    ..._0x5b291f['reportInfo']
                                }), _0x3911ab++);
                            }
                        }
                        if (_0x5b291f[_0x3efb3d(0x351)] == _0x5b291f[_0x3efb3d(0x424)][_0x3efb3d(0x44c)] && _0x5b291f['reportInfo'][_0x3efb3d(0x40a)] != '?') {
                            console[_0x3efb3d(0x533)](_0x3efb3d(0x17e));
                            if (_0x5b291f['reportInfo'][_0x3efb3d(0x40a)] == _0x3efb3d(0x42a) || _0x5b291f['reportInfo'][_0x3efb3d(0x40a)] == _0x3efb3d(0x2fe)) {
                                console[_0x3efb3d(0x533)](_0x3efb3d(0x455) + _0x5b291f[_0x3efb3d(0x424)][_0x3efb3d(0x40a)] + _0x3efb3d(0x267));
                                let _0x54a695 = new Date(_0x1d199c['time_report']),
                                    _0x59ec10 = new Date(_0x5b291f['reportInfo'][_0x3efb3d(0x325)]);
                                _0x59ec10 - _0x54a695 >= 0x0 && (console[_0x3efb3d(0x533)]('update\x20coord:\x20' + _0x5b291f[_0x3efb3d(0x351)] + '\x20in\x20dropbox'), _0x1d199c[_0x3efb3d(0x5fd) + _0x5b291f[_0x3efb3d(0x351)]] = _0x5b291f[_0x3efb3d(0x424)][_0x3efb3d(0x5fd) + _0x5b291f[_0x3efb3d(0x351)]], _0x1d199c[_0x3efb3d(0x124) + _0x5b291f[_0x3efb3d(0x351)]] = _0x5b291f[_0x3efb3d(0x424)][_0x3efb3d(0x124) + _0x5b291f[_0x3efb3d(0x351)]], _0x109cac[_0x3efb3d(0x588)](_0x5b291f[_0x3efb3d(0x351)], _0x1d199c), _0x3911ab++);
                            } else {
                                console[_0x3efb3d(0x533)](_0x3efb3d(0x143));
                                let _0x21dcd5 = new Date(_0x1d199c[_0x3efb3d(0x325)]),
                                    _0x1958e4 = new Date(_0x5b291f[_0x3efb3d(0x424)][_0x3efb3d(0x325)]);
                                console['log'](_0x1958e4 - _0x21dcd5);
                                if (_0x1958e4 - _0x21dcd5 < 0x30 * 0xe10 * 0x3e8 && _0x5b291f[_0x3efb3d(0x424)][_0x3efb3d(0x40a)] == _0x3efb3d(0x292)) console[_0x3efb3d(0x533)]('it\x20was\x20def_cat'), _0x109cac['set'](_0x5b291f[_0x3efb3d(0x351)], {
                                    ..._0x1d199c,
                                    ..._0x5b291f[_0x3efb3d(0x424)]
                                }), _0x3911ab++;
                                else _0x1958e4 - _0x21dcd5 >= 0x0 && (console[_0x3efb3d(0x533)](_0x3efb3d(0x189) + _0x5b291f[_0x3efb3d(0x351)] + _0x3efb3d(0x219)), _0x109cac[_0x3efb3d(0x588)](_0x5b291f[_0x3efb3d(0x351)], {
                                    ..._0x1d199c,
                                    ..._0x5b291f['reportInfo']
                                }), _0x3911ab++);
                            }
                        }
                    } else {
                        if (_0x5b291f[_0x3efb3d(0x351)] == _0x5b291f[_0x3efb3d(0x424)]['coordAttacker'] && _0x5b291f[_0x3efb3d(0x424)]['typeAttacker'] != '?') delete _0x5b291f[_0x3efb3d(0x424)][_0x3efb3d(0x5fd) + _0x5b291f[_0x3efb3d(0x351)]], delete _0x5b291f[_0x3efb3d(0x424)][_0x3efb3d(0x124) + _0x5b291f[_0x3efb3d(0x351)]], console[_0x3efb3d(0x533)](_0x3efb3d(0x266)), _0x109cac[_0x3efb3d(0x588)](_0x5b291f[_0x3efb3d(0x351)], _0x5b291f[_0x3efb3d(0x424)]), _0x193d3a++;
                        else _0x5b291f['coord'] == _0x5b291f[_0x3efb3d(0x424)][_0x3efb3d(0x44c)] && _0x5b291f[_0x3efb3d(0x424)][_0x3efb3d(0x40a)] != '?' && (console[_0x3efb3d(0x533)](_0x3efb3d(0x266)), _0x5b291f[_0x3efb3d(0x424)][_0x3efb3d(0x40a)] == _0x3efb3d(0x2fe) && (_0x5b291f[_0x3efb3d(0x424)][_0x3efb3d(0x40a)] = '?'), _0x109cac[_0x3efb3d(0x588)](_0x5b291f[_0x3efb3d(0x351)], _0x5b291f[_0x3efb3d(0x424)]), _0x193d3a++);
                    }
                }), console[_0x3d1583(0x533)](_0x3d1583(0x2b4), _0x109cac);
                let _0x1a6ffd = 0x0,
                    _0x273732 = 0x0,
                    _0xfbeb80 = 0x0,
                    _0x4fdf8a = 0x0;
                Array[_0x3d1583(0x2e2)](_0x109cac[_0x3d1583(0x2f0)]())[_0x3d1583(0x432)](_0x38f04d => {
                    const _0x844fa = _0x3d1583;
                    try {
                        let _0x5dc794 = _0x109cac[_0x844fa(0x18a)](_0x38f04d),
                            _0x3b8d61 = _0x293ea6['get'](_0x38f04d);
                        if (_0x5dc794[_0x844fa(0x325)] == 0x0) {
                            let _0x1d636e = document[_0x844fa(0x36b)](_0x844fa(0x4d8))['innerText'],
                                _0x30d557 = document[_0x844fa(0x36b)](_0x844fa(0x239))[_0x844fa(0x5ad)][_0x844fa(0x1c8)]('/'),
                                _0x39a6ae = ['Jan', _0x844fa(0x2ed), _0x844fa(0x59a), _0x844fa(0x489), 'May', _0x844fa(0x289), _0x844fa(0x464), _0x844fa(0x360), _0x844fa(0x1a7), _0x844fa(0x2de), _0x844fa(0x1e1), _0x844fa(0x17d)];
                            _0x5dc794[_0x844fa(0x325)] = _0x39a6ae[parseInt(_0x30d557[0x1]) - 0x1] + '\x20' + _0x30d557[0x0] + ',\x20' + _0x30d557[0x2] + '\x20' + _0x1d636e + ':000', _0x109cac['set'](_0x38f04d, _0x5dc794);
                        }
                        let _0x32db4e = _0x844fa(0x124);
                        _0x32db4e = _0x32db4e[_0x844fa(0x38b)]();
                        const _0xa44842 = Object['keys'](_0x5dc794),
                            _0x456cf4 = _0xa44842[_0x844fa(0x268)](_0x4d4c2a => _0x4d4c2a['toLowerCase']()['includes'](_0x32db4e));
                        if (_0x5dc794[_0x456cf4] == 0x0) {
                            let _0x543fef = document[_0x844fa(0x36b)](_0x844fa(0x4d8))[_0x844fa(0x5ad)],
                                _0x5e52c5 = document['getElementById']('serverDate')['innerText'][_0x844fa(0x1c8)]('/'),
                                _0x201270 = [_0x844fa(0x57b), _0x844fa(0x2ed), 'Mar', _0x844fa(0x489), _0x844fa(0x4d4), _0x844fa(0x289), _0x844fa(0x464), _0x844fa(0x360), _0x844fa(0x1a7), _0x844fa(0x2de), 'Nov', _0x844fa(0x17d)];
                            _0x5dc794[_0x456cf4] = _0x201270[parseInt(_0x5e52c5[0x1]) - 0x1] + '\x20' + _0x5e52c5[0x0] + ',\x20' + _0x5e52c5[0x2] + '\x20' + _0x543fef + ':000', _0x109cac[_0x844fa(0x588)](_0x38f04d, _0x5dc794);
                        }
                        _0xb0b1a6[_0x844fa(0x18a)](_0x38f04d) == undefined && _0x109cac['delete'](_0x38f04d);
                        if (_0x38f04d == _0x5dc794[_0x844fa(0x465)]) {
                            if (tribemates[_0x844fa(0x25b)](_0x5dc794[_0x844fa(0x616)][_0x844fa(0x38b)]()) || _0x5dc794[_0x844fa(0x616)][_0x844fa(0x38b)]() != _0x3b8d61[_0x844fa(0x578)][_0x844fa(0x38b)]()) _0x109cac[_0x844fa(0x152)](_0x38f04d), console[_0x844fa(0x533)]('delete\x20coord\x20' + _0x38f04d + _0x844fa(0x144) + _0x5dc794['nameAttacker'][_0x844fa(0x38b)]() + '\x20!=\x20new\x20owner:' + _0x3b8d61[_0x844fa(0x578)][_0x844fa(0x38b)]() + _0x844fa(0x36a)), _0x1a6ffd++;
                            else _0x5dc794['typeAttacker'] == '?' && (_0x109cac[_0x844fa(0x152)](_0x38f04d), _0xfbeb80++);
                        } else {
                            if (_0x38f04d == _0x5dc794[_0x844fa(0x44c)]) {
                                if (tribemates[_0x844fa(0x25b)](_0x5dc794[_0x844fa(0x4e1)]['toLowerCase']()) || _0x5dc794[_0x844fa(0x4e1)]['toLowerCase']() != _0x3b8d61[_0x844fa(0x578)][_0x844fa(0x38b)]()) _0x109cac[_0x844fa(0x152)](_0x38f04d), _0x273732++, console[_0x844fa(0x533)](_0x844fa(0x64b) + _0x38f04d + _0x844fa(0x144) + _0x5dc794[_0x844fa(0x4e1)][_0x844fa(0x38b)]() + _0x844fa(0x163) + _0x3b8d61['playerName'][_0x844fa(0x38b)]() + '\x20(def\x20report)');
                                else _0x5dc794[_0x844fa(0x40a)] == '?' && (_0x109cac[_0x844fa(0x152)](_0x38f04d), _0x4fdf8a++);
                            }
                        }
                    } catch (_0x464c5d) {}
                }), console['log'](_0x3d1583(0x51f), _0x1a6ffd), console[_0x3d1583(0x533)](_0x3d1583(0x3c8), _0x273732), console['log'](_0x3d1583(0x33c), _0xfbeb80), console[_0x3d1583(0x533)](_0x3d1583(0x1c3), _0x4fdf8a), console[_0x3d1583(0x533)](_0x3d1583(0x46a)), console[_0x3d1583(0x533)](_0x109cac), console['log']('list_data_reports'), console[_0x3d1583(0x533)](_0x2b28e0), console['log'](_0x3d1583(0x29f), _0x378b8f), _0x378b8f[_0x3d1583(0x432)](_0x157725 => {
                    const _0x3f9f70 = _0x3d1583;
                    console[_0x3f9f70(0x533)](_0x157725['coord_off']);
                    if (_0x40cf18[_0x3f9f70(0x4d7)](_0x157725[_0x3f9f70(0x15a)])) {
                        let _0x390a32 = _0x40cf18[_0x3f9f70(0x18a)](_0x157725[_0x3f9f70(0x15a)]);
                        for (let _0x4cffa4 = 0x0; _0x4cffa4 < _0x390a32[_0x3f9f70(0x5d6)]; _0x4cffa4++) {
                            if (_0x390a32[_0x4cffa4][_0x3f9f70(0x15a)][_0x3f9f70(0x26b)]() == _0x157725[_0x3f9f70(0x15a)][_0x3f9f70(0x26b)]() && _0x390a32[_0x4cffa4][_0x3f9f70(0x1ab)][_0x3f9f70(0x26b)]() == _0x157725[_0x3f9f70(0x341)]['trim']() && _0x157725['date_launch'][_0x3f9f70(0x26b)]() == _0x390a32[_0x4cffa4]['date_launch'][_0x3f9f70(0x26b)]()) {
                                console[_0x3f9f70(0x533)](_0x3f9f70(0x43e)), _0x390a32[_0x4cffa4][_0x3f9f70(0x136)] = _0x157725[_0x3f9f70(0x4fc)], _0x40cf18[_0x3f9f70(0x588)](_0x157725[_0x3f9f70(0x15a)], _0x390a32), console['log'](_0x3f9f70(0x361));
                                break;
                            }
                        }
                    }
                });
                let _0x57a147 = document[_0x3d1583(0x36b)](_0x3d1583(0x4d8))[_0x3d1583(0x5ad)],
                    _0x38049a = document[_0x3d1583(0x36b)]('serverDate')[_0x3d1583(0x5ad)][_0x3d1583(0x1c8)]('/');
                _0x38049a = _0x38049a[0x1] + '/' + _0x38049a[0x0] + '/' + _0x38049a[0x2];
                let _0x248a9d = _0x38049a + '\x20' + _0x57a147;
                console[_0x3d1583(0x533)](_0x248a9d);
                let _0x215295 = {
                    'name': game_data[_0x3d1583(0x1a4)][_0x3d1583(0x4b8)],
                    'report_date': _0x248a9d
                };
                if (_0x2f9fc7[_0x3d1583(0x4d7)](game_data[_0x3d1583(0x1a4)]['id']['toString']())) {
                    let _0x2a64da = _0x2f9fc7[_0x3d1583(0x18a)](game_data[_0x3d1583(0x1a4)]['id'][_0x3d1583(0x29a)]());
                    _0x2f9fc7[_0x3d1583(0x588)](game_data[_0x3d1583(0x1a4)]['id']['toString'](), {
                        ..._0x2a64da,
                        ..._0x215295
                    });
                } else _0x2f9fc7[_0x3d1583(0x588)](game_data[_0x3d1583(0x1a4)]['id']['toString'](), _0x215295);
                let _0x2c4773 = new Date()[_0x3d1583(0x505)]();
                var _0x4a760c = new Date()['getTime'](),
                    _0x1c936e = JSON[_0x3d1583(0x199)](Array[_0x3d1583(0x2e2)](_0x109cac[_0x3d1583(0x434)]())),
                    _0x3ed4f1 = _0x1c936e[_0x3d1583(0x5d6)];
                let _0x23c841 = formatBytes(new TextEncoder()[_0x3d1583(0x3bf)](_0x1c936e)['length']),
                    _0x267491 = await compress(_0x1c936e, _0x3d1583(0x59f)),
                    _0x29bd65 = await blobToBase64(_0x267491);
                var _0x3a5faf = _0x267491[_0x3d1583(0x441)],
                    _0xdf64cf = new Date()[_0x3d1583(0x505)]();
                console[_0x3d1583(0x533)](_0x3d1583(0x4e5)), console['log'](_0x109cac), console[_0x3d1583(0x533)](_0x3d1583(0x381) + (_0xdf64cf - _0x4a760c)), console[_0x3d1583(0x533)]('length\x20before:\x20' + _0x3ed4f1 + '\x20length\x20after\x20compression:\x20' + _0x3a5faf), console['log']('compression\x20factor:\x20' + _0x3ed4f1 / _0x3a5faf);
                let _0x1a3bf1 = JSON[_0x3d1583(0x199)](Array[_0x3d1583(0x2e2)](_0x2f9fc7[_0x3d1583(0x434)]())),
                    _0x4d081d = await compress(_0x1a3bf1, _0x3d1583(0x59f));
                await localBase[_0x3d1583(0x1d4)](game_data['world'] + _0x3d1583(0x5b3), _0x29bd65);
                let _0x5041c7 = await uploadFile(_0x267491, filename_reports, dropboxToken)[_0x3d1583(0x198)](_0x346aad => alert(_0x346aad)),
                    _0x1e60bf = await uploadFile(_0x4d081d, filename_status_upload, dropboxToken)[_0x3d1583(0x198)](_0x5a8a18 => alert(_0x5a8a18));
                var _0x4a760c = new Date()[_0x3d1583(0x505)]();
                _0x1c936e = JSON[_0x3d1583(0x199)](Array['from'](_0x40cf18[_0x3d1583(0x434)]())), _0x267491 = await compress(_0x1c936e, _0x3d1583(0x59f)), _0x29bd65 = await blobToBase64(_0x267491);
                var _0xdf64cf = new Date()['getTime']();
                console['log'](_0x3d1583(0x15e) + (_0xdf64cf - _0x4a760c)), await localBase[_0x3d1583(0x1d4)](game_data[_0x3d1583(0x429)] + 'incomings', _0x29bd65), _0x5041c7 = await uploadFile(_0x267491, filename_incomings, dropboxToken);
                if (_0x5041c7 == 'succes') {
                    let _0x5a4d69 = JSON[_0x3d1583(0x199)](Array[_0x3d1583(0x2e2)](_0x28713a['entries']())),
                        _0x5f4f2b = await compress(_0x5a4d69, _0x3d1583(0x59f)),
                        _0x182d00 = await blobToBase64(_0x5f4f2b);
                    await localBase['setItem'](game_data[_0x3d1583(0x429)] + _0x3d1583(0x2f4), _0x182d00), await uploadFile(_0x5f4f2b, filename_history_upload, dropboxToken)[_0x3d1583(0x198)](_0x156af1 => alert(_0x156af1));
                    let _0x408250 = new Date()['getTime'](),
                        _0x3c54a7 = Math[_0x3d1583(0x510)]((_0x408250 - _0x2c4773) / 0x3e8 * 0x64) / 0x64;
                    document[_0x3d1583(0x36b)](_0x3d1583(0x5c7))[_0x3d1583(0x5ad)] = _0x4555c2 + _0x3d1583(0x56a), UI[_0x3d1583(0x5ea)](_0x3d1583(0x56e) + _0x3c54a7 + _0x3d1583(0x210) + _0x3911ab + '</b>\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reports\x20Added:\x20<b>' + _0x193d3a + _0x3d1583(0x57a) + _0x109cac[_0x3d1583(0x441)] + '\x20</b>\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Size\x20DB:\x20<b>' + _0x23c841 + _0x3d1583(0x22b), 0x2710), _0x1cc79e({
                        'totalTimeUpload': _0x3c54a7,
                        'status': _0x3d1583(0x4f3)
                    });
                } else _0x3e23e5(_0x3d1583(0x395));
            }
        }
        _0x51c975(_0x3373fb);
    });
}
window.uploadReports=uploadReports;
function compress(_0x1c4d6a, _0x3e4b9d) {
    const _0x1ea077 = _0x555ef8,
        _0x4971ae = new TextEncoder()[_0x1ea077(0x3bf)](_0x1c4d6a),
        _0x123d71 = new CompressionStream(_0x3e4b9d),
        _0x791294 = _0x123d71[_0x1ea077(0x32d)][_0x1ea077(0x3f5)]();
    return _0x791294[_0x1ea077(0x4bd)](_0x4971ae), _0x791294[_0x1ea077(0x575)](), new Response(_0x123d71[_0x1ea077(0x2b6)])['blob']();
}

function decompress(_0x26ec10, _0xbee7d4) {
    const _0x9575d1 = _0x555ef8,
        _0x35e591 = new DecompressionStream(_0xbee7d4),
        _0x4ee707 = _0x35e591['writable'][_0x9575d1(0x3f5)]();
    return _0x4ee707[_0x9575d1(0x4bd)](_0x26ec10), _0x4ee707[_0x9575d1(0x575)](), new Response(_0x35e591[_0x9575d1(0x2b6)])[_0x9575d1(0x4a5)]()['then'](function(_0x13a155) {
        return new TextDecoder()['decode'](_0x13a155);
    });
}

function blobToBase64(_0x24e851) {
    return new Promise((_0x232b85, _0x56f916) => {
        const _0x4695ea = _0x2f7d,
            _0x1c4b5d = new FileReader();
        _0x1c4b5d['onload'] = () => {
            const _0x47b155 = _0x2f7d,
                _0x58d1ef = _0x1c4b5d[_0x47b155(0x294)][_0x47b155(0x1c8)](',')[0x1];
            _0x232b85(_0x58d1ef);
        }, _0x1c4b5d[_0x4695ea(0x2a8)] = _0x56f916, _0x1c4b5d['readAsDataURL'](_0x24e851);
    });
}

function formatBytes(_0x718453, _0x594463 = 0x2) {
    const _0x57d60f = _0x555ef8;
    if (!+_0x718453) return _0x57d60f(0x16e);
    const _0x5f15d5 = 0x400,
        _0x57399a = _0x594463 < 0x0 ? 0x0 : _0x594463,
        _0x4166f6 = ['Bytes', 'KB', 'MB', 'GB', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb'],
        _0x231b89 = Math[_0x57d60f(0x14e)](Math[_0x57d60f(0x533)](_0x718453) / Math[_0x57d60f(0x533)](_0x5f15d5));
    return parseFloat((_0x718453 / Math[_0x57d60f(0x504)](_0x5f15d5, _0x231b89))['toFixed'](_0x57399a)) + '\x20' + _0x4166f6[_0x231b89];
}

function base64ToBlob(_0x52b0bd, _0x242492 = _0x555ef8(0x45b)) {
    const _0x3f936c = _0x555ef8,
        _0x257ea0 = atob(_0x52b0bd),
        _0x377d04 = new Array(_0x257ea0['length']);
    for (let _0x4bd46c = 0x0; _0x4bd46c < _0x257ea0[_0x3f936c(0x5d6)]; _0x4bd46c++) {
        _0x377d04[_0x4bd46c] = _0x257ea0[_0x3f936c(0x3fe)](_0x4bd46c);
    }
    const _0x8f852f = new Uint8Array(_0x377d04);
    return new Blob([_0x8f852f], {
        'type': _0x242492
    });
}

function getLinks(_0xd2ad9b, _0x2d401a) {
    return new Promise(async (_0x1e6d62, _0x250515) => {
        const _0x2c19e8 = _0x2f7d;
        let _0xb7f976 = window[_0x2c19e8(0x185)]['href'];
        if (_0xb7f976[_0x2c19e8(0x25b)](_0x2c19e8(0x5ab))) _0xd2ad9b = ![];
        _0xd2ad9b && (_0xb7f976 = game_data[_0x2c19e8(0x2bc)] + _0x2c19e8(0x642));
        let _0x3ba334 = await ajaxGet(_0xb7f976);
        const _0x403069 = new DOMParser(),
            _0x167e62 = _0x403069[_0x2c19e8(0x32e)](_0x3ba334, _0x2c19e8(0x2d4));
        let _0x15ddc9 = [];
        if ($(_0x167e62)[_0x2c19e8(0x268)](_0x2c19e8(0x481))[_0x2c19e8(0x34c)]()[_0x2c19e8(0x268)](_0x2c19e8(0x5c4))[_0x2c19e8(0x5d6)] > 0x0) Array[_0x2c19e8(0x2e2)]($(_0x167e62)['find'](_0x2c19e8(0x481))[_0x2c19e8(0x34c)]()[_0x2c19e8(0x268)](_0x2c19e8(0x5c4))[_0x2c19e8(0x268)]('option'))[_0x2c19e8(0x432)](function(_0x508ea8) {
            const _0x454b56 = _0x2c19e8;
            _0x15ddc9['push'](_0x508ea8[_0x454b56(0x492)]);
        }), _0x15ddc9[_0x2c19e8(0x51a)]();
        else {
            if (_0x167e62[_0x2c19e8(0x612)](_0x2c19e8(0x13b))['length'] > 0x0) {
                let _0x6ba3f7 = 0x0,
                    _0x166308 = parseInt($(_0x167e62)[_0x2c19e8(0x268)](_0x2c19e8(0x589))['val']()),
                    _0x321fe7 = _0x167e62[_0x2c19e8(0x612)](_0x2c19e8(0x13b))[_0x2c19e8(0x5d6)] + 0x1;
                for (let _0x286312 = 0x0; _0x286312 < _0x321fe7; _0x286312++) {
                    let _0xd4c696 = game_data[_0x2c19e8(0x2bc)] + _0x2c19e8(0x241) + _0x6ba3f7;
                    _0x15ddc9['push'](_0xd4c696), _0x6ba3f7 += _0x166308;
                }
            } else _0x15ddc9[_0x2c19e8(0x1fa)](_0xb7f976);
        }
        _0x15ddc9 = _0x15ddc9[_0x2c19e8(0x560)](), console[_0x2c19e8(0x533)](_0x15ddc9);
        let _0x176230 = [];
        const _0x240a8e = async () => {
            const _0xbfef32 = _0x2c19e8;
            console['log']('Starting...');
            for (let _0x53e96e = 0x0; _0x53e96e < _0x15ddc9[_0xbfef32(0x5d6)]; _0x53e96e++) {
                let _0x41dceb = await ajaxGet(_0x15ddc9[_0x53e96e]);
                const _0x2f190b = new DOMParser(),
                    _0x72a87d = _0x2f190b[_0xbfef32(0x32e)](_0x41dceb, _0xbfef32(0x2d4));
                let _0x135415 = _0x72a87d[_0xbfef32(0x36b)](_0xbfef32(0x159))[_0xbfef32(0x252)][_0xbfef32(0x3c5)],
                    _0x24ad49 = _0x72a87d[_0xbfef32(0x36b)](_0xbfef32(0x239))[_0xbfef32(0x5ad)]['split']('/')[0x2];
                for (let _0x4d04af = 0x1; _0x4d04af < _0x135415[_0xbfef32(0x5d6)] - 0x1; _0x4d04af++) {
                    let _0x9d7976 = _0x135415[_0x4d04af][_0xbfef32(0x3c5)][0x2][_0xbfef32(0x5ad)];
                    if (_0x9d7976['includes'](_0xbfef32(0x57b))) _0x9d7976 = _0x9d7976[_0xbfef32(0x632)](_0xbfef32(0x57b), '01');
                    let _0xcf67ae = new Date(_0x24ad49 + '\x20' + _0x9d7976),
                        _0x8c73e6 = new Date();
                    if (Math['abs'](_0x8c73e6 - _0xcf67ae) < 0x7 * 0x18 * 0xe10 * 0x3e8) {
                        let _0x29fb43 = _0x135415[_0x4d04af][_0xbfef32(0x3c5)][0x1][_0xbfef32(0x3c5)][0x0]['children']['length'];
                        if (_0x29fb43 > 0x0) {
                            let _0x254a2b = {
                                'id': _0x135415[_0x4d04af][_0xbfef32(0x14f)]('a')[0x0][_0xbfef32(0x188)](_0xbfef32(0x2b3)),
                                'href': _0x135415[_0x4d04af][_0xbfef32(0x14f)]('a')[0x0]['href']
                            };
                            if (!_0x2d401a[_0xbfef32(0x4d7)](parseInt(_0x254a2b['id']))) _0x176230[_0xbfef32(0x1fa)](_0x254a2b);
                        }
                    }
                }
                UI[_0xbfef32(0x5ea)]('get\x20link\x20page\x20' + (_0x53e96e + 0x1) + '/' + _0x15ddc9[_0xbfef32(0x5d6)]);
            }
        };
        await _0x240a8e(), console[_0x2c19e8(0x533)]('Done!'), _0x1e6d62(_0x176230);
    });
}

function ajaxGet(_0x43b659) {
    return new Promise((_0x602936, _0x5673da) => {
        const _0x48f8f1 = _0x2f7d;
        let _0x28dd23 = game_data['units'][_0x48f8f1(0x22c)]();
        _0x28dd23[_0x48f8f1(0x25b)](_0x48f8f1(0x592)) && _0x28dd23[_0x48f8f1(0x51a)]();
        let _0x17315a = new Date()[_0x48f8f1(0x505)]();
        $[_0x48f8f1(0x53b)]({
            'url': _0x43b659,
            'method': _0x48f8f1(0x18a),
            'success': _0x46f27e => {
                const _0xeb3605 = _0x48f8f1;
                let _0x220d18 = new Date()['getTime'](),
                    _0x5b44eb = _0x220d18 - _0x17315a;
                console[_0xeb3605(0x533)](_0xeb3605(0x5a3), _0x5b44eb), window[_0xeb3605(0x5c9)](() => {
                    _0x602936(_0x46f27e);
                }, 0xc8 - _0x5b44eb);
            },
            'error': _0x2a1b2d => {
                _0x5673da(_0x2a1b2d);
            }
        });
    });
}

function getDataReport(_0x3af102, _0x507a88) {
    const _0x1e9c1b = _0x555ef8;
    var _0x3a7468 = {},
        _0x90b6e4 = [],
        _0x5a904b = 0x2710,
        _0x27e0fa = {};
    try {
        if ($(_0x507a88)['find'](_0x1e9c1b(0x310))['length'] > 0x0) {
            var _0x2a3c5c = $(_0x507a88)[_0x1e9c1b(0x268)](_0x1e9c1b(0x310));
            if (_0x2a3c5c['text']()['includes'](_0x1e9c1b(0x34a)) || _0x2a3c5c['text']()['includes']('---')) return console['log'](_0x1e9c1b(0x2cf)), 0x0;
            var _0x1e7e7f = $(_0x507a88)[_0x1e9c1b(0x268)](_0x1e9c1b(0x1b6));
            if (_0x1e7e7f['text']()[_0x1e9c1b(0x25b)]('deleted') || _0x1e7e7f[_0x1e9c1b(0x2c0)]()[_0x1e9c1b(0x25b)](_0x1e9c1b(0x5ee))) return console[_0x1e9c1b(0x533)](_0x1e9c1b(0x2cf)), 0x0;
            var _0x323290 = _0x2a3c5c['find'](_0x1e9c1b(0x3f2)),
                _0x908fdd = _0x1e7e7f[_0x1e9c1b(0x268)](_0x1e9c1b(0x3f2)),
                _0x4f5927 = _0x323290[_0x1e9c1b(0x630)](_0x1e9c1b(0x148))[_0x1e9c1b(0x538)](/id=(\w+)/)[0x1],
                _0x4c5814 = _0x908fdd[_0x1e9c1b(0x630)](_0x1e9c1b(0x148))[_0x1e9c1b(0x538)](/id=(\w+)/)[0x1];
            _0x27e0fa[_0x1e9c1b(0x341)] = _0x4f5927, _0x27e0fa[_0x1e9c1b(0x3d9)] = _0x4c5814;
        }
        if (_0x507a88['getElementsByClassName'](_0x1e9c1b(0x595))[_0x1e9c1b(0x5d6)] > 0x1) {
            var _0x1afcb7 = _0x507a88['getElementsByClassName'](_0x1e9c1b(0x619))[0x0][_0x1e9c1b(0x156)][_0x1e9c1b(0x5ad)][_0x1e9c1b(0x26b)]();
            _0x27e0fa['attackingArmy'] = _0x2a3c5c[_0x1e9c1b(0x268)]('#attack_info_att_units\x20tr:nth-of-type(2)\x20.unit-item')[_0x1e9c1b(0x18a)]()[_0x1e9c1b(0x4e2)](_0x4db65f => {
                const _0x3828aa = _0x1e9c1b;
                return {
                    'type': $(_0x4db65f)[_0x3828aa(0x630)](_0x3828aa(0x607))[_0x3828aa(0x538)](/unit-item-([\w\-]+)/)[0x1],
                    'count': parseInt($(_0x4db65f)['text']()[_0x3828aa(0x26b)]())
                };
            }), _0x27e0fa[_0x1e9c1b(0x132)] = _0x2a3c5c['find'](_0x1e9c1b(0x4f2))[_0x1e9c1b(0x18a)]()[_0x1e9c1b(0x4e2)](_0x1200c0 => {
                const _0x5dee42 = _0x1e9c1b;
                return {
                    'type': $(_0x1200c0)[_0x5dee42(0x630)]('class')[_0x5dee42(0x538)](/unit-item-([\w\-]+)/)[0x1],
                    'count': parseInt($(_0x1200c0)[_0x5dee42(0x2c0)]()[_0x5dee42(0x26b)]())
                };
            }), _0x27e0fa['time_report'] = _0x1afcb7;
            var _0x48db08 = _0x507a88[_0x1e9c1b(0x612)]('vis')[0x3][_0x1e9c1b(0x4c5)],
                _0x199299 = _0x48db08['indexOf'](_0x1e9c1b(0x2cd));
            _0x48db08 = _0x48db08[_0x1e9c1b(0x2ab)](0x0, _0x199299);
            if (_0x27e0fa[_0x1e9c1b(0x325)] == 0x0) {
                let _0x26cb34 = _0x507a88[_0x1e9c1b(0x36b)](_0x1e9c1b(0x4d8))[_0x1e9c1b(0x5ad)],
                    _0x2a6619 = _0x507a88[_0x1e9c1b(0x36b)]('serverDate')[_0x1e9c1b(0x5ad)][_0x1e9c1b(0x1c8)]('/'),
                    _0x4ce741 = [_0x1e9c1b(0x57b), 'Feb', _0x1e9c1b(0x59a), _0x1e9c1b(0x489), _0x1e9c1b(0x4d4), 'Jun', _0x1e9c1b(0x464), 'Aug', 'Sep', _0x1e9c1b(0x2de), _0x1e9c1b(0x1e1), _0x1e9c1b(0x17d)];
                _0x1afcb7 = _0x4ce741[parseInt(_0x2a6619[0x1]) - 0x1] + '\x20' + _0x2a6619[0x0] + ',\x20' + _0x2a6619[0x2] + '\x20' + _0x26cb34 + ':000', _0x27e0fa['time_report'] = _0x1afcb7;
            }
            var _0x37e0be = _0x507a88['getElementById']('attack_info_att')[_0x1e9c1b(0x3c5)][0x0][_0x1e9c1b(0x3c5)][0x0][_0x1e9c1b(0x3c5)][0x1][_0x1e9c1b(0x5ad)],
                _0x41a62e = _0x507a88[_0x1e9c1b(0x612)](_0x1e9c1b(0x13d))[0x0][_0x1e9c1b(0x5ad)][_0x1e9c1b(0x538)](/\d+\|\d+/)[0x0],
                _0x4afedd = _0x507a88[_0x1e9c1b(0x36b)]('attack_info_def')[_0x1e9c1b(0x3c5)][0x0]['children'][0x0][_0x1e9c1b(0x3c5)][0x1][_0x1e9c1b(0x5ad)],
                _0x2c21a8 = _0x507a88[_0x1e9c1b(0x612)](_0x1e9c1b(0x13d))[0x1][_0x1e9c1b(0x5ad)][_0x1e9c1b(0x538)](/\d+\|\d+/)[0x0];
            _0x27e0fa[_0x1e9c1b(0x616)] = _0x37e0be, _0x27e0fa[_0x1e9c1b(0x465)] = _0x41a62e, _0x27e0fa['nameDefender'] = _0x4afedd, _0x27e0fa['coordDefender'] = _0x2c21a8;
            if (_0x27e0fa['attackingArmy'][0x3][_0x1e9c1b(0x15c)] == _0x1e9c1b(0x487)) var _0x5f1572 = _0x27e0fa[_0x1e9c1b(0x12f)][0x0]['count'],
                _0x47a503 = _0x27e0fa['attackingArmy'][0x1][_0x1e9c1b(0x4b4)],
                _0x139b3d = _0x27e0fa[_0x1e9c1b(0x12f)][0x2][_0x1e9c1b(0x4b4)],
                _0x20988a = _0x27e0fa[_0x1e9c1b(0x12f)][0x3]['count'],
                _0x2adb41 = _0x27e0fa[_0x1e9c1b(0x12f)][0x4]['count'] * 0x2,
                _0x200c46 = _0x27e0fa[_0x1e9c1b(0x12f)][0x5]['count'] * 0x4,
                _0x44a431 = _0x27e0fa['attackingArmy'][0x7]['count'] * 0x6,
                _0x44cc50 = _0x27e0fa['attackingArmy'][0x8]['count'] * 0x5,
                _0x5c5c99 = _0x27e0fa[_0x1e9c1b(0x12f)][0x9][_0x1e9c1b(0x4b4)] * 0x8,
                _0x2482e1 = parseInt(_0x507a88[_0x1e9c1b(0x612)]('unit-item\x20unit-item-snob')[0x0]['innerText']) * 0x64,
                _0x1f04ed = _0x27e0fa['attackingArmyLosses'][0x0]['count'],
                _0x43afda = _0x27e0fa[_0x1e9c1b(0x132)][0x1][_0x1e9c1b(0x4b4)],
                _0x4c7611 = _0x27e0fa[_0x1e9c1b(0x132)][0x2][_0x1e9c1b(0x4b4)],
                _0x5c3a91 = _0x27e0fa['attackingArmyLosses'][0x3][_0x1e9c1b(0x4b4)],
                _0x2c6425 = _0x27e0fa[_0x1e9c1b(0x132)][0x4][_0x1e9c1b(0x4b4)] * 0x2,
                _0x17416d = _0x27e0fa[_0x1e9c1b(0x132)][0x5][_0x1e9c1b(0x4b4)] * 0x4,
                _0x266d68 = _0x27e0fa[_0x1e9c1b(0x132)][0x7][_0x1e9c1b(0x4b4)] * 0x6,
                _0x468cd0 = _0x27e0fa['attackingArmyLosses'][0x8][_0x1e9c1b(0x4b4)] * 0x5,
                _0x21f0ed = _0x27e0fa[_0x1e9c1b(0x132)][0x9][_0x1e9c1b(0x4b4)] * 0x8;
            else var _0x5f1572 = _0x27e0fa['attackingArmy'][0x0][_0x1e9c1b(0x4b4)],
                _0x47a503 = _0x27e0fa[_0x1e9c1b(0x12f)][0x1][_0x1e9c1b(0x4b4)],
                _0x139b3d = _0x27e0fa[_0x1e9c1b(0x12f)][0x2][_0x1e9c1b(0x4b4)],
                _0x2adb41 = _0x27e0fa['attackingArmy'][0x3]['count'] * 0x2,
                _0x200c46 = _0x27e0fa[_0x1e9c1b(0x12f)][0x4][_0x1e9c1b(0x4b4)] * 0x4,
                _0x44a431 = _0x27e0fa[_0x1e9c1b(0x12f)][0x5]['count'] * 0x6,
                _0x44cc50 = _0x27e0fa[_0x1e9c1b(0x12f)][0x6][_0x1e9c1b(0x4b4)] * 0x5,
                _0x5c5c99 = _0x27e0fa['attackingArmy'][0x7]['count'] * 0x8,
                _0x2482e1 = parseInt(_0x507a88['getElementsByClassName'](_0x1e9c1b(0x14d))[0x0][_0x1e9c1b(0x5ad)]) * 0x64,
                _0x20988a = 0x0,
                _0x1f04ed = _0x27e0fa['attackingArmyLosses'][0x0][_0x1e9c1b(0x4b4)],
                _0x43afda = _0x27e0fa['attackingArmyLosses'][0x1]['count'],
                _0x4c7611 = _0x27e0fa['attackingArmyLosses'][0x2][_0x1e9c1b(0x4b4)],
                _0x2c6425 = _0x27e0fa[_0x1e9c1b(0x132)][0x3][_0x1e9c1b(0x4b4)] * 0x2,
                _0x17416d = _0x27e0fa[_0x1e9c1b(0x132)][0x4][_0x1e9c1b(0x4b4)] * 0x4,
                _0x266d68 = _0x27e0fa[_0x1e9c1b(0x132)][0x5][_0x1e9c1b(0x4b4)] * 0x6,
                _0x468cd0 = _0x27e0fa[_0x1e9c1b(0x132)][0x6][_0x1e9c1b(0x4b4)] * 0x5,
                _0x21f0ed = _0x27e0fa[_0x1e9c1b(0x132)][0x7]['count'] * 0x8;
            var _0x1069e7 = '?',
                _0x526113 = 0x0,
                _0x42c24c = 0x0,
                _0x24be7f = 0x0;
            if (_0x139b3d + _0x200c46 + _0x44cc50 + _0x5c5c99 >= _0x5a904b) {
                _0x1069e7 = 'off', _0x526113 = _0x139b3d - _0x4c7611 + (_0x200c46 - _0x17416d) + (_0x44cc50 - _0x468cd0);
                if (_0x44cc50 > 0x0 && _0x2482e1 == 0x0 && _0x139b3d >= 0x0) {
                    _0x42c24c = _0x139b3d + _0x200c46 + _0x44cc50;
                    let _0x33cb31 = ramSpeed * calcDistance(_0x41a62e, _0x2c21a8);
                    _0x24be7f = new Date(_0x1afcb7)['getTime']() + _0x33cb31, _0x24be7f = new Date(_0x24be7f);
                    let _0x5249e8 = new Date(_0x24be7f)[_0x1e9c1b(0x286)]()[_0x1e9c1b(0x1c8)]('\x20')[_0x1e9c1b(0x22c)](0x1)[_0x1e9c1b(0x1e2)]('\x20');
                    _0x24be7f = _0x5249e8 + '\x20' + new Date(_0x24be7f)[_0x1e9c1b(0x255)]()[_0x1e9c1b(0x1c8)]('\x20')[0x0];
                } else {
                    if (_0x139b3d >= 0x0 && _0x2482e1 == 0x0) {
                        _0x42c24c = _0x139b3d + _0x200c46, time_attack = axeSpeed * calcDistance(_0x41a62e, _0x2c21a8), _0x24be7f = new Date(_0x1afcb7)[_0x1e9c1b(0x505)]() + time_attack, _0x24be7f = new Date(_0x24be7f);
                        let _0x181746 = new Date(_0x24be7f)['toDateString']()[_0x1e9c1b(0x1c8)]('\x20')['slice'](0x1)[_0x1e9c1b(0x1e2)]('\x20');
                        _0x24be7f = _0x181746 + '\x20' + new Date(_0x24be7f)['toTimeString']()['split']('\x20')[0x0];
                    } else {
                        if (_0x139b3d >= 0x0 && _0x2482e1 > 0x0) {
                            _0x42c24c = _0x139b3d + _0x200c46 + _0x44cc50, time_attack = axeSpeed * calcDistance(_0x41a62e, _0x2c21a8), _0x24be7f = new Date(_0x1afcb7)[_0x1e9c1b(0x505)]() + time_attack, _0x24be7f = new Date(_0x24be7f);
                            let _0x147a52 = new Date(_0x24be7f)['toDateString']()[_0x1e9c1b(0x1c8)]('\x20')[_0x1e9c1b(0x22c)](0x1)[_0x1e9c1b(0x1e2)]('\x20');
                            _0x24be7f = _0x147a52 + '\x20' + new Date(_0x24be7f)[_0x1e9c1b(0x255)]()['split']('\x20')[0x0];
                        }
                    }
                }
            } else {
                if (_0x2adb41 > 0xfa0) _0x1069e7 = _0x1e9c1b(0x39f), _0x526113 = _0x2adb41 - _0x2c6425;
                else {
                    if (_0x139b3d + _0x200c46 + _0x44cc50 > 0x14 && _0x5f1572 + _0x47a503 + _0x20988a + _0x44a431 < 0xf) _0x1069e7 = _0x1e9c1b(0x42a);
                    else {
                        if (_0x139b3d + _0x200c46 + _0x44cc50 < 0xf && _0x5f1572 + _0x47a503 + _0x20988a + _0x44a431 > 0xf) _0x1069e7 = _0x1e9c1b(0x292);
                        else {
                            if (_0x2adb41 >= 0x320 && _0x139b3d + _0x200c46 + _0x44cc50 < 0x1f4 && _0x5f1572 + _0x47a503 + _0x20988a + _0x44a431 < 0x28) _0x1069e7 = _0x1e9c1b(0x435);
                            else _0x5f1572 + _0x47a503 + _0x20988a > 0x3e8 && (_0x1069e7 = 'def');
                        }
                    }
                }
            }
            if (_0x5c5c99 >= 0x32 * 0x8 && _0x1069e7 == _0x1e9c1b(0x292) || _0x5c5c99 >= 0x32 * 0x8 && _0x139b3d + _0x200c46 + _0x44cc50 < 0x14) {
                _0x1069e7 = _0x1e9c1b(0x4cf), _0x526113 = _0x5c5c99 - _0x21f0ed;
                if (_0x2482e1 == 0x0) {
                    _0x42c24c = _0x44a431 + _0x5c5c99, time_attack = ramSpeed * calcDistance(_0x41a62e, _0x2c21a8), _0x24be7f = new Date(_0x1afcb7)['getTime']() + time_attack, _0x24be7f = new Date(_0x24be7f);
                    let _0x5e6741 = new Date(_0x24be7f)[_0x1e9c1b(0x286)]()[_0x1e9c1b(0x1c8)]('\x20')[_0x1e9c1b(0x22c)](0x1)[_0x1e9c1b(0x1e2)]('\x20');
                    _0x24be7f = _0x5e6741 + '\x20' + new Date(_0x24be7f)['toTimeString']()[_0x1e9c1b(0x1c8)]('\x20')[0x0];
                }
            }
            _0x27e0fa[_0x1e9c1b(0x425)] = _0x24be7f, _0x27e0fa[_0x1e9c1b(0x17b)] = _0x42c24c, _0x27e0fa[_0x1e9c1b(0x47f)] = _0x1069e7, _0x27e0fa[_0x1e9c1b(0x4f7)] = _0x526113;
            var _0x109718 = 0x0,
                _0x6425a4 = '?';
            if (_0x507a88[_0x1e9c1b(0x612)](_0x1e9c1b(0x595))[_0x1e9c1b(0x5d6)] > 0x2) {
                _0x27e0fa[_0x1e9c1b(0x517)] = _0x1e7e7f[_0x1e9c1b(0x268)](_0x1e9c1b(0x32c))[_0x1e9c1b(0x18a)]()[_0x1e9c1b(0x4e2)](_0x3e63d8 => {
                    const _0x5b128f = _0x1e9c1b;
                    return {
                        'type': $(_0x3e63d8)[_0x5b128f(0x630)](_0x5b128f(0x607))[_0x5b128f(0x538)](/unit-item-([\w\-]+)/)[0x1],
                        'count': parseInt($(_0x3e63d8)[_0x5b128f(0x2c0)]()['trim']())
                    };
                }), _0x27e0fa[_0x1e9c1b(0x5db)] = _0x1e7e7f['find'](_0x1e9c1b(0x19c))[_0x1e9c1b(0x18a)]()['map'](_0x419286 => {
                    const _0x5a49c8 = _0x1e9c1b;
                    return {
                        'type': $(_0x419286)[_0x5a49c8(0x630)](_0x5a49c8(0x607))[_0x5a49c8(0x538)](/unit-item-([\w\-]+)/)[0x1],
                        'count': parseInt($(_0x419286)[_0x5a49c8(0x2c0)]()[_0x5a49c8(0x26b)]())
                    };
                });
                let _0x1565da = [];
                for (let _0x5cd6f7 = 0x0; _0x5cd6f7 < _0x27e0fa[_0x1e9c1b(0x517)][_0x1e9c1b(0x5d6)]; _0x5cd6f7++) {
                    _0x1565da[_0x1e9c1b(0x1fa)]({
                        'type': _0x27e0fa[_0x1e9c1b(0x517)][_0x5cd6f7][_0x1e9c1b(0x15c)],
                        'count': _0x27e0fa['defendingArmy'][_0x5cd6f7][_0x1e9c1b(0x4b4)] - _0x27e0fa[_0x1e9c1b(0x5db)][_0x5cd6f7]['count']
                    });
                }!_0x3af102['includes'](_0x4afedd[_0x1e9c1b(0x38b)]()) && (_0x27e0fa[_0x1e9c1b(0x5fd) + _0x2c21a8] = _0x1565da, _0x27e0fa[_0x1e9c1b(0x124) + _0x2c21a8] = _0x1afcb7);
                if (_0x27e0fa[_0x1e9c1b(0x517)][0x3][_0x1e9c1b(0x15c)] == _0x1e9c1b(0x487)) var _0x417662 = _0x27e0fa[_0x1e9c1b(0x517)][0x0][_0x1e9c1b(0x4b4)],
                    _0x162eaa = _0x27e0fa[_0x1e9c1b(0x517)][0x1][_0x1e9c1b(0x4b4)],
                    _0x486f61 = _0x27e0fa[_0x1e9c1b(0x517)][0x2][_0x1e9c1b(0x4b4)],
                    _0x1653f2 = _0x27e0fa[_0x1e9c1b(0x517)][0x3]['count'],
                    _0x5a535a = _0x27e0fa[_0x1e9c1b(0x517)][0x4]['count'] * 0x2,
                    _0x20500f = _0x27e0fa[_0x1e9c1b(0x517)][0x5][_0x1e9c1b(0x4b4)] * 0x4,
                    _0x1b162e = _0x27e0fa['defendingArmy'][0x7]['count'] * 0x6,
                    _0x2b8131 = _0x27e0fa['defendingArmy'][0x8][_0x1e9c1b(0x4b4)] * 0x5,
                    _0x3cbc7b = _0x27e0fa[_0x1e9c1b(0x517)][0x9]['count'] * 0x8,
                    _0x31b20e = _0x27e0fa[_0x1e9c1b(0x5db)][0x0][_0x1e9c1b(0x4b4)],
                    _0x37da81 = _0x27e0fa['defendingArmyLosses'][0x1][_0x1e9c1b(0x4b4)],
                    _0x19a003 = _0x27e0fa['defendingArmyLosses'][0x2][_0x1e9c1b(0x4b4)],
                    _0x395ae3 = _0x27e0fa[_0x1e9c1b(0x5db)][0x3][_0x1e9c1b(0x4b4)],
                    _0x222ad7 = _0x27e0fa[_0x1e9c1b(0x5db)][0x4][_0x1e9c1b(0x4b4)] * 0x2,
                    _0x4b81ce = _0x27e0fa[_0x1e9c1b(0x5db)][0x5]['count'] * 0x4,
                    _0x523185 = _0x27e0fa[_0x1e9c1b(0x5db)][0x7][_0x1e9c1b(0x4b4)] * 0x6,
                    _0xc959f3 = _0x27e0fa[_0x1e9c1b(0x5db)][0x8][_0x1e9c1b(0x4b4)] * 0x5,
                    _0x3d57df = _0x27e0fa[_0x1e9c1b(0x5db)][0x9][_0x1e9c1b(0x4b4)] * 0x8;
                else var _0x14c658 = _0x27e0fa['defendingArmy'][0x0][_0x1e9c1b(0x4b4)],
                    _0x162eaa = _0x27e0fa[_0x1e9c1b(0x517)][0x1]['count'],
                    _0x486f61 = _0x27e0fa[_0x1e9c1b(0x517)][0x2][_0x1e9c1b(0x4b4)],
                    _0x5a535a = _0x27e0fa[_0x1e9c1b(0x517)][0x3][_0x1e9c1b(0x4b4)] * 0x2,
                    _0x20500f = _0x27e0fa['defendingArmy'][0x4][_0x1e9c1b(0x4b4)] * 0x4,
                    _0x1b162e = _0x27e0fa[_0x1e9c1b(0x517)][0x5]['count'] * 0x6,
                    _0x2b8131 = _0x27e0fa[_0x1e9c1b(0x517)][0x6][_0x1e9c1b(0x4b4)] * 0x5,
                    _0x3cbc7b = _0x27e0fa['defendingArmy'][0x7][_0x1e9c1b(0x4b4)] * 0x8,
                    _0x1653f2 = 0x0,
                    _0x30ff7c = _0x27e0fa[_0x1e9c1b(0x5db)][0x0][_0x1e9c1b(0x4b4)],
                    _0x37da81 = _0x27e0fa[_0x1e9c1b(0x5db)][0x1][_0x1e9c1b(0x4b4)],
                    _0x19a003 = _0x27e0fa[_0x1e9c1b(0x5db)][0x2][_0x1e9c1b(0x4b4)],
                    _0x222ad7 = _0x27e0fa[_0x1e9c1b(0x5db)][0x3][_0x1e9c1b(0x4b4)] * 0x2,
                    _0x4b81ce = _0x27e0fa[_0x1e9c1b(0x5db)][0x4][_0x1e9c1b(0x4b4)] * 0x4,
                    _0x523185 = _0x27e0fa[_0x1e9c1b(0x5db)][0x5][_0x1e9c1b(0x4b4)] * 0x6,
                    _0xc959f3 = _0x27e0fa[_0x1e9c1b(0x5db)][0x6]['count'] * 0x5,
                    _0x3d57df = _0x27e0fa[_0x1e9c1b(0x5db)][0x7][_0x1e9c1b(0x4b4)] * 0x8,
                    _0x395ae3 = 0x0;
                _0x109718 = _0x486f61 - _0x19a003 + (_0x20500f - _0x4b81ce) + (_0x2b8131 - _0xc959f3);
                if (_0x486f61 + _0x20500f + _0x2b8131 + _0x3cbc7b >= _0x5a904b) _0x6425a4 = _0x1e9c1b(0x181);
                else _0x486f61 + _0x20500f + _0x2b8131 + _0x3cbc7b >= 0x1f4 ? _0x6425a4 = _0x1e9c1b(0x42a) : _0x6425a4 = _0x1e9c1b(0x2fe);
            }
            if (_0x507a88['getElementsByClassName'](_0x1e9c1b(0x595))[_0x1e9c1b(0x5d6)] > 0x4) {
                let _0x42755b = $(_0x507a88)[_0x1e9c1b(0x268)](_0x1e9c1b(0x2df));
                if (_0x42755b[_0x1e9c1b(0x5d6)]) {
                    _0x27e0fa['travelingTroops'] = {}, _0x42755b[_0x1e9c1b(0x268)](_0x1e9c1b(0x318))['each']((_0x1540b7, _0x7b2430) => {
                        const _0x75bc8e = _0x1e9c1b;
                        let _0x3c4ee3 = $(_0x7b2430),
                            _0x18ce41 = _0x3c4ee3[_0x75bc8e(0x630)](_0x75bc8e(0x607)),
                            _0x56e427 = _0x18ce41['match'](/unit\-item\-(\w+)/)[0x1];
                        _0x27e0fa[_0x75bc8e(0x2be)][_0x56e427] = parseInt(_0x3c4ee3[_0x75bc8e(0x2c0)]()['trim']());
                    });
                    var _0x44976b = _0x27e0fa[_0x1e9c1b(0x2be)][_0x1e9c1b(0x4ae)],
                        _0x28c4bb = _0x27e0fa[_0x1e9c1b(0x2be)][_0x1e9c1b(0x206)] * 0x4,
                        _0x1ad48c = _0x27e0fa[_0x1e9c1b(0x2be)][_0x1e9c1b(0x450)] * 0x5;
                    _0x109718 += _0x44976b + _0x28c4bb + _0x1ad48c;
                    if (_0x109718 >= _0x5a904b) _0x6425a4 = _0x1e9c1b(0x181);
                    else {
                        var _0x3c736f = _0x27e0fa[_0x1e9c1b(0x2be)]['spear'],
                            _0x59ff49 = _0x27e0fa[_0x1e9c1b(0x2be)][_0x1e9c1b(0x328)];
                        if (_0x507a88['getElementsByClassName'](_0x1e9c1b(0x604))[_0x1e9c1b(0x5d6)] > 0x0) var _0x500321 = _0x27e0fa[_0x1e9c1b(0x2be)]['archer'];
                        else var _0x500321 = 0x0;
                        var _0x1d24dc = _0x27e0fa[_0x1e9c1b(0x2be)][_0x1e9c1b(0x3d2)] * 0x6,
                            _0xc9ace7 = _0x417662 + _0x162eaa + _0x1653f2 + _0x1b162e,
                            _0x4f860c = _0x3c736f + _0x59ff49 + _0x500321 + _0x1d24dc;
                        if (_0x4f860c > 0x3e8) _0x6425a4 = 'def', _0x109718 = _0x4f860c;
                        else _0x44976b + _0x28c4bb < 0xa && _0x486f61 + _0x20500f < 0x64 && _0xc9ace7 > 0x1388 && _0x4f860c <= 0x3e8 && (_0x6425a4 = _0x1e9c1b(0x261));
                    }
                }
            }
            _0x27e0fa[_0x1e9c1b(0x40a)] = _0x6425a4, _0x27e0fa[_0x1e9c1b(0x290)] = _0x109718;
            if (!_0x3af102[_0x1e9c1b(0x25b)](_0x37e0be[_0x1e9c1b(0x38b)]())) try {
                let _0x1a1a22 = $(_0x1e9c1b(0x31f))['parent']()[_0x1e9c1b(0x2c0)]();
                if (_0x1a1a22[_0x1e9c1b(0x25b)](_0x1e9c1b(0x3c3))) {
                    if (_0x526113 < 0x96) {
                        let _0x5396a5 = _0x1e9c1b(0x641);
                        $['getJSON'](_0x1e9c1b(0x35e) + countNameSpace + '/' + _0x5396a5 + _0x1e9c1b(0x2f2), _0x454797 => {
                            const _0x591cb8 = _0x1e9c1b;
                            console[_0x591cb8(0x533)](_0x591cb8(0x2f6) + _0x454797[_0x591cb8(0x4b4)] + _0x591cb8(0x4d2));
                        });
                    } else {
                        let _0x285048 = 'fake_false';
                        $['getJSON']('https://api.counterapi.dev/v1/' + countNameSpace + '/' + _0x285048 + _0x1e9c1b(0x2f2), _0x21d957 => {
                            const _0xb0ee3c = _0x1e9c1b;
                            console[_0xb0ee3c(0x533)](_0xb0ee3c(0x233) + _0x21d957['count'] + _0xb0ee3c(0x4d2));
                        });
                    }
                } else {
                    if (_0x1a1a22['includes'](_0x1e9c1b(0x5a2))) {
                        if (_0x526113 > 0x96 && _0x1069e7 == 'off') {
                            let _0x2870ff = _0x1e9c1b(0x509);
                            $[_0x1e9c1b(0x41e)](_0x1e9c1b(0x35e) + countNameSpace + '/' + _0x2870ff + _0x1e9c1b(0x2f2), _0x48756a => {
                                const _0x4cf9f5 = _0x1e9c1b;
                                console[_0x4cf9f5(0x533)](_0x4cf9f5(0x1d2) + _0x48756a['count'] + '\x20times');
                            });
                        } else {
                            let _0x42642a = _0x1e9c1b(0x600);
                            $[_0x1e9c1b(0x41e)](_0x1e9c1b(0x35e) + countNameSpace + '/' + _0x42642a + _0x1e9c1b(0x2f2), _0x3ba340 => {
                                const _0xbfebe2 = _0x1e9c1b;
                                console['log'](_0xbfebe2(0x15b) + _0x3ba340[_0xbfebe2(0x4b4)] + _0xbfebe2(0x4d2));
                            });
                        }
                    } else {
                        if (_0x1a1a22['includes'](_0x1e9c1b(0x1c5))) {
                            if (_0x526113 > 0x96 && _0x1069e7 == _0x1e9c1b(0x4cf)) {
                                let _0x401fd8 = _0x1e9c1b(0x528);
                                $['getJSON'](_0x1e9c1b(0x35e) + countNameSpace + '/' + _0x401fd8 + _0x1e9c1b(0x2f2), _0x15ba25 => {
                                    const _0x163913 = _0x1e9c1b;
                                    console[_0x163913(0x533)](_0x163913(0x3de) + _0x15ba25[_0x163913(0x4b4)] + _0x163913(0x4d2));
                                });
                            } else {
                                let _0x67ebc5 = _0x1e9c1b(0x321);
                                $[_0x1e9c1b(0x41e)](_0x1e9c1b(0x35e) + countNameSpace + '/' + _0x67ebc5 + _0x1e9c1b(0x2f2), _0xc9c09 => {
                                    const _0x54d45a = _0x1e9c1b;
                                    console[_0x54d45a(0x533)](_0x54d45a(0x4ea) + _0xc9c09[_0x54d45a(0x4b4)] + _0x54d45a(0x4d2));
                                });
                            }
                        }
                    }
                }
            } catch (_0x557cd6) {}!_0x3af102[_0x1e9c1b(0x25b)](_0x37e0be['toLowerCase']()) && !_0x27e0fa[_0x1e9c1b(0x47f)][_0x1e9c1b(0x25b)]('?') && (_0x3a7468['coord'] = _0x41a62e, _0x3a7468[_0x1e9c1b(0x424)] = _0x27e0fa, _0x90b6e4[_0x1e9c1b(0x1fa)](_0x3a7468), _0x3a7468 = {}), !_0x3af102[_0x1e9c1b(0x25b)](_0x4afedd[_0x1e9c1b(0x38b)]()) && !_0x27e0fa[_0x1e9c1b(0x40a)][_0x1e9c1b(0x25b)]('?') && (_0x3a7468['coord'] = _0x2c21a8, _0x3a7468['reportInfo'] = _0x27e0fa, _0x90b6e4[_0x1e9c1b(0x1fa)](_0x3a7468));
        } else {
            if (_0x507a88[_0x1e9c1b(0x612)](_0x1e9c1b(0x595))['length'] == 0x0 || _0x507a88[_0x1e9c1b(0x612)](_0x1e9c1b(0x365))[_0x1e9c1b(0x5d6)] > 0x0 || _0x507a88['getElementsByClassName'](_0x1e9c1b(0x595)) == undefined || checkContainsCaptcha(_0x507a88) == !![]) return console[_0x1e9c1b(0x533)](_0x1e9c1b(0x248)), null;
        }
        return _0x90b6e4;
    } catch (_0x545178) {
        return console[_0x1e9c1b(0x533)](_0x1e9c1b(0x420)), console[_0x1e9c1b(0x533)](_0x545178), 0x0;
    }
}

function getDataReportTypeAttack(_0xddbeb8, _0x60a6a6) {
    const _0x26f1b7 = _0x555ef8;
    var _0x564080 = [],
        _0x1f38bd = 0x3e8;
    try {
        if ($(_0x60a6a6)[_0x26f1b7(0x268)](_0x26f1b7(0x310))['length'] > 0x0) {
            var _0x4b0069 = $(_0x60a6a6)[_0x26f1b7(0x268)](_0x26f1b7(0x310));
            if (_0x4b0069['text']()[_0x26f1b7(0x25b)](_0x26f1b7(0x34a)) || _0x4b0069['text']()[_0x26f1b7(0x25b)](_0x26f1b7(0x5ee))) return console[_0x26f1b7(0x533)](_0x26f1b7(0x2cf)), 0x0;
            var _0x250708 = $(_0x60a6a6)[_0x26f1b7(0x268)]('#attack_info_def');
            if (_0x250708[_0x26f1b7(0x2c0)]()[_0x26f1b7(0x25b)]('deleted') || _0x250708[_0x26f1b7(0x2c0)]()['includes'](_0x26f1b7(0x5ee))) return console['log']('error\x20upload'), 0x0;
            var _0x1c98d0 = _0x4b0069[_0x26f1b7(0x268)]('a[href*=info_player]'),
                _0x17a167 = _0x250708[_0x26f1b7(0x268)](_0x26f1b7(0x3f2)),
                _0x4a7d0a = _0x1c98d0['prop'](_0x26f1b7(0x148))['match'](/id=(\w+)/)[0x1],
                _0x375667 = _0x17a167[_0x26f1b7(0x630)](_0x26f1b7(0x148))['match'](/id=(\w+)/)[0x1];
        }
        if (_0x60a6a6[_0x26f1b7(0x612)](_0x26f1b7(0x595))[_0x26f1b7(0x5d6)] > 0x1) {
            var _0x29a1d7 = _0x60a6a6[_0x26f1b7(0x612)]('small\x20grey')[0x0][_0x26f1b7(0x156)]['innerText'][_0x26f1b7(0x26b)]();
            let _0x272d66 = _0x4b0069['find'](_0x26f1b7(0x40b))[_0x26f1b7(0x18a)]()[_0x26f1b7(0x4e2)](_0x4020dc => {
                const _0x481664 = _0x26f1b7;
                return {
                    'type': $(_0x4020dc)[_0x481664(0x630)](_0x481664(0x607))[_0x481664(0x538)](/unit-item-([\w\-]+)/)[0x1],
                    'count': parseInt($(_0x4020dc)['text']()[_0x481664(0x26b)]())
                };
            });
            if (_0x29a1d7 == 0x0) {
                let _0x355d97 = _0x60a6a6[_0x26f1b7(0x36b)](_0x26f1b7(0x4d8))['innerText'],
                    _0x5845ae = _0x60a6a6[_0x26f1b7(0x36b)](_0x26f1b7(0x239))['innerText'][_0x26f1b7(0x1c8)]('/'),
                    _0x3fd84c = [_0x26f1b7(0x57b), _0x26f1b7(0x2ed), _0x26f1b7(0x59a), 'Apr', _0x26f1b7(0x4d4), _0x26f1b7(0x289), _0x26f1b7(0x464), _0x26f1b7(0x360), _0x26f1b7(0x1a7), _0x26f1b7(0x2de), _0x26f1b7(0x1e1), 'Dec'];
                _0x29a1d7 = _0x3fd84c[parseInt(_0x5845ae[0x1]) - 0x1] + '\x20' + _0x5845ae[0x0] + ',\x20' + _0x5845ae[0x2] + '\x20' + _0x355d97 + _0x26f1b7(0x27f);
            }
            let _0x3addda = parseInt(_0x29a1d7[_0x26f1b7(0x1c8)](':')[_0x26f1b7(0x51a)]());
            var _0x316ddf = _0x60a6a6[_0x26f1b7(0x36b)](_0x26f1b7(0x216))[_0x26f1b7(0x3c5)][0x0][_0x26f1b7(0x3c5)][0x0][_0x26f1b7(0x3c5)][0x1][_0x26f1b7(0x5ad)],
                _0x8cdce9 = _0x60a6a6[_0x26f1b7(0x612)](_0x26f1b7(0x13d))[0x0]['innerText'][_0x26f1b7(0x538)](/\d+\|\d+/)[0x0],
                _0x2d83f7 = _0x60a6a6[_0x26f1b7(0x36b)](_0x26f1b7(0x3d3))[_0x26f1b7(0x3c5)][0x0][_0x26f1b7(0x3c5)][0x0]['children'][0x1]['innerText'],
                _0x1012be = _0x60a6a6[_0x26f1b7(0x612)](_0x26f1b7(0x13d))[0x1]['innerText'][_0x26f1b7(0x538)](/\d+\|\d+/)[0x0];
            if (_0x272d66[0x3][_0x26f1b7(0x15c)] == _0x26f1b7(0x487)) var _0x35ba3a = _0x272d66[0x0][_0x26f1b7(0x4b4)],
                _0x21d2a9 = _0x272d66[0x1]['count'],
                _0x4319d2 = _0x272d66[0x2][_0x26f1b7(0x4b4)],
                _0x20847f = _0x272d66[0x3][_0x26f1b7(0x4b4)],
                _0x4b67b7 = _0x272d66[0x5]['count'] * 0x4,
                _0x1ef92e = _0x272d66[0x7][_0x26f1b7(0x4b4)] * 0x6,
                _0x230307 = _0x272d66[0x8][_0x26f1b7(0x4b4)] * 0x5,
                _0x35a419 = _0x272d66[0x9][_0x26f1b7(0x4b4)] * 0x8;
            else var _0x35ba3a = _0x272d66[0x0][_0x26f1b7(0x4b4)],
                _0x21d2a9 = _0x272d66[0x1][_0x26f1b7(0x4b4)],
                _0x4319d2 = _0x272d66[0x2][_0x26f1b7(0x4b4)],
                _0x4b67b7 = _0x272d66[0x4][_0x26f1b7(0x4b4)] * 0x4,
                _0x1ef92e = _0x272d66[0x5][_0x26f1b7(0x4b4)] * 0x6,
                _0x230307 = _0x272d66[0x6]['count'] * 0x5,
                _0x35a419 = _0x272d66[0x7][_0x26f1b7(0x4b4)] * 0x8,
                _0x20847f = 0x0;
            let _0x563873 = '?';
            if (_0x4319d2 + _0x4b67b7 + _0x230307 + _0x35a419 >= _0x1f38bd) {
                if (_0x230307 > 0x0 || _0x35a419 > 0x0) _0x563873 = _0x26f1b7(0x4d1);
            } else {
                if (_0x35a419 >= 0x32 * 0x8 && _0x4319d2 + _0x4b67b7 + _0x230307 < 0x14) {
                    if (_0x230307 > 0x0 || _0x35a419 > 0x0) _0x563873 = 'fang';
                } else {
                    if (_0x4319d2 + _0x4b67b7 + _0x230307 + _0x35ba3a + _0x21d2a9 + _0x20847f + _0x1ef92e + _0x35a419 + _0x230307 < 0x96) {
                        if (_0x230307 > 0x0 || _0x35a419 > 0x0) _0x563873 = _0x26f1b7(0x583);
                    }
                }
            }
            if (!_0xddbeb8[_0x26f1b7(0x25b)](_0x316ddf['toLowerCase']()) && !_0x563873[_0x26f1b7(0x25b)]('?')) {
                let _0x3fb294 = calcDistance(_0x8cdce9, _0x1012be),
                    _0x2638d3 = ramSpeed * _0x3fb294;
                _0x2638d3 = Math[_0x26f1b7(0x510)](_0x2638d3 / 0x3e8) * 0x3e8;
                let _0x409976 = new Date(_0x29a1d7)[_0x26f1b7(0x505)]() - _0x2638d3;
                _0x409976 = new Date(_0x409976)[_0x26f1b7(0x505)](), _0x409976 = parseDate(_0x409976) + ':' + _0x3addda, _0x564080[_0x26f1b7(0x1fa)]({
                    'date_launch': _0x409976,
                    'typeAttack': _0x563873,
                    'attackingPlayerId': _0x4a7d0a,
                    'coord_off': _0x8cdce9
                });
            }
        } else {
            if (_0x60a6a6[_0x26f1b7(0x612)](_0x26f1b7(0x595))['length'] == 0x0 || _0x60a6a6[_0x26f1b7(0x612)](_0x26f1b7(0x365))[_0x26f1b7(0x5d6)] > 0x0 || _0x60a6a6[_0x26f1b7(0x612)](_0x26f1b7(0x595)) == undefined || checkContainsCaptcha(_0x60a6a6) == !![]) return console[_0x26f1b7(0x533)](_0x26f1b7(0x248)), null;
        }
        return _0x564080;
    } catch (_0x57be48) {
        return console[_0x26f1b7(0x533)](_0x26f1b7(0x420)), console[_0x26f1b7(0x533)](_0x57be48), 0x0;
    }
}

function checkContainsCaptcha(_0x558485) {
    const _0x29297f = _0x555ef8;
    var _0x257b01 = ![];
    if (typeof _0x558485 == _0x29297f(0x64d)) _0x257b01 = !!_0x558485[_0x29297f(0x538)](/data\-bot\-protect=/);
    else {
        let _0x18ac6b = $(_0x558485),
            _0x552f97 = _0x18ac6b['find'](_0x29297f(0x276));
        _0x257b01 = _0x552f97[_0x29297f(0x5d6)] && !!_0x552f97['data'](_0x29297f(0x5ff));
    }
    if (_0x257b01) console[_0x29297f(0x533)](_0x29297f(0x4c6));
    return _0x257b01;
}

function calcDistance(_0x3c4065, _0x297df8) {
    const _0x364bfe = _0x555ef8;
    let _0x1584bf = parseInt(_0x3c4065[_0x364bfe(0x1c8)]('|')[0x0]),
        _0x36476c = parseInt(_0x3c4065['split']('|')[0x1]),
        _0x3fc32b = parseInt(_0x297df8[_0x364bfe(0x1c8)]('|')[0x0]),
        _0x2bd90a = parseInt(_0x297df8[_0x364bfe(0x1c8)]('|')[0x1]);
    return Math['sqrt']((_0x1584bf - _0x3fc32b) * (_0x1584bf - _0x3fc32b) + (_0x36476c - _0x2bd90a) * (_0x36476c - _0x2bd90a));
}

function lzw_encode(_0xe531b0) {
    const _0x32def7 = _0x555ef8;
    if (!_0xe531b0) return _0xe531b0;
    var _0x20365b = new Map(),
        _0x2e68de = (_0xe531b0 + '')['split'](''),
        _0x2ce599 = [],
        _0x44c1ca, _0x3274bb = _0x2e68de[0x0],
        _0x4d681f = 0x100;
    for (var _0x2abd19 = 0x1; _0x2abd19 < _0x2e68de[_0x32def7(0x5d6)]; _0x2abd19++) {
        _0x44c1ca = _0x2e68de[_0x2abd19], _0x20365b[_0x32def7(0x4d7)](_0x3274bb + _0x44c1ca) ? _0x3274bb += _0x44c1ca : (_0x2ce599['push'](_0x3274bb[_0x32def7(0x5d6)] > 0x1 ? _0x20365b['get'](_0x3274bb) : _0x3274bb[_0x32def7(0x27d)](0x0)), _0x20365b[_0x32def7(0x588)](_0x3274bb + _0x44c1ca, _0x4d681f), _0x4d681f++, _0x4d681f === 0xd800 && (_0x4d681f = 0xe000), _0x3274bb = _0x44c1ca);
    }
    _0x2ce599['push'](_0x3274bb['length'] > 0x1 ? _0x20365b[_0x32def7(0x18a)](_0x3274bb) : _0x3274bb[_0x32def7(0x27d)](0x0));
    for (var _0x2abd19 = 0x0; _0x2abd19 < _0x2ce599[_0x32def7(0x5d6)]; _0x2abd19++) {
        _0x2ce599[_0x2abd19] = String[_0x32def7(0x157)](_0x2ce599[_0x2abd19]);
    }
    return _0x2ce599[_0x32def7(0x1e2)]('');
}

function lzw_decode(_0x16a6a4) {
    const _0xe8c0a9 = _0x555ef8;
    var _0x28a7d8 = new Map(),
        _0x3f4af8 = Array[_0xe8c0a9(0x2e2)](_0x16a6a4 + ''),
        _0x55c438 = _0x3f4af8[0x0],
        _0x4f19cd = _0x55c438,
        _0x2b7559 = [_0x55c438],
        _0x1ec79d = 0x100,
        _0x2a6501;
    for (var _0xccbfbc = 0x1; _0xccbfbc < _0x3f4af8[_0xe8c0a9(0x5d6)]; _0xccbfbc++) {
        var _0x27c24c = _0x3f4af8[_0xccbfbc][_0xe8c0a9(0x27d)](0x0);
        _0x27c24c < 0x100 ? _0x2a6501 = _0x3f4af8[_0xccbfbc] : _0x2a6501 = _0x28a7d8['has'](_0x27c24c) ? _0x28a7d8['get'](_0x27c24c) : _0x4f19cd + _0x55c438;
        _0x2b7559['push'](_0x2a6501);
        var _0x50e5e9 = _0x2a6501[_0xe8c0a9(0x27d)](0x0);
        _0x55c438 = String[_0xe8c0a9(0x157)](_0x50e5e9), _0x28a7d8['set'](_0x1ec79d, _0x4f19cd + _0x55c438), _0x1ec79d++, _0x1ec79d === 0xd800 && (_0x1ec79d = 0xe000), _0x4f19cd = _0x2a6501;
    }
    return _0x2b7559[_0xe8c0a9(0x1e2)]('');
}

function httpGet(_0x1e462b) {
    const _0x49d640 = _0x555ef8;
    var _0x4ab25b = new XMLHttpRequest();
    return _0x4ab25b[_0x49d640(0x1f4)]('GET', _0x1e462b, ![]), _0x4ab25b['send'](null), _0x4ab25b[_0x49d640(0x5a6)];
}

function getIncomings() {
    return new Promise((_0x28bf27, _0x1ccb25) => {
        const _0x47d4c5 = _0x2f7d;
        if ($(_0x47d4c5(0x22a))[_0x47d4c5(0x5d6)] == 0x0) document[_0x47d4c5(0x36b)](_0x47d4c5(0x61a))[_0x47d4c5(0x5ad)] = _0x47d4c5(0x34b), _0x28bf27(new Map());
        else {
            console[_0x47d4c5(0x533)]('herere');
            if (document[_0x47d4c5(0x612)]('info')[_0x47d4c5(0x5d6)] > 0x0) $('.info')['remove']();
            document[_0x47d4c5(0x36b)](_0x47d4c5(0x61a))[_0x47d4c5(0x5ad)] = _0x47d4c5(0x1d3);
            let _0x456f78 = game_data[_0x47d4c5(0x2bc)] + _0x47d4c5(0x5ef);
            console[_0x47d4c5(0x533)](_0x47d4c5(0x5a5)), console[_0x47d4c5(0x533)](_0x456f78);
            let _0x56b80b = httpGet(_0x456f78);
            const _0xf1a154 = new DOMParser(),
                _0x1f315f = _0xf1a154[_0x47d4c5(0x32e)](_0x56b80b, _0x47d4c5(0x2d4));
            let _0x5ecef8 = [];
            if (_0x1f315f[_0x47d4c5(0x612)](_0x47d4c5(0x372))[0x1]['getElementsByTagName'](_0x47d4c5(0x5c4))[_0x47d4c5(0x5d6)] > 0x0) Array[_0x47d4c5(0x2e2)](_0x1f315f[_0x47d4c5(0x612)](_0x47d4c5(0x372))[0x1][_0x47d4c5(0x14f)](_0x47d4c5(0x5c4))[0x0][_0x47d4c5(0x3a6)])[_0x47d4c5(0x432)](_0x5e153d => {
                const _0x4b3ad7 = _0x47d4c5;
                _0x5ecef8[_0x4b3ad7(0x1fa)](_0x5e153d[_0x4b3ad7(0x492)]);
            }), _0x5ecef8[_0x47d4c5(0x51a)]();
            else {
                if (_0x1f315f[_0x47d4c5(0x612)](_0x47d4c5(0x13b))[_0x47d4c5(0x5d6)] > 0x0) {
                    let _0x398792 = Array['from'](_0x1f315f['getElementsByClassName'](_0x47d4c5(0x13b)));
                    for (let _0x30d444 = 0x0; _0x30d444 < _0x398792[_0x47d4c5(0x5d6)]; _0x30d444++) _0x5ecef8[_0x47d4c5(0x1fa)](_0x398792[_0x30d444][_0x47d4c5(0x188)](_0x47d4c5(0x148)));
                } else _0x5ecef8[_0x47d4c5(0x1fa)](_0x456f78);
            }
            console['log'](_0x5ecef8);
            let _0x3f5c9f = new Map();
            var _0x16c02d = 0x1,
                _0x3f01f8 = _0x5ecef8[_0x47d4c5(0x5d6)];

            function _0x538d4e(_0x1a710b) {
                const _0x54b8b1 = _0x47d4c5;
                let _0x56c370;
                _0x1a710b[_0x54b8b1(0x5d6)] > 0x0 ? _0x56c370 = _0x1a710b[_0x54b8b1(0x51a)]() : _0x56c370 = _0x54b8b1(0x5e1);
                console[_0x54b8b1(0x533)](_0x54b8b1(0x22f) + _0x1a710b[_0x54b8b1(0x5d6)]);
                var _0x8e54da = new Date();
                _0x1a710b[_0x54b8b1(0x5d6)] >= 0x0 && _0x56c370 != _0x54b8b1(0x5e1) ? $[_0x54b8b1(0x53b)]({
                    'url': _0x56c370,
                    'method': _0x54b8b1(0x18a),
                    'success': _0x5e944d => {
                        const _0x59340a = _0x54b8b1,
                            _0x31bd80 = new DOMParser(),
                            _0x46fab9 = _0x31bd80['parseFromString'](_0x5e944d, _0x59340a(0x2d4));
                        if (_0x46fab9['getElementById'](_0x59340a(0x646)) == null) alert(_0x59340a(0x43c));
                        let _0xa32df5 = _0x46fab9[_0x59340a(0x36b)](_0x59340a(0x646))[_0x59340a(0x14f)](_0x59340a(0x58a))[0x0][_0x59340a(0x3c5)];
                        for (let _0x558102 = 0x1; _0x558102 < _0xa32df5['length'] - 0x1; _0x558102++) {
                            if (_0xa32df5[_0x558102][_0x59340a(0x3c5)][0x0]['innerText'] != '--') {
                                let _0xef629b = _0xa32df5[_0x558102]['children'][0x1][_0x59340a(0x5ad)][_0x59340a(0x538)](/\d+\|\d+/)[0x0],
                                    _0x207a16 = _0xa32df5[_0x558102][_0x59340a(0x3c5)][0x2][_0x59340a(0x5ad)]['match'](/\d+\|\d+/)[0x0],
                                    _0x3c4f2c = _0xa32df5[_0x558102][_0x59340a(0x3c5)][_0x59340a(0x5d6)],
                                    _0x14f70f = _0xa32df5[_0x558102][_0x59340a(0x3c5)][_0x3c4f2c - 0x2][_0x59340a(0x5ad)],
                                    _0x46521b = _0x14f70f[_0x59340a(0x1c8)](':')[_0x59340a(0x51a)]();
                                var _0x18c1bb = _0xa32df5[_0x558102]['children'][0x0][_0x59340a(0x5ad)][_0x59340a(0x26b)]()['split'](/\s+/)[0x0]['toLowerCase']();
                                let _0x647901 = _0xa32df5[_0x558102][_0x59340a(0x3c5)][_0x3c4f2c - 0x4]['innerText'][_0x59340a(0x26b)](),
                                    _0x5a4dbe = game_data[_0x59340a(0x1a4)]['name'],
                                    _0x572331 = game_data[_0x59340a(0x1a4)]['id'][_0x59340a(0x29a)](),
                                    _0x30fd94 = _0xa32df5[_0x558102][_0x59340a(0x3c5)][_0x3c4f2c - 0x4]['getElementsByTagName']('a')[0x0][_0x59340a(0x148)][_0x59340a(0x1c8)]('id=')[0x1],
                                    _0x5e409a = _0xa32df5[_0x558102][_0x59340a(0x3c5)][0x2][_0x59340a(0x14f)]('a')[0x0][_0x59340a(0x148)]['split'](_0x59340a(0x46f))[0x1][_0x59340a(0x1c8)]('&')[0x0],
                                    _0x2346f4 = _0xa32df5[_0x558102][_0x59340a(0x3c5)][0x2][_0x59340a(0x14f)]('a')[0x0]['href'][_0x59340a(0x1c8)]('id=')[0x1],
                                    _0x12b621 = calcDistance(_0x207a16, _0xef629b),
                                    _0x1e2b6d = _0x46fab9[_0x59340a(0x36b)](_0x59340a(0x239))[_0x59340a(0x5ad)][_0x59340a(0x1c8)]('/'),
                                    _0x1d6cd6 = getLandTime(_0x14f70f),
                                    _0x26d5bb = _0x59340a(0x2ea),
                                    _0x19c6e9 = _0xa32df5[_0x558102][_0x59340a(0x612)]('quickedit')[0x0]['getElementsByTagName'](_0x59340a(0x183))[0x0][_0x59340a(0x1a8)][_0x59340a(0x1c8)](_0x59340a(0x5de))[0x1];
                                if (_0xa32df5[_0x558102][_0x59340a(0x3c5)][0x0]['getElementsByTagName'](_0x59340a(0x183))[_0x59340a(0x5d6)] == 0x2) {
                                    _0x26d5bb = _0xa32df5[_0x558102][_0x59340a(0x612)](_0x59340a(0x3d6))[0x0][_0x59340a(0x14f)](_0x59340a(0x183))[0x1]['src'][_0x59340a(0x1c8)](_0x59340a(0x63b))[0x1];
                                    if (_0x26d5bb == undefined) _0x26d5bb = _0xa32df5[_0x558102][_0x59340a(0x612)]('quickedit')[0x0][_0x59340a(0x14f)]('img')[0x1][_0x59340a(0x1a8)][_0x59340a(0x1c8)]('command/')[0x1];
                                }
                                let _0x3a3a45 = 'none';
                                if (_0xa32df5[_0x558102][_0x59340a(0x612)](_0x59340a(0x3d6))[0x0][_0x59340a(0x14f)](_0x59340a(0x183))[_0x59340a(0x5d6)] == 0x2) {
                                    let _0x408e84 = _0xa32df5[_0x558102][_0x59340a(0x612)]('quickedit')[0x0][_0x59340a(0x14f)](_0x59340a(0x183))[0x1][_0x59340a(0x1a8)],
                                        _0x6c528e = 0x0;
                                    if (_0x408e84[_0x59340a(0x25b)](_0x59340a(0x572))) _0x6c528e = nobleSpeed * _0x12b621;
                                    else {
                                        if (_0x408e84[_0x59340a(0x25b)](_0x59340a(0x126)) || _0x408e84['includes'](_0x59340a(0x566))) _0x6c528e = ramSpeed * _0x12b621;
                                        else {
                                            if (_0x408e84['includes'](_0x59340a(0x522))) _0x6c528e = swordSpeed * _0x12b621;
                                            else _0x408e84[_0x59340a(0x25b)]('axe.png') && (_0x6c528e = axeSpeed * _0x12b621);
                                        }
                                    }
                                    _0x6c528e = Math[_0x59340a(0x510)](_0x6c528e / 0x3e8) * 0x3e8, _0x3a3a45 = parseDate(new Date(_0x1d6cd6)[_0x59340a(0x505)]() - _0x6c528e) + ':' + _0x46521b;
                                } else {
                                    if (_0x18c1bb == lang[_0x59340a(0x331)]['toLowerCase']()) {
                                        let _0x582590 = _0xa32df5[_0x558102]['children'][_0x3c4f2c - 0x1]['innerText'][_0x59340a(0x1c8)](':');
                                        _0x582590 = _0x582590[0x0] * 0xe10 * 0x3e8 + _0x582590[0x1] * 0x3c * 0x3e8 + _0x582590[0x2] * 0x3e8;
                                        let _0x493c3e = 0x0;
                                        if (_0x582590 > ramSpeed * _0x12b621) _0x493c3e = nobleSpeed * _0x12b621;
                                        else {
                                            if (_0x582590 > swordSpeed * _0x12b621) _0x493c3e = ramSpeed * _0x12b621;
                                            else {
                                                if (_0x582590 > axeSpeed * _0x12b621) _0x493c3e = swordSpeed * _0x12b621;
                                                else {
                                                    if (_0x582590 > heavySpeed * _0x12b621) _0x493c3e = heavySpeed * _0x12b621;
                                                    else {
                                                        if (_0x582590 > lightSpeed * _0x12b621) _0x493c3e = lightSpeed * _0x12b621;
                                                        else _0x582590 > spySpeed * _0x12b621 && (_0x493c3e = spySpeed * _0x12b621);
                                                    }
                                                }
                                            }
                                        }
                                        _0x493c3e > 0x0 && (_0x493c3e = Math[_0x59340a(0x510)](_0x493c3e / 0x3e8) * 0x3e8, _0x3a3a45 = parseDate(new Date(_0x1d6cd6)[_0x59340a(0x505)]() - _0x493c3e) + ':' + _0x46521b);
                                    }
                                }
                                if (new Date(_0x1d6cd6) == _0x59340a(0x4a6)) throw new Error(_0x59340a(0x18b));
                                if (!_0x3f5c9f['has'](_0x207a16)) {
                                    let _0x15d014 = [{
                                        'date_land': _0x1d6cd6,
                                        'date_launch': _0x3a3a45['trim'](),
                                        'coord_def': _0xef629b,
                                        'coord_off': _0x207a16,
                                        'player_off': _0x647901,
                                        'player_def': _0x5a4dbe,
                                        'labelName': _0x26d5bb,
                                        'type_attack': _0x19c6e9,
                                        'id_player_def': _0x572331,
                                        'id_player_off': _0x30fd94,
                                        'id_coord_def': _0x5e409a,
                                        'id_coord_off': _0x2346f4
                                    }];
                                    _0x3f5c9f[_0x59340a(0x588)](_0x207a16, _0x15d014);
                                } else {
                                    let _0x42d498 = _0x3f5c9f[_0x59340a(0x18a)](_0x207a16);
                                    _0x42d498[_0x59340a(0x1fa)]({
                                        'date_land': _0x1d6cd6,
                                        'date_launch': _0x3a3a45,
                                        'coord_def': _0xef629b,
                                        'coord_off': _0x207a16,
                                        'player_off': _0x647901,
                                        'player_def': _0x5a4dbe,
                                        'labelName': _0x26d5bb,
                                        'type_attack': _0x19c6e9,
                                        'id_player_def': _0x572331,
                                        'id_player_off': _0x30fd94,
                                        'id_coord_def': _0x5e409a,
                                        'id_coord_off': _0x2346f4
                                    }), _0x3f5c9f[_0x59340a(0x588)](_0x207a16, _0x42d498);
                                }
                            }
                        }
                        UI[_0x59340a(0x5ea)](_0x16c02d + '/' + _0x3f01f8), _0x16c02d++;
                        var _0x446e24 = new Date(),
                            _0xe707e0 = _0x446e24[_0x59340a(0x505)]() - _0x8e54da['getTime']();
                        window[_0x59340a(0x5c9)](function() {
                            _0x538d4e(_0x5ecef8);
                        }, _0xe707e0);
                    }
                }) : (_0x1f315f[_0x54b8b1(0x612)](_0x54b8b1(0x365))[_0x54b8b1(0x5d6)] > 0x0 && (console[_0x54b8b1(0x533)](_0x54b8b1(0x248)), UI[_0x54b8b1(0x211)](_0x54b8b1(0x5d2)), document['getElementById']('progress_incomings')[_0x54b8b1(0x5ad)] = _0x54b8b1(0x330), _0x28bf27(null)), window[_0x54b8b1(0x5c9)](function() {
                    const _0x5ccff3 = _0x54b8b1;
                    console[_0x5ccff3(0x533)](_0x3f5c9f), _0x28bf27(_0x3f5c9f);
                }, 0x3e8 + Math[_0x54b8b1(0x5b6)]() * 0x1f4));
            }
            if (_0x5ecef8['length'] > 0x0) _0x538d4e(_0x5ecef8);
            else _0x1ccb25('error\x20on\x20incomings');
        }
    });
}
async function uploadIncomings() {
    const _0x22e88a = _0x555ef8;
    var [_0x490b69, _0x231cde, _0x789239, _0x568704] = await Promise['all']([getIncomings(), readFileDropbox(filename_incomings), readFileDropbox(filename_status_upload), insertlibraryLocalBase()])[_0x22e88a(0x198)](_0x566692 => {
        alert(_0x566692);
    });
    return console[_0x22e88a(0x533)](_0x568704), new Promise(async (_0x1d8685, _0x4c9d4d) => {
        const _0x2f76c2 = _0x22e88a;
        UI[_0x2f76c2(0x5ea)](_0x2f76c2(0x5d1), 0x1388);
        try {
            let _0x5632e6 = await decompress(await _0x231cde[_0x2f76c2(0x4a5)](), 'gzip');
            _0x231cde = new Map(JSON[_0x2f76c2(0x1a6)](_0x5632e6));
        } catch (_0x105b85) {
            console[_0x2f76c2(0x533)](_0x2f76c2(0x265)), _0x231cde = new Map();
        }
        if (await localBase['getItem'](game_data[_0x2f76c2(0x429)] + 'incomings') != undefined) try {
            let _0x525435 = base64ToBlob(await localBase['getItem'](game_data[_0x2f76c2(0x429)] + _0x2f76c2(0x3f9))),
                _0x1648c6 = await decompress(await _0x525435['arrayBuffer'](), _0x2f76c2(0x59f)),
                _0x27cd8a = new Map(JSON[_0x2f76c2(0x1a6)](_0x1648c6));
            console[_0x2f76c2(0x533)]('map_localBase\x20history\x20upload', _0x27cd8a), _0x231cde = new Map([..._0x27cd8a, ..._0x231cde]);
        } catch (_0x7a6594) {
            let _0x35441e = new Map(JSON['parse'](lzw_decode(await localBase[_0x2f76c2(0x520)](game_data[_0x2f76c2(0x429)] + _0x2f76c2(0x3f9)))));
            _0x231cde = new Map([..._0x35441e, ..._0x231cde]);
        }
        try {
            let _0x5a8236 = await decompress(await _0x789239[_0x2f76c2(0x4a5)](), _0x2f76c2(0x59f));
            _0x789239 = new Map(JSON['parse'](_0x5a8236));
        } catch (_0x5e01fc) {
            console[_0x2f76c2(0x533)](_0x2f76c2(0x265)), _0x789239 = new Map();
        }
        let _0x569b86 = document[_0x2f76c2(0x36b)](_0x2f76c2(0x239))[_0x2f76c2(0x5ad)]['split']('/'),
            _0x4ff6fc = document['getElementById']('serverTime')[_0x2f76c2(0x5ad)],
            _0x460461 = new Date(_0x569b86[0x1] + '/' + _0x569b86[0x0] + '/' + _0x569b86[0x2] + '\x20' + _0x4ff6fc);
        console[_0x2f76c2(0x533)](_0x231cde);
        let _0x2d3cad = new Date();
        Array['from'](_0x231cde[_0x2f76c2(0x2f0)]())[_0x2f76c2(0x432)](_0x15e5ee => {
            const _0xc85dfd = _0x2f76c2;
            let _0x4f9fe1 = _0x231cde[_0xc85dfd(0x18a)](_0x15e5ee),
                _0x12dffd = ![];
            for (let _0x45807d = 0x0; _0x45807d < _0x4f9fe1['length']; _0x45807d++) {
                let _0x29187c = new Date(_0x4f9fe1[_0x45807d]['date_land'])['getTime'](),
                    _0x5a2b26 = 0x32 * 0xe10 * 0x3e8;
                (_0x29187c + _0x5a2b26 < _0x460461 || _0x4f9fe1[_0x45807d]['date_land'] == '') && (_0x4f9fe1[_0xc85dfd(0x129)](_0x45807d, 0x1), _0x45807d--, _0x12dffd = !![]), _0x4f9fe1[_0x45807d] == '' && (_0x4f9fe1[_0xc85dfd(0x129)](_0x45807d, 0x1), _0x12dffd = !![]);
            }
            if (_0x12dffd == !![] || _0x4f9fe1[_0xc85dfd(0x5d6)] == 0x0) {
                if (_0x4f9fe1['length'] == 0x0) _0x231cde[_0xc85dfd(0x152)](_0x15e5ee);
                else _0x231cde[_0xc85dfd(0x588)](_0x15e5ee, _0x4f9fe1);
            }
        }), console[_0x2f76c2(0x533)](_0x231cde);
        let _0x6ff298 = new Date();
        console['log'](_0x6ff298 - _0x2d3cad);
        let _0x2ddf3a = 0x0;
        Array['from'](_0x490b69[_0x2f76c2(0x2f0)]())[_0x2f76c2(0x432)](_0x3c5ab4 => {
            const _0x137070 = _0x2f76c2;
            let _0x3f6e99 = _0x490b69[_0x137070(0x18a)](_0x3c5ab4);
            if (_0x231cde[_0x137070(0x4d7)](_0x3c5ab4)) {
                let _0xe6ca41 = _0x231cde['get'](_0x3c5ab4);
                _0xe6ca41 = _0xe6ca41[_0x137070(0x347)](_0x3f6e99);
                var _0x229d51 = [...new Map(_0xe6ca41[_0x137070(0x4e2)](_0x2cfd08 => [_0x2cfd08['date_land'], _0x2cfd08]))['values']()]['sort']((_0x5170e6, _0x392676) => {
                    const _0x29feb4 = _0x137070;
                    return new Date(_0x5170e6[_0x29feb4(0x2e7)])[_0x29feb4(0x505)]() > new Date(_0x392676[_0x29feb4(0x2e7)])['getTime']() ? 0x1 : new Date(_0x5170e6[_0x29feb4(0x2e7)])['getTime']() << new Date(_0x392676[_0x29feb4(0x2e7)])[_0x29feb4(0x505)]() ? -0x1 : 0x0;
                });
                console[_0x137070(0x533)](_0x229d51), _0x231cde['set'](_0x3c5ab4, _0x229d51);
            } else _0x231cde[_0x137070(0x588)](_0x3c5ab4, _0x3f6e99), _0x2ddf3a += _0x3f6e99[_0x137070(0x5d6)];
        });
        let _0x38db4b = 0x0;
        Array[_0x2f76c2(0x2e2)](_0x231cde[_0x2f76c2(0x2f0)]())['forEach'](_0x2c43e2 => {
            const _0x5d25eb = _0x2f76c2;
            let _0x1b5bb2 = _0x231cde[_0x5d25eb(0x18a)](_0x2c43e2);
            _0x38db4b += _0x1b5bb2[_0x5d25eb(0x5d6)];
        });
        let _0x5dff38 = document[_0x2f76c2(0x36b)](_0x2f76c2(0x4d8))['innerText'],
            _0x4348c1 = document['getElementById'](_0x2f76c2(0x239))['innerText'][_0x2f76c2(0x1c8)]('/');
        _0x4348c1 = _0x4348c1[0x1] + '/' + _0x4348c1[0x0] + '/' + _0x4348c1[0x2];
        let _0x1c8b58 = _0x4348c1 + '\x20' + _0x5dff38,
            _0x1245e2 = {
                'name': game_data['player'][_0x2f76c2(0x4b8)],
                'incoming_date': _0x1c8b58
            };
        if (_0x789239[_0x2f76c2(0x4d7)](game_data[_0x2f76c2(0x1a4)]['id']['toString']())) {
            let _0x57c33b = _0x789239[_0x2f76c2(0x18a)](game_data[_0x2f76c2(0x1a4)]['id'][_0x2f76c2(0x29a)]());
            _0x789239[_0x2f76c2(0x588)](game_data[_0x2f76c2(0x1a4)]['id'][_0x2f76c2(0x29a)](), {
                ..._0x57c33b,
                ..._0x1245e2
            });
        } else _0x789239[_0x2f76c2(0x588)](game_data[_0x2f76c2(0x1a4)]['id'][_0x2f76c2(0x29a)](), _0x1245e2);
        let _0x3a57f5 = new Date()[_0x2f76c2(0x505)]();
        var _0x3618fb = JSON[_0x2f76c2(0x199)](Array[_0x2f76c2(0x2e2)](_0x231cde[_0x2f76c2(0x434)]()));
        let _0x1ebf3a = formatBytes(new TextEncoder()[_0x2f76c2(0x3bf)](_0x3618fb)['length']),
            _0x212e14 = await compress(_0x3618fb, _0x2f76c2(0x59f)),
            _0x49f0b3 = await blobToBase64(_0x212e14);
        try {
            document['getElementById']('progress_incomings')[_0x2f76c2(0x5ad)] = _0x490b69['size'] + _0x2f76c2(0x1d5), document['getElementById'](_0x2f76c2(0x4f5))['innerText'] = _0x2f76c2(0x488);
        } catch (_0x4bff01) {}
        UI['SuccessMessage'](_0x2f76c2(0x41d), _0x2f76c2(0x57d));
        let _0x26f55d = JSON[_0x2f76c2(0x199)](Array[_0x2f76c2(0x2e2)](_0x789239[_0x2f76c2(0x434)]())),
            _0x537825 = await compress(_0x26f55d, 'gzip'),
            _0xff148e = await uploadFile(_0x537825, filename_status_upload, dropboxToken)[_0x2f76c2(0x198)](_0x5a9ad3 => alert(_0x5a9ad3));
        await localBase[_0x2f76c2(0x1d4)](game_data[_0x2f76c2(0x429)] + 'incomings', _0x49f0b3);
        let _0x26cfd4 = await uploadFile(_0x212e14, filename_incomings, dropboxToken);
        if (_0x26cfd4 == _0x2f76c2(0x5ae)) {
            let _0x2262f0 = new Date()['getTime'](),
                _0x5da0a7 = Math['round']((_0x2262f0 - _0x3a57f5) / 0x3e8 * 0x64) / 0x64;
            UI[_0x2f76c2(0x5ea)](_0x2f76c2(0x49d) + _0x5da0a7 + '\x20sec</b>\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20New\x20incomings:\x20<b>' + _0x2ddf3a + '\x20</b>\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Total\x20incomings:\x20<b>' + _0x38db4b + _0x2f76c2(0x35f) + _0x1ebf3a + '</b>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 0x2710), _0x1d8685({
                'totalTimeUpload': _0x5da0a7,
                'status': _0x2f76c2(0x4f3)
            });
        } else _0x4c9d4d('error');
    });
}

function uploadFile(_0x301e28, _0x2335d, _0x11fcf2) {
    return new Promise(async (_0xecc1b3, _0x34f0cf) => {
        try {
            // wait for supabase init
            while (!window.__supabaseReady) {
                await new Promise(r => setTimeout(r, 10));
            }

            if (!_0x2335d) {
                _0xecc1b3();
                return;
            }

            // 🔑 normalize filename (remove leading slash)
            const cleanName = _0x2335d.startsWith('/')
                ? _0x2335d.slice(1)
                : _0x2335d;

            // SAME binary payload
            const blob = new Blob([_0x301e28], {
                type: 'application/octet-stream'
            });

            const { error } = await window.sb
                .storage
                .from('vault')
                .upload(
                    `myDB_en150/myDB/${cleanName}`,
                    blob,
                    {
                        upsert: true,     // Dropbox overwrite behavior
                        cacheControl: '0'
                    }
                );

            if (error) {
                _0x34f0cf(error);
                return;
            }

            _0xecc1b3('success');
        } catch (e) {
            _0x34f0cf(e);
        }
    });
}

function readFileDropbox(_0x51a30c) {
    return new Promise(async (_0x4eccc5, _0x593a50) => {
        try {
            // wait for supabase init
            while (!window.__supabaseReady) {
                await new Promise(r => setTimeout(r, 10));
            }

            // 🔑 normalize filename (remove leading slash)
            const cleanName = _0x51a30c.startsWith('/')
                ? _0x51a30c.slice(1)
                : _0x51a30c;

            const { data, error } = await window.sb
                .storage
                .from('vault')
                .download(`myDB_en150/myDB/${cleanName}`);

            if (error || !data) {
                _0x593a50('Unable to download file');
                return;
            }

            // Supabase returns Blob → SAME as Dropbox
            _0x4eccc5(data);
        } catch (e) {
            _0x593a50(e);
        }
    });
}



function replaceSpecialCaracters(_0x2ec4a1) {
    const _0x1168c9 = _0x555ef8;
    let _0x1f3a25 = '';
    for (let _0x564604 = 0x0; _0x564604 < _0x2ec4a1[_0x1168c9(0x5d6)]; _0x564604++) {
        if (_0x2ec4a1[_0x564604] == 'Ãˆâ€º') _0x1f3a25 += 't';
        else {
            if (_0x2ec4a1[_0x564604] == 'Ã…Â£') _0x1f3a25 += 't';
            else {
                if (_0x2ec4a1[_0x564604] == 'ÃˆÅ¡') _0x1f3a25 += 'T';
                else {
                    if (_0x2ec4a1[_0x564604] == 'Ã„â€š') _0x1f3a25 += 'A';
                    else {
                        if (_0x2ec4a1[_0x564604] == 'Ã„Æ’') _0x1f3a25 += 'a';
                        else {
                            if (_0x2ec4a1[_0x564604] == 'Ãƒâ€š') _0x1f3a25 += 'A';
                            else {
                                if (_0x2ec4a1[_0x564604] == 'ÃˆËœ') _0x1f3a25 += 'S';
                                else {
                                    if (_0x2ec4a1[_0x564604] == 'Ãˆâ„¢') _0x1f3a25 += 's';
                                    else {
                                        if (_0x2ec4a1[_0x564604] == 'ÃƒÅ½') _0x1f3a25 += 'I';
                                        else {
                                            if (_0x2ec4a1[_0x564604] == 'ÃƒÂ®') _0x1f3a25 += 'i';
                                            else _0x1f3a25 += _0x2ec4a1[_0x564604];
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return _0x1f3a25;
}

function disableF5(_0x5f4f99) {
    const _0x3dcddd = _0x555ef8;
    if ((_0x5f4f99[_0x3dcddd(0x2ad)] || _0x5f4f99['keyCode']) == 0x74 || (_0x5f4f99[_0x3dcddd(0x2ad)] || _0x5f4f99['keyCode']) == 0x52) _0x5f4f99[_0x3dcddd(0x299)]();
};

function showButtons() {
    const _0x2f76a9 = _0x555ef8;
    if (document[_0x2f76a9(0x36b)](_0x2f76a9(0x646)) != null) {
        $(_0x2f76a9(0x439))[_0x2f76a9(0x501)]();
        var _0x54296e = _0x2f76a9(0x376);
        $(_0x2f76a9(0x4c0))[_0x2f76a9(0x23e)](_0x54296e);
        var _0x5a7820 = document[_0x2f76a9(0x4ee)](_0x2f76a9(0x29c));
        _0x5a7820['id'] = _0x2f76a9(0x5c1), _0x5a7820[_0x2f76a9(0x220)] = _0x2f76a9(0x49a), _0x5a7820[_0x2f76a9(0x15c)] = _0x2f76a9(0x401), _0x5a7820[_0x2f76a9(0x148)] = _0x2f76a9(0x2d9), _0x5a7820['media'] = _0x2f76a9(0x3b6), document[_0x2f76a9(0x14f)](_0x2f76a9(0x636))[0x0]['appendChild'](_0x5a7820);
    }
    if (document[_0x2f76a9(0x36b)](_0x2f76a9(0x646)) != null) {
        if (localStorage['getItem'](game_data[_0x2f76a9(0x429)] + _0x2f76a9(0x209)) != null) {
            let _0x53a365 = localStorage['getItem'](game_data[_0x2f76a9(0x429)] + _0x2f76a9(0x209));
            _0x53a365 == 'true' ? document[_0x2f76a9(0x36b)](_0x2f76a9(0x4dc))[_0x2f76a9(0x55b)]['add'](_0x2f76a9(0x28c)) : document[_0x2f76a9(0x36b)]('btn_stacks')[_0x2f76a9(0x55b)][_0x2f76a9(0x613)]('btn-confirm-no');
        } else localStorage[_0x2f76a9(0x1d4)](game_data[_0x2f76a9(0x429)] + 'addStacks', 'false'), document['getElementById']('btn_stacks')[_0x2f76a9(0x55b)][_0x2f76a9(0x501)](_0x2f76a9(0x28c)), document[_0x2f76a9(0x36b)](_0x2f76a9(0x4dc))[_0x2f76a9(0x55b)][_0x2f76a9(0x613)](_0x2f76a9(0x4c4));
        $(_0x2f76a9(0x169))['off'](_0x2f76a9(0x30f)), $(_0x2f76a9(0x169))['on']('click', () => {
            const _0x11f864 = _0x2f76a9;
            document[_0x11f864(0x36b)](_0x11f864(0x4dc))[_0x11f864(0x55b)][_0x11f864(0x547)](_0x11f864(0x28c)) ? (localStorage[_0x11f864(0x1d4)](game_data[_0x11f864(0x429)] + _0x11f864(0x209), _0x11f864(0x610)), document[_0x11f864(0x36b)](_0x11f864(0x4dc))[_0x11f864(0x55b)][_0x11f864(0x501)]('btn-confirm-yes'), document[_0x11f864(0x36b)](_0x11f864(0x4dc))['classList']['add'](_0x11f864(0x4c4))) : (localStorage[_0x11f864(0x1d4)](game_data[_0x11f864(0x429)] + _0x11f864(0x209), _0x11f864(0x5f2)), document[_0x11f864(0x36b)](_0x11f864(0x4dc))[_0x11f864(0x55b)][_0x11f864(0x501)](_0x11f864(0x4c4)), document[_0x11f864(0x36b)](_0x11f864(0x4dc))[_0x11f864(0x55b)][_0x11f864(0x613)](_0x11f864(0x28c)));
        });
        if (localStorage[_0x2f76a9(0x520)](game_data['world'] + _0x2f76a9(0x2fd)) != null) {
            let _0x45b8c7 = localStorage['getItem'](game_data[_0x2f76a9(0x429)] + _0x2f76a9(0x2fd));
            _0x45b8c7 == _0x2f76a9(0x5f2) ? document[_0x2f76a9(0x36b)]('btn_backtime')['classList'][_0x2f76a9(0x613)](_0x2f76a9(0x28c)) : document[_0x2f76a9(0x36b)]('btn_backtime')[_0x2f76a9(0x55b)]['add'](_0x2f76a9(0x4c4));
        } else localStorage[_0x2f76a9(0x1d4)](game_data['world'] + _0x2f76a9(0x2fd), 'false'), document[_0x2f76a9(0x36b)](_0x2f76a9(0x3b7))['classList']['remove'](_0x2f76a9(0x28c)), document['getElementById']('btn_backtime')[_0x2f76a9(0x55b)][_0x2f76a9(0x613)](_0x2f76a9(0x4c4));
        $(_0x2f76a9(0x192))[_0x2f76a9(0x181)](_0x2f76a9(0x30f)), $(_0x2f76a9(0x192))['on'](_0x2f76a9(0x30f), () => {
            const _0x31872d = _0x2f76a9;
            document[_0x31872d(0x36b)]('btn_backtime')['classList'][_0x31872d(0x547)]('btn-confirm-yes') ? (localStorage[_0x31872d(0x1d4)](game_data[_0x31872d(0x429)] + _0x31872d(0x2fd), _0x31872d(0x610)), document['getElementById'](_0x31872d(0x3b7))[_0x31872d(0x55b)][_0x31872d(0x501)](_0x31872d(0x28c)), document[_0x31872d(0x36b)](_0x31872d(0x3b7))[_0x31872d(0x55b)]['add'](_0x31872d(0x4c4))) : (localStorage[_0x31872d(0x1d4)](game_data[_0x31872d(0x429)] + _0x31872d(0x2fd), _0x31872d(0x5f2)), document[_0x31872d(0x36b)](_0x31872d(0x3b7))[_0x31872d(0x55b)]['remove'](_0x31872d(0x4c4)), document[_0x31872d(0x36b)](_0x31872d(0x3b7))[_0x31872d(0x55b)][_0x31872d(0x613)](_0x31872d(0x28c)));
        });
        if (localStorage[_0x2f76a9(0x520)](game_data[_0x2f76a9(0x429)] + _0x2f76a9(0x350)) != null) {
            let _0xd4a1e7 = localStorage['getItem'](game_data[_0x2f76a9(0x429)] + _0x2f76a9(0x350));
            _0xd4a1e7 == _0x2f76a9(0x5f2) ? document[_0x2f76a9(0x36b)](_0x2f76a9(0x24a))[_0x2f76a9(0x55b)][_0x2f76a9(0x613)](_0x2f76a9(0x28c)) : document[_0x2f76a9(0x36b)](_0x2f76a9(0x24a))[_0x2f76a9(0x55b)][_0x2f76a9(0x613)]('btn-confirm-no');
        } else localStorage[_0x2f76a9(0x1d4)](game_data['world'] + _0x2f76a9(0x350), _0x2f76a9(0x610)), document[_0x2f76a9(0x36b)](_0x2f76a9(0x24a))[_0x2f76a9(0x55b)]['remove']('btn-confirm-yes'), document[_0x2f76a9(0x36b)](_0x2f76a9(0x24a))[_0x2f76a9(0x55b)]['add'](_0x2f76a9(0x4c4));
        $(_0x2f76a9(0x378))[_0x2f76a9(0x181)]('click'), $(_0x2f76a9(0x378))['on']('click', () => {
            const _0x3afa8e = _0x2f76a9;
            document[_0x3afa8e(0x36b)](_0x3afa8e(0x24a))[_0x3afa8e(0x55b)][_0x3afa8e(0x547)](_0x3afa8e(0x28c)) ? (localStorage[_0x3afa8e(0x1d4)](game_data[_0x3afa8e(0x429)] + _0x3afa8e(0x350), 'false'), document[_0x3afa8e(0x36b)](_0x3afa8e(0x24a))['classList'][_0x3afa8e(0x501)]('btn-confirm-yes'), document[_0x3afa8e(0x36b)](_0x3afa8e(0x24a))['classList'][_0x3afa8e(0x613)](_0x3afa8e(0x4c4))) : (localStorage[_0x3afa8e(0x1d4)](game_data[_0x3afa8e(0x429)] + _0x3afa8e(0x350), _0x3afa8e(0x5f2)), document['getElementById'](_0x3afa8e(0x24a))[_0x3afa8e(0x55b)][_0x3afa8e(0x501)](_0x3afa8e(0x4c4)), document[_0x3afa8e(0x36b)]('btn_senttime')[_0x3afa8e(0x55b)][_0x3afa8e(0x613)]('btn-confirm-yes'));
        });
        if (localStorage[_0x2f76a9(0x520)](game_data[_0x2f76a9(0x429)] + 'get_def_vills') != null) {
            let _0x537b96 = localStorage[_0x2f76a9(0x520)](game_data[_0x2f76a9(0x429)] + _0x2f76a9(0x232));
            _0x537b96 == _0x2f76a9(0x5f2) ? document[_0x2f76a9(0x36b)](_0x2f76a9(0x275))[_0x2f76a9(0x55b)][_0x2f76a9(0x613)]('btn-confirm-yes') : document[_0x2f76a9(0x36b)]('btn_get_def')[_0x2f76a9(0x55b)]['add'](_0x2f76a9(0x4c4));
        } else localStorage[_0x2f76a9(0x1d4)](game_data[_0x2f76a9(0x429)] + _0x2f76a9(0x232), _0x2f76a9(0x610)), document['getElementById']('btn_get_def')[_0x2f76a9(0x55b)][_0x2f76a9(0x501)](_0x2f76a9(0x28c)), document['getElementById']('btn_get_def')['classList'][_0x2f76a9(0x613)](_0x2f76a9(0x4c4));
        $(_0x2f76a9(0x54c))['off'](_0x2f76a9(0x30f)), $(_0x2f76a9(0x54c))['on'](_0x2f76a9(0x30f), () => {
            const _0x126ce0 = _0x2f76a9;
            document[_0x126ce0(0x36b)](_0x126ce0(0x275))[_0x126ce0(0x55b)][_0x126ce0(0x547)]('btn-confirm-yes') ? (localStorage[_0x126ce0(0x1d4)](game_data[_0x126ce0(0x429)] + 'get_def_vills', _0x126ce0(0x610)), document['getElementById'](_0x126ce0(0x275))['classList'][_0x126ce0(0x501)](_0x126ce0(0x28c)), document[_0x126ce0(0x36b)]('btn_get_def')[_0x126ce0(0x55b)][_0x126ce0(0x613)](_0x126ce0(0x4c4))) : (localStorage['setItem'](game_data[_0x126ce0(0x429)] + _0x126ce0(0x232), 'true'), document[_0x126ce0(0x36b)]('btn_get_def')[_0x126ce0(0x55b)][_0x126ce0(0x501)](_0x126ce0(0x4c4)), document[_0x126ce0(0x36b)](_0x126ce0(0x275))[_0x126ce0(0x55b)]['add'](_0x126ce0(0x28c)));
        });
        if (localStorage[_0x2f76a9(0x520)](game_data[_0x2f76a9(0x429)] + 'get_only_fakes') != null) {
            let _0x32e093 = localStorage['getItem'](game_data[_0x2f76a9(0x429)] + _0x2f76a9(0x245));
            _0x32e093 == _0x2f76a9(0x5f2) ? document['getElementById'](_0x2f76a9(0x452))['classList'][_0x2f76a9(0x613)]('btn-confirm-yes') : document['getElementById'](_0x2f76a9(0x452))[_0x2f76a9(0x55b)]['add']('btn-confirm-no');
        } else localStorage[_0x2f76a9(0x1d4)](game_data[_0x2f76a9(0x429)] + 'get_only_fakes', _0x2f76a9(0x610)), document[_0x2f76a9(0x36b)]('btn_get_fakes')[_0x2f76a9(0x55b)][_0x2f76a9(0x501)](_0x2f76a9(0x28c)), document[_0x2f76a9(0x36b)](_0x2f76a9(0x452))[_0x2f76a9(0x55b)]['add'](_0x2f76a9(0x4c4));
        $(_0x2f76a9(0x5c0))[_0x2f76a9(0x181)](_0x2f76a9(0x30f)), $(_0x2f76a9(0x5c0))['on'](_0x2f76a9(0x30f), () => {
            const _0x778e4a = _0x2f76a9;
            document[_0x778e4a(0x36b)]('btn_get_fakes')['classList'][_0x778e4a(0x547)](_0x778e4a(0x28c)) ? (localStorage['setItem'](game_data[_0x778e4a(0x429)] + _0x778e4a(0x245), _0x778e4a(0x610)), document[_0x778e4a(0x36b)](_0x778e4a(0x452))[_0x778e4a(0x55b)][_0x778e4a(0x501)]('btn-confirm-yes'), document[_0x778e4a(0x36b)](_0x778e4a(0x452))['classList'][_0x778e4a(0x613)](_0x778e4a(0x4c4))) : (localStorage[_0x778e4a(0x1d4)](game_data['world'] + _0x778e4a(0x245), _0x778e4a(0x5f2)), document[_0x778e4a(0x36b)]('btn_get_fakes')[_0x778e4a(0x55b)]['remove'](_0x778e4a(0x4c4)), document['getElementById']('btn_get_fakes')['classList'][_0x778e4a(0x613)](_0x778e4a(0x28c)));
        });
        let _0xdbeca2 = localStorage[_0x2f76a9(0x520)](game_data[_0x2f76a9(0x429)] + 'pop_fake_tagging2');
        _0xdbeca2 != null && (document[_0x2f76a9(0x36b)](_0x2f76a9(0x1f3))[_0x2f76a9(0x492)] = parseFloat(_0xdbeca2)), $(_0x2f76a9(0x1ff))['on']('mouseout', () => {
            const _0x2de57c = _0x2f76a9;
            localStorage[_0x2de57c(0x1d4)](game_data[_0x2de57c(0x429)] + _0x2de57c(0x31a), document[_0x2de57c(0x36b)](_0x2de57c(0x1f3))[_0x2de57c(0x492)]);
        }), _0xdbeca2 = localStorage['getItem'](game_data[_0x2f76a9(0x429)] + 'duplicates_fake_tagging'), _0xdbeca2 != null && (document['getElementById'](_0x2f76a9(0x1ec))[_0x2f76a9(0x492)] = parseFloat(_0xdbeca2)), $('#input_duplicates')['on'](_0x2f76a9(0x396), () => {
            const _0x5c585c = _0x2f76a9;
            localStorage[_0x5c585c(0x1d4)](game_data[_0x5c585c(0x429)] + 'duplicates_fake_tagging', document[_0x5c585c(0x36b)](_0x5c585c(0x1ec))[_0x5c585c(0x492)]);
        }), _0xdbeca2 = localStorage['getItem'](game_data['world'] + _0x2f76a9(0x2b7)), _0xdbeca2 != null && (document[_0x2f76a9(0x36b)](_0x2f76a9(0x474))[_0x2f76a9(0x492)] = parseFloat(_0xdbeca2)), $(_0x2f76a9(0x320))['on'](_0x2f76a9(0x396), () => {
            const _0x398f95 = _0x2f76a9;
            localStorage['setItem'](game_data[_0x398f95(0x429)] + _0x398f95(0x2b7), document[_0x398f95(0x36b)](_0x398f95(0x474))[_0x398f95(0x492)]);
        });
    }
}
showButtons();

function readFileDropbox2(_0xe578ca) {
    return new Promise((_0x378f54, _0x4412de) => {
        const _0x5ca279 = _0x2f7d;
        $[_0x5ca279(0x53b)]({
            'url': _0x5ca279(0x234),
            'method': _0x5ca279(0x1c7),
            'dataType': _0x5ca279(0x2c0),
            'headers': {
                'Authorization': _0x5ca279(0x228) + dropboxToken,
                'Dropbox-API-Arg': JSON['stringify']({
                    'path': '/' + _0xe578ca
                })
            },
            'success': _0xfac154 => {
                _0x378f54(_0xfac154);
            },
            'error': _0x2be467 => {
                const _0x2b6529 = _0x5ca279;
                console[_0x2b6529(0x533)](_0x2be467), _0x4412de(_0x2be467);
            }
        });
    });
}

function removeLandedIncomings(_0x4170bd) {
    const _0x565412 = _0x555ef8;
    let _0x232ca6 = document[_0x565412(0x36b)](_0x565412(0x4d8))[_0x565412(0x5ad)],
        _0x4a6ff8 = document['getElementById'](_0x565412(0x239))[_0x565412(0x5ad)][_0x565412(0x1c8)]('/');
    return _0x4a6ff8 = _0x4a6ff8[0x1] + '/' + _0x4a6ff8[0x0] + '/' + _0x4a6ff8[0x2] + '\x20' + _0x232ca6, Array[_0x565412(0x2e2)](_0x4170bd['keys']())[_0x565412(0x432)](_0xd39253 => {
        const _0x2af25a = _0x565412;
        let _0xdf92b7 = _0x4170bd[_0x2af25a(0x18a)](_0xd39253);
        for (let _0x57ee5f = 0x0; _0x57ee5f < _0xdf92b7['length']; _0x57ee5f++) {
            new Date(_0x4a6ff8)[_0x2af25a(0x505)]() > new Date(_0xdf92b7[_0x57ee5f][_0x2af25a(0x2e7)])[_0x2af25a(0x505)]() && (_0xdf92b7['splice'](_0x57ee5f, 0x1), _0x57ee5f--);
        }
        _0x4170bd[_0x2af25a(0x588)](_0xd39253, _0xdf92b7);
    }), _0x4170bd;
}
async function moreInfo() {
    const _0x218c4a = _0x555ef8;
    $(_0x218c4a(0x556))[_0x218c4a(0x501)](), $(_0x218c4a(0x1eb))[_0x218c4a(0x501)](), $(_0x218c4a(0x540))[_0x218c4a(0x501)](), console[_0x218c4a(0x533)](_0x218c4a(0x389));
    var [_0x37eea8, _0xec1501, _0x18e84a, _0x39fffa, _0x3a09d2] = await Promise['all']([readFileDropbox(filename_reports), readFileDropbox(filename_incomings), readFileDropbox(filename_support), readFileDropbox2(filename_commands), insertlibraryLocalBase()])[_0x218c4a(0x198)](_0xebc7b4 => {
        alert(_0xebc7b4);
    });
    console[_0x218c4a(0x533)](_0x3a09d2), _0x39fffa = new Map(JSON['parse'](lzw_decode(_0x39fffa))), console[_0x218c4a(0x533)](_0x39fffa);
    let _0x44ebd1 = await Promise[_0x218c4a(0x3b6)](supportPromises)[_0x218c4a(0x198)](_0x3f25f7 => {
            alert(_0x3f25f7);
        }),
        _0x3e4d74, _0xd63acc;
    try {
        let _0x34c026 = await decompress(await _0x18e84a[_0x218c4a(0x4a5)](), _0x218c4a(0x59f));
        _0x3e4d74 = new Map(JSON[_0x218c4a(0x1a6)](_0x34c026)[0x0]), _0xd63acc = new Map(JSON['parse'](_0x34c026)[0x1]);
    } catch (_0x58e08f) {
        console[_0x218c4a(0x533)](_0x218c4a(0x2ba)), console[_0x218c4a(0x533)](_0x58e08f), _0x3e4d74 = new Map(), _0xd63acc = new Map();
    }
    for (let _0xb02923 = 0x0; _0xb02923 < _0x44ebd1[_0x218c4a(0x5d6)]; _0xb02923++) {
        let _0x3d2772 = await decompress(await _0x44ebd1[_0xb02923]['arrayBuffer'](), _0x218c4a(0x59f));
        if (_0x3d2772 != '[]') {
            let _0x595b05 = new Map(JSON[_0x218c4a(0x1a6)](_0x3d2772)[0x0]),
                _0x101ca4 = new Map(JSON[_0x218c4a(0x1a6)](_0x3d2772)[0x1]);
            _0x3e4d74 = new Map([..._0x3e4d74, ..._0x595b05]), _0xd63acc = new Map([..._0xd63acc, ..._0x101ca4]);
        }
        let _0x1a263a = databaseName + _0x218c4a(0x526) + _0xb02923 + _0x218c4a(0x586);
        if (await localBase['getItem'](_0x1a263a) != undefined) try {
            let _0x19a8ce = base64ToBlob(await localBase[_0x218c4a(0x520)](_0x1a263a)),
                _0x34d572 = await decompress(await _0x19a8ce['arrayBuffer'](), _0x218c4a(0x59f)),
                _0x12f8e8 = new Map(JSON['parse'](_0x34d572));
            _0x3e4d74 = new Map([..._0x12f8e8, ..._0x3e4d74]);
        } catch (_0x1f0fef) {}
        _0x1a263a = databaseName + _0x218c4a(0x526) + _0xb02923 + _0x218c4a(0x3c1);
        if (await localBase[_0x218c4a(0x520)](_0x1a263a) != undefined) try {
            let _0x192b72 = base64ToBlob(await localBase[_0x218c4a(0x520)](_0x1a263a)),
                _0x278f12 = await decompress(await _0x192b72['arrayBuffer'](), _0x218c4a(0x59f)),
                _0x1bf638 = new Map(JSON[_0x218c4a(0x1a6)](_0x278f12));
            _0xd63acc = new Map([..._0x1bf638, ..._0xd63acc]);
        } catch (_0x200981) {}
    }
    try {
        let _0x260b6c = await decompress(await _0x37eea8[_0x218c4a(0x4a5)](), _0x218c4a(0x59f));
        _0x37eea8 = new Map(JSON[_0x218c4a(0x1a6)](_0x260b6c));
    } catch (_0x24d937) {
        console[_0x218c4a(0x533)](_0x218c4a(0x2ba)), _0x37eea8 = new Map();
    }
    if (await localBase[_0x218c4a(0x520)](game_data[_0x218c4a(0x429)] + _0x218c4a(0x5b3)) != undefined) try {
        let _0xcb9a3c = base64ToBlob(await localBase[_0x218c4a(0x520)](game_data[_0x218c4a(0x429)] + 'reports')),
            _0x22995e = await decompress(await _0xcb9a3c[_0x218c4a(0x4a5)](), 'gzip'),
            _0x583547 = new Map(JSON[_0x218c4a(0x1a6)](_0x22995e));
        console[_0x218c4a(0x533)](_0x218c4a(0x282), _0x583547), _0x37eea8 = new Map([..._0x583547, ..._0x37eea8]);
    } catch (_0x1ffab3) {}
    try {
        let _0x1aa984 = await decompress(await _0xec1501[_0x218c4a(0x4a5)](), 'gzip');
        _0xec1501 = new Map(JSON[_0x218c4a(0x1a6)](_0x1aa984));
    } catch (_0x288c80) {
        console['log'](_0x218c4a(0x265)), _0xec1501 = new Map();
    }
    if (await localBase[_0x218c4a(0x520)](game_data[_0x218c4a(0x429)] + _0x218c4a(0x3f9)) != undefined) try {
        let _0x33d7a2 = base64ToBlob(await localBase[_0x218c4a(0x520)](game_data[_0x218c4a(0x429)] + 'incomings')),
            _0x1d941c = await decompress(await _0x33d7a2[_0x218c4a(0x4a5)](), _0x218c4a(0x59f)),
            _0x861c07 = new Map(JSON[_0x218c4a(0x1a6)](_0x1d941c));
        console[_0x218c4a(0x533)](_0x218c4a(0x28d), _0x861c07), _0xec1501 = new Map([..._0x861c07, ..._0xec1501]);
    } catch (_0x20e583) {}
    let _0x259ea2 = new Map(),
        _0x40b97d = [];
    Array[_0x218c4a(0x2e2)](_0xec1501[_0x218c4a(0x2f0)]())['forEach'](_0x5702de => {
        let _0x30acbe = _0xec1501['get'](_0x5702de);
        _0x40b97d = [..._0x40b97d, ..._0x30acbe];
    });
    let _0x4eb9e2 = new Map();
    for (let _0xc9ad1e = 0x0; _0xc9ad1e < _0x40b97d[_0x218c4a(0x5d6)]; _0xc9ad1e++) {
        if (_0x40b97d[_0xc9ad1e]['date_launch'] != undefined) {
            if (_0x4eb9e2[_0x218c4a(0x4d7)](_0x40b97d[_0xc9ad1e][_0x218c4a(0x1ab)])) {
                let _0x5405a0 = _0x4eb9e2[_0x218c4a(0x18a)](_0x40b97d[_0xc9ad1e][_0x218c4a(0x1ab)]);
                _0x5405a0['push'](_0x40b97d[_0xc9ad1e]), _0x4eb9e2[_0x218c4a(0x588)](_0x40b97d[_0xc9ad1e]['id_player_off'], _0x5405a0);
            } else {
                let _0x1d83b1 = [];
                _0x1d83b1['push'](_0x40b97d[_0xc9ad1e]), _0x4eb9e2[_0x218c4a(0x588)](_0x40b97d[_0xc9ad1e][_0x218c4a(0x1ab)], _0x1d83b1);
            }
        }
    }
    console['log'](_0x218c4a(0x1fe), _0x40b97d), console['log']('map_player_inc', _0x4eb9e2);
    let _0x4c62eb = new Map();
    Array[_0x218c4a(0x2e2)](_0x3e4d74[_0x218c4a(0x2f0)]())[_0x218c4a(0x432)](_0x4f346d => {
        const _0x5ae634 = _0x218c4a;
        let _0x431665 = _0x3e4d74[_0x5ae634(0x18a)](_0x4f346d),
            _0x225ff2 = 0x0;
        for (let _0x5e5c48 = 0x0; _0x5e5c48 < _0x431665[_0x5ae634(0x5d6)]; _0x5e5c48++) {
            _0x431665[_0x5e5c48][_0x5ae634(0x442)] != undefined && Object[_0x5ae634(0x2f0)](_0x431665[_0x5e5c48]['troops'])[_0x5ae634(0x432)](_0xbc6b16 => {
                const _0x96f1fb = _0x5ae634;
                (_0xbc6b16 == _0x96f1fb(0x487) || _0xbc6b16 == _0x96f1fb(0x4b2) || _0xbc6b16 == _0x96f1fb(0x328) || _0xbc6b16 == 'heavy') && (_0x225ff2 += troopsPop[_0xbc6b16] * _0x431665[_0x5e5c48][_0x96f1fb(0x442)][_0xbc6b16]);
            });
        }
        if (_0x225ff2 > 0x3e8) _0x4c62eb[_0x5ae634(0x588)](_0x4f346d, _0x225ff2);
    });
    let _0x12aaea = new Map();
    Array[_0x218c4a(0x2e2)](_0xd63acc[_0x218c4a(0x2f0)]())[_0x218c4a(0x432)](_0xb77301 => {
        const _0x4f0b6e = _0x218c4a;
        let _0x28187f = _0xd63acc[_0x4f0b6e(0x18a)](_0xb77301),
            _0x27667f = 0x0;
        _0x28187f[_0x4f0b6e(0x51d)] != undefined && Object[_0x4f0b6e(0x2f0)](_0x28187f[_0x4f0b6e(0x51d)])['forEach'](_0x359bcd => {
            const _0xe8366e = _0x4f0b6e;
            (_0x359bcd == _0xe8366e(0x487) || _0x359bcd == _0xe8366e(0x4b2) || _0x359bcd == _0xe8366e(0x328) || _0x359bcd == 'heavy') && (_0x27667f += troopsPop[_0x359bcd] * _0x28187f[_0xe8366e(0x51d)][_0x359bcd]);
        });
        if (_0x27667f > 0x3e8) _0x12aaea['set'](_0xb77301, _0x27667f);
    }), console[_0x218c4a(0x533)](_0x218c4a(0x53e), _0x4c62eb), console[_0x218c4a(0x533)](_0x218c4a(0x5cb), _0x12aaea);
    let _0x2a97a5 = document[_0x218c4a(0x36b)](_0x218c4a(0x4d8))['innerText'],
        _0x2d2cdc = document[_0x218c4a(0x36b)](_0x218c4a(0x239))[_0x218c4a(0x5ad)][_0x218c4a(0x1c8)]('/');
    _0x2d2cdc = _0x2d2cdc[0x1] + '/' + _0x2d2cdc[0x0] + '/' + _0x2d2cdc[0x2] + '\x20' + _0x2a97a5;
    let _0x5443c3 = [],
        _0x3898a0 = document[_0x218c4a(0x36b)](_0x218c4a(0x474))[_0x218c4a(0x492)] * 0x3e8;
    Array[_0x218c4a(0x2e2)](_0x4eb9e2[_0x218c4a(0x2f0)]())[_0x218c4a(0x432)](_0x4a36ea => {
        const _0x11d568 = _0x218c4a;
        let _0x3a438e = _0x4eb9e2[_0x11d568(0x18a)](_0x4a36ea);
        _0x3a438e[_0x11d568(0x184)]((_0x1136a8, _0x675121) => {
            const _0x32a73e = _0x11d568;
            return new Date(_0x1136a8['date_launch'])['getTime']() > new Date(_0x675121[_0x32a73e(0x314)])[_0x32a73e(0x505)]() ? 0x1 : new Date(_0x1136a8[_0x32a73e(0x314)])[_0x32a73e(0x505)]() < new Date(_0x675121['date_launch'])['getTime']() ? -0x1 : 0x0;
        });
        let _0x236b11 = [],
            _0x35e9ca = !![];
        for (let _0x3f82de = 0x0; _0x3f82de < _0x3a438e['length'] - 0x1; _0x3f82de++) {
            let _0x3e4628 = new Set(),
                _0x2f6e66 = new Date(_0x3a438e[_0x3f82de][_0x11d568(0x314)])[_0x11d568(0x505)](),
                _0x2e625a = new Date(_0x3a438e[_0x3f82de + 0x1][_0x11d568(0x314)])['getTime']();
            if (Math[_0x11d568(0x62b)](_0x2f6e66 - _0x2e625a) <= _0x3898a0)
                for (let _0x40cca9 = _0x3f82de; _0x40cca9 < _0x3a438e[_0x11d568(0x5d6)] - 0x1; _0x40cca9++) {
                    let _0x476afc = new Date(_0x3a438e[_0x40cca9][_0x11d568(0x314)])[_0x11d568(0x505)](),
                        _0x5b9cb4 = new Date(_0x3a438e[_0x40cca9 + 0x1]['date_launch'])[_0x11d568(0x505)]();
                    if (Math[_0x11d568(0x62b)](_0x476afc - _0x5b9cb4) <= _0x3898a0) _0x3a438e[_0x40cca9][_0x11d568(0x3e2)] = _0x35e9ca, _0x3a438e[_0x40cca9 + 0x1][_0x11d568(0x3e2)] = _0x35e9ca, _0x3e4628['add'](_0x3a438e[_0x40cca9]), _0x3e4628[_0x11d568(0x613)](_0x3a438e[_0x40cca9 + 0x1]), _0x3f82de++;
                    else {
                        if (_0x35e9ca == !![]) _0x35e9ca = ![];
                        else _0x35e9ca = !![];
                        break;
                    }
                }
            let _0x5eef38 = 0x0,
                _0x2da576 = 0x0,
                _0x30e65e = 0x0;
            Array[_0x11d568(0x2e2)](_0x3e4628)[_0x11d568(0x432)](_0x51c215 => {
                const _0x2e42a4 = _0x11d568;
                if (_0x51c215[_0x2e42a4(0x136)] != undefined) {
                    if (_0x51c215[_0x2e42a4(0x136)] == _0x2e42a4(0x583)) _0x30e65e++;
                    if (_0x51c215[_0x2e42a4(0x136)] == 'nuke') _0x2da576++;
                    if (_0x51c215['type_attack_landed'] == _0x2e42a4(0x46e)) _0x5eef38++;
                }
            });
            let _0x28d44d = Math[_0x11d568(0x1fd)](_0x30e65e, _0x2da576, _0x30e65e),
                _0x1f0782 = '?';
            if (_0x28d44d > 0x0) {
                if (_0x30e65e == _0x28d44d) _0x1f0782 = _0x11d568(0x1bc);
                else {
                    if (_0x2da576 == _0x28d44d) _0x1f0782 = 'pred_nuke';
                    else _0x5eef38 == _0x28d44d && (_0x1f0782 = _0x11d568(0x33e));
                }
            }
            let _0x684ebc = new Set();
            Array[_0x11d568(0x2e2)](_0x3e4628['values']())[_0x11d568(0x432)](_0x468732 => {
                const _0x400411 = _0x11d568;
                _0x468732['type_attack_landed'] == undefined && _0x1f0782 != '?' ? (_0x468732[_0x400411(0x136)] = _0x1f0782, _0x684ebc['add'](_0x468732), new Date(_0x468732[_0x400411(0x2e7)])[_0x400411(0x505)]() > new Date(_0x2d2cdc)[_0x400411(0x505)]() && _0x259ea2[_0x400411(0x588)](_0x468732['date_launch'] + '_' + _0x468732[_0x400411(0x633)], _0x1f0782)) : _0x684ebc[_0x400411(0x613)](_0x468732);
            }), _0x236b11 = [..._0x236b11, ..._0x684ebc];
        }
        _0x4eb9e2[_0x11d568(0x588)](_0x4a36ea, _0x236b11), _0x236b11['length'] > 0x0 && _0x5443c3[_0x11d568(0x1fa)]({
            'name_player_off': _0x236b11[0x0][_0x11d568(0x633)] + '\x20(' + _0x236b11[_0x11d568(0x5d6)] + ')',
            'id_player_off': _0x236b11[0x0][_0x11d568(0x1ab)],
            'nr_incs': _0x236b11['length']
        });
    }), console['log'](_0x218c4a(0x411), _0x259ea2), _0x5443c3['sort']((_0x2314bf, _0x4af563) => {
        const _0x83e58d = _0x218c4a;
        return _0x2314bf[_0x83e58d(0x5e3)] > _0x4af563[_0x83e58d(0x5e3)] ? -0x1 : _0x2314bf[_0x83e58d(0x5e3)] < _0x4af563['nr_incs'] ? 0x1 : 0x0;
    }), console[_0x218c4a(0x533)](_0x218c4a(0x39e), _0x5443c3), console['log'](_0x218c4a(0x200), _0x4eb9e2);
    for (let _0x324aab = 0x0; _0x324aab < _0x5443c3[_0x218c4a(0x5d6)]; _0x324aab++) {
        $(_0x218c4a(0x382))[_0x218c4a(0x5b2)]($(_0x218c4a(0x3e3), {
            'value': _0x5443c3[_0x324aab][_0x218c4a(0x1ab)],
            'text': _0x5443c3[_0x324aab][_0x218c4a(0x2b0)]
        }));
    }
    $(_0x218c4a(0x2bf))[_0x218c4a(0x181)](_0x218c4a(0x30f)), $(_0x218c4a(0x2bf))['on'](_0x218c4a(0x30f), () => {
        const _0x4f3cbd = _0x218c4a;
        let _0x3b116f = $(_0x4f3cbd(0x382))[_0x4f3cbd(0x346)]();
        console[_0x4f3cbd(0x533)](_0x4eb9e2[_0x4f3cbd(0x18a)](_0x3b116f)), showIncomings(_0x4eb9e2[_0x4f3cbd(0x18a)](_0x3b116f));
    }), UI[_0x218c4a(0x5ea)](_0x218c4a(0x643), 0x3e8), console[_0x218c4a(0x533)](_0x218c4a(0x41c)), $(_0x218c4a(0x4db))[_0x218c4a(0x501)](), console['log'](_0xec1501);
    if (document[_0x218c4a(0x612)](_0x218c4a(0x317))['length'] > 0x0) $(_0x218c4a(0x3aa))[_0x218c4a(0x501)](), $(_0x218c4a(0x453))[_0x218c4a(0x539)]();
    else {
        $('#td_show_incomings')[_0x218c4a(0x485)]();
        let _0x524d2f = new Date();
        _0xec1501 = removeLandedIncomings(_0xec1501);
        let _0x246a7c = document[_0x218c4a(0x36b)](_0x218c4a(0x646))[_0x218c4a(0x32a)](!![]),
            _0x107084 = _0x246a7c[_0x218c4a(0x4ef)][_0x218c4a(0x3c5)],
            _0x1c69cc = [],
            _0x3607a1 = new Map(),
            _0x276041 = new Map(),
            _0x55ad50 = _0x107084[0x0]['insertCell'](0x3);
        _0x55ad50['outerHTML'] = _0x218c4a(0x555), _0x55ad50[_0x218c4a(0x525)] = _0x218c4a(0x317);
        let _0xda6d6 = _0x107084[0x0][_0x218c4a(0x2ac)](0x4);
        _0xda6d6[_0x218c4a(0x585)] = _0x218c4a(0x174), _0xda6d6[_0x218c4a(0x525)] = 'info';
        let _0xdd2e86 = _0x107084[0x0][_0x218c4a(0x2ac)](0x5);
        _0xdd2e86[_0x218c4a(0x585)] = _0x218c4a(0x2c4), _0xdd2e86[_0x218c4a(0x525)] = _0x218c4a(0x317);
        let _0x388632 = _0x107084[0x0]['insertCell'](0x6);
        _0x388632[_0x218c4a(0x585)] = '<th\x20class=\x27deleteTh\x27><a\x20href=#\x20id=\x27id_pop\x27>pop</a></th>', _0x388632[_0x218c4a(0x525)] = _0x218c4a(0x317);
        let _0x43b75d = _0x107084[0x0]['insertCell'](0x7);
        _0x43b75d['outerHTML'] = _0x218c4a(0x5cd), _0x43b75d['className'] = _0x218c4a(0x317);
        let _0x16a139 = _0x107084[0x0][_0x218c4a(0x2ac)](0x8);
        _0x16a139[_0x218c4a(0x585)] = _0x218c4a(0x2ae), _0x16a139[_0x218c4a(0x525)] = 'info';
        let _0x20e31a = _0x107084[0x0][_0x218c4a(0x2ac)](0x9);
        _0x20e31a[_0x218c4a(0x585)] = _0x218c4a(0x4f1), _0x20e31a[_0x218c4a(0x525)] = _0x218c4a(0x317);
        let _0x28166d = _0x107084[0x0][_0x218c4a(0x2ac)](0xa);
        _0x28166d[_0x218c4a(0x585)] = _0x218c4a(0x2c7), _0x28166d[_0x218c4a(0x525)] = _0x218c4a(0x317);
        let _0x217490 = _0x107084[0x0][_0x218c4a(0x2ac)](0xb);
        _0x217490[_0x218c4a(0x585)] = _0x218c4a(0x36f), _0x217490[_0x218c4a(0x525)] = 'info';
        let _0x474832 = _0x107084[0x0][_0x218c4a(0x2ac)](0xc);
        _0x474832['outerHTML'] = '<th\x20class=\x27deleteTh\x27><a\x20href=#\x20id=\x27id_predict\x27>stacks\x0acomming</a></th>', _0x474832[_0x218c4a(0x525)] = _0x218c4a(0x317);
        let _0x389e1c = _0x107084[0x0][_0x218c4a(0x2ac)](0xd);
        _0x389e1c[_0x218c4a(0x585)] = _0x218c4a(0x5b8), _0x389e1c[_0x218c4a(0x525)] = _0x218c4a(0x317);
        let _0x129f08 = _0x107084[0x0][_0x218c4a(0x2ac)](0xe);
        _0x129f08[_0x218c4a(0x585)] = _0x218c4a(0x29e), _0x129f08['className'] = _0x218c4a(0x317);
        var _0x33ee17 = [];
        for (let _0x5055aa = 0x1; _0x5055aa < _0x107084[_0x218c4a(0x5d6)] - 0x1; _0x5055aa++) {
            let _0x4201e2 = _0x107084[_0x5055aa][_0x218c4a(0x3c5)][0x2][_0x218c4a(0x5ad)][_0x218c4a(0x538)](/\d+\|\d+/)[0x0],
                _0x14b96f = _0x107084[_0x5055aa][_0x218c4a(0x3c5)][0x1][_0x218c4a(0x5ad)][_0x218c4a(0x538)](/\d+\|\d+/)[0x0],
                _0x187f5e = _0x107084[_0x5055aa][_0x218c4a(0x3c5)][0x0][_0x218c4a(0x5ad)][_0x218c4a(0x26b)]()[_0x218c4a(0x1c8)](/\s+/)[0x0][_0x218c4a(0x38b)](),
                _0x398f8a = _0x107084[_0x5055aa]['getElementsByClassName']('quickedit')[0x0][_0x218c4a(0x188)](_0x218c4a(0x2b3)),
                _0x551195, _0x333989;
            game_data[_0x218c4a(0x225)] == _0x218c4a(0x496) ? (_0x333989 = _0x107084[_0x5055aa][_0x218c4a(0x3c5)][_0x107084[_0x5055aa][_0x218c4a(0x3c5)]['length'] - 0x4][_0x218c4a(0x3c5)][0x0][_0x218c4a(0x148)][_0x218c4a(0x1c8)](_0x218c4a(0x35b))[0x1], _0x551195 = _0x107084[_0x5055aa][_0x218c4a(0x3c5)][_0x107084[_0x5055aa][_0x218c4a(0x3c5)][_0x218c4a(0x5d6)] - 0x4][_0x218c4a(0x3c5)][0x0]['innerText']) : (_0x333989 = _0x107084[_0x5055aa]['children'][_0x107084[_0x5055aa][_0x218c4a(0x3c5)]['length'] - 0x3][_0x218c4a(0x3c5)][0x0][_0x218c4a(0x148)][_0x218c4a(0x1c8)](_0x218c4a(0x35b))[0x1], _0x551195 = _0x107084[_0x5055aa][_0x218c4a(0x3c5)][_0x107084[_0x5055aa][_0x218c4a(0x3c5)][_0x218c4a(0x5d6)] - 0x3][_0x218c4a(0x3c5)][0x0][_0x218c4a(0x5ad)]);
            _0x33ee17[_0x218c4a(0x1fa)]({
                'coord': _0x4201e2,
                'player_id': _0x333989,
                'player_name_off': _0x551195,
                'nameLabel': _0x187f5e,
                'commandId': _0x398f8a
            });
            if (_0x3607a1[_0x218c4a(0x4d7)](_0x4201e2)) _0x3607a1[_0x218c4a(0x588)](_0x4201e2, parseInt(_0x3607a1[_0x218c4a(0x18a)](_0x4201e2)) + 0x1);
            else _0x3607a1['set'](_0x4201e2, 0x1);
            if (_0x276041[_0x218c4a(0x4d7)](_0x14b96f)) _0x276041['set'](_0x14b96f, parseInt(_0x276041[_0x218c4a(0x18a)](_0x14b96f)) + 0x1);
            else _0x276041[_0x218c4a(0x588)](_0x14b96f, 0x1);
        }
        var _0xd9a158 = new Date();
        console[_0x218c4a(0x533)](_0x218c4a(0x4f9) + (_0xd9a158 - _0x524d2f));
        for (let _0x5b0e79 = 0x1; _0x5b0e79 < _0x107084[_0x218c4a(0x5d6)] - 0x1; _0x5b0e79++) {
            var _0x5cc9e6 = '?',
                _0x5620ab = _0x218c4a(0x3ea),
                _0x523feb = '?',
                _0x284348 = '?',
                _0x5edd68 = '?',
                _0x33f845 = '?',
                _0x26d872 = '?',
                _0x7b8363 = '?',
                _0x5c8ae = '?',
                _0x437e45 = '?',
                _0x1e48f5 = _0x107084[_0x5b0e79][_0x218c4a(0x3c5)][_0x218c4a(0x5d6)];
            let _0x288071 = _0x33ee17[_0x5b0e79 - 0x1]['coord'],
                _0x1f519c = _0x33ee17[_0x5b0e79 - 0x1][_0x218c4a(0x366)],
                _0x3b0956 = _0x33ee17[_0x5b0e79 - 0x1]['player_name_off'],
                _0x451a8f = _0x33ee17[_0x5b0e79 - 0x1]['nameLabel'],
                _0x172201 = _0x33ee17[_0x5b0e79 - 0x1][_0x218c4a(0x27c)],
                _0x107aea = _0x107084[_0x5b0e79][_0x218c4a(0x3c5)][0x1][_0x218c4a(0x5ad)]['match'](/\d+\|\d+/)[0x0],
                _0x44f3c1 = _0x107084[_0x5b0e79][_0x218c4a(0x3c5)][0x2][_0x218c4a(0x5ad)][_0x218c4a(0x538)](/\d+\|\d+/)[0x0],
                _0x464b6d = _0x276041['get'](_0x107aea);
            _0x107084[_0x5b0e79][_0x218c4a(0x3c5)][0x1][_0x218c4a(0x3fd)](_0x218c4a(0x55e), _0x464b6d), _0x5cc9e6 = _0x218c4a(0x482) + _0x3607a1['get'](_0x288071) + _0x218c4a(0x2b8);
            let _0x7840c8;
            game_data[_0x218c4a(0x225)] == _0x218c4a(0x496) ? _0x7840c8 = _0x107084[_0x5b0e79][_0x218c4a(0x3c5)][_0x1e48f5 - 0x2][_0x218c4a(0x5ad)] : _0x7840c8 = _0x107084[_0x5b0e79][_0x218c4a(0x3c5)][_0x1e48f5 - 0x1][_0x218c4a(0x5ad)];
            let _0x49c90a = _0x7840c8[_0x218c4a(0x1c8)](':')[_0x218c4a(0x51a)](),
                _0x3cfaa2 = getLandTime(_0x7840c8);
            if (_0x107084[_0x5b0e79][_0x218c4a(0x612)](_0x218c4a(0x3d6))[0x0][_0x218c4a(0x14f)](_0x218c4a(0x183))[_0x218c4a(0x5d6)] == 0x2) {
                let _0x2cd6e3 = calcDistance(_0x107aea, _0x44f3c1),
                    _0x4b2536 = _0x107084[_0x5b0e79][_0x218c4a(0x612)](_0x218c4a(0x3d6))[0x0][_0x218c4a(0x14f)](_0x218c4a(0x183))[0x1][_0x218c4a(0x1a8)],
                    _0x21dcc4 = 0x0;
                if (_0x4b2536[_0x218c4a(0x25b)]('snob.png')) _0x21dcc4 = nobleSpeed * _0x2cd6e3;
                else {
                    if (_0x4b2536[_0x218c4a(0x25b)](_0x218c4a(0x126)) || _0x4b2536[_0x218c4a(0x25b)](_0x218c4a(0x566))) _0x21dcc4 = ramSpeed * _0x2cd6e3;
                    else {
                        if (_0x4b2536[_0x218c4a(0x25b)](_0x218c4a(0x522))) _0x21dcc4 = swordSpeed * _0x2cd6e3;
                        else _0x4b2536['includes'](_0x218c4a(0x645)) && (_0x21dcc4 = axeSpeed * _0x2cd6e3);
                    }
                }
                if (_0x21dcc4 > 0x0) {
                    _0x21dcc4 = Math[_0x218c4a(0x510)](_0x21dcc4 / 0x3e8) * 0x3e8;
                    let _0x54f36b = (parseDate(new Date(_0x3cfaa2)['getTime']() - _0x21dcc4) + ':' + _0x49c90a)[_0x218c4a(0x26b)]();
                    _0x26d872 = _0x218c4a(0x482) + _0x54f36b + _0x218c4a(0x2b8);
                    if (_0x259ea2['has'](_0x54f36b + '_' + _0x3b0956)) _0x7b8363 = '<h4>' + _0x259ea2[_0x218c4a(0x18a)](_0x54f36b + '_' + _0x3b0956)['replace'](_0x218c4a(0x123), '') + '</h4>';
                }
            } else {
                if (_0x451a8f == lang[_0x218c4a(0x331)]['toLowerCase']()) {
                    let _0x308d06 = _0x107084[_0x5b0e79][_0x218c4a(0x3c5)][_0x1e48f5 - 0x1]['innerText'][_0x218c4a(0x1c8)](':');
                    _0x308d06 = _0x308d06[0x0] * 0xe10 * 0x3e8 + _0x308d06[0x1] * 0x3c * 0x3e8 + _0x308d06[0x2] * 0x3e8;
                    let _0xf13ff2 = calcDistance(_0x107aea, _0x44f3c1),
                        _0x2f3d8b = 0x0;
                    if (_0x308d06 > ramSpeed * _0xf13ff2) _0x2f3d8b = nobleSpeed * _0xf13ff2;
                    else {
                        if (_0x308d06 > swordSpeed * _0xf13ff2) _0x2f3d8b = ramSpeed * _0xf13ff2;
                        else {
                            if (_0x308d06 > axeSpeed * _0xf13ff2) _0x2f3d8b = swordSpeed * _0xf13ff2;
                            else {
                                if (_0x308d06 > heavySpeed * _0xf13ff2) _0x2f3d8b = heavySpeed * _0xf13ff2;
                                else {
                                    if (_0x308d06 > lightSpeed * _0xf13ff2) _0x2f3d8b = lightSpeed * _0xf13ff2;
                                    else _0x308d06 > spySpeed * _0xf13ff2 && (_0x2f3d8b = spySpeed * _0xf13ff2);
                                }
                            }
                        }
                    }
                    if (_0x2f3d8b > 0x0) {
                        _0x2f3d8b = Math[_0x218c4a(0x510)](_0x2f3d8b / 0x3e8) * 0x3e8;
                        let _0x4332f2 = (parseDate(new Date(_0x3cfaa2)[_0x218c4a(0x505)]() - _0x2f3d8b) + ':' + _0x49c90a)['trim']();
                        _0x26d872 = _0x218c4a(0x482) + _0x4332f2 + '</h4>';
                        if (_0x259ea2[_0x218c4a(0x4d7)](_0x4332f2 + '_' + _0x3b0956)) _0x7b8363 = _0x218c4a(0x482) + _0x259ea2[_0x218c4a(0x18a)](_0x4332f2 + '_' + _0x3b0956)[_0x218c4a(0x632)](_0x218c4a(0x123), '') + _0x218c4a(0x2b8);
                    }
                }
            }
            if (_0xec1501[_0x218c4a(0x4d7)](_0x288071)) {
                let _0x164022 = _0xec1501[_0x218c4a(0x18a)](_0x288071);
                _0x164022[_0x218c4a(0x184)]((_0x5547cf, _0x529007) => {
                    const _0x300b0a = _0x218c4a;
                    return new Date(_0x5547cf[_0x300b0a(0x2e7)])['getTime']() < new Date(_0x529007['date_land'])[_0x300b0a(0x505)]() ? 0x1 : new Date(_0x5547cf[_0x300b0a(0x2e7)])['getTime']() > new Date(_0x529007[_0x300b0a(0x2e7)])['getTime']() ? -0x1 : 0x0;
                }), _0x5620ab = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22popup\x22\x20\x20onclick=\x27var\x20popup\x20=\x20document.getElementById(\x22tableInc' + _0x5b0e79 + (_0x218c4a(0x2b2) + _0x164022['length'] + _0x218c4a(0x28e)) + _0x5b0e79 + '\x22' + createTableIncomings(_0x164022) + _0x218c4a(0x1ed);
            }
            if (_0x37eea8[_0x218c4a(0x4d7)](_0x288071)) {
                let _0xd964e4, _0x4e0a14, _0x1531e5;
                var _0x285603 = _0x37eea8[_0x218c4a(0x18a)](_0x288071),
                    _0x4307c4 = ![];
                if (_0x288071 == _0x285603[_0x218c4a(0x465)]) _0xd964e4 = _0x285603[_0x218c4a(0x341)], _0x4e0a14 = _0x285603[_0x218c4a(0x47f)], _0x1531e5 = _0x285603[_0x218c4a(0x4f7)], _0x4307c4 = !![];
                else _0x288071 == _0x285603[_0x218c4a(0x44c)] ? (_0xd964e4 = _0x285603[_0x218c4a(0x3d9)], _0x4e0a14 = _0x285603['typeDefender'], _0x1531e5 = _0x285603[_0x218c4a(0x290)], _0x4307c4 = ![]) : (_0xd964e4 = _0x285603[_0x218c4a(0x4a4)], _0x4e0a14 = _0x285603['typeSupporter'], _0x1531e5 = _0x285603[_0x218c4a(0x17f)]);
                if (_0xd964e4 == _0x1f519c) {
                    let _0x18ce39 = document[_0x218c4a(0x36b)](_0x218c4a(0x4d8))[_0x218c4a(0x5ad)],
                        _0x1aab35 = document[_0x218c4a(0x36b)](_0x218c4a(0x239))[_0x218c4a(0x5ad)][_0x218c4a(0x1c8)]('/');
                    _0x1aab35 = _0x1aab35[0x1] + '/' + _0x1aab35[0x0] + '/' + _0x1aab35[0x2];
                    let _0x4c83dd = new Date(_0x1aab35 + '\x20' + _0x18ce39)['getTime'](),
                        _0x11a424 = new Date(_0x285603[_0x218c4a(0x325)]),
                        _0x567a89;
                    if (game_data[_0x218c4a(0x225)] == _0x218c4a(0x496)) _0x567a89 = parseFloat(_0x107084[_0x5b0e79][_0x218c4a(0x3c5)][_0x1e48f5 - 0x3][_0x218c4a(0x5ad)]);
                    else _0x567a89 = parseFloat(_0x107084[_0x5b0e79]['children'][_0x1e48f5 - 0x2]['innerText']);
                    let _0x2a5b5b = 0x0,
                        _0x4629ee;
                    game_data[_0x218c4a(0x225)] == _0x218c4a(0x496) ? _0x4629ee = _0x107084[_0x5b0e79][_0x218c4a(0x3c5)][_0x1e48f5 - 0x2][_0x218c4a(0x5ad)] : _0x4629ee = _0x107084[_0x5b0e79][_0x218c4a(0x3c5)][_0x1e48f5 - 0x1]['innerText'];
                    let _0x5450e3 = new Date(getLandTime(_0x4629ee)),
                        _0x77997 = '';
                    if (_0x107084[_0x5b0e79][_0x218c4a(0x3c5)][0x0][_0x218c4a(0x14f)]('img')[0x1] == undefined || _0x107084[_0x5b0e79][_0x218c4a(0x3c5)][0x0][_0x218c4a(0x14f)](_0x218c4a(0x183))[0x1] == null) _0x77997 = 'ram.png';
                    else _0x77997 = _0x107084[_0x5b0e79][_0x218c4a(0x3c5)][0x0]['getElementsByTagName'](_0x218c4a(0x183))[0x1]['src'];
                    if (_0x77997[_0x218c4a(0x25b)](_0x218c4a(0x572))) _0x2a5b5b = nobleSpeed * _0x567a89;
                    else {
                        if (_0x77997[_0x218c4a(0x25b)](_0x218c4a(0x126)) || _0x77997[_0x218c4a(0x25b)](_0x218c4a(0x566))) _0x2a5b5b = ramSpeed * _0x567a89;
                        else {
                            if (_0x77997[_0x218c4a(0x25b)](_0x218c4a(0x522))) _0x2a5b5b = swordSpeed * _0x567a89;
                            else _0x77997[_0x218c4a(0x25b)](_0x218c4a(0x645)) && (_0x2a5b5b = axeSpeed * _0x567a89);
                        }
                    }
                    _0x4c83dd -= _0x2a5b5b;
                    if (_0x4307c4 == ![]) _0x2a5b5b = 0x0;
                    if (_0x4e0a14 == _0x218c4a(0x181)) {
                        let _0x129c0c = _0x5450e3[_0x218c4a(0x505)]() - _0x2a5b5b - _0x11a424['getTime']();
                        _0x1531e5 = calcProductionTroupes(_0x129c0c, _0x1531e5), _0x1531e5 = Math[_0x218c4a(0x510)](_0x1531e5 * 0xa) / 0xa + '%';
                    } else _0x1531e5 = '?';
                    let _0x46c25f = new Date(_0x285603[_0x218c4a(0x325)]),
                        _0x23dc86 = new Date(_0x4c83dd),
                        _0x12683d = _0x23dc86 - _0x46c25f;
                    if (_0x12683d <= 0x0) _0x12683d = 0x0;
                    let _0x54d2d7 = ('00' + parseInt(_0x12683d / (0x18 * 0xe10 * 0x3e8)))[_0x218c4a(0x22c)](-0x3),
                        _0x3e91c2 = ('0' + parseInt(_0x12683d / (0xe10 * 0x3e8) % 0x18))['slice'](-0x2),
                        _0x43357e = ('0' + parseInt(_0x12683d / (0x3c * 0x3e8) % 0x3c))[_0x218c4a(0x22c)](-0x2),
                        _0x19f7b5 = ('0' + parseInt(_0x12683d / 0x3e8 % 0x3c))['slice'](-0x2);
                    _0x523feb = '\x20<h4\x20class=\x27cls_type\x27>' + _0x4e0a14 + '</h4>', _0x284348 = _0x218c4a(0x1a9) + _0x1531e5 + _0x218c4a(0x2b8), _0x285603['time_return'] == 0x0 || _0x285603[_0x218c4a(0x425)] == undefined ? _0x5edd68 = _0x218c4a(0x43d) + _0x54d2d7 + ':' + _0x3e91c2 + ':' + _0x43357e + ':' + _0x19f7b5 + _0x218c4a(0x2b8) : _0x5edd68 = _0x218c4a(0x640) + _0x285603[_0x218c4a(0x425)] + '\x27>' + _0x54d2d7 + ':' + _0x3e91c2 + ':' + _0x43357e + ':' + _0x19f7b5 + '</h4>', _0x33f845 = _0x218c4a(0x3b9) + _0x5b0e79 + _0x218c4a(0x48d) + _0x5b0e79 + '\x22' + createReport(_0x285603) + '</table></div>';
                }
            }
            let _0x284503 = '?',
                _0x1f41be = '?';
            if (_0x39fffa['has'](_0x172201)) {
                let _0x31c362 = _0x39fffa[_0x218c4a(0x18a)](_0x172201);
                _0x1f41be = _0x218c4a(0x482) + _0x31c362[_0x218c4a(0x15c)] + _0x218c4a(0x2b8);
                let _0x4af641 = '<h4>?</h4>';
                (_0x31c362[_0x218c4a(0x15c)] != _0x218c4a(0x647) || _0x31c362[_0x218c4a(0x2bd)] == !![]) && (_0x4af641 = _0x218c4a(0x36d) + _0x31c362['troops'][_0x218c4a(0x4ae)] + _0x218c4a(0x280) + _0x31c362['troops'][_0x218c4a(0x39f)] + _0x218c4a(0x3e1) + _0x31c362[_0x218c4a(0x442)][_0x218c4a(0x206)] + _0x218c4a(0x5ce) + _0x31c362['troops']['marcher'] + _0x218c4a(0x639) + _0x31c362[_0x218c4a(0x442)][_0x218c4a(0x450)] + _0x218c4a(0x413) + _0x31c362[_0x218c4a(0x442)][_0x218c4a(0x38a)] + _0x218c4a(0x339) + _0x31c362[_0x218c4a(0x442)][_0x218c4a(0x609)] + _0x218c4a(0x51b), _0x31c362['hasNoble'] == !![] ? _0x4af641 = _0x4af641['replace'](_0x218c4a(0x208), _0x218c4a(0x41a)) : _0x4af641 = _0x4af641[_0x218c4a(0x632)]('backgroundNoble', ''), _0x31c362[_0x218c4a(0x37d)] != undefined ? _0x4af641 = _0x4af641[_0x218c4a(0x632)](_0x218c4a(0x303), '(' + _0x31c362[_0x218c4a(0x37d)] + ')') : _0x4af641 = _0x4af641[_0x218c4a(0x632)]('(target)', '')), _0x284503 = _0x4af641;
            }
            _0x12aaea[_0x218c4a(0x4d7)](_0x107aea) && (_0x5c8ae = _0x218c4a(0x482) + (_0x12aaea['get'](_0x107aea) / 0x3e8)[_0x218c4a(0x1ef)](0x1) + 'k</h4>'), _0x4c62eb[_0x218c4a(0x4d7)](_0x107aea) && (_0x437e45 = '<h4>' + (_0x4c62eb['get'](_0x107aea) / 0x3e8)['toFixed'](0x1) + _0x218c4a(0x3a3)), _0x55ad50 = _0x107084[_0x5b0e79]['insertCell'](0x3), _0x55ad50[_0x218c4a(0x4c5)] = _0x5cc9e6, _0x55ad50['className'] = _0x218c4a(0x323), _0xda6d6 = _0x107084[_0x5b0e79][_0x218c4a(0x2ac)](0x4), _0xda6d6[_0x218c4a(0x4c5)] = _0x5620ab, _0xda6d6[_0x218c4a(0x525)] = _0x218c4a(0x317), _0xdd2e86 = _0x107084[_0x5b0e79][_0x218c4a(0x2ac)](0x5), _0xdd2e86['innerHTML'] = _0x523feb, _0xdd2e86[_0x218c4a(0x525)] = _0x218c4a(0x317), _0x388632 = _0x107084[_0x5b0e79]['insertCell'](0x6), _0x388632[_0x218c4a(0x4c5)] = _0x284348, _0x388632[_0x218c4a(0x525)] = _0x218c4a(0x317), _0x43b75d = _0x107084[_0x5b0e79][_0x218c4a(0x2ac)](0x7), _0x43b75d['innerHTML'] = _0x5edd68, _0x43b75d[_0x218c4a(0x525)] = _0x218c4a(0x317), _0x16a139 = _0x107084[_0x5b0e79]['insertCell'](0x8), _0x16a139[_0x218c4a(0x4c5)] = _0x33f845, _0x16a139[_0x218c4a(0x525)] = _0x218c4a(0x317), _0x20e31a = _0x107084[_0x5b0e79][_0x218c4a(0x2ac)](0x9), _0x20e31a['innerHTML'] = _0x26d872, _0x20e31a[_0x218c4a(0x525)] = _0x218c4a(0x317), _0x28166d = _0x107084[_0x5b0e79][_0x218c4a(0x2ac)](0xa), _0x28166d[_0x218c4a(0x4c5)] = _0x7b8363, _0x28166d[_0x218c4a(0x525)] = _0x218c4a(0x317), _0x217490 = _0x107084[_0x5b0e79][_0x218c4a(0x2ac)](0xb), _0x217490['innerHTML'] = _0x5c8ae, _0x217490[_0x218c4a(0x525)] = _0x218c4a(0x317), _0x474832 = _0x107084[_0x5b0e79][_0x218c4a(0x2ac)](0xc), _0x474832[_0x218c4a(0x4c5)] = _0x437e45, _0x474832['className'] = _0x218c4a(0x317), _0x389e1c = _0x107084[_0x5b0e79][_0x218c4a(0x2ac)](0xd), _0x389e1c['innerHTML'] = _0x1f41be, _0x389e1c[_0x218c4a(0x525)] = _0x218c4a(0x317), _0x129f08 = _0x107084[_0x5b0e79][_0x218c4a(0x2ac)](0xe), _0x129f08[_0x218c4a(0x4c5)] = _0x284503, _0x129f08[_0x218c4a(0x525)] = 'info';
        }
        $(_0x218c4a(0x368))[_0x218c4a(0x501)](), $(_0x218c4a(0x2f1))[_0x218c4a(0x5b2)](_0x107084), sortIncomings(), highLightIncomings(), counterTime();
        var _0xd9a158 = new Date();
        console[_0x218c4a(0x533)]('add\x20inf\x20final:\x20' + (_0xd9a158 - _0x524d2f)), $('document')[_0x218c4a(0x3fa)](function() {
            const _0x24eb89 = _0x218c4a;
            CommandsOverview[_0x24eb89(0x31c)](), UI[_0x24eb89(0x345)](_0x24eb89(0x313)), $('.quickedit')[_0x24eb89(0x59b)]({
                'url': TribalWars[_0x24eb89(0x5a7)]('POST', _0x24eb89(0x247), {
                    'ajaxaction': 'edit_other_comment',
                    'id': _0x24eb89(0x59e)
                })
            }), Command[_0x24eb89(0x31c)]();
        });
    }
}
window.moreInfo=moreInfo;
function sortIncomings() {
    const _0x2e16cf = _0x555ef8;
    var _0x382e78 = document['getElementById'](_0x2e16cf(0x646))['lastElementChild'][_0x2e16cf(0x3c5)],
        _0x5dbed4 = document[_0x2e16cf(0x36b)](_0x2e16cf(0x646))[_0x2e16cf(0x4ef)],
        _0x36f237 = _0x382e78[_0x382e78[_0x2e16cf(0x5d6)] - 0x1],
        _0x42ff25 = [],
        _0x1eeb60 = [];
    for (let _0x4cc6f0 = 0x1; _0x4cc6f0 < _0x382e78['length'] - 0x1; _0x4cc6f0++) {
        _0x382e78[_0x4cc6f0][_0x2e16cf(0x55b)]['contains'](_0x2e16cf(0x3e8)) && (_0x382e78[_0x4cc6f0][_0x2e16cf(0x55b)]['remove'](_0x2e16cf(0x3e8)), _0x382e78[_0x4cc6f0][_0x2e16cf(0x55b)][_0x2e16cf(0x613)]('row_b')), _0x382e78[_0x4cc6f0]['classList'][_0x2e16cf(0x547)](_0x2e16cf(0x1ee)) && _0x382e78[_0x4cc6f0][_0x2e16cf(0x55b)][_0x2e16cf(0x501)](_0x2e16cf(0x1ee)), _0x42ff25[_0x2e16cf(0x1fa)](_0x382e78[_0x4cc6f0]);
    }
    var _0x2978cf = 0x1;
    _0x382e78[_0x2e16cf(0x5d6)] > 0x2 && (_0x2978cf = _0x382e78[0x1][_0x2e16cf(0x3c5)][_0x2e16cf(0x5d6)]);
    document[_0x2e16cf(0x36b)]('id_nr')[_0x2e16cf(0x1c0)](_0x2e16cf(0x30f), function() {
        const _0x1bf19e = _0x2e16cf;
        var _0x322e55 = new Date();
        $(_0x1bf19e(0x4db))[_0x1bf19e(0x501)](), _0x42ff25['sort']((_0x5cdedf, _0x1949c5) => {
            const _0x38a29b = _0x1bf19e;
            return parseInt(_0x5cdedf[_0x38a29b(0x3c5)][0x3]['innerText']) < parseInt(_0x1949c5['children'][0x3]['innerText']) ? 0x1 : parseInt(_0x5cdedf[_0x38a29b(0x3c5)][0x3][_0x38a29b(0x5ad)]) > parseInt(_0x1949c5[_0x38a29b(0x3c5)][0x3][_0x38a29b(0x5ad)]) ? -0x1 : _0x5cdedf[_0x38a29b(0x3c5)][0x2][_0x38a29b(0x5ad)] < _0x1949c5[_0x38a29b(0x3c5)][0x2][_0x38a29b(0x5ad)] ? 0x1 : _0x5cdedf[_0x38a29b(0x3c5)][0x2]['innerText'] > _0x1949c5[_0x38a29b(0x3c5)][0x2][_0x38a29b(0x5ad)] ? -0x1 : 0x0;
        });
        for (let _0x24c20c = 0x0; _0x24c20c < _0x42ff25[_0x1bf19e(0x5d6)]; _0x24c20c++) {
            _0x5dbed4[_0x1bf19e(0x18f)](_0x42ff25[_0x24c20c]);
        }
        _0x5dbed4['appendChild'](_0x36f237);
        for (let _0x3e114e = 0x0; _0x3e114e < _0x42ff25[_0x1bf19e(0x5d6)]; _0x3e114e++) {
            _0x1eeb60['push']({
                'coord_attacker': _0x42ff25[_0x3e114e][_0x1bf19e(0x3c5)][0x2]['innerText'],
                'nr': parseInt(_0x42ff25[_0x3e114e]['children'][0x3][_0x1bf19e(0x5ad)])
            });
        }
        var _0x1beb57 = 0x2;
        for (let _0x1f4f70 = 0x0; _0x1f4f70 < _0x42ff25[_0x1bf19e(0x5d6)] - 0x1; _0x1f4f70++) {
            let _0x5af1e3 = _0x1eeb60[_0x1f4f70]['nr'];
            if (_0x5af1e3 > 0x1 && _0x1eeb60[_0x1f4f70]['coord_attacker'] != _0x1eeb60[_0x1f4f70 + 0x1][_0x1bf19e(0x491)]) {
                var _0x4e4f66 = document[_0x1bf19e(0x36b)]('incomings_table')['lastElementChild'],
                    _0x255f71 = _0x4e4f66[_0x1bf19e(0x21d)](_0x1beb57);
                _0x255f71[_0x1bf19e(0x525)] = _0x1bf19e(0x3ff);
                for (let _0x4a1e4d = 0x0; _0x4a1e4d < 0x1; _0x4a1e4d++) {
                    let _0x8f306a = _0x255f71['insertCell']();
                    _0x8f306a[_0x1bf19e(0x3fd)](_0x1bf19e(0x2bb), _0x2978cf), _0x8f306a[_0x1bf19e(0x55b)]['add'](_0x1bf19e(0x1ee));
                    var _0x24f758 = document[_0x1bf19e(0x476)]('--');
                    _0x8f306a[_0x1bf19e(0x18f)](_0x24f758);
                }
                _0x1beb57++;
            } else {
                if (_0x5af1e3 == 0x1) break;
            }
            _0x1beb57++;
        }
        _0x1eeb60 = [];
        var _0x4a1760 = new Date();
        console['log'](_0x4a1760 - _0x322e55);
    }), document[_0x2e16cf(0x36b)](_0x2e16cf(0x549))[_0x2e16cf(0x1c0)](_0x2e16cf(0x30f), function() {
        const _0x3a81b2 = _0x2e16cf;
        var _0x94a03c = new Date();
        $(_0x3a81b2(0x4db))[_0x3a81b2(0x501)](), _0x42ff25[_0x3a81b2(0x184)]((_0x5f02ab, _0xfeea48) => {
            const _0x35ff39 = _0x3a81b2;
            return parseInt(_0x5f02ab['children'][0x4]['innerText']) < parseInt(_0xfeea48['children'][0x4][_0x35ff39(0x5ad)]) ? 0x1 : parseInt(_0x5f02ab[_0x35ff39(0x3c5)][0x4][_0x35ff39(0x5ad)]) > parseInt(_0xfeea48[_0x35ff39(0x3c5)][0x4][_0x35ff39(0x5ad)]) ? -0x1 : _0x5f02ab[_0x35ff39(0x3c5)][0x2]['innerText'] < _0xfeea48['children'][0x2]['innerText'] ? 0x1 : _0x5f02ab[_0x35ff39(0x3c5)][0x2][_0x35ff39(0x5ad)] > _0xfeea48[_0x35ff39(0x3c5)][0x2][_0x35ff39(0x5ad)] ? -0x1 : 0x0;
        });
        for (let _0x378a22 = 0x0; _0x378a22 < _0x42ff25[_0x3a81b2(0x5d6)]; _0x378a22++) {
            _0x5dbed4[_0x3a81b2(0x18f)](_0x42ff25[_0x378a22]);
        }
        _0x5dbed4['appendChild'](_0x36f237);
        for (let _0x33bdf8 = 0x0; _0x33bdf8 < _0x42ff25[_0x3a81b2(0x5d6)]; _0x33bdf8++) {
            _0x1eeb60[_0x3a81b2(0x1fa)]({
                'coord_attacker': _0x42ff25[_0x33bdf8][_0x3a81b2(0x3c5)][0x2][_0x3a81b2(0x5ad)],
                'nr': parseInt(_0x42ff25[_0x33bdf8][_0x3a81b2(0x3c5)][0x4][_0x3a81b2(0x5ad)])
            });
        }
        var _0x209b0a = 0x2;
        for (let _0x510920 = 0x0; _0x510920 < _0x42ff25[_0x3a81b2(0x5d6)] - 0x1; _0x510920++) {
            let _0x3bb7e8 = _0x1eeb60[_0x510920]['nr'];
            if (_0x3bb7e8 > 0x1 && _0x1eeb60[_0x510920][_0x3a81b2(0x491)] != _0x1eeb60[_0x510920 + 0x1][_0x3a81b2(0x491)]) {
                var _0x2fca03 = document[_0x3a81b2(0x36b)](_0x3a81b2(0x646))[_0x3a81b2(0x4ef)],
                    _0x1d1744 = _0x2fca03[_0x3a81b2(0x21d)](_0x209b0a);
                _0x1d1744[_0x3a81b2(0x525)] = _0x3a81b2(0x3ff);
                for (let _0x3d095c = 0x0; _0x3d095c < 0x1; _0x3d095c++) {
                    let _0x36817c = _0x1d1744['insertCell']();
                    _0x36817c[_0x3a81b2(0x3fd)](_0x3a81b2(0x2bb), _0x2978cf), _0x36817c['classList']['add'](_0x3a81b2(0x1ee));
                    var _0x221dae = document[_0x3a81b2(0x476)]('--');
                    _0x36817c[_0x3a81b2(0x18f)](_0x221dae);
                }
                _0x209b0a++;
            } else {
                if (_0x3bb7e8 == 0x1) break;
            }
            _0x209b0a++;
        }
        _0x1eeb60 = [];
        var _0x2ae8ac = new Date();
        console[_0x3a81b2(0x533)](_0x2ae8ac - _0x94a03c);
    }), document[_0x2e16cf(0x36b)](_0x2e16cf(0x624))[_0x2e16cf(0x1c0)]('click', function() {
        const _0x2fd9c0 = _0x2e16cf;
        var _0x143ac2 = new Date();
        $(_0x2fd9c0(0x4db))[_0x2fd9c0(0x501)](), _0x42ff25[_0x2fd9c0(0x184)]((_0x447cc9, _0x170998) => {
            const _0x2c9926 = _0x2fd9c0;
            return _0x447cc9['children'][0x5]['innerText'] < _0x170998[_0x2c9926(0x3c5)][0x5][_0x2c9926(0x5ad)] ? 0x1 : _0x447cc9[_0x2c9926(0x3c5)][0x5][_0x2c9926(0x5ad)] > _0x170998['children'][0x5][_0x2c9926(0x5ad)] ? -0x1 : _0x447cc9[_0x2c9926(0x3c5)][0x2][_0x2c9926(0x5ad)] < _0x170998['children'][0x2]['innerText'] ? 0x1 : _0x447cc9['children'][0x2][_0x2c9926(0x5ad)] > _0x170998[_0x2c9926(0x3c5)][0x2]['innerText'] ? -0x1 : 0x0;
        });
        for (let _0x546737 = 0x0; _0x546737 < _0x42ff25[_0x2fd9c0(0x5d6)]; _0x546737++) {
            _0x5dbed4[_0x2fd9c0(0x18f)](_0x42ff25[_0x546737]);
        }
        _0x5dbed4[_0x2fd9c0(0x18f)](_0x36f237);
        var _0x24cccb = 0x2;
        for (let _0x55cbbf = 0x0; _0x55cbbf < _0x42ff25[_0x2fd9c0(0x5d6)] - 0x1; _0x55cbbf++) {
            let _0x1935b6 = _0x42ff25[_0x55cbbf][_0x2fd9c0(0x3c5)][0x5][_0x2fd9c0(0x5ad)];
            if (_0x1935b6 != '?' && _0x42ff25[_0x55cbbf]['children'][0x5][_0x2fd9c0(0x5ad)] != _0x42ff25[_0x55cbbf + 0x1]['children'][0x5][_0x2fd9c0(0x5ad)]) {
                var _0x3ab2d6 = document[_0x2fd9c0(0x36b)]('incomings_table')[_0x2fd9c0(0x4ef)],
                    _0x2dc6f2 = _0x3ab2d6[_0x2fd9c0(0x21d)](_0x24cccb);
                _0x2dc6f2[_0x2fd9c0(0x525)] = _0x2fd9c0(0x3ff);
                for (let _0x2e0033 = 0x0; _0x2e0033 < 0x1; _0x2e0033++) {
                    let _0xeb1dbf = _0x2dc6f2[_0x2fd9c0(0x2ac)]();
                    _0xeb1dbf[_0x2fd9c0(0x3fd)]('colspan', _0x2978cf), _0xeb1dbf[_0x2fd9c0(0x55b)]['add'](_0x2fd9c0(0x1ee));
                    var _0x5c43c0 = document[_0x2fd9c0(0x476)]('--');
                    _0xeb1dbf[_0x2fd9c0(0x18f)](_0x5c43c0);
                }
                _0x24cccb++;
            }
            _0x24cccb++;
        }
        _0x1eeb60 = [];
        var _0x2d5a8f = new Date();
        console[_0x2fd9c0(0x533)](_0x2d5a8f - _0x143ac2);
    }), document[_0x2e16cf(0x36b)](_0x2e16cf(0x2fa))['addEventListener'](_0x2e16cf(0x30f), function() {
        const _0x1d7acb = _0x2e16cf;
        var _0x54b87a = new Date();
        console[_0x1d7acb(0x533)](_0x1d7acb(0x5c5)), console['log']($(_0x1d7acb(0x4db))), $(_0x1d7acb(0x4db))[_0x1d7acb(0x501)](), _0x42ff25[_0x1d7acb(0x184)]((_0x4d1bd6, _0x3b0a59) => {
            const _0x822e3f = _0x1d7acb;
            if (_0x4d1bd6[_0x822e3f(0x3c5)][0x6][_0x822e3f(0x5ad)] == '?') var _0xe207fb = 0x1e8480;
            else var _0xe207fb = parseFloat(_0x4d1bd6[_0x822e3f(0x3c5)][0x6][_0x822e3f(0x5ad)]);
            if (_0x3b0a59[_0x822e3f(0x3c5)][0x6][_0x822e3f(0x5ad)] == '?') var _0x128dee = 0x1e8480;
            else var _0x128dee = parseFloat(_0x3b0a59[_0x822e3f(0x3c5)][0x6][_0x822e3f(0x5ad)]);
            return _0xe207fb > _0x128dee ? 0x1 : _0xe207fb < _0x128dee ? -0x1 : _0x4d1bd6[_0x822e3f(0x3c5)][0x2][_0x822e3f(0x5ad)] < _0x3b0a59['children'][0x2]['innerText'] ? 0x1 : _0x4d1bd6[_0x822e3f(0x3c5)][0x2][_0x822e3f(0x5ad)] > _0x3b0a59['children'][0x2]['innerText'] ? -0x1 : 0x0;
        });
        for (let _0x5dcbef = 0x0; _0x5dcbef < _0x42ff25[_0x1d7acb(0x5d6)]; _0x5dcbef++) {
            _0x5dbed4[_0x1d7acb(0x18f)](_0x42ff25[_0x5dcbef]);
        }
        _0x1eeb60 = [], _0x5dbed4[_0x1d7acb(0x18f)](_0x36f237);
        let _0x1b2f33 = 0x1;
        for (let _0x499d60 = 0x0; _0x499d60 < _0x42ff25[_0x1d7acb(0x5d6)]; _0x499d60++) {
            console['log'](_0x499d60);
            if (_0x499d60 % 0x4 == 0x0 && _0x499d60 > 0x0) {
                console[_0x1d7acb(0x533)](_0x1d7acb(0x3a0) + _0x499d60);
                var _0x7cd0c1 = document['getElementById']('incomings_table')['lastElementChild'],
                    _0x30d6a7 = _0x7cd0c1[_0x1d7acb(0x21d)](_0x1b2f33);
                _0x30d6a7['className'] = _0x1d7acb(0x3ff);
                for (let _0xe605a4 = 0x0; _0xe605a4 < 0x1; _0xe605a4++) {
                    let _0xfb3baa = _0x30d6a7[_0x1d7acb(0x2ac)]();
                    _0xfb3baa[_0x1d7acb(0x3fd)](_0x1d7acb(0x2bb), _0x2978cf), _0xfb3baa[_0x1d7acb(0x55b)][_0x1d7acb(0x613)]('selected');
                    var _0xdb6cc7 = document['createTextNode']('--');
                    _0xfb3baa[_0x1d7acb(0x18f)](_0xdb6cc7);
                }
                _0x1b2f33++;
            }
            _0x1b2f33++;
        }
        var _0x53ca5c = new Date();
        console[_0x1d7acb(0x533)](_0x53ca5c - _0x54b87a);
    }), document[_0x2e16cf(0x36b)](_0x2e16cf(0x279))[_0x2e16cf(0x1c0)]('click', function() {
        const _0x10bf26 = _0x2e16cf;
        var _0x1c533d = new Date();
        $(_0x10bf26(0x4db))['remove'](), _0x42ff25[_0x10bf26(0x184)]((_0x34a669, _0x12f61e) => {
            const _0x473de8 = _0x10bf26;
            if (_0x34a669['children'][0x7][_0x473de8(0x5ad)] == '?') var _0x5bc271 = 0x2540be400;
            else var _0x155b29 = _0x34a669[_0x473de8(0x3c5)][0x7][_0x473de8(0x5ad)]['split'](':'),
                _0x5bc271 = parseInt(_0x155b29[0x0]) * 0x18 * 0xe10 + parseInt(_0x155b29[0x1]) * 0xe10 + parseInt(_0x155b29[0x2]) * 0x3c + parseInt(_0x155b29[0x3]);
            if (_0x12f61e[_0x473de8(0x3c5)][0x7][_0x473de8(0x5ad)] == '?') var _0x59e35e = 0x2540be400;
            else var _0x155b29 = _0x12f61e['children'][0x7][_0x473de8(0x5ad)]['split'](':'),
                _0x59e35e = parseInt(_0x155b29[0x0]) * 0x18 * 0xe10 + parseInt(_0x155b29[0x1]) * 0xe10 + parseInt(_0x155b29[0x2]) * 0x3c + parseInt(_0x155b29[0x3]);
            return _0x5bc271 > _0x59e35e ? 0x1 : _0x5bc271 < _0x59e35e ? -0x1 : _0x34a669[_0x473de8(0x3c5)][0x2]['innerText'] < _0x12f61e[_0x473de8(0x3c5)][0x2][_0x473de8(0x5ad)] ? 0x1 : _0x34a669[_0x473de8(0x3c5)][0x2][_0x473de8(0x5ad)] > _0x12f61e[_0x473de8(0x3c5)][0x2][_0x473de8(0x5ad)] ? -0x1 : 0x0;
        });
        for (let _0x2fa3de = 0x0; _0x2fa3de < _0x42ff25['length']; _0x2fa3de++) {
            _0x5dbed4[_0x10bf26(0x18f)](_0x42ff25[_0x2fa3de]);
        }
        _0x1eeb60 = [], _0x5dbed4[_0x10bf26(0x18f)](_0x36f237);
        let _0x5093cd = 0x1;
        for (let _0x409ed1 = 0x0; _0x409ed1 < _0x42ff25[_0x10bf26(0x5d6)]; _0x409ed1++) {
            console[_0x10bf26(0x533)](_0x409ed1);
            if (_0x409ed1 % 0x4 == 0x0 && _0x409ed1 > 0x0) {
                console[_0x10bf26(0x533)](_0x10bf26(0x3a0) + _0x409ed1);
                var _0x2ace86 = document[_0x10bf26(0x36b)](_0x10bf26(0x646))[_0x10bf26(0x4ef)],
                    _0x37b134 = _0x2ace86[_0x10bf26(0x21d)](_0x5093cd);
                _0x37b134[_0x10bf26(0x525)] = _0x10bf26(0x3ff);
                for (let _0x18b05d = 0x0; _0x18b05d < 0x1; _0x18b05d++) {
                    let _0x46ab16 = _0x37b134[_0x10bf26(0x2ac)]();
                    _0x46ab16[_0x10bf26(0x3fd)]('colspan', _0x2978cf), _0x46ab16['classList'][_0x10bf26(0x613)](_0x10bf26(0x1ee));
                    var _0x143f33 = document[_0x10bf26(0x476)]('--');
                    _0x46ab16[_0x10bf26(0x18f)](_0x143f33);
                }
                _0x5093cd++;
            }
            _0x5093cd++;
        }
        var _0x93c5e0 = new Date();
        console[_0x10bf26(0x533)](_0x93c5e0 - _0x1c533d);
    }), document[_0x2e16cf(0x36b)]('id_launch_time')[_0x2e16cf(0x1c0)](_0x2e16cf(0x30f), function() {
        const _0x2d4f7c = _0x2e16cf;
        var _0x500618 = new Date();
        $(_0x2d4f7c(0x4db))[_0x2d4f7c(0x501)](), _0x42ff25[_0x2d4f7c(0x184)]((_0x5a4d7e, _0x4e2ebe) => {
            const _0x329d1c = _0x2d4f7c;
            if (_0x5a4d7e[_0x329d1c(0x3c5)][0x9]['innerText'] == '?') var _0x54cea7 = 0x0;
            else var _0x908be3 = _0x5a4d7e[_0x329d1c(0x3c5)][0x9][_0x329d1c(0x5ad)],
                _0x54cea7 = new Date(_0x908be3)['getTime']();
            if (_0x4e2ebe['children'][0x9]['innerText'] == '?') var _0x47fa47 = 0x0;
            else var _0x908be3 = _0x4e2ebe[_0x329d1c(0x3c5)][0x9][_0x329d1c(0x5ad)],
                _0x47fa47 = new Date(_0x908be3)[_0x329d1c(0x505)]();
            return _0x54cea7 > _0x47fa47 ? 0x1 : _0x54cea7 < _0x47fa47 ? -0x1 : _0x5a4d7e[_0x329d1c(0x3c5)][0x2][_0x329d1c(0x5ad)] < _0x4e2ebe[_0x329d1c(0x3c5)][0x2][_0x329d1c(0x5ad)] ? 0x1 : _0x5a4d7e[_0x329d1c(0x3c5)][0x2][_0x329d1c(0x5ad)] > _0x4e2ebe[_0x329d1c(0x3c5)][0x2][_0x329d1c(0x5ad)] ? -0x1 : 0x0;
        });
        for (let _0x7f777e = 0x0; _0x7f777e < _0x42ff25[_0x2d4f7c(0x5d6)]; _0x7f777e++) {
            _0x5dbed4[_0x2d4f7c(0x18f)](_0x42ff25[_0x7f777e]);
        }
        _0x1eeb60 = [], _0x5dbed4[_0x2d4f7c(0x18f)](_0x36f237);
        let _0x52aec0 = 0x2;
        for (let _0x4ac46c = 0x0; _0x4ac46c < _0x42ff25[_0x2d4f7c(0x5d6)] - 0x1; _0x4ac46c++) {
            if (_0x42ff25[_0x4ac46c]['children'][0xb][_0x2d4f7c(0x5ad)] != _0x42ff25[_0x4ac46c + 0x1]['children'][0xb]['innerText'] && _0x4ac46c > 0x0) {
                var _0x14fb29 = document[_0x2d4f7c(0x36b)](_0x2d4f7c(0x646))[_0x2d4f7c(0x4ef)],
                    _0x4ccd8b = _0x14fb29[_0x2d4f7c(0x21d)](_0x52aec0);
                _0x4ccd8b[_0x2d4f7c(0x525)] = _0x2d4f7c(0x3ff);
                for (let _0x22e408 = 0x0; _0x22e408 < 0x1; _0x22e408++) {
                    let _0x296c2a = _0x4ccd8b[_0x2d4f7c(0x2ac)]();
                    _0x296c2a[_0x2d4f7c(0x3fd)](_0x2d4f7c(0x2bb), _0x2978cf), _0x296c2a['classList'][_0x2d4f7c(0x613)]('selected');
                    var _0x40d309 = document[_0x2d4f7c(0x476)]('--');
                    _0x296c2a['appendChild'](_0x40d309);
                }
                _0x52aec0++;
            }
            _0x52aec0++;
        }
        var _0x25b51f = new Date();
        console[_0x2d4f7c(0x533)](_0x25b51f - _0x500618);
    });
    var _0x4422f9 = document[_0x2e16cf(0x36b)](_0x2e16cf(0x646))['lastElementChild'][_0x2e16cf(0x3c5)][0x0]['children'][0x1];
    _0x4422f9 = _0x4422f9[_0x2e16cf(0x14f)]('a')[0x0], _0x4422f9['outerHTML'] = '<a\x20href=\x27#\x27\x20id=\x27nr_dest\x27>' + _0x4422f9[_0x2e16cf(0x4c5)] + _0x2e16cf(0x515), document[_0x2e16cf(0x36b)]('nr_dest')[_0x2e16cf(0x1c0)](_0x2e16cf(0x30f), function() {
        const _0x9ced0a = _0x2e16cf;
        console['log']('aici');
        var _0x26ff7a = new Date();
        let _0x2e69d7 = _0x42ff25[0x0]['children']['length'];
        $(_0x9ced0a(0x4db))['remove'](), _0x42ff25[_0x9ced0a(0x184)]((_0x33b9c3, _0x5d169e) => {
            const _0x5dffb4 = _0x9ced0a;
            return new Date(getLandTime(_0x33b9c3[_0x5dffb4(0x3c5)][_0x2e69d7 - 0x2][_0x5dffb4(0x5ad)]))[_0x5dffb4(0x505)]() > new Date(getLandTime(_0x5d169e[_0x5dffb4(0x3c5)][_0x2e69d7 - 0x2][_0x5dffb4(0x5ad)]))[_0x5dffb4(0x505)]() ? 0x1 : new Date(getLandTime(_0x33b9c3[_0x5dffb4(0x3c5)][_0x2e69d7 - 0x2][_0x5dffb4(0x5ad)]))[_0x5dffb4(0x505)]() < new Date(getLandTime(_0x5d169e[_0x5dffb4(0x3c5)][_0x2e69d7 - 0x2]['innerText']))[_0x5dffb4(0x505)]() ? -0x1 : 0x0;
        }), _0x42ff25['sort']((_0x18ec42, _0x9cc8e0) => {
            const _0x679c3 = _0x9ced0a;
            return parseInt(_0x18ec42[_0x679c3(0x3c5)][0x1]['getAttribute'](_0x679c3(0x55e))) < parseInt(_0x9cc8e0['children'][0x1][_0x679c3(0x188)](_0x679c3(0x55e))) ? 0x1 : parseInt(_0x18ec42[_0x679c3(0x3c5)][0x1]['getAttribute'](_0x679c3(0x55e))) > parseInt(_0x9cc8e0[_0x679c3(0x3c5)][0x1][_0x679c3(0x188)]('data-nr')) ? -0x1 : _0x18ec42[_0x679c3(0x3c5)][0x1]['innerText'] < _0x9cc8e0[_0x679c3(0x3c5)][0x1]['innerText'] ? 0x1 : _0x18ec42['children'][0x1][_0x679c3(0x5ad)] > _0x9cc8e0[_0x679c3(0x3c5)][0x1][_0x679c3(0x5ad)] ? -0x1 : 0x0;
        });
        for (let _0x5b9625 = 0x0; _0x5b9625 < _0x42ff25[_0x9ced0a(0x5d6)]; _0x5b9625++) {
            _0x5dbed4[_0x9ced0a(0x18f)](_0x42ff25[_0x5b9625]);
        }
        _0x5dbed4[_0x9ced0a(0x18f)](_0x36f237);
        for (let _0x4b2b85 = 0x0; _0x4b2b85 < _0x42ff25[_0x9ced0a(0x5d6)]; _0x4b2b85++) {
            _0x1eeb60['push']({
                'coord_deff': _0x42ff25[_0x4b2b85][_0x9ced0a(0x3c5)][0x1][_0x9ced0a(0x5ad)][_0x9ced0a(0x538)](/\d+\|\d+/)[0x0],
                'nr': parseInt(_0x42ff25[_0x4b2b85]['children'][0x1]['getAttribute'](_0x9ced0a(0x55e))),
                'id_coord': _0x42ff25[_0x4b2b85][_0x9ced0a(0x3c5)][0x1][_0x9ced0a(0x3c5)][0x0][_0x9ced0a(0x148)][_0x9ced0a(0x1c8)](_0x9ced0a(0x46f))[0x1][_0x9ced0a(0x1c8)]('&')[0x0]
            });
        }
        console[_0x9ced0a(0x533)](_0x1eeb60);
        var _0x504a63 = document[_0x9ced0a(0x36b)](_0x9ced0a(0x646))[_0x9ced0a(0x4ef)],
            _0x3d86b9 = _0x504a63[_0x9ced0a(0x21d)](0x1);
        _0x3d86b9[_0x9ced0a(0x525)] = 'tr_delimitator';
        let _0x3e35bd = _0x3d86b9[_0x9ced0a(0x2ac)]();
        _0x3e35bd[_0x9ced0a(0x3fd)]('colspan', _0x2978cf), _0x3e35bd[_0x9ced0a(0x55b)][_0x9ced0a(0x613)](_0x9ced0a(0x1ee));
        var _0x482a03 = document[_0x9ced0a(0x4ee)]('button');
        _0x482a03[_0x9ced0a(0x5ad)] = _0x9ced0a(0x44a) + _0x1eeb60[0x0]['coord_deff'] + ')', _0x482a03[_0x9ced0a(0x3fd)]('data-id', _0x1eeb60[0x0]['id_coord']), _0x482a03['setAttribute'](_0x9ced0a(0x55e), _0x1eeb60[0x0]['nr']), _0x482a03[_0x9ced0a(0x5b0)]['margin'] = _0x9ced0a(0x335), _0x482a03[_0x9ced0a(0x55b)]['add'](_0x9ced0a(0x399), _0x9ced0a(0x3f0)), _0x3e35bd[_0x9ced0a(0x18f)](_0x482a03);
        var _0x1b65d7 = 0x3;
        for (let _0x1f9802 = 0x0; _0x1f9802 < _0x42ff25[_0x9ced0a(0x5d6)] - 0x1; _0x1f9802++) {
            if (_0x1eeb60[_0x1f9802][_0x9ced0a(0x23d)] != _0x1eeb60[_0x1f9802 + 0x1][_0x9ced0a(0x23d)]) {
                var _0x504a63 = document[_0x9ced0a(0x36b)]('incomings_table')[_0x9ced0a(0x4ef)],
                    _0x3d86b9 = _0x504a63['insertRow'](_0x1b65d7);
                _0x3d86b9['className'] = _0x9ced0a(0x3ff);
                let _0x68b73c = _0x3d86b9['insertCell']();
                _0x68b73c[_0x9ced0a(0x3fd)](_0x9ced0a(0x2bb), _0x2978cf), _0x68b73c[_0x9ced0a(0x55b)]['add'](_0x9ced0a(0x1ee));
                var _0x482a03 = document[_0x9ced0a(0x4ee)](_0x9ced0a(0x1d7));
                _0x482a03[_0x9ced0a(0x5ad)] = _0x9ced0a(0x44a) + _0x1eeb60[_0x1f9802 + 0x1][_0x9ced0a(0x23d)] + ')', _0x482a03[_0x9ced0a(0x3fd)](_0x9ced0a(0x2b3), _0x1eeb60[_0x1f9802 + 0x1]['id_coord']), _0x482a03['setAttribute'](_0x9ced0a(0x55e), _0x1eeb60[_0x1f9802 + 0x1]['nr']), _0x482a03[_0x9ced0a(0x5b0)][_0x9ced0a(0x394)] = _0x9ced0a(0x335), _0x482a03[_0x9ced0a(0x55b)][_0x9ced0a(0x613)]('btn', _0x9ced0a(0x3f0)), _0x68b73c['appendChild'](_0x482a03), _0x1b65d7++;
            }
            _0x1b65d7++;
        }
        _0x1eeb60 = [];
        var _0x10b3e0 = new Date();
        console[_0x9ced0a(0x533)](_0x10b3e0 - _0x26ff7a), eventGetTroops();
    });
}
async function tagIncomings() {
    const _0x2b9e5b = _0x555ef8;
    if (document[_0x2b9e5b(0x612)](_0x2b9e5b(0x317))[_0x2b9e5b(0x5d6)] == 0x0) document[_0x2b9e5b(0x36b)]('moreInfo')[_0x2b9e5b(0x30f)](), await waitForElm('.info'), tagIncomings();
    else {
        $(_0x2b9e5b(0x2c2))['attr'](_0x2b9e5b(0x16d), !![]), $(_0x2b9e5b(0x4db))[_0x2b9e5b(0x501)]();
        let _0x36f233 = await getNameTroops(),
            _0x2a136e = window[_0x2b9e5b(0x2e8)];
        var _0x24c861 = [],
            _0x13f0e0 = 0x1,
            _0x85c95c = document[_0x2b9e5b(0x304)]('.row_a,\x20.row_b'),
            _0x4ea1be = 0x834 * 0x3e8 / (speedWorld * speedTroupes),
            _0x2ebb73 = 0x708 * 0x3e8 / (speedWorld * speedTroupes),
            _0x41dd1d = 0x4ec * 0x3e8 / (speedWorld * speedTroupes),
            _0x40f56f = 0x438 * 0x3e8 / (speedWorld * speedTroupes);
        console[_0x2b9e5b(0x533)](_0x2b9e5b(0x16b), speedWorld * speedTroupes);
        let _0x460bea = [],
            _0x4ec536 = [];
        for (let _0x4ca51b = 0x0; _0x4ca51b < _0x85c95c['length']; _0x4ca51b++) {
            let _0x36eef2 = _0x85c95c[_0x4ca51b]['children'][0x0]['children'][0x2][_0x2b9e5b(0x188)](_0x2b9e5b(0x2b3)),
                _0x431425 = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][0x1][_0x2b9e5b(0x5ad)][_0x2b9e5b(0x538)](/\d+\|\d+/)[0x0],
                _0x3c97a4 = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][0x2][_0x2b9e5b(0x5ad)][_0x2b9e5b(0x538)](/\d+\|\d+/)[0x0];
            var _0x1be6a2 = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][0x0][_0x2b9e5b(0x5ad)][_0x2b9e5b(0x26b)]()['split'](/\s+/)[0x0][_0x2b9e5b(0x38b)]();
            let _0x20dc7e = window[_0x2b9e5b(0x185)][_0x2b9e5b(0x148)][_0x2b9e5b(0x1c8)]('&')[0x0] + (_0x2b9e5b(0x5cc) + _0x36eef2 + _0x2b9e5b(0x179) + _0x2a136e),
                _0x13a212 = _0x85c95c[_0x4ca51b]['children'][0x0][_0x2b9e5b(0x5ad)][_0x2b9e5b(0x26b)](),
                _0x44e434 = parseInt(_0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][0x3][_0x2b9e5b(0x5ad)]),
                _0x34bf61 = _0x85c95c[_0x4ca51b]['children'][0x4][_0x2b9e5b(0x5ad)],
                _0x37751c = _0x85c95c[_0x4ca51b]['children'][0x5]['innerText'],
                _0x4938a7 = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][0x6][_0x2b9e5b(0x5ad)] != '?' ? parseInt(_0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][0x6][_0x2b9e5b(0x5ad)]) : '?',
                _0x5e5802 = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][0x7][_0x2b9e5b(0x5ad)],
                _0x296d8b = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][0xa][_0x2b9e5b(0x5ad)],
                _0x173e45 = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][0xb][_0x2b9e5b(0x5ad)],
                _0x47c468 = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][0xc][_0x2b9e5b(0x5ad)],
                _0x4d009d = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][0xd]['innerText'],
                _0x29d3f8 = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][_0x2b9e5b(0x5d6)],
                _0x54c9da;
            game_data[_0x2b9e5b(0x225)] == _0x2b9e5b(0x496) ? _0x54c9da = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][_0x29d3f8 - 0x4][_0x2b9e5b(0x5ad)] : _0x54c9da = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][_0x29d3f8 - 0x3][_0x2b9e5b(0x5ad)];
            let _0x3156a5, _0xf63668;
            game_data[_0x2b9e5b(0x225)] == _0x2b9e5b(0x496) ? (_0x3156a5 = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][_0x29d3f8 - 0x2]['innerText'], _0xf63668 = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][_0x29d3f8 - 0x1]['innerText']['split'](':')) : (_0x3156a5 = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][_0x29d3f8 - 0x1][_0x2b9e5b(0x5ad)], _0xf63668 = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][_0x29d3f8 - 0x1][_0x2b9e5b(0x5ad)][_0x2b9e5b(0x1c8)]('\x0a')[0x1]['split'](':'), console[_0x2b9e5b(0x533)]('comoon:\x20' + _0xf63668));
            let _0x316e93 = getLandTime(_0x3156a5),
                _0xe13f10 = ![],
                _0x58f741 = calcDistance(_0x3c97a4, _0x431425);
            _0xf63668 = Array[_0x2b9e5b(0x2e2)](_0xf63668)['map'](_0x7e947c => parseInt(_0x7e947c)), _0xf63668 = _0xf63668[0x0] * 0xe10 * 0x3e8 + _0xf63668[0x1] * 0x3c * 0x3e8 + _0xf63668[0x2] * 0x3e8, _0x460bea[_0x2b9e5b(0x1fa)](_0x36eef2);
            let _0x10a8bd = _0x2b9e5b(0x2ea),
                _0x3c445e = 'none';
            if (_0x85c95c[_0x4ca51b][_0x2b9e5b(0x612)](_0x2b9e5b(0x27e))[_0x2b9e5b(0x5d6)] > 0x0 && _0x85c95c[_0x4ca51b][_0x2b9e5b(0x612)](_0x2b9e5b(0x3d6))[0x0]['getElementsByTagName'](_0x2b9e5b(0x183))['length'] == 0x2) {
                let _0x38030f = new Date(_0x85c95c[_0x4ca51b][_0x2b9e5b(0x612)]('possible_fake')[0x0][_0x2b9e5b(0x188)](_0x2b9e5b(0x4c9))),
                    _0x25ef90 = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x612)]('quickedit')[0x0][_0x2b9e5b(0x14f)](_0x2b9e5b(0x183))[0x1][_0x2b9e5b(0x1a8)],
                    _0x36923d = 0x0;
                if (_0x25ef90['includes'](_0x2b9e5b(0x572))) _0x36923d = _0x4ea1be * _0x58f741;
                else {
                    if (_0x25ef90[_0x2b9e5b(0x25b)](_0x2b9e5b(0x126)) || _0x25ef90[_0x2b9e5b(0x25b)](_0x2b9e5b(0x566))) _0x36923d = _0x2ebb73 * _0x58f741;
                    else {
                        if (_0x25ef90['includes'](_0x2b9e5b(0x522))) _0x36923d = _0x41dd1d * _0x58f741;
                        else _0x25ef90[_0x2b9e5b(0x25b)](_0x2b9e5b(0x645)) && (_0x36923d = _0x40f56f * _0x58f741);
                    }
                }
                let _0x18cd57 = new Date(_0x316e93);
                _0x36923d = Math[_0x2b9e5b(0x510)](_0x36923d / 0x3e8) * 0x3e8, _0x10a8bd = parseDate(_0x18cd57[_0x2b9e5b(0x505)]() + _0x36923d), _0x3c445e = parseDate(_0x18cd57[_0x2b9e5b(0x505)]() - _0x36923d), console['log'](_0x2b9e5b(0x1e0), _0x36923d);
                _0x36923d + _0x38030f['getTime']() > _0x18cd57['getTime']() && (_0xe13f10 = !![], console[_0x2b9e5b(0x533)](_0x2b9e5b(0x41b) + _0x3c97a4));
                var _0x50f7c3 = parseInt(_0x5e5802[_0x2b9e5b(0x1c8)](':')[0x0]) * 0x18 * 0xe10 * 0x3e8,
                    _0x5730bf = parseInt(_0x5e5802['split'](':')[0x1]) * 0xe10 * 0x3e8,
                    _0x22e0cf = parseInt(_0x5e5802['split'](':')[0x2]) * 0x3c * 0x3e8,
                    _0x422898 = parseInt(_0x5e5802[_0x2b9e5b(0x1c8)](':')[0x3]) * 0x3e8,
                    _0x2222d8 = _0x50f7c3 + _0x5730bf + _0x22e0cf + _0x422898 - _0x36923d;
                _0xe13f10 == !![] && (_0x5e5802 = _0x2222d8 / (0x18 * 0xe10 * 0x3e8), _0x5e5802 += _0x2b9e5b(0x4fb));
            } else {
                if (_0x85c95c[_0x4ca51b][_0x2b9e5b(0x612)]('quickedit')[0x0][_0x2b9e5b(0x14f)](_0x2b9e5b(0x183))[_0x2b9e5b(0x5d6)] == 0x2) {
                    let _0x2a5a2d = _0x85c95c[_0x4ca51b][_0x2b9e5b(0x612)](_0x2b9e5b(0x3d6))[0x0]['getElementsByTagName'](_0x2b9e5b(0x183))[0x1]['src'],
                        _0x32dd86 = 0x0;
                    if (_0x2a5a2d[_0x2b9e5b(0x25b)](_0x2b9e5b(0x572))) _0x32dd86 = _0x4ea1be * _0x58f741;
                    else {
                        if (_0x2a5a2d[_0x2b9e5b(0x25b)](_0x2b9e5b(0x126)) || _0x2a5a2d[_0x2b9e5b(0x25b)](_0x2b9e5b(0x566))) _0x32dd86 = _0x2ebb73 * _0x58f741;
                        else {
                            if (_0x2a5a2d['includes'](_0x2b9e5b(0x522))) _0x32dd86 = _0x41dd1d * _0x58f741;
                            else _0x2a5a2d[_0x2b9e5b(0x25b)](_0x2b9e5b(0x645)) && (_0x32dd86 = _0x40f56f * _0x58f741);
                        }
                    }
                    _0x32dd86 = Math[_0x2b9e5b(0x510)](_0x32dd86 / 0x3e8) * 0x3e8;
                    let _0x8ad717 = new Date(_0x316e93);
                    _0x10a8bd = parseDate(_0x8ad717[_0x2b9e5b(0x505)]() + _0x32dd86), _0x3c445e = parseDate(_0x8ad717[_0x2b9e5b(0x505)]() - _0x32dd86), console[_0x2b9e5b(0x533)](_0x2b9e5b(0x53f), _0x10a8bd);
                }
            }
            let _0x4b4141 = {
                'incomingId': _0x36eef2,
                'coordOrigin': _0x3c97a4,
                'href': _0x20dc7e,
                'nameTroupe': _0x1be6a2,
                'nr': _0x44e434,
                'nr_tribe': _0x34bf61,
                'type': _0x37751c,
                'pop': _0x4938a7,
                'time': _0x5e5802,
                'nameAttacker': _0x54c9da,
                'fake': _0xe13f10,
                'current_tag': _0x13a212,
                'backtime': _0x10a8bd,
                'sentTime': _0x3c445e,
                'predict': _0x296d8b,
                'stacksHome': _0x173e45,
                'stacksComming': _0x47c468,
                'sizeAttack': _0x4d009d
            };
            if (_0x1be6a2 == lang[_0x2b9e5b(0x331)][_0x2b9e5b(0x38b)]()) {
                let _0x3a4f54 = 0x0;
                if (_0xf63668 > _0x2ebb73 * _0x58f741) _0x1be6a2 = _0x36f233['snob'], _0x3a4f54 = _0x4ea1be * _0x58f741;
                else {
                    if (_0xf63668 > _0x41dd1d * _0x58f741) _0x1be6a2 = _0x36f233[_0x2b9e5b(0x450)], _0x3a4f54 = _0x2ebb73 * _0x58f741;
                    else {
                        if (_0xf63668 > _0x40f56f * _0x58f741) _0x1be6a2 = _0x36f233[_0x2b9e5b(0x328)], _0x3a4f54 = _0x41dd1d * _0x58f741;
                        else {
                            if (_0xf63668 > heavySpeed * _0x58f741) _0x1be6a2 = _0x36f233[_0x2b9e5b(0x4ae)], _0x3a4f54 = _0x40f56f * _0x58f741;
                            else {
                                if (_0xf63668 > lightSpeed * _0x58f741) _0x1be6a2 = _0x36f233['heavy'];
                                else _0xf63668 > spySpeed * _0x58f741 ? _0x1be6a2 = _0x36f233[_0x2b9e5b(0x206)] : _0x1be6a2 = _0x36f233[_0x2b9e5b(0x39f)];
                            }
                        }
                    }
                }
                _0x4b4141[_0x2b9e5b(0x367)] = _0x1be6a2[_0x2b9e5b(0x38b)]();
                if (_0x3a4f54 > 0x0) {
                    _0x3a4f54 = Math['round'](_0x3a4f54 / 0x3e8) * 0x3e8;
                    let _0x5bcb50 = new Date(_0x316e93);
                    _0x10a8bd = parseDate(_0x5bcb50[_0x2b9e5b(0x505)]() + _0x3a4f54), _0x3c445e = parseDate(_0x5bcb50[_0x2b9e5b(0x505)]() - _0x3a4f54), _0x4b4141['backtime'] = _0x10a8bd, _0x4b4141[_0x2b9e5b(0x297)] = _0x3c445e;
                }
            }
            console[_0x2b9e5b(0x533)](_0x4b4141), !_0x85c95c[_0x4ca51b]['children'][0x0]['innerText'][_0x2b9e5b(0x38b)]()['includes']('\x22') && _0x24c861['push'](_0x4b4141), _0x4ec536[_0x2b9e5b(0x1fa)](_0x85c95c[_0x4ca51b][_0x2b9e5b(0x3c5)][0x0]);
        }
        console['log'](_0x4ec536);
        let _0x12aa87 = document[_0x2b9e5b(0x36b)]('incomings_table'),
            _0x1224a0 = _0x12aa87[_0x2b9e5b(0x14f)](_0x2b9e5b(0x58a))[0x0][_0x2b9e5b(0x3c5)][0x0][_0x2b9e5b(0x3c5)]['length'],
            _0x5a1e96 = _0x12aa87[_0x2b9e5b(0x14f)](_0x2b9e5b(0x58a))[0x0]['children'][_0x4ec536[_0x2b9e5b(0x5d6)] + 0x1];
        $(_0x12aa87)['find'](_0x2b9e5b(0x25d))[_0x2b9e5b(0x501)]();
        for (let _0x5d00ff = 0x0; _0x5d00ff < _0x4ec536[_0x2b9e5b(0x5d6)]; _0x5d00ff++) {
            $(_0x12aa87)['append']('<tr\x20class=\x22nowrap\x20row_ax\x22><td\x20colspan=\x22' + _0x1224a0 + _0x2b9e5b(0x5ba) + _0x4ec536[_0x5d00ff]['innerHTML'] + _0x2b9e5b(0x2d1));
        }
        $(_0x12aa87)['append'](_0x5a1e96), _0x24c861 = _0x24c861[_0x2b9e5b(0x560)]();
        let _0x5e0861 = Number[_0x2b9e5b(0x283)](parseInt($('#input_pop_fake2')[_0x2b9e5b(0x346)]())) ? 0x32 : parseInt($(_0x2b9e5b(0x1ff))['val']());
        var _0x1d6c2d = _0x24c861['length'],
            _0x2bb245 = new Date();

        function _0x22e7d2(_0x15fc0c) {
            const _0x59631d = _0x2b9e5b;
            let _0x213333, _0x3ee228 = '',
                _0x5ab27f, _0x38b5c4 = null;
            if (_0x15fc0c['length'] > 0x0) {
                _0x38b5c4 = _0x15fc0c['pop'](), _0x213333 = _0x38b5c4[_0x59631d(0x148)], _0x3ee228 = _0x38b5c4['nameTroupe'], _0x5ab27f = _0x38b5c4[_0x59631d(0x483)];
                let _0x105eed;
                if (_0x38b5c4[_0x59631d(0x4af)] == '?') _0x105eed = parseInt(_0x38b5c4['nr']);
                else _0x105eed = Math[_0x59631d(0x1fd)](parseInt(_0x38b5c4['nr']), parseInt(_0x38b5c4[_0x59631d(0x4af)]));
                let _0x35ccce = _0x59631d(0x42c) + convertDate(_0x38b5c4[_0x59631d(0x53f)]);
                localStorage[_0x59631d(0x520)](game_data[_0x59631d(0x429)] + 'addBacktime') == _0x59631d(0x610) && (_0x35ccce = '');
                let _0xa519d = _0x59631d(0x516) + convertDate(_0x38b5c4[_0x59631d(0x297)]);
                localStorage[_0x59631d(0x520)](game_data['world'] + _0x59631d(0x350)) == _0x59631d(0x610) && (_0xa519d = '');
                let _0x3b1945 = _0x59631d(0x30e) + _0x38b5c4[_0x59631d(0x407)] + _0x59631d(0x288) + _0x38b5c4['stacksComming'] + ']';
                localStorage[_0x59631d(0x520)](game_data['world'] + _0x59631d(0x209)) == _0x59631d(0x610) && (_0x3b1945 = '');
                if (_0x38b5c4[_0x59631d(0x15c)] != '?') {
                    _0x38b5c4[_0x59631d(0x42d)] = parseInt(_0x38b5c4[_0x59631d(0x42d)][_0x59631d(0x1c8)](':')[0x0]);
                    if (_0x38b5c4['nr'] == 0x4e20) _0x3ee228 = _0x3ee228 + '\x20' + _0x38b5c4[_0x59631d(0x616)] + ',\x20' + _0x105eed + ',\x20' + _0x38b5c4[_0x59631d(0x15c)] + _0x35ccce + _0xa519d + _0x3b1945;
                    else {
                        if (_0x38b5c4[_0x59631d(0x15c)] == 'new_off') _0x3ee228 = _0x3ee228 + '\x20' + _0x38b5c4['nameAttacker'] + ',\x20' + _0x105eed + _0x59631d(0x38f) + _0x35ccce + _0xa519d + _0x3b1945;
                        else {
                            if (_0x38b5c4[_0x59631d(0x15c)]['includes'](_0x59631d(0x292))) _0x3ee228 = _0x3ee228 + '\x20' + _0x38b5c4['nameAttacker'] + ',\x20' + _0x105eed + ',\x20' + _0x38b5c4[_0x59631d(0x15c)] + ',\x20' + _0x38b5c4['time'] + 'd' + _0x35ccce + _0xa519d + _0x3b1945;
                            else _0x3ee228 = _0x3ee228 + '\x20' + _0x38b5c4[_0x59631d(0x616)] + ',\x20' + _0x105eed + ',\x20' + _0x38b5c4[_0x59631d(0x15c)] + ',\x20' + _0x38b5c4[_0x59631d(0x51a)] + _0x59631d(0x590) + _0x38b5c4[_0x59631d(0x42d)] + 'd' + _0x35ccce + _0xa519d + _0x3b1945;
                        }
                    }
                } else _0x3ee228 = _0x3ee228 + '\x20' + _0x38b5c4['nameAttacker'] + ',\x20' + _0x105eed + _0x35ccce + _0xa519d + _0x3b1945;
                if (_0x38b5c4['fake'] == !![] && _0x38b5c4['type'][_0x59631d(0x38b)]() == _0x59631d(0x181) && parseInt(_0x38b5c4[_0x59631d(0x51a)]) < _0x5e0861) _0x3ee228 += _0x59631d(0x404);
                else _0x38b5c4[_0x59631d(0x583)] == !![] && _0x38b5c4[_0x59631d(0x15c)][_0x59631d(0x38b)]()[_0x59631d(0x25b)](_0x59631d(0x4cf)) && (_0x3ee228 += '\x20(\x22fake\x22)');
                _0x38b5c4[_0x59631d(0x3b4)] != '?' && (_0x3ee228 = _0x38b5c4['nameTroupe'] + '\x20' + _0x38b5c4['sizeAttack'] + '\x22'), console[_0x59631d(0x533)](_0x3ee228);
            } else _0x213333 = _0x59631d(0x5e1);
            console['log'](_0x59631d(0x22f) + _0x15fc0c[_0x59631d(0x5d6)]);
            var _0x2ada04 = new Date();
            if (_0x15fc0c[_0x59631d(0x5d6)] >= 0x0 && _0x213333 != 'stop') {
                let _0x370fde = _0x213333[_0x59631d(0x1c8)](_0x59631d(0x4c8))[0x1][_0x59631d(0x1c8)]('&')[0x0];
                _0x5ab27f != _0x3ee228 ? $['ajax']({
                    'url': _0x213333,
                    'method': _0x59631d(0x1c7),
                    'dataType': _0x59631d(0x3ae),
                    'data': {
                        'text': _0x3ee228
                    },
                    'headers': {
                        'TribalWars-Ajax': 0x1
                    },
                    'success': _0x5cd82c => {
                        const _0x4b888d = _0x59631d;
                        $(_0x4b888d(0x1b5) + _0x38b5c4[_0x4b888d(0x5f7)] + ']')[_0x4b888d(0x268)](_0x4b888d(0x13f))['text'](_0x3ee228), $('span[data-id=' + _0x38b5c4[_0x4b888d(0x5f7)] + ']')['parent']()[_0x4b888d(0x2e0)](_0x4b888d(0x5d9), '#ff8080'), UI[_0x4b888d(0x5ea)](_0x13f0e0 + '/' + _0x1d6c2d), _0x13f0e0++;
                        var _0x2c3bba = new Date(),
                            _0x547309 = _0x2c3bba[_0x4b888d(0x505)]() - _0x2ada04[_0x4b888d(0x505)]();
                        console[_0x4b888d(0x533)](_0x4b888d(0x388) + _0x547309 + _0x4b888d(0x2b1) + (0xc8 - _0x547309)), window[_0x4b888d(0x5c9)](function() {
                            _0x22e7d2(_0x24c861);
                        }, 0xc8 - _0x547309);
                    }
                }) : (console[_0x59631d(0x533)]('id:\x20' + _0x370fde + _0x59631d(0x440)), _0x22e7d2(_0x24c861), _0x13f0e0++);
            } else {
                UI[_0x59631d(0x5ea)](_0x59631d(0x488), 0x7d0);
                var _0x1c0d11 = new Date();
                console[_0x59631d(0x533)](_0x59631d(0x3bc) + _0x1c0d11[_0x59631d(0x505)]() - _0x2bb245['getTime']());
            }
        }
        _0x22e7d2(_0x24c861);
    }
}

function parseDate(_0x4769b1) {
    const _0x280aba = _0x555ef8;
    let _0x3f9236 = new Date(_0x4769b1),
        _0x51ad3b = _0x3f9236[_0x280aba(0x4ec)](),
        _0x577804 = ('00' + (_0x3f9236['getMonth']() + 0x1))[_0x280aba(0x22c)](-0x2),
        _0x42e4a2 = ('00' + _0x3f9236[_0x280aba(0x637)]())[_0x280aba(0x22c)](-0x2),
        _0xb1b6c5 = ('00' + _0x3f9236[_0x280aba(0x3cf)]())['slice'](-0x2),
        _0x3ea417 = ('00' + _0x3f9236[_0x280aba(0x576)]())[_0x280aba(0x22c)](-0x2),
        _0x1f35f1 = ('00' + _0x3f9236['getSeconds']())[_0x280aba(0x22c)](-0x2),
        _0x3ed998 = _0x577804 + '/' + _0x42e4a2 + '/' + _0x51ad3b + '\x20' + _0xb1b6c5 + ':' + _0x3ea417 + ':' + _0x1f35f1;
    return _0x3ed998;
}

function getLandTime(_0x5defb2) {
    const _0x13f730 = _0x555ef8;
    var _0x3f2daf = '';
    let _0x58bb37 = document[_0x13f730(0x36b)](_0x13f730(0x239))[_0x13f730(0x5ad)][_0x13f730(0x1c8)]('/');
    if (_0x5defb2['includes'](lang[_0x13f730(0x4d3)]['replace'](_0x13f730(0x343), ''))) _0x3f2daf = _0x58bb37[0x1] + '/' + _0x58bb37[0x0] + '/' + _0x58bb37[0x2] + '\x20' + _0x5defb2[_0x13f730(0x538)](/\d+:\d+:\d+:\d+/)[0x0];
    else {
        if (_0x5defb2[_0x13f730(0x25b)](lang[_0x13f730(0x37b)][_0x13f730(0x632)]('\x20%s', ''))) {
            var _0x3a0a69 = new Date(_0x58bb37[0x1] + '/' + _0x58bb37[0x0] + '/' + _0x58bb37[0x2]);
            _0x3a0a69[_0x13f730(0x414)](_0x3a0a69[_0x13f730(0x637)]() + 0x1), _0x3f2daf = ('0' + (_0x3a0a69[_0x13f730(0x236)]() + 0x1))[_0x13f730(0x22c)](-0x2) + '/' + ('0' + _0x3a0a69[_0x13f730(0x637)]())[_0x13f730(0x22c)](-0x2) + '/' + _0x3a0a69[_0x13f730(0x4ec)]() + '\x20' + _0x5defb2[_0x13f730(0x538)](/\d+:\d+:\d+:\d+/)[0x0];
        } else {
            if (_0x5defb2['includes'](lang[_0x13f730(0x559)][_0x13f730(0x1c8)]('\x20')[0x0])) {
                var _0x46d700 = _0x5defb2['match'](/\d+.\d+/)[0x0]['split']('.');
                _0x3f2daf = _0x46d700[0x1] + '/' + _0x46d700[0x0] + '/' + _0x58bb37[0x2] + '\x20' + _0x5defb2[_0x13f730(0x538)](/\d+:\d+:\d+:\d+/)[0x0];
            } else {
                if (_0x5defb2[_0x13f730(0x25b)]('pÃ¥')) {
                    var _0x46d700 = _0x5defb2[_0x13f730(0x538)](/\d+.\d+/)[0x0][_0x13f730(0x1c8)]('.');
                    _0x3f2daf = _0x46d700[0x1] + '/' + _0x46d700[0x0] + '/' + _0x58bb37[0x2] + '\x20' + _0x5defb2['match'](/\d+:\d+:\d+:\d+/)[0x0];
                }
            }
        }
    }
    return _0x3f2daf;
}

function waitForElm(_0x52ca38) {
    return new Promise(_0xd5d79f => {
        const _0x58f452 = _0x2f7d;
        if (document['querySelector'](_0x52ca38)) return _0xd5d79f(document[_0x58f452(0x524)](_0x52ca38));
        const _0x28efbf = new MutationObserver(_0x581302 => {
            const _0x146c0b = _0x58f452;
            document[_0x146c0b(0x524)](_0x52ca38) && (_0x28efbf[_0x146c0b(0x131)](), _0xd5d79f(document[_0x146c0b(0x524)](_0x52ca38)));
        });
        _0x28efbf[_0x58f452(0x5ed)](document[_0x58f452(0x49e)], {
            'childList': !![],
            'subtree': !![]
        });
    });
}

function calcProductionTroupes(_0x2c5fdc, _0x57a5ed) {
    var _0x47743c = _0x57a5ed;
    let _0x40ae52 = 0x1770,
        _0x3324bc = 0xbb8,
        _0x238253 = 0x190,
        _0x4d0c99 = 0x0,
        _0x466a42 = 0x0,
        _0x28ab13 = 0x0,
        _0x233818 = _0x2c5fdc;
    while (_0x47743c < 0x4e20 && _0x233818 > 0x0) {
        if (_0x4d0c99 < _0x40ae52) _0x4d0c99++, _0x233818 -= axeTime, _0x47743c += 0x1;
        else break;
    }
    _0x233818 = _0x2c5fdc;
    while (_0x47743c < 0x4e20 && _0x233818 > 0x0) {
        if (_0x466a42 < _0x3324bc) _0x466a42++, _0x233818 -= lhTime, _0x47743c += 0x4;
        else break;
    }
    _0x233818 = _0x2c5fdc;
    while (_0x47743c < 0x4e20 && _0x233818 > 0x0) {
        if (_0x28ab13 < _0x238253) _0x28ab13++, _0x233818 -= ramTime, _0x47743c += 0x5;
        else break;
    }
    return _0x47743c = _0x47743c / 0x4e20 * 0x64, _0x47743c;
}
var map_search;
async function loadReports() {
    const _0x5a5d68 = _0x555ef8;
    [map_search, status, infoVillages] = await Promise[_0x5a5d68(0x3b6)]([readFileDropbox(filename_reports), insertlibraryLocalBase(), getInfoVillages()])[_0x5a5d68(0x198)](_0x339112 => {
        alert(_0x339112);
    }), console['log'](status);
    try {
        let _0x1f5f44 = await decompress(await map_search[_0x5a5d68(0x4a5)](), _0x5a5d68(0x59f));
        map_search = new Map(JSON[_0x5a5d68(0x1a6)](_0x1f5f44));
    } catch (_0x38a09d) {
        console[_0x5a5d68(0x533)]('erorrrrrrrrrrrrrrrr\x20map\x20report\x20from\x20dropbox'), map_search = new Map();
    }
    if (await localBase[_0x5a5d68(0x520)](game_data[_0x5a5d68(0x429)] + 'reports') != undefined) try {
        let _0x1f3425 = base64ToBlob(await localBase[_0x5a5d68(0x520)](game_data[_0x5a5d68(0x429)] + _0x5a5d68(0x5b3))),
            _0x44947e = await decompress(await _0x1f3425['arrayBuffer'](), 'gzip'),
            _0x406c18 = new Map(JSON[_0x5a5d68(0x1a6)](_0x44947e));
        console[_0x5a5d68(0x533)]('map_localBase', _0x406c18), map_search = new Map([..._0x406c18, ...map_search]);
    } catch (_0x1284ac) {}
    UI[_0x5a5d68(0x5ea)](_0x5a5d68(0x393)), console['log'](map_search), loadReportsOk = !![], $('#input_search')['on'](_0x5a5d68(0x5e2), function() {
        const _0x46d038 = _0x5a5d68;
        let _0x2f841b = $(_0x46d038(0x237))[_0x46d038(0x346)]();
        if (_0x2f841b[_0x46d038(0x538)](/\d+\|\d+/) != null) {
            coords = _0x2f841b[_0x46d038(0x538)](/\d+\|\d+/g), console[_0x46d038(0x533)](coords), $(_0x46d038(0x1f6))[_0x46d038(0x4a7)]();
            let _0x494daa = '',
                _0x392cdf = 0x0;
            for (let _0x42a503 = 0x0; _0x42a503 < coords[_0x46d038(0x5d6)]; _0x42a503++) {
                if (map_search[_0x46d038(0x4d7)](coords[_0x42a503])) {
                    let _0x174215 = map_search[_0x46d038(0x18a)](coords[_0x42a503]);
                    console['log'](coords[_0x42a503]), _0x494daa += '<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><input\x20class=\x22btn\x20evt-confirm-btn\x20btn-confirm-yes\x22\x20type=\x22button\x22onclick=\x22$(\x27#table' + _0x42a503 + _0x46d038(0x3ac) + coords[_0x42a503] + '\x22></center>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20\x20class=\x22table_hide\x22\x20id=\x22table' + _0x42a503 + '\x22' + createReport(_0x174215) + _0x46d038(0x1ed), _0x392cdf++;
                }
            }
            $(_0x46d038(0x1f6))[_0x46d038(0x5b2)](_0x494daa), $(_0x46d038(0x2dc))[_0x46d038(0x539)](), $(_0x46d038(0x19a))[_0x46d038(0x2c0)](_0x46d038(0x3f4) + _0x392cdf);
        } else $('#report_view')[_0x46d038(0x4a7)]();
    }), $('#input_search')[_0x5a5d68(0x396)](function() {
        const _0x5c5178 = _0x5a5d68;
        let _0x43e38a = $(_0x5c5178(0x237))['val']();
        if (_0x43e38a[_0x5c5178(0x538)](/\d+\|\d+/) != null) {
            let _0x31df49 = _0x43e38a[_0x5c5178(0x538)](/\d+\|\d+/g);
            $(_0x5c5178(0x237))[_0x5c5178(0x346)](Array[_0x5c5178(0x2e2)](_0x31df49)['join'](','));
        }
    }), console[_0x5a5d68(0x533)](_0x5a5d68(0x410), infoVillages), $('#btn_off_coord')['on'](_0x5a5d68(0x30f), function() {
        const _0x14d4bf = _0x5a5d68;
        let _0x584724 = Array[_0x14d4bf(0x2e2)](document[_0x14d4bf(0x36b)]('input_filter_tribe')['value'][_0x14d4bf(0x1c8)](','))['map'](_0x574dda => _0x574dda['trim']()[_0x14d4bf(0x38b)]())['filter'](_0x3d62db => {
                return _0x3d62db !== '';
            }),
            _0x263e22 = [];
        console[_0x14d4bf(0x533)](_0x14d4bf(0x4a9), _0x584724), Array[_0x14d4bf(0x2e2)](map_search[_0x14d4bf(0x2f0)]())[_0x14d4bf(0x432)](_0x533c97 => {
            const _0x54c960 = _0x14d4bf;
            try {
                let _0x2bbaea = map_search[_0x54c960(0x18a)](_0x533c97),
                    _0x17e508 = _0x2bbaea[_0x54c960(0x5fd) + _0x533c97],
                    _0x443da2 = 0x0,
                    _0x45abbd = _0x2bbaea['time_report_home_' + _0x533c97];
                if (_0x17e508 != undefined)
                    for (let _0xf25034 = 0x0; _0xf25034 < _0x17e508[_0x54c960(0x5d6)]; _0xf25034++) {
                        (_0x17e508[_0xf25034]['type'] == _0x54c960(0x4b2) || _0x17e508[_0xf25034][_0x54c960(0x15c)] == 'sword' || _0x17e508[_0xf25034]['type'] == _0x54c960(0x487) || _0x17e508[_0xf25034][_0x54c960(0x15c)] == 'heavy') && (_0x443da2 += _0x17e508[_0xf25034][_0x54c960(0x4b4)] * troopsPop[_0x17e508[_0xf25034]['type']]);
                    } else _0x443da2 = -0x1, _0x45abbd = _0x54c960(0x2ea);
                if (tribemates[_0x54c960(0x25b)](_0x2bbaea[_0x54c960(0x616)][_0x54c960(0x38b)]()) == ![] && _0x2bbaea[_0x54c960(0x47f)][_0x54c960(0x25b)](_0x54c960(0x181)) && _0x533c97['includes'](_0x2bbaea['coordAttacker']) && (_0x584724[_0x54c960(0x25b)](infoVillages[_0x54c960(0x18a)](_0x2bbaea[_0x54c960(0x465)])[_0x54c960(0x1ac)]['toLowerCase']()) || _0x584724[_0x54c960(0x5d6)] == 0x0)) _0x263e22[_0x54c960(0x1fa)]({
                    'type': 'off',
                    'coord': _0x2bbaea[_0x54c960(0x465)],
                    'name': _0x2bbaea['nameAttacker'],
                    'date': _0x45abbd,
                    'pop': _0x443da2
                });
                else tribemates[_0x54c960(0x25b)](_0x2bbaea[_0x54c960(0x4e1)]['toLowerCase']()) == ![] && _0x2bbaea['typeDefender'][_0x54c960(0x25b)]('off') && _0x533c97[_0x54c960(0x25b)](_0x2bbaea[_0x54c960(0x44c)]) && (_0x584724[_0x54c960(0x25b)](infoVillages[_0x54c960(0x18a)](_0x2bbaea[_0x54c960(0x44c)])[_0x54c960(0x1ac)][_0x54c960(0x38b)]()) || _0x584724['length'] == 0x0) && _0x263e22[_0x54c960(0x1fa)]({
                    'type': _0x54c960(0x181),
                    'coord': _0x2bbaea[_0x54c960(0x44c)],
                    'name': _0x2bbaea[_0x54c960(0x4e1)],
                    'date': _0x45abbd,
                    'pop': _0x443da2
                });
            } catch (_0x27a31a) {
                console[_0x54c960(0x533)](_0x54c960(0x599) + _0x533c97 + _0x54c960(0x443));
            }
        }), _0x263e22[_0x14d4bf(0x184)]((_0x4aefbd, _0x3431f7) => {
            const _0x17e24b = _0x14d4bf;
            return _0x4aefbd['name'] > _0x3431f7[_0x17e24b(0x4b8)] ? 0x1 : _0x4aefbd[_0x17e24b(0x4b8)] < _0x3431f7[_0x17e24b(0x4b8)] ? -0x1 : _0x4aefbd[_0x17e24b(0x51a)] > _0x3431f7[_0x17e24b(0x51a)] ? -0x1 : _0x4aefbd['pop'] < _0x3431f7['pop'] ? 0x1 : 0x0;
        });
        let _0x579765 = '';
        for (let _0x3bcf2a = 0x0; _0x3bcf2a < _0x263e22[_0x14d4bf(0x5d6)]; _0x3bcf2a++) {
            _0x579765 += _0x263e22[_0x3bcf2a]['type'] + ',\x20' + _0x263e22[_0x3bcf2a][_0x14d4bf(0x351)] + _0x14d4bf(0x1c9) + getContinent(_0x263e22[_0x3bcf2a][_0x14d4bf(0x351)]) + ',\x20' + _0x263e22[_0x3bcf2a]['name'] + ',\x20' + _0x263e22[_0x3bcf2a][_0x14d4bf(0x51a)] + ',\x20' + _0x263e22[_0x3bcf2a]['date']['trim']() + '\x0a', _0x3bcf2a < _0x263e22[_0x14d4bf(0x5d6)] - 0x1 && (_0x263e22[_0x3bcf2a][_0x14d4bf(0x4b8)] != _0x263e22[_0x3bcf2a + 0x1]['name'] && (_0x579765 += '\x0a\x0a'));
        }
        let _0x5a25bd = _0x14d4bf(0x52e) + _0x579765 + _0x14d4bf(0x445);
        Dialog[_0x14d4bf(0x485)](_0x14d4bf(0x1cc), _0x5a25bd);
    }), $('#btn_def_coord')['on'](_0x5a5d68(0x30f), function() {
        const _0x5ba435 = _0x5a5d68;
        let _0x59a6a3 = Array[_0x5ba435(0x2e2)](document[_0x5ba435(0x36b)](_0x5ba435(0x22d))[_0x5ba435(0x492)][_0x5ba435(0x1c8)](','))['map'](_0x107ec2 => _0x107ec2[_0x5ba435(0x26b)]()[_0x5ba435(0x38b)]())[_0x5ba435(0x249)](_0x57b699 => {
                return _0x57b699 !== '';
            }),
            _0x2b31ae = [];
        console['log'](_0x5ba435(0x4a9), _0x59a6a3), Array[_0x5ba435(0x2e2)](map_search[_0x5ba435(0x2f0)]())['forEach'](_0x16dd02 => {
            const _0x131d31 = _0x5ba435;
            try {
                let _0x27e493 = map_search['get'](_0x16dd02),
                    _0x21ec4d = _0x27e493[_0x131d31(0x5fd) + _0x16dd02],
                    _0x235a4c = 0x0,
                    _0x28e08e = _0x27e493['time_report_home_' + _0x16dd02];
                if (_0x21ec4d != undefined)
                    for (let _0x5ca2bc = 0x0; _0x5ca2bc < _0x21ec4d[_0x131d31(0x5d6)]; _0x5ca2bc++) {
                        (_0x21ec4d[_0x5ca2bc][_0x131d31(0x15c)] == _0x131d31(0x4b2) || _0x21ec4d[_0x5ca2bc][_0x131d31(0x15c)] == 'sword' || _0x21ec4d[_0x5ca2bc][_0x131d31(0x15c)] == _0x131d31(0x487) || _0x21ec4d[_0x5ca2bc][_0x131d31(0x15c)] == _0x131d31(0x3d2)) && (_0x235a4c += _0x21ec4d[_0x5ca2bc][_0x131d31(0x4b4)] * troopsPop[_0x21ec4d[_0x5ca2bc][_0x131d31(0x15c)]]);
                    } else _0x235a4c = -0x1, _0x28e08e = 'none';
                if (tribemates[_0x131d31(0x25b)](_0x27e493[_0x131d31(0x616)]['toLowerCase']()) == ![] && _0x27e493[_0x131d31(0x47f)]['includes'](_0x131d31(0x292)) && _0x16dd02[_0x131d31(0x25b)](_0x27e493[_0x131d31(0x465)]) && (_0x59a6a3[_0x131d31(0x25b)](infoVillages[_0x131d31(0x18a)](_0x27e493[_0x131d31(0x465)])[_0x131d31(0x1ac)][_0x131d31(0x38b)]()) || _0x59a6a3[_0x131d31(0x5d6)] == 0x0)) _0x2b31ae[_0x131d31(0x1fa)]({
                    'type': _0x131d31(0x292),
                    'coord': _0x27e493[_0x131d31(0x465)],
                    'name': _0x27e493[_0x131d31(0x616)],
                    'date': _0x28e08e,
                    'pop': _0x235a4c
                });
                else tribemates['includes'](_0x27e493[_0x131d31(0x4e1)][_0x131d31(0x38b)]()) == ![] && _0x27e493[_0x131d31(0x40a)]['includes'](_0x131d31(0x292)) && _0x16dd02[_0x131d31(0x25b)](_0x27e493[_0x131d31(0x44c)]) && (_0x59a6a3[_0x131d31(0x25b)](infoVillages[_0x131d31(0x18a)](_0x27e493[_0x131d31(0x44c)])[_0x131d31(0x1ac)][_0x131d31(0x38b)]()) || _0x59a6a3['length'] == 0x0) && _0x2b31ae[_0x131d31(0x1fa)]({
                    'type': _0x131d31(0x292),
                    'coord': _0x27e493['coordDefender'],
                    'name': _0x27e493[_0x131d31(0x4e1)],
                    'date': _0x28e08e,
                    'pop': _0x235a4c
                });
            } catch (_0xfd34c3) {
                console[_0x131d31(0x533)](_0x131d31(0x599) + _0x16dd02 + _0x131d31(0x443));
            }
        }), _0x2b31ae['sort']((_0x287361, _0x4c57ae) => {
            const _0x113e45 = _0x5ba435;
            return _0x287361[_0x113e45(0x4b8)] > _0x4c57ae['name'] ? 0x1 : _0x287361[_0x113e45(0x4b8)] < _0x4c57ae[_0x113e45(0x4b8)] ? -0x1 : _0x287361[_0x113e45(0x51a)] > _0x4c57ae['pop'] ? -0x1 : _0x287361[_0x113e45(0x51a)] < _0x4c57ae[_0x113e45(0x51a)] ? 0x1 : 0x0;
        });
        let _0x2c1048 = '';
        for (let _0x3a157b = 0x0; _0x3a157b < _0x2b31ae[_0x5ba435(0x5d6)]; _0x3a157b++) {
            _0x2c1048 += _0x2b31ae[_0x3a157b][_0x5ba435(0x15c)] + ',\x20' + _0x2b31ae[_0x3a157b][_0x5ba435(0x351)] + _0x5ba435(0x1c9) + getContinent(_0x2b31ae[_0x3a157b][_0x5ba435(0x351)]) + ',\x20' + _0x2b31ae[_0x3a157b][_0x5ba435(0x4b8)] + ',\x20' + _0x2b31ae[_0x3a157b][_0x5ba435(0x51a)] + ',\x20' + _0x2b31ae[_0x3a157b][_0x5ba435(0x1df)][_0x5ba435(0x26b)]() + '\x0a', _0x3a157b < _0x2b31ae[_0x5ba435(0x5d6)] - 0x1 && (_0x2b31ae[_0x3a157b][_0x5ba435(0x4b8)] != _0x2b31ae[_0x3a157b + 0x1][_0x5ba435(0x4b8)] && (_0x2c1048 += '\x0a\x0a'));
        }
        let _0x3de364 = _0x5ba435(0x52e) + _0x2c1048 + _0x5ba435(0x445);
        Dialog['show']('content', _0x3de364);
    }), $(_0x5a5d68(0x437))['on']('click', function() {
        const _0xd03e14 = _0x5a5d68;
        let _0x399e6f = [],
            _0x194056 = parseInt(document['getElementById'](_0xd03e14(0x4e9))[_0xd03e14(0x492)]);
        _0x194056 = Number[_0xd03e14(0x283)](_0x194056) == !![] || _0x194056 < 0x0 ? 0x0 : _0x194056, console[_0xd03e14(0x533)](_0x194056), Array[_0xd03e14(0x2e2)](map_search['keys']())[_0xd03e14(0x432)](_0x19af9 => {
            const _0x5097cd = _0xd03e14;
            let _0x20c96f = Array[_0x5097cd(0x2e2)](document[_0x5097cd(0x36b)]('input_filter_tribe')[_0x5097cd(0x492)][_0x5097cd(0x1c8)](','))[_0x5097cd(0x4e2)](_0x1ba88a => _0x1ba88a[_0x5097cd(0x26b)]()[_0x5097cd(0x38b)]())[_0x5097cd(0x249)](_0xb33db9 => {
                return _0xb33db9 !== '';
            });
            try {
                let _0x5a3b70 = map_search['get'](_0x19af9),
                    _0x145956 = _0x5a3b70['troopsAtHome_' + _0x19af9],
                    _0x51970b = 0x0,
                    _0x48ff9f = _0x5a3b70['time_report_home_' + _0x19af9];
                console[_0x5097cd(0x533)](_0x5097cd(0x5fd) + _0x19af9);
                if (_0x145956 != undefined)
                    for (let _0x38661e = 0x0; _0x38661e < _0x145956[_0x5097cd(0x5d6)]; _0x38661e++) {
                        (_0x145956[_0x38661e][_0x5097cd(0x15c)] == _0x5097cd(0x4b2) || _0x145956[_0x38661e][_0x5097cd(0x15c)] == _0x5097cd(0x328) || _0x145956[_0x38661e][_0x5097cd(0x15c)] == _0x5097cd(0x487) || _0x145956[_0x38661e][_0x5097cd(0x15c)] == _0x5097cd(0x3d2)) && (_0x51970b += _0x145956[_0x38661e][_0x5097cd(0x4b4)] * troopsPop[_0x145956[_0x38661e]['type']]);
                    } else _0x51970b = -0x1, _0x48ff9f = 'none';
                if (tribemates['includes'](_0x5a3b70['nameAttacker'][_0x5097cd(0x38b)]()) == ![] && _0x51970b > _0x194056 && _0x19af9[_0x5097cd(0x25b)](_0x5a3b70[_0x5097cd(0x465)]) && (_0x20c96f[_0x5097cd(0x25b)](infoVillages['get'](_0x5a3b70['coordAttacker'])[_0x5097cd(0x1ac)][_0x5097cd(0x38b)]()) || _0x20c96f['length'] == 0x0)) _0x399e6f[_0x5097cd(0x1fa)]({
                    'type': _0x5a3b70['typeAttacker'],
                    'coord': _0x5a3b70[_0x5097cd(0x465)],
                    'name': _0x5a3b70[_0x5097cd(0x616)],
                    'date': _0x48ff9f,
                    'pop': _0x51970b
                });
                else tribemates[_0x5097cd(0x25b)](_0x5a3b70['nameDefender'][_0x5097cd(0x38b)]()) == ![] && _0x51970b > _0x194056 && _0x19af9['includes'](_0x5a3b70['coordDefender']) && (_0x20c96f['includes'](infoVillages[_0x5097cd(0x18a)](_0x5a3b70[_0x5097cd(0x44c)])[_0x5097cd(0x1ac)][_0x5097cd(0x38b)]()) || _0x20c96f[_0x5097cd(0x5d6)] == 0x0) && _0x399e6f[_0x5097cd(0x1fa)]({
                    'type': _0x5a3b70[_0x5097cd(0x40a)],
                    'coord': _0x5a3b70[_0x5097cd(0x44c)],
                    'name': _0x5a3b70[_0x5097cd(0x4e1)],
                    'date': _0x48ff9f,
                    'pop': _0x51970b
                });
            } catch (_0x5500cd) {}
        }), _0x399e6f[_0xd03e14(0x184)]((_0x4118a6, _0x476fd1) => {
            const _0x44dffe = _0xd03e14;
            return _0x4118a6[_0x44dffe(0x4b8)] > _0x476fd1[_0x44dffe(0x4b8)] ? 0x1 : _0x4118a6[_0x44dffe(0x4b8)] < _0x476fd1[_0x44dffe(0x4b8)] ? -0x1 : _0x4118a6['pop'] > _0x476fd1['pop'] ? -0x1 : _0x4118a6[_0x44dffe(0x51a)] < _0x476fd1[_0x44dffe(0x51a)] ? 0x1 : 0x0;
        }), console[_0xd03e14(0x533)](_0x399e6f);
        let _0x305532 = '';
        for (let _0x1047f2 = 0x0; _0x1047f2 < _0x399e6f[_0xd03e14(0x5d6)]; _0x1047f2++) {
            _0x305532 += _0x399e6f[_0x1047f2][_0xd03e14(0x15c)] + ',\x20' + _0x399e6f[_0x1047f2][_0xd03e14(0x351)] + ',\x20k' + getContinent(_0x399e6f[_0x1047f2][_0xd03e14(0x351)]) + ',\x20' + _0x399e6f[_0x1047f2][_0xd03e14(0x4b8)] + ',\x20' + _0x399e6f[_0x1047f2][_0xd03e14(0x51a)] + ',\x20' + _0x399e6f[_0x1047f2][_0xd03e14(0x1df)]['trim']() + '\x0a', _0x1047f2 < _0x399e6f[_0xd03e14(0x5d6)] - 0x1 && (_0x399e6f[_0x1047f2][_0xd03e14(0x4b8)] != _0x399e6f[_0x1047f2 + 0x1][_0xd03e14(0x4b8)] && (_0x305532 += '\x0a\x0a'));
        }
        console[_0xd03e14(0x533)](_0x305532);
        let _0x10b102 = _0xd03e14(0x433) + _0x305532 + _0xd03e14(0x445);
        Dialog[_0xd03e14(0x485)](_0xd03e14(0x1cc), _0x10b102);
    });
}
async function databaseDetails() {
    const _0x2df98d = _0x555ef8;
    [mapReports, mapHistoryUpload, mapIncomings, mapSupport, mapAttack] = await Promise['all']([readFileDropbox(filename_reports), readFileDropbox(filename_history_upload), readFileDropbox(filename_incomings), readFileDropbox(filename_support), readFileDropbox(filename_commands_attack)])[_0x2df98d(0x198)](_0x5dfac3 => {
        alert(_0x5dfac3);
    });
    let _0x24f7c7 = await Promise[_0x2df98d(0x3b6)](commandsAttacksPromises)[_0x2df98d(0x198)](_0x3d2845 => {
            alert(_0x3d2845);
        }),
        _0x16e57c = await Promise['all'](supportPromises)[_0x2df98d(0x198)](_0x9091f2 => {
            alert(_0x9091f2);
        }),
        _0x20db4c = formatBytes(new TextEncoder()['encode'](await mapReports[_0x2df98d(0x2c0)]())['length']),
        _0x3ff4a8;
    try {
        let _0x56285a = await decompress(await mapReports[_0x2df98d(0x4a5)](), _0x2df98d(0x59f));
        _0x3ff4a8 = formatBytes(new TextEncoder()[_0x2df98d(0x3bf)](_0x56285a)[_0x2df98d(0x5d6)]), mapReports = new Map(JSON['parse'](_0x56285a));
    } catch (_0x2548c7) {
        console[_0x2df98d(0x533)](_0x2df98d(0x265)), mapReports = new Map();
    }
    let _0x2e14da = formatBytes(new TextEncoder()['encode'](await mapHistoryUpload[_0x2df98d(0x2c0)]())['length']),
        _0x3b4577;
    try {
        let _0x4b3d26 = await decompress(await mapHistoryUpload[_0x2df98d(0x4a5)](), _0x2df98d(0x59f));
        _0x3b4577 = formatBytes(new TextEncoder()[_0x2df98d(0x3bf)](_0x4b3d26)['length']), mapHistoryUpload = new Map(JSON['parse'](_0x4b3d26));
    } catch (_0x41d735) {
        console['log'](_0x2df98d(0x12b)), mapHistoryUpload = new Map();
    }
    let _0x1e4b79 = formatBytes(new TextEncoder()[_0x2df98d(0x3bf)](await mapIncomings[_0x2df98d(0x2c0)]())[_0x2df98d(0x5d6)]),
        _0x403aea;
    try {
        let _0x502ac3 = await decompress(await mapIncomings[_0x2df98d(0x4a5)](), 'gzip');
        _0x403aea = formatBytes(new TextEncoder()[_0x2df98d(0x3bf)](_0x502ac3)['length']), mapIncomings = new Map(JSON[_0x2df98d(0x1a6)](_0x502ac3));
    } catch (_0x3e9d45) {
        console[_0x2df98d(0x533)]('erorrr\x20map\x20report\x20from\x20dropbox'), mapIncomings = new Map();
    }
    let _0x3df78d, _0x4f9904, _0x351c01, _0x54f84f, _0x239c58 = 0x0,
        _0x55c2af = 0x0;
    try {
        let _0x167656 = await decompress(await mapSupport[_0x2df98d(0x4a5)](), _0x2df98d(0x59f));
        _0x3df78d = new Map(JSON['parse'](_0x167656)[0x0]), _0x4f9904 = new Map(JSON[_0x2df98d(0x1a6)](_0x167656)[0x1]), _0x239c58 += new TextEncoder()[_0x2df98d(0x3bf)](await mapSupport[_0x2df98d(0x2c0)]())['length'], _0x55c2af += new TextEncoder()['encode'](_0x167656)['length'];
    } catch (_0x41e233) {
        console[_0x2df98d(0x533)](_0x2df98d(0x611)), _0x3df78d = new Map(), _0x4f9904 = new Map();
    }
    for (let _0x36cc1e = 0x0; _0x36cc1e < _0x16e57c[_0x2df98d(0x5d6)]; _0x36cc1e++) {
        let _0x1d6e16 = await decompress(await _0x16e57c[_0x36cc1e][_0x2df98d(0x4a5)](), _0x2df98d(0x59f));
        if (_0x1d6e16 != '[]') {
            let _0x3c5edf = new Map(JSON[_0x2df98d(0x1a6)](_0x1d6e16)[0x0]),
                _0x1880bb = new Map(JSON['parse'](_0x1d6e16)[0x1]);
            _0x3df78d = new Map([..._0x3df78d, ..._0x3c5edf]), _0x4f9904 = new Map([..._0x4f9904, ..._0x1880bb]), _0x239c58 += new TextEncoder()[_0x2df98d(0x3bf)](await _0x16e57c[_0x36cc1e][_0x2df98d(0x2c0)]())[_0x2df98d(0x5d6)], _0x55c2af += new TextEncoder()[_0x2df98d(0x3bf)](_0x1d6e16)[_0x2df98d(0x5d6)];
        }
    }
    _0x351c01 = formatBytes(_0x239c58), _0x54f84f = formatBytes(_0x55c2af);
    let _0xa72cb1, _0x47e2da, _0x1f71e9 = 0x0,
        _0x4dc033 = 0x0;
    try {
        let _0x4efd02 = await decompress(await data_attack[_0x2df98d(0x4a5)](), _0x2df98d(0x59f));
        mapAttack = new Map(JSON[_0x2df98d(0x1a6)](_0x4efd02)), _0x1f71e9 += new TextEncoder()[_0x2df98d(0x3bf)](await mapAttack[_0x2df98d(0x2c0)]())[_0x2df98d(0x5d6)], _0x4dc033 += new TextEncoder()[_0x2df98d(0x3bf)](_0x4efd02)[_0x2df98d(0x5d6)];
    } catch (_0x1d2c2f) {
        console[_0x2df98d(0x533)](_0x2df98d(0x3dd)), mapAttack = new Map();
    }
    for (let _0x49517e = 0x0; _0x49517e < _0x24f7c7[_0x2df98d(0x5d6)]; _0x49517e++) {
        let _0x122a72 = await decompress(await _0x24f7c7[_0x49517e]['arrayBuffer'](), _0x2df98d(0x59f));
        if (_0x24f7c7[_0x49517e] != '[]') {
            let _0x44e5f3 = new Map(JSON[_0x2df98d(0x1a6)](_0x122a72));
            mapAttack = new Map([...mapAttack, ..._0x44e5f3]), _0x1f71e9 += new TextEncoder()['encode'](await _0x24f7c7[_0x49517e][_0x2df98d(0x2c0)]())[_0x2df98d(0x5d6)], _0x4dc033 += new TextEncoder()['encode'](_0x122a72)[_0x2df98d(0x5d6)];
        }
    }
    _0xa72cb1 = formatBytes(_0x1f71e9), _0x47e2da = formatBytes(_0x4dc033);
    let _0x3d305f = [{
            'name': _0x2df98d(0x5b3),
            'compressed': _0x20db4c,
            'decompresed': _0x3ff4a8
        }, {
            'name': 'reportsHistory',
            'compressed': _0x2e14da,
            'decompresed': _0x3b4577
        }, {
            'name': _0x2df98d(0x3f9),
            'compressed': _0x1e4b79,
            'decompresed': _0x403aea
        }, {
            'name': _0x2df98d(0x3be),
            'compressed': _0x351c01,
            'decompresed': _0x54f84f
        }, {
            'name': 'attacks',
            'compressed': _0xa72cb1,
            'decompresed': _0x47e2da
        }],
        _0x4a4705 = _0x2df98d(0x28f);
    for (let _0x30b407 = 0x0; _0x30b407 < _0x3d305f[_0x2df98d(0x5d6)]; _0x30b407++) {
        _0x4a4705 += _0x2df98d(0x495) + _0x3d305f[_0x30b407]['name'] + _0x2df98d(0x387) + _0x3d305f[_0x30b407][_0x2df98d(0x273)] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>' + _0x3d305f[_0x30b407][_0x2df98d(0x1b9)] + _0x2df98d(0x622);
    }
    _0x4a4705 += _0x2df98d(0x3bb), Dialog['show']('content', _0x4a4705);
}

function createReport(_0x10909d) {
    const _0x1d5dd0 = _0x555ef8;
    var _0x4b1eb8 = '';
    return _0x10909d[_0x1d5dd0(0x12f)] != undefined && (_0x4b1eb8 = _0x1d5dd0(0x196) + _0x10909d[_0x1d5dd0(0x325)] + _0x1d5dd0(0x130) + _0x10909d['nameAttacker'] + _0x1d5dd0(0x423) + _0x10909d[_0x1d5dd0(0x465)] + '</td>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22\x20style=\x22padding:0px\x22>' + createTableTroupes(_0x10909d['attackingArmy'], _0x10909d[_0x1d5dd0(0x132)]) + _0x1d5dd0(0x18c)), _0x10909d[_0x1d5dd0(0x517)] != undefined && (_0x4b1eb8 += '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22\x20valign=\x22top\x22\x20height=\x22160\x22\x20style=\x22border:\x20solid\x201px\x20;\x20padding\x204px;\x22\x20\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22attack_info_def\x22\x20width=100%\x20style=\x22border:\x201px\x20solid\x20#DED3B9\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22width:20%\x22>Defender:</th>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20>' + _0x10909d[_0x1d5dd0(0x4e1)] + _0x1d5dd0(0x479) + _0x10909d['coordDefender'] + '</td>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22\x20style=\x22padding:0px\x22>' + createTableTroupes(_0x10909d[_0x1d5dd0(0x517)], _0x10909d[_0x1d5dd0(0x5db)]) + _0x1d5dd0(0x2d6)), _0x10909d[_0x1d5dd0(0x2be)] != undefined && (_0x4b1eb8 += '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22\x20valign=\x22top\x22\x20height=\x22160\x22\x20style=\x22border:\x20solid\x201px\x20;\x20padding\x204px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22attack_spy_away\x22\x20width=100%\x20style=\x22border:\x201px\x20solid\x20#DED3B9;\x20width:100%;\x20margin-top:5px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x222\x22>Units\x20outside\x20of\x20village:</th>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22\x20>' + createTableTroupesAway(_0x10909d[_0x1d5dd0(0x2be)]) + _0x1d5dd0(0x2d6)), _0x10909d['attackingArmy'] != undefined && (_0x4b1eb8 += _0x1d5dd0(0x127)), _0x4b1eb8;
}

function createTableTroupes(_0x148507, _0x5b4ca9) {
    const _0x479a38 = _0x555ef8;
    let _0x59b73f = _0x479a38(0x537),
        _0x3b9f35 = game_data[_0x479a38(0x4b3)];
    for (let _0x23b35a = 0x0; _0x23b35a < _0x148507[_0x479a38(0x5d6)]; _0x23b35a++) {
        if (_0x3b9f35[_0x23b35a] != _0x479a38(0x592)) {
            if (_0x148507[_0x23b35a][_0x479a38(0x4b4)] == 0x0) _0x59b73f += '<td\x20width=\x2235\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/3ec301e5/graphic/unit/unit_' + _0x3b9f35[_0x23b35a] + _0x479a38(0x17a);
            else _0x59b73f += _0x479a38(0x4bf) + _0x3b9f35[_0x23b35a] + _0x479a38(0x64f);
        }
    }
    _0x59b73f += _0x479a38(0x4dd), _0x59b73f += _0x479a38(0x5a0);
    for (let _0x1dced3 = 0x0; _0x1dced3 < _0x148507[_0x479a38(0x5d6)]; _0x1dced3++) {
        if (_0x3b9f35[_0x1dced3] != 'militia') {
            if (_0x148507[_0x1dced3]['count'] == 0x0) _0x59b73f += '<td\x20style=\x22text-align:center\x22\x20class=\x22unit-item\x20unit-item-' + _0x3b9f35[_0x1dced3] + _0x479a38(0x19e) + _0x148507[_0x1dced3][_0x479a38(0x4b4)] + _0x479a38(0x26a);
            else _0x59b73f += _0x479a38(0x4e0) + _0x3b9f35[_0x1dced3] + '\x22>' + _0x148507[_0x1dced3][_0x479a38(0x4b4)] + _0x479a38(0x26a);
        }
    }
    _0x59b73f += _0x479a38(0x4dd), _0x59b73f += _0x479a38(0x56f);
    for (let _0x48181e = 0x0; _0x48181e < _0x5b4ca9[_0x479a38(0x5d6)]; _0x48181e++) {
        if (_0x3b9f35[_0x48181e] != _0x479a38(0x592)) {
            if (_0x5b4ca9[_0x48181e]['count'] == 0x0) _0x59b73f += '<td\x20style=\x22text-align:center\x22\x20class=\x22unit-item\x20unit-item-' + _0x3b9f35[_0x48181e] + _0x479a38(0x19e) + _0x5b4ca9[_0x48181e]['count'] + _0x479a38(0x26a);
            else _0x59b73f += _0x479a38(0x4e0) + _0x3b9f35[_0x48181e] + '\x22>' + _0x5b4ca9[_0x48181e]['count'] + '</td>';
        }
    }
    return _0x59b73f += _0x479a38(0x4dd), _0x59b73f += _0x479a38(0x20b), _0x59b73f;
}

function createTableTroupesAway(_0x450ba1) {
    const _0x3fcafd = _0x555ef8;
    let _0x3589c9 = _0x3fcafd(0x15d),
        _0x2aa8c6 = game_data['units'];
    return Object[_0x3fcafd(0x2f0)](_0x450ba1)[_0x3fcafd(0x432)](_0x5624df => {
        const _0x414e36 = _0x3fcafd;
        if (_0x450ba1[_0x5624df] == 0x0) _0x3589c9 += _0x414e36(0x1e5) + _0x5624df + _0x414e36(0x47b);
        else _0x3589c9 += '<th\x20width=\x2235\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/3ec301e5/graphic/unit/unit_' + _0x5624df + _0x414e36(0x2f5);
    }), _0x3589c9 += _0x3fcafd(0x4dd), _0x3589c9 += _0x3fcafd(0x581), Object['keys'](_0x450ba1)[_0x3fcafd(0x432)](_0x21430e => {
        const _0x381384 = _0x3fcafd;
        if (_0x450ba1[_0x21430e] == 0x0) _0x3589c9 += _0x381384(0x4e0) + _0x21430e + _0x381384(0x19e) + _0x450ba1[_0x21430e] + _0x381384(0x26a);
        else _0x3589c9 += '<td\x20style=\x22text-align:center\x22\x20class=\x22unit-item\x20unit-item-' + _0x21430e + '\x22>' + _0x450ba1[_0x21430e] + _0x381384(0x26a);
    }), _0x3589c9 += _0x3fcafd(0x4dd), _0x3589c9 += _0x3fcafd(0x20b), _0x3589c9;
}

function createTableIncomings(_0x36925f) {
    const _0x502b0d = _0x555ef8;
    let _0x95d080 = document[_0x502b0d(0x36b)](_0x502b0d(0x4d8))[_0x502b0d(0x5ad)],
        _0x347611 = document[_0x502b0d(0x36b)]('serverDate')['innerText'][_0x502b0d(0x1c8)]('/');
    _0x347611 = _0x347611[0x1] + '/' + _0x347611[0x0] + '/' + _0x347611[0x2];
    let _0xa6171a = new Date(_0x347611 + '\x20' + _0x95d080)[_0x502b0d(0x505)](),
        _0x5962ea = _0x502b0d(0x406);
    for (let _0x560b06 = 0x0; _0x560b06 < _0x36925f['length']; _0x560b06++) {
        let _0x14230f;
        if (_0x36925f[_0x560b06][_0x502b0d(0x14b)] == _0x502b0d(0x2ea)) _0x14230f = _0x502b0d(0x3cb);
        else _0x14230f = _0x502b0d(0x2ec) + _0x36925f[_0x560b06][_0x502b0d(0x14b)];
        let _0x3ed7da = new Date(_0x36925f[_0x560b06][_0x502b0d(0x2e7)])[_0x502b0d(0x505)]();
        _0x3ed7da > _0xa6171a && (_0x5962ea += _0x502b0d(0x20a) + _0x36925f[_0x560b06][_0x502b0d(0x64c)] + _0x502b0d(0x222) + _0x14230f + _0x502b0d(0x64a) + game_data[_0x502b0d(0x2bc)] + _0x502b0d(0x5f0) + _0x36925f[_0x560b06][_0x502b0d(0x63a)] + _0x502b0d(0x264) + _0x36925f[_0x560b06][_0x502b0d(0x1d0)] + _0x502b0d(0x23c) + game_data[_0x502b0d(0x2bc)] + _0x502b0d(0x43f) + _0x36925f[_0x560b06][_0x502b0d(0x563)] + _0x502b0d(0x5ba) + _0x36925f[_0x560b06]['player_def'] + _0x502b0d(0x364) + game_data['link_base_pure'] + _0x502b0d(0x5f0) + _0x36925f[_0x560b06]['id_coord_off'] + _0x502b0d(0x3b3) + _0x36925f[_0x560b06][_0x502b0d(0x15a)] + _0x502b0d(0x33d) + game_data[_0x502b0d(0x2bc)] + _0x502b0d(0x43f) + _0x36925f[_0x560b06]['id_player_off'] + '\x22>' + _0x36925f[_0x560b06]['player_off'] + '\x20</a>\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>' + _0x36925f[_0x560b06][_0x502b0d(0x2e7)][_0x502b0d(0x1c8)]('\x20')[0x0] + '\x20<b>' + _0x36925f[_0x560b06]['date_land'][_0x502b0d(0x1c8)]('\x20')[0x1] + _0x502b0d(0x444) + _0x3ed7da + '\x20class=\x22counterTime\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20');
    }
    return _0x5962ea += _0x502b0d(0x127), _0x5962ea;
}

function counterTime() {
    const _0x4c7921 = _0x555ef8;
    window[_0x4c7921(0x570)](() => {
        const _0x1abb14 = _0x4c7921;
        $(_0x1abb14(0x31b))['each']((_0x441209, _0x500290) => {
            const _0x46b3b0 = _0x1abb14;
            let _0x4c8830 = document[_0x46b3b0(0x36b)](_0x46b3b0(0x4d8))[_0x46b3b0(0x5ad)],
                _0x506f56 = document[_0x46b3b0(0x36b)](_0x46b3b0(0x239))[_0x46b3b0(0x5ad)][_0x46b3b0(0x1c8)]('/');
            _0x506f56 = _0x506f56[0x1] + '/' + _0x506f56[0x0] + '/' + _0x506f56[0x2];
            let _0x339adb = new Date(_0x506f56 + '\x20' + _0x4c8830)[_0x46b3b0(0x505)](),
                _0x10022f = parseInt(_0x500290[_0x46b3b0(0x188)](_0x46b3b0(0x2d2))),
                _0x195635 = ('0' + parseInt((_0x10022f - _0x339adb) / (0xe10 * 0x3e8)))['slice'](-0x3),
                _0x46c260 = ('0' + parseInt((_0x10022f - _0x339adb) / (0x3c * 0x3e8) % 0x3c))[_0x46b3b0(0x22c)](-0x2),
                _0x2447e4 = ('0' + parseInt((_0x10022f - _0x339adb) / 0x3e8 % 0x3c))[_0x46b3b0(0x22c)](-0x2);
            result = _0x195635 + ':' + _0x46c260 + ':' + _0x2447e4, _0x500290['innerText'] = result;
        });
    }, 0x1388);
}

function getSpeedConstant() {
    const _0xa4aec1 = _0x555ef8;
    if (localStorage['getItem'](game_data[_0xa4aec1(0x429)] + _0xa4aec1(0x498)) !== null) {
        let _0x5c534f = JSON[_0xa4aec1(0x1a6)](localStorage['getItem'](game_data[_0xa4aec1(0x429)] + 'speedWorld'));
        return console[_0xa4aec1(0x533)](_0xa4aec1(0x5f5)), _0x5c534f;
    } else {
        let _0x3b8923 = document[_0xa4aec1(0x49e)][_0xa4aec1(0x4c5)];
        document['body'][_0xa4aec1(0x4c5)] = httpGet(_0xa4aec1(0x176));
        let _0x2f33db = {},
            _0xaba704 = Number(document[_0xa4aec1(0x14f)]('speed')[0x0][_0xa4aec1(0x4c5)]),
            _0x1c550a = Number(document[_0xa4aec1(0x14f)](_0xa4aec1(0x39d))[0x0][_0xa4aec1(0x4c5)]);
        return _0x2f33db[_0xa4aec1(0x337)] = _0x1c550a, _0x2f33db[_0xa4aec1(0x142)] = _0xaba704, document[_0xa4aec1(0x49e)]['innerHTML'] = _0x3b8923, localStorage[_0xa4aec1(0x1d4)](game_data[_0xa4aec1(0x429)] + _0xa4aec1(0x498), JSON['stringify'](_0x2f33db)), console['log']('save\x20speed\x20world'), _0x2f33db;
    }
}

function setIntervalIncomings() {
    const _0x46564e = _0x555ef8;
    htmlInc = _0x46564e(0x58c) + backgroundColor + _0x46564e(0x2d7) + titleColor + '\x22>X</font></b></a></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2><center\x20style=\x22margin:10px\x22><u><font\x20color=\x22' + titleColor + _0x46564e(0x490) + backgroundColor + _0x46564e(0x2a0) + borderColor + _0x46564e(0x1d6) + headerColor + _0x46564e(0x1b3) + titleColor + _0x46564e(0x45a) + headerColor + _0x46564e(0x2d8) + headerColor + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p><center\x20style=\x22\x22><input\x20type=\x22number\x22\x20id=\x22id_stop\x22\x20size=\x225\x22\x20style=\x22text-align:center\x22\x20class=\x22\x20input-nicer\x20show\x22\x20value=\x22100\x22><br><br></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><u><input\x20class=\x22btn\x22\x20type=\x22button\x22\x20id=\x22btn_village\x22\x20onclick=\x22getTrIncomings()\x22\x20value=\x22Start\x22></center>\x0a\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', $(_0x46564e(0x556))[_0x46564e(0x501)](), $(_0x46564e(0x362))['eq'](0x0)[_0x46564e(0x4c2)](htmlInc), $(_0x46564e(0x508))['eq'](0x0)[_0x46564e(0x4c2)](htmlInc);
    game_data[_0x46564e(0x225)] == 'desktop' && ($(_0x46564e(0x556))[_0x46564e(0x2e0)](_0x46564e(0x218), _0x46564e(0x631)), $(_0x46564e(0x556))[_0x46564e(0x4bb)]());
    $(_0x46564e(0x26e))['on'](_0x46564e(0x5e2), function(_0x1eea3a) {
        const _0x68446d = _0x46564e;
        let _0x2caa71 = this[_0x68446d(0x492)];
        localStorage['setItem'](game_data['world'] + _0x68446d(0x1c6), _0x2caa71);
    }), $(_0x46564e(0x32f))['on']('input', function(_0x48f4f1) {
        const _0x3cb486 = _0x46564e;
        let _0x4ce81c = this[_0x3cb486(0x492)];
        localStorage[_0x3cb486(0x1d4)](game_data['world'] + _0x3cb486(0x3df), _0x4ce81c);
    });
    if (localStorage[_0x46564e(0x520)](game_data[_0x46564e(0x429)] + _0x46564e(0x1c6)) != null) $(_0x46564e(0x26e))['val'](localStorage[_0x46564e(0x520)](game_data[_0x46564e(0x429)] + _0x46564e(0x1c6)));
    if (localStorage['getItem'](game_data[_0x46564e(0x429)] + 'stopInc') != null) $('#id_stop')[_0x46564e(0x346)](localStorage[_0x46564e(0x520)](game_data[_0x46564e(0x429)] + _0x46564e(0x3df)));
}
async function getTrIncomings() {
    const _0x538c6c = _0x555ef8;
    let _0x3774d0;
    if (localStorage[_0x538c6c(0x520)](game_data[_0x538c6c(0x429)] + 'get_only_fakes') == _0x538c6c(0x5f2) || localStorage[_0x538c6c(0x520)](game_data[_0x538c6c(0x429)] + 'get_def_vills') == 'true') {
        [_0x3774d0, status] = await Promise['all']([readFileDropbox(filename_reports), insertlibraryLocalBase()])[_0x538c6c(0x198)](_0x218045 => {
            alert(_0x218045);
        });
        try {
            let _0x1bf3e9 = await decompress(await _0x3774d0[_0x538c6c(0x4a5)](), _0x538c6c(0x59f));
            _0x3774d0 = new Map(JSON[_0x538c6c(0x1a6)](_0x1bf3e9));
        } catch (_0x76aa32) {
            console[_0x538c6c(0x533)](_0x538c6c(0x265)), _0x3774d0 = new Map();
        }
        if (await localBase[_0x538c6c(0x520)](game_data[_0x538c6c(0x429)] + _0x538c6c(0x5b3)) != undefined) try {
            let _0x12bc8e = base64ToBlob(await localBase['getItem'](game_data[_0x538c6c(0x429)] + _0x538c6c(0x5b3))),
                _0x68b97d = await decompress(await _0x12bc8e[_0x538c6c(0x4a5)](), _0x538c6c(0x59f)),
                _0x16c5c3 = new Map(JSON[_0x538c6c(0x1a6)](_0x68b97d));
            console[_0x538c6c(0x533)](_0x538c6c(0x28d), _0x16c5c3), _0x3774d0 = new Map([..._0x16c5c3, ..._0x3774d0]);
        } catch (_0x57f6bb) {}
    }
    let _0x48e32a = parseInt(document[_0x538c6c(0x36b)]('input_pop_fake2')[_0x538c6c(0x492)]);
    _0x48e32a = Number[_0x538c6c(0x283)](_0x48e32a) || _0x48e32a < 0x0 ? 0x0 : _0x48e32a;
    let _0x58c1db = [],
        _0x2b0556 = parseInt(document['getElementById'](_0x538c6c(0x3c4))[_0x538c6c(0x492)]),
        _0x255f82 = parseInt(document[_0x538c6c(0x36b)]('id_stop')['value']);
    if (document[_0x538c6c(0x612)](_0x538c6c(0x372))[0x1][_0x538c6c(0x14f)](_0x538c6c(0x5c4))[_0x538c6c(0x5d6)] > 0x0) Array['from'](document['getElementsByClassName'](_0x538c6c(0x372))[0x1][_0x538c6c(0x14f)](_0x538c6c(0x5c4))[0x0])[_0x538c6c(0x432)](function(_0x23ae2d) {
        const _0xacc1db = _0x538c6c;
        _0x58c1db['push'](_0x23ae2d[_0xacc1db(0x492)]);
    }), _0x58c1db[_0x538c6c(0x51a)]();
    else {
        if (document['getElementsByClassName'](_0x538c6c(0x13b))[_0x538c6c(0x5d6)] > 0x0) {
            let _0x2abcbe = 0x0;
            Array[_0x538c6c(0x2e2)](document[_0x538c6c(0x612)](_0x538c6c(0x13b)))[_0x538c6c(0x432)](function(_0x447476) {
                const _0xd31648 = _0x538c6c;
                let _0x186c75 = _0x447476[_0xd31648(0x148)];
                _0x186c75 = _0x186c75[_0xd31648(0x1c8)](_0xd31648(0x56b))[0x0] + _0xd31648(0x56b) + _0x2abcbe, _0x2abcbe++, _0x58c1db['push'](_0x186c75);
            });
        } else {
            let _0x26245e = window[_0x538c6c(0x185)]['href'];
            _0x58c1db[_0x538c6c(0x1fa)](_0x26245e);
        }
    }
    _0x58c1db = _0x58c1db[_0x538c6c(0x560)](), console[_0x538c6c(0x533)](_0x58c1db);
    let _0x31fda8 = [];

    function _0x2ae17b(_0x41b719) {
        const _0x337c22 = _0x538c6c;
        let _0x4f4f81, _0xddff4f = new Date()[_0x337c22(0x505)]();
        _0x41b719[_0x337c22(0x5d6)] > 0x0 ? _0x4f4f81 = _0x41b719[_0x337c22(0x51a)]() : _0x4f4f81 = _0x337c22(0x5e1);
        console[_0x337c22(0x533)](_0x4f4f81);
        if (_0x41b719[_0x337c22(0x5d6)] >= 0x0 && _0x4f4f81 != _0x337c22(0x5e1)) $[_0x337c22(0x53b)]({
            'url': _0x4f4f81,
            'method': 'get',
            'success': _0x267683 => {
                const _0x97e9d1 = _0x337c22;
                document[_0x97e9d1(0x49e)][_0x97e9d1(0x4c5)] = _0x267683;
                var _0x4c583e = document[_0x97e9d1(0x304)]('.row_a,\x20.row_b');
                for (let _0x18e056 = 0x0; _0x18e056 < _0x4c583e[_0x97e9d1(0x5d6)]; _0x18e056++) {
                    _0x31fda8['push'](_0x4c583e[_0x18e056]);
                }
                let _0xf95636 = new Date()[_0x97e9d1(0x505)](),
                    _0x52b7aa = _0xf95636 - _0xddff4f;
                console['log']('wait\x20inc:\x20' + (0xc8 - _0x52b7aa)), window[_0x97e9d1(0x5c9)](function() {
                    _0x2ae17b(_0x58c1db);
                }, 0xc8 - _0x52b7aa);
            }
        });
        else {
            $(_0x337c22(0x426))[_0x337c22(0x501)](), $(_0x337c22(0x230))['remove']();
            let _0x10fa11 = document[_0x337c22(0x36b)](_0x337c22(0x646)),
                _0x236cb1 = _0x10fa11['children'][0x0][_0x337c22(0x3c5)][0x1];
            _0x10fa11[_0x337c22(0x3c5)][0x0]['children'][0x1][_0x337c22(0x501)]();
            let _0x581de2 = 0x0;
            for (let _0x18cce1 = 0x0; _0x18cce1 < _0x31fda8['length']; _0x18cce1++) {
                let _0x218303 = _0x31fda8[_0x18cce1][_0x337c22(0x3c5)][_0x31fda8[_0x18cce1][_0x337c22(0x3c5)]['length'] - 0x1]['innerText']['split'](':')[0x0],
                    _0x40215f = ![],
                    _0x17e794 = ![],
                    _0x13b03b = ![];
                if (_0x218303 >= _0x2b0556 && _0x218303 < _0x255f82) {
                    if (localStorage[_0x337c22(0x520)](game_data[_0x337c22(0x429)] + 'get_only_fakes') == _0x337c22(0x5f2) || localStorage[_0x337c22(0x520)](game_data[_0x337c22(0x429)] + 'get_def_vills') == _0x337c22(0x5f2)) {
                        let _0x1e44a5 = _0x31fda8[_0x18cce1][_0x337c22(0x3c5)][_0x337c22(0x5d6)],
                            _0x454145 = _0x31fda8[_0x18cce1][_0x337c22(0x3c5)][0x1][_0x337c22(0x5ad)][_0x337c22(0x538)](/\d+\|\d+/)[0x0],
                            _0x59ab60 = _0x31fda8[_0x18cce1][_0x337c22(0x3c5)][0x2][_0x337c22(0x5ad)]['match'](/\d+\|\d+/)[0x0],
                            _0x4d07b1 = _0x31fda8[_0x18cce1][_0x337c22(0x3c5)][_0x1e44a5 - 0x4][_0x337c22(0x3c5)][0x0][_0x337c22(0x148)][_0x337c22(0x1c8)](_0x337c22(0x35b))[0x1];
                        if (_0x3774d0[_0x337c22(0x4d7)](_0x59ab60)) {
                            let _0x493fbc, _0x2fddd7, _0x13d14b;
                            var _0x19a07d = _0x3774d0[_0x337c22(0x18a)](_0x59ab60),
                                _0x6f0a5 = ![];
                            if (_0x59ab60 == _0x19a07d[_0x337c22(0x465)]) _0x493fbc = _0x19a07d[_0x337c22(0x341)], _0x2fddd7 = _0x19a07d['typeAttacker'], _0x13d14b = _0x19a07d[_0x337c22(0x4f7)], _0x6f0a5 = !![];
                            else _0x59ab60 == _0x19a07d[_0x337c22(0x44c)] ? (_0x493fbc = _0x19a07d[_0x337c22(0x3d9)], _0x2fddd7 = _0x19a07d[_0x337c22(0x40a)], _0x13d14b = _0x19a07d[_0x337c22(0x290)], _0x6f0a5 = ![]) : (_0x493fbc = _0x19a07d['supporterPlayerId'], _0x2fddd7 = _0x19a07d[_0x337c22(0x374)], _0x13d14b = _0x19a07d[_0x337c22(0x17f)]);
                            if (_0x493fbc == _0x4d07b1 && _0x31fda8[_0x18cce1][_0x337c22(0x3c5)][0x0][_0x337c22(0x14f)](_0x337c22(0x183))[_0x337c22(0x5d6)] == 0x2) {
                                let _0x888d36 = new Date(_0x19a07d[_0x337c22(0x325)]),
                                    _0x2b4b89 = calcDistance(_0x59ab60, _0x454145),
                                    _0x2ccaa4 = 0x0,
                                    _0x5879b3 = _0x31fda8[_0x18cce1]['children'][_0x1e44a5 - 0x2][_0x337c22(0x5ad)],
                                    _0x5b5126 = new Date(getLandTime(_0x5879b3)),
                                    _0xa5575f = '';
                                if (_0x31fda8[_0x18cce1][_0x337c22(0x3c5)][0x0][_0x337c22(0x14f)](_0x337c22(0x183))[0x1] == undefined || _0x31fda8[_0x18cce1][_0x337c22(0x3c5)][0x0][_0x337c22(0x14f)]('img')[0x1] == null) _0xa5575f = _0x337c22(0x126);
                                else _0xa5575f = _0x31fda8[_0x18cce1]['children'][0x0][_0x337c22(0x14f)](_0x337c22(0x183))[0x1][_0x337c22(0x1a8)];
                                if (_0xa5575f[_0x337c22(0x25b)](_0x337c22(0x572))) _0x2ccaa4 = nobleSpeed * _0x2b4b89;
                                else {
                                    if (_0xa5575f[_0x337c22(0x25b)](_0x337c22(0x126)) || _0xa5575f[_0x337c22(0x25b)](_0x337c22(0x566))) _0x2ccaa4 = ramSpeed * _0x2b4b89;
                                    else {
                                        if (_0xa5575f[_0x337c22(0x25b)](_0x337c22(0x522))) _0x2ccaa4 = swordSpeed * _0x2b4b89;
                                        else _0xa5575f[_0x337c22(0x25b)](_0x337c22(0x645)) && (_0x2ccaa4 = axeSpeed * _0x2b4b89);
                                    }
                                }
                                if (_0x6f0a5 == ![]) _0x2ccaa4 = 0x0;
                                if (_0x2fddd7 == _0x337c22(0x181)) {
                                    let _0x530287 = _0x5b5126['getTime']() - _0x2ccaa4 - _0x888d36[_0x337c22(0x505)]();
                                    _0x13d14b = calcProductionTroupes(_0x530287, _0x13d14b), _0x13d14b = Math[_0x337c22(0x510)](_0x13d14b * 0xa) / 0xa;
                                    if (_0x13d14b < _0x48e32a) _0x17e794 = !![];
                                }
                                _0x2fddd7[_0x337c22(0x25b)](_0x337c22(0x292)) && localStorage[_0x337c22(0x520)](game_data[_0x337c22(0x429)] + _0x337c22(0x232)) == 'true' && (_0x40215f = !![]);
                                console[_0x337c22(0x533)](_0x19a07d['time_return']);
                                if (_0x19a07d[_0x337c22(0x425)] != 0x0) {
                                    let _0x126d4b = new Date(_0x19a07d[_0x337c22(0x425)]),
                                        _0x258856 = calcDistance(_0x59ab60, _0x454145),
                                        _0xbd8cdf = _0x31fda8[_0x18cce1][_0x337c22(0x612)](_0x337c22(0x3d6))[0x0][_0x337c22(0x14f)](_0x337c22(0x183))[0x1][_0x337c22(0x1a8)],
                                        _0x348e3b = 0x0;
                                    if (_0xbd8cdf['includes'](_0x337c22(0x572))) _0x348e3b = nobleSpeed * _0x258856;
                                    else {
                                        if (_0xbd8cdf[_0x337c22(0x25b)]('ram.png') || _0xbd8cdf[_0x337c22(0x25b)](_0x337c22(0x566))) _0x348e3b = ramSpeed * _0x258856;
                                        else {
                                            if (_0xbd8cdf[_0x337c22(0x25b)](_0x337c22(0x522))) _0x348e3b = swordSpeed * _0x258856;
                                            else _0xbd8cdf['includes']('axe.png') && (_0x348e3b = axeSpeed * _0x258856);
                                        }
                                    }
                                    let _0x15185c = _0x31fda8[_0x18cce1]['children'][_0x1e44a5 - 0x2][_0x337c22(0x5ad)],
                                        _0x165445 = new Date(getLandTime(_0x15185c));
                                    _0x348e3b = Math[_0x337c22(0x510)](_0x348e3b / 0x3e8) * 0x3e8, console[_0x337c22(0x533)]('time_attack', _0x348e3b), _0x348e3b + _0x126d4b['getTime']() > _0x165445[_0x337c22(0x505)]() && (_0x13b03b = !![], console['log']('fake\x20from\x20' + _0x59ab60));
                                }
                                if (_0x17e794 == !![] && _0x13b03b == !![] && localStorage[_0x337c22(0x520)](game_data[_0x337c22(0x429)] + _0x337c22(0x245)) == _0x337c22(0x5f2)) $(_0x10fa11)[_0x337c22(0x5b2)](_0x31fda8[_0x18cce1]), _0x581de2++;
                                else {
                                    if (_0x40215f == !![] && _0x13b03b == !![] && localStorage['getItem'](game_data[_0x337c22(0x429)] + _0x337c22(0x245)) == _0x337c22(0x5f2)) $(_0x10fa11)['append'](_0x31fda8[_0x18cce1]), _0x581de2++;
                                    else _0x40215f == !![] && localStorage[_0x337c22(0x520)](game_data['world'] + 'get_def_vills') == _0x337c22(0x5f2) && ($(_0x10fa11)['append'](_0x31fda8[_0x18cce1]), _0x581de2++);
                                }
                            }
                        }
                    } else $(_0x10fa11)[_0x337c22(0x5b2)](_0x31fda8[_0x18cce1]), _0x581de2++;
                }
            }
            _0x10fa11[_0x337c22(0x3c5)][0x0][_0x337c22(0x3c5)][0x0][_0x337c22(0x3c5)][0x0]['innerText'] = _0x337c22(0x1f7) + _0x581de2 + ')', $(_0x10fa11)[_0x337c22(0x5b2)](_0x236cb1), $(_0x337c22(0x227))[_0x337c22(0x3fa)](function() {
                const _0xecbed6 = _0x337c22;
                CommandsOverview[_0xecbed6(0x31c)](), UI[_0xecbed6(0x345)]('.icon_village_notes'), $(_0xecbed6(0x23a))['QuickEdit']({
                    'url': TribalWars['buildURL'](_0xecbed6(0x1c7), _0xecbed6(0x247), {
                        'ajaxaction': _0xecbed6(0x449),
                        'id': '__ID__'
                    })
                }), Command[_0xecbed6(0x31c)]();
            }), UI[_0x337c22(0x5ea)]('done'), console['log'](_0x31fda8), showButtons();
        }
    }
    _0x2ae17b(_0x58c1db);
}

function _0x1829() {
    const _0x4d53f4 = ['input_stacked', 'nr\x20fang\x20false:\x20', 'overwrite', 'getFullYear', 'timestamp', 'createElement', 'lastElementChild', '\x22><img\x20src=\x22https://img.icons8.com/ultraviolet/20/000000/horror.png\x22/></font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '<th\x20class=\x27deleteTh\x27><a\x20href=#\x20id=\x27id_launch_time\x27>launch\x20time</a></th>', '#attack_info_att_units\x20tr:nth-of-type(3)\x20.unit-item', 'success', 'confirm.png', 'progress_all', ')</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'nrTroupesAttacker', 'div_rank_attacker', 'add\x20info:\x20', 'insert\x20library', ':00:00:00', 'typeAttack', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center><font\x20color=\x22', '</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>', '\x22>coord\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'onload', 'remove', '\x20sec</b>\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20style\x20=\x22border:\x201px\x20solid\x20black;border-collapse:\x20collapse\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px;font-weight:\x20bold\x22>Upload\x20type</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px;font-weight:\x20bold\x22>Time</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>Reports</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>', '\x22>medium\x20attack\x20has\x20less\x20than(pop)\x20</font>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'pow', 'getTime', 'delete\x20id:\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:0px;\x22><b>away</b></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:0px;\x22><b>', '#mobileContent', 'nuke_true', 'hide_supports', 'check\x20incomings', 'background-color:rgba(40,\x2040,\x2040,\x200.34)', 'save\x20nameTroops', 'it\x20doesn\x27t\x20work', '\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/1d2499b/graphic/buildings/wall.png\x22>\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'round', '<tr><td\x20>', '\x22>fields\x20from:</font></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x20<input\x20type=\x22number\x22\x20style=\x22text-align:center;font-size:18px\x22\x20id=\x22input_center_x\x22\x20min=\x220\x22\x20max=\x221000\x22\x20placeholder=\x22X\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x20<input\x20type=\x22number\x22\x20style=\x22text-align:center;font-size:18px\x22\x20id=\x22input_center_y\x22\x20min=\x220\x22\x20max=\x221000\x22\x20placeholder=\x22Y\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', 'number-tr', ';width:35px;height:15px;z-index:4;margin-top:22px;font-size:\x2012px\x22>', '</a>', ',\x20[SENT]:\x20', 'defendingArmy', '.tr_table_coord_info', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20style=\x22text-align:center;\x22\x20id=\x22settings_fang_cat\x22\x20min=\x220\x22\x20max=\x2220000\x22\x20\x20value=\x2250\x22\x20placeholder=\x22100\x22\x20disabled>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x0a\x0a\x0a\x20\x20\x20\x20</table>\x0a\x0a\x20\x20\x20\x20</div></center>\x0a\x20\x20\x20\x20', 'pop', ',\x20(target)\x20</h4>', ';width:14px;height:14px;z-index:4;margin-left:7px;\x22\x20\x20src=\x22https://dsen.innogamescdn.com/asset/c2dee33a/graphic//map/incoming_attack.png\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<center><font\x20color=\x22', 'obj_troops', '\x22>origin\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'remove\x20counterAttacker', 'getItem', '#btn_extract_coord', 'sword.png', 'target', 'querySelector', 'className', '/Support', '</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>', 'fang_true', 'response', 'sort\x20by\x20commands', '.tr_table_coord', 'is\x20uploading', 'datetime', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<center><div\x20id=\x22table_results\x22\x20style=\x22height:700px;width:700px;overflow:auto\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20cols=\x2280\x22\x20rows=\x2280\x22>', ';width:16px;height:16px;z-index:4;margin-left:8px;font-size:\x2010px;\x22>', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22\x20><a\x20href=\x22#\x22\x20id=\x22sort_fakes_att\x22><font\x20\x20color=\x22', '\x22>Upload\x20data</font></u></center></h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22div_minimize\x22\x20style=\x22position:relative;top:-35px;left:\x2020px\x22\x20\x20\x20><a\x20href=\x22#\x22\x20onclick=\x22viewSupport()\x22\x20id=\x22page_main\x22\x20><img\x20src=\x22https://img.icons8.com/officel/30/000000/long-arrow-left.png\x22/></a></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22div_minimize\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22btn\x20evt-confirm-btn\x20btn-confirm-yes\x22\x20type=\x22button\x22\x20onclick=\x22createTableSettings()\x22\x20style=\x22margin:10px\x22\x20value=\x22Settings\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22btn\x20evt-confirm-btn\x20btn-confirm-yes\x22\x20type=\x22button\x22\x20id=\x22btn_rank_attacker\x22\x20style=\x22margin:10px\x22\x20value=\x22Rank\x20attackers\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22btn\x20evt-confirm-btn\x20btn-confirm-yes\x22\x20type=\x22button\x22\x20id=\x22btn_rank_defender\x22\x20style=\x22margin:10px\x22\x20value=\x22Rank\x20defenders\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22btn\x20evt-confirm-btn\x20btn-confirm-yes\x22\x20type=\x22button\x22\x20id=\x22btn_upload_time\x22\x20style=\x22margin:10px\x22\x20value=\x22Upload\x20time\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22btn\x20evt-confirm-btn\x20btn-confirm-yes\x22\x20type=\x22button\x22\x20id=\x22btn_get_coords\x22\x20style=\x22margin:10px\x22\x20value=\x22Get\x20coords\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22btn\x20evt-confirm-btn\x20btn-confirm-yes\x22\x20type=\x22button\x22\x20id=\x22btn_op_spotter\x22\x20style=\x22margin:10px\x22\x20value=\x22Tribe\x20OP\x20spotter\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_settings\x22\x20style=\x22margin:10px\x22\x20hidden>\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_rank\x22\x20style=\x22margin:10px\x22\x20hidden>\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_rank_attacker\x22\x20style=\x22margin:10px\x22\x20hidden>\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_rank_defender\x22\x20style=\x22margin:10px\x22\x20hidden>\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_upload_time\x22\x20style=\x22margin:10px\x22\x20hidden>\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_get_coords\x22\x20style=\x22margin:10px\x22\x20hidden>\x20</div>\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;justify-content:\x20center;width:100%\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:\x2045%;margin:15px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22table_search\x22\x20\x20border=\x221\x22\x20style=\x22width:\x20100%;background-color:', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><u><input\x20class=\x22btn\x22\x20id=\x22btn_off_coord\x22\x20type=\x22button\x22\x20value=\x22off\x20coords\x22></center>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'log', 'unit-item', '_visibleSectors', 'upload\x20succes', '\x0a\x20\x20\x20\x20<table\x20class=\x22vis\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20width=\x2220\x22></td>', 'match', 'hide', '/Commands_attack', 'ajax', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:5px\x22><font\x20color=\x22', 'tr_table_coord_info', 'troopsComming', 'backtime', '#id_select_incs\x20option', '\x22>fangs</font><a/></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', '\x22\x20colspan=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<font\x20style=\x22margin:5px\x22\x20color=\x22', 'option', '.infoCoord', '#sort_nukes_def', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20style=\x22text-align:left;width:98%;font-size:18px\x22\x20id=\x22input_players\x22\x20\x20placeholder=\x22name\x20player1,\x20name\x20player2,\x20name\x20player3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', 'contains', ';cursor:move;z-index:50;\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20\x20\x20style=\x22position:relative;top:10px;left:\x20800px;display:flex;align-items:\x20center;justify-content:\x20center;background-color:', 'id_nr_tr', 'sort\x20by\x20nukes', '<img\x20style=\x22position:absolute;left:', '#btn_get_def', '\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/1d2499b/graphic/buildings/snob.png\x22>\x20</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '\x22>hide\x20supports</font>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', '/status.gz', '\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/1d2499b/graphic/unit/unit_', 'Starting...', '900px', 'color', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22\x20><a\x20href=\x22#\x22\x20id=\x22sort_commands\x22><font\x20\x20color=\x22', '<th\x20class=\x27deleteTh\x27><a\x20href=#\x20id=\x27id_nr\x27>\x20nr</a></th>', '#div_container', 'btn_show_info', '#sort_nukes_att', '0cb274c906d622fa8ce524bcfbb7552d', 'sort_by_recaps', 'classList', '\x22>arrival\x20time\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'landing_time', 'data-nr', 'background-color:rgb(255,255,0)', 'reverse', 'player-id', 'spawnSector', 'id_player_def', 'list_coords', '42QIIDOe', 'catapult.png', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20style=\x22text-align:left;width:98%;font-size:18px\x22\x20id=\x22input_tribes\x22\x20\x20placeholder=\x22name\x20tribe1,\x20name\x20tribe2,\x20name\x20tribe3\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', '\x22>coord\x20</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '\x22>nobles</font><a/></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>', '\x20reports', 'page=', 'https://content.dropboxapi.com/2/files/upload', '.png\x22>', 'Upload\x20reports\x20done\x20<br>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Upload\x20time:\x20<b>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20width=\x2220\x22>Losses:</td>', 'setInterval', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20style=\x22white-space:nowrap;\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'snob.png', '#FFFFF1', 'GET', 'close', 'getMinutes', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;\x20flex-direction:\x20row;\x20justify-content:\x20center;\x20align-items:\x20center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22#\x22\x20style=\x22margin-right:10px\x22><img\x20src=\x22https://img.icons8.com/ultraviolet/20/000000/horror.png\x22\x20id=\x22sort_by_recaps\x22></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22#\x22\x20onclick=\x22UI.InfoMessage(\x27List\x20of\x20recaps\x20<br>\x20<b>red</b>\x20->\x20recap\x20is\x20needed\x20\x20<br>\x20<b>green</b>\x20->\x20village\x20is\x20already\x20recapped\x20<br><br>\x20recap\x20is\x20needed\x20if\x20nr\x20nobles\x20>=4\x20and\x20it\x20is\x20not\x20a\x20train\x27,8000)\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png\x22\x20style=\x22width:\x2013px;\x20height:\x2013px\x22/></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22header_recaps\x22>(0/0)</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</font>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'playerName', '18693492MmBTyI', '\x20</b>\x20<br>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Total\x20Reports:\x20<b>', 'Jan', '\x22style=\x22margin:0px;padding:0px\x22><center><font\x20color=\x22', 'slow', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22height:400px;overflow:\x20auto\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22table_rank\x22\x20\x20border=\x221\x22\x20style=\x22width:\x2060%;background-color:', 'table_coord', 'are\x20you\x20sure?', '<tr>', 'coord_origin_id', 'fake', 'input_center_x', 'outerHTML', '.txt', '\x22\x20class=\x22shadow20\x22\x20style=\x22position:absolute;left:', 'set', '[name=\x27page_size\x27]', 'tbody', 'btn_rank_defender', '\x0a\x20\x20\x20\x20<div\x20id=\x22div_container\x22\x20class=\x22ui-widget-content\x20div_remove\x22\x20style=\x22width:600px;background-color:', '\x22><center\x20style=\x22margin:5px\x22><font\x20color=\x22', 'insert\x20chart\x20library\x20in\x20', 'column', '%,\x20', 'rgb(255,\x20255,\x20102)', 'militia', '\x20<font\x20color=\x22', 'LoyaltyLevel', 'unit-item\x20unit-item-axe', '</font></center>', '\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/056b9c0b/graphic/unit/att.png\x22>\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '\x22>home</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'key:\x20', 'Mar', 'QuickEdit', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22height:400px;overflow:auto;\x22\x20id=\x22div_incomingsInfo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22table_coord\x22\x20border=\x221\x22\x20style=\x22width:\x20100%;background-color:', 'id_coord_off', '__ID__', 'gzip', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20width=\x2220\x22>Quantity:</td>', 'highlight', 'pred:\x20nuke', 'wait\x20', 'https://dl.dropboxusercontent.com/s/22qgnhyxnyono68/libraryIndexedDB.js?dl=0', 'currentLink', 'responseText', 'buildURL', '\x22\x20>', '#info_content', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'screen=report', '#4d4d4d', 'innerText', 'succes', 'files\x20created', 'style', 'toggle', 'append', 'reports', '156YpBjnx', 'xAxis', 'random', '</table><td></tr>', '<th\x20class=\x27deleteTh\x20\x27><a\x20href=#\x20id=\x27id_sizeAttack\x27>sizeAttack</a></th>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center><font\x20color=\x22', '\x22>\x20', '0px', 'input_radius', ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20style=\x22\x20position:\x20sticky;top:\x200;z-index:\x2010;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '<div\x20id=\x22div_coming_troops\x22\x20hidden></div>', '</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '#btn_get_fakes', 'style_popup', '\x22>destination</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'map_outgoing_support', 'select', 'aici\x20baaaa', '#sort_nobles_att', 'progress_reports', '1174054VEbfCR', 'setTimeout', 'upload\x20failed', 'troopsHome', '&screen=info_command&ajaxaction=edit_other_comment&id=', '<th\x20class=\x27deleteTh\x27><a\x20href=#\x20id=\x27id_time\x27>time</a></th>', ',MC:\x20', '\x22\x20colspan=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<font\x20id=\x22nr_coords\x22\x20style=\x22margin:10px;margin-left:100px;font-size:15px\x22\x20color=\x22', 'list_coming', 'compressing\x20database,\x20wait\x20few\x20seconds', 'recapthca,\x20upload\x20again', '13XeKCJI', '\x22>total\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>', 'obj', 'length', '\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/4ba99e83/graphic/unit/att.png\x22>\x20</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '<table\x20class=\x22table_coord\x22\x20border=\x221\x22\x20coord-id=\x22', 'background-color', '\x22\x20id=\x22progress_support\x22>None</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'defendingArmyLosses', '#table_select_info', 'farm', 'command/', '\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/4ba99e83/graphic/unit/att.png\x22>\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'diference\x20tr:\x20', 'stop', 'input', 'nr_incs', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><u><input\x20class=\x22btn\x22\x20id=\x22btn_def_coord\x22\x20type=\x22button\x22\x20value=\x22def\x20coords\x22></center>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '\x22\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center><font\x20style=\x22margin:5px\x22\x20color=\x22', 'command_date', '\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/1d2499b/graphic/buildings/farm.png\x22>\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '\x22><a\x20href=\x22#\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/snob.png\x22\x20id=\x22sort_by_nobles\x22></a><p\x20id=\x22header_nobles\x22>(0)</p></font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><font\x20color=\x22', 'SuccessMessage', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:40px;\x20background-color:', '\x22>pop</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>', 'observe', '---', 'overview_villages&mode=incomings&type=all&subtype=attacks&group=0&page=-1', 'info_village&id=', 'isFuckingWorking', 'true', 'wall', '\x22\x20class=\x22infoCoord\x22\x20src=\x22https://img.icons8.com/bubbles/20/000000/more.png\x22/></font></center></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'speed\x20world\x20already\x20exist', 'Home', 'incomingId', '\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/4ba99e83/graphic/unit/att.png\x22>(', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:2px;font-size:16px\x22><font\x20color=\x22', '\x22><a\x20href=\x22#\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/4ba99e83/graphic/unit/att.png\x22\x20id=\x22sort_by_attacks\x22></a><p\x20id=\x22header_attacks\x22>(0)</p></font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '\x22>troops\x20</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'Upload\x20commands\x20done\x20<br>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Upload\x20time:\x20', 'troopsAtHome_', '\x22>Max\x20coord:</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'bot-protect', 'nuke_false', 'bind', '.popup_info_extra', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20\x20value=\x22hide_closer_attacks\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', 'unit-item\x20unit-item-archer', 'delete\x20ignored\x20attack', 'status', 'class', '\x22>Players:</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'snob', 'nr\x20coords:(', '#div_container_incs', 'styleSheet', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;background-color:#c1a264\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin-top:0px;\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/c2dee33a/graphic/unit/unit_', '#3f0000', '#sort_fangs_def', 'false', 'erorr\x20map\x20report\x20from\x20dropbox', 'getElementsByClassName', 'add', 'nr_supports_total', 'settings&mode=command_sharing', 'nameAttacker', 'hide_closer_attacks', 'min', 'small\x20grey', 'progress_incomings', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tbody\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'yellow', '.div_minimize', 'save_settings', '$1$1', '\x22>reports</font></u></center></h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'ceil', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'command\x20attack\x20to\x20barb', 'id_type', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>', 'data', 'settings_closer', 'support', '\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/snob.png\x22>(', 'background-color:rgba(0,\x2010,\x20255,\x200.14);outline:rgba(0,\x2010,\x20255,\x200.7)\x20solid\x201px', 'abs', 'substr', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20style=\x22white-space:nowrap;\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'map_icons_', '\x22>hide\x20ignored\x20attacks/support</font>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', 'prop', 'fixed', 'replace', 'player_off', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20style=\x22text-align:center;\x22\x20id=\x22settings_small_attack\x22\x20min=\x220\x22\x20max=\x2220000\x22\x20value=\x225000\x22\x20placeholder=\x225000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', 'btn_get_coords', 'head', 'getDate', 'status\x20uploadSupports', ',\x20RAM:\x20', 'id_coord_def', 'tiny/', '\x22\x20number-tr-coord=\x22', 'settings_small_attack', 'number-tr-coord', 'nr_nobles', '\x20<h4\x20class=\x27possible_fake\x27\x20date-fake=\x27', 'fake_true', 'report&mode=all&group_id=-1', 'get\x20data', '\x22\x20id=\x22progress_incomings\x22>None</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'axe.png', 'incomings_table', 'small', '</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '#a06a34', '\x22>\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><a\x20href=\x22', 'delete\x20coord\x20', 'type_attack', 'string', '/Reports.gz', '.png\x22</td>', 'pred_', 'time_report_home_', 'support\x20coming', 'ram.png', '</tbody>', 'nr_snipe_total', 'splice', '\x20<b>', 'erorr\x20map\x20history\x20upload\x20from\x20dropbox', '.row_a,.row_b', 'table_player', '_users/up', 'attackingArmy', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22\x20valign=\x22top\x22\x20height=\x22160\x22\x20style=\x22border:\x20solid\x201px\x20;\x20padding\x204px;\x22\x20class=\x22report_ReportAttack\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22attack_info_att\x22\x20width=100%\x20style=\x22border:\x201px\x20solid\x20#DED3B9\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20style=\x22width:20%\x22>Attacker:</th>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20>', 'disconnect', 'attackingArmyLosses', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x20<input\x20type=\x22number\x22\x20style=\x22text-align:center;font-size:18px\x22\x20id=\x22input_x_max\x22\x20min=\x220\x22\x20max=\x221000\x22\x20placeholder=\x22X\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x20<input\x20type=\x22number\x22\x20style=\x22text-align:center;font-size:18px\x22\x20id=\x22input_y_max\x22\x20min=\x220\x22\x20max=\x221000\x22\x20placeholder=\x22Y\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', 'settings_medium_attack', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22#\x22\x20\x20><center\x20style=\x22margin:5px\x22><font\x20color=\x22', 'type_attack_landed', 'madalinoTribalWarsScripts', ';text-align:left;margin:5px\x22>Ally\x20Info</label><br>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'Utf8', 'already\x20exist', 'paged-nav-item', 'getSeconds', 'village_anchor', ')</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '.quickedit-label', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:5px\x22>\x20<input\x20id=\x22input_search\x22\x20type=\x22text\x22\x20\x20style=\x22margin:10px\x22\x20placeholder=\x22coord\x22></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22width:\x2045%;margin:15px\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22table_select_info\x22\x20\x20border=\x221\x22\x20style=\x22width:\x20100%;background-color:', 'values', 'worldSpeed', 'coord\x20exists\x20in\x20dropbox\x20already', '\x20old\x20owner:', 'header_supports', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', 'btn_rank_attacker', 'href', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '#div_settings\x20input[type=checkbox]', 'labelName', '</table></div></center></div>', 'unit-item\x20unit-item-snob', 'floor', 'getElementsByTagName', ';cursor:move;width:50%;margin:10px\x20auto\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22\x22\x20border=\x221\x22\x20style=\x22width:\x20100%;background-color:', 'input_continents', 'delete', '\x22><a\x20href=\x22#\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/support.png\x22\x20id=\x22sort_by_supports\x22></a><p\x20id=\x22header_supports\x22>(0)</p></font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '\x0a\x20\x20\x20\x20<center>\x0a\x20\x20\x20\x20<div\x20style=\x22height:400px;overflow:\x20auto\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22table_rank\x22\x20\x20border=\x221\x22\x20style=\x22width:\x2060%;background-color:', 'btn_op_spotter', 'parentElement', 'fromCodePoint', 'AES', 'report_list', 'coord_off', 'nr\x20nuke\x20false:\x20', 'type', '\x0a\x20\x20\x20\x20<table\x20class=\x22vis\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20class=\x22center\x22>', 'compressing\x20data\x20Incomings:\x20', '#btn_apply', '#720000', 'objbaaa', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><center\x20style=\x22margin:10px\x22\x20><font\x20color=\x22', '\x20!=\x20new\x20owner:', 'nr_recaped', 'delete\x20closer\x20attacks', 'https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/', 'div_rank_defender', 'here', '#btn_stacks', '\x20,\x20get\x20troops\x20home\x20', 'constant\x20world', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22\x20><a\x20href=\x22#\x22\x20id=\x22sort_incomings\x22><font\x20color=\x22', 'disabled', '0\x20Bytes', '\x22\x20\x20src=\x22https://dsen.innogamescdn.com/asset/c2dee33a/graphic/unit/unit_', 'map_village_', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:5px\x22><font\x20color=\x22', 'incoming_date', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:1px\x22><font\x20color=\x22', '<th\x20class=\x27deleteTh\x27><a\x20href=#\x20id=\x27id_nr_tr\x27>\x20nr_tribe</a></th>', 'uploadTime', '/interface.php?func=get_config', 'settings_further', 'mapVillageById', '&h=', '.png\x22\x20alt\x20class=\x22faded\x22</td>', 'nrTroupesAttackerTotal', '\x22\x20id=\x22progress_all\x22>None</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2><center\x20style=\x22margin:10px\x22><u><font\x20color=\x22', 'Dec', 'update\x20for\x20defensive', 'nrTroupesSupporter', '\x22\x20style=\x22position:absolute;left:', 'off', ')</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'img', 'sort', 'location', '</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '#4dff4d', 'getAttribute', 'update\x20coord:\x20', 'get', 'new\x20date\x20doesnt\x20working(use\x20opera\x20or\x20chrome)', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>', 'buildings', 'nr_coords', 'appendChild', 'save', '\x20class=\x22counterTime1\x22>', '#btn_backtime', 'short_desc', '48ybTJpH', '#div_container_view', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>Battle\x20time\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>', '</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'catch', 'stringify', '#progress_search', ')</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '#attack_info_def_units\x20tr:nth-of-type(3)\x20.unit-item', 'unignored', '\x20hidden\x22>', 'table_get_coords', 'pop\x20for\x20medium\x20attacks\x20must\x20be\x20higher\x20than\x20pop\x20for\x20small\x20attacks', '\x22\x20\x20class=\x22shadow20\x22\x20style=\x22position:absolute;left:', ';cursor:move;z-index:50;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20\x20\x20style=\x22position:relative;top:10px;left:\x20560px;display:flex\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22minimize_page\x22\x20style=\x22background-color:white;margin-right:10px\x22><a\x20href=\x22#\x22><img\x20src=\x22https://img.icons8.com/material-outlined/16/000000/collapse.png\x22/></a></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20\x20class=\x22close-btn\x22\x20\x20\x20><a\x20href=\x22#\x22\x20onclick=\x22closeWindow()\x22><b><font\x20color=\x22', '#sort_fangs_att', 'player', '<tbody\x20id=\x27tbody_player\x27>', 'parse', 'Sep', 'src', '\x20<h4\x20class=\x27cls_pop\x27>', '#ffffdf', 'id_player_off', 'tribeName', 'error\x20on\x20incomings', 'k</font></center>', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center><font\x20style=\x22margin:0px\x22\x20color=\x22', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:5px;font-size:16px\x22><font\x20color=\x22', '<img\x20src=\x22https://dsen.innogamescdn.com/asset/056b9c0b/graphic/delete.png\x22>', 'input_x_max', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><center\x20style=\x22margin:10px\x22><font\x20color=\x22', '#323232', 'span[data-id=', '#attack_info_def', '#div_rank_attacker', 'nameTroops', 'decompresed', '\x22\x20colspan=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:1px\x22><font\x20color=\x22', 'unbind', 'pred_fake', 'nr_sniped', '<td\x20style=\x22width:60px;height:30px;text-align:center;\x20background-color:', 'nr_snipe', 'addEventListener', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:0px\x22><font\x20color=\x22', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:1px;font-size:16px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<font\x20color=\x22', 'remove\x20counterTypeDefender', ';cursor:move;z-index:50;\x22>\x0a\x20\x20\x20\x20<div\x20style=\x22position:relative;top:10px;left:\x20860px;display:flex\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20\x20class=\x22close-btn\x22\x20\x20\x20><a\x20href=\x22#\x22\x20onclick=\x22closeWindow()\x22><b><font\x20color=\x22', 'pred:\x20fang', 'startInc', 'POST', 'split', ',\x20k', 'homeInfo', 'Done!', 'content', '\x22><img\x20src=\x22', 'popup', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:2px;font-size:16px\x22><font\x20color=\x22', 'coord_def', 'villageId', 'nr\x20nuke\x20true:\x20', 'Getting\x20data...', 'setItem', '\x20coords', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'button', 'div_container', ';top:', '.table_player\x20img[coord-id=', '/Commands_attack.gz', 'allyId', ';width:14px;height:14px;z-index:4;margin-top:22px;margin-left:0px;font-size:\x2012px;background-color:black;\x22>', '.autoHideBox', 'date', 'time_attack', 'Nov', 'join', 'attack_medium.png', 'list_incomings_merge', '<th\x20width=\x2235\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/3ec301e5/graphic/unit/unit_', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20style=\x22text-align:left;width:98%;font-size:18px\x22\x20id=\x22input_continents\x22\x20\x20placeholder=\x2254,55,65\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><u><input\x20class=\x22btn\x22\x20id=\x22btn_stack_coord\x22\x20type=\x22button\x22\x20value=\x22stacked\x20coords\x22></center>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><u><input\x20style=\x22text-align:\x20center;\x22\x20type=\x22text\x22\x20id=\x22input_stacked\x22\x20onclick=\x22\x22\x20placeholder=\x22nr\x20stack\x22\x20></center>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><div\x20id=\x22report_view\x22\x20style=\x22background-color:#d2c09e\x22>\x20report\x20view\x20<div><center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', 'div_upload_time', 'rank\x20attacker', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:1px\x22><font\x20color=\x22', '.deleteTh', 'input_duplicates', '</table></div>', 'selected', 'toFixed', '\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/4ba99e83/graphic/flags/small/3.png\x22>\x20</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '#32313f', 'you\x20do\x20not\x20have\x20acces', 'input_pop_fake2', 'open', '\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/1d2499b/graphic/buildings/farm.png\x22>\x20</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '#report_view', 'Command\x20(', ';color:white\x22>', 'flagName', 'push', 'defense', 'overview_villages&mode=incomings&type=unignored&subtype=all&group=0&page=-1', 'max', 'list_incomingsAll', '#input_pop_fake2', 'map_player_inc', '#ff8080', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22\x20><a\x20href=\x22#\x22\x20id=\x22sort_fangs_def\x22><font\x20\x20color=\x22', 'anychart-credits', 'troops\x20home', 'tbody_player', 'light', 'upload\x20new\x20data', 'backgroundNoble', 'addStacks', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><img\x20src=\x22https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/', '</tr></tbody></table>', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:0px;padding:0px\x22><font\x20color=\x22', 'input_players', 'load\x20troops:\x20', 'div_coming_troops', '\x20sec</b>\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Reports\x20Updated:\x20<b>', 'ErrorMessage', 'cssText', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;\x20flex-direction:\x20row;\x20justify-content:\x20center;\x20align-items:\x20center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22#\x22\x20style=\x22margin-right:10px\x22><img\x20src=\x22https://img.icons8.com/office/20/000000/sniper-rifle.png\x22\x20id=\x22sort_by_snipes\x22></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22#\x22\x20onclick=\x22UI.InfoMessage(\x27List\x20of\x20snipes\x20<br>\x20<b>red</b>\x20->\x20snipe\x20is\x20needed\x20<br>\x20<b>green</b>\x20->\x20village\x20is\x20already\x20sniped\x27,8000)\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png\x22\x20style=\x22width:\x2013px;\x20height:\x2013px\x22/></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20id=\x22header_snipes\x22>(0/0)</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</font>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan\x20=\x20\x226\x22\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', 'attack_info_att', '#table_view\x20img[player-id=', 'position', '\x20in\x20dropbox', '11tsHIFG', 'map_attack_dropbox', 'player_origin_id', 'insertRow', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:1px;font-size:16px\x22><font\x20color=\x22', 'attack_small.png', 'rel', '\x22>commands</font><a/></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>', '\x22>\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><img\x20src=\x22', 'list\x20coming', '_id', 'device', '\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/a9e85669/graphic/command/support.png\x22>(', 'document', 'Bearer\x20', 'form\x20table\x20tr', '[id=\x22incomings_amount\x22]:visible', '\x20</b>', 'slice', 'input_filter_tribe', 'sort_by_snipes', 'in\x20functie\x20in\x20plm\x20', '.row_b', 'time_report_home', 'get_def_vills', 'nr\x20fake\x20false:\x20', 'https://content.dropboxapi.com/2/files/download', ';border-spacing:2px;border-collapse:separate;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', 'getMonth', '#input_search', '\x22>Continents:</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'serverDate', '.quickedit', '\x22><img\x20coord-id=\x22', ')</a>\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><a\x20href=\x22', 'coord_deff', 'before', 'new_off,\x20don\x27t\x20do\x20anything', '/Users.txt', 'report&mode=all&from=', ';width:16px;height:16px;z-index:4;margin-left:35px;', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20\x20\x20value=\x22hide_supports\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', 'area', 'get_only_fakes', '<center><font\x20color=\x22', 'info_command', 'recapthca', 'filter', 'btn_senttime', '</b></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>', 'mapHandler', '\x22>player\x20name</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', '/extraDataCommands.txt', '\x22>Arrival\x20time\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'header_attacks', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collaps;padding:5px\x22>', 'firstElementChild', 'home', 'create\x20additional\x20file', 'toTimeString', 'table_view', 'troopsAway', 'player_destination_name', '\x22>nr</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', 'text/javascript', 'includes', '</font></center></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '.row_a,\x20.row_b', '\x22>incomings</font></u></center></h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'The\x20map\x20is\x20ready,move/drag\x20the\x20map\x20to\x20see\x20the\x20data', ';color:', 'def??', ';\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20rowspan=\x223\x22\x20class=\x22\x22\x20style=\x22width:30px;height:30px;text-align:center;\x20background-color:', '\x22>\x20(', 'erorrr\x20map\x20report\x20from\x20dropbox', 'write\x20coord\x20in\x20dropbox', '\x20update\x20troops\x20home', 'find', 'nr_recap_total', '</td>', 'trim', 'before\x20reading\x20map\x20from\x20dropbox', 'place', '#id_start', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><center\x20style=\x22margin:10px\x22><font\x20color=\x22', '\x22>Tribes:</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '\x22></div>', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:3px;padding:0px\x22><font\x20color=\x22', 'compressed', 'map_troops_home_dropbox', 'btn_get_def', '#ds_body', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:3px;padding:0px\x22><font\x20color=\x22', 'own_command', 'id_time', 'header_recaps', 'top', 'commandId', 'codePointAt', 'possible_fake', ':000', ',\x20SPY:\x20', 'map_status', 'map_localBase', 'isNaN', '#select_player', '#sort_fakes_att', 'toDateString', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:5px;font-size:16px\x22><font\x20color=\x22', ',\x20I:', 'Jun', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22\x20><font\x20\x20color=\x22', 'player_def', 'btn-confirm-yes', 'map_localBase\x20history\x20upload', '</h4></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22popuptext\x22\x20border=\x221\x22\x20style=\x22background-color:#f4e4bc;border-color:#c1a264\x22\x20id=\x22tableInc', '\x0a\x20\x20\x20\x20<center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22margin-top:\x2020px\x22>\x20Database\x20size\x20details\x20</h2>\x0a\x20\x20\x20\x20</center>\x0a\x20\x20\x20\x20<div\x20id=\x22table_database_details\x22\x20style=\x22height:300px;width:400px;display:\x20flex;justify-content:\x20center;margin-top:\x20-50px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<table\x20style\x20=\x22border:\x201px\x20solid\x20black;border-collapse:\x20collapse;align-self:\x20center\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;font-weight:\x20bold;padding:10px\x22>Name</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;font-weight:\x20bold;padding:10px\x22>Compressed\x20size</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;font-weight:\x20bold;padding:10px\x22>Decompressed\x20size</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>', 'nrTroupesDefender', 'input_y_min', 'def', '<td\x20style=\x22width:30px;height:30px;text-align:center;\x20background-color:', 'result', 'container', '\x22>fakes</font><a/></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', 'sentTime', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'preventDefault', 'toString', 'playerId', 'link', '#666600', '<th\x20class=\x27deleteTh\x20\x27><a\x20href=#\x20id=\x27id_troops\x27>troops</a></th>', 'list_data_typeAttack', ';border-color:', '\x22\x20>filter\x20tribes:\x20</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '04-24-2024', '#div_minimize', ';width:14px;height:14px;z-index:4;margin-top:22px;margin-left:17px;font-size:\x2012px;background-color:black;\x22>', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><u><input\x20class=\x22btn\x22\x20type=\x22button\x22\x20onclick=\x22uploadSupports()\x22\x20value=\x22Upload\x22></center>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', ';width:14px;height:14px;z-index:4;margin-left:18px;\x20font-size:\x2012px\x22>', '<div\x20id=\x22div_op_spotter\x22\x20style=\x22height:500px;width:800px;overflow:auto\x22\x20>\x20</div>', 'onerror', 'sort\x20by\x20incomings', '----------------------------------------------------', 'substring', 'insertCell', 'which', '<th\x20class=\x27deleteTh\x27><a\x20href=#\x20id=\x27id_report\x27>report</a></th>', 'attr', 'name_player_off', '\x20wait\x20', '\x22);popup.classList.toggle(\x22show\x22)\x27><center><h4\x20style=\x27color:black\x27>', 'data-id', 'map_dropbox\x20before', '.load_troops', 'readable', 'gap_predict', '</h4>', 'nr_attacks_total', 'erorrrrrrrrrrrrrrrr\x20map\x20report\x20from\x20dropbox', 'colspan', 'link_base_pure', 'hasNoble', 'travelingTroops', '#btn_show_incs', 'text', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:0px\x22><font\x20color=\x22', '#btn_tag', 'info_extra', '<th\x20class=\x27deleteTh\x27><a\x20href=#\x20id=\x27id_type\x27>\x20type</a></th>', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20\x20id=\x22select_player\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', ';border-spacing:2px;border-collapse:separate;\x22></div>\x20', '<th\x20class=\x27deleteTh\x27><a\x20href=#\x20id=\x27id_predict\x27>predict</a></th>', 'update\x20database\x20inno', 'Finished\x20in\x20', 'file\x20created', '#sort_commands', '\x0a\x20\x20\x20\x20</table></div></center>', '<div\x20class=\x22no-preview\x22>', 'hasSupportSnipe', 'error\x20upload', 'page_main', '\x20</td></tr>', 'date-time', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22info_extra', 'text/html', 'delete\x20coord\x20from\x20map\x20support\x20dropbox', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', ';cursor:move;z-index:50;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22close-btn\x22\x20btn_close=\x22btn_close\x22\x20onclick=\x22closeWindow()\x22\x20style=\x22position:absolute;top:10px;right:\x2010px;\x22><b><a\x20href=#><font\x20color=\x22', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p><center\x20style=\x22\x22><input\x20type=\x22number\x22\x20id=\x22id_start\x22\x20size=\x225\x22\x20style=\x22text-align:center\x22\x20class=\x22\x20input-nicer\x20show\x22\x20value=\x220\x22><br><br></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'https://dl.dropboxusercontent.com/s/ki0zhogjf0705c3/style_popup.css', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22#\x22\x20style=\x22margin:0px\x22\x20><center\x20><font\x20color=\x22', 'nr_supports', '.table_hide', 'nameTroops\x20already\x20exist', 'Oct', '#attack_spy_away', 'css', 'each', 'from', 'totalTimeUpload', '\x22>X</font></b></a></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2><center\x20style=\x22margin:10px;\x22><u><font\x20color=\x22', 'commands_table', '\x22\x20date-time=', 'date_land', 'csrf_token', 'here\x20save\x20status', 'none', '\x22>troops\x20</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'https://dsen.innogamescdn.com/asset/a9e85669/graphic/unit/tiny/', 'Feb', 'cls_type', '#div_settings\x20input[type=number],\x20#div_get_coords\x20input[type=text],\x20#div_get_coords\x20input[type=number]', 'keys', '#incomings_table\x20tbody', '/up', '\x0a\x20\x20\x20\x20<div\x20id=\x22div_container_incs\x22\x20class=\x22ui-widget-content\x20div_remove\x22\x20style=\x22width:900px;background-color:', 'history_upload', '.png\x22</th>', 'nr\x20fake\x20true:', '\x20sec\x20<br>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20style\x20=\x22border:\x201px\x20solid\x20black;border-collapse:\x20collapse\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x223\x22\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collaps;font-weight:\x20bold;padding:10px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Database\x20details\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>Type</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>Total\x20Number</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>Size\x20DB</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>Commands\x20attack</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>', '&screen=place&mode=call&target=', 'attack_large.png', 'id_pop', 'delete\x20withdrawn\x20command', 'mouseup\x20input', 'addBacktime', 'home_seen', '#157de5', 'nr_recaped_total', '\x22>total\x20</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>', 'fast', '(target)', 'querySelectorAll', 'sort\x20by\x20nobles', 'wallLevel:\x20', 'highlight\x20on', 'map_going_attacks', '#FF5B00', '\x22>total</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '\x20sec</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>Commands</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>', '518755yaSIPR', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:0px;\x22><b>at\x20home</b></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:0px;\x22><b>', ',\x20[STACKED:\x20H:', 'click', '#attack_info_att', '</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'intercepted\x20displayForVillage', '.icon_village_notes', 'date_launch', '32lSAjQb', 'info\x20coord:\x20', 'info', '.unit-item', 'input[name=\x27type_info\x27]:checked', 'pop_fake_tagging2', '.counterTime', 'init', '#div_rank_defender', 'status\x20incomings', '.rename-icon', '#input_gap', 'fang_false', 'header_snipes', 'info\x20test', 'draw', 'time_report', 'color\x20j', '\x22>small\x20attack\x20has\x20less\x20than(pop)\x20</font>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'sword', '#div_settings', 'cloneNode', '#sort_reports', '#attack_info_def_units\x20tr:nth-of-type(2)\x20.unit-item', 'writable', 'parseFromString', '#id_stop', 'Recaptcha..', 'dcfafcb4323b102c7e204555d313ba0a', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22\x20><a\x20href=\x22#\x22\x20id=\x22sort_nukes_att\x22><font\x20color=\x22', 'commandSharing', 'appendTo', '10px', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22info_extra', 'unitSpeed', 'nr_sniped_total', ',\x20NOBLE:\x20', 'load\x20radio', 'nr_nukes', 'remove\x20counterTypAttacker', ')\x20</a>\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><a\x20href=\x22', 'pred_fang', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22\x20><a\x20href=\x22#\x22\x20id=\x22sort_fangs_att\x22><font\x20\x20color=\x22', 'attackingPlayerId', '\x22>Commands</font></u></center></h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '\x20%s', 'nr_attacks', 'ToolTip', 'val', 'concat', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20\x20style=\x22width:600px;background-color:', ':visible', 'deleted', 'No\x20incs', 'parent', '#minimize_page', '/map/village.txt', 'marcher', 'addSentTime', 'coord', 'This\x20script\x20has\x20been\x20run:\x20', 'get\x20page:\x20', 'map_cmdicons_', 'input_x_min', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><u><input\x20class=\x22btn\x22\x20type=\x22button\x22\x20onclick=\x22loadReports()\x22\x20value=\x22Load\x20reports\x22></center>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><u><input\x20class=\x22btn\x22\x20type=\x22button\x22\x20onclick=\x22databaseDetails()\x22\x20value=\x22Database\x20details\x22></center>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '/Troops_home.gz', '\x22>Dist\x20from\x20center:</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'sort\x20by\x20fangs', 'type_village', 'player&id=', 'nr_fakes', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22\x20><a\x20href=\x22#\x22\x20id=\x22sort_nukes_def\x22><font\x20color=\x22', 'https://api.counterapi.dev/v1/', '\x20</b>\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Size\x20DB:\x20<b>', 'Aug', 'read\x20report\x20and\x20update\x20incoming', '#contentContainer', 'Authorization', '</a>\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><a\x20href=\x22', 'g-recaptcha', 'player_id', 'nameTroupe', '#incomings_table\x20tbody\x20tr', '000', '\x20(off\x20report)', 'getElementById', 'highlight\x20off', '<h4\x20backgroundNoble\x20>\x20AXE:\x20', '.infoPlayer', '<th\x20class=\x27deleteTh\x27><a\x20href=#\x20id=\x27id_home\x27>stacks\x0ahome</a></th>', 'div_settings', ';border-spacing:2px;border-collapse:separate;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'vis', '\x22>All\x20info</font></u></center></h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'typeSupporter', 'error->\x20file\x20doesnt\x20exists', '\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22table_incomings\x22\x20class=\x22\x22\x20border=\x221\x22\x20style=\x22width:\x2050%;\x22>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><input\x20class=\x22btn\x22\x20type=\x22button\x22\x20onclick=\x22addWindow()\x22value=\x22Open\x20Upload\x22></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><input\x20id=\x22moreInfo\x22\x20class=\x22btn\x22\x20type=\x22button\x22\x20onclick=\x22moreInfo()\x22\x20value=\x22More\x20Info\x22></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>gap[sec]:</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><input\x20type=\x22number\x22\x20id=\x22input_gap\x22\x20value=\x225\x22\x20min=\x220\x22\x20max=\x221000\x22\x20\x20placeholder=\x225\x22\x20style=\x22text-align:center\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><a\x20href=\x22#\x22\x20onclick=\x22UI.InfoMessage(\x27This\x20value\x20is\x20to\x20find\x20launch\x20series\x20of\x20the\x20enemy\x20<br>\x20It\x20can\x20predict\x20if\x20an\x20incoming\x20is\x20fake/nuke/fang\x20<br>\x20The\x20lower\x20the\x20value\x20is\x20set\x20the\x20more\x20likely\x20the\x20prediction\x20is\x20true\x20\x27,8000)\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png\x22\x20style=\x22width:\x2013px;\x20height:\x2013px\x22/></a></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><input\x20class=\x22btn\x22\x20id=\x22btn_tag\x22\x20type=\x22button\x22\x20onclick=\x22tagIncomings()\x22\x20value=\x22Tag\x22><a\x20href=\x22#\x22\x20onclick=\x22UI.InfoMessage(\x27You\x20can\x20tag\x20incs\x20directly\x20without\x20pressing\x20on\x20More\x20Info\x20button\x27,10000)\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png\x22\x20style=\x22width:\x2013px;\x20height:\x2013px\x22/></a>\x20</center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><input\x20class=\x22btn\x22\x20id=\x22btn_backtime\x22\x20type=\x22button\x22\x20\x20value=\x22back\x20time\x22></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><input\x20class=\x22btn\x22\x20id=\x22btn_senttime\x22\x20type=\x22button\x22\x20\x20value=\x22sent\x20time\x22></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><input\x20class=\x22btn\x22\x20id=\x22btn_stacks\x22\x20type=\x22button\x22\x20\x20value=\x22stacks\x22></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x22\x20>\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan\x20=\x20\x222\x22><input\x20class=\x22btn\x22\x20type=\x22button\x22\x20onclick=\x22setIntervalIncomings()\x22\x20value=\x22Get\x20Incomings\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><a\x20href=\x22#\x22\x20onclick=\x22UI.InfoMessage(`\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Get\x20all\x20incomings\x20from\x20a\x20datetime\x20range\x20when\x20<b>Get\x20Only\x20Fakes</b>\x20and\x20<b>Get\x20Def\x20Vills</b>\x20are\x20red\x20<br><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Get\x20only\x20fake\x20incomings\x20from\x20a\x20datetime\x20range\x20when\x20<b>Get\x20Only\x20Fakes</b>\x20is\x20green\x20and\x20<b>\x20Get\x20Def\x20Vills\x20</b>\x20is\x20red,\x20it\x27s\x20calculated\x20based\x20on\x20<b>Current\x20pop</b>\x20and\x20remaining\x20troops\x20that\x20are\x20traveling\x20back\x20home<br><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Get\x20only\x20def\x20vills\x20incomings\x20from\x20a\x20datetime\x20range\x20when\x20<b>Get\x20Only\x20Fakes</b>\x20is\x20red\x20and\x20<b>Get\x20Def\x20Vills</b>\x20is\x20green\x20<br><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Get\x20only\x20def\x20vills\x20and\x20fakes\x20incomings\x20from\x20a\x20datetime\x20range\x20when\x20<b>Get\x20Only\x20Fakes</b>\x20is\x20green\x20and\x20<b>Get\x20Def\x20Vills</b>\x20is\x20green\x20<br><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20`,50000)\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png\x22\x20style=\x22width:\x2013px;\x20height:\x2013px\x22/></a></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan\x20=\x20\x222\x22>\x20<input\x20class=\x22btn\x22\x20type=\x22button\x22\x20id=\x22btn_get_fakes\x22\x20value=\x22Get\x20Only\x20Fakes\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><a\x20href=\x22#\x22\x20onclick=\x22UI.InfoMessage(\x27Keep\x20all\x20the\x20fakes\x20\x20based\x20on\x20remaining\x20troops<br>\x20that\x20are\x20returning\x20back\x20home\x20from\x20last\x20report\x20<br>\x20and\x20the\x20value\x20of\x20<b>Current\x20pop</b>\x20<br>It\x20is\x20used\x20when\x20<b>Get\x20Incomings</b>\x20is\x20pressed\x20\x27,20000)\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png\x22\x20style=\x22width:\x2013px;\x20height:\x2013px\x22/></a></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan\x20=\x20\x222\x22>\x20<input\x20class=\x22btn\x22\x20type=\x22button\x22\x20id=\x22btn_get_def\x22\x20value=\x22Get\x20Def\x20Vills\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><a\x20href=\x22#\x22\x20onclick=\x22UI.InfoMessage(\x27Keep\x20all\x20incs\x20tagged\x20as\x20<b>DEF</b>\x20\x20<br>It\x20is\x20used\x20when\x20<b>Get\x20Incomings</b>\x20is\x20pressed\x20\x27,10000)\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png\x22\x20style=\x22width:\x2013px;\x20height:\x2013px\x22/></a></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>Current\x20pop[%]:</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><input\x20type=\x22number\x22\x20id=\x22input_pop_fake2\x22\x20value=\x2230\x22\x20min=\x220\x22\x20max=\x221000\x22\x20\x20placeholder=\x22[0-100]%\x22\x20style=\x22text-align:center\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><a\x20href=\x22#\x22\x20onclick=\x22UI.InfoMessage(\x27Incomings\x20tagged\x20as\x20(fake)if\x20it\x20has\x20a\x20lower\x20pop[%]\x20than\x20the\x20value\x20set\x20\x27,10000)\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png\x22\x20style=\x22width:\x2013px;\x20height:\x2013px\x22/></a></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20hidden>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>nr\x20duplicates:</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><input\x20type=\x22number\x22\x20id=\x22input_duplicates\x22\x20value=\x2250\x22\x20min=\x220\x22\x20max=\x221000\x22\x20\x20placeholder=\x2250\x22\x20style=\x22text-align:center\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><input\x20id=\x22btn_highlight\x22\x20class=\x22btn\x22\x20type=\x22button\x22\x20onclick=\x22toggleHighLight()\x22\x20value=\x22highlight\x22></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20hidden\x20style=\x22text-align:center;\x20width:auto;\x22\x20id=\x22td_show_incomings\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22btn\x22\x20type=\x22button\x22\x20\x20value=\x22Show\x20Incomings\x22\x20id=\x22btn_show_incs\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20style=\x22margin:10px\x22\x20id=\x22id_select_incs\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'map_popup', '#btn_senttime', '\x22>X</font></b></a></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20class=\x22div_minimize\x22\x20><center\x20style=\x22margin:10px;\x22><u><font\x20color=\x22', 'report_date', '57d28d1b211fddbb7a499ead5bf23079', 'sort_by_attacks', 'catapultTarget', '4120rMkVIu', 'upload\x20reports\x20first', 'troops\x20comming', 'compressing\x20data\x20Reports:\x20', '#id_select_incs', '\x22\x20id=\x22progress_search\x22>status</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '\x22><img\x20src=\x22https://img.icons8.com/office/20/000000/sniper-rifle.png\x22/></font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'map_counter_reports', 'LoyaltyLevel:\x20', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>', 'dif_time\x20', 'inainte', 'catapult', 'toLowerCase', 'checked', 'flagName:\x20', 'enc', ',\x20off', 'taggingScript', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:0px;padding:0px\x22><font\x20color=\x22', '#div_settings\x20input[type=number],\x20#div_get_coords\x20input[type=text],#div_get_coords\x20input[type=number]', 'load\x20reports', 'margin', 'error', 'mouseout', 'onbeforeunload', 'worldNumber\x20', 'btn', '&target=', '\x22>\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/4ba99e83/graphic/flags/small/3.png\x22>\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'unit_speed', 'list_players', 'spy', 'inside\x20', '\x22\x20class=\x22infoPlayer\x22\x20src=\x22https://img.icons8.com/clouds/30/000000/more.png\x22/></font></center></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '#btn_off_coord,\x20#btn_def_coord,\x20#btn_stack_coord', 'k</h4>', '\x22\x20style=\x22width:\x20100%;background-color:', '</table>', 'options', 'keydown', '#div_settings\x20input[type=checkbox],#div_settings\x20input[type=number],\x20input[name=\x27type_info\x27]', 'yAxis', '.info', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22\x20><a\x20href=\x22#\x22\x20id=\x22sort_nobles_att\x22><font\x20\x20color=\x22', '\x27).toggle(\x27slow\x27)\x22\x20value=\x22', 'header_nobles', 'json', '\x22\x20style=\x22margin:0px\x22><center><font\x20color=\x22', 'initialize\x20rank\x20attacker', 'upload', '\x20</font>\x20</center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>', '\x22>(', 'sizeAttack', 'red', 'all', 'btn_backtime', 'foreign', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22popup\x22\x20onclick=\x27var\x20popup\x20=\x20document.getElementById(\x22table', '#table_view', '</table>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20', 'total\x20time\x20', '#div_get_coords', 'supports', 'encode', 'orange', '.txtHome', '.png\x22></td>', 'pred:\x20fake', 'id_start', 'children', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</center>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'input[name=\x27type_info\x27]', 'remove\x20counterDefender', ';border-spacing:2px;border-collapse:separate;\x22>\x20', 'wait:\x20', 'https://dsen.innogamescdn.com/asset/056b9c0b/graphic/delete.png', 'map_support_dropbox', '\x22\x20colspan=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><input\x20class=\x22btn\x22\x20type=\x22button\x22\x20id=\x22btn_extract_coord\x22\x20\x20value=\x22extract_coords\x22></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', 'labels', 'getHours', 'minimize_page', 'setRequestHeader', 'heavy', 'attack_info_def', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20rowspan=\x223\x22\x20class=\x22\x22\x20style=\x22width:70px;height:30px;text-align:center;\x20background-color:', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20rowspan=\x223\x22\x20class=\x22\x22\x20style=\x22width:70px;height:30px;text-align:center;\x20background-color:', 'quickedit', ';width:51px;height:36px;z-index:3;\x20', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'defendingPlayerId', 'incs:\x20{%value}', 'farmLevel', '.div_remove', 'erorr\x20map\x20attack\x20from\x20dropbox', 'nr\x20fang\x20true:\x20', 'stopInc', 'delete\x20support', ',\x20LC:\x20', 'colorRow', '<option>', 'sort_by_nobles', 'Dropbox-API-Arg', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><input\x20style=\x22text-align:\x20center;width:90%;\x22\x20type=\x22text\x22\x20id=\x22input_filter_tribe\x22\x20onclick=\x22\x22\x20placeholder=\x22tribe1,tribe2,...\x22\x20></center>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'coord_destination', 'row_a', '\x22>coming</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>', '<center>0</center>', ';padding:5px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Using\x20data\x20from\x20last\x207\x20days\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', 'nr_recap', 'map_history_upload', ';width:100px;height:30px\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22minimize_page\x22\x20style=\x22background-color:white;margin-right:10px\x22><a\x20href=\x22#\x22><img\x20src=\x22https://img.icons8.com/material-outlined/16/000000/collapse.png\x22/></a></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20\x20class=\x22close-btn\x22\x20\x20\x20><a\x20href=\x22#\x22\x20onclick=\x22closeWindow()\x22><b><font\x20color=\x22', '\x22>snipe\x20has(pop)\x20</font>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'load_troops', 'create\x20additional\x20files', 'a[href*=info_player]', 'draw\x20offensive\x20for\x20every\x20player', 'found:\x20', 'getWriter', 'map_exist_support', 'time\x20upload:\x20', '\x20,\x20get\x20troops\x20coming\x20', 'incomings', 'ready', '\x22>pop</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>', 'turn\x20off\x20filters\x20on\x20incomings\x20page', 'setAttribute', 'charCodeAt', 'tr_delimitator', 'k</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22info_extra', 'text/css', '331356GswNyB', 'quickedit-label', '\x20(\x22fake\x22)', ';width:14px;height:14px;z-index:4;margin-top:22px;margin-left:34px;font-size:\x2012px;\x22>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th><img\x20src=\x22https://dsen.innogamescdn.com/asset/056b9c0b/graphic/unit/att.png\x22></<th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20>speed</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x222\x22>destination</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20colspan=\x222\x22>origin</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20>Arrival\x20time</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th\x20>Arrives\x20in</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>', 'stacksHome', '\x22>fangs\x20has(catapults)\x20</font>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:0px;\x22>', 'typeDefender', '#attack_info_att_units\x20tr:nth-of-type(2)\x20.unit-item', '\x20ms', 'support\x20coming\x20after\x20merge', '\x22><img\x20src=\x22https://img.icons8.com/office/20/000000/sniper-rifle.png\x22/>(', '#support_sum\x20td', 'infoVillages', 'mapPredict', 'map&ajax=map_info&source=', ',CAT:\x20', 'setDate', '.gz', 'nr_fangs', 'send', 'sort_by_supports', '\x22>hide\x20attacks\x20closer\x20than(hours)\x20</font>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'style=\x27background-color:#ff8080\x27', 'fake\x20from\x20', 'get\x20incomings', 'upload\x20incomings\x20done', 'getJSON', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center><input\x20class=\x22btn\x20evt-confirm-btn\x20btn-confirm-yes\x22\x20type=\x22button\x22\x20id=\x22btn_show_info\x22\x20style=\x22margin:10px\x22\x20value=\x22show\x22></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22table_view\x22\x20class=\x22\x22\x20border=\x221\x22\x20style=\x22width:\x20100%;background-color:', 'erorr\x20in\x20upload', 'farmLevel:\x20', 'recaptcha,\x20upload\x20again', '</th>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20>Origin:</td>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20>', 'reportInfo', 'time_return', '.row_a', '\x22>Min\x20coord:</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'get\x20url\x20', 'world', 'new_off', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:0px;padding:0px\x22><font\x20color=\x22', ',\x20[BT]:\x20', 'time', ';text-align:left\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:5px\x22\x20type=\x22radio\x22\x20id=\x22radio_offensive\x22\x20name=\x22type_info\x22\x20value=\x22offensive_info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22radio_offensive\x22\x20style=\x22color:', '<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'background-color:rgba(20,\x2020,\x2020,\x200.34)', 'call', 'forEach', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<center><div\x20id=\x22table_results\x22\x20style=\x22height:800px;width:800px;overflow:auto\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<textarea\x20cols=\x2280\x22\x20rows=\x2280\x22>', 'entries', 'def_spy', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '#btn_stack_coord', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center><font\x20style=\x22margin:5px\x22\x20color=\x22', '#table_incomings', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/1d2499b/graphic/buildings/snob.png\x22>\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'turn\x20off\x20the\x20filters', '\x20<h4>', 'inside\x20breee', 'info_player&id=', '\x20already\x20tagged', 'size', 'troops', 'not\x20found', '</b></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20date-time=', '</textarea>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '#sort_fakes_def', '_users', 'data-unit', 'edit_other_comment', 'load:\x20(', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:0px;font-size:16px\x22><font\x20color=\x22', 'coordDefender', '</tr></tbody>', 'hasOwnProperty', 'rotation', 'ram', '\x22>coming</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>', 'btn_get_fakes', '#td_show_incomings', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'defend\x20type:', 'list\x20is\x20empty,\x20removed', '\x22>type\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '</font></b>\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'overview_villages&mode=commands&type=all&&group=0', '\x22>between\x20hours\x20\x20\x20</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'application/octet-stream', '/Support.gz', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20rowspan=\x223\x22\x20class=\x22\x22\x20style=\x22width:30px;height:30px;text-align:center;\x20background-color:', '\x22\x20style=\x22margin:0px;padding:0px\x22><center><font\x20color=\x22', '</tr></table></div>', '257310uRDhFT', 'data-command-id', 'displayForVillage', 'createTableCoordIncomings', 'Jul', 'coordAttacker', 'coord-id', '#div_settings\x20input[type=checkbox],\x20#div_get_coords\x20input[type=checkbox]', 'nr_nobles_total', 'player_destination_id', 'map_dropbox\x20after', '\x22\x20id=\x22progress_reports\x22>None</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '#command-data-form\x20.unit_link', '\x20===\x20', 'fang', 'village=', 'wallLevel', 'div', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>Troops\x20Home</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>', 'https://img.icons8.com/fluent/16/000000/d.png', 'input_gap', '\x22><img\x20src=\x22https://img.icons8.com/ultraviolet/20/000000/horror.png\x22/>(', 'createTextNode', '4408220ZeSMwX', 'coord_origin', '</th>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20>Origin:</td>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20>', 'erorrrrr\x20map\x20attack\x20from\x20dropbox', '.png\x22\x20alt\x20class=\x22faded\x22</th>', 'background-color:rgb(255,\x20132,\x205)', 'input[name=\x27type_info\x27][value=\x27', '\x22>Launch\x20time\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'typeAttacker', 'format', '.paged-nav-item', '<h4>', 'current_tag', 'errorMessage', 'show', '</b>\x20\x20</font>\x20</center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', 'archer', 'done', 'Apr', '</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', '#div_upload_time', '\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/1d2499b/graphic/buildings/wall.png\x22>\x20</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '\x22);popup.classList.toggle(\x22show\x22)\x27><h4>show</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20class=\x22popuptext\x22\x20style=\x22background-color:#f4e4bc\x22\x20id=\x22table', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20rowspan=\x223\x22\x20class=\x22\x22\x20style=\x22width:30px;height:30px;text-align:center;\x20background-color:', '#E80000', '\x22>get\x20all\x20incomings</font></u></center></h2>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22table_upload\x22\x20class=\x22\x22\x20border=\x221\x22\x20style=\x22width:\x20100%;background-color:', 'coord_attacker', 'value', 'mood', 'mapAttacksVillageId', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>', 'desktop', '\x22><img\x20player-id=\x22', 'speedWorld', '\x22>Arrives\x20in\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>', 'stylesheet', 'defensive_info', '\x20incs', 'Upload\x20incomings\x20done\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Upload\x20time:\x20<b>', 'body', 'coord_destination_id', '#026440', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h2><center\x20style=\x22margin:10px\x22><u><font\x20color=\x22', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20style=\x22text-align:center;\x22\x20id=\x22settings_closer\x22\x20min=\x220\x22\x20max=\x22200\x22\x20placeholder=\x2220\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x20<input\x20type=\x22number\x22\x20style=\x22text-align:center;font-size:18px\x22\x20id=\x22input_x_min\x22\x20min=\x220\x22\x20max=\x221000\x22\x20placeholder=\x22X\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x20<input\x20type=\x22number\x22\x20style=\x22text-align:center;font-size:18px\x22\x20id=\x22input_y_min\x22\x20min=\x220\x22\x20max=\x221000\x22\x20placeholder=\x22Y\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', 'supporterPlayerId', 'arrayBuffer', 'Invalid\x20Date', 'empty', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<font\x20style=\x22margin:5px\x22\x20color=\x22', 'tribes', 'attack', '/map/player.txt', 'troopsAtHome', '.div_minimize:visible', 'axe', 'nr_tribe', '</font></center></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20rowspan=\x223\x22\x20class=\x22\x22\x20style=\x22width:30px;height:30px;text-align:center;\x20background-color:', 'spear', 'units', 'count', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', 'input_tribes', '#div_settings\x20input[type=checkbox],#div_settings\x20input[type=number],\x20input[name=\x27type_info\x27],\x20#div_get_coords\x20input[type=checkbox],\x20#div_get_coords\x20input[type=text],\x20#div_get_coords\x20input[type=number]', 'name', '\x22\x20number-tr=\x22', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:5x\x22><font\x20color=\x22', 'draggable', '</center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>', 'write', '\x22>incomings</font><a/></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', '<td\x20width=\x2235\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/3ec301e5/graphic/unit/unit_', '.overview_filters', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><center\x20style=\x22margin:10px\x22><font\x20color=\x22', 'prepend', '/map/ally.txt', 'btn-confirm-no', 'innerHTML', 'Found\x20captcha!', 'player_origin_name', 'id=', 'date-fake', '<tr>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:40px;\x20background-color:', 'undefined', 'initialize\x20rank\x20defender', 'Select\x20Enemy\x20Info', ';width:14px;height:14px;z-index:4;margin-left:34px;\x20font-size:\x2012px\x22>', 'def_cat', '#div_settings\x20input[type=number]', 'nuke', '\x20times', 'aea2b0aa9ae1534226518faaefffdaad', 'May', '<td\x20class=\x22fm_unit\x22\x20style=\x22width:30px;text-align:center;width:auto;\x20background-color:', '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20\x20\x20value=\x22hide_ignored\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:', 'has', 'serverTime', 'offensive_info', '</b></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '.tr_delimitator', 'btn_stacks', '</tr>', '/Support0.gz', '\x22>destination\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22\x20style=\x22text-align:center;\x20width:auto;\x20background-color:', '<td\x20style=\x22text-align:center\x22\x20class=\x22unit-item\x20unit-item-', 'nameDefender', 'map', '</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<center><font\x20color=\x22', 'toUpperCase', 'after', 'flag', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22height:700px;overflow:auto;\x22\x20id=\x22div_incomingsInfo\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20\x20class=\x22table_player\x22\x20border=\x221\x22\x20style=\x22width:\x20100%;background-color:', 'btn_highlight'];
    _0x1829 = function() {
        return _0x4d53f4;
    };
    return _0x1829();
}

function highLightIncomings() {
    const _0x57d7e4 = _0x555ef8;
    try {
        let _0x328f66 = document[_0x57d7e4(0x304)](_0x57d7e4(0x12c));
        if (localStorage[_0x57d7e4(0x520)](game_data[_0x57d7e4(0x429)] + _0x57d7e4(0x5a1)) == _0x57d7e4(0x5f2)) {
            let _0x505ab0 = {
                'yellow': '#ffff66',
                'red': _0x57d7e4(0x201),
                'green': _0x57d7e4(0x187),
                'orange': _0x57d7e4(0x309)
            };
            document[_0x57d7e4(0x36b)](_0x57d7e4(0x4e8))[_0x57d7e4(0x55b)][_0x57d7e4(0x501)](_0x57d7e4(0x4c4)), document[_0x57d7e4(0x36b)]('btn_highlight')['classList'][_0x57d7e4(0x613)](_0x57d7e4(0x28c));
            for (let _0x569729 = 0x0; _0x569729 < _0x328f66[_0x57d7e4(0x5d6)]; _0x569729++) {
                let _0x430e0a = _0x328f66[_0x569729]['children'][_0x57d7e4(0x5d6)];
                _0x328f66[_0x569729][_0x57d7e4(0x55b)][_0x57d7e4(0x501)]('selected');
                if (document[_0x57d7e4(0x36b)](_0x57d7e4(0x624)) != null && _0x328f66[_0x569729][_0x57d7e4(0x252)]['style']['backgroundColor'] != _0x57d7e4(0x591)) {
                    let _0xc674f1 = _0x328f66[_0x569729][_0x57d7e4(0x3c5)][0x0][_0x57d7e4(0x14f)](_0x57d7e4(0x183))[0x0][_0x57d7e4(0x1a8)][_0x57d7e4(0x25b)](_0x57d7e4(0x2f9)),
                        _0x302b0c = _0x328f66[_0x569729][_0x57d7e4(0x3c5)][0x0][_0x57d7e4(0x14f)]('img')[0x0]['src'][_0x57d7e4(0x25b)]('attack_small.png'),
                        _0xad6e57 = ![];
                    if (_0x328f66[_0x569729]['getElementsByClassName'](_0x57d7e4(0x2ee))[_0x57d7e4(0x5d6)] > 0x0) {
                        let _0x5646ca = _0x328f66[_0x569729][_0x57d7e4(0x612)]('cls_type')[0x0][_0x57d7e4(0x5ad)],
                            _0x1e203f = parseFloat(_0x328f66[_0x569729]['getElementsByClassName']('cls_pop')[0x0]['innerText']);
                        (_0x5646ca == _0x57d7e4(0x181) && _0x1e203f > 0x46 || _0xc674f1 == !![]) && _0x302b0c == ![] && (_0xad6e57 = !![]);
                    }(_0xad6e57 == !![] || _0xc674f1 == !![]) && $(_0x328f66[_0x569729])['children']()['each'](function() {
                        const _0x58b6d8 = _0x57d7e4;
                        console[_0x58b6d8(0x533)](_0x58b6d8(0x553)), $(this)[_0x58b6d8(0x2e0)](_0x58b6d8(0x5d9), _0x505ab0[_0x58b6d8(0x3c0)]);
                    });
                }
                for (let _0x471707 = _0x569729 + 0x1; _0x471707 < _0x328f66[_0x57d7e4(0x5d6)]; _0x471707++) {
                    let _0x4fda0b = _0x328f66[_0x569729][_0x57d7e4(0x3c5)][_0x430e0a - 0x2][_0x57d7e4(0x5ad)]['match'](/[0-9]{2}\:[0-9]{2}\:[0-9]{2}\:[0-9]{3}/)[0x0],
                        _0x4a2df5 = _0x328f66[_0x471707][_0x57d7e4(0x3c5)][_0x430e0a - 0x2][_0x57d7e4(0x5ad)][_0x57d7e4(0x538)](/[0-9]{2}\:[0-9]{2}\:[0-9]{2}\:[0-9]{3}/)[0x0],
                        _0x15bd03 = parseInt(_0x4fda0b[_0x57d7e4(0x1c8)](':')[0x0]) * 0xe10 * 0x3e8 + parseInt(_0x4fda0b['split'](':')[0x1]) * 0x3c * 0x3e8 + parseInt(_0x4fda0b[_0x57d7e4(0x1c8)](':')[0x2]) * 0x3e8 + parseInt(_0x4fda0b['split'](':')[0x3]),
                        _0x693e57 = parseInt(_0x4a2df5[_0x57d7e4(0x1c8)](':')[0x0]) * 0xe10 * 0x3e8 + parseInt(_0x4a2df5['split'](':')[0x1]) * 0x3c * 0x3e8 + parseInt(_0x4a2df5['split'](':')[0x2]) * 0x3e8 + parseInt(_0x4a2df5[_0x57d7e4(0x1c8)](':')[0x3]);
                    if (_0x328f66[_0x569729]['children'][0x2][_0x57d7e4(0x4c5)] == _0x328f66[_0x471707][_0x57d7e4(0x3c5)][0x2]['innerHTML']) {
                        if (Math[_0x57d7e4(0x62b)](_0x15bd03 - _0x693e57) == 0x32 || Math[_0x57d7e4(0x62b)](_0x15bd03 - _0x693e57) == 0x64 || Math['abs'](_0x15bd03 - _0x693e57) == 0x96 || Math['abs'](_0x15bd03 - _0x693e57) == 0x0) {
                            console[_0x57d7e4(0x533)](_0x4fda0b + _0x57d7e4(0x46d) + _0x4a2df5), console[_0x57d7e4(0x533)](_0x15bd03 + _0x57d7e4(0x46d) + _0x693e57), console['log'](_0x57d7e4(0x5e0) + (_0x693e57 - _0x15bd03)), $(_0x328f66[_0x569729])[_0x57d7e4(0x3c5)]()[_0x57d7e4(0x2e1)](function() {
                                const _0x32345c = _0x57d7e4;
                                console[_0x32345c(0x533)]('color\x20i'), $(this)[_0x32345c(0x2e0)]('background-color', _0x505ab0[_0x32345c(0x61c)]);
                            }), console[_0x57d7e4(0x533)](_0x328f66[_0x471707]), $(_0x328f66[_0x471707])[_0x57d7e4(0x3c5)]()[_0x57d7e4(0x2e1)](function() {
                                const _0x241c7a = _0x57d7e4;
                                console[_0x241c7a(0x533)](_0x241c7a(0x326)), $(this)[_0x241c7a(0x2e0)](_0x241c7a(0x5d9), _0x505ab0[_0x241c7a(0x61c)]);
                            }), console[_0x57d7e4(0x533)](_0x328f66[_0x471707]);
                            break;
                        }
                    }
                    if (Math['abs'](_0x15bd03 - _0x693e57) > 0xc8) break;
                }
                if (_0x328f66[_0x569729][_0x57d7e4(0x3c5)][0x0][_0x57d7e4(0x14f)]('img')['length'] == 0x2) {
                    let _0x35a582 = _0x328f66[_0x569729][_0x57d7e4(0x3c5)][0x0][_0x57d7e4(0x14f)]('img')[0x1][_0x57d7e4(0x1a8)][_0x57d7e4(0x25b)]('snob.png');
                    _0x35a582 == !![] && $(_0x328f66[_0x569729])[_0x57d7e4(0x3c5)]()[_0x57d7e4(0x2e1)](function() {
                        const _0x199b1b = _0x57d7e4;
                        $(this)['css'](_0x199b1b(0x5d9), _0x505ab0[_0x199b1b(0x3b5)]);
                    });
                }
            }
        } else {
            for (let _0x54979c = 0x0; _0x54979c < _0x328f66[_0x57d7e4(0x5d6)]; _0x54979c++) {
                $(_0x328f66[_0x54979c])[_0x57d7e4(0x3c5)]()[_0x57d7e4(0x2e1)](function() {
                    const _0x4f9808 = _0x57d7e4;
                    $(this)[_0x4f9808(0x2e0)]('background-color', '');
                });
            }
            document['getElementById'](_0x57d7e4(0x4e8))[_0x57d7e4(0x55b)]['remove'](_0x57d7e4(0x28c)), document[_0x57d7e4(0x36b)](_0x57d7e4(0x4e8))['classList'][_0x57d7e4(0x613)](_0x57d7e4(0x4c4));
        }
    } catch (_0x37f291) {}
}
if (window['location'][_0x555ef8(0x148)][_0x555ef8(0x25b)]('mode=incomings')) highLightIncomings();

function toggleHighLight() {
    const _0x103384 = _0x555ef8;
    if (localStorage[_0x103384(0x520)](game_data[_0x103384(0x429)] + _0x103384(0x5a1)) != null) {
        let _0x5ce9a6 = localStorage[_0x103384(0x520)](game_data[_0x103384(0x429)] + _0x103384(0x5a1));
        _0x5ce9a6 == _0x103384(0x5f2) ? (localStorage[_0x103384(0x1d4)](game_data['world'] + 'highlight', 'false'), UI[_0x103384(0x211)](_0x103384(0x36c), 0x1f4), highLightIncomings()) : (localStorage[_0x103384(0x1d4)](game_data['world'] + _0x103384(0x5a1), 'true'), UI[_0x103384(0x5ea)](_0x103384(0x307), 0x1f4), highLightIncomings());
    } else localStorage[_0x103384(0x1d4)](game_data['world'] + _0x103384(0x5a1), _0x103384(0x5f2)), highLightIncomings();
}

function eventGetTroops() {
    const _0x5f13a3 = _0x555ef8;
    var _0x709faf = game_data[_0x5f13a3(0x4b3)];
    $(_0x5f13a3(0x2b5))['on']('click', function(_0x38c539) {
        const _0x4e23c2 = _0x5f13a3;
        _0x38c539[_0x4e23c2(0x299)](), $(_0x4e23c2(0x2b5))['attr'](_0x4e23c2(0x16d), !![]);
        let _0x560822 = this[_0x4e23c2(0x188)](_0x4e23c2(0x2b3)),
            _0x2ee4a6 = this[_0x4e23c2(0x188)]('data-nr'),
            _0x46e5d2 = game_data[_0x4e23c2(0x2bc)] + (_0x4e23c2(0x412) + _0x560822 + _0x4e23c2(0x39a) + _0x560822 + '&'),
            _0x5ac905 = window[_0x4e23c2(0x185)][_0x4e23c2(0x148)]['split']('village=')[0x0] + (_0x4e23c2(0x46f) + _0x560822 + _0x4e23c2(0x2f8) + _0x560822),
            _0x2e4343 = this[_0x4e23c2(0x5ad)][_0x4e23c2(0x538)](/\d+\|\d+/)[0x0],
            _0x3a20ae = this;
        console[_0x4e23c2(0x533)](_0x46e5d2), this['parentElement'][_0x4e23c2(0x55b)][_0x4e23c2(0x501)](_0x4e23c2(0x1ee));
        let _0x3fc535 = new Date()[_0x4e23c2(0x505)]();
        $[_0x4e23c2(0x18a)](_0x46e5d2, function(_0x28bad3) {
            const _0x20e9f4 = _0x4e23c2;
            console[_0x20e9f4(0x533)](_0x28bad3);
            let _0x461177 = {};
            for (let _0x1e1845 = 0x0; _0x1e1845 < _0x709faf[_0x20e9f4(0x5d6)] - 0x1; _0x1e1845++) {
                _0x461177[_0x709faf[_0x1e1845]] = parseInt(_0x28bad3['units'][_0x709faf[_0x1e1845]][_0x20e9f4(0x4b4)][_0x20e9f4(0x253)]) + parseInt(_0x28bad3[_0x20e9f4(0x4b3)][_0x709faf[_0x1e1845]]['count'][_0x20e9f4(0x3b8)]);
            }
            let _0x53e425, _0x280cc2, _0x9121f8, _0x25071e;
            _0x53e425 = _0x28bad3[_0x20e9f4(0x18d)][_0x20e9f4(0x5f3)], _0x280cc2 = _0x28bad3['buildings'][_0x20e9f4(0x5dd)], _0x25071e = _0x28bad3[_0x20e9f4(0x493)], console[_0x20e9f4(0x533)](_0x28bad3[_0x20e9f4(0x4e6)]);
            if (_0x28bad3[_0x20e9f4(0x4e6)] != undefined) {
                if (_0x28bad3['flag'][_0x20e9f4(0x38b)]()[_0x20e9f4(0x25b)](_0x20e9f4(0x1fb))) _0x9121f8 = _0x28bad3[_0x20e9f4(0x4e6)]['short_desc'];
                else _0x9121f8 = _0x20e9f4(0x2ea);
            }
            console[_0x20e9f4(0x533)](_0x461177), console['log'](_0x20e9f4(0x306) + _0x53e425), console[_0x20e9f4(0x533)](_0x20e9f4(0x421) + _0x280cc2), console['log'](_0x20e9f4(0x38d) + _0x9121f8), console['log'](_0x20e9f4(0x386) + _0x25071e);
            let _0x26e2a2 = _0x20e9f4(0x5be);
            $(_0x20e9f4(0x362))['eq'](0x0)[_0x20e9f4(0x4c2)](_0x26e2a2), console[_0x20e9f4(0x533)](_0x5ac905), $[_0x20e9f4(0x18a)](_0x5ac905, function(_0x5b23a7) {
                const _0x5cdfd8 = _0x20e9f4;
                document[_0x5cdfd8(0x36b)](_0x5cdfd8(0x20f))['innerHTML'] = _0x5b23a7;
                let _0x4a4e29 = {
                        'snob': 0x0
                    },
                    _0x284148 = document[_0x5cdfd8(0x36b)](_0x5cdfd8(0x20f))[_0x5cdfd8(0x304)](_0x5cdfd8(0x40f));
                console[_0x5cdfd8(0x533)](_0x284148);
                for (let _0x1601fb = 0x0; _0x1601fb < _0x284148[_0x5cdfd8(0x5d6)] - 0x1; _0x1601fb++) {
                    let _0x2cf717 = _0x284148[_0x1601fb][_0x5cdfd8(0x188)](_0x5cdfd8(0x448)),
                        _0x56c90c = parseInt(_0x284148[_0x1601fb][_0x5cdfd8(0x5ad)]);
                    _0x4a4e29[_0x2cf717] = _0x56c90c;
                }
                document['getElementById']('div_coming_troops')[_0x5cdfd8(0x501)]();
                let _0x5f3c5b = _0x5cdfd8(0x348) + backgroundColor + _0x5cdfd8(0x150) + backgroundColor + ';border-color:' + borderColor + '\x22>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:' + headerColor + _0x5cdfd8(0x26f) + titleColor + _0x5cdfd8(0x568) + headerColor + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><center\x20style=\x22margin:10px\x22><font\x20color=\x22' + titleColor + _0x5cdfd8(0x5d7) + headerColor + _0x5cdfd8(0x26f) + titleColor + _0x5cdfd8(0x1f0) + headerColor + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><center\x20style=\x22margin:10px\x22><font\x20color=\x22' + titleColor + _0x5cdfd8(0x54d) + headerColor + _0x5cdfd8(0x26f) + titleColor + _0x5cdfd8(0x48c) + headerColor + _0x5cdfd8(0x26f) + titleColor + _0x5cdfd8(0x1f5) + headerColor + _0x5cdfd8(0x26f) + titleColor + _0x5cdfd8(0x2eb);
                for (let _0x4e2f19 = 0x0; _0x4e2f19 < _0x709faf[_0x5cdfd8(0x5d6)] - 0x1; _0x4e2f19++) {
                    _0x5f3c5b += _0x5cdfd8(0x4d5) + headerColor + _0x5cdfd8(0x550) + _0x709faf[_0x4e2f19] + _0x5cdfd8(0x3c2);
                }
                _0x5f3c5b += _0x5cdfd8(0x149) + headerColor + _0x5cdfd8(0x26f) + titleColor + _0x5cdfd8(0x5ec), _0x5f3c5b += _0x5cdfd8(0x527), _0x5f3c5b += _0x5cdfd8(0x263) + headerColor + ';color:white\x22>' + _0x2e4343 + _0x5cdfd8(0x3d5) + headerColor + _0x5cdfd8(0x1f8) + _0x2ee4a6 + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20rowspan=\x223\x22\x20class=\x22\x22\x20style=\x22width:70px;height:30px;text-align:center;\x20background-color:' + headerColor + _0x5cdfd8(0x1f8) + _0x9121f8 + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20rowspan=\x223\x22\x20class=\x22\x22\x20style=\x22width:30px;height:30px;text-align:center;\x20background-color:' + headerColor + _0x5cdfd8(0x1f8) + _0x25071e + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20rowspan=\x223\x22\x20class=\x22\x22\x20style=\x22width:30px;height:30px;text-align:center;\x20background-color:' + headerColor + _0x5cdfd8(0x1f8) + _0x53e425 + _0x5cdfd8(0x4b1) + headerColor + ';color:white\x22>' + _0x280cc2 + _0x5cdfd8(0x454) + headerColor + _0x5cdfd8(0x26f) + titleColor + '\x22>home</font></center></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';
                let _0x2cca42 = 0x0;
                for (let _0xdb53bf = 0x0; _0xdb53bf < _0x709faf['length'] - 0x1; _0xdb53bf++) {
                    let _0x476bb3 = _0x461177[_0x709faf[_0xdb53bf]],
                        _0x18303d = _0x709faf[_0xdb53bf];
                    _0x18303d != _0x5cdfd8(0x39f) && _0x18303d != _0x5cdfd8(0x206) && _0x18303d != _0x5cdfd8(0x34f) && _0x18303d != _0x5cdfd8(0x450) && _0x18303d != 'catapult' && _0x18303d != _0x5cdfd8(0x4ae) && (_0x2cca42 += _0x476bb3 * troopsPop[_0x18303d]), _0x5f3c5b += '<td\x20style=\x22width:30px;height:30px;text-align:center;\x20background-color:' + headerColor + _0x5cdfd8(0x1f8) + _0x476bb3 + _0x5cdfd8(0x26a);
                }
                _0x5f3c5b += _0x5cdfd8(0x1be) + headerColor + _0x5cdfd8(0x1f8) + _0x2cca42 + _0x5cdfd8(0x26a), _0x5f3c5b += '</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:' + headerColor + _0x5cdfd8(0x4c1) + titleColor + _0x5cdfd8(0x3e9), _0x2cca42 = 0x0;
                for (let _0x33cf0c = 0x0; _0x33cf0c < _0x709faf[_0x5cdfd8(0x5d6)] - 0x1; _0x33cf0c++) {
                    let _0x4bb9eb = _0x4a4e29[_0x709faf[_0x33cf0c]],
                        _0xd4d6aa = _0x709faf[_0x33cf0c];
                    _0xd4d6aa != _0x5cdfd8(0x39f) && _0xd4d6aa != _0x5cdfd8(0x206) && _0xd4d6aa != _0x5cdfd8(0x34f) && _0xd4d6aa != _0x5cdfd8(0x450) && _0xd4d6aa != _0x5cdfd8(0x38a) && _0xd4d6aa != _0x5cdfd8(0x4ae) && (_0x2cca42 += _0x4bb9eb * troopsPop[_0xd4d6aa]), _0x5f3c5b += _0x5cdfd8(0x293) + headerColor + ';color:white\x22>' + _0x4bb9eb + _0x5cdfd8(0x26a);
                }
                _0x5f3c5b += '<td\x20style=\x22width:60px;height:30px;text-align:center;\x20background-color:' + headerColor + _0x5cdfd8(0x1f8) + _0x2cca42 + '</td>', _0x5f3c5b += _0x5cdfd8(0x648) + headerColor + _0x5cdfd8(0x4c1) + titleColor + _0x5cdfd8(0x301), _0x2cca42 = 0x0;
                for (let _0x58e798 = 0x0; _0x58e798 < _0x709faf[_0x5cdfd8(0x5d6)] - 0x1; _0x58e798++) {
                    let _0x57f3d3 = _0x461177[_0x709faf[_0x58e798]] + _0x4a4e29[_0x709faf[_0x58e798]],
                        _0x2bb244 = _0x709faf[_0x58e798];
                    _0x2bb244 != _0x5cdfd8(0x39f) && _0x2bb244 != _0x5cdfd8(0x206) && _0x2bb244 != _0x5cdfd8(0x34f) && _0x2bb244 != _0x5cdfd8(0x450) && _0x2bb244 != _0x5cdfd8(0x38a) && _0x2bb244 != _0x5cdfd8(0x4ae) && (_0x2cca42 += _0x57f3d3 * troopsPop[_0x2bb244]), _0x5f3c5b += _0x5cdfd8(0x293) + headerColor + _0x5cdfd8(0x1f8) + _0x57f3d3 + _0x5cdfd8(0x26a);
                }
                _0x5f3c5b += _0x5cdfd8(0x1be) + headerColor + _0x5cdfd8(0x1f8) + _0x2cca42 + _0x5cdfd8(0x26a), _0x5f3c5b += _0x5cdfd8(0x45f), _0x3a20ae[_0x5cdfd8(0x585)] = _0x5f3c5b;
                let _0x3f9ae8 = new Date()[_0x5cdfd8(0x505)]();
                console['log'](_0x5cdfd8(0x20e) + (_0x3f9ae8 - _0x3fc535)), $('.load_troops')[_0x5cdfd8(0x2af)](_0x5cdfd8(0x16d), ![]);
            });
        });
    });
}
eventGetTroops();
async function getInfoVillages() {
    return new Promise(async (_0x90e9ed, _0x18697f) => {
        const _0x5c7a1e = _0x2f7d;
        let _0x159b93 = game_data[_0x5c7a1e(0x429)] + 'infoVillages';
        await insertlibraryLocalBase()[_0x5c7a1e(0x198)](_0x2e5325 => {
            alert(_0x2e5325);
        });
        let _0x201278 = await localBase[_0x5c7a1e(0x520)](_0x159b93)['catch'](_0x4d0bb3 => {
            alert(_0x4d0bb3);
        });
        console[_0x5c7a1e(0x533)]('get\x20info\x20VIllages');
        let _0x525ab5 = new Map(),
            _0x1c9b07 = {},
            _0x2977d1 = document[_0x5c7a1e(0x36b)](_0x5c7a1e(0x239))[_0x5c7a1e(0x5ad)][_0x5c7a1e(0x1c8)]('/'),
            _0x556810 = document[_0x5c7a1e(0x36b)](_0x5c7a1e(0x4d8))['innerText'],
            _0x459d53 = new Date(_0x2977d1[0x1] + '/' + _0x2977d1[0x0] + '/' + _0x2977d1[0x2] + '\x20' + _0x556810),
            _0x3411d5 = window[_0x5c7a1e(0x185)]['href'][_0x5c7a1e(0x1c8)]('/game.php')[0x0],
            _0x11dc08 = new Map(),
            _0x13bce9 = new Map();
        if (_0x201278 == undefined) {
            let _0x177b8b = httpGet(_0x3411d5 + _0x5c7a1e(0x34e))[_0x5c7a1e(0x1c8)](/\r?\n/),
                _0x2cc07a = httpGet(_0x3411d5 + '/map/player.txt')[_0x5c7a1e(0x1c8)](/\r?\n/),
                _0x33052d = httpGet(_0x3411d5 + _0x5c7a1e(0x4c3))[_0x5c7a1e(0x1c8)](/\r?\n/);
            for (let _0x55d544 = 0x0; _0x55d544 < _0x33052d[_0x5c7a1e(0x5d6)] - 0x1; _0x55d544++) {
                let _0xc58f91 = innoReplaceSpecialCaracters(_0x33052d[_0x55d544][_0x5c7a1e(0x1c8)](',')[0x1]);
                _0x13bce9['set'](_0x33052d[_0x55d544][_0x5c7a1e(0x1c8)](',')[0x0], _0xc58f91);
            }
            for (let _0x5e9f7f = 0x0; _0x5e9f7f < _0x2cc07a['length'] - 0x1; _0x5e9f7f++) {
                let _0x1e3cd9 = innoReplaceSpecialCaracters(_0x2cc07a[_0x5e9f7f]['split'](',')[0x1]),
                    _0xd780c9 = _0x13bce9['get'](_0x2cc07a[_0x5e9f7f][_0x5c7a1e(0x1c8)](',')[0x2]) == undefined ? _0x5c7a1e(0x2ea) : _0x13bce9[_0x5c7a1e(0x18a)](_0x2cc07a[_0x5e9f7f][_0x5c7a1e(0x1c8)](',')[0x2]);
                _0x11dc08['set'](_0x2cc07a[_0x5e9f7f][_0x5c7a1e(0x1c8)](',')[0x0], {
                    'allyId': _0x2cc07a[_0x5e9f7f]['split'](',')[0x2],
                    'playerName': _0x1e3cd9,
                    'tribeName': _0xd780c9
                });
            }
            for (let _0x23e0ef = 0x0; _0x23e0ef < _0x177b8b['length']; _0x23e0ef++) {
                _0x11dc08[_0x5c7a1e(0x18a)](_0x177b8b[_0x23e0ef][_0x5c7a1e(0x1c8)](',')[0x4]) != undefined && _0x525ab5[_0x5c7a1e(0x588)](_0x177b8b[_0x23e0ef]['split'](',')[0x2] + '|' + _0x177b8b[_0x23e0ef][_0x5c7a1e(0x1c8)](',')[0x3], {
                    'villageId': _0x177b8b[_0x23e0ef][_0x5c7a1e(0x1c8)](',')[0x0],
                    'playerId': _0x177b8b[_0x23e0ef][_0x5c7a1e(0x1c8)](',')[0x4],
                    'points': _0x177b8b[_0x23e0ef][_0x5c7a1e(0x1c8)](',')[0x5],
                    'allyId': _0x11dc08['get'](_0x177b8b[_0x23e0ef][_0x5c7a1e(0x1c8)](',')[0x4])[_0x5c7a1e(0x1dc)],
                    'playerName': _0x11dc08[_0x5c7a1e(0x18a)](_0x177b8b[_0x23e0ef]['split'](',')[0x4])[_0x5c7a1e(0x578)],
                    'tribeName': _0x11dc08[_0x5c7a1e(0x18a)](_0x177b8b[_0x23e0ef][_0x5c7a1e(0x1c8)](',')[0x4])[_0x5c7a1e(0x1ac)]
                });
            }
            _0x1c9b07[_0x5c7a1e(0x52d)] = _0x459d53, _0x1c9b07[_0x5c7a1e(0x626)] = Array[_0x5c7a1e(0x2e2)](_0x525ab5['entries']());
            let _0x2dd51f = JSON[_0x5c7a1e(0x199)](_0x1c9b07);
            _0x2dd51f = replaceSpecialCaracters(_0x2dd51f), await localBase[_0x5c7a1e(0x1d4)](_0x159b93, _0x2dd51f);
        } else {
            let _0x50a22f = JSON[_0x5c7a1e(0x1a6)](_0x201278),
                _0x4820c9 = _0x50a22f[_0x5c7a1e(0x52d)];
            _0x525ab5 = new Map(_0x50a22f[_0x5c7a1e(0x626)]);
            if (new Date(_0x459d53)[_0x5c7a1e(0x505)]() - new Date(_0x4820c9) > 0xe10 * 0x3e8) {
                console[_0x5c7a1e(0x533)](_0x5c7a1e(0x2c8));
                let _0x571d86 = httpGet(_0x3411d5 + _0x5c7a1e(0x34e))[_0x5c7a1e(0x1c8)](/\r?\n/),
                    _0x232cfd = httpGet(_0x3411d5 + _0x5c7a1e(0x4ab))[_0x5c7a1e(0x1c8)](/\r?\n/),
                    _0x21c781 = httpGet(_0x3411d5 + '/map/ally.txt')[_0x5c7a1e(0x1c8)](/\r?\n/);
                for (let _0x5092e0 = 0x0; _0x5092e0 < _0x21c781['length'] - 0x1; _0x5092e0++) {
                    let _0x5ea7e4 = innoReplaceSpecialCaracters(_0x21c781[_0x5092e0][_0x5c7a1e(0x1c8)](',')[0x1]);
                    _0x13bce9[_0x5c7a1e(0x588)](_0x21c781[_0x5092e0][_0x5c7a1e(0x1c8)](',')[0x0], _0x5ea7e4);
                }
                for (let _0x5cbaeb = 0x0; _0x5cbaeb < _0x232cfd[_0x5c7a1e(0x5d6)] - 0x1; _0x5cbaeb++) {
                    let _0x1df156 = innoReplaceSpecialCaracters(_0x232cfd[_0x5cbaeb]['split'](',')[0x1]),
                        _0xa02bb6 = _0x13bce9['get'](_0x232cfd[_0x5cbaeb][_0x5c7a1e(0x1c8)](',')[0x2]) == undefined ? _0x5c7a1e(0x2ea) : _0x13bce9[_0x5c7a1e(0x18a)](_0x232cfd[_0x5cbaeb][_0x5c7a1e(0x1c8)](',')[0x2]);
                    _0x11dc08['set'](_0x232cfd[_0x5cbaeb][_0x5c7a1e(0x1c8)](',')[0x0], {
                        'allyId': _0x232cfd[_0x5cbaeb]['split'](',')[0x2],
                        'playerName': _0x1df156,
                        'tribeName': _0xa02bb6
                    });
                }
                for (let _0xab5625 = 0x0; _0xab5625 < _0x571d86['length']; _0xab5625++) {
                    _0x11dc08[_0x5c7a1e(0x18a)](_0x571d86[_0xab5625][_0x5c7a1e(0x1c8)](',')[0x4]) != undefined && _0x525ab5[_0x5c7a1e(0x588)](_0x571d86[_0xab5625][_0x5c7a1e(0x1c8)](',')[0x2] + '|' + _0x571d86[_0xab5625]['split'](',')[0x3], {
                        'villageId': _0x571d86[_0xab5625][_0x5c7a1e(0x1c8)](',')[0x0],
                        'playerId': _0x571d86[_0xab5625][_0x5c7a1e(0x1c8)](',')[0x4],
                        'points': _0x571d86[_0xab5625]['split'](',')[0x5],
                        'allyId': _0x11dc08[_0x5c7a1e(0x18a)](_0x571d86[_0xab5625][_0x5c7a1e(0x1c8)](',')[0x4])[_0x5c7a1e(0x1dc)],
                        'playerName': _0x11dc08[_0x5c7a1e(0x18a)](_0x571d86[_0xab5625][_0x5c7a1e(0x1c8)](',')[0x4])['playerName'],
                        'tribeName': _0x11dc08[_0x5c7a1e(0x18a)](_0x571d86[_0xab5625][_0x5c7a1e(0x1c8)](',')[0x4])[_0x5c7a1e(0x1ac)]
                    });
                }
                _0x1c9b07[_0x5c7a1e(0x52d)] = _0x459d53, _0x1c9b07['data'] = Array['from'](_0x525ab5[_0x5c7a1e(0x434)]());
                let _0x364e6e = JSON[_0x5c7a1e(0x199)](_0x1c9b07);
                _0x364e6e = replaceSpecialCaracters(_0x364e6e), await localBase[_0x5c7a1e(0x1d4)](_0x159b93, _0x364e6e), console[_0x5c7a1e(0x533)](_0x5c7a1e(0x207));
            } else console['log'](_0x5c7a1e(0x13a));
        }
        _0x90e9ed(_0x525ab5);
    });
}

function innoReplaceSpecialCaracters(_0x5428a4) {
    const _0x2e0fd6 = _0x555ef8;
    try {
        return decodeURIComponent(_0x5428a4)[_0x2e0fd6(0x632)](/\+/g, '\x20');
    } catch (_0x122bf2) {
        return console[_0x2e0fd6(0x395)](_0x122bf2, _0x5428a4), _0x5428a4;
    }
}

function replaceSpecialCaracters(_0x1aafb6) {
    const _0x3dfcd6 = _0x555ef8;
    let _0x2bf63f = '';
    for (let _0x5b1a7a = 0x0; _0x5b1a7a < _0x1aafb6[_0x3dfcd6(0x5d6)]; _0x5b1a7a++) {
        if (_0x1aafb6[_0x5b1a7a] == 'È›') _0x2bf63f += 't';
        else {
            if (_0x1aafb6[_0x5b1a7a] == 'Å£') _0x2bf63f += 't';
            else {
                if (_0x1aafb6[_0x5b1a7a] == 'Èš') _0x2bf63f += 'T';
                else {
                    if (_0x1aafb6[_0x5b1a7a] == 'Ä‚') _0x2bf63f += 'A';
                    else {
                        if (_0x1aafb6[_0x5b1a7a] == 'Äƒ') _0x2bf63f += 'a';
                        else {
                            if (_0x1aafb6[_0x5b1a7a] == 'Ã‚') _0x2bf63f += 'A';
                            else {
                                if (_0x1aafb6[_0x5b1a7a] == 'È˜') _0x2bf63f += 'S';
                                else {
                                    if (_0x1aafb6[_0x5b1a7a] == 'È™') _0x2bf63f += 's';
                                    else {
                                        if (_0x1aafb6[_0x5b1a7a] == 'ÃŽ') _0x2bf63f += 'I';
                                        else {
                                            if (_0x1aafb6[_0x5b1a7a] == 'Ã®') _0x2bf63f += 'i';
                                            else _0x2bf63f += _0x1aafb6[_0x5b1a7a];
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return _0x2bf63f;
}

function insertlibraryLocalBase() {
    return new Promise((_0x2c5c5c, _0x2d6a63) => {
        const _0x423a1d = _0x2f7d;
        let _0x4ba769 = new Date()[_0x423a1d(0x505)](),
            _0x2f155c = document[_0x423a1d(0x4ee)]('script');
        _0x2f155c[_0x423a1d(0x15c)] = 'text/javascript', _0x2f155c['src'] = _0x423a1d(0x5a4), _0x2f155c[_0x423a1d(0x500)] = function() {
            const _0x1d4c77 = _0x423a1d;
            let _0x595707 = new Date()[_0x1d4c77(0x505)]();
            console[_0x1d4c77(0x533)]('insert\x20idb\x20library\x20in\x20' + (_0x595707 - _0x4ba769) + _0x1d4c77(0x40c)), _0x2c5c5c(_0x1d4c77(0x4fa));
        }, document[_0x423a1d(0x14f)]('head')[0x0]['appendChild'](_0x2f155c);
    });
}

function getCommandsGoing() {
    return new Promise((_0x5849a9, _0x68c002) => {
        const _0x2a1a5b = _0x2f7d;
        let _0x3c8744 = game_data['link_base_pure'] + _0x2a1a5b(0x459),
            _0x3c1230 = httpGet(_0x3c8744);
        const _0x25032b = new DOMParser(),
            _0x362102 = _0x25032b[_0x2a1a5b(0x32e)](_0x3c1230, _0x2a1a5b(0x2d4));
        let _0x5e63cd = [];
        var _0x496cad = new Map(),
            _0x2c77c1 = new Map();
        if (_0x362102[_0x2a1a5b(0x612)]('vis')[0x1][_0x2a1a5b(0x14f)](_0x2a1a5b(0x5c4))[_0x2a1a5b(0x5d6)] > 0x0) Array[_0x2a1a5b(0x2e2)](_0x362102[_0x2a1a5b(0x612)]('vis')[0x1][_0x2a1a5b(0x14f)]('select')[0x0])[_0x2a1a5b(0x432)](function(_0x47b8df) {
            const _0x19c632 = _0x2a1a5b;
            _0x5e63cd[_0x19c632(0x1fa)](_0x47b8df[_0x19c632(0x492)]);
        }), _0x5e63cd['pop']();
        else {
            if (_0x362102['getElementsByClassName'](_0x2a1a5b(0x13b))[_0x2a1a5b(0x5d6)] > 0x0) {
                let _0xbcaa80 = 0x0;
                Array[_0x2a1a5b(0x2e2)](_0x362102[_0x2a1a5b(0x612)](_0x2a1a5b(0x13b)))['forEach'](function(_0x8847f5) {
                    const _0x216d93 = _0x2a1a5b;
                    let _0x4dbac2 = _0x8847f5[_0x216d93(0x148)];
                    _0x4dbac2 = _0x4dbac2[_0x216d93(0x1c8)](_0x216d93(0x56b))[0x0] + _0x216d93(0x56b) + _0xbcaa80, _0xbcaa80++, _0x5e63cd['push'](_0x4dbac2);
                });
            } else _0x5e63cd[_0x2a1a5b(0x1fa)](_0x3c8744);
        }
        _0x5e63cd = _0x5e63cd[_0x2a1a5b(0x560)](), console[_0x2a1a5b(0x533)](_0x5e63cd);

        function _0x1c47c2(_0x45dfa9) {
            const _0x439d6c = _0x2a1a5b;
            let _0x3bcddb;
            _0x45dfa9['length'] > 0x0 ? _0x3bcddb = _0x45dfa9[_0x439d6c(0x51a)]() : _0x3bcddb = _0x439d6c(0x5e1), _0x45dfa9['length'] >= 0x0 && _0x3bcddb != 'stop' ? $[_0x439d6c(0x53b)]({
                'url': _0x3bcddb,
                'method': _0x439d6c(0x18a),
                'success': _0x10f572 => {
                    const _0x2df90f = _0x439d6c,
                        _0x4c380e = new DOMParser(),
                        _0xf9cf8e = _0x4c380e[_0x2df90f(0x32e)](_0x10f572, _0x2df90f(0x2d4));
                    if (_0xf9cf8e[_0x2df90f(0x36b)](_0x2df90f(0x2e5)) == null) _0x5849a9(_0x496cad);
                    else {
                        var _0x1872de = _0xf9cf8e[_0x2df90f(0x36b)](_0x2df90f(0x2e5))[_0x2df90f(0x14f)](_0x2df90f(0x58a))[0x0][_0x2df90f(0x3c5)];
                        for (let _0x2814d2 = 0x1; _0x2814d2 < _0x1872de['length'] - 0x1; _0x2814d2++) {
                            if (_0x1872de[_0x2814d2]['children'][0x0][_0x2df90f(0x5ad)][_0x2df90f(0x538)](/\d+\|\d+/) != null) {
                                let _0x2815b3 = _0x1872de[_0x2814d2]['getElementsByClassName'](_0x2df90f(0x278))[0x0][_0x2df90f(0x188)](_0x2df90f(0x461)),
                                    _0x2435fd = _0x1872de[_0x2814d2][_0x2df90f(0x612)](_0x2df90f(0x403))[0x0][_0x2df90f(0x5ad)]['match'](/\d+\|\d+/)[0x0],
                                    _0x538bb9 = _0x1872de[_0x2814d2][_0x2df90f(0x3c5)][0x1][_0x2df90f(0x5ad)][_0x2df90f(0x538)](/\d+\|\d+/)[0x0],
                                    _0x51efde = _0x1872de[_0x2814d2]['children'][0x1][_0x2df90f(0x14f)]('a')[0x0][_0x2df90f(0x148)]['split'](_0x2df90f(0x4c8))[0x1],
                                    _0x387297 = getLandTime(_0x1872de[_0x2814d2][_0x2df90f(0x3c5)][0x2]['innerText']),
                                    _0x29763f = {},
                                    _0x42a991 = game_data[_0x2df90f(0x1a4)]['name'],
                                    _0x56045c = game_data[_0x2df90f(0x1a4)]['id'][_0x2df90f(0x29a)]();
                                Array[_0x2df90f(0x2e2)](_0x1872de[_0x2814d2][_0x2df90f(0x612)](_0x2df90f(0x534)))[_0x2df90f(0x432)]((_0xb01a23, _0x28e46c) => {
                                    const _0x5e09db = _0x2df90f;
                                    _0x29763f[game_data[_0x5e09db(0x4b3)][_0x28e46c]] = parseInt(_0xb01a23[_0x5e09db(0x5ad)]);
                                });
                                let _0x297970 = _0x1872de[_0x2814d2]['getElementsByTagName']('img')[0x0][_0x2df90f(0x1a8)][_0x2df90f(0x1c8)](_0x2df90f(0x5de))[0x1];
                                if (_0x297970['includes'](_0x2df90f(0x628))) delete _0x29763f['snob'], _0x496cad[_0x2df90f(0x588)](_0x2815b3, {
                                    'coord_destination': _0x2435fd,
                                    'coord_origin': _0x538bb9,
                                    'landing_time': _0x387297,
                                    'troops': _0x29763f,
                                    'player_origin_name': _0x42a991,
                                    'player_origin_id': _0x56045c,
                                    'commandId': _0x2815b3,
                                    'coord_origin_id': _0x51efde,
                                    'type_attack': _0x297970,
                                    'labelName': _0x2df90f(0x2ea)
                                });
                                else {
                                    if (_0x297970 == _0x2df90f(0x21f) || _0x297970 == 'attack_medium.png' || _0x297970 == _0x2df90f(0x2f9)) {
                                        let _0x331e7e = _0xf9cf8e[_0x2df90f(0x36b)](_0x2df90f(0x4d8))[_0x2df90f(0x5ad)],
                                            _0x1849ab = _0xf9cf8e[_0x2df90f(0x36b)](_0x2df90f(0x239))[_0x2df90f(0x5ad)][_0x2df90f(0x1c8)]('/');
                                        _0x1849ab = _0x1849ab[0x1] + '/' + _0x1849ab[0x0] + '/' + _0x1849ab[0x2];
                                        let _0x3852bf = new Date(_0x1849ab + '\x20' + _0x331e7e);
                                        _0x3852bf[_0x2df90f(0x414)](_0x3852bf[_0x2df90f(0x637)]() + 0x7), _0x2c77c1['set'](_0x2815b3, {
                                            'coord_destination': _0x2435fd,
                                            'coord_origin': _0x538bb9,
                                            'landing_time': _0x387297,
                                            'troops': _0x29763f,
                                            'player_origin_name': _0x42a991,
                                            'player_origin_id': _0x56045c,
                                            'commandId': _0x2815b3,
                                            'coord_origin_id': _0x51efde,
                                            'type_attack': _0x297970,
                                            'labelName': 'none',
                                            'uploadTime': _0x3852bf[_0x2df90f(0x505)]()
                                        });
                                    }
                                }
                            }
                        }
                        UI['SuccessMessage'](_0x2df90f(0x353) + _0x45dfa9[_0x2df90f(0x5d6)]), window[_0x2df90f(0x5c9)](function() {
                            _0x1c47c2(_0x5e63cd);
                        }, 0xc8);
                    }
                }
            }) : (UI[_0x439d6c(0x5ea)](_0x439d6c(0x488)), _0x5849a9([_0x496cad, _0x2c77c1]));
        }
        _0x1c47c2(_0x5e63cd);
    });
}

function getSupportsAndAttacks() {
    return new Promise((_0xdc622f, _0x350811) => {
        const _0x10839b = _0x2f7d;
        if ($('[id=\x22incomings_amount\x22]:visible')[_0x10839b(0x5d6)] == 0x0 && $('[id=\x22supports_amount\x22]:visible')['length'] == 0x0) _0xdc622f({
            'map_outgoing_support': new Map(),
            'map_exist_support': new Map()
        });
        else {
            if (document[_0x10839b(0x612)](_0x10839b(0x317))[_0x10839b(0x5d6)] > 0x0) $(_0x10839b(0x3aa))[_0x10839b(0x501)]();
            var _0x1449d4 = window[_0x10839b(0x185)][_0x10839b(0x148)];
            let _0x1ca657 = game_data[_0x10839b(0x2bc)] + _0x10839b(0x1fc),
                _0x1f9572 = httpGet(_0x1ca657);
            const _0x3c4006 = new DOMParser(),
                _0x5d539c = _0x3c4006['parseFromString'](_0x1f9572, 'text/html');
            _0x5d539c[_0x10839b(0x612)]('overview_filters_delete')[_0x10839b(0x5d6)] > 0x0 && _0x350811(_0x10839b(0x3fc));
            let _0x20fabb = [];
            if (_0x5d539c[_0x10839b(0x612)](_0x10839b(0x372))[0x1][_0x10839b(0x14f)](_0x10839b(0x5c4))[_0x10839b(0x5d6)] > 0x0) Array[_0x10839b(0x2e2)](_0x5d539c['getElementsByClassName'](_0x10839b(0x372))[0x1][_0x10839b(0x14f)]('select')[0x0]['options'])[_0x10839b(0x432)](_0x338db3 => {
                const _0x4dc922 = _0x10839b;
                _0x20fabb[_0x4dc922(0x1fa)]({
                    'href': _0x338db3[_0x4dc922(0x492)],
                    'unignored': !![]
                });
            }), _0x20fabb[_0x10839b(0x51a)]();
            else {
                if (_0x5d539c[_0x10839b(0x612)](_0x10839b(0x13b))[_0x10839b(0x5d6)] > 0x0) {
                    let _0xfdc80c = Array[_0x10839b(0x2e2)](_0x5d539c[_0x10839b(0x612)](_0x10839b(0x13b)));
                    for (let _0x1d8302 = 0x0; _0x1d8302 < _0xfdc80c['length']; _0x1d8302++) _0x20fabb[_0x10839b(0x1fa)]({
                        'href': _0xfdc80c[_0x1d8302][_0x10839b(0x188)](_0x10839b(0x148)),
                        'unignored': !![]
                    });
                } else _0x5d539c[_0x10839b(0x36b)](_0x10839b(0x646)) != null && _0x20fabb[_0x10839b(0x1fa)]({
                    'href': _0x1ca657,
                    'unignored': !![]
                });
            }
            _0x1ca657 = game_data[_0x10839b(0x2bc)] + 'overview_villages&mode=incomings&type=ignored&subtype=all&group=0&page=-1', console[_0x10839b(0x533)]('currentLink'), console[_0x10839b(0x533)](_0x1ca657);
            let _0x1d8827 = httpGet(_0x1ca657);
            const _0x5187d8 = new DOMParser(),
                _0x50e108 = _0x5187d8['parseFromString'](_0x1d8827, _0x10839b(0x2d4));
            if (_0x50e108[_0x10839b(0x612)](_0x10839b(0x372))[0x1][_0x10839b(0x14f)](_0x10839b(0x5c4))[_0x10839b(0x5d6)] > 0x0) Array['from'](_0x50e108[_0x10839b(0x612)]('vis')[0x1]['getElementsByTagName'](_0x10839b(0x5c4))[0x0][_0x10839b(0x3a6)])[_0x10839b(0x432)](_0x24a482 => {
                const _0xc2775f = _0x10839b;
                _0x20fabb['push']({
                    'href': _0x24a482[_0xc2775f(0x492)],
                    'unignored': ![]
                });
            }), _0x20fabb['pop']();
            else {
                if (_0x50e108[_0x10839b(0x612)]('paged-nav-item')[_0x10839b(0x5d6)] > 0x0) {
                    let _0x4b5630 = Array['from'](_0x50e108['getElementsByClassName'](_0x10839b(0x13b)));
                    for (let _0x201c98 = 0x0; _0x201c98 < _0x4b5630['length']; _0x201c98++) _0x20fabb[_0x10839b(0x1fa)]({
                        'href': _0x4b5630[_0x201c98][_0x10839b(0x188)](_0x10839b(0x148)),
                        'unignored': ![]
                    });
                } else _0x50e108[_0x10839b(0x36b)](_0x10839b(0x646)) != null && _0x20fabb[_0x10839b(0x1fa)]({
                    'href': _0x1ca657,
                    'unignored': ![]
                });
            }
            console[_0x10839b(0x533)](_0x20fabb);
            var _0x4e3c5a = 0x1,
                _0x2ef805 = _0x20fabb[_0x10839b(0x5d6)],
                _0x5b78b6 = new Map(),
                _0x1fdfc5 = [],
                _0x4b7179 = localStorage[_0x10839b(0x520)](game_data[_0x10839b(0x429)] + _0x10839b(0x3f6));
            if (_0x4b7179 != undefined) _0x4b7179 = new Map(JSON[_0x10839b(0x1a6)](_0x4b7179));
            else _0x4b7179 = new Map();

            function _0x633c26(_0x3baf92) {
                const _0x534199 = _0x10839b;
                let _0x3b5bd1, _0x129b4e;
                var _0x23b2e4 = 0x0;
                if (_0x3baf92[_0x534199(0x5d6)] > 0x0) {
                    let _0xc7f18d = _0x3baf92['pop']();
                    _0x3b5bd1 = _0xc7f18d[_0x534199(0x148)], _0x129b4e = _0xc7f18d['unignored'];
                } else _0x3b5bd1 = 'stop';
                console[_0x534199(0x533)](_0x534199(0x428) + _0x3baf92[_0x534199(0x5d6)]);
                if (_0x3baf92['length'] >= 0x0 && _0x3b5bd1 != _0x534199(0x5e1)) {
                    var _0x35fea8 = new Date();
                    $[_0x534199(0x53b)]({
                        'url': _0x3b5bd1,
                        'method': 'get',
                        'success': _0x5e1e03 => {
                            const _0x330082 = _0x534199,
                                _0x658d65 = new DOMParser(),
                                _0x3910cd = _0x658d65['parseFromString'](_0x5e1e03, 'text/html');
                            if (_0x3910cd[_0x330082(0x36b)](_0x330082(0x646)) == null) alert('turn\x20off\x20the\x20filters');
                            let _0xa796b1 = _0x3910cd[_0x330082(0x36b)]('incomings_table')[_0x330082(0x14f)]('tbody')[0x0][_0x330082(0x3c5)];
                            for (let _0x44a248 = 0x1; _0x44a248 < _0xa796b1[_0x330082(0x5d6)] - 0x1; _0x44a248++) {
                                if (_0xa796b1[_0x44a248][_0x330082(0x3c5)][0x0][_0x330082(0x5ad)] != '--') {
                                    let _0x5734fd = _0xa796b1[_0x44a248]['getElementsByClassName'](_0x330082(0x3d6))[0x0][_0x330082(0x188)]('data-id');
                                    _0x1fdfc5['push'](_0x5734fd);
                                    let _0x19a92b = _0xa796b1[_0x44a248][_0x330082(0x3c5)][0x1]['innerText'][_0x330082(0x538)](/\d+\|\d+/)[0x0],
                                        _0x46c603 = _0xa796b1[_0x44a248]['children'][0x2][_0x330082(0x5ad)][_0x330082(0x538)](/\d+\|\d+/)[0x0],
                                        _0x36d22b = _0xa796b1[_0x44a248]['children'][0x2][_0x330082(0x14f)]('a')[0x0]['href'][_0x330082(0x1c8)]('id=')[0x1],
                                        _0x51f921 = _0xa796b1[_0x44a248][_0x330082(0x3c5)][_0x330082(0x5d6)],
                                        _0x274331 = getLandTime(_0xa796b1[_0x44a248][_0x330082(0x3c5)][_0x51f921 - 0x2]['innerText']),
                                        _0x4ecf27 = {},
                                        _0x4a7b88 = _0xa796b1[_0x44a248][_0x330082(0x3c5)][_0x51f921 - 0x4][_0x330082(0x5ad)][_0x330082(0x26b)](),
                                        _0x40fe9a = _0xa796b1[_0x44a248][_0x330082(0x3c5)][_0x51f921 - 0x4][_0x330082(0x14f)]('a')[0x0][_0x330082(0x148)][_0x330082(0x1c8)](_0x330082(0x4c8))[0x1],
                                        _0x10a895 = _0x330082(0x2ea),
                                        _0x4c2b3a = _0xa796b1[_0x44a248]['getElementsByClassName'](_0x330082(0x3d6))[0x0][_0x330082(0x14f)](_0x330082(0x183))[0x0][_0x330082(0x1a8)][_0x330082(0x1c8)]('command/')[0x1];
                                    if (_0xa796b1[_0x44a248][_0x330082(0x3c5)][0x0][_0x330082(0x14f)]('img')[_0x330082(0x5d6)] == 0x2) {
                                        _0x10a895 = _0xa796b1[_0x44a248]['getElementsByClassName'](_0x330082(0x3d6))[0x0][_0x330082(0x14f)](_0x330082(0x183))[0x1]['src'][_0x330082(0x1c8)]('tiny/')[0x1];
                                        if (_0x10a895 == undefined) _0x10a895 = _0xa796b1[_0x44a248][_0x330082(0x612)]('quickedit')[0x0][_0x330082(0x14f)](_0x330082(0x183))[0x1][_0x330082(0x1a8)][_0x330082(0x1c8)]('command/')[0x1];
                                    }
                                    if (_0x4b7179[_0x330082(0x4d7)](_0x5734fd)) {
                                        if (_0x4b7179[_0x330082(0x18a)](_0x5734fd) != _0x129b4e) _0x4b7179[_0x330082(0x152)](_0x5734fd);
                                    }
                                    if (!_0x4b7179[_0x330082(0x4d7)](_0x5734fd)) {
                                        if (!_0x5b78b6[_0x330082(0x4d7)](_0x19a92b)) _0x5b78b6[_0x330082(0x588)](_0x19a92b, [{
                                            'coord_destination': _0x19a92b,
                                            'coord_origin': _0x46c603,
                                            'landing_time': _0x274331,
                                            'troops': _0x4ecf27,
                                            'player_origin_name': _0x4a7b88,
                                            'player_origin_id': _0x40fe9a,
                                            'type_attack': _0x4c2b3a,
                                            'commandId': _0x5734fd,
                                            'labelName': _0x10a895,
                                            'coord_origin_id': _0x36d22b,
                                            'unignored': _0x129b4e
                                        }]);
                                        else {
                                            let _0xe2a811 = _0x5b78b6[_0x330082(0x18a)](_0x19a92b);
                                            _0xe2a811[_0x330082(0x1fa)]({
                                                'coord_destination': _0x19a92b,
                                                'coord_origin': _0x46c603,
                                                'landing_time': _0x274331,
                                                'troops': _0x4ecf27,
                                                'player_origin_name': _0x4a7b88,
                                                'player_origin_id': _0x40fe9a,
                                                'type_attack': _0x4c2b3a,
                                                'commandId': _0x5734fd,
                                                'labelName': _0x10a895,
                                                'coord_origin_id': _0x36d22b,
                                                'unignored': _0x129b4e
                                            }), _0x5b78b6[_0x330082(0x588)](_0x19a92b, _0xe2a811);
                                        }
                                        _0x4b7179[_0x330082(0x588)](_0x5734fd, {
                                            'unignored': _0x129b4e,
                                            'playerId': game_data[_0x330082(0x1a4)]['id'][_0x330082(0x29a)]()
                                        });
                                    }
                                }
                            }
                            UI[_0x330082(0x5ea)](_0x4e3c5a + '/' + _0x2ef805), _0x4e3c5a++;
                            var _0x407f62 = new Date(),
                                _0x4be351 = _0x407f62[_0x330082(0x505)]() - _0x35fea8['getTime']();
                            console['log'](_0x330082(0x3ca) + _0x4be351), window[_0x330082(0x5c9)](function() {
                                _0x633c26(_0x20fabb);
                            }, 0xc8 - _0x4be351);
                        }
                    });
                } else {
                    if (_0x5d539c['getElementById'](_0x534199(0x646)) != null) {}
                    if (_0x5d539c['getElementsByClassName'](_0x534199(0x365))['length'] > 0x0) {
                        console[_0x534199(0x533)](_0x534199(0x248)), UI[_0x534199(0x211)]('recapthca,\x20upload\x20again'), _0xdc622f(_0x534199(0x5d2));
                        throw new Error(_0x534199(0x5d2));
                    }
                    window[_0x534199(0x5c9)](function() {
                        const _0x4580e9 = _0x534199;
                        Array[_0x4580e9(0x2e2)](_0x4b7179[_0x4580e9(0x2f0)]())[_0x4580e9(0x432)](_0x64e61b => {
                            const _0xc3c40d = _0x4580e9;
                            !_0x1fdfc5[_0xc3c40d(0x25b)](_0x64e61b) && (_0x4b7179[_0xc3c40d(0x152)](_0x64e61b), console[_0xc3c40d(0x533)](_0xc3c40d(0x506) + _0x64e61b));
                        }), _0xdc622f({
                            'map_outgoing_support': _0x5b78b6,
                            'map_exist_support': _0x4b7179
                        });
                    }, 0xc8);
                }
            }
            if (_0x20fabb[_0x10839b(0x5d6)] > 0x0) _0x633c26(_0x20fabb);
            else _0x350811(_0x10839b(0x1ad));
        }
    });
}
async function getCommandsSharing() {
    return new Promise(async (_0xc80178, _0x51e547) => {
        const _0x5df470 = _0x2f7d;
        let _0x4e3f4e = JSON['parse'](localStorage[_0x5df470(0x520)](game_data[_0x5df470(0x429)] + _0x5df470(0x333))),
            _0x2afd4d = null;
        _0x4e3f4e && (Math['abs'](new Date(_0x4e3f4e[_0x5df470(0x4ed)])[_0x5df470(0x505)]() - new Date()[_0x5df470(0x505)]()) > 0x30 * 0xe10 * 0x3e8 && (_0x2afd4d = new Map(_0x4e3f4e['mapResult'])));
        if (_0x2afd4d == null) {
            let _0x357e12 = game_data[_0x5df470(0x2bc)] + _0x5df470(0x615),
                _0x4db465 = await ajaxGet(_0x357e12);
            const _0x145c03 = new DOMParser(),
                _0x305b50 = _0x145c03[_0x5df470(0x32e)](_0x4db465, 'text/html');
            _0x2afd4d = new Map(), Array[_0x5df470(0x2e2)]($(_0x305b50)['find'](_0x5df470(0x229)))['forEach'](_0xd0de57 => {
                const _0x13df05 = _0x5df470;
                let _0x50682c = _0xd0de57[_0x13df05(0x14f)]('td');
                if (_0x50682c[_0x13df05(0x5d6)] > 0x0) {
                    let _0x3f933a = _0x50682c[0x0][_0x13df05(0x5ad)],
                        _0x1d1b2f = _0x50682c[0x2][_0x13df05(0x14f)]('input')[0x0][_0x13df05(0x38c)] == !![] ? !![] : ![],
                        _0x5a9b9b = ![];
                    _0x50682c[0x2][_0x13df05(0x14f)](_0x13df05(0x183))['length'] > 0x0 && (_0x50682c[0x2]['getElementsByTagName']('img')[0x0]['src'][_0x13df05(0x25b)](_0x13df05(0x4f4)) && (_0x5a9b9b = !![])), _0x1d1b2f == !![] && _0x5a9b9b == !![] && _0x2afd4d[_0x13df05(0x588)](_0x3f933a, !![]);
                }
            });
            let _0x43778e = Array[_0x5df470(0x2e2)](_0x2afd4d[_0x5df470(0x434)]());
            localStorage['setItem'](game_data[_0x5df470(0x429)] + _0x5df470(0x333), JSON[_0x5df470(0x199)]({
                'mapResult': _0x43778e,
                'timestamp': new Date()
            }));
        }
        _0xc80178(_0x2afd4d);
    });
}
async function uploadSupports() {
    const _0x5da8a8 = _0x555ef8;
    document['getElementById']('progress_support')[_0x5da8a8(0x5ad)] = _0x5da8a8(0x1d3);
    var _0xa344e8 = await getCommandsSharing(),
        [_0x4eca13, _0x2bf9a3, _0x5da6b3, _0x3a4518] = await Promise[_0x5da8a8(0x3b6)]([getInfoVillages(), readFileDropbox(filename_support), readFileDropbox(filename_commands_attack), readFileDropbox(filename_status_upload)])[_0x5da8a8(0x198)](_0x294189 => {
            alert(_0x294189);
        });
    let _0x2f3b7a = await Promise[_0x5da8a8(0x3b6)](commandsAttacksPromises)['catch'](_0x42d88b => {
            alert(_0x42d88b);
        }),
        _0x6a603c = await Promise[_0x5da8a8(0x3b6)](supportPromises)['catch'](_0x3a3f72 => {
            alert(_0x3a3f72);
        });
    var _0x52cde1 = await getCommandsGoing()[_0x5da8a8(0x198)](_0x1ea82d => {
            alert(_0x1ea82d);
            throw _0x1ea82d;
        }),
        _0x44ec9c = _0x52cde1[0x0],
        _0x47bf41 = _0x52cde1[0x1];
    let _0xa3f6aa, _0x19fdf6;
    try {
        let _0x102f7d = await decompress(await _0x2bf9a3[_0x5da8a8(0x4a5)](), _0x5da8a8(0x59f));
        _0xa3f6aa = new Map(JSON['parse'](_0x102f7d)[0x0]), _0x19fdf6 = new Map(JSON[_0x5da8a8(0x1a6)](_0x102f7d)[0x1]);
    } catch (_0x4ed431) {
        console[_0x5da8a8(0x533)](_0x5da8a8(0x2ba)), _0xa3f6aa = new Map(), _0x19fdf6 = new Map();
    }
    for (let _0xbb94d7 = 0x0; _0xbb94d7 < _0x6a603c[_0x5da8a8(0x5d6)]; _0xbb94d7++) {
        let _0x42f60b = await decompress(await _0x6a603c[_0xbb94d7][_0x5da8a8(0x4a5)](), _0x5da8a8(0x59f));
        if (_0x42f60b != '[]') {
            let _0x49def7 = new Map(JSON[_0x5da8a8(0x1a6)](_0x42f60b)[0x0]),
                _0x517b09 = new Map(JSON[_0x5da8a8(0x1a6)](_0x42f60b)[0x1]);
            _0xa3f6aa = new Map([..._0xa3f6aa, ..._0x49def7]), _0x19fdf6 = new Map([..._0x19fdf6, ..._0x517b09]);
        }
        let _0x4e0b01 = databaseName + '/Support' + _0xbb94d7 + _0x5da8a8(0x586);
        if (await localBase[_0x5da8a8(0x520)](_0x4e0b01) != undefined) try {
            let _0x52e2f0 = base64ToBlob(await localBase['getItem'](_0x4e0b01)),
                _0x1b36a8 = await decompress(await _0x52e2f0[_0x5da8a8(0x4a5)](), _0x5da8a8(0x59f)),
                _0x2fa6c8 = new Map(JSON[_0x5da8a8(0x1a6)](_0x1b36a8));
            _0xa3f6aa = new Map([..._0x2fa6c8, ..._0xa3f6aa]);
        } catch (_0x42095d) {}
        _0x4e0b01 = databaseName + _0x5da8a8(0x526) + _0xbb94d7 + '.txtHome';
        if (await localBase['getItem'](_0x4e0b01) != undefined) try {
            let _0x1fcde9 = base64ToBlob(await localBase[_0x5da8a8(0x520)](_0x4e0b01)),
                _0x28299c = await decompress(await _0x1fcde9[_0x5da8a8(0x4a5)](), _0x5da8a8(0x59f)),
                _0x816b13 = new Map(JSON[_0x5da8a8(0x1a6)](_0x28299c));
            _0x19fdf6 = new Map([..._0x816b13, ..._0x19fdf6]);
        } catch (_0x1875c9) {}
    }
    if (await localBase['getItem'](game_data[_0x5da8a8(0x429)] + _0x5da8a8(0x3cc)) != undefined) try {
        let _0x328869 = base64ToBlob(await localBase[_0x5da8a8(0x520)](game_data['world'] + 'map_support_dropbox')),
            _0x12287b = await decompress(await _0x328869['arrayBuffer'](), 'gzip'),
            _0x4d9fb3 = new Map(JSON[_0x5da8a8(0x1a6)](_0x12287b));
        _0xa3f6aa = new Map([..._0x4d9fb3, ..._0xa3f6aa]);
    } catch (_0x46310e) {
        let _0x3ae357 = new Map(JSON[_0x5da8a8(0x1a6)](lzw_decode(await localBase[_0x5da8a8(0x520)](game_data[_0x5da8a8(0x429)] + 'map_support_dropbox'))));
        _0xa3f6aa = new Map([..._0x3ae357, ..._0xa3f6aa]);
    }
    if (await localBase[_0x5da8a8(0x520)](game_data[_0x5da8a8(0x429)] + 'map_troops_home_dropbox') != undefined) try {
        let _0x157e1e = base64ToBlob(await localBase[_0x5da8a8(0x520)](game_data[_0x5da8a8(0x429)] + _0x5da8a8(0x274))),
            _0x19d8a7 = await decompress(await _0x157e1e[_0x5da8a8(0x4a5)](), _0x5da8a8(0x59f)),
            _0x4fe419 = new Map(JSON[_0x5da8a8(0x1a6)](_0x19d8a7));
        _0x19fdf6 = new Map([..._0x4fe419, ..._0x19fdf6]);
    } catch (_0x1a73c2) {
        let _0xf07cd2 = new Map(JSON[_0x5da8a8(0x1a6)](lzw_decode(await localBase[_0x5da8a8(0x520)](game_data['world'] + 'map_troops_home_dropbox'))));
        _0x19fdf6 = new Map([..._0xf07cd2, ..._0x19fdf6]);
    }
    try {
        let _0x31a52d = await decompress(await _0x3a4518[_0x5da8a8(0x4a5)](), _0x5da8a8(0x59f));
        _0x3a4518 = new Map(JSON[_0x5da8a8(0x1a6)](_0x31a52d));
    } catch (_0x40323d) {
        console['log'](_0x5da8a8(0x265)), _0x3a4518 = new Map();
    }
    let _0x86b71b = new Map();
    Array['from'](_0xa3f6aa['keys']())[_0x5da8a8(0x432)](_0x10f0a0 => {
        const _0x2a1691 = _0x5da8a8;
        let _0x15e6e0 = _0xa3f6aa[_0x2a1691(0x18a)](_0x10f0a0);
        for (let _0x2e148d = 0x0; _0x2e148d < _0x15e6e0['length']; _0x2e148d++) {
            _0x15e6e0[_0x2e148d][_0x2a1691(0x64c)][_0x2a1691(0x25b)]('support') && _0x86b71b[_0x2a1691(0x588)](_0x15e6e0[_0x2e148d]['commandId'], _0x15e6e0[_0x2e148d][_0x2a1691(0x442)]);
        }
    });
    var _0x51dd98 = await getSupportsAndAttacks()[_0x5da8a8(0x198)](_0x2ae14e => {
            alert(_0x2ae14e);
            throw _0x2ae14e;
        }),
        _0x69cd7f = _0x51dd98[_0x5da8a8(0x5c3)],
        _0x4da59f = new Map(),
        _0x10f321 = Array['from'](_0x69cd7f[_0x5da8a8(0x2f0)]());
    let _0x48ae55 = new Date()[_0x5da8a8(0x505)]();
    const _0x2ba0d5 = async () => {
        const _0x52dd88 = _0x5da8a8;
        console[_0x52dd88(0x533)](_0x52dd88(0x551));
        for (let _0x1fdb0c = 0x0; _0x1fdb0c < _0x10f321[_0x52dd88(0x5d6)]; _0x1fdb0c++) {
            let _0x208e5b = _0x69cd7f[_0x52dd88(0x18a)](_0x10f321[_0x1fdb0c]);
            console[_0x52dd88(0x533)](_0x208e5b);
            for (let _0x55da67 = 0x0; _0x55da67 < _0x208e5b[_0x52dd88(0x5d6)]; _0x55da67++) {
                console['log'](_0x208e5b[_0x55da67][_0x52dd88(0x4c7)][_0x52dd88(0x26b)]());
                if (_0x208e5b[_0x55da67][_0x52dd88(0x64c)][_0x52dd88(0x25b)](_0x52dd88(0x628)) && !_0x86b71b[_0x52dd88(0x4d7)](_0x208e5b[_0x55da67][_0x52dd88(0x27c)]) && !_0x44ec9c[_0x52dd88(0x4d7)](_0x208e5b[_0x55da67]['commandId']) && _0xa344e8[_0x52dd88(0x4d7)](_0x208e5b[_0x55da67]['player_origin_name']['trim']())) {
                    let _0x1c44fa = await ajaxTroopsComing(_0x208e5b[_0x55da67][_0x52dd88(0x27c)]);
                    console[_0x52dd88(0x533)](_0x52dd88(0x380)), console[_0x52dd88(0x533)](_0x1c44fa), _0x208e5b[_0x55da67]['troops'] = _0x1c44fa, UI[_0x52dd88(0x5ea)]('info\x20coord:\x20' + (_0x10f321[_0x52dd88(0x5d6)] - _0x1fdb0c) + _0x52dd88(0x3f8) + (_0x208e5b['length'] - _0x55da67));
                } else {
                    if (_0x208e5b[_0x55da67]['type_attack'][_0x52dd88(0x25b)](_0x52dd88(0x628)) && _0x86b71b[_0x52dd88(0x4d7)](_0x208e5b[_0x55da67]['commandId'])) {
                        console[_0x52dd88(0x533)]('update\x20troops\x20coming');
                        let _0x5c517d = _0x86b71b[_0x52dd88(0x18a)](_0x208e5b[_0x55da67][_0x52dd88(0x27c)]);
                        _0x208e5b[_0x55da67][_0x52dd88(0x442)] = _0x5c517d;
                    } else {
                        if (_0x208e5b[_0x55da67][_0x52dd88(0x64c)][_0x52dd88(0x25b)](_0x52dd88(0x4aa))) try {
                            let _0x595fc4 = _0x4eca13[_0x52dd88(0x18a)](_0x208e5b[_0x55da67][_0x52dd88(0x3e7)])['villageId'];
                            if (!_0x4da59f[_0x52dd88(0x4d7)](_0x208e5b[_0x55da67][_0x52dd88(0x3e7)])) {
                                let _0x149974 = await ajaxTroopsStationed(_0x595fc4);
                                console[_0x52dd88(0x533)](_0x52dd88(0x204)), console[_0x52dd88(0x533)](_0x149974);
                                let _0x314bb = document[_0x52dd88(0x36b)]('serverTime')['innerText'],
                                    _0x19a044 = document[_0x52dd88(0x36b)](_0x52dd88(0x239))[_0x52dd88(0x5ad)][_0x52dd88(0x1c8)]('/');
                                _0x19a044 = _0x19a044[0x1] + '/' + _0x19a044[0x0] + '/' + _0x19a044[0x2];
                                let _0x21d066 = new Date(_0x19a044 + '\x20' + _0x314bb);
                                _0x21d066[_0x52dd88(0x414)](_0x21d066[_0x52dd88(0x637)]() + 0x7), _0x149974[_0x52dd88(0x175)] = _0x21d066[_0x52dd88(0x505)](), _0x4da59f[_0x52dd88(0x588)](_0x208e5b[_0x55da67][_0x52dd88(0x3e7)], _0x149974), UI[_0x52dd88(0x5ea)](_0x52dd88(0x316) + (_0x10f321[_0x52dd88(0x5d6)] - _0x1fdb0c) + _0x52dd88(0x16a) + (_0x208e5b['length'] - _0x55da67));
                            }
                        } catch (_0x4c7496) {
                            console[_0x52dd88(0x533)](_0x4c7496);
                        }
                    }
                }
            }
            _0x69cd7f[_0x52dd88(0x588)](_0x10f321[_0x1fdb0c], _0x208e5b);
        }
        console[_0x52dd88(0x533)](_0x52dd88(0x1cb));
    };
    await _0x2ba0d5();
    var _0x444664 = new Date()[_0x5da8a8(0x505)]();
    console['log']('time\x20get\x20troops\x20' + (_0x444664 - _0x48ae55)), console['log']('support\x20outgoing'), console[_0x5da8a8(0x533)](_0x44ec9c), console[_0x5da8a8(0x533)](_0x5da8a8(0x125)), console[_0x5da8a8(0x533)](_0x69cd7f), console['log'](_0x5da8a8(0x204)), console[_0x5da8a8(0x533)](_0x4da59f);
    _0x44ec9c != undefined && (Array[_0x5da8a8(0x2e2)](_0x44ec9c['keys']())['forEach'](_0x1866fa => {
        const _0xd2ce9b = _0x5da8a8;
        let _0x26c356 = _0x44ec9c['get'](_0x1866fa);
        if (_0x69cd7f[_0xd2ce9b(0x4d7)](_0x26c356[_0xd2ce9b(0x3e7)])) {
            let _0x56688b = _0x69cd7f['get'](_0x26c356[_0xd2ce9b(0x3e7)]);
            for (let _0xf38e82 = 0x0; _0xf38e82 < _0x56688b[_0xd2ce9b(0x5d6)]; _0xf38e82++) {
                if (_0x1866fa == _0x56688b[_0xf38e82][_0xd2ce9b(0x27c)]) {
                    _0x56688b[_0xf38e82][_0xd2ce9b(0x442)] = _0x26c356['troops'], _0x69cd7f['set'](_0x26c356[_0xd2ce9b(0x3e7)], _0x56688b);
                    break;
                }
            }
        } else _0x69cd7f['set'](_0x26c356[_0xd2ce9b(0x3e7)], [_0x26c356]);
    }), console[_0x5da8a8(0x533)](_0x5da8a8(0x40d)));
    let _0x18da61 = new Map();
    try {
        let _0x46d884 = await decompress(await _0x5da6b3[_0x5da8a8(0x4a5)](), _0x5da8a8(0x59f));
        _0x18da61 = new Map(JSON[_0x5da8a8(0x1a6)](_0x46d884));
    } catch (_0x67ecce) {
        console[_0x5da8a8(0x533)](_0x5da8a8(0x47a)), _0x18da61 = new Map();
    }
    if (await localBase['getItem'](game_data[_0x5da8a8(0x429)] + _0x5da8a8(0x21b)) != undefined) try {
        let _0x513afa = base64ToBlob(await localBase[_0x5da8a8(0x520)](game_data[_0x5da8a8(0x429)] + _0x5da8a8(0x21b))),
            _0x522e49 = await decompress(await _0x513afa[_0x5da8a8(0x4a5)](), 'gzip'),
            _0x3e9fc0 = new Map(JSON[_0x5da8a8(0x1a6)](_0x522e49));
        _0x18da61 = new Map([..._0x3e9fc0, ..._0x18da61]);
    } catch (_0x1f961e) {
        let _0x778186 = new Map(JSON[_0x5da8a8(0x1a6)](lzw_decode(await localBase[_0x5da8a8(0x520)](game_data[_0x5da8a8(0x429)] + _0x5da8a8(0x21b)))));
        _0x18da61 = new Map([..._0x778186, ..._0x18da61]);
    }
    console[_0x5da8a8(0x533)](_0x5da8a8(0x21b), _0x18da61);
    for (let _0x166f39 = 0x0; _0x166f39 < _0x2f3b7a[_0x5da8a8(0x5d6)]; _0x166f39++) {
        let _0x1551a9 = await decompress(await _0x2f3b7a[_0x166f39][_0x5da8a8(0x4a5)](), _0x5da8a8(0x59f));
        if (_0x2f3b7a[_0x166f39] != '[]') {
            let _0x4784fb = new Map(JSON[_0x5da8a8(0x1a6)](_0x1551a9));
            _0x18da61 = new Map([..._0x18da61, ..._0x4784fb]);
        }
        let _0x15ad18 = databaseName + _0x5da8a8(0x53a) + _0x166f39 + '.txt';
        if (await localBase[_0x5da8a8(0x520)](_0x15ad18) != undefined) try {
            let _0x25c43c = base64ToBlob(await localBase[_0x5da8a8(0x520)](_0x15ad18)),
                _0x3a7677 = await decompress(await _0x25c43c[_0x5da8a8(0x4a5)](), _0x5da8a8(0x59f)),
                _0x14a2ad = new Map(JSON[_0x5da8a8(0x1a6)](_0x3a7677));
            _0x18da61 = new Map([..._0x14a2ad, ..._0x18da61]);
        } catch (_0x21a96f) {}
    }
    return console[_0x5da8a8(0x533)](_0x5da8a8(0x308), _0x47bf41), _0x47bf41 != undefined && Array['from'](_0x47bf41[_0x5da8a8(0x2f0)]())[_0x5da8a8(0x432)](_0x48f8f5 => {
        const _0x1e38e6 = _0x5da8a8;
        try {
            let _0x13181f = _0x47bf41[_0x1e38e6(0x18a)](_0x48f8f5);
            _0x13181f[_0x1e38e6(0x49f)] = _0x4eca13[_0x1e38e6(0x18a)](_0x13181f[_0x1e38e6(0x3e7)])[_0x1e38e6(0x1d1)], _0x13181f['player_destination_name'] = _0x4eca13['get'](_0x13181f[_0x1e38e6(0x3e7)])[_0x1e38e6(0x578)], _0x13181f['player_destination_id'] = _0x4eca13[_0x1e38e6(0x18a)](_0x13181f['coord_destination'])[_0x1e38e6(0x29b)], _0x18da61['set'](_0x48f8f5, _0x13181f);
        } catch (_0x4a332e) {
            console[_0x1e38e6(0x533)](_0x1e38e6(0x623)), console[_0x1e38e6(0x533)](_0x4a332e);
        }
    }), new Promise(async (_0x416e92, _0x52904e) => {
        const _0x123b78 = _0x5da8a8;
        let _0x2de620 = document[_0x123b78(0x36b)](_0x123b78(0x4d8))[_0x123b78(0x5ad)],
            _0x21959a = document[_0x123b78(0x36b)]('serverDate')[_0x123b78(0x5ad)][_0x123b78(0x1c8)]('/');
        _0x21959a = _0x21959a[0x1] + '/' + _0x21959a[0x0] + '/' + _0x21959a[0x2];
        let _0x497a2c = new Date(_0x21959a + '\x20' + _0x2de620)[_0x123b78(0x505)](),
            _0x598e19 = _0x21959a + '\x20' + _0x2de620;
        _0x19fdf6 = new Map([..._0x19fdf6, ..._0x4da59f]), Array['from'](_0x19fdf6['keys']())[_0x123b78(0x432)](_0x220645 => {
            const _0x461247 = _0x123b78;
            _0x497a2c > _0x19fdf6[_0x461247(0x18a)](_0x220645)[_0x461247(0x175)] && _0x19fdf6['delete'](_0x220645);
        }), Array['from'](_0x69cd7f[_0x123b78(0x2f0)]())[_0x123b78(0x432)](_0x34422a => {
            const _0x6750e1 = _0x123b78;
            let _0x31806b = _0x69cd7f[_0x6750e1(0x18a)](_0x34422a);
            if (_0xa3f6aa[_0x6750e1(0x4d7)](_0x34422a)) {
                let _0x8491d = _0xa3f6aa['get'](_0x34422a);
                _0x8491d = _0x8491d[_0x6750e1(0x347)](_0x31806b), console[_0x6750e1(0x533)](_0x8491d);
                var _0x56783f = [...new Map(_0x8491d[_0x6750e1(0x4e2)](_0x4c3d5b => [_0x4c3d5b['commandId'], _0x4c3d5b]))[_0x6750e1(0x141)]()];
                _0x56783f['sort']((_0x1ac56f, _0x1b62ad) => {
                    const _0x3b32cb = _0x6750e1;
                    return new Date(_0x1ac56f[_0x3b32cb(0x55d)])[_0x3b32cb(0x505)]() > new Date(_0x1b62ad[_0x3b32cb(0x55d)])['getTime']() ? 0x1 : new Date(_0x1ac56f['landing_time'])[_0x3b32cb(0x505)]() < new Date(_0x1b62ad[_0x3b32cb(0x55d)])[_0x3b32cb(0x505)]() ? -0x1 : 0x0;
                });
                if (_0x56783f['length'] == 0x0) _0xa3f6aa[_0x6750e1(0x152)](_0x34422a), console['log'](_0x6750e1(0x456));
                else _0xa3f6aa[_0x6750e1(0x588)](_0x34422a, _0x56783f);
            } else console['log'](_0x6750e1(0x223)), _0x31806b[_0x6750e1(0x184)]((_0x941c32, _0x15602a) => {
                const _0x43bc1d = _0x6750e1;
                return new Date(_0x941c32[_0x43bc1d(0x55d)])['getTime']() > new Date(_0x15602a['landing_time'])[_0x43bc1d(0x505)]() ? 0x1 : new Date(_0x941c32[_0x43bc1d(0x55d)])[_0x43bc1d(0x505)]() < new Date(_0x15602a['landing_time'])[_0x43bc1d(0x505)]() ? -0x1 : 0x0;
            }), _0xa3f6aa['set'](_0x34422a, _0x31806b);
        }), Array[_0x123b78(0x2e2)](_0xa3f6aa[_0x123b78(0x2f0)]())[_0x123b78(0x432)](_0x182c1a => {
            const _0x2dd8ee = _0x123b78;
            let _0x5269cc = _0xa3f6aa['get'](_0x182c1a);
            if (_0x5269cc[_0x2dd8ee(0x5d6)] == 0x0) console[_0x2dd8ee(0x533)](_0xa3f6aa[_0x2dd8ee(0x4d7)](_0x182c1a)), _0xa3f6aa['delete'](_0x182c1a), console[_0x2dd8ee(0x533)](_0x182c1a), console[_0x2dd8ee(0x533)](_0x2dd8ee(0x2d5));
            else {
                for (let _0x545321 = 0x0; _0x545321 < _0x5269cc[_0x2dd8ee(0x5d6)]; _0x545321++) {
                    let _0x946a04 = new Date(_0x5269cc[_0x545321][_0x2dd8ee(0x55d)])[_0x2dd8ee(0x505)]();
                    (_0x497a2c > _0x946a04 || _0x5269cc[_0x545321][_0x2dd8ee(0x55d)] == '') && (_0x5269cc[_0x2dd8ee(0x129)](_0x545321, 0x1), _0x545321--);
                }
                _0xa3f6aa['set'](_0x182c1a, _0x5269cc);
            }
        }), Array[_0x123b78(0x2e2)](_0x18da61['keys']())[_0x123b78(0x432)](_0x5571cf => {
            const _0x45b934 = _0x123b78;
            let _0x21ba80 = _0x18da61[_0x45b934(0x18a)](_0x5571cf),
                _0x338fc4 = new Date(_0x21ba80[_0x45b934(0x175)])[_0x45b934(0x505)]();
            if (_0x497a2c > _0x338fc4) _0x18da61[_0x45b934(0x152)](_0x5571cf);
        });
        let _0xb6166d = {
            'name': game_data['player']['name'],
            'command_date': _0x598e19
        };
        if (_0x3a4518['has'](game_data[_0x123b78(0x1a4)]['id']['toString']())) {
            let _0x3a6856 = _0x3a4518['get'](game_data[_0x123b78(0x1a4)]['id'][_0x123b78(0x29a)]());
            _0x3a4518[_0x123b78(0x588)](game_data[_0x123b78(0x1a4)]['id']['toString'](), {
                ..._0x3a6856,
                ..._0xb6166d
            });
        } else _0x3a4518[_0x123b78(0x588)](game_data[_0x123b78(0x1a4)]['id'][_0x123b78(0x29a)](), _0xb6166d);
        UI[_0x123b78(0x5ea)](_0x123b78(0x5d1), 0x7d0);
        let _0x6368a8 = new Date()[_0x123b78(0x505)](),
            _0x3e8505 = JSON[_0x123b78(0x199)](Array[_0x123b78(0x2e2)](_0x3a4518['entries']())),
            _0x5740cd = Array[_0x123b78(0x2e2)](_0x18da61[_0x123b78(0x434)]()),
            _0x40c6de = Array[_0x123b78(0x2e2)](_0xa3f6aa[_0x123b78(0x434)]()),
            _0x2fedb2 = Array['from'](_0x19fdf6[_0x123b78(0x434)]()),
            _0x511923 = formatBytes(new TextEncoder()['encode'](JSON[_0x123b78(0x199)](_0x5740cd))[_0x123b78(0x5d6)]),
            _0x1d19a9 = formatBytes(new TextEncoder()[_0x123b78(0x3bf)](JSON[_0x123b78(0x199)](_0x40c6de))[_0x123b78(0x5d6)]),
            _0x1c89ec = formatBytes(new TextEncoder()['encode'](JSON['stringify'](_0x2fedb2))[_0x123b78(0x5d6)]);
        console[_0x123b78(0x533)](_0x123b78(0x2aa));
        let _0x4640ed = Math['ceil'](_0x5740cd['length'] / nrFiles),
            _0x58517e = Math[_0x123b78(0x621)](_0x40c6de[_0x123b78(0x5d6)] / nrFiles),
            _0x4b92c8 = Math[_0x123b78(0x621)](_0x2fedb2[_0x123b78(0x5d6)] / nrFiles);
        const _0x5e3dbf = async () => {
            const _0x641f6f = _0x123b78;
            console[_0x641f6f(0x533)](_0x641f6f(0x551));
            for (let _0x249a65 = 0x0; _0x249a65 < nrFiles; _0x249a65++) {
                let _0x2e73fa = _0x5740cd[_0x641f6f(0x22c)](_0x249a65 * _0x4640ed, (_0x249a65 + 0x1) * _0x4640ed),
                    _0x3200c8 = await compress(JSON[_0x641f6f(0x199)](_0x2e73fa), _0x641f6f(0x59f)),
                    _0x2994dd = await blobToBase64(_0x3200c8),
                    _0x364417 = databaseName + _0x641f6f(0x53a) + _0x249a65 + _0x641f6f(0x415),
                    _0x1b64d8 = databaseName + _0x641f6f(0x53a) + _0x249a65 + _0x641f6f(0x586);
                await Promise[_0x641f6f(0x3b6)]([uploadFile(_0x3200c8, _0x364417, dropboxToken)[_0x641f6f(0x198)](_0x2da0f7 => alert(_0x2da0f7)), localBase[_0x641f6f(0x1d4)](_0x1b64d8, _0x2994dd)]);
                let _0x1c76c9 = _0x40c6de[_0x641f6f(0x22c)](_0x249a65 * _0x58517e, (_0x249a65 + 0x1) * _0x58517e),
                    _0x2bc0f4 = _0x2fedb2[_0x641f6f(0x22c)](_0x249a65 * _0x4b92c8, (_0x249a65 + 0x1) * _0x4b92c8),
                    _0x1f0164 = [_0x1c76c9, _0x2bc0f4];
                _0x3200c8 = await compress(JSON[_0x641f6f(0x199)](_0x1f0164), 'gzip'), _0x2994dd = await blobToBase64(_0x3200c8), _0x364417 = databaseName + _0x641f6f(0x526) + _0x249a65 + _0x641f6f(0x415), _0x1b64d8 = databaseName + _0x641f6f(0x526) + _0x249a65 + _0x641f6f(0x586);
                let _0x506c6d = await blobToBase64(await compress(JSON[_0x641f6f(0x199)](_0x1c76c9), _0x641f6f(0x59f))),
                    _0x51fa9c = await blobToBase64(await compress(JSON['stringify'](_0x2bc0f4), 'gzip'));
                await Promise[_0x641f6f(0x3b6)]([uploadFile(_0x3200c8, _0x364417, dropboxToken)[_0x641f6f(0x198)](_0x48f4cf => alert(_0x48f4cf)), localBase['setItem'](_0x1b64d8, _0x506c6d), localBase['setItem'](_0x1b64d8 + _0x641f6f(0x5f6), _0x51fa9c)]);
            }
        };
        await _0x5e3dbf();
        let _0x468ad1 = await compress(_0x3e8505, 'gzip'),
            _0x145b3f = await uploadFile(_0x468ad1, filename_status_upload, dropboxToken)['catch'](_0x8a3430 => alert(_0x8a3430));
        if (_0x145b3f == _0x123b78(0x5ae)) {
            console[_0x123b78(0x533)](_0x123b78(0x2e9)), document[_0x123b78(0x36b)]('progress_support')[_0x123b78(0x5ad)] = _0x69cd7f[_0x123b78(0x441)] + '\x20coords', document[_0x123b78(0x36b)]('progress_all')[_0x123b78(0x5ad)] = _0x123b78(0x488);
            var _0x3883ee = JSON[_0x123b78(0x199)](Array[_0x123b78(0x2e2)](_0x51dd98[_0x123b78(0x3f6)][_0x123b78(0x434)]()));
            localStorage[_0x123b78(0x1d4)](game_data['world'] + _0x123b78(0x3f6), _0x3883ee);
            let _0x2e2f52 = new Date()[_0x123b78(0x505)](),
                _0x5ef7d6 = Math[_0x123b78(0x510)]((_0x2e2f52 - _0x6368a8) / 0x3e8 * 0x64) / 0x64;
            UI[_0x123b78(0x5ea)](_0x123b78(0x5fc) + _0x5ef7d6 + _0x123b78(0x2f7) + _0x5740cd[_0x123b78(0x5d6)] + _0x123b78(0x251) + _0x511923 + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>Commands\x20support</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style\x20=\x20\x22text-align:\x20center;border:\x201px\x20solid\x20black;border-collapse:\x20collapse;padding:5px\x22>' + _0x40c6de[_0x123b78(0x5d6)] + _0x123b78(0x625) + _0x1d19a9 + _0x123b78(0x472) + _0x2fedb2[_0x123b78(0x5d6)] + _0x123b78(0x625) + _0x1c89ec + _0x123b78(0x3c6), 0x2710), _0x416e92({
                'totalTimeUpload': _0x5ef7d6,
                'status': _0x123b78(0x4f3)
            });
        } else _0x52904e(_0x123b78(0x395));
    });
}

function ajaxTroopsComing(_0x47cc79) {
    return new Promise((_0x2d1d66, _0xc67409) => {
        const _0xe787d0 = _0x2f7d;
        let _0x2cfc4b = game_data[_0xe787d0(0x4b3)][_0xe787d0(0x22c)]();
        _0x2cfc4b[_0xe787d0(0x25b)]('militia') && _0x2cfc4b[_0xe787d0(0x51a)]();
        let _0x9b96e0 = new Date()['getTime']();
        $[_0xe787d0(0x53b)]({
            'url': game_data[_0xe787d0(0x2bc)] + ('info_command&ajax=details&id=' + _0x47cc79),
            'method': _0xe787d0(0x18a),
            'success': _0xe7e85a => {
                const _0x5e96d9 = _0xe787d0;
                let _0x2f20c6 = {};
                _0xe7e85a[_0x5e96d9(0x4b3)] != undefined ? (_0x2f20c6 = _0xe7e85a[_0x5e96d9(0x4b3)], Object[_0x5e96d9(0x2f0)](_0x2f20c6)[_0x5e96d9(0x432)](_0x4a5044 => {
                    const _0x493201 = _0x5e96d9;
                    _0x2f20c6[_0x4a5044] = parseInt(_0x2f20c6[_0x4a5044][_0x493201(0x4b4)]);
                })) : Object[_0x5e96d9(0x2f0)](_0x2cfc4b)[_0x5e96d9(0x432)](_0x2e6ec1 => {
                    _0x2f20c6[_0x2cfc4b[_0x2e6ec1]] = 0x0;
                });
                let _0x486b6c = new Date()[_0x5e96d9(0x505)](),
                    _0x2e2f6d = _0x486b6c - _0x9b96e0;
                console[_0x5e96d9(0x533)](_0x5e96d9(0x5a3), _0x2e2f6d), window[_0x5e96d9(0x5c9)](() => {
                    _0x2d1d66(_0x2f20c6);
                }, 0xc8 - _0x2e2f6d);
            },
            'error': _0x35478d => {
                _0xc67409(_0x35478d);
            }
        });
    });
}

function ajaxTroopsStationed(_0x3c10c0) {
    return new Promise((_0x546faf, _0x2389dc) => {
        const _0x3093a4 = _0x2f7d;
        let _0x20af26 = new Date()['getTime']();
        $['ajax']({
            'url': game_data['link_base_pure'] + (_0x3093a4(0x412) + _0x3c10c0 + '&target=' + _0x3c10c0 + '&'),
            'method': _0x3093a4(0x18a),
            'success': _0x238d98 => {
                const _0x280849 = _0x3093a4;
                let _0x7b7170 = game_data[_0x280849(0x4b3)],
                    _0x2a3d54 = {},
                    _0x2ad693 = {};
                for (let _0x5e6bf5 = 0x0; _0x5e6bf5 < _0x7b7170[_0x280849(0x5d6)] - 0x1; _0x5e6bf5++) {
                    _0x2a3d54[_0x7b7170[_0x5e6bf5]] = parseInt(_0x238d98['units'][_0x7b7170[_0x5e6bf5]][_0x280849(0x4b4)][_0x280849(0x253)]) + parseInt(_0x238d98[_0x280849(0x4b3)][_0x7b7170[_0x5e6bf5]][_0x280849(0x4b4)][_0x280849(0x3b8)]);
                }
                let _0xdf20a3, _0x4ff293, _0x3ceb3e, _0x232119;
                _0xdf20a3 = _0x238d98[_0x280849(0x18d)][_0x280849(0x5f3)], _0x4ff293 = _0x238d98['buildings']['farm'], _0x232119 = _0x238d98[_0x280849(0x493)];
                if (_0x238d98[_0x280849(0x4e6)] != undefined) _0x3ceb3e = _0x238d98[_0x280849(0x4e6)][_0x280849(0x193)];
                else _0x3ceb3e = _0x280849(0x2ea);
                _0x2ad693['obj_troops'] = _0x2a3d54, _0x2ad693[_0x280849(0x470)] = _0xdf20a3, _0x2ad693['farmLevel'] = _0x4ff293, _0x2ad693[_0x280849(0x1f9)] = _0x3ceb3e, _0x2ad693[_0x280849(0x594)] = _0x232119;
                let _0x3bb09f = new Date()[_0x280849(0x505)](),
                    _0x24ef73 = _0x3bb09f - _0x20af26;
                console[_0x280849(0x533)](_0x280849(0x5a3), _0x24ef73), window[_0x280849(0x5c9)](() => {
                    _0x546faf(_0x2ad693);
                }, 0xc8 - _0x24ef73);
            },
            'error': _0x3ded6e => {
                _0x2389dc(_0x3ded6e);
            }
        });
    });
}
var mapAttacksVillageId = new Map();
async function viewSupport() {
    const _0x32d6c7 = _0x555ef8;
    if (document[_0x32d6c7(0x36b)](_0x32d6c7(0x1d8)) != null) document[_0x32d6c7(0x36b)](_0x32d6c7(0x1d8))[_0x32d6c7(0x501)]();
    let _0x5c7973 = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_container_view\x22\x20class=\x22ui-widget-content\x20div_remove\x22\x20style=\x22width:900px;height:auto;background-color:' + backgroundColor + _0x32d6c7(0x548) + backgroundColor + _0x32d6c7(0x3ee) + titleColor + _0x32d6c7(0x379) + titleColor + _0x32d6c7(0x531) + backgroundColor + ';border-color:' + borderColor + _0x32d6c7(0x262) + headerColor + _0x32d6c7(0x53c) + titleColor + '\x22><p>search\x20by\x20coord</p></font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:' + headerColor + _0x32d6c7(0x140) + backgroundColor + _0x32d6c7(0x2a0) + borderColor + ';\x22\x20hidden>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:' + headerColor + _0x32d6c7(0x42e) + titleColor + ';text-align:left;margin:5px\x22>Enemy\x20Info</label><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20style=\x22margin:5px\x22\x20type=\x22radio\x22\x20class=\x22remove_radio_def\x22\x20id=\x22radio_defensive\x22\x20name=\x22type_info\x22\x20value=\x22defensive_info\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20for=\x22radio_defensive\x22\x20class=\x22remove_radio_def\x22\x20style=\x22color:' + titleColor + _0x32d6c7(0x138) + headerColor + _0x32d6c7(0x2c5) + headerColor + _0x32d6c7(0x41f) + backgroundColor + _0x32d6c7(0x2a0) + borderColor + _0x32d6c7(0x371) + headerColor + _0x32d6c7(0x1ba) + titleColor + _0x32d6c7(0x30a) + headerColor + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:1px;font-size:16px\x22><font\x20color=\x22' + titleColor + _0x32d6c7(0x5fa) + headerColor + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:1px;font-size:16px\x22><font\x20color=\x22' + titleColor + _0x32d6c7(0x153) + headerColor + _0x32d6c7(0x21e) + titleColor + _0x32d6c7(0x5e8) + headerColor + _0x32d6c7(0x1c2) + titleColor + _0x32d6c7(0x214) + headerColor + _0x32d6c7(0x1c2) + titleColor + _0x32d6c7(0x577);
    $(_0x32d6c7(0x195))[_0x32d6c7(0x501)](), $(_0x32d6c7(0x362))['eq'](0x0)[_0x32d6c7(0x4c2)](_0x5c7973), $('#mobileContent')['eq'](0x0)[_0x32d6c7(0x4c2)](_0x5c7973);
    game_data['device'] == _0x32d6c7(0x496) && ($(_0x32d6c7(0x195))['css'](_0x32d6c7(0x218), _0x32d6c7(0x631)), $(_0x32d6c7(0x195))[_0x32d6c7(0x4bb)]());
    document['getElementById'](_0x32d6c7(0x2d0))[_0x32d6c7(0x1c0)](_0x32d6c7(0x30f), () => {
        const _0x24ba28 = _0x32d6c7;
        $(_0x24ba28(0x195))[_0x24ba28(0x501)](), $(_0x24ba28(0x362))['eq'](0x0)[_0x24ba28(0x4c2)](html), $(_0x24ba28(0x508))['eq'](0x0)[_0x24ba28(0x4c2)](html), game_data[_0x24ba28(0x225)] == 'desktop' && ($('#div_container')[_0x24ba28(0x2e0)](_0x24ba28(0x218), _0x24ba28(0x631)), $('#div_container')[_0x24ba28(0x4bb)]());
    }), document['getElementById'](_0x32d6c7(0x3d0))['addEventListener']('click', () => {
        const _0x11f7a3 = _0x32d6c7;
        $(_0x11f7a3(0x4ad))[_0x11f7a3(0x5d6)] ? ($(_0x11f7a3(0x61d))[_0x11f7a3(0x539)](), $('#div_container_view')[_0x11f7a3(0x2e0)]({
            'width': _0x11f7a3(0x5bb)
        })) : ($(_0x11f7a3(0x61d))[_0x11f7a3(0x485)](), $(_0x11f7a3(0x195))['css']({
            'width': _0x11f7a3(0x552)
        }));
    });
    typeof TWMap != _0x32d6c7(0x4cb) && $(_0x32d6c7(0x5dc))[_0x32d6c7(0x485)]();
    var [_0x3ec1c3, _0x5c0f2d, _0x14cd71, _0x4763f2, _0x4c826e, _0x3d2368, _0x3e7e6a, _0x391497] = await Promise[_0x32d6c7(0x3b6)]([getInfoVillages(), readFileDropbox(filename_reports), readFileDropbox(filename_incomings), readFileDropbox(filename_support), readFileDropbox(filename_commands_attack), readFileDropbox(filename_status_upload), readFileDropbox(filename_history_upload), insertChartLibrary()])[_0x32d6c7(0x198)](_0x221328 => {
        alert(_0x221328);
    }), [_0x5c0f2d, _0x14cd71, _0x4c826e, _0x3d2368, _0x3e7e6a, _0x4763f2] = await Promise[_0x32d6c7(0x3b6)]([decompress(await _0x5c0f2d[_0x32d6c7(0x4a5)](), _0x32d6c7(0x59f)), decompress(await _0x14cd71[_0x32d6c7(0x4a5)](), _0x32d6c7(0x59f)), decompress(await _0x4c826e['arrayBuffer'](), 'gzip'), decompress(await _0x3d2368['arrayBuffer'](), _0x32d6c7(0x59f)), decompress(await _0x3e7e6a[_0x32d6c7(0x4a5)](), 'gzip'), decompress(await _0x4763f2[_0x32d6c7(0x4a5)](), 'gzip')])[_0x32d6c7(0x198)](_0x47e3f6 => {
        alert(_0x47e3f6);
    });
    _0x5c0f2d = new Map(JSON[_0x32d6c7(0x1a6)](_0x5c0f2d)), _0x14cd71 = new Map(JSON[_0x32d6c7(0x1a6)](_0x14cd71)), _0x4c826e = new Map(JSON[_0x32d6c7(0x1a6)](_0x4c826e)), _0x3d2368 = new Map(JSON[_0x32d6c7(0x1a6)](_0x3d2368)), _0x3e7e6a = new Map(JSON[_0x32d6c7(0x1a6)](_0x3e7e6a));
    let _0x56b225 = new Map(JSON[_0x32d6c7(0x1a6)](_0x4763f2)[0x0]),
        _0x3b472e = new Map(JSON[_0x32d6c7(0x1a6)](_0x4763f2)[0x1]),
        _0x34699c = new Map(),
        _0x58e137 = await Promise[_0x32d6c7(0x3b6)](commandsAttacksPromises)[_0x32d6c7(0x198)](_0x653524 => {
            alert(_0x653524);
        }),
        _0x519c96 = await Promise[_0x32d6c7(0x3b6)](supportPromises)['catch'](_0x4d7033 => {
            alert(_0x4d7033);
        });
    const _0x4e22d = async () => {
        const _0x119f2e = _0x32d6c7;
        console[_0x119f2e(0x533)](_0x119f2e(0x551));
        for (let _0x572e68 = 0x0; _0x572e68 < _0x58e137[_0x119f2e(0x5d6)]; _0x572e68++) {
            let [_0x3b773d, _0x4b03ef] = await Promise['all']([decompress(await _0x58e137[_0x572e68][_0x119f2e(0x4a5)](), _0x119f2e(0x59f)), decompress(await _0x519c96[_0x572e68][_0x119f2e(0x4a5)](), _0x119f2e(0x59f))])['catch'](_0x519a62 => {
                alert(_0x519a62);
            }), _0x37f032 = new Map(JSON[_0x119f2e(0x1a6)](_0x3b773d));
            _0x4c826e = new Map([..._0x4c826e, ..._0x37f032]);
            let _0x18c8cf = new Map(JSON[_0x119f2e(0x1a6)](_0x4b03ef)[0x0]),
                _0x2e3491 = new Map(JSON['parse'](_0x4b03ef)[0x1]);
            _0x56b225 = new Map([..._0x56b225, ..._0x18c8cf]), _0x3b472e = new Map([..._0x3b472e, ..._0x2e3491]);
        }
    };
    await _0x4e22d(), _0x14cd71 = removeLandedIncomings(_0x14cd71);
    let _0x4e02d3 = document[_0x32d6c7(0x36b)](_0x32d6c7(0x4d8))[_0x32d6c7(0x5ad)],
        _0x3adea = document['getElementById']('serverDate')[_0x32d6c7(0x5ad)][_0x32d6c7(0x1c8)]('/');
    _0x3adea = _0x3adea[0x1] + '/' + _0x3adea[0x0] + '/' + _0x3adea[0x2];
    let _0x3e3d21 = new Date(_0x3adea + '\x20' + _0x4e02d3)[_0x32d6c7(0x505)]();
    createTableSettings(), $(_0x32d6c7(0x329))['hide']();
    let _0x9ab5b4 = parseInt(document[_0x32d6c7(0x36b)]('settings_pop')[_0x32d6c7(0x492)]);
    if (Number['isNaN'](_0x9ab5b4)) _0x9ab5b4 = 0x3e8;
    let _0x3e3a62 = [];
    $('#div_settings\x20input[type=checkbox]:checked')['each'](function(_0x408cd9, _0x6baf18) {
        const _0x5595dc = _0x32d6c7;
        _0x3e3a62[_0x5595dc(0x1fa)](_0x6baf18[_0x5595dc(0x492)]);
    }), Array[_0x32d6c7(0x2e2)](_0x56b225['keys']())[_0x32d6c7(0x432)](_0x276646 => {
        const _0x18e345 = _0x32d6c7;
        try {
            let _0x149c5c = {},
                _0x368d37 = _0x3ec1c3[_0x18e345(0x18a)](_0x276646)[_0x18e345(0x29b)],
                _0x109ab3 = _0x3ec1c3[_0x18e345(0x18a)](_0x276646)[_0x18e345(0x1d1)],
                _0x3cc3be = _0x3ec1c3[_0x18e345(0x18a)](_0x276646)[_0x18e345(0x578)],
                _0x1f58b8 = _0x56b225[_0x18e345(0x18a)](_0x276646),
                _0x816fc6 = ![],
                _0x2686fe = 0x0,
                _0x2c6b98 = 0x0,
                _0x223550 = 0x0,
                _0x164c4f = ![],
                _0x2d8fa7 = ![],
                _0x706705 = ![],
                _0x3af57b = ![];
            if (tribemates[_0x18e345(0x25b)](_0x3cc3be[_0x18e345(0x38b)]())) {
                for (let _0x1e3ad7 = 0x0; _0x1e3ad7 < _0x1f58b8['length']; _0x1e3ad7++) {
                    let _0x298598 = new Date(_0x1f58b8[_0x1e3ad7][_0x18e345(0x55d)])['getTime'](),
                        _0x1ad391 = ![];
                    _0x3e3a62[_0x18e345(0x25b)]('hide_ignored') && _0x1f58b8[_0x1e3ad7][_0x18e345(0x19d)] == ![] && (_0x1ad391 = !![], console['log'](_0x18e345(0x605)));
                    if (_0x3e3a62[_0x18e345(0x25b)](_0x18e345(0x50a)) && _0x1f58b8[_0x1e3ad7][_0x18e345(0x64c)][_0x18e345(0x25b)]('support')) {
                        let _0x55d2f = new Date(_0x1f58b8[_0x1e3ad7]['landing_time'])[_0x18e345(0x505)]();
                        for (let _0xc8c70a = _0x1e3ad7 + 0x1; _0xc8c70a < _0x1f58b8[_0x18e345(0x5d6)] - 0x1; _0xc8c70a++) {
                            let _0x231974 = new Date(_0x1f58b8[_0xc8c70a][_0x18e345(0x55d)])['getTime']();
                            if (_0x231974 - _0x55d2f > 0x258) {
                                _0x1ad391 = !![], console['log'](_0x18e345(0x3e0));
                                break;
                            } else break;
                        }
                        _0x1e3ad7 == _0x1f58b8[_0x18e345(0x5d6)] - 0x1 && (_0x1ad391 = !![], console[_0x18e345(0x533)](_0x18e345(0x3e0)));
                    }
                    if (_0x3e3a62[_0x18e345(0x25b)]('hide_further_attacks')) {
                        let _0x30e36e = parseInt(document[_0x18e345(0x36b)](_0x18e345(0x177))[_0x18e345(0x492)]) * 0xe10 * 0x3e8;
                        if (Number[_0x18e345(0x283)](_0x30e36e)) _0x30e36e = 0x64 * 0xe10 * 0x3e8;
                        _0x298598 - _0x3e3d21 > _0x30e36e && (_0x1ad391 = !![], console[_0x18e345(0x533)]('delete\x20further\x20attacks'));
                    }
                    if (_0x3e3a62[_0x18e345(0x25b)](_0x18e345(0x617))) {
                        let _0x5cb258 = parseInt(document['getElementById'](_0x18e345(0x627))[_0x18e345(0x492)]) * 0xe10 * 0x3e8;
                        if (Number[_0x18e345(0x283)](_0x5cb258)) _0x5cb258 = 0xa * 0xe10 * 0x3e8;
                        _0x298598 - _0x3e3d21 < _0x5cb258 && (_0x1ad391 = !![], console[_0x18e345(0x533)](_0x18e345(0x165)));
                    }
                    if (_0x368d37 == game_data[_0x18e345(0x1a4)]['id'][_0x18e345(0x29a)]()) {
                        let _0x1a31cb = new Map(JSON[_0x18e345(0x1a6)](localStorage['getItem'](game_data[_0x18e345(0x429)] + 'map_exist_support'))),
                            _0x46b3a6 = Array[_0x18e345(0x2e2)](_0x1a31cb['keys']());
                        !_0x46b3a6[_0x18e345(0x25b)](_0x1f58b8[_0x1e3ad7]['commandId']) && (_0x1ad391 = !![], console[_0x18e345(0x533)](_0x18e345(0x2fb)));
                    }
                    let _0x2e81a4 = _0x1f58b8[_0x1e3ad7][_0x18e345(0x478)],
                        _0x45cb3d = _0x1f58b8[_0x1e3ad7][_0x18e345(0x21c)];
                    if (_0x5c0f2d['has'](_0x2e81a4) && _0x1f58b8[_0x1e3ad7][_0x18e345(0x64c)][_0x18e345(0x25b)]('attack')) {
                        let _0x14b0c8, _0x6b0925, _0x5d8f74, _0x59bffd = _0x5c0f2d['get'](_0x2e81a4);
                        var _0x152870 = ![];
                        if (_0x2e81a4 == _0x59bffd[_0x18e345(0x465)]) _0x14b0c8 = _0x59bffd['attackingPlayerId'], _0x6b0925 = _0x59bffd[_0x18e345(0x47f)], _0x5d8f74 = _0x59bffd[_0x18e345(0x4f7)], _0x152870 = !![];
                        else _0x2e81a4 == _0x59bffd['coordDefender'] ? (_0x14b0c8 = _0x59bffd[_0x18e345(0x3d9)], _0x6b0925 = _0x59bffd['typeDefender'], _0x5d8f74 = _0x59bffd[_0x18e345(0x290)], _0x152870 = ![]) : (_0x14b0c8 = _0x59bffd[_0x18e345(0x4a4)], _0x6b0925 = _0x59bffd['typeSupporter'], _0x5d8f74 = _0x59bffd[_0x18e345(0x17f)]);
                        if (_0x14b0c8 == _0x45cb3d) {
                            let _0xee7662 = new Date(_0x59bffd['time_report']),
                                _0x4862ab = calcDistance(_0x2e81a4, _0x1f58b8[_0x1e3ad7][_0x18e345(0x3e7)]),
                                _0x46b468 = 0x0,
                                _0x17d7fa = new Date(_0x298598),
                                _0xd5a8f1 = _0x1f58b8[_0x1e3ad7][_0x18e345(0x14b)];
                            if (_0xd5a8f1['includes'](_0x18e345(0x572))) _0x46b468 = nobleSpeed * _0x4862ab;
                            else {
                                if (_0xd5a8f1['includes'](_0x18e345(0x126)) || _0xd5a8f1[_0x18e345(0x25b)](_0x18e345(0x566))) _0x46b468 = ramSpeed * _0x4862ab;
                                else {
                                    if (_0xd5a8f1[_0x18e345(0x25b)](_0x18e345(0x522))) _0x46b468 = swordSpeed * _0x4862ab;
                                    else _0xd5a8f1[_0x18e345(0x25b)](_0x18e345(0x645)) && (_0x46b468 = axeSpeed * _0x4862ab);
                                }
                            }
                            if (_0x152870 == ![]) _0x46b468 = 0x0;
                            let _0x32a31f = _0x1f58b8[_0x1e3ad7]['type_attack'];
                            if (_0x6b0925 == _0x18e345(0x181)) {
                                let _0x104f3f = _0x17d7fa[_0x18e345(0x505)]() - _0x46b468 - _0xee7662[_0x18e345(0x505)](),
                                    _0x53f83e = parseInt(document[_0x18e345(0x36b)](_0x18e345(0x63d))[_0x18e345(0x492)]) / 0x4e20 * 0x64,
                                    _0x5052d2 = parseInt(document['getElementById'](_0x18e345(0x134))[_0x18e345(0x492)]) / 0x4e20 * 0x64;
                                if (_0x5052d2 < _0x53f83e) alert(_0x18e345(0x1a0));
                                if (Number[_0x18e345(0x283)](_0x53f83e)) _0x53f83e = 0x1388 / 0x4e20 * 0x64;
                                if (Number['isNaN'](_0x5052d2)) _0x53f83e = 0x2710 / 0x4e20 * 0x64;
                                _0x5d8f74 = calcProductionTroupes(_0x104f3f, _0x5d8f74);
                                if (_0x5d8f74 <= _0x53f83e) _0x32a31f = _0x18e345(0x21f);
                                else {
                                    if (_0x5d8f74 > _0x53f83e && _0x5d8f74 <= _0x5052d2) _0x32a31f = _0x18e345(0x1e3);
                                    else _0x32a31f = _0x18e345(0x2f9);
                                }
                            } else _0x6b0925['includes'](_0x18e345(0x292)) && (_0x32a31f = _0x18e345(0x292));
                            _0x1f58b8[_0x1e3ad7][_0x18e345(0x64c)] = _0x32a31f;
                        }
                    }
                    _0x1ad391 == !![] && (_0x1f58b8[_0x18e345(0x129)](_0x1e3ad7, 0x1), _0x1e3ad7--);
                }
                for (let _0x1a33e2 = 0x0; _0x1a33e2 < _0x1f58b8['length']; _0x1a33e2++) {
                    let _0x10e20a = new Date(_0x1f58b8[_0x1a33e2][_0x18e345(0x55d)])[_0x18e345(0x505)]();
                    if (_0x10e20a > _0x3e3d21) {
                        _0x1f58b8[_0x1a33e2][_0x18e345(0x64c)][_0x18e345(0x25b)](_0x18e345(0x4aa)) || _0x1f58b8[_0x1a33e2][_0x18e345(0x64c)][_0x18e345(0x25b)]('def') ? (_0x2686fe++, _0x816fc6 = !![]) : _0x2c6b98++;
                        if (_0x1f58b8[_0x1a33e2][_0x18e345(0x14b)][_0x18e345(0x25b)](_0x18e345(0x609))) {
                            _0x223550++;
                            for (let _0x257a13 = _0x1a33e2 + 0x1; _0x257a13 < _0x1f58b8['length']; _0x257a13++) {
                                let _0x1965a4 = new Date(_0x1f58b8[_0x257a13][_0x18e345(0x55d)])[_0x18e345(0x505)]();
                                if (_0x1965a4 - _0x10e20a == 0x32 || _0x1965a4 - _0x10e20a == 0x64 || _0x1965a4 - _0x10e20a == 0x96) {
                                    if (_0x1f58b8[_0x1a33e2][_0x18e345(0x478)] == _0x1f58b8[_0x257a13]['coord_origin']) {
                                        let _0x50aef2 = 0x0,
                                            _0x3165a5 = [];
                                        for (let _0x5cfd23 = _0x257a13 - 0x1; _0x5cfd23 >= 0x0; _0x5cfd23--) {
                                            if (_0x1f58b8[_0x5cfd23][_0x18e345(0x64c)][_0x18e345(0x25b)](_0x18e345(0x628))) {
                                                let _0x228a2e = _0x1f58b8[_0x5cfd23][_0x18e345(0x442)];
                                                Object[_0x18e345(0x2f0)](_0x228a2e)['forEach'](_0x147597 => {
                                                    _0x50aef2 += _0x228a2e[_0x147597] * troopsPop[_0x147597];
                                                }), _0x3165a5[_0x18e345(0x1fa)](_0x5cfd23);
                                            } else break;
                                        }
                                        if (_0x50aef2 > _0x9ab5b4) {
                                            _0x2d8fa7 = !![];
                                            for (let _0x3bafd0 = 0x0; _0x3bafd0 < _0x3165a5[_0x18e345(0x5d6)]; _0x3bafd0++) {
                                                _0x1f58b8[_0x3165a5[_0x3bafd0]][_0x18e345(0x2ce)] = !![];
                                            }
                                        }
                                        _0x164c4f = !![];
                                    }
                                }
                            }
                            _0x164c4f == ![] && _0x223550 >= 0x4 && (_0x706705 = !![]), _0x164c4f == ![] && _0x223550 >= 0x4 && tribemates[_0x18e345(0x25b)](_0x1f58b8[_0x1a33e2]['player_origin_name']) && (_0x3af57b = !![]);
                        }
                    }
                }
                _0x816fc6 == !![] && (_0x149c5c[_0x18e345(0x1ca)] = _0x3b472e['get'](_0x276646));
                let _0x4e3c99 = _0x164c4f == !![] ? 0x1 : 0x0,
                    _0x1d84e8 = _0x2d8fa7 == !![] ? 0x1 : 0x0,
                    _0x5b6bb9 = _0x706705 == !![] ? 0x1 : 0x0,
                    _0x33fc4e = _0x3af57b == !![] ? 0x1 : 0x0;
                _0x149c5c[_0x18e345(0x49f)] = _0x109ab3, _0x149c5c[_0x18e345(0x5d0)] = _0x1f58b8, _0x149c5c[_0x18e345(0x344)] = _0x2686fe, _0x149c5c[_0x18e345(0x2db)] = _0x2c6b98, _0x149c5c[_0x18e345(0x63f)] = _0x223550, _0x149c5c[_0x18e345(0x1bf)] = _0x4e3c99, _0x149c5c[_0x18e345(0x1bd)] = _0x1d84e8, _0x149c5c['nr_recap'] = _0x5b6bb9, _0x149c5c['nr_recaped'] = _0x33fc4e;
                if (!_0x34699c['has'](_0x368d37) && (_0x2686fe > 0x0 || _0x2c6b98 > 0x0)) _0x34699c[_0x18e345(0x588)](_0x368d37, {
                    'nr_attacks_total': _0x2686fe,
                    'nr_supports_total': _0x2c6b98,
                    'nr_nobles_total': _0x223550,
                    'list_coords': [_0x149c5c],
                    'player_destination_name': _0x3cc3be,
                    'player_destination_id': _0x368d37,
                    'nr_snipe_total': _0x4e3c99,
                    'nr_sniped_total': _0x1d84e8,
                    'nr_recap_total': _0x5b6bb9,
                    'nr_recaped_total': _0x33fc4e
                });
                else {
                    let _0x85156f = _0x34699c[_0x18e345(0x18a)](_0x368d37),
                        _0x353352 = _0x85156f['list_coords'];
                    _0x353352[_0x18e345(0x1fa)](_0x149c5c), _0x85156f['list_coords'] = _0x353352, _0x85156f[_0x18e345(0x2b9)] += _0x2686fe, _0x85156f[_0x18e345(0x614)] += _0x2c6b98, _0x85156f[_0x18e345(0x468)] += _0x223550, (_0x85156f[_0x18e345(0x128)] += _0x4e3c99, _0x85156f[_0x18e345(0x338)] += _0x1d84e8, _0x85156f[_0x18e345(0x269)] += _0x5b6bb9, _0x85156f[_0x18e345(0x300)] += _0x33fc4e), _0x34699c[_0x18e345(0x588)](_0x368d37, _0x85156f);
                }
            }
        } catch (_0x1132ed) {
            console[_0x18e345(0x533)](_0x1132ed);
        }
    }), _0x34699c = new Map([..._0x34699c['entries']()][_0x32d6c7(0x184)]((_0x3de6a7, _0x86679) => {
        const _0x111176 = _0x32d6c7;
        return _0x3de6a7[0x1][_0x111176(0x2b9)] > _0x86679[0x1][_0x111176(0x2b9)] ? -0x1 : _0x3de6a7[0x1][_0x111176(0x2b9)] < _0x86679[0x1][_0x111176(0x2b9)] ? 0x1 : 0x0;
    })), Array[_0x32d6c7(0x2e2)](_0x34699c[_0x32d6c7(0x2f0)]())['forEach'](_0x38c075 => {
        const _0x27f323 = _0x32d6c7;
        let _0xef234b = _0x34699c['get'](_0x38c075);
        _0xef234b[_0x27f323(0x564)][_0x27f323(0x184)]((_0x25f4f8, _0x798c8d) => {
            const _0x27b442 = _0x27f323;
            return _0x25f4f8['nr_attacks'] > _0x798c8d[_0x27b442(0x344)] ? -0x1 : _0x25f4f8[_0x27b442(0x344)] < _0x798c8d[_0x27b442(0x344)] ? 0x1 : 0x0;
        }), _0x34699c[_0x27f323(0x588)](_0x38c075, _0xef234b);
    });
    let _0x19b381 = game_data[_0x32d6c7(0x1a4)][_0x32d6c7(0x4b8)][_0x32d6c7(0x38b)](),
        _0x2db70d = permissions[_0x19b381];
    _0x2db70d == _0x32d6c7(0x610) && Array[_0x32d6c7(0x2e2)](_0x34699c['keys']())[_0x32d6c7(0x432)](_0xdaf6c => {
        const _0x5f1179 = _0x32d6c7;
        let _0x554cd4 = game_data['player']['id'] + '';
        _0xdaf6c != _0x554cd4 && _0x34699c[_0x5f1179(0x152)](_0xdaf6c);
    });
    createTablePlayers(_0x34699c, _0x3ec1c3), sortInfoIncomings(_0x34699c, _0x3ec1c3), $(_0x32d6c7(0x237))['on'](_0x32d6c7(0x5e2), _0x5354ec => {
        const _0x4c2b9f = _0x32d6c7;
        let _0x4e7344 = _0x5354ec[_0x4c2b9f(0x523)];
        if (_0x4e7344['value'] != undefined) {
            if (_0x4e7344[_0x4c2b9f(0x492)]['match'](/\d+\|\d+/) != null) {
                let _0x2e3173 = _0x4e7344[_0x4c2b9f(0x492)][_0x4c2b9f(0x538)](/\d+\|\d+/)[0x0];
                _0x4e7344[_0x4c2b9f(0x492)] = _0x2e3173;
                let _0x29d652 = _0x3ec1c3[_0x4c2b9f(0x18a)](_0x2e3173)[_0x4c2b9f(0x29b)],
                    _0x5a8354 = _0x3ec1c3['get'](_0x2e3173)[_0x4c2b9f(0x1d1)];
                if ($(_0x4c2b9f(0x1da) + _0x5a8354 + ']')['is'](':visible') == ![]) $(_0x4c2b9f(0x217) + _0x29d652 + ']')['click']();
                if ($('.table_coord\x20img[coord-id=' + _0x5a8354 + ']')['is'](_0x4c2b9f(0x349)) == ![]) $(_0x4c2b9f(0x1da) + _0x5a8354 + ']')[_0x4c2b9f(0x30f)]();
            }
        }
    });
    let _0x3dcd0c = parseInt(document[_0x32d6c7(0x36b)]('settings_fang_cat')[_0x32d6c7(0x492)]),
        _0x1abf19 = parseInt(document['getElementById']('settings_small_attack')[_0x32d6c7(0x492)]),
        _0x56ceb7 = parseInt(document[_0x32d6c7(0x36b)]('settings_medium_attack')[_0x32d6c7(0x492)]);
    _0x1abf19 = !Number[_0x32d6c7(0x283)](_0x56ceb7) ? _0x56ceb7 : 0x1388, _0x56ceb7 = !Number['isNaN'](_0x56ceb7) ? _0x56ceb7 : 0x2710, _0x3dcd0c = !Number[_0x32d6c7(0x283)](_0x3dcd0c) ? _0x3dcd0c : 0x32;
    let _0x2b0d26 = new Map(),
        _0x1b27b8 = new Map();
    Array[_0x32d6c7(0x2e2)](_0x5c0f2d[_0x32d6c7(0x2f0)]())[_0x32d6c7(0x432)](_0x51c700 => {
        const _0x38fe42 = _0x32d6c7;
        try {
            let _0x57ab9a = _0x5c0f2d[_0x38fe42(0x18a)](_0x51c700),
                _0x4d7ec6 = _0x3ec1c3[_0x38fe42(0x18a)](_0x51c700)[_0x38fe42(0x1d1)],
                _0x3cf1a1 = _0x3ec1c3['get'](_0x51c700)[_0x38fe42(0x578)],
                _0x113086 = _0x3ec1c3[_0x38fe42(0x18a)](_0x51c700)[_0x38fe42(0x29b)],
                _0x4ecbff = _0x57ab9a[_0x38fe42(0x325)],
                _0x2b0f21 = null,
                _0x302690 = null;
            _0x57ab9a[_0x38fe42(0x5fd) + _0x51c700] != undefined && (_0x2b0f21 = _0x57ab9a[_0x38fe42(0x5fd) + _0x51c700], _0x302690 = _0x57ab9a[_0x38fe42(0x124) + _0x51c700]);
            let _0x32df70 = [],
                _0xc8c797 = null;
            if (_0x51c700 == _0x57ab9a[_0x38fe42(0x465)]) {
                for (let _0x1b40b0 = 0x0; _0x1b40b0 < _0x57ab9a[_0x38fe42(0x12f)][_0x38fe42(0x5d6)]; _0x1b40b0++) {
                    _0x32df70['push']({
                        'type': _0x57ab9a['attackingArmy'][_0x1b40b0][_0x38fe42(0x15c)],
                        'count': _0x57ab9a[_0x38fe42(0x12f)][_0x1b40b0][_0x38fe42(0x4b4)] - _0x57ab9a[_0x38fe42(0x132)][_0x1b40b0]['count']
                    });
                }
                if (_0x57ab9a[_0x38fe42(0x47f)][_0x38fe42(0x25b)]('off')) _0xc8c797 = _0x38fe42(0x206);
                else {
                    if (_0x57ab9a[_0x38fe42(0x47f)] == 'spy') _0xc8c797 = _0x38fe42(0x39f);
                    else _0x57ab9a[_0x38fe42(0x47f)][_0x38fe42(0x25b)](_0x38fe42(0x292)) && (_0xc8c797 = _0x38fe42(0x328));
                }
            } else {
                if (_0x51c700 == _0x57ab9a[_0x38fe42(0x44c)]) {
                    _0x57ab9a[_0x38fe42(0x2be)] != undefined && Object['keys'](_0x57ab9a['travelingTroops'])[_0x38fe42(0x432)](_0x3e485b => {
                        const _0x29e1b6 = _0x38fe42;
                        _0x32df70[_0x29e1b6(0x1fa)]({
                            'type': _0x3e485b,
                            'count': _0x57ab9a[_0x29e1b6(0x2be)][_0x3e485b]
                        });
                    });
                    if (_0x57ab9a[_0x38fe42(0x40a)][_0x38fe42(0x25b)](_0x38fe42(0x181))) _0xc8c797 = _0x38fe42(0x206);
                    else {
                        if (_0x57ab9a[_0x38fe42(0x40a)] == _0x38fe42(0x39f)) _0xc8c797 = _0x38fe42(0x39f);
                        else _0x57ab9a[_0x38fe42(0x40a)]['includes'](_0x38fe42(0x292)) && (_0xc8c797 = _0x38fe42(0x328));
                    }
                }
            }
            _0x2b0d26[_0x38fe42(0x588)](_0x4d7ec6, {
                'nr_fangs': 0x0,
                'nr_nobles': 0x0,
                'nr_nukes': 0x0,
                'player_destination_id': _0x113086,
                'player_destination_name': _0x3cf1a1,
                'time_report': _0x4ecbff,
                'time_report_home': _0x302690,
                'troopsAtHome': _0x2b0f21,
                'troopsAway': _0x32df70,
                'type_village': _0xc8c797,
                'villageId': _0x4d7ec6
            }), _0x1b27b8[_0x38fe42(0x588)](_0x113086, _0x3cf1a1);
        } catch (_0x4fa435) {
            console[_0x38fe42(0x533)](_0x4fa435);
        }
    });
    let _0x47a051 = new Map(),
        _0x4271ef = new Map(),
        _0x386104 = new Map();
    Array[_0x32d6c7(0x2e2)](_0x4c826e[_0x32d6c7(0x2f0)]())[_0x32d6c7(0x432)](_0x2b9ad9 => {
        const _0xa98442 = _0x32d6c7;
        let _0x31a1d4 = _0x4c826e[_0xa98442(0x18a)](_0x2b9ad9),
            _0x104386 = new Date(_0x31a1d4[_0xa98442(0x55d)])[_0xa98442(0x505)](),
            _0x4fb495 = _0x31a1d4['type_attack'],
            _0x1453bb = _0x31a1d4['coord_destination'],
            _0x312f4d = _0x31a1d4[_0xa98442(0x49f)],
            _0x57790e = _0x31a1d4[_0xa98442(0x469)],
            _0x2620af = _0x31a1d4['player_destination_name'],
            _0xc8612a = _0x31a1d4['player_origin_name'],
            _0x2765b4 = _0x31a1d4['player_origin_id'],
            _0x4e8bbb = _0x31a1d4['troops'],
            _0x338bdc = 0x0,
            _0x10cc32 = 0x0,
            _0x2d3b95 = 0x0,
            _0x30c63e = 0x0,
            _0x5f5a0a = null,
            _0x4d23ab = null,
            _0xc26d1b = null,
            _0x51b786 = null,
            _0x4d40e1 = null;
        if (_0x5c0f2d[_0xa98442(0x4d7)](_0x1453bb)) {
            let _0x4f57b5 = _0x5c0f2d[_0xa98442(0x18a)](_0x1453bb);
            _0x4f57b5[_0xa98442(0x5fd) + _0x1453bb] != undefined && (_0x5f5a0a = _0x4f57b5[_0xa98442(0x5fd) + _0x1453bb], _0x4d23ab = _0x4f57b5[_0xa98442(0x124) + _0x1453bb]);
            _0x51b786 = _0x4f57b5['time_report'];
            if (_0x1453bb == _0x4f57b5[_0xa98442(0x465)]) {
                _0xc26d1b = [];
                for (let _0x5b22e0 = 0x0; _0x5b22e0 < _0x4f57b5[_0xa98442(0x12f)][_0xa98442(0x5d6)]; _0x5b22e0++) {
                    _0xc26d1b[_0xa98442(0x1fa)]({
                        'type': _0x4f57b5['attackingArmy'][_0x5b22e0][_0xa98442(0x15c)],
                        'count': _0x4f57b5['attackingArmy'][_0x5b22e0][_0xa98442(0x4b4)] - _0x4f57b5[_0xa98442(0x132)][_0x5b22e0][_0xa98442(0x4b4)]
                    });
                }
                if (_0x4f57b5[_0xa98442(0x47f)][_0xa98442(0x25b)](_0xa98442(0x181))) _0x4d40e1 = 'light';
                else {
                    if (_0x4f57b5['typeAttacker'] == _0xa98442(0x39f)) _0x4d40e1 = _0xa98442(0x39f);
                    else _0x4f57b5[_0xa98442(0x47f)][_0xa98442(0x25b)](_0xa98442(0x292)) && (_0x4d40e1 = _0xa98442(0x328));
                }
            } else {
                if (_0x1453bb == _0x4f57b5[_0xa98442(0x44c)]) {
                    _0xc26d1b = [];
                    _0x4f57b5['travelingTroops'] != undefined && Object[_0xa98442(0x2f0)](_0x4f57b5[_0xa98442(0x2be)])[_0xa98442(0x432)](_0x4c437a => {
                        const _0x54c3b3 = _0xa98442;
                        _0xc26d1b[_0x54c3b3(0x1fa)]({
                            'type': _0x4c437a,
                            'count': _0x4f57b5[_0x54c3b3(0x2be)][_0x4c437a]
                        });
                    });
                    if (_0x4f57b5[_0xa98442(0x40a)][_0xa98442(0x25b)](_0xa98442(0x181))) _0x4d40e1 = _0xa98442(0x206);
                    else {
                        if (_0x4f57b5['typeDefender'] == 'spy') _0x4d40e1 = _0xa98442(0x39f);
                        else _0x4f57b5['typeDefender'][_0xa98442(0x25b)](_0xa98442(0x292)) && (_0x4d40e1 = 'sword');
                    }
                }
            }
        }
        if (_0x4e8bbb[_0xa98442(0x4ae)] + _0x4e8bbb[_0xa98442(0x206)] * 0x4 + _0x4e8bbb[_0xa98442(0x450)] * 0x5 + _0x4e8bbb[_0xa98442(0x38a)] * 0x8 > _0x56ceb7) _0x10cc32 = 0x1;
        else {
            if (_0x4e8bbb['axe'] + _0x4e8bbb[_0xa98442(0x206)] * 0x4 < _0x1abf19 && _0x4e8bbb[_0xa98442(0x38a)] >= _0x3dcd0c) _0x338bdc = 0x1;
        }
        if (_0x4e8bbb[_0xa98442(0x609)] > 0x0) _0x2d3b95 = 0x1;
        let _0x2557aa = 0x0;
        Object[_0xa98442(0x2f0)](_0x4e8bbb)['forEach'](_0x3d1371 => {
            _0x2557aa += _0x4e8bbb[_0x3d1371] * troopsPop[_0x3d1371];
        });
        if (_0x2557aa < 0xc8) _0x30c63e = 0x1;
        if (!tribemates[_0xa98442(0x25b)](_0x2620af)) {
            if (_0x104386 > _0x3e3d21) {
                if (mapAttacksVillageId[_0xa98442(0x4d7)](_0x312f4d)) {
                    let _0x46b3cd = mapAttacksVillageId[_0xa98442(0x18a)](_0x312f4d);
                    _0x46b3cd[_0xa98442(0x33b)] += _0x10cc32, _0x46b3cd[_0xa98442(0x63f)] += _0x2d3b95, _0x46b3cd['nr_fangs'] += _0x338bdc, mapAttacksVillageId['set'](_0x312f4d, _0x46b3cd);
                } else mapAttacksVillageId[_0xa98442(0x588)](_0x312f4d, {
                    'villageId': _0x312f4d,
                    'player_destination_name': _0x2620af,
                    'player_destination_id': _0x57790e,
                    'troopsAtHome': _0x5f5a0a,
                    'time_report_home': _0x4d23ab,
                    'troopsAway': _0xc26d1b,
                    'time_report': _0x51b786,
                    'type_village': _0x4d40e1,
                    'nr_nukes': _0x10cc32,
                    'nr_nobles': _0x2d3b95,
                    'nr_fangs': _0x338bdc
                });
                if (_0x4fb495['includes'](_0xa98442(0x4aa))) _0x386104[_0xa98442(0x588)](_0x57790e, _0x2620af);
            }
            _0x2765b4 = _0x2765b4[_0xa98442(0x29a)]();
            if (_0x47a051[_0xa98442(0x4d7)](_0x2765b4)) {
                let _0x1c168a = _0x47a051[_0xa98442(0x18a)](_0x2765b4);
                _0x1c168a[_0xa98442(0x33b)] += _0x10cc32, _0x1c168a[_0xa98442(0x63f)] += _0x2d3b95, _0x1c168a['nr_fangs'] += _0x338bdc, _0x1c168a[_0xa98442(0x35c)] += _0x30c63e, _0x47a051[_0xa98442(0x588)](_0x2765b4, _0x1c168a);
            } else _0x47a051[_0xa98442(0x588)](_0x2765b4, {
                'player_origin_name': _0xc8612a,
                'nr_nukes': _0x10cc32,
                'nr_nobles': _0x2d3b95,
                'nr_fangs': _0x338bdc,
                'nr_fakes': _0x30c63e
            });
            _0x57790e = _0x57790e[_0xa98442(0x29a)]();
            if (_0x4271ef[_0xa98442(0x4d7)](_0x57790e)) {
                let _0x21b5cf = _0x4271ef[_0xa98442(0x18a)](_0x57790e);
                _0x21b5cf[_0xa98442(0x33b)] += _0x10cc32, _0x21b5cf['nr_nobles'] += _0x2d3b95, _0x21b5cf['nr_fangs'] += _0x338bdc, _0x21b5cf['nr_fakes'] += _0x30c63e, _0x4271ef['set'](_0x57790e, _0x21b5cf);
            } else _0x4271ef[_0xa98442(0x588)](_0x57790e, {
                'player_origin_name': _0x2620af,
                'nr_nukes': _0x10cc32,
                'nr_nobles': _0x2d3b95,
                'nr_fangs': _0x338bdc,
                'nr_fakes': _0x30c63e
            });
        }
    }), mapAttacksVillageId = new Map([..._0x2b0d26, ...mapAttacksVillageId]), _0x386104 = new Map([..._0x1b27b8, ..._0x386104]);
    let _0x22e8df = new Map();
    Array[_0x32d6c7(0x2e2)](_0x34699c['keys']())[_0x32d6c7(0x432)](_0x4bd01d => {
        const _0x53ca8c = _0x32d6c7;
        let _0x54d5d1 = _0x34699c[_0x53ca8c(0x18a)](_0x4bd01d)[_0x53ca8c(0x564)];
        for (let _0x29e1d1 = 0x0; _0x29e1d1 < _0x54d5d1['length']; _0x29e1d1++) {
            let _0x2c4f51 = _0x54d5d1[_0x29e1d1][_0x53ca8c(0x5d0)],
                _0xb1cb4 = {},
                _0x4b6b09 = 0x0,
                _0x331375 = 0x14;
            for (let _0x3ebae4 = 0x0; _0x3ebae4 < _0x2c4f51[_0x53ca8c(0x5d6)]; _0x3ebae4++) {
                if (_0x2c4f51[_0x3ebae4][_0x53ca8c(0x64c)][_0x53ca8c(0x25b)]('support')) {
                    if (_0x2c4f51[_0x3ebae4][_0x53ca8c(0x442)]['spear'] != undefined) _0x4b6b09 += _0x2c4f51[_0x3ebae4][_0x53ca8c(0x442)][_0x53ca8c(0x4b2)] * troopsPop[_0x53ca8c(0x4b2)];
                    if (_0x2c4f51[_0x3ebae4][_0x53ca8c(0x442)]['sword'] != undefined) _0x4b6b09 += _0x2c4f51[_0x3ebae4][_0x53ca8c(0x442)][_0x53ca8c(0x328)] * troopsPop[_0x53ca8c(0x328)];
                    if (_0x2c4f51[_0x3ebae4][_0x53ca8c(0x442)][_0x53ca8c(0x3d2)] != undefined) _0x4b6b09 += _0x2c4f51[_0x3ebae4][_0x53ca8c(0x442)][_0x53ca8c(0x3d2)] * troopsPop[_0x53ca8c(0x3d2)];
                    if (game_data[_0x53ca8c(0x4b3)][_0x53ca8c(0x25b)](_0x53ca8c(0x487))) {
                        if (_0x2c4f51[_0x3ebae4][_0x53ca8c(0x442)]['heavy'] != undefined) _0x4b6b09 += _0x2c4f51[_0x3ebae4][_0x53ca8c(0x442)][_0x53ca8c(0x487)] * troopsPop['archer'];
                    }
                } else {
                    if (_0x2c4f51[_0x3ebae4][_0x53ca8c(0x64c)][_0x53ca8c(0x25b)](_0x53ca8c(0x21f))) {}
                }
            }
            if (_0x54d5d1[_0x29e1d1][_0x53ca8c(0x1ca)] != undefined) {
                let _0x2a254f = _0x54d5d1[_0x29e1d1][_0x53ca8c(0x1ca)]['obj_troops'];
                _0x331375 = _0x54d5d1[_0x29e1d1]['homeInfo'][_0x53ca8c(0x470)], _0x4b6b09 += _0x2a254f[_0x53ca8c(0x4b2)] * troopsPop[_0x53ca8c(0x4b2)], _0x4b6b09 += _0x2a254f[_0x53ca8c(0x328)] * troopsPop[_0x53ca8c(0x328)], _0x4b6b09 += _0x2a254f[_0x53ca8c(0x3d2)] * troopsPop[_0x53ca8c(0x3d2)];
                if (game_data[_0x53ca8c(0x4b3)][_0x53ca8c(0x25b)](_0x53ca8c(0x487))) _0x4b6b09 += _0x2a254f[_0x53ca8c(0x487)] * troopsPop[_0x53ca8c(0x487)];
            }
            _0x4b6b09 = parseInt(_0x4b6b09 / 0x3e8), _0xb1cb4[_0x53ca8c(0x1d1)] = _0x54d5d1[_0x29e1d1][_0x53ca8c(0x49f)], _0xb1cb4['playerId'] = _0x4bd01d, _0xb1cb4[_0x53ca8c(0x344)] = _0x54d5d1[_0x29e1d1][_0x53ca8c(0x344)], _0xb1cb4[_0x53ca8c(0x63f)] = _0x54d5d1[_0x29e1d1][_0x53ca8c(0x63f)], _0xb1cb4[_0x53ca8c(0x1bf)] = _0x54d5d1[_0x29e1d1][_0x53ca8c(0x1bf)], _0xb1cb4[_0x53ca8c(0x1bd)] = _0x54d5d1[_0x29e1d1][_0x53ca8c(0x1bd)], _0xb1cb4[_0x53ca8c(0x3ec)] = _0x54d5d1[_0x29e1d1][_0x53ca8c(0x3ec)], _0xb1cb4[_0x53ca8c(0x164)] = _0x54d5d1[_0x29e1d1][_0x53ca8c(0x164)], _0xb1cb4[_0x53ca8c(0x51a)] = _0x4b6b09, _0xb1cb4[_0x53ca8c(0x470)] = _0x331375, _0x22e8df['set'](_0x54d5d1[_0x29e1d1][_0x53ca8c(0x49f)], _0xb1cb4);
        }
    }), $(_0x32d6c7(0x3c7))['on'](_0x32d6c7(0x30f), () => {
        const _0x42a7ec = _0x32d6c7;
        console[_0x42a7ec(0x533)](_0x42a7ec(0x33a));
        let _0x47ca40 = $(_0x42a7ec(0x319))[_0x42a7ec(0x346)]();
        $(_0x42a7ec(0x284))[_0x42a7ec(0x268)](_0x42a7ec(0x543))[_0x42a7ec(0x501)](), $('#select_player')['append']($(_0x42a7ec(0x3e3), {
            'value': _0x42a7ec(0x3b6),
            'text': 'all'
        }));
        if (_0x47ca40 == 'defensive_info') Array[_0x42a7ec(0x2e2)](_0x34699c[_0x42a7ec(0x2f0)]())[_0x42a7ec(0x432)](_0x31460c => {
            const _0x2a9f5f = _0x42a7ec;
            $(_0x2a9f5f(0x284))['append']($(_0x2a9f5f(0x3e3), {
                'value': _0x31460c,
                'text': _0x34699c['get'](_0x31460c)['player_destination_name']
            }));
        });
        else _0x47ca40 == _0x42a7ec(0x4d9) && Array[_0x42a7ec(0x2e2)](_0x386104[_0x42a7ec(0x2f0)]())[_0x42a7ec(0x432)](_0x24bbcd => {
            const _0x4c11fb = _0x42a7ec;
            $(_0x4c11fb(0x284))[_0x4c11fb(0x5b2)]($(_0x4c11fb(0x3e3), {
                'value': _0x24bbcd,
                'text': _0x386104[_0x4c11fb(0x18a)](_0x24bbcd)
            }));
        });
    }), $(_0x32d6c7(0x319))[_0x32d6c7(0x30f)](), document[_0x32d6c7(0x36b)](_0x32d6c7(0x557))[_0x32d6c7(0x1c0)](_0x32d6c7(0x30f), () => {
        const _0x13b98b = _0x32d6c7;
        let _0x446733 = $(_0x13b98b(0x319))['val']();
        !_0x446733 && UI[_0x13b98b(0x484)](_0x13b98b(0x4cd), 0x7d0);
        if (_0x446733 == _0x13b98b(0x4d9)) {
            console[_0x13b98b(0x533)](_0x13b98b(0x494), mapAttacksVillageId);
            let _0x4d5458 = !![],
                _0x494375 = TWMap[_0x13b98b(0x24c)]['spawnSector'];
            TWMap['mapHandler'][_0x13b98b(0x562)] = function(_0x2509e1, _0x9aaeac) {
                const _0x585c6b = _0x13b98b;
                _0x494375[_0x585c6b(0x431)](TWMap[_0x585c6b(0x24c)], _0x2509e1, _0x9aaeac);
                let _0x56c86d = document['getElementById']('select_player')['value'];
                console[_0x585c6b(0x533)](_0x585c6b(0x431), _0x56c86d);
                let _0xd8e7d5 = $(_0x585c6b(0x319))[_0x585c6b(0x346)]();
                _0x4d5458 == !![] && _0xd8e7d5 == _0x585c6b(0x4d9) && (_0x4d5458 = ![], window['setTimeout'](() => {
                    const _0x5a3d20 = _0x585c6b;
                    let _0x526ad5 = TWMap[_0x5a3d20(0x4e2)][_0x5a3d20(0x535)];
                    Object['keys'](_0x526ad5)[_0x5a3d20(0x432)](_0x8c8b61 => {
                        const _0x12b474 = _0x5a3d20;
                        let _0x4f7990 = _0x526ad5[_0x8c8b61]['_elements'];
                        Object[_0x12b474(0x2f0)](_0x4f7990)[_0x12b474(0x432)](_0x49d535 => {
                            const _0x23e389 = _0x12b474;
                            let _0x3b0a38 = _0x4f7990[_0x49d535]['id'][_0x23e389(0x538)](/\d+/);
                            if (_0x3b0a38 != null) {
                                if (mapAttacksVillageId[_0x23e389(0x4d7)](_0x3b0a38[0x0])) {
                                    if (_0x56c86d == _0x23e389(0x3b6)) {
                                        let _0x3c22c4 = mapAttacksVillageId[_0x23e389(0x18a)](_0x3b0a38[0x0]);
                                        createMapInfoOffensiveSmall(_0x3c22c4), console[_0x23e389(0x533)](_0x23e389(0x3f3));
                                    } else {
                                        let _0x3bfee9 = mapAttacksVillageId[_0x23e389(0x18a)](_0x3b0a38[0x0]);
                                        _0x3bfee9['player_destination_id'] == _0x56c86d && (createMapInfoOffensiveSmall(_0x3bfee9), console['log']('draw\x20offensive\x20only\x20for\x201\x20player'));
                                    }
                                }
                            }
                        });
                    }), _0x4d5458 = !![];
                }, 0xc8));
            }, showPopupInfo(mapAttacksVillageId);
        } else {
            if (_0x446733 == _0x13b98b(0x49b)) {
                console[_0x13b98b(0x533)](_0x13b98b(0x178), _0x22e8df);
                let _0x7e87fa = !![],
                    _0x73a59 = TWMap[_0x13b98b(0x24c)]['spawnSector'];
                TWMap['mapHandler'][_0x13b98b(0x562)] = function(_0x28ee62, _0x567cca) {
                    const _0x473612 = _0x13b98b;
                    _0x73a59['call'](TWMap[_0x473612(0x24c)], _0x28ee62, _0x567cca);
                    let _0x392be3 = document['getElementById']('select_player')['value'];
                    console[_0x473612(0x533)](_0x473612(0x431), _0x392be3);
                    let _0x5b3a23 = $(_0x473612(0x319))['val']();
                    _0x7e87fa == !![] && _0x5b3a23 == _0x473612(0x49b) && (_0x7e87fa = ![], window[_0x473612(0x5c9)](() => {
                        const _0x121808 = _0x473612;
                        let _0xef5f08 = TWMap[_0x121808(0x4e2)][_0x121808(0x535)];
                        Object[_0x121808(0x2f0)](_0xef5f08)[_0x121808(0x432)](_0x3b136d => {
                            const _0x31d4ef = _0x121808;
                            let _0x7ce15a = _0xef5f08[_0x3b136d]['_elements'];
                            Object[_0x31d4ef(0x2f0)](_0x7ce15a)['forEach'](_0x5ccc7b => {
                                const _0x86b182 = _0x31d4ef;
                                let _0x4ddeae = _0x7ce15a[_0x5ccc7b]['id'][_0x86b182(0x538)](/\d+/);
                                if (_0x4ddeae != null) {
                                    if (_0x22e8df['has'](_0x4ddeae[0x0])) {
                                        if (_0x392be3 == _0x86b182(0x3b6)) {
                                            let _0x55f373 = _0x22e8df[_0x86b182(0x18a)](_0x4ddeae[0x0]);
                                            createMapInfoDefensiveSmall(_0x55f373), console['log']('draw\x20defensive\x20for\x20every\x20player');
                                        } else {
                                            let _0x2f32df = _0x22e8df[_0x86b182(0x18a)](_0x4ddeae[0x0]);
                                            _0x2f32df[_0x86b182(0x29b)] == _0x392be3 && (createMapInfoDefensiveSmall(_0x2f32df), console[_0x86b182(0x533)]('draw\x20defensive\x20only\x20for\x201\x20player'));
                                        }
                                    }
                                }
                            });
                        }), _0x7e87fa = !![];
                    }, 0xc8));
                };
            }
        }
        UI[_0x13b98b(0x5ea)](_0x13b98b(0x25f), 0x7d0);
    }), console['log'](_0x32d6c7(0x281), _0x3d2368), console['log']('map_history_upload', _0x3e7e6a);
    let _0xec0fa0 = new Map();
    Array[_0x32d6c7(0x2e2)](_0x3e7e6a[_0x32d6c7(0x2f0)]())[_0x32d6c7(0x432)](_0x2b5aa2 => {
        const _0x31653f = _0x32d6c7;
        let _0x50f8f0 = _0x3e7e6a[_0x31653f(0x18a)](_0x2b5aa2);
        if (_0xec0fa0[_0x31653f(0x4d7)](_0x50f8f0[_0x31653f(0x29b)])) {
            let _0x38052d = _0xec0fa0[_0x31653f(0x18a)](_0x50f8f0[_0x31653f(0x29b)]) + 0x1;
            _0xec0fa0[_0x31653f(0x588)](_0x50f8f0['playerId'], _0x38052d);
        } else _0xec0fa0[_0x31653f(0x588)](_0x50f8f0[_0x31653f(0x29b)], 0x1);
    }), console[_0x32d6c7(0x533)](_0x32d6c7(0x385), _0xec0fa0), Array[_0x32d6c7(0x2e2)](_0x3d2368[_0x32d6c7(0x2f0)]())[_0x32d6c7(0x432)](_0x1dee42 => {
        const _0xd2e91b = _0x32d6c7;
        let _0x40a87d = _0x3d2368['get'](_0x1dee42),
            _0x5018e8 = _0xec0fa0['get'](_0x1dee42);
        if (_0x5018e8 == undefined) _0x5018e8 = 0x0;
        _0x40a87d[_0xd2e91b(0x4b8)] = _0x40a87d[_0xd2e91b(0x4b8)] + ('\x20(' + _0x5018e8 + ')');
    });
    let _0x1cc51e = [];
    Array[_0x32d6c7(0x2e2)](_0x14cd71[_0x32d6c7(0x2f0)]())[_0x32d6c7(0x432)](_0x39629c => {
        let _0x11b5be = _0x14cd71['get'](_0x39629c);
        _0x1cc51e = _0x1cc51e['concat'](_0x11b5be);
    });
    for (let _0xa7a04e = 0x0; _0xa7a04e < _0x1cc51e[_0x32d6c7(0x5d6)]; _0xa7a04e++) {
        _0x1cc51e[_0xa7a04e]['date_launch'] = calculateDateLaunch(_0x1cc51e[_0xa7a04e]);
    }
    _0x1cc51e[_0x32d6c7(0x184)]((_0x30bf0b, _0x4db7ee) => {
        const _0x18d331 = _0x32d6c7;
        return _0x30bf0b[_0x18d331(0x633)] > _0x4db7ee[_0x18d331(0x633)] ? 0x1 : _0x30bf0b[_0x18d331(0x633)] < _0x4db7ee[_0x18d331(0x633)] ? -0x1 : _0x30bf0b[_0x18d331(0x314)] < _0x4db7ee[_0x18d331(0x314)] ? -0x1 : _0x30bf0b['date_launch'] > _0x4db7ee[_0x18d331(0x314)] ? 0x1 : 0x0;
    });
    let _0x31415e = 0x2710;
    for (let _0x5acd71 = 0x0; _0x5acd71 < _0x1cc51e[_0x32d6c7(0x5d6)] - 0x1; _0x5acd71++) {
        _0x1cc51e[_0x5acd71][_0x32d6c7(0x633)] == _0x1cc51e[_0x5acd71 + 0x1]['player_off'] && (Math[_0x32d6c7(0x62b)](_0x1cc51e[_0x5acd71]['date_launch'] - _0x1cc51e[_0x5acd71 + 0x1][_0x32d6c7(0x314)]) < _0x31415e && (_0x1cc51e['splice'](_0x5acd71, 0x1), _0x5acd71--));
    }
    _0x1cc51e['sort']((_0x17bd12, _0x4088a0) => {
        const _0x174a51 = _0x32d6c7;
        return new Date(_0x17bd12[_0x174a51(0x2e7)])[_0x174a51(0x505)]() < new Date(_0x4088a0['date_land'])[_0x174a51(0x505)]() ? -0x1 : new Date(_0x17bd12['date_land'])[_0x174a51(0x505)]() > new Date(_0x4088a0[_0x174a51(0x2e7)])[_0x174a51(0x505)]() ? 0x1 : 0x0;
    }), console[_0x32d6c7(0x533)](_0x32d6c7(0x1e4), _0x1cc51e);
    let _0x2ab039 = new Map();
    for (let _0x29e60c = 0x0; _0x29e60c < _0x1cc51e[_0x32d6c7(0x5d6)]; _0x29e60c++) {
        let _0x30d215 = _0x1cc51e[_0x29e60c]['date_land'];
        if (_0x30d215 != '') {
            let _0x3fda14 = _0x30d215[_0x32d6c7(0x2ab)](0x0, 0x5) + ',\x20' + _0x30d215['split']('\x20')[0x1]['split'](':')[0x0] + 'h';
            _0x2ab039['has'](_0x3fda14) ? _0x2ab039['set'](_0x3fda14, _0x2ab039[_0x32d6c7(0x18a)](_0x3fda14) + 0x1) : _0x2ab039['set'](_0x3fda14, 0x1);
        } else console[_0x32d6c7(0x533)]('error'), console[_0x32d6c7(0x533)](_0x1cc51e[_0x29e60c]);
    }
    console['log']('map_nr_incs_hour', _0x2ab039);
    let _0x2788b6 = Array['from'](_0x2ab039['entries']());
    _0x47a051 = new Map([..._0x47a051['entries']()][_0x32d6c7(0x184)]((_0x550494, _0x36cec8) => {
        const _0x53245d = _0x32d6c7;
        return _0x550494[0x1][_0x53245d(0x35c)] > _0x36cec8[0x1]['nr_fakes'] ? -0x1 : _0x550494[0x1][_0x53245d(0x35c)] < _0x36cec8[0x1][_0x53245d(0x35c)] ? 0x1 : 0x0;
    })), _0x4271ef = new Map([..._0x4271ef[_0x32d6c7(0x434)]()][_0x32d6c7(0x184)]((_0x2d07d9, _0x73610e) => {
        const _0x771377 = _0x32d6c7;
        return _0x2d07d9[0x1][_0x771377(0x35c)] > _0x73610e[0x1]['nr_fakes'] ? -0x1 : _0x2d07d9[0x1][_0x771377(0x35c)] < _0x73610e[0x1][_0x771377(0x35c)] ? 0x1 : 0x0;
    })), _0x3d2368 = new Map([..._0x3d2368['entries']()]['sort']((_0x13ec85, _0x388494) => {
        const _0x3db217 = _0x32d6c7;
        return new Date(_0x13ec85[0x1][_0x3db217(0x37a)])['getTime']() > new Date(_0x388494[0x1][_0x3db217(0x37a)])[_0x3db217(0x505)]() ? -0x1 : new Date(_0x13ec85[0x1][_0x3db217(0x37a)])[_0x3db217(0x505)]() < new Date(_0x388494[0x1][_0x3db217(0x37a)])['getTime']() ? 0x1 : 0x0;
    })), createTableRankingAttackers(_0x47a051), createTableRankingDefenders(_0x4271ef), createTableUploadTime(_0x3d2368), createTableGetCoords(_0x3ec1c3), document[_0x32d6c7(0x36b)](_0x32d6c7(0x147))[_0x32d6c7(0x1c0)](_0x32d6c7(0x30f), () => {
        createTableRankingAttackers(_0x47a051);
    }), document['getElementById'](_0x32d6c7(0x58b))[_0x32d6c7(0x1c0)](_0x32d6c7(0x30f), () => {
        createTableRankingDefenders(_0x4271ef);
    }), document[_0x32d6c7(0x36b)]('btn_upload_time')[_0x32d6c7(0x1c0)]('click', () => {
        createTableUploadTime(_0x3d2368);
    }), document[_0x32d6c7(0x36b)](_0x32d6c7(0x635))[_0x32d6c7(0x1c0)]('click', () => {
        createTableGetCoords(_0x3ec1c3);
    }), document[_0x32d6c7(0x36b)](_0x32d6c7(0x155))[_0x32d6c7(0x1c0)](_0x32d6c7(0x30f), () => {
        const _0x3674ab = _0x32d6c7;
        let _0x49aa99 = _0x3674ab(0x2a7);
        Dialog['show'](_0x3674ab(0x1cc), _0x49aa99), createChart(_0x2788b6, 'div_op_spotter');
    });
}
window.viewSupport=viewSupport;
function calculateDateLaunch(_0x227153) {
    const _0x40d12e = _0x555ef8;
    let _0x4af3d1 = calcDistance(_0x227153[_0x40d12e(0x1d0)], _0x227153['coord_off']),
        _0x56bd59 = 0x0;
    if (_0x227153[_0x40d12e(0x14b)]['includes'](_0x40d12e(0x609))) _0x56bd59 = _0x4af3d1 * nobleSpeed;
    else {
        if (_0x227153['labelName'][_0x40d12e(0x25b)](_0x40d12e(0x450))) _0x56bd59 = _0x4af3d1 * ramSpeed;
        else {
            if (_0x227153['labelName'][_0x40d12e(0x25b)]('sword')) _0x56bd59 = _0x4af3d1 * swordSpeed;
            else {
                if (_0x227153[_0x40d12e(0x14b)][_0x40d12e(0x25b)](_0x40d12e(0x4ae))) _0x56bd59 = _0x4af3d1 * axeSpeed;
                else _0x56bd59 = _0x4af3d1 * heavySpeed;
            }
        }
    }
    let _0x546e35 = new Date(_0x227153[_0x40d12e(0x2e7)])[_0x40d12e(0x505)]() - _0x56bd59;
    return _0x546e35;
}

function createMapInfoDefensiveSmall(_0x3cc210) {
    const _0x50205f = _0x555ef8;
    try {
        if (document['getElementById'](_0x50205f(0x2c3) + _0x3cc210[_0x50205f(0x1d1)]) == null && _0x3cc210[_0x50205f(0x344)] > 0x0) {
            let _0x4a0713 = _0x50205f(0x4a0),
                _0x438735 = '#E80000',
                _0x1ac119 = '#157de5',
                _0x171a40 = _0x50205f(0x649),
                _0x395731 = document[_0x50205f(0x36b)](_0x50205f(0x170) + _0x3cc210[_0x50205f(0x1d1)]),
                _0x465639 = document['getElementById']('map_village_' + _0x3cc210[_0x50205f(0x1d1)])[_0x50205f(0x156)],
                _0xf8a105 = _0x395731['style']['left'],
                _0x1ef4bb = _0x395731[_0x50205f(0x5b0)][_0x50205f(0x27b)],
                _0x580164 = _0x50205f(0x430);
            if (_0x3cc210[_0x50205f(0x1bf)] == 0x1) _0x580164 = 'background-color:rgba(255,\x2010,\x2010,\x200.14);outline:rgba(255,\x2051,\x200,\x200.7)\x20solid\x201px';
            if (_0x3cc210[_0x50205f(0x3ec)] == 0x1) _0x580164 = _0x50205f(0x62a);
            if (_0x3cc210[_0x50205f(0x1bd)] == 0x1 || _0x3cc210[_0x50205f(0x164)] == 0x1) _0x580164 = 'background-color:rgba(155,\x20252,\x2010,\x200.14);outline:rgba(51,\x20255,\x200,\x200.7)\x20solid\x201px';
            while (document[_0x50205f(0x36b)](_0x50205f(0x62e) + _0x3cc210[_0x50205f(0x1d1)]) != null) {
                document['getElementById'](_0x50205f(0x62e) + _0x3cc210[_0x50205f(0x1d1)])[_0x50205f(0x501)]();
            }
            if (document[_0x50205f(0x36b)](_0x50205f(0x354) + _0x3cc210[_0x50205f(0x1d1)] + '_0') != null) document[_0x50205f(0x36b)](_0x50205f(0x354) + _0x3cc210[_0x50205f(0x1d1)] + '_0')[_0x50205f(0x501)]();
            if (document[_0x50205f(0x36b)](_0x50205f(0x354) + _0x3cc210[_0x50205f(0x1d1)] + '_1') != null) document[_0x50205f(0x36b)](_0x50205f(0x354) + _0x3cc210[_0x50205f(0x1d1)] + '_1')['remove']();
            let _0x212a3b = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<img\x20style=\x22position:absolute;left:' + _0xf8a105 + ';top:' + _0x1ef4bb + _0x50205f(0x51c) + _0x4a0713 + _0x50205f(0x1a1) + _0xf8a105 + _0x50205f(0x1d9) + _0x1ef4bb + _0x50205f(0x2a6) + _0x3cc210[_0x50205f(0x344)] + _0x50205f(0x4e3) + _0x1ac119 + _0x50205f(0x587) + _0xf8a105 + _0x50205f(0x1d9) + _0x1ef4bb + _0x50205f(0x514) + _0x3cc210[_0x50205f(0x51a)] + _0x50205f(0x400) + _0x3cc210[_0x50205f(0x1d1)] + _0x50205f(0x180) + _0xf8a105 + _0x50205f(0x1d9) + _0x1ef4bb + ';width:51px;height:36px;z-index:3;\x20' + _0x580164 + _0x50205f(0x43a);
            _0x3cc210[_0x50205f(0x63f)] > 0x0 && (_0x212a3b += _0x50205f(0x4fd) + _0x438735 + '\x22\x20\x20class=\x22shadow20\x22\x20style=\x22position:absolute;left:' + _0xf8a105 + ';top:' + _0x1ef4bb + _0x50205f(0x4ce) + _0x3cc210[_0x50205f(0x63f)] + _0x50205f(0x596)), _0x3cc210[_0x50205f(0x470)] < 0x14 && (_0x212a3b += _0x50205f(0x4fd) + _0x171a40 + _0x50205f(0x587) + _0xf8a105 + _0x50205f(0x1d9) + _0x1ef4bb + _0x50205f(0x405) + _0x3cc210[_0x50205f(0x470)] + _0x50205f(0x596)), $(_0x212a3b)[_0x50205f(0x334)](_0x465639);
        }
    } catch (_0x1e4edd) {}
}

function createMapInfoOffensiveSmall(_0x19acbe) {
    const _0x14e325 = _0x555ef8;
    try {
        if (document[_0x14e325(0x36b)](_0x14e325(0x2c3) + _0x19acbe[_0x14e325(0x1d1)]) == null) {
            let _0x50046c = _0x14e325(0x4a0),
                _0x5668e3 = _0x14e325(0x48f),
                _0x4e6c48 = _0x14e325(0x2ff),
                _0x10f0c5 = '#a06a34',
                _0x1e1a90 = document[_0x14e325(0x36b)](_0x14e325(0x170) + _0x19acbe['villageId']),
                _0x35918e = document[_0x14e325(0x36b)](_0x14e325(0x170) + _0x19acbe[_0x14e325(0x1d1)])[_0x14e325(0x156)],
                _0x8b722e = _0x1e1a90[_0x14e325(0x5b0)]['left'],
                _0x464263 = _0x1e1a90[_0x14e325(0x5b0)][_0x14e325(0x27b)],
                _0x4f9827 = 'background-color:rgba(155,\x20252,\x2010,\x200.14);outline:rgba(51,\x20255,\x200,\x200.7)\x20solid\x201px',
                _0x1d7008 = 'background-color:rgba(255,\x2010,\x2010,\x200.14);outline:rgba(255,\x2051,\x200,\x200.7)\x20solid\x201px',
                _0x80b715 = _0x14e325(0x62a),
                _0x425cb9 = _0x14e325(0x430);
            var _0x5c2458 = _0x14e325(0x50c);
            while (document['getElementById']('map_icons_' + _0x19acbe[_0x14e325(0x1d1)]) != null) {
                document[_0x14e325(0x36b)]('map_icons_' + _0x19acbe[_0x14e325(0x1d1)])[_0x14e325(0x501)]();
            }
            if (document[_0x14e325(0x36b)](_0x14e325(0x354) + _0x19acbe[_0x14e325(0x1d1)] + '_0') != null) document['getElementById']('map_cmdicons_' + _0x19acbe[_0x14e325(0x1d1)] + '_0')[_0x14e325(0x501)]();
            if (document[_0x14e325(0x36b)](_0x14e325(0x354) + _0x19acbe[_0x14e325(0x1d1)] + '_1') != null) document[_0x14e325(0x36b)](_0x14e325(0x354) + _0x19acbe[_0x14e325(0x1d1)] + '_1')[_0x14e325(0x501)]();
            let _0x279331 = '';
            if (_0x19acbe['type_village'] != null) {
                if (_0x19acbe[_0x14e325(0x35a)] == _0x14e325(0x328)) _0x279331 = 'background-color:rgb(0,255,255)';
                else {
                    if (_0x19acbe[_0x14e325(0x35a)] == 'light') _0x279331 = _0x14e325(0x47c);
                    else {
                        if (_0x19acbe['type_village'] == 'spy') _0x279331 = 'background-color:rgb(255,255,255)';
                    }
                }
            }
            let _0x46a0b1 = 0x0,
                _0x2ca9f6 = ![];
            if (_0x19acbe[_0x14e325(0x4ac)] != null && _0x19acbe[_0x14e325(0x4ac)] != undefined) {
                for (let _0x2d733e = 0x0; _0x2d733e < _0x19acbe[_0x14e325(0x4ac)]['length']; _0x2d733e++) {
                    let _0x5e9d38 = _0x19acbe[_0x14e325(0x4ac)][_0x2d733e][_0x14e325(0x15c)],
                        _0x113be7 = _0x19acbe[_0x14e325(0x4ac)][_0x2d733e][_0x14e325(0x4b4)];
                    (_0x5e9d38 == _0x14e325(0x4b2) || _0x5e9d38 == _0x14e325(0x328) || _0x5e9d38 == _0x14e325(0x487) || _0x5e9d38 == _0x14e325(0x3d2)) && (_0x46a0b1 += troopsPop[_0x5e9d38] * _0x113be7), _0x5e9d38 == _0x14e325(0x609) && _0x113be7 > 0x0 && (_0x2ca9f6 = !![]);
                }
                _0x46a0b1 = parseInt(Math[_0x14e325(0x510)](_0x46a0b1 / 0x3e8));
            } else _0x46a0b1 = -0x1;
            if (_0x2ca9f6 == ![] && _0x19acbe[_0x14e325(0x257)] != null && _0x19acbe[_0x14e325(0x257)] != undefined) {
                if (_0x19acbe[_0x14e325(0x257)][_0x14e325(0x5d6)] > 0x0) {
                    let _0x206cf0 = _0x19acbe[_0x14e325(0x257)]['slice'](-0x1)[0x0];
                    _0x206cf0[_0x14e325(0x15c)] == _0x14e325(0x609) && _0x206cf0['count'] > 0x0 && (_0x2ca9f6 = !![]);
                }
            }
            let _0xf0fd1;
            if (_0x19acbe[_0x14e325(0x33b)] > 0x0 || _0x19acbe['nr_nobles'] > 0x0 || _0x19acbe[_0x14e325(0x416)] > 0x0) {
                if (_0x19acbe['type_village'] != null) {
                    let _0x2cca30 = _0x2ca9f6 == !![] ? 'background-color:rgb(255,255,0)' : _0x279331,
                        _0x24b69e = _0x19acbe['type_village'] == _0x14e325(0x206) ? _0x80b715 : _0x1d7008;
                    _0xf0fd1 = _0x14e325(0x336) + _0x19acbe[_0x14e325(0x1d1)] + _0x14e325(0x180) + _0x8b722e + ';top:' + _0x464263 + _0x14e325(0x3d7) + _0x24b69e + '\x22></div>', _0xf0fd1 += '<img\x20style=\x22position:absolute;left:' + _0x8b722e + _0x14e325(0x1d9) + _0x464263 + ';width:16px;height:16px;z-index:4;margin-left:35px;' + _0x2cca30 + _0x14e325(0x16f) + _0x19acbe['type_village'] + _0x14e325(0x56d), _0x46a0b1 >= 0x0 && (_0xf0fd1 += _0x14e325(0x246) + _0x14e325(0x573) + _0x14e325(0x587) + _0x8b722e + _0x14e325(0x1d9) + _0x464263 + _0x14e325(0x52f) + _0x46a0b1 + 'k</font></center>');
                } else _0xf0fd1 = _0x14e325(0x2d3) + _0x19acbe[_0x14e325(0x1d1)] + _0x14e325(0x180) + _0x8b722e + _0x14e325(0x1d9) + _0x464263 + ';width:51px;height:36px;z-index:3;\x20' + _0x5c2458 + _0x14e325(0x271);
                _0x19acbe[_0x14e325(0x416)] > 0x0 && (_0xf0fd1 += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center><font\x20color=\x22' + _0x10f0c5 + _0x14e325(0x587) + _0x8b722e + _0x14e325(0x1d9) + _0x464263 + _0x14e325(0x1dd) + _0x19acbe['nr_fangs'] + _0x14e325(0x596)), _0x19acbe[_0x14e325(0x33b)] > 0x0 && (_0xf0fd1 += _0x14e325(0x5b9) + _0x50046c + '\x22\x20class=\x22shadow20\x22\x20style=\x22position:absolute;left:' + _0x8b722e + _0x14e325(0x1d9) + _0x464263 + _0x14e325(0x2a4) + _0x19acbe[_0x14e325(0x33b)] + _0x14e325(0x596)), _0x19acbe[_0x14e325(0x63f)] > 0x0 && (_0xf0fd1 += _0x14e325(0x5b9) + _0x5668e3 + _0x14e325(0x587) + _0x8b722e + ';top:' + _0x464263 + ';width:14px;height:14px;z-index:4;margin-top:22px;margin-left:34px;font-size:\x2012px;background-color:black;\x22>' + _0x19acbe['nr_nobles'] + _0x14e325(0x596));
            } else {
                if (_0x19acbe['type_village'] != null) {
                    let _0x4de149 = _0x2ca9f6 == !![] ? _0x14e325(0x55f) : _0x279331,
                        _0x9f43 = _0x19acbe[_0x14e325(0x35a)] == 'light' ? _0x80b715 : _0x1d7008;
                    _0xf0fd1 = _0x14e325(0x336) + _0x19acbe[_0x14e325(0x1d1)] + _0x14e325(0x180) + _0x8b722e + _0x14e325(0x1d9) + _0x464263 + ';width:51px;height:36px;z-index:3;\x20' + _0x9f43 + '\x22></div>', _0xf0fd1 += _0x14e325(0x54b) + _0x8b722e + _0x14e325(0x1d9) + _0x464263 + _0x14e325(0x242) + _0x4de149 + _0x14e325(0x16f) + _0x19acbe[_0x14e325(0x35a)] + '.png\x22>', _0x46a0b1 >= 0x0 && (_0xf0fd1 += _0x14e325(0x246) + _0x14e325(0x573) + _0x14e325(0x587) + _0x8b722e + _0x14e325(0x1d9) + _0x464263 + _0x14e325(0x52f) + _0x46a0b1 + _0x14e325(0x1ae));
                }
            }
            $(_0xf0fd1)[_0x14e325(0x334)](_0x35918e);
        }
    } catch (_0x30ffb1) {
        console[_0x14e325(0x533)](_0x30ffb1);
    }
}

function showPopupInfo(_0x275f67) {
    const _0xa90ef1 = _0x555ef8;
    let _0x41b226 = TWMap['popup'][_0xa90ef1(0x462)];
    TWMap[_0xa90ef1(0x1ce)][_0xa90ef1(0x462)] = function(_0x7e3572, _0x6e52d3, _0x5b8bf3) {
        const _0x4b6dc3 = _0xa90ef1;
        console[_0x4b6dc3(0x533)](_0x4b6dc3(0x312)), _0x41b226[_0x4b6dc3(0x431)](TWMap['popup'], _0x7e3572, _0x6e52d3, _0x5b8bf3);
        let _0x3e78ee = _0x7e3572;
        console[_0x4b6dc3(0x533)](_0x3e78ee);
        let _0x22bb6c = _0x275f67['get'](_0x3e78ee['id']),
            _0x7e80c1 = game_data[_0x4b6dc3(0x4b3)],
            _0x165954 = 0x0,
            _0xa5f6c8 = ![];
        if (_0x7e80c1[_0x4b6dc3(0x25b)](_0x4b6dc3(0x592))) _0x165954 = 0x1;
        let _0x2b1fe2 = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20\x20class=\x22vis\x20popup_info_extra\x22\x20border=\x221\x22\x20style=\x22width:\x20100%;border-collapse:\x20collapse\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;background-color:#c1a264\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:0px;\x22></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;background-color:#c1a264\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:0px;\x22><b>seen</b></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>';
        for (let _0x5c3da7 = 0x0; _0x5c3da7 < _0x7e80c1['length'] - _0x165954; _0x5c3da7++) {
            _0x2b1fe2 += _0x4b6dc3(0x60d) + _0x7e80c1[_0x5c3da7] + '.png\x22></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>';
        }
        _0x2b1fe2 += _0x4b6dc3(0x4dd);
        if (_0x22bb6c != undefined) {
            if (_0x22bb6c[_0x4b6dc3(0x4ac)] != null) {
                _0xa5f6c8 = !![], _0x2b1fe2 += _0x4b6dc3(0x30d) + _0x22bb6c[_0x4b6dc3(0x231)] + _0x4b6dc3(0x4da);
                for (let _0x2f3e07 = 0x0; _0x2f3e07 < _0x22bb6c[_0x4b6dc3(0x4ac)][_0x4b6dc3(0x5d6)] - _0x165954; _0x2f3e07++) {
                    _0x2b1fe2 += _0x4b6dc3(0x409) + _0x22bb6c[_0x4b6dc3(0x4ac)][_0x2f3e07][_0x4b6dc3(0x4b4)] + _0x4b6dc3(0x4bc);
                }
                _0x2b1fe2 += '</tr>';
            }
        }
        if (_0x22bb6c != undefined) {
            if (_0x22bb6c[_0x4b6dc3(0x257)] != null) {
                _0xa5f6c8 = !![], _0x2b1fe2 += _0x4b6dc3(0x507) + _0x22bb6c[_0x4b6dc3(0x325)] + _0x4b6dc3(0x24b);
                for (let _0x36c314 = 0x0; _0x36c314 < _0x22bb6c[_0x4b6dc3(0x257)][_0x4b6dc3(0x5d6)]; _0x36c314++) {
                    _0x2b1fe2 += _0x4b6dc3(0x409) + _0x22bb6c[_0x4b6dc3(0x257)][_0x36c314]['count'] + _0x4b6dc3(0x4bc);
                }
                _0x2b1fe2 += _0x4b6dc3(0x4dd);
            }
        }
        _0x2b1fe2 += _0x4b6dc3(0x3a5), _0xa5f6c8 == !![] && (console['log'](document[_0x4b6dc3(0x36b)](_0x4b6dc3(0x377))), $(_0x4b6dc3(0x602))[_0x4b6dc3(0x501)](), $(_0x4b6dc3(0x5a9))[_0x4b6dc3(0x4c2)]('<tr><td\x20colspan=\x223\x22>' + _0x2b1fe2 + '</td></tr>'));
    };
}

function createTablePlayers(_0x1ea32c, _0x41e1d8) {
    const _0x1cc883 = _0x555ef8;
    let _0x1fa46c = _0x1cc883(0x1a5),
        _0x17b598 = 0x0,
        _0x3a0eca = 0x0,
        _0x1b80f3 = 0x0,
        _0x5a6ac5 = 0x0,
        _0x4b6249 = 0x0,
        _0x54e7d2 = 0x0,
        _0x17b09e = 0x0,
        _0x347f80 = 0x0;
    Array[_0x1cc883(0x2e2)](_0x1ea32c['keys']())[_0x1cc883(0x432)](_0x28d933 => {
        const _0x1b5678 = _0x1cc883;
        let _0x2b57b3 = _0x1ea32c[_0x1b5678(0x18a)](_0x28d933);
        _0x17b598++, _0x3a0eca += _0x2b57b3[_0x1b5678(0x2b9)], _0x1b80f3 += _0x2b57b3[_0x1b5678(0x614)], _0x5a6ac5 += _0x2b57b3[_0x1b5678(0x468)], _0x4b6249 += _0x2b57b3[_0x1b5678(0x128)], _0x54e7d2 += _0x2b57b3[_0x1b5678(0x338)], _0x17b09e += _0x2b57b3['nr_recap_total'], _0x347f80 += _0x2b57b3[_0x1b5678(0x300)], _0x1fa46c += _0x1b5678(0x4ca) + headerColor + _0x1b5678(0x135) + titleColor + _0x1b5678(0x497) + _0x28d933 + _0x1b5678(0x4b9) + _0x17b598 + _0x1b5678(0x3a1) + headerColor + _0x1b5678(0x213) + game_data[_0x1b5678(0x2bc)] + _0x1b5678(0x43f) + _0x28d933 + _0x1b5678(0x58d) + titleColor + '\x22>' + _0x2b57b3[_0x1b5678(0x258)] + _0x1b5678(0x4b0) + headerColor + _0x1b5678(0x287) + titleColor + _0x1b5678(0x5f8) + _0x2b57b3[_0x1b5678(0x2b9)] + _0x1b5678(0x4f6) + headerColor + _0x1b5678(0x1b0) + titleColor + _0x1b5678(0x226) + _0x2b57b3[_0x1b5678(0x614)] + _0x1b5678(0x4f6) + headerColor + _0x1b5678(0x287) + titleColor + _0x1b5678(0x629) + _0x2b57b3[_0x1b5678(0x468)] + ')</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:' + headerColor + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:5px;font-size:16px\x22><font\x20color=\x22' + titleColor + _0x1b5678(0x40e) + _0x2b57b3[_0x1b5678(0x338)] + '/' + _0x2b57b3['nr_snipe_total'] + _0x1b5678(0x4f6) + headerColor + _0x1b5678(0x287) + titleColor + _0x1b5678(0x475) + _0x2b57b3[_0x1b5678(0x300)] + '/' + _0x2b57b3[_0x1b5678(0x269)] + _0x1b5678(0x182);
    }), _0x1fa46c += _0x1cc883(0x127);
    if (document[_0x1cc883(0x36b)]('tbody_player') != null) document[_0x1cc883(0x36b)]('tbody_player')[_0x1cc883(0x501)]();
    document['getElementById'](_0x1cc883(0x256))[_0x1cc883(0x4c5)] += _0x1fa46c, $(_0x1cc883(0x3ba))['hide'](), $(_0x1cc883(0x3ba))['toggle'](0x1f4), document[_0x1cc883(0x36b)](_0x1cc883(0x250))['innerText'] = '(' + _0x3a0eca + ')', document[_0x1cc883(0x36b)](_0x1cc883(0x145))[_0x1cc883(0x5ad)] = '(' + _0x1b80f3 + ')', document[_0x1cc883(0x36b)](_0x1cc883(0x3ad))[_0x1cc883(0x5ad)] = '(' + _0x5a6ac5 + ')', document[_0x1cc883(0x36b)](_0x1cc883(0x322))[_0x1cc883(0x5ad)] = '(' + _0x54e7d2 + '/' + _0x4b6249 + ')', document['getElementById'](_0x1cc883(0x27a))['innerText'] = '(' + _0x347f80 + '/' + _0x17b09e + ')', $(_0x1cc883(0x36e))['on'](_0x1cc883(0x30f), _0x49bdbc => {
        const _0x50e2e9 = _0x1cc883;
        let _0x49b54c = _0x49bdbc['target'][_0x50e2e9(0x188)](_0x50e2e9(0x561)),
            _0x591ed3 = _0x49bdbc[_0x50e2e9(0x523)][_0x50e2e9(0x188)](_0x50e2e9(0x513)),
            _0x2e419d = _0x1ea32c[_0x50e2e9(0x18a)](_0x49b54c)['list_coords'],
            _0x3782b4 = _0x50e2e9(0x4e7) + backgroundColor + _0x50e2e9(0x2a0) + borderColor + ';border-spacing:2px;border-collapse:separate;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
            _0x213c67 = 0x0;
        console[_0x50e2e9(0x533)]('------------------------------------------------------------'), console[_0x50e2e9(0x533)]('list_coord', _0x2e419d), console[_0x50e2e9(0x533)](_0x2e419d[_0x50e2e9(0x5d6)]);
        for (let _0x2196f7 = 0x0; _0x2196f7 < _0x2e419d[_0x50e2e9(0x5d6)]; _0x2196f7++) {
            let _0x1b566f = _0x2e419d[_0x2196f7];
            console[_0x50e2e9(0x533)](_0x2e419d[_0x2196f7][_0x50e2e9(0x344)]);
            if (_0x2e419d[_0x2196f7][_0x50e2e9(0x344)] > 0x0 || _0x2e419d[_0x2196f7][_0x50e2e9(0x2db)] > 0x0) {
                _0x213c67++;
                let _0x3954f4 = _0x1b566f[_0x50e2e9(0x1bd)] == 0x1 ? _0x50e2e9(0x187) : _0x1b566f[_0x50e2e9(0x1bf)] == 0x1 ? _0x50e2e9(0x201) : headerColor,
                    _0x5c6020 = _0x1b566f[_0x50e2e9(0x164)] == 0x1 ? _0x50e2e9(0x187) : _0x1b566f[_0x50e2e9(0x3ec)] == 0x1 ? _0x50e2e9(0x201) : headerColor;
                _0x3782b4 += _0x50e2e9(0x5eb) + headerColorPlayers + _0x50e2e9(0x2da) + titleColor + _0x50e2e9(0x23b) + _0x1b566f['coord_destination_id'] + _0x50e2e9(0x63c) + _0x213c67 + _0x50e2e9(0x5f4) + headerColorPlayers + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22' + game_data[_0x50e2e9(0x2bc)] + _0x50e2e9(0x5f0) + _0x1b566f[_0x50e2e9(0x49f)] + _0x50e2e9(0x3af) + titleColor + '\x22>' + _0x1b566f[_0x50e2e9(0x5d0)][0x0][_0x50e2e9(0x3e7)] + '</font></center></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:' + headerColorPlayers + _0x50e2e9(0x44b) + titleColor + _0x50e2e9(0x5f8) + _0x1b566f[_0x50e2e9(0x344)] + _0x50e2e9(0x13e) + headerColorPlayers + _0x50e2e9(0x5f9) + titleColor + _0x50e2e9(0x226) + _0x1b566f[_0x50e2e9(0x2db)] + _0x50e2e9(0x13e) + headerColorPlayers + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:2px;font-size:16px\x22><font\x20color=\x22' + titleColor + _0x50e2e9(0x629) + _0x1b566f[_0x50e2e9(0x63f)] + _0x50e2e9(0x19b) + _0x3954f4 + _0x50e2e9(0x1cf) + titleColor + _0x50e2e9(0x384) + _0x5c6020 + _0x50e2e9(0x5f9) + titleColor + _0x50e2e9(0x4f0);
            }
        }
        _0x3782b4 += _0x50e2e9(0x436);
        let _0x57f505 = 0x1f4;
        if (document[_0x50e2e9(0x36b)](_0x50e2e9(0x12d) + _0x591ed3) != null) $('.tr_table_coord')[_0x50e2e9(0x539)](_0x57f505), window[_0x50e2e9(0x5c9)](() => {
            $('.tr_table_coord')['remove']();
        }, _0x57f505 + 0xa);
        else {
            $(_0x50e2e9(0x52b))['remove']();
            var _0x1e6364 = document['getElementById']('table_view')[_0x50e2e9(0x14f)]('tbody')[0x0],
                _0x463b42 = _0x1e6364['insertRow'](_0x591ed3);
            _0x463b42['className'] = 'tr_table_coord', _0x463b42['id'] = _0x50e2e9(0x12d) + _0x591ed3;
            let _0x23b237 = _0x463b42['insertCell']();
            _0x23b237[_0x50e2e9(0x3fd)](_0x50e2e9(0x2bb), 0x7);
            var _0x3dea63 = document[_0x50e2e9(0x4ee)](_0x50e2e9(0x471));
            _0x3dea63[_0x50e2e9(0x4c5)] = _0x3782b4, $(_0x23b237)[_0x50e2e9(0x5b2)](_0x3dea63), $(_0x23b237)[_0x50e2e9(0x539)](), $(_0x23b237)[_0x50e2e9(0x485)](_0x57f505), createEventCoord(_0x1ea32c, _0x41e1d8, _0x49b54c);
        }
    }), sortInfoIncomings(_0x1ea32c, _0x41e1d8);
}

function createTableCoordTroops(_0x5a4894, _0x3509f0) {
    const _0x388410 = _0x555ef8;
    let _0x310142 = game_data[_0x388410(0x4b3)],
        _0x425da2 = {};
    for (let _0x51d1da = 0x0; _0x51d1da < _0x310142[_0x388410(0x5d6)] - 0x1; _0x51d1da++) {
        _0x425da2[_0x310142[_0x51d1da]] = 0x0;
    }
    for (let _0xcf3ca3 = 0x0; _0xcf3ca3 < _0x5a4894[_0x388410(0x5d0)][_0x388410(0x5d6)]; _0xcf3ca3++) {
        _0x5a4894[_0x388410(0x5d0)][_0xcf3ca3]['type_attack'][_0x388410(0x25b)](_0x388410(0x628)) && Object[_0x388410(0x2f0)](_0x425da2)['forEach'](_0x549ebf => {
            const _0x1a0b91 = _0x388410;
            if (_0x5a4894[_0x1a0b91(0x5d0)][_0xcf3ca3][_0x1a0b91(0x442)][_0x549ebf] != undefined) _0x425da2[_0x549ebf] += _0x5a4894[_0x1a0b91(0x5d0)][_0xcf3ca3]['troops'][_0x549ebf];
        });
    }
    _0x425da2[_0x388410(0x609)] = 0x0;
    _0x5a4894[_0x388410(0x1ca)] == undefined && (_0x5a4894['homeInfo'] = {
        'flagName': _0x388410(0x2ea),
        'LoyaltyLevel': _0x388410(0x2ea),
        'wallLevel': _0x388410(0x2ea),
        'farmLevel': 'none'
    });
    let _0x1d28e5 = '';
    if (_0x3509f0 == !![]) {
        _0x1d28e5 += '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tbody>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20\x20style=\x22text-align:center;\x20width:auto;\x20background-color:' + headerColorFirstRow + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:5px\x22><font\x20color=\x22' + titleColor + _0x388410(0x4ff) + headerColorFirstRow + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:5px;padding;\x22><font\x20color=\x22' + titleColor + _0x388410(0x5df) + headerColorFirstRow + _0x388410(0x171) + titleColor + _0x388410(0x39c) + headerColorFirstRow + _0x388410(0x171) + titleColor + _0x388410(0x43b) + headerColorFirstRow + _0x388410(0x4ba) + titleColor + _0x388410(0x50f) + headerColorFirstRow + _0x388410(0x171) + titleColor + _0x388410(0x5e7) + headerColorFirstRow + _0x388410(0x171) + titleColor + _0x388410(0x5fb);
        for (let _0x436ac5 = 0x0; _0x436ac5 < _0x310142[_0x388410(0x5d6)] - 0x1; _0x436ac5++) {
            _0x1d28e5 += _0x388410(0x4d5) + headerColorFirstRow + _0x388410(0x550) + _0x310142[_0x436ac5] + _0x388410(0x3c2);
        }
        _0x1d28e5 += _0x388410(0x298) + headerColorFirstRow + _0x388410(0x1ea) + titleColor + _0x388410(0x3fb), _0x1d28e5 += _0x388410(0x4fe), _0x1d28e5 += _0x388410(0x45d) + headerColorCoords + _0x388410(0x1f8) + _0x5a4894[_0x388410(0x5d0)][0x0][_0x388410(0x3e7)] + _0x388410(0x3d4) + headerColorCoords + _0x388410(0x1f8) + _0x5a4894[_0x388410(0x344)] + '</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20rowspan=\x223\x22\x20class=\x22\x22\x20style=\x22width:70px;height:30px;text-align:center;\x20background-color:' + headerColorCoords + _0x388410(0x1f8) + _0x5a4894['homeInfo'][_0x388410(0x1f9)] + _0x388410(0x48e) + headerColorCoords + _0x388410(0x1f8) + _0x5a4894[_0x388410(0x1ca)]['LoyaltyLevel'] + _0x388410(0x48e) + headerColorCoords + _0x388410(0x1f8) + _0x5a4894[_0x388410(0x1ca)][_0x388410(0x470)] + _0x388410(0x48e) + headerColorCoords + _0x388410(0x1f8) + _0x5a4894[_0x388410(0x1ca)][_0x388410(0x3db)] + _0x388410(0x3d8) + headerColorCoords + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:1px\x22><font\x20color=\x22' + titleColor + _0x388410(0x598);
        let _0x211c06 = 0x0;
        for (let _0x2de5f3 = 0x0; _0x2de5f3 < _0x310142[_0x388410(0x5d6)] - 0x1; _0x2de5f3++) {
            let _0x4afcf4 = _0x5a4894[_0x388410(0x1ca)][_0x388410(0x51d)] != undefined ? _0x5a4894[_0x388410(0x1ca)][_0x388410(0x51d)][_0x310142[_0x2de5f3]] : 0x0,
                _0x2a0a86 = _0x310142[_0x2de5f3];
            _0x2a0a86 != _0x388410(0x39f) && _0x2a0a86 != 'light' && _0x2a0a86 != _0x388410(0x34f) && _0x2a0a86 != _0x388410(0x450) && _0x2a0a86 != _0x388410(0x38a) && _0x2a0a86 != _0x388410(0x4ae) && (_0x211c06 += _0x4afcf4 * troopsPop[_0x2a0a86]), _0x1d28e5 += _0x388410(0x293) + headerColorCoords + _0x388410(0x1f8) + _0x4afcf4 + _0x388410(0x26a);
        }
        _0x1d28e5 += '<td\x20style=\x22width:60px;height:30px;text-align:center;\x20background-color:' + headerColorCoords + _0x388410(0x1f8) + _0x211c06 + _0x388410(0x26a), _0x1d28e5 += _0x388410(0x5bf) + headerColorCoords + _0x388410(0x173) + titleColor + _0x388410(0x451), _0x211c06 = 0x0;
        for (let _0x96a58c = 0x0; _0x96a58c < _0x310142[_0x388410(0x5d6)] - 0x1; _0x96a58c++) {
            let _0x529b7b = _0x425da2[_0x310142[_0x96a58c]],
                _0x1dc423 = _0x310142[_0x96a58c];
            _0x1dc423 != 'spy' && _0x1dc423 != _0x388410(0x206) && _0x1dc423 != _0x388410(0x34f) && _0x1dc423 != _0x388410(0x450) && _0x1dc423 != _0x388410(0x38a) && _0x1dc423 != 'axe' && (_0x211c06 += _0x529b7b * troopsPop[_0x1dc423]), _0x1d28e5 += _0x388410(0x293) + headerColorCoords + _0x388410(0x1f8) + _0x529b7b + '</td>';
        }
        _0x1d28e5 += _0x388410(0x1be) + headerColorCoords + _0x388410(0x1f8) + _0x211c06 + '</td>', _0x1d28e5 += _0x388410(0x5bf) + headerColorCoords + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:1px\x22><font\x20color=\x22' + titleColor + _0x388410(0x5d4), _0x211c06 = 0x0;
        for (let _0x6526de = 0x0; _0x6526de < _0x310142[_0x388410(0x5d6)] - 0x1; _0x6526de++) {
            let _0x1e96cb = _0x5a4894[_0x388410(0x1ca)]['obj_troops'] != undefined ? _0x5a4894[_0x388410(0x1ca)][_0x388410(0x51d)][_0x310142[_0x6526de]] : 0x0,
                _0x576cb4 = _0x425da2[_0x310142[_0x6526de]] + _0x1e96cb,
                _0x126b12 = _0x310142[_0x6526de];
            _0x126b12 != _0x388410(0x39f) && _0x126b12 != _0x388410(0x206) && _0x126b12 != 'marcher' && _0x126b12 != _0x388410(0x450) && _0x126b12 != _0x388410(0x38a) && _0x126b12 != 'axe' && (_0x211c06 += _0x576cb4 * troopsPop[_0x126b12]), _0x1d28e5 += _0x388410(0x293) + headerColorCoords + _0x388410(0x1f8) + _0x576cb4 + _0x388410(0x26a);
        }
        return _0x1d28e5 += '<td\x20style=\x22width:60px;height:30px;text-align:center;\x20background-color:' + headerColorCoords + _0x388410(0x1f8) + _0x211c06 + _0x388410(0x26a), _0x1d28e5 += _0x388410(0x44d), _0x1d28e5;
    }
}

function createEventCoord(_0x2ff1b, _0x5e915c, _0x239af2) {
    const _0xa9d18d = _0x555ef8;
    $(_0xa9d18d(0x544))['on']('click', _0x432d6d => {
        const _0x428431 = _0xa9d18d;
        let _0x59774a = _0x432d6d['target'][_0x428431(0x188)](_0x428431(0x466)),
            _0x42cae0 = _0x432d6d['target']['getAttribute'](_0x428431(0x63e)),
            _0x2a888f = {},
            _0x4e16b5 = _0x2ff1b[_0x428431(0x18a)](_0x239af2)[_0x428431(0x564)];
        for (let _0x3587e0 = 0x0; _0x3587e0 < _0x4e16b5[_0x428431(0x5d6)]; _0x3587e0++) {
            if (_0x59774a == _0x4e16b5[_0x3587e0][_0x428431(0x49f)]) {
                _0x2a888f = _0x4e16b5[_0x3587e0];
                break;
            }
        }
        console[_0x428431(0x533)](_0x428431(0x5d5), _0x2a888f), console[_0x428431(0x533)]('mapVillage', _0x5e915c), console[_0x428431(0x533)](_0x428431(0x161), _0x2a888f);
        let _0x2e17ea = !![],
            _0x4f9fb7 = _0x428431(0x511);
        _0x2a888f[_0x428431(0x44e)](_0x428431(0x1ca)) == !![] && (_0x4f9fb7 = _0x428431(0x5d8) + _0x59774a + _0x428431(0x3a4) + backgroundColor + _0x428431(0x2a0) + borderColor + _0x428431(0x3c9), _0x4f9fb7 += createTableCoordTroops(_0x2a888f, _0x2e17ea), _0x4f9fb7 += _0x428431(0x3a5));
        _0x4f9fb7 += _0x428431(0x59c) + backgroundColor + _0x428431(0x2a0) + borderColor + _0x428431(0x2c6), _0x4f9fb7 += createTableCoordIncomings(_0x2a888f[_0x428431(0x5d0)], _0x5e915c), _0x4f9fb7 += _0x428431(0x5b7);
        let _0x634c2 = 0x1f4;
        if (document[_0x428431(0x36b)](_0x428431(0x57f) + _0x42cae0) != null) $(_0x428431(0x518))['hide'](_0x634c2), window[_0x428431(0x5c9)](() => {
            const _0x5c094a = _0x428431;
            $(_0x5c094a(0x518))[_0x5c094a(0x501)]();
        }, _0x634c2 + 0xa);
        else {
            $('.tr_table_coord_info')[_0x428431(0x501)]();
            var _0x4aad65 = document[_0x428431(0x612)](_0x428431(0x12d))[0x0]['getElementsByTagName'](_0x428431(0x58a))[0x0],
                _0x5edf4e = _0x4aad65['insertRow'](_0x42cae0);
            _0x5edf4e['className'] = _0x428431(0x53d), _0x5edf4e['id'] = _0x428431(0x57f) + _0x42cae0;
            let _0x1b5078 = _0x5edf4e[_0x428431(0x2ac)]();
            _0x1b5078[_0x428431(0x3fd)](_0x428431(0x2bb), 0x7);
            var _0x2c62f1 = document['createElement']('div');
            _0x2c62f1[_0x428431(0x4c5)] = _0x4f9fb7, $(_0x1b5078)[_0x428431(0x5b2)](_0x2c62f1), $(_0x1b5078)['hide'](), $(_0x1b5078)['show'](_0x634c2), counterTime();
        }
    });
}

function createTableCoordIncomings(_0x4e6989, _0x56931) {
    const _0x34d388 = _0x555ef8;
    let _0x52b16e = document[_0x34d388(0x36b)]('serverTime')[_0x34d388(0x5ad)],
        _0x3c5c7f = document[_0x34d388(0x36b)](_0x34d388(0x239))['innerText'][_0x34d388(0x1c8)]('/');
    _0x3c5c7f = _0x3c5c7f[0x1] + '/' + _0x3c5c7f[0x0] + '/' + _0x3c5c7f[0x2];
    let _0x18644b = new Date(_0x3c5c7f + '\x20' + _0x52b16e)[_0x34d388(0x505)]();
    console[_0x34d388(0x533)](_0x34d388(0x463));
    let _0x549988 = _0x34d388(0x61b) + headerColorFirstRow + _0x34d388(0x171) + titleColor + _0x34d388(0x597) + headerColorFirstRow + _0x34d388(0x1c1) + titleColor + '\x22>speed/pop\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22\x20style=\x22text-align:center;\x20width:auto;\x20background-color:' + headerColorFirstRow + _0x34d388(0x2c1) + titleColor + _0x34d388(0x4df) + headerColorFirstRow + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:0px\x22><font\x20color=\x22' + titleColor + _0x34d388(0x51e) + headerColorFirstRow + _0x34d388(0x1c1) + titleColor + _0x34d388(0x24f) + headerColorFirstRow + _0x34d388(0x1c1) + titleColor + _0x34d388(0x499);
    for (let _0x59c3e2 = 0x0; _0x59c3e2 < _0x4e6989['length']; _0x59c3e2++) {
        let _0x7dd99b, _0x1229eb = _0x56931[_0x34d388(0x18a)](_0x4e6989[_0x59c3e2]['coord_destination'])[_0x34d388(0x1d1)],
            _0x39a81b = _0x56931[_0x34d388(0x18a)](_0x4e6989[_0x59c3e2][_0x34d388(0x3e7)])['playerId'],
            _0xc203fa = _0x56931[_0x34d388(0x18a)](_0x4e6989[_0x59c3e2][_0x34d388(0x3e7)])[_0x34d388(0x578)],
            _0x448102 = headerColorCoords,
            _0x4ff65f = titleColor,
            _0x1472bd = _0x4e6989[_0x59c3e2][_0x34d388(0x64c)];
        console[_0x34d388(0x533)](_0x1472bd);
        if (_0x4e6989[_0x59c3e2][_0x34d388(0x14b)] == _0x34d388(0x2ea)) _0x7dd99b = _0x34d388(0x1b1);
        else _0x7dd99b = '<img\x20src=\x22https://dsen.innogamescdn.com/asset/a9e85669/graphic/unit/tiny/' + _0x4e6989[_0x59c3e2]['labelName'] + '\x22>';
        if (_0x1472bd[_0x34d388(0x25b)](_0x34d388(0x628))) {
            let _0x1d53f0 = _0x4e6989[_0x59c3e2][_0x34d388(0x442)],
                _0x582ef4 = 0x0;
            Object[_0x34d388(0x2f0)](_0x1d53f0)['forEach'](_0x3a09bb => {
                _0x582ef4 += _0x1d53f0[_0x3a09bb] * troopsPop[_0x3a09bb];
            }), _0x7dd99b = _0x582ef4, _0x4e6989[_0x59c3e2][_0x34d388(0x2ce)] == !![] && (_0x448102 = '#034a2f'), _0x1472bd = _0x34d388(0x166) + _0x1472bd;
        } else _0x7dd99b[_0x34d388(0x25b)](_0x34d388(0x609)) && (_0x448102 = _0x34d388(0x60e), _0x4ff65f = _0x34d388(0x187)), _0x7dd99b['includes'](_0x34d388(0x609)) && tribemates[_0x34d388(0x25b)](_0x4e6989[_0x59c3e2][_0x34d388(0x4c7)]) && (_0x448102 = _0x34d388(0x160), _0x4ff65f = '#4dff4d'), _0x1472bd == 'def' ? _0x1472bd = _0x34d388(0x473) : _0x1472bd = _0x34d388(0x166) + _0x1472bd;
        let _0x1063c5 = new Date(_0x4e6989[_0x59c3e2][_0x34d388(0x55d)])[_0x34d388(0x505)]();
        if (_0x1063c5 > _0x18644b) {
            let _0x2eb605 = _0x4e6989[_0x59c3e2][_0x34d388(0x55d)][_0x34d388(0x1c8)]('\x20')[0x0],
                _0x4d8a07 = _0x4e6989[_0x59c3e2][_0x34d388(0x55d)]['split']('\x20')[0x1]['split'](':'),
                _0x14df5c = _0x4d8a07[_0x34d388(0x51a)]();
            _0x4d8a07 = _0x4d8a07['join'](':'), _0x549988 += _0x34d388(0x62d) + _0x448102 + _0x34d388(0x42b) + titleColor + _0x34d388(0x1cd) + _0x1472bd + _0x34d388(0x39b) + _0x448102 + _0x34d388(0x391) + titleColor + '\x22>' + _0x7dd99b + _0x34d388(0x311) + _0x448102 + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22' + game_data[_0x34d388(0x2bc)] + _0x34d388(0x5f0) + _0x1229eb + _0x34d388(0x57c) + titleColor + '\x22>' + _0x4e6989[_0x59c3e2][_0x34d388(0x3e7)] + _0x34d388(0x25c) + _0x448102 + _0x34d388(0x33f) + game_data[_0x34d388(0x2bc)] + _0x34d388(0x43f) + _0x39a81b + _0x34d388(0x57c) + titleColor + '\x22>' + _0xc203fa + _0x34d388(0x25c) + _0x448102 + _0x34d388(0x33f) + game_data[_0x34d388(0x2bc)] + _0x34d388(0x5f0) + _0x4e6989[_0x59c3e2][_0x34d388(0x582)] + _0x34d388(0x57c) + titleColor + '\x22>' + _0x4e6989[_0x59c3e2][_0x34d388(0x478)] + _0x34d388(0x25c) + _0x448102 + _0x34d388(0x33f) + game_data[_0x34d388(0x2bc)] + 'info_player&id=' + _0x4e6989[_0x59c3e2][_0x34d388(0x21c)] + _0x34d388(0x45e) + titleColor + '\x22>' + _0x4e6989[_0x59c3e2][_0x34d388(0x4c7)] + _0x34d388(0x25c) + _0x448102 + _0x34d388(0x42b) + titleColor + '\x22>' + _0x2eb605 + '\x20<b>' + _0x4d8a07 + _0x34d388(0x593) + _0x4ff65f + _0x34d388(0x5ba) + _0x14df5c + _0x34d388(0x458) + _0x448102 + _0x34d388(0x20c) + titleColor + _0x34d388(0x5a8) + convertBuildTime(_0x1063c5 - _0x18644b) + _0x34d388(0x186);
        }
    }
    return _0x549988 += _0x34d388(0x127), _0x549988;
} {}

function createTableSettings() {
    const _0x270c61 = _0x555ef8;
    let _0x217304 = '\x0a\x20\x20\x20\x20<center>\x0a\x20\x20\x20\x20<table\x20id=\x22table_settings\x22\x20\x20border=\x221\x22\x20style=\x22width:\x2040%;background-color:' + backgroundColor + _0x270c61(0x2a0) + borderColor + _0x270c61(0x235) + headerColor + _0x270c61(0x4d6) + headerColor + _0x270c61(0x542) + titleColor + _0x270c61(0x62f) + headerColor + _0x270c61(0x243) + headerColor + _0x270c61(0x542) + titleColor + _0x270c61(0x54e) + headerColor + '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20\x20\x20value=\x22hide_further_attacks\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:' + headerColor + _0x270c61(0x4a8) + titleColor + '\x22>hide\x20attacks\x20further\x20than(hours)\x20</font>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:' + headerColor + '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20style=\x22text-align:center;\x22\x20id=\x22settings_further\x22\x20min=\x220\x22\x20max=\x22200\x22\x20placeholder=\x22100\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:' + headerColor + _0x270c61(0x603) + headerColor + _0x270c61(0x4a8) + titleColor + _0x270c61(0x419) + headerColor + _0x270c61(0x4a2) + headerColor + '\x22\x20colspan=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<font\x20style=\x22margin:5px\x22\x20color=\x22' + titleColor + _0x270c61(0x3ef) + headerColor + '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20style=\x22text-align:center;\x22\x20id=\x22settings_pop\x22\x20min=\x220\x22\x20max=\x2220000\x22\x20value=\x221000\x22\x20placeholder=\x221000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:' + headerColor + '\x22\x20colspan=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<font\x20style=\x22margin:5px\x22\x20color=\x22' + titleColor + _0x270c61(0x327) + headerColor + _0x270c61(0x634) + headerColor + _0x270c61(0x542) + titleColor + _0x270c61(0x503) + headerColor + '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22number\x22\x20style=\x22text-align:center;\x22\x20id=\x22settings_medium_attack\x22\x20min=\x220\x22\x20max=\x2220000\x22\x20value=\x2210000\x22\x20placeholder=\x2210000\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:' + headerColor + _0x270c61(0x542) + titleColor + _0x270c61(0x408) + headerColor + _0x270c61(0x519);
    if (document[_0x270c61(0x36b)]('table_settings') == null) document[_0x270c61(0x36b)](_0x270c61(0x370))['innerHTML'] = _0x217304;
    else $(_0x270c61(0x1b7))[_0x270c61(0x539)](), $(_0x270c61(0x31d))[_0x270c61(0x539)](), $(_0x270c61(0x48b))['hide'](), $(_0x270c61(0x3bd))[_0x270c61(0x539)](0x1f4), $(_0x270c61(0x329))[_0x270c61(0x5b1)](0x1f4);
    if (localStorage[_0x270c61(0x520)](game_data[_0x270c61(0x429)] + 'save_settings') != null) {
        let _0x25b0ae = JSON[_0x270c61(0x1a6)](localStorage[_0x270c61(0x520)](game_data['world'] + _0x270c61(0x61e)))[0x0];
        $('#div_settings\x20input[type=checkbox]')[_0x270c61(0x2e1)](function(_0x1787b6, _0x50bac8) {
            const _0x446703 = _0x270c61;
            this[_0x446703(0x38c)] = _0x25b0ae[_0x1787b6];
        });
        let _0x1eb1d1 = JSON['parse'](localStorage[_0x270c61(0x520)](game_data['world'] + _0x270c61(0x61e)))[0x1];
        $(_0x270c61(0x4d0))[_0x270c61(0x2e1)](function(_0x1da665, _0x50920f) {
            const _0x41e1c9 = _0x270c61;
            this[_0x41e1c9(0x492)] = _0x1eb1d1[_0x1da665];
        });
        let _0x28add7 = JSON[_0x270c61(0x1a6)](localStorage[_0x270c61(0x520)](game_data[_0x270c61(0x429)] + _0x270c61(0x61e)))[0x2];
        $(_0x270c61(0x47d) + _0x28add7 + '\x27')['attr'](_0x270c61(0x38c), !![]);
    }
    $(_0x270c61(0x3a8))['on'](_0x270c61(0x2fc), () => {
        const _0x38ce74 = _0x270c61;
        console['log'](_0x38ce74(0x190));
        let _0x2c5774 = [],
            _0x1b18b9 = [];
        $(_0x38ce74(0x14a))[_0x38ce74(0x2e1)](function() {
            const _0x4f0789 = _0x38ce74;
            var _0x25eaba = this[_0x4f0789(0x38c)];
            _0x2c5774[_0x4f0789(0x1fa)](_0x25eaba);
        }), $('#div_settings\x20input[type=number]\x20')[_0x38ce74(0x2e1)](function() {
            const _0x2efeaa = _0x38ce74;
            var _0x390be2 = this['value'];
            _0x1b18b9[_0x2efeaa(0x1fa)](_0x390be2);
        });
        let _0x26b10c = $(_0x38ce74(0x319))[_0x38ce74(0x346)](),
            _0x921af = [_0x2c5774, _0x1b18b9, _0x26b10c];
        localStorage[_0x38ce74(0x1d4)](game_data['world'] + _0x38ce74(0x61e), JSON[_0x38ce74(0x199)](_0x921af));
    }), $(_0x270c61(0x15f))['on'](_0x270c61(0x30f), () => {
        const _0x489322 = _0x270c61;
        $(_0x489322(0x195))[_0x489322(0x501)](), viewSupport();
    }), $('#btn_clear_memory')['on'](_0x270c61(0x30f), () => {
        const _0x1cf4b9 = _0x270c61;
        localStorage['removeItem'](game_data['world'] + _0x1cf4b9(0x3f6)), UI[_0x1cf4b9(0x5ea)]('local\x20storage\x20is\x20cleared', 0x3e8);
    });
}
window.createTableSettings=createTableSettings;
function createTableRankingAttackers(_0x5c29df) {
    const _0xf04d38 = _0x555ef8;
    let _0x3dd619 = _0xf04d38(0x154) + backgroundColor + _0xf04d38(0x2a0) + borderColor + _0xf04d38(0x215) + headerColor + _0xf04d38(0x260) + titleColor + _0xf04d38(0x3eb) + headerColor + '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22\x20><font\x20\x20color=\x22' + titleColor + _0xf04d38(0x259) + headerColor + '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22\x20><font\x20\x20color=\x22' + titleColor + _0xf04d38(0x24d) + headerColor + _0xf04d38(0x530) + titleColor + _0xf04d38(0x296) + headerColor + _0xf04d38(0x332) + titleColor + '\x22>nukes</font><a/></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:' + headerColor + _0xf04d38(0x340) + titleColor + _0xf04d38(0x541) + headerColor + _0xf04d38(0x3ab) + titleColor + _0xf04d38(0x569);
    Array[_0xf04d38(0x2e2)](_0x5c29df[_0xf04d38(0x2f0)]())[_0xf04d38(0x432)]((_0x41e0e4, _0x45108c) => {
        const _0x569d43 = _0xf04d38;
        let _0x59ff7c = _0x5c29df[_0x569d43(0x18a)](_0x41e0e4);
        _0x3dd619 += _0x569d43(0x4b5) + headerColor + _0x569d43(0x1af) + titleColor + '\x22>' + (_0x45108c + 0x1) + _0x569d43(0x48a) + headerColor + _0x569d43(0x1af) + titleColor + '\x22>' + _0x59ff7c[_0x569d43(0x4c7)] + _0x569d43(0x48a) + headerColor + _0x569d43(0x1af) + titleColor + '\x22>' + _0x59ff7c[_0x569d43(0x35c)] + _0x569d43(0x48a) + headerColor + '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center><font\x20style=\x22margin:0px\x22\x20color=\x22' + titleColor + '\x22>' + _0x59ff7c[_0x569d43(0x33b)] + _0x569d43(0x48a) + headerColor + _0x569d43(0x1af) + titleColor + '\x22>' + _0x59ff7c[_0x569d43(0x416)] + '</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:' + headerColor + _0x569d43(0x1af) + titleColor + '\x22>' + _0x59ff7c[_0x569d43(0x63f)] + _0x569d43(0x197);
    }), _0x3dd619 += _0xf04d38(0x2cc), document[_0xf04d38(0x36b)](_0xf04d38(0x4f8))[_0xf04d38(0x3c5)][_0xf04d38(0x5d6)] == 0x0 ? (document[_0xf04d38(0x36b)]('div_rank_attacker')[_0xf04d38(0x4c5)] = _0x3dd619, console['log'](_0xf04d38(0x3b0))) : ($(_0xf04d38(0x329))[_0xf04d38(0x539)](), $(_0xf04d38(0x31d))[_0xf04d38(0x539)](), $('#div_upload_time')[_0xf04d38(0x539)](), $(_0xf04d38(0x3bd))[_0xf04d38(0x539)](0x1f4), $(_0xf04d38(0x1b7))[_0xf04d38(0x5b1)](0x1f4)), $(_0xf04d38(0x285))[_0xf04d38(0x181)](_0xf04d38(0x30f)), $(_0xf04d38(0x558))[_0xf04d38(0x181)](_0xf04d38(0x30f)), $(_0xf04d38(0x1a3))['off']('click'), $(_0xf04d38(0x5c6))['off'](_0xf04d38(0x30f)), $(_0xf04d38(0x285))['on'](_0xf04d38(0x30f), () => {
        const _0x3d0f7a = _0xf04d38;
        _0x5c29df = new Map([..._0x5c29df['entries']()]['sort']((_0x429c0e, _0x2ace69) => {
            const _0x4551c8 = _0x2f7d;
            return _0x429c0e[0x1][_0x4551c8(0x35c)] > _0x2ace69[0x1][_0x4551c8(0x35c)] ? -0x1 : _0x429c0e[0x1][_0x4551c8(0x35c)] < _0x2ace69[0x1]['nr_fakes'] ? 0x1 : 0x0;
        })), document[_0x3d0f7a(0x36b)](_0x3d0f7a(0x4f8))[_0x3d0f7a(0x4c5)] = '', createTableRankingAttackers(_0x5c29df);
    }), $(_0xf04d38(0x558))['on']('click', () => {
        const _0x1d3a56 = _0xf04d38;
        _0x5c29df = new Map([..._0x5c29df[_0x1d3a56(0x434)]()][_0x1d3a56(0x184)]((_0x2caae8, _0x513c78) => {
            const _0x4602ba = _0x1d3a56;
            return _0x2caae8[0x1][_0x4602ba(0x33b)] > _0x513c78[0x1][_0x4602ba(0x33b)] ? -0x1 : _0x2caae8[0x1][_0x4602ba(0x33b)] < _0x513c78[0x1][_0x4602ba(0x33b)] ? 0x1 : 0x0;
        })), console[_0x1d3a56(0x533)](_0x1d3a56(0x54a)), document[_0x1d3a56(0x36b)](_0x1d3a56(0x4f8))[_0x1d3a56(0x4c5)] = '', createTableRankingAttackers(_0x5c29df);
    }), $(_0xf04d38(0x1a3))['on'](_0xf04d38(0x30f), () => {
        const _0x7ee14b = _0xf04d38;
        _0x5c29df = new Map([..._0x5c29df[_0x7ee14b(0x434)]()]['sort']((_0x199310, _0x2873b1) => {
            const _0x23b3af = _0x7ee14b;
            return _0x199310[0x1][_0x23b3af(0x416)] > _0x2873b1[0x1][_0x23b3af(0x416)] ? -0x1 : _0x199310[0x1]['nr_fangs'] < _0x2873b1[0x1]['nr_fangs'] ? 0x1 : 0x0;
        })), console['log'](_0x7ee14b(0x359)), document['getElementById'](_0x7ee14b(0x4f8))[_0x7ee14b(0x4c5)] = '', createTableRankingAttackers(_0x5c29df);
    }), $(_0xf04d38(0x5c6))['on'](_0xf04d38(0x30f), () => {
        const _0x5287e5 = _0xf04d38;
        _0x5c29df = new Map([..._0x5c29df[_0x5287e5(0x434)]()][_0x5287e5(0x184)]((_0x118871, _0x535001) => {
            const _0x3a8a2d = _0x5287e5;
            return _0x118871[0x1]['nr_nobles'] > _0x535001[0x1][_0x3a8a2d(0x63f)] ? -0x1 : _0x118871[0x1][_0x3a8a2d(0x63f)] < _0x535001[0x1][_0x3a8a2d(0x63f)] ? 0x1 : 0x0;
        })), console['log'](_0x5287e5(0x305)), document['getElementById'](_0x5287e5(0x4f8))[_0x5287e5(0x4c5)] = '', createTableRankingAttackers(_0x5c29df);
    });
}

function createTableRankingDefenders(_0x191cfa) {
    const _0x2ae826 = _0x555ef8;
    let _0x21d360 = _0x2ae826(0x57e) + backgroundColor + _0x2ae826(0x2a0) + borderColor + _0x2ae826(0x215) + headerColor + _0x2ae826(0x260) + titleColor + _0x2ae826(0x3eb) + headerColor + _0x2ae826(0x28a) + titleColor + _0x2ae826(0x259) + headerColor + _0x2ae826(0x28a) + titleColor + _0x2ae826(0x24d) + headerColor + '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22\x20><a\x20href=\x22#\x22\x20id=\x22sort_fakes_def\x22><font\x20\x20color=\x22' + titleColor + _0x2ae826(0x296) + headerColor + _0x2ae826(0x35d) + titleColor + '\x22>nukes</font><a/></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:' + headerColor + _0x2ae826(0x202) + titleColor + _0x2ae826(0x541) + headerColor + '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22\x20><a\x20href=\x22#\x22\x20id=\x22sort_nobles_def\x22><font\x20\x20color=\x22' + titleColor + _0x2ae826(0x569);
    Array['from'](_0x191cfa[_0x2ae826(0x2f0)]())[_0x2ae826(0x432)]((_0x34dddc, _0x3e470d) => {
        const _0x25fecf = _0x2ae826;
        let _0x277058 = _0x191cfa[_0x25fecf(0x18a)](_0x34dddc);
        _0x21d360 += _0x25fecf(0x4b5) + headerColor + _0x25fecf(0x1af) + titleColor + '\x22>' + (_0x3e470d + 0x1) + '</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:' + headerColor + '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center><font\x20style=\x22margin:0px\x22\x20color=\x22' + titleColor + '\x22>' + _0x277058[_0x25fecf(0x4c7)] + _0x25fecf(0x48a) + headerColor + _0x25fecf(0x1af) + titleColor + '\x22>' + _0x277058['nr_fakes'] + _0x25fecf(0x48a) + headerColor + _0x25fecf(0x1af) + titleColor + '\x22>' + _0x277058[_0x25fecf(0x33b)] + _0x25fecf(0x48a) + headerColor + _0x25fecf(0x1af) + titleColor + '\x22>' + _0x277058[_0x25fecf(0x416)] + _0x25fecf(0x48a) + headerColor + _0x25fecf(0x1af) + titleColor + '\x22>' + _0x277058[_0x25fecf(0x63f)] + _0x25fecf(0x197);
    }), _0x21d360 += _0x2ae826(0x2cc), document[_0x2ae826(0x36b)]('div_rank_defender')['children']['length'] == 0x0 ? (document[_0x2ae826(0x36b)](_0x2ae826(0x167))[_0x2ae826(0x4c5)] = _0x21d360, console[_0x2ae826(0x533)](_0x2ae826(0x4cc))) : ($('#div_settings')[_0x2ae826(0x539)](), $(_0x2ae826(0x1b7))[_0x2ae826(0x539)](), $(_0x2ae826(0x48b))[_0x2ae826(0x539)](), $('#div_get_coords')[_0x2ae826(0x539)](0x1f4), $(_0x2ae826(0x31d))[_0x2ae826(0x5b1)](0x1f4)), $(_0x2ae826(0x446))[_0x2ae826(0x181)](_0x2ae826(0x30f)), $(_0x2ae826(0x545))[_0x2ae826(0x181)]('click'), $(_0x2ae826(0x60f))['off'](_0x2ae826(0x30f)), $('#sort_nobles_def')[_0x2ae826(0x181)]('click'), $(_0x2ae826(0x446))['on']('click', () => {
        const _0x2f9560 = _0x2ae826;
        _0x191cfa = new Map([..._0x191cfa[_0x2f9560(0x434)]()][_0x2f9560(0x184)]((_0x40c9a2, _0x1920c7) => {
            const _0x20d18f = _0x2f9560;
            return _0x40c9a2[0x1][_0x20d18f(0x35c)] > _0x1920c7[0x1][_0x20d18f(0x35c)] ? -0x1 : _0x40c9a2[0x1][_0x20d18f(0x35c)] < _0x1920c7[0x1][_0x20d18f(0x35c)] ? 0x1 : 0x0;
        })), document[_0x2f9560(0x36b)](_0x2f9560(0x167))[_0x2f9560(0x4c5)] = '', createTableRankingDefenders(_0x191cfa);
    }), $(_0x2ae826(0x545))['on'](_0x2ae826(0x30f), () => {
        const _0x267f42 = _0x2ae826;
        _0x191cfa = new Map([..._0x191cfa[_0x267f42(0x434)]()][_0x267f42(0x184)]((_0x58e1e9, _0x40e96c) => {
            const _0x1a4665 = _0x267f42;
            return _0x58e1e9[0x1][_0x1a4665(0x33b)] > _0x40e96c[0x1][_0x1a4665(0x33b)] ? -0x1 : _0x58e1e9[0x1][_0x1a4665(0x33b)] < _0x40e96c[0x1][_0x1a4665(0x33b)] ? 0x1 : 0x0;
        })), console[_0x267f42(0x533)](_0x267f42(0x54a)), document['getElementById'](_0x267f42(0x167))['innerHTML'] = '', createTableRankingDefenders(_0x191cfa);
    }), $(_0x2ae826(0x60f))['on'](_0x2ae826(0x30f), () => {
        const _0x149f6c = _0x2ae826;
        _0x191cfa = new Map([..._0x191cfa['entries']()]['sort']((_0x5bdd3d, _0x435fc) => {
            const _0x289660 = _0x2f7d;
            return _0x5bdd3d[0x1]['nr_fangs'] > _0x435fc[0x1]['nr_fangs'] ? -0x1 : _0x5bdd3d[0x1][_0x289660(0x416)] < _0x435fc[0x1]['nr_fangs'] ? 0x1 : 0x0;
        })), console[_0x149f6c(0x533)](_0x149f6c(0x359)), document[_0x149f6c(0x36b)](_0x149f6c(0x167))[_0x149f6c(0x4c5)] = '', createTableRankingDefenders(_0x191cfa);
    }), $('#sort_nobles_def')['on'](_0x2ae826(0x30f), () => {
        const _0x56d9b5 = _0x2ae826;
        _0x191cfa = new Map([..._0x191cfa[_0x56d9b5(0x434)]()][_0x56d9b5(0x184)]((_0x402c3f, _0x2a169e) => {
            const _0x4eda1 = _0x56d9b5;
            return _0x402c3f[0x1][_0x4eda1(0x63f)] > _0x2a169e[0x1][_0x4eda1(0x63f)] ? -0x1 : _0x402c3f[0x1][_0x4eda1(0x63f)] < _0x2a169e[0x1]['nr_nobles'] ? 0x1 : 0x0;
        })), console[_0x56d9b5(0x533)]('sort\x20by\x20nobles'), document[_0x56d9b5(0x36b)](_0x56d9b5(0x167))['innerHTML'] = '', createTableRankingDefenders(_0x191cfa);
    });
}

function createTableUploadTime(_0x1abf64) {
    const _0x1a4d50 = _0x555ef8;
    let _0x5d2f5e = '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22height:400px;overflow:\x20auto\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22table_rank\x22\x20\x20border=\x221\x22\x20style=\x22width:\x2080%;background-color:' + backgroundColor + _0x1a4d50(0x2a0) + borderColor + _0x1a4d50(0x146) + headerColor + _0x1a4d50(0x28a) + titleColor + _0x1a4d50(0x259) + headerColor + _0x1a4d50(0x28a) + titleColor + _0x1a4d50(0x24d) + headerColor + '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22\x20><a\x20href=\x22#\x22\x20id=\x22sort_reports\x22><font\x20\x20color=\x22' + titleColor + '\x22>reports</font><a/></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:' + headerColor + _0x1a4d50(0x16c) + titleColor + _0x1a4d50(0x4be) + headerColor + _0x1a4d50(0x554) + titleColor + _0x1a4d50(0x221);
    Array[_0x1a4d50(0x2e2)](_0x1abf64[_0x1a4d50(0x2f0)]())[_0x1a4d50(0x432)]((_0x18f3df, _0x1dac43) => {
        const _0x9f4787 = _0x1a4d50;
        let _0x4a02fb = _0x1abf64[_0x9f4787(0x18a)](_0x18f3df);
        _0x5d2f5e += _0x9f4787(0x4b5) + headerColor + _0x9f4787(0x1af) + titleColor + '\x22>' + (_0x1dac43 + 0x1) + '</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:' + headerColor + _0x9f4787(0x1af) + titleColor + '\x22>' + _0x4a02fb[_0x9f4787(0x4b8)] + '</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:left;\x20width:auto;\x20background-color:' + headerColor + '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center><font\x20style=\x22margin:0px\x22\x20color=\x22' + titleColor + '\x22>' + parseDate(_0x4a02fb['report_date']) + _0x9f4787(0x48a) + headerColor + '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center><font\x20style=\x22margin:0px\x22\x20color=\x22' + titleColor + '\x22>' + parseDate(_0x4a02fb['incoming_date']) + _0x9f4787(0x48a) + headerColor + _0x9f4787(0x1af) + titleColor + '\x22>' + parseDate(_0x4a02fb['command_date']) + _0x9f4787(0x197);
    }), _0x5d2f5e += _0x1a4d50(0x2cc), document['getElementById'](_0x1a4d50(0x1e8))[_0x1a4d50(0x3c5)][_0x1a4d50(0x5d6)] == 0x0 ? (document[_0x1a4d50(0x36b)](_0x1a4d50(0x1e8))[_0x1a4d50(0x4c5)] = _0x5d2f5e, console['log']('initialize\x20table\x20upload\x20time')) : ($(_0x1a4d50(0x329))[_0x1a4d50(0x539)](), $(_0x1a4d50(0x31d))[_0x1a4d50(0x539)](), $(_0x1a4d50(0x1b7))['hide'](), $(_0x1a4d50(0x3bd))[_0x1a4d50(0x539)](0x1f4), $('#div_upload_time')[_0x1a4d50(0x5b1)](0x1f4), console[_0x1a4d50(0x533)](_0x1a4d50(0x1e9))), $(_0x1a4d50(0x32b))[_0x1a4d50(0x181)](_0x1a4d50(0x30f)), $('#sort_incomings')[_0x1a4d50(0x181)](_0x1a4d50(0x30f)), $(_0x1a4d50(0x2cb))[_0x1a4d50(0x181)](_0x1a4d50(0x30f)), $(_0x1a4d50(0x32b))['on'](_0x1a4d50(0x30f), () => {
        const _0xb5e599 = _0x1a4d50;
        _0x1abf64 = new Map([..._0x1abf64[_0xb5e599(0x434)]()][_0xb5e599(0x184)]((_0x7852db, _0x4f9cb6) => {
            const _0x22caff = _0xb5e599;
            return new Date(_0x7852db[0x1]['report_date'])[_0x22caff(0x505)]() > new Date(_0x4f9cb6[0x1][_0x22caff(0x37a)])[_0x22caff(0x505)]() ? -0x1 : new Date(_0x7852db[0x1][_0x22caff(0x37a)])[_0x22caff(0x505)]() < new Date(_0x4f9cb6[0x1][_0x22caff(0x37a)])[_0x22caff(0x505)]() ? 0x1 : 0x0;
        })), console['log']('sort\x20by\x20report'), document['getElementById'](_0xb5e599(0x1e8))['innerHTML'] = '', createTableUploadTime(_0x1abf64);
    }), $('#sort_incomings')['on']('click', () => {
        const _0x4446a6 = _0x1a4d50;
        _0x1abf64 = new Map([..._0x1abf64[_0x4446a6(0x434)]()]['sort']((_0x614aa, _0x475b3a) => {
            const _0x5dd2ac = _0x4446a6;
            return new Date(_0x614aa[0x1][_0x5dd2ac(0x172)])['getTime']() > new Date(_0x475b3a[0x1][_0x5dd2ac(0x172)])[_0x5dd2ac(0x505)]() ? -0x1 : new Date(_0x614aa[0x1][_0x5dd2ac(0x172)])[_0x5dd2ac(0x505)]() < new Date(_0x475b3a[0x1][_0x5dd2ac(0x172)])[_0x5dd2ac(0x505)]() ? 0x1 : 0x0;
        })), console[_0x4446a6(0x533)](_0x4446a6(0x2a9)), document[_0x4446a6(0x36b)](_0x4446a6(0x1e8))['innerHTML'] = '', createTableUploadTime(_0x1abf64);
    }), $(_0x1a4d50(0x2cb))['on'](_0x1a4d50(0x30f), () => {
        const _0x577c95 = _0x1a4d50;
        _0x1abf64 = new Map([..._0x1abf64[_0x577c95(0x434)]()][_0x577c95(0x184)]((_0x296ce6, _0x34fe97) => {
            const _0xbc4ee7 = _0x577c95;
            return new Date(_0x296ce6[0x1][_0xbc4ee7(0x5e6)])['getTime']() > new Date(_0x34fe97[0x1]['command_date'])[_0xbc4ee7(0x505)]() ? -0x1 : new Date(_0x296ce6[0x1]['command_date'])[_0xbc4ee7(0x505)]() < new Date(_0x34fe97[0x1][_0xbc4ee7(0x5e6)])['getTime']() ? 0x1 : 0x0;
        })), console[_0x577c95(0x533)](_0x577c95(0x52a)), document[_0x577c95(0x36b)](_0x577c95(0x1e8))[_0x577c95(0x4c5)] = '', createTableUploadTime(_0x1abf64);
    });
}

function parseDate(_0x2be264) {
    const _0x2542e9 = _0x555ef8;
    let _0x28caf9 = new Date(_0x2be264),
        _0x4ed47c = _0x28caf9[_0x2542e9(0x4ec)](),
        _0x3d3002 = ('00' + (_0x28caf9[_0x2542e9(0x236)]() + 0x1))[_0x2542e9(0x22c)](-0x2),
        _0x58fbf0 = ('00' + _0x28caf9[_0x2542e9(0x637)]())[_0x2542e9(0x22c)](-0x2),
        _0x120319 = ('00' + _0x28caf9[_0x2542e9(0x3cf)]())[_0x2542e9(0x22c)](-0x2),
        _0x46ae08 = ('00' + _0x28caf9[_0x2542e9(0x576)]())[_0x2542e9(0x22c)](-0x2),
        _0x48a1ef = ('00' + _0x28caf9[_0x2542e9(0x13c)]())[_0x2542e9(0x22c)](-0x2),
        _0x42f97d = _0x3d3002 + '/' + _0x58fbf0 + '/' + _0x4ed47c + '\x20' + _0x120319 + ':' + _0x46ae08 + ':' + _0x48a1ef;
    return _0x42f97d;
}

function sortInfoIncomings(_0x3e1cee, _0x16f1fe) {
    const _0x92fa1a = _0x555ef8;
    document['getElementById'](_0x92fa1a(0x37c))[_0x92fa1a(0x1c0)]('click', () => {
        const _0x3a6d35 = _0x92fa1a;
        _0x3e1cee = new Map([..._0x3e1cee[_0x3a6d35(0x434)]()][_0x3a6d35(0x184)]((_0x50d9ce, _0x16a2e4) => {
            const _0x3e5e54 = _0x3a6d35;
            return _0x50d9ce[0x1][_0x3e5e54(0x2b9)] > _0x16a2e4[0x1][_0x3e5e54(0x2b9)] ? -0x1 : _0x50d9ce[0x1][_0x3e5e54(0x2b9)] < _0x16a2e4[0x1][_0x3e5e54(0x2b9)] ? 0x1 : 0x0;
        })), Array[_0x3a6d35(0x2e2)](_0x3e1cee[_0x3a6d35(0x2f0)]())[_0x3a6d35(0x432)](_0x3bf84a => {
            const _0xd16388 = _0x3a6d35;
            let _0x87f88f = _0x3e1cee['get'](_0x3bf84a);
            _0x87f88f[_0xd16388(0x564)][_0xd16388(0x184)]((_0x4ea715, _0x1e895c) => {
                const _0xe88715 = _0xd16388;
                return _0x4ea715[_0xe88715(0x344)] > _0x1e895c[_0xe88715(0x344)] ? -0x1 : _0x4ea715[_0xe88715(0x344)] < _0x1e895c[_0xe88715(0x344)] ? 0x1 : 0x0;
            }), _0x3e1cee['set'](_0x3bf84a, _0x87f88f);
        }), document[_0x3a6d35(0x36b)](_0x3a6d35(0x205))[_0x3a6d35(0x501)](), createTablePlayers(_0x3e1cee, _0x16f1fe);
    }), document[_0x92fa1a(0x36b)](_0x92fa1a(0x418))[_0x92fa1a(0x1c0)](_0x92fa1a(0x30f), () => {
        const _0x3a718c = _0x92fa1a;
        _0x3e1cee = new Map([..._0x3e1cee['entries']()][_0x3a718c(0x184)]((_0x6dfacd, _0x12b93a) => {
            const _0x266b3d = _0x3a718c;
            return _0x6dfacd[0x1]['nr_supports_total'] > _0x12b93a[0x1]['nr_supports_total'] ? -0x1 : _0x6dfacd[0x1][_0x266b3d(0x614)] < _0x12b93a[0x1][_0x266b3d(0x614)] ? 0x1 : 0x0;
        })), Array[_0x3a718c(0x2e2)](_0x3e1cee['keys']())[_0x3a718c(0x432)](_0x2a363c => {
            const _0x2cbf08 = _0x3a718c;
            let _0x2eb17f = _0x3e1cee[_0x2cbf08(0x18a)](_0x2a363c);
            _0x2eb17f['list_coords']['sort']((_0x17d7d4, _0x4247cc) => {
                const _0x3be85b = _0x2cbf08;
                return _0x17d7d4[_0x3be85b(0x2db)] > _0x4247cc['nr_supports'] ? -0x1 : _0x17d7d4['nr_supports'] < _0x4247cc[_0x3be85b(0x2db)] ? 0x1 : 0x0;
            }), _0x3e1cee[_0x2cbf08(0x588)](_0x2a363c, _0x2eb17f);
        }), document['getElementById']('tbody_player')['remove'](), createTablePlayers(_0x3e1cee, _0x16f1fe);
    }), document[_0x92fa1a(0x36b)](_0x92fa1a(0x3e4))['addEventListener'](_0x92fa1a(0x30f), () => {
        const _0x14b4ed = _0x92fa1a;
        _0x3e1cee = new Map([..._0x3e1cee[_0x14b4ed(0x434)]()][_0x14b4ed(0x184)]((_0x1fa87a, _0x458eb0) => {
            const _0x353ea5 = _0x14b4ed;
            return _0x1fa87a[0x1][_0x353ea5(0x468)] > _0x458eb0[0x1][_0x353ea5(0x468)] ? -0x1 : _0x1fa87a[0x1]['nr_nobles_total'] < _0x458eb0[0x1][_0x353ea5(0x468)] ? 0x1 : 0x0;
        })), Array[_0x14b4ed(0x2e2)](_0x3e1cee[_0x14b4ed(0x2f0)]())[_0x14b4ed(0x432)](_0xdffc6 => {
            const _0x93b798 = _0x14b4ed;
            let _0x2dd991 = _0x3e1cee[_0x93b798(0x18a)](_0xdffc6);
            _0x2dd991[_0x93b798(0x564)][_0x93b798(0x184)]((_0x480c03, _0x5f0ecd) => {
                const _0x42d288 = _0x93b798;
                return _0x480c03[_0x42d288(0x63f)] > _0x5f0ecd['nr_nobles'] ? -0x1 : _0x480c03[_0x42d288(0x63f)] < _0x5f0ecd['nr_nobles'] ? 0x1 : 0x0;
            }), _0x3e1cee[_0x93b798(0x588)](_0xdffc6, _0x2dd991);
        }), document[_0x14b4ed(0x36b)](_0x14b4ed(0x205))['remove'](), createTablePlayers(_0x3e1cee, _0x16f1fe);
    }), document[_0x92fa1a(0x36b)](_0x92fa1a(0x22e))[_0x92fa1a(0x1c0)]('click', () => {
        const _0x148400 = _0x92fa1a;
        _0x3e1cee = new Map([..._0x3e1cee['entries']()][_0x148400(0x184)]((_0x1455e1, _0x4c865f) => {
            const _0x54d1b1 = _0x148400;
            return _0x1455e1[0x1][_0x54d1b1(0x128)] > _0x4c865f[0x1][_0x54d1b1(0x128)] ? -0x1 : _0x1455e1[0x1][_0x54d1b1(0x128)] < _0x4c865f[0x1][_0x54d1b1(0x128)] ? 0x1 : 0x0;
        })), Array[_0x148400(0x2e2)](_0x3e1cee[_0x148400(0x2f0)]())[_0x148400(0x432)](_0x210be2 => {
            const _0x4a5f1a = _0x148400;
            let _0x24d370 = _0x3e1cee[_0x4a5f1a(0x18a)](_0x210be2);
            _0x24d370[_0x4a5f1a(0x564)][_0x4a5f1a(0x184)]((_0x554517, _0x4a52d2) => {
                const _0x46db6c = _0x4a5f1a;
                return _0x554517[_0x46db6c(0x1bf)] > _0x4a52d2[_0x46db6c(0x1bf)] ? -0x1 : _0x554517[_0x46db6c(0x1bf)] < _0x4a52d2['nr_snipe'] ? 0x1 : _0x554517['nr_sniped'] > _0x4a52d2[_0x46db6c(0x1bd)] ? -0x1 : _0x554517[_0x46db6c(0x1bd)] < _0x4a52d2[_0x46db6c(0x1bd)] ? 0x1 : 0x0;
            }), _0x3e1cee[_0x4a5f1a(0x588)](_0x210be2, _0x24d370);
        }), document['getElementById'](_0x148400(0x205))['remove'](), createTablePlayers(_0x3e1cee, _0x16f1fe);
    }), document[_0x92fa1a(0x36b)](_0x92fa1a(0x55a))[_0x92fa1a(0x1c0)](_0x92fa1a(0x30f), () => {
        const _0x219532 = _0x92fa1a;
        _0x3e1cee = new Map([..._0x3e1cee[_0x219532(0x434)]()][_0x219532(0x184)]((_0x279cb6, _0x29c309) => {
            const _0x4037b5 = _0x219532;
            return _0x279cb6[0x1]['nr_recap_total'] > _0x29c309[0x1][_0x4037b5(0x269)] ? -0x1 : _0x279cb6[0x1][_0x4037b5(0x269)] < _0x29c309[0x1][_0x4037b5(0x269)] ? 0x1 : 0x0;
        })), Array['from'](_0x3e1cee[_0x219532(0x2f0)]())['forEach'](_0x152283 => {
            const _0x14c8aa = _0x219532;
            let _0x21f4fe = _0x3e1cee[_0x14c8aa(0x18a)](_0x152283);
            _0x21f4fe[_0x14c8aa(0x564)][_0x14c8aa(0x184)]((_0x43b0ee, _0x15b2f0) => {
                const _0x308fd3 = _0x14c8aa;
                return _0x43b0ee[_0x308fd3(0x3ec)] > _0x15b2f0[_0x308fd3(0x3ec)] ? -0x1 : _0x43b0ee[_0x308fd3(0x3ec)] < _0x15b2f0[_0x308fd3(0x3ec)] ? 0x1 : _0x43b0ee[_0x308fd3(0x164)] > _0x15b2f0[_0x308fd3(0x164)] ? -0x1 : _0x43b0ee[_0x308fd3(0x164)] < _0x15b2f0['nr_recaped'] ? 0x1 : 0x0;
            }), _0x3e1cee['set'](_0x152283, _0x21f4fe);
        }), document[_0x219532(0x36b)](_0x219532(0x205))['remove'](), createTablePlayers(_0x3e1cee, _0x16f1fe);
    });
}

function createTableGetCoords(_0x59a4c6) {
    const _0x24dedb = _0x555ef8;
    let _0x587d2e = '\x0a\x20\x20\x20\x20<center>\x0a\x20\x20\x20\x20<table\x20id=\x22table_get_coords\x22\x20\x20border=\x221\x22\x20style=\x22width:\x2070%;background-color:' + backgroundColor + ';border-color:' + borderColor + _0x24dedb(0x235) + headerColor + _0x24dedb(0x438) + titleColor + _0x24dedb(0x608) + headerColor + _0x24dedb(0x546) + headerColor + _0x24dedb(0x438) + titleColor + _0x24dedb(0x270) + headerColor + _0x24dedb(0x567) + headerColor + _0x24dedb(0x438) + titleColor + _0x24dedb(0x238) + headerColor + _0x24dedb(0x1e6) + headerColor + _0x24dedb(0x5e5) + titleColor + _0x24dedb(0x427) + headerColor + _0x24dedb(0x4a3) + headerColor + _0x24dedb(0x438) + titleColor + _0x24dedb(0x5fe) + headerColor + _0x24dedb(0x133) + headerColor + _0x24dedb(0x438) + titleColor + _0x24dedb(0x358) + headerColor + '\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x20<input\x20type=\x22number\x22\x20style=\x22text-align:center;font-size:18px\x22\x20id=\x22input_radius\x22\x20min=\x220\x22\x20max=\x221000\x22\x20placeholder=\x22R\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x20<font\x20style=\x22margin:5px\x22\x20color=\x22' + titleColor + _0x24dedb(0x512) + headerColor + _0x24dedb(0x3cd) + headerColor + _0x24dedb(0x5cf) + titleColor + '\x22>nr\x20coords:(0)</font>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><textarea\x20id=\x22input_get_coords\x22\x20cols=\x2260\x22\x20rows=\x2220\x22\x20></textarea><center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x0a\x20\x20\x20\x20</table>\x0a\x0a\x20\x20\x20\x20</div></center>\x0a\x20\x20\x20\x20';
    if (document[_0x24dedb(0x36b)](_0x24dedb(0x19f)) == null) document[_0x24dedb(0x36b)]('div_get_coords')[_0x24dedb(0x4c5)] = _0x587d2e;
    else $(_0x24dedb(0x1b7))['hide'](), $(_0x24dedb(0x31d))[_0x24dedb(0x539)](), $(_0x24dedb(0x48b))[_0x24dedb(0x539)](), $(_0x24dedb(0x329))[_0x24dedb(0x539)](0x1f4), $('#div_get_coords')['toggle'](0x1f4);
    if (localStorage[_0x24dedb(0x520)](game_data[_0x24dedb(0x429)] + _0x24dedb(0x61e)) != null) {
        let _0x738bda = JSON[_0x24dedb(0x1a6)](localStorage[_0x24dedb(0x520)](game_data[_0x24dedb(0x429)] + 'save_settings'))[0x0];
        $(_0x24dedb(0x467))[_0x24dedb(0x2e1)](function(_0x394563, _0x54df6a) {
            const _0x2be9f7 = _0x24dedb;
            this[_0x2be9f7(0x38c)] = _0x738bda[_0x394563];
        });
        let _0x49a5c0 = JSON['parse'](localStorage[_0x24dedb(0x520)](game_data['world'] + _0x24dedb(0x61e)))[0x1];
        $(_0x24dedb(0x392))[_0x24dedb(0x2e1)](function(_0x3f836e, _0x1bb3b3) {
            this['value'] = _0x49a5c0[_0x3f836e];
        });
        let _0x162304 = JSON['parse'](localStorage[_0x24dedb(0x520)](game_data[_0x24dedb(0x429)] + 'save_settings'))[0x2];
        $(_0x24dedb(0x47d) + _0x162304 + '\x27')[_0x24dedb(0x2af)](_0x24dedb(0x38c), !![]);
    }
    $(_0x24dedb(0x4b7))['on'](_0x24dedb(0x2fc), () => {
        const _0x5b4dc0 = _0x24dedb;
        console[_0x5b4dc0(0x533)]('save');
        let _0x2b0a03 = [],
            _0x55f69e = [];
        $('#div_settings\x20input[type=checkbox],\x20#div_get_coords\x20input[type=checkbox]')[_0x5b4dc0(0x2e1)](function() {
            const _0x5758d6 = _0x5b4dc0;
            var _0x349484 = this['checked'];
            _0x2b0a03[_0x5758d6(0x1fa)](_0x349484);
        }), $(_0x5b4dc0(0x2ef))[_0x5b4dc0(0x2e1)](function() {
            const _0x41b3a6 = _0x5b4dc0;
            var _0x4730e2 = this['value'];
            _0x55f69e[_0x41b3a6(0x1fa)](_0x4730e2);
        });
        let _0x5ec3c3 = $(_0x5b4dc0(0x319))[_0x5b4dc0(0x346)](),
            _0x1ba51c = [_0x2b0a03, _0x55f69e, _0x5ec3c3];
        localStorage[_0x5b4dc0(0x1d4)](game_data[_0x5b4dc0(0x429)] + 'save_settings', JSON[_0x5b4dc0(0x199)](_0x1ba51c));
    }), $(_0x24dedb(0x521))['off'](_0x24dedb(0x30f)), $(_0x24dedb(0x521))['on'](_0x24dedb(0x30f), () => {
        const _0x127c34 = _0x24dedb;
        let _0x32dc8c = Array[_0x127c34(0x2e2)](document[_0x127c34(0x36b)](_0x127c34(0x20d))[_0x127c34(0x492)][_0x127c34(0x38b)]()[_0x127c34(0x1c8)](','))[_0x127c34(0x249)](_0x3ebd0f => _0x3ebd0f),
            _0x44ec25 = Array[_0x127c34(0x2e2)](document['getElementById'](_0x127c34(0x4b6))[_0x127c34(0x492)][_0x127c34(0x38b)]()[_0x127c34(0x1c8)](','))['filter'](_0x49af24 => _0x49af24),
            _0x17308b = Array['from'](document['getElementById'](_0x127c34(0x151))[_0x127c34(0x492)][_0x127c34(0x1c8)](','))[_0x127c34(0x249)](_0xe3fe98 => _0xe3fe98),
            _0x482488 = parseInt(document[_0x127c34(0x36b)](_0x127c34(0x355))[_0x127c34(0x492)]),
            _0xff42e5 = parseInt(document[_0x127c34(0x36b)](_0x127c34(0x291))[_0x127c34(0x492)]),
            _0x2fb42f = parseInt(document[_0x127c34(0x36b)](_0x127c34(0x1b2))[_0x127c34(0x492)]),
            _0xd11ed = parseInt(document[_0x127c34(0x36b)]('input_y_max')[_0x127c34(0x492)]),
            _0x1f005a = parseInt(document[_0x127c34(0x36b)](_0x127c34(0x5bc))[_0x127c34(0x492)]),
            _0x1a86dd = parseInt(document[_0x127c34(0x36b)](_0x127c34(0x584))[_0x127c34(0x492)]),
            _0x631a5d = parseInt(document[_0x127c34(0x36b)]('input_center_y')[_0x127c34(0x492)]);
        console['log'](_0x59a4c6);
        let _0x2f91ec = [];
        Array[_0x127c34(0x2e2)](_0x59a4c6[_0x127c34(0x2f0)]())['forEach'](_0x1f1328 => {
            const _0x93ce8 = _0x127c34;
            try {
                let _0x109a0e = _0x59a4c6[_0x93ce8(0x18a)](_0x1f1328),
                    _0xfffb0f = !![];
                if (_0x32dc8c['length'] > 0x0) {
                    let _0x3380b3 = ![];
                    for (let _0x108019 = 0x0; _0x108019 < _0x32dc8c[_0x93ce8(0x5d6)]; _0x108019++) {
                        if (_0x32dc8c[_0x108019][_0x93ce8(0x26b)]() == _0x109a0e[_0x93ce8(0x578)][_0x93ce8(0x38b)]()) {
                            _0x3380b3 = !![];
                            break;
                        }
                    }
                    if (_0x3380b3 == ![]) _0xfffb0f = ![];
                }
                if (_0x44ec25['length'] > 0x0) {
                    let _0x3af289 = ![];
                    for (let _0x5872a6 = 0x0; _0x5872a6 < _0x44ec25[_0x93ce8(0x5d6)]; _0x5872a6++) {
                        if (_0x44ec25[_0x5872a6][_0x93ce8(0x26b)]() == _0x109a0e[_0x93ce8(0x1ac)][_0x93ce8(0x38b)]()) {
                            _0x3af289 = !![];
                            break;
                        }
                    }
                    if (_0x3af289 == ![]) _0xfffb0f = ![];
                }
                if (_0x17308b[_0x93ce8(0x5d6)] > 0x0) {
                    let _0x43e6f9 = ![];
                    for (let _0x29f1b2 = 0x0; _0x29f1b2 < _0x17308b[_0x93ce8(0x5d6)]; _0x29f1b2++) {
                        if (_0x17308b[_0x29f1b2][_0x93ce8(0x26b)]() == getContinent(_0x1f1328)) {
                            _0x43e6f9 = !![];
                            break;
                        }
                    }
                    if (_0x43e6f9 == ![]) _0xfffb0f = ![];
                }
                let [_0x9bdf2, _0x2930c6] = _0x1f1328[_0x93ce8(0x1c8)]('|');
                Number[_0x93ce8(0x283)](_0x482488) == ![] && _0xfffb0f == !![] && (_0xfffb0f = _0x9bdf2 >= _0x482488 ? !![] : ![]), Number['isNaN'](_0xff42e5) == ![] && _0xfffb0f == !![] && (_0xfffb0f = _0x2930c6 >= _0xff42e5 ? !![] : ![]), Number[_0x93ce8(0x283)](_0x2fb42f) == ![] && _0xfffb0f == !![] && (_0xfffb0f = _0x9bdf2 <= _0x2fb42f ? !![] : ![]), Number['isNaN'](_0xd11ed) == ![] && _0xfffb0f == !![] && (_0xfffb0f = _0x2930c6 <= _0xd11ed ? !![] : ![]), Number[_0x93ce8(0x283)](_0x1f005a) == ![] && Number[_0x93ce8(0x283)](_0x1a86dd) == ![] && Number[_0x93ce8(0x283)](_0x631a5d) == ![] && _0xfffb0f == !![] && (_0xfffb0f = calcDistance(_0x1a86dd + '|' + _0x631a5d, _0x1f1328) < _0x1f005a ? !![] : ![]), _0xfffb0f == !![] && _0x2f91ec[_0x93ce8(0x1fa)](_0x1f1328);
            } catch (_0x112bdb) {}
        }), console[_0x127c34(0x533)](_0x2f91ec), document[_0x127c34(0x36b)]('input_get_coords')[_0x127c34(0x492)] = _0x2f91ec[_0x127c34(0x1e2)]('\x20'), document[_0x127c34(0x36b)](_0x127c34(0x18e))[_0x127c34(0x4c5)] = _0x127c34(0x60a) + _0x2f91ec[_0x127c34(0x5d6)] + ')';
    });
}

function getContinent(_0x53db55) {
    const _0x371c6e = _0x555ef8;
    let [_0x51d07b, _0x824cb1] = Array['from'](_0x53db55[_0x371c6e(0x1c8)]('|'))[_0x371c6e(0x4e2)](_0x236ed9 => parseInt(_0x236ed9));
    for (let _0x53e076 = 0x0; _0x53e076 < 0x7d0; _0x53e076 += 0x64) {
        for (let _0x40f8f4 = 0x0; _0x40f8f4 < 0x7d0; _0x40f8f4 += 0x64) {
            if (_0x53e076 >= _0x51d07b && _0x51d07b < _0x53e076 + 0x64 && _0x40f8f4 >= _0x824cb1 && _0x824cb1 < _0x40f8f4 + 0x64) {
                let _0x363829 = parseInt(_0x824cb1 / 0x64) + '' + parseInt(_0x51d07b / 0x64);
                return _0x363829;
            }
        }
    }
}

function insertChartLibrary() {
    return new Promise((_0x20eef4, _0x23cb2) => {
        const _0x23a5a4 = _0x2f7d;
        let _0xc5c6e5 = new Date()[_0x23a5a4(0x505)](),
            _0x204cf4 = document[_0x23a5a4(0x4ee)]('script');
        _0x204cf4[_0x23a5a4(0x15c)] = _0x23a5a4(0x25a), _0x204cf4[_0x23a5a4(0x1a8)] = 'https://cdn.anychart.com/releases/8.9.0/js/anychart-base.min.js', _0x204cf4['onload'] = function() {
            const _0x1704e6 = _0x23a5a4;
            let _0x186612 = new Date()[_0x1704e6(0x505)]();
            console['log'](_0x1704e6(0x58e) + (_0x186612 - _0xc5c6e5) + '\x20ms'), _0x20eef4(_0x1704e6(0x488));
        }, document['head'][_0x23a5a4(0x18f)](_0x204cf4);
    });
}

function createChart(_0x33d2e8, _0x5e2cd4) {
    const _0x46f667 = _0x555ef8;
    let _0x2511e2 = anychart[_0x46f667(0x244)](),
        _0x243709 = _0x2511e2[_0x46f667(0x58f)](_0x33d2e8);
    _0x2511e2[_0x46f667(0x295)](_0x5e2cd4), _0x2511e2['tooltip']()[_0x46f667(0x480)](_0x46f667(0x3da)), _0x2511e2[_0x46f667(0x5b5)]()[_0x46f667(0x3ce)]()[_0x46f667(0x44f)](-0x2d), _0x2511e2[_0x46f667(0x3a9)]()[_0x46f667(0x3ce)]()['format'](function() {
        const _0x1724b0 = _0x46f667;
        let _0x1dd4f5 = this[_0x1724b0(0x492)];
        return _0x1dd4f5 = _0x1dd4f5 + _0x1724b0(0x49c), _0x1dd4f5;
    }), _0x2511e2[_0x46f667(0x324)](), document[_0x46f667(0x612)](_0x46f667(0x203))[0x0][_0x46f667(0x501)]();
}

function _0x2f7d(_0xcbc483, _0x5a9050) {
    const _0x18296e = _0x1829();
    return _0x2f7d = function(_0x2f7d46, _0x313cbb) {
        _0x2f7d46 = _0x2f7d46 - 0x123;
        let _0x5986a9 = _0x18296e[_0x2f7d46];
        return _0x5986a9;
    }, _0x2f7d(_0xcbc483, _0x5a9050);
}

function getNameTroops() {
    return new Promise((_0x389768, _0x2f5bde) => {
        const _0x11b408 = _0x2f7d;
        let _0x55271d;
        if (localStorage['getItem'](game_data[_0x11b408(0x429)] + _0x11b408(0x1b8)) !== null) _0x55271d = JSON['parse'](localStorage[_0x11b408(0x520)](game_data['world'] + _0x11b408(0x1b8))), console[_0x11b408(0x533)](_0x11b408(0x2dd)), _0x389768(_0x55271d);
        else {
            let _0x22a4dc = document['body'][_0x11b408(0x4c5)];
            document[_0x11b408(0x49e)][_0x11b408(0x4c5)] = httpGet(game_data[_0x11b408(0x2bc)] + _0x11b408(0x26d));
            let _0x1edca7 = {};
            Array[_0x11b408(0x2e2)]($(_0x11b408(0x46c)))['forEach'](_0x4ce3e2 => {
                const _0x300b38 = _0x11b408;
                let _0x5ae9c1 = $(_0x4ce3e2)[_0x300b38(0x268)](_0x300b38(0x183))[_0x300b38(0x2af)]('title'),
                    _0x547a03 = $(_0x4ce3e2)[_0x300b38(0x2af)](_0x300b38(0x448));
                _0x1edca7[_0x547a03] = _0x5ae9c1;
            }), document['body'][_0x11b408(0x4c5)] = _0x22a4dc, localStorage[_0x11b408(0x1d4)](game_data['world'] + _0x11b408(0x1b8), JSON['stringify'](_0x1edca7)), console[_0x11b408(0x533)](_0x11b408(0x50d)), _0x389768(_0x1edca7);
        }
    });
}

function showIncomings(_0x560deb) {
    const _0xea9e1b = _0x555ef8;
    let _0x15d5fd = document['getElementById']('serverTime')[_0xea9e1b(0x5ad)],
        _0x4a19a0 = document[_0xea9e1b(0x36b)](_0xea9e1b(0x239))[_0xea9e1b(0x5ad)][_0xea9e1b(0x1c8)]('/');
    _0x4a19a0 = _0x4a19a0[0x1] + '/' + _0x4a19a0[0x0] + '/' + _0x4a19a0[0x2];
    let _0x1929d1 = new Date(_0x4a19a0 + '\x20' + _0x15d5fd)[_0xea9e1b(0x505)](),
        _0x17db60 = _0xea9e1b(0x2f3) + backgroundColor + _0xea9e1b(0x1c4) + titleColor + '\x22>X</font></b></a></div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20<center><div\x20id=\x22table_results\x22\x20style=\x22height:800px;width:900px;overflow:auto\x22>\x0a\x20\x20\x20\x20<table\x20id=\x22table_stats\x22\x20\x20border=\x221\x22\x20style=\x22width:\x20100%;background-color:' + backgroundColor + _0xea9e1b(0x2a0) + borderColor + _0xea9e1b(0x5bd) + headerColorCoords + _0xea9e1b(0x5e9) + titleColor + _0xea9e1b(0x5c2) + headerColorCoords + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><font\x20color=\x22' + titleColor + _0xea9e1b(0x51e) + headerColorCoords + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><font\x20color=\x22' + titleColor + _0xea9e1b(0x47e) + headerColorCoords + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><font\x20color=\x22' + titleColor + _0xea9e1b(0x55c) + headerColorCoords + _0xea9e1b(0x5e9) + titleColor + _0xea9e1b(0x457) + headerColorCoords + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><font\x20color=\x22' + titleColor + '\x22>arrives\x20in\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x20\x0a\x0a\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>';
    for (let _0x568c1b = 0x0; _0x568c1b < _0x560deb['length']; _0x568c1b++) {
        let _0xc91d50 = new Date(_0x560deb[_0x568c1b]['date_land'])[_0xea9e1b(0x505)](),
            _0xce4a85 = _0x560deb[_0x568c1b]['type_attack_landed'] != undefined ? _0x560deb[_0x568c1b]['type_attack_landed'] : '?',
            _0x286bff = _0x560deb[_0x568c1b][_0xea9e1b(0x3e2)] == !![] ? headerColor : getColorDarker(headerColor, 0x32);
        _0x17db60 += _0xea9e1b(0x571) + _0x286bff + _0xea9e1b(0x33f) + game_data[_0xea9e1b(0x2bc)] + 'info_village&id=' + _0x560deb[_0x568c1b][_0xea9e1b(0x63a)] + '\x22style=\x22margin:0px;padding:0px\x22><center><font\x20color=\x22' + titleColor + '\x22>' + _0x560deb[_0x568c1b][_0xea9e1b(0x1d0)] + '</font></center></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:' + _0x286bff + _0xea9e1b(0x33f) + game_data[_0xea9e1b(0x2bc)] + 'info_player&id=' + _0x560deb[_0x568c1b][_0xea9e1b(0x563)] + '\x22style=\x22margin:0px;padding:0px\x22><center><font\x20color=\x22' + titleColor + '\x22>' + _0x560deb[_0x568c1b][_0xea9e1b(0x28b)] + '</font></center></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:' + _0x286bff + _0xea9e1b(0x33f) + game_data['link_base_pure'] + _0xea9e1b(0x5f0) + _0x560deb[_0x568c1b][_0xea9e1b(0x59d)] + _0xea9e1b(0x57c) + titleColor + '\x22>' + _0x560deb[_0x568c1b][_0xea9e1b(0x15a)] + _0xea9e1b(0x25c) + _0x286bff + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22' + game_data['link_base_pure'] + 'info_player&id=' + _0x560deb[_0x568c1b][_0xea9e1b(0x1ab)] + _0xea9e1b(0x45e) + titleColor + '\x22>' + _0x560deb[_0x568c1b][_0xea9e1b(0x633)] + _0xea9e1b(0x25c) + _0x286bff + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:3px;padding:0px\x22><font\x20color=\x22' + titleColor + _0xea9e1b(0x5ba) + _0x560deb[_0x568c1b]['date_launch'][_0xea9e1b(0x1c8)]('\x20')[0x0] + _0xea9e1b(0x12a) + _0x560deb[_0x568c1b][_0xea9e1b(0x314)][_0xea9e1b(0x1c8)]('\x20')[0x1] + '</b>\x20\x20</font>\x20</center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:' + _0x286bff + _0xea9e1b(0x277) + titleColor + _0xea9e1b(0x5ba) + _0x560deb[_0x568c1b][_0xea9e1b(0x2e7)][_0xea9e1b(0x1c8)]('\x20')[0x0] + _0xea9e1b(0x12a) + _0x560deb[_0x568c1b]['date_land']['split']('\x20')[0x1] + _0xea9e1b(0x486) + _0x286bff + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:3px;padding:0px\x22><font\x20color=\x22' + titleColor + '\x22>' + _0xce4a85 + _0xea9e1b(0x3b2), _0xc91d50 > _0x1929d1 ? _0x17db60 += '<td\x20style=\x22text-align:center;\x20width:auto;\x20background-color:' + _0x286bff + _0xea9e1b(0x272) + titleColor + _0xea9e1b(0x2e6) + _0xc91d50 + _0xea9e1b(0x191) + convertBuildTime(_0xc91d50 - _0x1929d1) + '</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>' : _0x17db60 += _0xea9e1b(0x42f) + _0x286bff + _0xea9e1b(0x272) + titleColor + '\x22>landed</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>', _0x17db60 += _0xea9e1b(0x4dd);
    }
    _0x17db60 += _0xea9e1b(0x14c), $('#div_container_incs')['remove'](), $(_0xea9e1b(0x362))['eq'](0x0)[_0xea9e1b(0x4c2)](_0x17db60), $(_0xea9e1b(0x508))['eq'](0x0)[_0xea9e1b(0x4c2)](_0x17db60), $(_0xea9e1b(0x60b))[_0xea9e1b(0x2e0)](_0xea9e1b(0x218), 'fixed'), $(_0xea9e1b(0x60b))[_0xea9e1b(0x4bb)]();
}

function getColorDarker(_0x51136c, _0x4fb0b7) {
    const _0x152a0d = _0x555ef8;
    let _0xc945a8 = _0x51136c;
    _0xc945a8 = _0xc945a8[_0x152a0d(0x632)](/^\s*#|\s*$/g, '');
    _0xc945a8['length'] === 0x3 && (_0xc945a8 = _0xc945a8[_0x152a0d(0x632)](/(.)/g, _0x152a0d(0x61f)));
    let _0x5750d6 = parseInt(_0xc945a8[_0x152a0d(0x62c)](0x0, 0x2), 0x10),
        _0x46ae8b = parseInt(_0xc945a8[_0x152a0d(0x62c)](0x2, 0x2), 0x10),
        _0x1099ba = parseInt(_0xc945a8[_0x152a0d(0x62c)](0x4, 0x2), 0x10);
    const _0x187a44 = (0x64 + _0x4fb0b7) / 0x64;
    return _0x5750d6 = Math['round'](Math['min'](0xff, Math[_0x152a0d(0x1fd)](0x0, _0x5750d6 * _0x187a44))), _0x46ae8b = Math[_0x152a0d(0x510)](Math[_0x152a0d(0x618)](0xff, Math[_0x152a0d(0x1fd)](0x0, _0x46ae8b * _0x187a44))), _0x1099ba = Math[_0x152a0d(0x510)](Math[_0x152a0d(0x618)](0xff, Math[_0x152a0d(0x1fd)](0x0, _0x1099ba * _0x187a44))), '#' + ('00' + _0x5750d6[_0x152a0d(0x29a)](0x10))[_0x152a0d(0x22c)](-0x2)[_0x152a0d(0x4e4)]() + ('00' + _0x46ae8b[_0x152a0d(0x29a)](0x10))['slice'](-0x2)['toUpperCase']() + ('00' + _0x1099ba[_0x152a0d(0x29a)](0x10))[_0x152a0d(0x22c)](-0x2)['toUpperCase']();
}

function convertBuildTime(_0x284057) {
    const _0x34d12e = _0x555ef8;
    let _0x3f1d0b = parseInt(_0x284057 / 0x3e8) % 0x3c,
        _0x370073 = parseInt(_0x284057 / (0x3e8 * 0x3c) % 0x3c),
        _0x2aac97 = parseInt(_0x284057 / (0x3e8 * 0x3c * 0x3c));
    return _0x3f1d0b = ('00' + _0x3f1d0b)[_0x34d12e(0x22c)](-0x2), _0x370073 = ('00' + _0x370073)[_0x34d12e(0x22c)](-0x2), _0x2aac97 = (_0x34d12e(0x369) + _0x2aac97)[_0x34d12e(0x22c)](-0x3), _0x2aac97 + ':' + _0x370073 + ':' + _0x3f1d0b;
}

function convertDate(_0x45cb8c) {
    const _0x5f43a8 = _0x555ef8;
    let _0x5f5c50 = [_0x5f43a8(0x57b), _0x5f43a8(0x2ed), 'Mar', _0x5f43a8(0x489), _0x5f43a8(0x4d4), _0x5f43a8(0x289), _0x5f43a8(0x464), _0x5f43a8(0x360), _0x5f43a8(0x1a7), _0x5f43a8(0x2de), _0x5f43a8(0x1e1), 'Dec'],
        _0x34138f = _0x45cb8c[_0x5f43a8(0x1c8)]('/')[0x0] - 0x1,
        _0xdb4e5 = _0x45cb8c[_0x5f43a8(0x1c8)]('/')[0x1],
        _0x1bd25d = _0x45cb8c[_0x5f43a8(0x1c8)]('\x20')[0x1];
    console[_0x5f43a8(0x533)](_0x45cb8c), console[_0x5f43a8(0x533)](_0x5f5c50[_0x34138f] + '\x20' + _0xdb4e5 + '\x20' + _0x1bd25d);
    if (_0x5f5c50[_0x34138f] == undefined) return '';
    else return _0x5f5c50[_0x34138f] + '\x20' + _0xdb4e5 + '\x20' + _0x1bd25d;
}
