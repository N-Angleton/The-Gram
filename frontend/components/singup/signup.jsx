import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { timeout } from "../../util/timeout";

export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", full_name: "", email: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    this.props.processForm(this.state);
  }

  update(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async loginDemo() {
    this.setState({ username: "", password: "", full_name: "", email: "" });
    let num = Math.floor(Math.random() * 10000);
    let demoUsername = `Demo_User${num}`;
    let demoPassword = `Demo_Password${num}`;
    let demoEmail = `Demo_Email${num}`;
    let fullName = `Demo_Name${num}`;
    for (let i = 0; i < demoUsername.length; i++) {
      await timeout(150);
      this.setState({ username: this.state.username + demoUsername[i] });
    }
    for (let i = 0; i < fullName.length; i++) {
      await timeout(150);
      this.setState({ full_name: this.state.full_name + fullName[i] });
    }
    for (let i = 0; i < demoPassword.length; i++) {
      await timeout(150);
      this.setState({ password: this.state.password + demoPassword[i] });
    }
    for (let i = 0; i < demoEmail.length; i++) {
      await timeout(150);
      this.setState({ email: this.state.email + demoEmail[i] });
    }
    await timeout(250);
    this.handleSubmit();
  }

  render() {
    return (
      <>
      <main className="signupContainer">
        <h1 className="signInTitle">the gram</h1>
        <h2 className="signinSubtitle">Sign up to see photos and videos from your friends.</h2>
        <button
          className="demoUserSignupButton"
          onClick={() => this.loginDemo()}
        >
          Sign in as demo user
        </button>
        <div className="orContainer orSignUp">
          <div className="line"></div>
          <span className="or">OR</span>
          <div className="line"></div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            {/* Email */}
            <input
              type="email"
              value={this.state.email}
              name="email"
              placeholder="Email"
              onChange={this.update}
            />
          </label>
          <label>
            {/* Name */}
            <input
              type="text"
              value={this.state.full_name}
              name="full_name"
              placeholder="Full Name"
              onChange={this.update}
            />
          </label>
          <label>
            {/* Username */}
            <input
              type="text"
              value={this.state.username}
              name="username"
              placeholder="Username"
              onChange={this.update}
            />
          </label>
          <label>
            {/* Password */}
            <input
              type="text"
              value={this.state.password}
              name="password"
              placeholder="Password"
              onChange={this.update}
            />
          </label>
          <button className="btn-signUp" type="submit">Sign Up</button>
          <div className="errorContainer">
            {this.props.errors.session.length ? this.props.errors.session.map( (error, ind) => <p className="error" key={`error_${ind}`}>{error}</p>) : ""}
          </div>
        </form>
      </main>
      <div className="loginLinkContainer">
        <h2 className="loginLinkText">Have an account? <Link className="loginLink" to="/">Log in</Link></h2>
      </div>
      </>
    );
  }
}
