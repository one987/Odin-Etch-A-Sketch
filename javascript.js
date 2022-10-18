

const main = document.querySelector('#main');
const grid = document.createElement('div');
grid.classList.add('grid');

const test = document.querySelector('#test'); //testing a button that remmoves the grid and replaces with a new one
test.addEventListener('click', () => {
    main.removeChild(grid);
   // createGrid(16, 16); doesn't work properly
    
});



//function that generates a grid of divs
function createGrid(c, r) {

    for (let i = 0; i < c; ++i) {
        let column = document.createElement('div');
        column.className = 'column';
        grid.style.gridTemplateColumns = `repeat(${c}, 1fr)`;

        for (let j = 0; j < r; ++j) {
            let row = document.createElement('div');
            row.className = 'row';
            grid.style.gridTemplateRows = `repeat(${r}, 1fr)`;
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

createGrid(64, 64);
