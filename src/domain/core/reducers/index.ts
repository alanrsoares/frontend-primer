import { combineReducers } from "redux";
import { handleActions } from "re-reduced";

import { indexBy } from "@helpers/list";

import { actions, State, UserState, FeaturesState } from "@domain/core";

const INITIAL_STATE: State = {
  features: {
    byId: {},
    idList: []
  },
  user: {
    isAuthenticated: false,
    profile: undefined,
    isLoggingIn: false
  }
};

const features = handleActions<FeaturesState>(
  actions.features.fetch.success.reduce<FeaturesState>((payload, state) => ({
    byId: indexBy("id", payload),
    idList: payload.map(feature => feature.id)
  })),
  INITIAL_STATE.features
);

const user = handleActions<UserState>(
  [
    actions.user.login.request.reduce<UserState>((_, state) => ({
      ...state,
      isLoggingIn: true
    })),
    actions.user.login.success.reduce<UserState>((profile, state) => ({
      ...state,
      profile,
      isAuthenticated: true,
      isLoggingIn: false
    }))
  ],
  INITIAL_STATE.user
);

export default combineReducers<State>({
  user,
  features
});
