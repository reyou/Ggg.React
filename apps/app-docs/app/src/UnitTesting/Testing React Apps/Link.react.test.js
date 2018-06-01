/*Now let's use React's test renderer and Jest's snapshot 
feature to interact with the component and capture the 
rendered output and create a snapshot file: */
// Link.react.test.js
import React from "react";
import Link from "../Link.react";
import renderer from "react-test-renderer";

test("Link changes the class when hovered", () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
