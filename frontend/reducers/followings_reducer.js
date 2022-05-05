import { ADD_OR_EDIT_FOLLOWINGS, DELETE_FOLLOWING, LOGOUT_CURRENT_USER, RECEIVE_DATA } from "../consts_and_actions/consts_and_actions";
import _ from "lodash";

const defaultState = {
    approved_followers: [],
    unapproved_followers: [],
    approved_follows: [],
    pending_follows: []
}

export const followingsReducer = (state = defaultState, action) => {
    Object.freeze(state)
    let newState = _.merge({}, state)
    switch (action.type) {
        case RECEIVE_DATA:
            if (!action.followings){return state}
            return action.followings
        case ADD_OR_EDIT_FOLLOWINGS:
            newState.approved_follows = newState.approved_followers.push(action.approved_followers.first)
            return newState
        case DELETE_FOLLOWING:
            newState.approved_followers = newState.approved_followers.filter(function(ele){ return ele != action.follow_id })
            newState.unapproved_followers = newState.unapproved_followers.filter(function(ele){ return ele != action.follow_id })
            newState.approved_follows = newState.approved_follows.filter(function(ele){ return ele != action.follow_id })
            newState.pending_follows = newState.pending_follows.filter(function(ele){ return ele != action.follow_id })
            return newState
        case LOGOUT_CURRENT_USER:
                return defaultState
        default:
            return state
    }
}