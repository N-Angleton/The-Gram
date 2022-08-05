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
    if (this.props.session.id !== null) {
      return <Redirect to="/" />;
    } else {
      return (
        <>
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Username
              <input
                type="text"
                value={this.state.username}
                name="username"
                onChange={this.update}
              />
            </label>
            <label>
              Name
              <input
                type="text"
                value={this.state.full_name}
                name="full_name"
                onChange={this.update}
              />
            </label>
            <label>
              Password
              <input
                type="text"
                value={this.state.password}
                name="password"
                onChange={this.update}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                value={this.state.email}
                name="email"
                onChange={this.update}
              />
            </label>
            <button type="submit">Sign Up</button>
          </form>
          <br />
          <button
            className="demoUserSignupButton"
            onClick={() => this.loginDemo()}
          >
            Sign in as demo user
          </button>
          <Link to="/">Already have an account</Link>
        </>
      );
    }
  }
}
