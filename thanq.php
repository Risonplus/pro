<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Process the form data as needed (e.g., send an email, store in a database)

    // Redirect to the "Thank You" page
    header("Location: thank_you.html?name=$name&email=$email&message=$message");
    exit();
}
?>
