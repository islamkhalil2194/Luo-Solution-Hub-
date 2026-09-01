// Mobile navigation toggle.
// We grab the button and the nav by their IDs (set in the HTML),
// then flip a CSS class + the aria-expanded attribute on click.
// aria-expanded tells screen readers whether the menu is open —
// it's not just decorative, it's part of making the site accessible.

const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}
