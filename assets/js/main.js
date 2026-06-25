(function () {
const btn = document.getElementById('langToggle');
const saved = localStorage.getItem('site-lang') || 'en';

function setLang(lang) {
const isZh = lang === 'zh';

document.body.classList.toggle('zh', isZh);
document.body.classList.toggle('en', !isZh);

if (btn) {
  btn.textContent = isZh ? 'English' : '中文';
}

document.documentElement.lang = isZh ? 'zh-CN' : 'en';
localStorage.setItem('site-lang', isZh ? 'zh' : 'en');

}

setLang(saved);

if (btn) {
btn.addEventListener('click', function () {
const currentLang = document.body.classList.contains('zh') ? 'zh' : 'en';
setLang(currentLang === 'zh' ? 'en' : 'zh');
});
}

const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

if (menu && links) {
menu.addEventListener('click', function () {
links.classList.toggle('open');
});

links.querySelectorAll('a').forEach(function (a) {
  a.addEventListener('click', function () {
    links.classList.remove('open');
  });
});


}
})();
