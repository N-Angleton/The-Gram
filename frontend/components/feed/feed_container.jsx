import { connect } from "react-redux"
import { logout } from "../../actions/session_actions"
import { Feed } from "./feed"

const mapState = state => ({
    entities: state.entities,
    errors: state.errors,
    session: state.session
})

const mapDispatch = dispatch => ({
    logout: () => dispatch(logout())
})

export const FeedContainer = connect(mapState, mapDispatch)(Feed)