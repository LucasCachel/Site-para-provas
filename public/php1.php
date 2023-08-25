<?php
$nome = "Nome do Usuário";
$sobrenome = "Sobrenome do Usuário";
$email = "cachellucas@gmail.com";
$senha = password_hash("Altaneira86", PASSWORD_DEFAULT); // Hash da senha

// Conectar ao banco de dados
$mysqli = new mysqli("localhost", "nome_usuario", "senha_usuario", "minha_base_de_dados");

// Verificar a conexão
if ($mysqli->connect_error) {
    die("Erro na conexão: " . $mysqli->connect_error);
}

// Inserir o novo usuário na tabela
$sql = "INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES ('$nome', '$sobrenome', '$email', '$senha')";

if ($mysqli->query($sql) === TRUE) {
    echo "Novo usuário cadastrado com sucesso!";
} else {
    echo "Erro ao cadastrar usuário: " . $mysqli->error;
}

// Fechar a conexão
$mysqli->close();
?>
