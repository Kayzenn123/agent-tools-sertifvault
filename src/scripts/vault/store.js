// SertifVault · store: localStorage berversi + validasi skema + IndexedDB lampiran.
const LS_KEY = 'sertifvault:v1';
const DB_NAME = 'sertifvault-files';
const MAX_FILE = 5 * 1024 * 1024;

export const KATEGORI = {
  lomba: 'Lomba',
  beasiswa: 'Beasiswa',
  kursus: 'Kursus / Pelatihan',
  penghargaan: 'Penghargaan',
  lainnya: 'Lainnya',
};

const SAMPLES = [
  { nama: 'Juara 2 Lomba Poster 17-an', penyelenggara: 'Karang Taruna RT 05', tanggal: '2026-08-17', kategori: 'lomba', peringkat: 'Juara 2', catatan: 'Tema kemerdekaan, teknik kolase kertas.', contoh: true },
  { nama: 'Webinar Nasional Literasi Digital', penyelenggara: 'Kemdikbudristek', tanggal: '2026-06-12', kategori: 'kursus', peringkat: 'Peserta', catatan: 'Sesi keamanan data pribadi.', contoh: true },
  { nama: 'Beasiswa Prestasi Sekolah 2026', penyelenggara: 'SMA Negeri 1 Kadugede', tanggal: '2026-07-01', kategori: 'beasiswa', peringkat: 'Penerima', catatan: 'Bantuan biaya pendidikan satu tahun.', contoh: true },
  { nama: 'Pelatihan Desain Grafis Dasar', penyelenggara: 'Komunitas Desain Kuningan', tanggal: '2025-11-20', kategori: 'kursus', peringkat: 'Lulus', catatan: 'Materi layout dan tipografi.', contoh: true },
  { nama: 'Finalis Cerdas Cermat Kabupaten', penyelenggara: 'Dinas Pendidikan', tanggal: '2025-09-05', kategori: 'lomba', peringkat: 'Finalis', catatan: 'Babak final tingkat kabupaten.', contoh: true },
];

const uid = () => 'e' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const todayStr = () => { const d = new Date(); return d.toISOString().slice(0, 10); };

function validEntry(e) {
  return e && typeof e === 'object' &&
    typeof e.id === 'string' && e.id.length < 40 &&
    typeof e.nama === 'string' && e.nama.length <= 140 &&
    typeof e.tanggal === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(e.tanggal) &&
    Object.keys(KATEGORI).includes(e.kategori);
}

function sanitize(raw) {
  const list = Array.isArray(raw?.entries) ? raw.entries.filter(validEntry) : [];
  return { version: 1, entries: list };
}

export function loadStore() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) {
      const seeded = { version: 1, entries: SAMPLES.map(s => ({ ...s, id: uid(), fileId: null, createdAt: Date.now() })) };
      localStorage.setItem(LS_KEY, JSON.stringify(seeded));
      return seeded;
    }
    const parsed = JSON.parse(raw);
    if (parsed?.version !== 1) throw new Error('versi beda');
    return sanitize(parsed);
  } catch {
    try {
      const seeded = { version: 1, entries: SAMPLES.map(s => ({ ...s, id: uid(), fileId: null, createdAt: Date.now() })) };
      localStorage.setItem(LS_KEY, JSON.stringify(seeded));
      return { ...seeded, recovered: true };
    } catch { return { version: 1, entries: [], recovered: true }; }
  }
}

export function saveStore(data) {
  try { localStorage.setItem(LS_KEY, JSON.stringify({ version: 1, entries: data.entries })); return true; }
  catch { return false; }
}

// Validasi form "catat entri baru". Kembalikan { ok, errors, entry }.
export function validateEntry(f) {
  const errors = {};
  const nama = (f.nama || '').trim();
  if (nama.length < 2) errors.nama = 'Nama sertifikatnya kurang lengkap — tulis minimal 2 huruf.';
  else if (nama.length > 140) errors.nama = 'Namanya kepanjangan — maksimal 140 huruf.';
  const tanggal = (f.tanggal || '').trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(tanggal)) errors.tanggal = 'Tanggalnya belum diisi — pakai format kalender.';
  else if (tanggal > todayStr()) errors.tanggal = 'Tanggalnya belum kejadian — cek lagi tahunnya.';
  else if (tanggal < '1990-01-01') errors.tanggal = 'Tahunnya kelewat lama — cek lagi angkanya.';
  if (!Object.keys(KATEGORI).includes(f.kategori)) errors.kategori = 'Pilih dulu jenis prestasinya.';
  const peringkat = (f.peringkat || '').trim();
  if (peringkat.length > 60) errors.peringkat = 'Peringkatnya kepanjangan — maksimal 60 huruf.';
  const catatan = (f.catatan || '').trim();
  if (catatan.length > 500) errors.catatan = 'Catatannya kepanjangan — maksimal 500 huruf.';
  if (Object.keys(errors).length) return { ok: false, errors };
  return {
    ok: true,
    entry: {
      id: uid(), nama,
      penyelenggara: (f.penyelenggara || '').trim().slice(0, 120),
      tanggal, kategori: f.kategori,
      peringkat: peringkat.slice(0, 60), catatan: catatan.slice(0, 500),
      fileId: f.fileId || null, contoh: false, createdAt: Date.now(),
    },
  };
}

// --- IndexedDB lampiran ---
function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore('files');
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
export async function saveFile(blob) {
  if (blob.size > MAX_FILE) throw new Error('Berkasnya kebesaran — maksimal 5 MB.');
  if (!/^(application\/pdf|image\/(png|jpeg|webp))$/.test(blob.type)) throw new Error('Format berkas harus PDF atau gambar (PNG/JPG/WebP).');
  const db = await openDB();
  const id = uid();
  await new Promise((res, rej) => {
    const tx = db.transaction('files', 'readwrite');
    tx.objectStore('files').put({ blob, name: blob.name || 'lampiran', type: blob.type }, id);
    tx.oncomplete = res; tx.onerror = () => rej(tx.error);
  });
  db.close();
  return id;
}
export async function getFile(id) {
  const db = await openDB();
  const rec = await new Promise((res, rej) => {
    const tx = db.transaction('files', 'readonly');
    const q = tx.objectStore('files').get(id);
    q.onsuccess = () => res(q.result); q.onerror = () => rej(q.error);
  });
  db.close();
  return rec || null;
}
export async function deleteFile(id) {
  try {
    const db = await openDB();
    await new Promise((res, rej) => {
      const tx = db.transaction('files', 'readwrite');
      tx.objectStore('files').delete(id);
      tx.oncomplete = res; tx.onerror = () => rej(tx.error);
    });
    db.close();
  } catch { /* lampiran hilang ya sudah */ }
}

// --- ekspor ---
const esc = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
export function toCSV(entries) {
  const head = 'nama,penyelenggara,tanggal,kategori,peringkat,catatan';
  return [head, ...entries.map(e => [e.nama, e.penyelenggara, e.tanggal, KATEGORI[e.kategori], e.peringkat, e.catatan].map(esc).join(','))].join('\n');
}
export function summaryText(entries) {
  const lines = entries.map((e, i) => `${i + 1}. ${e.nama} — ${KATEGORI[e.kategori]}${e.peringkat ? ` (${e.peringkat})` : ''}, ${e.penyelenggara || 'tanpa penyelenggara'}, ${fmtDate(e.tanggal)}.`);
  return `RINGKASAN PRESTASI — SertifVault\n${lines.join('\n')}\n\nTotal ${entries.length} entri.`;
}
export function fmtDate(iso) {
  try {
    return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(iso + 'T00:00:00'));
  } catch { return iso; }
}
export function download(name, content, type) {
  const blob = content instanceof Blob ? content : new Blob([content], { type });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}
export async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; }
  catch {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch { ok = false; }
    ta.remove(); return ok;
  }
}
// Deep-link: baca saja, tidak destruktif.
export function readQuery() {
  const q = new URLSearchParams(location.search);
  const kategori = q.get('kategori');
  return {
    q: (q.get('q') || '').slice(0, 80),
    kategori: Object.keys(KATEGORI).includes(kategori) ? kategori : '',
    tahun: /^\d{4}$/.test(q.get('tahun') || '') ? q.get('tahun') : '',
    id: (q.get('id') || '').slice(0, 40),
  };
}
export function stats(entries) {
  const per = {}; Object.keys(KATEGORI).forEach(k => per[k] = 0);
  entries.forEach(e => { if (per[e.kategori] !== undefined) per[e.kategori]++; });
  const year = String(new Date().getFullYear());
  return { total: entries.length, per, thisYear: entries.filter(e => e.tanggal.startsWith(year)).length, year };
}
