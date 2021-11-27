const grid = document.getElementById("grid");
let size = 16;

function changeColor(e) {
    e.style.backgroundColor = black;
}

for (i = 0; i < 50 * 50; i++) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (i = 0; i < size * size; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.addEventListener('mouseover', changeColor);
        grid.appendChild(gridSquare);
    }
}

function clear() {
    const clearable = Array.from(document.querySelectorAll('.gridSquareDark'));
    for (i = 0; i < clearable.length; i++) {
        clearable[i].classList.remove('gridSquareDark');
        clearable[i].classList.add('gridSquare');
    }
}
/*
function gridChange() {
    const gridSize = prompt('desired grid size');
    document.querySelectorAll('.gridSquare').forEach(e => e.remove())
    switch(true) {
        case isNaN(gridSize):
            break;
        case gridSize < 0:
            break;
        case gridSize > 100:
            break;
    }
    for (i = 0; i < gridSize + 1; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add("gridSquare");
        for (n = 0; n < gridSize + 1; n++) {
            const gridSquare = document.createElement('div');
            gridSquare.addEventListener('mouseover', function () {
                gridSquare.classList.add('gridSquareDark');
            });
            gridSquare.classList.add('gridSquare');
            gridSquare.appendChild(gridSquare);
        }
        gridBody.appendChild(gridSquare);
    }
}
*/
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clear);