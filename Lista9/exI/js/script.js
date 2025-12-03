window.addEventListener("DOMContentLoaded", function () {

  let telefone = document.getElementById("telefone");
  document.getElementById("btnValidar").addEventListener("click", validar);

  function validar() {
      let padrao = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/; // +yy(xx)xxxxx-xxxx

      (padrao.test(telefone.value))?alert("Válido!"):alert("Inválido");
  }
})