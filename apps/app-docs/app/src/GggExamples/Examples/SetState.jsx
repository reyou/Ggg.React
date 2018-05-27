import React from "react";
export default class SetState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.clickHandle = this.clickHandle.bind(this);
  }
  clickHandle() {
    this.setState((prevState, props) => ({
      count: prevState.count + props.increment
    }));
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <input type="button" onClick={this.clickHandle} value="Counter++" />
        <div>Increment: {this.props.increment}</div>
        <div>Result: {this.state ? this.state.count : 0}</div>
      </div>
    );
  }
}
