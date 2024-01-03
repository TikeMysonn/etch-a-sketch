const container = document.getElementById("container");
const btnAdjust = document.querySelector(".btnAdjust");
const btnRgb = document.querySelector(".btnRgb");

createGrid(16);

function createGrid(numSquaresSide) {
  container.innerHTML = "";
  for (let i = 0; i < numSquaresSide * numSquaresSide; i++) {
    const gridItem = document.createElement("div");
    container.appendChild(gridItem);
    gridItem.classList.add("gridItem");

    gridItem.addEventListener("mouseover", function () {
      if (btnRgb.classList.contains("active")) {
        gridItem.style.backgroundColor = getRandomColor();
      } else {
        gridItem.classList.add("hovered");
      }
    });

    gridItem.addEventListener("mouseout", function () {
      gridItem.classList.remove("hovered");
      //   gridItem.style.backgroundColor = "";
    });
  }
}

btnAdjust.addEventListener("click", function () {
  let numSquaresSide = prompt(
    "How many squares per side would you like in the new grid?"
  );

  if (numSquaresSide !== null && !isNaN(numSquaresSide)) {
    let newSquareWidth = 330 / parseInt(numSquaresSide);
    console.log(newSquareWidth);

    createGrid(numSquaresSide);

    const gridItems = document.querySelectorAll("div.gridItem");
    gridItems.forEach((element) => {
      element.style.width = `${newSquareWidth}px`;
      element.style.height = `${newSquareWidth}px`;
    });
  }
});

function getRandomColor() {
  const randomRed = Math.floor(Math.random() * 256);
  const randomGreen = Math.floor(Math.random() * 256);
  const randomBlue = Math.floor(Math.random() * 256);
  return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

btnRgb.addEventListener("click", function () {
  btnRgb.classList.toggle("active");
});
