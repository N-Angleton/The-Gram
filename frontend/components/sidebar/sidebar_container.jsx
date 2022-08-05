import { connect } from "react-redux";
import { createFollow } from "../../actions/follow_actions";
import { Sidebar } from "./sidebar";

const mapState = (state) => ({
  users: state.entities.users,
  session: state.session,
});

const mapDispatch = (dispatch) => ({
  createFollow: (follow) => dispatch(createFollow(follow))
});

export const SidebarContainer = connect(mapState, mapDispatch)(Sidebar);