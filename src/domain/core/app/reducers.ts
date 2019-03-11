import { combineReducers } from "redux";
import { createReducer, match } from "re-reduced";

import actions from "./actions";
import { Breadcrumb, AppState } from "./types";

const INITIAL_STATE = {
  breadcrumbs: [],
  isBootstrapped: false
};

const breadcrumbs = createReducer<Breadcrumb[]>(
  [match(actions.setBreadcrumbs, (_, payload) => payload)],
  INITIAL_STATE.breadcrumbs
);

const isBootstrapped = createReducer<boolean>(
  [match(actions.bootstrap.success, () => true)],
  INITIAL_STATE.isBootstrapped
);

export default combineReducers<AppState>({
  breadcrumbs,
  isBootstrapped
});
