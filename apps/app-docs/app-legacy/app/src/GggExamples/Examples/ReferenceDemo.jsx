// https://stackoverflow.com/questions/46820981/what-are-refs-in-react
import React from "react";
export default class ReferenceDemo extends React.Component {
  display() {
    const name = this.inputDemo.value;
    document.getElementById("disp").innerHTML = name;
  }
  render() {
    return (
      <div>
        Name: <input type="text" ref={input => (this.inputDemo = input)} />
        <button name="Click" onClick={this.display}>
          Click
        </button>
        <h2>
          Hello <span id="disp" /> !!!
        </h2>
      </div>
    );
  }
}
