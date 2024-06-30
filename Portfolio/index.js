// FOR MENU LINKS

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'nav-link'
    const links = document.querySelectorAll('.nav-link');
    // Get the current URL of the page
    const currentURL = window.location.href;

    // Iterate over each link
    links.forEach(link => {
        // Check if the link's href matches the current URL
        if (link.href === currentURL) {
            // If it matches, add the 'active' class to this link
            link.classList.add('active');
        }

        // Add a click event listener to each link
        link.addEventListener('click', function() {
            // Remove the 'active' class from all links
            links.forEach(link => link.classList.remove('active'));
            // Add the 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});


// FOR TOGGLE MENU

// Wait for the entire DOM to be loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select the toggle button using its ID
    const toggle = document.getElementById('toggle');
    // Select the menu container using its ID
    const menu = document.getElementById('menu');

    // Add a click event listener to the toggle button
    toggle.addEventListener('click', () => {
        // Toggle the 'show' class on the menu element to show or hide the menu
        menu.classList.toggle('show');
        toggle.classList.toggle('active');
    });
});

// FOR FIXED NAVBAR
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function(){
        const navbar = document.querySelector('.navbar');
        if(window.scrollY > 50){
            navbar.classList.add('scrolled');
        }else{
            navbar.classList.remove('scrolled');
        }
    });
})

// AOS ANIMATIONS
document.addEventListener('DOMContentLoaded',()=>{
    AOS.init();
});
