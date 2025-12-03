window.addEventListener("DOMContentLoaded", function () {

    let ntoMatricula = document.getElementById("nroMatricula");
    document.getElementById("btnValidar").addEventListener("click", validar);
  
    function validar() {
        let padrao = /^(IFTM|iftm)-\d{3}\/\d{3}-[A-z0-9]{2}$/;
  
        (padrao.test(nroMatricula.value))?alert("Válido!"):alert("Inválido");
    }
  })