// get the container element
let container = document.querySelector(".container");

// create a 16*16 grid of div using two for loops
for (let i=0; i<16; i++){
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row-div");
    container.appendChild(rowDiv);
    for(let j=0; j<16; j++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square-div");
        // Set up a “hover” effect so that the grid divs change color 
        // when your mouse passes over them, leaving a (pixelated) trail 
        // through your grid like a pen would.
        squareDiv.addEventListener("mouseover", () => {
            squareDiv.style.backgroundColor = "black";
        })
        rowDiv.appendChild(squareDiv);
    }
}





