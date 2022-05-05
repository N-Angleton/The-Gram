import React from "react";

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
                { (this.props.entities.posts) ? Object.values(this.props.entities.posts).map( (post) =>
                    <li key={`post_${post.id}`}>
                        <h1>{post.description}</h1>
                        <img src={post.photoUrl} alt="post" />
                    </li>
                ) : null }
            </ul>
        )
    }
}