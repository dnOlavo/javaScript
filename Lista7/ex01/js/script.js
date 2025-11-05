function moverTexto() {
      let texto = document.getElementById("caixa1").value;

      setTimeout(function() {
        document.getElementById("caixa1").value = "";
        document.getElementById("caixa2").value = texto;
      }, 2000);
    }