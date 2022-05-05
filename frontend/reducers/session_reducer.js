import { LOGOUT_CURRENT_USER, RECEIVE_USER } from "../consts_and_actions/consts_and_actions"
import _ from "lodash";

const defaultState = {id: null}

export const sessionReducer = (state = defaultState, action) => {
    Object.freeze(state)
    let newState = _.merge({}, state)
    switch (action.type) {
        case RECEIVE_USER:
            newState.id = action.session
            return newState
        case LOGOUT_CURRENT_USER:
            return defaultState
        default:
            return state;
    }
}