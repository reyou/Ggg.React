import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListItemLink from "./ListItemLink";

class HomeItemList extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/foodception">Foodception</Link>
          </li>
          <li>
            <Link to="/User/aozdemir/2018">User</Link>
          </li>
          <li>
            <Link to="/homeInline">Home Inline</Link>
          </li>
          <ListItemLink to="/somewhere">somewhere</ListItemLink>
          <ListItemLink to="/somewhere-else">somewhere-else</ListItemLink>
          <li>
            <Link to="/renderAsyncSample">renderAsyncSample sample</Link>
            &nbsp;
            <a
              href="https://github.com/ReactTraining/react-router/blob/v3.0.0/docs/API.md#onenternextstate-replace-callback"
              target="_blank"
              rel="noopener noreferrer"
            >
              onEnter docs
            </a>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>

        <hr />
      </div>
    );
  }
}

export default HomeItemList;
