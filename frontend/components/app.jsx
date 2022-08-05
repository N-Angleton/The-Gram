import React from "react";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { AuthRoute, MainRoute, ProtectedRoute } from "../util/route_util";
import { HeaderContainer } from "./header/header_container";
import { SignupContainer } from "./singup/signup_container";

export const App = () => {
  return (
    <>
      <ProtectedRoute path="/" component={HeaderContainer}/>
      <Switch>
        <AuthRoute exact path="/signup" component={SignupContainer} />
        {/* <ProtectedRoute path="/users/:id" component={UsersContainer} /> */}
        <MainRoute exact path="/" />
        <Route path="/"> {<Redirect to="/" />} </Route>
      </Switch>
    </>
  );
};

{
  /* <ProtectedRoute exact path="/users" component={} />
<ProtectedRoute path="/user/" component={} /> */
}
