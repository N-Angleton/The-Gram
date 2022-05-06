import _ from "lodash";
import React from "react";

export class FollowInterface extends React.Component{
    constructor(props){
        super(props)
    }

    unfollow(e){
        e.preventDefault()
        this.props.deleteFollow(this.props.follows.approved_follows.filter( e => Object.keys(e) == this.props.otherUser)[0][this.props.otherUser])
    }

    requestFollow(e){
        e.preventDefault()
        this.props.createFollow({approved: false, follower_id: this.props.current_user_id, user_to_be_followed_id: this.props.otherUser})
    }

    deleteRequest(e){
        e.preventDefault()
        this.props.deleteFollow(this.props.follows.pending_follows.filter( e => Object.keys(e) == this.props.otherUser)[0][this.props.otherUser])
    }

    render(){

        let following_status = "not_following"
        if (this.props.follows.approved_follows.some((el) => Object.keys(el) == this.props.otherUser)) { following_status = "following"}
        if (this.props.follows.pending_follows.some((el) => Object.keys(el) == this.props.otherUser)) { following_status = "pending"}

        return (
            <div className="followInterface">
                { following_status === "following" ? <button onClick={(e) => this.unfollow(e)}>Unfollow</button> : null} 
                { following_status === "not_following" ? <button onClick={(e) => this.requestFollow(e)}>Follow</button> : null} 
                { following_status === "pending" ? <button onClick={(e) => this.deleteRequest(e)}>Unrequest Follow</button> : null}
            </div>
        )
    }
}