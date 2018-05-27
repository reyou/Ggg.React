import React from "react";
export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn
    };
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        The user is <b>{isLoggedIn ? "currently" : "not"}</b> logged in.
      </div>
    );
  }
}
