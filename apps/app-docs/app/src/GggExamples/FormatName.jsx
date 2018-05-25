import React, { Component } from "react";
const user = {
  firstName: "Harper",
  lastName: "Perez"
};
export default class FormatName extends Component {
  formatName(user) {
    return user.firstName + " " + user.lastName;
  }
  render() {
    return <div> Hello, {this.formatName(user)}! </div>;
  }
}
