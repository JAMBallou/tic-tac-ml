/* src/components/cell.js */
// Create cell components for the Tic Tac Toe game in a 3x3 grid

export function createBoard() {
  for (let i = 0; i < 3; i++) {
    const row = document.createElement("div");
    row.className = "row";
    row.id = `row-${i}`;
    board.appendChild(row);
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.index = i * 3 + j;
      row.appendChild(cell);
    }
  }
}
