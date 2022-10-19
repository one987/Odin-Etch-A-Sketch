
const main = document.querySelector('#main');
const grid = document.createElement('div');
grid.classList.add('grid');

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
    grid.innerHTML = "";
    createGrid(`${this.value}`);
};


//function that generates a grid of divs. Need to refactor to fix scope issues
function createGrid(cr) {

    for (let i = 0; i < cr; ++i) {
        let column = document.createElement('div');
        column.className = 'column';
        grid.style.gridTemplateColumns = `repeat(${cr}, 1fr)`;

        for (let j = 0; j < cr; ++j) {
            let row = document.createElement('div');
            row.className = 'row';
            grid.style.gridTemplateRows = `repeat(${cr}, 1fr)`;
            row.addEventListener("mouseover", () => {
                row.style.backgroundColor = 'blue';
            });
            const clear = document.querySelector('#clear'); //reset button
            clear.addEventListener('click', () => {
                row.style.backgroundColor = '#F8F8FF';
            });
            const black = document.querySelector('#black'); //black button
            black.addEventListener('click', () => {
                row.addEventListener("mouseover", () => {
                    row.style.backgroundColor = 'black';
                });
            });
            const erase = document.querySelector('#erase'); //erase button
            erase.addEventListener('click', () => {
                row.addEventListener("mouseover", () => {
                    row.style.backgroundColor = '#F8F8FF';
                });
            });

            column.appendChild(row);
        }
        grid.appendChild(column);
    }
    main.appendChild(grid);
}

window.onload = function () {
    createGrid(64);
};

