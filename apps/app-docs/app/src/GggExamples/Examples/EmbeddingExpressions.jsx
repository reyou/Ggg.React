import React from "react";
import ListItem from "./ListItem";
export default function EmbeddingExpressions(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number, index) => {
        return <ListItem key={number} value={number} />;
      })}
    </ul>
  );
}
