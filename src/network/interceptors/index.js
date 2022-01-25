import store from "store";
import { showHideLoader } from "store/loader/actions";

export const requestHandler = (request) => {
  store.dispatch(showHideLoader(true));
  return request;
};

export const successHandler = (response) => {
  store.dispatch(showHideLoader(false));
  return response;
};

export const errorHandler = (error) => {
  store.dispatch(showHideLoader(false));
  return Promise.reject({ ...error });
};
