// ===== Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Theme toggle (persists) =====
const themeBtn = document.getElementById('themeBtn');
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if (saved === 'light') { root.setAttribute('data-theme', 'light'); themeBtn.textContent = '\u2600'; }
themeBtn.addEventListener('click', () => {
  const isLight = root.getAttribute('data-theme') === 'light';
  if (isLight) { root.removeAttribute('data-theme'); themeBtn.textContent = '\u263D'; localStorage.setItem('theme','dark'); }
  else { root.setAttribute('data-theme','light'); themeBtn.textContent = '\u2600'; localStorage.setItem('theme','light'); }
});

// ===== Mobile menu =====
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger.addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// ===== Typing effect =====
const typing = document.getElementById('typing');
const roles = [
  'IT Technical Support Specialist',
  'Help Desk & Network Support',
  'CCNA | Microsoft 365 Admin',
  'Windows / Linux Systems'
];
let r = 0, c = 0, deleting = false;
function type() {
  const word = roles[r];
  typing.textContent = deleting ? word.slice(0, c--) : word.slice(0, c++);
  if (!deleting && c === word.length + 1) { deleting = true; setTimeout(type, 1600); return; }
  if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; }
  setTimeout(type, deleting ? 45 : 95);
}
type();

// ===== Scroll reveal =====
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== Animated counters =====
const counters = document.querySelectorAll('.num');
const cIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || '';
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const tick = () => {
      cur += step;
      if (cur >= target) { el.textContent = target + suffix; }
      else { el.textContent = cur + suffix; requestAnimationFrame(tick); }
    };
    tick();
    cIO.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(el => cIO.observe(el));

// ===== Scroll progress bar + back-to-top + nav shadow =====
const progressBar = document.getElementById('progressBar');
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progressBar.style.width = scrolled + '%';
  if (h.scrollTop > 400) topBtn.classList.add('show'); else topBtn.classList.remove('show');
});
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
