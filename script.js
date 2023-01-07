const startEl = document.getElementById("startBtn");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btnSet = [btn0, btn1, btn2, btn3];

const endMsg = document.getElementById("msg");
const buttons = document.getElementsByClassName("buttons");

const board = document.getElementsByClassName("board");

let level = 1;
let userOrder = [];
let compOrder = [];
let winFlag = true;
// let counter = 0;

//Random number generator
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function lightOff(index) {
  btnSet[compOrder[index]].style.opacity = "20%";
}

function genNextLight() {
  let randVal = getRandomInt(btnSet.length);
  compOrder.push(randVal);
}

function lightOn(index) {
  btnSet[compOrder[index]].style.opacity = "100%";
}

function iDontKnow() {
  //   counter++;
  //   console.log(counter);
  //   if (counter < level) {
  //     startGame();
  //     genNextLight();
  //   } else {
  //     counter = 0;
  //   }
}

function startGame() {
  genNextLight();
  lightOn(level - 1);
  setTimeout(lightOff(level - 1), 2000);
  // lightOff();
  userTurnMessage();
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (evt) {
      userOrder.push(evt.target.getAttribute("data-id"));
      setTimeout((evt.target.style.opacity = "20%"), 2000);
      // setTimeout(lightOff(level-1), 2000);

      if (compOrder == parseInt(userOrder) && level < 100) {
        nextMsg();
        //genNextLight();
        //level++;
      } else if (level === 100) {
        winMessage();
        return;
      } else {
        lossMessage();
        winFlag = false;
      }
    });
  }
  level++;
  // await startGame();
}
// cb, 0;

async function loopGame() {
  while (winFlag) {
    await startGame();
  }
}

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

startEl.addEventListener("click", loopGame);

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
