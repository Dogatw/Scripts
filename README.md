javascript:$.getScript('https://raw.githack.com/Dogatw/Scripts/main/mstimer.js')
https://combinatronics.com/Dogatw/Scripts/main/fake.js


  let myScript = document.createElement("script");
myScript.setAttribute("src", "https://raw.githack.com/Dogatw/Scripts/main/mstimer.js");
document.body.appendChild(myScript);


(async () => {
  const code = await (await fetch("https://raw.githack.com/Dogatw/Scripts/main/troopsupload.js")).text();
  eval(code);
})();
