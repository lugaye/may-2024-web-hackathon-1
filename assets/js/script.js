// Ensure the script runs only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const contactForm = document.querySelector('section#contact form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Thank you for your message!');
            contactForm.reset();
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Toggle the navbar on mobile devices
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navbarToggler.addEventListener('click', () => {
        navbarCollapse.classList.toggle('show');
    });

    // Close the navbar when clicking on a nav-link on mobile devices
    document.querySelectorAll('.navbar-nav .nav-link').forEach(navLink => {
        navLink.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contact-form");
    var formMessages = document.getElementById("form-messages");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var formData = new FormData(form);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", form.action, true);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    formMessages.textContent = "Thank you! Your message has been sent.I'll get back to you soon";
                    formMessages.className = "alert alert-success";
                    form.reset();
                } else {
                    formMessages.textContent = "Oops! Something went wrong and we couldn't send your message.";
                    formMessages.className = "alert alert-danger";
                }
            }
        };
        xhr.send(formData);
    });
});