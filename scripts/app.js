// Write a variable to represent an empty tic-tac-toe board
var board = [
    ["", "", "",],
    ["", "", "",],
    ["", "", "",]
];

// Write a variable to represents who's turn it is: X or O
var currentTurn = ["X", "O"];
var currentPlayer = "";

function setCurrentPlayer() {
    if (currentPlayer == "") {
        currentPlayer = currentTurn[1];
    } else if (currentPlayer == currentTurn[1]) {
        currentPlayer == currentTurn[2];
    } else {
        currentPlayer == currentTurn[1];
    }
}

// Write a function that returns the value at a given row-column position
function getValue(row, column) {
    return board[row][column];
}

// Write a function that prints the tic-tac-toe board nicely in the console
function getBoard() {
    console.log(board.join(''));
}

// Write a function that sets a given value at a given row-column position
function setValue(row, column, value) {
    board[row][column] = value;
    console.log(getBoard());
}

// Write a function that prompts the current player for input, then checks the value to be valid, then sets it, then sets the next users turn
function promptUser() {
    var row = prompt("Enter a row");
    var column = prompt("Enter a column");
    var value = prompt("Enter either 'X' or 'O'");

    if (board[parseInt(row)][parseInt(column)] != "") {
        var row = prompt("That row/column already has a value, please enter a valid row");
        var column = prompt("Now enter a new column");
    }

    if (value != "X" && value != "O") {
        var value = prompt("The value entered is neither X or O, please enter either character");
    }

    setValue(row, column, value);
    setCurrentPlayer();
    console.log("The next player is" + currentPlayer);
}

// Write a function that looks at the tic-tac-toe board and decides who's won the game
function checkProgress(board) {
    
}