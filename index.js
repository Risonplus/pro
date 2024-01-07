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
