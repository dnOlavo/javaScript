candidatos = document.querySelectorAll(".candidato");

candidatos.forEach(candidato => {
    let votos = 0;

    candidato.addEventListener("click", () => {
        votos++;
        atualizaVotos(candidato, votos);
        highlightWinner();
    });
});

function atualizaVotos(candidato, votos) {
    const votosSpan = candidato.querySelector("span");
    votosSpan.textContent = votos;
}

function highlightWinner() {
    const votosVetor = Array.from(candidatos).map(candidato => parseInt(candidato.querySelector("span").textContent));
    const maxVotos = Math.max(...votosVetor);

    candidatos.forEach(candidato => {
        const votos = parseInt(candidato.querySelector("span").textContent);

        if (votos === maxVotos) {
            candidato.classList.add("winning");
        } else {
            candidato.classList.remove("winning");
        }
    });
}
