// Create basic div element before multiplying by 16
const divBlock = document.createElement("div");

// Add class to these divs
divBlock.classList.add("divBlock");

// Create the selector for the main div grid
const divGrid = document.querySelector("#divGrid");

// Event listener for the full page to laod
window.addEventListener("load", function () {
    console.log("it load")

    // Create and append the 16 blocks to main div container
    for (let i = 0; i < 16; i++) {
        divGrid.appendChild(divBlock);
    }
});