/* Kefday Café — interactions */
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- nav: solid on scroll, hide on scroll down ---------- */
  const nav = document.querySelector('.nav');
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 40);
    const menuOpen = document.body.classList.contains('menu-open');
    nav.classList.toggle('is-hidden', !menuOpen && y > 600 && y > lastY + 4);
    if (y < lastY - 4 || y < 600) nav.classList.remove('is-hidden');
    lastY = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  const toggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    if (open) nav.classList.remove('is-hidden');
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  mobileMenu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !mobileMenu.hidden) setMenu(false); });

  /* ---------- reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-in'));
  }

  /* ---------- gentle parallax on images ---------- */
  const parallax = [...document.querySelectorAll('[data-speed]')];
  if (parallax.length && !reduceMotion) {
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      parallax.forEach((img) => {
        const rect = img.parentElement.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > vh) return;
        const offset = (rect.top + rect.height / 2 - vh / 2) * parseFloat(img.dataset.speed);
        img.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ---------- menu tabs ---------- */
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const frames = document.querySelectorAll('.menu__frame img');
  const selectTab = (tab, focus = false) => {
    tabs.forEach((t) => {
      const selected = t === tab;
      t.setAttribute('aria-selected', String(selected));
      t.tabIndex = selected ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !selected;
    });
    const key = tab.id.replace('tab-', '');
    frames.forEach((img) => img.classList.toggle('is-active', img.dataset.panel === key));
    if (focus) tab.focus();
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', (e) => {
      const dir = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
      if (dir) { e.preventDefault(); selectTab(tabs[(i + dir + tabs.length) % tabs.length], true); }
      if (e.key === 'Home') { e.preventDefault(); selectTab(tabs[0], true); }
      if (e.key === 'End') { e.preventDefault(); selectTab(tabs[tabs.length - 1], true); }
    });
  });

  /* ---------- live clock (Areekode / IST) ---------- */
  const timeEl = document.getElementById('clock-time');
  const moodEl = document.getElementById('clock-mood');
  const fmt = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: '2-digit', hour12: true });
  const hourFmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: 'numeric', hour12: false });
  const moods = [
    [0, 5, 'Midnight cravings?'],
    [5, 11, 'Morning brew o’clock'],
    [11, 16, 'Lunch is on'],
    [16, 19, 'Golden hour, cold coffee'],
    [19, 24, 'Music, mojitos & friends'],
  ];
  const tick = () => {
    const now = new Date();
    timeEl.textContent = fmt.format(now).replace(/\s?(am|pm)/i, (m) => m.toUpperCase());
    const h = parseInt(hourFmt.format(now), 10) % 24;
    const mood = moods.find(([a, b]) => h >= a && h < b);
    if (mood) moodEl.textContent = mood[2];
  };
  tick();
  setInterval(tick, 15000);

  document.getElementById('year').textContent = new Date().getFullYear();
})();
