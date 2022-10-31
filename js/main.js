"use strict";

const select = document.querySelector(".js_select");
const btn = document.querySelector(".js_btn");
const message = document.querySelector(".js_text");
const userPointsElement = document.querySelector(".js_jugadora");
const pcPointsElement = document.querySelector(".js_pc");


let userPoints = 0;
let PCPoints = 0;
let moves = 0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
function goodStrenght() {
    const select = document.querySelector(".js_select");
    return parseInt(select.value)
}

function badStrenght() {
    const randomNumber = getRandomNumber(5);
    if(randomNumber === 1) {
        return 2
    }
    if(randomNumber === 2) {
        return 2
    }
    if(randomNumber === 3) {
        return 2
    }
    if(randomNumber === 4) {
        return 3
    }
    if(randomNumber === 5) {
        return 5
    }
    
}


function compareStrenght() {
    const saintStrenght = goodStrenght();
    const evilStrenght = badStrenght();
    console.log(saintStrenght);
    console.log(evilStrenght);
    if (saintStrenght > evilStrenght) {
        message.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena.";  
        userPoints++
    } else if (saintStrenght < evilStrenght) {
        message.innerHTML = "Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";
        pcPoints++
    } else {
        message.innerHTML = "Empate."
    } 
}   

function renderScore() {
    userPointsElement.innerHTML = `Jugadora: ${userPoints}`;
    pcPointsElement.innerHTML = `PC: ${pcPoints}`;
}

function handleClick(e) {
    e.preventDefault();
    compareStrenght();
    renderScore();
}

btn.addEventListener("click", handleClick);


//BONUS
/*Calcular los puntos de la usuaria y del ordenador (contador user, contador PC)
-Contar los 10 movimientos : contador moves
-Ocultar botón y mostrar otro: 
-