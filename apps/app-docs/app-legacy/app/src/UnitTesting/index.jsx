import React from "react";
import Link from "./GettingStarted/Link.react";
import CheckboxWithLabel from "./GettingStarted/CheckboxWithLabel";
export default class UnitTesting extends React.Component {
  constructor() {
    super();
    this.state = {
      componentToLoad: <div className="noComponent">No component selected.</div>
    };
  }
  handleClick(e, componentName) {
    switch (componentName) {
      case "Link":
        this.setState({
          componentToLoad: (
            <Link>
              <span>This is children of a element.</span>
            </Link>
          )
        });
        break;
      case "CheckboxWithLabel":
        this.setState({
          componentToLoad: (
            <CheckboxWithLabel labelOn={"label on"} labelOff={"label off"} />
          )
        });
        break;
      default:
        return this.state.componentToLoad;
    }
  }
  render() {
    return (
      <div>
        <h4>Unit Testing</h4>
        <div className="examples">
          <a
            onClick={e => {
              this.handleClick(e, "Link");
            }}
          >
            Link
          </a>
          <a
            onClick={e => {
              this.handleClick(e, "CheckboxWithLabel");
            }}
          >
            CheckboxWithLabel
          </a>
        </div>
        <div>{this.state.componentToLoad}</div>
      </div>
    );
  }
}
