const btnEnter = document.querySelector("#enter__game");
const gameHistory = document.querySelector("#game__history");

const acceptName = document.querySelector("#enter__name");
const playerName = document.querySelector("#player__name");
const userName = document.querySelector("#username");
const playerEntry = document.querySelector("#player__entry");
const gameBoard = document.querySelector("#game__board");

btnEnter.onclick = function () {
  gameHistory.style.display = "none";
  playerEntry.style.display = "flex";
};

acceptName.onclick = function () {
  playerEntry.style.display = "none";
  playerName.innerText = userName.value;
  gameBoard.style.display = "flex";
};
