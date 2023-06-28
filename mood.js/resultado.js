let puntos = localStorage.getItem("puntos");
if (!puntos) {
  puntos = 0;
}
puntos = parseInt(puntos);

let mensajeElement = document.getElementById("mensaje");
let submensajeElement = document.getElementById("submensaje");
let imagenElement = document.getElementById("imagenResultado");

switch (true) {
  case puntos <= 15:
    mensajeElement.innerHTML = "Película a la vista: <br> EL AGUA";
    submensajeElement.innerHTML = "Elena López Riera. <br> EN FILMIN";
    imagenElement.src = "/imagenes/resultado1.png";
    imagenElement.alt = "Imagen de dos mujeres en el ring";
    break;

  case puntos <= 20:
    mensajeElement.innerHTML = "Seriaza";
    submensajeElement.innerHTML = "19.00 HRS - ANTZOKI";
    imagenElement.src = "/imagenes/logo.svg";
    imagenElement.alt = "Imagen de dos mujeres en el ring";
    break;

  case puntos <= 25:
    mensajeElement.innerHTML = "Tetro de calle!";
    submensajeElement.innerHTML = "19.00 HRS - ANTZOKI";
    imagenElement.src = "/imagenes/evento1.jpeg";
    imagenElement.alt = "Imagen de dos mujeres en el ring";
    break;

  case puntos <= 30:
    mensajeElement.innerHTML = "Mira una moderna en Okela";
    submensajeElement.innerHTML = "19.00 HRS - ANTZOKI";
    imagenElement.src = "/imagenes/logo.svg";
    imagenElement.alt = "Imagen de dos mujeres en el ring";
    break;

  case puntos <= 35:
    mensajeElement.innerHTML = "Demaio";
    submensajeElement.innerHTML = "19.00 HRS - ANTZOKI";
    imagenElement.src = "/imagenes/logo.svg";
    imagenElement.alt = "Imagen de dos mujeres en el ring";
    break;

  case puntos <= 40:
    mensajeElement.innerHTML = "Ramen Simoyi";
    submensajeElement.innerHTML = "19.00 HRS - ANTZOKI";
    imagenElement.src = "/imagenes/logo.svg";
    imagenElement.alt = "Imagen de dos mujeres en el ring";
    break;

  case puntos <= 45:
    mensajeElement.innerHTML = "Demaio";
    submensajeElement.innerHTML = "19.00 HRS - ANTZOKI";
    imagenElement.src = "/imagenes/logo.svg";
    imagenElement.alt = "Imagen de dos mujeres en el ring";
    break;

  default:
    mensajeElement.innerHTML = "Concierto de <br> The Covenant + Lodor + Fufu";
    submensajeElement.innerHTML = "19.00 HRS - ANTZOKI";
    imagenElement.src = "/imagenes/resultado1.png";
    imagenElement.alt = "Imagen de dos mujeres en el ring";
    break;
}

// Eliminar la variable "puntos" del almacenamiento local
localStorage.removeItem("puntos");


