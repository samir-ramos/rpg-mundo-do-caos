const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const raceButtons = document.querySelectorAll("#race__selection .btn__race");
const classButtons = document.querySelectorAll("#class__selection .btn__class");
const gameHistory = document.getElementById("game__history");
const playerEntry = document.getElementById("player__entry");
const gameActions = document.getElementById("game__actions");
const userName = document.getElementById("username");
const playerName = document.getElementById("player__name");
const invalidEntry = document.getElementById("invalid__entry");
const actionsZone = document.getElementById("action__zone");

let raceSelection = null;
let classSelection = null;
let currentWeapon = "";
let gameOn = true;

const storeList = [
  {
    name: "Poção",
    cost: 10,
    quantity: 1,
    description: "Cura 3% dos pontos de vida.",
    type: "potion",
    power: 0.03,
  },
  {
    name: "SuperPoção",
    cost: 15,
    quantity: 1,
    description: "Cura 5% dos pontos de vida.",
    type: "potion",
    power: 0.05,
  },
  {
    name: "Faca",
    cost: 5,
    quantity: 1,
    description: "6 pontos de dano",
    type: "weapon",
    power: 6,
  },
  {
    name: "Espada Pequena",
    cost: 7,
    quantity: 1,
    description: "9 pontos de dano",
    type: "weapon",
    power: 9,
  },
  {
    name: "Espada Longa",
    cost: 12,
    quantity: 1,
    description: "15 pontos de dano",
    type: "weapon",
    power: 15,
  },
  {
    name: "Machado",
    cost: 16,
    quantity: 1,
    description: "22 pontos de dano",
    type: "weapon",
    power: 22,
  },
];

function startGame() {
  gameHistory.style.display = "grid";
  playerEntry.style.display = "none";
  gameActions.style.display = "none";
  button1.innerText = "ENTRAR";
  button2.innerText = "INFORMAÇÕES";
  button3.innerText = "CONFIGURAÇÕES";
}

// Store configurations

function createItemStore(item) {
  const div = document.createElement("div");

  for (const property in item) {
    const p = document.createElement("p");
    p.textContent = `${property}: ${item[property]}`;
    p.style.fontFamily = "Courier Prime";
    p.style.fontSize = "0.5rem";
    div.appendChild(p);
  }

  return div;
}

function createListStore() {
  actionsZone.innerHTML = "";
  actionsZone.style.height = "100%";
  actionsZone.style.display = "grid";
  actionsZone.style.gridTemplateColumns = "repeat(2, 1fr)";
  actionsZone.style.gridAutoRows = "auto";
  actionsZone.style.rowGap = "0.3rem";

  const p = document.createElement("p");
  p.textContent = "Toque no item que deseja comprar";
  p.style.fontFamily = "Courier Prime";
  p.style.fontSize = "0.55rem";
  p.style.color = "var(--ft-dark-blue)";
  p.style.backgroundColor = "var(--ft-yellow)";
  p.style.alignSelf = "start";
  p.style.gridColumn = "1/3";
  actionsZone.appendChild(p);

  storeList.forEach((item) => {
    const div = createItemStore(item);
    div.style.border = "1px solid #ffffff";
    div.style.borderRadius = "0.5rem";
    div.style.padding = "0.5rem";
    actionsZone.appendChild(div);
  });
}

startGame();

button1.addEventListener("click", function () {
  if (gameHistory.style.display === "grid") {
    gameHistory.style.display = "none";
    playerEntry.style.display = "grid";
    button1.innerText = "ACEITAR";
    button2.innerText = "LIMPAR";
    button3.innerText = "VOLTAR";
  } else if (playerEntry.style.display === "grid") {
    if (
      userName.value === "" ||
      raceSelection === null ||
      classSelection === null
    ) {
      invalidEntry.style.display = "block";
    } else {
      playerEntry.style.display = "none";
      gameActions.style.display = "grid";
      button1.innerText = "LOJA";
      button2.innerText = "FLORESTA";
      button3.innerText = "MISSÃO";
      playerName.innerText = userName.value;
    }
  } else if (
    gameActions.style.display === "grid" &&
    button1.innerText === "LOJA"
  ) {
    createListStore(storeList);
  }
});

raceButtons.forEach((button) => {
  button.addEventListener("click", function () {
    raceButtons.forEach((btn) => {
      btn.classList.add("race__unchecked");
    });
    button.classList.remove("race__unchecked");
    raceSelection = button.value;
  });
});

classButtons.forEach((button) => {
  button.addEventListener("click", function () {
    classButtons.forEach((btn) => {
      btn.classList.add("class__unchecked");
    });
    button.classList.remove("class__unchecked");
    classSelection = button.value;
  });
});
