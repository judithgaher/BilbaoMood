let puntos = localStorage.getItem("puntos");

if (!puntos) {
  puntos = 0;
}
puntos = parseInt(puntos);


let mensajeElement = document.getElementById("mensaje");
let submensajeElement= document.getElementById("submensaje");

let imagenElement = document.getElementById("imagenResultado");

  if (puntos <= 15) {
      mensajeElement.innerHTML = "Película a la vista";
      submensajeElement.innerHTML="19.00 HRS - ANTZOKI"
      imagenElement.src = "/imagenes/resultado1.png";
      imagenElement.alt = "Imagen de dos mujeres en el ring";
    }  
    else if ((puntos > 15 && puntos <= 20)) {
      mensajeElement.innerHTML = "Seriaza";
      submensajeElement.innerHTML="19.00 HRS - ANTZOKI"
      imagenElement.src = "/imagenes/logo.svg";
      imagenElement.alt = "Imagen de dos mujeres en el ring";
    } 
    else if ((puntos > 20 && puntos <= 25)) {
      mensajeElement.innerHTML = "Tetro de calle!";
      submensajeElement.innerHTML="19.00 HRS - ANTZOKI"
      imagenElement.src = "/imagenes/evento1.jpeg";
      imagenElement.alt = "Imagen de dos mujeres en el ring";
    } 
    else if ((puntos > 25 && puntos <= 30)) {
      mensajeElement.innerHTML = "Mira una moderna en Okela";
      submensajeElement.innerHTML="19.00 HRS - ANTZOKI"
      imagenElement.src = "/imagenes/logo.svg";
      imagenElement.alt = "Imagen de dos mujeres en el ring";
    } 
    else if ((puntos > 30 && puntos <= 35)) {
      mensajeElement.innerHTML = "Demaio";
      submensajeElement.innerHTML="19.00 HRS - ANTZOKI"
      imagenElement.src = "/imagenes/logo.svg";
      imagenElement.alt = "Imagen de dos mujeres en el ring";
    } 
    else if ((puntos > 35 && puntos <= 40)) {
      mensajeElement.innerHTML= "Ramen Simoyi";
      submensajeElement.innerHTML="19.00 HRS - ANTZOKI"
      imagenElement.src = "/imagenes/logo.svg";
      imagenElement.alt = "Imagen de dos mujeres en el ring";
    } 
    else if ((puntos > 40 && puntos <= 45)) {
      mensajeElement.innerHTML = "Demaio";
      submensajeElement.innerHTML="19.00 HRS - ANTZOKI"
      imagenElement.src = "/imagenes/logo.svg";
      imagenElement.alt = "Imagen de dos mujeres en el ring";
    } 
    else {
      mensajeElement.innerHTML="Concierto de <br> The Covenant + Lodor + Fufu";
      submensajeElement.innerHTML="19.00 HRS - ANTZOKI";
      imagenElement.src = "/imagenes/resultado1.png";
      imagenElement.alt = "Imagen de dos mujeres en el ring";
    }

    localStorage.setItem("puntos", valor);

