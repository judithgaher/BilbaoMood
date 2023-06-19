// Obtener el botón por su clase
var botonSiguiente = document.querySelector('.siguiente-horos');

// Definir el nombre base de la página
var paginaBase = 'test'; // Reemplaza 'pagina' con el nombre base de tus páginas

// Agregar un controlador de eventos al botón
botonSiguiente.addEventListener('click', function() {
  // Obtener la URL de la página actual
  var currentPageURL = window.location.href;

  // Obtener el número de la página actual
  var currentPageNumber = parseInt(currentPageURL.substring(currentPageURL.lastIndexOf('/test') + 1));

  // Calcular el número de la siguiente página sumando 1 al número actual
  var nextPageNumber = currentPageNumber + 1;

  // Construir el nombre completo de la siguiente página
  var nextPageName = paginaBase + nextPageNumber + '.html'; // Reemplaza '.html' si tus páginas tienen otra extensión

  // Redirigir a la siguiente página
  window.location.href = nextPageName;
});
