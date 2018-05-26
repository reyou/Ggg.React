import React from "react";

// false, null, undefined, and true are valid children.
// They simply don't render. These JSX expressions will all
// render to the same thing:
export default function DontRender() {
  let qf = <div />;
  let et = <div>{false}</div>;
  let rf = <div>{null}</div>;
  let tf = <div>{undefined}</div>;
  let ys = <div>{true}</div>;
  return (
    <div>
      <div>
        false, null, undefined, and true are valid children. They simply don't
        render. These JSX expressions will all render to the same thing:
      </div>
      {qf}
      {et}
      {rf}
      {tf}
      {ys}
    </div>
  );
}
