import {
  RECEIVE_USER,
  RECEIVE_SESSION_ERRORS,
  LOGOUT_CURRENT_USER,
} from "../consts_and_actions/consts_and_actions";
import { combineReducers } from "redux";

export const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_USER:
      return [];
    case LOGOUT_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
});
