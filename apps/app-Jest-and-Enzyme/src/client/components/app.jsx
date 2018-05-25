import React from "react";
import Add from "./add.jsx";
import List from "./list.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(name) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    /*The slice() method returns a shallow copy of a portion of an 
    array into a new array object selected from begin to end (end not included). 
    The original array will not be modified. */
    const list = this.state.list.slice();
    list.push(name);
    this.setState({ list });
  }

  render() {
    return (
      <div>
        <Add onAdd={this.handleAdd} />
        <List data={this.state.list} />
      </div>
    );
  }
}
