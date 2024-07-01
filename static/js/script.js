document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        mobileMenu.classList.toggle('hidden');
    });
});

function toggleMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
    document.getElementById('burger-menu').classList.toggle('open');
}


  // JavaScript to trigger typing animation for title and subtitle
  document.addEventListener('DOMContentLoaded', function () {
    animateText('typing-title');
    animateText('typing-subtitle');
  });

  function animateText(id) {
    var element = document.getElementById(id);
    var text = element.innerText;
    element.innerHTML = ''; // Clear the text
    for (var i = 0; i < text.length; i++) {
      var char = text.charAt(i);
      var span = document.createElement('span');
      span.className = 'text-slider';
      span.style.animationDelay = (0.1 * i) + 's'; // Adjust delay between each character
      span.innerText = char === ' ' ? '\u00A0' : char; // Ensure spaces are non-breaking
      element.appendChild(span);
    }
  }


