import * as types from "./types";

const INITIAL_STATE = {
  showSnackbar: false,
  message: "Process successful",
  type: "success"
};

const snackbar = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_HIDE_SNACKBAR:
      return {
        ...state,
        showSnackbar: action.payload.isOpen,
        message: action.payload.message,
        type: action.payload.type
      };
    default:
      return state;
  }
};

export default snackbar;
