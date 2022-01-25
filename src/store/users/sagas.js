import { all, takeLatest, call, put } from "redux-saga/effects";
import { ADD_USER, DELETE_USER, EDIT_USER, GET_USERS } from "./types";
import { setAddUserAction, setUsersAction } from "./actions";
import {
  addUser,
  deleteUser,
  editUser,
  getUsers
} from "network/apis/users";

function* getUsersSaga() {
  try {
    const { data } = yield call(getUsers);
    yield put(setUsersAction(data));
  } catch (e) {
    console.log(e);
  }
}

function* addUserSaga({ payload }) {
  try {
    yield call(addUser, payload);
    yield put(setAddUserAction(payload));
  } catch (e) {
    console.log(e);
  }
}

function* editUserSaga({ payload }) {
  try {
    yield call(editUser, payload);
    yield put(setAddUserAction(payload));
  } catch (e) {
    console.log(e);
  }
}

function* deleteUserSaga({ payload }) {
  try {
    yield call(deleteUser, payload);
    yield put(setAddUserAction(payload));
  } catch (e) {
    console.log(e);
  }
}

function* usersSaga() {
  yield all([takeLatest(GET_USERS, getUsersSaga)]);
  yield all([takeLatest(ADD_USER, addUserSaga)]);
  yield all([takeLatest(EDIT_USER, editUserSaga)]);
  yield all([takeLatest(DELETE_USER, deleteUserSaga)]);
}

export default usersSaga;
