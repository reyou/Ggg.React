//=============================================================================
// https://github.com/airbnb/enzyme#static-rendered-markup
//=============================================================================
import React from "react";
import { expect } from "chai";
import { render } from "enzyme";

import Foo from "./Foo";

describe("<Foo />", () => {
  it("renders three `.foo-bar`s", () => {
    const wrapper = render(<Foo />);
    expect(wrapper.find(".foo-bar").length).to.equal(3);
  });

  it("renders the title", () => {
    const wrapper = render(<Foo title="unique" />);
    expect(wrapper.text()).to.contain("unique");
  });
});
