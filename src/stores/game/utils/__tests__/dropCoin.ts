import { dropCoin } from "../dropCoin";
import { BoardState } from "../../reducer";

describe("dropCoin function", () => {
  it("returns an unchanged state if column is full", () => {
    const state: BoardState = [
      [null, null, null, null, null, "yellow", null],
      [null, null, null, null, null, "red", null],
      [null, null, null, null, null, "yellow", null],
      [null, null, null, null, null, "red", null],
      [null, null, null, null, null, "yellow", null],
      [null, null, null, null, null, "red", null]
    ];

    const newState = dropCoin(state, 5, "red");

    expect(newState).toBe(state);
  });

  it("drops the coin at the bottom on an empty column", () => {
    const state: BoardState = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ];

    const newState = dropCoin(state, 2, "red");

    expect(newState).not.toBe(state);
    expect(newState).toEqual([
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, "red", null, null, null, null]
    ]);
  });

  it("drops the coin above the last coin", () => {
    const state: BoardState = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, "red", null, null, null, null],
      [null, null, "yellow", null, null, null, null],
      [null, null, "red", null, null, null, null]
    ];

    const newState = dropCoin(state, 2, "yellow");

    expect(newState).not.toBe(state);
    expect(newState).toEqual([
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, "yellow", null, null, null, null],
      [null, null, "red", null, null, null, null],
      [null, null, "yellow", null, null, null, null],
      [null, null, "red", null, null, null, null]
    ]);
  });
});
