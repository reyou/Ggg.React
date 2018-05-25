//=============================================================================
enzyme
https://github.com/airbnb/enzyme
JavaScript Testing utilities for React
//=============================================================================
Enzyme is not a unit testing framework. It does not have a test runner or an
assertion library. It works with any test runner and assertion library. In
that way, it is not opinionated (dikkafalı).
//=============================================================================
// https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8
Enzyme is a testing library to render the react component into the DOM and
query the DOM tree. Jest is a unit testing framework and has a test runner,
assertion library, and mocking support.
Enzyme and Jest is complementary. Enzyme can be used within Jest.
//=============================================================================
if you are using enzyme with React 16, you can run:
npm i enzyme enzyme-adapter-react-16 --save-dev
//=============================================================================
The documentation and examples for enzyme use mocha and chai, but you should
be able to extrapolate to your framework of choice.
https://github.com/airbnb/enzyme/blob/master/docs/guides/mocha.md
https://github.com/producthunt/chai-enzyme
//=============================================================================
Since enzyme's mount API requires a DOM, JSDOM is required in order to use
mount if you are not already in a browser environment (ie, a Node environment).
//=============================================================================
When testing with JSDOM, the setup.js file above needs to be run before the test
suite runs. If you are using mocha, this can be done from the command line
using the --require option:
D:\Git\Ggg\Ggg.React\apps\app-enzyme\src\Using enzyme with JSDOM.js
mocha --require setup.js --recursive path/to/test/dir
//=============================================================================
