/* ================================================
   FAQ ACCORDION — smooth height via CSS grid trick
   faq-answer: grid-template-rows 0fr → 1fr
   faq-answer-inner: overflow:hidden (in CSS)
================================================ */
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-question');

  btn.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Close all items
    document.querySelectorAll('.faq-item').forEach(f => {
      f.classList.remove('active');
      f.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
    });

    // Open this one (toggle)
    if (!isActive) {
      item.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});


/* ================================================
   MOBILE MENU
================================================ */
const menuBtn  = document.getElementById('menu-btn');
const menuIcon = document.getElementById('menu-icon');
const mobileNav = document.getElementById('mobile-nav');

function closeMobileMenu() {
  if (!mobileNav) return;
  mobileNav.classList.remove('open');
  mobileNav.setAttribute('aria-hidden', 'true');
  if (menuBtn) {
    menuBtn.setAttribute('aria-expanded', 'false');
    menuIcon.className = 'fa-solid fa-bars';
  }
}

function openMobileMenu() {
  if (!mobileNav) return;
  mobileNav.classList.add('open');
  mobileNav.setAttribute('aria-hidden', 'false');
  if (menuBtn) {
    menuBtn.setAttribute('aria-expanded', 'true');
    menuIcon.className = 'fa-solid fa-xmark';
  }
}

if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = mobileNav.classList.contains('open');
    isOpen ? closeMobileMenu() : openMobileMenu();
  });

  // Close when any mobile nav link is clicked
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close when clicking outside the navbar
  document.addEventListener('click', e => {
    const navbar = document.getElementById('navbar');
    if (navbar && !navbar.contains(e.target)) {
      closeMobileMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMobileMenu();
  });
}


/* ================================================
   CONTACT FORM — inline validation, no alert()
================================================ */
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  const emailInput   = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const emailError   = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const submitBtn    = document.getElementById('submit-btn');
  const successEl    = document.getElementById('form-success');

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function showError(input, errorEl, msg) {
    input.classList.add('has-error');
    errorEl.textContent = msg;
    errorEl.classList.add('show');
  }

  function clearError(input, errorEl) {
    input.classList.remove('has-error');
    errorEl.textContent = '';
    errorEl.classList.remove('show');
  }

  // Live validation on blur
  emailInput.addEventListener('blur', () => {
    const val = emailInput.value.trim();
    if (val && EMAIL_RE.test(val)) clearError(emailInput, emailError);
  });

  messageInput.addEventListener('blur', () => {
    if (messageInput.value.trim().length >= 10) clearError(messageInput, messageError);
  });

  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    let valid = true;

    // Clear previous errors
    clearError(emailInput, emailError);
    clearError(messageInput, messageError);
    successEl.style.display = 'none';

    // Validate email
    const emailVal = emailInput.value.trim();
    if (!emailVal) {
      showError(emailInput, emailError, 'Please enter your email address.');
      valid = false;
    } else if (!EMAIL_RE.test(emailVal)) {
      showError(emailInput, emailError, 'Please enter a valid email (e.g. you@example.com).');
      valid = false;
    }

    // Validate message
    const msgVal = messageInput.value.trim();
    if (!msgVal) {
      showError(messageInput, messageError, 'Please enter a message.');
      valid = false;
    } else if (msgVal.length < 10) {
      showError(messageInput, messageError, 'Message must be at least 10 characters.');
      valid = false;
    }

    if (!valid) {
      // Focus first errored field
      const firstError = contactForm.querySelector('.has-error');
      if (firstError) firstError.focus();
      return;
    }

    // Simulate submission (replace with real API call as needed)
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin" aria-hidden="true"></i> Sending…';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane" aria-hidden="true"></i> Send Message';
      successEl.style.display = 'flex';
      contactForm.reset();
      successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 1200);
  });
}


/* ================================================
   SCROLL ANIMATIONS — IntersectionObserver
================================================ */
const animObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optional: unobserve after first reveal for performance
      animObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.animate-in').forEach(el => animObserver.observe(el));


/* ================================================
   STATS COUNTER ANIMATION
================================================ */
function animateCount(el, target, suffix, duration) {
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current = Math.round(target * eased);
    el.textContent = current >= 1000
      ? current.toLocaleString() + suffix
      : current + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.stat-item').forEach((item, i) => {
      const numEl = item.querySelector('.stat-number');
      if (!numEl || numEl.dataset.counted) return;
      numEl.dataset.counted = 'true';
      const target = parseInt(item.dataset.count, 10);
      const suffix = item.dataset.suffix || '';
      setTimeout(() => animateCount(numEl, target, suffix, 1600), i * 180);
    });
    statsObserver.unobserve(entry.target);
  });
}, { threshold: 0.25 });

const statsGrid = document.querySelector('.stats-grid');
if (statsGrid) statsObserver.observe(statsGrid);


/* ================================================
   NAVBAR — add shadow on scroll
================================================ */
const navbar = document.getElementById('navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}


/* ================================================
   SMOOTH SCROLL for anchor links
   (browsers without native scroll-behavior support)
================================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href').slice(1);
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});


/* ================================================
   HERO CAROUSEL — rotates every 6 seconds
================================================ */
const heroSlides = [
  {
    badge:       'Made for real moments',
    keyword:     'meaningful',
    desc:        'RelateAi helps you create <strong>heartfelt greetings</strong> with photos, songs, and personal touches — <strong>instantly, effortlessly</strong>, and for free.',
    cardTitle:   'Happy Birthday! 🎂',
    cardMsg:     'Wishing you endless joy and amazing moments! ❤️',
    cardHeaderBg:'linear-gradient(135deg, #fff5f3, #ffddd8)',
    cardImg:     'assets/1.jpg',
    musicTrack:  'Happy',
    musicArtist: 'Pharrell Williams'
  },
  {
    badge:       'Celebrate every occasion',
    keyword:     'special',
    desc:        'From weddings to anniversaries, RelateAi makes it effortless to send <strong>personalized greetings</strong> that truly resonate.',
    cardTitle:   'Happy Anniversary! 💍',
    cardMsg:     'Every day with you is a blessing. Here\'s to forever! 🥂',
    cardHeaderBg:'linear-gradient(135deg, #fff0f5, #ffd6e8)',
    cardImg:     'assets/3.jpg',
    musicTrack:  'Perfect',
    musicArtist: 'Ed Sheeran'
  },
  {
    badge:       'Zero friction, all heart',
    keyword:     'effortless',
    desc:        'Pick an occasion, add a personal touch, and share — <strong>no sign-up, no waiting</strong>. RelateAi does the heavy lifting so you can focus on what matters.',
    cardTitle:   'Eid Mubarak! 🌙',
    cardMsg:     'May this Eid bring peace, joy, and countless blessings! ✨',
    cardHeaderBg:'linear-gradient(135deg, #fffbf0, #ffecc0)',
    cardImg:     'assets/2.jpeg',
    musicTrack:  'Eid Medley',
    musicArtist: 'Various Artists'
  },
  {
    badge:       'Done in seconds',
    keyword:     'instant',
    desc:        'RelateAi generates <strong>beautiful, personalized greetings</strong> in under a minute — ready to share with just one tap.',
    cardTitle:   'Happy Holidays! 🎄',
    cardMsg:     'Wishing you warmth, laughter, and all the good things! 🎁',
    cardHeaderBg:'linear-gradient(135deg, #f0fff8, #c8f0de)',
    cardImg:     'assets/1.jpg',
    musicTrack:  'All I Want for Christmas',
    musicArtist: 'Mariah Carey'
  }
];

let heroIdx   = 0;
let heroTimer = null;

function goToHeroSlide(idx) {
  const slide  = heroSlides[idx];
  const card   = document.getElementById('hero-card');
  const header = document.getElementById('hero-card-header');
  const title  = document.getElementById('hero-card-title');
  const msg    = document.getElementById('hero-card-msg');
  const track  = document.getElementById('hero-music-track');
  const artist = document.getElementById('hero-music-artist');

  if (card) card.style.opacity = '0.6';

  setTimeout(() => {
    if (header) header.style.background = slide.cardHeaderBg;
    if (title)  title.textContent       = slide.cardTitle;
    if (msg)    msg.textContent         = slide.cardMsg;
    if (track)  track.textContent       = slide.musicTrack;
    if (artist) artist.textContent      = slide.musicArtist;
    const imgEl   = document.getElementById('hero-card-img');
    const thumbEl = document.getElementById('hero-music-thumb');
    if (imgEl)   imgEl.src   = slide.cardImg;
    if (thumbEl) thumbEl.src = slide.cardImg;
    if (card)    card.style.opacity = '1';
  }, 260);

  // Update dots
  document.querySelectorAll('.cdot').forEach((dot, i) => {
    const active = i === idx;
    dot.classList.toggle('active', active);
    dot.setAttribute('aria-selected', String(active));
  });

  heroIdx = idx;
}

function startHeroCarousel() {
  heroTimer = setInterval(() => {
    goToHeroSlide((heroIdx + 1) % heroSlides.length);
  }, 6000);
}

// Dot click
document.querySelectorAll('.cdot').forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(heroTimer);
    goToHeroSlide(i);
    startHeroCarousel();
  });
});

// Pause on hover
const heroVisualEl = document.querySelector('.hero-visual');
if (heroVisualEl) {
  heroVisualEl.addEventListener('mouseenter', () => clearInterval(heroTimer));
  heroVisualEl.addEventListener('mouseleave', startHeroCarousel);
}

startHeroCarousel();
