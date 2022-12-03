const buttonElem = document.getElementById("button");

let number = 0;
let stop;
buttonElem.addEventListener("click", function () {
  add();
  if (number > 10) {
    let stop = setTimeout(add, 3000);
  }
});

function add() {
  number++;
  buttonElem.innerHTML = `# ${number}`;
}
