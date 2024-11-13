function verificarPalindromo() {
    // Obtener el valor del input
    const texto = document.getElementById('palindromo-input').value;

    // Limpiar el texto (quitar espacios, signos de puntuación y convertir a minúsculas)
    const textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Invertir el texto
    const textoInvertido = textoLimpio.split('').reverse().join('');

    // Comparar el texto original con el invertido
    const esPalindromo = textoLimpio === textoInvertido;

    // Mostrar el resultado
    const resultadoElement = document.getElementById('palindromo-resultado');
    if (esPalindromo) {
        resultadoElement.textContent = `"${texto}" es un palíndromo!`;
        resultadoElement.style.color = 'green';
    } else {
        resultadoElement.textContent = `"${texto}" no es un palíndromo.`;
        resultadoElement.style.color = 'red';
    }
}