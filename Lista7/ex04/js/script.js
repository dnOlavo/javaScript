function iniciarContagem() {
    let segundos = parseInt(document.getElementById("tempo").value);
    let msg = document.getElementById("mensagem");

    if (isNaN(segundos) || segundos <= 0) {
        alert("Digite um valor válido!");
        return;
    }

    let contador = setInterval(function () {
        msg.innerHTML = `Por favor, aguarde ${segundos} segundos para carregar a página do Google.`;
        segundos--;

        if (segundos < 0) {
            clearInterval(contador);
            window.location.href = "https://www.google.com";
        }
    }, 1000);
}