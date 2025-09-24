function validar() {
    login = document.getElementById("login").value;
    senha = document.getElementById("senha").value;
    confSenha = document.getElementById("confSenha").value;
    mensagem = document.getElementById("mensagem");

    // Primeira validação - campo login
    if (login === "") {
        mensagem.innerHTML = "Por favor, digite o login.";
        return;
    }

    // Segunda validação - senha igual confirmar senha
    if (senha !== confSenha) {
        mensagem.innerHTML = "As senhas não conferem!";
        document.getElementById("senha").value = "";
        document.getElementById("confSenha").value = "";
        return;
    }

    // Se passou nas duas validações
    mensagem.style.color = "green";
    mensagem.innerHTML = "Todos os campos foram digitados corretamente!";
}
