// Add any additional JavaScript code as needed

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('All fields must be filled out');
        return false;
    }

    alert('Form submitted successfully!');
    // You can add code here to submit the form data to your server
}

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navList = document.querySelector('nav ul');

    mobileMenuIcon.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the default form submission behavior

        // Retrieve form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Your automatic reply message
        const replyMessage = `Hello ${name},\n\nThank you for contacting us! We have received your message:\n\n"${message}"\n\nWe will get back to you shortly.\n\nBest regards,\nThe Marketing Partner Team`;

        // Display the automatic reply
        alert(replyMessage);

        // You can also send the form data to your server here

        // Reset the form
        contactForm.reset();
    });
});


