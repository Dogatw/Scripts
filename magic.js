// ============================================================================
// TRIBAL WARS AJAX COMMAND GUI
// ============================================================================
// 
// A comprehensive GUI for the TW AJAX Command API
// Features: Command builder, troop checker, batch manager, and more
// 
// USAGE:
// 1. Load this script directly - it will auto-load the API if needed
// 2. The GUI will add a button to the game interface
// 
// Hotkey: Ctrl+Shift+A (opens/closes GUI)
// ============================================================================

(function() {
    'use strict';
    
    // ============================================================================
    // CONFIGURATION
    // ============================================================================
    const CONFIG = {
        DEBUG: false,
        API_URL: 'https://cdn.jsdelivr.net/gh/D-maister/TribalWars-Scripts@main/tw-ajax-command-api-v0.0.5.js',
        API_LOAD_TIMEOUT: 10000, // 10 seconds
        
        // Default troops template
        DEFAULT_TROOPS: {
            spear: 0, sword: 0, axe: 0, archer: 0,
            spy: 0, light: 0, marcher: 0, heavy: 0,
            ram: 0, catapult: 0, knight: 0, snob: 0
        },
        
        // UI Theme
        THEME: {
            primary: '#4a6fa5',    // Blue
            success: '#67a761',    // Green
            warning: '#e6a23c',    // Orange
            danger: '#f56c6c',     // Red
            info: '#909399',       // Gray
            background: '#f5f5f5',
            border: '#dcdfe6',
            text: '#303133',
            lightText: '#606266'
        },
        
        // Hotkeys
        HOTKEYS: {
            toggle: 'Ctrl+Shift+A',
            quickAttack: 'Ctrl+Shift+Q',
            quickSupport: 'Ctrl+Shift+S'
        },
        
        // Settings
        AUTO_SAVE: true,
        SAVE_KEY: 'tw_ajax_gui_data',
        NOTIFICATIONS: true,
        SOUND_EFFECTS: false
    };
    
    // ============================================================================
    // LOGGER
    // ============================================================================
    const Logger = {
        log(...args) {
            if (CONFIG.DEBUG) {
                console.log('[TW-GUI]', ...args);
            }
        },
        
        info(...args) {
            console.log('ℹ️ [TW-GUI]', ...args);
        },
        
        warn(...args) {
            console.warn('⚠️ [TW-GUI]', ...args);
        },
        
        error(...args) {
            console.error('❌ [TW-GUI]', ...args);
        },
        
        success(...args) {
            console.log('✅ [TW-GUI]', ...args);
        }
    };
    
    // ============================================================================
    // API LOADER
    // ============================================================================
    const APILoader = {
        isLoaded: false,
        isLoading: false,
        loadPromise: null,
        
        async load() {
            if (this.isLoaded) {
                Logger.log('API already loaded');
                return true;
            }
            
            if (this.isLoading) {
                Logger.log('API loading in progress, waiting...');
                return this.loadPromise;
            }
            
            this.isLoading = true;
            this.loadPromise = new Promise(async (resolve, reject) => {
                try {
                    Logger.info('Loading TW AJAX Command API...');
                    
                    // Check if already loaded via other means
                    if (typeof TW_AJAX_COMMAND !== 'undefined') {
                        Logger.info('API already loaded globally');
                        this.isLoaded = true;
                        this.isLoading = false;
                        resolve(true);
                        return;
                    }
                    
                    // Create loading indicator
                    this.showLoadingIndicator();
                    
                    // Load the script
                    await this.loadScript(CONFIG.API_URL);
                    
                    // Wait for API to initialize
                    await this.waitForAPI();
                    
                    // Initialize the API
                    await TW_AJAX_COMMAND.init();
                    
                    this.isLoaded = true;
                    this.hideLoadingIndicator();
                    Logger.success('API loaded successfully');
                    
                    // Show success notification
                    this.showNotification('API loaded successfully!', 'success');
                    
                    resolve(true);
                    
                } catch (error) {
                    this.hideLoadingIndicator();
                    this.isLoading = false;
                    Logger.error('Failed to load API:', error);
                    
                    // Show error notification
                    this.showNotification(
                        `Failed to load API: ${error.message}`,
                        'error',
                        5000
                    );
                    
                    reject(error);
                }
            });
            
            return this.loadPromise;
        },
        
        loadScript(url) {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = url;
                script.type = 'text/javascript';
                script.async = true;
                
                script.onload = () => {
                    Logger.log('Script loaded');
                    resolve();
                };
                
                script.onerror = (error) => {
                    reject(new Error(`Failed to load script: ${url}`));
                };
                
                // Add timeout
                setTimeout(() => {
                    if (!this.isLoaded) {
                        reject(new Error('API load timeout'));
                    }
                }, CONFIG.API_LOAD_TIMEOUT);
                
                document.head.appendChild(script);
            });
        },
        
        waitForAPI() {
            return new Promise((resolve, reject) => {
                const checkInterval = 100;
                const maxAttempts = 50; // 5 seconds total
                let attempts = 0;
                
                const check = () => {
                    attempts++;
                    
                    if (typeof TW_AJAX_COMMAND !== 'undefined') {
                        Logger.log('API detected');
                        resolve();
                        return;
                    }
                    
                    if (attempts >= maxAttempts) {
                        reject(new Error('API not available after waiting'));
                        return;
                    }
                    
                    setTimeout(check, checkInterval);
                };
                
                check();
            });
        },
        
        showLoadingIndicator() {
            const loader = document.createElement('div');
            loader.id = 'tw-api-loader';
            loader.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(255, 255, 255, 0.95);
                padding: 20px 30px;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                z-index: 99999;
                text-align: center;
                border: 2px solid ${CONFIG.THEME.primary};
                min-width: 250px;
            `;
            
            loader.innerHTML = `
                <div style="margin-bottom: 15px;">
                    <div style="
                        width: 40px;
                        height: 40px;
                        margin: 0 auto 15px;
                        border: 3px solid ${CONFIG.THEME.background};
                        border-top: 3px solid ${CONFIG.THEME.primary};
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                    "></div>
                    <div style="font-weight: bold; color: ${CONFIG.THEME.primary}; margin-bottom: 5px;">
                        Loading API...
                    </div>
                    <div style="color: ${CONFIG.THEME.lightText}; font-size: 12px;">
                        Please wait
                    </div>
                </div>
            `;
            
            // Add CSS for animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
            
            document.body.appendChild(loader);
        },
        
        hideLoadingIndicator() {
            const loader = document.getElementById('tw-api-loader');
            if (loader) {
                loader.remove();
            }
        },
        
        showNotification(message, type = 'info', duration = 3000) {
            if (!CONFIG.NOTIFICATIONS) return;
            
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${CONFIG.THEME[type] || CONFIG.THEME.info};
                color: white;
                padding: 12px 20px;
                border-radius: 6px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 10000;
                min-width: 250px;
                max-width: 400px;
                transform: translateX(120%);
                transition: transform 0.3s ease;
                font-size: 14px;
            `;
            
            notification.innerHTML = `
                <div style="display: flex; align-items: center;">
                    <div style="flex: 1;">${message}</div>
                    <button style="
                        background: none;
                        border: none;
                        color: white;
                        cursor: pointer;
                        font-size: 18px;
                        margin-left: 10px;
                        opacity: 0.8;
                    " onclick="this.parentElement.parentElement.remove()">×</button>
                </div>
            `;
            
            document.body.appendChild(notification);
            
            // Animate in
            setTimeout(() => {
                notification.style.transform = 'translateX(0)';
            }, 10);
            
            // Auto-remove
            if (duration > 0) {
                setTimeout(() => {
                    notification.style.transform = 'translateX(120%)';
                    setTimeout(() => notification.remove(), 300);
                }, duration);
            }
        }
    };
    
    // ============================================================================
    // STATE MANAGEMENT
    // ============================================================================
    const State = {
        // Command management
        queue: [],
        scheduled: [],
        history: [],
        
        // UI state
        activeTab: 'builder',
        isMinimized: false,
        isVisible: false,
        lastPosition: { x: 20, y: 20 },
        
        // Data
        troopsInfo: null,
        villages: [],
        currentVillage: null,
        
        // Settings
        settings: {
            parallel: true,
            concurrency: 5,
            delayBetween: 100,
            checkTroops: true,
            stopOnShortage: false,
            autoSelectVillage: false,
            showNotifications: true,
            soundEnabled: false,
            theme: 'default',
            autoLoadTroops: true
        },
        
        // Initialize
        init() {
            this.loadFromStorage();
            this.queue = this.queue || [];
            this.scheduled = this.scheduled || [];
            this.history = this.history || [];
            this.settings = { ...this.settings };
            
            // Get current village from game
            if (window.game_data && window.game_data.village) {
                this.currentVillage = {
                    id: window.game_data.village.id,
                    name: window.game_data.village.name,
                    x: window.game_data.village.x,
                    y: window.game_data.village.y
                };
            }
            
            Logger.log('State initialized');
        },
        
        // Save to localStorage
        saveToStorage() {
            if (!CONFIG.AUTO_SAVE) return;
            try {
                const data = {
                    queue: this.queue,
                    scheduled: this.scheduled.slice(-50),
                    history: this.history.slice(-100),
                    settings: this.settings,
                    lastPosition: this.lastPosition
                };
                localStorage.setItem(CONFIG.SAVE_KEY, JSON.stringify(data));
                Logger.log('State saved to storage');
            } catch (e) {
                Logger.warn('Failed to save state:', e);
            }
        },
        
        // Load from localStorage
        loadFromStorage() {
            try {
                const data = JSON.parse(localStorage.getItem(CONFIG.SAVE_KEY) || '{}');
                Object.assign(this, data);
                Logger.log('State loaded from storage');
            } catch (e) {
                Logger.warn('Failed to load state:', e);
            }
        },
        
        // Add command to queue
        addToQueue(command) {
            const cmd = {
                ...command,
                id: `cmd_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                created: new Date().toISOString(),
                status: 'pending'
            };
            
            this.queue.push(cmd);
            this.saveToStorage();
            Logger.log('Command added to queue:', cmd);
            
            // Show notification
            if (this.settings.showNotifications) {
                APILoader.showNotification(
                    `Added ${cmd.type} to ${cmd.x}|${cmd.y} to queue`,
                    'info'
                );
            }
            
            return cmd;
        },
        
        // Remove command from queue
        removeFromQueue(commandId) {
            const index = this.queue.findIndex(cmd => cmd.id === commandId);
            if (index !== -1) {
                this.queue.splice(index, 1);
                this.saveToStorage();
                return true;
            }
            return false;
        },
        
        // Clear queue
        clearQueue() {
            this.queue = [];
            this.saveToStorage();
        },
        
        // Add to history
        addToHistory(result) {
            const historyItem = {
                ...result,
                id: `hist_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                timestamp: new Date().toISOString()
            };
            
            this.history.unshift(historyItem);
            this.saveToStorage();
        },
        
        // Update troops info
        async updateTroopsInfo(forceRefresh = false) {
            try {
                if (!TW_AJAX_COMMAND) {
                    throw new Error('API not loaded');
                }
                
                this.troopsInfo = await TW_AJAX_COMMAND.getTroopsInfo(forceRefresh);
                this.villages = this.troopsInfo?.villages || [];
                
                Logger.log('Troops info updated');
                return this.troopsInfo;
                
            } catch (error) {
                Logger.error('Failed to update troops info:', error);
                throw error;
            }
        }
    };
    
    // ============================================================================
    // TROOPS BUILDER COMPONENT
    // ============================================================================
    const TroopsBuilder = {
        render() {
            const troops = { ...CONFIG.DEFAULT_TROOPS };
            
            return `
                <div class="troops-builder">
                    <div class="section-header">
                        <h3>Troops Selection</h3>
                        <div class="section-actions">
                            <button class="btn-small" onclick="GUI.components.TroopsBuilder.clearAll()">Clear All</button>
                            <button class="btn-small" onclick="GUI.components.TroopsBuilder.fillTemplate('attack')">Attack Template</button>
                            <button class="btn-small" onclick="GUI.components.TroopsBuilder.fillTemplate('support')">Support Template</button>
                        </div>
                    </div>
                    
                    <div class="troops-grid">
                        ${this.renderTroopRows(troops)}
                    </div>
                    
                    <div class="troops-summary">
                        <div>Total troops: <span id="totalTroopsCount">0</span></div>
                        <div>Fastest unit: <span id="fastestUnit">-</span></div>
                    </div>
                </div>
            `;
        },
        
        renderTroopRows(troops) {
            const troopTypes = [
                { key: 'spear', name: 'Spear Fighter', icon: '⚔️', speed: 18 },
                { key: 'sword', name: 'Swordsman', icon: '🗡️', speed: 22 },
                { key: 'axe', name: 'Axeman', icon: '🪓', speed: 18 },
                { key: 'archer', name: 'Archer', icon: '🏹', speed: 18 },
                { key: 'spy', name: 'Spy', icon: '👁️', speed: 9 },
                { key: 'light', name: 'Light Cavalry', icon: '🐎', speed: 10 },
                { key: 'marcher', name: 'Mounted Archer', icon: '🏹🐎', speed: 10 },
                { key: 'heavy', name: 'Heavy Cavalry', icon: '⚔️🐎', speed: 11 },
                { key: 'ram', name: 'Ram', icon: '🐏', speed: 30 },
                { key: 'catapult', name: 'Catapult', icon: '🗿', speed: 30 },
                { key: 'knight', name: 'Knight', icon: '♞', speed: 10 },
                { key: 'snob', name: 'Snob/Noble', icon: '👑', speed: 35 }
            ];
            
            return troopTypes.map(troop => `
                <div class="troop-row" data-unit="${troop.key}">
                    <div class="troop-info">
                        <span class="troop-icon">${troop.icon}</span>
                        <span class="troop-name">${troop.name}</span>
                        <span class="troop-speed">${troop.speed} min</span>
                    </div>
                    <div class="troop-controls">
                        <button class="btn-icon" onclick="GUI.components.TroopsBuilder.decrement('${troop.key}')">-</button>
                        <input type="number" 
                               id="troop_${troop.key}" 
                               class="troop-input" 
                               value="${troops[troop.key] || 0}" 
                               min="0" 
                               onchange="GUI.components.TroopsBuilder.updateTotal()"
                               oninput="GUI.components.TroopsBuilder.updateTotal()">
                        <button class="btn-icon" onclick="GUI.components.TroopsBuilder.increment('${troop.key}')">+</button>
                        <button class="btn-icon" onclick="GUI.components.TroopsBuilder.setMax('${troop.key}')" title="Set max available">Max</button>
                    </div>
                </div>
            `).join('');
        },
        
        // Methods to be called from onclick handlers
        increment(unit) {
            const input = document.getElementById(`troop_${unit}`);
            input.value = parseInt(input.value || 0) + 1;
            this.updateTotal();
        },
        
        decrement(unit) {
            const input = document.getElementById(`troop_${unit}`);
            const current = parseInt(input.value || 0);
            if (current > 0) {
                input.value = current - 1;
                this.updateTotal();
            }
        },
        
        setMax(unit) {
            // This would need to fetch available troops
            APILoader.showNotification('Max feature requires troops data', 'info');
        },
        
        clearAll() {
            document.querySelectorAll('.troop-input').forEach(input => {
                input.value = 0;
            });
            this.updateTotal();
        },
        
        fillTemplate(type) {
            const templates = {
                attack: { spear: 100, sword: 50, axe: 30, light: 20 },
                support: { spear: 50, sword: 25, archer: 20 },
                scout: { spy: 5 },
                noble: { snob: 1, spear: 100, sword: 50 }
            };
            
            const template = templates[type] || {};
            Object.keys(CONFIG.DEFAULT_TROOPS).forEach(unit => {
                const input = document.getElementById(`troop_${unit}`);
                input.value = template[unit] || 0;
            });
            this.updateTotal();
        },
        
        updateTotal() {
            let total = 0;
            let fastestUnit = null;
            let fastestSpeed = Infinity;
            
            document.querySelectorAll('.troop-input').forEach(input => {
                const count = parseInt(input.value || 0);
                total += count;
                
                if (count > 0) {
                    const unit = input.id.replace('troop_', '');
                    const row = input.closest('.troop-row');
                    const speed = parseInt(row.querySelector('.troop-speed').textContent) || 99;
                    
                    if (speed < fastestSpeed) {
                        fastestSpeed = speed;
                        fastestUnit = unit;
                    }
                }
            });
            
            const totalEl = document.getElementById('totalTroopsCount');
            const fastestEl = document.getElementById('fastestUnit');
            
            if (totalEl) totalEl.textContent = total;
            if (fastestEl && fastestUnit) {
                fastestEl.textContent = fastestUnit;
            }
        },
        
        getTroops() {
            const troops = {};
            document.querySelectorAll('.troop-input').forEach(input => {
                const unit = input.id.replace('troop_', '');
                troops[unit] = parseInt(input.value || 0);
            });
            return troops;
        }
    };
    
    // ============================================================================
    // COMMAND BUILDER COMPONENT
    // ============================================================================
    const CommandBuilder = {
        render() {
            return `
                <div class="command-builder">
                    <div class="section-header">
                        <h3>Command Builder</h3>
                    </div>
                    
                    <div class="form-group">
                        <label>Command Type:</label>
                        <div class="btn-group">
                            <button class="btn ${State.settings.commandType === 'attack' ? 'btn-primary' : 'btn-default'}" 
                                    onclick="GUI.components.CommandBuilder.setType('attack')">⚔️ Attack</button>
                            <button class="btn ${State.settings.commandType === 'support' ? 'btn-primary' : 'btn-default'}" 
                                    onclick="GUI.components.CommandBuilder.setType('support')">🛡️ Support</button>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>Target Coordinates:</label>
                        <div class="input-group">
                            <input type="text" 
                                   id="targetX" 
                                   class="coord-input" 
                                   placeholder="X" 
                                   value="${State.currentVillage?.x || ''}">
                            <span class="coord-separator">|</span>
                            <input type="text" 
                                   id="targetY" 
                                   class="coord-input" 
                                   placeholder="Y" 
                                   value="${State.currentVillage?.y || ''}">
                            <button class="btn-small" onclick="GUI.components.CommandBuilder.useCurrentVillage()" title="Use current village">📍</button>
                            <button class="btn-small" onclick="GUI.components.CommandBuilder.getFromMap()" title="Get from map">🗺️</button>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>Send Time:</label>
                        <div class="input-group">
                            <select id="timeType" class="form-control" onchange="GUI.components.CommandBuilder.updateTimeFields()">
                                <option value="now">Send Now</option>
                                <option value="delay">Delay</option>
                                <option value="specific">Specific Time</option>
                            </select>
                            <div id="timeFields" style="margin-top: 10px;">
                                <!-- Dynamically updated based on selection -->
                            </div>
                        </div>
                    </div>
                    
                    <div id="troopsBuilderContainer">
                        ${TroopsBuilder.render()}
                    </div>
                    
                    <div class="form-actions">
                        <button class="btn btn-success" onclick="GUI.components.CommandBuilder.addToQueue()">
                            💾 Add to Queue
                        </button>
                        <button class="btn btn-primary" onclick="GUI.components.CommandBuilder.sendNow()">
                            🚀 Send Now
                        </button>
                        <button class="btn btn-warning" onclick="GUI.components.CommandBuilder.checkTroops()">
                            📊 Check Troops
                        </button>
                    </div>
                </div>
            `;
        },
        
        setType(type) {
            State.settings.commandType = type;
            this.updateUI();
        },
        
        useCurrentVillage() {
            if (State.currentVillage) {
                document.getElementById('targetX').value = State.currentVillage.x;
                document.getElementById('targetY').value = State.currentVillage.y;
            }
        },
        
        getFromMap() {
            APILoader.showNotification('Click on the map to select coordinates', 'info');
            // This would need integration with TW map
        },
        
        updateTimeFields() {
            const type = document.getElementById('timeType').value;
            let html = '';
            
            switch (type) {
                case 'delay':
                    html = `
                        <div class="input-group">
                            <input type="number" id="delayValue" class="form-control" value="100" min="0" style="width: 80px;">
                            <select id="delayUnit" class="form-control">
                                <option value="ms">Milliseconds</option>
                                <option value="s">Seconds</option>
                                <option value="m">Minutes</option>
                                <option value="h">Hours</option>
                            </select>
                        </div>
                    `;
                    break;
                    
                case 'specific':
                    const now = new Date();
                    const dateStr = now.toISOString().split('T')[0];
                    const timeStr = now.toTimeString().split(' ')[0].substr(0, 5);
                    
                    html = `
                        <div class="input-group">
                            <input type="date" id="specificDate" class="form-control" value="${dateStr}">
                            <input type="time" id="specificTime" class="form-control" value="${timeStr}" step="1">
                        </div>
                    `;
                    break;
            }
            
            document.getElementById('timeFields').innerHTML = html;
        },
        
        addToQueue() {
            const command = this.buildCommand();
            if (!command) return;
            
            State.addToQueue(command);
            GUI.updateQueueTab();
            APILoader.showNotification('Command added to queue', 'success');
        },
        
        async sendNow() {
            const command = this.buildCommand();
            if (!command) return;
            
            try {
                APILoader.showNotification('Sending command...', 'info');
                
                const result = await TW_AJAX_COMMAND.multiple([command], {
                    parallel: false,
                    checkTroops: State.settings.checkTroops
                });
                
                State.addToHistory(result);
                
                if (result.successful > 0) {
                    APILoader.showNotification('Command sent successfully!', 'success');
                } else {
                    APILoader.showNotification('Failed to send command', 'error');
                }
                
            } catch (error) {
                APILoader.showNotification(`Error: ${error.message}`, 'error');
                Logger.error('Failed to send command:', error);
            }
        },
        
        async checkTroops() {
            const command = this.buildCommand();
            if (!command) return;
            
            try {
                APILoader.showNotification('Checking troops...', 'info');
                
                const availability = await TW_AJAX_COMMAND.checkTroopsAvailability([command]);
                
                if (availability.hasEnough) {
                    APILoader.showNotification('Enough troops available!', 'success');
                } else {
                    let message = 'Insufficient troops: ';
                    availability.shortages.forEach(shortage => {
                        message += `${shortage.unit}: need ${shortage.needed}, have ${shortage.available}. `;
                    });
                    APILoader.showNotification(message, 'warning');
                }
                
            } catch (error) {
                APILoader.showNotification(`Check failed: ${error.message}`, 'error');
            }
        },
        
        buildCommand() {
            const type = State.settings.commandType || 'attack';
            const x = document.getElementById('targetX').value.trim();
            const y = document.getElementById('targetY').value.trim();
            const troops = TroopsBuilder.getTroops();
            
            // Validation
            if (!x || !y || isNaN(x) || isNaN(y)) {
                APILoader.showNotification('Please enter valid coordinates', 'error');
                return null;
            }
            
            // Check if any troops selected
            const totalTroops = Object.values(troops).reduce((a, b) => a + b, 0);
            if (totalTroops === 0) {
                APILoader.showNotification('Please select at least one troop type', 'error');
                return null;
            }
            
            const command = {
                type: type,
                x: parseInt(x),
                y: parseInt(y),
                troops: troops
            };
            
            // Add time if specified
            const timeType = document.getElementById('timeType').value;
            if (timeType !== 'now') {
                command.time = this.getTimeValue(timeType);
            }
            
            return command;
        },
        
        getTimeValue(timeType) {
            switch (timeType) {
                case 'delay':
                    const value = document.getElementById('delayValue').value;
                    const unit = document.getElementById('delayUnit').value;
                    return `+${value}${unit}`;
                    
                case 'specific':
                    const date = document.getElementById('specificDate').value;
                    const time = document.getElementById('specificTime').value;
                    return `${date} ${time}:00`;
                    
                default:
                    return null;
            }
        },
        
        updateUI() {
            // Update UI elements based on state
            const builderContainer = document.getElementById('commandBuilderTab');
            if (builderContainer) {
                builderContainer.innerHTML = this.render();
            }
        }
    };
    
    // ============================================================================
    // QUEUE MANAGER COMPONENT
    // ============================================================================
    const QueueManager = {
        render() {
            return `
                <div class="queue-manager">
                    <div class="section-header">
                        <h3>Command Queue (${State.queue.length})</h3>
                        <div class="section-actions">
                            <button class="btn-small ${State.settings.parallel ? 'btn-primary' : 'btn-default'}" 
                                    onclick="GUI.components.QueueManager.toggleParallel()">
                                ${State.settings.parallel ? '⚡ Parallel' : '→ Sequential'}
                            </button>
                            <button class="btn-small btn-success" onclick="GUI.components.QueueManager.executeAll()">
                                🚀 Execute All
                            </button>
                            <button class="btn-small btn-danger" onclick="GUI.components.QueueManager.clearQueue()">
                                🗑️ Clear
                            </button>
                        </div>
                    </div>
                    
                    ${this.renderQueueList()}
                    
                    <div class="queue-stats">
                        <div>Total commands: ${State.queue.length}</div>
                        <div>Total troops: ${this.calculateTotalTroops()}</div>
                        <div>Mode: ${State.settings.parallel ? 'Parallel' : 'Sequential'}</div>
                    </div>
                    
                    <div class="queue-actions">
                        <button class="btn btn-primary" onclick="GUI.components.QueueManager.executeAll()" ${State.queue.length === 0 ? 'disabled' : ''}>
                            🚀 Execute All Commands (${State.queue.length})
                        </button>
                        <button class="btn btn-warning" onclick="GUI.components.QueueManager.checkAllTroops()" ${State.queue.length === 0 ? 'disabled' : ''}>
                            📊 Check Troops for All
                        </button>
                    </div>
                </div>
            `;
        },
        
        renderQueueList() {
            if (State.queue.length === 0) {
                return `
                    <div class="empty-state">
                        <div style="font-size: 48px; margin-bottom: 10px;">📭</div>
                        <div style="color: ${CONFIG.THEME.lightText}; margin-bottom: 20px;">
                            No commands in queue
                        </div>
                        <div style="font-size: 12px; color: ${CONFIG.THEME.info};">
                            Add commands from the Builder tab
                        </div>
                    </div>
                `;
            }
            
            return `
                <div class="queue-list">
                    ${State.queue.map((cmd, index) => `
                        <div class="queue-item" data-id="${cmd.id}">
                            <div class="queue-item-header">
                                <div class="queue-item-type ${cmd.type}">
                                    ${cmd.type === 'attack' ? '⚔️' : '🛡️'} ${cmd.type.toUpperCase()}
                                </div>
                                <div class="queue-item-target">
                                    ${cmd.x}|${cmd.y}
                                </div>
                                <div class="queue-item-actions">
                                    <button class="btn-icon" onclick="GUI.components.QueueManager.executeSingle('${cmd.id}')" title="Execute">▶️</button>
                                    <button class="btn-icon" onclick="GUI.components.QueueManager.editCommand('${cmd.id}')" title="Edit">✏️</button>
                                    <button class="btn-icon" onclick="GUI.components.QueueManager.removeCommand('${cmd.id}')" title="Remove">❌</button>
                                </div>
                            </div>
                            
                            <div class="queue-item-details">
                                <div class="troops-preview">
                                    ${this.renderTroopsPreview(cmd.troops)}
                                </div>
                                
                                ${cmd.time ? `
                                    <div class="queue-item-time">
                                        <small>Time: ${cmd.time}</small>
                                    </div>
                                ` : ''}
                            </div>
                            
                            <div class="queue-item-footer">
                                <small>Added: ${new Date(cmd.created).toLocaleTimeString()}</small>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        },
        
        renderTroopsPreview(troops) {
            const activeTroops = Object.entries(troops)
                .filter(([unit, count]) => count > 0)
                .map(([unit, count]) => `<span class="troop-badge">${unit}: ${count}</span>`)
                .join('');
            
            return activeTroops || '<span style="color: #999;">No troops selected</span>';
        },
        
        calculateTotalTroops() {
            return State.queue.reduce((total, cmd) => {
                return total + Object.values(cmd.troops || {}).reduce((a, b) => a + b, 0);
            }, 0);
        },
        
        async executeAll() {
            if (State.queue.length === 0) {
                APILoader.showNotification('Queue is empty', 'warning');
                return;
            }
            
            const confirmed = confirm(`Execute ${State.queue.length} commands?`);
            if (!confirmed) return;
            
            try {
                APILoader.showNotification(`Executing ${State.queue.length} commands...`, 'info');
                
                const commands = State.queue.map(cmd => ({
                    type: cmd.type,
                    x: cmd.x,
                    y: cmd.y,
                    troops: cmd.troops,
                    time: cmd.time
                }));
                
                const result = await TW_AJAX_COMMAND.executeWithCheck(commands, {
                    parallel: State.settings.parallel,
                    concurrency: State.settings.concurrency,
                    checkAvailability: State.settings.checkTroops,
                    stopOnShortage: State.settings.stopOnShortage,
                    autoSelectVillage: State.settings.autoSelectVillage
                });
                
                // Add to history
                State.addToHistory(result);
                
                // Clear queue if all successful
                if (result.summary.successful === State.queue.length) {
                    State.clearQueue();
                    GUI.updateQueueTab();
                }
                
                // Show result
                let message = `Executed: ${result.summary.successful} successful, `;
                message += `${result.summary.failed} failed`;
                
                if (result.summary.successful > 0) {
                    APILoader.showNotification(message, 'success');
                } else {
                    APILoader.showNotification(message, 'error');
                }
                
                // Update history tab
                GUI.updateHistoryTab();
                
            } catch (error) {
                APILoader.showNotification(`Execution failed: ${error.message}`, 'error');
                Logger.error('Queue execution failed:', error);
            }
        },
        
        async executeSingle(commandId) {
            const command = State.queue.find(cmd => cmd.id === commandId);
            if (!command) return;
            
            try {
                APILoader.showNotification(`Executing command to ${command.x}|${command.y}...`, 'info');
                
                const result = await TW_AJAX_COMMAND.multiple([{
                    type: command.type,
                    x: command.x,
                    y: command.y,
                    troops: command.troops,
                    time: command.time
                }], {
                    parallel: false,
                    checkTroops: State.settings.checkTroops
                });
                
                // Remove from queue if successful
                if (result.successful > 0) {
                    State.removeFromQueue(commandId);
                    GUI.updateQueueTab();
                    APILoader.showNotification('Command executed successfully', 'success');
                } else {
                    APILoader.showNotification('Command failed', 'error');
                }
                
                // Add to history
                State.addToHistory(result);
                GUI.updateHistoryTab();
                
            } catch (error) {
                APILoader.showNotification(`Error: ${error.message}`, 'error');
            }
        },
        
        removeCommand(commandId) {
            if (State.removeFromQueue(commandId)) {
                GUI.updateQueueTab();
                APILoader.showNotification('Command removed from queue', 'info');
            }
        },
        
        async checkAllTroops() {
            if (State.queue.length === 0) return;
            
            try {
                APILoader.showNotification('Checking troops for all commands...', 'info');
                
                const commands = State.queue.map(cmd => ({
                    type: cmd.type,
                    x: cmd.x,
                    y: cmd.y,
                    troops: cmd.troops
                }));
                
                const availability = await TW_AJAX_COMMAND.checkTroopsAvailability(commands);
                
                if (availability.hasEnough) {
                    APILoader.showNotification('Enough troops for all commands!', 'success');
                } else {
                    let message = `Insufficient troops for ${availability.shortages.length} unit types`;
                    APILoader.showNotification(message, 'warning');
                    
                    // Show detailed shortages in console
                    console.group('Troop Shortages');
                    availability.shortages.forEach(shortage => {
                        console.log(`${shortage.unit}: Need ${shortage.needed}, Have ${shortage.available}, Short ${shortage.shortage}`);
                    });
                    console.groupEnd();
                }
                
            } catch (error) {
                APILoader.showNotification(`Check failed: ${error.message}`, 'error');
            }
        },
        
        toggleParallel() {
            State.settings.parallel = !State.settings.parallel;
            State.saveToStorage();
            this.updateUI();
            APILoader.showNotification(`Mode: ${State.settings.parallel ? 'Parallel' : 'Sequential'}`, 'info');
        },
        
        clearQueue() {
            if (State.queue.length === 0) return;
            
            const confirmed = confirm(`Clear ${State.queue.length} commands from queue?`);
            if (confirmed) {
                State.clearQueue();
                GUI.updateQueueTab();
                APILoader.showNotification('Queue cleared', 'info');
            }
        },
        
        updateUI() {
            const queueContainer = document.getElementById('queueTab');
            if (queueContainer) {
                queueContainer.innerHTML = this.render();
            }
        }
    };
    
    // ============================================================================
    // TROOPS MANAGER COMPONENT
    // ============================================================================
    const TroopsManager = {
        render() {
            return `
                <div class="troops-manager">
                    <div class="section-header">
                        <h3>Troops Manager</h3>
                        <div class="section-actions">
                            <button class="btn-small btn-primary" onclick="GUI.components.TroopsManager.refreshData()">
                                🔄 Refresh
                            </button>
                            <button class="btn-small" onclick="GUI.components.TroopsManager.exportData()">
                                📤 Export
                            </button>
                        </div>
                    </div>
                    
                    ${this.renderTroopsInfo()}
                    
                    <div class="troops-actions">
                        <button class="btn btn-primary" onclick="GUI.components.TroopsManager.analyzeQueue()">
                            📊 Analyze Queue Requirements
                        </button>
                        <button class="btn btn-warning" onclick="GUI.components.TroopsManager.findShortages()">
                            ⚠️ Find Shortages
                        </button>
                    </div>
                </div>
            `;
        },
        
        renderTroopsInfo() {
            if (!State.troopsInfo) {
                return `
                    <div class="empty-state">
                        <div style="font-size: 48px; margin-bottom: 10px;">📊</div>
                        <div style="color: ${CONFIG.THEME.lightText}; margin-bottom: 20px;">
                            No troops data loaded
                        </div>
                        <button class="btn btn-primary" onclick="GUI.components.TroopsManager.loadData()">
                            Load Troops Data
                        </button>
                    </div>
                `;
            }
            
            const totals = State.troopsInfo.totals || {};
            const villages = State.villages || [];
            
            return `
                <div class="troops-overview">
                    <div class="overview-stats">
                        <div class="stat-card">
                            <div class="stat-value">${villages.length}</div>
                            <div class="stat-label">Villages</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${Object.values(totals).reduce((a, b) => a + b, 0)}</div>
                            <div class="stat-label">Total Troops</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">${State.troopsInfo.lastUpdated ? new Date(State.troopsInfo.lastUpdated).toLocaleTimeString() : 'N/A'}</div>
                            <div class="stat-label">Last Updated</div>
                        </div>
                    </div>
                    
                    <div class="troops-totals">
                        <h4>Total Troops by Type</h4>
                        <div class="totals-grid">
                            ${Object.entries(totals)
                                .filter(([unit, count]) => count > 0)
                                .map(([unit, count]) => `
                                    <div class="total-item">
                                        <div class="total-unit">${unit}</div>
                                        <div class="total-count">${count}</div>
                                    </div>
                                `).join('')}
                        </div>
                    </div>
                    
                    <div class="village-list">
                        <h4>Villages</h4>
                        <div class="village-scroll">
                            ${villages.map(village => `
                                <div class="village-item">
                                    <div class="village-name">${village.name}</div>
                                    <div class="village-coords">${village.x}|${village.y}</div>
                                    <div class="village-troops">
                                        ${Object.entries(village.troops || {})
                                            .filter(([unit, count]) => count > 0)
                                            .slice(0, 3)
                                            .map(([unit, count]) => `<span class="troop-badge">${unit}: ${count}</span>`)
                                            .join('')}
                                        ${Object.keys(village.troops || {}).filter(k => village.troops[k] > 0).length > 3 ? 
                                            '<span class="troop-more">...</span>' : ''}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        },
        
        async loadData() {
            try {
                APILoader.showNotification('Loading troops data...', 'info');
                await State.updateTroopsInfo(true);
                this.updateUI();
                APILoader.showNotification('Troops data loaded', 'success');
            } catch (error) {
                APILoader.showNotification(`Failed to load troops: ${error.message}`, 'error');
            }
        },
        
        async refreshData() {
            await this.loadData();
        },
        
        async analyzeQueue() {
            if (State.queue.length === 0) {
                APILoader.showNotification('Queue is empty', 'warning');
                return;
            }
            
            if (!State.troopsInfo) {
                await this.loadData();
            }
            
            const commands = State.queue.map(cmd => ({
                type: cmd.type,
                x: cmd.x,
                y: cmd.y,
                troops: cmd.troops
            }));
            
            try {
                const availability = await TW_AJAX_COMMAND.checkTroopsAvailability(commands);
                
                let message = `Queue Analysis: `;
                message += availability.hasEnough ? 
                    '✅ Sufficient troops for all commands' : 
                    '⚠️ Insufficient troops';
                
                APILoader.showNotification(message, availability.hasEnough ? 'success' : 'warning');
                
                if (!availability.hasEnough) {
                    // Show detailed analysis
                    const analysis = this.createAnalysisReport(availability);
                    console.group('Queue Troops Analysis');
                    console.log(analysis);
                    console.groupEnd();
                }
                
            } catch (error) {
                APILoader.showNotification(`Analysis failed: ${error.message}`, 'error');
            }
        },
        
        createAnalysisReport(availability) {
            let report = '=== QUEUE TROOPS ANALYSIS ===\n\n';
            
            report += 'COMMAND QUEUE:\n';
            State.queue.forEach((cmd, index) => {
                report += `${index + 1}. ${cmd.type.toUpperCase()} to ${cmd.x}|${cmd.y}\n`;
                Object.entries(cmd.troops).forEach(([unit, count]) => {
                    if (count > 0) report += `   ${unit}: ${count}\n`;
                });
            });
            
            report += '\nAVAILABLE TROOPS:\n';
            Object.entries(State.troopsInfo.totals).forEach(([unit, count]) => {
                if (count > 0) report += `${unit}: ${count}\n`;
            });
            
            if (availability.shortages && availability.shortages.length > 0) {
                report += '\nSHORTAGES:\n';
                availability.shortages.forEach(shortage => {
                    report += `${shortage.unit}: Need ${shortage.needed}, Have ${shortage.available}, Short ${shortage.shortage}\n`;
                });
            }
            
            return report;
        },
        
        exportData() {
            if (!State.troopsInfo) {
                APILoader.showNotification('No data to export', 'warning');
                return;
            }
            
            const data = {
                villages: State.villages,
                totals: State.troopsInfo.totals,
                timestamp: new Date().toISOString()
            };
            
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `troops_data_${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            APILoader.showNotification('Troops data exported', 'success');
        },
        
        async findShortages() {
            if (State.queue.length === 0) {
                APILoader.showNotification('Queue is empty', 'warning');
                return;
            }
            
            await this.analyzeQueue();
        },
        
        updateUI() {
            const troopsContainer = document.getElementById('troopsTab');
            if (troopsContainer) {
                troopsContainer.innerHTML = this.render();
            }
        }
    };
    
    // ============================================================================
    // SETTINGS COMPONENT
    // ============================================================================
    const SettingsManager = {
        render() {
            return `
                <div class="settings-manager">
                    <div class="section-header">
                        <h3>Settings</h3>
                        <div class="section-actions">
                            <button class="btn-small btn-primary" onclick="GUI.components.SettingsManager.saveSettings()">
                                💾 Save
                            </button>
                            <button class="btn-small" onclick="GUI.components.SettingsManager.resetSettings()">
                                🔄 Reset
                            </button>
                        </div>
                    </div>
                    
                    <div class="settings-sections">
                        <div class="settings-section">
                            <h4>⚡ Execution Settings</h4>
                            ${this.renderExecutionSettings()}
                        </div>
                        
                        <div class="settings-section">
                            <h4>📊 Troops Checking</h4>
                            ${this.renderTroopsSettings()}
                        </div>
                        
                        <div class="settings-section">
                            <h4>🔔 Notifications</h4>
                            ${this.renderNotificationSettings()}
                        </div>
                        
                        <div class="settings-section">
                            <h4>🎨 UI Settings</h4>
                            ${this.renderUISettings()}
                        </div>
                    </div>
                    
                    <div class="settings-info">
                        <h4>ℹ️ Information</h4>
                        <div class="info-grid">
                            <div>API Status: <span id="apiStatus">${APILoader.isLoaded ? '✅ Loaded' : '❌ Not Loaded'}</span></div>
                            <div>GUI Version: <span>1.0.0</span></div>
                            <div>API Version: <span>${TW_AJAX_COMMAND?.version || 'N/A'}</span></div>
                            <div>Commands in Queue: <span>${State.queue.length}</span></div>
                            <div>Commands in History: <span>${State.history.length}</span></div>
                        </div>
                    </div>
                    
                    <div class="settings-actions">
                        <button class="btn btn-danger" onclick="GUI.components.SettingsManager.clearAllData()">
                            🗑️ Clear All Data
                        </button>
                        <button class="btn btn-warning" onclick="GUI.components.SettingsManager.testAPI()">
                            🔧 Test API
                        </button>
                        <button class="btn btn-info" onclick="GUI.components.SettingsManager.showHelp()">
                            ❓ Help
                        </button>
                    </div>
                </div>
            `;
        },
        
        renderExecutionSettings() {
            return `
                <div class="form-group">
                    <label>
                        <input type="checkbox" ${State.settings.parallel ? 'checked' : ''} 
                               onchange="GUI.components.SettingsManager.updateSetting('parallel', this.checked)">
                        Parallel Execution
                    </label>
                    <small>Execute multiple commands simultaneously</small>
                </div>
                
                <div class="form-group">
                    <label>Concurrency Limit:</label>
                    <input type="number" min="1" max="10" value="${State.settings.concurrency}" 
                           class="form-control"
                           onchange="GUI.components.SettingsManager.updateSetting('concurrency', parseInt(this.value))">
                    <small>Max concurrent requests (1-10)</small>
                </div>
                
                <div class="form-group">
                    <label>Delay Between Commands (ms):</label>
                    <input type="number" min="0" max="5000" value="${State.settings.delayBetween}" 
                           class="form-control"
                           onchange="GUI.components.SettingsManager.updateSetting('delayBetween', parseInt(this.value))">
                    <small>Delay for sequential execution</small>
                </div>
            `;
        },
        
        renderTroopsSettings() {
            return `
                <div class="form-group">
                    <label>
                        <input type="checkbox" ${State.settings.checkTroops ? 'checked' : ''} 
                               onchange="GUI.components.SettingsManager.updateSetting('checkTroops', this.checked)">
                        Always Check Troops
                    </label>
                    <small>Verify troop availability before sending</small>
                </div>
                
                <div class="form-group">
                    <label>
                        <input type="checkbox" ${State.settings.stopOnShortage ? 'checked' : ''} 
                               onchange="GUI.components.SettingsManager.updateSetting('stopOnShortage', this.checked)">
                        Stop on Troop Shortage
                    </label>
                    <small>Cancel execution if troops insufficient</small>
                </div>
                
                <div class="form-group">
                    <label>
                        <input type="checkbox" ${State.settings.autoSelectVillage ? 'checked' : ''} 
                               onchange="GUI.components.SettingsManager.updateSetting('autoSelectVillage', this.checked)">
                        Auto-Select Villages
                    </label>
                    <small>Automatically choose best village for each command</small>
                </div>
                
                <div class="form-group">
                    <label>
                        <input type="checkbox" ${State.settings.autoLoadTroops ? 'checked' : ''} 
                               onchange="GUI.components.SettingsManager.updateSetting('autoLoadTroops', this.checked)">
                        Auto-Load Troops Data
                    </label>
                    <small>Load troops data when opening troops tab</small>
                </div>
            `;
        },
        
        renderNotificationSettings() {
            return `
                <div class="form-group">
                    <label>
                        <input type="checkbox" ${State.settings.showNotifications ? 'checked' : ''} 
                               onchange="GUI.components.SettingsManager.updateSetting('showNotifications', this.checked)">
                        Show Notifications
                    </label>
                    <small>Show success/error notifications</small>
                </div>
                
                <div class="form-group">
                    <label>
                        <input type="checkbox" ${State.settings.soundEnabled ? 'checked' : ''} 
                               onchange="GUI.components.SettingsManager.updateSetting('soundEnabled', this.checked)">
                        Enable Sounds
                    </label>
                    <small>Play sound effects for notifications</small>
                </div>
            `;
        },
        
        renderUISettings() {
            return `
                <div class="form-group">
                    <label>Theme:</label>
                    <select class="form-control" onchange="GUI.components.SettingsManager.updateSetting('theme', this.value)">
                        <option value="default" ${State.settings.theme === 'default' ? 'selected' : ''}>Default</option>
                        <option value="dark" ${State.settings.theme === 'dark' ? 'selected' : ''}>Dark</option>
                        <option value="blue" ${State.settings.theme === 'blue' ? 'selected' : ''}>Blue</option>
                    </select>
                </div>
            `;
        },
        
        updateSetting(key, value) {
            State.settings[key] = value;
            State.saveToStorage();
            
            // Update API status display
            if (key === 'apiStatus') {
                document.getElementById('apiStatus').textContent = 
                    APILoader.isLoaded ? '✅ Loaded' : '❌ Not Loaded';
            }
        },
        
        saveSettings() {
            State.saveToStorage();
            APILoader.showNotification('Settings saved', 'success');
        },
        
        resetSettings() {
            if (confirm('Reset all settings to defaults?')) {
                State.settings = {
                    parallel: true,
                    concurrency: 5,
                    delayBetween: 100,
                    checkTroops: true,
                    stopOnShortage: false,
                    autoSelectVillage: false,
                    showNotifications: true,
                    soundEnabled: false,
                    theme: 'default',
                    autoLoadTroops: true
                };
                State.saveToStorage();
                this.updateUI();
                APILoader.showNotification('Settings reset to defaults', 'info');
            }
        },
        
        clearAllData() {
            if (confirm('Clear ALL data (queue, history, settings)? This cannot be undone!')) {
                localStorage.removeItem(CONFIG.SAVE_KEY);
                State.queue = [];
                State.scheduled = [];
                State.history = [];
                State.init();
                
                GUI.updateQueueTab();
                GUI.updateHistoryTab();
                this.updateUI();
                
                APILoader.showNotification('All data cleared', 'info');
            }
        },
        
        async testAPI() {
            try {
                APILoader.showNotification('Testing API...', 'info');
                
                if (!TW_AJAX_COMMAND) {
                    throw new Error('API not loaded');
                }
                
                const testResult = await TW_AJAX_COMMAND.test();
                
                if (testResult.success) {
                    APILoader.showNotification('API test successful!', 'success');
                } else {
                    APILoader.showNotification(`API test failed: ${testResult.error}`, 'error');
                }
                
            } catch (error) {
                APILoader.showNotification(`API test error: ${error.message}`, 'error');
            }
        },
        
        showHelp() {
            const helpText = `
                TRIBAL WARS AJAX COMMAND GUI
                
                📋 FEATURES:
                • Command Builder - Create attacks/supports
                • Queue Manager - Manage multiple commands
                • Troops Manager - Check troop availability
                • History - View past commands
                • Settings - Customize behavior
                
                🚀 QUICK START:
                1. Build a command in the Builder tab
                2. Add it to Queue or Send immediately
                3. Use Queue tab to manage multiple commands
                4. Check troop availability before sending
                
                🔧 TIPS:
                • Use Ctrl+Shift+A to toggle GUI
                • Always check troops before large attacks
                • Use parallel mode for faster execution
                • Save templates for common troop compositions
                
                ⚠️ SAFETY:
                • Troop checking prevents over-sending
                • Queue system prevents accidental multiple clicks
                • History tracks all executed commands
                
                Need help? Check the API documentation.
            `;
            
            alert(helpText);
        },
        
        updateUI() {
            const settingsContainer = document.getElementById('settingsTab');
            if (settingsContainer) {
                settingsContainer.innerHTML = this.render();
            }
        }
    };
    
    // ============================================================================
    // HISTORY COMPONENT
    // ============================================================================
    const HistoryManager = {
        render() {
            return `
                <div class="history-manager">
                    <div class="section-header">
                        <h3>Execution History (${State.history.length})</h3>
                        <div class="section-actions">
                            <button class="btn-small" onclick="GUI.components.HistoryManager.clearHistory()">
                                🗑️ Clear
                            </button>
                            <button class="btn-small" onclick="GUI.components.HistoryManager.exportHistory()">
                                📤 Export
                            </button>
                        </div>
                    </div>
                    
                    ${this.renderHistoryList()}
                </div>
            `;
        },
        
        renderHistoryList() {
            if (State.history.length === 0) {
                return `
                    <div class="empty-state">
                        <div style="font-size: 48px; margin-bottom: 10px;">📜</div>
                        <div style="color: ${CONFIG.THEME.lightText}; margin-bottom: 20px;">
                            No execution history
                        </div>
                        <div style="font-size: 12px; color: ${CONFIG.THEME.info};">
                            Executed commands will appear here
                        </div>
                    </div>
                `;
            }
            
            return `
                <div class="history-list">
                    ${State.history.slice(0, 50).map(item => `
                        <div class="history-item ${item.success ? 'success' : 'error'}">
                            <div class="history-header">
                                <div class="history-time">
                                    ${new Date(item.timestamp).toLocaleString()}
                                </div>
                                <div class="history-status">
                                    ${item.success ? '✅ Success' : '❌ Failed'}
                                </div>
                            </div>
                            
                            <div class="history-details">
                                <div>Commands: ${item.summary?.totalCommands || 'N/A'}</div>
                                <div>Successful: ${item.summary?.successful || 0}</div>
                                <div>Failed: ${item.summary?.failed || 0}</div>
                                <div>Success Rate: ${item.summary?.successRate ? item.summary.successRate.toFixed(1) + '%' : 'N/A'}</div>
                            </div>
                            
                            ${item.error ? `
                                <div class="history-error">
                                    <strong>Error:</strong> ${item.error}
                                </div>
                            ` : ''}
                            
                            ${item.shortages && item.shortages.length > 0 ? `
                                <div class="history-shortages">
                                    <strong>Shortages:</strong>
                                    ${item.shortages.map(s => `${s.unit}: -${s.shortage}`).join(', ')}
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        },
        
        clearHistory() {
            if (State.history.length === 0) return;
            
            const confirmed = confirm(`Clear ${State.history.length} history items?`);
            if (confirmed) {
                State.history = [];
                State.saveToStorage();
                this.updateUI();
                APILoader.showNotification('History cleared', 'info');
            }
        },
        
        exportHistory() {
            if (State.history.length === 0) {
                APILoader.showNotification('No history to export', 'warning');
                return;
            }
            
            const data = {
                history: State.history,
                exported: new Date().toISOString(),
                totalItems: State.history.length
            };
            
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `command_history_${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            APILoader.showNotification('History exported', 'success');
        },
        
        updateUI() {
            const historyContainer = document.getElementById('historyTab');
            if (historyContainer) {
                historyContainer.innerHTML = this.render();
            }
        }
    };
    
    // ============================================================================
    // MAIN GUI CONTROLLER
    // ============================================================================
    const GUI = {
        isInitialized: false,
        components: {
            TroopsBuilder,
            CommandBuilder,
            QueueManager,
            TroopsManager,
            SettingsManager,
            HistoryManager
        },
        
        async init() {
            if (this.isInitialized) {
                Logger.log('GUI already initialized');
                return;
            }
            
            Logger.info('Initializing TW AJAX Command GUI...');
            
            // Initialize state
            State.init();
            
            // Load API if needed
            if (!APILoader.isLoaded) {
                try {
                    await APILoader.load();
                } catch (error) {
                    Logger.error('Failed to load API:', error);
                    return;
                }
            }
            
            // Add CSS styles
            this.addStyles();
            
            // Create GUI container
            this.createContainer();
            
            // Add control button to game UI
            this.addControlButton();
            
            // Setup hotkeys
            this.setupHotkeys();
            
            this.isInitialized = true;
            Logger.success('GUI initialized successfully');
            
            // Auto-load troops if enabled
            if (State.settings.autoLoadTroops && State.activeTab === 'troops') {
                setTimeout(() => {
                    TroopsManager.loadData().catch(() => {});
                }, 1000);
            }
        },
        
        addStyles() {
            const styles = `
                /* Main GUI Styles */
                #tw-ajax-gui {
                    position: fixed;
                    top: ${State.lastPosition.y}px;
                    left: ${State.lastPosition.x}px;
                    width: 800px;
                    max-width: 90vw;
                    height: 600px;
                    max-height: 80vh;
                    background: white;
                    border: 2px solid ${CONFIG.THEME.primary};
                    border-radius: 8px;
                    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                    z-index: 9999;
                    font-family: Arial, sans-serif;
                    display: ${State.isVisible ? 'flex' : 'none'};
                    flex-direction: column;
                    overflow: hidden;
                    resize: both;
                }
                
                #tw-ajax-gui.minimized {
                    height: auto;
                    width: 300px;
                }
                
                .gui-header {
                    background: ${CONFIG.THEME.primary};
                    color: white;
                    padding: 10px 15px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    cursor: move;
                    user-select: none;
                }
                
                .gui-title {
                    font-weight: bold;
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                
                .gui-controls {
                    display: flex;
                    gap: 5px;
                }
                
                .gui-controls button {
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    color: white;
                    width: 30px;
                    height: 30px;
                    border-radius: 4px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;
                }
                
                .gui-controls button:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
                
                .gui-tabs {
                    display: flex;
                    background: ${CONFIG.THEME.background};
                    border-bottom: 1px solid ${CONFIG.THEME.border};
                }
                
                .gui-tab {
                    padding: 12px 20px;
                    cursor: pointer;
                    border: none;
                    background: none;
                    font-size: 14px;
                    color: ${CONFIG.THEME.text};
                    border-bottom: 3px solid transparent;
                    transition: all 0.2s;
                }
                
                .gui-tab:hover {
                    background: rgba(255, 255, 255, 0.5);
                }
                
                .gui-tab.active {
                    color: ${CONFIG.THEME.primary};
                    border-bottom-color: ${CONFIG.THEME.primary};
                    font-weight: bold;
                    background: white;
                }
                
                .gui-content {
                    flex: 1;
                    overflow: auto;
                    padding: 20px;
                    background: white;
                }
                
                /* Button Styles */
                .btn {
                    padding: 8px 16px;
                    border: 1px solid ${CONFIG.THEME.border};
                    border-radius: 4px;
                    background: white;
                    cursor: pointer;
                    font-size: 14px;
                    transition: all 0.2s;
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                }
                
                .btn:hover {
                    background: ${CONFIG.THEME.background};
                }
                
                .btn-primary {
                    background: ${CONFIG.THEME.primary};
                    color: white;
                    border-color: ${CONFIG.THEME.primary};
                }
                
                .btn-primary:hover {
                    background: ${CONFIG.THEME.primary}dd;
                }
                
                .btn-success {
                    background: ${CONFIG.THEME.success};
                    color: white;
                    border-color: ${CONFIG.THEME.success};
                }
                
                .btn-danger {
                    background: ${CONFIG.THEME.danger};
                    color: white;
                    border-color: ${CONFIG.THEME.danger};
                }
                
                .btn-warning {
                    background: ${CONFIG.THEME.warning};
                    color: white;
                    border-color: ${CONFIG.THEME.warning};
                }
                
                .btn-default {
                    background: white;
                    color: ${CONFIG.THEME.text};
                }
                
                .btn-small {
                    padding: 4px 8px;
                    font-size: 12px;
                }
                
                .btn-icon {
                    padding: 4px;
                    width: 24px;
                    height: 24px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }
                
                /* Form Styles */
                .form-group {
                    margin-bottom: 15px;
                }
                
                .form-group label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                    color: ${CONFIG.THEME.text};
                }
                
                .form-control {
                    width: 100%;
                    padding: 8px 12px;
                    border: 1px solid ${CONFIG.THEME.border};
                    border-radius: 4px;
                    font-size: 14px;
                }
                
                .form-control:focus {
                    outline: none;
                    border-color: ${CONFIG.THEME.primary};
                }
                
                .input-group {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                
                .coord-input {
                    width: 80px;
                    text-align: center;
                }
                
                .coord-separator {
                    font-weight: bold;
                    color: ${CONFIG.THEME.text};
                }
                
                .btn-group {
                    display: flex;
                    gap: 5px;
                }
                
                /* Section Styles */
                .section-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    padding-bottom: 10px;
                    border-bottom: 2px solid ${CONFIG.THEME.background};
                }
                
                .section-header h3 {
                    margin: 0;
                    color: ${CONFIG.THEME.primary};
                }
                
                .section-actions {
                    display: flex;
                    gap: 5px;
                }
                
                /* Troops Builder */
                .troops-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 10px;
                    margin-bottom: 20px;
                }
                
                .troop-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                    background: ${CONFIG.THEME.background};
                    border-radius: 4px;
                    border: 1px solid ${CONFIG.THEME.border};
                }
                
                .troop-info {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                
                .troop-icon {
                    font-size: 20px;
                }
                
                .troop-name {
                    font-weight: bold;
                    min-width: 120px;
                }
                
                .troop-speed {
                    font-size: 12px;
                    color: ${CONFIG.THEME.lightText};
                }
                
                .troop-input {
                    width: 60px;
                    text-align: center;
                    padding: 4px;
                    border: 1px solid ${CONFIG.THEME.border};
                    border-radius: 4px;
                }
                
                .troop-controls {
                    display: flex;
                    gap: 5px;
                    align-items: center;
                }
                
                .troops-summary {
                    display: flex;
                    justify-content: space-between;
                    padding: 10px;
                    background: ${CONFIG.THEME.background};
                    border-radius: 4px;
                    font-weight: bold;
                    margin-bottom: 20px;
                }
                
                /* Queue Styles */
                .queue-list {
                    max-height: 300px;
                    overflow-y: auto;
                    margin-bottom: 20px;
                }
                
                .queue-item {
                    border: 1px solid ${CONFIG.THEME.border};
                    border-radius: 4px;
                    margin-bottom: 10px;
                    padding: 10px;
                    background: white;
                }
                
                .queue-item-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 10px;
                }
                
                .queue-item-type {
                    font-weight: bold;
                    padding: 2px 8px;
                    border-radius: 4px;
                    font-size: 12px;
                }
                
                .queue-item-type.attack {
                    background: #fee;
                    color: #c33;
                }
                
                .queue-item-type.support {
                    background: #eef;
                    color: #33c;
                }
                
                .queue-item-target {
                    font-weight: bold;
                    font-size: 16px;
                }
                
                .queue-item-actions {
                    display: flex;
                    gap: 5px;
                }
                
                .queue-item-details {
                    margin-bottom: 10px;
                }
                
                .troops-preview {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 5px;
                }
                
                .troop-badge {
                    background: ${CONFIG.THEME.background};
                    padding: 2px 6px;
                    border-radius: 12px;
                    font-size: 11px;
                    color: ${CONFIG.THEME.text};
                }
                
                .queue-item-time {
                    margin-top: 5px;
                    color: ${CONFIG.THEME.lightText};
                }
                
                .queue-item-footer {
                    border-top: 1px solid ${CONFIG.THEME.border};
                    padding-top: 5px;
                    color: ${CONFIG.THEME.lightText};
                    font-size: 11px;
                }
                
                .queue-stats {
                    display: flex;
                    justify-content: space-around;
                    padding: 15px;
                    background: ${CONFIG.THEME.background};
                    border-radius: 4px;
                    margin-bottom: 20px;
                    font-weight: bold;
                }
                
                .queue-actions {
                    display: flex;
                    gap: 10px;
                }
                
                .queue-actions .btn {
                    flex: 1;
                    justify-content: center;
                }
                
                /* Empty State */
                .empty-state {
                    text-align: center;
                    padding: 40px 20px;
                    color: ${CONFIG.THEME.lightText};
                }
                
                /* Stats Cards */
                .overview-stats {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 15px;
                    margin-bottom: 20px;
                }
                
                .stat-card {
                    background: ${CONFIG.THEME.background};
                    padding: 15px;
                    border-radius: 6px;
                    text-align: center;
                    border: 1px solid ${CONFIG.THEME.border};
                }
                
                .stat-value {
                    font-size: 24px;
                    font-weight: bold;
                    color: ${CONFIG.THEME.primary};
                    margin-bottom: 5px;
                }
                
                .stat-label {
                    font-size: 12px;
                    color: ${CONFIG.THEME.lightText};
                }
                
                /* Totals Grid */
                .totals-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                    gap: 10px;
                }
                
                .total-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 8px;
                    background: ${CONFIG.THEME.background};
                    border-radius: 4px;
                }
                
                .total-unit {
                    font-weight: bold;
                }
                
                .total-count {
                    color: ${CONFIG.THEME.primary};
                    font-weight: bold;
                }
                
                /* Village List */
                .village-scroll {
                    max-height: 300px;
                    overflow-y: auto;
                }
                
                .village-item {
                    padding: 10px;
                    border-bottom: 1px solid ${CONFIG.THEME.border};
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .village-item:last-child {
                    border-bottom: none;
                }
                
                .village-name {
                    font-weight: bold;
                    min-width: 150px;
                }
                
                .village-coords {
                    color: ${CONFIG.THEME.primary};
                    font-weight: bold;
                }
                
                .village-troops {
                    display: flex;
                    gap: 5px;
                    flex-wrap: wrap;
                    max-width: 200px;
                }
                
                .troop-more {
                    color: ${CONFIG.THEME.lightText};
                    font-style: italic;
                }
                
                /* Settings */
                .settings-sections {
                    display: grid;
                    gap: 20px;
                    margin-bottom: 20px;
                }
                
                .settings-section {
                    padding: 15px;
                    background: ${CONFIG.THEME.background};
                    border-radius: 6px;
                    border: 1px solid ${CONFIG.THEME.border};
                }
                
                .settings-section h4 {
                    margin-top: 0;
                    margin-bottom: 15px;
                    color: ${CONFIG.THEME.primary};
                }
                
                .settings-info {
                    padding: 15px;
                    background: ${CONFIG.THEME.background};
                    border-radius: 6px;
                    margin-bottom: 20px;
                }
                
                .info-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 10px;
                }
                
                .info-grid div {
                    padding: 5px 0;
                }
                
                /* History */
                .history-list {
                    max-height: 400px;
                    overflow-y: auto;
                }
                
                .history-item {
                    padding: 15px;
                    border: 1px solid ${CONFIG.THEME.border};
                    border-radius: 6px;
                    margin-bottom: 10px;
                }
                
                .history-item.success {
                    border-left: 4px solid ${CONFIG.THEME.success};
                }
                
                .history-item.error {
                    border-left: 4px solid ${CONFIG.THEME.danger};
                }
                
                .history-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                }
                
                .history-time {
                    color: ${CONFIG.THEME.lightText};
                    font-size: 12px;
                }
                
                .history-status {
                    font-weight: bold;
                }
                
                .history-details {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 10px;
                    margin-bottom: 10px;
                    font-size: 14px;
                }
                
                .history-error, .history-shortages {
                    padding: 10px;
                    background: ${CONFIG.THEME.background};
                    border-radius: 4px;
                    font-size: 13px;
                    margin-top: 10px;
                }
                
                .history-error {
                    color: ${CONFIG.THEME.danger};
                }
                
                .history-shortages {
                    color: ${CONFIG.THEME.warning};
                }
                
                /* Form Actions */
                .form-actions {
                    display: flex;
                    gap: 10px;
                    margin-top: 20px;
                }
                
                .form-actions .btn {
                    flex: 1;
                    justify-content: center;
                }
                
                /* Scrollbar Styling */
                ::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                
                ::-webkit-scrollbar-track {
                    background: ${CONFIG.THEME.background};
                }
                
                ::-webkit-scrollbar-thumb {
                    background: ${CONFIG.THEME.border};
                    border-radius: 4px;
                }
                
                ::-webkit-scrollbar-thumb:hover {
                    background: ${CONFIG.THEME.primary};
                }
                
                /* Disabled State */
                button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
                
                /* Responsive */
                @media (max-width: 768px) {
                    #tw-ajax-gui {
                        width: 95vw;
                        height: 80vh;
                        left: 2.5vw !important;
                        top: 10vh !important;
                    }
                    
                    .troops-grid {
                        grid-template-columns: 1fr;
                    }
                    
                    .form-actions {
                        flex-direction: column;
                    }
                    
                    .queue-actions {
                        flex-direction: column;
                    }
                }
            `;
            
            const style = document.createElement('style');
            style.textContent = styles;
            document.head.appendChild(style);
        },
        
        createContainer() {
            // Remove existing GUI if present
            const existing = document.getElementById('tw-ajax-gui');
            if (existing) existing.remove();
            
            // Create main container
            const container = document.createElement('div');
            container.id = 'tw-ajax-gui';
            container.className = State.isMinimized ? 'minimized' : '';
            
            container.innerHTML = `
                <div class="gui-header" id="guiHeader">
                    <div class="gui-title">
                        <span>⚔️ TW AJAX Commander</span>
                        <span style="font-size: 12px; opacity: 0.8;">v1.0.0</span>
                    </div>
                    <div class="gui-controls">
                        <button onclick="GUI.minimize()" title="Minimize">➖</button>
                        <button onclick="GUI.close()" title="Close">✕</button>
                    </div>
                </div>
                
                ${!State.isMinimized ? `
                    <div class="gui-tabs">
                        <button class="gui-tab ${State.activeTab === 'builder' ? 'active' : ''}" 
                                onclick="GUI.switchTab('builder')">🏗️ Builder</button>
                        <button class="gui-tab ${State.activeTab === 'queue' ? 'active' : ''}" 
                                onclick="GUI.switchTab('queue')">📋 Queue (${State.queue.length})</button>
                        <button class="gui-tab ${State.activeTab === 'troops' ? 'active' : ''}" 
                                onclick="GUI.switchTab('troops')">📊 Troops</button>
                        <button class="gui-tab ${State.activeTab === 'history' ? 'active' : ''}" 
                                onclick="GUI.switchTab('history')">📜 History</button>
                        <button class="gui-tab ${State.activeTab === 'settings' ? 'active' : ''}" 
                                onclick="GUI.switchTab('settings')">⚙️ Settings</button>
                    </div>
                    
                    <div class="gui-content" id="guiContent">
                        ${this.renderActiveTab()}
                    </div>
                ` : ''}
            `;
            
            document.body.appendChild(container);
            
            // Make draggable
            this.makeDraggable(container, document.getElementById('guiHeader'));
            
            // Update content
            this.updateContent();
        },
        
        renderActiveTab() {
            switch (State.activeTab) {
                case 'builder':
                    return `<div id="commandBuilderTab">${CommandBuilder.render()}</div>`;
                case 'queue':
                    return `<div id="queueTab">${QueueManager.render()}</div>`;
                case 'troops':
                    return `<div id="troopsTab">${TroopsManager.render()}</div>`;
                case 'history':
                    return `<div id="historyTab">${HistoryManager.render()}</div>`;
                case 'settings':
                    return `<div id="settingsTab">${SettingsManager.render()}</div>`;
                default:
                    return `<div>Tab not found</div>`;
            }
        },
        
        updateContent() {
            const content = document.getElementById('guiContent');
            if (content) {
                content.innerHTML = this.renderActiveTab();
            }
            
            // Update tab indicators
            document.querySelectorAll('.gui-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            const activeTab = document.querySelector(`.gui-tab[onclick*="'${State.activeTab}'"]`);
            if (activeTab) {
                activeTab.classList.add('active');
            }
        },
        
        switchTab(tabName) {
            State.activeTab = tabName;
            
            // Auto-load troops data if enabled
            if (tabName === 'troops' && State.settings.autoLoadTroops && !State.troopsInfo) {
                setTimeout(() => {
                    TroopsManager.loadData().catch(() => {});
                }, 100);
            }
            
            this.updateContent();
            State.saveToStorage();
        },
        
        updateQueueTab() {
            QueueManager.updateUI();
            
            // Update tab badge
            const queueTab = document.querySelector('.gui-tab[onclick*="queue"]');
            if (queueTab) {
                queueTab.textContent = `📋 Queue (${State.queue.length})`;
            }
        },
        
        updateHistoryTab() {
            HistoryManager.updateUI();
            
            // Update tab badge
            const historyTab = document.querySelector('.gui-tab[onclick*="history"]');
            if (historyTab) {
                historyTab.textContent = `📜 History (${State.history.length})`;
            }
        },
        
        toggle() {
            State.isVisible = !State.isVisible;
            const gui = document.getElementById('tw-ajax-gui');
            
            if (gui) {
                gui.style.display = State.isVisible ? 'flex' : 'none';
                
                if (State.isVisible) {
                    gui.style.zIndex = '9999';
                    // Bring to front
                    gui.style.zIndex = '10000';
                }
            } else {
                this.createContainer();
                State.isVisible = true;
            }
            
            State.saveToStorage();
        },
        
        minimize() {
            State.isMinimized = !State.isMinimized;
            const gui = document.getElementById('tw-ajax-gui');
            
            if (gui) {
                gui.className = State.isMinimized ? 'minimized' : '';
                this.updateContent();
            }
            
            State.saveToStorage();
        },
        
        close() {
            State.isVisible = false;
            const gui = document.getElementById('tw-ajax-gui');
            if (gui) {
                gui.style.display = 'none';
            }
            State.saveToStorage();
        },
        
        makeDraggable(element, handle) {
            let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            
            handle.onmousedown = dragMouseDown;
            
            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                
                // Get the mouse cursor position at startup
                pos3 = e.clientX;
                pos4 = e.clientY;
                
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }
            
            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                
                // Calculate the new cursor position
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                
                // Set the element's new position
                const newTop = element.offsetTop - pos2;
                const newLeft = element.offsetLeft - pos1;
                
                // Keep within viewport
                const maxTop = window.innerHeight - 50;
                const maxLeft = window.innerWidth - 100;
                
                element.style.top = Math.max(0, Math.min(newTop, maxTop)) + 'px';
                element.style.left = Math.max(0, Math.min(newLeft, maxLeft)) + 'px';
                
                // Save position
                State.lastPosition = {
                    x: parseInt(element.style.left),
                    y: parseInt(element.style.top)
                };
            }
            
            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
                State.saveToStorage();
            }
        },
        
        addControlButton() {
            // Remove existing button if present
            const existingBtn = document.getElementById('tw-gui-toggle-btn');
            if (existingBtn) existingBtn.remove();
            
            // Create toggle button
            const button = document.createElement('button');
            button.id = 'tw-gui-toggle-btn';
            button.innerHTML = '⚔️';
            button.title = 'TW AJAX Commander (Ctrl+Shift+A)';
            
            button.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 50px;
                height: 50px;
                background: ${CONFIG.THEME.primary};
                color: white;
                border: none;
                border-radius: 50%;
                font-size: 24px;
                cursor: pointer;
                z-index: 9998;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
            `;
            
            button.onmouseover = () => {
                button.style.transform = 'scale(1.1)';
                button.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.3)';
            };
            
            button.onmouseout = () => {
                button.style.transform = 'scale(1)';
                button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
            };
            
            button.onclick = () => this.toggle();
            
            document.body.appendChild(button);
        },
        
        setupHotkeys() {
            document.addEventListener('keydown', (e) => {
                // Ctrl+Shift+A to toggle GUI
                if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
                    e.preventDefault();
                    this.toggle();
                }
                
                // Ctrl+Shift+Q for quick attack
                if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'q') {
                    e.preventDefault();
                    if (State.isVisible && State.activeTab === 'builder') {
                        State.settings.commandType = 'attack';
                        CommandBuilder.setType('attack');
                        APILoader.showNotification('Quick attack mode activated', 'info');
                    }
                }
                
                // Ctrl+Shift+S for quick support
                if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 's') {
                    e.preventDefault();
                    if (State.isVisible && State.activeTab === 'builder') {
                        State.settings.commandType = 'support';
                        CommandBuilder.setType('support');
                        APILoader.showNotification('Quick support mode activated', 'info');
                    }
                }
            });
        }
    };
    
    // ============================================================================
    // INITIALIZATION
    // ============================================================================
    
    // Auto-initialize when page loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => GUI.init(), 1000);
        });
    } else {
        setTimeout(() => GUI.init(), 1000);
    }
    
    // Make GUI globally accessible
    window.GUI = GUI;
    
    Logger.info('TW AJAX Command GUI script loaded');
    
})();
