import { Action } from "redux";

import { State } from "@domain/core";

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

export default function reducer(state: State = INITIAL_STATE, action: Action) {
  return state;
}
