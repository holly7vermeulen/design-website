// Mobile nav toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Initialize AOS scroll animations
AOS.init({
  duration: 800,
  once: true,
});
