txtValor = document.getElementById("txtValor");
btnDobrar = document.getElementById("btnDobrar");
txtDobrado = document.getElementById("txtDobrado");

btnDobrar.addEventListener("click", dobrarValor);

function dobrarValor(){
    // e.preventDefault();
    txtDobrado.value = txtValor.value*2;
}