import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions"

const defaultState = {id: null}

export const sessionReducer = (state = defaultState, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState.id = action.user.id
            return newState
        case LOGOUT_CURRENT_USER:
            return defaultState
        default:
            return state;
    }
}