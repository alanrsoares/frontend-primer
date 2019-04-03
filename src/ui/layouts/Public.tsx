import * as React from "react";

import { Route, withRouter, Switch } from "react-router";
import { Routes } from "@domain/core";

import Home from "@ui/pages/Home";
import Auth from "@ui/pages/Auth";
import Header from "@ui/compounds/Header";
import Profile from "@ui/pages/Profile";
import Article from "@ui/pages/Article";

export function Public() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={Routes.home} component={Home} />
        <Route path={Routes.login} component={Auth} />
        <Route path={Routes.register} component={Auth} />
        <Route path={Routes.profile()} component={Profile} />
        <Route path={Routes.article()} component={Article} />
      </Switch>
    </>
  );
}

export default withRouter(Public);
