import { Action } from "redux";

import { State } from "@domain/core";

const INITIAL_STATE = {
  features: {
    byId: {},
    idList: []
  },
  auth: {
    isLoggedIn: false
  }
};

export default function reducer(state: State = INITIAL_STATE, action: Action) {
  return state;
}
