const gridBody = document.getElementById("gridBody");
for (i = 0; i < 17; i++) {
    const gridRow = document.createElement('div');
    gridRow.classList.add("gridRow")
    for (n = 0; n < 17; n++) {
        const gridSquare = document.createElement('div');
        gridSquare.addEventListener('mouseover', function () {
            gridSquare.classList.add('gridSquareDark')
        });
        gridSquare.classList.add('gridSquare');
        gridRow.appendChild(gridSquare);
    }
    gridBody.appendChild(gridRow);
}