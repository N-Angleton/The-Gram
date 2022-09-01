import React from "react";
import { CreatePostContainer } from "../create_post_form/create_post_container";
import { LogoutButtonContainer } from "../logout_button/logout_button_container";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse as solidHouse } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus as solidPlus } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus as plusOutline } from "@fortawesome/free-regular-svg-icons";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { createPost: false, logout: false };
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    this.props.logout();
  }

  openPost(e){
    if (e) e.preventDefault();
    this.setState({createPost: true})
    const postModal = document.getElementById("postModal");
    postModal.showModal();
  }

  closePost(e) {
    if (e) e.preventDefault();
    this.setState({createPost: false})
    const postModal = document.getElementById("postModal");
    postModal.close();
  }

  render() {
    let user = this.props.entities.users[this.props.session.id];
    return (
      <header className="header">
        <div className="innerHeader">
          <Link to={{pathname: '/'}} className="homeLink">
            <h1 className="logo">the gram</h1>
          </Link>
          <ul className="headerIcons">
          <Link to={{pathname: '/'}} className="homeFaviconLink">
          <FontAwesomeIcon className="icon" icon={solidHouse} />
          </Link>
            { this.state.createPost ? (
              <FontAwesomeIcon className="icon" icon={solidPlus} />
            ) : (
              <FontAwesomeIcon className="icon" icon={plusOutline} onClick={() => this.openPost()}/>
            )}
            <div className="dropdown">
              <img
                className="profilePhoto"
                src={user.photo_url ? user.photo_url : window.defaultPhoto}
                alt="profile photo"
              />
              <div className="dropdownContent">
                <Link to={{pathname: `/users/${user.username}`}} className="userProfileLink">
                  <p className="btn-profileLink">Profile</p>
                </Link>
                <div className="horizontalDivider">
                </div>
                <form className="logoutForm-var" onSubmit={this.handleSubmit}>
                  <button className="btn-logout-var" onClick={(e) => this.logout(e)}>Logout</button>
                </form>
              </div>
            </div>
          </ul>
          <dialog id="postModal"><CreatePostContainer closePost={this.closePost.bind(this)} /></dialog>
        </div>
      </header>
    );
  }
}
