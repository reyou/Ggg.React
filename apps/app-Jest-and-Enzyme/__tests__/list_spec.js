import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import List from "../src/client/components/list.jsx";
import Adapter from "enzyme-adapter-react-16";
//=============================================================================
// https://github.com/airbnb/enzyme/tree/master/packages/enzyme-adapter-react-16
Enzyme.configure({ adapter: new Adapter() });
//=============================================================================
describe("List", () => {
  let list;
  /*We will initialize all tests in the test suite with a beforeEach function. 
The beforeEach function uses the shallow function to render the component. */
  beforeEach(() => {
    list = shallow(<List data={["Name 1", "Name 2", "Name 3"]} />);
  });
  /*The find method supports jQuery selectors to retrieve specific 
nodes from the tree. To verify if a table is rendered, we use 
the 'table' selector. To verify if a specific class is rendered, 
we use the '.myClass' selector. */
  it("List renders table", () => {
    expect(list.find("table").length).toEqual(1);
  });

  it("Class of rendered table", () => {
    expect(list.find(".myClass").length).toEqual(1);
  });

  it("List renders column", () => {
    const arr = list.find("th");
    expect(arr.length).toEqual(1);
    expect(arr.first().text()).toEqual("Name");
  });

  it("List renders data", () => {
    const arr = list.find("td");
    expect(arr.length).toEqual(3);
    expect(arr.at(1).text()).toEqual("Name 2");
  });
});
