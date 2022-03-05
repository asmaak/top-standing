<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message= "name=".$name."phone:".$phone."email:".$email;
$to = "info@topstadning.se";
$subject = "support";
$message = "hello";
$headers = "From: ".$email;

if(mail($to, $subject, $message, $headers)){
  header("Location: success.html");
}else{
 header("Location: failed.html");   
}



?>
