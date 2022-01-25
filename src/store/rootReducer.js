import { combineReducers } from "redux";

import users from "./users/reducer";
import loader from "./loader/reducer";
import snackbar from "./snackbar/reducers";

const appReducer = combineReducers({
  users,
  loader,
  snackbar
});

export default appReducer;
