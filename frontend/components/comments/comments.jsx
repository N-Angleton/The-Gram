import React from "react";
import { CommentContainer } from "./comment_containter";

export class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
    this.submitComment = this.submitComment.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  }

  submitComment(e) {
    e.preventDefault();
    this.props
      .createComment({
        users_id: this.props.session_id,
        posts_id: this.props.post_id,
        body: this.state.body,
      })
      .then(() => this.setState({ body: "" }));
  }

  render() {
    const commentsArr = this.props.commentsOnPost
      ? Object.values(this.props.commentsOnPost)
      : [];
    return (
      <div className="commentsListContainer">
        <ul className="commentsList">
          {commentsArr.length
            ? commentsArr.map((comment) => (
                <CommentContainer
                  key={`comments${comment.id}`}
                  comment={comment}
                />
              ))
            : null}
        </ul>
        <form className="commentForm">
          <input
            type="textarea"
            placeholder="Add a comment..."
            value={this.state.body}
            onChange={(e) => this.updateValue(e)}
            className="commentCreator"
          />
          <button className="btn btn-post" onClick={(e) => this.submitComment(e)}>Post</button>
        </form>
      </div>
    );
  }
}
