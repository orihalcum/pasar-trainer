import {
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
  LOGOUT,
} from "../actions/types";
import { SITE_COOKIES } from "../config";
import { getCookie } from "../utils/cookies";

const user = {
  name: getCookie(SITE_COOKIES.NAME),
  email: getCookie(SITE_COOKIES.EMAIL),
}

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case GET_USER_INFO_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}