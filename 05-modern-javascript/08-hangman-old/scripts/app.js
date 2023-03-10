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

// getPuzzle("2")
//   .then((puzzle) => console.log(puzzle))
//   .catch((err) => console.log(`Error: ${err}`));

// _getPuzzle("2", (error, puzzle) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(puzzle);
//   }
// });

// const puzzle = getPuzzleSync();
// console.log(puzzle);

// console.log("Do something else");

// restcountries.eu/rest/v2/all

// const countryCode = "TR";
// const countryRequest = new XMLHttpRequest();

// countryRequest.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText);
//     const country = data.find((country) => country.alpha2Code === countryCode);
//     console.log(country.name);
//   }
// });

// countryRequest.open("GET", `${proxy}http://restcountries.eu/rest/v2/all`);
// countryRequest.send();

console.log("------------------");

const getLocation = async () => {
  const response = await fetch(
    "https://ipinfo.io/json?token=c13c70deb37ec6",
    {}
  );
  return response.status === 200
    ? response.json()
    : new Error("Unable to fetch the location.");
};

getLocation()
  .then((data) =>
    console.log(
      `City: ${data.city}, Region: ${data.region}, Country: ${data.country}`
    )
  )
  .catch((err) => console.log(err));
