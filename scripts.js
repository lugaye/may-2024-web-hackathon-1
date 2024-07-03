document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Modal functionality
    const modals = document.querySelectorAll('.modal');
    const modalBtns = document.querySelectorAll('.open-modal');
    const closeBtns = document.querySelectorAll('.close-modal');
  
    modalBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        modals[index].style.display = 'block';
      });
    });
  
    closeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modals.forEach(modal => {
          modal.style.display = 'none';
        });
      });
    });
  
    window.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        modals.forEach(modal => {
          modal.style.display = 'none';
        });
      }
    });
  });