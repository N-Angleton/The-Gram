import React from "react";
import { CreatePostContainer } from "../create_post_form/create_post_container";
import { LogoutButtonContainer } from "../logout_button/logout_button_container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse as solidHouse } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus as solidPlus } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus as plusOutline } from "@fortawesome/free-regular-svg-icons";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    // this.postModal = document.getElementById("postModal");
    this.state = { createPost: false, logout: false };
  }

  openPost(e){
    if (e) e.preventDefault();
    this.setState({createPost: true})
    const postModal = document.getElementById("postModal");
    postModal.showModal();
  }

  closePost(e) {
    console.log('inside close')
    if (e) e.preventDefault();
    this.setState({createPost: false})
    const postModal = document.getElementById("postModal");
    postModal.close();
  }

  render() {
    let user = this.props.entities.users[this.props.session.id];
    return (
      <header className="header">
        <h1 className="logo">the gram</h1>
        <ul className="headerIcons">
          <FontAwesomeIcon className="icon" icon={solidHouse} />
          { this.state.createPost ? (
            <FontAwesomeIcon className="icon" icon={solidPlus} />
          ) : (
            <FontAwesomeIcon className="icon" icon={plusOutline} onClick={() => this.openPost()}/>
          )}
          <img
            className="profilePhoto"
            src={user.photoUrl ? user.photoUrl : window.defaultPhoto}
            alt="profile photo"
          />
          {/* <LogoutButtonContainer /> */}
        </ul>
        <dialog id="postModal"><CreatePostContainer closePost={this.closePost.bind(this)} /></dialog>
      </header>
    );
  }
}
