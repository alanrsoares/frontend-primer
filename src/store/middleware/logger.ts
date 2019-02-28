import { Middleware } from "redux";
import { Action } from "re-reduced";

import messageService from "antd/lib/message";

const logger: Middleware = _ => next => (action: Action) => {
  if (action.type.endsWith("FAILURE")) {
    messageService.error("Oh snap! Something went wrong :(");

    console.error(
      `Action "${action.type.replace("_FAILURE", "")}" failed with:`,
      action.payload
    );
  }
  return next(action);
};

export default logger;
