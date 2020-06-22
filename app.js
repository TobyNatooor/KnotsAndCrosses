
let winner = document.querySelector("#winner")
let theTurn = document.querySelector('#theTurn')

let nextTurn = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

function myClick(x, y) {
    if (board[x][y] == "") {
        document.getElementById(x + '-' + y).classList.remove('tableSquare')
        board[x][y] = nextTurn;
        if (nextTurn == 'X') {
            nextTurn = 'O';
        } else {
            nextTurn = 'X';
        }
        theTurn.innerText = 'Next turn:' + nextTurn;
        displayBoard()
        checkWinner()
    }
}
function displayBoard() {
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            let id = x + "-" + y;
            if (board[x][y] == "O") {
                document.getElementById(id).innerHTML = "<img src='Cirkel.png'></img>";
            } else if (board[x][y] == "X") {
                document.getElementById(id).innerHTML = "<img src='Kryds.png'></img>";
            }
        }
    }
}
function checkWinner() {
    if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X" ||
        board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X" ||
        board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X" ||
        board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X" ||
        board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X" ||
        board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X" ||
        board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X" ||
        board[2][0] == "X" && board[1][1] == "X" && board[0][2] == "X"
    ) {
        winner.innerText = "X wins!"
    }
    if (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O" ||
        board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O" ||
        board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O" ||
        board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O" ||
        board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O" ||
        board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O" ||
        board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O" ||
        board[2][0] == "O" && board[1][1] == "O" && board[0][2] == "O"
    ) {
        winner.innerText = "O wins!"
    }
}
function clearEverything() {
    winner.innerText = "";
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            board[x][y] = "";
            let id = x + "-" + y;
            let block = document.getElementById(id)
            if (block.children.length > 0) {
                block.removeChild(block.childNodes[0]);
                block.style.border = "3px solid black"
                block.style.borderRadius = "3%"
            }
            console.log(block.children)
        }
    }
    displayBoard();
}