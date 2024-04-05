<?php 

require_once "../db/db.php";

function acoes_usuarios($conn, $id) {
    return acoes_usuariosdb($conn, $id);
}
function usuarios($conn){
    return usuariosdb($conn);
}
function criar_usuario($conn, $nome, $email, $senha){
    $criar_usuariodb = criar_usuariodb($conn, $nome, $email, $senha);
    $mensagem = $criar_usuariodb == 1 ? "Criado com sucesso!" : "ERROR";
    return api("../db/api.php?mensagem=$mensagem");
}
function atualizar_usuario($conn, $nome, $email, $senha){
    $atualizar_usariodb($conn, $nome, $email, $senha);
    $mensagem = $atualizar_usariodb == 1 ? "Atualizado  com sucesso!" : "Eroor";
    return api("../db/api.php?mensagem=$mensagem");
}

