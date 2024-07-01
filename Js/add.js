        // JavaScript to animate typing effect with different colors
        const words = ["Specializing", "in", "software", "engineering."];
        let index = 0;
        const span = document.getElementById('typed-text');
        const cursor = document.querySelector('.typing-cursor');

        function toggleCursorVisibility(visible) {
            cursor.style.display = visible ? 'inline-block' : 'none';
        }

        function typeWriter() {
            toggleCursorVisibility(true); // Show cursor
            span.innerHTML += `<span class="color${(index % words.length) + 1}">${words[index % words.length]}</span> `;
            index++;

            if (index % words.length === 0) {
                setTimeout(onTypingComplete, 1000); // Wait 1 second before completing
            } else {
                setTimeout(typeWriter, 1000); // Adjust typing speed here (milliseconds)
            }
        }

        function onTypingComplete() {
            toggleCursorVisibility(false); // Hide cursor
            setTimeout(startTypingAgain, 20000); // Wait 5 seconds before starting again
        }

        function startTypingAgain() {
            span.innerHTML = ''; // Clear typed text
            index = 0;
            typeWriter();
        }

        typeWriter(); // Start typing animation
        // ---------------------------------------------------------------proggress bar------------------
        document.addEventListener('DOMContentLoaded', () => {
                const circles = document.querySelectorAll('.circle-progress');
                circles.forEach(circle => {
                    const progress = circle.getAttribute('data-progress');
                    circle.style.setProperty('--progress', `${progress}%`);
                });
            });

              function redirectToTwitter() {
                    // Replace '#' with the actual link you want to redirect to
                    window.open('https://x.com/Uwintwalijean', '_blank');
                }
                  function redirectToLinked() {
                        // Replace '#' with the actual link you want to redirect to
                        window.open('https://www.linkedin.com/in/uwintwali-jean-de-dieu-b12130271/', '_blank');
}
                    




document.addEventListener('DOMContentLoaded', function () {
        const links = document.querySelectorAll('.sidebar ul li a');
        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
    });