import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Topics from "./Topics";
import Foodception from "./Foodception";
import User from "./User";

import RenderAsyncLoggedIn from "./RenderAsyncLoggedIn";
import LoginWrapper from "./LoginWrapper";
import Product from "../bindActionCreatorsSamples/Product";
class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
        <Route path="/foodception" component={Foodception} />
        <Route path="/user/:username/:year" component={User} />
        {/*convenient inline rendering */}
        <Route path="/homeInline" render={() => <div>Home2</div>} />
        {/* https://stackoverflow.com/questions/42768620/onenter-not-called-in-react-router */}
        <Route path="/renderAsyncSample" render={() => <LoginWrapper />} />
        <Route path="/renderAsyncLoggedIn" component={RenderAsyncLoggedIn} />
        <Route path="/product" component={Product} />
      </div>
    );
  }
}

export default Routes;
