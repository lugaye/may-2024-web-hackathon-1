// Smooth scrolling for navigation links
document.querySelectorAll('header nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Toggle navigation menu for small screens
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('header nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-active');
});
