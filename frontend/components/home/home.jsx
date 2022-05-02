import React from "react"
import { HeaderContainer } from "../header/header_container"

export class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {description: ""}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.createPost = this.createPost.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.logout()
    }

    componentDidMount(){
        this.props.fetchAllPosts()
    }

    createPost(e){
        e.preventDefault()
        this.props.createPost({ description: this.state.description, poster_id: this.props.session.id })
    }

    update(e){
        this.setState( { [e.target.name]: e.target.value } )
    }

    render(){
        let user = this.props.entities.users[this.props.session.id]
        return (
            <main>
                <HeaderContainer />
                <ul>
                    { (this.props.entities.posts) ? Object.values(this.props.entities.posts).map( (post) => <li>{post.description}</li> ) : null }
                </ul>

                <form onSubmit={this.createPost}>
                    <input type="text" name="description" value={this.state.description} onChange={this.update} />
                    <button>Create</button>
                </form>

                <form onSubmit={this.handleSubmit}>
                    <h1>{ user.username }</h1>
                    <button>Logout</button>
                </form>
            </main>
        )
    }

}