import * as React from "react";
import { connectWithActions } from "re-reduced";

import { actions } from "@domain/core";

interface Props {
  actions: typeof actions;
}

class Dashboard extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    props.actions.setBreadcrumbs([{ text: "Home" }]);
  }
  public render() {
    return <div>Hello, I'm a Dashboard</div>;
  }
}

const enhance = connectWithActions(actions);

export default enhance(Dashboard);
