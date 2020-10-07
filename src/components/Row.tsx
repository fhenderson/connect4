import React from "react";
import cn from "classnames";

import { Cell } from "./Cell";
import { Color } from "../types";
import { WinningCoordinates } from "../stores/game/utils/testCombination";

interface Props {
  colors: Color[];
  row: number;
  dropCoin: (column: number) => () => void;
  winner: WinningCoordinates | null;
}

export const Row: React.FunctionComponent<Props> = ({
  row,
  colors,
  dropCoin,
  winner
}) => {
  const classes = cn("Game-Row");

  const cellComponents = colors.map((color, index) => (
    <Cell
      row={row}
      column={index}
      onClick={dropCoin(index)}
      color={color}
      key={`cell-${index}`}
      winner={winner}
    />
  ));

  return <div className={classes}>{cellComponents}</div>;
};
