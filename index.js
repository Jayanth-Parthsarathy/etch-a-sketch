const sizeSlider = document.getElementById("size--slider");
const colorpicker = document.getElementById("colorpicker");
const eraser = document.getElementById("eraser");
let color = "black";
function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

function changeSize(size) {
  populateBoard(size);
}

sizeSlider.onchange = () => {
  changeSize(sizeSlider.value);
};

function colorSquare() {
  if (color == "random") {
    this.style.backgroundColor =
      "hsla(" + Math.random() * 360 + ", 100%, 50%, 1)";
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

eraser.addEventListener("click", colorSquare("white"));

function Reset() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

document.querySelector("body").addEventListener("click", () => {
  click = !click;
});
