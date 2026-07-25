// =========================================
// APP INITIALIZATION
// =========================================

import { injectNavigation } from './navigation.js';
import { injectFooter } from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inject shared layout components
  injectNavigation();
  injectFooter();

  // Initialize scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });

  // Initialize Lucide Icons (if library is loaded)
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
