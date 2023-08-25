<?php
$email = "cachellucas@gmail.com";
$senha = "Altaneira86"; // Senha não hash

// Conectar ao banco de dados
$mysqli = new mysqli("localhost", "nome_usuario", "senha_usuario", "minha_base_de_dados");

// Verificar a conexão
if ($mysqli->connect_error) {
    die("Erro na conexão: " . $mysqli->connect_error);
}

// Buscar o usuário pelo email
$sql = "SELECT id, nome, sobrenome, senha FROM usuarios WHERE email = '$email'";
$result = $mysqli->query($sql);

if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();

    // Verificar a senha
    if (password_verify($senha, $row["senha"])) {
        echo "Login bem-sucedido. Bem-vindo, " . $row["nome"] . " " . $row["sobrenome"];
    } else {
        echo "Senha incorreta.";
    }
} else {
    echo "Nenhum usuário encontrado com esse email.";
}

// Fechar a conexão
$mysqli->close();
?>
