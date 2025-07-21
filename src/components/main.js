/* src/components/board.js */
// Create the board for the Tic Tac Toe game

import { createBoard } from "./cell.js";

start();

function start() {
  const board = document.getElementById("board");

  createBoard();

}