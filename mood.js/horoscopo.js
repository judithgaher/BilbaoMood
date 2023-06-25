document.getElementById("enviar").addEventListener("click", function () {
  let dia = document.getElementById("dia").value;
  let fecha = document.getElementById("fecha").value;

  let fechaObj = new Date(fecha);
  let mes = fechaObj.getMonth() + 1;
  let horoscopo = obtenerHoroscopo(dia, mes);

  let resultadoElement = document.getElementById("resultado");;

  resultadoElement.innerHTML = horoscopo;
});

function obtenerHoroscopo(dia, mes) {
  if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
    return "Acuario <br> ¡Te vas de cena!";
  } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
    return "Piscis <br> ¡Te vas de expo!";
  } else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
    return "Aries <br> ¡Te vas al cine!";
  } else if ((mes === 4 && dia >= 21) || (mes === 5 && dia <= 20)) {
    return "Tauro <br> ¡Hoy sofá y manta!";
  } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 21)) {
    return "Géminis <br> ¡Te vas al teatro!";
  } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
    return "Cáncer <br> ¡Te vas al monte";
  } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
    return "Leo <br> ¡Te vas de fiesta!";
  } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
    return "Virgo <br> ¡Te vas de vermutheque!";
  } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
    return "Libra <br> ¡Te vas al spa";
  } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
    return "Escorpio <br> ¡Te vas a una charla!";
  } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
    return "Sagitario <br> ¡día de lectura!";
  } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
    return "Capricornio <br> ¡Te vas de concert!";
  }
  return "Ofiuco <br> ¡Te vas de concert! ";
}

function mostrarFechaHora() {
  var fechaHora = new Date();
  var fecha = fechaHora.toLocaleDateString();
  var hora = fechaHora.toLocaleTimeString();
  document.getElementById("fechaHora").innerHTML = "Fecha: " + fecha + " <br>Hora: " + hora;
}

setInterval(mostrarFechaHora, 1000);
