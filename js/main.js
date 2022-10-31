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

function compareStrenght() {
    const randonNumber = getRandomNumber(5);
    const pelososStrenght = document.querySelector(".js_Pelosos");
    pelososStrenght = 1;

    const sureñosBuenosStrenght = document.querySelector(".js_Pelosos");
    sureñosBuenosStrenght = 2;

    const enanosStrenght = document.querySelector(".js_Pelosos");
    enanosStrenght = 3;

    const númenóreanosStrenght = document.querySelector(".js_Pelosos");
    númenóreanosStrenght = 4;

    const elfosStrenght = document.querySelector(".js_Pelosos");
    elfosStrenght = 5;

    if()


}


function handleClick(e) {
    e.preventDefault();
}