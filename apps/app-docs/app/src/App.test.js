import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  // https://reactjs.org/docs/react-dom.html#unmountcomponentatnode
  /*Remove a mounted React component from the DOM and clean up 
  its event handlers and state. If no component was mounted in the 
  container, calling this function does nothing. Returns true if a 
  component was unmounted and false if there was no component to unmount. */

  let isUnmounted = ReactDOM.unmountComponentAtNode(div);
  console.log("isUnmounted:", isUnmounted);
});
