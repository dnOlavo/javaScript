// ETAPA 1 – Vetor de cartas
vetorCartas = [];
for (i = 1; i <= 27; i++) {
    vetorCartas.push(i);
}
console.log("Etapa 1 - Vetor de cartas:", vetorCartas);
document.getElementById("cartas").innerHTML = "Vetor de cartas: " + vetorCartas;