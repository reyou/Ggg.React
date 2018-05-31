import React from "react";
import TabHeader from "./TabHeader";

export default class Tabs extends React.Component {
  constructor() {
    super();
    this.content = null;
    this.state = {
      activeTab: null
    };
    this.OnTabChanged = this.OnTabChanged.bind(this);
  }
  OnTabChanged(tab) {
    this.setState({
      activeTab: tab
    });
  }
  render() {
    return (
      <div>
        <TabHeader onTabChanged={this.OnTabChanged} />
        {this.state.activeTab}
      </div>
    );
  }
}
