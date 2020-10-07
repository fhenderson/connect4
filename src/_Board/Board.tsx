import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { RootState } from "../stores";
import { getBoard, getCurrentPlayer, getWinner } from "../stores/selectors";
import { Row } from "../components/Row";
import { dropCoin } from "../stores/game/actions/dropCoin";
import { resetBoard } from "../stores/game/actions/resetBoard";
import Color from "../types/color";

interface Props {
  board: ReturnType<typeof getBoard>;
  color: ReturnType<typeof getCurrentPlayer>;
  winner: ReturnType<typeof getWinner>;
  dropCoin: typeof dropCoin;
  resetBoard: typeof resetBoard;
}

export class BoardComponent extends React.Component<Props> {
  dropCoin = (column: number) => () => {
    // we only allow a player to drop a coin if there is no winner yet
    if (!this.props.winner) {
      this.props.dropCoin(column, this.props.color);
    }
  };

  displayHeader() {
    // only display the winner if there is one
    if (this.props.winner) {
      return <h2>Congratulations, {this.props.winner.color} wins the game!</h2>;
    } else {
      return <h2>It's {this.props.color}'s turn to play</h2>;
    }
  }

  displayRow = (colors: Color[], key: number) => {
    return (
      <Row
        row={key}
        dropCoin={this.dropCoin}
        colors={colors}
        key={`column-${key}`}
        winner={this.props.winner}
      />
    );
  };

  resetBoard = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    this.props.resetBoard();
  };

  getResetButtonStyle() {
    return {
      margin: "10px",
      padding: "4px",
      borderRadius: "3px",
      color: "white",
      backgroundColor: this.props.winner ? "green" : "red"
    };
  }

  render() {
    const classes = cn("Game-Board");

    return (
      <>
        {this.displayHeader()}

        <div className="Game">
          <div className={classes}>{this.props.board.map(this.displayRow)}</div>
        </div>

        <button onClick={this.resetBoard} style={this.getResetButtonStyle()}>
          Reset
        </button>
      </>
    );
  }
}

const mapState = (state: RootState) => ({
  board: getBoard(state),
  color: getCurrentPlayer(state),
  winner: getWinner(state)
});

export const Board = connect(mapState, { dropCoin, resetBoard })(
  BoardComponent
);
