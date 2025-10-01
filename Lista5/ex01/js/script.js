personagem = document.getElementById("personagem");
txtMensagem = document.getElementById("txtMensagem");

imagens = {
    pensativo: "img/Pensativo.png",
    assustado: "img/Assustado.png",
    alegre: "img/Alegre.png",
    nervoso: "img/Nervoso.png"
};

//início
personagem.src = imagens.pensativo;
txtMensagem.textContent = "zzzzzzzzz!";

//mouse sobre o personagem
personagem.addEventListener("mouseover", () => {
    personagem.src = imagens.assustado;
    txtMensagem.textContent = "O que você quer?";
});

//clique no personagem
personagem.addEventListener("click", () => {
    nome = prompt("Qual é o seu nome?");

    if (nome === null || nome.trim() === "") {
        //usuário clicou em cancelar ou não digitou nada
        personagem.src = imagens.nervoso;
        txtMensagem.textContent = "Não me faça perder o meu tempo!";

        //animação
        personagem.classList.add("shake");

        // remove a classe após a animação terminar, para poder usar de novo no futuro
        personagem.addEventListener("animationend", () => {
            personagem.classList.remove("shake");
        }, { once: true });
    } else {
        //usuário digitou alguma coisa
        personagem.src = imagens.alegre;
        txtMensagem.textContent = `${nome}, seja bem-vindo!`;

        //animação alegre
        personagem.classList.add("happy");

        // remove depois que acabar para poder reaplicar futuramente
        personagem.addEventListener("animationend", () => {
            personagem.classList.remove("happy");
        }, { once: true });
    }

    //mantém o personagem por 5 segundos e depois volta ao pensativo
    setTimeout(() => {
        personagem.src = imagens.pensativo;
        txtMensagem.textContent = "zzzzzzzzz!";
    }, 5000);
});

//mouse sai de cima do personagem
personagem.addEventListener("mouseout", () => {
    if (personagem.src.includes("Assustado")) {
        personagem.src = imagens.pensativo;
        txtMensagem.textContent = "zzzzzzzzz!";
    }
});