import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { b as maybeRenderHead, d as renderComponent, j as unescapeHTML, p as Fragment, y as renderTemplate } from "./jsx-runtime_C3h_5K6n.mjs";
import { t as createComponent } from "./astro-component_DgeAcjWG.mjs";
import { n as renderScript } from "./Logo_CTT-PT76.mjs";
import { n as headerData, r as $$Header, t as $$PageLayout } from "./PageLayout_CB0t4Pbn.mjs";
import { a as SITE, r as I18N } from "./_astrowind_config_DvWkjndx.mjs";
/* empty css                */
import { t as $$StructuredData } from "./StructuredData_CejtA4Ja.mjs";
//#region src/components/vault/icons.ts
var duo = (fill, lines) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${fill}" fill="var(--sv-pop)" fill-opacity="0.5" stroke="none"/><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${lines}</g></svg>`;
var ICONS = {
	plus: duo("M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z", "<path d=\"M12 5v14M5 12h14\"/>"),
	search: duo("M4 11a7 7 0 0 1 7-7h1v3h-1a4 4 0 0 0-4 4v1H4z", "<circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"M16.5 16.5L21 21\"/>"),
	sliders: duo("M4 8h4v8H4zM16 4h4v8h-4z", "<path d=\"M4 7h16M4 17h16\"/><circle cx=\"9\" cy=\"7\" r=\"2.4\"/><circle cx=\"15\" cy=\"17\" r=\"2.4\"/>"),
	download: duo("M12 4v9l-3-3 3 3 3-3", "<path d=\"M12 4v11M7.5 11L12 15.5 16.5 11M4.5 19.5h15\"/>"),
	copy: duo("M9 9h11v11H9z", "<rect x=\"9\" y=\"9\" width=\"11\" height=\"11\" rx=\"1\"/><path d=\"M5 15V6a1 1 0 0 1 1-1h9\"/>"),
	printer: duo("M7 8h10v5H7z", "<path d=\"M7 8V4h10v4M7 13h10v7H7z\"/><path d=\"M7 16h10\"/>"),
	link: duo("M10 14l4-4", "<path d=\"M10 14a4.2 4.2 0 0 0 6 .4l3-3a4.24 4.24 0 0 0-6-6l-1.7 1.7M14 10a4.2 4.2 0 0 0-6-.4l-3 3a4.24 4.24 0 0 0 6 6l1.7-1.7\"/>"),
	x: duo("M7 7l10 10M17 7L7 17", "<path d=\"M6 6l12 12M18 6L6 18\"/>"),
	check: duo("M5 13l4 4 6-8", "<path d=\"M4.5 12.5l5 5 10-11\"/>"),
	trash: duo("M6 8h12l-1 12H7z", "<path d=\"M4.5 6.5h15M9.5 6V4.5h5V6M6.5 6.5l.8 13h9.4l.8-13\"/>"),
	calendar: duo("M4 10h16v9H4z", "<rect x=\"4\" y=\"5\" width=\"16\" height=\"15\" rx=\"1\"/><path d=\"M4 10h16M8.5 3v4M15.5 3v4\"/>"),
	archive: duo("M4 5h16v4H4z", "<rect x=\"3.5\" y=\"4.5\" width=\"17\" height=\"4.5\"/><path d=\"M5.5 9v10.5h13V9M10 12.5h4\"/>"),
	medal: duo("M12 14a4 4 0 1 0 .1 0", "<circle cx=\"12\" cy=\"14.5\" r=\"4.5\"/><path d=\"M9 10.8L5.5 3.5h4L12 8l2.5-4.5h4L15 10.8\"/>"),
	file: duo("M7 3h7l4 4v14H7z", "<path d=\"M6.5 3.5h7l4.5 4.5v12.5h-11.5z\"/><path d=\"M13.5 3.5V8H18\"/>"),
	eye: duo("M3 12s3.5-6 9-6c2 0 3.8.8 5.2 1.9L15 10H9l-2 1.2C5.4 12.6 3 12 3 12z", "<path d=\"M3 12s3.6-6.5 9-6.5S21 12 21 12s-3.6 6.5-9 6.5S3 12 3 12z\"/><circle cx=\"12\" cy=\"12\" r=\"2.6\"/>"),
	motion: duo("M4 12h5l2-4 3 8 2-4h4", "<path d=\"M3 12h4l2.5-6 4 12L16 12h5\"/>"),
	minus: duo("M6 11h12v2H6z", "<path d=\"M6 12h12\"/>"),
	chevD: duo("M7 10l5 5 5-5", "<path d=\"M6.5 9.5l5.5 5.5 5.5-5.5\"/>"),
	scroll: duo("M7 5h10v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z", "<path d=\"M7 5.5A2.5 2.5 0 0 1 9.5 3H17v15.5a2.5 2.5 0 0 1-5 0v-2a2.5 2.5 0 0 1-5 0z\"/><path d=\"M7 5.5v13a2.5 2.5 0 0 0 5 0v-2\"/><path d=\"M15 13.5l1.2 1.2 2.3-2.7\"/>"),
	stamp: duo("M5 15l14-4 1 3.5-14 4z", "<rect x=\"4\" y=\"12.5\" width=\"16\" height=\"6\" rx=\"1\" transform=\"rotate(-14 12 15.5)\"/><path d=\"M12 12.2l1.8-3.4M9.5 13l1.2-4.6\" transform=\"rotate(-14 12 12)\"/>"),
	bookmark: duo("M8 4h8v13l-4-3-4 3z", "<path d=\"M7.5 3.5h9V20l-4.5-3.4L7.5 20z\"/>")
};
var vic = (name, cls = "") => {
	return (ICONS[name] ?? ICONS.file).replace("<svg ", `<svg class="${cls}" `);
};
//#endregion
//#region src/components/vault/Hero.astro
var $$Hero = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section class="curtain relative overflow-hidden" aria-labelledby="hero-h"><div class="mx-auto max-w-6xl px-5 pt-28 pb-10 md:pt-36 md:pb-14"><p class="eyebrow">Edisi 2026 · Kamus prestasi pribadi</p><h1 id="hero-h" class="headword mt-4" style="font-size: clamp(3.2rem, 13vw, 9rem)" aria-label="Kamus Prestasi"><span class="hw-line block" data-hw="KAMUS"></span><span class="hw-line block" data-hw="PRESTASI"></span></h1><p class="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed">Setiap piagam yang kamu menangkan adalah <span class="stabilo font-bold">satu kata</span> dalam kamus prestasimu. SertifVault mencatatnya sebagai entri, memetakannya seperti peta permainan, dan menyiapkannya sekali klik untuk beasiswa berikutnya.</p><div class="mt-8 flex flex-wrap gap-4"><a href="#tambah" class="btn btn-pop magnetic" data-cursor="link"><span>${unescapeHTML(vic("plus", "w-5 h-5"))}</span> Catat entri baru</a><a href="#peta" class="btn btn-ghost magnetic" data-cursor="link"><span>${unescapeHTML(vic("eye", "w-5 h-5"))}</span> Jelajahi peta</a></div><dl class="mt-12 grid grid-cols-3 gap-4 max-w-xl" aria-label="Ringkasan arsip"><div class="border-2 p-4" style="border-color: var(--sv-text); background: var(--sv-surface)"><dt class="text-xs uppercase tracking-widest font-bold" style="color: var(--sv-text)">Entri</dt><dd class="stat-num" data-stat="total">–</dd></div><div class="border-2 p-4" style="border-color: var(--sv-text); background: var(--sv-surface)"><dt class="text-xs uppercase tracking-widest font-bold" style="color: var(--sv-text)">Tahun ini</dt><dd class="stat-num" data-stat="thisYear">–</dd></div><div class="border-2 p-4" style="border-color: var(--sv-text); background: var(--sv-surface)"><dt class="text-xs uppercase tracking-widest font-bold" style="color: var(--sv-text)">Jenis</dt><dd class="stat-num" data-stat="cats">–</dd></div></dl></div></section>`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/vault/Hero.astro", void 0);
//#endregion
//#region src/components/vault/Marquee.astro
var $$Marquee = createComponent(($$result, $$props, $$slots) => {
	const bandA = [
		"entri",
		"definisi",
		"kelas kata",
		"rak",
		"inventaris",
		"stempel",
		"cap lulus",
		"juara",
		"beasiswa",
		"sertifikat",
		"transkrip",
		"portofolio",
		"arsip",
		"edisi ke-1"
	];
	const bandB = [
		"catat",
		"susun",
		"petakan",
		"sorot",
		"ekspor",
		"arsipkan",
		"rayakan",
		"ulangi"
	];
	return renderTemplate`${maybeRenderHead($$result)}<div class="no-print" aria-hidden="true"><div class="marquee marquee-a border-y-2 py-3" style="border-color: var(--sv-text); background: var(--sv-surface)"><div class="marquee-track text-2xl md:text-3xl">${[0, 1].map(() => renderTemplate`<span class="inline-flex">${bandA.map((t) => renderTemplate`<span class="marquee-term">${t} <span aria-hidden="true">◆</span></span>`)}</span>`)}</div></div><div class="marquee marquee-b border-b-2 py-2" style="border-color: var(--sv-text); background: var(--sv-text); color: var(--sv-bg)"><div class="marquee-track text-lg md:text-xl uppercase tracking-widest">${[0, 1].map(() => renderTemplate`<span class="inline-flex">${bandB.map((t) => renderTemplate`<span class="marquee-term">${t} <span aria-hidden="true">◆</span></span>`)}</span>`)}</div></div></div>`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/vault/Marquee.astro", void 0);
//#endregion
//#region src/components/vault/MapSection.astro
var $$MapSection = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="peta" class="curtain py-16 md:py-24" aria-labelledby="peta-h"><div class="mx-auto max-w-6xl px-5"><p class="eyebrow">Bab 1 · Peta</p><h2 id="peta-h" class="headword mt-2" style="font-size: clamp(2rem, 7vw, 4rem)">Peta Entri</h2><p class="mt-3 max-w-2xl text-lg" style="color: var(--sv-muted)">Seret untuk menjelajah, cubit atau putar roda tetikus untuk zum. Setiap titik adalah satu entri kamus — <span class="stabilo font-bold">klik titiknya</span> untuk membuka definisinya.</p><div class="no-print mt-6 flex flex-wrap items-center gap-3" role="toolbar" aria-label="Kontrol peta"><button type="button" class="btn btn-sm" data-map-zoom="in" data-cursor="link"><span>${unescapeHTML(vic("plus", "w-4 h-4"))}</span> Zum masuk</button><button type="button" class="btn btn-sm btn-ghost" data-map-zoom="out" data-cursor="link"><span>${unescapeHTML(vic("minus", "w-4 h-4"))}</span> Zum keluar</button><button type="button" class="btn btn-sm btn-ghost" data-map-zoom="reset" data-cursor="link">Setel ulang</button><span class="text-sm ml-auto hidden md:inline" style="color: var(--sv-muted)">Keyboard: ← → ↑ ↓ geser · + − zum</span></div><div id="map-viewport" class="map-viewport mt-4 rounded-none" style="height: min(68vh, 560px)" tabindex="0" role="application" aria-label="Peta entri sertifikat. Seret untuk menggeser, gunakan tombol zum atau keyboard." data-cursor="view"><div class="map-world"></div><p class="map-live sr-only" aria-live="polite"></p><p class="map-hint no-print">seret · zum · klik titik</p></div><p class="mt-3 text-sm" style="color: var(--sv-muted)">Titik berstabilo = entri contoh (boleh dicabut kapan saja di bawah).</p></div></section>`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/vault/MapSection.astro", void 0);
//#endregion
//#region src/components/vault/ListSection.astro
var $$ListSection = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="daftar" class="curtain py-16 md:py-24" style="background: var(--sv-surface)" aria-labelledby="daftar-h"><div class="mx-auto max-w-6xl px-5"><p class="eyebrow">Bab 2 · Daftar</p><h2 id="daftar-h" class="headword mt-2" style="font-size: clamp(2rem, 7vw, 4rem)">Daftar Abjad</h2><p class="mt-3 max-w-2xl text-lg" style="color: var(--sv-muted)">Semua entri tersusun seperti halaman kamus: <em>kata</em>, <span class="kelas-kata">kelas kata</span>, lalu definisinya. Saring sesukamu — tautan hasil saringan bisa dibagikan.</p><form id="filter-form" class="no-print mt-8 grid gap-4 md:grid-cols-[1fr_220px_160px_auto]" role="search" aria-label="Saring entri"><div class="field"><label for="fq">Cari kata</label><input id="fq" name="q" type="search" placeholder="mis. poster, beasiswa…" autocomplete="off"></div><div class="field"><label for="fk">Kelas kata</label><select id="fk" name="kategori"><option value="">Semua jenis</option><option value="lomba">Lomba</option><option value="beasiswa">Beasiswa</option><option value="kursus">Kursus / Pelatihan</option><option value="penghargaan">Penghargaan</option><option value="lainnya">Lainnya</option></select></div><div class="field"><label for="ft">Tahun</label><select id="ft" name="tahun"><option value="">Semua tahun</option></select></div><div class="flex items-end gap-3"><button type="submit" class="btn btn-sm" data-cursor="link"><span>${unescapeHTML(vic("search", "w-4 h-4"))}</span> Saring</button><button type="button" id="filter-reset" class="btn btn-sm btn-ghost" data-cursor="link">Hapus</button></div></form><p id="filter-count" class="mt-6 text-sm font-bold" style="color: var(--sv-muted)" aria-live="polite"></p><div id="entry-list" class="entry-lines mt-2"></div><div id="list-empty" class="hidden mt-8 border-2 p-8 text-center" style="border-color: var(--sv-text); background: var(--sv-bg)"><p class="font-display text-2xl font-bold">Entri tidak ketemu.</p><p class="mt-2" style="color: var(--sv-muted)">Ejaannya mungkin salah, atau rak ini memang belum punya kata itu. Coba kata lain — atau catat sebagai entri baru.</p><a href="#tambah" class="btn btn-sm btn-pop mt-6 magnetic" data-cursor="link"><span>${unescapeHTML(vic("plus", "w-4 h-4"))}</span> Catat entri baru</a></div></div></section>`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/vault/ListSection.astro", void 0);
//#endregion
//#region src/components/vault/FormSection.astro
var $$FormSection = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="tambah" class="curtain py-16 md:py-24" aria-labelledby="tambah-h"><div class="mx-auto max-w-3xl px-5"><p class="eyebrow">Bab 3 · Pencatatan</p><h2 id="tambah-h" class="headword mt-2" style="font-size: clamp(2rem, 7vw, 4rem)">Catat Entri Baru</h2><p class="mt-3 text-lg" style="color: var(--sv-muted)">Isi yang bertanda <span aria-hidden="true">*</span> wajib. Arsipmu tersimpan<strong> di perambanmu sendiri</strong> — tidak dikirim ke mana-mana.</p><form id="entry-form" class="mt-8 grid gap-6 border-2 p-6 md:p-10" style="border-color: var(--sv-text); background: var(--sv-surface)" novalidate><div class="field" data-field="nama"><label for="f-nama">Nama sertifikat *</label><input id="f-nama" name="nama" type="text" maxlength="140" placeholder="mis. Juara 1 Lomba Debat Bahasa Indonesia" autocomplete="off"><p class="err" role="alert"></p></div><div class="grid gap-6 md:grid-cols-2"><div class="field" data-field="penyelenggara"><label for="f-org">Penyelenggara</label><input id="f-org" name="penyelenggara" type="text" maxlength="120" placeholder="mis. Dinas Pendidikan Kab. Kuningan" autocomplete="off"><p class="err" role="alert"></p></div><div class="field" data-field="tanggal"><label for="f-date">Tanggal terbit *</label><input id="f-date" name="tanggal" type="date" max="2026-10-12"><p class="err" role="alert"></p></div></div><div class="grid gap-6 md:grid-cols-2"><div class="field" data-field="kategori"><label for="f-cat">Kelas kata *</label><select id="f-cat" name="kategori"><option value="">— pilih dulu —</option><option value="lomba">Lomba</option><option value="beasiswa">Beasiswa</option><option value="kursus">Kursus / Pelatihan</option><option value="penghargaan">Penghargaan</option><option value="lainnya">Lainnya</option></select><p class="err" role="alert"></p></div><div class="field" data-field="peringkat"><label for="f-rank">Peringkat / predikat</label><input id="f-rank" name="peringkat" type="text" maxlength="60" placeholder="mis. Juara 2, Lulus, Peserta" autocomplete="off"><p class="err" role="alert"></p></div></div><div class="field" data-field="catatan"><label for="f-note">Definisi (catatan)</label><textarea id="f-note" name="catatan" rows="3" maxlength="500" placeholder="Satu-dua kalimat: apa yang kamu menangkan dan kenapa penting."></textarea><p class="err" role="alert"></p></div><div class="field" data-field="file"><label for="f-file">Lampiran berkas <span style="color: var(--sv-muted)">(opsional, PDF/gambar ≤ 5 MB)</span></label><input id="f-file" name="berkas" type="file" accept="application/pdf,image/png,image/jpeg,image/webp"><p class="err" role="alert"></p></div><div><button type="submit" class="btn btn-pop magnetic" data-cursor="link"><span>${unescapeHTML(vic("bookmark", "w-5 h-5"))}</span> Catat ke kamus</button><p id="form-status" class="mt-4 font-bold" aria-live="polite"></p></div></form></div></section>`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/vault/FormSection.astro", void 0);
//#endregion
//#region src/components/vault/ExportSection.astro
var $$ExportSection = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<section id="ekspor" class="curtain py-16 md:py-24" style="background: var(--sv-surface)" aria-labelledby="ekspor-h"><div class="mx-auto max-w-3xl px-5"><p class="eyebrow">Bab 4 · Penerbitan</p><h2 id="ekspor-h" class="headword mt-2" style="font-size: clamp(2rem, 7vw, 4rem)">Ekspor Arsip</h2><p class="mt-3 text-lg" style="color: var(--sv-muted)">Satu klik untuk pendaftaran beasiswa berikutnya: ringkasannya siap tempel ke formulir, datanya siap unduh.</p><div class="no-print mt-8 grid gap-4 sm:grid-cols-2"><button type="button" id="exp-copy" class="btn magnetic justify-start" data-cursor="link"><span>${unescapeHTML(vic("copy", "w-5 h-5"))}</span> Salin ringkasan CV</button><button type="button" id="exp-json" class="btn magnetic justify-start" data-cursor="link"><span>${unescapeHTML(vic("download", "w-5 h-5"))}</span> Unduh JSON</button><button type="button" id="exp-csv" class="btn magnetic justify-start" data-cursor="link"><span>${unescapeHTML(vic("download", "w-5 h-5"))}</span> Unduh CSV</button><button type="button" id="exp-print" class="btn magnetic justify-start" data-cursor="link"><span>${unescapeHTML(vic("printer", "w-5 h-5"))}</span> Cetak / simpan PDF</button></div><p id="export-status" class="mt-4 font-bold" aria-live="polite"></p><div class="no-print mt-10 border-t-2 pt-6" style="border-color: var(--sv-line)"><button type="button" id="exp-clear-samples" class="btn btn-sm btn-ghost" data-cursor="link"><span>${unescapeHTML(vic("trash", "w-4 h-4"))}</span> Cabut semua entri contoh</button><p class="mt-2 text-sm" style="color: var(--sv-muted)">Entri contoh ikut saat pertama dibuka supaya kamusnya tidak kosong. Arsip aslimu tidak tersentuh.</p></div></div></section>`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/vault/ExportSection.astro", void 0);
//#endregion
//#region src/components/vault/Overlays.astro
var $$Overlays = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${maybeRenderHead($$result)}<dialog id="entry-dialog" class="entry-dialog" aria-labelledby="dlg-title"><div class="dlg-head"><p class="font-accent text-sm tracking-[0.2em] uppercase" style="color: var(--sv-accent)">Entri <span id="dlg-num">№ 000</span></p><button type="button" id="dlg-close" class="btn btn-sm btn-ghost" aria-label="Tutup detail entri" data-cursor="link"><span>${unescapeHTML(vic("x", "w-4 h-4"))}</span></button></div><div id="dlg-body" class="p-6 md:p-8"></div><div class="flex flex-wrap gap-3 border-t-2 p-4 md:p-6 no-print" style="border-color: var(--sv-text); background: var(--sv-surface)"><button type="button" id="dlg-file" class="btn btn-sm hidden" data-cursor="link"><span>${unescapeHTML(vic("file", "w-4 h-4"))}</span> Buka lampiran</button><button type="button" id="dlg-link" class="btn btn-sm btn-ghost" data-cursor="link"><span>${unescapeHTML(vic("link", "w-4 h-4"))}</span> Salin tautan entri</button><button type="button" id="dlg-delete" class="btn btn-sm btn-ghost" data-cursor="link"><span>${unescapeHTML(vic("trash", "w-4 h-4"))}</span> Cabut entri</button></div></dialog><div id="toast" class="toast no-print" role="status" aria-live="polite"></div><button type="button" id="motion-toggle" class="btn btn-sm no-print" aria-pressed="true" data-cursor="link" style="position: fixed; right: 16px; bottom: 16px; z-index: 70;"><span>${unescapeHTML(vic("motion", "w-4 h-4"))}</span><span id="motion-label">Gerak: nyala</span></button><div class="cursor-dot" aria-hidden="true"></div><div class="cursor-ring" aria-hidden="true"></div>`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/components/vault/Overlays.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const metadata = {
		title: "SertifVault — Kamus Prestasi",
		description: "Brankas sertifikat pribadimu: arsipkan piagam lomba, beasiswa, dan kursus sebagai entri kamus, jelajahi di peta 8-bit, ekspor sekali klik.",
		ignoreTitleTemplate: true
	};
	const organizationId = `${SITE?.site}/#organization`;
	const structuredData = [{
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${SITE?.site}/#website`,
		name: SITE?.name,
		url: SITE?.site,
		inLanguage: I18N?.language,
		publisher: { "@id": organizationId }
	}, {
		"@context": "https://schema.org",
		"@type": "WebApplication",
		"@id": organizationId,
		name: "SertifVault — Kamus Prestasi",
		url: SITE?.site,
		applicationCategory: "UtilitiesApplication",
		operatingSystem: "Web",
		inLanguage: I18N?.language,
		description: metadata.description
	}];
	return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, {
		"default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<a href="#peta" class="skip-link no-print">Lompat ke peta entri</a>${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "Marquee", $$Marquee, {})}${renderComponent($$result, "MapSection", $$MapSection, {})}<div class="tear no-print" aria-hidden="true"></div>${renderComponent($$result, "ListSection", $$ListSection, {})}<div class="tear no-print" aria-hidden="true"></div>${renderComponent($$result, "FormSection", $$FormSection, {})}<div class="tear no-print" aria-hidden="true"></div>${renderComponent($$result, "ExportSection", $$ExportSection, {})}${renderComponent($$result, "Overlays", $$Overlays, {})}${renderScript($$result, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`,
		"head": ($$result) => renderTemplate`${renderComponent($$result, "StructuredData", $$StructuredData, {
			"slot": "head",
			"schema": structuredData
		})}`,
		"announcement": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "slot": "announcement" })}`,
		"header": ($$result) => renderTemplate`${renderComponent($$result, "Header", $$Header, {
			...headerData,
			"isSticky": true,
			"slot": "header"
		})}`
	})}`;
}, "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/pages/index.astro", void 0);
var $$file = "/home/hatch/agent-lab/2026-10-12/j0800-build-tool/site/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
