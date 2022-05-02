import React from "react"
import { timeout } from "../../util/timeout"
import { Footer } from "../footer/footer"
import { PhoneAnimation } from "./phone_images"
import { SignupLink } from "./signupLink"

export class Login extends React.Component{

    constructor(props){
        super(props)
        this.state = { username: "", password: "", hidden: true}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
        this.flipHidden = this.flipHidden.bind(this)
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
        await timeout(125)
        document.getElementById('signInUsernameInput').focus();
        for (let i = 0; i < user.length; i++) {
            await timeout(150)
            this.setState( {username: (this.state.username + user[i] )})
        }
        await timeout(175)
        document.getElementById('signInPasswordInput').focus();
        for (let i = 0; i < pass.length; i++) {
            await timeout(125)
            this.setState( {password: (this.state.password + pass[i] )})
        }
        await timeout(100)
        this.handleSubmit()
    }

    flipHidden(e){
        e.preventDefault()
        this.setState({ hidden: !this.state.hidden})
    }

    render(){
        let disabled = true
        if (this.state.username.length && this.state.password.length > 5) { disabled = false }
        return (
            <div className="signInGrid">

                <div className="signInColumn">

                    <div className="signInContainer">
                        <form onSubmit={this.handleSubmit} className="signInForm">
                            <h1 className="signInTitle">the gram</h1>
                                <div className={(this.state.username.length) ? "signInUsernameInputContainer transition" : "signInUsernameInputContainer" }>
                                    <input type="text" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" id="signInUsernameInput" className="signInUsernameInput" value={this.state.username} name="username" onChange={this.update} />
                                </div>
                                <div className={(this.state.password.length) ? "signInPasswordInputContainer transition" : "signInPasswordInputContainer" }>
                                    <input type={this.state.hidden ? "password" : "text"} autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" id="signInPasswordInput" className="signInPasswordInput" value={this.state.password} name="password" onChange={this.update} />
                                    <button className="showHideButton" onClick={(e) => this.flipHidden(e)}>{this.state.hidden ? "Show" : "Hide"}</button>
                                </div>
                            <button type="submit" disabled={disabled} className="signInButton">Sign In</button>
                        </form>
                        <div className="orContainer">
                            <div className="line"></div>
                            <span className="or">OR</span>
                            <div className="line"></div>
                        </div>
                        <button className="demoUserButton" onClick={() => this.loginDemo()}>Demo User</button>
                    </div>

                    <SignupLink/>

                    <p className="getTheApp">Get the app.</p>
                    <div className="downloadLinks">
                        <img className="appleLogo" src={window.appleURL} alt="apple" />
                        <img className="androidLogo" src={window.androidURL} alt="android" />
                    </div>

                </div>

                <PhoneAnimation/>

                <Footer/>
                
            </div>
        )
    }

}