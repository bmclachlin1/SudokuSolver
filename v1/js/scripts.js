/**
 * Our sudoku board. 
 */
let board = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
];

/* select all input tags, needed for event listener */
let inputList = document.querySelectorAll('input');

/* add event listener to all input elements */
inputList.forEach(input => {
    input.addEventListener('input', updateBoard);
});

/** 
 *   Update our board array when a user enters a value in our board 
 */
function updateBoard() {
    let cellID = 0;
    let prefix = "cell-";
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            // get id of cell we are updating
            let selector = prefix + cellID.toString();
            console.log(selector);
            // select the cell
            let cell = document.getElementById(selector);
            console.log(cell);
            // get the text content of the cell
            let cellContent = Number(cell.textContent);
            console.log(cellContent);
            // update board position 
            board[i][j] = cellContent;
            // increment cell ID and move to next row/column
            cellID++;
        }
    }
    // for development purposes
    console.table(board);
}