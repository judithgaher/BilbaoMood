// Obtener la suma total acumulada de todas las páginas desde localStorage
var puntosTotal = localStorage.getItem("puntosTotal");

// Si no hay ningún valor almacenado, comenzar en 0
if (!puntosTotal) {
  puntosTotal = 0;
}

// Mostrar la suma total en el elemento <p> con el id "sumaTotal"
var sumaTotalElement = document.getElementById("sumaTotal");
sumaTotalElement.textContent = "Suma total: " + puntosTotal;
