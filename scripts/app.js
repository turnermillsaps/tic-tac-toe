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
        alert("That row/column already has a value, please enter a valid row");
        alert("Now enter a new column");
    }

    if (value != "X" && value != "O") {
        alert("The value entered is neither X or O, please enter either character");
    }

    setValue(row, column, value);
    checkProgress(board);
    setCurrentPlayer();
    alert("The next player is" + currentPlayer);
}

// Write a function that looks at the tic-tac-toe board and decides who's won the game
function checkProgress(board) {
    // Admittedly inspired by Adam's solution on this part as I overcomplicated the possible win conditions in my head and couldn't figure out how to do it
    var possibleWins = [
        board[0][0] + board[0][1] + board[0][2],
        board[1][0] + board[1][1] + board[1][2],
        board[2][0] + board[2][1] + board[2][2],
        board[0][0] + board[1][0] + board[2][0],
        board[0][1] + board[1][1] + board[2][1],
        board[0][2] + board[1][2] + board[2][2],
        board[0][0] + board[1][1] + board[2][2],
        board[0][2] + board[1][1] + board[2][0]
    ];

    for (var i = 0; i < possibleWins.length; i++) {
        if (possibleWins[i] == "XXX" || possibleWins == "OOO") {
            return true;
        }
    }

    return false;
}


// Write a loop that asks for user input until someone wins the game

while (checkProgress(board) == false) {
    promptUser();
}

if (currentPlayer == currentTurn[0]) {
    alert("Player " + currentPlayer + " wins!");
} else {
    alert("Player " + currentPlayer + " wins!");
}