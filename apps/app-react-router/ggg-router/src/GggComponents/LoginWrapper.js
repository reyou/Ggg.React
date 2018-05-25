import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import RenderAsyncSample from "./RenderAsyncSample";

// https://stackoverflow.com/questions/47878049/render-async-component-in-react-router-v4
class LoginWrapper extends Component {
  async componentDidMount() {
    try {
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      const apiValue = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(apiValue);
      // just some delay
      setTimeout(() => {
        this.setState({ apiValue });
      }, 3000);
    } catch (err) {
      // error handling
      console.log(err);
    }
  }
  render() {
    if (this.state) {
      return <Redirect to="/renderAsyncLoggedIn" />;
    }
    return <RenderAsyncSample />;
  }
}

export default LoginWrapper;
