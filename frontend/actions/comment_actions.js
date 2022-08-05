import * as util from "../ajax_util/comments_api_util";
import * as act from "../consts_and_actions/consts_and_actions";

export const createComment = (comment) => (dispatch) =>
  util
    .createComment(comment)
    .then((result) => dispatch(act.addOrEditComments(result)));

export const updateComment = (comment) => (dispatch) =>
  util
    .updateComment(comment)
    .then((result) => dispatch(act.addOrEditComments(result)));

export const deleteComment = (id) => (dispatch) =>
  util.deleteComment(id).then((result) => dispatch(act.deleteComment(result)));
