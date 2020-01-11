import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./auth-context";

function PrivateRoute({ children, ...others }) {
  const { isAuthenticated } = useAuth();

  return (
    <Route {...others}>
      {isAuthenticated ? children : <Redirect to="/" />}
    </Route>
  );
}

export { PrivateRoute };
