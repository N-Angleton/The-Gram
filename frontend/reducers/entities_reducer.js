import { combineReducers } from "redux";
import { postsReducer } from "./posts_reducer";
import { usersReducer } from "./users_reducer";

export const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer
})