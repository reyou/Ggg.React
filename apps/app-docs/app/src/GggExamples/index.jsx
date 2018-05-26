// https://reactjs.org/docs/faq-ajax.html
// https://www.npmjs.com/package/request-promise
import React, { Component } from "react";
import FormatName from "./Examples/FormatName";
import GetGreeting from "./Examples/GetGreeting";
import MyButton from "./Examples/MyButton";
import ConvertString from "./Examples/ConvertString";
import Conditional from "./Examples/Conditional";
import DontRender from "./Examples/DontRender";
import FunctionsAsChildren from "./Examples/FunctionsAsChildren";
import HtmlList from "./Examples/HtmlList";
import SpreadOperator from "./Examples/SpreadOperator";
import SignUpDialog from "./Examples/SignUpDialog";
import Split from "./Examples/Split";
import Composition from "./Examples/Composition";
import LiftingStateUp from "./Examples/LiftingStateUp";
import MultipleInputs from "./Examples/MultipleInputs";
import messages from "./ExampleEntities/Messages";
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
    components.set("ConvertString", <ConvertString myVariable="blue" />);
    components.set(
      "Conditional",
      <Conditional showHeader={true} messages={messages()} />
    );
    components.set("DontRender", <DontRender />);
    components.set("FunctionsAsChildren", <FunctionsAsChildren />);
    components.set("HtmlList", <HtmlList />);
    components.set("SpreadOperator", <SpreadOperator />);
    components.set("SignUpDialog", <SignUpDialog />);
    components.set("Split", <Split />);
    components.set("Composition", <Composition />);
    components.set("LiftingStateUp", <LiftingStateUp />);
    components.set("MultipleInputs", <MultipleInputs />);
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
