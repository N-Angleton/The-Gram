import { combineReducers } from "redux";
import { postsErrorsReducer } from "./posts_errors_reducer";
import { sessionErrorsReducer } from "./session_errors_reducer";

export const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    posts: postsErrorsReducer
})