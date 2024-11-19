function toggleMenu() {
    const navBarItems = document.querySelector('.navBarItems');
    navBarItems.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.workItem p');
    const speed = 1000000000; 

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        counter.innerText = '0';
        updateCount();
    });

    const navBarItems = document.querySelector('.navBarItems');
    const navBarLinks = navBarItems.querySelectorAll('a');

    navBarLinks.forEach(link => {
        link.addEventListener('click', () => {
            navBarItems.classList.remove('show');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const projectsWrapper = document.querySelector('.projectsWrapper');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    leftArrow.addEventListener('click', () => {
        projectsWrapper.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', () => {
        projectsWrapper.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });
});

const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        threshold: 0.1 
    };

    const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    fadeInElements.forEach(element => {
        fadeInOnScroll.observe(element);
    });
});

