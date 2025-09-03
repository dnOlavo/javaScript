document.getElementById('contarBtn').addEventListener('click', function() {
    var nome = prompt("Digite seu nome completo:");
    var quantidadeCaracteres = 0;

    for (var i = 0; i < nome.length; i++) {
        if (nome[i] !== ' ') {
            quantidadeCaracteres++;
        }
    }

    var resultado = "O nome informado possui " + quantidadeCaracteres + " caracteres (sem contar espaços).";
    document.getElementById('resultado').textContent = resultado;
});