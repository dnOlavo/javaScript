document.getElementById("btnEnviar").addEventListener("click", function () {
    let texto = document.getElementById("texto").value;

    if (texto.trim() === "") {
        alert("Digite um texto primeiro!");
        return;
    }

    localStorage.setItem("meuTexto", texto);

    window.location.href = "pagina2.html";
});