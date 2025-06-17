const gridContainer = document.querySelector(".grid-container");

function createGrid(lengthOfSides) {
  const squareSize = 512 / lengthOfSides;
  for (let i = 0; i < lengthOfSides * lengthOfSides; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "skyblue";
    });
    gridContainer.appendChild(square);
  }
}

createGrid(16);
const squaresPopup = document.querySelector(".num-of-squares");

squaresPopup.addEventListener("click", () => {
  let sideLength = prompt(
    "How many squares per side do you want the new grid to have?"
  );

  if (sideLength > 0 && sideLength <= 100) {
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(sideLength);
  }
});