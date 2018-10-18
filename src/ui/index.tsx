import * as React from "react";
import { applySpec } from "ramda";

import { selectors, actions } from "@domain/core";

import { connectWithActions } from "re-reduced";

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
    return this.props.isAuthenticated ? <Authenticated /> : <Public />;
  }
}

const enhance = connectWithActions(actions)(
  /* map State to Props  */
  applySpec<Props>({
    isAuthenticated: selectors.getUserIsAuthenticated
  })
);

export default enhance(App);
