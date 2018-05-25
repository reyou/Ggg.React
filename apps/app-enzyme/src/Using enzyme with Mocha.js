//=============================================================================
// http://airbnb.io/enzyme/docs/guides/mocha.html
//=============================================================================
import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import { spy } from "sinon";
import Foo from "./src/Foo";

spy(Foo.prototype, "componentDidMount");

describe("<Foo />", () => {
  it("calls componentDidMount", () => {
    const wrapper = mount(<Foo />);
    expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
