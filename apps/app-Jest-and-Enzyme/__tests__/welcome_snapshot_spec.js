//=============================================================================
import React from "react";
// https://www.npmjs.com/package/react-test-renderer
/*Essentially, this package makes it easy to grab a snapshot 
of the "DOM tree" rendered by a React DOM or React Native 
component without using a browser or jsdom. */
import renderer from "react-test-renderer";
import Welcome from "../src/client/components/welcome.jsx";
/*Jest requires the react-test-renderer package to render 
the component to JSON. The describe function is used to write a 
test suite. 
The it function is used to define a test. 
The expect function is part of the assertion library exposed by Jest. 
The toMatchSnapshot method compares the JSON output with the JSON 
snapshot in the previous test run. */
//=============================================================================
describe("Welcome (Snapshot)", () => {
  it("Welcome renders hello world", () => {
    console.log("Ggg.Running: Welcome renders hello world");
    const component = renderer.create(<Welcome />);
    const json = component.toJSON();
    // https://facebook.github.io/jest/docs/en/expect.html#tomatchsnapshotoptionalstring
    expect(json).toMatchSnapshot();
  });
});
//=============================================================================
