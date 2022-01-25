import * as types from "./types";

const INITIAL_STATE = false;

const loader = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_HIDE_LOADER:
      return action.payload;
    default:
      return state;
  }
};

export default loader;
