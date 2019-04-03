import { Middleware } from "redux";
import { Action } from "re-reduced";

const logger: Middleware = _ => next => (action: Action) => {
  if (action.type.endsWith("FAILURE")) {
    console.error(
      `Action "${action.type.replace("_FAILURE", "")}" failed with:`,
      action.payload
    );
  }
  return next(action);
};

export default logger;
