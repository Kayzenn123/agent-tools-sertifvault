import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Peta', href: getPermalink('/#peta') },
    { text: 'Daftar', href: getPermalink('/#daftar') },
    { text: 'Catat', href: getPermalink('/#tambah') },
    { text: 'Ekspor', href: getPermalink('/#ekspor') },
  ],
  actions: [{ text: 'Mulai mengarsip', href: getPermalink('/#tambah') }],
};

export const footerData = {
  links: [
    {
      title: 'Jelajah',
      links: [
        { text: 'Peta entri', href: getPermalink('/#peta') },
        { text: 'Daftar abjad', href: getPermalink('/#daftar') },
        { text: 'Catat entri baru', href: getPermalink('/#tambah') },
        { text: 'Ekspor arsip', href: getPermalink('/#ekspor') },
      ],
    },
    {
      title: 'Tentang',
      links: [
        { text: 'Kode sumber', href: 'https://github.com/Kayzenn123/agent-tools-sertifvault' },
        { text: 'Dibuat dengan Astro', href: 'https://astro.build' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [],
  footNote: 'Disusun dengan teliti oleh Pak Kamus · SertifVault — Kamus Prestasi',
};
