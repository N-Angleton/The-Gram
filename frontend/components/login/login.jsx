import React from "react"
import { Redirect } from "react-router-dom"
import { Link } from "react-router-dom"

export class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = { username: "", password: ""}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.processForm({ username: this.state.username, password: this.state.password})
    }

    update(e){
        this.setState( { [e.target.name]: e.target.value } )
    }

    render(){
        if (this.props.session !== null){
            return <Redirect to="/" />
        } else {
            return (
                <div className="signinContainer">

                    <form onSubmit={this.handleSubmit} className="signinForm">
                        <h1 className="signinHeader">Sign In</h1>
                        <label>Username
                            <input type="text" name="username" onChange={this.update} className="signinUsername"/>
                        </label>
                        <label>Password
                            <input type="text" name="password" onChange={this.update} className="signinPassword"/>
                        </label>
                        <button type="submit" className="signinButton">Sign In</button>
                    </form>

                    <div className="signupLinkContainer">
                        <Link to="/signup" className="createAccountLink">Create an account</Link>
                    </div>

                </div>
            )
        }
    }

}