window.addEventListener("DOMContentLoaded", function () {

  let altura = document.getElementById("altura");
  document.getElementById("btnValidar").addEventListener("click", validar);

  function validar() {
      let padrao = /^(?:1[.,][3-9]\d?|2[.,](?:[0-4]\d?|5(?:0)?))$/;

      (padrao.test(altura.value))?alert("Válido!"):alert("Inválido");
  }
})