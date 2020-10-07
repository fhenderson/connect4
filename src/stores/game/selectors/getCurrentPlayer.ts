import { LocalState } from "..";
import { Color } from "../../../types";

/**
 * Return the current player (as a color) given a board game.
 */
export const getCurrentPlayer = (state: LocalState): Color => {
  let reds = 0;
  let yellows = 0;

  for (const row of state.board) {
    for (const cell of row) {
      if (cell === "red") {
        reds++;
      } else if (cell === "yellow") {
        yellows++;
      }
    }
  }

  return reds === yellows ? "yellow" : "red";
};
