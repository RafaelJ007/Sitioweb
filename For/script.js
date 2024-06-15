// Script para el carrusel de imágenes
const carrusel = document.querySelector('.carrusel');
const imagenes = document.querySelectorAll('.imagen');

let contador = 0;
const intervalo = 3000;

function siguienteImagen() {
    contador++;
    if (contador >= imagenes.length) {
        contador = 0;
    }
    actualizarImagen();
}

function actualizarImagen() {
    imagenes.forEach(imagen => {
        imagen.style.transform = `translateX(-${contador * 100}%)`;
    });
}

setInterval(siguienteImagen, intervalo);
