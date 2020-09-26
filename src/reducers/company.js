import {
  GET_COMPANY_LIST_SUCCESS,
  GET_COMPANY_LIST_FAIL,
} from "../actions/types";

const initialState = []

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COMPANY_LIST_SUCCESS:
      return {
        ...state,
        companies: payload.companies,
      };
    case GET_COMPANY_LIST_FAIL:
      return {
        ...state,
        companies: [],
      };
    default:
      return state;
  }
}