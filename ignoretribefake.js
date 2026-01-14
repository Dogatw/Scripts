    /************ STORAGE ************/

    const KEY = 'tw_ignore_final_v2';

    const defaults = {
        enabled: true,
        maxTroops: 10
    };

    let cfg = Object.assign({}, defaults, JSON.parse(localStorage.getItem(KEY) || '{}'));

    function save() {
        localStorage.setItem(KEY, JSON.stringify(cfg));
    }

    /************ UNIT WEIGHTS ************/

    const UNIT_WEIGHTS = {
        spear: 1,
        sword: 1,
        axe: 1,
        archer: 1,
        spy: 2,
        light: 4,
        marcher: 4,
        heavy: 6,
        ram: 5,
        catapult: 8,
        snob: Infinity // NEVER ignore nobles
    };

    /************ UI ************/

    function createUI() {
        const box = document.createElement('div');
        box.innerHTML = `
            <b>Ignore Tribe Attacks</b><br>
            <label><input type="checkbox" id="tw_en"> Enabled</label><br><br>

            Max troops to treat as fake:<br>
            <input type="number" id="tw_troops" min="1" style="width:80px"><br><br>

            <small id="tw_status">Idle</small>
        `;

        Object.assign(box.style, {
            position: 'fixed',
            top: '70px',
            right: '10px',
            background: '#f4f1ea',
            border: '1px solid #a08c5b',
            padding: '8px',
            zIndex: 9999,
            fontSize: '12px'
        });

        document.body.appendChild(box);

        tw_en.checked = cfg.enabled;
        tw_troops.value = cfg.maxTroops;

        tw_en.onchange = e => {
            cfg.enabled = e.target.checked;
            save();
        };

        tw_troops.onchange = e => {
            cfg.maxTroops = Math.max(1, parseInt(e.target.value, 10) || 1);
            save();
        };
    }

    function status(msg, color = 'green') {
        const el = document.getElementById('tw_status');
        if (el) {
            el.textContent = msg;
            el.style.color = color;
        }
    }

    /************ TROOP ESTIMATION ************/

    function estimateTroops(row) {
        let total = 0;
        const icons = row.querySelectorAll('img[src*="/graphic/command/"]');

        for (const img of icons) {
            const src = img.src;

            for (const unit in UNIT_WEIGHTS) {
                if (src.includes(`/${unit}.`)) {
                    const w = UNIT_WEIGHTS[unit];
                    if (w === Infinity) return Infinity;
                    total += w;
                    break;
                }
            }
        }

        return total || Infinity;
    }

    function highlightRow(row) {
        row.style.background = '#fff3a0';
        row.style.transition = 'background 0.3s ease';
    }

    /************ MAIN ************/

    function run() {
        if (!cfg.enabled) return status('Disabled', 'red');

        const checkboxes = document.querySelectorAll(
            'input[type="checkbox"][name^="id_"]'
        );

        let scanned = checkboxes.length;
        let ignored = 0;

        checkboxes.forEach((cb, i) => {
            const row = cb.closest('tr');
            if (!row) return;

            // Tribe mate only
            if (!row.querySelector('.commandicon-ally')) return;

            const troopCount = estimateTroops(row);

            if (troopCount <= cfg.maxTroops) {
                highlightRow(row);

                setTimeout(() => {
                    cb.checked = true;
                }, 200 + i * 120);

                ignored++;
            }
        });

        if (ignored === 0) {
            return status(`Rows: ${scanned} | Ignored: 0`, 'gray');
        }

        const ignoreBtn = [...document.querySelectorAll('input, button')]
            .find(el =>
                /ignore/i.test(el.value || el.textContent) &&
                el.offsetParent !== null
            );

        if (!ignoreBtn) {
            return status('Ignore button not found', 'red');
        }

        setTimeout(() => {
            ignoreBtn.click();
            status(`Rows: ${scanned} | Ignored: ${ignored}`, 'green');
        }, 1200 + ignored * 150);
    }

    /************ INIT ************/

    setTimeout(() => {
        createUI();
        run();
    }, 2000);
