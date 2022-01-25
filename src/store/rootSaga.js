import { all, fork } from "redux-saga/effects";
import usersSaga from "./users/sagas";

export function* rootSaga() {
  yield all([fork(usersSaga)]);
}
