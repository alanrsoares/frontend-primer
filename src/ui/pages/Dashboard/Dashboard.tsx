import React, { useEffect } from "react";
import { connectWithActions } from "re-reduced";

import { actions } from "@domain/core";

interface Props {
  actions: typeof actions;
}

function Dashboard(props: Props) {
  useEffect(() => {
    props.actions.app.setBreadcrumbs([{ text: "Home" }]);
  }, []);

  return <div>Hello, I'm a Dashboard</div>;
}

const enhance = connectWithActions(actions);

export default enhance(Dashboard);
