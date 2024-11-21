// Create basic div element before multiplying by 16
const divBlock = document.createElement("div");

// Add class to these divs
divBlock.classList.add("divBlock");

// Create the selector for the main div grid
const divGrid = document.querySelector("#divGrid");

// Create another div to become the rows
const divRow = document.createElement("div");

// Add class to row divs
divRow.classList.add("divRow");

// Event listener for the full page to load
window.addEventListener("load", function () {
    console.log("it load")
    // Loop to create 16 rows with 16 divs inside
    for (let i = 0; i < 16; i++) {
        divGrid.append(divRow.cloneNode());
        for (let j = 0; j < 16; j++) {
            console.log("?")
            divRow.appendChild(divBlock.cloneNode());
        }
    }
});