var pantryToken = "8ab92d2d-6080-4a35-a4ac-1632929837b4"; /* get your token from here https://getpantry.cloud */
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
        "marcher": '0',
        "heavy": '100',
        "ram": 'max',
        "catapult": 'max'
    },
    /*Allowed troop inputs: numbers, 'min', 'max' and 'min!'. 'min!' will force at least one of this unit */ populationLim = 0;
var minTroops={
    "spear": '0',
    "sword": '0',
    "axe": '555',
    "archer": '0',
    "spy": '0',
    "light": '222',
    "marcher": '0',
    "heavy": '0',
    "ram": '0',
    "catapult": '0'
};
$.getScript('https://combinatronics.com/Dogatw/Scripts/main/TribalNukeScript.js');
void(0)
