import * as util from "../ajax_util/follows_api_util";
import * as act from "../consts_and_actions/consts_and_actions";

export const createFollow = (follow) => (dispatch) =>
  util
    .createFollowRequest(follow)
    .then((result) => dispatch(act.addOrEditFollowings(result)));

export const updateFollow = (follow_id) => (dispatch) =>
  util
    .updateFollowRequest(follow_id)
    .then((result) => dispatch(act.addOrEditFollowings(result)));

export const deleteFollow = (follow_id) => (dispatch) =>
  util
    .deleteFollowRequest(follow_id)
    .then((result) => dispatch(act.deleteFollowing(result)));
