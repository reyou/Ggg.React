// JSX Prevents Injection Attacks
// React DOM escapes any values embedded in JSX before rendering them.
import React from "react";
export default function PreventsInjectionAttacks() {
  let response = {
    potentiallyMaliciousInput:
      "<script type='text/javascript'>javascript:alert(1);</script>"
  };
  const title = response.potentiallyMaliciousInput;
  return (
    <div>
      <div>
        JSX Prevents Injection Attacks React DOM escapes any values embedded in
        JSX before rendering them.
      </div>
      <div>{title}</div>
    </div>
  );
}
