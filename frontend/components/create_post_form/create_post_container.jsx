import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import { CreatePostForm } from "./create_post";

const mapState = (state) => ({
  entities: state.entities,
  errors: state.errors,
  session: state.session,
});

const mapDispatch = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post))
});

export const CreatePostContainer = connect(
  mapState,
  mapDispatch
)(CreatePostForm);
