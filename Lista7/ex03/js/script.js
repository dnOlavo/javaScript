function mostrarNome() {
    let nome = document.getElementById("nome").value;
    let p = document.getElementById("resultado");
    p.innerHTML = nome;

    let tamanho = 14;
    p.style.fontSize = tamanho + "px";

    let intervalo = setInterval(function () {
        if (tamanho < 40) {
            tamanho += 2;
            p.style.fontSize = tamanho + "px";
        } else {
            clearInterval(intervalo);
        }
    }, 500);
}