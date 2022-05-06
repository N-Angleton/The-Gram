import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart} from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartOutline} from "@fortawesome/free-regular-svg-icons";
import { LikesContainer } from "../likes/likes_container";

export class Post extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <li className="postItem">
                <h1 className="posterName">{this.props.poster.username}</h1>
                <img src={this.props.post.photoUrl} alt="post" />
                <LikesContainer post_id={this.props.post.id}/>
                <h2 className="postDescription">{this.props.post.description}</h2>
            </li>
        )
    }
}