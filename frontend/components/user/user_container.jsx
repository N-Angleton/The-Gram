import { connect } from "react-redux";
import { deleteFollow, createFollow } from "../../actions/follow_actions";
import { fetchUserProfile } from "../../actions/user_actions";
import { User } from "./user";

const mapState = (state) => {
  return {
    posts: state.entities.posts,
    likes: state.entities.likes,
    follows: state.entities.follows,
    users: state.entities.users,
    current_user_id: state.session.id,
  };
};

const mapDispatch = (dispatch) => ({
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (follow_id) => dispatch(deleteFollow(follow_id)),
  fetchUserProfile: (user_id) => dispatch(fetchUserProfile(user_id)),
});

export const UsersContainer = connect(
  mapState,
  mapDispatch
)(User);