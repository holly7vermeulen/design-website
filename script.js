// Mobile nav toggle + AOS init
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu') || document.querySelector('.menu-toggle');
  const navLinks = document.getElementById('nav-links') || document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // AOS scroll animations
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true,
    });
  }
});
