import { RECEIVE_POSTS, RECEIVE_POST_ERRORS } from "../actions/post_actions"

export const postsErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_POST_ERRORS:
            return action.errors
        case RECEIVE_POSTS:
            return []
        default:
            return state
    }
}