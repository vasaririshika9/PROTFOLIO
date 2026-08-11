/* ==========================================================================
   DEVELOPER PORTFOLIO - JAVASCRIPT LOGIC
   Navbar, Animations, Scroll Spy, Typing Effect, Theme Toggle & Form Handling
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive modules
  initThemeToggle();
  initNavbarScroll();
  initMobileMenu();
  initTypingEffect();
  initScrollReveal();
  initScrollSpy();
  initBackToTop();
  initContactForm();
  initCertModal();
  setCurrentYear();
});

/* --------------------------------------------------------------------------
   1. THEME TOGGLE (DARK / LIGHT MODE)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle');
  if (!themeBtn) return;

  const themeIcon = themeBtn.querySelector('i');
  
  // Check saved preference or default to dark
  const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme, themeIcon);

  themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    updateThemeIcon(newTheme, themeIcon);
  });
}

function updateThemeIcon(theme, iconElement) {
  if (!iconElement) return;
  if (theme === 'light') {
    iconElement.className = 'fa-solid fa-moon';
  } else {
    iconElement.className = 'fa-solid fa-sun';
  }
}

/* --------------------------------------------------------------------------
   2. NAVBAR SCROLL STYLING
   -------------------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
}

/* --------------------------------------------------------------------------
   3. MOBILE NAVIGATION MENU
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburgerBtn || !navMenu) return;

  const toggleMenu = () => {
    hamburgerBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  };

  hamburgerBtn.addEventListener('click', toggleMenu);

  // Close menu when clicking links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. DYNAMIC TYPING EFFECT (HERO SECTION)
   -------------------------------------------------------------------------- */
function initTypingEffect() {
  const typedTextSpan = document.querySelector('.typed-text');
  if (!typedTextSpan) return;

  const titles = [
    'Full-Stack Developer',
    'Java Specialist',
    'Problem Solver',
    'Web Application Developer'
  ];

  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const newTitleDelay = 1800;

  function type() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      typedTextSpan.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextSpan.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting = true;
      setTimeout(type, newTitleDelay);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
    }
  }

  type();
}

/* --------------------------------------------------------------------------
   5. INTERSECTION OBSERVER - SCROLL REVEAL
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        observer.unobserve(entry.target); // Reveal once
      }
    });
  }, observerOptions);

  revealElements.forEach(el => revealObserver.observe(el));
}

/* --------------------------------------------------------------------------
   6. SCROLL SPY (ACTIVE NAVBAR HIGHLIGHT)
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   8. CONTACT FORM UI & MAILTO HANDLER
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const formAlert = document.getElementById('form-alert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('form-name')?.value.trim();
    const email = document.getElementById('form-email')?.value.trim();
    const subject = document.getElementById('form-subject')?.value.trim();
    const message = document.getElementById('form-message')?.value.trim();

    if (!name || !email || !message) {
      showFormAlert('Please complete all required fields.', 'error');
      return;
    }

    // Prepare mailto link for direct static contact email
    const recipientEmail = '24R21A0564@MLRIT.AC.IN';
    const mailtoSubject = encodeURIComponent(subject || `Portfolio Message from ${name}`);
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    const mailtoUrl = `mailto:${recipientEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    // Open default mail client
    window.location.href = mailtoUrl;

    showFormAlert('Thank you! Your default email client has been opened with your message ready to send.', 'success');
    form.reset();
  });
}

function showFormAlert(msg, type) {
  const formAlert = document.getElementById('form-alert');
  if (!formAlert) return;

  formAlert.textContent = msg;
  formAlert.style.display = 'block';
  formAlert.style.padding = '0.85rem 1.2rem';
  formAlert.style.borderRadius = '8px';
  formAlert.style.marginBottom = '1.25rem';
  formAlert.style.fontSize = '0.9rem';
  formAlert.style.fontWeight = '600';

  if (type === 'success') {
    formAlert.style.background = 'rgba(16, 185, 129, 0.15)';
    formAlert.style.color = '#10b981';
    formAlert.style.border = '1px solid rgba(16, 185, 129, 0.3)';
  } else {
    formAlert.style.background = 'rgba(244, 63, 94, 0.15)';
    formAlert.style.color = '#f43f5e';
    formAlert.style.border = '1px solid rgba(244, 63, 94, 0.3)';
  }

  setTimeout(() => {
    formAlert.style.display = 'none';
  }, 5000);
}

/* --------------------------------------------------------------------------
   9. SET CURRENT COPYRIGHT YEAR
   -------------------------------------------------------------------------- */
function setCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* --------------------------------------------------------------------------
   10. CERTIFICATE LIGHTBOX MODAL
   -------------------------------------------------------------------------- */
function initCertModal() {
  const openBtns = document.querySelectorAll('.view-cert-btn, .cert-image-container');
  const modal = document.getElementById('cert-modal');
  const closeBtn = document.getElementById('cert-modal-close');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

