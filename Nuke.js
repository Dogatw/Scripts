/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/rally-point-form-filling-nuke-script.287514/
*/
var pantryToken = "c91de6f7-f678-444a-97a9-85386b318de8"; 
var databaseName = "NAM";
var filname_coords = game_data.world + databaseName + "_coords_nuke_script";
var forceEqualTroopCount = false,
    distributeByPopulation = false,
    forceRamSpeed = true,
    troops = {
        "spear": '0',
        "sword": '100',
        "axe": 'max',
        "archer": '0',
        "spy": '5',
        "light": 'max',
        "marcher": '0',
        "heavy": '100',
        "ram": '230',
        "catapult": 'max'
    },
    /*Allowed troop inputs: numbers, 'min', 'max' and 'min!'. 'min!' will force at least one of this unit */ populationLim = 0;
var minTroops={
    "spear": '0',
    "sword": '0',
    "axe": '3000',
    "archer": '0',
    "spy": '0',
    "light": '1000',
    "marcher": '0',
    "heavy": '0',
    "ram": '100',
    "catapult": '0'
};
$.getScript('https://raw.githack.com/Dogatw/Scripts/main/TribalNukeScript.js');
void(0)
