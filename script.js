const startEl = document.getElementById("startBtn");
const btn1El = document.getElementById("btn1");
const btn2El = document.getElementById("btn2");
const btn3El = document.getElementById("btn3");
const btn4El = document.getElementById("btn4");
const btnSet = [btn1El, btn2El, btn3El, btn4El];
const endMsg = document.getElementById("msg");
let btnIdx = 0;
let level = 1;
let userOrder = [];
let compOrder = [];

//Random number generator
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let randVal = getRandomInt(3);

function startGame(cb) {
  userOrder = [];
  compOrder = [];
  for (let i = 0; i < level; i++) {
    btnSet[randVal].style.opacity = "100%";
    compOrder.push(randVal);
    // setTimeout(cb, 500);
  }
  //   if (compOrder === userOrder && level < 100) {
  //     level++;
  //   } else if (level === 100) {
  //     winMessage();
  //   } else {
  //     lossMessage();
  //   }
}

function lossMessage() {
  endMsg.innerHTML = `You reached level ${level}. Click on START button to play again.`;
}

function winMessage() {
  endMsg.innerHTML = `Congratulations! You have reached level 100. You have an exceptional memory!`;
}

function getUserClick(bIdx) {
  userOrder.push(bIdx);
  btnSet[bIdx].style.opacity = "100%";
}

startEl.addEventListener("click", startGame);

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
