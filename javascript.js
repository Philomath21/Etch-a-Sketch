// get the container element
let container = document.querySelector(".container");

// Function to create board of custom sized pixels
function createBoard (size) {
    // create a size*size grid of div using two for loops
    for (let i=0; i<size; i++){
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row-div");
        container.appendChild(rowDiv);
        for(let j=0; j<size; j++) {
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
}

// get size input from user, using size button
function getSize() {
    let x = Number(prompt("Please specify the number of squares per side for the new grid: "))
    if (x == NaN | x < 1 | x >100) {
        alert("Enter a valid number between 1 to 100")
    } else {
        createBoard(x);
    }
}
const sizeButton = document.querySelector("#size");
sizeButton.addEventListener("click",getSize);








