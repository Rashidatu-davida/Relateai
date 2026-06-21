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
   HERO CAROUSEL — sliding 3-card conveyor
================================================ */
const HC_IMGS = [
  'assets/1.png',
  'assets/2.png',
  'assets/3.png',
  'assets/4.png',
  'assets/5.png'
];
const HC_N = HC_IMGS.length;

// DOM pool — 3 reusable card elements
const hcPool = [
  document.getElementById('hc-0'),
  document.getElementById('hc-1'),
  document.getElementById('hc-2'),
];

// Which pool element occupies each slot: [leftSlot, centerSlot, rightSlot]
let hcSlots = [0, 1, 2];
// Which image index is in each slot: [left, center, right]
let hcImgs  = [HC_N - 1, 0, 1];

let hcTimer   = null;
let hcBusy    = false;

function hcSetPos(poolIdx, cls) {
  hcPool[poolIdx].className = 'hc-item ' + cls;
}

function hcSetImg(poolIdx, imgIdx) {
  hcPool[poolIdx].querySelector('img').src = HC_IMGS[imgIdx];
}

function hcUpdateDots(centerImgIdx) {
  document.querySelectorAll('.cdot').forEach((dot, i) => {
    dot.classList.toggle('active', i === centerImgIdx);
    dot.setAttribute('aria-selected', String(i === centerImgIdx));
  });
}

function hcAdvance() {
  if (hcBusy) return;
  hcBusy = true;

  const [L, C, R] = hcSlots;
  const newImgIdx  = (hcImgs[2] + 1) % HC_N;

  // Step 1 — animate all three simultaneously
  hcSetPos(L, 'hc-exit');    // left flies out
  hcSetPos(C, 'hc-left');    // center shrinks → left
  hcSetPos(R, 'hc-center');  // right grows   → center

  hcUpdateDots(hcImgs[2]);   // new center image

  // Step 2 — after exit completes, recycle L as new right entry
  setTimeout(() => {
    hcSetImg(L, newImgIdx);
    hcPool[L].classList.add('no-anim');
    hcSetPos(L, 'hc-enter');       // instant: place off-screen right
    hcPool[L].offsetHeight;        // force reflow
    hcPool[L].classList.remove('no-anim');
    hcSetPos(L, 'hc-right');       // animate into right position

    // Rotate tracking arrays
    hcSlots = [C, R, L];
    hcImgs  = [hcImgs[1], hcImgs[2], newImgIdx];

    setTimeout(() => { hcBusy = false; }, 700);
  }, 680);
}

function hcStart() {
  hcTimer = setInterval(hcAdvance, 4500);
}
function hcStop() {
  clearInterval(hcTimer);
}

// Pause on hover
const heroVisualEl = document.querySelector('.hero-visual');
if (heroVisualEl) {
  heroVisualEl.addEventListener('mouseenter', hcStop);
  heroVisualEl.addEventListener('mouseleave', hcStart);
}

hcStart();
