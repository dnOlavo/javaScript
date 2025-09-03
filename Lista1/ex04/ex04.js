/*SOLUÇÃO 1
nota1 = prompt("Digite a nota do 1º Bimestre:");
nota2 = prompt("Digite a nota do 2º Bimestre:");
notaFinal = (parseFloat(nota1) + parseFloat(nota2)) / 2;

if (notaFinal >= 60)
    alert("APROVADO!")
else
    alert(`REPROVADO! Faltaram ${60 - notaFinal} pontos`);
*/

//SOLUÇÃO 2
nota1 = parseFloat(prompt("Digite a nota do 1º Bimestre:"));
nota2 = parseFloat(prompt("Digite a nota do 2º Bimestre:"));
notaFinal = (nota1 + nota2) / 2;

if (notaFinal >= 60)
    alert("APROVADO!")
else
    alert(`REPROVADO! Faltaram ${60 - notaFinal} pontos`);
