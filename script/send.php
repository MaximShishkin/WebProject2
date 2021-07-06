<?php
    // Получение данных
    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];

    // Обработка данных
    $name = trim(urldecode(htmlspecialchars($name)));
    $email = trim(urldecode(htmlspecialchars($email)));
    $msg = trim(urldecode(htmlspecialchars($msg)));

    // Отправка сообщения и проверка
    if (mail("shishkin_maxim_job@mail.ru","Новый запрос на создание сайта",
    "<h1>На вашем сайте была оставлена заявка</h1>
     <br> от: <b>".$name."</b>
     <br> e-mail: <b>".$email."</b>
     <br> пользователь оставил комметарий: <b>".$msg."</b> ", 
     "From: 1c-webdevelopment.ru\r\n". "Content-type: text/html\r\n"))
    {
        // Успешная отправка сообщения
        echo '{"status": "ok"}';
    }
    else {
        // Не удалось отправить сообщение
        echo '{"status": "error"}';
    }
?>