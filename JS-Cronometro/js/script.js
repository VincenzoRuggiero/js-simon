const tempo = document.getElementById("tempo");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

let seconds = 0;
let timer;

start.addEventListener("click", function () {
  timer = setInterval(timeUp, 1000);
});

pause.addEventListener("click", function () {
  clearInterval(timer);
});

reset.addEventListener("click", function () {
  clearInterval(timer);
  seconds = 0;
  tempo.innerHTML = "";
});

function timeUp() {
  tempo.innerHTML = seconds++;
}
