const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

if (btn && menu) {
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();