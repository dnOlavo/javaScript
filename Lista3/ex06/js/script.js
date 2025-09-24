txtValor1 = document.getElementById("txtValor1");
txtValor2 = document.getElementById("txtValor2");
btnResultado = document.getElementById("btnResultado");
btnAdicao = document.getElementById("btnAdicao");
btnSubtracao = document.getElementById("btnSubtracao");
btnMultiplicacao = document.getElementById("btnMultiplicacao");
btnDivisao = document.getElementById("btnDivisao");

btnAdicao.addEventListener("click", calculadora);
btnSubtracao.addEventListener("click", calculadora);
btnMultiplicacao.addEventListener("click", calculadora);
btnDivisao.addEventListener("click", calculadora);

function calculadora(){
    valor1 = parseFloat(txtValor1.value);
    valor2 = parseFloat(txtValor2.value);
    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }
    switch (event.target.value) {
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
        case "/":
            if (valor2 === 0) {
                alert("Divisão por zero não é permitida.");
                return;
            }
            resultado = valor1 / valor2;
            break;
    }
    btnResultado.value = resultado;
}