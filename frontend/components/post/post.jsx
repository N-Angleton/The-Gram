import React from "react";
import { LikesContainer } from "../likes/likes_container";
import { CommentsContainer } from "../comments/comments_container";
import { FollowInterfaceContainer } from "../follow_interface/follow_interface_container";
import { flushSync } from "react-dom";
import { Link } from "react-router-dom";

export class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: this.props.post.description, editing: false };
    this.editDescription = this.editDescription.bind(this);
    this.switchEditing = this.switchEditing.bind(this);
  }

  editDescription(e) {
    e.preventDefault();
    flushSync(() => {
      this.switchEditing();
    });
  }

  switchEditing() {
    this.setState({ editing: !this.state.editing });
  }

  updateDescription(e) {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  updatePost(e) {
    e.preventDefault();
    this.props
      .updatePost({
        id: this.props.post.id,
        description: this.state.description,
      })
      .then(() => this.switchEditing());
  }

  deletePost(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post.id);
  }

  render() {
    return (
      <li className="postItem">
        <div className="postHeader">
          <img
            className="postUserImg"
            src={this.props.poster.photo_url ? this.props.poster.photo_url : window.defaultPhoto}
            alt="profile photo"
          />
          <Link to={{pathname: `/users/${this.props.poster.username}`}} className="userProfileLink">
            <h2 className="posterName">{this.props.poster.username}</h2>
          </Link>
          <div className="btn-block">
          {this.props.poster.id === this.props.session_id ? (
            <>
              <button className="btn-2" onClick={(e) => this.editDescription(e)}>edit</button>
              <span className="btn-divider">|</span>
              <button className="btn-2" onClick={(e) => this.deletePost(e)}>delete</button>
            </>
              ) : (
                <FollowInterfaceContainer otherUser={this.props.poster.id} />
                )}
          </div>
        </div>
        <img className="post_img" src={this.props.post.photoUrl} alt="post" />
        <LikesContainer post_id={this.props.post.id} />
        <div className="descriptionBlock">
          {this.state.editing ? (
            <form className="editPostForm">
              <Link to={{pathname: `/users/${this.props.poster.username}`}} className="userProfileLink">
                <span className="posterNameForDescription">{this.props.poster.username}</span>
              </Link>
              <input
                type="text"
                className="postDescription postEditInput"
                value={this.state.description}
                onChange={(e) => this.updateDescription(e)}
              />
              <button onClick={(e) => this.updatePost(e)} className="btn editPostBtn">Repost</button>
            </form>
          ) : (
            <p className="postDescription"><Link to={{pathname: `/users/${this.props.poster.username}`}} className="userProfileLink">
            <span className="posterNameForDescription">{this.props.poster.username}</span>
          </Link>{this.props.post.description}</p>
          )}
        </div>
        <CommentsContainer post_id={this.props.post.id} />
      </li>
    );
  }
}
