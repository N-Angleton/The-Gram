import * as util from "../ajax_util/post_api_util"

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS'

const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
})

const receiveErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
})

export const fetchAllPosts = () => dispatch => (
    util.fetchAllPosts()
    .then( posts => dispatch(receivePosts(posts)))
)

export const createPost = post => dispatch => (
    util.createPost(post)
    .then( post => dispatch(receivePosts(post)))
    .fail( errors => dispatch(receiveErrors(errors.responseJSON)))
)