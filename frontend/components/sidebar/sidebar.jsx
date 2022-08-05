import React from "react";
import { Link } from "react-router-dom";
import { SidebarUser } from "./sidebar_user";

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let current_user = this.props.users[this.props.session.id];
    return (
      <>
        <img
            className="currentUser"
            src={current_user.photoUrl ? current_user.photoUrl : window.defaultPhoto}
            alt="profile photo"
          />
      <Link to={`/${current_user.username}`} className="currentUserProfileLink">
        <h2>{current_user.username}</h2>
      </Link>
        <ul className="user_list">
          {this.props.users.unfollowed_users
            ? Object.values(this.props.users.unfollowed_users).map((user) => (
                <SidebarUser key={`user_${user.id}`} fetchFeed={this.props.fetchUsersFeed} current_user_id={current_user.id} user={user} createFollow={this.props.createFollow}/>
              ))
            : null}
        </ul>
      </>
    );
  }
}
