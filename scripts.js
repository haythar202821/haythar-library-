document.addEventListener('DOMContentLoaded', () => {
  // ၁။ Mobile Nav Toggle
  const nav = document.querySelector('.nav');
  if (nav) {
    const toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.innerHTML = '☰';
    nav.parentNode.insertBefore(toggle, nav);

    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.innerHTML = nav.classList.contains('open') ? '✕' : '☰';
    });
  }

  // ၂။ Smooth Scroll
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (link && link.getAttribute('href') !== '#') {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  // ၃။ Auto Update Year
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});