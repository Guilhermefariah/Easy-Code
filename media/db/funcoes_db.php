<?php

function acoesUsuariosDb($conn, $id)
{
    $id = mysqli_real_escape_string($conn, $id);
    $sql = "SELECT * FROM users WHERE id = ?";
    $stmt = mysqli_stmt_init($conn);

    if (!mysqli_stmt_prepare($stmt, $sql))
        exit("SQL ERRO!");

    mysqli_stmt_bind_param($stmt, "i", $id);
    mysqli_stmt_execute($stmt);
    $user = mysqli_fetch_assoc(mysqli_stmt_get_result($stmt));
    mysqli_close($conn);
    return $user;
}
function criarUsuarioDb($conn, $nome, $email, $senha)
{
    $nome = mysqli_real_escape_string($conn, $nome);
    $email = mysqli_real_escape_string($conn,  $email);
    $senha = mysqli_real_escape_string($conn,  $senha);

    if ($nome && $email && $senha) {
        $sql = "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)";
        $stmt = mysqli_stmt_init($conn);

        if (!mysqli_stmt_prepare($stmt, $sql))
            exit('SQL ERRO!');

        mysqli_stmt_bind_param($stmt, 'sss', $nome, $email, $senha);
        mysqli_stmt_execute($stmt);
        mysqli_close($conn);
        return true;
    }
}
function usuariosDb($conn)
{
    $users = [];
    $sql = "SELECT * FROM users";
    $result = mysqli_query($conn, $sql);
    $result_check = mysqli_num_rows($result);
    if ($result_check > 0)
        $users = mysqli_fetch_all($result, MYSQLI_ASSOC);
    mysqli_close($conn);
    return $users;
}
function atualizarUsuarioDb($conn, $id, $nome, $email, $senha)
{
    if ($id && $nome && $email && $senha) {
        $sql = "UPDATE users SET nome = ?, email = ?, senha = ? WHERE id = ?";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql))
            exit('SQL error');
        mysqli_stmt_bind_param($stmt, 'sssi', $nome, $email, $senha, $id);
        mysqli_stmt_execute($stmt);
        mysqli_close($conn);
        return true;
    }
}
function apagarUsuarioDb($conn, $id)
{
    $id = mysqli_real_escape_string($conn, $id);
    if ($id) {
        $sql = "DELETE FROM users WHERE id = ?";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql))
            exit('SQL error');
        mysqli_stmt_bind_param($stmt, 'i', $id);
        mysqli_stmt_execute($stmt);
        return true;
    }
}
