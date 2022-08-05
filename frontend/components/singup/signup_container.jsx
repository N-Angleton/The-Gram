import { connect } from "react-redux";
import { Signup } from "./signup";
import { signup } from "../../actions/session_actions";

const mapState = (state) => ({
  entities: state.entities,
  errors: state.errors,
  session: state.session,
});

const mapDispatch = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
});

export const SignupContainer = connect(mapState, mapDispatch)(Signup);
