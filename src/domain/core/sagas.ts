import { SagaIterator } from "redux-saga";
import { all, fork } from "redux-saga/effects";

import user from "./user/sagas";
import app from "./app/sagas";
import features from "./features/sagas";

const sagaWatchers = [user, app, features];

export default function* rootSaga(): SagaIterator {
  yield all(sagaWatchers.map(fork));
}
