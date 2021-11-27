const gridBody = document.getElementById("gridBody");
for (i = 0; i < 16; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add("gridRow")
    for (n = 0; n < 16; n++) {
        const gridSquare = document.createElement('div');
        gridSquare.addEventListener('mouseover', function () {
            gridSquare.classList.add('gridSquareDark')
        });
        gridSquare.classList.add('gridSquare');
        gridRow.appendChild(gridSquare);
    }
    gridBody.appendChild(gridRow);
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
    document.querySelectorAll('.gridRow').forEach(e => e.remove())
    switch(true) {
        case isNaN(gridSize):
            break;
        case gridSize < 0:
            break;
        case gridSize > 100:
            break;
    }
    for (i = 0; i < gridSize + 1; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add("gridRow");
        for (n = 0; n < gridSize + 1; n++) {
            const gridSquare = document.createElement('div');
            gridSquare.addEventListener('mouseover', function () {
                gridSquare.classList.add('gridSquareDark');
            });
            gridSquare.classList.add('gridSquare');
            gridRow.appendChild(gridSquare);
        }
        gridBody.appendChild(gridRow);
    }
}
*/
const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', clear);