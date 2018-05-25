//=============================================================================
// http://airbnb.io/enzyme/docs/guides/jsdom.html
//=============================================================================
/* setup.js */
/*For the best experience with enzyme, it is recommended that you load a 
document into the global scope before requiring React for the first time. It 
is very important that the below script gets run before React's code is run. */
//=============================================================================
const { JSDOM } = require("jsdom");

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === "undefined")
    .reduce(
      (result, prop) => ({
        ...result,
        [prop]: Object.getOwnPropertyDescriptor(src, prop)
      }),
      {}
    );
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js"
};
copyProps(window, global);
