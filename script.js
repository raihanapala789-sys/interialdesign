/* ==========================================================================
   VELORE — Luxury Interior Architecture & Bespoke Design
   JavaScript Architecture: Config, Image Slots, GSAP/ScrollTrigger, Lenis, UI
   ========================================================================== */

'use strict';

/**
 * 1. CENTRALIZED ANIMATION & SCROLL CONFIGURATION
 * Adjust every scene duration, blur amount, scale, snap, and easing here.
 */
const VELORE_CONFIG = {
  preloader: {
    duration: 2.0,          // Seconds for intro counter & bar draw
    revealDuration: 0.95,   // Seconds for clip-path expansion into hero
    revealEase: 'expo.inOut'
  },
  scroll: {
    lenisLerp: 0.08,        // Smooth scroll damping (lower = silkier)
    lenisWheelMultiplier: 0.95
  },
  pinnedStage: {
    scrollPerSceneVh: 130,  // Scroll travel distance per pinned scene (vh)
    transitionDuration: 1.0,
    panoramicTransitionDuration: 0.6,
    panoramicHoldDuration: 1.45,
    outgoingBlur: 14,       // px blur on outgoing scene (reduced on mobile)
    panoramicBlur: 6,       // Lighter cross-dissolve blur for crystal-clear 360 rooms
    outgoingScale: 1.08,
    incomingBlur: 14,       // px starting blur on incoming scene
    incomingScale: 1.12,
    pushInScale: 1.08,      // Ken Burns slow push-in while active
    pushInDriftX: -2.2,     // % horizontal drift on regular scenes
    panoramicDriftX: -14,   // % 360 horizontal pan across wide room images
    easeOutgoing: 'power2.inOut',
    easeIncoming: 'expo.out',
    snapDuration: { min: 0.25, max: 0.65 },
    snapDelay: 0.08,
    snapEase: 'power2.inOut'
  },
  textReveal: {
    titleBlur: 10,          // px starting blur on giant serif headline lines
    titleY: 40,             // px vertical offset on enter
    titleStagger: 0.12,     // seconds between headline lines
    titleDuration: 0.85,
    exitBlur: 8,
    exitY: -26
  },
  spotlight: {
    blurAmount: 10,         // px blur cross-dissolve between spotlight pieces
    duration: 0.55
  },
  portfolioSlider: {
    start: 'top 86%',       // ScrollTrigger entry point for Before -> After sweep
    end: 'bottom 40%',      // Completes reveal while project remains in upper viewport
    startPct: 92,           // Mostly Before on scroll entry (left -> right)
    endPct: 8,              // Mostly After once scrolled past (reverse on scroll up)
    scrubDuration: 0.45     // Smooth easing duration while scrubbing
  },
  particles: {
    desktopCount: 16,       // Floating champagne rings & spheres
    mobileCount: 6,
    minRadius: 2.5,
    maxRadius: 9,
    mouseParallax: 24,
    scrollParallax: 0.08
  },
  mobileBreakpoint: 768
};

/**
 * 2. LABELLED IMAGE SLOT REGISTRY (14-IMAGE BUDGET)
 * Replace any path below (e.g. swap in .webp assets) and all slots & reuses update automatically.
 */
const IMAGE_SLOTS = {
  // 01. Hero full-screen twilight living room (reused for Final CTA, Journal 01)
  heroInterior: 'assets/images/01-hero-interior.jpg',
  // 02-05 & 14. Spaces in 360 panoramic rooms (Dining reused for Journal 02; Bedroom for Journal 03)
  spaceDining: 'assets/images/02-space-dining.jpg',
  spaceLiving: 'assets/images/03-space-living.jpg',
  spaceBedroom: 'assets/images/04-space-bedroom.jpg',
  spaceKitchen: 'assets/images/05-space-kitchen.jpg',
  spaceBathroom: 'assets/images/14-space-bathroom.jpg',
  // 06-11. Portfolio Before & After transformation pairs (3 projects = 6 images)
  project1Before: 'assets/images/06-project1-before.jpg',
  project1After: 'assets/images/07-project1-after.jpg',
  project2Before: 'assets/images/08-project2-before.jpg',
  project2After: 'assets/images/09-project2-after.jpg',
  project3Before: 'assets/images/10-project3-before.jpg',
  project3After: 'assets/images/11-project3-after.jpg',
  // 12. About founder editorial portrait
  aboutFounder: 'assets/images/12-about-founder.jpg',
  // 13. Featured piece spotlight (legacy fallback)
  featuredPiece: 'assets/images/13-featured-piece.jpg',
  // 15-18. Bespoke signature pieces (Pieces You Will Love)
  pieceStoneMonolith: 'assets/images/15-piece-stone-monolith.jpg',
  pieceCurvedSalon: 'assets/images/16-piece-curved-salon.jpg',
  pieceQuartziteIsland: 'assets/images/17-piece-quartzite-island.jpg',
  pieceChaiseSanctuary: 'assets/images/18-piece-chaise-sanctuary.jpg'
};

/**
 * 3. CURATED STUDIO DATA (Spotlight Editions, Category Catalog, Projects, Journal)
 */
const SPOTLIGHT_EDITIONS = [
  {
    id: 'lumina-quartzite-island',
    imageSlot: 'pieceQuartziteIsland',
    category: 'Kitchen Atelier • Culinary Monolith',
    name: 'LUMINA BACKLIT QUARTZITE ISLAND',
    desc: 'Translucent crystalline quartzite waterfall kitchen island illuminated from within, paired with unlacquered champagne brass globe pendants and bespoke upholstered bar seating.',
    material: 'Crystalline Quartzite & Champagne Brass',
    dimensions: '340 × 120 × 92 cm',
    cropPosition: 'center 50%',
    cropScale: 1.0,
    filter: 'none',
    swatches: [
      { label: 'Crystalline Quartzite', hex: '#EFE8DC' },
      { label: 'Warm Backlight 2400K', hex: '#E8AF64' },
      { label: 'Champagne Brass', hex: '#D8B98F' },
      { label: 'Espresso Joinery', hex: '#241B16' }
    ]
  },
  {
    id: 'sovereign-stone-monolith',
    imageSlot: 'pieceStoneMonolith',
    category: 'Living Atelier • Cleft Stone & Light',
    name: 'SOVEREIGN CLEFT STONE TABLE',
    desc: 'Quarried monolithic stone coffee table with recessed perimeter underglow, set against a dramatic hand-cleft travertine wall and warm coastal dusk light.',
    material: 'Raw Cleft Travertine & 2400K Underglow',
    dimensions: '160 × 95 × 36 cm',
    cropPosition: 'center 60%',
    cropScale: 1.0,
    filter: 'none',
    swatches: [
      { label: 'Cleft Travertine', hex: '#D2BEA4' },
      { label: 'Warm Amber 2400K', hex: '#E5A962' },
      { label: 'Oat Bouclé', hex: '#DDD2C3' },
      { label: 'Sunset Terracotta', hex: '#A3684B' }
    ]
  },
  {
    id: 'aura-curved-salon',
    imageSlot: 'pieceCurvedSalon',
    category: 'Salon Atelier • Organic Seating & Luminaires',
    name: 'AURA CURVED CONVERSATION SUITE',
    desc: 'Gently radiused low-profile conversation sofa in sand-washed linen, paired with channel-pleated ottoman poufs, low timber disc table, and artisan woven globe pendants.',
    material: 'Sand Washed Linen & Woven Pendants',
    dimensions: '380 × 320 × 68 cm',
    cropPosition: 'center 48%',
    cropScale: 1.0,
    filter: 'none',
    swatches: [
      { label: 'Sand Washed Linen', hex: '#D6C8B5' },
      { label: 'Woven Rattan', hex: '#C29F6C' },
      { label: 'Natural White Oak', hex: '#B89B7A' },
      { label: 'Warm Cream', hex: '#EFE8DC' }
    ]
  },
  {
    id: 'serein-chaise-sanctuary',
    imageSlot: 'pieceChaiseSanctuary',
    category: 'Bedroom Atelier • Sanctuary Suite',
    name: 'SEREIN BOUCLÉ CHAISE & HALO MIRROR',
    desc: 'Organic S-curved bouclé daybed lounge anchored by a large circular backlit halo mirror, vertical globe sconces, solid timber disc table, and textural wool rug.',
    material: 'Textured Bouclé, Backlit Mirror & Walnut',
    dimensions: '190 × 85 × 74 cm / Suite',
    cropPosition: 'center 40%',
    cropScale: 1.0,
    filter: 'none',
    swatches: [
      { label: 'Oat Bouclé', hex: '#E5DACB' },
      { label: 'Backlit Halo 2400K', hex: '#E7B16A' },
      { label: 'Solid Walnut', hex: '#583F2C' },
      { label: 'Muted Terracotta', hex: '#87513B' }
    ]
  }
];

const MATERIAL_CATALOG = {
  Furniture: [
    { name: 'Sienna Low Sectional', spec: 'Belgian Linen & Smoked Ash • 320 cm', tex: 'tex-fabric' },
    { name: 'Monolith Dining Table', spec: 'Solid European Walnut • 340 × 110 cm', tex: 'tex-wood' },
    { name: 'Saddle Club Armchair', spec: 'Vegetable-Tanned Hide & Bronze', tex: 'tex-leather' }
  ],
  Lighting: [
    { name: 'Aurelia Halo Pendant', spec: 'Brushed Champagne Brass • 2400K LED', tex: 'tex-metal' },
    { name: 'Luminous Alabaster Disc', spec: 'Spanish Veined Alabaster • Amber Halo Glow', tex: 'tex-alabaster' },
    { name: 'Nocturne Drop Sconce', spec: 'Turned Alabaster & Aged Bronze', tex: 'tex-stone' },
    { name: 'Fluted Cove Channel', spec: 'Recessed Walnut Architectural Trim', tex: 'tex-wood' }
  ],
  Surfaces: [
    { name: 'Backlit Translucent Quartzite', spec: 'Illuminated Crystalline Slab • 2400K Core', tex: 'tex-quartzite' },
    { name: 'Fluted Smoked Walnut', spec: 'Quarter-Sawn Matte Waxed Acoustic Rib', tex: 'tex-wood' },
    { name: 'Honed Nero Marquina', spec: 'Spanish Dark Marble • Leather Finish', tex: 'tex-stone' },
    { name: 'Satin Champagne Plate', spec: 'Unlacquered Architectural Brass Sheet', tex: 'tex-metal' }
  ],
  Textiles: [
    { name: 'Flanders Heavy Bouclé', spec: 'Virgin Wool & Alpaca • Warm Oat', tex: 'tex-fabric' },
    { name: 'Raw Belgian Drapery', spec: 'Wide-Width Translucent Bronze Flax', tex: 'tex-fabric' },
    { name: 'Aniline Saddle Hide', spec: 'Full-Grain Drum-Dyed Italian Leather', tex: 'tex-leather' }
  ],
  Decor: [
    { name: 'Tivoli Carved Bowl', spec: 'Hand-Turned Unfilled Travertine', tex: 'tex-stone' },
    { name: 'Cast Bronze Vessel', spec: 'Lost-Wax Patinated Sculptural Form', tex: 'tex-metal' },
    { name: 'Charred Oak Tray', spec: 'Brushed Japanese Shou Sugi Ban Finish', tex: 'tex-wood' }
  ],
  Custom: [
    { name: 'Concealed Espresso Bar', spec: 'Pocket Walnut Doors & Brass Inlay', tex: 'tex-wood' },
    { name: 'Bespoke Headboard Suite', spec: 'Acoustic Suede & Integrated Reading Glow', tex: 'tex-leather' },
    { name: 'Monolith Island Joinery', spec: 'Mitered Stone Apron & Soft-Close Oak', tex: 'tex-stone' }
  ]
};

const PROJECTS_DATA = {
  observatory: {
    title: 'The Malabar Sanctuary Villa',
    meta: 'Residential • Malappuram, Kerala • 420 m² • 2025',
    beforeSlot: 'project1Before',
    afterSlot: 'project1After',
    brief: 'Transform a private hillside residence in Malappuram into a serene, acoustically hushed twilight home.',
    challenge: 'Deep structural column spans and intense tropical afternoon light disrupted visual warmth across the main living salon.',
    concept: 'Continuous vertical fluted teak bands conceal structural columns and bar storage while framing verdant courtyard vistas.',
    materials: 'Nilambur Teak, Honed Granite, Unlacquered Brass, Handwoven Linen',
    duration: '9 Months • Turnkey Delivery'
  },
  'casa-calma': {
    title: 'Casa Calma Waterfront Villa',
    meta: 'Villas • Kochi Backwaters, Kerala • 680 m² • 2024',
    beforeSlot: 'project2Before',
    afterSlot: 'project2After',
    brief: 'Reimagine a waterfront courtyard pavilion into a tactile dark-warm family villa grounded in natural stone and shade.',
    challenge: 'Fragmented interior masonry walls blocked cross-breezes and waterfront views from the entry court.',
    concept: 'Opened a single architectural datum crowned by timber rafters, textured dark stone, and low linen seating.',
    materials: 'Teak Rafters, Dark Kerala Granite, Brushed Bronze, Unbleached Linen',
    duration: '11 Months • Full Interior Architecture'
  },
  'atelier-noir': {
    title: 'Atelier Noir Executive Lounge',
    meta: 'Commercial & Hospitality • Calicut, Kerala • 310 m² • 2025',
    beforeSlot: 'project3Before',
    afterSlot: 'project3After',
    brief: 'Create an invitation-only private members salon balancing gallery stillness with intimate evening hospitality.',
    challenge: 'Low structural slab height and heavy acoustic bleed from surrounding thoroughfares.',
    concept: 'Suspended timber acoustic coffers paired with narrow-beam 2400K pin-spots and artisanal brass detailing.',
    materials: 'Dark Timber Coffers, Full-Grain Leather, Brushed Champagne Brass, Smoked Parquet',
    duration: '7 Months • Concept to Keys'
  }
};

const JOURNAL_ARTICLES = [
  {
    cat: 'Lighting • 4 Min Read',
    title: 'Why Darkness Is Essential to Calm Interior Architecture',
    imageSlot: 'heroInterior',
    paragraphs: [
      'Contemporary architecture often mistakes uniform brightness for openness. When every ceiling surface casts flat overhead light, textures flatten and the eye finds nowhere to rest.',
      'At VELORE, we design illumination in reverse — beginning with shadow. By washing vertical walnut fluting and honed stone walls in concealed 2400K linear coves, natural imperfections emerge softly while glare disappears.',
      'True residential luxury arrives at dusk: pools of amber warmth over conversation seating, quiet perimeter darkness along circulation halls, and fixtures that disappear until needed.'
    ]
  },
  {
    cat: 'Materiality • 5 Min Read',
    title: 'Unlacquered Brass, Honed Stone, and the Dignity of Patina',
    imageSlot: 'spaceDining',
    paragraphs: [
      'Synthetic coatings promise permanence by freezing a surface on day one, yet sealed finishes chip ungracefully over time. Living materials do the opposite: they record touch.',
      'An unlacquered champagne brass handle warms slightly in tone along the curve most gripped; oiled walnut deepens under winter window light; honed travertine softens underfoot.',
      'Choosing honest materials requires careful client education during sample review, yet five years after handover, it is consistently the patina our clients love most.'
    ]
  },
  {
    cat: 'Sanctuary • 3 Min Read',
    title: 'Designing Quietude: Acoustic Craft Inside Urban Residences',
    imageSlot: 'spaceBedroom',
    paragraphs: [
      'Luxury is as much auditory as visual. Minimalist glass-and-stone apartments frequently fail emotionally because hard parallel surfaces amplify footsteps and cutlery.',
      'We build acoustic absorption directly into our architecture: micro-perforated felt backing hidden behind walnut wall ribs, heavy wool carpet underlays, and double-layered sheer flax drapery.',
      'The result is rarely noticed consciously — clients simply remark that stepping through the front door feels as though the city volume was gently turned down.'
    ]
  }
];

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = () => window.innerWidth <= VELORE_CONFIG.mobileBreakpoint;

  applyImageSlots();
  initYear();
  initCustomCursor(prefersReducedMotion);
  initMagneticButtons(prefersReducedMotion);
  initNavigation();
  initAmbientSound();
  initHotspots();
  initLightingToggle();
  initBeforeAfterSliders();
  initPortfolioFiltering();
  initServicesInteraction();
  initMaterialsStudio();
  initMaterialSwatchExplorer();
  initContactAndNewsletter();
  initModals();
  initParticleSystems(prefersReducedMotion);

  // Sync GSAP + ScrollTrigger + Lenis Smooth Scroll
  const lenis = initSmoothScroll(prefersReducedMotion);

  // Store helper on window for smooth cross-section navigation
  window.veloreScrollTo = (target, offset = 0) => {
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(target, { offset, duration: 1.25 });
    } else {
      const el = typeof target === 'string' ? document.querySelector(target) : target;
      if (el) el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  initPreloader(prefersReducedMotion, () => {
    initHeroAnimations(prefersReducedMotion);
    initPinnedStage({
      stageId: 'spaces',
      counterReelId: 'spacesCounterReel',
      progressFillId: 'spacesProgressFill',
      progressDotsId: 'spacesProgress',
      isPanoramic: true,
      prefersReducedMotion,
      isMobile: isMobile()
    });
    initSvgLineDrawings(prefersReducedMotion);
    initScrollReveals(prefersReducedMotion);
    initBeforeAfterScrollScrub(prefersReducedMotion);
    initHorizontalProcess(prefersReducedMotion);
    initCounters(prefersReducedMotion);

    if (window.ScrollTrigger) {
      ScrollTrigger.refresh();
    }
  });
});

/* ==========================================================================
   Apply Central IMAGE_SLOTS Paths Across DOM & Preload Links
   ========================================================================== */
function applyImageSlots() {
  document.querySelectorAll('[data-image-slot]').forEach((img) => {
    const key = img.getAttribute('data-image-slot');
    if (key && IMAGE_SLOTS[key]) {
      img.setAttribute('src', IMAGE_SLOTS[key]);
    }
  });
}

function initYear() {
  const span = document.getElementById('yearSpan');
  if (span) span.textContent = String(new Date().getFullYear());
}

/* ==========================================================================
   Lenis Smooth Scroll Synced With GSAP ScrollTrigger
   ========================================================================== */
function initSmoothScroll(prefersReducedMotion) {
  if (prefersReducedMotion || typeof Lenis === 'undefined') return null;

  const lenis = new Lenis({
    lerp: VELORE_CONFIG.scroll.lenisLerp,
    wheelMultiplier: VELORE_CONFIG.scroll.lenisWheelMultiplier,
    smoothWheel: true
  });

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  } else {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  return lenis;
}

/* ==========================================================================
   0. Preloader (2s, Skippable) -> Curtain Lift Into Hero
   ========================================================================== */
function initPreloader(prefersReducedMotion, onComplete) {
  const preloader = document.getElementById('preloader');
  const brand = document.getElementById('preloaderBrand');
  const tagline = document.getElementById('preloaderTagline');
  const bar = document.getElementById('preloaderBar');
  const percent = document.getElementById('preloaderPercent');
  const skipBtn = document.getElementById('skipPreloaderBtn');

  if (!preloader) {
    document.body.classList.remove('is-locked');
    onComplete();
    return;
  }

  if (prefersReducedMotion || typeof gsap === 'undefined') {
    preloader.classList.add('is-done');
    document.body.classList.remove('is-locked');
    onComplete();
    return;
  }

  let finished = false;
  let tl = null;
  let guardTimer = null;

  const finishPreloader = () => {
    if (finished) return;
    finished = true;
    clearTimeout(guardTimer);
    document.removeEventListener('keydown', onEscapeSkip);
    preloader.classList.add('is-done');
    document.body.classList.remove('is-locked');
    onComplete();
  };

  const skipPreloader = () => {
    if (finished) return;
    if (tl) tl.kill();
    gsap.to(preloader, {
      clipPath: 'inset(0% 0% 100% 0%)',
      duration: 0.45,
      ease: 'power3.inOut',
      onComplete: finishPreloader
    });
  };

  const onEscapeSkip = (e) => {
    if (e.key === 'Escape') skipPreloader();
  };

  skipBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    skipPreloader();
  });
  document.addEventListener('keydown', onEscapeSkip);

  // Hard fallback guard so page can never remain locked
  const guardMs = (VELORE_CONFIG.preloader.duration + VELORE_CONFIG.preloader.revealDuration + 1.5) * 1000;
  guardTimer = setTimeout(finishPreloader, guardMs);

  const counterObj = { val: 0 };
  tl = gsap.timeline({
    onComplete: finishPreloader
  });

  tl.to([brand, tagline], {
    opacity: 1,
    y: 0,
    duration: 0.48,
    stagger: 0.1,
    ease: 'power2.out'
  })
    .to(
      bar,
      {
        scaleX: 1,
        duration: 1.25,
        ease: 'power2.inOut'
      },
      '-=0.2'
    )
    .to(
      counterObj,
      {
        val: 100,
        duration: 1.25,
        ease: 'power2.inOut',
        onUpdate: () => {
          const num = Math.round(counterObj.val);
          if (percent) percent.textContent = `${String(num).padStart(2, '0')}%`;
        }
      },
      '<'
    )
    .to(preloader, {
      clipPath: 'inset(0% 0% 100% 0%)',
      duration: 0.72,
      ease: VELORE_CONFIG.preloader.revealEase
    });
}

/* ==========================================================================
   1. Hero Scene: Full-Size Scroll-Driven Architectural Reveal (Full Clarity)
   ========================================================================== */
function initHeroAnimations(prefersReducedMotion) {
  const track = document.getElementById('heroScrollTrack') || document.getElementById('home');
  const video = document.getElementById('heroScrollVideo');
  const progressBar = document.getElementById('heroScrubProgress');
  const timeCounter = document.getElementById('heroTimeCounter');
  const chapterTitle = document.getElementById('heroCinemaChapter');
  const captionStage = document.getElementById('heroCaptionStage');
  const finalCtaImg = document.getElementById('finalCtaImg');

  // Entrance typography reveal on initial load
  const eyebrow = document.getElementById('heroEyebrow');
  const lines = document.querySelectorAll('#heroTitle .line');
  const sub = document.getElementById('heroSub');
  const actions = document.getElementById('heroActions');

  if (typeof gsap !== 'undefined') {
    gsap
      .timeline()
      .from(eyebrow, { opacity: 0, y: 14, duration: 0.65, ease: 'power2.out' })
      .from(
        lines,
        {
          opacity: 0,
          y: 36,
          duration: 0.85,
          stagger: 0.1,
          ease: 'expo.out'
        },
        '-=0.35'
      )
      .from([sub, actions].filter(Boolean), { opacity: 0, y: 18, duration: 0.65, stagger: 0.1, ease: 'power2.out' }, '-=0.45');
  }

  // Scroll push-in for final CTA image
  if (finalCtaImg && window.ScrollTrigger) {
    gsap.fromTo(
      finalCtaImg,
      { scale: 1.0 },
      {
        scale: 1.09,
        ease: 'none',
        scrollTrigger: {
          trigger: '#cta',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );
  }

  if (!track || !video) return;

  // Crucial: ensure video is paused so it never plays as an ordinary movie
  video.pause();
  video.muted = true;
  video.playsInline = true;

  let duration = 33.79;
  const updateDuration = () => {
    if (video.duration && !isNaN(video.duration) && video.duration > 0) {
      duration = video.duration;
    }
  };
  video.addEventListener('loadedmetadata', () => {
    updateDuration();
    if (video.currentTime === 0) {
      try { video.currentTime = 0.001; } catch (e) {}
    }
  });
  video.addEventListener('canplay', updateDuration);

  // Time format helper (00:00)
  const formatTime = (secs) => {
    const s = Math.max(0, Math.floor(secs));
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return `${String(m).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
  };

  let targetProgress = 0;
  let currentProgress = 0;
  let isSeeking = false;

  video.addEventListener('seeked', () => {
    isSeeking = false;
  });

  const renderScrub = () => {
    // Silky lerp dampening for liquid-smooth scrubbing on wheel & touch
    currentProgress += (targetProgress - currentProgress) * 0.18;
    if (Math.abs(targetProgress - currentProgress) < 0.0004) {
      currentProgress = targetProgress;
    }

    const targetSec = Math.max(0, Math.min(duration, currentProgress * duration));

    if (video.readyState >= 2 && !isSeeking) {
      if (Math.abs(video.currentTime - targetSec) > 0.03) {
        isSeeking = true;
        video.currentTime = targetSec;
      }
    }

    if (progressBar) {
      progressBar.style.width = `${(currentProgress * 100).toFixed(2)}%`;
    }

    if (timeCounter) {
      timeCounter.textContent = `${formatTime(targetSec)} / ${formatTime(duration)}`;
    }

    // Fade caption on the first of the scrolling animation as user scrolls down
    if (captionStage) {
      if (currentProgress < 0.24) {
        const capOpacity = Math.max(0, 1 - (currentProgress / 0.18));
        captionStage.style.opacity = capOpacity.toFixed(3);
        captionStage.style.transform = `translateY(${-currentProgress * 70}px)`;
        captionStage.style.pointerEvents = capOpacity > 0.4 ? 'auto' : 'none';
      } else {
        captionStage.style.opacity = '0';
        captionStage.style.transform = 'translateY(-20px)';
        captionStage.style.pointerEvents = 'none';
      }
    }

    // Dynamic architectural chapter display during scroll
    if (chapterTitle) {
      if (currentProgress < 0.33) {
        chapterTitle.textContent = '01 · ATELIER REVEAL & COVE LIGHTING';
      } else if (currentProgress < 0.66) {
        chapterTitle.textContent = '02 · SCULPTED FLUTED WALNUT & HONED STONE';
      } else {
        chapterTitle.textContent = '03 · COMPLETED LIVING PAVILION & AMBIANCE';
      }
    }

    requestAnimationFrame(renderScrub);
  };

  const calculateProgress = () => {
    const rect = track.getBoundingClientRect();
    const trackHeight = rect.height - window.innerHeight;
    if (trackHeight <= 0) {
      targetProgress = 0;
      return;
    }
    const scrolled = -rect.top;
    targetProgress = Math.max(0, Math.min(1, scrolled / trackHeight));
  };

  window.addEventListener('scroll', calculateProgress, { passive: true });
  window.addEventListener('resize', calculateProgress, { passive: true });
  calculateProgress();
  renderScrub();
}

/* ==========================================================================
   2 & 4. Pinned Full-Screen Video-Style Cross-Dissolve Stage
   ========================================================================== */
function initPinnedStage({
  stageId,
  counterReelId,
  progressFillId,
  progressDotsId,
  isPanoramic,
  prefersReducedMotion,
  isMobile
}) {
  const stage = document.getElementById(stageId);
  if (!stage) return;

  const scenes = Array.from(stage.querySelectorAll('.scene'));
  if (!scenes.length) return;

  if (prefersReducedMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    stage.style.height = 'auto';
    scenes.forEach((s) => {
      s.style.position = 'relative';
      s.style.minHeight = '85vh';
      s.style.opacity = '1';
      s.style.visibility = 'visible';
    });
    return;
  }

  if (scenes.length < 2) return;

  const counterReel = document.getElementById(counterReelId);
  const progressFill = document.getElementById(progressFillId);
  const dots = Array.from(document.querySelectorAll(`#${progressDotsId} .scene-dot`));

  const cfg = VELORE_CONFIG.pinnedStage;
  const txtCfg = VELORE_CONFIG.textReveal;
  const baseOutBlur = isPanoramic ? cfg.panoramicBlur : cfg.outgoingBlur;
  const baseInBlur = isPanoramic ? cfg.panoramicBlur : cfg.incomingBlur;
  const transDur = isPanoramic ? cfg.panoramicTransitionDuration : cfg.transitionDuration;
  const holdDuration = isPanoramic ? cfg.panoramicHoldDuration : 0.75;
  const outBlur = isMobile ? Math.round(baseOutBlur * 0.45) : baseOutBlur;
  const inBlur = isMobile ? Math.round(baseInBlur * 0.45) : baseInBlur;
  const titleBlur = isMobile ? Math.round(txtCfg.titleBlur * 0.4) : txtCfg.titleBlur;

  // Initial states: Scene 0 sharp with filter:none, Scenes 1..N-1 ready to cross-dissolve in
  scenes.forEach((scene, idx) => {
    if (idx === 0) {
      gsap.set(scene, { autoAlpha: 1, scale: 1, filter: 'none', zIndex: 2 });
    } else {
      gsap.set(scene, {
        autoAlpha: 0,
        scale: isPanoramic ? 1.04 : cfg.incomingScale,
        filter: `blur(${inBlur}px)`,
        zIndex: 1
      });
    }
  });

  const tl = gsap.timeline({ paused: true });
  const snapUnits = [0];
  const transitionMidUnits = [];

  // Scene 0 subtle push-in / 360 horizontal pan before first cross-dissolve
  const scene0Media = scenes[0].querySelector('.scene__img');
  if (scene0Media) {
    tl.to(
      scene0Media,
      isPanoramic
        ? { xPercent: cfg.panoramicDriftX, scale: 1.0, duration: isPanoramic ? 1.2 : 0.75, ease: 'none' }
        : { scale: cfg.pushInScale, xPercent: cfg.pushInDriftX, duration: 0.75, ease: 'none' },
      0
    );
  }

  let cursorTime = isPanoramic ? 1.2 : 0.75;

  for (let i = 0; i < scenes.length - 1; i++) {
    const outScene = scenes[i];
    const inScene = scenes[i + 1];

    const outParts = outScene.querySelectorAll('.eyebrow, .scene__title, .scene__desc, .room-specs, .btn');
    const inEyebrow = inScene.querySelector('.eyebrow');
    const inLines = inScene.querySelectorAll('.split-line');
    const inDesc = inScene.querySelector('.scene__desc');
    const inExtras = inScene.querySelectorAll('.room-specs, .btn');
    const inMedia = inScene.querySelector('.scene__img');

    const transStart = cursorTime;
    transitionMidUnits.push(transStart + transDur * 0.5);

    // Outgoing scene text lifts and blurs away
    if (outParts.length) {
      tl.to(
        outParts,
        {
          opacity: 0,
          y: txtCfg.exitY,
          filter: `blur(${isMobile ? 3 : txtCfg.exitBlur}px)`,
          duration: Math.min(0.4, transDur * 0.65),
          stagger: 0.03,
          ease: 'power2.in'
        },
        transStart
      );
    }

    // Outgoing scene: opacity 1->0, blur 0->outBlur, scale 1->outgoingScale
    tl.to(
      outScene,
      {
        autoAlpha: 0,
        scale: isPanoramic ? 1.03 : cfg.outgoingScale,
        filter: `blur(${outBlur}px)`,
        duration: transDur,
        ease: cfg.easeOutgoing,
        zIndex: 1
      },
      transStart
    );

    // Incoming scene: opacity 0->1, blur->0, scale->1.0 overlapping outgoing
    tl.fromTo(
      inScene,
      {
        autoAlpha: 0,
        scale: isPanoramic ? 1.04 : cfg.incomingScale,
        filter: `blur(${inBlur}px)`,
        zIndex: 3
      },
      {
        autoAlpha: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: transDur,
        ease: cfg.easeIncoming
      },
      transStart + 0.06
    );

    // Clear compositor filter completely once scene settles so imagery remains razor-sharp
    tl.set(inScene, { filter: 'none' }, transStart + 0.06 + transDur);

    // Incoming text sequence: Eyebrow -> Headline lines -> Paragraph -> Extras
    const textStart = transStart + transDur * 0.35;
    if (inEyebrow) {
      tl.fromTo(
        inEyebrow,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
        textStart
      );
    }
    if (inLines.length) {
      tl.fromTo(
        inLines,
        { opacity: 0, y: txtCfg.titleY, filter: `blur(${titleBlur}px)` },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: txtCfg.titleDuration * 0.82,
          stagger: txtCfg.titleStagger,
          ease: 'expo.out'
        },
        textStart + 0.05
      );
      tl.set(inLines, { filter: 'none' }, textStart + 0.05 + txtCfg.titleDuration * 0.85 + inLines.length * txtCfg.titleStagger);
    }
    if (inDesc) {
      tl.fromTo(
        inDesc,
        { opacity: 0, y: 16 },
        { opacity: 0.92, y: 0, duration: 0.48, ease: 'power2.out' },
        textStart + 0.2
      );
    }
    if (inExtras.length) {
      tl.fromTo(
        inExtras,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: 'power2.out' },
        textStart + 0.28
      );
    }

    const settleTime = transStart + transDur + 0.16;
    snapUnits.push(settleTime);

    // Ken Burns slow push-in or 360 panoramic horizontal pan while active
    if (inMedia) {
      tl.fromTo(
        inMedia,
        isPanoramic ? { xPercent: 0, scale: 1.0 } : { scale: 1.0, xPercent: 0 },
        isPanoramic
          ? { xPercent: cfg.panoramicDriftX, scale: 1.0, duration: transDur + holdDuration, ease: 'none' }
          : { scale: cfg.pushInScale, xPercent: cfg.pushInDriftX, duration: transDur + holdDuration, ease: 'none' },
        transStart + 0.06
      );
    }

    cursorTime = settleTime + holdDuration;
  }

  const totalDur = tl.duration();
  const snapProgressPoints = snapUnits.map((u) => Math.min(1, Math.max(0, u / totalDur)));
  const thresholdProgress = transitionMidUnits.map((u) => u / totalDur);

  const quickbarBtns = isPanoramic
    ? Array.from(document.querySelectorAll('#spacesQuickbar [data-space-jump]'))
    : [];

  let currentSceneIdx = 0;

  function setHudIndex(idx) {
    if (idx === currentSceneIdx) return;
    currentSceneIdx = idx;

    if (counterReel) {
      gsap.to(counterReel, {
        yPercent: -(idx * (100 / scenes.length)),
        duration: 0.55,
        ease: 'expo.out'
      });
    }

    dots.forEach((dot, dIdx) => {
      dot.classList.toggle('is-active', dIdx === idx);
    });

    quickbarBtns.forEach((btn) => {
      btn.classList.toggle('is-active', Number(btn.getAttribute('data-space-jump')) === idx);
    });
  }

  const st = ScrollTrigger.create({
    trigger: stage,
    start: 'top top',
    end: () => `+=${window.innerHeight * ((scenes.length * cfg.scrollPerSceneVh) / 100)}`,
    pin: true,
    scrub: 0.65,
    animation: tl,
    snap: {
      snapTo: snapProgressPoints,
      duration: cfg.snapDuration,
      delay: cfg.snapDelay,
      ease: cfg.snapEase
    },
    onUpdate: (self) => {
      if (progressFill) {
        progressFill.style.transform = `translateX(-50%) scaleY(${self.progress})`;
      }
      let activeIdx = 0;
      for (let t = 0; t < thresholdProgress.length; t++) {
        if (self.progress >= thresholdProgress[t]) {
          activeIdx = t + 1;
        }
      }
      setHudIndex(activeIdx);
    }
  });

  // Allow clicking right-edge tick dots & quickbar buttons to jump smoothly to that room
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const targetIdx = Number(dot.getAttribute('data-jump'));
      const targetProgress = snapProgressPoints[targetIdx] ?? 0;
      const targetY = st.start + (st.end - st.start) * targetProgress;
      window.veloreScrollTo(targetY);
    });
  });

  quickbarBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetIdx = Number(btn.getAttribute('data-space-jump'));
      const targetProgress = snapProgressPoints[targetIdx] ?? 0;
      const targetY = st.start + (st.end - st.start) * targetProgress;
      window.veloreScrollTo(targetY);
    });
  });

  // Interactive 360 subtle look-around pan when moving/dragging pointer across room stage
  if (isPanoramic && !isMobile) {
    stage.addEventListener(
      'pointermove',
      (e) => {
        const activeBg = scenes[currentSceneIdx]?.querySelector('.scene__bg');
        if (!activeBg || currentSceneIdx >= scenes.length - 1) return;
        const relX = (e.clientX / window.innerWidth - 0.5) * -3.5;
        gsap.to(activeBg, { xPercent: relX, duration: 0.9, ease: 'power2.out', overwrite: 'auto' });
      },
      { passive: true }
    );
  }

  // Expose programmatic jump helper for "Walk through this project" links
  stage.jumpToScene = (idx) => {
    const safeIdx = Math.max(0, Math.min(scenes.length - 1, idx));
    const targetProgress = snapProgressPoints[safeIdx] ?? 0;
    const targetY = st.start + (st.end - st.start) * targetProgress;
    window.veloreScrollTo(targetY);
  };
}

/* ==========================================================================
   SVG Stroke Line Drawings (About Founder Signature)
   ========================================================================== */
function initSvgLineDrawings(prefersReducedMotion) {
  if (prefersReducedMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const prepPaths = (svgSelector) => {
    const paths = document.querySelectorAll(`${svgSelector} path, ${svgSelector} line, ${svgSelector} rect, ${svgSelector} circle, ${svgSelector} ellipse`);
    paths.forEach((el) => {
      if (typeof el.getTotalLength === 'function') {
        const len = el.getTotalLength();
        el.style.strokeDasharray = `${len}`;
        el.style.strokeDashoffset = `${len}`;
      }
    });
    return paths;
  };

  // About Founder Signature
  const sigPaths = prepPaths('#founderSignature');
  if (sigPaths.length) {
    gsap.to(sigPaths, {
      strokeDashoffset: 0,
      duration: 1.65,
      stagger: 0.25,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '#founderSignature',
        start: 'top 85%',
        once: true
      }
    });
  }
}

/* ==========================================================================
   Floating Champagne Rings & Gold Particles (Canvas 3D Parallax)
   ========================================================================== */
function initParticleSystems(prefersReducedMotion) {
  if (prefersReducedMotion) return;

  const canvases = document.querySelectorAll('.particle-canvas');
  if (!canvases.length) return;

  const count = window.innerWidth <= VELORE_CONFIG.mobileBreakpoint
    ? VELORE_CONFIG.particles.mobileCount
    : VELORE_CONFIG.particles.desktopCount;

  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener(
    'mousemove',
    (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    },
    { passive: true }
  );

  canvases.forEach((canvas) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles = Array.from({ length: count }, (_, idx) => ({
      x: Math.random(),
      y: Math.random(),
      r:
        VELORE_CONFIG.particles.minRadius +
        Math.random() * (VELORE_CONFIG.particles.maxRadius - VELORE_CONFIG.particles.minRadius),
      depth: 0.35 + Math.random() * 0.9,
      vx: (Math.random() - 0.5) * 0.00018,
      vy: -0.00012 - Math.random() * 0.00022,
      isRing: idx % 3 !== 0,
      alpha: 0.22 + Math.random() * 0.42
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, rect.width * dpr);
      canvas.height = Math.max(1, rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    let rafId = null;
    let isVisible = false;

    const render = () => {
      if (!isVisible) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      const scrollShift = (window.scrollY * VELORE_CONFIG.particles.scrollParallax) % h;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -0.05) p.y = 1.05;
        if (p.x < -0.05) p.x = 1.05;
        if (p.x > 1.05) p.x = -0.05;

        const px =
          p.x * w + mouseX * VELORE_CONFIG.particles.mouseParallax * p.depth;
        const py =
          ((p.y * h - scrollShift * p.depth * 0.35 + h) % h) +
          mouseY * VELORE_CONFIG.particles.mouseParallax * p.depth;

        ctx.save();
        ctx.globalAlpha = p.alpha;

        if (p.isRing) {
          ctx.beginPath();
          ctx.arc(px, py, p.r * 1.45, 0, Math.PI * 2);
          ctx.strokeStyle = '#D8B98F';
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          const grad = ctx.createRadialGradient(px - p.r * 0.3, py - p.r * 0.3, 0.4, px, py, p.r);
          grad.addColorStop(0, '#F1E7D8');
          grad.addColorStop(0.55, '#D8B98F');
          grad.addColorStop(1, 'rgba(216,185,143,0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, p.r, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      rafId = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            if (!rafId) rafId = requestAnimationFrame(render);
          } else if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }
        });
      },
      { threshold: 0.02 }
    );

    observer.observe(canvas);
  });
}

/* ==========================================================================
   Regular Section Reveals, Founder Mask Reveal, & Counters
   ========================================================================== */
function initScrollReveals(prefersReducedMotion) {
  const targets = Array.from(document.querySelectorAll('.reveal-up')).filter((el) => {
    // Prevent nested .reveal-up elements from double-animating or ghosting
    return !el.parentElement?.closest('.reveal-up');
  });

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      let staggerIdx = 0;
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target;
        target.style.transitionDelay = `${Math.min(staggerIdx * 75, 240)}ms`;
        target.classList.add('is-revealed');
        staggerIdx += 1;
        observer.unobserve(target);
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => revealObserver.observe(el));

  // Soft clip-path reveal on Founder portrait
  const founderReveal = document.getElementById('founderReveal');
  if (founderReveal && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.fromTo(
      founderReveal,
      { clipPath: 'inset(12% 0% 12% 0%)', scale: 1.04 },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        duration: 1.1,
        ease: 'power3.out',
        clearProps: 'transform,clipPath',
        scrollTrigger: {
          trigger: founderReveal,
          start: 'top 84%',
          once: true
        }
      }
    );
  }
}

function initCounters(prefersReducedMotion) {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length || prefersReducedMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    return;
  }

  counters.forEach((el) => {
    const target = Number(el.getAttribute('data-counter')) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const obj = { value: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          value: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = `${Math.round(obj.value)}${suffix}`;
          }
        });
      }
    });
  });
}

/* ==========================================================================
   Six Quiet Phases (Architectural Boxes — Side-Entrance Scroll Animations)
   ========================================================================== */
function initHorizontalProcess(prefersReducedMotion) {
  const cards = document.querySelectorAll('#processGrid .process-card');
  if (!cards.length) return;

  if (prefersReducedMotion || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    cards.forEach((card) => {
      card.style.opacity = '1';
      card.style.transform = 'none';
    });
    return;
  }

  cards.forEach((card, idx) => {
    const colIndex = idx % 3; // 0 = left, 1 = center, 2 = right
    const xDist = colIndex === 0 ? -35 : (colIndex === 2 ? 35 : 0);

    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 35,
        x: xDist
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.85,
        delay: colIndex * 0.1,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          once: true
        }
      }
    );
  });
}

/* ==========================================================================
   Navigation (Transparent at Top -> Slim Glass on Scroll, Auto-Hide, Spy, Mobile)
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.nav-link');
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-menu__link, .mobile-menu__cta');

  let lastScrollY = window.scrollY;

  const syncHeaderState = () => {
    const currentY = window.scrollY;
    const isMenuOpen = mobileMenu && mobileMenu.classList.contains('is-open');

    header.classList.toggle('is-scrolled', currentY > 40);

    if (!isMenuOpen) {
      if (currentY > 140 && currentY > lastScrollY + 6) {
        header.classList.add('is-hidden');
      } else if (currentY < lastScrollY - 4 || currentY <= 140) {
        header.classList.remove('is-hidden');
      }
    }

    lastScrollY = currentY;
  };

  syncHeaderState();
  window.addEventListener('scroll', syncHeaderState, { passive: true });

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      // Special case: walkthrough link jumps straight to matching 360 room
      const spaceIdx = anchor.getAttribute('data-walkthrough-space');
      if (spaceIdx !== null && target.jumpToScene) {
        target.jumpToScene(Number(spaceIdx));
        return;
      }

      // Special case: service enquire link pre-selects service in form
      const subject = anchor.getAttribute('data-enquire-subject');
      if (subject) {
        const select = document.getElementById('projectType');
        if (select) select.value = subject;
      }

      window.veloreScrollTo(target);
    });
  });

  // Scroll-spy for active champagne underline
  const sections = document.querySelectorAll('[data-section]');
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
          });
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach((s) => spy.observe(s));
  }

  // Mobile Menu Drawer
  const setMenuState = (open) => {
    if (!navToggle || !mobileMenu) return;
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    mobileMenu.classList.toggle('is-open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('is-locked', open);
    if (open) header.classList.remove('is-hidden');
  };

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const next = !mobileMenu.classList.contains('is-open');
      setMenuState(next);
    });
  }

  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => setMenuState(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('is-open')) {
      setMenuState(false);
    }
  });
}

function initHotspots() {
  const hotspots = document.querySelectorAll('.hotspot');
  if (!hotspots.length) return;

  hotspots.forEach((spot) => {
    const btn = spot.querySelector('.hotspot__btn');
    btn?.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !spot.classList.contains('is-open');
      hotspots.forEach((h) => h.classList.remove('is-open'));
      spot.classList.toggle('is-open', willOpen);
    });
  });

  document.addEventListener('click', () => {
    hotspots.forEach((h) => h.classList.remove('is-open'));
  });
}

/* ==========================================================================
   Portfolio Filters & Draggable Before/After Sliders
   ========================================================================== */
function initBeforeAfterSliders() {
  // Filter tabs
  const tabs = document.querySelectorAll('[data-filter]');
  const rows = document.querySelectorAll('#portfolioList .project-row');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const cat = tab.getAttribute('data-filter');
      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });

      rows.forEach((row) => {
        const categories = (row.getAttribute('data-category') || '').split(' ');
        const match = cat === 'all' || categories.includes(cat);
        row.classList.toggle('is-hidden', !match);
      });

      document.dispatchEvent(new CustomEvent('velore:portfolioFiltered'));
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    });
  });

  // Draggable & keyboard-accessible comparison sliders (synced cleanly with scroll scrub)
  document.querySelectorAll('[data-ba-slider]').forEach((slider) => {
    const beforeWrap = slider.querySelector('.ba-slider__before');
    const divider = slider.querySelector('.ba-slider__divider');
    const handle = slider.querySelector('.ba-slider__handle');
    if (!beforeWrap || !divider || !handle) return;

    const animState = { pct: 50, dragging: false };

    const applyVisualPct = (pct) => {
      const clamped = Math.max(5, Math.min(95, pct));
      animState.pct = clamped;
      beforeWrap.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`;
      divider.style.left = `${clamped}%`;
      handle.style.left = `${clamped}%`;
      slider.setAttribute('aria-valuenow', String(Math.round(clamped)));
    };

    const setManualPct = (pct) => {
      if (typeof gsap !== 'undefined') gsap.killTweensOf(animState);
      applyVisualPct(pct);
    };

    slider._baState = animState;
    slider._setBaPctImmediate = setManualPct;
    slider._glideBaPct = (targetPct) => {
      const clampedTarget = Math.max(5, Math.min(95, targetPct));
      if (typeof gsap === 'undefined') {
        applyVisualPct(clampedTarget);
        return;
      }
      gsap.to(animState, {
        pct: clampedTarget,
        duration: VELORE_CONFIG.portfolioSlider.scrubDuration,
        ease: 'power2.out',
        overwrite: 'auto',
        onUpdate: () => applyVisualPct(animState.pct)
      });
    };

    const setFromPointer = (clientX) => {
      const rect = slider.getBoundingClientRect();
      if (!rect.width) return;
      const pct = ((clientX - rect.left) / rect.width) * 100;
      setManualPct(pct);
    };

    slider.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      animState.dragging = true;
      slider.classList.add('is-dragging');
      if (slider.setPointerCapture) slider.setPointerCapture(e.pointerId);
      setFromPointer(e.clientX);
    });

    slider.addEventListener('pointermove', (e) => {
      if (!animState.dragging) return;
      setFromPointer(e.clientX);
    });

    const stopDrag = () => {
      animState.dragging = false;
      slider.classList.remove('is-dragging');
    };

    slider.addEventListener('pointerup', stopDrag);
    slider.addEventListener('pointercancel', stopDrag);

    slider.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setManualPct(animState.pct - 4);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setManualPct(animState.pct + 4);
      }
    });
  });
}

function initBeforeAfterScrollScrub(prefersReducedMotion) {
  if (prefersReducedMotion || typeof ScrollTrigger === 'undefined') return;

  const cfg = VELORE_CONFIG.portfolioSlider;
  document.querySelectorAll('[data-ba-slider]').forEach((slider) => {
    if (!slider._glideBaPct) return;
    slider._setBaPctImmediate?.(cfg.startPct);

    const syncFromScroll = (progress) => {
      if (slider._baState?.dragging) return;
      const targetPct = cfg.startPct + (cfg.endPct - cfg.startPct) * progress;
      slider._glideBaPct(targetPct);
    };

    ScrollTrigger.create({
      trigger: slider,
      start: cfg.start,
      end: cfg.end,
      onUpdate: (self) => syncFromScroll(self.progress),
      onLeave: () => {
        if (!slider._baState?.dragging) slider._glideBaPct(cfg.endPct);
      },
      onLeaveBack: () => {
        if (!slider._baState?.dragging) slider._glideBaPct(cfg.startPct);
      }
    });
  });
}

/* ==========================================================================
   Portfolio Filtering (Unpinned Natural Editorial Layout)
   ========================================================================== */
function initPortfolioFiltering() {
  const tabs = document.querySelectorAll('.filter-tabs [data-filter]');
  const list = document.getElementById('portfolioList');
  if (!tabs.length || !list) return;

  const allRows = Array.from(list.querySelectorAll('.project-row'));

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const cat = tab.getAttribute('data-filter');
      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', String(active));
      });

      allRows.forEach((row) => {
        const categories = (row.getAttribute('data-category') || '').split(' ');
        const match = cat === 'all' || categories.includes(cat);
        row.classList.toggle('is-hidden', !match);
      });

      if (window.ScrollTrigger) {
        ScrollTrigger.refresh();
      }
    });
  });
}

/* ==========================================================================
   Spaces in 360° Daylight / Evening Lighting Toggle
   ========================================================================== */
function initLightingToggle() {
  const stage = document.getElementById('spaces');
  const toggle = document.getElementById('lightingToggle');
  if (!stage || !toggle) return;

  const buttons = toggle.querySelectorAll('[data-lighting-mode]');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-lighting-mode') || 'night';
      stage.setAttribute('data-lighting', mode);
      buttons.forEach((b) => b.classList.toggle('is-active', b === btn));
    });
  });
}

/* ==========================================================================
   Services Clean Numbered Accordion
   ========================================================================== */
function initServicesInteraction() {
  const accordion = document.getElementById('servicesAccordion');
  if (!accordion) return;

  const items = Array.from(accordion.querySelectorAll('.service-item'));

  items.forEach((item) => {
    const trigger = item.querySelector('.service-item__trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      items.forEach((other) => {
        const open = other === item ? willOpen : false;
        other.classList.toggle('is-open', open);
        other.querySelector('.service-item__trigger')?.setAttribute('aria-expanded', String(open));
      });
    });
  });
}

/* ==========================================================================
   Material Swatch Explorer (Hover / Tap / Focus Macro Preview)
   ========================================================================== */
const SWATCH_EXPLORER_DATA = {
  wood: {
    index: '01 / Architectural Timber',
    title: 'European Smoked Walnut & Teak',
    finish: 'Hand-Rubbed Raw Beeswax Oil & Fine Fluting',
    usage: 'Fluted Library Walls, Acoustic Ceilings & Dining Monoliths',
    tex: 'tex-wood',
    glow: false
  },
  stone: {
    index: '02 / Geological Stone',
    title: 'Roman Travertine & Nero Marquina',
    finish: 'Honed Open-Pore Matte Slate with Subtle Underglow',
    usage: 'Sculpted Basin Monoliths, Cleft Walls & Floors',
    tex: 'tex-stone',
    glow: false
  },
  metal: {
    index: '03 / Architectural Metal',
    title: 'Unlacquered Champagne Brass',
    finish: 'Hand-Brushed Living Satin Patina with Warm Light Glint',
    usage: 'Custom Halo Luminaires & Joinery Hardware',
    tex: 'tex-metal',
    glow: true
  },
  fabric: {
    index: '04 / Woven Textile',
    title: 'Belgian Wool Bouclé & Raw Flax',
    finish: 'Tight-Loop Acoustic & Soil-Safe Weave',
    usage: 'Curved Salon Seating & Sheer Twilight Drapery',
    tex: 'tex-fabric',
    glow: false
  },
  leather: {
    index: '05 / Full-Grain Hide',
    title: 'Cognac Vegetable-Tanned Saddle Leather',
    finish: 'Warm Aniline Balm Patina',
    usage: 'Lounge Armchairs, Headboards & Stitched Pulls',
    tex: 'tex-leather',
    glow: false
  },
  plaster: {
    index: '06 / Wall Craft',
    title: 'Troweled Italian Mineral Lime',
    finish: 'Breathable Matte Crushed Travertine with Grazing Light',
    usage: 'Evening Alcove Walls & Spa Vaults',
    tex: 'tex-plaster',
    glow: false
  }
};

function initMaterialSwatchExplorer() {
  const selector = document.getElementById('swatchSelector');
  const stageEl = document.getElementById('swatchStage');
  const stageTex = document.getElementById('swatchStageTex');
  const idxEl = document.getElementById('swatchIndex');
  const titleEl = document.getElementById('swatchTitle');
  const finishEl = document.getElementById('swatchFinish');
  const usageEl = document.getElementById('swatchUsage');

  if (!selector || !stageTex) return;

  const buttons = Array.from(selector.querySelectorAll('[data-swatch-key]'));
  let activeKey = 'wood';

  const applySwatch = (key) => {
    if (!SWATCH_EXPLORER_DATA[key] || key === activeKey) return;
    activeKey = key;
    const item = SWATCH_EXPLORER_DATA[key];

    buttons.forEach((btn) => {
      const isMatch = btn.getAttribute('data-swatch-key') === key;
      btn.classList.toggle('is-active', isMatch);
      btn.setAttribute('aria-selected', String(isMatch));
    });

    if (stageEl) {
      stageEl.classList.toggle('has-luminous-glow', Boolean(item.glow));
    }

    stageTex.style.opacity = '0.35';
    requestAnimationFrame(() => {
      stageTex.className = `swatch-stage__tex ${item.tex}`;
      if (idxEl) {
        if (item.glow) {
          idxEl.innerHTML = `<span class="luminous-badge">&bull; Luminous</span> ${item.index}`;
        } else {
          idxEl.textContent = item.index;
        }
      }
      if (titleEl) titleEl.textContent = item.title;
      if (finishEl) finishEl.textContent = item.finish;
      if (usageEl) usageEl.textContent = item.usage;
      stageTex.style.opacity = '1';
    });
  };

  buttons.forEach((btn) => {
    const key = btn.getAttribute('data-swatch-key');
    btn.addEventListener('click', () => applySwatch(key));
    btn.addEventListener('mouseenter', () => applySwatch(key));
    btn.addEventListener('focus', () => applySwatch(key));
  });
}

/* ==========================================================================
   Optional Ambient Architectural Sound Toggle (OFF by Default, Web Audio)
   ========================================================================== */
function initAmbientSound() {
  const btn = document.getElementById('soundToggleBtn');
  if (!btn) return;

  let ctx = null;
  let masterGain = null;
  let isPlaying = false;

  const ensureAudio = () => {
    if (ctx) return true;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return false;

    ctx = new AudioCtx();
    masterGain = ctx.createGain();
    masterGain.gain.value = 0.0001;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 260;

    // Gentle warm harmonic fifth pad (A2 + E3 + B3 quiet architectural hush)
    [110, 164.81, 246.94].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const voiceGain = ctx.createGain();
      osc.type = i === 0 ? 'sine' : 'triangle';
      osc.frequency.value = freq;
      voiceGain.gain.value = i === 0 ? 0.45 : 0.22;
      osc.connect(voiceGain);
      voiceGain.connect(filter);
      osc.start();
    });

    filter.connect(masterGain);
    masterGain.connect(ctx.destination);
    return true;
  };

  btn.addEventListener('click', () => {
    if (!ensureAudio()) return;
    if (ctx.state === 'suspended') ctx.resume();

    isPlaying = !isPlaying;
    const now = ctx.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.linearRampToValueAtTime(isPlaying ? 0.028 : 0.0001, now + 0.85);

    btn.classList.toggle('is-sound-on', isPlaying);
    btn.setAttribute('aria-pressed', String(isPlaying));
    btn.title = isPlaying ? 'Ambient room sound (On)' : 'Ambient room sound (Off)';
  });
}

/* ==========================================================================
   Materials & Studio: Spotlight Blur Cross-Dissolve + Category Cards + Wishlist
   ========================================================================== */
const WISHLIST_KEY = 'velore_wishlist_v1';

function getWishlist() {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
  } catch {
    return [];
  }
}

function saveWishlist(list) {
  try {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  } catch {
    // Ignore storage restriction
  }
  updateWishlistBadge(list.length);
}

function updateWishlistBadge(count) {
  const badge = document.getElementById('wishlistBadge');
  if (!badge) return;
  badge.textContent = String(count);
  badge.classList.toggle('has-items', count > 0);
}

function toggleWishlistItem(item) {
  const list = getWishlist();
  const existingIdx = list.findIndex((x) => x.id === item.id);
  let added = false;
  if (existingIdx >= 0) {
    list.splice(existingIdx, 1);
  } else {
    list.push(item);
    added = true;
  }
  saveWishlist(list);
  return added;
}

function initMaterialsStudio() {
  updateWishlistBadge(getWishlist().length);

  // Spotlight state
  let currentIdx = 0;
  const img = document.getElementById('spotlightImg');
  const categoryEl = document.getElementById('spotlightCategory');
  const nameEl = document.getElementById('spotlightName');
  const descEl = document.getElementById('spotlightDesc');
  const matEl = document.getElementById('spotlightMaterial');
  const dimEl = document.getElementById('spotlightDimensions');
  const swatchesEl = document.getElementById('spotlightSwatches');
  const reelEl = document.getElementById('spotlightCounterReel');
  const saveBtn = document.getElementById('spotlightSaveBtn');
  const enquireBtn = document.getElementById('spotlightEnquireBtn');

  const syncSaveButton = (edition) => {
    if (!saveBtn) return;
    const saved = getWishlist().some((x) => x.id === edition.id);
    saveBtn.textContent = saved ? 'Saved in Wishlist' : 'Save to Wishlist';
  };

  const renderSpotlight = (nextIdx, animate = true) => {
    currentIdx = (nextIdx + SPOTLIGHT_EDITIONS.length) % SPOTLIGHT_EDITIONS.length;
    const edition = SPOTLIGHT_EDITIONS[currentIdx];

    const applyContent = () => {
      if (categoryEl) categoryEl.textContent = edition.category;
      if (nameEl) nameEl.textContent = edition.name;
      if (descEl) descEl.textContent = edition.desc;
      if (matEl) matEl.textContent = edition.material;
      if (dimEl) dimEl.textContent = edition.dimensions;

      if (img) {
        img.src = IMAGE_SLOTS[edition.imageSlot || 'featuredPiece'];
        img.alt = edition.name;
        img.style.objectPosition = edition.cropPosition;
        img.style.transform = `scale(${edition.cropScale})`;
        img.style.filter = edition.filter;
      }

      document.querySelectorAll('#luxuryPiecesGrid [data-spotlight-jump]').forEach((card) => {
        card.classList.toggle('is-active', Number(card.dataset.spotlightJump) === currentIdx);
      });

      if (swatchesEl) {
        swatchesEl.innerHTML = edition.swatches
          .map(
            (sw, i) =>
              `<button class="swatch-dot ${i === 0 ? 'is-active' : ''}" type="button" style="background:${sw.hex};" data-swatch="${sw.label}" aria-label="${sw.label} finish" title="${sw.label}"></button>`
          )
          .join('');
        swatchesEl.querySelectorAll('.swatch-dot').forEach((dot) => {
          dot.addEventListener('click', () => {
            swatchesEl.querySelectorAll('.swatch-dot').forEach((d) => d.classList.remove('is-active'));
            dot.classList.add('is-active');
          });
        });
      }

      if (reelEl) {
        if (typeof gsap !== 'undefined') {
          gsap.to(reelEl, {
            yPercent: -(currentIdx * 25),
            duration: 0.5,
            ease: 'expo.out'
          });
        } else {
          reelEl.style.transform = `translateY(-${currentIdx * 25}%)`;
        }
      }

      syncSaveButton(edition);
    };

    if (!animate || typeof gsap === 'undefined' || !img) {
      applyContent();
      return;
    }

    // Video-style blur cross-dissolve between featured piece slides
    gsap.to(img, {
      opacity: 0,
      filter: `blur(${VELORE_CONFIG.spotlight.blurAmount}px)`,
      scale: edition.cropScale + 0.08,
      duration: VELORE_CONFIG.spotlight.duration * 0.48,
      ease: 'power2.in',
      onComplete: () => {
        applyContent();
        gsap.fromTo(
          img,
          { opacity: 0, filter: `blur(${VELORE_CONFIG.spotlight.blurAmount}px)`, scale: edition.cropScale + 0.1 },
          {
            opacity: 1,
            filter: edition.filter,
            scale: edition.cropScale,
            duration: VELORE_CONFIG.spotlight.duration * 0.72,
            ease: 'expo.out'
          }
        );
      }
    });
  };

  renderSpotlight(0, false);

  document.getElementById('spotlightPrev')?.addEventListener('click', () => renderSpotlight(currentIdx - 1));
  document.getElementById('spotlightNext')?.addEventListener('click', () => renderSpotlight(currentIdx + 1));

  // Sync the 3-piece visible luxury collection grid with the spotlight showcase
  const spotlightCardEl = document.getElementById('spotlightCard');
  document.querySelectorAll('#luxuryPiecesGrid [data-spotlight-jump]').forEach((card) => {
    const idx = Number(card.dataset.spotlightJump);
    const jumpToPiece = () => {
      renderSpotlight(idx, currentIdx !== idx);
      if (spotlightCardEl) {
        spotlightCardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    };

    const mediaEl = card.querySelector('.luxury-piece-card__media');
    mediaEl?.addEventListener('click', jumpToPiece);
    mediaEl?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        jumpToPiece();
      }
    });

    card.querySelector('[data-spotlight-focus]')?.addEventListener('click', jumpToPiece);

    card.querySelector('[data-luxury-enquire]')?.addEventListener('click', (e) => {
      e.stopPropagation();
      renderSpotlight(idx, false);
      document.getElementById('spotlightEnquireBtn')?.click();
    });
  });

  saveBtn?.addEventListener('click', () => {
    const edition = SPOTLIGHT_EDITIONS[currentIdx];
    toggleWishlistItem({ id: edition.id, title: edition.name, subtitle: edition.material, type: 'Piece' });
    syncSaveButton(edition);
  });

  enquireBtn?.addEventListener('click', () => {
    const edition = SPOTLIGHT_EDITIONS[currentIdx];
    prefillEnquiry('Custom Furniture & Joinery', `Piece Enquiry: ${edition.name} (${edition.material})`);
  });

  // Category Tabs & Dynamic Piece Cards (CSS Texture Swatches)
  const tabs = document.querySelectorAll('[data-mat-cat]');
  const grid = document.getElementById('pieceGrid');

  const renderCategory = (cat) => {
    if (!grid) return;
    const items = MATERIAL_CATALOG[cat] || MATERIAL_CATALOG.Furniture;
    const savedList = getWishlist();

    grid.innerHTML = items
      .map((item, idx) => {
        const itemId = `cat-${cat.toLowerCase()}-${idx}`;
        const isSaved = savedList.some((x) => x.id === itemId);
        return `
          <article class="piece-card">
            <div>
              <div class="piece-card__swatch ${item.tex}" aria-hidden="true"></div>
              <p class="piece-card__meta" style="margin-top: 1rem;">${cat}</p>
              <h4 class="piece-card__name">${item.name}</h4>
              <p class="text-muted" style="font-size: 0.84rem; margin-top: 0.45rem;">${item.spec}</p>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding-top:0.75rem; border-top:1px solid var(--hairline);">
              <button type="button" class="link-arrow" data-piece-enquire="${item.name}">Enquire &rarr;</button>
              <button type="button" class="filter-tab" style="padding:0.35rem 0.75rem;" data-piece-save="${itemId}" data-piece-title="${item.name}" data-piece-spec="${item.spec}">
                ${isSaved ? 'Saved' : 'Save'}
              </button>
            </div>
          </article>
        `;
      })
      .join('');

    grid.querySelectorAll('[data-piece-enquire]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const pieceName = btn.getAttribute('data-piece-enquire');
        prefillEnquiry('Furniture & Decor Curation', `Sample & Specification Enquiry: ${pieceName}`);
      });
    });

    grid.querySelectorAll('[data-piece-save]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-piece-save');
        const title = btn.getAttribute('data-piece-title');
        const subtitle = btn.getAttribute('data-piece-spec');
        const added = toggleWishlistItem({ id, title, subtitle, type: cat });
        btn.textContent = added ? 'Saved' : 'Save';
      });
    });
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('is-active'));
      tab.classList.add('is-active');
      renderCategory(tab.getAttribute('data-mat-cat'));
    });
  });

  renderCategory('Furniture');
}

function prefillEnquiry(serviceType, messageText) {
  const select = document.getElementById('projectType');
  const message = document.getElementById('projectMessage');
  const form = document.getElementById('enquiryForm');
  const success = document.getElementById('formSuccess');

  if (form && success) {
    form.style.display = 'block';
    success.classList.remove('is-visible');
    form._goToStep?.(1);
  }
  if (select && serviceType) select.value = serviceType;
  if (message && messageText) message.value = messageText;

  window.veloreScrollTo('#contact');
}

/* ==========================================================================
   Contact Form (3-Step), Newsletter, & Lookbook Download
   ========================================================================== */
function initContactAndNewsletter() {
  const form = document.getElementById('enquiryForm');
  const success = document.getElementById('formSuccess');
  const successSummary = document.getElementById('formSuccessSummary');
  const errorStep1 = document.getElementById('formErrorStep1');
  const errorStep2 = document.getElementById('formErrorStep2');
  const errorEl = document.getElementById('formError');
  const resetBtn = document.getElementById('resetFormBtn');

  if (form && success) {
    const steps = Array.from(form.querySelectorAll('[data-form-step]'));
    const indicators = Array.from(form.querySelectorAll('[data-step-indicator]'));
    let currentStep = 1;

    const clearErrors = () => {
      if (errorStep1) errorStep1.textContent = '';
      if (errorStep2) errorStep2.textContent = '';
      if (errorEl) errorEl.textContent = '';
    };

    const showStep = (targetStep) => {
      const stepNum = Math.max(1, Math.min(steps.length || 3, Number(targetStep) || 1));
      currentStep = stepNum;
      clearErrors();

      steps.forEach((stepEl) => {
        const s = Number(stepEl.dataset.formStep);
        stepEl.classList.toggle('is-active', s === stepNum);
      });

      indicators.forEach((indEl) => {
        const s = Number(indEl.dataset.stepIndicator);
        indEl.classList.toggle('is-active', s === stepNum);
        indEl.classList.toggle('is-complete', s < stepNum);
        indEl.setAttribute('aria-current', s === stepNum ? 'step' : 'false');
      });
    };

    form._goToStep = showStep;
    showStep(1);

    form.querySelectorAll('[data-step-next]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const nextStep = Number(btn.dataset.stepNext);
        if (currentStep === 1) {
          const locationInput = form.querySelector('#projectLocation');
          if (!locationInput?.value.trim()) {
            if (errorStep1) errorStep1.textContent = 'Please indicate your city or property location to continue.';
            locationInput?.focus();
            return;
          }
        }
        showStep(nextStep);
      });
    });

    form.querySelectorAll('[data-step-prev]').forEach((btn) => {
      btn.addEventListener('click', () => {
        showStep(Number(btn.dataset.stepPrev));
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (currentStep < 3) {
        if (currentStep === 1) {
          const locationInput = form.querySelector('#projectLocation');
          if (!locationInput?.value.trim()) {
            if (errorStep1) errorStep1.textContent = 'Please indicate your city or property location to continue.';
            locationInput?.focus();
            return;
          }
        }
        showStep(currentStep + 1);
        return;
      }

      const name = form.name?.value.trim() || '';
      const email = form.email?.value.trim() || '';

      if (!name || !email || !email.includes('@')) {
        if (errorEl) errorEl.textContent = 'Please provide your name and a valid email address.';
        return;
      }

      clearErrors();
      if (successSummary) {
        const typeVal = form.projectType?.value || 'Residence Commission';
        const locVal = form.location?.value.trim() || 'Private Location';
        const budgetVal = form.budget?.value || 'Bespoke Scope';
        const timelineVal = form.timeline?.value || 'Flexible';
        successSummary.textContent = `${typeVal} in ${locVal} (${budgetVal}, ${timelineVal}) — dossier sent for ${email}.`;
      }

      form.style.display = 'none';
      success.classList.add('is-visible');
    });

    resetBtn?.addEventListener('click', () => {
      form.reset();
      showStep(1);
      form.style.display = 'block';
      success.classList.remove('is-visible');
    });
  }

  // Footer Newsletter
  const nlForm = document.getElementById('newsletterForm');
  const nlNote = document.getElementById('newsletterNote');
  nlForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('newsletterEmail');
    if (input && input.value.includes('@')) {
      nlNote.textContent = 'Added to the VELORE seasonal monograph dispatch.';
      input.value = '';
    }
  });

  // Download Lookbook (Generates clean text dossier file locally without external dependencies)
  document.getElementById('downloadLookbookBtn')?.addEventListener('click', () => {
    const lookbookText = [
      'VELORE ATELIER — COLLECTION 01 ARCHITECTURAL LOOKBOOK',
      'Interiors, Elevated.',
      '======================================================',
      '',
      'STUDIO ADDRESS',
      'Down Hill, Malappuram, Kerala 676519',
      'Telephone: +91 (0) 483 273 8000  |  atelier@velore-interiors.com',
      'Hours: By appointment only',
      '',
      'SIGNATURE SPACES',
      '- Dining: Smoked walnut monolith table, honed travertine wall, Aurelia pendant.',
      '- Living: Unbleached Belgian linen salon, basalt hearth, fluted oak niches.',
      '- Bedroom: Acoustic walnut headboard wall, 2400K bedside pendants, raw wool.',
      '- Kitchen: Honed Nero Marquina waterfall island, unlacquered champagne brass.',
      '- Bathroom: Carved stone monolith tub, fluted walnut vanity, champagne brass tapware.',
      '',
      'FEATURED COMMISSIONS',
      '01. The Malabar Sanctuary Villa — Malappuram (420 m2)',
      '02. Casa Calma Waterfront Villa — Kochi Backwaters (680 m2)',
      '03. Atelier Noir Executive Lounge — Calicut (310 m2)',
      '',
      'CORE MATERIALS',
      'FSC European Walnut • Belgian Wool Boucle • Roman Travertine • Unlacquered Brass • Italian Aniline Leather',
      '',
      'Private Consultation Inquiries: atelier@velore-interiors.com'
    ].join('\n');

    const blob = new Blob([lookbookText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'VELORE-Collection-01-Lookbook.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });
}

/* ==========================================================================
   Unified Modal System: Search, Wishlist, Project Details, Journal, Legal
   ========================================================================== */
function initModals() {
  const modal = document.getElementById('appModal');
  const modalBody = document.getElementById('modalBody');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (!modal || !modalBody) return;

  const openModal = (html) => {
    modalBody.innerHTML = html;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('is-locked');
  };

  closeBtn?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });

  // Search Modal
  document.getElementById('openSearchBtn')?.addEventListener('click', () => {
    const searchable = [
      { title: 'The Malabar Sanctuary Villa', cat: 'Portfolio • Malappuram', href: '#portfolio' },
      { title: 'Casa Calma Waterfront Villa', cat: 'Portfolio • Kochi', href: '#portfolio' },
      { title: 'Atelier Noir Executive Lounge', cat: 'Portfolio • Calicut', href: '#portfolio' },
      { title: 'Dining — Spaces in 360°', cat: 'Space', href: '#spaces', space: 0 },
      { title: 'Living — Spaces in 360°', cat: 'Space', href: '#spaces', space: 1 },
      { title: 'Bedroom — Spaces in 360°', cat: 'Space', href: '#spaces', space: 2 },
      { title: 'Kitchen — Spaces in 360°', cat: 'Space', href: '#spaces', space: 3 },
      { title: 'Bathroom — Spaces in 360°', cat: 'Space', href: '#spaces', space: 4 },
      { title: 'VELORE Arc Lounge Chair', cat: 'Featured Piece', href: '#materials' },
      { title: 'Full Interior Design', cat: 'Service', href: '#services' },
      { title: 'Custom Furniture & Joinery', cat: 'Service', href: '#services' },
      { title: 'Lighting Design', cat: 'Service', href: '#services' }
    ];

    openModal(`
      <span class="eyebrow eyebrow--plain">Search Atelier</span>
      <h2 class="heading-sub" id="modalTitle" style="margin-top:0.5rem;">Explore Projects, Spaces &amp; Materials</h2>
      <div class="form-field" style="margin-top:1.25rem;">
        <input class="form-input" id="searchInput" type="search" placeholder="Search residences, walnut, lighting, bouclé..." autofocus />
        <span class="form-underline"></span>
      </div>
      <div class="search-results" id="searchResults"></div>
    `);

    const input = document.getElementById('searchInput');
    const resultsEl = document.getElementById('searchResults');

    const renderResults = (q) => {
      const term = q.trim().toLowerCase();
      const matches = term
        ? searchable.filter((item) => `${item.title} ${item.cat}`.toLowerCase().includes(term))
        : searchable.slice(0, 6);

      if (!matches.length) {
        resultsEl.innerHTML = '<p class="text-muted">No matching entries found in the archive.</p>';
        return;
      }

      resultsEl.innerHTML = matches
        .map(
          (item, i) => `
          <button type="button" class="search-result-item" data-search-idx="${i}">
            <div style="text-align:left;">
              <div style="color:var(--ivory); font-family:var(--font-serif); font-size:1.1rem;">${item.title}</div>
              <div style="color:var(--champagne); font-size:0.68rem; letter-spacing:0.18em; text-transform:uppercase;">${item.cat}</div>
            </div>
            <span style="color:var(--champagne);">&rarr;</span>
          </button>
        `
        )
        .join('');

      resultsEl.querySelectorAll('[data-search-idx]').forEach((btn, idx) => {
        btn.addEventListener('click', () => {
          const item = matches[idx];
          closeModal();
          if (item.space !== undefined && document.getElementById('spaces')?.jumpToScene) {
            document.getElementById('spaces').jumpToScene(item.space);
          } else {
            window.veloreScrollTo(item.href);
          }
        });
      });
    };

    renderResults('');
    input?.addEventListener('input', () => renderResults(input.value));
    setTimeout(() => input?.focus(), 60);
  });

  // Wishlist Modal
  document.getElementById('openWishlistBtn')?.addEventListener('click', () => {
    const renderWishlist = () => {
      const list = getWishlist();
      if (!list.length) {
        openModal(`
          <span class="eyebrow eyebrow--plain">Saved Archive</span>
          <h2 class="heading-sub" id="modalTitle" style="margin-top:0.5rem;">Your Wishlist Is Empty</h2>
          <p class="text-muted" style="margin-top:0.75rem;">
            Save bespoke pieces or architectural works while browsing to attach them directly to your private consultation brief.
          </p>
        `);
        return;
      }

      openModal(`
        <span class="eyebrow eyebrow--plain">Saved Archive (${list.length})</span>
        <h2 class="heading-sub" id="modalTitle" style="margin-top:0.5rem;">Curated Shortlist</h2>
        <div class="search-results">
          ${list
            .map(
              (item) => `
              <div class="search-result-item" style="cursor:default;">
                <div>
                  <div style="color:var(--ivory); font-family:var(--font-serif); font-size:1.1rem;">${item.title}</div>
                  <div style="color:var(--taupe); font-size:0.8rem;">${item.subtitle || item.type}</div>
                </div>
                <button type="button" class="filter-tab" data-remove-wish="${item.id}" style="padding:0.3rem 0.7rem;">Remove</button>
              </div>
            `
            )
            .join('')}
        </div>
        <div style="margin-top:1.75rem; display:flex; justify-content:flex-end;">
          <button type="button" class="btn btn--filled btn--sm" id="enquireWishlistBtn">
            Request Consultation With Shortlist
          </button>
        </div>
      `);

      modalBody.querySelectorAll('[data-remove-wish]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-remove-wish');
          const next = getWishlist().filter((x) => x.id !== id);
          saveWishlist(next);
          renderWishlist();
        });
      });

      document.getElementById('enquireWishlistBtn')?.addEventListener('click', () => {
        const names = getWishlist().map((x) => x.title).join(', ');
        closeModal();
        prefillEnquiry('Full Interior Design', `Consultation regarding saved archive items: ${names}`);
      });
    };

    renderWishlist();
  });

  // Project Detail Modals
  document.querySelectorAll('[data-open-project]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-open-project');
      const p = PROJECTS_DATA[key];
      if (!p) return;

      openModal(`
        <span class="eyebrow eyebrow--plain">${p.meta}</span>
        <h2 class="heading-section" id="modalTitle" style="margin-top:0.5rem;">${p.title}</h2>
        <div style="margin-block:1.35rem; border-radius:6px; overflow:hidden; border:1px solid var(--hairline);">
          <img src="${IMAGE_SLOTS[p.afterSlot]}" alt="${p.title}" style="width:100%; max-height:300px; object-fit:cover;" />
        </div>
        <div class="project-specs" style="margin-bottom:1.35rem;">
          <div><span class="project-spec__k">Brief</span><span class="project-spec__v">${p.brief}</span></div>
          <div><span class="project-spec__k">Challenge</span><span class="project-spec__v">${p.challenge}</span></div>
          <div><span class="project-spec__k">Architectural Concept</span><span class="project-spec__v">${p.concept}</span></div>
          <div><span class="project-spec__k">Materials &amp; Schedule</span><span class="project-spec__v">${p.materials} &bull; ${p.duration}</span></div>
        </div>
        <div class="btn-group">
          <button type="button" class="btn btn--filled btn--sm" id="modalProjectEnquire">Commission a Similar Space</button>
          <button type="button" class="btn btn--outlined btn--sm" id="modalProjectSave">Save Project to Wishlist</button>
        </div>
      `);

      document.getElementById('modalProjectEnquire')?.addEventListener('click', () => {
        closeModal();
        prefillEnquiry('Full Interior Design', `Reference Project Enquiry: ${p.title}`);
      });

      document.getElementById('modalProjectSave')?.addEventListener('click', (e) => {
        const added = toggleWishlistItem({ id: `proj-${key}`, title: p.title, subtitle: p.meta, type: 'Project' });
        e.target.textContent = added ? 'Saved in Wishlist' : 'Save Project to Wishlist';
      });
    });
  });

  // Journal Article Modals
  document.querySelectorAll('[data-open-article]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-open-article'));
      const art = JOURNAL_ARTICLES[idx];
      if (!art) return;

      openModal(`
        <span class="eyebrow eyebrow--plain">${art.cat}</span>
        <h2 class="heading-section" id="modalTitle" style="margin-top:0.5rem; margin-bottom:1.25rem;">${art.title}</h2>
        <div style="margin-bottom:1.35rem; border-radius:6px; overflow:hidden; border:1px solid var(--hairline);">
          <img src="${IMAGE_SLOTS[art.imageSlot]}" alt="${art.title}" style="width:100%; max-height:240px; object-fit:cover;" />
        </div>
        <div style="display:flex; flex-direction:column; gap:1rem; color:var(--taupe); font-size:0.95rem;">
          ${art.paragraphs.map((p) => `<p>${p}</p>`).join('')}
        </div>
      `);
    });
  });

  // Legal Modals
  document.querySelectorAll('[data-open-legal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const kind = btn.getAttribute('data-open-legal');
      const isPrivacy = kind === 'privacy';
      openModal(`
        <span class="eyebrow eyebrow--plain">VELORE Atelier Legal</span>
        <h2 class="heading-sub" id="modalTitle" style="margin-top:0.5rem; margin-bottom:1rem;">
          ${isPrivacy ? 'Private Client Confidentiality &amp; Privacy' : 'Terms of Engagement'}
        </h2>
        <p class="text-muted" style="margin-bottom:0.85rem;">
          ${
            isPrivacy
              ? 'All architectural briefs, floor plans, residence locations, and personal correspondence submitted to VELORE are treated under strict non-disclosure and stored solely for project feasibility.'
              : 'All bespoke architectural designs, bespoke millwork specifications, and spatial imagery featured on this website remain the intellectual property of VELORE Atelier.'
          }
        </p>
        <p class="text-muted">For direct legal enquiries, write to atelier@velore-interiors.com.</p>
      `);
    });
  });
}

/* ==========================================================================
   Custom Champagne Cursor & Magnetic Buttons
   ========================================================================== */
function initCustomCursor(prefersReducedMotion) {
  const cursor = document.getElementById('customCursor');
  const label = document.getElementById('cursorLabel');
  if (!cursor || !label || prefersReducedMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.body.classList.remove('has-custom-cursor');
    return;
  }

  let mouseX = -100;
  let mouseY = -100;
  let curX = -100;
  let curY = -100;

  window.addEventListener(
    'mousemove',
    (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.classList.add('is-visible');
    },
    { passive: true }
  );

  document.addEventListener('mouseleave', () => {
    cursor.classList.remove('is-visible');
  });

  const tick = () => {
    curX += (mouseX - curX) * 0.2;
    curY += (mouseY - curY) * 0.2;
    cursor.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  document.addEventListener('mouseover', (e) => {
    const dragTarget = e.target.closest('[data-cursor="drag"]');
    const viewTarget = e.target.closest('[data-cursor="view"]');
    const pointerTarget = e.target.closest('a, button, [data-cursor="pointer"]');

    cursor.classList.remove('is-active', 'is-pointer');
    if (dragTarget) {
      label.textContent = 'Drag';
      cursor.classList.add('is-active');
    } else if (viewTarget) {
      label.textContent = 'View';
      cursor.classList.add('is-active');
    } else if (pointerTarget) {
      cursor.classList.add('is-pointer');
    }
  });
}

function initMagneticButtons(prefersReducedMotion) {
  if (prefersReducedMotion || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  document.querySelectorAll('.magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.2;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.2;
      btn.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate3d(0, 0, 0)';
    });
  });
}
