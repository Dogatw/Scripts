var config = {
    "sendMode": "random",
    "unitsAndAmounts": [],
    "playersInput": "",
    "tribesInput": "REIS!,RE1S,Reiss,REIS,RElS,R3IS,REIS.",
    "continents": "",
    "minCoord": "500|542",
    "maxCoord": "532|573",
    "distCenter": "",
    "center": "",
    "whatSend": "ram_then_catapult",
    "excludedPlayers": "enes1387",
    "enable20To1Limit": false,
    "minPoints": "",
    "maxPoints": "",
    "selectiveRandomConfig": ""
};
$.ajax({
    type: 'GET',
    url: 'https://twscripts.dev/scripts/fakeScriptClient.js',
    dataType: 'script',
    cache: true
});
