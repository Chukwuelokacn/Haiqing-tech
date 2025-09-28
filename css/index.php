<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect data from the form
    $name = $_POST["name"];
    $phone = $_POST["phone"];

    // Your email address where you want to receive the prompt
    $to = "your-email@example.com";

    // Subject of the email
    $subject = "Client Information Prompt";

    // Compose the email message
    $message = "Client Name: $name\n";
    $message .= "Client Phone Number: $phone\n";

    // Additional headers
    $headers = "From: your-website@example.com" . "\r\n" .
               "Reply-To: $to" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send the email
    $mailSent = mail($to, $subject, $message, $headers);

    if ($mailSent) {
        echo "Prompt sent successfully. We'll get back to you soon!";
    } else {
        echo "Sorry, there was an issue sending the prompt.";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Client Prompt Form</title>
</head>
<body>
    <h2>Client Information Prompt</h2>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>

        <label for="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" required><br>

        <input type="submit" value="Send Prompt">
    </form>
</body>
</html>
