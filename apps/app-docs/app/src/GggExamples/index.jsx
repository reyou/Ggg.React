// https://reactjs.org/docs/faq-ajax.html
// https://www.npmjs.com/package/request-promise
import React, { Component } from "react";
var rp = require("request-promise");

class GggExamples extends Component {
  // https://reactjs.org/docs/react-component.html#componentdidmount
  /*componentDidMount() is invoked immediately after a component is 
  mounted. Initialization that requires DOM nodes should go here. 
  If you need to load data from a remote endpoint, this is a good 
  place to instantiate the network request. */
  componentDidMount() {
    // make ajax request here
    console.log("GggExamples", "componentDidMount");
    rp("http://localhost:3001/GggExamples")
      .then(function(htmlString) {
        // Process html...
        console.log(htmlString);
      })
      .catch(function(err) {
        // Crawling failed...
        console.log(err);
      });
  }
  render() {
    return <div>List of example pages here.</div>;
  }
}

export default GggExamples;
