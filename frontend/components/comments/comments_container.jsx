import { connect } from "react-redux";
import { Comments } from "./comments";
import {
  createComment,
  updateComment,
  deleteComment,
} from "../../actions/comment_actions";

const mapState = (state, ownProps) => {
  return {
    commentsOnPost: state.entities.comments[ownProps.post_id],
    users: state.entities.users,
    session_id: state.session.id,
  };
};

const mapDispatch = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (comment_id) => dispatch(deleteComment(comment_id)),
});

export const CommentsContainer = connect(mapState, mapDispatch)(Comments);
