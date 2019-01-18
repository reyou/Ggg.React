import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import MessageList from "./MessageList";
export default class Conditional extends Component {
  constructor(props) {
    super();
  }
  render() {
    let headerAndContent = (
      <div>
        {this.props.showHeader && <Header title={"qf"} />}
        <Content />
      </div>
    );

    // To fix this, make sure that the expression before && is always boolean:
    let messageList = (
      <div>
        {this.props.messages.length > 0 && (
          <MessageList messages={this.props.messages} />
        )}
      </div>
    );
    return (
      <div>
        {headerAndContent}
        {messageList}
      </div>
    );
  }
}
