<section id="contact">
    <div class="container">
        <div class="contact-wrapper">
            <div class="contact-details">
                <h2>Contact Details</h2>
                <p><i class='bx bxl-gmail'></i> Email: eutopiatech@gmail.com</p>
                <p><i class='bx bx-current-location'></i> Address: Nairobi, Kenya</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35869300514!2d36.6822353808674!3d-1.3028602556038333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1719663572484!5m2!1sen!2ske"
                    width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="contact-form">
                <h2>Reach out <i class='bx bxs-megaphone'></i></h2>
                <form id="form">
                    <div class="form-group">
                        <input type="text" id="name" name="name" placeholder="Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" name="email" placeholder="Email" required>
                    </div>
                    <div class="form-group">
                        <textarea type="text" id="message" name="message" placeholder="Message" required></textarea>
                    </div>
                    <input type="submit" class="submit-button" id="button" value="Send Email">
                </form>
                <div id="success-popup" class="success-popup">Email sent successfully!</div>
                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
                <script type="text/javascript">
                    emailjs.init('RAxnwyrAmHeW8AatN');
                </script>
                <script>
                    const btn = document.getElementById('button');
                    const successPopup = document.getElementById('success-popup');
                    const form = document.getElementById('form');

                    form.addEventListener('submit', function(event) {
                        event.preventDefault();

                        btn.value = 'Sending...';

                        const serviceID = 'default_service';
                        const templateID = 'template_fo9u7am';

                        emailjs.sendForm(serviceID, templateID, this)
                            .then(() => {
                                btn.value = 'Send Email';
                                showSuccessPopup();
                                form.reset(); // Clear the form fields
                            }, (err) => {
                                btn.value = 'Send Email';
                                alert(JSON.stringify(err));
                            });
                    });

                    function showSuccessPopup() {
                        successPopup.style.display = 'block';
                        setTimeout(() => {
                            successPopup.style.display = 'none';
                        }, 3000);
                    }
                </script>
            </div>
        </div>
    </div>
</section>
