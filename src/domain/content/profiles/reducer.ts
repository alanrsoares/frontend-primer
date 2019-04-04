import { createReducer } from "re-reduced";
import { combineReducers } from "redux";
import { pluck } from "ramda";

import { indexBy } from "@helpers/list";
import { RequestStatus } from "@lib/types";

import actions from "@domain/content/actions";
import { ProfilesState } from "./types";
import { createAsyncValueReducer } from "@helpers/reducers";

const INITIAL_STATE: ProfilesState = {
  items: {
    byId: {},
    idList: [],
    request: {
      status: RequestStatus.Idle
    }
  },
  detail: { value: null, request: { status: RequestStatus.Idle } }
};

export default combineReducers<ProfilesState>({
  items: createReducer(
    [
      actions.articles.fetch.success.reduce((state, payload) => ({
        ...state,
        byId: indexBy("username", pluck("author", payload.items))
      }))
    ],
    INITIAL_STATE.items
  ),
  detail: createAsyncValueReducer(actions.profiles.fetchDetail)
});
