import React from "react";

export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    /*The Event interface's preventDefault() method tells the user agent 
    that if the event does not get explicitly handled, its default action 
    should not be taken as it normally would be. The event continues to 
    propagate as usual, unless one of its event listeners calls 
    stopPropagation() or stopImmediatePropagation(), either of which 
    terminates propagation at once. */
    e.preventDefault();
    this.props.onAdd(this.state.name);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button onClick={this.handleAdd}>Add</button>
      </form>
    );
  }
}
