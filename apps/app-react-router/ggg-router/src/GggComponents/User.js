//=============================================================================
// A React component to render only when the location matches. It will be rendered with route props.
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Route.md#component
//=============================================================================
import React from "react";
//=============================================================================
const User = ({ match }) => {
  return (
    <h1>
      Hello {match.params.username} {match.params.year}!
    </h1>
  );
};

export default User;
//=============================================================================
