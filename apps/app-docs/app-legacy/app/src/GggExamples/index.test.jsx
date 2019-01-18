import React from "react";
import ReactDOM from "react-dom";
import GggExamples from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GggExamples />, div);

  let isUnmounted = ReactDOM.unmountComponentAtNode(div);
  console.log("isUnmounted:", isUnmounted);
});
