import { SagaIterator } from "redux-saga";
import { takeLatest } from "redux-saga/effects";

import actions from "@domain/core/actions";

import fetchFeatures from "./fetchFeatures";

export default function* sagaWatcher(): SagaIterator {
  yield takeLatest(actions.features.fetchList.run.type, fetchFeatures);
}
