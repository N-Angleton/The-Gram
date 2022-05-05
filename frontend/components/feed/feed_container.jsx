import { connect } from "react-redux"
import { fetchUsersFeed } from "../../actions/post_actions"
import { Feed } from "./feed"

const mapState = state => ({
    entities: state.entities,
    errors: state.errors,
    session: state.session
})

const mapDispatch = dispatch => ({
    fetchUsersFeed: (user_id) => dispatch(fetchUsersFeed(user_id))
})

export const FeedContainer = connect(mapState, mapDispatch)(Feed)