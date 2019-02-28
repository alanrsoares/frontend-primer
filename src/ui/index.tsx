import React, { useEffect } from "react";
import { connectWithActions } from "re-reduced";

import { BrowserRouter as Router } from "react-router-dom";

import { selectors } from "@domain";
import { actions } from "@domain/core";

import Public from "@ui/layouts/Public";
import Authenticated from "@ui/layouts/Authenticated";

import "./index.css";

interface Props {
  isAuthenticated: boolean;
  actions: typeof actions;
}

function App(props: Props) {
  useEffect(() => {
    props.actions.features.fetch();
  }, []);

  return (
    <Router>{props.isAuthenticated ? <Authenticated /> : <Public />}</Router>
  );
}

const enhance = connectWithActions<Props>(actions, {
  isAuthenticated: selectors.getUserIsAuthenticated
});

export default enhance(App);
