import { SagaIterator } from "redux-saga";
import { takeLatest } from "redux-saga/effects";

import actions from "@domain/movies/actions";

import fetchMovies from "./fetchMovies";

export default function* sagaWatcher(): SagaIterator {
  yield takeLatest(actions.fetch.type, fetchMovies);
}
