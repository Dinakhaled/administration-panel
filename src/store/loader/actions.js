import * as types from "./types";

export const showHideLoader = (data) => ({
  type: types.SHOW_HIDE_LOADER,
  payload: data
});
