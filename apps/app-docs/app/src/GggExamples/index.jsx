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
import Select from "./Examples/Select";
import TextArea from "./Examples/TextArea";
import NameForm from "./Examples/NameForm";
import EmbeddingExpressions from "./Examples/EmbeddingExpressions";
import EmbeddingMap from "./Examples/EmbeddingMap";
import Siblings from "./Examples/Siblings";
import CorrectKeyUsage from "./Examples/CorrectKeyUsage";
import WarningBanner from "./Examples/WarningBanner";
import ConditionalOperation from "./Examples/ConditionalOperation";
import ElementVariables from "./Examples/ElementVariables";
import ArrowFunction from "./Examples/ArrowFunction";
import Toggle from "./Examples/Toggle";
import AjaxCall from "./Examples/AjaxCall";
import SetState from "./Examples/SetState";
import Clock from "./Examples/Clock";
import PreventsInjectionAttacks from "./Examples/PreventsInjectionAttacks";
import NestedComponent from "./Examples/NestedComponent";
import FilterableProductTable from "./Examples/FilterableProductTable";
import messages from "./ExampleEntities/Messages";
import products from "./ExampleEntities/Products";
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
    components.set("Select", <Select />);
    components.set("TextArea", <TextArea />);
    components.set("NameForm", <NameForm />);
    components.set(
      "EmbeddingExpressions",
      <EmbeddingExpressions numbers={[1, 3, 5, 6, 8]} />
    );
    components.set("EmbeddingMap", <EmbeddingMap numbers={[1, 3, 5, 6, 8]} />);
    components.set("Siblings", <Siblings />);
    components.set("CorrectKeyUsage", <CorrectKeyUsage />);
    components.set("WarningBanner", <WarningBanner />);
    components.set("ConditionalOperation", <ConditionalOperation />);
    components.set("ElementVariables", <ElementVariables />);
    components.set("ArrowFunction", <ArrowFunction />);
    components.set("Toggle", <Toggle />);
    components.set("AjaxCall", <AjaxCall />);
    components.set("SetState (Prev)", <SetState increment={3} />);
    components.set("Clock", <Clock />);
    components.set("PreventsInjectionAttacks", <PreventsInjectionAttacks />);
    components.set("NestedComponent", <NestedComponent />);
    components.set(
      "FilterableProductTable",
      <FilterableProductTable products={products} />
    );
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
        <h4>GggExamples</h4>
        <div className="componentList">
          {this.getComponentsHtml(this.state.components)}
        </div>
        <div className="components">{this.state.componentToLoad}</div>
      </div>
    );
  }
}

export default GggExamples;
