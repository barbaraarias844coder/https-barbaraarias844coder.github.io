/* ==========================================================================
   PORTFOLIO CORE LOGIC - BARBARA ARIAS BUROZ
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initTerminal();
  initExperienceTabs();
  initCertificateGenerator();
  initDataCleaner();
  initGeniallySimulator();
  initSkillsRadar();
  initFinancialCalculator();
  initContactForm();
  initHamburgerMenu();
});

/* ==========================================================================
   01. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   02. INTERACTIVE TERMINAL SIMULATOR
   ========================================================================== */
function initTerminal() {
  const terminalInput = document.getElementById('terminal-input');
  const terminalBody = document.getElementById('terminal-body');
  
  if (!terminalInput || !terminalBody) return;
  
  // Auto-focus terminal input on body click
  document.querySelector('.terminal-window').addEventListener('click', () => {
    terminalInput.focus();
  });
  
  const commands = {
    help: () => {
      return `Comandos disponibles:
  <span style="color: var(--accent-cyan);">skills</span>      Muestra las habilidades técnicas y de análisis.
  <span style="color: var(--accent-cyan);">projects</span>    Muestra un listado de proyectos estratégicos.
  <span style="color: var(--accent-cyan);">about</span>       Muestra un resumen de mi perfil profesional.
  <span style="color: var(--accent-cyan);">clear</span>       Limpia la terminal.
  <span style="color: var(--accent-cyan);">contact</span>     Muestra información de contacto directa.`;
    },
    about: () => {
      return `Bárbara Arias Buroz - Full-Stack Developer & Data Engineer
  -------------------------------------------------------------
  Desarrolladora de software con formación integral en ADSO SENA (2022-2026).
  Especializada en estructuración de pipelines masivos (ETL) y bases de datos cloud, 
  despliegues de datos en AWS, backend robusto y análisis financiero de viabilidad (VPN/TIR).`;
    },
    skills: () => {
      return `Habilidades y Competencias del Sistema:
  ---------------------------------------
  [1] <span style="color: var(--accent-cyan);">Ingeniería de Datos</span>: Pipelines ETL, AWS S3, PostgreSQL, Supabase RLS, Normalización RegEx, Streams.
  [2] <span style="color: var(--accent-violet);">Desarrollo Full-Stack</span>: Node.js, Express, React, TypeScript, Vite, Cookies HTTP-only, REST APIs.
  [3] <span style="color: var(--accent-emerald);">Análisis & Estrategia</span>: Capex/Opex, VPN, TIR, WBS/EDT (Gestión de proyectos), Liderazgo Técnico (SENASOFT 2025).`;
    },
    projects: () => {
      return `Proyectos Estratégicos en Producción:
  -----------------------------------------
  * <span style="color: var(--accent-cyan);">Certificate Generator</span>: Emisión de diplomas seguros (Node + Express + Supabase + React).
  * <span style="color: var(--accent-violet);">Diccionario Dinámico</span>: Pipeline de normalización de datos sucios masivos (Node + AWS S3).
  * <span style="color: var(--accent-emerald);">Plugins Genially</span>: Widgets ligeros y manipulaciones DOM seguras en JS nativo.`;
    },
    contact: () => {
      return `Información de Conectividad Directa:
  --------------------------------------
  * Email:    <a href="mailto:barbaraburoz@gmail.com" style="color: var(--accent-cyan);">barbaraburoz@gmail.com</a>
  * GitHub:   <a href="https://github.com/barbaraarias844coder" target="_blank" style="color: var(--accent-violet);">github.com/barbaraarias844coder</a>
  * LinkedIn: <a href="https://www.linkedin.com/in/barbara-buroz-770486368/" target="_blank" style="color: var(--accent-emerald);">linkedin.com/in/barbara-buroz</a>`;
    }
  };
  
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const inputVal = terminalInput.value.trim();
      const lowerInput = inputVal.toLowerCase();
      
      // Output the entered command first
      const inputLine = document.createElement('div');
      inputLine.className = 'terminal-output-line';
      inputLine.innerHTML = `<span class="terminal-prompt">barbara@portafolio:~$</span> ${inputVal}`;
      
      // Insert before input container
      terminalBody.insertBefore(inputLine, terminalInput.parentNode);
      
      if (lowerInput === 'clear') {
        // Clear all except initial line
        const outputLines = terminalBody.querySelectorAll('.terminal-output-line');
        outputLines.forEach(line => line.remove());
      } else if (lowerInput) {
        const responseLine = document.createElement('div');
        responseLine.className = 'terminal-output-line';
        
        if (commands[lowerInput]) {
          responseLine.innerHTML = commands[lowerInput]();
        } else {
          responseLine.innerHTML = `Comando no reconocido: <span style="color: var(--accent-pink);">${inputVal}</span>. Escribe <span style="color: var(--accent-cyan);">help</span> para ver opciones.`;
        }
        terminalBody.insertBefore(responseLine, terminalInput.parentNode);
      }
      
      // Reset and scroll
      terminalInput.value = '';
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  });
}

/* ==========================================================================
   03. INTERACTIVE EXPERIENCE TIMELINE TABS
   ========================================================================== */
function initExperienceTabs() {
  const tabs = document.querySelectorAll('.experience-tab-btn');
  const contentBox = document.getElementById('experience-content-box');
  
  if (!tabs.length || !contentBox) return;
  
  const contentData = {
    'data-cloud': {
      title: 'Desarrolladora de Software',
      company: '@ Idiomas OCW S.A.S.',
      date: 'Noviembre 2025 - Abril 2026 (Etapa Productiva)',
      points: [
        '<strong>Pipelines de Ingesta Masiva (ETL):</strong> Diseño e implementación de workflows de transformación de datos para más de 30 millones de registros de vocabulario académico.',
        '<strong>Integración y Despliegue en AWS:</strong> Carga automatizada y distribución segura de activos y archivos de datos a buckets de Amazon S3, optimizando tiempos de acceso y disponibilidad de recursos.',
        '<strong>Estandarización de Datasets:</strong> Unificación de lemas y frases de fuentes heterogéneas (Oxford, Longman, OPAL) en un set de datos maestro con tipologías de errores controladas.'
      ]
    },
    'security-backend': {
      title: 'Desarrolladora de Backend & Criptografía',
      company: '@ Idiomas OCW S.A.S.',
      date: 'Noviembre 2025 - Abril 2026 (Etapa Productiva)',
      points: [
        '<strong>Autenticación Zero-Trust:</strong> Desarrollo e integración de una arquitectura robusta de seguridad API mediante cookies HTTP-only de alta protección contra ataques XSS y CSRF.',
        '<strong>Seguridad Supabase RLS:</strong> Implementación de políticas finas de Row Level Security (RLS) a nivel de base de datos PostgreSQL, garantizando el aislamiento absoluto de los registros por docente.',
        '<strong>Esquemas de Validación Zod:</strong> Validación de esquemas estrictos de peticiones de entrada y configuración de entornos, asegurando transacciones de datos 100% íntegras.'
      ]
    },
    'optim-code': {
      title: 'Refactorización & Rendimiento Frontend',
      company: '@ Idiomas OCW S.A.S.',
      date: 'Noviembre 2025 - Abril 2026 (Etapa Productiva)',
      points: [
        '<strong>Inyección de Lógica Modular:</strong> Reducción masiva de deuda técnica acumulada en juegos web educativos e interactivos, separando el estado lógico del motor DOM.',
        '<strong>Optimización de Tiempos de Carga:</strong> Rediseño de componentes y eliminación de librerías sobredimensionadas, mejorando el rendimiento UX hasta en un 40% en dispositivos móviles.',
        '<strong>Control del DOM Nativo:</strong> Creación de widgets interactivos y animaciones fluidas a 60fps usando JavaScript nativo para integraciones limpias.'
      ]
    }
  };
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const tabKey = tab.getAttribute('data-tab');
      const data = contentData[tabKey];
      
      if (data) {
        contentBox.style.opacity = '0';
        contentBox.style.transform = 'translateY(10px)';
        contentBox.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        
        setTimeout(() => {
          contentBox.innerHTML = `
            <h3 class="experience-title">${data.title} <span class="experience-company">${data.company}</span></h3>
            <span class="experience-date">${data.date}</span>
            <ul class="experience-list">
              ${data.points.map(pt => `<li>${pt}</li>`).join('')}
            </ul>
          `;
          contentBox.style.opacity = '1';
          contentBox.style.transform = 'translateY(0)';
        }, 200);
      }
    });
  });
}

/* ==========================================================================
   04. LIVE CERTIFICATE GENERATOR SIMULATOR
   ========================================================================== */
let activeSvgContent = ''; // Cache the generated SVG for download

function initCertificateGenerator() {
  const btnGenerate = document.getElementById('btn-generate-cert');
  const btnDownload = document.getElementById('btn-download-cert');
  const inputName = document.getElementById('cert-name');
  const selectLevel = document.getElementById('cert-level');
  const svgContainer = document.getElementById('cert-svg-container');
  
  if (!btnGenerate || !svgContainer) return;
  
  function generateCertificateSVG() {
    const studentName = (inputName.value.trim() || 'Estudiante Ejemplar').toUpperCase();
    const cefrLevel = selectLevel.value;
    const today = new Date();
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    
    // Draw highly premium certificate in native SVG
    const svgCode = `
<svg width="100%" height="100%" viewBox="0 0 600 360" fill="none" xmlns="http://www.w3.org/2000/svg" style="background:#090d16; border: 4px solid #142037; border-radius: 4px;">
  <!-- Inner Border Frame -->
  <rect x="15" y="15" width="570" height="330" fill="none" stroke="#1f2d48" stroke-width="1"/>
  <rect x="20" y="20" width="560" height="320" fill="none" stroke="#00f2fe" stroke-width="1.5" stroke-opacity="0.8"/>
  
  <!-- Cybernetic corner details -->
  <path d="M 20 40 L 40 20" stroke="#00f2fe" stroke-width="2"/>
  <path d="M 580 40 L 560 20" stroke="#00f2fe" stroke-width="2"/>
  <path d="M 20 320 L 40 340" stroke="#00f2fe" stroke-width="2"/>
  <path d="M 580 320 L 560 340" stroke="#00f2fe" stroke-width="2"/>

  <!-- Logo/Badge Graphics -->
  <g transform="translate(300, 70)">
    <circle cx="0" cy="0" r="30" fill="#0c1322" stroke="url(#cert-glow-grad)" stroke-width="2" />
    <polygon points="0,-16 13,8 -13,8" fill="none" stroke="#00f2fe" stroke-width="2" />
    <circle cx="0" cy="0" r="8" fill="#9d4edd" />
  </g>
  
  <!-- Certificate Typography -->
  <text x="300" y="135" text-anchor="middle" fill="#94a3b8" font-family="'Outfit', sans-serif" font-size="12" font-weight="600" letter-spacing="3">IDIOMAS OCW S.A.S.</text>
  <text x="300" y="160" text-anchor="middle" fill="#f8fafc" font-family="'Outfit', sans-serif" font-size="18" font-weight="800" letter-spacing="1">CERTIFICADO DE LOGRO</text>
  
  <!-- Student Name -->
  <text x="300" y="205" text-anchor="middle" fill="#00f2fe" font-family="'Outfit', sans-serif" font-size="22" font-weight="700" letter-spacing="0.5">${studentName}</text>
  
  <!-- Description -->
  <text x="300" y="235" text-anchor="middle" fill="#94a3b8" font-family="'Inter', sans-serif" font-size="11">Ha demostrado solvencia y completado exitosamente las competencias del nivel</text>
  <text x="300" y="255" text-anchor="middle" fill="#00f5a0" font-family="'Outfit', sans-serif" font-size="14" font-weight="700" letter-spacing="2">MARCO CEFR - ${cefrLevel}</text>
  
  <!-- Footer signatures & Date -->
  <line x1="120" y1="300" x2="240" y2="300" stroke="#1f2d48" stroke-width="1"/>
  <text x="180" y="315" text-anchor="middle" fill="#64748b" font-family="'Inter', sans-serif" font-size="8">FECHA DE EMISIÓN: ${formattedDate}</text>
  
  <line x1="360" y1="300" x2="480" y2="300" stroke="#1f2d48" stroke-width="1"/>
  <text x="420" y="315" text-anchor="middle" fill="#64748b" font-family="'Inter', sans-serif" font-size="8">FIRMA AUTORIZADA: B. BUROZ</text>

  <!-- Gradients Definition -->
  <defs>
    <linearGradient id="cert-glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00f2fe" />
      <stop offset="100%" stop-color="#9d4edd" />
    </linearGradient>
  </defs>
</svg>
`;
    
    activeSvgContent = svgCode.trim();
    svgContainer.innerHTML = svgCode;
    btnDownload.style.display = 'inline-flex';
  }
  
  btnGenerate.addEventListener('click', (e) => {
    e.preventDefault();
    generateCertificateSVG();
  });
  
  // Download Action
  btnDownload.addEventListener('click', (e) => {
    e.preventDefault();
    if (!activeSvgContent) return;
    
    const blob = new Blob([activeSvgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `Certificado_${inputName.value.replace(/\s+/g, '_') || 'Logro'}.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    // Clean up
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
  });
  
  // Auto-generate initial state on load
  generateCertificateSVG();
}

/* ==========================================================================
   05. LIVE DICTIONARY DATA CLEANER (REGEXP)
   ========================================================================== */
function initDataCleaner() {
  const btnClean = document.getElementById('btn-clean-data');
  const cleanerInput = document.getElementById('cleaner-input');
  const cleanerResult = document.getElementById('cleaner-result');
  
  if (!btnClean || !cleanerInput || !cleanerResult) return;
  
  function processCleanLogic(rawText) {
    let clean = rawText.trim();
    if (!clean) return 'Error: La entrada está vacía.';
    
    // 1. Ignore headers or common PDF noise
    if (/^©|Oxford|Longman/i.test(clean)) return 'Línea de metadata descartada.';
    
    // 2. Remove frequency indicators like "S1, W1", "W3", "S2"
    clean = clean.replace(/\s*[SW]\d(,?\s*[SW]\d)*\s*$/g, '');
    
    // 3. Strip parts of speech tags (n., v., adj., adv., prep., pron., conj.)
    const posTags = ['adj', 'adv', 'prep', 'conj', 'det', 'pron', 'v', 'n', 'auxiliary', 'predeterminer', 'interjection', 'exclam'];
    posTags.forEach(tag => {
      // Look for tag isolated by spaces/dots/commas
      const re = new RegExp(`(?:\\s+|\\s*[,/.]\\s*)(${tag}\\.?)(?=[,\\s]|$|\\()`, 'gi');
      clean = clean.replace(re, '');
    });
    
    // 4. Strip CEFR Levels (A1-C2)
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    levels.forEach(lvl => {
      const re = new RegExp(`\\b${lvl}\\b`, 'gi');
      clean = clean.replace(re, '');
    });
    
    // 5. Expand optionals inside parentheses: eg. "agree (with sb)"
    // We demonstrate cleaning the parentheses for the simple playground
    clean = clean.replace(/\([^)]*\)/g, '');
    
    // 6. Final Clean symbols and trailing noise
    clean = clean.replace(/[^a-zA-Z\s/'-]/g, ''); // Keep only letters, spaces, slashes and dashes
    clean = clean.replace(/\s+/g, ' ').trim(); // Multi-space clean
    
    if (clean.length === 0) return 'Registro descartado (completamente ruido).';
    
    // Format into standard CSV row
    // Support slash alternatives expansion in mapping
    if (clean.includes('/')) {
      const alternatives = clean.split('/');
      return alternatives.map(alt => `${alt.trim().toLowerCase()},en,PENDING`).join('\n');
    }
    
    return `${clean.toLowerCase()},en,PENDING`;
  }
  
  btnClean.addEventListener('click', (e) => {
    e.preventDefault();
    const result = processCleanLogic(cleanerInput.value);
    cleanerResult.textContent = result;
    cleanerResult.style.color = result.includes('Error') || result.includes('descartado') ? 'var(--accent-pink)' : 'var(--accent-emerald)';
  });
}

/* ==========================================================================
   06. GENIALLY SIMULATOR (AUDIO & DYNAMIC CSS STYLE INJECTION)
   ========================================================================== */
function initGeniallySimulator() {
  const playBtn = document.getElementById('audio-play-btn');
  const progressBar = document.getElementById('audio-progress');
  const colorPicker = document.getElementById('color-picker-input');
  const audioWidgetSim = document.getElementById('widget-audio-player-sim');
  
  if (!playBtn || !progressBar || !colorPicker || !audioWidgetSim) return;
  
  let isPlaying = false;
  let progressWidth = 45;
  let progressInterval = null;
  
  playBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isPlaying = !isPlaying;
    
    if (isPlaying) {
      playBtn.textContent = '❚❚';
      // Animate progress simulation
      progressInterval = setInterval(() => {
        progressWidth = (progressWidth + 1.5) % 100;
        progressBar.style.width = `${progressWidth}%`;
      }, 300);
    } else {
      playBtn.textContent = '▶';
      clearInterval(progressInterval);
    }
  });
  
  // Custom CSS Injection Emulator
  colorPicker.addEventListener('input', (e) => {
    const selectedColor = e.target.value;
    audioWidgetSim.style.backgroundColor = selectedColor;
    audioWidgetSim.style.boxShadow = `0 8px 25px ${selectedColor}55`; // Apply glow based on alpha
  });
}

/* ==========================================================================
   07. SKILLS RADAR DIAGRAM INTERACTIVE SWAP
   ========================================================================== */
function initSkillsRadar() {
  const radarPoints = {
    'radar-data-point': {
      title: 'Ingeniería de Datos & Big Data',
      desc: 'Especialización técnica en la manipulación, modelado y limpieza de flujos de datos. Desarrollo de algoritmos óptimos e integraciones robustas en la nube para gestionar la persistencia y distribución.',
      tags: ['Pipelines ETL', 'Amazon S3 (AWS)', 'PostgreSQL', 'Supabase RLS', 'Normalización RegEx', 'Set Deduplication', 'Data Streams'],
      color: 'var(--accent-cyan)'
    },
    'radar-fs-point': {
      title: 'Desarrollo Web Full-Stack',
      desc: 'Construcción integral de aplicaciones modernas y fluidas de extremo a extremo. Priorizo la seguridad Zero-Trust en backend, la robustez de interfaces y la optimización extrema del renderizado en cliente.',
      tags: ['React 18', 'TypeScript', 'Vite 7', 'Node.js', 'Express.js', 'Rest APIs', 'Tailwind CSS', 'Cookies HTTP-only'],
      color: 'var(--accent-violet)'
    },
    'radar-strat-point': {
      title: 'Análisis y Liderazgo Estratégico',
      desc: 'Mi enfoque combina alta competencia técnica con criterio de negocio. Evalúo técnicamente la rentabilidad, calculo la tasa de descuento y viabilidad en finanzas de proyectos y ejerzo liderazgo tecnológico.',
      tags: ['Capex / Opex', 'Calculo VPN / TIR', 'WBS / EDT Plan', 'Liderazgo SENASOFT 2025', 'Arquitectura Viable', 'Mitigación Deuda Técnica'],
      color: 'var(--accent-emerald)'
    }
  };
  
  const skillCard = document.getElementById('skill-info-card');
  const cardTitle = document.getElementById('skill-card-title');
  const cardDesc = document.getElementById('skill-card-desc');
  const cardTags = document.getElementById('skill-tags');
  
  if (!skillCard || !cardTitle || !cardDesc || !cardTags) return;
  
  const points = document.querySelectorAll('.radar-point');
  points.forEach(pt => {
    pt.addEventListener('click', () => {
      const pointId = pt.getAttribute('id');
      const data = radarPoints[pointId];
      
      if (data) {
        // Simple animation trigger
        skillCard.style.opacity = '0';
        skillCard.style.transform = 'translateY(10px)';
        skillCard.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        
        setTimeout(() => {
          cardTitle.style.color = data.color;
          cardTitle.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: ${data.color}">
              ${pointId === 'radar-data-point' ? '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>' : ''}
              ${pointId === 'radar-fs-point' ? '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="12" y1="2" x2="12" y2="22"></line>' : ''}
              ${pointId === 'radar-strat-point' ? '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>' : ''}
            </svg>
            ${data.title}
          `;
          cardDesc.textContent = data.desc;
          cardTags.innerHTML = data.tags.map(t => `<li>${t}</li>`).join('');
          
          skillCard.style.opacity = '1';
          skillCard.style.transform = 'translateY(0)';
        }, 200);
      }
    });
  });
}

/* ==========================================================================
   08. FINANCIAL CALCULATOR (CAPEX, OPEX, NPV, IRR) WITH LIVE SVG CURVE
   ========================================================================== */
function initFinancialCalculator() {
  const capexInput = document.getElementById('calc-capex');
  const opexInput = document.getElementById('calc-opex');
  const rateInput = document.getElementById('calc-rate');
  const flow1Input = document.getElementById('calc-flow-1');
  const flow2Input = document.getElementById('calc-flow-2');
  const flow3Input = document.getElementById('calc-flow-3');
  
  const vpnVal = document.getElementById('calc-vpn-val');
  const tirVal = document.getElementById('calc-tir-val');
  const vpnCard = document.getElementById('vpn-metric-card');
  const tirCard = document.getElementById('tir-metric-card');
  const vpnBadge = document.getElementById('calc-vpn-badge');
  const tirBadge = document.getElementById('calc-tir-badge');
  const chartSvg = document.getElementById('calc-chart-svg');
  
  if (!capexInput || !opexInput || !rateInput || !flow1Input || !vpnVal || !chartSvg) return;
  
  // Math solver: Financial VPN calculation
  function calculateVPN(capex, opex, rate, flows) {
    let npv = -capex;
    for (let t = 1; t <= flows.length; t++) {
      const netFlow = flows[t - 1] - opex;
      npv += netFlow / Math.pow(1 + rate, t);
    }
    return npv;
  }
  
  // Numerical IRR calculation using Binary Search
  function calculateTIR(capex, opex, flows) {
    let lowRate = -0.99;
    let highRate = 5.0;
    const precision = 0.0001;
    let maxIterations = 1000;
    
    // Check if total cash inflows exceed initial investment
    let totalInflow = 0;
    flows.forEach(f => { totalInflow += (f - opex); });
    if (totalInflow <= capex) return 0; // Negative IRR or zero
    
    for (let i = 0; i < maxIterations; i++) {
      const midRate = (lowRate + highRate) / 2;
      const npv = calculateVPN(capex, opex, midRate, flows);
      
      if (Math.abs(npv) < precision) {
        return midRate;
      }
      
      if (npv > 0) {
        lowRate = midRate;
      } else {
        highRate = midRate;
      }
    }
    return (lowRate + highRate) / 2;
  }
  
  function updateFinancialMetrics() {
    const capex = parseFloat(capexInput.value) || 0;
    const opex = parseFloat(opexInput.value) || 0;
    const rate = (parseFloat(rateInput.value) || 0) / 100;
    
    const flows = [
      parseFloat(flow1Input.value) || 0,
      parseFloat(flow2Input.value) || 0,
      parseFloat(flow3Input.value) || 0
    ];
    
    // Calculate NPV & IRR
    const npv = calculateVPN(capex, opex, rate, flows);
    const irr = calculateTIR(capex, opex, flows);
    
    // Update labels and classes based on project viability
    vpnVal.textContent = `$${npv.toLocaleString('es-CO', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    tirVal.textContent = `${(irr * 100).toFixed(2)}%`;
    
    const isViable = npv >= 0;
    const isProfitable = irr >= rate;
    
    // Update Metric Cards Styling
    if (isViable) {
      vpnVal.className = 'metric-value emerald';
      vpnBadge.textContent = 'Proyecto Viable';
      vpnBadge.className = 'badge emerald';
      vpnCard.className = 'metric-card glass-panel active';
    } else {
      vpnVal.className = 'metric-value pink';
      vpnBadge.textContent = 'No Viable';
      vpnBadge.className = 'badge pink';
      vpnCard.className = 'metric-card glass-panel rejected';
    }
    
    if (isProfitable) {
      tirVal.className = 'metric-value cyan';
      tirBadge.textContent = 'Rentable';
      tirBadge.className = 'badge cyan';
      tirCard.className = 'metric-card glass-panel active';
    } else {
      tirVal.className = 'metric-value pink';
      tirBadge.textContent = 'Bajo Rendimiento';
      tirBadge.className = 'badge pink';
      tirCard.className = 'metric-card glass-panel rejected';
    }
    
    // Draw SVG Chart Curve
    drawFinancialChart(capex, opex, flows, isViable);
  }
  
  // Custom Dynamic SVG Plotter for Cash Curves
  function drawFinancialChart(capex, opex, flows, isViable) {
    const curveColor = isViable ? 'var(--accent-emerald)' : 'var(--accent-pink)';
    const glowColor = isViable ? 'rgba(0, 245, 160, 0.2)' : 'rgba(255, 0, 127, 0.2)';
    
    // Compute cumulative cash flows for Years 0, 1, 2, 3
    const values = [-capex];
    let cumulative = -capex;
    for (let i = 0; i < flows.length; i++) {
      cumulative += (flows[i] - opex);
      values.push(cumulative);
    }
    
    // Scale coordinate mappings
    const minVal = Math.min(...values, 0) * 1.1;
    const maxVal = Math.max(...values, 0) * 1.1;
    const range = maxVal - minVal;
    
    function getX(year) {
      return 50 + year * 100; // Map Years 0,1,2,3 into X: 50, 150, 250, 350
    }
    
    function getY(val) {
      // Map Cash range into Y coordinate [20 to 160] (SVG height is 200)
      const ratio = (val - minVal) / range;
      return 170 - ratio * 140; 
    }
    
    const p0 = { x: getX(0), y: getY(values[0]) };
    const p1 = { x: getX(1), y: getY(values[1]) };
    const p2 = { x: getX(2), y: getY(values[2]) };
    const p3 = { x: getX(3), y: getY(values[3]) };
    
    const yZero = getY(0);
    
    // Draw highly clean SVG diagram
    chartSvg.innerHTML = `
      <!-- Grid axes -->
      <line x1="30" y1="${yZero}" x2="370" y2="${yZero}" stroke="rgba(255,255,255,0.08)" stroke-width="1.5" />
      <line x1="50" y1="20" x2="50" y2="180" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
      
      <!-- Axis Labels -->
      <text x="375" y="${yZero + 3}" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="8">Retorno</text>
      <text x="50" y="192" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="8">Año 0</text>
      <text x="150" y="192" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="8">Año 1</text>
      <text x="250" y="192" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="8">Año 2</text>
      <text x="350" y="192" text-anchor="middle" fill="var(--text-muted)" font-family="var(--font-mono)" font-size="8">Año 3</text>
      
      <!-- Cumulative Area Gradient -->
      <path d="M ${p0.x} ${yZero} L ${p0.x} ${p0.y} Q ${p1.x} ${p1.y} ${p2.x} ${p2.y} T ${p3.x} ${p3.y} L ${p3.x} ${yZero} Z" fill="${glowColor}" opacity="0.35"/>
      
      <!-- Line Curve representing Cash Progress -->
      <path d="M ${p0.x} ${p0.y} Q 100 ${p0.y - 10} ${p1.x} ${p1.y} T 300 ${p2.y - 5} ${p3.x} ${p3.y}" fill="none" stroke="${curveColor}" stroke-width="3" stroke-linecap="round"/>
      
      <!-- Dots for Years -->
      <circle cx="${p0.x}" cy="${p0.y}" r="4" fill="${curveColor}" />
      <circle cx="${p1.x}" cy="${p1.y}" r="4" fill="${curveColor}" />
      <circle cx="${p2.x}" cy="${p2.y}" r="4" fill="${curveColor}" />
      <circle cx="${p3.x}" cy="${p3.y}" r="4" fill="${curveColor}" />
      
      <!-- Values Labels -->
      <text x="${p0.x}" y="${p0.y + 15}" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-mono)" font-size="8">$${Math.round(values[0]/100)/10}k</text>
      <text x="${p1.x}" y="${p1.y - 10}" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-mono)" font-size="8">$${Math.round(values[1]/100)/10}k</text>
      <text x="${p2.x}" y="${p2.y - 10}" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-mono)" font-size="8">$${Math.round(values[2]/100)/10}k</text>
      <text x="${p3.x}" y="${p3.y - 10}" text-anchor="middle" fill="var(--text-secondary)" font-family="var(--font-mono)" font-size="8">$${Math.round(values[3]/100)/10}k</text>
    `;
  }
  
  // Bind inputs event listeners
  const inputList = [capexInput, opexInput, rateInput, flow1Input, flow2Input, flow3Input];
  inputList.forEach(input => {
    input.addEventListener('input', updateFinancialMetrics);
  });
  
  // Calculate initial metrics
  updateFinancialMetrics();
}

/* ==========================================================================
   09. CONTACT FORM INTERACTIVE SUBMISSION
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const nameVal = document.getElementById('contact-name').value;
    
    // Simulate high-end sending animation
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando Datos...';
    submitBtn.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.2)';
    
    // Collect form data
    const formData = new FormData(form);
    
    // Send to Formspree via AJAX
    fetch('https://formspree.io/f/xlgvpbjg', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        // Show confirmation on success
        form.innerHTML = `
          <div style="text-align: center; padding: 40px 10px; display: flex; flex-direction: column; align-items: center; gap: 20px;">
            <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(0, 245, 160, 0.1); border: 2px solid var(--accent-emerald); display: flex; align-items: center; justify-content: center; color: var(--accent-emerald); font-size: 1.8rem; box-shadow: var(--glow-emerald);">
              ✓
            </div>
            <h3 style="font-family: var(--font-title); font-size: 1.4rem; color: var(--text-primary);">¡Mensaje Enviado con Éxito!</h3>
            <p style="color: var(--text-secondary); font-size: 0.95rem; max-width: 320px;">
              Gracias por contactar, <strong>${nameVal}</strong>. Estaré revisando tu propuesta y me comunicaré contigo a la brevedad.
            </p>
          </div>
        `;
      } else {
        throw new Error('Formspree returned an error');
      }
    }).catch(error => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Error. Intenta de nuevo.';
      submitBtn.style.boxShadow = 'none';
      console.error(error);
    });
  });
}

/* ==========================================================================
   10. HAMBURGER MENU (MOBILE)
   ========================================================================== */
function initHamburgerMenu() {
  const btn = document.getElementById('hamburger-btn');
  const navLinks = document.getElementById('nav-links');
  
  if (!btn || !navLinks) return;
  
  btn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  });
  
  // Close menu when a link is clicked
  navLinks.querySelectorAll('.nav-link-item').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}
