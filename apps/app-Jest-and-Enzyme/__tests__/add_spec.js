import React from "react";
import Enzyme from "enzyme";
import { mount } from "enzyme";
import Add from "../src/client/components/add.jsx";
import Adapter from "enzyme-adapter-react-16";
//=============================================================================
// https://github.com/airbnb/enzyme/tree/master/packages/enzyme-adapter-react-16
Enzyme.configure({ adapter: new Adapter() });
//=============================================================================
/*Testing behaviour is best performed by mounting the component. 
Jest has good mocking support. We will use jest.fn() to create 
a mock function. We will supply the mock to the onAdd prop 
of our component. */
describe("Add", () => {
  let add;
  let onAdd;

  beforeEach(() => {
    onAdd = jest.fn();
    add = mount(<Add onAdd={onAdd} />);
  });
  /*We will start testing by checking whether the onAdd prop 
is defined. We will also test the structure by checking if 
the button is rendered. */
  it("Add requires onAdd prop", () => {
    expect(add.props().onAdd).toBeDefined();
  });

  it("Add renders button", () => {
    const button = add.find("button").first();
    expect(button).toBeDefined();
  });
  /*We will then test the behavior of the component when 
the button is clicked. When the button is clicked, our mock 
should be called with the appropriate arguments. */
  /*Enzyme does not allow to change the value of the input element. 
Instead, we simulate the change event on the input text. 
After that, we simulate the click event of the button. 
The simulate method is useful to simulate user actions. */
  it("Button click calls onAdd", () => {
    const button = add.find("button").first();
    const input = add.find("input").first();
    // Does not let me change the value of input.
    // Instead pass the value to eventargs.
    input.simulate("change", { target: { value: "Name 4" } });
    button.simulate("click");
    expect(onAdd).toBeCalledWith("Name 4");
  });
});
