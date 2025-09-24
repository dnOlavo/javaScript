txtNota1 = document.getElementById("txtNota1");
txtNota2 = document.getElementById("txtNota2");
btnResultado = document.getElementById("btnResultado");


btnResultado.addEventListener("click", calcularNota);

function calcularNota(){
    nota1 = parseFloat(txtNota1.value);
    nota2 = parseFloat(txtNota2.value);
    notaFinal = (nota1 + nota2) / 2;
    if(notaFinal >= 60){
        alert("Nota Final: " + notaFinal + "\nParabéns, você foi APROVADO !!!")
    } else {alert("Nota Final: " + notaFinal + "\nREPROVADO !!! \nFaltaram " + (60 - notaFinal) + " pontos para ser aprovado.")}
}