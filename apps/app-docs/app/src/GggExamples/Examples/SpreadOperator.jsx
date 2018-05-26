import React from "react";
// These two components are equivalent
// We recommend that you use this syntax sparingly.
export default function SpreadOperator() {
  function Greeting(props) {
    return (
      <div>
        {props.firstName} {props.lastName}
      </div>
    );
  }
  const user = { firstName: "Ben2", lastName: "Hector2" };
  return (
    <div>
      <Greeting firstName="Ben" lastName="Hector" />
      <Greeting {...user} />
    </div>
  );
}
