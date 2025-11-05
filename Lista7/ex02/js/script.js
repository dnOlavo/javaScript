for (let i = 1; i <= 10; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  document.getElementById("tempo").appendChild(option);
}

function moverComTempo() {
  let texto = document.getElementById("caixa1").value;
  let segundos = document.getElementById("tempo").value;

  if (segundos === "") {
    alert("Selecione um tempo!");
    return;
  }

  setTimeout(function () {
    document.getElementById("caixa1").value = "";
    document.getElementById("caixa2").value = texto;
  }, segundos * 1000);
}