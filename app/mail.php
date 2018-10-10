<?php

$recepient = "mityasazonow@yandex.ru";
//$recepient = "info@zerolab.tech";

$action = trim($_REQUEST["action"]);
$phone = trim($_REQUEST["phone"]);
$name = trim($_REQUEST["name"]);
$secondname = trim($_REQUEST["secondname"]);
$email = trim($_REQUEST["email"]);
$comment = trim($_REQUEST["comment"]);

switch ($action) {
    case 'cons':
        $pagetitle = "Заявка консультации с сайта ZeroLab.tech";
        $message = "Телефон: $phone";
        break;
    case 'popup':
        $pagetitle = "Заявка с сайта ZeroLab.tech";
        $message = "
                    Имя: $name \n
                    Фамилия: $secondname \n
                    Телефон: $phone \n
                    Почта: $email \n
                    Комментарий: $comment";
        break;
}

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");