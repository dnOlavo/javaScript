window.addEventListener("DOMContentLoaded", function () {

  let telefone = document.getElementById("telefone");
  document.getElementById("btnValidar").addEventListener("click", validar);

  function validar() {
      let padrao = /^\(\d{2,3}\)\d{5}-\d{4}$/; //(xx)xxxxx-xxxx ou (xxx)xxxxx-xxxx

      (padrao.test(telefone.value))?alert("Válido!"):alert("Inválido");
  }
})