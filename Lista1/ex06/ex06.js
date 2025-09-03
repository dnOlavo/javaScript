document.getElementById('mostrarBtn').addEventListener('click', function() {
    var nome = document.getElementById('nomeInput').value;
    document.getElementById('nomeDigitado').textContent = nome;
});