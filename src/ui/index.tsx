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
  isBootstrapped: boolean;
  actions: typeof actions;
}

function App(props: Props) {
  useEffect(() => {
    if (!props.isBootstrapped) {
      props.actions.bootstrap();
    }
  }, []);

  if (!props.isBootstrapped) {
    return <div>initializing app...</div>;
  }

  const SubRouteComponent = props.isAuthenticated ? Authenticated : Public;

  return (
    <Router>
      <SubRouteComponent />
    </Router>
  );
}

const enhance = connectWithActions<Props>(actions, {
  isAuthenticated: selectors.getUserIsAuthenticated,
  isBootstrapped: selectors.getIsBootstrapped
});

export default enhance(App);
