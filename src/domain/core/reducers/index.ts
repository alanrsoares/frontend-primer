import { combineReducers } from "redux";
import { handleActions } from "re-reduced";

import { indexBy } from "@helpers/list";

import { actions, State } from "@domain/core";

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
  user: handleActions(
    [
      actions.user.login.request.reduce((state, _) => ({
        ...state,
        isLoggingIn: true
      })),
      actions.user.login.success.reduce((_, profile) => ({
        profile,
        isAuthenticated: true,
        isLoggingIn: false
      }))
    ],
    INITIAL_STATE.user
  ),
  features: handleActions(
    actions.features.fetch.success.reduce((_, payload) => ({
      byId: indexBy("id", payload),
      idList: payload.map(feature => feature.id)
    })),
    INITIAL_STATE.features
  ),
  breadcrumbs: handleActions(
    actions.setBreadcrumbs.reduce((_, payload) => payload),
    INITIAL_STATE.breadcrumbs
  )
});
