import React from "react";
export default class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // ES6 computed property name syntax
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
        <div>
          <b>Is Going: </b>
          <span>{this.state.isGoing ? "Yes" : "No"}</span>
        </div>
        <div>
          <b>Number of guests: </b>
          <span>{this.state.numberOfGuests}</span>
        </div>
      </div>
    );
  }
}
