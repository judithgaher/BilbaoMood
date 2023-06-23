function manejarClic(valor) {
  // Obtener el valor acumulado de puntos de la memoria del usuario para la página actual
  var puntosPaginaActual = sessionStorage.getItem("puntosPaginaActual");

  // Si no hay ningún valor almacenado o si estamos en la página test1.html, comenzar en 0
  if (!puntosPaginaActual || window.location.pathname.includes("test1.html")) {
    puntosPaginaActual = 0;
  }

  // Convertir el valor a un número entero
  puntosPaginaActual = parseInt(puntosPaginaActual);

  // Sumar el valor del botón actual a los puntos acumulados para la página actual
  puntosPaginaActual += valor;

  // Guardar el nuevo valor acumulado en la memoria del usuario para la página actual
  sessionStorage.setItem("puntosPaginaActual", puntosPaginaActual);

  // Si estamos en la página test5.html, reiniciar la suma total
  if (window.location.pathname.includes("test5.html")) {
    localStorage.removeItem("puntosTotal");
  }

  // Obtener la suma total acumulada de todas las páginas desde localStorage
  var puntosTotal = localStorage.getItem("puntosTotal");

  // Si no hay ningún valor almacenado, comenzar en 0
  if (!puntosTotal) {
    puntosTotal = 0;
  }

  // Convertir el valor a un número entero
  puntosTotal = parseInt(puntosTotal);

  // Restar el valor anterior de la página actual de la suma total acumulada
  puntosTotal -= puntosPaginaActual;

  // Sumar el valor actual de la página actual a la suma total acumulada
  puntosTotal += puntosPaginaActual;

  // Guardar la nueva suma total acumulada en la memoria del usuario
  localStorage.setItem("puntosTotal", puntosTotal);

  // Mostrar el mensaje de puntos acumulados utilizando el alert solo para la página actual
  alert("En esta página tienes " + puntosPaginaActual + " puntos, colega.");

  // Obtener el botón que se ha clicado
  var botonClicado = document.getElementById("boton-" + valor);

  // Agregar la clase "marcado" al botón clicado
  botonClicado.classList.add("marcado");
}
