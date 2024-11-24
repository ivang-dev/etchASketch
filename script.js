// Constants for the rows and columns
const numOfRows = 16;
const numOfCols = 16;

// Create the selector for the main div grid
const divGrid = document.querySelector("#divGrid");

// Variable to hold the number for new grid size
let newGridSize = "";

// Event listener for the whole grid, checks for divBlock
divGrid.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("divBlock")) {
        e.target.style.backgroundColor = "black";
    }
});

// Event listener for the full page to load
window.addEventListener("load", function () {
    // Outer for loop for the row divs
    for (let i = 0; i <numOfRows; i++) {
        // Create div to become the rows
        const divRow = document.createElement("div");

        // Add class to row divs
        divRow.className = "divRow";

        // Inner loop for the columns/cells in each row
        for (let j = 0; j < numOfCols; j++) {
            // Create basic div element before multiplying by 16
            const divBlock = document.createElement("div");

            // Add class to these divs
            divBlock.className = "divBlock";

            // Append to the row divs
            divRow.append(divBlock);
        }
        // Append the row to the main grid
        divGrid.append(divRow);
    }
});

// Select grid size change button
const gridSizeBtn = document.querySelector("#sizeChange");

// Event listener for gridSizeBtn
gridSizeBtn.addEventListener("click", function () {
    newGridSize = prompt("Enter a number for the new grid size, max 100", "16");
    while (isNaN(parseInt(newGridSize, 10))) {
        newGridSize = prompt("Please enter a number, max 100", "16");
    }

    // Remove all children from divGrid
    while (divGrid.firstChild){
        divGrid.removeChild(divGrid.firstChild);
    }

    // Reapply logic from window load to create the new grid
        // Outer for loop for the row divs
        for (let i = 0; i < newGridSize; i++) {
            // Create div to become the rows
            const divRow = document.createElement("div");

            // Add class to row divs
            divRow.className = "divRow";

            // Inner loop for the columns/cells in each row
            for (let j = 0; j < newGridSize; j++) {
                // Create basic div element before multiplying by 16
                const divBlock = document.createElement("div");

                // Add class to these divs
                divBlock.className = "divBlock";

                // Append to the row divs
                divRow.append(divBlock);
            }
            // Append the row to the main grid
            divGrid.append(divRow);
        }
})