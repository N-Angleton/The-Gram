import {
  ADD_OR_EDIT_FOLLOWINGS,
  DELETE_FOLLOWING,
  LOGOUT_CURRENT_USER,
  RECEIVE_DATA,
} from "../consts_and_actions/consts_and_actions";
import _ from "lodash";

export const followingsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = _.merge({}, state);
  switch (action.type) {
    case RECEIVE_DATA:
      if (!action.followings) {
        return state;
      }
      return action.followings;
    case ADD_OR_EDIT_FOLLOWINGS:
      newState[action.user_id].unapproved_followers.some(
        (el) => Object.keys(el) == action.other_user_id
      )
        ? newState[action.user_id].approved_followers.push({
            [action.other_user_id]: action.follow_id,
          })
        : newState[action.user_id].pending_follows.push({
            [action.other_user_id]: action.follow_id,
          });
      return newState;
    case DELETE_FOLLOWING:
      newState[action.user_id].approved_followers = newState[
        action.user_id
      ].approved_followers.filter(
        (el) => Object.keys(el) != action.other_user_id
      );
      newState[action.user_id].unapproved_followers = newState[
        action.user_id
      ].unapproved_followers.filter(
        (el) => Object.keys(el) != action.other_user_id
      );
      newState[action.user_id].approved_follows = newState[
        action.user_id
      ].approved_follows.filter(
        (el) => Object.keys(el) != action.other_user_id
      );
      newState[action.user_id].pending_follows = newState[
        action.user_id
      ].pending_follows.filter((el) => Object.keys(el) != action.other_user_id);
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
