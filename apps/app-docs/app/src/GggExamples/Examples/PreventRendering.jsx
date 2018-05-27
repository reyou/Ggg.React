import React from "react";
import WarningBanner from "./WarningBanner";
// In rare cases you might want a component to hide itself even though
// it was rendered by another component. To do this return null instead
// of its render output.
// Returning null from a component's render method does not affect the
// firing of the component's lifecycle methods. For instance,
// componentWillUpdate and componentDidUpdate will still be called.
export default function PreventRendering() {
  return <WarningBanner />;
}
