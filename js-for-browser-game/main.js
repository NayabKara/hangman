
//how to get random workd from array disney villians

let disneyVillains = ["ursula", "gaston", "scar"];
let disneyVillainsIndex = Math.floor(Math.random() * disneyVillains.length);
disneyVillains[disneyVillainsIndex];



//hangman dom elements for head, body legs and arms (6) need function for the to appear if ansers are incorrect 

const headEl = document.getElementById("head");
console.log(headEl);


const bodyEl= document.getElementById("body");
console.log(bodyEl);

const leftLegEl = document.getElementById("leftleg");
console.log(leftLegEl);

const rightLegEl = document.getElementById("rightleg");
console.log(rightLegEl);

const leftArmEl = document.getElementById("leftarm");
console.log(leftArmEl);

const rightArmEl = document.getElementById("rightarm");
console.log(rightArmEl);


//puzzle area will be determined from the above- have to connect the random word to number of blanks


const puzzleEl = document.getElementById("puzzle");
console.log(puzzleEl);
puzzleEl.style.color = "green";


const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click",function() {
  console.log(inputEl.value)
  headEl.classList.remove("hidden");
} )






