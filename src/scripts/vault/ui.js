// SertifVault · ui: render daftar/statistik, form, ekspor, dialog, filter,
// deep-link, konami, toggle gerak, mode ringan.
import { loadStore, saveStore, validateEntry, saveFile, getFile, deleteFile, download, copyText, toCSV, summaryText, fmtDate, readQuery, stats, KATEGORI } from './store.js';
import { createMap } from './map.js';
import { initMotion, setMotionLite, splitHero } from './motion.js';
import { vic } from '../../components/vault/icons.ts';

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

let data = loadStore();
let map = null;
let filters = { q: '', kategori: '', tahun: '' };
const $ = s => document.querySelector(s);

export function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove('show'), 3200);
}

function sortedEntries() {
  return [...data.entries].sort((a, b) => a.tanggal.localeCompare(b.tanggal) || a.nama.localeCompare(b.nama));
}

function filteredEntries() {
  const q = filters.q.toLowerCase();
  return sortedEntries().filter(e =>
    (!filters.kategori || e.kategori === filters.kategori) &&
    (!filters.tahun || e.tanggal.startsWith(filters.tahun)) &&
    (!q || (e.nama + ' ' + e.penyelenggara + ' ' + e.catatan).toLowerCase().includes(q))
  );
}

function renderStats() {
  const s = stats(data.entries);
  const set = (k, v) => { const el = document.querySelector(`[data-stat="${k}"]`); if (el) el.textContent = v; };
  set('total', s.total);
  set('thisYear', s.thisYear);
  set('cats', Object.values(s.per).filter(Boolean).length);
}

function renderYears() {
  const sel = $('#ft');
  const years = [...new Set(data.entries.map(e => e.tanggal.slice(0, 4)))].sort().reverse();
  sel.innerHTML = '<option value="">Semua tahun</option>' + years.map(y => `<option value="${y}"${filters.tahun === y ? ' selected' : ''}>${y}</option>`).join('');
}

function renderList() {
  const list = filteredEntries();
  const box = $('#entry-list');
  const n = list.length;
  $('#filter-count').textContent = n === 0
    ? 'Tidak ada entri yang cocok.'
    : `${n} entri ketemu${filters.q || filters.kategori || filters.tahun ? ' — hasil saringan' : ''}.`;
  $('#list-empty').classList.toggle('hidden', n !== 0);
  box.innerHTML = list.map((e, i) => `
    <article class="dict-entry" id="entri-${esc(e.id)}">
      <div class="flex items-start justify-between gap-4">
        <h3 class="hw">
          <span class="font-accent" style="color:var(--accent)">${String(i + 1).padStart(3, '0')}.</span>
          ${esc(e.nama)}${e.contoh ? '<span class="sample-tag">CONTOH</span>' : ''}
        </h3>
        <button type="button" class="btn btn-sm btn-ghost shrink-0" data-open="${esc(e.id)}" data-cursor="link" aria-label="Buka detail ${esc(e.nama)}">
          ${vic('eye', 'w-4 h-4')}
        </button>
      </div>
      <p class="kelas-kata mt-1">${esc(KATEGORI[e.kategori])}${e.peringkat ? ` · ${esc(e.peringkat)}` : ''} · ${esc(fmtDate(e.tanggal))}</p>
      ${e.penyelenggara ? `<p class="mt-1 text-sm" style="color:var(--muted)">${esc(e.penyelenggara)}</p>` : ''}
      ${e.catatan ? `<p class="mt-2">${esc(e.catatan)}</p>` : ''}
    </article>`).join('');
  box.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => openEntry(b.dataset.open)));
}

function renderAll() {
  renderStats();
  renderYears();
  renderList();
  map?.render(sortedEntries());
}

function syncQuery() {
  const p = new URLSearchParams();
  if (filters.q) p.set('q', filters.q);
  if (filters.kategori) p.set('kategori', filters.kategori);
  if (filters.tahun) p.set('tahun', filters.tahun);
  history.replaceState(null, '', p.toString() ? '?' + p : location.pathname);
}

// --- dialog ---
let currentId = null;
async function openEntry(id) {
  const e = data.entries.find(x => x.id === id);
  if (!e) { toast('Entri tidak ketemu — mungkin sudah dicabut.'); return; }
  currentId = id;
  const idx = sortedEntries().findIndex(x => x.id === id);
  $('#dlg-num').textContent = '№ ' + String(idx + 1).padStart(3, '0');
  $('#dlg-body').innerHTML = `
    <h3 id="dlg-title" class="headword" style="font-size: clamp(1.6rem, 6vw, 2.4rem)">${esc(e.nama)}</h3>
    <p class="kelas-kata mt-2 text-lg">${esc(KATEGORI[e.kategori])}${e.peringkat ? ` · ${esc(e.peringkat)}` : ''}</p>
    <dl class="mt-6 grid gap-3 text-base">
      <div class="flex gap-3"><dt class="font-bold w-32 shrink-0">Tanggal</dt><dd>${esc(fmtDate(e.tanggal))}</dd></div>
      ${e.penyelenggara ? `<div class="flex gap-3"><dt class="font-bold w-32 shrink-0">Penyelenggara</dt><dd>${esc(e.penyelenggara)}</dd></div>` : ''}
      ${e.catatan ? `<div class="flex gap-3"><dt class="font-bold w-32 shrink-0">Definisi</dt><dd>${esc(e.catatan)}</dd></div>` : ''}
      <div class="flex gap-3"><dt class="font-bold w-32 shrink-0">Status</dt><dd>${e.contoh ? 'Entri contoh' : 'Arsip asli'}</dd></div>
    </dl>`;
  const fbtn = $('#dlg-file');
  fbtn.classList.add('hidden');
  fbtn.onclick = null;
  if (e.fileId) {
    try {
      const rec = await getFile(e.fileId);
      if (rec) {
        fbtn.classList.remove('hidden');
        fbtn.onclick = () => {
          const a = document.createElement('a');
          a.href = URL.createObjectURL(rec.blob);
          a.download = rec.name || 'lampiran';
          a.target = '_blank'; a.rel = 'noopener';
          document.body.appendChild(a); a.click(); a.remove();
          setTimeout(() => URL.revokeObjectURL(a.href), 4000);
        };
      }
    } catch { /* lampiran rusak: tombol tetap sembunyi */ }
  }
  $('#dlg-link').onclick = async () => {
    const url = new URL(location.href); url.search = ''; url.searchParams.set('id', e.id);
    (await copyText(url.toString())) ? toast('Tautan entri tersalin.') : toast('Gagal menyalin — salin manual dari bilah alamat.');
  };
  const del = $('#dlg-delete');
  del.dataset.armed = '';
  del.innerHTML = `${vic('trash', 'w-4 h-4')} Cabut entri`;
  del.onclick = () => {
    if (!del.dataset.armed) {
      del.dataset.armed = '1';
      del.innerHTML = `${vic('trash', 'w-4 h-4')} Yakin? Klik lagi`;
      setTimeout(() => { del.dataset.armed = ''; del.innerHTML = `${vic('trash', 'w-4 h-4')} Cabut entri`; }, 3000);
      return;
    }
    removeEntry(e.id);
    $('#entry-dialog').close();
  };
  $('#entry-dialog').showModal();
}

function removeEntry(id) {
  const e = data.entries.find(x => x.id === id);
  data.entries = data.entries.filter(x => x.id !== id);
  if (!saveStore(data)) toast('Gagal menyimpan — peramban menolak.');
  else {
    if (e?.fileId) deleteFile(e.fileId);
    toast(`Entri "${e?.nama ?? ''}" dicabut dari kamus.`);
    renderAll();
  }
}

// --- form ---
function fieldError(name, msg) {
  const f = document.querySelector(`[data-field="${name}"]`);
  if (!f) return;
  f.classList.toggle('invalid', !!msg);
  const p = f.querySelector('.err');
  if (p) p.textContent = msg || '';
}
function initForm() {
  const form = $('#entry-form');
  form.addEventListener('submit', async ev => {
    ev.preventDefault();
    ['nama', 'penyelenggara', 'tanggal', 'kategori', 'peringkat', 'catatan', 'file'].forEach(n => fieldError(n, ''));
    const fd = new FormData(form);
    const file = fd.get('berkas');
    let fileId = null;
    if (file && file.size > 0) {
      try { fileId = await saveFile(file); }
      catch (err) { fieldError('file', err.message); $('#f-file').focus(); return; }
    }
    const { ok, errors, entry } = validateEntry({
      nama: fd.get('nama'), penyelenggara: fd.get('penyelenggara'),
      tanggal: fd.get('tanggal'), kategori: fd.get('kategori'),
      peringkat: fd.get('peringkat'), catatan: fd.get('catatan'), fileId,
    });
    if (!ok) {
      Object.entries(errors).forEach(([k, m]) => fieldError(k, m));
      const first = Object.keys(errors)[0];
      document.querySelector(`[data-field="${first}"] input, [data-field="${first}"] select, [data-field="${first}"] textarea`)?.focus();
      $('#form-status').textContent = 'Ejaan salah — cek lagi yang bertanda.';
      return;
    }
    data.entries.push(entry);
    if (!saveStore(data)) { toast('Gagal menyimpan arsip.'); if (fileId) deleteFile(fileId); return; }
    form.reset();
    $('#form-status').textContent = '';
    renderAll();
    toast(`Entri № ${String(sortedEntries().length).padStart(3, '0')} tercatat. Pak Kamus bangga.`);
    if (map.zoomTo(entry.id)) { /* kamera menuju titik baru */ }
    document.querySelector('#peta')?.scrollIntoView({ behavior: document.body.classList.contains('no-motion') ? 'auto' : 'smooth' });
  });
  // validasi saat blur: perbaiki langsung tanpa ceramah
  form.addEventListener('focusout', ev => {
    const wrap = ev.target.closest('[data-field]');
    if (!wrap) return;
    const name = wrap.dataset.field;
    const fd = new FormData(form);
    const { errors = {} } = validateEntry({
      nama: fd.get('nama'), penyelenggara: fd.get('penyelenggara'), tanggal: fd.get('tanggal'),
      kategori: fd.get('kategori'), peringkat: fd.get('peringkat'), catatan: fd.get('catatan'),
    });
    fieldError(name, errors[name] || '');
  });
}

// --- ekspor ---
function initExport() {
  const st = $('#export-status');
  const say = m => { st.textContent = m; };
  $('#exp-copy').addEventListener('click', async () => {
    (await copyText(summaryText(sortedEntries()))) ? say('Ringkasan tersalin — tinggal tempel ke formulir.') : say('Gagal menyalin — izin clipboard ditolak.');
  });
  $('#exp-json').addEventListener('click', () => {
    download('sertifvault-arsip.json', JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), entries: data.entries }, null, 2), 'application/json');
    say('Berkas JSON terunduh.');
  });
  $('#exp-csv').addEventListener('click', () => {
    download('sertifvault-arsip.csv', '﻿' + toCSV(sortedEntries()), 'text/csv;charset=utf-8');
    say('Berkas CSV terunduh.');
  });
  $('#exp-print').addEventListener('click', () => {
    const rows = sortedEntries().map((e, i) => `<tr><td>${i + 1}</td><td><strong>${esc(e.nama)}</strong><br><small>${esc(KATEGORI[e.kategori])}${e.peringkat ? ' · ' + esc(e.peringkat) : ''}</small></td><td>${esc(e.penyelenggara || '—')}</td><td>${esc(fmtDate(e.tanggal))}</td></tr>`).join('');
    let sheet = document.querySelector('.print-sheet');
    if (!sheet) { sheet = document.createElement('div'); sheet.className = 'print-sheet'; document.body.appendChild(sheet); }
    sheet.innerHTML = `<h1 style="font-family:serif">SertifVault — Daftar Prestasi</h1><p>Dicetak ${esc(fmtDate(new Date().toISOString().slice(0, 10)))} · ${data.entries.length} entri</p><table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%"><thead><tr><th>No</th><th>Nama</th><th>Penyelenggara</th><th>Tanggal</th></tr></thead><tbody>${rows}</tbody></table>`;
    say('Dialog cetak dibuka — pilih "Simpan sebagai PDF" bila perlu.');
    setTimeout(() => window.print(), 300);
  });
  $('#exp-clear-samples').addEventListener('click', ev => {
    const btn = ev.currentTarget;
    if (!btn.dataset.armed) {
      btn.dataset.armed = '1';
      btn.innerHTML = `${vic('trash', 'w-4 h-4')} Yakin cabut semua contoh? Klik lagi`;
      setTimeout(() => { delete btn.dataset.armed; }, 3000);
      return;
    }
    delete btn.dataset.armed;
    const doomed = data.entries.filter(e => e.contoh && e.fileId).map(e => e.fileId);
    data.entries = data.entries.filter(e => !e.contoh);
    saveStore(data);
    doomed.forEach(deleteFile);
    renderAll();
    say('Semua entri contoh dicabut. Rakmu kini murni arsip asli.');
  });
}

// --- filter ---
function initFilter() {
  const q = readQuery();
  filters = { q: q.q, kategori: q.kategori, tahun: q.tahun };
  $('#fq').value = filters.q;
  $('#fk').value = filters.kategori;
  $('#filter-form').addEventListener('submit', ev => {
    ev.preventDefault();
    filters = { q: $('#fq').value.trim().slice(0, 80), kategori: $('#fk').value, tahun: $('#ft').value };
    syncQuery(); renderList();
  });
  $('#filter-reset').addEventListener('click', () => {
    filters = { q: '', kategori: '', tahun: '' };
    $('#fq').value = ''; $('#fk').value = ''; $('#ft').value = '';
    syncQuery(); renderList();
  });
  $('#fq').addEventListener('input', () => {
    clearTimeout($('#fq')._h);
    $('#fq')._h = setTimeout(() => {
      filters.q = $('#fq').value.trim().slice(0, 80);
      syncQuery(); renderList();
    }, 280);
  });
}

// --- konami easter egg ---
function initKonami() {
  const seq = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let i = 0;
  addEventListener('keydown', e => {
    if (e.target.matches('input, textarea, select')) return;
    i = (e.key === seq[i]) ? i + 1 : (e.key === seq[0] ? 1 : 0);
    if (i === seq.length) {
      i = 0;
      document.body.classList.add('konami');
      toast('KODE KONAMI DITERIMA — semua entri terbuka! (ketik ulang untuk menutup)');
      setTimeout(() => document.body.classList.remove('konami'), 6000);
    }
  });
}

// --- gerak on/off + mode ringan ---
function initMotionCtl() {
  const btn = $('#motion-toggle');
  const label = $('#motion-label');
  const liteAuto = matchMedia('(prefers-reduced-motion: reduce)').matches ||
    (navigator.hardwareConcurrency || 8) <= 4 || !!navigator.connection?.saveData;
  let saved = null;
  try { saved = localStorage.getItem('sertifvault:motion'); } catch { /* abaikan */ }
  const off = saved !== null ? saved === 'off' : liteAuto;
  const apply = v => {
    setMotionLite(v);
    map?.setLite(v);
    btn.setAttribute('aria-pressed', String(!v));
    label.textContent = v ? 'Gerak: mati' : 'Gerak: nyala';
    try { localStorage.setItem('sertifvault:motion', v ? 'off' : 'on'); } catch { /* abaikan */ }
  };
  // Terapkan status awal TANPA memanggil setMotionLite dua kali:
  document.body.classList.toggle('no-motion', off);
  btn.setAttribute('aria-pressed', String(!off));
  label.textContent = off ? 'Gerak: mati' : 'Gerak: nyala';
  map?.setLite(off);
  btn.addEventListener('click', () => apply(!document.body.classList.contains('no-motion')));
  return off;
}

export function initApp() {
  const viewport = $('#map-viewport');
  map = createMap(viewport, { onOpen: openEntry });
  const motionOff = initMotionCtl();
  initFilter();
  renderAll();
  initForm();
  initExport();
  initKonami();
  $('#dlg-close').addEventListener('click', () => $('#entry-dialog').close());
  $('#entry-dialog').addEventListener('click', e => {
    const r = e.currentTarget.getBoundingClientRect();
    const inDlg = r.top <= e.clientY && e.clientY <= r.top + r.height && r.left <= e.clientX && e.clientX <= r.left + r.width;
    if (!inDlg) e.currentTarget.close();
  });
  if (!motionOff) initMotion(); else { document.querySelectorAll('.curtain').forEach(c => c.classList.add('is-in')); }
  splitHero(); // huruf hero selalu dipecah — animasinya hanya saat gerak nyala
  if (data.recovered) toast('Arsip lama rusak — Pak Kamus mulai rak baru dari contoh.');
  // Deep-link ?id=: buka entri langsung
  const q = readQuery();
  if (q.id) setTimeout(() => { if (map.zoomTo(q.id)) openEntry(q.id); }, 600);
  document.querySelector('.skip-link')?.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#peta')?.setAttribute('tabindex', '-1');
    document.querySelector('#peta')?.focus({ preventScroll: true });
    document.querySelector('#peta')?.scrollIntoView();
  });
}
