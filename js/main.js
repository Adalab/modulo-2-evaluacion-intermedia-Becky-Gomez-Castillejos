"use strict";

const select = document.querySelector(".js_select");
const btn = document.querySelector(".js_btn");
const message = document.querySelector(".js_text");


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
    if(randomNumber === 3) {
        return 3
    }
    if(randomNumber === 4) {
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
    } else if (saintStrenght < evilStrenght) {
        message.innerHTML = "Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";
    } else {
        message.innerHTML = "Empate."
    } 
}   



function handleClick(e) {
    e.preventDefault();
    compareStrenght();
}

btn.addEventListener("click", handleClick);