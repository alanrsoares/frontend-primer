import { SagaIterator } from "redux-saga";
import { takeLatest, all } from "redux-saga/effects";
import { apiWorkerFactory } from "re-reduced";

import actions from "@domain/core/actions";
import * as api from "@domain/core/api";

export const fetchFeatures = apiWorkerFactory(
  actions.features.fetch,
  api.fetchFeatures
);

export default function* sagaWatcher(): SagaIterator {
  yield all([takeLatest(actions.features.fetch.type, fetchFeatures)]);
}
