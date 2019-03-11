import { createReducer, match } from "re-reduced";
import { indexBy } from "@helpers/list";

import { RequestStatus } from "@lib/types";

import { FeaturesState } from "./types";
import actions from "./actions";

const INITIAL_STATE = {
  byId: {},
  idList: [],
  request: {
    status: RequestStatus.Idle
  }
};

export default createReducer<FeaturesState>(
  [
    match(actions.fetch.success, (state, payload) => ({
      ...state,
      byId: indexBy("id", payload),
      idList: payload.map(feature => feature.id)
    }))
  ],
  INITIAL_STATE
);
