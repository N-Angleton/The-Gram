import React from "react";
import { FollowInterfaceContainer } from "../follow_interface/follow_interface_container";

export class Comment extends React.Component{
    constructor(props){
        super(props)
        this.state = {body: this.props.comment.body, editing: false }
        this.deleteComment = this.deleteComment.bind(this)
    }

    editComment(e){
        e.preventDefault()
        this.setState({editing: !this.state.editing})
    }

    updateBody(e){
        e.preventDefault()
        this.setState({body: e.target.value})
    }

    submitEditedComment(e){
        e.preventDefault()
        this.props.updateComment({id: this.props.comment.id, body: this.state.body, posts_id: this.props.comment.posts_id, users_id: this.props.comment.users_id})
        .then(this.setState({editing: false}))
    }

    deleteComment(e){
        e.preventDefault()
        this.props.deleteComment(this.props.comment.id)
    }

    render(){
        return (
            <li key={`comment${this.props.comment.id}`} className="commentContainer">
                <h1 className="commenterUsername">{this.props.commenter.username}</h1>
                { this.state.editing ?
                    <form className="editCommentForm">
                        <input type="text" value={this.state.body} onChange={(e) => this.updateBody(e)}/>
                        <button onClick={(e) => this.submitEditedComment(e)}>Repost</button>
                    </form> :
                    <p className="commentBody">{this.props.comment.body}</p>
                 }
                 { this.props.commenter.id === this.props.session_id ?
                    <>
                        <button onClick={(e) => this.editComment(e)}>Edit</button>
                        <button onClick={(e) => this.deleteComment(e)}>Delete</button>
                    </>
                    :  <FollowInterfaceContainer otherUser={this.props.commenter.id} />}
            </li>
        )
    }
}