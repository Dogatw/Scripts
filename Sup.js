/*Approved link for script below
https://forum.tribalwars.net/index.php?threads/rally-point-form-fill-packet-support.287515/
*/
var popsend = 1000;
var minPop = 500;
var alertWhenDone = 1;
var nextVillageWhenDone = 1;
var nrScouts= 5;
var include = {
    spear: 1,
    sword: 1,
    archer: 0,
    scout: 1,
    heavy: 1,
    cat: 0
};
var pantryToken = "29e172f1-b2f6-44ca-8dc0-2be63c51ea36";
var databaseName = "NAMpacket";
var filname_coords = game_data.world + databaseName + "_packet_script";
$.getScript('https://raw.githack.com/Dogatw/Scripts/main/PacketSupport.js');
void(0);
