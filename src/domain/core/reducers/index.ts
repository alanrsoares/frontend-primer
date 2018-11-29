import { combineReducers } from "redux";
import { createReducer, match } from "re-reduced";

import { indexBy } from "../../../helpers/list";

import { actions, State } from "../../../domain/core";

const INITIAL_STATE: State = {
  features: {
    byId: {},
    idList: []
  },
  user: {
    isAuthenticated: false,
    profile: undefined,
    isLoggingIn: false
  },
  breadcrumbs: []
};

export default combineReducers<State>({
  user: createReducer(
    [
      match(actions.user.login.request, (state, _) => ({
        ...state,
        isLoggingIn: true
      })),
      match(actions.user.login.success, (_, profile) => ({
        profile,
        isAuthenticated: true,
        isLoggingIn: false
      }))
    ],
    INITIAL_STATE.user
  ),
  features: createReducer(
    [
      match(actions.features.fetch.success, (_, payload) => ({
        byId: indexBy("id", payload),
        idList: payload.map(feature => feature.id)
      }))
    ],
    INITIAL_STATE.features
  ),
  breadcrumbs: createReducer(
    [match(actions.setBreadcrumbs, (_, payload) => payload)],
    INITIAL_STATE.breadcrumbs
  )
});
