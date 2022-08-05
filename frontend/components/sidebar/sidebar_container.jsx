import { connect } from "react-redux";
import { createFollow } from "../../actions/follow_actions";
import { Sidebar } from "./sidebar";
import { fetchUsersFeed } from "../../actions/post_actions";

const mapState = (state) => ({
  users: state.entities.users,
  session: state.session,
});

const mapDispatch = (dispatch) => ({
  createFollow: (follow) => dispatch(createFollow(follow)),
  fetchUsersFeed: (user_id) => dispatch(fetchUsersFeed(user_id))
});

export const SidebarContainer = connect(mapState, mapDispatch)(Sidebar);