window.addEventListener("DOMContentLoaded", function () {

    let codDisciplina = document.getElementById("codDisciplina");
    document.getElementById("btnValidar").addEventListener("click", validar);
  
    function validar() {
        let padrao = /^mt-\d{2}\.\d{3}-iftm$/i; //MT-xx.xxx-iftm
  
        (padrao.test(codDisciplina.value))?alert("Válido!"):alert("Inválido");
    }
  })