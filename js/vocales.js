// Función para encontrar las vocales en una frase
function encontrarVocales() {
    // Obtener el texto del input
    const texto = document.getElementById('vocales-input').value.toLowerCase();

    // Crear un array para almacenar las vocales encontradas
    const vocalesEncontradas = [];

    // Buscar vocales en el texto
    for (let letra of texto) {
        if ('aeiouáéíóú'.includes(letra) && !vocalesEncontradas.includes(letra)) {
            vocalesEncontradas.push(letra);
        }
    }

    // Mostrar el resultado
    const resultadoElement = document.getElementById('vocales-resultado');
    if (vocalesEncontradas.length > 0) {
        resultadoElement.textContent = `Las vocales encontradas son: ${vocalesEncontradas.join(', ')}`;
        resultadoElement.style.color = 'green';
    } else {
        resultadoElement.textContent = 'No se encontraron vocales en el texto';
        resultadoElement.style.color = 'red';
    }
}

// Función para contar las vocales
function contarVocales() {
    // Obtener el texto del input
    const texto = document.getElementById('contador-vocales-input').value.toLowerCase();

    // Objeto para almacenar el conteo de cada vocal
    const conteoVocales = {
        'a': 0, 'á': 0,
        'e': 0, 'é': 0,
        'i': 0, 'í': 0,
        'o': 0, 'ó': 0,
        'u': 0, 'ú': 0
    };

    // Contar cada vocal
    for (let letra of texto) {
        if (conteoVocales.hasOwnProperty(letra)) {
            conteoVocales[letra]++;
        }
    }

    // Preparar el resultado
    const resultadoElement = document.getElementById('contador-vocales-resultado');
    let resultadoHTML = '<h4>Resultado:</h4>';

    // Combinar vocales con y sin tilde
    const conteoFinal = {
        'a/á': conteoVocales['a'] + conteoVocales['á'],
        'e/é': conteoVocales['e'] + conteoVocales['é'],
        'i/í': conteoVocales['i'] + conteoVocales['í'],
        'o/ó': conteoVocales['o'] + conteoVocales['ó'],
        'u/ú': conteoVocales['u'] + conteoVocales['ú']
    };

    // Crear una lista con los resultados
    resultadoHTML += '<ul>';
    for (let vocal in conteoFinal) {
        if (conteoFinal[vocal] > 0) {
            resultadoHTML += `<li>La vocal ${vocal} aparece ${conteoFinal[vocal]} ${conteoFinal[vocal] === 1 ? 'vez' : 'veces'}</li>`;
        }
    }
    resultadoHTML += '</ul>';

    // Mostrar el resultado
    resultadoElement.innerHTML = resultadoHTML;
}