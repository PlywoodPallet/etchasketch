createGrid(16);
addGridResetListener();


// size = only ONE side dimension of a square grid
function createGrid(gridSize) {
    const wrapper = document.querySelector(".wrapper");

    // change the number of CSS grid columns to reflect size of grid
    wrapper.style.gridTemplateColumns = "repeat( " + gridSize + ", 1fr)";

    let numGridSquares = Math.pow(gridSize, 2);

     for (let i=0; i < numGridSquares; i++) {
        const gridSquare = document.createElement("div");
        // gridSquare.style.backgroundColor = "orange";
        gridSquare.classList.add('gridSquare');

        addMouseoverHoverListeners(gridSquare);

        wrapper.appendChild(gridSquare);
     }


    }

  // mouseover a grid square adds a hover class to the div
  function addMouseoverHoverListeners(gridSquare) {
    gridSquare.addEventListener('mouseover', ()=> {
          gridSquare.style.backgroundColor = randomRBGValue_CSS();
          
          // gradually dim square by 10% each time a mouseover happens, until the square it totally black
          if(!gridSquare.style.opacity) {
            gridSquare.style.opacity = 0.9;
          } 
          else if (gridSquare.style.opacity > 0) {
            gridSquare.style.opacity = gridSquare.style.opacity - 0.1;
          }
          
          
        })
  }

  // generate a random RBG value in the CSS format
  function randomRBGValue_CSS() {
    const max = 256;

    const R = Math.floor(Math.random() * max);
    const G = Math.floor(Math.random() * max);
    const B = Math.floor(Math.random() * max);

    return "rgb(" + R + ", " + G + ", " + B + ")";

  }

  // clicking reset button deletes the grid, prompts the user for a new grid size, then generates the grid
  function addGridResetListener() {
    const resetButton = document.querySelector("#reset")
    const wrapper = document.querySelector(".wrapper");

    resetButton.addEventListener('click', ()=> {
      while(wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
      }

      let gridSize;
      while(!gridSize || gridSize>100 || gridSize<0){
        gridSize = prompt("Please enter the new size of square grid");
      }

      createGrid(gridSize);


    });


  }