<?php
$sendarea  = $_post['sendarea'];
$sendrooms = $_post['sendrooms'];
$sendtotal = $_post['sendtotal'];
$sendname  = $_post['name'];
$sendphone = $_post['phone'];
$message   = "area = ".$sendarea."<br>"."rooms = ".$sendrooms."<br>"."total = ".$sendtotal."<br>"."name : ".$sendname."<br>"."phone : ".$sendphone;
$to        ="info@topstadning.se";
$subject   ="topstand orders";
$headers   ="from:".$sendname;
if(mail($to, $subject, $message, $headers)){
  header("Location: success.html");
}else{
 header("Location: failed.html");   
}

?>