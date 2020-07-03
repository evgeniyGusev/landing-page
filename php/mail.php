<?php

$recepient = "shchelkalinevgeniy@gmail.com";
$siteName = "Евгений Гусев";

$name = trim($_POST["user-name"]);
$phone = trim($_POST["user-number"]);
$mail = trim($_POST["user-mail"]);
$hours = trim($_POST["user-hours"]);
$minutes = trim($_POST["user-minutes"]);
$type = trim($_POST["type_site"]);
$message = "Имя: $name \nТелефон: $phone \nПочта: $mail \nВремя: $hours : $minutes \nТип: $type";

$pagetitle = "Заявка с лэндинга \"$siteName\"";
mail($recepient, $pagetitle, $message, 'Content-type: text/plain; charset=\"utf-8\"ж', 'From: shchelkalinevgeniy@gusev-web.space');

?>
