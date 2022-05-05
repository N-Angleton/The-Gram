import { ADD_OR_EDIT_COMMENTS, DELETE_COMMENT, LOGOUT_CURRENT_USER, RECEIVE_DATA } from "../consts_and_actions/consts_and_actions";
import _ from "lodash";

export const commmentsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = ({}, state)
    let id
    let posts_id
    switch (action.type) {
        case RECEIVE_DATA:
            if (!action.comments){return state}
            return action.comments
        case ADD_OR_EDIT_COMMENTS:
            id = Object.values(action.comments).first.id
            posts_id = Object.values(action.comments).first.posts_id
            newState[posts_id][id] = action.comments.posts_id.id
            return newState
        case DELETE_COMMENT:
            id = Object.values(action.comments).first.id
            posts_id = Object.values(action.comments).first.posts_id
            delete newState[posts_id][id]
            return newState
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state
    }
}
