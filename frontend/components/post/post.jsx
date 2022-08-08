import React from "react";
import { LikesContainer } from "../likes/likes_container";
import { CommentsContainer } from "../comments/comments_container";
import { FollowInterfaceContainer } from "../follow_interface/follow_interface_container";
import { flushSync } from "react-dom";

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
        <h2 className="posterName">{this.props.poster.username}</h2>
        {this.props.poster.id === this.props.session_id ? (
          <>
            <button onClick={(e) => this.editDescription(e)}>Edit</button>
            <button onClick={(e) => this.deletePost(e)}>Delete</button>
          </>
        ) : (
          <FollowInterfaceContainer otherUser={this.props.poster.id} />
        )}
        <img className="post_img" src={this.props.post.photoUrl} alt="post" />
        <LikesContainer post_id={this.props.post.id} />
        {this.state.editing ? (
          <form className="editPostForm">
            <input
              type="text"
              value={this.state.description}
              onChange={(e) => this.updateDescription(e)}
            />
            <button onClick={(e) => this.updatePost(e)}>Repost</button>
          </form>
        ) : (
          <p className="postDescription">{this.props.post.description}</p>
        )}
        <CommentsContainer post_id={this.props.post.id} />
      </li>
    );
  }
}
