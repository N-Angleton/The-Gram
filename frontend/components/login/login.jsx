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
        if (e) e.preventDefault()
        this.props.processForm({ username: this.state.username, password: this.state.password})
    }

    update(e){
        this.setState( { [e.target.name]: e.target.value } )
    }

    async loginDemo(e){
        this.setState( {username: "", password: ""} )
        let user = "Demo_User"
        let pass = "Demo_Password"
        for (let i = 0; i < user.length; i++) {
            await this.timeout(150)
            this.setState( {username: (this.state.username + user[i] )})
        }
        for (let i = 0; i < pass.length; i++) {
            await this.timeout(150)
            this.setState( {password: (this.state.password + pass[i] )})
        }
        await this.timeout(250)
        this.handleSubmit()
    }

    timeout(ms){
        return new Promise( resolve => setTimeout(resolve, ms));
    }

    render(){
        if (this.props.session !== null){
            return <Redirect to="/" />
        } else {
            return (
                <div className="signinContainer">

                    <div>
                        <form onSubmit={this.handleSubmit} className="signinForm">
                            <h1 className="signinTitle">Sign In</h1>
                            <label>Username
                                <input type="text" value={this.state.username} name="username" onChange={this.update} className="signinUsername"/>
                            </label>
                            <label>Password
                                <input type="text" value={this.state.password} name="password" onChange={this.update} className="signinPassword"/>
                            </label>
                            <button type="submit" className="signinButton">Sign In</button>
                        </form>
                        <h2 className="or">OR</h2>
                        <button className="demoUserButton" onClick={() => this.loginDemo()}>Sign in as demo user</button>
                    </div>
                        

                    <div className="signupLinkContainer">
                        <Link to="/signup" className="createAccountLink">Create an account</Link>
                    </div>

                </div>
            )
        }
    }

}