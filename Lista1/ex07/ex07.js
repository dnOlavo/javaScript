var r = parseInt(prompt("Digite o valor R (0-255):"));
var g = parseInt(prompt("Digite o valor G (0-255):"));
var b = parseInt(prompt("Digite o valor B (0-255):"));

if (isNaN(r) || isNaN(g) || isNaN(b) || r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    alert("Os valores devem estar no intervalo de 0 a 255.");
} else {
    var cor = "rgb(" + r + "," + g + "," + b + ")";
    document.body.textContent = "Fundamentos de Web Design II";
    document.body.style.color = cor;
    document.body.style.fontSize = "35px";
    document.body.style.textAlign = "center";
    document.body.style.padding = "50px";
}