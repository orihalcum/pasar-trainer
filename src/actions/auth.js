import {
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
  SET_MESSAGE,
  LOGOUT,
} from "./types";

import AuthService from "../services/auth";

export const getUserInfo = (payload) => (dispatch) => {
  return AuthService.getUserInfo(payload).then(
  (data) => {
    dispatch({
      type: GET_USER_INFO_SUCCESS,
      payload: { user: data },
    });

    return Promise.resolve();
  }, (error) => {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();

    dispatch({
      type: GET_USER_INFO_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  })
}

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};