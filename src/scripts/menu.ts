const header = document.querySelector<HTMLElement>('[data-site-header]');
const toggle = document.querySelector<HTMLButtonElement>('.mobile-menu-toggle');
const nav = document.querySelector<HTMLElement>('#primary-navigation');

if (header && toggle && nav) {
  const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
  const openLabel = toggle.dataset.openLabel ?? 'Close menu';
  const closedLabel = toggle.dataset.closedLabel ?? 'Open menu';

  const setMenuState = (isOpen: boolean) => {
    toggle.setAttribute('aria-expanded', String(isOpen));
    const screenReaderLabel = toggle.querySelector<HTMLElement>('.sr-only');
    if (screenReaderLabel) screenReaderLabel.textContent = isOpen ? openLabel : closedLabel;
    nav.toggleAttribute('data-menu-open', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
    if (isOpen) {
      nav.querySelector<HTMLElement>(focusableSelector)?.focus();
    } else {
      toggle.focus();
    }
  };

  toggle.addEventListener('click', () => setMenuState(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenuState(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
    }
    if (event.key === 'Tab' && toggle.getAttribute('aria-expanded') === 'true') {
      const focusable = Array.from(nav.querySelectorAll<HTMLElement>(focusableSelector));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (toggle.getAttribute('aria-expanded') === 'true' && target instanceof Node && !header.contains(target)) {
      setMenuState(false);
    }
  });
  window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 18), { passive: true });
}
