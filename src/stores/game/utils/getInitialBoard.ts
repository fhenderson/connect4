import { BoardState } from "../reducer";
import { boardHeight, boardWidth } from "../../../config";

/**
 * return an empty board according to the sizes
 * set in the config
 */
export function getInitialBoard(): BoardState {
  const board: BoardState = [];

  for (let row = 0; row < boardHeight; row++) {
    const gameRow = [];

    for (let column = 0; column < boardWidth; column++) {
      gameRow.push(null);
    }

    board.push(gameRow);
  }

  return board;
}
