import React from "react";

export class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <form className="logoutForm" onSubmit={this.handleSubmit}>
        <button className="btn-logout">Logout</button>
      </form>
    );
  }
}
