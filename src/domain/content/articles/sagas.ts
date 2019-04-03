import { all, takeLatest } from "redux-saga/effects";
import { apiWorkerFactory } from "re-reduced";

import api from "./api";
import actions from "./actions";

export const fetch = apiWorkerFactory(actions.fetch, api.fetch);

export default function* sagaWatcher() {
  yield all([takeLatest(actions.fetch.type, fetch)]);
}
