<?php

$host = "http://localhost:5500/_media/contact.html";

$db_name = "cadastro";
$host = "localhost";
$db_user = "root";
$db_pass = '';

try {
    $conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
}catch(\Throwable $db){
    throw $db;
}