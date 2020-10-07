import Color from "../../../types/color";

export interface DropCoinAction {
  type: "DROP_COIN";
  payload: {
    column: number;
    color: Color;
  };
}

export function dropCoin(column: number, color: Color): DropCoinAction {
  return {
    type: "DROP_COIN",
    payload: { column, color }
  };
}
