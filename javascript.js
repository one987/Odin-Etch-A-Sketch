

const container = document.querySelector('#main');
const grid = document.createElement('div');
grid.classList.add('grid');



//function that generates a grid of divs
function createGrid(c, r) {
    let columns = c;
    let rows = r;

    for (let i = 0; i < columns; ++i) {
        let column = document.createElement('div');
        column.className = 'column';
        grid.style.gridTemplateColumns = `repeat(${c}, 1fr)`;

        for (let j = 0; j < rows; ++j) {
            let row = document.createElement('div');
            row.className = 'row';
            grid.style.gridTemplateRows = `repeat(${r}, 1fr)`;
            row.addEventListener("mouseover", () => {
                row.style.backgroundColor = 'blue';
            });
            column.appendChild(row);
        }
        grid.appendChild(column);

    }
    main.appendChild(grid);

}

createGrid(64, 64);
