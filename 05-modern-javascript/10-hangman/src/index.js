import Hangman from "./hangman";
import { getPuzzle } from "./requests";

const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let game1;

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
});

const startGame = async () => {
  const randomNum = Math.floor(Math.random() * (10 - 5 + 1) + 5);
  const puzzle = await getPuzzle(randomNum);
  game1 = new Hangman(puzzle, 5);
  render();
};

const render = () => {
  puzzleEl.innerHTML = ``;
  guessesEl.textContent = game1.statusMessage;

  game1.puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();
