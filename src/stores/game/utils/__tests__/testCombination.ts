import { BoardState } from "../../reducer";
import { testCombination } from "../testCombination";

describe("testCombination selector", () => {
  it("should return null if no winner", () => {
    const board: BoardState = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, "red", "yellow", null, null]
    ];

    const combination = [
      [0, 0],
      [0, 1]
    ];

    expect(testCombination(board, combination)).toBe(null);
  });

  it("should return yellow if yellow wins", () => {
    const board: BoardState = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, "red", null, null],
      [null, null, null, "red", "yellow", "yellow", "yellow"]
    ];

    const combination = [
      [0, 0],
      [0, 1],
      [0, 2]
    ];

    expect(testCombination(board, combination)).toEqual({
      color: "yellow",
      column: 4,
      row: 5,
      combination
    });
  });

  it("should return red if red wins", () => {
    const board: BoardState = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, "yellow", null, null, "red", null, null],
      ["yellow", null, null, "yellow", "red", "red", null]
    ];

    const combination = [
      [0, 0],
      [1, 1]
    ];

    expect(testCombination(board, combination)).toEqual({
      color: "red",
      column: 4,
      row: 4,
      combination
    });
  });
});
