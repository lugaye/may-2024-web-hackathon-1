document.getElementById('copyEmailBtn').addEventListener('click', function() {
    var emailAddress = document.getElementById('hiddenEmailAddress').value;

    var tempInput = document.createElement('input');
    tempInput.value = emailAddress;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');

    document.body.removeChild(tempInput);

    alert('Email copied: ' + emailAddress);
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    alert('Message sent!');
});