
const main = document.querySelector('#main');
const grid = document.createElement('div');
grid.classList.add('grid');

//slider grid resizer
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;
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
            cell.style.backgroundColor = 'black';
        });
        const black = document.querySelector('#black'); //black button
        black.addEventListener('click', () => {
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = 'black';
            });
        });
        const rgb = document.querySelector('#rgb'); //rainbow button
        rgb.addEventListener('click', () => {
            let color =  "#" + Math.random().toString(16).slice(2, 8); //thanks Stack Overflow ;)
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = `${color}`;
            } )
        });
        const erase = document.querySelector('#erase'); //eraser button
        erase.addEventListener('click', () => {
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = 'snow';
            });
        });
        const clear = document.querySelector('#clear'); //shake button
        clear.addEventListener('click', () => {
            cell.style.backgroundColor = 'snow';
        });
        
        grid.appendChild(cell);
    }
    main.appendChild(grid);
}



createGrid(64);


