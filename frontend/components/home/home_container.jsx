import { connect } from "react-redux"
import { createPost, fetchAllPosts } from "../../actions/post_actions"
import { logout } from "../../actions/session_actions"
import { Home } from "./home"

const mapState = state => ({
    entities: state.entities,
    errors: state.errors,
    session: state.session
})

const mapDispatch = dispatch => ({
    logout: () => dispatch(logout()),
    createPost: post => dispatch(createPost(post)),
    fetchAllPosts: () => dispatch(fetchAllPosts())
})

export const HomeContainer = connect(mapState, mapDispatch)(Home)