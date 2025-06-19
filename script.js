// Mobile nav toggle + AOS init
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu') || document.querySelector('.menu-toggle');
  const navLinks = document.getElementById('nav-links') || document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true,
    });
  }

  /* -------------- Easter-egg on contact button -------------- */
  const contactBtn = document.getElementById('contact-btn');
  const audio = document.getElementById('egg-audio');
  let clickCount = 0;

  // Create epilepsy warning modal
  const modal = document.createElement('div');
  modal.id = 'epilepsy-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <h3>⚠️ Epilepsy Warning</h3>
      <p>This effect contains rapid flashing lights that may trigger seizures
         for people with photosensitive epilepsy.</p>
      <div class="modal-actions">
        <button id="modal-continue">Continue</button>
        <button id="modal-cancel">Cancel</button>
      </div>
    </div>`;
  document.body.appendChild(modal);

  const startRave = () => document.body.classList.add('rave');
  const stopRave = () => document.body.classList.remove('rave');

  if (contactBtn && audio) {
    contactBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Stop form submit
      clickCount++;
      if (clickCount === 10) {
        modal.style.display = 'flex';
        clickCount = 0;
      }
    });
  }

  // Modal logic
  modal.addEventListener('click', (e) => {
    if (e.target.id === 'modal-continue') {
      modal.style.display = 'none';
      audio.volume = 0.8;
      audio.play();
      startRave();
      setTimeout(stopRave, 6000);
    }
    if (e.target.id === 'modal-cancel') {
      modal.style.display = 'none';
    }
  });
});
