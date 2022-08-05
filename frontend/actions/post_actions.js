import * as util from "../ajax_util/posts_api_util";
import * as act from "../consts_and_actions/consts_and_actions";

export const fetchAllPosts = () => (dispatch) =>
  util.fetchAllPosts().then((result) => dispatch(act.receiveData(result)));

export const fetchUsersFeed = (id) => (dispatch) =>
  util.fetchUsersFeed(id).then((result) => dispatch(act.receiveData(result)));

export const createPost = (post) => (dispatch) =>
  util.createPost(post).then((result) => dispatch(act.addOrEditPost(result)));

export const updatePost = (post) => (dispatch) =>
  util.updatePost(post).then((result) => dispatch(act.addOrEditPost(result)));

export const deletePost = (post_id) => (dispatch) =>
  util.deletePost(post_id).then(() => dispatch(act.deletePost(post_id)));
