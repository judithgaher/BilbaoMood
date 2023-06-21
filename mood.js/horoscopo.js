
// const volver= document.getElementById("back");
// volver.addEventListener("click",()=> {
//     location.href= "/index.html"
// })


document.getElementById("enviar").addEventListener("click", function() {
    let dia = document.getElementById("dia").value;
    let fecha = document.getElementById("fecha").value;
    
    let fechaObj = new Date(fecha);
    let mes = fechaObj.getMonth() + 1; 
    let horoscopo = obtenerHoroscopo(dia, mes);
 
    let resultadoElement = document.getElementById("resultado");
    let resultadoElement2 = document.getElementById("resultado-horos");
   
    resultadoElement.innerHTML = "Bienvenide <br>" + horoscopo;
    resultadoElement2.innerHTML = horoscopo;
  });



  
  function obtenerHoroscopo(dia, mes) {
    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
      return "Acuario";
      } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
      return "Piscis";
    } else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        return "Aries";
      } else if ((mes === 4 && dia >= 21) || (mes === 5 && dia <= 20)) {
         return "Tauro";
      } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 21)) {
         return "Géminis";
      } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
         return "Cáncer";
      } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
         return "Leo";
      } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
         return "Virgo";
      } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        return "Libra";
      } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
         return "Escorpio";
      } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
         return "Sagitario";
       }else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
         return "Capricornio";
      }
    return "Ofiuco";
  }

