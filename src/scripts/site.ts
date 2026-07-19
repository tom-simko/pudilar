const revealItems = document.querySelectorAll<HTMLElement>('.reveal');

const languagePreferenceKey = 'pudilar-language';
const languageLinks = document.querySelectorAll<HTMLAnchorElement>('[data-language-preference]');

languageLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const language = link.dataset.languagePreference;
    if (!language) return;
    try {
      window.localStorage.setItem(languagePreferenceKey, language);
    } catch {
      // Local storage may be unavailable in private browsing modes.
    }
  });
});

if ('IntersectionObserver' in window && revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px' },
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
