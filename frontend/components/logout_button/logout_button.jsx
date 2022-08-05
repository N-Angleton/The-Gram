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
      <form onSubmit={this.handleSubmit}>
        <button>Logout</button>
      </form>
    );
  }
}
