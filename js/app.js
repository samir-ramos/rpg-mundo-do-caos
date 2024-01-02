const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const raceButtons = document.querySelectorAll("#race__selection .btn__race");
let race = null;

const gameHistory = document.getElementById("game__history");
const playerEntry = document.getElementById("player__entry");
const gameActions = document.getElementById("game__actions");
const userName = document.getElementById("username");
const invalidEntry = document.getElementById("invalid__entry");

function starGame() {
  gameHistory.style.display = "grid";
  playerEntry.style.display = "none";
  gameActions.style.display = "none";
  button1.innerText = "ENTRAR";
  button2.innerText = "INFORMAÇÕES";
  button3.innerText = "";
}

starGame();

button1.addEventListener("click", function () {
  if (gameHistory.style.display === "grid") {
    gameHistory.style.display = "none";
    playerEntry.style.display = "grid";
    gameActions.style.display = "none";
    button1.innerText = "ACEITAR";
    button2.innerText = "LIMPAR";
    button3.innerText = "VOLTAR";
  } else if (playerEntry.style.display === "grid") {
    if (
      userName.value == null ||
      userName.value == "" ||
      userName.value == undefined
    ) {
      gameHistory.style.display = "none";
      playerEntry.style.display = "grid";
      gameActions.style.display = "none";
      invalidEntry.style.display = "block";
    } else {
      gameHistory.style.display = "none";
      playerEntry.style.display = "grid";
      gameActions.style.display = "none";
      button1.innerText = "ACEITAR";
      button2.innerText = "LIMPAR";
      button3.innerText = "VOLTAR";
    }
  }
});

function choseRace(button) {}
