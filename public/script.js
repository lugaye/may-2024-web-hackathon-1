function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            // Collect form data
            const formData = new FormData(this);

            // Convert FormData to JSON
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Send form data to server using fetch
            fetch("/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formObject)
            })
            .then(response => response.json())
            .then(data => {
                // Display success message
                const alertBox = document.getElementById("alertBox");
                alertBox.style.display = "block";
                alertBox.innerHTML = data.message;
            })
            .catch(error => {
                console.error("Error:", error);
                const alertBox = document.getElementById("alertBox");
                alertBox.style.display = "block";
                alertBox.innerHTML = "An error occurred while submitting the form.";
            });
        });
    } else {
        console.error("Contact form element not found.");
    }
});