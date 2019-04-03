import * as React from "react";

import { Route, withRouter, Switch } from "react-router";
import { Routes } from "@domain/core";

import Home from "@ui/pages/Home";

import Settings from "@ui/pages/Settings";
import Editor from "@ui/pages/Editor";

export function Authenticated() {
  return (
    <Switch>
      <Route exact path={Routes.home} component={Home} />
      <Route path={Routes.settings} component={Settings} />
      <Route path={Routes.editor()} component={Editor} />
    </Switch>
  );
}

export default withRouter(Authenticated);
