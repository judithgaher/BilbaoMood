
var puntosTotal = localStorage.getItem("puntosTotal");

if (!puntosTotal) {
  puntosTotal = 0;
}

var sumaTotalElement = document.getElementById("sumaTotal");
sumaTotalElement.textContent = "Suma total: " + puntosTotal;
