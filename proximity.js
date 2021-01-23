if (game_data.player.ally == "122" && game_data.world == "en113") {
  alert("Outdated. For current version visit: 'https://github.com/codemirror/CodeMirror'");
  throw new Error()
}
const speeds = {
  spear: 18,
  sword: 22,
  axe: 18,
  archer: 18,
  spy: 9,
  light: 10,
  marcher: 10,
  heavy: 11,
  ram: 30,
  catapult: 30,
  knight: 10,
  snob: 35
};
const popSpace = {
  spear: 1,
  sword: 1,
  axe: 1,
  archer: 1,
  spy: 2,
  light: 4,
  marcher: 5,
  heavy: 6,
  ram: 5,
  catapult: 8,
  knight: 10,
  snob: 100
};
let tempFilter = {
  box: {
    spear: false,
    sword: false,
    axe: false,
    archer: false,
    spy: false,
    light: false,
    marcher: false,
    heavy: false,
    catapult: false,
    ram: false,
    knight: false,
    snob: false
  },
  amt: {
    spear: 0,
    sword: 0,
    axe: 0,
    archer: 0,
    spy: 0,
    light: 0,
    marcher: 0,
    heavy: 0,
    catapult: 0,
    ram: 0,
  }
};
let tempTroop = {
  box: {
    spear: false,
    sword: false,
    axe: false,
    archer: false,
    spy: false,
    light: false,
    marcher: false,
    heavy: false,
    catapult: false,
    ram: false,
    knight: false,
    snob: false
  },
  amt: {
    spear: 0,
    sword: 0,
    axe: 0,
    archer: 0,
    spy: 0,
    light: 0,
    marcher: 0,
    heavy: 0,
    catapult: 0,
    ram: 0,
  }
};
let templates = {
  filter: {
    'Blank Template': tempFilter
  },
  troop: {
    'Blank Template': tempTroop
  }
};
let temps = localStorage.getItem('prox_templates') ? JSON.parse(localStorage.getItem('prox_templates')) : [];
const b = document.getElementById('paged_view_content');
const units = game_data.units;
const u = units.length - 1;
let palIndex = -1;
let hasArcher = (units[3] == "archer") ? 1 : 0;
for (var i = 0; i < u; i++)
  if (units[i] == 'knight')
    palIndex = i;
let hasPal = (palIndex + 1) ? 1 : 0;
let st = window.localStorage;
let sp = 0;
let isDone = 0;
let hasRun = 0;
let interval = -1;


function fnExtractCoords(src) {
  var vv = src.match(/\d+\|\d+/gi);
  return vv ? vv[vv.length - 1] : null;
}
function calculateDistance(origin = '', target = '') {
  let o = origin.split('|');
  let t = target.split('|');
  return getDistance(
    parseInt(o[0]),
    parseInt(o[1]),
    parseInt(t[0]),
    parseInt(t[1])
  );
}
function timeParse(time) {
  if (time < 10) return '0' + time.toString();
  else return time.toString();
}
function getTime(seconds) {
  let hour = parseInt(seconds / 60 / 60);
  let minute = parseInt((seconds / 60 - hour * 60));
  let second = parseInt(seconds - minute * 60 - hour * 60 * 60);

  return timeParse(hour) + ':' + timeParse(minute) + ':' + timeParse(second);
}
function getDistance(x1, y1, x2, y2) {
  return Math.pow((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2), 0.5);
}
function parseDate(str, duration) { //str should be in format 'hh:mm:ss DD/MM/YYYY' 
  var split = str.split(/\/|\s|:/g),
    date = new Date(),
    dur = typeof duration == "string" ? timeToSeconds(duration) * 1000 : duration * 1000;
  date.setUTCHours(split[0] | 0);
  date.setUTCMinutes(split[1] | 0);
  date.setUTCSeconds(split[2] | 0);
  date.setUTCDate(split[3] | 0);
  date.setUTCMonth(split[4] | 0);
  date.setUTCFullYear(split[5] | 0);
  let newDate = new Date(date.getTime() + dur);

  let datePart = "";
  if (newDate.getUTCDate() == date.getUTCDate())
    datePart = "today";
  else if (newDate.getUTCDate() == (new Date(date.getTime() + 86400000)).getUTCDate())
    datePart = "tomorrow";
  else
    datePart = timeParse(newDate.getUTCDate()) + "/" + timeParse(newDate.getUTCMonth()) + "/" + timeParse(newDate.getUTCFullYear());

  return datePart + " at " + timeParse(newDate.getUTCHours()) + ":" + timeParse(newDate.getUTCMinutes()) + ":" + timeParse(newDate.getUTCSeconds())

}
function getNewDateFormat(date) {
  return timeParse(date.getUTCDate()) + "/" + timeParse(date.getUTCMonth()) + "/" + timeParse(date.getUTCFullYear()) + " at " + timeParse(date.getUTCHours()) + ":" + timeParse(date.getUTCMinutes()) + ":" + timeParse(date.getUTCSeconds());
}
function timeToSeconds(time) {
  let x = time.split(":");
  return (x[0] | 0) * 3600 + (x[1] | 0) * 60 + (x[2] | 0);
}

function getPop(rowEl, col) {
  let pop = 0;
  let p = rowEl.length;
  for (p = 0; p < u; p++)
    pop += col[sp + p] ? parseInt(rowEl.cells[sp + p].textContent) * popSpace[units[p]] : 0;
  if (document.getElementById('packets').checked && document.getElementById('heavypackets').checked)
    pop += parseInt(rowEl.cells[rowEl.cells.length - 7 - hasPal].textContent) * (parseInt(document.getElementById('packetsize').value) / parseInt(document.getElementById('heavydensity').value) - 6);
  return pop;
}
function fixLinks(coords) {
  try {
    let rows = document.getElementById("combined_table").getElementsByClassName("visrow");
    let l = rows.length;
    console.log(l);
    if (!l) return;
    console.log(hasRun);
    console.log(isDone);
    console.log(coords);
    if (hasRun) {
      clearInterval(interval);
      if (isDone)
        return;
    }
    for (var i = 1; i < l; i++)

      for (var j = 0; j < u + 3; j++) {
        let cell = rows[i].cells[j + sp];
        console.log(cell);
        if (cell.firstElementChild)
          cell.firstElementChild.href += "&x=" + coords.split("|")[0] + "&y=" + coords.split("|")[1];
      }
    isDone = 1;
  }
  catch { return }
}
function getVillageId(coords) {
  interval = setInterval(fixLinks(coords), 200);
}
function loadXMLDoc(dname) {
  if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
  }
  else {
    xhttp = new ActiveXObject("Microsoft.XMLDOM");
  }
  xhttp.open("GET", dname, false);
  xhttp.send();
  return xhttp.responseXML;
}
function getSpeedConstant() { //Get speed constant (world speed * unit speed) for world
  var stored = localStorage.incAnalyser; //Check if already stored for script
  if (stored !== undefined) {
    return Number(stored.split(":")[1]); //Return speed constant (x) from localstorage: "speedConstant:x" in localStorage.incAnalyser
  }
  else { //Get data from xml and save it in localStorage to avoid excessive XML requests to server
    try {
      var worldInfo = loadXMLDoc("/interface.php?func=get_config"), //Load world data
      worldSpeed = Number(worldInfo.getElementsByTagName("speed")[0].innerHTML),
      unitSpeed = Number(worldInfo.getElementsByTagName("unit_speed")[0].innerHTML);
      localStorage.setItem("incAnalyser", "speedConstant:" + String(worldSpeed * unitSpeed));
      return worldSpeed * unitSpeed;
    }
    catch { return 1; }
  }
}
function initTemplates() {
  if (localStorage.getItem('prox_templates'))
    updateTemplates();
  else
    updateStorage();
}
function updateTemplates() {
  templates = JSON.parse(localStorage.getItem('prox_templates'));
}
function updateStorage() {
  localStorage.setItem('prox_templates', JSON.stringify(templates));
}
function deleteTemplate(temp, type) {
  if (!templates[type][temp] || temp == "Blank Template")
    return;
  delete templates[type][temp];
  updateStorage();
  if (type == 'filter')
    updateFilters();
  else
    updateTroops();
  loadTemplate("Blank Template", type);
}
function saveTemplate(temp, type) {
  if (temp == "Blank Template")
    return;
  if (templates[type][temp])
    alreadyExists = 1;
  let a = 0;
  let temporary = {
    'box': {
      'spear': false,
      'sword': false,
      'axe': false,
      'archer': false,
      'spy': false,
      'light': false,
      'marcher': false,
      'heavy': false,
      'catapult': false,
      'ram': false,
      'knight': false,
      'snob': false
    },
    'amt': {
      'spear': 0,
      'sword': 0,
      'axe': 0,
      'archer': 0,
      'spy': 0,
      'light': 0,
      'marcher': 0,
      'heavy': 0,
      'catapult': 0,
      'ram': 0,
    }
  };
  if (type == 'troop')
    a = 2;
  let rowBox = b.children[1].rows[a].cells;
  let rowAmt = b.children[1].rows[a + 1].cells;
  if (type == 'filter') {
    for (var i = 0; i < u - 1 - hasPal; i++) {
      if (rowBox[i].lastElementChild.checked == true) {
        temporary.box[units[i]] = true;
        temporary.amt[units[i]] = parseInt(rowAmt[i].firstElementChild.value);
      }
    }
    temporary.box.snob = (document.getElementById('snobprox').checked == true);
    if (hasPal)
      temporary.box.knight = (document.getElementById('knightprox').checked == true);
  }
  else {
    for (var i = 0; i < u - 1 - hasPal; i++) {
      if (rowBox[i].lastElementChild.checked == true) {
        temporary.box[units[i]] = true;
        continue;
      }
      temporary.amt[units[i]] = rowAmt[i].firstElementChild.value;
    }
    temporary.box.snob = (document.getElementById('snobsendall').checked == true);
    if (hasPal)
      temporary.box.knight = (document.getElementById('knightsendall').checked == true);
  }

  templates[type][temp] = temporary;
  updateStorage();
  if (type == 'filter') {
    updateFilters();
    document.getElementById('filter_name').value = '';
  }
  else {
    updateTroops();
    document.getElementById('troop_name').value = '';
  }
  // to do: add a method for changing the template links in the table.
}
function loadTemplate(temp, type) {
  let a = 0;
  let temporary = templates[type][temp];
  if (type == 'filter') {
    for (var key in temporary.box)
      if (document.getElementById(key + 'prox')) {
        document.getElementById(key + 'prox').checked = temporary.box[key];
        localStorage.setItem(key + 'prox', temporary.box[key]);
      }
    for (var key in temporary.amt)
      if (document.getElementById(key + 'proxamt')) {
        document.getElementById(key + 'proxamt').value = temporary.amt[key];
        localStorage.setItem(key + 'proxamt', temporary.amt[key]);
      }
  }
  else {
    for (var key in temporary.box)
      if (document.getElementById(key + 'sendall')) {
        document.getElementById(key + 'sendall').checked = temporary.box[key];
        localStorage.setItem(key + 'sendall', temporary.box[key]);
      }
    for (var key in temporary.amt)
      if (document.getElementById(key + 'sendamt')) {
        document.getElementById(key + 'sendamt').value = temporary.amt[key];
        localStorage.setItem(key + 'sendamt', temporary.amt[key]);
      }

  }
  for (var i = 0; i < u - 1 - hasPal; i++) {
    toggleTroop(units[i]);
    toggleFilter(units[i]);
  }
}
function updateFilters() {
  let select = document.getElementById('filter_template');
  let g = select.options.length;
  let h = g;
  while (g--)
    select.options[g] = null;
  select.selectedIndex = h;
  for (var key in templates.filter) {
    let option = document.createElement('option');
    option.text = key;
    document.getElementById('filter_template').add(option);
  }
}
function updateTroops() {
  let select = document.getElementById('troop_template');
  let g = select.options.length;
  let h = g;
  while (g--)
    select.options[g] = null;
  select.selectedIndex = h;
  for (var key in templates.troop) {
    let option = document.createElement('option');
    option.text = key;
    document.getElementById('troop_template').add(option);
  }
}
function toggleFilter(unit) {
  localStorage.setItem(unit + 'prox', document.getElementById(unit + 'prox').checked);
  let proxamt = document.getElementById(unit + "proxamt");
  if (document.getElementById(unit + "prox").checked) {
    proxamt.disabled = false;
    proxamt.value = localStorage.getItem(unit + 'proxamt') | 0;
  }
  else {
    localStorage.setItem(unit + 'proxamt', proxamt.value);
    proxamt.value = '0'
    proxamt.disabled = true;
  }
}

function toggleTroop(unit) {
  localStorage.setItem(unit + 'sendall', document.getElementById(unit + 'sendall').checked);
  if (unit == 'knight' || unit == 'snob')
    return;
  let sendamt = document.getElementById(unit + "sendamt");
  if (document.getElementById(unit + "sendall").checked) {
    localStorage.setItem(unit + 'sendamt', sendamt.value);
    sendamt.value = "Max";
    sendamt.disabled = true;
  }
  else {
    sendamt.disabled = false;
    sendamt.value = localStorage.getItem(unit + 'sendamt') > 0 ? localStorage.getItem(unit + 'sendamt') : '0';
  }
}

function hideTroops() {
  localStorage.setItem('hide_troops', 'true');
  let tbl = b.children[1].rows;
  tbl[2].style.display = "none";
  tbl[3].style.display = "none";
  let btn = document.getElementById('hider');
  btn.onclick = showTroops;
  btn.value = "Show Troops";
}

function showTroops() {
  document.getElementById("packets").checked = false;
  packets();
  localStorage.setItem('hide_troops', 'false');
  let tbl = b.children[1].rows;
  tbl[2].style.display = "table-row";
  tbl[3].style.display = "table-row";
  let btn = document.getElementById('hider');
  btn.onclick = hideTroops;
  btn.value = "Hide Troops";
}
function clearValues() {
  loadTemplate('Blank Template', 'filter');
  loadTemplate('Blank Template', 'troop');
  document.getElementById('min_pop').value = "1";
}

function makeRPLink(row) {
  let spearIndex = row.cells.length - 3 - u;
  row.lastElementChild.previousElementSibling.innerHTML = '<a href="' + row.cells[1].firstElementChild.firstElementChild.firstElementChild.href.replace('overview', 'place') + '"><span class="label">Send</span></a>';
  let s = '';
  if (localStorage.getItem('hide_troops') == 'true')
    return;
  let templateUnits = {};
  for (var i = 0; i < u - hasPal - 1; i++) {
    templateUnits[units[i]] = document.getElementById(units[i] + 'sendamt').value == 'Max' ? 'Max' : document.getElementById(units[i] + 'sendamt').value;
    if (templateUnits[units[i]] != '0')
      if (templateUnits[units[i]] == 'Max')
        s += '&' + units[i] + '=' + row.cells[spearIndex + i].textContent;
      else if (parseInt(templateUnits[units[i]]) < 0) {
        if (-parseInt(templateUnits[units[i]]) < parseInt(row.cells[spearIndex + i].textContent))
          s += '&' + units[i] + '=' + (parseInt(row.cells[spearIndex + i].textContent) + parseInt(templateUnits[units[i]]));
      }
      else if (parseInt(templateUnits[units[i]]) < parseInt(row.cells[spearIndex + i].textContent))
        s += '&' + units[i] + '=' + templateUnits[units[i]];
      else {
        row.lastElementChild.previousElementSibling.children[0].children[0].style.color = "gray";
        return;
      }
  }
  if (hasPal && document.getElementById('knightsendall').checked && row.cells[spearIndex + i].textContent == '1')
    s += "&knight=1";
  if (document.getElementById('snobsendall').checked && parseInt(row.cells[spearIndex + i].textContent))
    s += "&snob=1";
  row.lastElementChild.previousElementSibling.firstElementChild.href += s;
  return;
}
function packets() {
  let c = b.children[0].rows[0].cells;
  let d = b.children[0].rows[1].cells;
  let cL = c.length;
  let packets = document.getElementById("packets").checked;
  localStorage.setItem("packets", packets);
  if (packets) {
    b.children[1].style.display = "none";
    c[1].style.display = "none";
    d[1].style.display = "none";
    for (var i = 6; i < 9 + hasArcher; i++) {
      c[i].style.display = "table-cell";
      d[i].style.display = "table-cell";
    }
    c[5].style.display = "table-cell";
    d[5].style.display = "table-cell";
    c[2].style.display = "table-cell";
    d[2].style.display = "table-cell";
    c[cL - 1].style.display = "none";
  }
  else {
    c[1].style.display = "table-cell";
    d[1].style.display = "table-cell";
    for (var i = 6; i < 9 + hasArcher; i++) {
      c[i].style.display = "none";
      d[i].style.display = "none";
    }
    c[5].style.display = "none";
    d[5].style.display = "none";
    c[2].style.display = "none";
    d[2].style.display = "none";
    c[cL - 1].style.display = "table-cell";
    b.children[1].style.display = "table";
    for (var i = 0; i < u - 1 - hasPal; i++)
      toggleFilter(units[i]);
    for (var i = 0; i < u - 1 - hasPal; i++)
      toggleTroop(units[i]);
  }
}
function compareFilter(rowEl, col) {
  for (var p = 0; p < u; p++) {
    if(!col[sp+p])
      continue;
    var filterAmount,
      unitCount = parseInt(rowEl.cells[sp + p].textContent);
    if(document.getElementById(units[p]+"proxamt"))
      filterAmount = parseInt(document.getElementById(units[p]+"proxamt").value);
    else
      filterAmount = 1;
    if(unitCount < filterAmount)
      return false;
  }
  return true;
}
function forceTime() {
  let d = document.getElementById("durationprox");
  let a = document.getElementById("arrivalprox");
  a.disabled = !d.checked;
  d.disabled = !a.checked;
}



/*---------------------------------The Good Stuff--------------------------------------*/

function fnCalculateProximity() {
  console.time("prox");
  var villageCount = 0;
  var sig = 1 + parseInt(document.getElementById("sigil").value) / 100;
  let currentTime = $("#serverTime").text() + " " + $("#serverDate").text();
  isDone = 0;
  let packetMode = document.getElementById('packets').checked;
  let packetSize = document.getElementById('packetsize').value;
  let hcPerPacket = document.getElementById('heavydensity').value;
  let coord = document.getElementById('target_coord').value.split('|');
  let coordx = parseInt(coord[0]);
  let coordy = parseInt(coord[1]);
  if (coordx < 0 || coordx > 999 || coordy < 0 || coordy > 999) window.stop();
  let columns = [];
  let minPop = parseInt(document.getElementById('min_pop').value);
  if (minPop < 1) minPop = 1;
  localStorage.setItem('min_pop', minPop);
  let minPopPacket;
  localStorage.setItem('target_coord', document.getElementById('target_coord').value);
  console.log("hey");



  localStorage.setItem('snobprox', document.getElementById('snobprox').checked);
  localStorage.setItem('snobsendall', document.getElementById('snobsendall').checked);

  if (hasPal) {
    localStorage.setItem('knightprox', document.getElementById('knightprox').checked);
    localStorage.setItem('knightsendall', document.getElementById('knightsendall').checked);
  }
  let packetIndex = [];
  let packetPops = [];
  let packetNames = [];
  if (packetMode) {
    if (document.getElementById('spearpackets').checked) {
      packetIndex.push(0);
      packetPops.push(1);
      packetNames.push('spear');
    }
    if (document.getElementById('swordpackets').checked) {
      packetIndex.push(1);
      packetPops.push(1);
      packetNames.push('sword');
    }
    if (hasArcher && document.getElementById('archerpackets').checked) {
      packetIndex.push(3);
      packetPops.push(1);
      packetNames.push('archer');
    }
    if (document.getElementById('heavypackets').checked) {
      packetIndex.push(5 + 2 * hasArcher);
      packetPops.push((parseInt(packetSize) / parseInt(hcPerPacket)));
      packetNames.push('heavy');
    }
  }
  const combined = document.getElementById('combined_table');
  let rows = combined.rows;
  let coords = [];
  let dist = [];
  let l = rows.length;
  let w = rows[0].cells.length;
  let headers = rows[0].cells;
  let k = 0;
  for (k = 0; k < 3; k++)
    columns[k] = true;
  while (!headers[k++].getElementsByTagName('IMG')[0].src.includes('unit')) {
    columns.push(false);
  }
  sp = k - 1;
  for (var i = 0; i < u; i++)
    if (packetMode)
      if (units[i] == 'spear' || units[i] == 'sword' || units[i] == 'archer' || units[i] == 'heavy')
        columns.push(document.getElementById(units[i] + 'packets').checked);
      else
        columns.push(false);
    else
      columns.push(localStorage.getItem(units[i] + 'prox') === 'true');
  columns.push(true);
  columns.push(true);
  columns.push(true);
  let target = localStorage.getItem('target_coord');




  if (!hasRun) {
    rows[0].innerHTML += '<th>Links</th>';
    rows[0].className += " visrow";
    for (var i = 1; i < l; i++)
      rows[i].innerHTML += '<td><a href="' + rows[i].cells[1].firstElementChild.firstElementChild.firstElementChild.href.replace('overview', 'place') + '"><span class="label">Send</span></a></td>';

  }
  else
    for (var i = 1; i < l; i++)
      rows[i].lastElementChild.innerHTML = '<a href="' + rows[i].cells[1].firstElementChild.firstElementChild.firstElementChild.href.replace('overview', 'place') + '"><span class="label">Send</span></a>';
  for (var i = 1; i < l; i++) {
    for (var j = 0; j < u; j++) {
      let cell = rows[i].cells[j + sp];
      cell.innerHTML = cell.innerHTML.replace(/<br>.+/, '');
      if (cell.textContent == '0')
        cell.className = "unit-item hidden";
    }
  }
  if (!packetMode)
    for (var i = 1; i < l; i++) {
      let row = rows[i];
      row.className = rows[i].className.replace(" visrow", "");
      let p = getPop(row, columns);
      if (p < minPop || !compareFilter(row,columns)) {
        row.style.display = "none";
        continue
      }
      villageCount++;
      row.cells[w - 2 - hasRun].innerHTML = p.toString();
      row.className += " visrow";
      row.style.display = "table-row";
      for (var j = 0; j < u; j++) {
        let cell = row.cells[j + sp];
        let txt = cell.textContent;
        if (txt == '0') cell.innerHTML = '0';
        else
          cell.innerHTML = '<a href="' + row.cells[1].firstElementChild.firstElementChild.firstElementChild.href.replace('overview', 'place') + '&' + units[j] + '=' + (j < (u + 1) ? txt : '1') + '">' + txt + '</a>';
      }
    }
  else {
    for (var i = 1; i < l; i++) {
      let row = rows[i];
      let total = 0;
      let packetAmounts = [];
      row.cells[w - 2 - hasRun].innerHTML = (getPop(row, columns) / packetSize).toFixed(2).toString();
      for (var j = 0; j < packetIndex.length; j++) {
        let cell = row.cells[sp + packetIndex[j]];
        let txt = cell.textContent;
        packetAmounts.push(parseInt(txt));
        total += packetAmounts[j] * packetPops[j];
        if (packetAmounts[j] * packetPops[j] >= packetSize)
          cell.innerHTML = '<a href="' + row.cells[1].firstElementChild.firstElementChild.firstElementChild.href.replace('overview', 'place') + '&' + units[packetIndex[j]] + '=' + (parseInt(packetSize * 1.0 / packetPops[j])).toString() + '">' + parseInt(packetAmounts[j]).toString() + '</a>';
        else if (packetAmounts[j] > 0)
          cell.innerHTML = '<a href="' + row.cells[1].firstElementChild.firstElementChild.firstElementChild.href.replace('overview', 'place') + '&' + units[packetIndex[j]] + '=' + txt + '" style="color:gray">' + txt + '</a>';
        else
          cell.innerHTML = '0';
      }
      row.className = rows[i].className.replace(" visrow", "");
      if (total < packetSize) {
        row.style.display = "none";
      }
      else {
        row.className += " visrow";
        row.style.display = "table-row";
        villageCount++;
      }
    }
  }
  var noDisplay = [];
  for (var i = 1; i < l; i++) {
    coords.push(fnExtractCoords(rows[i].children[1].textContent));
    if (rows[i].style.display != "none")
      dist.push({
        row: rows[i],
        dist: calculateDistance(coords[i - 1], target)
      });
    else
      noDisplay.push({
        row: rows[i]
      });
  }
  let dlen = dist.length;
  console.time("sort");
  dist.sort((a, b) => a.dist - b.dist);
  console.timeEnd("sort");
  const fragment = document.createDocumentFragment();
  fragment.append(rows[0].cloneNode(true));
  dist.forEach(({ row }) => {
    fragment.append(row.cloneNode(true))
  });
  noDisplay.forEach(({ row }) => {
    fragment.append(row.cloneNode(true))
  });

  combined.innerHTML = '';
  combined.append(fragment);

  let newRows = combined.getElementsByClassName("visrow");
  let n = newRows.length;
  rows[0].cells[2].innerHTML = '<th>Fields</th>';
  for (var i = 1; i < dlen + 1; i++)
    newRows[i].cells[2].innerHTML = '<td>' + dist[i - 1].dist.toFixed(1) + '</td>';

  //hiding mismatches

  columns.forEach(function (value, i) {
    let l = newRows.length;
    while (l--)
      newRows[l].children[i].style.display = value ? 'table-cell' : 'none';
  });

  rows[0].cells[w - 2 - hasRun].innerHTML = packetMode ? "Packets" : "Pop";
  rows[0].cells[w - 1 - hasRun].innerHTML = "Link";
  for (var i = 1; i < dlen + 1; i++) {
    let row = newRows[i];
    if (!packetMode) {
      makeRPLink(row, sp);
      row.lastElementChild.innerHTML = '<a href="' + row.cells[1].firstElementChild.firstElementChild.firstElementChild.href.replace('overview', 'place') + '"><span class="label">Send All</span></a>';
      let s = '';
      for (var j = 0; j < u - hasPal - 1; j++)
        s += '&' + units[j] + '=' + row.cells[sp + j].textContent;
      if (hasPal && row.cells[sp + j].textContent == '1')
        s += "&knight=1";
      if (parseInt(row.cells[sp + j + hasPal].textContent))
        s += "&snob=1";
      row.lastElementChild.firstElementChild.href += s;
    }
    else {
      let packetAmounts = [];
      let t = 0;
      for (var j = 0; j < packetIndex.length; j++) {
        let cell = row.cells[sp + packetIndex[j]];
        let txt = cell.textContent;
        packetAmounts[j] = parseInt(txt);
        t += packetAmounts[j] * packetPops[j];
      }
      let toSend = [];
      let sent = 0;
      for (var j = 0; j < packetAmounts.length; j++) {
        toSend[j] = parseInt(packetSize * packetAmounts[j] * 1.0 / t);
        sent += toSend[j] * packetPops[j];
      }
      let d = 100;
      while (sent < packetSize && d--) {
        let k = 0;
        while (packetPops[k] == 1 && (toSend[k] < packetAmounts[k])) {
          toSend[k++]++;
          sent++;
          if (sent == packetSize)
            break;
        }
      }
      let s = '';

      for (var j = 0; j < toSend.length; j++) {
        s += '&' + units[packetIndex[j]] + '=' + toSend[j].toString();
      }
      row.lastElementChild.previousElementSibling.innerHTML = '<a href="' + row.cells[1].firstElementChild.firstElementChild.firstElementChild.href.replace('overview', 'place') + '"><span class="label">Send</span></a>';
      row.lastElementChild.previousElementSibling.firstElementChild.href += s;


      /*------max packets--------*/



      packetAmounts = [];
      t = 0;
      let pcktNumber = parseInt(row.cells[w - 2 - hasRun].innerHTML);
      let pcktSize = packetSize * pcktNumber;
      for (var j = 0; j < packetIndex.length; j++) {
        let cell = row.cells[sp + packetIndex[j]];
        let txt = cell.textContent;
        packetAmounts[j] = parseInt(txt);
        t += packetAmounts[j] * packetPops[j];
      }
      toSend = [];
      sent = 0;
      for (var j = 0; j < packetAmounts.length; j++) {
        toSend[j] = parseInt(pcktSize * packetAmounts[j] * 1.0 / t);
        sent += toSend[j] * packetPops[j];
      }
      d = 100;
      while (sent < pcktSize && d--) {
        let k = 0;
        while (packetPops[k] == 1 && (toSend[k] < packetAmounts[k])) {
          toSend[k++]++;
          sent++;
          if (sent == packetSize)
            break;
        }
      }
      s = '';

      for (var j = 0; j < toSend.length; j++)
        s += '&' + units[packetIndex[j]] + '=' + toSend[j].toString();
      row.lastElementChild.innerHTML = '<a href="' + row.cells[1].firstElementChild.firstElementChild.firstElementChild.href.replace('overview', 'place') + '"><span class="label">Send ' + pcktNumber + ' Packet(s)</span></a>';
      row.lastElementChild.firstElementChild.href += s;
    }



  }
  let spd = getSpeedConstant();
  for (var i = 1; i < dlen + 1; i++) {
    for (var j = 0; j < u; j++) {
      let cell = rows[i].cells[j + sp];
      cell.style["text-align"] = "center";
      let duration = getTime(Math.round(dist[i - 1].dist * speeds[units[j]] * 60 / spd / (sig || 0)));
      if (document.getElementById("durationprox").checked)
        cell.innerHTML += "<br><b>" + duration + "</b>";
      if (document.getElementById("arrivalprox").checked)
        cell.innerHTML += "<br><span>" + parseDate(currentTime, duration) + "</span>";


    }
  }
  getVillageId(document.getElementById('target_coord').value);
  hasRun = 1;
  document.getElementById("combined_table").rows[0].cells[1].childNodes[1].nodeValue = " (" + villageCount + ")";
  console.timeEnd("prox");
}






(function () {
  if (document.getElementById('min_pop')) return;
  let url = window.location.href;
  if (!url.includes("screen=overview_villages")) {
    if (url.includes("info_village")) {
      localStorage.setItem('target_coord', window.location.href.match(/\d\d\d;\d\d\d/)[0].replace(';', '|'));
      url = url.replace(/&id=.+/, '').replace(/#\d\d\d;\d\d\d/, '');
      url += '&screen=overview_villages&mode=combined';
      window.open(url, "_self");
      return;
    }
    else if (url.includes("screen=place")) {
      let co = localStorage.getItem('target_coord').split('|');
      document.forms[0].x.value = co[0];
      document.forms[0].y.value = co[1];
      $('#place_target').find('input').val(co[0] + '|' + co[1]);
      return;
    }
    else if (url.includes("screen=overview")) {
      let c = document.getElementById("menu_row2").children;
      localStorage.setItem('target_coord', c[c.length - 2].textContent.match(/\d+\|\d+/)[0]);
      url += '&screen=overview_villages&mode=combined';
      window.open(url, "_self");
      return;
    }
  }
  if (!document.getElementById("combined_table")) {
    alert("Run from either Village Details, Combined Overview, or Rally Point. Redirecting...");
    window.open(url + "&screen=overview_villages&mode=combined", "_self");
    return;
  }
  console.log(document.getElementById("combined_table"));

  initTemplates();


  const table = document.createElement('table');
  let str = '<table><tbody><tr>';

  str += '<th style="text-align: center">Target:</th>';

  str += '<th>Min Pop:</th>';
  str += '<th>Packet Size:</th>';
  str += '<th>Sigil:</th>';
  str += '<th>Packets:</th>';
  str += '<th>HC/Packet:</th>';

  str += '<th class="fm_unit" style="width:30px;text-align:center"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/unit/unit_spear.png"></th>';
  str += '<th class="fm_unit" style="width:30px;text-align:center"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/unit/unit_sword.png"></th>';
  if (hasArcher)
    str += '<th class="fm_unit" style="width:30px;text-align:center"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/unit/unit_archer.png"></th>';
  str += '<th class="fm_unit" style="width:30px;text-align:center"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/unit/unit_heavy.png"></th>';
  str += '<th style="text-align:right">Arrival Time: <input id="arrivalprox" type="checkbox" onclick="localStorage.setItem(\'arrivalprox\',this.checked);forceTime()"></th>';
  str += '<td rowspan="2"><input class="btn" type="button" value="Go" onclick="fnCalculateProximity()" style="width: 50px"></td>';
  str += '<td rowspan="2"><input class="btn" id="hider" type="button" value="Hide Troops" onclick="hideTroops()"></td>';
  str += '</tr><tr>';

  str += '<td style="text-align:center"><input value="500|500" class="input-nicer" size="3" onfocus="this.select()" id="target_coord"></td>';
  str += '<td style="text-align:center"><input id="min_pop" class="input-nicer" value="1" onfocus="this.select()" onchange="localStorage.setItem(\'min_pop\', this.value)" size="3"></td>';
  str += '<td style="text-align:center"><input id="packetsize" type="text" class="input-nicer" size="5" value="' + (localStorage.getItem("packetsize") ? localStorage.getItem("packetsize") : "1000") + '" onchange="localStorage.setItem(\'packetsize\',parseInt(this.value))"></td>';
  str += '<td style="text-align:center"><input id="sigil" type="text" class="input-nicer" size="5" onchange="localStorage.setItem(\'prox_sigil\',parseInt(this.value))"></td>';
  str += '<td style="text-align:center"><input id="packets" type="checkbox" onchange="packets()"></td>';


  str += '<td style="text-align:center"><input id="heavydensity" type="text" class="input-nicer" size="4" value="' + (localStorage.getItem("heavydensity") ? localStorage.getItem("heavydensity") : "250") + '" onchange="localStorage.setItem(\'heavydensity\',parseInt(this.value))"></td>';
  str += '<td style="text-align:center"><input type="checkbox" id="spearpackets" onclick="localStorage.setItem(\'spearpackets\', this.checked)"></td>';
  str += '<td style="text-align:center"><input type="checkbox" id="swordpackets" onclick="localStorage.setItem(\'swordpackets\', this.checked)"></td>';
  if (hasArcher)
    str += '<td style="text-align:center"><input type="checkbox" id="archerpackets" onclick="localStorage.setItem(\'archerpackets\', this.checked)"></td>';
  str += '<td style="text-align:center"><input type="checkbox" id="heavypackets" onclick="localStorage.setItem(\'heavypackets\', this.checked)"></td>';
  str += '<th style="text-align:right">Duration:<input id="durationprox" type="checkbox" onclick="localStorage.setItem(\'durationprox\',this.checked);forceTime()"></th>';
  str += '</tr></tbody></table>';

  table.innerHTML = str;
  const table2 = document.createElement('table');
  /*----Filters----*/

  str = '<table style="float: right"><tbody><tr style="display: table-row">';

  for (var i = 0; i < u - 1 - hasPal; i++)
    str += '<th class="fm_unit" style="width:50px;text-align:center"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/unit/unit_' + units[i] + '.png"><input type="checkbox" id="' + units[i] + 'prox" style="float:right" onclick="toggleFilter(\'' + units[i] + '\')">';
  if (hasPal)
    str += '<th rowspan="2" class="fm_unit" style="width:50px;text-align:center"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/unit/unit_knight.png"><input type="checkbox" id="knightprox" onclick="localStorage.setItem(\'knightprox\', this.checked)" style="float:right">';
  str += '<th class="fm_unit" style="width:50px;text-align:center"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/unit/unit_snob.png"><input type="checkbox" id="snobprox" onclick="localStorage.setItem(\'snobprox\', this.checked)" style="float:right">';

  str += '<td >Filters:</td>';
  str += '<td style="text-align: right"><select id="filter_template" style="width: 100%" onchange="loadTemplate(this.selectedOptions[0].textContent, \'filter\')"></select></td>';
  str += '<td><input class="btn" type="button" value="Delete" onclick="deleteTemplate(document.getElementById(\'filter_template\').selectedOptions[0].textContent,\'filter\')" style="width: 100%"></td>';


  str += '</tr><tr style="display: table-row">';

  for (var i = 0; i < u - 1 - hasPal; i++)
    str += '<td><input id="' + units[i] + 'proxamt" value="0" type="text" maxlength="5" max="99999" onchange="localStorage.setItem(\'' + units[i] + 'proxamt\',this.value)" class="unitsInput input-nicer" style="text-align: center"></td>';
  str += '<td><input class="btn" type="button" value="Clear" onclick="loadTemplate(\'Blank Template\',\'filter\')"></td>';

  str += '<td>New:</td>';
  str += '<td><input id="filter_name" class="text-input" size="14" onfocus="this.select()"></td>';
  str += '<td><input class="btn" type="button" value="Save" onclick="saveTemplate(document.getElementById(\'filter_name\').value,\'filter\')" style="width: 100%"></td>';
  str += '</tr></tbody></table>';

  /*----Troops----*/

  str += '<table><tbody><tr style="display: table-row">';

  for (var i = 0; i < u - 1 - hasPal; i++)
    str += '<th class="fm_unit" style="width:50px;text-align:center"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/unit/unit_' + units[i] + '.png"><input type="checkbox" id="' + units[i] + 'sendall" style="float:right" onclick="toggleTroop(\'' + units[i] + '\')">';
  if (hasPal)
    str += '<th rowspan="2" class="fm_unit" style="width:50px;text-align:center"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/unit/unit_knight.png"><input type="checkbox" id="knightsendall" onclick="localStorage.setItem(\'knightsendall\', this.checked)" style="float:right">';
  str += '<th class="fm_unit" style="width:50px;text-align:center"><img src="https://dsen.innogamescdn.com/asset/1d2499b/graphic/unit/unit_snob.png"><input type="checkbox" id="snobsendall" onclick="localStorage.setItem(\'snobsendall\', this.checked)" style="float:right">';

  str += '<td>Troops:</td>';
  str += '<td style="text-align: right"><select id="troop_template" style="width: 100%" onchange="loadTemplate(this.selectedOptions[0].textContent, \'troop\')"></select></td>';
  str += '<td><input class="btn" type="button" value="Delete" onclick="deleteTemplate(document.getElementById(\'troop_template\').selectedOptions[0].textContent,\'troop\')" style="width: 100%"></td>';

  str += '</tr><tr style="display: table-row">';

  for (var i = 0; i < u - 1 - hasPal; i++)
    str += '<td><input id="' + units[i] + 'sendamt" value="0" type="text" maxlength="5" max="99999" onchange="localStorage.setItem(\'' + units[i] + 'sendamt\',this.value)" class="unitsInput input-nicer" style="text-align: center"></td>';
  str += '<td><input class="btn" type="button" value="Clear" onclick="loadTemplate(\'Blank Template\',\'troop\')"></td>';

  str += '<td>New:</td>';
  str += '<td><input id="troop_name" class="text-input" size="14" onfocus="this.select()"></td>';
  str += '<td><input class="btn" type="button" value="Save" onclick="saveTemplate(document.getElementById(\'troop_name\').value,\'troop\')" style="width: 100%"></td>';

  str += '</tr></tbody></table>';

  table2.innerHTML = str;

  b.prepend(table2);
  b.prepend(table);

  document.getElementById('target_coord').value =
    localStorage.getItem('target_coord') || '500|500';
  document.getElementById('min_pop').value =
    localStorage.getItem('min_pop') || '1';

  for (var i = 0; i < u; i++)
    document.getElementById(units[i] + 'prox').checked = localStorage.getItem(units[i] + 'prox') === 'true';

  for (var i = 0; i < u - 1 - hasPal; i++)
    document.getElementById(units[i] + 'proxamt').value = localStorage.getItem(units[i] + 'proxamt') ? localStorage.getItem(units[i] + 'proxamt') : '0';

  for (var i = 0; i < u; i++)
    document.getElementById(units[i] + 'sendall').checked = localStorage.getItem(units[i] + 'sendall') === 'true';

  for (var i = 0; i < u - 1 - hasPal; i++)
    document.getElementById(units[i] + 'sendamt').value = (localStorage.getItem(units[i] + 'sendamt') ? localStorage.getItem(units[i] + 'sendamt') : '0');
  if (localStorage.getItem('hide_troops') === 'true')
    hideTroops();
  else if (localStorage.getItem('packets') == 'false')
    showTroops();
  updateFilters();
  updateTroops();
  document.getElementById("packets").checked = localStorage.getItem("packets") == "true";
  packets();
  document.getElementById('spearpackets').checked = localStorage.getItem('spearpackets') == 'true';
  document.getElementById('swordpackets').checked = localStorage.getItem('swordpackets') == 'true';
  if (hasArcher)
    document.getElementById('archerpackets').checked = localStorage.getItem('archerpackets') == 'true';
  document.getElementById('heavypackets').checked = localStorage.getItem('heavypackets') == 'true';
  document.getElementById("arrivalprox").checked = localStorage.getItem("arrivalprox") == "true";
  if (!localStorage.getItem("durationprox"))
    localStorage.setItem("durationprox", "true");
  document.getElementById("durationprox").checked = localStorage.getItem("durationprox") == "true";
  document.getElementById("sigil").value = localStorage.getItem("prox_sigil") ? localStorage.getItem("prox_sigil") : '0';
  forceTime();
})();


