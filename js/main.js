"use strict";

const select = document.querySelector(".js_select");
const btn = document.querySelector(".js_btn");
const message = document.querySelector(".js_text");


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
function goodStrenght() {
    const pelososStrenght = document.querySelector(".js_Pelosos");
    pelososStrenght = 1;

    const sureñosBuenosStrenght = document.querySelector(".js_SureñosBuenos");
    sureñosBuenosStrenght = 2;

    const enanosStrenght = document.querySelector(".js_Enanos");
    enanosStrenght = 3;

    const númenóreanosStrenght = document.querySelector(".js_Númenóreanos");
    númenóreanosStrenght = 4;

    const elfosStrenght = document.querySelector(".js_Elfos");
    elfosStrenght = 5;

    return goodStrenght()
}

function badStrenght() {
    const randonNumber = getRandomNumber(5);
    console.log(getRandomNumber(5));
    const sureñosMalosStrenght = 2;
    const orcosStrenght = 2;
    const goblins = 2;
    const huargosStrenght = 3;
    const trollsStrenght = 5;
    
}


function compareStrenght() {
    const saintStrenght = goodStrenght();
    const evilStrenght = badStrenght();

    if (saintStrenght > evilStrenght) {
        message.innerHTML = "Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";  
    } else if (saintStrenght < evilStrenght) {
        message.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena.";
    } else {
        message.innerHTML = "Empate."
    } 
}


function handleClick(e) {
    e.preventDefault();
    compareStrenght();
}

btn.addEventListener("click", handleClick);