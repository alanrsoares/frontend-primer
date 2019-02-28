import { select, put, call, fork, take } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";

import actions from "@domain/core/actions";
import * as selectors from "@domain/core/selectors";
import * as api from "@domain/core/api";

import fetchFeatures from "./fetchFeatures";

export default function* bootstrapWorker(): SagaIterator {
  const token = yield select(selectors.getAuthToken);

  yield put(actions.bootstrap.request());

  try {
    const isTokenValid = yield call(api.validateToken, token);

    if (isTokenValid) {
      yield fork(fetchFeatures, actions.features.fetch());
      // waits until the features are fetched
      yield take(actions.features.fetch.success.type);
      yield put(actions.bootstrap.success());
    } else {
      yield put(actions.user.logout());
    }
  } catch (error) {
    yield put(actions.bootstrap.failure(error));
  }
}
