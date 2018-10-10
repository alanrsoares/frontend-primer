import * as React from "react";
import { applySpec } from "ramda";
import { connect } from "react-redux";

import { selectors } from "@domain/core";

import Public from "./layouts/Public";
import Authenticated from "./layouts/Authenticated";

import "./index.css";

interface Props {
  isLoggedIn: boolean;
}

const App = ({ isLoggedIn }: Props) =>
  isLoggedIn ? <Authenticated /> : <Public />;

export default connect(
  applySpec({
    isLoggedIn: selectors.getIsLoggedIn
  })
)(App);
