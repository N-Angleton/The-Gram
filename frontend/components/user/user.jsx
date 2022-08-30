import React from "react";
import { EditPicContainer } from "./edit_pic_container";

export class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userId: null, createPost: false }
  }

  componentDidMount() {
    this.props.fetchUserProfile(this.props.location.pathname.replace("/users/", "")).then(
      data => {
        let ids = Object.keys(data.users);
        if (ids.length === 1) { this.setState({ userId: this.props.current_user_id})} else {
          let otherUserId = ids.find(value => parseInt(value) !== this.props.current_user_id)
          this.setState({ userId: otherUserId});
        }

      }
      ,
      error => this.props.history.push('/')
      )
  }

  openPost(e){
    if (e) e.preventDefault();
    this.setState({createPost: true})
    const photoModal = document.getElementById("photoModal");
    photoModal.showModal();
  }

  closePost(e) {
    if (e) e.preventDefault();
    this.setState({createPost: false})
    const photoModal = document.getElementById("photoModal");
    photoModal.close();
  }

  toggleFollow(e){
    if (e) e.preventDefault();
    if (this.props.follows[this.props.current_user_id].approved_follows.some(follow => Object.keys(follow) == this.state.userId)) {
      this.props.deleteFollow(
        this.props.follows[this.props.current_user_id].approved_follows.filter(
          (e) => Object.keys(e) == this.state.userId
        )[0][this.state.userId]
      );
    } else {
      this.props.createFollow({
        approved: true,
        follower_id: this.props.current_user_id,
        user_to_be_followed_id: this.state.userId,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.props.fetchUserProfile(this.props.location.pathname.replace("/users/", "")).then(
        data => {
          let ids = Object.keys(data.users);
          if (ids.length === 1) { this.setState({ userId: this.props.current_user_id})} else {
            let otherUserId = ids.find(value => parseInt(value) !== this.props.current_user_id)
            this.setState({ userId: otherUserId});
          }
  
        }
        ,
        error => this.props.history.push('/')
        )
    }
  }

  render() {
    let user;
    if (this.state.userId) {
      user = this.props.users[this.state.userId];
    }
    return (
      user ?
      <div className="userProfile">
        <div className="userInfo">
          <img
              className="bigProfilePhoto"
              src={user.photo_url ? user.photo_url : window.defaultPhoto}
              alt="user profile photo"
          />
          <div className="userText">
            <h2 className="profileUsername">{user.username}</h2>
            {this.state.userId === this.props.current_user_id ?
            (
            <button className="prof-btn" onClick={() => this.openPost()}>
              Edit Profile Photo
            </button> )
            :
            (
              <button className="prof-btn" onClick={() => this.toggleFollow()}>
                {
                  (this.props.follows[this.props.current_user_id].approved_follows.some(follow => Object.keys(follow) == this.state.userId)) ? (
                    "Unfollow"
                  ) : (
                    "Follow"
                  )
                }
              </button>
            )
            }
            <div className="profileNumbersContainer">
              <p className="profileNumbers"><em>{Object.keys(this.props.posts).length}</em> posts</p>
              <p className="profileNumbers"><em>{this.props.follows[this.state.userId].approved_followers.length}</em> followers</p>
              <p className="profileNumbers"><em>{this.props.follows[this.state.userId].approved_follows.length}</em> following</p>
            </div>
            <h2 className="profileFullname">{user.full_name}</h2>
          </div>
        </div>
        <h2 className="postsTitle">POSTS</h2>
        <main className="userPosts">
          <ul className="postsContainer">
          {this.props.posts
          ? Object.values(this.props.posts).reverse().map((post) => (
            <img className="profilePostImg" key={`post_${post.id}`} src={post.photoUrl} alt="post" />
            ))
          : null}
          </ul>
        </main>
        <dialog id="photoModal"><EditPicContainer closePost={this.closePost.bind(this)}/></dialog>
      </div>
      : null
    );
  }
}
