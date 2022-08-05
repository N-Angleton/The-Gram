import * as util from "../ajax_util/likes_api_util";
import * as act from "../consts_and_actions/consts_and_actions";

export const createLike = (like) => (dispatch) =>
  util.createLike(like).then((result) => dispatch(act.addOrEditLikes(result)));

export const deleteLike = (id) => (dispatch) =>
  util.deleteLike(id).then((result) => dispatch(act.deleteLike(result)));
