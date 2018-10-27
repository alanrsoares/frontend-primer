import * as React from "react";
import { applySpec } from "ramda";
import { connectWithActions } from "re-reduced";

import { BrowserRouter as Router } from "react-router-dom";

import { selectors, actions } from "@domain/core";
import Public from "@ui/layouts/Public";
import Authenticated from "@ui/layouts/Authenticated";

import "./index.css";

interface Props {
  isAuthenticated: boolean;
  actions: typeof actions;
}

class App extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.props.actions.features.fetch();
  }

  public render() {
    return (
      <Router>
        {this.props.isAuthenticated ? <Authenticated /> : <Public />}
      </Router>
    );
  }
}

const enhance = connectWithActions(
  actions,
  /* map State to Props  */
  applySpec<Props>({
    isAuthenticated: selectors.getUserIsAuthenticated
  })
);

export default enhance(App);
