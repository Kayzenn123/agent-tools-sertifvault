// SertifVault · peta entri: dunia pan/zoom berbasis DOM (tombol = node).
// Narasi gerak A: "menjelajah kamus seperti peta game 8-bit".
import { KATEGORI } from './store.js';

const LANES = Object.keys(KATEGORI);
const LANE_H = 120;

export function createMap(viewport, { onOpen } = {}) {
  const world = viewport.querySelector('.map-world');
  const live = viewport.querySelector('.map-live');
  let entries = [];
  let lite = false;
  let raf = 0;

  const st = { x: 40, y: 40, s: 1 };
  const apply = () => {
    world.style.transform = `translate(${st.x}px, ${st.y}px) scale(${st.s})`;
  };
  const setTransform = (nx, ny, ns, instant) => {
    st.x = nx; st.y = ny; st.s = Math.min(2.6, Math.max(0.45, ns));
    world.style.transition = (instant || lite) ? 'none' : 'transform 280ms cubic-bezier(.2,.7,.25,1)';
    apply();
  };

  // --- pan (pointer) ---
  let drag = null;
  viewport.addEventListener('pointerdown', e => {
    if (e.target.closest('.map-node') || e.target.closest('.map-ctl')) return;
    drag = { sx: e.clientX, sy: e.clientY, x: st.x, y: st.y, moved: false };
    viewport.setPointerCapture(e.pointerId);
  });
  viewport.addEventListener('pointermove', e => {
    if (!drag) return;
    const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
    if (Math.abs(dx) + Math.abs(dy) > 6) drag.moved = true;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => setTransform(drag.x + dx, drag.y + dy, st.s, true));
  });
  const endDrag = () => { drag = null; };
  viewport.addEventListener('pointerup', endDrag);
  viewport.addEventListener('pointercancel', endDrag);

  // --- zoom: wheel (desktop) ---
  viewport.addEventListener('wheel', e => {
    if (e.ctrlKey) e.preventDefault();
    else return;
    const r = viewport.getBoundingClientRect();
    const mx = e.clientX - r.left, my = e.clientY - r.top;
    const ns = st.s * (e.deltaY < 0 ? 1.12 : 1 / 1.12);
    const k = Math.min(2.6, Math.max(0.45, ns)) / st.s;
    setTransform(mx - (mx - st.x) * k, my - (my - st.y) * k, st.s * k, lite);
  }, { passive: false });

  // --- kontrol tombol + keyboard ---
  const zoomBy = f => {
    const r = viewport.getBoundingClientRect();
    const k = Math.min(2.6, Math.max(0.45, st.s * f)) / st.s;
    setTransform(r.width / 2 - (r.width / 2 - st.x) * k, r.height / 2 - (r.height / 2 - st.y) * k, st.s * k);
    live.textContent = `Zum ${Math.round(st.s * 100)} persen`;
  };
  document.querySelector('[data-map-zoom="in"]')?.addEventListener('click', () => zoomBy(1.25));
  document.querySelector('[data-map-zoom="out"]')?.addEventListener('click', () => zoomBy(1 / 1.25));
  document.querySelector('[data-map-zoom="reset"]')?.addEventListener('click', () => { setTransform(40, 40, 1); live.textContent = 'Peta disetel ulang'; });
  viewport.addEventListener('keydown', e => {
    const step = 60;
    if (e.key === 'ArrowLeft') { setTransform(st.x + step, st.y, st.s, true); e.preventDefault(); }
    else if (e.key === 'ArrowRight') { setTransform(st.x - step, st.y, st.s, true); e.preventDefault(); }
    else if (e.key === 'ArrowUp') { setTransform(st.x, st.y + step, st.s, true); e.preventDefault(); }
    else if (e.key === 'ArrowDown') { setTransform(st.x, st.y - step, st.s, true); e.preventDefault(); }
    else if (e.key === '+' || e.key === '=') { zoomBy(1.25); e.preventDefault(); }
    else if (e.key === '-') { zoomBy(1 / 1.25); e.preventDefault(); }
  });

  function layout(entries) {
    const years = entries.map(e => +e.tanggal.slice(0, 4));
    const minY = Math.min(...years, new Date().getFullYear()) - 1;
    const maxY = Math.max(...years, new Date().getFullYear()) + 1;
    const ppy = viewport.clientWidth < 640 ? 170 : 230;
    return { minY, maxY, ppy, w: (maxY - minY + 1) * ppy + 120, h: LANES.length * LANE_H + 60 };
  }

  function render(list) {
    entries = [...list].sort((a, b) => a.tanggal.localeCompare(b.tanggal));
    world.innerHTML = '';
    if (!entries.length) {
      world.innerHTML = `<div class="map-empty" style="padding:60px 20px;max-width:420px">
        <p class="font-display" style="font-size:1.4rem;font-weight:700">Rak masih kosong.</p>
        <p style="color:var(--muted)">Belum ada entri di peta ini. Catat sertifikat pertamamu — Pak Kamus yang susunkan nomornya.</p></div>`;
      return;
    }
    const L = layout(entries);
    world.style.width = L.w + 'px';
    world.style.height = L.h + 'px';
    const frag = document.createDocumentFragment();
    for (let y = L.minY; y <= L.maxY; y++) {
      const d = document.createElement('div');
      d.className = 'map-year';
      d.style.left = ((y - L.minY) * L.ppy + 40) + 'px';
      d.textContent = y;
      frag.appendChild(d);
    }
    LANES.forEach((k, i) => {
      const lab = document.createElement('div');
      lab.className = 'map-lane-label';
      lab.style.top = (i * LANE_H + 64) + 'px';
      lab.textContent = KATEGORI[k];
      frag.appendChild(lab);
    });
    entries.forEach((e, i) => {
      const yr = +e.tanggal.slice(0, 4), mo = +e.tanggal.slice(5, 7);
      const x = (yr - L.minY) * L.ppy + 40 + ((mo - 1) / 12) * L.ppy;
      const y = LANES.indexOf(e.kategori) * LANE_H + 60 + LANE_H / 2;
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'map-node' + (e.contoh ? ' is-sample' : '');
      b.style.left = x + 'px';
      b.style.top = y + 'px';
      b.dataset.id = e.id;
      const num = String(i + 1).padStart(3, '0');
      b.setAttribute('aria-label', `Entri ${num}: ${e.nama}, ${KATEGORI[e.kategori]}. Buka detail.`);
      b.innerHTML = `<span class="gem"></span><span class="num">${num}</span>`;
      b.addEventListener('click', () => {
        if (drag?.moved) return;
        zoomToNode(b, x, y);
        setTimeout(() => onOpen?.(e.id), lite ? 0 : 300);
      });
      frag.appendChild(b);
    });
    world.appendChild(frag);
    // Bingkai awal: tengahkan rentang tahun berisi data
    const vw = viewport.clientWidth, vh = viewport.clientHeight;
    setTransform(vw / 2 - (L.w / 2) * st.s, vh / 2 - (L.h / 2) * st.s, st.s, true);
  }

  function zoomToNode(node, x, y) {
    document.querySelectorAll('.map-node.is-active').forEach(n => n.classList.remove('is-active'));
    node.classList.add('is-active');
    const r = viewport.getBoundingClientRect();
    const ns = Math.min(2.2, Math.max(st.s, 1.6));
    setTransform(r.width / 2 - x * ns, r.height / 2 - y * ns, ns, lite);
  }

  function zoomTo(id) {
    const node = world.querySelector(`.map-node[data-id="${CSS.escape(id)}"]`);
    if (!node) return false;
    node.scrollIntoView({ block: 'nearest' });
    const x = parseFloat(node.style.left), y = parseFloat(node.style.top);
    zoomToNode(node, x, y);
    return true;
  }

  apply();
  return {
    render, zoomTo,
    setLite(v) { lite = v; },
    destroy() { cancelAnimationFrame(raf); },
  };
}
