import { connect } from "react-redux"
import { fetchUsersFeed } from "../../actions/post_actions"
import { addOrEditComments, addOrEditLikes } from "../../consts_and_actions/consts_and_actions"
import { Feed } from "./feed"

const mapState = state => ({
    posts: state.entities.posts,
    likes: state.entities.likes,
    comments: state.entities.comments,
    follows: state.entities.follows,
    session: state.session
})

const mapDispatch = dispatch => ({
    fetchUsersFeed: user_id => dispatch(fetchUsersFeed(user_id)),
    addOrEditLikes: like => dispatch(addOrEditLikes(like)),
    addOrEditComments: comment => dispatch(addOrEditComments(comment))
})

export const FeedContainer = connect(mapState, mapDispatch)(Feed)