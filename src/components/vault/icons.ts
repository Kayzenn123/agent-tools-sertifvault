// Ikon SertifVault — set duotone digambar sendiri dalam bahasa visual Iconoir
// (stroke 1.8px, round caps, viewBox 24). Dua nada: garis tinta + isi stabilo.
// 18 ikon, 3 di antaranya custom domain: scroll, stamp, bookmark.
const duo = (fill: string, lines: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">` +
  `<path d="${fill}" fill="var(--sv-pop)" fill-opacity="0.5" stroke="none"/>` +
  `<g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${lines}</g></svg>`;

const ICONS: Record<string, string> = {
  plus: duo('M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z', '<path d="M12 5v14M5 12h14"/>'),
  search: duo('M4 11a7 7 0 0 1 7-7h1v3h-1a4 4 0 0 0-4 4v1H4z', '<circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/>'),
  sliders: duo('M4 8h4v8H4zM16 4h4v8h-4z', '<path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2.4"/><circle cx="15" cy="17" r="2.4"/>'),
  download: duo('M12 4v9l-3-3 3 3 3-3', '<path d="M12 4v11M7.5 11L12 15.5 16.5 11M4.5 19.5h15"/>'),
  copy: duo('M9 9h11v11H9z', '<rect x="9" y="9" width="11" height="11" rx="1"/><path d="M5 15V6a1 1 0 0 1 1-1h9"/>'),
  printer: duo('M7 8h10v5H7z', '<path d="M7 8V4h10v4M7 13h10v7H7z"/><path d="M7 16h10"/>'),
  link: duo('M10 14l4-4', '<path d="M10 14a4.2 4.2 0 0 0 6 .4l3-3a4.24 4.24 0 0 0-6-6l-1.7 1.7M14 10a4.2 4.2 0 0 0-6-.4l-3 3a4.24 4.24 0 0 0 6 6l1.7-1.7"/>'),
  x: duo('M7 7l10 10M17 7L7 17', '<path d="M6 6l12 12M18 6L6 18"/>'),
  check: duo('M5 13l4 4 6-8', '<path d="M4.5 12.5l5 5 10-11"/>'),
  trash: duo('M6 8h12l-1 12H7z', '<path d="M4.5 6.5h15M9.5 6V4.5h5V6M6.5 6.5l.8 13h9.4l.8-13"/>'),
  calendar: duo('M4 10h16v9H4z', '<rect x="4" y="5" width="16" height="15" rx="1"/><path d="M4 10h16M8.5 3v4M15.5 3v4"/>'),
  archive: duo('M4 5h16v4H4z', '<rect x="3.5" y="4.5" width="17" height="4.5"/><path d="M5.5 9v10.5h13V9M10 12.5h4"/>'),
  medal: duo('M12 14a4 4 0 1 0 .1 0', '<circle cx="12" cy="14.5" r="4.5"/><path d="M9 10.8L5.5 3.5h4L12 8l2.5-4.5h4L15 10.8"/>'),
  file: duo('M7 3h7l4 4v14H7z', '<path d="M6.5 3.5h7l4.5 4.5v12.5h-11.5z"/><path d="M13.5 3.5V8H18"/>'),
  eye: duo('M3 12s3.5-6 9-6c2 0 3.8.8 5.2 1.9L15 10H9l-2 1.2C5.4 12.6 3 12 3 12z', '<path d="M3 12s3.6-6.5 9-6.5S21 12 21 12s-3.6 6.5-9 6.5S3 12 3 12z"/><circle cx="12" cy="12" r="2.6"/>'),
  motion: duo('M4 12h5l2-4 3 8 2-4h4', '<path d="M3 12h4l2.5-6 4 12L16 12h5"/>'),
  minus: duo('M6 11h12v2H6z', '<path d="M6 12h12"/>'),
  chevD: duo('M7 10l5 5 5-5', '<path d="M6.5 9.5l5.5 5.5 5.5-5.5"/>'),
  // --- custom domain ---
  scroll: duo(
    'M7 5h10v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z',
    '<path d="M7 5.5A2.5 2.5 0 0 1 9.5 3H17v15.5a2.5 2.5 0 0 1-5 0v-2a2.5 2.5 0 0 1-5 0z"/><path d="M7 5.5v13a2.5 2.5 0 0 0 5 0v-2"/><path d="M15 13.5l1.2 1.2 2.3-2.7"/>'
  ),
  stamp: duo(
    'M5 15l14-4 1 3.5-14 4z',
    '<rect x="4" y="12.5" width="16" height="6" rx="1" transform="rotate(-14 12 15.5)"/><path d="M12 12.2l1.8-3.4M9.5 13l1.2-4.6" transform="rotate(-14 12 12)"/>'
  ),
  bookmark: duo(
    'M8 4h8v13l-4-3-4 3z',
    '<path d="M7.5 3.5h9V20l-4.5-3.4L7.5 20z"/>'
  ),
};

export const vic = (name: string, cls = ''): string => {
  const svg = ICONS[name] ?? ICONS.file;
  return svg.replace('<svg ', `<svg class="${cls}" `);
};
