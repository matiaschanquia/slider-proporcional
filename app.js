"use strict";

function moverSlider(posicion) {
    index = posicion;
    let porcentaje = index * (-(100 / cantData));

    contentSlider.style.transform = `translateX(${porcentaje}%)`;

}

function obtenerAncho() {
    const anchoCajaMin = 80;
    const anchoCajaMax = 50;
    const anchoPantMin = 500;
    const anchoPantMax = 1000;
    const anchoContainer = containerSlider.offsetWidth;
    console.log(anchoContainer);

    const formulaMagica = anchoCajaMin + (anchoCajaMax - anchoCajaMin) * ((anchoContainer - anchoPantMin) / (anchoPantMax - anchoPantMin));

    console.log(formulaMagica);

    return formulaMagica;
}

function cambiarAnchoContainer(anchoProporcional) {
    contentSlider.style.width = `${anchoProporcional * cantData}%`;
}

const containerSlider = document.querySelector(".container-slider")
const contentSlider = document.querySelector(".content-slider");
const containerData = document.querySelectorAll(".container-data");
let index = 0;

const cantData = containerData.length;

cambiarAnchoContainer(obtenerAncho());

containerData.forEach(item => {
    item.style.width = `calc(100% / ${cantData})`;
});

const btnIzq = document.querySelector(".btn-mover.izq");
const btnDer = document.querySelector(".btn-mover.der");

btnIzq.addEventListener("click", () => {
    if(index === 0) {
        moverSlider(cantData - 1);
    } else {
        moverSlider(index - 1);
    }
});

btnDer.addEventListener("click", () => {
    if(index === cantData - 1) {
        moverSlider(0);
    } else {
        moverSlider(index + 1);
    }
});

window.addEventListener("resize", () => {
    cambiarAnchoContainer(obtenerAncho());
});