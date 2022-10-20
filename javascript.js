
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

    grid.style.gridTemplateColumns = `repeat(${cr}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${cr}, 1fr)`;

    for (let i = 0; i < cr * cr; ++i) {
        let cell = document.createElement('div');
        cell.className = 'cell';

        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = 'blue';
        });
        const clear = document.querySelector('#clear'); //reset button
        clear.addEventListener('click', () => {
            cell.style.backgroundColor = '#F8F8FF';
        });
        const black = document.querySelector('#black'); //black button
        black.addEventListener('click', () => {
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = 'black';
            });
        });
        const erase = document.querySelector('#erase'); //erase button
        erase.addEventListener('click', () => {
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = '#F8F8FF';
            });
        });

        grid.appendChild(cell);
    }
    main.appendChild(grid);
}



createGrid(64);


