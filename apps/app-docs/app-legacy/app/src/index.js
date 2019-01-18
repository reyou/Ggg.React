import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// https://reactjs.org/docs/rendering-elements.html
/*Applications built with just React usually have a single root 
DOM node. If you are integrating React into an existing app, 
you may have as many isolated root DOM nodes as you like. */
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
