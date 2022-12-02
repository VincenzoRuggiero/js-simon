const buttonElem = document.getElementById("button");

let points = 0;

function clickCounter() {
  buttonElem.addEventListener("click", function () {
    while (points < 10) {
      points++;
      button.innerHTML = ${points};
    }

    if (points === 10) {
      button.style.backgroundColor = "red";
      button.setInterval(clickCounter, 5000);
    }
  });
  return;
}

clickCounter();