<?php

    $myemail = 'apuravchugh@gmail.com';
    $name = $_POST['name'];
    $email_address = $_POST['email'];
    $message = $_POST['message'];

    $to = $myemail;
    $email_subject = "Contact form submission: $name";
    $email_body = "New contact form submission. ".
    "Details:\n\n Name: $name \n ".
    "Email: $email_address \n Message: \n $message";
    $headers = "From: $myemail\n";
    $headers .= "Reply-To: $email_address";
    mail($to,$email_subject,$email_body,$headers);
    header('Location: ../index.html#contact');
?>