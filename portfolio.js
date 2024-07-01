document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('#skills');
    const skillBars = document.querySelectorAll('.progress-bar');

    const showSkills = () => {
        const sectionPos = skillsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if(sectionPos < screenPos) {
            skillBars.forEach(bar => {
                const value = bar.getAttribute('style').split(':')[1].trim();
                bar.style.width = value;
            });
        }
    }

    window.addEventListener('scroll', showSkills);
});
//toggle sections
document.addEventListener('DOMContentLoaded', function() {
    const aboutLink = document.querySelector('a[href="#about"]');
    const resumeLink = document.querySelector('a[href="#resume"]');
    const aboutSection = document.getElementById('about');
    const resumeSection = document.getElementById('resume');

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        aboutSection.style.display = 'block';
        resumeSection.style.display = 'none';
    });

    resumeLink.addEventListener('click', function(event) {
        event.preventDefault();
        aboutSection.style.display = 'none';
        resumeSection.style.display = 'block';
    });
});

// Smooth scroll to anchor links
document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

