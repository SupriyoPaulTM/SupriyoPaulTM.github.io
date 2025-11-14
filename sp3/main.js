/* -------------------------------
   ELEMENTS
-------------------------------- */
const bodyEl = document.getElementById('main') || document.body;
const themeToggleBtn = document.getElementById('theme-toggle');
const backToTopBtn = document.getElementById('b2t-btn');

/* -------------------------------
   DEFAULT THEME (Dark First)
-------------------------------- */
if (!bodyEl.classList.contains('theme-dark') &&
    !bodyEl.classList.contains('theme-light')) {
  bodyEl.classList.add('theme-dark');
}

/* -------------------------------
   THEME TOGGLE (Sliding Switch)
-------------------------------- */
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    const isDark = bodyEl.classList.contains('theme-dark');

    if (isDark) {
      bodyEl.classList.remove('theme-dark');
      bodyEl.classList.add('theme-light');
      themeToggleBtn.setAttribute('aria-pressed', 'false');
    } else {
      bodyEl.classList.remove('theme-light');
      bodyEl.classList.add('theme-dark');
      themeToggleBtn.setAttribute('aria-pressed', 'true');
    }
  });
}

/* -------------------------------
   BACK TO TOP BUTTON
-------------------------------- */
function toggleBackToTop() {
  const scrolled =
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  if (scrolled > 180) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
}

/* Show button on scroll */
window.addEventListener('scroll', toggleBackToTop);

/* Run once on load */
toggleBackToTop();

/* Smooth scroll */
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
