import { all, takeLatest, call, put } from "redux-saga/effects";
import { GET_USERS } from "./types";
import { setUsersAction } from "./actions";
import { getUsers } from "network/apis/users";

function* getUsersSaga() {
  try {
    const { data } = yield call(getUsers);
    yield put(setUsersAction(data));
  } catch (e) {
    console.log(e);
  }
}

function* usersSaga() {
  yield all([takeLatest(GET_USERS, getUsersSaga)]);
}

export default usersSaga;
