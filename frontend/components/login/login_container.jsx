import { connect } from "react-redux"
import { login } from "../../actions/session_actions"
import { Login } from "./login"

const mapState = state => ({
    entities: state.entities,
    errors: state.errors,
    session: state.session
})

const mapDispatch = dispatch => ({
    processForm: user => dispatch(login(user))
})

export const LoginContainer = connect(mapState, mapDispatch)(Login)