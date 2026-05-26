// Galaxy particle background — vanilla JS, theme-aware
(() => {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let W = 0, H = 0;
  const stars = [];
  const shooting = [];
  let theme = document.documentElement.getAttribute('data-theme') || 'deep-space';

  function readThemeColors() {
    const cs = getComputedStyle(document.documentElement);
    return {
      star:    cs.getPropertyValue('--star').trim()    || '#ffffff',
      accentA: cs.getPropertyValue('--accent-a').trim() || '#a78bfa',
      accentB: cs.getPropertyValue('--accent-b').trim() || '#67e8f9',
      isLight: cs.getPropertyValue('--is-light').trim() === '1'
    };
  }
  let colors = readThemeColors();

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  }

  function seed() {
    stars.length = 0;
    const density = colors.isLight ? 0.00006 : 0.00018;
    const count = Math.floor(W * H * density);
    for (let i = 0; i < count; i++) {
      const layer = Math.random();
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        z: layer, // depth 0..1 — used for parallax + size
        r: 0.3 + Math.random() * (layer > 0.85 ? 1.6 : 0.9),
        tw: Math.random() * Math.PI * 2,
        tws: 0.008 + Math.random() * 0.022,
        hue: Math.random() < 0.12 ? 'a' : Math.random() < 0.5 ? 'b' : 'star'
      });
    }
  }

  let mx = 0, my = 0;
  window.addEventListener('mousemove', (e) => {
    mx = (e.clientX / W - 0.5) * 2;
    my = (e.clientY / H - 0.5) * 2;
  });

  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  function maybeShoot() {
    if (colors.isLight) return;
    if (Math.random() < 0.0025 && shooting.length < 2) {
      const fromLeft = Math.random() < 0.5;
      shooting.push({
        x: fromLeft ? -50 : W + 50,
        y: Math.random() * H * 0.6,
        vx: (fromLeft ? 1 : -1) * (5 + Math.random() * 4),
        vy: 1.5 + Math.random() * 2,
        life: 0,
        max: 70 + Math.random() * 40
      });
    }
  }

  function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const n = parseInt(hex, 16);
    return [ (n >> 16) & 255, (n >> 8) & 255, n & 255 ];
  }
  let RGB = { star: hexToRgb(colors.star), a: hexToRgb(colors.accentA), b: hexToRgb(colors.accentB) };

  function frame() {
    ctx.clearRect(0, 0, W, H);

    // subtle galactic dust streak — slow rotating gradient
    if (!colors.isLight) {
      const grad = ctx.createRadialGradient(W * 0.7, H * 0.3, 0, W * 0.7, H * 0.3, Math.max(W, H) * 0.6);
      grad.addColorStop(0, `rgba(${RGB.a[0]},${RGB.a[1]},${RGB.a[2]},0.04)`);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    }

    // stars
    for (const s of stars) {
      s.tw += s.tws;
      const tw = 0.55 + 0.45 * Math.sin(s.tw);
      // parallax: deeper layers (z near 1) move more with mouse
      const px = s.x + mx * s.z * 14 + (-scrollY * s.z * 0.04);
      const py = s.y + my * s.z * 14;
      const wrapY = ((py % H) + H) % H;
      const wrapX = ((px % W) + W) % W;

      const c = s.hue === 'a' ? RGB.a : s.hue === 'b' ? RGB.b : RGB.star;
      ctx.beginPath();
      ctx.arc(wrapX, wrapY, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${tw * (colors.isLight ? 0.5 : 0.9)})`;
      ctx.fill();

      // glow for big stars
      if (s.r > 1.2 && !colors.isLight) {
        const g = ctx.createRadialGradient(wrapX, wrapY, 0, wrapX, wrapY, s.r * 6);
        g.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${tw * 0.35})`);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = g;
        ctx.fillRect(wrapX - s.r * 6, wrapY - s.r * 6, s.r * 12, s.r * 12);
      }
    }

    // shooting stars
    maybeShoot();
    for (let i = shooting.length - 1; i >= 0; i--) {
      const sh = shooting[i];
      sh.x += sh.vx; sh.y += sh.vy; sh.life++;
      const t = sh.life / sh.max;
      const alpha = Math.sin(t * Math.PI);
      const tailLen = 80;
      const grad = ctx.createLinearGradient(sh.x, sh.y, sh.x - sh.vx * tailLen / 6, sh.y - sh.vy * tailLen / 6);
      grad.addColorStop(0, `rgba(${RGB.star[0]},${RGB.star[1]},${RGB.star[2]},${alpha})`);
      grad.addColorStop(1, `rgba(${RGB.star[0]},${RGB.star[1]},${RGB.star[2]},0)`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(sh.x, sh.y);
      ctx.lineTo(sh.x - sh.vx * tailLen / 6, sh.y - sh.vy * tailLen / 6);
      ctx.stroke();
      if (sh.life > sh.max) shooting.splice(i, 1);
    }

    requestAnimationFrame(frame);
  }

  // Watch for theme changes
  const obs = new MutationObserver(() => {
    const next = document.documentElement.getAttribute('data-theme');
    if (next !== theme) {
      theme = next;
      colors = readThemeColors();
      RGB = { star: hexToRgb(colors.star), a: hexToRgb(colors.accentA), b: hexToRgb(colors.accentB) };
      seed();
    }
  });
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  window.addEventListener('resize', resize);
  resize();
  frame();
})();

// Custom cursor
(() => {
  const isTouch = matchMedia('(hover: none)').matches;
  if (isTouch) { document.body.setAttribute('data-touch', '1'); return; }

  const dot = document.createElement('div');
  dot.className = 'cursor-dot';
  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
  let rx = tx, ry = ty;

  window.addEventListener('mousemove', (e) => {
    tx = e.clientX; ty = e.clientY;
    dot.style.transform = `translate(${tx}px, ${ty}px) translate(-50%, -50%)`;
  });

  function loop() {
    rx += (tx - rx) * 0.18;
    ry += (ty - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(loop);
  }
  loop();

  // hover targets
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, [data-hoverable]')) ring.classList.add('is-hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, [data-hoverable]')) ring.classList.remove('is-hover');
  });
})();

// Page-load entry animation — set body.is-ready once everything is mounted.
// (We don't mutate per-element classes — React owns those and would reset them.)
(() => {
  function markReady() {
    document.body.classList.add('is-ready');
  }
  // Wait for React to render at least one section
  let attempts = 0;
  const t = setInterval(() => {
    attempts++;
    if (document.querySelector('.hero-title') || attempts > 30) {
      clearInterval(t);
      requestAnimationFrame(markReady);
    }
  }, 100);
})();

// Project card mouse tracking — for the radial glow on hover
document.addEventListener('mousemove', (e) => {
  const card = e.target.closest('.project-card');
  if (!card) return;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width * 100) + '%');
  card.style.setProperty('--my', ((e.clientY - rect.top) / rect.height * 100) + '%');
});
