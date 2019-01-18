import React from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";
export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      temperature: "",
      scale: "c"
    };
  }
  handleCelsiusChange(temperature) {
    this.setState({
      scale: "c",
      temperature
    });
  }
  handleFahrenheitChange(temperature) {
    this.setState({
      scale: "f",
      temperature
    });
  }
  tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
    /*The Number.isNaN() method determines whether the passed value is NaN and 
    its type is Number. It is a more robust version of the original, 
    global isNaN(). Return value true if the given value is NaN and its 
    type is Number; otherwise, false. */
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }

  toFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f"
        ? this.tryConvert(temperature, this.toCelsius)
        : temperature;
    const fahrenheit =
      scale === "c"
        ? this.tryConvert(temperature, this.toFahrenheit)
        : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
