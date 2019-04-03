import React from "react";
import { connect } from "react-redux";
import { applySpec } from "ramda";

import { selectors, Features } from "@domain/core";

interface Props {
  key: Features;
  isEnabled: boolean;
  children: React.ReactNode;
}

function FeatureToggle(props: Props) {
  return <>{props.isEnabled ? props.children : null}</>;
}

const enhance = connect(
  applySpec({
    isEnabled: selectors.getIsFeatureEnabled
  })
);

export default enhance(FeatureToggle);
