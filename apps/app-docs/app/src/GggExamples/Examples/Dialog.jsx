import React from "react";
import FancyBorder from "./FancyBorder";
export default function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <div className="Dialog-title">{props.title}</div>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}
