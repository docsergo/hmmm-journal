/* H'MMM Journal — Shared JavaScript */

// ── Custom Cursor ──
const cursor = document.getElementById('cursor');
if (cursor) {
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });
  const hoverTargets = 'a, button, .disc-card, .cluster-card, .pill, .btn, .article-card, .board-card, .arch-card, .contact-box, .founder-card, .sidebar-card';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('h'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('h'));
  });
}

// ── Scroll Reveal ──
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      setTimeout(() => en.target.classList.add('visible'), 80);
      revealObs.unobserve(en.target);
    }
  });
}, { threshold: 0.07 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── Mobile Nav ──
const burger   = document.getElementById('nav-burger');
const mobileNav = document.getElementById('mobile-nav');
if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  // Close on link click
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}
