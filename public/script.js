// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cadastroForm = document.querySelector("#cadastroForm");
    if (cadastroForm) {
      cadastroForm.addEventListener("submit", cadastrarUsuario);
    }
  
    const loginForm = document.querySelector("#loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", realizarLogin);
    }
  });
  document.getElementById("cadastreButton").addEventListener("click", function() {
    window.location.href = "cadastro.html";
  });
  function cadastrarUsuario(event) {
    event.preventDefault();
    const newUsername = document.querySelector("#newUsername").value;
    const newPassword = document.querySelector("#newPassword").value;
  
    // Verifica se o usuário já existe no localStorage
    const users = getUsersFromLocalStorage();
    const userExists = users.some(user => user.username === newUsername);
  
    if (userExists) {
      alert("Usuário já cadastrado. Por favor, escolha outro nome de usuário.");
    } else {
      // Armazena o novo usuário e senha no localStorage
      users.push({ username: newUsername, password: newPassword });
      setUsersInLocalStorage(users);
  
      const mensagemCadastro = document.querySelector("#mensagemCadastro");
      mensagemCadastro.style.display = "block";
      // Redireciona o usuário para a página de login após o cadastro
      setTimeout(() => {
        window.location.href = "login.html";
      }, 4000); // Redireciona após 4 segundos (opcional)
    }
  }
  
  function realizarLogin(event) {
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
  
    // Verifica se o usuário existe no localStorage
    const users = getUsersFromLocalStorage();
    const user = users.find(user => user.username === username && user.password === password);
  
    if (user) {
      // Login válido, redireciona para a página da prova
      window.location.href = "prova.html";
    } else {
      // Exibe a mensagem de erro
      const mensagemErro = document.querySelector("#mensagemErro");
      mensagemErro.style.display = "block";
    }
  }
  
  function getUsersFromLocalStorage() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
  
  function setUsersInLocalStorage(users) {
    localStorage.setItem("users", JSON.stringify(users));
  }
  
