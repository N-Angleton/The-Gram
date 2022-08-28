import { connect } from "react-redux";
import { deleteFollow, createFollow } from "../../actions/follow_actions";
import { FollowInterface } from "./follow_interface";
import { fetchUsersFeed } from "../../actions/post_actions";

const mapState = (state) => {
  return {
    follows: state.entities.follows[state.session.id],
    current_user_id: state.session.id,
  };
};

const mapDispatch = (dispatch) => ({
  createFollow: (follow) => dispatch(createFollow(follow)),
  deleteFollow: (follow_id) => dispatch(deleteFollow(follow_id)),
  fetchUsersFeed: (user_id) => dispatch(fetchUsersFeed(user_id)),
});

export const FollowInterfaceContainer = connect(
  mapState,
  mapDispatch
)(FollowInterface);