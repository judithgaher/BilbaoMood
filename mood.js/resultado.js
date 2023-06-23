// Obtener la puntuación acumulada de la memoria del usuario
var puntos = localStorage.getItem("puntos");

// Si no hay ningún valor almacenado, establecer los puntos en 0
if (!puntos) {
  puntos = 0;
}

// Convertir el valor a un número entero
puntos = parseInt(puntos);

// Obtener el elemento <p> por su ID
var mensajeElement = document.getElementById("mensaje");

// Obtener el elemento <img> por su ID
var imagenElement = document.getElementById("imagenResultado");

// Comprobar si la puntuación es mayor a 20 y mostrar el mensaje y la imagen correspondientes
if (puntos < 15) {
  mensajeElement.textContent = "Película a la vista";
  imagenElement.src = "/imagenes/logo.svg";
  imagenElement.alt = "Olé";
} else if (puntos < 20) {
  mensajeElement.textContent = "Seriaza";
  imagenElement.src = "/imagenes/logo.svg";
  imagenElement.alt = "Mierka";
} else if (puntos < 25) {
  mensajeElement.textContent = "Tetro de calle!";
  imagenElement.src = "/imagenes/eventos/evento1.jpeg";
  imagenElement.alt = "Mierka";
} else if (puntos < 30) {
  mensajeElement.textContent = "Mira una moderna en Okela";
  imagenElement.src = "/imagenes/logo.svg";
  imagenElement.alt = "Mierka";
} else if (puntos < 35) {
  mensajeElement.textContent = "Demaio";
  imagenElement.src = "/imagenes/logo.svg";
  imagenElement.alt = "Mierka";
} else if (puntos < 40) {
  mensajeElement.textContent = "Ramen Simoyi";
  imagenElement.src = "/imagenes/logo.svg";
  imagenElement.alt = "Mierka";
} else if (puntos < 45) {
  mensajeElement.textContent = "Demaio";
  imagenElement.src = "/imagenes/logo.svg";
  imagenElement.alt = "Mierka";
} else {
  mensajeElement.textContent = "Concert en el muelle!";
  imagenElement.src = "/imagenes/logo.svg";
  imagenElement.alt = "Mierka";
}
