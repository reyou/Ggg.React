// http://localhost:3000/
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
// https://reacttraining.com/react-router/web/guides/quick-start
import { BrowserRouter as Router } from "react-router-dom";
//=============================================================================
import logo from "./logo.svg";
import "./App.css";
//=============================================================================
import HomeItemList from "./GggComponents/HomeItemList";
import Routes from "./GggComponents/Routes";
//=============================================================================
function gggReducer(store, action) {
  console.log("gggReducer.action: " + action.type);
  return store;
}
let store = createStore(gggReducer);
//=============================================================================
// https://reacttraining.com/react-router/web/guides/quick-start
// Redux - Usage with React - Passing the Store
// https://github.com/reactjs/redux/blob/master/docs/basics/UsageWithReact.md#passing-the-store
const BasicExample = () => (
  <Provider store={store}>
    <Router>
      <div>
        <HomeItemList />
        <Routes />
      </div>
    </Router>
  </Provider>
);
//=============================================================================
// eslint-disable-next-line
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// export default App;
export default BasicExample;
