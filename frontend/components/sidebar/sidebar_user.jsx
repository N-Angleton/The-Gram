import React from "react";
import { Link } from "react-router-dom";

export const SidebarUser = (props) => (
  <div className="signupLinkContainer">
    <img
      className="sidebar_other_users"
      src={props.user.photoUrl ? props.user.photoUrl : window.defaultPhoto}
      alt="profile photo"
    />
     <Link to={`/${props.user.username}`} className="userProfileLink">
      <h3>{props.user.username}</h3>
     </Link>
     <button onClick={() => {props.createFollow({
      approved: true,
      follower_id: props.current_user_id,
      user_to_be_followed_id: props.user.id,
    }).then(() => props.fetchFeed(props.current_user_id))}}>Follow</button>
  </div>
);
