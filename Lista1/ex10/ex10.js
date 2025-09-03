var valorX = parseInt(prompt("Digite um valor inteiro positivo maior do que zero (X):"));

if (isNaN(valorX) || valorX <= 0) {
    alert("Por favor, digite um valor inteiro positivo maior do que zero.");
} else {
    var nome = prompt("Digite seu nome completo:");
    var output = "";

    for (var i = 0; i < valorX; i++) {
        output += nome + "<br>";
    }

    document.body.innerHTML = output;
}