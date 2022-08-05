import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { HomeContainer } from "../components/home/home_container";
import { LoginContainer } from "../components/login/login_container";

const mapStateToProps = (state) => ({ loggedIn: Boolean(state.session.id) });

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const Main = ({ path, loggedIn, exact }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) =>
      loggedIn ? <HomeContainer {...props} /> : <LoginContainer {...props} />
    }
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected)
);
export const MainRoute = withRouter(connect(mapStateToProps, null)(Main));
