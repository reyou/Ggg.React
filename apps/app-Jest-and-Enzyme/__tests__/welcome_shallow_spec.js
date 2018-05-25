//=============================================================================
// https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8
//=============================================================================
import React from "react";
import expect from "expect";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Welcome from "../src/client/components/welcome.jsx";
import Adapter from "enzyme-adapter-react-16";
//=============================================================================
// https://github.com/airbnb/enzyme/tree/master/packages/enzyme-adapter-react-16
Enzyme.configure({ adapter: new Adapter() });
//=============================================================================
/*The shallow function in Enzyme does a shallow rendering to the DOM. Shallow 
rendering does not render any components nested within the Welcome component. 
The find method in Enzyme accepts jQuery-like selectors to retrieve a node 
from the DOM tree. In the above test, the text of the div node is retrieved 
and asserted to equal 'Hello world'. */
describe("Welcome", () => {
  it("Welcome renders hello world", () => {
    const welcome = shallow(<Welcome />);
    let textFound = welcome.find("div").text();
    console.log("textFound:");
    console.log(textFound);
    expect(textFound).toEqual("Hello world");
  });
});
//=============================================================================
