document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('overlay');
    const closebtn = document.getElementById('closebtn');

    hamburger.addEventListener('click', () => {
        overlay.style.width = '100%';
    });

    closebtn.addEventListener('click', () => {
        overlay.style.width = '0';
    });

    overlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            overlay.style.width = '0';
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));

            button.classList.add('active');
            const tab = button.getAttribute('data-tab');

            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(tab).classList.add('active');
        });
    });


    const progressBars = document.querySelectorAll('.progress-bar .progress');
    progressBars.forEach(progress => {
        const percentage = progress.getAttribute('data-percentage');
        progress.style.width = '0';
        setTimeout(() => {
            progress.style.width = `${percentage}%`;
            progress.textContent = `${percentage}%`;
        }, 500);
    });
});

