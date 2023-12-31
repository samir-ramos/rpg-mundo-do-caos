const gameHistory = document.getElementById("game__history");
const playerEntry = document.getElementById("player__entry");
const gameActions = document.getElementById("game__actions");
const namePicked = document.getElementById("username");
const playerName = document.getElementById("player__name");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

button1.addEventListener("click", function () {
  if (gameHistory.style.display !== "none") {
    gameHistory.style.display = "none";
    playerEntry.style.display = "grid";
    gameActions.style.display = "none";
    button1.innerText = "ACEITAR";
    button2.innerText = "APAGAR";
    button3.innerText = "VOLTAR";
  } else if (playerEntry.style.display !== "none") {
    gameHistory.style.display = "none";
    playerEntry.style.display = "none";
    gameActions.style.display = "grid";
    playerName.innerText = namePicked.value;
    button1.innerText = "LOJA";
    button1.style.backgroundColor = "salmon";
    button2.innerText = "FLORESTA";
    button2.style.backgroundColor = "darkgreen";
    button3.innerText = "MISSÃO";
    button3.style.backgroundColor = "orange";
  }
});
