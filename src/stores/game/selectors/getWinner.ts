import { LocalState } from "..";
import { winningCombinations } from "../../../config";
import { testCombination } from "./testCombination";

/**
 * Test every possible winning combinations against the
 * current game board
 */
export function getWinner(state: LocalState) {
  for (const combination of winningCombinations) {
    const winner = testCombination(state.board, combination);

    if (winner) {
      return winner;
    }
  }

  return null;
}
