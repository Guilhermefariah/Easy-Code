<?php
require_once "../../media/db/api.php";
require_once "../../media/db/funcoes.php";
require_once "../../media/db/funcoes_db.php";

$db_host = "localhost";
$db_name = "cadastro";
$db_user = "root";
$db_pass = '';

try {
    $conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
    if (!$conn) {
        throw new Exception("Falha ao conectar ao banco de dados: " . mysqli_connect_error());
    } else {
        echo "Conexão bem-sucedida!";
    }
} catch (\Throwable $db) {
    throw $db;
}
?>
