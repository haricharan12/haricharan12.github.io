// =========================================================
// Haricharan S — Portfolio
// All event binding uses addEventListener (no inline handlers)
// so the page can run under a strict script-src CSP.
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRevealOnScroll();
  initNavBurger();
});

/* ---------------- Theme ---------------- */
function initTheme() {
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle.querySelector('i');

  const saved = safeGet('theme');
  if (saved === 'light') {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    icon.className = 'fas fa-moon';
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    const isLight = body.classList.contains('light-mode');
    icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
    safeSet('theme', isLight ? 'light' : 'dark');
  });
}

function safeGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function safeSet(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}

/* ---------------- Scroll reveal ---------------- */
function initRevealOnScroll() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 6, 5) * 60}ms`;
    observer.observe(el);
  });
}

/* ---------------- Mobile nav ---------------- */
function initNavBurger() {
  const burger = document.getElementById('nav-burger');
  const nav = document.getElementById('main-nav');

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

