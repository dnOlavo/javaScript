window.addEventListener("DOMContentLoaded", function () {

    let cpf = document.getElementById("cpf");
    document.getElementById("btnValidar").addEventListener("click", validar);
  
    function validar() {
        let padrao = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  
        (padrao.test(cpf.value))?alert("Válido!"):alert("Inválido");
    }
  })