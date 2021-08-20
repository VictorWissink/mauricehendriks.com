<?php
$name = $_POST["firstname"];
$email = $_POST["email"];
$message = $_POST["message"];
$paintingName = $_POST["paintingName"];
$formcontent="From: $name \n Email: $email \n Painting: $paintingName \n Message: $message";
$recipient = "contact@mauricehendriks.com";
$subject = "Contact Form";
$headers = "From: testing@mauricehendriks.com";
mail($recipient, $subject, $formcontent, $headers) or die("Error!");
header('Location: ../success.html');
exit();
?>
