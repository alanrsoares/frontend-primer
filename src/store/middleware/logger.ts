import { Middleware } from "redux";
import { Action } from "re-reduced";
import { message } from "antd";

const logger: Middleware = _ => next => (action: Action) => {
  if (action.type.endsWith("FAILURE")) {
    message.error("Snap! Something went wrong :(");

    console.error(
      `Action "${action.type.replace("_FAILURE", "")}" failed with:`,
      action.payload
    );
  }
  return next(action);
};

export default logger;
