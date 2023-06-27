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
      submensajeElement.innerHTML=
      imagenElement.src = "/imagenes/resultado1.png";
      imagenElement.alt = "Olé";
    }  
    else if ((puntos > 15 && puntos <= 20)) {
      mensajeElement.innerHTML = "Seriaza";
      submensajeElement.innerHTML=
      imagenElement.src = "/imagenes/logo.svg";
      imagenElement.alt = "Mierka";
    } 
    else if ((puntos > 20 && puntos <= 25)) {
      mensajeElement.innerHTML = "Tetro de calle!";
      submensajeElement.innerHTML=
      imagenElement.src = "/imagenes/evento1.jpeg";
      imagenElement.alt = "Mierka";
    } 
    else if ((puntos > 25 && puntos <= 30)) {
      mensajeElement.innerHTML = "Mira una moderna en Okela";
      submensajeElement.innerHTML=
      imagenElement.src = "/imagenes/logo.svg";
      imagenElement.alt = "Mierka";
    } 
    else if ((puntos > 30 && puntos <= 35)) {
      mensajeElement.innerHTML = "Demaio";
      submensajeElement.innerHTML=
      imagenElement.src = "/imagenes/logo.svg";
      imagenElement.alt = "Mierka";
    } 
    else if ((puntos > 35 && puntos <= 40)) {
      mensajeElement.innerHTML= "Ramen Simoyi";
      submensajeElement.innerHTML=
      imagenElement.src = "/imagenes/logo.svg";
      imagenElement.alt = "Mierka";
    } 
    else if ((puntos > 40 && puntos <= 45)) {
      mensajeElement.innerHTML = "Demaio";
      submensajeElement.innerHTML=
      imagenElement.src = "/imagenes/logo.svg";
      imagenElement.alt = "Mierka";
    } 
    else {
      mensajeElement.innerHTML="Concierto de The Covenant + Lodor + Fufu";
      submensajeElement.innerHTML="19.00 hrs- Antzoki";
      imagenElement.src = "/imagenes/resultado1.png";
      imagenElement.alt = "Mierka";
    }

    localStorage.setItem("puntos", valor);

