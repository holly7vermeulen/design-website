document.addEventListener('DOMContentLoaded', () => {
  // === Mobile Nav Toggle ===
  const menuToggle = document.getElementById('mobile-menu') || document.querySelector('.menu-toggle');
  const navLinks = document.getElementById('nav-links') || document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // === AOS Animation Init ===
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true,
    });
  }

  // === Easter Egg: Contact Button Logic ===
  const contactBtn = document.getElementById('contact-btn');
  const audio = document.getElementById('egg-audio');
  let clickCount = 0;

  // === Create Modal ===
  const modal = document.createElement('div');
  modal.id = 'epilepsy-modal';
  modal.style.position = 'fixed';
  modal.style.inset = '0';
  modal.style.background = 'rgba(0,0,0,0.95)';
  modal.style.zIndex = '11000';
  modal.style.display = 'none';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.flexDirection = 'column';
  modal.style.color = 'white';
  modal.style.fontSize = '1.2rem';
  modal.style.textAlign = 'center';
  modal.style.padding = '2rem';
  modal.style.display = 'none';
  modal.style.flexWrap = 'wrap';
  modal.style.backdropFilter = 'blur(5px)';
  modal.innerHTML = `
    <div style="max-width: 600px;">
      <h3>⚠️ Epilepsy Warning</h3>
      <p>This effect contains rapid flashing lights that may trigger seizures for people with photosensitive epilepsy.</p>
      <br/>
      <button id="modal-continue" style="margin:10px; padding:10px 20px;">Continue</button>
      <button id="modal-cancel" style="margin:10px; padding:10px 20px;">Cancel</button>
    </div>`;
  document.body.appendChild(modal);

  // === Create Strobe Overlay ===
  const strobeOverlay = document.createElement('div');
  strobeOverlay.id = 'strobe-overlay';
  strobeOverlay.style.position = 'fixed';
  strobeOverlay.style.top = '0';
  strobeOverlay.style.left = '0';
  strobeOverlay.style.width = '100vw';
  strobeOverlay.style.height = '100vh';
  strobeOverlay.style.zIndex = '10999'; // Just under the modal
  strobeOverlay.style.pointerEvents = 'none';
  strobeOverlay.style.backgroundColor = 'black';
  strobeOverlay.style.opacity = '0';
  document.body.appendChild(strobeOverlay);

  // === Strobe Logic ===
  let strobeInterval;

  const startRave = () => {
    let toggle = false;
    strobeInterval = setInterval(() => {
      strobeOverlay.style.opacity = toggle ? '1' : '0';
      strobeOverlay.style.backgroundColor = toggle ? '#ffffff' : '#000000';
      toggle = !toggle;
    }, 200); // slower flash
  };

  const stopRave = () => {
    clearInterval(strobeInterval);
    strobeOverlay.style.opacity = '0';
    strobeOverlay.style.backgroundColor = 'black';
  };

  // === Contact Button Click ===
  if (contactBtn && audio) {
    contactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      clickCount++;
      if (clickCount === 10) {
        modal.style.display = 'flex';
        clickCount = 0;
      }
    });
  }

  // === Modal Button Logic ===
  modal.addEventListener('click', (e) => {
    if (e.target.id === 'modal-continue') {
      modal.style.display = 'none';
      audio.volume = 0.8;
      audio.play();
      startRave();

      // Optional: stop after 10 seconds
      setTimeout(stopRave, 10000);
    }
    if (e.target.id === 'modal-cancel') {
      modal.style.display = 'none';
    }
  });
});
