import React from "react";
function Meetups() {
  return <div>Meetups Tab Content</div>;
}
function Favorites() {
  return <div>Favorites Tab Content</div>;
}
export default class TabHeader extends React.Component {
  constructor(props) {
    super();
    this.activeTabClass = this.activeTabClass.bind(this);
    this.getTabs = this.getTabs.bind(this);
    this.state = {
      activeTabId: "meetups"
    };
    this.tabs = [
      {
        id: "meetups",
        title: "Meetups",
        tabContent: <Meetups />
      },
      {
        id: "favorites",
        title: "Favorites",
        tabContent: <Favorites />
      }
    ];
  }
  OnTabClicked(e, tab) {
    this.props.onTabChanged(tab.tabContent);
    this.setState({
      activeTabId: tab.id
    });
  }
  activeTabClass(tab) {
    if (this.state.activeTabId === tab.id) {
      return " active";
    }
    return "";
  }
  getTabs() {
    let self = this;
    return this.tabs.map(tab => {
      return (
        <li
          className={"tabHeader" + self.activeTabClass(tab)}
          key={tab.id}
          onClick={e => this.OnTabClicked(e, tab)}
        >
          {tab.title}
        </li>
      );
    });
  }
  render() {
    return <ul className="tabContainer">{this.getTabs()}</ul>;
  }
}
