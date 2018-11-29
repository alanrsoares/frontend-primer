import { SagaIterator } from "redux-saga";
import { takeLatest } from "redux-saga/effects";

import actions from "@domain/genres/actions";
import fetchGenres from "@domain/genres/sagas/fetchGenres";

export default function* sagaWatcher(): SagaIterator {
  yield takeLatest(actions.fetchGenres.type, fetchGenres);
}
