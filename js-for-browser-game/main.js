
//how to get random word from array disney villians

let disneyVillains = ["ursula", "gaston", "scar"];
let disneyVillainsIndex = Math.floor(Math.random() * disneyVillains.length);
let bodyParts= document.querySelectorAll(".hidden");
let secretWord = disneyVillains[disneyVillainsIndex];
let numberOfGuesses= 0;
let maxNumOfGuesses = bodyParts.length
let startbutton = document.getElementById("startbutton")
let inputEl = document.querySelector("input");
let submitButton = document.getElementById("submitguess");
let guess = "";
let blanksEl = document.getElementById ("blanks")
let winMessage = document.getElementById("winmessage")
let won = false;

function generateBlanks () {
  for (let i = 0; i <secretWord.length; i++); {
    if ( secretWord = disneyVillains[0]) {
      blanksEl.innerHTML =  "__ __ __ __ __ __";
    } else if (secretWord = disneyVillains[1]) {
      blanksEl.innerHTML =  "__ __ __ __ __ __";
    } else if (secretWord = disneyVillains[2]) 
    blanksEl.innerHTML =  "__ __ __ __";
  }
  }
generateBlanks(); 




submitButton.addEventListener("click", function(){
if ((numberOfGuesses >= maxNumOfGuesses) || (won === true)) return
  guess = inputEl.value;
  console.log(guess);
  let arr = secretWord.split("");
  let found = false;
  let blanks = blanksEl.innerHTML.split(" ");
  //for loop for checking guesses for letters
  for (let i = 0; i<secretWord.length; i++){
    if (arr[i] == guess) {
      blanks = blanksEl.innerHTML.split(" ")
      blanks[i] = guess
      blanksEl.innerHTML= blanks.join(" ")
      found = true;
    }
  }
  if (blanks.every((el, i) => el === arr[i])) {
    console.log("you win")
    won = true
    winMessage.innerHTML = "You win!"
  }

  // for loop checking win
  if (found === false) {
    bodyParts[numberOfGuesses].classList.remove("hidden");
    numberOfGuesses++
    if (numberOfGuesses >= maxNumOfGuesses) {
      winMessage.innerHTML= "re-watch your movies"
    }
  }
 
})




/*function guessSecretWord () {
 
  for (let input= null; input = secretWord.length; input++); {
    if (secretWord= disneyVillains[0]) {
      input = ("u", "r", "s", "u", "l", "a") ;
    } else {
      headEl.classList.remove("hidden")
      bodyEl.classList.remove("hidden")
    }
  }
}

function guessSecretWord () {

  for (let input= null; input = secretWord.length; input++); {
    if (secretWord= disneyVillains[1]) {
      input = ("g", "a", "s", "t", "o", "n") ;
    } else {
      headEl.classList.remove("hidden")
      bodyEl.classList.remove("hidden")
    }
  }
}

function guessSecretWord () {

  for (let input= null; input = secretWord.length; input++); {
    if (secretWord= disneyVillains[2]) {
      input = ("s", "c", "a", "r") ;
    } else {
      headEl.classList.remove("hidden")
      bodyEl.classList.remove("hidden")
    }
  }
}*/
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





/*buttonEl.addEventListener("click",function() {
  console.log(inputEl.value)
  headEl.classList.remove("hidden");
  
} )*/








//recording chances- you get a maximum of 6 wrong answers before game is over,
//the game continues so long as wrong answers is less than 6 (wrong anwers < 6)
//if the guess is correct, record in puzzle area
//if the guess is incorrect, record 5 chances remaining - decrement function






