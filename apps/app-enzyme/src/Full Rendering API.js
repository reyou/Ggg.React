// http://airbnb.io/enzyme/docs/api/mount.html
/*Full DOM rendering requires that a full DOM API be available at the 
global scope. This means that it must be run in an environment that 
at least “looks like” a browser environment. If you do not want to 
run your tests inside of a browser, the recommended approach to using 
mount is to depend on a library called jsdom which is essentially 
a headless browser implemented completely in JS. */
/*Note: unlike shallow or static rendering, full rendering actually 
mounts the component in the DOM, which means that tests can affect 
each other if they are all using the same DOM. Keep that in mind while 
writing your tests and, if necessary, use .unmount() or something 
similar as cleanup. */
import { mount } from "enzyme";
import sinon from "sinon";
import Foo from "./Foo";

describe("<Foo />", () => {
  it("calls componentDidMount", () => {
    sinon.spy(Foo.prototype, "componentDidMount");
    const wrapper = mount(<Foo />);
    expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it("allows us to set props", () => {
    const wrapper = mount(<Foo bar="baz" />);
    expect(wrapper.props().bar).to.equal("baz");
    wrapper.setProps({ bar: "foo" });
    expect(wrapper.props().bar).to.equal("foo");
  });

  it("simulates click events", () => {
    const onButtonClick = sinon.spy();
    const wrapper = mount(<Foo onButtonClick={onButtonClick} />);
    wrapper.find("button").simulate("click");
    expect(onButtonClick.calledOnce).to.equal(true);
  });
});
