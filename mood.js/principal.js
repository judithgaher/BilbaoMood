function manejarClic(valor) {
  let puntosPaginaActual = sessionStorage.getItem("puntosPaginaActual");

  if (!puntosPaginaActual || obtenerNombrePaginaActual() === "test1.html") {
    puntosPaginaActual = 0;
  }

  puntosPaginaActual = parseInt(puntosPaginaActual) + valor;

  sessionStorage.setItem("puntosPaginaActual", puntosPaginaActual);

  actualizarPuntosTotal(puntosPaginaActual);

  let botonClicado = document.getElementById("boton-" + valor);

  if (botonClicado) {
    botonClicado.classList.add("marcado");
  }

  redireccionarPaginaSiguiente();
}

function actualizarPuntosTotal(puntosPaginaActual) {
  let puntosTotal = localStorage.getItem("puntosTotal") || 0;
  puntosTotal = parseInt(puntosTotal) - puntosPaginaActual + parseInt(puntosPaginaActual);
  localStorage.setItem("puntosTotal", puntosTotal);
}

function redireccionarPaginaSiguiente() {
  let currentPage = obtenerNombrePaginaActual();
  let nextPage = getNextPage(currentPage);

  if (nextPage) {
    window.location.href = nextPage;
  } else {
    console.log("No se pudo determinar la página siguiente.");
  }
}

function obtenerNombrePaginaActual() {
  return window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
}

function getNextPage(currentPage) {
  let pages = {
    "test1.html": "test2.html",
    "test2.html": "test3.html",
    "test3.html": "test4.html",
    "test4.html": "test5.html",
    "test5.html": "test6.html",
  };

  return pages[currentPage];
}
