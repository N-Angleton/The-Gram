import { combineReducers } from "redux";
import { followingsReducer } from "./followings_reducer";
import { postsReducer } from "./posts_reducer";
import { usersReducer } from "./users_reducer";
import { commmentsReducer } from "./comments_reducer";
import { likesReducer } from "./likes_reducer";

export const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  follows: followingsReducer,
  comments: commmentsReducer,
  likes: likesReducer,
});
