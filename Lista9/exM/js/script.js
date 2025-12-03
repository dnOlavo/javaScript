window.addEventListener("DOMContentLoaded", function () {

  let cronometro = document.getElementById("cronometro");
  document.getElementById("btnValidar").addEventListener("click", validar);

  function validar() {
      let padrao = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d:\d{2}$/; // HH:MM:SS:CC

      (padrao.test(cronometro.value))?alert("Válido!"):alert("Inválido");
  }
})