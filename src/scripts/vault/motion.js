// SertifVault · motion: lapisan B (marquee skew), C (flip hero),
// D (magnetic + kursor), E (curtain). Masing-masing init()/destroy().
const fine = matchMedia('(pointer: fine) and (hover: hover)').matches;

export function splitHero() {  document.querySelectorAll('[data-hw]').forEach(el => {
    const text = el.dataset.hw || '';
    el.innerHTML = '';
    [...text].forEach((ch, i) => {
      const s = document.createElement('span');
      s.className = 'hw-letter';
      s.style.animationDelay = `${0.12 + i * 0.055}s`;
      s.textContent = ch === ' ' ? '\u00A0' : ch;
      el.appendChild(s);
    });
  });
}

function heroIn() {
  const h = document.querySelector('.headword');
  if (h) requestAnimationFrame(() => h.classList.add('hw-play'));
}

function marqueeSkew() {
  const bands = [...document.querySelectorAll('.marquee')];
  if (!bands.length) return () => {};
  let last = scrollY, skew = 0, raf = 0, run = true, visible = true;
  const io = new IntersectionObserver(es => { visible = es.some(e => e.isIntersecting); }, { threshold: 0 });
  bands.forEach(b => io.observe(b));
  const tick = () => {
    if (!run) return;
    raf = requestAnimationFrame(tick);
    if (!visible) return;
    const y = scrollY;
    if (y === last && Math.abs(skew) < 0.05) return;
    const v = y - last;
    last = y;
    const target = Math.max(-12, Math.min(12, v * 0.35));
    skew += (target - skew) * 0.12;
    if (Math.abs(skew) < 0.05 && Math.abs(target) < 0.05) skew = 0;
    bands.forEach(b => b.style.setProperty('--mq-skew', `${skew.toFixed(2)}deg`));
  };
  tick();
  return () => { run = false; cancelAnimationFrame(raf); io.disconnect(); };
}

function curtains() {
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.curtain').forEach(c => io.observe(c));
  return () => io.disconnect();
}

function cursor() {
  if (!fine) return () => {};
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return () => {};
  document.body.classList.add('cursor-on');
  let x = -100, y = -100, rx = -100, ry = -100, raf = 0, run = true;
  const loop = () => {
    if (!run) return;
    rx += (x - rx) * 0.2; ry += (y - ry) * 0.2;
    dot.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%) scale(${ring.dataset.s || 0.6})`;
    raf = requestAnimationFrame(loop);
  };
  const move = e => { x = e.clientX; y = e.clientY; };
  const over = e => {
    const t = e.target.closest('[data-cursor]');
    ring.dataset.s = t ? (t.dataset.cursor === 'view' ? 1.25 : 0.9) : 0.6;
    ring.classList.toggle('is-view', t?.dataset.cursor === 'view');
    ring.classList.toggle('is-link', !!t && t.dataset.cursor !== 'view');
  };
  addEventListener('pointermove', move, { passive: true });
  addEventListener('pointerover', over, { passive: true });
  loop();
  return () => {
    run = false; cancelAnimationFrame(raf);
    removeEventListener('pointermove', move);
    removeEventListener('pointerover', over);
    document.body.classList.remove('cursor-on');
  };
}

function magnetic() {
  if (!fine) return () => {};
  const els = [...document.querySelectorAll('.magnetic')];
  const cleanups = els.map(el => {
    const onMove = e => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${(dx * 0.14).toFixed(1)}px, ${(dy * 0.14).toFixed(1)}px)`;
    };
    const onLeave = () => { el.style.transform = ''; };
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => { el.removeEventListener('pointermove', onMove); el.removeEventListener('pointerleave', onLeave); };
  });
  return () => cleanups.forEach(c => c());
}

let stops = [];
export function initMotion() {
  if (document.body.classList.contains('no-motion')) return;
  splitHero();
  if (document.fonts?.ready) document.fonts.ready.then(heroIn); else heroIn();
  stops = [marqueeSkew(), curtains(), cursor(), magnetic()];
}
export function destroyMotion() { stops.forEach(s => s()); stops = []; }
export function setMotionLite(off) {
  // Dipanggil saat toggle gerak: matikan total atau nyalakan ulang.
  destroyMotion();
  document.body.classList.toggle('no-motion', off);
  if (!off) initMotion();
}
