import React from "react";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { AuthRoute, MainRoute, ProtectedRoute } from "../util/route_util";
import { SignupContainer } from "./singup/signup_container";

export const App = () => {
  return (
    <Switch>
      <AuthRoute exact path="/signup" component={SignupContainer} />
      <MainRoute exact path="/" />
      <Route path="/"> {<Redirect to="/" />} </Route>
    </Switch>
  );
};

{
  /* <ProtectedRoute exact path="/users" component={} />
<ProtectedRoute path="/user/" component={} /> */
}
