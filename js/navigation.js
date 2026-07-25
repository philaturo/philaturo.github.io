// =========================================
// NAVIGATION INJECTION
// =========================================

// Detect if the current page is inside the /initiatives/ directory
const isInInitiatives = window.location.pathname.includes('/initiatives/');
const base = isInInitiatives ? '../' : '';

const navHTML = `
  <nav class="navbar">
    <div class="container nav-container">
      <a href="${base}index.html" class="nav-brand">Phil Aturo</a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
      <ul class="nav-menu" id="navMenu">
        <li><a href="${base}about.html" class="nav-link">About</a></li>
        <li><a href="${base}work.html" class="nav-link">Work</a></li>
        <li><a href="${base}writing.html" class="nav-link">Writing</a></li>
        <li><a href="${base}timeline.html" class="nav-link">Timeline</a></li>
        <li><a href="${base}contact.html" class="nav-link">Contact</a></li>
      </ul>
    </div>
  </nav>
`;

export function injectNavigation() {
  const navMount = document.getElementById('nav-mount');
  if (navMount) {
    navMount.innerHTML = navHTML;
  }

  // Mobile Nav Toggle
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('active');
    });
  }

  // Active Link Highlighting
  // Extract just the filename (e.g., 'zonebridge.html' or 'about.html') to match correctly regardless of directory depth
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  document.querySelectorAll('.nav-link').forEach(link => {
    // Extract the filename from the href attribute (which may now include '../')
    const linkPath = link.getAttribute('href').split('/').pop();
    if (linkPath === currentPath) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}
