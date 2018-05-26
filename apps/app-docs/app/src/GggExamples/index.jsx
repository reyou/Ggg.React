// https://reactjs.org/docs/faq-ajax.html
// https://www.npmjs.com/package/request-promise
import React, { Component } from "react";
import FormatName from "./FormatName";
import GetGreeting from "./GetGreeting";
import MyButton from "./MyButton";
class GggExamples extends Component {
  // https://reactjs.org/docs/react-component.html#componentdidmount
  /*componentDidMount() is invoked immediately after a component is 
  mounted. Initialization that requires DOM nodes should go here. 
  If you need to load data from a remote endpoint, this is a good 
  place to instantiate the network request. */
  constructor() {
    super();
    this.state = {
      componentToLoad: null,
      components: this.getComponents()
    };
    this.loadComponent = this.loadComponent.bind(this);
  }
  componentDidMount() {
    // make ajax request here
  }
  getUser() {
    return {
      firstName: "Mike",
      lastName: "Tyson"
    };
  }
  getComponents() {
    let components = new Map();
    // this is very bad practice just for demo purposes
    // instead use switch condition.
    components.set("FormatName", <FormatName />);
    components.set("GetGreeting", <GetGreeting user={this.getUser()} />);
    components.set("MyButton", <MyButton color="blue" shadowSize={2} />);
    return components;
  }
  getComponentsHtml(components) {
    var html = [];
    components.forEach((value, key, map) => {
      html.push(
        <a key={key} onClick={e => this.loadComponent(e, value)}>
          {key}
        </a>
      );
    });
    return html;
  }
  loadComponent(e, component) {
    e.preventDefault();
    this.setState({ componentToLoad: component });
  }
  render() {
    return (
      <div className="examples">
        <h4>Click examples below</h4>
        {this.getComponentsHtml(this.state.components)}
        <div className="components">{this.state.componentToLoad}</div>
      </div>
    );
  }
}

export default GggExamples;
