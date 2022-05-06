import { ADD_OR_EDIT_COMMENTS, DELETE_COMMENT, LOGOUT_CURRENT_USER, RECEIVE_DATA } from "../consts_and_actions/consts_and_actions";
import _ from "lodash";

export const commmentsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = _.merge({}, state)
    let id
    let posts_id
    switch (action.type) {
        case RECEIVE_DATA:
            if (!action.comments){return state}
            return action.comments
        case ADD_OR_EDIT_COMMENTS:
            posts_id = Object.keys(action.comments)[0]
            id = Object.keys(action.comments[posts_id])[0]
            if (!newState[posts_id]) {newState[posts_id] = {}}
            newState[posts_id][id] = action.comments[posts_id][id]
            return newState
        case DELETE_COMMENT:
            delete newState[action.posts_id][action.id]
            return newState
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state
    }
}
