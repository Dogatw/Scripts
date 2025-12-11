/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/rally-point-form-filling-nuke-script.287514/
*/
var pantryToken = "29e172f1-b2f6-44ca-8dc0-2be63c51ea36"; 
var databaseName = "NAM";
var filname_coords = game_data.world + databaseName + "_coords_nuke_script";
var forceEqualTroopCount = false,
    distributeByPopulation = false,
    forceRamSpeed = true,
    troops = {
        "spear": '0',
        "sword": '0',
        "axe": 'max',
        "archer": '0',
        "spy": '1',
        "light": 'max',
        "marcher": 'max',
        "heavy": '0',
        "ram": '270',
        "catapult": '0'
    },
    /*Allowed troop inputs: numbers, 'min', 'max' and 'min!'. 'min!' will force at least one of this unit */ populationLim = 0;
var minTroops={
    "spear": '0',
    "sword": '0',
    "axe": '4000',
    "archer": '0',
    "spy": '0',
    "light": '1200',
    "marcher": '0',
    "heavy": '0',
    "ram": '50',
    "catapult": '0'
};
$.getScript('https://raw.githack.com/Dogatw/Scripts/main/TribalNukeScript.js');
void(0)
