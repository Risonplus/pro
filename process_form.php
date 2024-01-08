<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Replace the email address below with your own email address
    $to = "your_email@example.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    
    // Redirect to the thank you page
    header("Location: thank_you.html");
    exit();
}

// Clear form fields after processing
echo "<script>
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
      </script>";
?>
