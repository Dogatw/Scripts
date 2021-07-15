//import settings /*[[{"type":"NUKE","list_values":[{"select_troop":"pop_off","select_operation":">","nr_troops":"12000"}]},{"type":"HALF NUKE","list_values":[{"select_troop":"pop_off","select_operation":">","nr_troops":"6000"},{"select_troop":"pop_off","select_operation":"<=","nr_troops":"11999"}]},{"type":"FANG","list_values":[{"select_troop":"pop_total","select_operation":"<=","nr_troops":"6000"},{"select_troop":"pop_total","select_operation":">","nr_troops":"300"},{"select_troop":"catapult","select_operation":">","nr_troops":"10"}]},{"type":"MINI NUKE","list_values":[{"select_troop":"pop_off","select_operation":"<=","nr_troops":"6000"},{"select_troop":"catapult","select_operation":"<=","nr_troops":"10"},{"select_troop":"pop_off","select_operation":">","nr_troops":"1000"}]},{"type":"FAKE","list_values":[{"select_troop":"pop_total","select_operation":"<=","nr_troops":"10"}]},{"type":"SCOUT","list_values":[{"select_troop":"spy","select_operation":">","nr_troops":"10"},{"select_troop":"pop_off","select_operation":"<=","nr_troops":"1000"}]},{"type":"NOTYPE","list_values":[{"select_troop":"pop_def","select_operation":">","nr_troops":"200"},{"select_troop":"pop_off","select_operation":"<=","nr_troops":"20"}]}],["[[true,true,true,true,true],[\"all\"],[\"10\"],[\"tr_packets\",\"tr_type\",\"tr_population\",\"tr_troops\",\"tr_buildings\"]]"]]*/

var popPackets = 1000;
var heavyPop = 4;
var troopsName = {
    archer: "arc",
    axe: "axe",
    catapult: "cat",
    heavy: "HC",
    light: "LC",
    marcher: "MC",
    ram: "ram",
    snob: "noble",
    spy: "spy",
    sword: "sw",
    spear: "sp",
    knight: "pal",
    packets: "packets"
};
$.getScript('https://dl.dropboxusercontent.com/s/943wux6kq026hft/commandRenamerInterface.js?dl=0');
void(0);
