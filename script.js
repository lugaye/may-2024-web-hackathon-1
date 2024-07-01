document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("text");
    const text = "Njau Kiiru Laurent, Software Developer.";
    let index = 0;

    function typeWriter(element, text, index = 0) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(() => typeWriter(element, text, index), 20);
        }
    }

    typeWriter(textElement, text);

    function typeWriterEffect(elementId) {
        const element = document.getElementById(elementId);
        const text = element.textContent;
        element.innerHTML = '';
        typeWriter(element, text);
    }

    function showSection(sectionId, addToHistory = true) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        // Show the requested section
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.style.display = 'block';
            if (addToHistory) {
                history.pushState({section: sectionId}, '', '#' + sectionId.replace('-content', ''));
            }

            // Apply typewriter effect to content sections
            const typewriterElements = sectionElement.querySelectorAll('h2, p');
            typewriterElements.forEach(el => {
                typeWriterEffect(el.id);
            });
        }
    }

    // Add event listeners to nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1) + '-content';
            showSection(sectionId);
        });
    });

    // Handle popstate event to enable back/forward navigation
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.section) {
            showSection(event.state.section, false);
        } else {
            showSection('home-content', false);
        }
    });

    // Show the correct section on page load based on the URL hash
    const initialSectionId = window.location.hash ? window.location.hash.substring(1) + '-content' : 'home-content';
    showSection(initialSectionId, false);
});
