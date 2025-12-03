window.addEventListener("DOMContentLoaded", function () {

  let campus = document.getElementById("campus");
  document.getElementById("btnValidar").addEventListener("click", validar);

  function validar() {
      let padrao = /^IFTM campus Uberlândia(?: Centro)?$/u; //IFTM campus Uberlândia Centro

      (padrao.test(campus.value))?alert("Válido!"):alert("Inválido");
  }
})