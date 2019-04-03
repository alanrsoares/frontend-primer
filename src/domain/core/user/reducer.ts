import { createReducer, match } from "re-reduced";

import { RequestStatus } from "@lib/types";

import { UserState } from "./types";
import actions from "./actions";

const INITIAL_STATE: UserState = {
  isAuthenticated: false,
  profile: undefined,
  loginRequest: {
    status: RequestStatus.Idle,
    error: undefined
  }
};

export default createReducer<UserState>(
  [
    match(actions.login.request, (state, _) => ({
      ...state,
      loginRequest: {
        status: RequestStatus.Pending
      }
    })),
    match(actions.login.success, (_, { profile }) => ({
      profile,
      isAuthenticated: true,
      loginRequest: {
        status: RequestStatus.Fulfilled
      }
    })),
    match(actions.login.failure, (_, error) => ({
      ...INITIAL_STATE,
      loginRequest: {
        status: RequestStatus.Failed,
        error
      }
    })),
    match(actions.logout.success, () => INITIAL_STATE)
  ],
  INITIAL_STATE
);
