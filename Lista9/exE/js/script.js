window.addEventListener("DOMContentLoaded", function () {

  let codDisciplina = document.getElementById("codDisciplina");
  document.getElementById("btnValidar").addEventListener("click", validar);

  function validar() {
      let padrao = /^MT-\d{2}\.\d{3}-[Ii][Ff][Tt][Mm]$/; //MT-xx.xxx-IftM

      (padrao.test(codDisciplina.value))?alert("Válido!"):alert("Inválido");
  }
})