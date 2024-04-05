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
    return $criar_usuariodb == 1 ? "Criado com sucesso!" : "ERROR";
}
function atualizar_usuario($conn, $nome, $email, $senha){
    $atualizar_usariodb = atualizar_usuariodb($conn, $nome, $email, $senha);
    
    return  $atualizar_usariodb == 1 ? "Atualizado  com sucesso!" : "ERROR";
}
function apagar_usuario($conn, $id){
    $apagar_usuariodb = apagar_usuariodb($conn, $id);
    return  $apagar_usuariodb == 1 ? "Removido com sucesso!" : "ERROR";
}
