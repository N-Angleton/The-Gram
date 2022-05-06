import { connect } from "react-redux"
import { addOrEditComments, addOrEditLikes, addOrEditPost, addOrEditFollowings, deleteComment, deleteLike, deletePost, deleteFollowing } from "../../consts_and_actions/consts_and_actions"
import { Post } from "./post"

const mapState = (state, ownProps) => {
    return ({
        poster: state.entities.users[ownProps.post.poster_id],
        follows: state.entities.follows,
        session_id: state.session.id
    })
}

const mapDispatch = dispatch => ({
    addOrEditLikes: like => dispatch(addOrEditLikes(like)),
    addOrEditComments: comment => dispatch(addOrEditComments(comment)),
    addOrEditPost: post => dispatch(addOrEditPost(post)),
    addOrEditFollowings: following => dispatch(addOrEditFollowings(following)),
    deleteLike: like_id => dispatch(deleteLike(like_id)),
    deleteComment: comment_id => dispatch(deleteComment(comment_id)),
    deletePost: post_id => dispatch(deletePost(post_id)),
    deleteFollowing: following_id => dispatch(deleteFollowing(following_id)),
})

export const PostContainer = connect(mapState, mapDispatch)(Post)