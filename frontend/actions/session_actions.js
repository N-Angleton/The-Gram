import * as utils from "../ajax_util/session_api_util"

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const signup = user => dispatch => (
    utils.signup(user)
    .then( user => dispatch(receiveCurrentUser(user)))
    .fail( errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const login = user => dispatch => (
    utils.login(user)
    .then( user => dispatch(receiveCurrentUser(user)))
    .fail( errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const logout = () => dispatch => (
    utils.logout()
    .then( () => dispatch(logoutCurrentUser()))
    .fail( errors => dispatch(receiveErrors(errors.responseJSON)))
)