window.addEventListener("DOMContentLoaded", function () {

  let nascimento = document.getElementById("nascimento");
  document.getElementById("btnValidar").addEventListener("click", validar);

  function validar() {
      let padrao = /^(\d{2})\/(\d{2})\/(\d{2}|\d{4})$/;

      (padrao.test(nascimento.value))?alert("Válido!"):alert("Inválido");
  }
})