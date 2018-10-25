import { combineReducers } from "redux";
import { handleActions } from "re-reduced";

import { indexBy } from "@helpers/list";

import {
  actions,
  State,
  UserState,
  FeaturesState,
  Breadcrumb
} from "@domain/core";

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

const features = handleActions<FeaturesState>(
  actions.features.fetch.success.reduce((_, payload) => ({
    byId: indexBy("id", payload),
    idList: payload.map(feature => feature.id)
  })),
  INITIAL_STATE.features
);

const user = handleActions<UserState>(
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
);

const breadcrumbs = handleActions<Breadcrumb[]>(
  actions.setBreadcrumbs.reduce((_, payload) => payload),
  INITIAL_STATE.breadcrumbs
);

export default combineReducers<State>({
  user,
  features,
  breadcrumbs
});
