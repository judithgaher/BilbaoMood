
let puntosTotal = localStorage.getItem("puntosTotal");

if (!puntosTotal) {
  puntosTotal = 0;
}

let sumaTotalElement = document.getElementById("sumaTotal");
sumaTotalElement.textContent = "Suma total: " + puntosTotal;
