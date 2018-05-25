import React from "react";

const FoodceptionSection = ({ match }) => (
  <div>
    <h3>FoodceptionSection - {match.params.section}</h3>
    <div>match: {JSON.stringify(match)}</div>
  </div>
);

export default FoodceptionSection;
