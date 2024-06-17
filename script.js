// variable to store size value
let sizeValue;
// play message
const playMessage = document.querySelector("#play-message");

// function to get size input from user
function getSize() {
    // get input for no. of squares per side of grid
    // convert input type to number 
    let x = Number(prompt("Please specify the number of squares per side for the new grid: "))

    // input validation
    if (x >= 0 && x <= 100){
        // Display play message
        playMessage.textContent = "Select color scheme for the board, to play:";
        // delete the old grid in the container element
        document.getElementById("container").innerHTML = "";
        sizeValue = x;
    } else {
        alert("Enter a valid number between 1 to 100");
    }
}

// getting size value using above function on clicking the button
let size = document.querySelector("#size");
size.addEventListener("click", getSize)


// #####################################################################

// get the container element
let container = document.querySelector("#container");

// function to generate random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// user selects color scheme by clicking one of the 3 buttons
function selectColorScheme () {
    let one = document.querySelector("#one");
    let two = document.querySelector("#two");
    let three = document.querySelector("#three");

    one.addEventListener("click", () => {
        // Display play message
        playMessage.textContent = "You can play now!";
        // delete the old grid in the container element
        document.getElementById("container").innerHTML = "";
        // create a size*size grid of div using two for loops
        for (let i=0; i<sizeValue; i++){
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("row-div");
            container.appendChild(rowDiv);
            for(let j=0; j<sizeValue; j++) {
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
    })

    two.addEventListener("click", () => {
        // Display play message
        playMessage.textContent = "You can play now!";
        // delete the old grid in the container element
        document.getElementById("container").innerHTML = "";
        // create a size*size grid of div using two for loops
        for (let i=0; i<sizeValue; i++){
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("row-div");
            container.appendChild(rowDiv);
            for(let j=0; j<sizeValue; j++) {
                const squareDiv = document.createElement("div");
                squareDiv.classList.add("square-div");
                // Set up a “hover” effect so that the grid divs change color 
                // when your mouse passes over them, leaving a (pixelated) trail 
                // through your grid like a pen would.
                squareDiv.addEventListener("mouseover", () => {
                    squareDiv.style.backgroundColor = getRandomColor();
                })
                rowDiv.appendChild(squareDiv);
            }
        }
    })

    three.addEventListener("click", () => {
        // Display play message
        playMessage.textContent = "You can play now!";
        // delete the old grid in the container element
        document.getElementById("container").innerHTML = "";
        // create a size*size grid of div using two for loops
        for (let i=0; i<sizeValue; i++){
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("row-div");
            container.appendChild(rowDiv);
            for(let j=0; j<sizeValue; j++) {
                const squareDiv = document.createElement("div");
                squareDiv.classList.add("square-div");
                squareDiv.style.backgroundColor = "black";
                squareDiv.style.opacity = 0;
                // Set up a “hover” effect so that the grid divs change color 
                // when your mouse passes over them, leaving a (pixelated) trail 
                // through your grid like a pen would.
                squareDiv.addEventListener("mouseover", () => {
                    squareDiv.style.opacity = Number(squareDiv.style.opacity) + 0.1;
                })
                rowDiv.appendChild(squareDiv);
            }
        }
    })
}

selectColorScheme();