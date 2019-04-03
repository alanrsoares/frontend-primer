import { createReducer } from "re-reduced";

import actions from "./actions";

export default createReducer<string[]>(
  actions.fetch.success.reduce((_, payload) => payload.items),
  []
);
