function compararNumeros() {
    // Obtener los valores de los inputs
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    // Obtener el elemento donde mostraremos el resultado
    const resultadoElement = document.getElementById('numeros-resultado');

    // Validar que ambos campos tengan números
    if (isNaN(numero1) || isNaN(numero2)) {
        resultadoElement.textContent = "Por favor, introduce números válidos en ambos campos";
        resultadoElement.style.color = "red";
        return;
    }

    // Comparar los números y mostrar el resultado
    if (numero1 > numero2) {
        resultadoElement.textContent = `${numero1} es mayor que ${numero2}`;
    } else if (numero2 > numero1) {
        resultadoElement.textContent = `${numero2} es mayor que ${numero1}`;
    } else {
        resultadoElement.textContent = "Los números son iguales";
    }
    resultadoElement.style.color = "green";
}