import * as session from "../ajax_util/session_api_util";
import * as users from "../ajax_util/users_api_util";
import * as act from "../consts_and_actions/consts_and_actions";

export const signup = (user) => (dispatch) =>
  users
    .signup(user)
    .then((result) => dispatch(act.receiveUser(result)))
    .fail((errors) => dispatch(act.receiveSessionErrors(errors.responseJSON)));

export const login = (user) => (dispatch) =>
  session
    .login(user)
    .then((result) => dispatch(act.receiveUser(result)))
    .fail((errors) => dispatch(act.receiveSessionErrors(errors.responseJSON)));

export const logout = () => (dispatch) =>
  session.logout().then(() => dispatch(act.logoutCurrentUser()));

export const deleteAccount = (user_id) => (dispatch) =>
  users
    .deleteAccount(user_id)
    .then(() => dispatch(act.logoutCurrentUser()))
    .fail((errors) => dispatch(act.receiveSessionErrors(errors.responseJSON)));

export const updateAccount = (user) => (dispatch) =>
  users.updateAccount(user).then((result) => dispatch(act.receiveUser(result)));

export const fetchProfile = (id) => (dispatch) =>
  users.fetchProfile(id).then((result) => dispatch(act.receiveData(result)));
