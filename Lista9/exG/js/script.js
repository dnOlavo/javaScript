window.addEventListener("DOMContentLoaded", function () {

  let codDisciplina = document.getElementById("codDisciplina");
  document.getElementById("btnValidar").addEventListener("click", validar);

  function validar() {
      let padrao = /^[Mm]\s?[Tt]-\d{2}\.\d{3}-[Ii]\s?[Ff]\s?[Tt]\s?[Mm]\s+Uberlândia(?: Centro)?$/u; //M T-xx.xxx-I F T M Uberlândia Centro

      (padrao.test(codDisciplina.value))?alert("Válido!"):alert("Inválido");
  }
})