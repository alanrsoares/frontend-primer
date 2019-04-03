import { combineReducers } from "redux";
import { createReducer } from "re-reduced";

import actions from "./actions";
import { Breadcrumb, AppState } from "./types";

const INITIAL_STATE = {
  breadcrumbs: [],
  isBootstrapped: false
};

const breadcrumbs = createReducer<Breadcrumb[]>(
  actions.setBreadcrumbs.reduce((_, payload) => payload),
  INITIAL_STATE.breadcrumbs
);

const isBootstrapped = createReducer<boolean>(
  actions.bootstrap.success.reduce(() => true),
  INITIAL_STATE.isBootstrapped
);

export default combineReducers<AppState>({
  breadcrumbs,
  isBootstrapped
});
