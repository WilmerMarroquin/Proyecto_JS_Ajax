// Función que se ejecuta cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Establecer la URL actual en el input
    document.getElementById('url-input').value = window.location.href;

    // Añadir ejemplos de URLs para probar
    const ejemplosHTML = `
        <div class="ejemplos-urls">
            <h4>URLs de ejemplo para probar:</h4>
            <button onclick="setURL('https://jsonplaceholder.typicode.com/posts/1')">Ejemplo 1: Post de JSON Placeholder</button>
            <button onclick="setURL('https://api.github.com/users/github')">Ejemplo 2: Usuario de GitHub</button>
            <button onclick="setURL('https://api.publicapis.org/entries')">Ejemplo 3: Lista de APIs públicas</button>
        </div>
    `;
    document.getElementById('ajax-section').insertAdjacentHTML('afterbegin', ejemplosHTML);
});

// Función para establecer la URL en el input
function setURL(url) {
    document.getElementById('url-input').value = url;
}

function cargarContenido() {
    const url = document.getElementById('url-input').value;
    const xhr = new XMLHttpRequest();

    // Elementos donde mostraremos la información
    const estadosElement = document.getElementById('estados');
    const cabecerasElement = document.getElementById('cabeceras');
    const codigoElement = document.getElementById('codigo-estado');
    const contenidosElement = document.getElementById('contenidos');

    // Explicación de cada estado
    const estadosDetallados = {
        0: 'No inicializada - El objeto XMLHttpRequest se ha creado pero no se ha llamado al método open()',
        1: 'Conectando - Se ha llamado al método open() pero no a send()',
        2: 'Recibiendo - Se ha llamado a send() pero aún no hay respuesta',
        3: 'Procesando - Se están recibiendo datos parciales',
        4: 'Completado - Todos los datos se han recibido'
    };

    // Monitorear los cambios de estado
    xhr.onreadystatechange = function() {
        // Mostrar el estado actual con explicación
        estadosElement.innerHTML = `
            <strong>Estado actual:</strong> ${estadosDetallados[xhr.readyState]}
            <br>
            <strong>Número de estado:</strong> ${xhr.readyState}/4
        `;

        // Cuando la petición se completa
        if (xhr.readyState === 4) {
            // Mostrar las cabeceras de forma formateada
            const cabeceras = xhr.getAllResponseHeaders()
                .split('\n')
                .filter(line => line.trim())
                .map(line => `<div>${line}</div>`)
                .join('');
            cabecerasElement.innerHTML = cabeceras;

            // Mostrar el código de estado con explicación
            codigoElement.innerHTML = `
                <strong>Código:</strong> ${xhr.status}
                <br>
                <strong>Texto:</strong> ${xhr.statusText}
            `;

            // Mostrar el contenido
            try {
                // Intentar formatear como JSON si es posible
                const response = JSON.parse(xhr.responseText);
                contenidosElement.innerHTML = `<pre>${JSON.stringify(response, null, 2)}</pre>`;
            } catch {
                // Si no es JSON, mostrar como texto
                contenidosElement.innerHTML = `<pre>${xhr.responseText}</pre>`;
            }
        }
    };

    try {
        // Iniciar la petición
        xhr.open('GET', url, true);
        xhr.send();
    } catch (error) {
        estadosElement.textContent = `Error: ${error.message}`;
    }
}
