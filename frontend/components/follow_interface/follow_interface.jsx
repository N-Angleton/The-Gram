import React from "react";

export class FollowInterface extends React.Component {
  constructor(props) {
    super(props);
  }

  unfollow(e) {
    e.preventDefault();
    this.props.deleteFollow(
      this.props.follows.approved_follows.filter(
        (e) => Object.keys(e) == this.props.otherUser
      )[0][this.props.otherUser]
    ).then( () => this.props.fetchUsersFeed(this.props.current_user_id));
  }

  requestFollow(e) {
    e.preventDefault();
    this.props.createFollow({
      approved: true,
      follower_id: this.props.current_user_id,
      user_to_be_followed_id: this.props.otherUser,
    });
  }

  deleteRequest(e) {
    e.preventDefault();
    this.props.deleteFollow(
      this.props.follows.pending_follows.filter(
        (e) => Object.keys(e) == this.props.otherUser
      )[0][this.props.otherUser]
    );
  }

  render() {
    let following_status = "not_following";
    if (
      this.props.follows.approved_follows.some(
        (el) => Object.keys(el) == this.props.otherUser
      )
    ) {
      following_status = "following";
    }
    if (
      this.props.follows.pending_follows.some(
        (el) => Object.keys(el) == this.props.otherUser
      )
    ) {
      following_status = "pending";
    }

    return (
      <div className="followInterface">
        {following_status === "following" ? (
          <button className="btn-2" onClick={(e) => this.unfollow(e)}>unfollow</button>
        ) : null}
        {following_status === "not_following" ? (
          <button className="btn-2" onClick={(e) => this.requestFollow(e)}>follow</button>
        ) : null}
        {following_status === "pending" ? (
          <button className="btn-2" onClick={(e) => this.deleteRequest(e)}>
            unfollow
          </button>
        ) : null}
      </div>
    );
  }
}
