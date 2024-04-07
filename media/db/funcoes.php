<?php 
require_once "../db/db.php";
require_once "../../media/db/api.php";
require_once "../../media/db/funcoes_db.php";

function acoesUsuarios($conn, $id) {
    return acoesUsuariosDb($conn, $id);
}
function usuarios($conn){
    return usuariosDb($conn);
}
function criarUsuario($conn, $nome, $email, $senha){
    $criarUsuarioDb = criarUsuarioDb($conn, $nome, $email, $senha);
    return $criarUsuarioDb == 1 ? "Criado com sucesso!" : "ERROR";
}
function atualizarUsuario($conn, $id, $nome, $email, $senha){
    $atualizarUsuarioDb = atualizarUsuarioDb($conn, $id, $nome, $email, $senha);
    return  $atualizarUsuarioDb == 1 ? "Atualizado  com sucesso!" : "ERROR";
}
function apagarUsuario($conn, $id){
    $apagarUsuarioDb = apagarUsuarioDb($conn, $id);
    return  $apagarUsuarioDb == 1 ? "Removido com sucesso!" : "ERROR";
}
