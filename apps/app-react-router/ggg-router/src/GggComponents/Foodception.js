import React from "react";
import { Route, Link } from "react-router-dom";
import FoodceptionSection from "./FoodceptionSection";
//
// http://localhost:3000/foodception
const Foodception = ({ match }) => (
  <div>
    <h2>Foodception</h2>
    <div>match: {JSON.stringify(match)}</div>
    <div style={{ paddingTop: "10px" }}>
      <Link to={`${match.url}/videos`}>Videos</Link>
    </div>
    <div style={{ paddingTop: "10px" }}>
      <Link to={`${match.url}/recipes`}>Recipes</Link>
    </div>
    <div style={{ paddingTop: "10px" }}>
      <Link to={`${match.url}/social`}>Social</Link>
    </div>
    <Route path={`${match.url}/:section`} component={FoodceptionSection} />
  </div>
);
export default Foodception;
