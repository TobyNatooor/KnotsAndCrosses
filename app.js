
let nextTurn = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

function clearEverything() {
    document.getElementById("winner").innerText = "";
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            board[x][y] = " ";

        }
    }
    displayBoard();
}

function myClick(x, y) {
    console.log("test" + x + " " + y)
    board[x][y] = nextTurn;
    if (nextTurn == 'X') {
        nextTurn = 'O';
    }
    else {
        nextTurn = 'X';
    }
    document.getElementById('theTurn').innerText = nextTurn;

    console.log(board)
    displayBoard()
    checkWinner()
}
function displayBoard() {
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {

            let id = x + "-" + y;
            if (board[x][y] == "O") {
                document.getElementById(id).innerHTML = "<img src = 'Cirkel.png'></img>";
            }
            else if (board[x][y] == "X") {
                document.getElementById(id).innerHTML = "<img src = 'Kryds.png'></img>";
            }
            else {
                document.getElementById(id).innerHTML = " ";
            }
        }
    }
}
function checkWinner() {
    if (
        board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X" ||
        board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X" ||
        board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X" ||
        board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X" ||
        board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X" ||
        board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X" ||
        board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X" ||
        board[2][0] == "X" && board[1][1] == "X" && board[0][2] == "X"
    ) {
        document.getElementById("winner").innerText = "X wins!"
    }
    if (
        board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O" ||
        board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O" ||
        board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O" ||
        board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O" ||
        board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O" ||
        board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O" ||
        board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O" ||
        board[2][0] == "O" && board[1][1] == "O" && board[0][2] == "O"
    ) {
        document.getElementById("winner").innerText = "O wins!"
    }
}
