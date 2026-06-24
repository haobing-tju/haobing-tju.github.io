(function () {
  const btn = document.getElementById('langToggle');
  const saved = localStorage.getItem('site-lang') || 'en';
  function setLang(lang) {
    document.body.classList.toggle('zh', lang === 'zh');
    if (btn) btn.textContent = lang === 'zh' ? 'English' : '中文';
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    localStorage.setItem('site-lang', lang);
  }
  setLang(saved);
  if (btn) {
    btn.addEventListener('click', function () {
      setLang(document.body.classList.contains('zh') ? 'en' : 'zh');
    });
  }
  const menu = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (menu && links) {
    menu.addEventListener('click', function () { links.classList.toggle('open'); });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }
})();
