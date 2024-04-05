<?php

require_once "../db/funcoes.php";

if ($_SERVER[$_SERVER] == "POST") {

    if (isset($_POST["nome"]) && isset($_POST["email"]) && isset($_POST["senha"])) {
        if (isset($_POST["id"])) {
            atualizar_usuario($conn, $_POST["id"], $_POST["nome"], $_POST["email"], $_POST["senha"]);
        } else {
            criar_usuario($conn, $_POST["nome"], $_POST["email"], $_POST["senha"]);
        }
    } elseif (isset($_POST["id"])) {
        apagar_usuario($conn, $_POST["id"]);
    }
}

$users = usuarios($conn);


