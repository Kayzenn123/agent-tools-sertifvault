# SertifVault — Kamus Prestasi

Brankas sertifikat pribadi: arsipkan piagam lomba, beasiswa, dan kursus sebagai
**entri kamus**, jelajahi di **peta 8-bit** yang bisa di-pan/zoom, ekspor sekali klik.

## Fitur

- **Peta Entri** — tiap sertifikat adalah titik bernomor di peta pan/zoom ala game 8-bit (drag, scroll/pinch zoom, keyboard ←→↑↓/+-); klik titik → zoom-through ke kartu definisi.
- **Daftar Abjad** — semua entri ala halaman kamus (kata → kelas kata → definisi) + saring (cari/kategori/tahun) dengan deep-link `?q=&kategori=&tahun=&id=`.
- **Catat Entri Baru** — form bervalidasi (pesan spesifik), lampiran PDF/gambar ≤ 5 MB (IndexedDB), data di `localStorage` berversi — tidak dikirim ke mana-mana.
- **Ekspor** — salin ringkasan CV, unduh JSON/CSV, cetak/simpan PDF.
- **Easter egg** — kode Konami (↑↑↓↓←→←→BA).
- Toggle gerak + mode ringan otomatis; `prefers-reduced-motion` dihormati.

## Tech

- Astro 7 + Tailwind CSS v4 (template AstroWind), tanpa gambar raster — pola kertas, grain, dan piksel semuanya CSS/SVG.
- Font (Fontsource, OFL): Kaisei Tokumin (display), Chiron GoRound TC (body), Tilt Prism (aksen).
- Ikon: set duotone digambar sendiri (18 ikon, 3 custom domain).
- 5 entri contoh berlabel `CONTOH` ikut saat pertama dibuka; bisa dicabut sekali klik.

## Jalankan lokal

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output ke dist/
```

## Skor

- Lighthouse (mobile & desktop): `lh-mobile.json` / `lh-desktop.json` (di folder build)
- qa.js: exit 0 (tanpa overflow, tanpa console error, tap target ≥ 44px)
- FPS 4x CPU throttle: 59

## Lisensi

Bebas dipakai. Font OFL via Fontsource; ikon dan grafis buatan sendiri.
