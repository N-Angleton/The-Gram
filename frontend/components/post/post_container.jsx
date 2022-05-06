import { connect } from "react-redux"
import { Post } from "./post"
import { updatePost, deletePost } from "../../actions/post_actions"

const mapState = (state, ownProps) => {
    return ({
        poster: state.entities.users[ownProps.post.poster_id],
        follows: state.entities.follows,
        session_id: state.session.id
    })
}

const mapDispatch = dispatch => ({
    updatePost: post => dispatch(updatePost(post)),
    deletePost: post_id => dispatch(deletePost(post_id))
})

export const PostContainer = connect(mapState, mapDispatch)(Post)