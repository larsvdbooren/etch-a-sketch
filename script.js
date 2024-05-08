const sketchGrid = document.querySelector(".sketch-grid");
const startBtn = document.querySelector(".start-button");
const resetBtn = document.querySelector(".reset-button");
const input = document.querySelector(".sketch-input");
let sketchItem = 1;

//Reset grid function
const resetGrid = function () {
  let sketchItem = document.querySelectorAll(".sketch-div");
  sketchItem.forEach((item) => {
    item.remove();
  });
};

//Init
resetGrid();

//Reset grid button
resetBtn.addEventListener("click", function () {
  resetGrid();
  console.log("reset");
});

startBtn.addEventListener("click", function () {
  //Create grid
  if (input.value <= 100) {
    resetGrid();
    let gridQuantity = input.value * input.value;
    for (let i = 0; i < gridQuantity; i++) {
      sketchGrid
        .appendChild(document.createElement("div"))
        .classList.add(`sketch-div`, `is-${i + 1}`);
    }
    sketchItem = document.querySelectorAll(".sketch-div");
    let itemSize = 100 / input.value;
    sketchItem.forEach(function (item) {
      item.style.width = `${itemSize}%`;
      item.style.height = `${itemSize}%`;
    });
  }
  //Add active class to grid items
  sketchItem = document.querySelectorAll(".sketch-div");
  sketchItem.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      item.classList.add("is-active");
    });
  });
  sketchItem.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      if (item.classList.contains("is-active")) {
        let activeItem = item;

        function addOpacity() {
          let itemOpacity = parseFloat(activeItem.style.opacity);
          if (isNaN(itemOpacity)) {
            // If opacity is not set, default to 1
            itemOpacity = 0.1;
          }
          itemOpacity = Math.min(itemOpacity + 0.1, 1); // Increase opacity by 0.1, ensuring it doesn't exceed 1
          activeItem.style.opacity = itemOpacity; // Don't round opacity
          console.log("is active");
        }

        addOpacity();
      }
    });
  });
});
