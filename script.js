const startEl = document.getElementById("startBtn");
const restartEl = document.getElementById("restartBtn");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btnSet = [btn0, btn1, btn2, btn3];
const nextLevelBtn = document.getElementById("nextLevelBtn");

const endMsg = document.getElementById("msg");
const buttons = document.getElementsByClassName("buttons");

const board = document.getElementsByClassName("board");

let level = 1;
let userOrder = [];
let compOrder = [];
let nextLevelFlag = true;
let userInput = -1;

//Random number generator
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function genNextLight() {
  let randVal = getRandomInt(btnSet.length);
  compOrder.push(randVal);
}

function compLightOff(index) {
  btnSet[compOrder[index]].style.opacity = "40%";
}

function compLightOn(index) {
  btnSet[compOrder[index]].style.opacity = "100%";
}

function userLightOff(index) {
  btnSet[index].style.opacity = "40%";
}

function userLightOn(index) {
  btnSet[index].style.opacity = "100%";
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function startGame() {
  nextLevelFlag = false;
  endMsg.innerHTML = "";
  userOrder = [];
  genNextLight();
  for (let i = 0; i < level; i++) {
    compLightOn(i);
    setTimeout(compLightOff, 1000, i);
    await sleep(1000);
  }
  userTurnMessage();

  for (let i = 0; i < level; i++) {
    await getUserOrder();
    userOrder.push(userInput);
  }
  // console.log(userOrder);
  correctnessCheck();

  return nextLevelFlag;
}

function getUserOrder() {
  return new Promise((resolve) => {
    Array.from(buttons).forEach(function (button) {
      button.addEventListener("click", function (evt) {
        userInput = parseInt(evt.target.getAttribute("data-id"));
        userLightOn(parseInt(evt.target.getAttribute("data-id")));
        setTimeout(() => {
          evt.target.style.opacity = "40%";
        }, 1000);
        resolve();
      });
    });
  });
}

function correctnessCheck() {
  if (
    compOrder.length == userOrder.length &&
    compOrder.every(function (v, i) {
      return v === userOrder[i];
    }) &&
    level < 100
  ) {
    nextMsg();
    level++;
    nextLevelFlag = true;
    nextLevelBtn.disabled = false;
  } else if (compOrder.length == userOrder.length && level < 100) {
    lossMessage();
  } else if (level === 100) {
    winMessage();
    // return;
  } else if (compOrder.length < userOrder.length) {
    lossMessage();
  }
}

//async function loopGame() {
//  do {
//    flag = await startGame();
//    console.log(level);
//  } while (flag);
//}

function lossMessage() {
  endMsg.innerHTML = `Highest level reached: ${level}. Click on START button to play again.`;
}

function winMessage() {
  endMsg.innerHTML = `Congratulations! You have reached level 100. You have an exceptional memory!`;
}

function nextMsg() {
  endMsg.innerHTML = `Congratulations! You cleared level ${level}.`;
}

function userTurnMessage() {
  endMsg.innerHTML = `It's your turn. Choose carefully!`;
}

function restartGame() {
  level = 1;
  compOrder = [];
  userOrder = [];
  nextLevelFlag = true;
  userInput = -1;
  startGame();
}
startEl.addEventListener("click", startGame);
restartEl.addEventListener("click", restartGame);

nextLevelBtn.addEventListener("click", startGame);
// btn1El.addEventListener("click", function () {
//   btn1El.style.opacity = "100%";
// });

// btn2El.addEventListener("click", function () {
//   btn2El.style.opacity = "100%";
// });

// btn3El.addEventListener("click", function () {
//   btn3El.style.opacity = "100%";
// });

// btn4El.addEventListener("click", function () {
//   btn4El.style.opacity = "100%";
// });

// data index for all elements.
// randomise number to fetch from Array
// if randomEl === userClick; push user clickinto Array
// level ++
// more numbers
// save
