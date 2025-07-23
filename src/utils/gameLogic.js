/* src/utils/gameLogic.js */
// Collection of game logic functions for Tic Tac Toe

export function handleCellClick(event) {
  // Handles click events on the game board cells

  const cell = event.target;

  if (cell.textContent === "") { // Check if the cell is empty
    // Update the cell with the current player's symbol

    const currentPlayer = document.getElementById("current-player");
    // Toggle between "X" and "O"
    cell.textContent = currentPlayer.textContent;
    currentPlayer.textContent = currentPlayer.textContent === "X" ? "O" : "X";

    console.log(currentPlayer.textContent); // Debugging: Log the current player

    checkForWinner();
  }
}

function checkForWinner() {
  // Checks for a winner after each click

  const cells = document.querySelectorAll(".cell");
  const winningCombinations = [ // All possible winning combinations
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const combination of winningCombinations) { // Cycles through each winning combination
    const [a, b, c] = combination;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
      // Logic to ensure:
        // a. cells[a] is not empty
        // b. cells[a], cells[b], and cells[c] are all equal

      // If a winning combination is found, alert the winner and reset the board
      alert(`${cells[a].textContent} wins!`);
      resetBoard();
      return;
    }
  }

  if ([...cells].every(cell => cell.textContent)) {
    // If all cells are filled and no winner, it's a draw
    alert("It's a draw!");
    resetBoard();
  }
}