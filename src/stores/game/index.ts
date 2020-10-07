import { reducer as board } from "./reducer";
import { combineReducers } from "redux";

export const reducer = combineReducers({
  board
});

export type LocalState = ReturnType<typeof reducer>;
