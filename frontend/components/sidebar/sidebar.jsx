import React from "react";
import { Link } from "react-router-dom";
import { LogoutButtonContainer } from "../logout_button/logout_button_container";
import { MyLinks } from "../my_links";
import { SidebarUser } from "./sidebar_user";

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let current_user = this.props.users[this.props.session.id];
    return (
      <>
        <div className="currentUserContainer">
          <img
            className="currentUserPhoto"
            src={
              current_user.photo_url
                ? current_user.photo_url
                : window.defaultPhoto
            }
            alt="profile photo"
          />
          <div className="usernameAndFullname">
            <Link
              to={{pathname: `/users/${current_user.username}`, state: { id: this.props.session.id }}}
              className="currentUserProfileLink"
            >
              <h2>{current_user.username}</h2>
            </Link>
            <h2 className="fullname">{current_user.full_name}</h2>
          </div>
          <LogoutButtonContainer />
        </div>
        <h2 className="suggestions">Suggestions For You</h2>
        <ul className="user_list">
          {this.props.users.unfollowed_users
            ? Object.values(this.props.users.unfollowed_users).map((user) => (
                <SidebarUser
                  key={`user_${user.id}`}
                  fetchFeed={this.props.fetchUsersFeed}
                  current_user_id={current_user.id}
                  user={user}
                  createFollow={this.props.createFollow}
                />
              ))
            : null}
        </ul>
        <MyLinks/>
      </>
    );
  }
}
