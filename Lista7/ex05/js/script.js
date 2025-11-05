function coletarNomes() {
      let n = parseInt(document.getElementById("quantidade").value);
      let nomes = [];

      if (isNaN(n) || n <= 0) {
        alert("Digite um número válido!");
        return;
      }

      for (let i = 0; i < n; i++) {
        let nome = prompt(`Digite o ${i + 1}º nome:`);
        nomes.push(nome);
      }

      let i = 0;
      let div = document.getElementById("resultado");

      let intervalo = setInterval(function() {
        div.innerHTML += nomes[i] + "<br>";
        i++;

        if (i >= nomes.length) {
          clearInterval(intervalo);
        }
      }, 1000);
    }