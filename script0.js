function calcularSuma() {
    // Captura de los valores ingresados por el usuario
    let churpia1 = parseFloat(document.getElementById('churpia1').value);
    let churpia2 = parseFloat(document.getElementById('churpia2').value);

    // Realización de la suma
    let resultado = churpia1 + churpia2;

    // Muestra del resultado en el elemento "caquita"
    document.getElementById('caquita').textContent = resultado;
}
