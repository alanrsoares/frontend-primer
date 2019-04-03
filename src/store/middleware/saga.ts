import { SagaIterator } from "redux-saga";
import { all, spawn } from "redux-saga/effects";

import core from "@domain/core/sagas";
import content from "@domain/content/sagas";

const sagaWatchers = [core, content];

export default function* rootSaga(): SagaIterator {
  yield all(sagaWatchers.map(spawn));
}
