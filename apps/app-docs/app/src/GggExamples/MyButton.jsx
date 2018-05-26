import React, { Component } from "react";

export default class MyButton extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <input type="button" style={{ color: this.props.color }} value="button" />
    );
  }
}
