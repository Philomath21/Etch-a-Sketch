// get the container element
let container = document.querySelector(".container");

// creating 16*16 grid of div using two for loops
for (let i=0; i<16; i++){
    // create new div row element
    const rowDiv = document.createElement("div");
    // add a class "row-div"
    rowDiv.classList.add("row-div");
    // add that div element inside the container div
    container.appendChild(rowDiv);
    for(let j=0; j<16; j++) {
        // create new square div element
        const squareDiv = document.createElement("div");
        // add a class "square-div"
        squareDiv.classList.add("square-div");
        // add that div element inside the row-div
        rowDiv.appendChild(squareDiv);
    }
}


