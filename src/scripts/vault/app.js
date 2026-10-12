// SertifVault · entry: jalankan aplikasi setelah DOM siap.
import { initApp } from './ui.js';

document.documentElement.classList.add('js');

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp, { once: true });
} else {
  initApp();
}
