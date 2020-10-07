import { getCurrentPlayer } from "../getCurrentPlayer";
import { BoardState } from "../../reducer";

describe("getCurrentPlayer selector", () => {
  it("is yellow on empty board", () => {
    const board: BoardState = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ];

    expect(getCurrentPlayer({ board })).toBe("yellow");
  });

  it("is yellow when equal number of coin", () => {
    const board: BoardState = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, "red", "yellow", null, null]
    ];

    expect(getCurrentPlayer({ board })).toBe("yellow");
  });

  it("is red when more yellow are present", () => {
    const board: BoardState = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, "yellow", "red", "yellow", null, null]
    ];

    expect(getCurrentPlayer({ board })).toBe("red");
  });
});
