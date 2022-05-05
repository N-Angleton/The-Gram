export const RECEIVE_USER = 'RECEIVE_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

export const RECEIVE_DATA = 'RECEIVE_DATA'

export const ADD_OR_EDIT_COMMENTS = 'ADD_OR_EDIT_COMMENTS'
export const ADD_OR_EDIT_LIKES = 'ADD_OR_EDIT_LIKES'
export const ADD_OR_EDIT_FOLLOWINGS = 'ADD_OR_EDIT_FOLLOWINGS'
export const ADD_OR_EDIT_POSTS = 'ADD_OR_EDIT_POST'

export const DELETE_COMMENT = 'DELETE_COMMENT'
export const DELETE_LIKE = 'DELETE_LIKE'
export const DELETE_FOLLOWING = 'DELETE_FOLLOWING'
export const DELETE_POST = 'DELETE_POST'

export const RECEIVE_POST = 'RECEIVE_POST'





export const deleteComment = (comment_id) => ({
    type: DELETE_COMMENT,
    comment_id
})

export const deleteLike = (like_id) => ({
    type: DELETE_LIKE,
    like_id
})

export const deleteFollowing = (follow_id) => ({
    type: DELETE_FOLLOWING,
    follow_id
})

export const deletePost = (post_id) => ({
    type: DELETE_POST,
    post_id
})





export const addOrEditComments = ({comments}) => ({
    type: ADD_OR_EDIT_COMMENTS,
    comments
})

export const addOrEditLikes = ({likes}) => ({
    type: ADD_OR_EDIT_LIKES,
    likes
})

export const addOrEditFollowings = ({followings}) => ({
    type: ADD_OR_EDIT_FOLLOWINGS,
    followings
})

export const addOrEditPost = ({posts}) => ({
    type: ADD_OR_EDIT_POSTS,
    posts
})





export const receiveData = ({posts, comments, users, likes, followings}) => ({
    type: RECEIVE_DATA,
    posts, comments, users, likes, followings
})

export const receiveUser = ({users, session}) => ({
    type: RECEIVE_USER,
    users, session
})

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})