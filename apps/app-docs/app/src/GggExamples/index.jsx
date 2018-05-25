// https://reactjs.org/docs/faq-ajax.html
// https://www.npmjs.com/package/request-promise
import React, { Component } from "react";
import FormatName from "./FormatName";
class GggExamples extends Component {
  // https://reactjs.org/docs/react-component.html#componentdidmount
  /*componentDidMount() is invoked immediately after a component is 
  mounted. Initialization that requires DOM nodes should go here. 
  If you need to load data from a remote endpoint, this is a good 
  place to instantiate the network request. */
  constructor() {
    super();
    this.components = this.getComponents();
    this.state = {
      componentToLoad: null
    };
    this.loadComponent = this.loadComponent.bind(this);
  }
  componentDidMount() {
    // make ajax request here
  }
  getComponents() {
    let components = new Map();
  }
  loadComponent(e) {
    e.preventDefault();
    this.setState((this.componentToLoad = <FormatName />));
  }
  render() {
    return (
      <div className="examples">
        <h4>Click examples below</h4>
        <a onClick={this.loadComponent}>Format Name</a>
        <div className="components">{this.componentToLoad}</div>
      </div>
    );
  }
}

export default GggExamples;
