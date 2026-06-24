function applyLanguage(lang) {
  if (lang === 'zh') {
    document.body.classList.add('zh');
    document.documentElement.lang = 'zh-CN';
  } else {
    document.body.classList.remove('zh');
    document.documentElement.lang = 'en';
  }
  localStorage.setItem('site-language', lang);
}

function toggleLanguage() {
  const next = document.body.classList.contains('zh') ? 'en' : 'zh';
  applyLanguage(next);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('site-language') || 'en';
  applyLanguage(saved);
  const year = new Date().getFullYear();
  const yearEn = document.getElementById('year');
  const yearZh = document.getElementById('year-zh');
  if (yearEn) yearEn.textContent = year;
  if (yearZh) yearZh.textContent = year;
});
