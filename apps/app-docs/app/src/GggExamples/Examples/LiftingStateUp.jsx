// https://facebook.github.io/react/docs/lifting-state-up.html
// In React, sharing state is accomplished by moving it up to the closest
// common ancestor of the components that need it.
// This is called "lifting state up".
import React from "react";
import Calculator from "./Calculator";
export default function LiftingStateUp() {
  return <Calculator />;
}
