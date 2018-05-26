import React from "react";

export default function MessageList(props) {
  return props.messages.map((currentValue, index, array) => {
    return <div key={index}>{currentValue.title}</div>;
  });
}
