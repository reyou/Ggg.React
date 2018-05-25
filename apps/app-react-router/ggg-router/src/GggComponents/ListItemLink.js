import React from "react";
import { Route, Link } from "react-router-dom";
const ListItemLink = ({ to, ...rest }) => (
  <Route
    path={to}
    children={({ match }) => (
      <li className={match ? "active" : ""}>
        <Link to={to} {...rest} />
        <span>&nbsp;to:{to}</span>
      </li>
    )}
  />
);

export default ListItemLink;
