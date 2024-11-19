// script.js
function setTheme(theme) {
  document.body.className = theme + '-theme';
}


// Add event listeners to the theme selector buttons
document.querySelector('.theme-selector button:nth-child(1)').addEventListener('click', () => setTheme('light'));
document.querySelector('.theme-selector button:nth-child(2)').addEventListener('click', () => setTheme('dark'));


// Smooth scrolling for anchor links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Handle form submission
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting the traditional way

  // Display a thank you message
  alert('Thank you for your message! We will get back to you soon.');

  // Optionally, reset the form
  this.reset();
});


// Function to handle scroll event
window.addEventListener('scroll', () => {
  const backToTopButton = document.getElementById('bottom');
  if (window.scrollY > 200) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
});


// Ensure focus is visible on all interactive elements
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a, button, input, textarea').forEach(el => {
      el.addEventListener('focus', () => {
          el.style.outline = '2px solid #007bff';
      });
      el.addEventListener('blur', () => {
          el.style.outline = '';
      });
  });
});




