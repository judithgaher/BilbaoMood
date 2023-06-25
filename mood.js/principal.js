function manejarClic(valor) {
  let puntosPaginaActual = sessionStorage.getItem("puntosPaginaActual");

  if (!puntosPaginaActual || window.location.pathname.includes("test1.html")) {
    puntosPaginaActual = 0;
  }

  puntosPaginaActual = parseInt(puntosPaginaActual);

  puntosPaginaActual += valor;

  sessionStorage.setItem("puntosPaginaActual", puntosPaginaActual);

  if (window.location.pathname.includes("test5.html")) {
    localStorage.removeItem("puntosTotal");
  }

  let puntosTotal = localStorage.getItem("puntosTotal");

  if (!puntosTotal) {
    puntosTotal = 0;
  }

  puntosTotal = parseInt(puntosTotal);
  puntosTotal -= puntosPaginaActual;
  puntosTotal += puntosPaginaActual;

  localStorage.setItem("puntosTotal", puntosTotal);

  alert("En esta página tienes " + puntosPaginaActual + " puntos, colega.");

  let botonClicado = document.getElementById("boton-" + valor);

  botonClicado.classList.add("marcado");
}
