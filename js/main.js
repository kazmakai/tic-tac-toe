/*----- constants -----*/
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""]

/*----- state variables -----*/
let currentPlayer = "X";
let running = false;

/*----- cached elements  -----*/
const cells = document.querySelectorAll('.cell');
const statusText = document.querySelector('#statusText');
const restartButton = document.querySelector('#restartButton');


/*----- event listeners -----*/


/*----- functions -----*/
initializeGame();

function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartButton.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    if (options[cellIndex] != "" || !running) {
        return;
    }
    
    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlyaer() {

}

function checkWinner() {

}

function restartGame() {

}