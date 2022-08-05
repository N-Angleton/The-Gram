import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import { Login } from "./login";

const mapState = (state) => ({
  errors: state.errors,
  session: state.session.id,
});

const mapDispatch = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
});

export const LoginContainer = connect(mapState, mapDispatch)(Login);
