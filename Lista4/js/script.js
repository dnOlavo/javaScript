btnResultado = document.getElementById("btnResultado");
btnResultado.addEventListener("click", gerarSorteio);

function gerarSorteio() {
candidatos = [{ nome: "Simone Tebet", partido: "MDB", imagem: 'candidato4.png' },
{ nome: "Luis Inácio Lula da Silva", partido: "PT", imagem: 'candidato2.png' },
{ nome: "Ciro Gomes", partido: "PDT", imagem: 'candidato3.png' },
{ nome: "Jair Messias Bolsonaro", partido: "PL", imagem: 'candidato1.png' }]

// //Sorteia os dois candidatos
// function sortearCandidatos() {
//     indices = [0, 1, 2, 3];
//     sorteado1 = indices.splice(Math.floor(Math.random() * indices.length), 1)[0];
//     sorteado2 = indices.splice(Math.floor(Math.random() * indices.length), 1)[0];
//     return [sorteado1, sorteado2];
// }

// [indiceCandidato1, indiceCandidato2] = sortearCandidatos();

// // Sorteia uma porcentagem entre 0 e 100
// porcentagemCand1 = (Math.random() * 100).toFixed(1);
// porcentagemCand2 = (100 - porcentagemCand1).toFixed(1);


// document.getElementById("imgCand1").src = `img/${candidatos[indiceCandidato1].imagem}`;
// document.getElementById("nomeCand1").innerHTML = candidatos[indiceCandidato1].nome;
// document.getElementById("partidoCand1").innerHTML = candidatos[indiceCandidato1].partido;
// document.getElementById("porcentagemCand1").innerHTML = porcentagemCand1;

// document.getElementById("imgCand2").src = `img/${candidatos[indiceCandidato2].imagem}`;
// document.getElementById("nomeCand2").innerHTML = candidatos[indiceCandidato2].nome;
// document.getElementById("partidoCand2").innerHTML = candidatos[indiceCandidato2].partido;
// document.getElementById("porcentagemCand2").innerHTML = porcentagemCand2;

// //Verifica vencedor
// if (porcentagemCand1 > porcentagemCand2) {
//     vencedor = document.getElementById("vencedor").innerHTML = candidatos[indiceCandidato1].nome;
// } else {vencedor = document.getElementById("vencedor").innerHTML = candidatos[indiceCandidato2].nome;}

indices = [0, 1, 2, 3];
porcentagemVotos = Math.random() * 100;
porcentagemCandidatos = [porcentagemVotos, 100 - porcentagemVotos];

indicesSorteados = [];

for (i = 1; i <= 2; i++) {
    indiceCandidato = indices.splice(Math.floor(Math.random() * indices.length), 1)[0];
    indicesSorteados.push(indiceCandidato);

    document.getElementById(`imgCand${i}`).src = `img/${candidatos[indiceCandidato].imagem}`;
    document.getElementById(`nomeCand${i}`).innerHTML = candidatos[indiceCandidato].nome;
    document.getElementById(`partidoCand${i}`).innerHTML = candidatos[indiceCandidato].partido;
    document.getElementById(`porcentagemCand${i}`).innerHTML = porcentagemCandidatos[i - 1].toFixed(1);
}

// Verifica vencedor
indiceVencedor = porcentagemCandidatos[0] > porcentagemCandidatos[1] ? indicesSorteados[0] : indicesSorteados[1];
document.getElementById("vencedor").innerHTML = candidatos[indiceVencedor].nome;
}
gerarSorteio();