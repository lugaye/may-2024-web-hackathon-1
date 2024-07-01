document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.menu ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for the navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
});
