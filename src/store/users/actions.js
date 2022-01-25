import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  GET_USERS,
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

export const editUserAction = (payload) => ({
  type: EDIT_USER,
  payload
});

export const deleteUserAction = (payload) => ({
  type: DELETE_USER,
  payload
});
