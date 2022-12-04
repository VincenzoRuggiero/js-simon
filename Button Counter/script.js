const buttonElem = document.getElementById("button");

let number = 0;

function add() {
  buttonElem.addEventListener("click", function () {
    if (number < 10) {
      number++;
      buttonElem.innerHTML = `# ${number}`;
    } else {
      buttonElem.style.backgroundColor = "salmon";
      setTimeout(() => {
        number = 0;
        buttonElem.style.backgroundColor = "";
        buttonElem.innerHTML = `# ${number}`;
      }, 3000);
    }
  });
}

add();
