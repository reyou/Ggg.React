// https://facebook.github.io/react/docs/composition-vs-inheritance.html
// we recommend using composition instead of inheritance to
// reuse code between components.
import React from "react";
import FancyBorder from "./FancyBorder";
export default function Composition() {
  return (
    <FancyBorder color="blue">
      <div className="Dialog-title">Welcome</div>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}
