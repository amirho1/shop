import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useUserContext } from "../contexts/UsersContext";
export default function PrivateRoute({ children, path, where }) {
  const { whoIsLogin } = useUserContext();
  return (
    <Route
      {...path}
      render={({ location }) =>
        whoIsLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: where,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
