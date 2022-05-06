import React from "react";
import { PostContainer } from "../post/post_container";

export class Feed extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchUsersFeed(this.props.session.id)
    }

    render(){
        return (
            <ul className="post_list">
                { (this.props.posts) ? Object.values(this.props.posts).map( (post) => <PostContainer key={`post_${post.id}`} post={post} /> ) : null }
            </ul>
        )
    }
}