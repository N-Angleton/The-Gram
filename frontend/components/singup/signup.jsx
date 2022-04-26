import React from "react"
import { Link } from "react-router-dom"
import { Redirect } from "react-router-dom"

export class Signup extends React.Component{

    constructor(props){
        super(props)
        this.state = { username: "", password: "", full_name: "", email: ""}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.processForm(this.state)
    }

    update(e){
        this.setState( { [e.target.name]: e.target.value } )
    }

    render(){
        if (this.props.session.id !== null){
            return <Redirect to="/" />
        } else {
            return (
                <>
                    <h1>Sign Up</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>Username
                            <input type="text" name="username" onChange={this.update} />
                        </label>
                        <label>Name
                            <input type="text" name="full_name" onChange={this.update} />
                        </label>
                        <label>Password
                            <input type="text" name="password" onChange={this.update} />
                        </label>
                        <label>Email
                            <input type="email" name="email" onChange={this.update} />
                        </label>
                        <button type="submit">Sign Up</button>
                    </form>
                    <Link to="/">Already have an account</Link>
                </>
            )
        }
    }
    
}