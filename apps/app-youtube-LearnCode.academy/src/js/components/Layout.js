import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    var initialName = "Ggg";
    this.state = {
      date: this.getDate(),
      title: "Welcome " + initialName,
    };
  }
  getDate() {
    var _self = this;
    var date = new Date();
    setInterval(function () {
      date = new Date();
      _self.setState({ date: date.toString() });
    }, 1000);
    return date.toString();
  }
  changeTitle(title) {
    this.setState({ title });
  }
  render() {
    return (
      <div>
        <div>Time Now:&nbsp;<span id='timeNow'>{this.state.date}</span></div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
