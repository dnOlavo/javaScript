txtNota1 = document.getElementById("txtNota1");
txtNota2 = document.getElementById("txtNota2");
btnResultado = document.getElementById("btnResultado");


btnResultado.addEventListener("click", calcularNota);

function calcularNota(){
    if((parseFloat(txtNota1.value)+parseFloat(txtNota2.value))/2 >= 60){
        alert("Parabéns, você foi APROVADO !!!")
    } else {alert("\nREPROVADO !!! \nVocê não atingiu a nota mínima (60) para ser aprovado.")}
}