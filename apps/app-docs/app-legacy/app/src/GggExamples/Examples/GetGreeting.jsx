import React, { Component } from "react";

export default class GetGreeting extends Component {
  getGreeting(user) {
    function formatName(user) {
      return user.firstName + " " + user.lastName;
    }
    if (user) {
      return <div>Hello, {formatName(user)}!</div>;
    }
    return <div>Hello, Stranger.</div>;
  }
  render() {
    return <div>{this.getGreeting(this.props.user)}</div>;
  }
}
