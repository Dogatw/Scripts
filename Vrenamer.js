/*
 * SAM Village Line Renamer
 *
 * Adds:
 *   [Frontline]
 *   [Midline]
 *   [Backline]
 *
 * Uses the SAME Supabase Strategy + distance rules
 * as SAM Unified Adaptive Scout.
 *
 * Existing village names are preserved.
 */

(async function SAM_VillageLineRenamer() {
    'use strict';

    /* =========================================================
       CONFIG
    ========================================================= */

    const SUPABASE = {
        url: 'https://xjrgjnsxahfxlseakknl.supabase.co',

        // Public Supabase anon key used by SAM Unified
        anonKey:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
            'eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqcmdqbnN4YWhmeGxzZWFra25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTc5MDgsImV4cCI6MjA4MzczMzkwOH0.' +
            'ZmqvQkg1baYpkYXhYCj59Drphdy2iq50tY3JoIR_6c4'
    };

    const RENAME_DELAY_MIN = 300;
    const RENAME_DELAY_MAX = 500;

    /* =========================================================
       PAGE CHECK
    ========================================================= */

    const url = new URL(window.location.href);

    const correctPage =
        url.searchParams.get('screen') === 'overview_villages' &&
        url.searchParams.get('mode') === 'combined' &&
        url.searchParams.get('group') === '0' &&
        url.searchParams.get('page') === '-1';

    if (!correctPage) {
        UI.InfoMessage('Opening all villages...');

        url.searchParams.set('screen', 'overview_villages');
        url.searchParams.set('mode', 'combined');
        url.searchParams.set('group', '0');
        url.searchParams.set('page', '-1');

        window.location.href = url.toString();
        return;
    }

    /* =========================================================
       HELPERS
    ========================================================= */

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function randomDelay() {
        return (
            RENAME_DELAY_MIN +
            Math.floor(
                Math.random() *
                (RENAME_DELAY_MAX - RENAME_DELAY_MIN + 1)
            )
        );
    }

    function escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    async function waitFor(check, timeout = 4000, interval = 50) {
        const start = Date.now();

        while (Date.now() - start < timeout) {
            const result = check();

            if (result) {
                return result;
            }

            await sleep(interval);
        }

        return null;
    }

    function schemaName() {
        const world =
            String(
                game_data.world ||
                location.hostname.split('.')[0] ||
                ''
            )
                .trim()
                .toLowerCase()
                .replace(/[^a-z0-9_]/g, '_');

        return `tw_vault_${world}`;
    }

    /* =========================================================
       SUPABASE
    ========================================================= */

    async function supabaseRequest(path) {
        const schema = schemaName();

        const response = await fetch(
            `${SUPABASE.url}/rest/v1${path}`,
            {
                method: 'GET',
                headers: {
                    apikey: SUPABASE.anonKey,
                    Authorization: `Bearer ${SUPABASE.anonKey}`,
                    Accept: 'application/json',
                    'Accept-Profile': schema,
                    'Content-Profile': schema
                }
            }
        );

        const text = await response.text();

        let data = null;

        try {
            data = text ? JSON.parse(text) : null;
        } catch (e) {
            // handled below
        }

        if (!response.ok) {
            throw new Error(
                data?.message ||
                data?.hint ||
                text ||
                `Supabase HTTP ${response.status}`
            );
        }

        return data;
    }

    async function loadStrategy() {
        const [relations, settingsRows] = await Promise.all([
            supabaseRequest(
                '/tribe_relations' +
                '?select=tribe_id,tribe_name,relation,enabled,notes'
            ),

            supabaseRequest(
                '/map_strategy_settings' +
                '?select=setting_id,frontline_max_distance,midline_max_distance,enabled' +
                '&setting_id=eq.default' +
                '&limit=1'
            )
        ]);

        const enemyTribes = new Set();

        for (const row of relations || []) {
            const tribeId =
                String(row?.tribe_id ?? '').trim();

            const relation =
                String(row?.relation || '')
                    .trim()
                    .toLowerCase();

            if (!tribeId) {
                continue;
            }

            // SAM Unified treats disabled Strategy relations as neutral.
            if (row?.enabled === false) {
                continue;
            }

            if (relation === 'enemy') {
                enemyTribes.add(tribeId);
            }
        }

        const saved = settingsRows?.[0] || {};

        const frontlineMax =
            Math.max(
                0,
                Number(saved.frontline_max_distance) || 20
            );

        const midlineMax =
            Math.max(
                frontlineMax + 0.01,
                Number(saved.midline_max_distance) || 45
            );

        if (!enemyTribes.size) {
            throw new Error(
                'No enabled enemy tribes were found in Supabase Strategy.'
            );
        }

        return {
            enemyTribes,
            frontlineMax,
            midlineMax
        };
    }

    /* =========================================================
       WORLD MAP
    ========================================================= */

    async function fetchText(path) {
        const response = await fetch(path, {
            credentials: 'same-origin'
        });

        if (!response.ok) {
            throw new Error(
                `${path} returned HTTP ${response.status}`
            );
        }

        return response.text();
    }

    async function loadWorldMap() {
        const [villageText, playerText] =
            await Promise.all([
                fetchText('/map/village.txt'),
                fetchText('/map/player.txt')
            ]);

        const playerTribes = new Map();

        for (
            const line of playerText.trim().split(/\r?\n/)
        ) {
            const row = line.split(',');

            if (row.length < 3) {
                continue;
            }

            playerTribes.set(
                String(row[0]),
                String(row[2] || '0')
            );
        }

        const villages = [];
        const byId = new Map();

        for (
            const line of villageText.trim().split(/\r?\n/)
        ) {
            const row = line.split(',');

            if (row.length < 6) {
                continue;
            }

            const id = String(row[0]);
            const x = Number(row[2]);
            const y = Number(row[3]);
            const playerId = String(row[4] || '0');

            if (
                !Number.isFinite(x) ||
                !Number.isFinite(y)
            ) {
                continue;
            }

            const point = {
                id,
                x,
                y,
                coord: `${row[2]}|${row[3]}`,
                playerId,
                allyId:
                    playerTribes.get(playerId) || '0'
            };

            villages.push(point);
            byId.set(id, point);
        }

        return {
            villages,
            byId
        };
    }

    /* =========================================================
       SAME SPATIAL / DISTANCE METHOD AS SAM
    ========================================================= */

    function createSpatialIndex(points, cellSize = 10) {
        const buckets = new Map();

        let minX = Infinity;
        let maxX = -Infinity;
        let minY = Infinity;
        let maxY = -Infinity;

        for (const point of points) {
            const cx =
                Math.floor(point.x / cellSize);

            const cy =
                Math.floor(point.y / cellSize);

            const key = `${cx}:${cy}`;

            const list =
                buckets.get(key) || [];

            list.push(point);
            buckets.set(key, list);

            minX = Math.min(minX, cx);
            maxX = Math.max(maxX, cx);
            minY = Math.min(minY, cy);
            maxY = Math.max(maxY, cy);
        }

        return {
            buckets,
            cellSize,
            minX,
            maxX,
            minY,
            maxY,
            size: points.length
        };
    }

    function findNearest(index, point) {
        if (!index?.size) {
            return null;
        }

        const cx =
            Math.floor(point.x / index.cellSize);

        const cy =
            Math.floor(point.y / index.cellSize);

        const maxRadius = Math.max(
            Math.abs(cx - index.minX),
            Math.abs(cx - index.maxX),
            Math.abs(cy - index.minY),
            Math.abs(cy - index.maxY)
        );

        let best = null;
        let bestSquared = Infinity;

        for (
            let radius = 0;
            radius <= maxRadius;
            radius++
        ) {
            for (
                let x = cx - radius;
                x <= cx + radius;
                x++
            ) {
                for (
                    let y = cy - radius;
                    y <= cy + radius;
                    y++
                ) {
                    if (
                        radius > 0 &&
                        x !== cx - radius &&
                        x !== cx + radius &&
                        y !== cy - radius &&
                        y !== cy + radius
                    ) {
                        continue;
                    }

                    const candidates =
                        index.buckets.get(
                            `${x}:${y}`
                        ) || [];

                    for (
                        const candidate of candidates
                    ) {
                        const dx =
                            candidate.x - point.x;

                        const dy =
                            candidate.y - point.y;

                        const squared =
                            dx * dx + dy * dy;

                        if (
                            squared < bestSquared
                        ) {
                            bestSquared = squared;
                            best = candidate;
                        }
                    }
                }
            }

            if (
                best &&
                Math.sqrt(bestSquared) <=
                    Math.max(0, radius - 1) *
                        index.cellSize
            ) {
                break;
            }
        }

        if (!best) {
            return null;
        }

        return {
            point: best,
            distance:
                Math.sqrt(bestSquared)
        };
    }

    function classifyVillage(
        point,
        enemyIndex,
        strategy
    ) {
        const nearest =
            findNearest(enemyIndex, point);

        if (!nearest) {
            throw new Error(
                `Could not find nearest enemy for ${point.coord}`
            );
        }

        const distance = nearest.distance;

        let line;

        if (
            distance <= strategy.frontlineMax
        ) {
            line = 'Frontline';
        } else if (
            distance <= strategy.midlineMax
        ) {
            line = 'Midline';
        } else {
            line = 'Backline';
        }

        return {
            line,
            distance,
            nearestEnemy:
                nearest.point.coord
        };
    }

    /* =========================================================
       VILLAGE NAMES
    ========================================================= */

    const oldLineSuffix =
        /\s+\[(?:Frontline|Midline|Backline)\]\s*$/i;

    function cleanVillageName(name) {
        return String(name || '')
            .replace(oldLineSuffix, '')
            .trim();
    }

    function buildVillageName(
        oldName,
        line,
        maxLength = 32
    ) {
        let base =
            cleanVillageName(oldName);

        const suffix =
            ` [${line}]`;

        if (!base) {
            return `[${line}]`
                .slice(0, maxLength);
        }

        const available =
            maxLength - suffix.length;

        if (available <= 0) {
            return `[${line}]`
                .slice(0, maxLength);
        }

        base = base
            .slice(0, available)
            .trimEnd();

        return `${base}${suffix}`;
    }

    function readOwnVillages(worldMap) {
        const result = [];

        const elements =
            document.querySelectorAll(
                '.quickedit-vn'
            );

        for (const element of elements) {
            const id =
                String(element.dataset.id || '');

            if (!id) {
                continue;
            }

            const point =
                worldMap.byId.get(id);

            if (!point) {
                continue;
            }

            const label =
                element.querySelector(
                    '.quickedit-label'
                );

            let name =
                String(
                    label?.dataset?.text || ''
                ).trim();

            // Fallback only if data-text is absent.
            if (!name && label) {
                name =
                    label.textContent
                        .replace(
                            /\s+\(\d{1,3}\|\d{1,3}\)\s+K\d+\s*$/,
                            ''
                        )
                        .trim();
            }

            const maxLength =
                Number(element.dataset.length) ||
                32;

            result.push({
                id,
                element,
                point,
                currentName: name,
                maxLength
            });
        }

        return result;
    }

    /* =========================================================
       SAFE SEQUENTIAL QUICKEDIT RENAME
    ========================================================= */

    async function renameOne(item) {
        const root =
            item.element;

        const renameIcon =
            root.querySelector(
                '.rename-icon'
            );

        if (!renameIcon) {
            throw new Error(
                'Rename icon not found'
            );
        }

        renameIcon.click();

        const input =
            await waitFor(() =>
                root.querySelector(
                    '.quickedit-edit input[type="text"]'
                )
            );

        if (!input) {
            throw new Error(
                'Rename input did not appear'
            );
        }

        input.value =
            item.newName;

        input.dispatchEvent(
            new Event('input', {
                bubbles: true
            })
        );

        input.dispatchEvent(
            new Event('change', {
                bubbles: true
            })
        );

        const button =
            root.querySelector(
                '.quickedit-edit input[type="button"],' +
                '.quickedit-edit button'
            );

        if (!button) {
            throw new Error(
                'Rename button not found'
            );
        }

        button.click();

        const confirmed =
            await waitFor(() => {
                const label =
                    root.querySelector(
                        '.quickedit-label'
                    );

                if (!label) {
                    return false;
                }

                const dataText =
                    String(
                        label.dataset?.text || ''
                    ).trim();

                const visible =
                    String(
                        label.textContent || ''
                    ).trim();

                return (
                    dataText === item.newName ||
                    visible.startsWith(
                        item.newName
                    )
                );
            }, 5000);

        if (!confirmed) {
            throw new Error(
                'Rename was not confirmed'
            );
        }

        return true;
    }

    /* =========================================================
       LOAD EVERYTHING
    ========================================================= */

    try {
        UI.InfoMessage(
            'Reading SAM Strategy and classifying villages...'
        );

        const [
            strategy,
            worldMap
        ] = await Promise.all([
            loadStrategy(),
            loadWorldMap()
        ]);

        const enemyVillages =
            worldMap.villages.filter(
                village =>
                    strategy.enemyTribes.has(
                        village.allyId
                    )
            );

        if (!enemyVillages.length) {
            throw new Error(
                'No villages belonging to enabled enemy tribes were found.'
            );
        }

        const enemyIndex =
            createSpatialIndex(
                enemyVillages
            );

        const ownVillages =
            readOwnVillages(
                worldMap
            );

        if (!ownVillages.length) {
            throw new Error(
                'No villages were found on the combined overview.'
            );
        }

        const plan =
            ownVillages.map(item => {
                const classification =
                    classifyVillage(
                        item.point,
                        enemyIndex,
                        strategy
                    );

                const newName =
                    buildVillageName(
                        item.currentName,
                        classification.line,
                        item.maxLength
                    );

                return {
                    ...item,
                    ...classification,
                    newName,
                    needsRename:
                        item.currentName !==
                        newName
                };
            });

        const counts = {
            Frontline: 0,
            Midline: 0,
            Backline: 0
        };

        for (const item of plan) {
            counts[item.line]++;
        }

        const changes =
            plan.filter(
                item => item.needsRename
            );

        /* =====================================================
           PREVIEW DIALOG
        ===================================================== */

        const preview =
            plan.slice(0, 30)
                .map(item => `
                    <tr>
                        <td>
                            ${escapeHtml(item.point.coord)}
                        </td>

                        <td>
                            ${escapeHtml(item.currentName)}
                        </td>

                        <td>
                            <strong>${escapeHtml(item.newName)}</strong>
                        </td>

                        <td>
                            ${escapeHtml(item.distance.toFixed(1))}
                        </td>

                        <td>
                            ${escapeHtml(item.nearestEnemy)}
                        </td>
                    </tr>
                `)
                .join('');

        const html = `
            <div style="min-width:760px">

                <h3 style="margin-top:0">
                    SAM Village Line Renamer
                </h3>

                <div class="info_box">
                    <div class="content">

                        <strong>Supabase schema:</strong>
                        ${escapeHtml(schemaName())}
                        <br>

                        <strong>Frontline:</strong>
                        ≤ ${escapeHtml(strategy.frontlineMax)}
                        fields
                        <br>

                        <strong>Midline:</strong>
                        ≤ ${escapeHtml(strategy.midlineMax)}
                        fields
                        <br>

                        <strong>Backline:</strong>
                        > ${escapeHtml(strategy.midlineMax)}
                        fields
                        <br><br>

                        <strong>Enemy villages:</strong>
                        ${enemyVillages.length}
                    </div>
                </div>

                <table class="vis"
                       style="width:100%;margin-top:10px">

                    <tr>
                        <th>Frontline</th>
                        <th>Midline</th>
                        <th>Backline</th>
                        <th>Total</th>
                        <th>Need rename</th>
                    </tr>

                    <tr>
                        <td>${counts.Frontline}</td>
                        <td>${counts.Midline}</td>
                        <td>${counts.Backline}</td>
                        <td>${plan.length}</td>
                        <td>${changes.length}</td>
                    </tr>
                </table>

                <br>

                <strong>Preview</strong>
                <small>
                    — first ${Math.min(30, plan.length)} villages
                </small>

                <div style="
                    max-height:330px;
                    overflow:auto;
                    margin-top:5px
                ">

                    <table class="vis"
                           style="width:100%">

                        <tr>
                            <th>Village</th>
                            <th>Current name</th>
                            <th>New name</th>
                            <th>Enemy distance</th>
                            <th>Nearest enemy</th>
                        </tr>

                        ${preview}

                    </table>
                </div>

                <div id="sam-line-progress"
                     style="
                        margin-top:12px;
                        font-weight:bold
                     ">
                    Ready.
                </div>

                <div style="margin-top:12px">

                    <button
                        id="sam-line-apply"
                        class="btn"
                        ${changes.length ? '' : 'disabled'}
                    >
                        Rename ${changes.length} Villages
                    </button>

                    <button
                        id="sam-line-close"
                        class="btn"
                    >
                        Close
                    </button>

                </div>
            </div>
        `;

        Dialog.show(
            'sam_line_renamer',
            html
        );

        $('#sam-line-close')
            .on('click', () =>
                Dialog.close()
            );

        $('#sam-line-apply')
            .on('click', async function () {

                const button = this;

                button.disabled = true;

                const progress =
                    document.getElementById(
                        'sam-line-progress'
                    );

                let success = 0;
                let failed = 0;

                for (
                    let i = 0;
                    i < changes.length;
                    i++
                ) {
                    const item =
                        changes[i];

                    progress.textContent =
                        `Renaming ${i + 1}/${changes.length}: ` +
                        `${item.point.coord} → ${item.line}`;

                    try {
                        await renameOne(item);
                        success++;
                    } catch (error) {
                        failed++;

                        console.error(
                            '[SAM Line Renamer]',
                            item.point.coord,
                            error
                        );
                    }

                    if (
                        i < changes.length - 1
                    ) {
                        await sleep(
                            randomDelay()
                        );
                    }
                }

                progress.innerHTML =
                    `Finished — ` +
                    `<strong>${success}</strong> renamed` +
                    (failed
                        ? `, <strong>${failed}</strong> failed`
                        : '');

                if (failed) {
                    UI.ErrorMessage(
                        `${success} renamed, ${failed} failed. Check console for failed villages.`
                    );
                } else {
                    UI.SuccessMessage(
                        `${success} villages renamed successfully.`
                    );
                }
            });

    } catch (error) {
        console.error(
            '[SAM Village Line Renamer]',
            error
        );

        UI.ErrorMessage(
            `Village Renamer: ${error.message}`
        );
    }
})();
