const startEl = document.getElementById("startBtn");
const btn1El = document.getElementById("btn1");
const btn2El = document.getElementById("btn2");
const btn3El = document.getElementById("btn3");
const btn4El = document.getElementById("btn4");
const btnSet = [btn1El, btn2El, btn3El, btn4El];
let btnIdx = 0;

function btnOrder(cb) {
  btnSet.forEach((el) => (el.style.opacity = "100%"));
  btnSet[btnIdx].style.opacity = "100%";

  setTimeout(cb, 300);
}
