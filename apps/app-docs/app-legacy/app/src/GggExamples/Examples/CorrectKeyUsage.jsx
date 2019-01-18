import React from "react";
import NumberList from "./NumberList";
const numbers = [1, 2, 3, 4, 5];
export default function CorrectKeyUsage() {
  return <NumberList numbers={numbers} />;
}
