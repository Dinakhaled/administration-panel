import * as types from "./types";

export const showHideSnackbar = (data) => ({
  type: types.SHOW_HIDE_SNACKBAR,
  payload: data
});
