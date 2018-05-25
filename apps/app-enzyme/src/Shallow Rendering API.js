// http://airbnb.io/enzyme/docs/api/shallow.html
/*Shallow rendering is useful to constrain yourself to testing a component as a unit, 
and to ensure that your tests aren't indirectly asserting on behavior of 
child components. */
// yüzeysel/sığ
import { shallow } from "enzyme";
// http://sinonjs.org/
/*Standalone test spies, stubs and mocks for JavaScript. 
Works with any unit testing framework. */
import sinon from "sinon";

describe("<MyComponent />", () => {
  it("should render three <Foo /> components", () => {
    /*Returns ShallowWrapper: The wrapper instance around the rendered output. */
    // http://airbnb.io/enzyme/docs/api/shallow.html
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Foo)).to.have.length(3);
  });

  it("should render an `.icon-star`", () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(".icon-star")).to.have.length(1);
  });

  it("should render children when passed in", () => {
    const wrapper = shallow(
      <MyComponent>
        <div className="unique" />
      </MyComponent>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  it("simulates click events", () => {
    // http://sinonjs.org/releases/v4.4.6/spies/
    /*A test spy is a function that records arguments, return value, the value 
    of this and exception thrown (if any) for all its calls. There are two 
    types of spies: Some are anonymous functions, while others wrap methods 
    that already exist in the system under test. */
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    wrapper.find("button").simulate("click");
    expect(onButtonClick.calledOnce).to.equal(true);
  });
});
