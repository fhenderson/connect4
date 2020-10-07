import { BoardState } from "../reducer";
import { Combination } from "../../../config";
import { testCombinationAt } from "./testCombinationAt";
import Color from "../../../types/color";

export interface WinningCoordinates {
  row: number;
  column: number;
  combination: Combination;
  color: Color;
}

/**
 * Test if a combination is valid for a given board
 * @param state the game board
 * @param combination a winning combination configuration
 */
export function testCombination(
  state: BoardState,
  combination: Combination
): WinningCoordinates | null {
  for (let row = 0; row < state.length; row++) {
    for (let column = 0; column < state[row].length; column++) {
      // only run if the current cell has a color
      if (state[row][column] !== null) {
        const color = testCombinationAt(state, combination, row, column);

        if (color) {
          return { color, row, column, combination };
        }
      }
    }
  }

  return null;
}
