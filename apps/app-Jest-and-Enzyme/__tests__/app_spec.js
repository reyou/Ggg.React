import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import App from "../src/client/components/app.jsx";
import Adapter from "enzyme-adapter-react-16";
//=============================================================================
// https://github.com/airbnb/enzyme/tree/master/packages/enzyme-adapter-react-16
Enzyme.configure({ adapter: new Adapter() });
//=============================================================================
describe("App", () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });
  /*We test the structure of the App component using the find method. 
The selector for the inner component is the component name. 
The code below tests if the component contains the two inner components, 
Add and List. */
  it("App renders nested components", () => {
    expect(app.find("Add").length).toEqual(1);
    expect(app.find("List").length).toEqual(1);
  });
  /*We want to test component interactions between nested components. 
When the onAdd event is triggered within the Add component, 
the List component should be updated with a new entry. */
  /*We get the Add component using the find method. We trigger the 
onAdd event. We allow the component to update itself. After the 
update, the list component has the newly added entry. */
  it("onAdd updates List", () => {
    const add = app.find("Add").first();
    add.props().onAdd("Name 1");
    app.update();

    const list = app.find("List").first();
    const listData = list.props().data;
    expect(listData.length).toEqual(1);
    expect(listData[0]).toEqual("Name 1");
  });
});
