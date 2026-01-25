/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/rally-point-form-filling-nuke-script.287514/
*/

/* ================= CONFIG ================= */

 const SUPABASE_URL = "https://xjrgjnsxahfxlseakknl.supabase.co";
    const SUPABASE_ANON_KEY =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqcmdqbnN4YWhmeGxzZWFra25sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTc5MDgsImV4cCI6MjA4MzczMzkwOH0.ZmqvQkg1baYpkYXhYCj59Drphdy2iq50tY3JoIR_6c4";


/* ================= TROOP CONFIG ================= */

const forceEqualTroopCount = false;
const distributeByPopulation = false;
const forceRamSpeed = true;
const populationLim = 0;

const troops = {
    spear: '0',
    sword: '0',
    axe: 'max',
    archer: '0',
    spy: '1',
    light: 'max',
    marcher: 'max',
    heavy: '0',
    ram: '250',
    catapult: 'max'
};

const minTroops = {
    spear: '0',
    sword: '0',
    axe: '0',
    archer: '0',
    spy: '0',
    light: '0',
    marcher: '0',
    heavy: '0',
    ram: '0',
    catapult: '0'
};
$.getScript('https://raw.githack.com/Dogatw/Scripts/main/TribalNukeScript.js');
void(0)
