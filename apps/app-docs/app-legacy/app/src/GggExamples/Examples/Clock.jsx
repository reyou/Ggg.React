import React from "react";
export default class Clock extends React.Component {
  constructor(props) {
    console.log("Clock", "constructor");
    super(props);
    // The only place where you can assign this.state
    // is the constructor.
    this.state = {
      date: new Date()
    };
  }
  tick() {
    // Every second the browser calls the tick() method. Inside it,
    // the Clock component schedules a UI update by calling setState()
    // with an object containing the current time.
    // React may batch multiple setState() calls into a
    // single update for performance.
    this.setState({
      date: new Date()
    });
  }
  // These methods are called "lifecycle hooks".
  componentDidMount() {
    console.log("Clock", "componentDidMount");
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  // These methods are called "lifecycle hooks".
  componentWillUnmount() {
    console.log("Clock", "componentWillUnmount");
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <div>
          The only place where you can assign this.state is the constructor.
        </div>
        <div>componentDidMount</div>
        <div>componentWillUnmount</div>
        <div>It is {this.state.date.toLocaleTimeString()}.</div>
      </div>
    );
  }
}
