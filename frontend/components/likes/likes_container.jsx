import { connect } from "react-redux";
import { Likes } from "./likes";
import { createLike, deleteLike } from "../../actions/like_actions";

const mapState = (state, ownProps) => {
  const likeObj = state.entities.likes[ownProps.post_id];
  const likes = likeObj ? Object.values(likeObj) : [];
  return {
    likes: likes,
    likedByUser: likes.some((el) => el.users_id === state.session.id),
    likesNum: likes.length,
    session_id: state.session.id,
  };
};

const mapDispatch = (dispatch) => ({
  addLike: (like) => dispatch(createLike(like)),
  deleteLike: (like_id) => dispatch(deleteLike(like_id)),
});

export const LikesContainer = connect(mapState, mapDispatch)(Likes);
