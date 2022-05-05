import * as util from "../ajax_util/follows_api_util"
import * as act from "../consts_and_actions/consts_and_actions"

export const createFollow = (follow) => dispatch => (
    util.createFollowRequest(follow)
    .then( result => dispatch(act.addOrEditFollowings(result)))
)

export const updateFollow = (follow) => dispatch => (
    util.updateFollowRequest(follow)
    .then( result => dispatch(act.addOrEditFollowings(result)))
)

export const deleteFollow = (id) => dispatch => (
    util.deleteFollowRequest(id)
    .then( () => dispatch(act.deleteFollowing(id)))
)