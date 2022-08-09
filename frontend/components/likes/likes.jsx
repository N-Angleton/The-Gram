import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartOutline } from "@fortawesome/free-regular-svg-icons";

export class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
  }

  addLike(e) {
    e.preventDefault();
    this.props.addLike({
      users_id: this.props.session_id,
      posts_id: this.props.post_id,
    });
  }

  removeLike(e) {
    e.preventDefault();
    const like_id = this.props.likes.filter(
      (el) => el.users_id === this.props.session_id
    )[0].id;
    this.props.deleteLike(like_id);
  }

  render() {
    return (
      <div className="likesContainer">
        <span className="heartContainer">
          {this.props.likedByUser ? (
            <FontAwesomeIcon
              className="heartIcon filled"
              icon={solidHeart}
              onClick={(e) => this.removeLike(e)}
            />
          ) : (
            <FontAwesomeIcon
              className="heartIcon empty"
              icon={heartOutline}
              onClick={(e) => this.addLike(e)}
            />
          )}
        </span>
        <h2 className="likesNum">
          {this.props.likesNum} {this.props.likesNum === 1 ? "like" : "likes"}
        </h2>
      </div>
    );
  }
}
