# Laboratorio JavaScript y AJAX

Un proyecto interactivo que demuestra las capacidades de JavaScript y AJAX a través de diferentes ejercicios prácticos.

## 🌐 Demo en vivo

[Ver Demo](https://proyecto-js-ajax.onrender.com)

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Ejercicios Implementados](#ejercicios-implementados)
- [Contribuir](#contribuir)

## ✨ Características

### Ejercicios JavaScript
- Detector de palíndromos
- Comparador de números
- Detector de vocales
- Contador de vocales

### Funcionalidades AJAX
- Visualización de estados de peticiones HTTP
- Mostrado de cabeceras HTTP
- Visualización de códigos de estado
- Carga dinámica de contenido

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- AJAX (XMLHttpRequest)

## 💻 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/proyecto-JS-Ajax.git
```

2. Navega al directorio del proyecto:
```bash
cd proyecto-JS-Ajax
```

3. Abre el proyecto:
    - Opción 1: Abre `index.html` directamente en tu navegador
    - Opción 2: Usa un servidor local (recomendado para las funcionalidades AJAX)
```bash
# Si tienes Python instalado:
python -m http.server 8000

# Si tienes Node.js instalado:
npx http-server
```

## 🚀 Uso

### Ejercicios JavaScript

1. **Detector de Palíndromos**
    - Ingresa una palabra o frase
    - Clic en "Verificar"
    - El resultado mostrará si es un palíndromo

2. **Comparador de Números**
    - Ingresa dos números
    - Clic en "Comparar"
    - Verás cuál es mayor

3. **Detector de Vocales**
    - Ingresa una frase
    - Clic en "Buscar Vocales"
    - Muestra las vocales encontradas

4. **Contador de Vocales**
    - Ingresa una frase
    - Clic en "Contar Vocales"
    - Muestra la frecuencia de cada vocal

### Ejercicios AJAX

1. **Cargar Contenido**
    - URL por defecto: la actual del proyecto
    - Introduce una URL válida
    - Clic en "Mostrar Contenidos"
    - Observa los estados, cabeceras y respuesta

2. **URLs de Ejemplo**
    - Usa los botones de ejemplo para probar diferentes APIs
    - Observa cómo cambian los estados de la petición
    - Revisa las diferentes respuestas y cabeceras

## 📁 Estructura del Proyecto

```
proyecto-JS-Ajax/
├── index.html          # Archivo principal HTML
├── css/
│   └── styles.css      # Estilos CSS
└── js/
    ├── palindromo.js   # Lógica para palíndromos
    ├── numeros.js      # Comparador de números
    ├── vocales.js      # Detector y contador de vocales
    └── ajax.js         # Funcionalidades AJAX
```

## 📚 Ejercicios Implementados

### JavaScript

- ✅ Detección de palíndromos con manejo de caracteres especiales
- ✅ Comparación numérica con validación de entrada
- ✅ Detección de vocales con soporte para tildes
- ✅ Conteo de vocales con estadísticas detalladas

### AJAX

- ✅ Carga automática de URL actual
- ✅ Visualización de estados de petición
- ✅ Mostrado de cabeceras HTTP
- ✅ Manejo de diferentes tipos de respuesta
- ✅ Ejemplos predefinidos para pruebas

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Haz Fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Realiza commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## ✍️ Autor

Wilmer Alirio Marroquin Lomelin - [Correo](mailto:wmarro7@gmail.com)

## 🙏 Agradecimientos

- 