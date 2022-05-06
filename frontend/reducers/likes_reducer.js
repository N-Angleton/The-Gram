import { ADD_OR_EDIT_LIKES, DELETE_LIKE, LOGOUT_CURRENT_USER, RECEIVE_DATA } from "../consts_and_actions/consts_and_actions";
import _ from "lodash";

export const likesReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = _.merge({}, state)
    let id
    let posts_id
    switch (action.type) {
        case RECEIVE_DATA:
            if (!action.likes){return state}
            return action.likes
        case ADD_OR_EDIT_LIKES:
            posts_id = Object.keys(action.likes)[0]
            id = Object.keys(action.likes[posts_id])[0]
            if (!newState[posts_id]) {newState[posts_id] = {}}
            newState[posts_id][id] = action.likes[posts_id][id]
            return newState
        case DELETE_LIKE:
            delete newState[action.posts_id][action.id]
            return newState
        case LOGOUT_CURRENT_USER:
                return {}
        default:
            return state
    }
}