// ETAPA 1 – Vetor de cartas
vetorCartas = [];
for (i = 1; i <= 27; i++) {
    vetorCartas.push(i);
}
console.log("Etapa 1 - Vetor de cartas:", vetorCartas);
document.getElementById("cartas").innerHTML = "Vetor de cartas: " + vetorCartas;

// ETAPA 2 – Pares aleatórios
vetorPares = [];

while (vetorPares.length < 4) {
    numero = Math.floor(Math.random() * 27) + 1;
    if (!vetorPares.includes(numero)) {
        vetorPares.push(numero);
    }
}

vetorPares = vetorPares.flatMap(num => [num, num]);
console.log("Etapa 2 - Vetor com pares:", vetorPares.slice());
document.getElementById("pares").innerHTML = "Vetor com pares: " + vetorPares;

// ETAPA 3 – Embaralhar
function embaralhar(vetor) {
    for (i = vetor.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        [vetor[i], vetor[j]] = [vetor[j], vetor[i]];
    }
    return vetor;
}

vetorParesEmbaralhados = embaralhar(vetorPares);
console.log("Etapa 3 - Vetor embaralhado:", vetorParesEmbaralhados);
document.getElementById("embaralhado").innerHTML = "Vetor com pares embaralhados: " + vetorParesEmbaralhados;