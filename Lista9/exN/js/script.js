window.addEventListener("DOMContentLoaded", function () {

  let senha = document.getElementById("senha");
  document.getElementById("btnValidar").addEventListener("click", validar);

  function validar() {
      let padrao = /^[A-Za-z0-9._-]{5,}&[a-pA-P]+\.[aeiou]+(?:\.[A-Za-z0-5]+)?-[^0-9]+[^\w\s]{2}[^ab01]+$/; // X&W.Y.Z-U,V.T ou X&W.Y-U,V.T

      (padrao.test(senha.value))?alert("Válido!"):alert("Inválido");
  }
})