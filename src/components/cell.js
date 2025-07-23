/* src/components/cell.js */
// Create cell components for the Tic Tac Toe game in a 3x3 grid

import { handleCellClick } from "../utils/gameLogic.js";

export function createBoard() {
  // Create a 3x3 grid for the Tic Tac Toe game board

  for (let i = 0; i < 3; i++) { // Loop through rows
    
    const row = document.createElement("div");
    row.className = "row";
    row.id = `row-${i}`;
    board.appendChild(row);

    for (let j = 0; j < 3; j++) { // Loop through columns

      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.index = i * 3 + j;
      row.appendChild(cell);

      // Add click event listener to each cell
      cell.addEventListener("click", handleCellClick);
    }
  }
}
