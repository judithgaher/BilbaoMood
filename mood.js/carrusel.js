
const carrusel = document.getElementById('carrusel');
const botonSiguiente = document.getElementById('siguiente');
const botonAnterior = document.getElementById('anterior');

const totalTarjetas = 9;
const tarjetasPorConjunto = 3;


let indiceConjunto = 0;

botonSiguiente.addEventListener('click', function() {
    mostrarSiguienteConjunto();
});


botonAnterior.addEventListener('click', function() {
    mostrarConjuntoAnterior();
});


function mostrarSiguienteConjunto() {
    ocultarConjunto(indiceConjunto);
    indiceConjunto = (indiceConjunto + 1) % Math.ceil(totalTarjetas / tarjetasPorConjunto);
    mostrarConjunto(indiceConjunto);
}

function mostrarConjuntoAnterior() {
    ocultarConjunto(indiceConjunto);
    indiceConjunto = (indiceConjunto - 1 + Math.ceil(totalTarjetas / tarjetasPorConjunto)) % Math.ceil(totalTarjetas / tarjetasPorConjunto);
    mostrarConjunto(indiceConjunto);
}


function ocultarConjunto(indice) {
    const inicio = indice * tarjetasPorConjunto;
    const fin = inicio + tarjetasPorConjunto;
    for (let i = inicio; i < fin; i++) {
        carrusel.children[i].style.display = 'none';
    }
}

function mostrarConjunto(indice) {
    const inicio = indice * tarjetasPorConjunto;
    const fin = inicio + tarjetasPorConjunto;
    for (let i = inicio; i < fin; i++) {
        carrusel.children[i].style.display = 'block';
    }
}

mostrarConjunto(indiceConjunto);
