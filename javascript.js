// variable to get the pixel color (black, random, or progressive darkening)
var pixelColor = "white";

// selecting black color
let black = document.querySelector("#black");
black.addEventListener("click", () => {
    pixelColor = "black";
})

// selecting random color
let randomColor = document.querySelector("#random-color");
randomColor.addEventListener("click", () => {
    pixelColor = "random";
})
// function to generate random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// selecting progressive darkening
// let progressiveDarkening = document.querySelector("#progressive-darkening");
// progressiveDarkening.addEventListener("click", () => {
//     pixelColor = "progressive-darkening";
// })


  
// get the container element
let container = document.querySelector("#container");

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
                if (pixelColor == "black"){
                    squareDiv.style.backgroundColor = "black";
                } else if (pixelColor == "random") {
                    squareDiv.style.backgroundColor = getRandomColor();
                }
                // } else if (pixelColor == "progressive-darkening") {
                //     squareDiv.style.opacity -= 0.1
                // }
            })
            rowDiv.appendChild(squareDiv);
        }
    }
}


// function to get size input from user, using size button & then create a new board
function getSize() {
    // get user input for the number of squares per side for the new grid
    // convert it into a Number type 
    let x = Number(prompt("Please specify the number of squares per side for the new grid: "))

    // checking the validity of input
    if (x == NaN | x < 1 | x >100) {
        // if number is invalid, informing the user
        alert("Enter a valid number between 1 to 100")
    } else {
        // if number is valid
        // delete the old grid in the container element
        document.getElementById("container").innerHTML = "";
        // create the new board with specified size
        createBoard(x);
    }
}

// get the size button
const sizeButton = document.querySelector("#size");
// get size input from user on clicking the size button
sizeButton.addEventListener("click",getSize);








