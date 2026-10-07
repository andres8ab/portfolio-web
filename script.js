/* =============================================================
   ANDRES OCHOA — PORTFOLIO
   Vanilla JS · GSAP + ScrollTrigger + Lenis
   Everything editable lives in CONFIG.
   ============================================================= */
(() => {
'use strict';

/* ---------------------------------------------------------------
   CONFIG — edit here, never in the logic below
   --------------------------------------------------------------- */
const CONFIG = {

  // ── Contact ───────────────────────────────────────────────
  // Delivery runs through EmailJS. The public key is client-visible by
  // design; lock the template to this domain in the EmailJS dashboard.
  // If the SDK fails to load, the form falls back to a pre-filled email.
  contact: {
    emailjs: {
      serviceId:  'service_0wwx4oi',
      templateId: 'template_bwgm8ir',
      publicKey:  'THQQa0ImY640JktvJ',
      toName:     'Andres',
      toEmail:    'ochoabawab@gmail.com',
    },
    fallbackEmail: 'ochoabawab@gmail.com',
    subjectPrefix: 'Portfolio enquiry —',
  },

  // ── Stack marquee ─────────────────────────────────────────
  stack: [
    'React', 'TypeScript', 'Next.js', 'JavaScript', 'React Native',
    'Expo', 'Flutter', 'Ionic', 'Tailwind CSS', 'Zustand',
    'Redux Toolkit', 'Node.js', 'PostgreSQL', 'MongoDB', 'Prisma',
    'REST APIs', 'Design Systems', 'Core Web Vitals', 'Git',
  ],

  // ── Projects ──────────────────────────────────────────────
  // Roles, stacks and paths confirmed against the real work history.
  // x/y are canvas fractions (0-1); layout() clamps them to the canvas.
  projects: {
    'todo-electrico': {
      name: 'Todo Eléctrico Victor', kind: 'Ecommerce · Freelance',
      note: 'Freelance, twice over: first the original site in 2022, then a full rebuild as an ecommerce platform — catalogue, cart and checkout on Next.js, with Wompi payments, Drizzle ORM, SEO and Meta Pixel tracking wired in.',
      tags: ['Next.js', 'Zustand + Drizzle', 'Wompi payments'],
      x: 0.02, y: 0.03, r: -3,
    },
    'wurth': {
      name: 'Würth', kind: 'Multiplatform commerce',
      note: 'Multiplatform ecommerce for a global industrial distributor — product search, cart, orders and card payments, plus a dashboard for order status, statements and profile data. Built with Ionic and Capacitor at Evolutecc.',
      tags: ['Ionic', 'Capacitor', 'Tailwind'],
      x: 0.26, y: 0.04, r: 3,
    },
    'alfred-fleet': {
      name: 'Alfred Empresas', kind: 'Fleet management',
      note: 'A fleet-management platform and an internal operations tool, shipped from one monorepo. I lead feature implementation across both in Next.js, Tailwind, HeroUI and Zustand. The product is behind a login, so the preview is its sign-in screen.',
      tags: ['Next.js', 'HeroUI', 'Zustand'],
      x: 0.5, y: 0.02, r: -2,
    },
    'litsight': {
      name: 'LitSight', kind: 'SaaS platform',
      note: 'Leadership-evaluation platform with several user types, card payments and coupon redemption, and evaluation results rendered out as PDFs. Next.js, MUI and React-pdf, built at Evolutecc.',
      tags: ['Next.js', 'MUI', 'React-pdf'],
      x: 0.74, y: 0.04, r: 3,
    },
    'uflou': {
      name: 'Uflou', kind: 'Mobile app · App Store',
      note: 'Sustainable-mobility app — communities, trip tracking on Google Maps, challenges, rewards and stats. I migrated the frontend off Ionic-Angular onto React Native, with Reanimated and NativeWind. Live on the App Store.',
      tags: ['React Native', 'Reanimated', 'NativeWind'],
      x: 0.03, y: 0.35, r: -3, badge: true,
    },
    'fanatik': {
      name: 'Fanatik', kind: 'Social & music',
      note: 'Social platform built around artists and their fans — feed, likes, comments and follows, plus chat, music playback and commerce. Frontend in Next.js with Context API and Tailwind, built at Evolutecc.',
      tags: ['Next.js', 'Context API', 'Tailwind'],
      x: 0.2, y: 0.36, r: 3,
    },
    'alfred': {
      name: 'Alfred', kind: 'B2C product · Flutter',
      note: 'Alfred\'s consumer product. I build and maintain the B2C customer app behind it — Flutter with Bloc and Firebase, running on both iOS and Android.',
      tags: ['Flutter', 'Bloc', 'Firebase'],
      x: 0.44, y: 0.34, r: -2,
    },
    'doxa': {
      name: 'Doxa Sistemas', kind: 'ERP platform',
      note: 'ERP system for managing products, orders, third parties, accounts and invoices, with a permissions dashboard and customization per company. Next.js, PrimeReact and Context API at Evolutecc — the ERP itself sits behind a login, so the preview is the company site.',
      tags: ['Next.js', 'PrimeReact', 'Context API'],
      x: 0.68, y: 0.36, r: 3,
    },
    'next-tailwind': {
      name: 'Comercializadora OB', kind: 'Full-stack ecommerce',
      note: 'Wholesale ecommerce built end to end for the client — product search, cart, orders and payments, an admin dashboard over the company data, and live stock backed by MongoDB. Next.js and Node, with orders going out through Nodemailer.',
      tags: ['Next.js', 'Node.js', 'MongoDB'],
      x: 0.48, y: 0.67, r: 2,
    },
    'alfred-b2b': {
      name: 'Shop Allies', kind: 'B2B web app',
      note: 'The web app Alfred\'s partner shops run their day on — merchant management and the workflows behind it. Built and maintained in React with Redux. Behind a login, so the preview is its sign-in screen.',
      tags: ['React', 'Redux', 'CSS'],
      x: 0.25, y: 0.68, r: -3,
    },
    'collection-app': {
      name: 'Collection App', kind: 'Billing tool · Freelance',
      note: 'Billing tool built independently — searchable invoice creation with filters, settlements per seller with monthly commissions, and account statements by client and date range. TanStack Start, Prisma and Tailwind.',
      tags: ['TanStack Start', 'Prisma', 'Tailwind'],
      x: 0.71, y: 0.68, r: -3,
    },
  },
};

/* ---------------------------------------------------------------
   utils
   --------------------------------------------------------------- */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp  = (a, b, t) => a + (b - a) * t;

const REDUCED   = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE      = window.matchMedia('(pointer: fine)').matches;
const IS_TOUCH  = window.matchMedia('(hover: none)').matches;
// Same query as the portrait block in style.css: a scene that ships a 9:16 file
// (data-portrait on its section) plays it here instead of the 16:9 one.
const PORTRAIT  = window.matchMedia('(orientation: portrait) and (max-width: 1024px)');
const IS_IOS    = /iP(hone|ad|od)/.test(navigator.platform)
               || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const isMobile  = () => window.innerWidth <= 768;
const isBarNav  = () => window.innerWidth <= 1024;   // matches the CSS breakpoint

// Below 1024 the nav is a fixed top bar, so an anchor landing on a section's
// exact top puts its heading underneath the bar.
const navOffset = () => {
  if (!isBarNav()) return 0;
  const bar = document.querySelector('.nav');
  return -((bar ? bar.offsetHeight : 56) + 8);
};

// One source of truth for how far each scene pins. scenes.setup owns the pin and
// hero.init animates across the same range — if these two ever disagree the
// headline drift finishes in mid-air. Phones get a much shorter scrub: at full
// desktop length the three scenes ate 53% of the page's total scroll.
const SCENE_PIN = () => isMobile()
  ? { hero: 150, mid: 120, fade: 105, cue: 45 }
  : { hero: 250, mid: 200, fade: 175, cue: 60 };

// The page always opens on the preloader and the hero entrance, so restoring
// a previous scroll offset drops you mid-page with the intro already spent.
// Set before first paint so it beats the browser's own restore.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

const hasGSAP = typeof window.gsap !== 'undefined';
const gsap = window.gsap;
let EASE = { out: 'power3.out', inOut: 'power3.inOut', spring: 'back.out(1.7)', soft: 'power2.out' };

/* ---------------------------------------------------------------
   preloader
   --------------------------------------------------------------- */
const preloader = {
  init() {
    const el = $('#preloader');
    if (!el) return Promise.resolve();
    if (REDUCED) { el.remove(); return Promise.resolve(); }

    const countEl = $('#preloaderCount');
    const barEl   = $('#preloaderBar');

    return new Promise(resolve => {
      let shown = 0, done = false, loaded = false;
      const t0 = performance.now();

      const ready = () => { loaded = true; };
      if (document.readyState === 'complete') ready();
      else window.addEventListener('load', ready, { once: true });
      setTimeout(ready, 2200); // never hold the page hostage

      const MIN_S = 0.85;   // floor so the counter is legible, not a flash

      // rAF throttles in a background tab. If this loaded out of sight, don't make
      // someone arriving later sit through an intro they already waited out.
      let wasHidden = document.hidden;
      document.addEventListener('visibilitychange', () => { if (document.hidden) wasHidden = true; });

      const tick = now => {
        // ease toward 92 on a real clock, then run to 100 once the page is loaded
        const elapsed = (now - t0) / 1000;
        const base = 92 * (1 - Math.pow(2, -elapsed / 0.30));
        const target = (loaded && elapsed >= MIN_S) ? 100 : Math.min(92, base);
        shown = loaded && wasHidden ? 100 : lerp(shown, target, 0.22);
        if (loaded && shown > 99.2) shown = 100;
        countEl.textContent = String(Math.round(shown)).padStart(3, '0');
        barEl.style.width = shown + '%';
        if (shown >= 100 && !done) { done = true; finish(); return; }
        requestAnimationFrame(tick);
      };

      const finish = () => {
        const tl = hasGSAP ? gsap.timeline({ onComplete: () => el.remove() }) : null;
        if (!tl) { el.remove(); resolve(); return; }
        tl.to('.preloader__inner', { opacity: 0, duration: .22, ease: 'power2.in' })
          .to('.preloader__bloom', { scale: 1, opacity: .9, duration: .45, ease: 'power2.out' }, '-=.08')
          .to('.preloader__half--top',    { yPercent: -100, duration: .72, ease: 'power4.inOut' }, '-=.3')
          .to('.preloader__half--bottom', { yPercent:  100, duration: .72, ease: 'power4.inOut' }, '<')
          .add(resolve, '<')   // hero enters with the curtain, not after it
          .to('.preloader__bloom', { opacity: 0, duration: .4, ease: 'power2.in' }, '-=.5');
      };

      requestAnimationFrame(tick);
    });
  },
};

/* ---------------------------------------------------------------
   smooth scroll — Lenis + GSAP ticker
   --------------------------------------------------------------- */
let lenis = null;
const smoothScroll = {
  init() {
    const Ctor = window.Lenis || (window.lenis && window.lenis.default);
    if (!Ctor || REDUCED) return;
    lenis = new Ctor({
      duration: 1.15, lerp: 0.09, smoothWheel: true,
      wheelMultiplier: 0.95, touchMultiplier: 1.6,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    if (hasGSAP && window.ScrollTrigger) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(time => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  },
  to(target) {
    // scroll-padding-top covers the scrollIntoView path; Lenis needs it passed in
    if (lenis) lenis.scrollTo(target, { offset: navOffset(), duration: 1.4, easing: t => 1 - Math.pow(1 - t, 4) });
    else document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  },
};

/* ---------------------------------------------------------------
   cursor
   --------------------------------------------------------------- */
const cursor = {
  init() {
    if (!FINE || IS_TOUCH || REDUCED) return;
    const el = $('#cursor'); if (!el) return;
    const dot = $('.cursor__dot', el), ring = $('.cursor__ring', el), label = $('.cursor__label', el);
    el.classList.add('is-on');

    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });

    const loop = () => {
      rx = lerp(rx, mx, 0.16); ry = lerp(ry, my, 0.16);
      dot.style.transform  = `translate(${mx}px, ${my}px)`;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    const HOVER = 'a, button, input, textarea, select, [data-magnetic]';
    // the swollen ring is sized for cards and buttons; over small inline text it
    // covers the target instead of framing it, so those links opt out and keep
    // the default ring
    const PLAIN = '[data-cursor="plain"]';
    addEventListener('pointerover', e => {
      const card = e.target.closest('.card');
      const hit  = e.target.closest(HOVER) && !e.target.closest(PLAIN);
      if (card && !isMobile()) { el.classList.add('is-drag'); el.classList.remove('is-hover'); label.textContent = 'Drag'; }
      else if (hit)            { el.classList.add('is-hover'); el.classList.remove('is-drag'); }
      else                     { el.classList.remove('is-hover', 'is-drag'); }
    });
    addEventListener('pointerdown', () => ring.style.opacity = '.6');
    addEventListener('pointerup',   () => ring.style.opacity = '1');
  },
};

/* ---------------------------------------------------------------
   magnetic buttons
   --------------------------------------------------------------- */
const magnetic = {
  init() {
    if (!FINE || IS_TOUCH || REDUCED || !hasGSAP) return;
    $$('[data-magnetic]').forEach(el => {
      const R = 90;
      const move = e => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        const d = Math.hypot(dx, dy);
        const k = d < R ? (1 - d / R) : 0;
        gsap.to(el, { x: dx * .32 * k, y: dy * .32 * k, duration: .5, ease: 'power3.out' });
      };
      const reset = () => gsap.to(el, { x: 0, y: 0, duration: .7, ease: 'elastic.out(1,.5)' });
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerleave', reset);
    });
  },
};

/* ---------------------------------------------------------------
   nav
   --------------------------------------------------------------- */
const nav = {
  init() {
    const el = $('#nav'); if (!el) return;
    const links = $$('[data-nav]', el);
    const pip = $('#navPip');

    // As a centred pill this floated over whatever heading it happened to cross.
    // As a bar it would sit on top of the page permanently, so it gets out of the
    // way going down and comes back the moment you scroll up.
    let lastY = scrollY;
    const onScroll = () => {
      const y = Math.max(0, scrollY);
      el.classList.toggle('is-visible', y > innerHeight * 0.8);
      const dy = y - lastY;
      if (Math.abs(dy) < 6) return;          // ignore rubber-band and sub-pixel jitter
      el.classList.toggle('is-hidden', dy > 0 && y > innerHeight);
      lastY = y;
    };
    addEventListener('scroll', onScroll, { passive: true });
    lenis?.on('scroll', onScroll);           // Lenis drives scrolling; the window event lags
    onScroll();

    links.forEach(a => a.addEventListener('click', e => {
      e.preventDefault(); smoothScroll.to(a.getAttribute('href'));
    }));
    $$('a[href^="#"]:not([data-nav])').forEach(a => a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length > 1 && document.querySelector(id)) { e.preventDefault(); smoothScroll.to(id); }
    }));

    // animate x through GSAP only — mixing a manual style.transform with a GSAP
    // tween lets GSAP's cached transform clobber the position
    const movePip = a => {
      if (!pip || !a) return;
      if (hasGSAP && !REDUCED) {
        gsap.to(pip, {
          x: a.offsetLeft, width: a.offsetWidth, opacity: 1,
          duration: .55, ease: 'elastic.out(1,.75)',
        });
      } else {
        pip.style.width = a.offsetWidth + 'px';
        pip.style.transform = `translateX(${a.offsetLeft}px)`;
        pip.style.opacity = '1';
      }
    };

    // resolve the active section from scroll position — one source of truth,
    // so overlapping/pinned sections can't fight over the indicator
    const targets = links
      .map(a => ({ a, sec: document.querySelector(a.getAttribute('href')) }))
      .filter(t => t.sec);
    let current = null;

    const syncActive = () => {
      const line = scrollY + innerHeight * 0.42;
      let best = null;
      targets.forEach(t => {
        const top = t.sec.getBoundingClientRect().top + scrollY;
        if (top <= line && (!best || top > best.top)) best = { ...t, top };
      });
      if (!best || best.a === current) return;
      current = best.a;
      links.forEach(l => l.classList.remove('is-active'));
      best.a.classList.add('is-active');
      movePip(best.a);
    };
    addEventListener('scroll', syncActive, { passive: true });
    addEventListener('load', syncActive);
    lenis?.on('scroll', syncActive);   // Lenis drives scrolling; the window event alone can lag
    syncActive();
  },
};

/* ---------------------------------------------------------------
   scenes — video scroll scrubbing with a 3-tier fallback
   Tier 1 desktop: true scrub · Tier 2 iOS: play through
   Tier 3 reduced-motion / load failure: poster only
   --------------------------------------------------------------- */
const scenes = {
  init() {
    if (REDUCED) {                              // Tier 3 — posters only, no video
      const still = img => (PORTRAIT.matches && img.closest('[data-portrait]') && img.dataset.srcPortrait)
                        || img.dataset.src;
      const paint = () => $$('.scene__poster[data-src]').forEach(img => { img.src = still(img); });
      paint();
      PORTRAIT.addEventListener('change', paint);
      return;
    }
    $$('.scene').forEach(section => this.setup(section));
  },

  setup(section) {
    const video = $('.scene__video', section);
    if (!video || !video.dataset.mp4) return;
    const poster = $('.scene__poster', section);

    // Which file this screen should get. Read at call time, not once: the error
    // handler drops data-portrait when a portrait file turns out to be unusable.
    const pick = () => {
      const portrait = PORTRAIT.matches && section.hasAttribute('data-portrait') && video.dataset.mp4Portrait;
      return portrait
        ? { mp4: portrait, still: video.dataset.posterPortrait, img: poster?.dataset.srcPortrait }
        : { mp4: video.dataset.mp4, still: video.dataset.poster, img: poster?.dataset.src };
    };

    // 'scrub' = seek to scroll · 'play' = run the clip through · 'poster' = still frame
    // iOS throttles rapid currentTime seeks, so it starts in play mode.
    let mode = IS_IOS ? 'play' : 'scrub';
    let attached = false, active = false, seekFails = 0, current = null, st = null;

    // A host that can't serve HTTP Range requests still reports one seekable
    // range — but a ZERO-LENGTH one (0.0-0.0). Checking seekable.length is not
    // enough; the span is what matters.
    const canSeek = () => {
      const s = video.seekable;
      return !!s && s.length > 0 && (s.end(s.length - 1) - s.start(0)) > 0.5;
    };

    // The hero's poster is an eager <picture> that picks its own variant; only
    // the lazy mid-scene posters (data-src) are ours to set.
    const setStill = p => {
      if (poster && poster.dataset.src && p.img) poster.src = p.img;
      if (p.still) video.poster = p.still; else video.removeAttribute('poster');
    };

    const load = p => { current = p.mp4; video.src = current; video.load(); };

    const attach = () => {
      if (attached) return; attached = true;
      const p = pick();
      setStill(p);
      load(p);
    };

    const toPlayMode = () => {
      if (mode !== 'scrub') return;
      mode = 'play';
      if (active) video.play().catch(() => {});
    };

    const seek = progress => {
      if (mode !== 'scrub') return;
      const d = video.duration;
      if (!d || !isFinite(d)) return;
      const t = clamp(progress * d, 0, d - 0.05);
      if (Math.abs(video.currentTime - t) > 1 / 30) {
        try { video.currentTime = t; } catch (_) { toPlayMode(); return; }
        // Backstop: if assignments keep not taking, the source isn't really
        // seekable — play the clip through rather than freeze on one frame.
        if (Math.abs(video.currentTime - t) > 0.5) {
          if (++seekFails >= 4) toPlayMode();
        } else seekFails = 0;
      }
    };

    // Rotating, or resizing a window across the breakpoint: swap to the file
    // that now fits. Hidden until the new one has a frame, so it never flashes.
    const swap = () => {
      const p = pick();
      if (!attached || mode === 'poster' || p.mp4 === current) return;
      section.classList.remove('is-playing');
      setStill(p);
      load(p);
      if (mode === 'play' && active) video.play().catch(() => {});
    };
    PORTRAIT.addEventListener('change', swap);

    // Not `once`: a swap loads a second file. Each new file starts at frame 0,
    // so it is re-seeked to wherever the scroll already is.
    video.addEventListener('loadeddata', () => {
      section.classList.add('is-playing');
      // A server that cannot serve HTTP Range requests leaves seekable empty.
      // Assigning currentTime then silently does nothing, and the scene would
      // freeze on frame 0 forever. Play the clip through instead of freezing.
      setTimeout(() => { if (mode === 'scrub' && !canSeek()) toPlayMode(); }, 400);
      if (st) seek(st.progress);
    });

    video.addEventListener('error', () => {
      // A missing or broken portrait file isn't fatal. Fall back to the 16:9
      // clip, and dropping data-portrait hands the section back to the CSS
      // that letterboxes a 16:9 plate on a portrait screen.
      if (current && current === video.dataset.mp4Portrait) {
        section.removeAttribute('data-portrait');
        section.classList.remove('is-playing');
        const p = pick();
        setStill(p);
        load(p);
        if (mode === 'play' && active) video.play().catch(() => {});
        return;
      }
      mode = 'poster';
      section.classList.remove('is-playing');
    });

    // attach only when the section is genuinely near the viewport
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { attach(); io.disconnect(); } });
    }, { rootMargin: '200% 0px' });

    const start = () => io.observe(section);
    if (document.readyState === 'complete') start();
    else addEventListener('load', start, { once: true });

    if (!hasGSAP || !window.ScrollTrigger) return;

    st = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      // functional, so a rotate or resize re-reads it on ScrollTrigger.refresh()
      end: () => '+=' + (section.id === 'hero' ? SCENE_PIN().hero : SCENE_PIN().mid) + '%',
      pin: true, pinSpacing: true, scrub: 0.8,
      onToggle: self => {
        active = self.isActive;
        if (mode !== 'play') return;
        attach();
        if (self.isActive) video.play().catch(() => {});
        else video.pause();
      },
      onUpdate: self => seek(self.progress),
    });
  },
};

/* ---------------------------------------------------------------
   hero — kinetic typography over the scrub
   --------------------------------------------------------------- */
const hero = {
  init() {
    const section = $('#hero'); if (!section || !hasGSAP) return;
    const lines = $$('.hero__title .line__i', section);

    if (!REDUCED) {
      gsap.set(lines, { yPercent: 115, rotateX: -45, opacity: 0 });
      gsap.set(['.hero__content .eyebrow', '.hero__sub', '.hero__actions'], { y: 24, opacity: 0 });
    }

    this.entrance = () => {
      if (REDUCED) return;
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      tl.to('.hero__content .eyebrow', { y: 0, opacity: 1, duration: .7 })
        .to(lines, { yPercent: 0, rotateX: 0, opacity: 1, duration: 1.05, stagger: .07 }, '-=.55')
        .to('.hero__sub',     { y: 0, opacity: 1, duration: .8 }, '-=.9')
        .to('.hero__actions', { y: 0, opacity: 1, duration: .8 }, '-=.7');
    };

    if (REDUCED || !window.ScrollTrigger) return;

    // Signature move: lines de-sync horizontally as they travel.
    // Transform only. Animating font-variation-settings here re-rasterised the
    // glyphs every scroll frame and made the headline visibly shake.
    const amp = isMobile() ? 0.4 : 1;
    const drift = [-7, 6, -4];
    lines.forEach((line, i) => {
      gsap.to(line, {
        xPercent: drift[i] * amp,
        ease: 'none',
        force3D: true,
        scrollTrigger: { trigger: section, start: 'top top', end: () => '+=' + SCENE_PIN().hero + '%', scrub: 1 },
      });
    });

    gsap.to('.hero__content', {
      opacity: 0, scale: 1.12, ease: 'power2.in',
      scrollTrigger: { trigger: section, start: 'top top', end: () => '+=' + SCENE_PIN().fade + '%', scrub: 1 },
    });
    gsap.to('.hero__cue', {
      opacity: 0, ease: 'none',
      scrollTrigger: { trigger: section, start: 'top top', end: () => '+=' + SCENE_PIN().cue + '%', scrub: true },
    });
  },
};

/* ---------------------------------------------------------------
   generic reveals
   --------------------------------------------------------------- */
const reveals = {
  init() {
    if (!hasGSAP || !window.ScrollTrigger || REDUCED) return;
    $$('[data-reveal]').forEach(el => {
      gsap.from(el, {
        y: 26, opacity: 0, duration: .95, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });
    $$('.sec__title').forEach(el => {
      if (el.hasAttribute('data-reveal')) return;
      gsap.from(el, {
        y: 30, opacity: 0, duration: 1, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });
  },
};

/* ---------------------------------------------------------------
   stats counters
   --------------------------------------------------------------- */
const stats = {
  init() {
    const rail = $('.stats__rail'); if (!rail) return;
    const nums = $$('[data-count]', rail);

    const run = () => nums.forEach((el, i) => {
      const target = parseFloat(el.dataset.count);
      const pad = parseInt(el.dataset.pad || '0', 10);
      const suffix = el.dataset.suffix || '';
      const fmt = v => String(Math.round(v)).padStart(pad, '0') + suffix;
      if (!hasGSAP || REDUCED) { el.textContent = fmt(target); return; }
      const o = { v: 0 };
      gsap.to(o, {
        v: target, duration: 1.6, delay: i * .12, ease: 'power3.out',
        onUpdate: () => { el.textContent = fmt(o.v); },
      });
    });

    if (!hasGSAP || !window.ScrollTrigger || REDUCED) { run(); rail.classList.add('is-lined'); return; }
    ScrollTrigger.create({
      trigger: rail, start: 'top 85%', once: true,
      onEnter: () => { run(); rail.classList.add('is-lined'); },
    });
    gsap.to(rail, {
      yPercent: -6, ease: 'none',
      scrollTrigger: { trigger: rail, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  },
};

/* ---------------------------------------------------------------
   offer — the single service card
   --------------------------------------------------------------- */
const offer = {
  init() {
    const card = $('.offer'); if (!card) return;

    if (hasGSAP && window.ScrollTrigger && !REDUCED) {
      gsap.from(card, {
        y: 54, scale: .97, opacity: 0, duration: 1.1, ease: 'expo.out',
        scrollTrigger: { trigger: card, start: 'top 84%', once: true },
      });
      gsap.from($$('.offer__list li', card), {
        y: 22, opacity: 0, duration: .8, ease: 'expo.out', stagger: .09,
        scrollTrigger: { trigger: '.offer__list', start: 'top 88%', once: true },
      });
    }

    if (!FINE || IS_TOUCH || REDUCED || !hasGSAP) return;

    const glow = $('.offer__glow', card);
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      gsap.to(card, {
        rotateY: (px - .5) * 5, rotateX: (.5 - py) * 5,
        duration: .7, ease: 'power3.out', transformPerspective: 1400,
      });
      if (glow) { glow.style.left = (px * 100) + '%'; glow.style.top = (py * 100) + '%'; }
    });
    card.addEventListener('pointerleave', () => {
      gsap.to(card, { rotateY: 0, rotateX: 0, duration: 1, ease: 'elastic.out(1,.55)' });
    });
  },
};

/* ---------------------------------------------------------------
   story — pinned heading, lit chapters, progress rail
   --------------------------------------------------------------- */
const story = {
  init() {
    const section = $('#story'); if (!section) return;
    const chapters = $$('.chapter', section);
    const bar = $('#storyProgress');

    if (REDUCED || !hasGSAP || !window.ScrollTrigger) {
      chapters.forEach(c => c.classList.add('is-lit'));
      return;
    }

    ScrollTrigger.create({
      trigger: '.story__right', start: 'top 70%', end: 'bottom 70%', scrub: true,
      onUpdate: self => { if (bar) bar.style.height = (self.progress * 100) + '%'; },
    });

    chapters.forEach(c => {
      ScrollTrigger.create({
        trigger: c, start: 'top 72%', end: 'bottom 42%',
        onToggle: self => c.classList.toggle('is-lit', self.isActive),
      });
    });
  },
};

/* ---------------------------------------------------------------
   work — draggable canvas + preview
   --------------------------------------------------------------- */
const work = {
  cards: [], home: new Map(), raf: null,

  init() {
    const canvas = $('#canvas'); if (!canvas) return;
    this.canvas = canvas;
    this.cards = $$('.card', canvas);
    this.urlEl = $('#browserUrl');
    // the path segment is the first thing to get ellipsised on a narrow phone,
    // which reads as a broken URL rather than a deliberate one
    this.idleUrl = () => window.innerWidth <= 480 ? 'andresochoa.com.co' : 'andresochoa.com.co/work';
    if (this.urlEl) this.urlEl.textContent = this.idleUrl();

    this.cards.forEach(card => {
      const meta = CONFIG.projects[card.dataset.slug];
      if (meta) card.setAttribute('aria-label', `${meta.name} — open preview`);
      const img = $('img', card);
      if (img) img.addEventListener('error', () => {
        img.setAttribute('data-failed', '');
        card.classList.add('no-shot');
      });
      card.addEventListener('pointerenter', () => {
        if (!this.urlEl) return;
        try { this.urlEl.textContent = new URL(card.dataset.url).hostname.replace(/^www\./, ''); }
        catch (_) {}
        this.urlEl.style.color = 'var(--violet-300)';
      });
      card.addEventListener('pointerleave', () => {
        if (!this.urlEl) return;
        this.urlEl.textContent = this.idleUrl();
        this.urlEl.style.color = '';
      });
    });

    this.layout();
    addEventListener('resize', this.debounce(() => {
      this.layout();
      if (this.urlEl && !this.urlEl.style.color) this.urlEl.textContent = this.idleUrl();
    }, 200));

    // images decide card height; re-run once they have actually landed
    const imgs = $$('img', canvas);
    let pending = imgs.length;
    const settle = () => { if (--pending <= 0) this.layout(); };
    imgs.forEach(img => {
      if (img.complete) settle();
      else { img.addEventListener('load', settle, { once: true });
             img.addEventListener('error', settle, { once: true }); }
    });
    addEventListener('load', () => this.layout());

    if (!isMobile()) this.enableDrag();
    $('#shuffleBtn')?.addEventListener('click', () => this.layout(true));
    $('#resetBtn')?.addEventListener('click', () => this.layout(false));

    if (hasGSAP && window.ScrollTrigger && !REDUCED) {
      gsap.from(this.cards, {
        scale: .9, opacity: 0, duration: .9, ease: 'back.out(1.6)', stagger: .05,
        scrollTrigger: { trigger: canvas, start: 'top 80%', once: true },
      });
    }
    preview.init(this);
  },

  debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; },

  layout(shuffle = false) {
    if (isMobile()) {
      this.cards.forEach(c => { c.style.transform = ''; });
      this.stopFloat();
      return;
    }
    const cw = this.canvas.clientWidth, ch = this.canvas.clientHeight;
    this.cards.forEach(card => {
      const meta = CONFIG.projects[card.dataset.slug] || {};
      const w = card.offsetWidth, h = card.offsetHeight;
      let fx = meta.x ?? 0.4, fy = meta.y ?? 0.3, r = meta.r ?? 0;
      if (shuffle) { fx = Math.random() * .82; fy = Math.random() * .62; r = (Math.random() - .5) * 12; }
      const x = clamp(fx * cw, 8, Math.max(8, cw - w - 8));
      const y = clamp(fy * ch, 8, Math.max(8, ch - h - 8));
      this.home.set(card, { x, y, r });
      card._p = { x, y, r, vx: 0, vy: 0, seed: Math.random() * 6.28 };
      this.apply(card);
    });
    this.startFloat();
  },

  apply(card) {
    const p = card._p;
    card.style.transform = `translate3d(${p.x}px, ${p.y + (p.float || 0)}px, 0) rotate(${p.r}deg) scale(${p.scale || 1})`;
  },

  startFloat() {
    if (REDUCED || isMobile()) return;
    this.stopFloat();
    const t0 = performance.now();
    const loop = now => {
      const t = (now - t0) / 1000;
      this.cards.forEach(c => {
        if (!c._p || c._p.dragging) return;
        c._p.float = Math.sin(t * 0.7 + c._p.seed) * 4;
        this.apply(c);
      });
      this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  },
  stopFloat() { if (this.raf) cancelAnimationFrame(this.raf); this.raf = null; },

  enableDrag() {
    let z = 10;
    this.cards.forEach(card => {
      let sx = 0, sy = 0, ox = 0, oy = 0, moved = 0, active = false, lastT = 0, lx = 0, ly = 0;

      const down = e => {
        if (e.button !== undefined && e.button !== 0) return;
        active = true; moved = 0;
        card._p.dragging = true;
        card.setPointerCapture(e.pointerId);
        card.classList.add('is-grabbing');
        card.style.zIndex = ++z;
        sx = e.clientX; sy = e.clientY; lx = sx; ly = sy;
        ox = card._p.x; oy = card._p.y;
        lastT = performance.now();
        card._p.scale = 1.04;
        this.apply(card);
      };

      const move = e => {
        if (!active) return;
        const dx = e.clientX - sx, dy = e.clientY - sy;
        moved = Math.max(moved, Math.hypot(dx, dy));

        const cw = this.canvas.clientWidth, ch = this.canvas.clientHeight;
        const w = card.offsetWidth, h = card.offsetHeight;
        let nx = ox + dx, ny = oy + dy;
        // soft elastic resistance past the edges
        const soft = (v, min, max) => v < min ? min - Math.pow(min - v, .68)
                    : v > max ? max + Math.pow(v - max, .68) : v;
        card._p.x = soft(nx, 0, cw - w);
        card._p.y = soft(ny, 0, ch - h);

        const now = performance.now(), dt = Math.max(1, now - lastT);
        card._p.vx = (e.clientX - lx) / dt * 16;
        card._p.vy = (e.clientY - ly) / dt * 16;
        lx = e.clientX; ly = e.clientY; lastT = now;

        this.apply(card);
      };

      const up = e => {
        if (!active) return;
        active = false;
        card._p.dragging = false;
        card.classList.remove('is-grabbing');
        card.releasePointerCapture?.(e.pointerId);
        card._p.scale = 1;

        if (moved < 6) { this.apply(card); preview.open(card); return; }
        this.settle(card);
      };

      card.addEventListener('pointerdown', down);
      card.addEventListener('pointermove', move);
      card.addEventListener('pointerup', up);
      card.addEventListener('pointercancel', up);

      // keyboard alternative to dragging
      card.addEventListener('keydown', e => {
        const step = e.shiftKey ? 32 : 12;
        const map = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
        if (!map[e.key]) return;
        e.preventDefault();
        const cw = this.canvas.clientWidth, ch = this.canvas.clientHeight;
        card._p.x = clamp(card._p.x + map[e.key][0], 0, cw - card.offsetWidth);
        card._p.y = clamp(card._p.y + map[e.key][1], 0, ch - card.offsetHeight);
        this.apply(card);
      });
    });
  },

  // momentum + spring back inside bounds
  settle(card) {
    const cw = this.canvas.clientWidth, ch = this.canvas.clientHeight;
    const w = card.offsetWidth, h = card.offsetHeight;
    let { x, y, vx, vy } = card._p;
    x = clamp(x + vx * 6, 0, cw - w);
    y = clamp(y + vy * 6, 0, ch - h);

    if (hasGSAP && !REDUCED) {
      gsap.to(card._p, {
        x, y, duration: .9, ease: 'elastic.out(1,.62)',
        onUpdate: () => this.apply(card),
      });
    } else { card._p.x = x; card._p.y = y; this.apply(card); }
  },
};

/* ---------------------------------------------------------------
   preview modal — FLIP in from the card, focus-trapped
   --------------------------------------------------------------- */
const preview = {
  init(workRef) {
    this.workRef = workRef;
    this.el = $('#preview');
    if (!this.el) return;
    this.panel = $('#previewPanel');
    this.backdrop = $('#previewBackdrop');
    this.img = $('#previewImg');
    this.scroll = $('#previewScroll');

    $('#previewClose')?.addEventListener('click', () => this.close());
    this.backdrop?.addEventListener('click', () => this.close());
    addEventListener('keydown', e => {
      if (!this.isOpen) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'Tab') this.trap(e);
    });

    // on mobile the cards are a carousel, so click is the only interaction
    workRef.cards.forEach(card => {
      card.addEventListener('click', e => {
        if (!isMobile()) return;       // desktop handled by pointerup
        e.preventDefault(); this.open(card);
      });
    });
  },

  open(card) {
    if (this.isOpen) return;
    const slug = card.dataset.slug;
    const meta = CONFIG.projects[slug] || {};
    this.isOpen = true;
    this.origin = card;
    this.lastFocus = document.activeElement;

    $('#previewTitle').textContent = meta.name || slug;
    $('#previewKind').textContent  = meta.kind || 'Project';
    $('#previewNote').textContent  = meta.note || '';
    const tagList = $('#previewTags');
    tagList.innerHTML = '';
    (meta.tags || []).forEach(t => { const li = document.createElement('li'); li.textContent = t; tagList.appendChild(li); });

    const link = $('#previewLink');
    link.href = card.dataset.url;
    link.textContent = card.dataset.kind === 'app' ? 'View on the App Store ↗' : 'Visit live site ↗';

    this.img.src = `assets/work/${slug}-full.webp`;
    this.img.alt = `Full-page screenshot of ${meta.name || slug}`;
    this.img.onerror = () => { this.img.src = `assets/work/${slug}-thumb.webp`; };
    if (this.scroll) this.scroll.scrollTop = 0;

    this.el.hidden = false;
    document.body.classList.add('is-locked');
    lenis?.stop();

    if (!hasGSAP || REDUCED) {
      this.backdrop.style.opacity = '1'; this.panel.style.opacity = '1';
      $('#previewClose').focus();
      return;
    }

    // FLIP: start from the card's position and scale, land on identity
    const cr = card.getBoundingClientRect();
    const pr = this.panel.getBoundingClientRect();
    const dx = (cr.left + cr.width / 2) - (pr.left + pr.width / 2);
    const dy = (cr.top + cr.height / 2) - (pr.top + pr.height / 2);
    const s  = Math.max(0.2, cr.width / pr.width);

    gsap.timeline()
      .to(this.backdrop, { opacity: 1, duration: .45, ease: 'power2.out' }, 0)
      .fromTo(this.panel,
        { opacity: 0, x: dx, y: dy, scale: s, rotate: (card._p?.r || 0) * .5 },
        { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, duration: .78, ease: 'expo.out',
          onComplete: () => $('#previewClose').focus() }, 0);
  },

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    const done = () => {
      this.el.hidden = true;
      document.body.classList.remove('is-locked');
      lenis?.start();
      this.lastFocus?.focus?.();
    };
    if (!hasGSAP || REDUCED) { done(); return; }

    const card = this.origin;
    const cr = card?.getBoundingClientRect();
    const pr = this.panel.getBoundingClientRect();
    const dx = cr ? (cr.left + cr.width / 2) - (pr.left + pr.width / 2) : 0;
    const dy = cr ? (cr.top + cr.height / 2) - (pr.top + pr.height / 2) : 0;
    const s  = cr ? Math.max(0.2, cr.width / pr.width) : .85;

    gsap.timeline({ onComplete: done })
      .to(this.panel, { opacity: 0, x: dx, y: dy, scale: s, duration: .45, ease: 'power3.in' }, 0)
      .to(this.backdrop, { opacity: 0, duration: .4, ease: 'power2.in' }, .05);
  },

  trap(e) {
    const f = $$('a[href], button, [tabindex]:not([tabindex="-1"])', this.panel)
      .filter(el => el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  },
};

/* ---------------------------------------------------------------
   stack marquee
   --------------------------------------------------------------- */
const stack = {
  init() {
    const track = $('#marqueeTrack'); if (!track) return;
    const build = () => CONFIG.stack.map(s => `<span>${s}</span>`).join('');
    track.innerHTML = build() + build();      // duplicated for a seamless loop

    if (!hasGSAP || REDUCED) return;
    const half = track.scrollWidth / 2;
    gsap.to(track, {
      x: -half, duration: CONFIG.stack.length * 2.2, ease: 'none', repeat: -1,
      modifiers: { x: gsap.utils.unitize(x => parseFloat(x) % half) },
    });
  },
};

/* ---------------------------------------------------------------
   contact form
   --------------------------------------------------------------- */
const contact = {
  init() {
    const form = $('#contactForm'); if (!form) return;
    const status = $('#formStatus');
    const btn = $('#submitBtn');
    const { emailjs: EJS, fallbackEmail, subjectPrefix } = CONFIG.contact;
    const sdk = window.emailjs;
    if (sdk) sdk.init({ publicKey: EJS.publicKey });

    const direct = $('#directEmail');
    if (direct) { direct.href = `mailto:${fallbackEmail}`; direct.textContent = fallbackEmail; }

    const setErr = (field, msg) => {
      const wrap = field.closest('.field');
      wrap.classList.toggle('has-error', !!msg);
      const err = wrap.querySelector('.field__err');
      if (err) err.textContent = msg || '';
    };

    const validate = field => {
      const v = field.value.trim();
      if (!v) { setErr(field, 'This one is required.'); return false; }
      if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
        setErr(field, 'That email doesn\'t look right.'); return false;
      }
      setErr(field, ''); return true;
    };

    // validate on blur, never while typing
    $$('input[required], textarea[required]', form).forEach(f => {
      f.addEventListener('blur', () => validate(f));
      f.addEventListener('input', () => { if (f.closest('.field').classList.contains('has-error')) validate(f); });
    });

    const bloom = () => {
      if (!hasGSAP || REDUCED) return;
      const b = document.createElement('span');
      b.className = 'form__bloom';
      form.appendChild(b);
      gsap.timeline({ onComplete: () => b.remove() })
        .to(b, { scale: 1, opacity: 1, duration: .5, ease: 'power2.out' })
        .to(b, { opacity: 0, duration: .9, ease: 'power2.in' });
    };

    form.addEventListener('submit', async e => {
      e.preventDefault();
      const fields = $$('input[required], textarea[required]', form);
      const ok = fields.map(validate).every(Boolean);
      if (!ok) { status.textContent = 'Please fix the fields above.'; status.className = 'form__status is-bad'; return; }

      const data = {
        name: $('#fName').value.trim(),
        email: $('#fEmail').value.trim(),
        subject: $('#fSubject').selectedOptions[0].textContent,
        message: $('#fMessage').value.trim(),
      };

      // SDK blocked or offline → fall back to a fully pre-filled email.
      if (!sdk) {
        const body = `${data.message}\n\n—\n${data.name}\n${data.email}`;
        location.href = `mailto:${fallbackEmail}`
          + `?subject=${encodeURIComponent(`${subjectPrefix} ${data.subject}`)}`
          + `&body=${encodeURIComponent(body)}`;
        status.textContent = 'Opening your email app…';
        status.className = 'form__status is-ok';
        bloom();
        return;
      }

      btn.classList.add('is-busy');
      status.textContent = ''; status.className = 'form__status';
      try {
        // The template carries five variables; the subject select is folded
        // into the message body so no dashboard change is needed.
        await sdk.send(EJS.serviceId, EJS.templateId, {
          from_name:  data.name,
          to_name:    EJS.toName,
          from_email: data.email,
          to_email:   EJS.toEmail,
          message:    `${subjectPrefix} ${data.subject}\n\n${data.message}`,
        });
        form.reset();
        $$('.field', form).forEach(f => f.classList.remove('has-error'));
        status.textContent = 'Sent. I\'ll get back to you shortly.';
        status.className = 'form__status is-ok';
        bloom();
      } catch (err) {
        status.innerHTML = `Couldn't send that. Email me directly at <a href="mailto:${fallbackEmail}">${fallbackEmail}</a>.`;
        status.className = 'form__status is-bad';
      } finally {
        btn.classList.remove('is-busy');
      }
    });
  },
};

/* ---------------------------------------------------------------
   footer
   --------------------------------------------------------------- */
const footer = {
  init() {
    const mail = $('#footerEmail');
    if (mail) mail.href = `mailto:${CONFIG.contact.fallbackEmail}`;
    const year = $('#footerYear');
    if (year) year.textContent = new Date().getFullYear();
  },
};

/* ---------------------------------------------------------------
   boot
   --------------------------------------------------------------- */
function boot() {
  if (hasGSAP) {
    if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
    if (window.CustomEase) {
      gsap.registerPlugin(CustomEase);
      try { EASE.soft = CustomEase.create('soft', '.22,1,.36,1'); } catch (_) {}
    }
  }

  scrollTo(0, 0);
  smoothScroll.init();
  lenis?.scrollTo(0, { immediate: true });
  cursor.init();
  magnetic.init();
  nav.init();
  hero.init();
  scenes.init();
  reveals.init();
  stats.init();
  offer.init();
  story.init();
  work.init();
  stack.init();
  contact.init();
  footer.init();

  preloader.init().then(() => hero.entrance?.());

  if (hasGSAP && window.ScrollTrigger) {
    let t;
    addEventListener('resize', () => { clearTimeout(t); t = setTimeout(() => ScrollTrigger.refresh(), 200); });
    addEventListener('load', () => ScrollTrigger.refresh());
  }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();

})();
