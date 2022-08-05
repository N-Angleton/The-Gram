import React from "react";
import { timeout } from "../../util/timeout";

export class PhoneAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { phoneId: 0 };
    this.checkPhone = this.changePhone.bind(this);
  }

  componentDidMount() {
    this.changePhone();
  }

  async changePhone() {
    await timeout(3000);
    this.setState({ phoneId: (this.state.phoneId + 1) % 4 });
    this.changePhone();
  }

  render() {
    return (
      <div className="imageColumn">
        <img
          className={0 === this.state.phoneId ? "phoneImg shown" : "phoneImg"}
          src={window.phoneURL_0}
          alt="phone"
        />
        <img
          className={1 === this.state.phoneId ? "phoneImg shown" : "phoneImg"}
          src={window.phoneURL_1}
          alt="phone"
        />
        <img
          className={2 === this.state.phoneId ? "phoneImg shown" : "phoneImg"}
          src={window.phoneURL_2}
          alt="phone"
        />
        <img
          className={3 === this.state.phoneId ? "phoneImg shown" : "phoneImg"}
          src={window.phoneURL_3}
          alt="phone"
        />
      </div>
    );
  }
}
