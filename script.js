// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Initialize AOS scroll animations
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true,
    });
  }
});
  // Add your JavaScript code here
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
});
