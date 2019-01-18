cd ggg-react-app
//=============================================================================
npm install -g create-react-app
create-react-app app
//=============================================================================
install missing packages
$ yarn
//=============================================================================
http://localhost:3000/
//=============================================================================
Success! Created app at D:\Git\Ggg.Github\Ggg.React\apps\app-docs\app
Inside that directory, you can run several commands:

yarn start
Starts the development server.

yarn build
Bundles the app into static files for production.

yarn test
Starts the test runner.

yarn eject
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

cd app
yarn start
//=============================================================================
debug your React apps directly from VS Code
https://medium.com/@auchenberg/live-edit-and-debug-your-react-apps-directly-from-vs-code-without-leaving-the-editor-3da489ed905f
//=============================================================================
https://code.visualstudio.com/docs/editor/debugging
\.vscode\launch.json
type - the type of debugger to use for this launch configuration. Every
installed debug extension introduces a type, for example, node for the built-in
node debugger, or php and go for the PHP and Go extensions.
request - the request type of this launch configuration. Currently supported
are launch and attach.
//=============================================================================
https://reactjs.org/docs/optimizing-performance.html#use-the-production-build
//=============================================================================
https://facebook.github.io/jest/docs/en/tutorial-react.html
yarn add --dev react-test-renderer
//=============================================================================
React elements are immutable. Once you create an element, you can't change
its children or attributes. An element is like a single frame in a
movie: it represents the UI at a certain point in time.
//=============================================================================
Applications built with just React usually have a single root DOM node.
If you are integrating React into an existing app, you may have as many
isolated root DOM nodes as you like.
//=============================================================================
