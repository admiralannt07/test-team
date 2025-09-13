// Guard sederhana: non-touch atau layar terlalu lebar → overlay aktif
(function guardMobile() {
  const isTouch = ('ontouchstart' in window) || navigator.maxTouchPoints > 0;
  const isDesktopWide = window.matchMedia('(min-width: 1025px)').matches;
  const block = document.getElementById('desktop-block');
  const app = document.getElementById('app');

  if (!isTouch || isDesktopWide) {
    if (block) block.style.display = 'flex';
    if (app) app.style.display = 'none';
  }
})();

// Register service worker (PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(console.error);
  });
}
