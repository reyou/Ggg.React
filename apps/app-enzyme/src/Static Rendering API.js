// http://airbnb.io/enzyme/docs/api/render.html
/*enzyme's render function is used to render react components to static 
HTML and analyze the resulting HTML structure.
render returns a wrapper very similar to the other renderers in enzyme, 
mount and shallow; however, render uses a third party HTML parsing and 
traversal library Cheerio. We believe that Cheerio handles parsing and 
traversing HTML extremely well, and duplicating this functionality 
ourselves would be a disservice. */
import React from "react";
import { render } from "enzyme";
import PropTypes from "prop-types";

describe("<Foo />", () => {
  it("renders three `.foo-bar`s", () => {
    const wrapper = render(<Foo />);
    expect(wrapper.find(".foo-bar")).to.have.length(3);
  });

  it("rendered the title", () => {
    const wrapper = render(<Foo title="unique" />);
    expect(wrapper.text()).to.contain("unique");
  });

  it("can pass in context", () => {
    function SimpleComponent(props, context) {
      const { name } = context;
      return <div>{name}</div>;
    }
    SimpleComponent.contextTypes = {
      name: PropTypes.string
    };

    const context = { name: "foo" };
    const wrapper = render(<SimpleComponent />, { context });
    expect(wrapper.text()).to.equal("foo");
  });
});
