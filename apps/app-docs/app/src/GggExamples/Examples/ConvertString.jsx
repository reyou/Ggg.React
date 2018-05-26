// https://facebook.github.io/react/docs/jsx-in-depth.html
//=============================================================================
// if you want a value like false, true, null, or undefined to appear in the
// output, you have to convert it to a string first:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#String_conversion
//=============================================================================
import React from "react";

export default function ConvertString(props) {
  return <div>My JavaScript variable is {String(props.myVariable)}.</div>;
}
