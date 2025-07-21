/* src/components/board.js */
// Create the board for the Tic Tac Toe game

function handleCellClick(event) {
  const cell = event.target;
  const index = cell.dataset.index;

  if (boardState[index] || gameOver) return;

  boardState[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.classList.add(currentPlayer);

  if (checkWin()) {
    gameOver = true;
    setTimeout(() => alert(`${currentPlayer} wins!`), 100);
  } else if (boardState.every(cell => cell)) {
    gameOver = true;
    setTimeout(() => alert("It's a draw!"), 100);
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}