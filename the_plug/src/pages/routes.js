import React from "react";
import { Route, Switch } from 'react-router-dom';
import { ErrorPage, PageNotFoundFragment } from "./PageNotFound";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/" component={SignUpPage} />
      <Route exact path="/" component={ErrorPage} />
    </Switch>
  );
}

export default Routes;