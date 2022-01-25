import {
  ADD_USER,
  DELETE_USER,
  DELETE_USER_ID,
  EDIT_USER,
  GET_USERS,
  SET_ADD_USER,
  SET_DELETE_USER,
  SET_EDIT_USER,
  SET_USERS
} from "./types";

export const getUsersAction = () => ({
  type: GET_USERS
});

export const setUsersAction = (payload) => ({
  type: SET_USERS,
  payload
});

export const addUserAction = (payload) => ({
  type: ADD_USER,
  payload
});

export const setAddUserAction = (payload) => ({
  type: SET_ADD_USER,
  payload
});

export const editUserAction = (payload) => ({
  type: EDIT_USER,
  payload
});

export const setEditUserAction = (payload) => ({
  type: SET_EDIT_USER,
  payload
});

export const deleteUserAction = (payload) => ({
  type: DELETE_USER,
  payload
});

export const setDeleteUserAction = (payload) => ({
  type: SET_DELETE_USER,
  payload
});

export const deleteUserIdAction = (payload) => ({
  type: DELETE_USER_ID,
  payload
});
