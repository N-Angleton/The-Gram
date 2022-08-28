import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import { updateAccount } from "../../actions/session_actions";
import { EditPic } from "./edit_pic";

const mapState = (state) => ({
  entities: state.entities,
  errors: state.errors,
  session: state.session,
});

const mapDispatch = (dispatch) => ({
  updateAccount: user => dispatch(updateAccount(user))
});

export const EditPicContainer = connect(
  mapState,
  mapDispatch
)(EditPic);
