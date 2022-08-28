import { fetchProfile } from "../ajax_util/users_api_util";
import { receiveData } from "../consts_and_actions/consts_and_actions";

export const fetchUserProfile = (id) => (dispatch) =>
  fetchProfile(id).then((result) => dispatch(receiveData(result)));