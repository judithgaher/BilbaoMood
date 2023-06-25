let puntos = localStorage.getItem("puntos");

if (!puntos) {
  puntos = 0;
}
puntos = parseInt(puntos);


let mensajeElement = document.getElementById("mensaje");

let imagenElement = document.getElementById("imagenResultado");

  if (puntos <= 15) {
      mensajeElement.textContent = "Película a la vista";
      imagenElement.src = "/imagenes/logo.svg";
      imagenElement.alt = "Olé";
    }  
    else if ((puntos > 15 && puntos <= 20)) {
      mensajeElement.textContent = "Seriaza";
      imagenElement.src = "/imagenes/logo.svg";
      imagenElement.alt = "Mierka";
    } 
    else if ((puntos > 20 && puntos <= 25)) {
      mensajeElement.textContent = "Tetro de calle!";
      imagenElement.src = "/imagenes/eventos/evento1.jpeg";
      imagenElement.alt = "Mierka";
    } 
    else if ((puntos > 25 && puntos <= 30)) {
      mensajeElement.textContent = "Mira una moderna en Okela";
      imagenElement.src = "/imagenes/logo.svg";
      imagenElement.alt = "Mierka";
    } 
    else if ((puntos > 30 && puntos <= 35)) {
      mensajeElement.textContent = "Demaio";
      imagenElement.src = "/imagenes/logo.svg";
      imagenElement.alt = "Mierka";
    } 
    else if ((puntos > 35 && puntos <= 40)) {
      mensajeElement.textContent = "Ramen Simoyi";
      imagenElement.src = "/imagenes/logo.svg";
      imagenElement.alt = "Mierka";
    } 
    else if ((puntos > 40 && puntos <= 45)) {
      mensajeElement.textContent = "Demaio";
      imagenElement.src = "/imagenes/logo.svg";
      imagenElement.alt = "Mierka";
    } 
    else {
      mensajeElement.textContent = "Concert en el muelle!";
      imagenElement.src = "/imagenes/logo.svg";
      imagenElement.alt = "Mierka";
    }

    localStorage.setItem("puntos", valor);

