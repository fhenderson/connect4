import { BoardState } from "../../reducer";
import { testCombinationAt } from "../testCombinationAt";

describe("testCombinationAt", () => {
  it("should return the color if the combination can be found", () => {
    const board: BoardState = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, "red", "yellow", "yellow", null]
    ];

    const combination = [
      [0, 0],
      [0, 1]
    ];

    expect(testCombinationAt(board, combination, 5, 4)).toBe("yellow");
  });
});
