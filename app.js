
let winner = document.querySelector("#winner")
let theTurn = document.querySelector('#theTurn')
let theRestart = document.querySelector('#theRestart')
let tableSquare = document.getElementsByClassName('tableSquare');
let canPlay = true;
let nextTurn = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

function myClick(x, y) {
    if (canPlay) {
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
        winner.innerText = "X wins!";
        canPlay = false;
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
        winner.innerText = "O wins!";
        canPlay = false;
    }
}

tableSquare[0].addEventListener('click', () => myClick(0, 0));
tableSquare[1].addEventListener('click', () => myClick(1, 0));
tableSquare[2].addEventListener('click', () => myClick(2, 0));
tableSquare[3].addEventListener('click', () => myClick(0, 1));
tableSquare[4].addEventListener('click', () => myClick(1, 1));
tableSquare[5].addEventListener('click', () => myClick(2, 1));
tableSquare[6].addEventListener('click', () => myClick(0, 2));
tableSquare[7].addEventListener('click', () => myClick(1, 2));
tableSquare[8].addEventListener('click', () => myClick(2, 2));
theRestart.addEventListener('click', () => window.location.reload());