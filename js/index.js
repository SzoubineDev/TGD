// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Check for saved theme preference or use system preference
if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
} else {
  document.documentElement.classList.remove('dark');
  themeIcon.classList.remove('fa-sun');
  themeIcon.classList.add('fa-moon');
}

themeToggle.addEventListener('click', function () {
  themeIcon.classList.toggle('fa-moon');
  themeIcon.classList.toggle('fa-sun');
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
  }
});

// Active Navigation Highlighter
function highlightActiveNav() {
  const currentPage = window.location.pathname.split('/').pop();
  const allNavItems = document.querySelectorAll('nav a');

  allNavItems.forEach(item => {
    item.classList.remove('text-primary', 'dark:text-secondary', 'font-semibold');
    item.classList.add(
      'text-gray-600',
      'dark:text-gray-300',
      'hover:text-primary',
      'dark:hover:text-secondary'
    );
  });

  function applyActiveStyles(element) {
    element.classList.remove(
      'text-gray-600',
      'dark:text-gray-300',
      'hover:text-primary',
      'dark:hover:text-secondary'
    );
    element.classList.add('text-primary', 'dark:text-secondary', 'font-semibold');
  }

  allNavItems.forEach(item => {
    const href = item.getAttribute('href');
    if (
      (currentPage === 'index.html' || currentPage === '' || currentPage === '/') &&
      href === 'index.html'
    ) {
      applyActiveStyles(item);
      return;
    }
    if (href === currentPage) {
      applyActiveStyles(item);
    }
  });
}

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });
}

// Enhanced Language Manager with Module Support
class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem('preferred-language') || 'en';
    this.translations = {
      en: {},
      fr: {},
      ar: {},
    };
    this.pageTranslations = {};
    this.init();
  }

  async init() {
    await this.loadPageTranslations();
    this.setupEventListeners();
    this.applyLanguage(this.currentLang);
  }
  async loadPageTranslations() {
    const currentPage = this.getCurrentPage();
    console.log('🔄 Loading translations for:', currentPage);

    // Better base path detection
    const getBasePath = () => {
      // If we're on localhost
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return '.';
      }

      // If we're on GitHub Pages, the base path is usually the repo name
      // Try to detect if we're in a subdirectory
      const path = window.location.pathname;
      if (path.includes('/TGD/') || path.includes('/thegreatdebaters/')) {
        return '/TGD';
      }

      // Default to root
      return '';
    };

    const basePath = getBasePath();
    console.log('📍 Base path detected:', basePath);
    console.log('📁 Full URL:', window.location.href);

    try {
      // Test multiple path strategies
      const pathsToTry = [
        `${basePath}/js/translations/common.js`,
        `${basePath}/translations/common.js`,
        `/js/translations/common.js`,
        `./js/translations/common.js`,
        `js/translations/common.js`,
      ];

      let commonLoaded = false;

      for (const path of pathsToTry) {
        try {
          console.log('🔍 Trying path:', path);
          const { commonTranslations } = await import(path);
          this.addTranslations(commonTranslations);
          console.log('✅ Common translations loaded from:', path);
          commonLoaded = true;
          break;
        } catch (e) {
          console.log('❌ Failed:', path, e.message);
        }
      }

      if (!commonLoaded) {
        console.error('🚨 Could not load common translations from any path');
        return;
      }

      // Load page-specific translations
      const pagePaths = [
        `${basePath}/js/translations/${currentPage}.js`,
        `${basePath}/translations/${currentPage}.js`,
        `/js/translations/${currentPage}.js`,
        `./js/translations/${currentPage}.js`,
        `js/translations/${currentPage}.js`,
      ];

      let pageLoaded = false;

      for (const path of pagePaths) {
        try {
          console.log('🔍 Trying page path:', path);
          const pageModule = await import(path);
          this.addTranslations(pageModule.pageTranslations);
          console.log('✅ Page translations loaded from:', path);
          pageLoaded = true;
          break;
        } catch (e) {
          console.log('❌ Page load failed:', path, e.message);
        }
      }

      if (!pageLoaded) {
        console.warn('⚠️ Could not load page-specific translations');
      }
    } catch (error) {
      console.error('💥 CRITICAL ERROR:', error);
    }
  }
  getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    console.log('Current page:', page); // Debug line

    // Map pages to translation files
    if (page === 'index.html' || page === '' || page === '/') return 'home';
    if (page === 'about.html') return 'about';
    if (page === 'team.html') return 'team';
    if (page === 'latestEvents.html') return 'latestEvents';

    return 'home'; // default
  }

  setupEventListeners() {
    const langToggle = document.getElementById('lang-toggle');
    const langDropdown = document.getElementById('lang-dropdown');
    const langOptions = document.querySelectorAll('.lang-option');

    if (langToggle && langDropdown) {
      langToggle.addEventListener('click', e => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
      });
    }

    langOptions.forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.dataset.lang;
        this.switchLanguage(lang);
        if (langDropdown) langDropdown.classList.remove('show');
      });
    });

    document.addEventListener('click', () => {
      if (langDropdown) langDropdown.classList.remove('show');
    });
  }

  async switchLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem('preferred-language', lang);

    // Reload translations for the new language
    await this.loadPageTranslations();
    this.applyLanguage(lang);
    this.updateActiveState();
    this.showLanguageFeedback(lang);
  }

  applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');

    elements.forEach(element => {
      const key = element.dataset.translate;
      if (this.translations[lang] && this.translations[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = this.translations[lang][key];
        } else {
          element.textContent = this.translations[lang][key];
        }
      }
    });

    const currentLangElement = document.getElementById('current-lang');
    if (currentLangElement) {
      currentLangElement.textContent = lang.toUpperCase();
    }

    this.updateDocumentDirection(lang);
    this.updateDynamicContent(lang);
  }

  updateDocumentDirection(lang) {
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
      document.body.classList.add('rtl');
      document.body.classList.remove('ltr');
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = lang;
      document.body.classList.add('ltr');
      document.body.classList.remove('rtl');
    }
  }

  updateDynamicContent(lang) {
    console.log(`Language switched to: ${lang}`);
  }

  updateActiveState() {
    const langOptions = document.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
      option.classList.remove('active');
      if (option.dataset.lang === this.currentLang) {
        option.classList.add('active');
      }
    });
  }

  showLanguageFeedback(lang) {
    const feedback = document.createElement('div');
    feedback.className =
      'fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-opacity duration-300';
    feedback.textContent = `Language changed to ${this.getLanguageName(lang)}`;
    document.body.appendChild(feedback);

    setTimeout(() => {
      feedback.style.opacity = '0';
      setTimeout(() => document.body.removeChild(feedback), 300);
    }, 2000);
  }

  getLanguageName(lang) {
    const names = { en: 'English', fr: 'Français', ar: 'العربية' };
    return names[lang] || lang;
  }

  addTranslations(newTranslations) {
    Object.keys(newTranslations).forEach(lang => {
      if (!this.translations[lang]) {
        this.translations[lang] = {};
      }
      Object.assign(this.translations[lang], newTranslations[lang]);
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  highlightActiveNav();
  window.languageManager = new LanguageManager();
});
