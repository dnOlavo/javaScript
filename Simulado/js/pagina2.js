let textoGuardado = localStorage.getItem("meuTexto");
document.getElementById("textoArmazenado").textContent = textoGuardado;

document.getElementById("btnAnalisar").addEventListener("click", function () {

    let escolha = document.getElementById("escolha").value;
    let textoParaAnalisar = "";

    if (escolha === "sim") {
        textoParaAnalisar = textoGuardado;
    } else {
        textoParaAnalisar = document.getElementById("textoNovo").value.trim();

        if (textoParaAnalisar === "") {
            alert("Por favor, digite um texto novo para análise.");
            return;
        }
    }

    let palavras = textoParaAnalisar.split(/\s+/);

    document.getElementById("resultadoPalavras").textContent = palavras.length;


    let palavrasComM = palavras.filter(p => p[0]?.toLowerCase() === "m");
    document.getElementById("resultadoM").value = palavrasComM.join(" ");


    document.getElementById("resultadoPrimeira").value = palavras[0];

    document.getElementById("resultadoSegunda").value = palavras[1] || "";

    document.getElementById("resultadoUltima").value = palavras[palavras.length - 1];
});