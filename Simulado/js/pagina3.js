document.getElementById("btnGerar").addEventListener("click", function () {
    let qtd = parseInt(document.getElementById("numero").value);
    let container = document.getElementById("container");

    if (isNaN(qtd) || qtd < 1) {
        alert("Digite um número válido! Maior ou igual a 1.");
        return;
    }

    for (let i = 0; i < qtd; i++) {
        let p = document.createElement("p");
        p.textContent = "Ho Ho Ho Feliz Natal!";
        container.appendChild(p);
    }
});
