import { SagaIterator } from "redux-saga";
import { takeLatest } from "redux-saga/effects";

import actions from "../actions";

import fetchMovies from "./fetchMovies";

export default function* sagaWatcher(): SagaIterator {
  yield takeLatest(actions.fetchMovies.type, fetchMovies);
}
