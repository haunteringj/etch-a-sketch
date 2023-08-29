const gridContainer = document.querySelector('.grid-container')

function resetGrid() {
    const cols = document.querySelectorAll('.col');
    cols.forEach(element => {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    })
}

function createGrid(input) {
    const gridContainer = document.querySelector('.grid-container')

    // Create columns
    for (let i = 0; i < input - 1; i++) { 
        const content = document.createElement('div');
        content.classList.add('col');    
        gridContainer.appendChild(content);
    }

    // Create cells in the grid
    const cols = document.querySelectorAll('.col');
    cols.forEach(element => {
        for (let i = 0; i < input; i++) { 
            const content = document.createElement('div');
            content.classList.add('cell');

            element.appendChild(content);
        }
    });

    // Add event listens to each cell
    const cells = document.querySelectorAll('.cell');
    // Rate of darkening
    cells.forEach(element => {
        // Add on mouseover event listers for each buton
        element.addEventListener('mouseover', () => {
            element.style.background =  random_rgba();
        });
    });
}

// Function has been taken from the following source: https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

// Add event listeners to buttons
const sizeBtn = document.querySelector('.size');
sizeBtn.addEventListener('click', () => {
    input = prompt("Please select the number of squares per side for the new grid.");

    input = Number(input);
    console.log(input)
    if (isNaN(input)) {
        alert("Please enter a number greater than 0 and less than 65")
    }
    else if (input > 64 || input < 1) {
        alert("Please enter a number greater than 0 and less than 65")
    }
    else {
        resetGrid(input);
        createGrid(input);
    }
});

createGrid(16);