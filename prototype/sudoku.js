const {performance} = require('perf_hooks');

let board = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,0,0]
];

console.log('Start Configuration\n');

print();

console.log('Solutions\n');

let start = performance.now();

solve(0, 0);

let end = performance.now();

let timeElapsed = (end - start) / 1000;

console.log('Took ' + timeElapsed.toFixed(5) + ' seconds.');

function validMove(x, y, val) {
    // check if conflict in row
    for (let j = 0; j < 9; j++) {
        if (board[x][j] === val) {
            return false;
        }
    }

    // check if conflict in column
    for (let i = 0; i < 9; i++) {
        if (board[i][y] === val) {
            return false;
        }
    }

    // xt and yt represent top left corner of box we're in
    let xt = Math.floor(x / 3) * 3;
    let yt = Math.floor(y / 3) * 3;

    // check 3x3 square
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[xt + i][yt + j] === val) {
                return false;
            }
        }
    }

    // No conflicts, return true
    return true;
}

function solve(x, y) {
    // finished
    if (x === 8 && y === 9) {
        print();
        return;
    }

    // reached end of a row
    if (y === 9) {
        x++;
        y = 0;
    }
    
    // check if this space is already filled.
    if (board[x][y] != 0) {
        solve(x, y + 1);
        return;
    }

    // try values 1 through 9
    for (let val = 1; val < 10; val++) {
        // check if possible before placing
        if (validMove(x, y, val)) {
            // place
            board[x][y] = val;
            // recurse on next column
            solve(x, y + 1);
            // backtrack
            board[x][y] = 0;
        }
    }
    
    return;
}

function print() {
    for (let i = 0; i < 9; i++) {
        if (i % 3 === 0 && i != 0) {
            console.log('---------------------');
        }
        for (let j = 0; j < 9; j++) {
            if (j % 3 === 0 && j != 0) {
                process.stdout.write('| ');
            }
            process.stdout.write(board[i][j] + ' ');
        }
        process.stdout.write('\n');
    }
    process.stdout.write('\n\n');
}

// validate the board --> function validate()