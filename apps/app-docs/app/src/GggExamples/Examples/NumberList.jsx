import React from "react";
import ListItem from "./ListItem";
export default function NumberList(props) {
  const numbers = props.numbers;
  // A good rule of thumb is that elements inside the map()
  // call need keys.
  const listItems = numbers.map(number => (
    // Correct! Key should be specified inside the array.
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}
