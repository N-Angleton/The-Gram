import {
  LOGOUT_CURRENT_USER,
  RECEIVE_DATA,
  RECEIVE_USER,
} from "../consts_and_actions/consts_and_actions";
import _ from "lodash";

export const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = _.merge({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      newState = _.merge(newState, action.users);
      return newState;
    case RECEIVE_DATA:
      if (!action.users) {
        return state;
      }
      return action.users;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
