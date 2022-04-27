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

    // retrieveUsernameInput(){
    //     if (this.state.username.length === 0) {
    //         return <input type="text" className="signInUsernameInput" value={this.state.username} name="username" onChange={this.update} />
    //     } else {
    //         return <input type="text" className="signInUsernameInput" value={this.state.username} name="username" onChange={this.update} />
    //     }
    // }

    // retrievePasswordInput(){

    // }

    render(){
        if (this.props.session !== null){
            return <Redirect to="/" />
        } else {
            let usernameContainerClassName = "signInUsernameInputContainer"
            if (this.state.username.length) usernameContainerClassName += " transition"
            let passwordContainerClassName = "signInPasswordInputContainer"
            if (this.state.password.length) passwordContainerClassName += " transition"
            return (
                <div className="signInGrid">


                    <div className="signInColumn">

                        <div className="signInContainer">
                            <form onSubmit={this.handleSubmit} className="signInForm">
                                <h1 className="signInTitle">The Gram</h1>
                                    <div className={usernameContainerClassName}>
                                        <input type="text" className="signInUsernameInput" value={this.state.username} name="username" onChange={this.update} required />
                                    </div>
                                    <div className="signInPasswordInputContainer">
                                        <input type="text" className="signInPasswordInput" value={this.state.password} name="password" onChange={this.update} required />
                                    </div>
                                <button type="submit" className="signInButton">Sign In</button>
                            </form>
                            <div className="orContainer">
                                <div className="line"></div>
                                <span className="or">OR</span>
                                <div className="line"></div>
                            </div>
                            <button className="demoUserButton" onClick={() => this.loginDemo()}>Demo User</button>
                        </div>

                        <div className="signupLinkContainer">
                            <p className="signupText">Don't have an account?
                                <Link to="/signup" className="createAccountLink">
                                     <span>Sign up</span>
                                </Link>
                            </p>
                        </div>

                    </div>
                        

                </div>
            )
        }
    }

}