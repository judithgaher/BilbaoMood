let preguntas = [
  {
    id : 1,
    pregunta: "¿En qué mood estás hoy?",
    respuestas: ["a", "b", "c"]
  },
  {
    id : 2,
    pregunta: "Elige aventura",
    respuestas: ["a", "b", "c", "d"]
  },
  {
    id : 3,
    pregunta: "¿Dónde te apetece más?",
    respuestas: ["a", "b"]
  },
  {
    id : 4,
    pregunta: "¿A qué hora estás hoy?",
    respuestas: ["a", "b", "c"]
  },
  {
    id : 5,
    pregunta: "¿Con quién compartirás tu tiempo?",
    respuestas: ["a", "b", "c"]
  },
];


// const pregs= document.querySelectorAll(".preguntadera");

// for (let i=0; i<pregs.length; i++ ){
//   console.log(pregs.length);  

//   pregs[i].addEventListener("load",()=>{
//     // console.log(i);
//   });
// }
const respuestas = [];

const elementosRespuestas = document.querySelectorAll('.preguntadera');


// elementosRespuestas.forEach(function(elemento) {
//   const valorRespuesta = elemento.id;
//   respuestas.push(valorRespuesta);
//   addEventListener("click",(e)=>{
//     let answers= e.target.value
//     console.log(answers);
//   } )

// });
console.log(respuestas);
function valorRespuesta (e){
  let a= e;
  respuestas.push=e;
  console.log(respuestas)
}


 
