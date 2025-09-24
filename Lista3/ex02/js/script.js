txtNome = document.getElementById("txtNome");
btnExibir = document.getElementById("btnExibir");

btnExibir.addEventListener("click", exibeNome);

function exibeNome(){
    alert(txtNome.value.toUpperCase());
}