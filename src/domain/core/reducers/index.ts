import { State, actions } from "@domain/core";
import { handleActions } from "@helpers/reducers";
import { UserProfile } from "../types";

const INITIAL_STATE: State = {
  features: {
    byId: {},
    idList: []
  },
  user: {
    isAuthenticated: false,
    profile: undefined
  }
};

export default handleActions<State>(
  {
    [actions.user.login.success.type]: (
      profile: UserProfile,
      state: State
    ) => ({
      ...state,
      user: {
        profile,
        isAuthenticated: true
      }
    })
  },
  INITIAL_STATE
);
