import React from "react";
// We generally recommend binding in the constructor or using the
// property initializer syntax, to avoid this sort of performance problem.
export default class LoggingButton extends React.Component {
  handleClick(e) {
    alert("this is: " + e.target.value);
  }
  render() {
    // This syntax ensures `this` is bound within handleClick
    // If you aren't using property initializer syntax,
    // you can use an arrow function in the callback:
    return (
      <button
        value={"i am button value (e.target.value)"}
        onClick={e => this.handleClick(e)}
      >
        Click me
      </button>
    );
  }
}
