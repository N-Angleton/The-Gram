import { RECEIVE_POSTS } from "../actions/post_actions";

export const postsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_POSTS:
            return Object.assign(newState, action.posts)
        default:
            return state
    }
}