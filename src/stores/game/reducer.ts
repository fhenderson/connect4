import Color from "../../types/color";
import { dropCoin } from "./utils/dropCoin";
import { getInitialBoard } from "./utils/getInitialBoard";
import { Action } from "./actions/types";

export type BoardState = Color[][];

const initialState: BoardState = getInitialBoard();

export const reducer = (
  state: BoardState = initialState,
  action: Action
): BoardState => {
  switch (action.type) {
    case "DROP_COIN":
      const { column, color } = action.payload;
      return dropCoin(state, column, color);
    case "RESET_BOARD":
      return [...getInitialBoard()];
    default:
      return state;
  }
};
