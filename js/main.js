"use strict";

const select = document.querySelector(".js_select");
const btn = document.querySelector(".js_btn");
const message = document.querySelector(".js_text");

const sureñosMalosStrenght = 2;
const orcosStrenght = 2;
const goblins = 2;
const huargosStrenght = 3;
const trollsStrenght = 5;


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
function goodStrenght() {
    pelososStrenght = 1;
    sureñosBuenosStrenght = 2;
    enanosStrenght = 3;
    númenóreanosStrenght = 4;
    elfosStrenght = 5;
}

function badStrenght() {
    sureñosMalosStrenght = 2;
    orcosStrenght = 2;
    goblins = 2;
    huargosStrenght = 3;
    trollsStrenght = 5;
    
}


function compareStrenght() {
    const randonNumber = getRandomNumber(5);
    const saintStrenght = goodStrenght();
    const evilStrenght = badStrenght();

    if(saintStrenght > evilStrenght) {
        message.innerHTML = "Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";
        
    } else if (saintStrenght < evilStrenght) {
        message.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena.";

    } else if (saintStrenght === evilStrenght) {
        message.innerHTML = "Empate."
    }


}


function handleClick(e) {
    e.preventDefault();
    compareStrenght();
}

btn.addEventListener("click", handleClick);