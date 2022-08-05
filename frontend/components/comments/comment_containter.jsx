import { connect } from "react-redux";
import { Comment } from "./comment";
import { updateComment, deleteComment } from "../../actions/comment_actions";

const mapState = (state, ownProps) => {
  return {
    commenter: state.entities.users[ownProps.comment.users_id],
    follows: state.entities.follows[state.session.id],
    session_id: state.session.id,
  };
};

const mapDispatch = (dispatch) => ({
  updateComment: (comment) => dispatch(updateComment(comment)),
  deleteComment: (comment_id) => dispatch(deleteComment(comment_id)),
});

export const CommentContainer = connect(mapState, mapDispatch)(Comment);
