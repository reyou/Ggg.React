//=============================================================================
To Run Tests:
D:\Git\Ggg\Ggg.React\apps\app-Jest-and-Enzyme\package.json
npm run test
//=============================================================================
"start": "webpack-dev-server"
http://localhost:8080/
npm run start
//=============================================================================
Getting started with Jest and Enzyme
https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8
https://github.com/vijayst/react-test
https://github.com/reyou/react-test
//=============================================================================
npm install react react-dom --save
//=============================================================================
Run to update
npm i -g npm
//=============================================================================
The Welcome component is a React component that uses JSX. To parse JSX and
ES6 code, some add-on packages are required.
npm install babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-react --save-dev
//=============================================================================
echo > .babelrc
//=============================================================================
Next, we install Jest.
Jest looks for tests in a folder called **tests** . We will explore snapshot testing
using Jest.
npm install jest babel-jest react-test-renderer --save-dev
//=============================================================================
Snapshot testing is another new idea from Facebook. It provides an alternate
way to write tests without any assertions. To write tests using assertions,
Enzyme is quite useful.
//=============================================================================
Installing enzyme is straight-forward.
npm install enzyme --save-dev
//=============================================================================
https://github.com/airbnb/enzyme/tree/master/packages/enzyme-adapter-react-16
npm i enzyme enzyme-adapter-react-16 --save-dev
//=============================================================================
