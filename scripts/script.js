/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



const wordList = ["banana", "rasberr", "apple", "dragonfruit", "kiwi", "pear", "coconut", "avocado", "pineapple", "starfruit", "boysenberry"];
const startButton = document.getElementById('hangman-new-game');

guessedWordText = document.getElementById("guessed-word");
let guessedWord = [];

const guessedLettersText = document.getElementById("guessed-letters");
const guessedLetters = []; //Const keyword for arrays is stupid but this would technically be better

livesText = document.getElementById("lives-text");
lives = 6;

let word;
let wordArray;
let wordLength;
let guessIncorect;

let guessedLetter = "";

function startGame() {
  document.getElementsByClassName("hangman-game")[0].style.display = "block"
  startButton.innerText = "Game Running";
  word = wordList[Math.floor(Math.random() * wordList.length)];
  wordArray = [...word]; //I've used array spreading before but i didn't know that you can use it on strings
  //I searched string to char array to find this
  wordLength = word.length;
  console.log(word);
  livesText.innerText = lives;
  for (let i = 0; i< wordLength; i++) {
    guessedWord.push("_");
  }
  guessedWordText.innerText = guessedWord;
  console.log(wordArray);
}

function guessChar() {
  guessedLetter = document.getElementById("character-guess").value
  guessIncorrect = true;
  for (let i = 0; i < wordLength; i++) {
    if (guessedLetter === wordArray[i]) {
      guessedWord[i] = guessedLetter;
      guessIncorrect = false;
    }
  }
  if (guessIncorrect && guessedLetters.indexOf(guessedLetter) === -1) {
    lives--;
    if (lives <= 0) {
      lose();
    }
    livesText.innerText = lives;
    guessedLetters.push(guessedLetter)
    guessedLettersText.innerText = guessedLetters;
    console.log("this exed")
  }
  guessedWordText.innerText = guessedWord;
  document.getElementById("character-guess").value = '';

}

function lose() {
  document.getElementsByClassName("hangman-game")[0].style.display = "none"
  startButton.innerText = "Game Over! Play Again?"
}
/*
function changeButton() {
  const startButton = document.getElementById('hangman-new-game')
  startButton.innerHTML = "SUCCESS"
}
*/



/*
function toggleSourceView() {
  const sources = document.getElementById("sourcesDiv")
  let sourcesToggleButton = document.getElementById("sourcesButton")
  if (sources.style.display === "block") {
      sources.style.display = "none"
      sourcesToggleButton.innerHTML = "Show Sources"
  }
  else {
      sources.style.display = "block"
      sourcesToggleButton.innerHTML = "Hide Sources"
  }

}

*/