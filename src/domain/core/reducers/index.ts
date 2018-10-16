import { combineReducers } from "redux";
import { handleActions } from "re-reduced";

import { indexBy } from "@helpers/list";

import {
  actions,
  State,
  UserProfile,
  UserState,
  FeaturesState,
  Feature
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
  }
};

const features = handleActions<FeaturesState>(
  {
    [actions.features.fetch.success.type]: (
      payload: Feature[],
      state: FeaturesState
    ) => ({
      ...state,
      byId: indexBy("id", payload),
      idList: payload.map(feature => feature.id)
    })
  },
  INITIAL_STATE.features
);

const user = handleActions<UserState>(
  {
    [actions.user.login.request.type]: (_, state) => ({
      ...state,
      isLoggingIn: true
    }),
    [actions.user.login.success.type]: (profile: UserProfile, state) => ({
      ...state,
      profile,
      isAuthenticated: true,
      isLoggingIn: false
    })
  },
  INITIAL_STATE.user
);

export default combineReducers<State>({
  user,
  features
});
