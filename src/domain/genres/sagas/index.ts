import { SagaIterator } from "redux-saga";
import { takeLatest } from "redux-saga/effects";

import actions from "../actions";
import fetchGenres from "../sagas/fetchGenres";

export default function* sagaWatcher(): SagaIterator {
  yield takeLatest(actions.fetchGenres.type, fetchGenres);
}
