import * as React from "react";
import { connectWithActions } from "re-reduced";
import { applySpec } from "ramda";

import { actions } from "@domain/core";

interface Props {
  actions: typeof actions;
}

class Dashboard extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    props.actions.setBreadcrumbs([{ text: "Home" }]);
  }
  public render() {
    return <div>foo</div>;
  }
}

const enhance = connectWithActions(actions)(applySpec<Props>({}));

export default enhance(Dashboard);
