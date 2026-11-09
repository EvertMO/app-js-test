/**
 * MONALISA INTERNACIONAL SA · APLICACIÓN PRINCIPAL (JAVASCRIPT)
 * Remake Moderno · Arquitectura Modular · Experiencia Editorial
 */

(function () {
  'use strict';

  // ---------- 1. Diccionario de Traducción (i18n ES / EN) ----------
  const TRANSLATIONS = {
    es: {
      editionBadge: 'Edición Conmemorativa · 1972 — Presente',
      mastheadSub: 'Paraguay & Cono Sur',
      quickContact: 'Atención al Cliente: +595 61 500 645',
      brandSubtitle: 'Retail & Distribución de Lujo',
      navHome: 'Inicio',
      navAbout: 'Quiénes Somos',
      navBrands: 'Nuestras Marcas',
      navUnits: 'Unidades de Negocio',
      navMagazine: 'Revista',
      navContact: 'Contacto',
      navCta: 'Contacto Corporativo',
      heroEyebrow: 'Nuestra Historia & Archivo',
      heroTitlePrefix: 'Más de 53 años de excelencia en',
      heroTitleSuffix: 'retail y distribución',
      heroLead: 'Desde su fundación en junio de 1972, Monalisa ha sido sinónimo de lujo y excelencia en Paraguay y en toda la región. Lo que comenzó como una boutique en Ciudad del Este se transformó en un grupo empresarial sólido y diversificado, con presencia en retail y distribución de las mayores marcas de perfumería & cosméticos, moda, relojes & joyería, vinos, deportes y chocolates.',
      metricsHeader: 'Cifras Históricas',
      stat1Val: '1972',
      stat1Label: 'Año de fundación en Ciudad del Este',
      stat2Val: '+53',
      stat2Label: 'Años liderando el mercado de alta gama',
      stat3Val: '8 Pisos',
      stat3Label: 'Edificio insignia y templo del lujo',
      stat4Val: '3 Países',
      stat4Label: 'Presencia regional: Paraguay, Brasil y USA',
      modeInteractive: 'Presentación Interactiva',
      modeArchive: 'Ver Archivo Completo',
      playText: 'Reproducir',
      pauseText: 'Pausar',
      timelineEyebrow: 'Crónica Cronológica',
      zoomPhoto: 'Ver Foto en Grande',
      pullquote: '«Una visión forjada para transformar una frontera en un destino mundial de belleza, refinamiento y marcas maestras.»',
      quoteAuthor: 'Faisal Hammoud',
      quoteRole: 'Fundador de Monalisa',
      unitsEyebrow: 'Portafolio de Excelencia',
      unitsTitle: 'Nuestras Unidades de <em>Negocio</em>',
      unitsIntro: 'Un ecosistema integral que abarca desde la representación mayorista exclusiva hasta boutiques especializadas y alta gastronomía.',
      brandsLabel: 'Marcas Principales & Casas Asociadas:',
      locEyebrow: 'Red Regional',
      locTitle: 'Presencia e <em>Influencia</em>',
      loc1City: 'Ciudad del Este',
      loc1Desc: 'Edificio Monalisa: 8 plantas consagradas al lujo, con boutiques exclusivas, cava y restaurante.',
      loc2City: 'Asunción',
      loc2Desc: 'La Gioconda S.A. y red de boutiques Aphrodite en los principales shoppings del país.',
      loc3City: 'São Paulo',
      loc3Desc: 'Oficinas corporativas y coordinación comercial para el mercado brasileño.',
      newsTitle: 'Suscríbete a la <em>Revista Monalisa</em>',
      newsSub: 'Recibe ediciones exclusivas, catálogos de temporada y novedades sobre lanzamientos de lujo.',
      newsPlaceholder: 'Ingresa tu correo electrónico...',
      newsBtn: 'Suscribirme',
      footerManifesto: 'Monalisa Internacional SA es el grupo pionero en el Cono Sur en la importación y comercialización de marcas globales de lujo.',
      footerContactTitle: 'Información de Contacto',
      footerNavTitle: 'Navegación',
      footerLegalTitle: 'Legal & Privacidad',
      privacyPolicy: 'Política de Privacidad',
      termsOfService: 'Términos de Servicio',
      rightsReserved: '© 2026 Monalisa Internacional SA. Todos los derechos reservados.',
      toastSubscribed: '¡Gracias por suscribirte a la Revista Monalisa!',
      toastCopied: 'Teléfono copiado al portapapeles'
    },
    en: {
      editionBadge: 'Commemorative Edition · 1972 — Present',
      mastheadSub: 'Paraguay & South America',
      quickContact: 'Client Service: +595 61 500 645',
      brandSubtitle: 'Luxury Retail & Distribution',
      navHome: 'Home',
      navAbout: 'About Us',
      navBrands: 'Our Brands',
      navUnits: 'Business Units',
      navMagazine: 'Magazine',
      navContact: 'Contact',
      navCta: 'Corporate Inquiries',
      heroEyebrow: 'Our Heritage & Archive',
      heroTitlePrefix: 'Over 53 years of excellence in',
      heroTitleSuffix: 'retail and distribution',
      heroLead: 'Since its foundation in June 1972, Monalisa has been synonymous with luxury and distinction in Paraguay and across the region. What started as an exquisite boutique in Ciudad del Este grew into a diversified corporate powerhouse, leading retail and distribution for the world\'s most prestigious houses in beauty, haute couture, horology, fine wines, and gourmet confectioneries.',
      metricsHeader: 'Heritage Milestones',
      stat1Val: '1972',
      stat1Label: 'Foundation year in Ciudad del Este',
      stat2Val: '+53',
      stat2Label: 'Years pioneering the luxury market',
      stat3Val: '8 Floors',
      stat3Label: 'Flagship store and temple of fine living',
      stat4Val: '3 Nations',
      stat4Label: 'Regional footprint: Paraguay, Brazil & USA',
      modeInteractive: 'Interactive Feature',
      modeArchive: 'Full Heritage Spread',
      playText: 'Play',
      pauseText: 'Pause',
      timelineEyebrow: 'Chronological Chronicle',
      zoomPhoto: 'View Full Photograph',
      pullquote: '«A pioneering vision built to turn a regional border into a global capital of beauty, refinement, and timeless elegance.»',
      quoteAuthor: 'Faisal Hammoud',
      quoteRole: 'Founder of Monalisa',
      unitsEyebrow: 'Portfolio of Excellence',
      unitsTitle: 'Our Business <em>Divisions</em>',
      unitsIntro: 'A cohesive ecosystem ranging from exclusive nationwide wholesale distribution to selective retail boutiques and gastronomy.',
      brandsLabel: 'Featured Houses & Strategic Partners:',
      locEyebrow: 'Regional Network',
      locTitle: 'Presence & <em>Footprint</em>',
      loc1City: 'Ciudad del Este',
      loc1Desc: 'Edificio Monalisa: 8 storeys dedicated to luxury, featuring premier boutiques, cava, and bistro.',
      loc2City: 'Asunción',
      loc2Desc: 'La Gioconda S.A. distribution headquarters and Aphrodite boutique network in major malls.',
      loc3City: 'São Paulo',
      loc3Desc: 'Corporate hub coordinating commercial liaison for the extensive Brazilian market.',
      newsTitle: 'Subscribe to <em>Monalisa Magazine</em>',
      newsSub: 'Receive curated seasonal monographs, private collections, and international trend reports.',
      newsPlaceholder: 'Enter your corporate or personal email...',
      newsBtn: 'Subscribe',
      footerManifesto: 'Monalisa Internacional SA is the premier group in South America representing the world\'s most revered luxury houses.',
      footerContactTitle: 'Contact Directory',
      footerNavTitle: 'Directory Navigation',
      footerLegalTitle: 'Legal & Privacy',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      rightsReserved: '© 2026 Monalisa Internacional SA. All rights reserved.',
      toastSubscribed: 'Thank you for subscribing to Monalisa Magazine!',
      toastCopied: 'Phone number copied to clipboard'
    }
  };

  // ---------- 2. Estado de la Aplicación ----------
  const state = {
    currentLang: 'es',
    currentMilestoneIndex: 0,
    isPlaying: true,
    autoplayTimer: null,
    autoplayDuration: 6000, // 6 segundos por hito
    autoplayStartTime: null,
    animationFrameId: null,
    viewMode: 'interactive' // 'interactive' | 'archive'
  };

  // ---------- 3. Inicialización del DOM ----------
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initReadingProgress();
    initHeaderScroll();
    initMobileNav();
    initTimelineEngine();
    initBusinessUnits();
    initLightbox();
    initNewsletter();
    renderAllTranslations();
  });

  // ---------- 4. Sistema de Idiomas (i18n) ----------
  function initLanguage() {
    const savedLang = localStorage.getItem('monalisa_lang') || 'es';
    state.currentLang = savedLang;

    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang && lang !== state.currentLang) {
          state.currentLang = lang;
          localStorage.setItem('monalisa_lang', lang);
          renderAllTranslations();
          updateActiveMilestone(state.currentMilestoneIndex, false);
          renderArchiveGrid();
          renderBusinessUnits();
        }
      });
    });
  }

  function renderAllTranslations() {
    const dict = TRANSLATIONS[state.currentLang];
    if (!dict) return;

    // Actualizar botones de idioma activos
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === state.currentLang);
    });

    // Elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Atributos de placeholder
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });
  }

  // ---------- 5. Barra de Progreso de Lectura ----------
  function initReadingProgress() {
    const progressBar = document.getElementById('reading-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = scrolled + '%';
    }, { passive: true });
  }

  // ---------- 6. Cabecera con Desenfoque al Desplazar ----------
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ---------- 7. Menú Lateral Móvil (Drawer) ----------
  function initMobileNav() {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const drawer = document.querySelector('.mobile-drawer');
    const backdrop = document.querySelector('.drawer-backdrop');
    const closeBtn = document.querySelector('.drawer-close-btn');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    if (!toggleBtn || !drawer) return;

    function openDrawer() {
      drawer.classList.add('open');
      backdrop?.classList.add('open');
      toggleBtn.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
      drawer.classList.remove('open');
      backdrop?.classList.remove('open');
      toggleBtn.classList.remove('open');
      document.body.style.overflow = '';
    }

    toggleBtn.addEventListener('click', () => {
      if (drawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    closeBtn?.addEventListener('click', closeDrawer);
    backdrop?.addEventListener('click', closeDrawer);

    drawerLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  // ---------- 8. Motor de la Línea de Tiempo (Timeline Engine) ----------
  function initTimelineEngine() {
    const yearsContainer = document.getElementById('timeline-years-list');
    const stageCard = document.querySelector('.timeline-stage-card');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('stage-prev-btn');
    const nextBtn = document.getElementById('stage-next-btn');
    const modeInteractiveBtn = document.getElementById('mode-interactive-btn');
    const modeArchiveBtn = document.getElementById('mode-archive-btn');
    const archiveGrid = document.getElementById('timeline-archive-grid');

    if (!yearsContainer || !TIMELINE_DATA) return;

    // Generar elementos de años en el índice horizontal
    yearsContainer.innerHTML = '';
    TIMELINE_DATA.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = `timeline-year-item ${index === 0 ? 'active' : ''}`;
      li.setAttribute('data-index', index);
      li.innerHTML = `
        <span class="year-num">${item.year}</span>
        <span class="year-tag-micro">${item.title[state.currentLang] || item.title.es}</span>
      `;

      li.addEventListener('click', () => {
        updateActiveMilestone(index, true);
        restartAutoplay();
      });

      yearsContainer.appendChild(li);
    });

    // Flechas de navegación previa / siguiente
    prevBtn?.addEventListener('click', () => {
      const prevIdx = (state.currentMilestoneIndex - 1 + TIMELINE_DATA.length) % TIMELINE_DATA.length;
      updateActiveMilestone(prevIdx, true);
      restartAutoplay();
    });

    nextBtn?.addEventListener('click', () => {
      const nextIdx = (state.currentMilestoneIndex + 1) % TIMELINE_DATA.length;
      updateActiveMilestone(nextIdx, true);
      restartAutoplay();
    });

    // Teclado: Flechas izquierda / derecha para navegación
    window.addEventListener('keydown', e => {
      // Ignorar si el usuario está escribiendo en un input
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      if (e.key === 'ArrowRight') {
        const nextIdx = (state.currentMilestoneIndex + 1) % TIMELINE_DATA.length;
        updateActiveMilestone(nextIdx, true);
        restartAutoplay();
      } else if (e.key === 'ArrowLeft') {
        const prevIdx = (state.currentMilestoneIndex - 1 + TIMELINE_DATA.length) % TIMELINE_DATA.length;
        updateActiveMilestone(prevIdx, true);
        restartAutoplay();
      }
    });

    // Pausar al posar el mouse sobre el escenario
    stageCard?.addEventListener('mouseenter', pauseAutoplay);
    stageCard?.addEventListener('mouseleave', () => {
      if (state.isPlaying) startAutoplay();
    });

    // Botón de Play / Pausa
    playPauseBtn?.addEventListener('click', () => {
      state.isPlaying = !state.isPlaying;
      updatePlayPauseButton();
      if (state.isPlaying) {
        startAutoplay();
      } else {
        pauseAutoplay();
      }
    });

    // Selector de Modo: Interactivo vs Archivo Completo
    modeInteractiveBtn?.addEventListener('click', () => {
      setTimelineMode('interactive');
    });

    modeArchiveBtn?.addEventListener('click', () => {
      setTimelineMode('archive');
    });

    // Soporte para gestos táctiles de deslizamiento (Swipe)
    let touchStartX = 0;
    stageCard?.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stageCard?.addEventListener('touchend', e => {
      const touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          // Swipe hacia la izquierda: siguiente hito
          const nextIdx = (state.currentMilestoneIndex + 1) % TIMELINE_DATA.length;
          updateActiveMilestone(nextIdx, true);
        } else {
          // Swipe hacia la derecha: anterior hito
          const prevIdx = (state.currentMilestoneIndex - 1 + TIMELINE_DATA.length) % TIMELINE_DATA.length;
          updateActiveMilestone(prevIdx, true);
        }
        restartAutoplay();
      }
    }, { passive: true });

    // Iniciar con el primer hito
    updateActiveMilestone(0, false);
    renderArchiveGrid();
    startAutoplay();
  }

  function setTimelineMode(mode) {
    state.viewMode = mode;
    const stageCard = document.querySelector('.timeline-stage-card');
    const indexStrip = document.querySelector('.timeline-index-strip');
    const archiveGrid = document.getElementById('timeline-archive-grid');
    const modeInteractiveBtn = document.getElementById('mode-interactive-btn');
    const modeArchiveBtn = document.getElementById('mode-archive-btn');

    if (mode === 'interactive') {
      stageCard.style.display = 'grid';
      indexStrip.style.display = 'block';
      archiveGrid.classList.remove('active');
      modeInteractiveBtn.classList.add('active');
      modeArchiveBtn.classList.remove('active');
      if (state.isPlaying) startAutoplay();
    } else {
      stageCard.style.display = 'none';
      indexStrip.style.display = 'none';
      archiveGrid.classList.add('active');
      modeInteractiveBtn.classList.remove('active');
      modeArchiveBtn.classList.add('active');
      pauseAutoplay();
    }
  }

  function updateActiveMilestone(index, smoothScroll) {
    state.currentMilestoneIndex = index;
    const data = TIMELINE_DATA[index];
    if (!data) return;

    const lang = state.currentLang;
    const totalCount = String(TIMELINE_DATA.length).padStart(2, '0');
    const currentCount = String(index + 1).padStart(2, '0');

    // Actualizar elementos de texto del escenario
    const elCount = document.getElementById('stage-count');
    const elYear = document.getElementById('stage-giant-year');
    const elLoc = document.getElementById('stage-location');
    const elTitle = document.getElementById('stage-title');
    const elBody = document.getElementById('stage-body');
    const elQuote = document.getElementById('stage-quote');
    const elPhoto = document.getElementById('stage-photo');
    const elPhotoCaption = document.getElementById('photo-caption-title');
    const elPhotoSub = document.getElementById('photo-caption-sub');

    if (elCount) elCount.textContent = `${currentCount} / ${totalCount}`;
    if (elYear) elYear.textContent = data.year;
    if (elLoc) elLoc.textContent = data.location;
    if (elTitle) elTitle.textContent = data.title[lang] || data.title.es;
    if (elBody) elBody.textContent = data.body[lang] || data.body.es;
    if (elQuote) elQuote.textContent = data.quote ? (data.quote[lang] || data.quote.es) : '';

    if (elPhotoCaption) elPhotoCaption.textContent = data.title[lang] || data.title.es;
    if (elPhotoSub) elPhotoSub.textContent = `${data.year} · ${data.tag[lang] || data.tag.es}`;

    // Actualizar imagen con transición suave y fallback de red
    if (elPhoto) {
      elPhoto.style.opacity = '0.4';
      elPhoto.src = data.img;
      elPhoto.onerror = function () {
        if (data.fallbackImg && elPhoto.src !== data.fallbackImg) {
          elPhoto.src = data.fallbackImg;
        }
      };
      elPhoto.onload = function () {
        elPhoto.style.opacity = '1';
      };
    }

    // Actualizar indicador activo en la lista superior de años
    const yearItems = document.querySelectorAll('.timeline-year-item');
    yearItems.forEach((item, idx) => {
      const isActive = idx === index;
      item.classList.toggle('active', isActive);
      const microTag = item.querySelector('.year-tag-micro');
      if (microTag) {
        const itemData = TIMELINE_DATA[idx];
        microTag.textContent = itemData.title[lang] || itemData.title.es;
      }
      if (isActive && smoothScroll) {
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
  }

  // ---------- 9. Autoplay y Temporizador SVG ----------
  function startAutoplay() {
    if (!state.isPlaying || state.viewMode === 'archive') return;
    pauseAutoplay(); // limpiar anterior

    state.autoplayStartTime = performance.now();

    function tick(now) {
      const elapsed = now - state.autoplayStartTime;
      const progress = Math.min(elapsed / state.autoplayDuration, 1);

      // Animar el círculo SVG de progreso (stroke-dashoffset va de 56.5 a 0)
      const circle = document.getElementById('timer-ring-circle');
      if (circle) {
        const totalDash = 56.5;
        circle.style.strokeDashoffset = String(totalDash - (totalDash * progress));
      }

      if (progress < 1) {
        state.animationFrameId = requestAnimationFrame(tick);
      } else {
        // Avanzar al siguiente hito
        const nextIdx = (state.currentMilestoneIndex + 1) % TIMELINE_DATA.length;
        updateActiveMilestone(nextIdx, true);
        startAutoplay();
      }
    }

    state.animationFrameId = requestAnimationFrame(tick);
  }

  function pauseAutoplay() {
    if (state.animationFrameId) {
      cancelAnimationFrame(state.animationFrameId);
      state.animationFrameId = null;
    }
  }

  function restartAutoplay() {
    if (state.isPlaying && state.viewMode === 'interactive') {
      startAutoplay();
    }
  }

  function updatePlayPauseButton() {
    const playPauseBtn = document.getElementById('play-pause-btn');
    if (!playPauseBtn) return;
    const dict = TRANSLATIONS[state.currentLang];
    const text = state.isPlaying ? dict.pauseText : dict.playText;
    const icon = state.isPlaying
      ? `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`
      : `<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;

    playPauseBtn.innerHTML = `${icon} <span>${text}</span>`;
  }

  // ---------- 10. Vista de Archivo Completo (Magazine Spread Grid) ----------
  function renderArchiveGrid() {
    const container = document.getElementById('timeline-archive-grid');
    if (!container || !TIMELINE_DATA) return;

    const lang = state.currentLang;
    container.innerHTML = '';

    TIMELINE_DATA.forEach(item => {
      const card = document.createElement('article');
      card.className = 'archive-card';
      card.innerHTML = `
        <div class="archive-img-frame">
          <img class="archive-img" src="${item.img}" alt="${item.title[lang] || item.title.es}" loading="lazy" onerror="this.src='${item.fallbackImg}'" />
          <div class="archive-badge">${item.year}</div>
        </div>
        <div class="archive-content">
          <div class="archive-tag">${item.tag[lang] || item.tag.es}</div>
          <h3 class="archive-title">${item.title[lang] || item.title.es}</h3>
          <p class="archive-body">${item.body[lang] || item.body.es}</p>
          <div class="archive-footer">
            <span>📍 ${item.location}</span>
            <span>Edición ${item.badge}</span>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // ---------- 11. Unidades de Negocio ----------
  function initBusinessUnits() {
    renderBusinessUnits();
  }

  function renderBusinessUnits() {
    const grid = document.getElementById('business-units-grid');
    if (!grid || typeof BUSINESS_UNITS === 'undefined') return;

    const lang = state.currentLang;
    const dict = TRANSLATIONS[lang];
    grid.innerHTML = '';

    BUSINESS_UNITS.forEach(unit => {
      const card = document.createElement('div');
      card.className = 'unit-card';
      const brandPills = unit.brands
        .map(b => `<span class="brand-pill">${b}</span>`)
        .join('');

      card.innerHTML = `
        <div class="unit-header">
          <span class="unit-number">${unit.number}</span>
          <span style="font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--c-ink-faint); font-family: var(--font-mono);">División</span>
        </div>
        <h3 class="unit-title">${unit.title[lang] || unit.title.es}</h3>
        <p class="unit-desc">${unit.desc[lang] || unit.desc.es}</p>
        <div class="unit-brands-label">${dict.brandsLabel}</div>
        <div class="unit-brands-pills">${brandPills}</div>
      `;
      grid.appendChild(card);
    });
  }

  // ---------- 12. Visor Lightbox de Fotografías ----------
  function initLightbox() {
    const modal = document.getElementById('lightbox-modal');
    const closeBtn = document.querySelector('.lightbox-close-btn');
    const trigger = document.getElementById('photo-lightbox-trigger');
    const photoImg = document.getElementById('stage-photo');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxYear = document.getElementById('lightbox-year');
    const lightboxText = document.getElementById('lightbox-caption');

    if (!modal || !trigger) return;

    function openLightbox() {
      const currentItem = TIMELINE_DATA[state.currentMilestoneIndex];
      if (!currentItem) return;
      const lang = state.currentLang;

      lightboxImg.src = currentItem.img;
      lightboxImg.onerror = function () {
        if (currentItem.fallbackImg) lightboxImg.src = currentItem.fallbackImg;
      };
      lightboxYear.textContent = currentItem.year;
      lightboxText.textContent = `${currentItem.title[lang] || currentItem.title.es} — ${currentItem.highlight[lang] || currentItem.highlight.es}`;

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      pauseAutoplay();
    }

    function closeLightbox() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
      if (state.isPlaying) startAutoplay();
    }

    trigger.addEventListener('click', openLightbox);
    photoImg?.addEventListener('click', openLightbox);
    closeBtn?.addEventListener('click', closeLightbox);

    modal.addEventListener('click', e => {
      if (e.target === modal) closeLightbox();
    });

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeLightbox();
      }
    });
  }

  // ---------- 13. Suscripción y Notificaciones Toast ----------
  function initNewsletter() {
    const form = document.getElementById('magazine-newsletter-form');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        const dict = TRANSLATIONS[state.currentLang];
        showToast(dict.toastSubscribed);
        input.value = '';
      }
    });

    // Copiar teléfono al hacer clic
    document.querySelectorAll('.copy-phone-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        navigator.clipboard?.writeText('+595 61 500 645');
        const dict = TRANSLATIONS[state.currentLang];
        showToast(dict.toastCopied);
      });
    });
  }

  function showToast(message) {
    let toast = document.querySelector('.toast-notice');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${message}</span>
    `;

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3800);
  }

})();
