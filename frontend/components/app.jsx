import React from "react";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { FeedContainer } from "./feed/feed_container";
import { LoginContainer } from "./login/login_container";
import { SignupContainer } from "./singup/signup_container";

export const App = () => {
    return (
        <Switch>
            <Route exact path="/signup" render={ () => {
                if (Boolean(getState().session.id)) return (<Redirect to="/" />)
                else return (<SignupContainer/>)
            }} />
            <Route exact path="/" render={ () => {
                if (Boolean(getState().session.id)) return (<FeedContainer/>)
                else return (<LoginContainer/>)
            }} />
            <Route path="/"> { <Redirect to="/" /> } </Route>
        </Switch>
    )
}

// <Navigate replace to="/" />
// import { Navigate } from "react-router";