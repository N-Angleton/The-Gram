import {
  ADD_OR_EDIT_POSTS,
  DELETE_POST,
  LOGOUT_CURRENT_USER,
  RECEIVE_DATA,
} from "../consts_and_actions/consts_and_actions";
import _ from "lodash";

export const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = _.merge({}, state);
  switch (action.type) {
    case RECEIVE_DATA:
      if (!action.posts) {
        return {};
      }
      return action.posts;
    case ADD_OR_EDIT_POSTS:
      newState = _.merge(newState, action.posts);
      return newState;
    case DELETE_POST:
      delete newState[action.post_id];
      return newState;
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};
