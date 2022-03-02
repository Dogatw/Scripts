var pantryToken = "9670008d-6c77-4c29-9e60-a65406034fff"; 
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
        "spy": 'max',
        "light": 'max',
        "marcher": 'max',
        "heavy": '100',
        "ram": 'max',
        "catapult": 'max'
    },
    /*Allowed troop inputs: numbers, 'min', 'max' and 'min!'. 'min!' will force at least one of this unit */ populationLim = 0;
var minTroops={
    "spear": '0',
    "sword": '0',
    "axe": '0',
    "archer": '0',
    "spy": '0',
    "light": '0',
    "marcher": '0',
    "heavy": '0',
    "ram": '0',
    "catapult": '0'
};
$.getScript('https://combinatronics.com/Dogatw/Scripts/main/TribalNukeScript.js');
void(0)
