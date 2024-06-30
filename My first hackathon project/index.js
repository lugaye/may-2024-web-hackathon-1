
document.addEventListener('DOMContentLoaded', function() {
   
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
       
        event.preventDefault();

       
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }
 
        alert('Form submitted successfully!');
        form.reset(); 
    });
});
