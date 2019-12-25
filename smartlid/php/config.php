<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . '/smartlid/php/phpmailer/phpmailer.php');
    
    // Основные настройки для отправки письма
     
    // *********** Если используете SMTP

    // ** Пример для SMTP-YANDEX.
    // const HOST = 'ssl://smtp.yandex.ru';
    // const LOGIN = 'sender';
    // const PASS = 'XXXXXXXXXX';
    // const PORT = 465;


    const HOST = 'ssl://smtp.mail.ru';
    const LOGIN = '341522000@mail.ru';
    const PASS = 'redhot1505';
    const PORT = 465;
    require_once($_SERVER['DOCUMENT_ROOT'] . '/smartlid/php/phpmailer/smtp.php');
   
    const SENDER = '341522000@mail.ru';
    const CATCHER = 'hr@goodzone.group';
    // const CATCHER2 = 'catcher2@list.ru';
    const SUBJECT = 'Обратный звонок';
    const CHARSET = 'UTF-8';

    $nameIsRequired = false;
    $telIsRequired = true;
    $emailIsRequired = false;
    // $textIsRequired = false;
    