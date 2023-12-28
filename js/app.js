const gamePanel = document.querySelector("#player-entry");
const acceptName = document.querySelector("#enter-name");
const playerName = document.querySelector("#player-name");
const userName = document.querySelector("#username");

acceptName.onclick = function () {
  gamePanel.style.display = "none";
  playerName.innerText = userName.value;
};
