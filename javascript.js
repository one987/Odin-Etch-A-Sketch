

const container = document.querySelector('#container');
const grid = document.createElement('div');
grid.classList.add('grid');
let columns = 16;
let rows = 16;




//create function that loads a grid of divs
function createGrid() {
}

for (let i = 0; i < columns; ++i) {
    let column = document.createElement('div');
    column.className = 'column';
    for (let j = 0; j < rows; ++j) {
        let row = document.createElement('div');
        row.className = 'row';
        
        column.appendChild(row);
    }
    grid.appendChild(column);
}
container.appendChild(grid);

