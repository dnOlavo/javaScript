window.addEventListener("DOMContentLoaded", function () {

  let faturamento = document.getElementById("faturamento");
  document.getElementById("btnValidar").addEventListener("click", validar);

  function validar() {
      let padrao = /^R\$(?:\d{1,3}(?:\.\d{3})*|\d+),(?:\d{1,2})$/;

      (padrao.test(faturamento.value))?alert("Válido!"):alert("Inválido");
  }
})