import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { LogoutButton } from "./logout_button";

const mapState = (state) => ({
  entities: state.entities,
  errors: state.errors,
  session: state.session,
});

const mapDispatch = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export const LogoutButtonContainer = connect(
  mapState,
  mapDispatch
)(LogoutButton);
