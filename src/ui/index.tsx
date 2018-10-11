import * as React from "react";
import { applySpec } from "ramda";
import { connect } from "react-redux";

import { selectors } from "@domain/core";

import Public from "./layouts/Public";
import Authenticated from "./layouts/Authenticated";

import "./index.css";

interface Props {
  isAuthenticated: boolean;
}

const App = ({ isAuthenticated }: Props) =>
  isAuthenticated ? <Authenticated /> : <Public />;

export default connect(
  applySpec({
    isAuthenticated: selectors.getUserIsAuthenticated
  })
)(App);
