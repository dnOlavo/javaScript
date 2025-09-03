nome = prompt("Digite o seu nome completo:", "Olavo Dias Nunes");

idade = prompt("Digite a sua idade:");
while ((idade == "") || (idade == null) || isNaN(idade)) {
    alert("Favor informar a idade");
    idade = prompt("Digite a sua idade:");
}

if (idade >= 18)
    alert(`${nome}, você já POSSUI idade para tirar carteira`);
else
    alert(`${nome}, você ainda NÃO POSSUI idade para tirar carteira, ainda falta(m) ${18 - idade} ano(s)`);
