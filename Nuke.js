/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/rally-point-form-filling-nuke-script.287514/
*/
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
