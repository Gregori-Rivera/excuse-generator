/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["Mi vecino", "Mi Comadre", "Su Perro", "Mi Loro"];
let action = ["se comio", "perdió", "encontró"];
let what = ["las llaves", "la torta", "la cartera"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

window.onload = function() {
  let excusa = document.getElementById("excuse");
  excusa.innerHTML = `${who[getRandomInt(who.length)]} 
  ${action[getRandomInt(action.length)]} 
  ${what[getRandomInt(what.length)]} 
`;
};
