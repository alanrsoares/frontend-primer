import { SagaIterator } from "redux-saga";
import {
  select,
  put,
  call,
  fork,
  take,
  all,
  takeLatest
} from "redux-saga/effects";

import * as selectors from "@domain/core/selectors";
import * as api from "@domain/core/api";
import actions from "@domain/core/actions";

import { fetchFeatures } from "@domain/core/features/sagas";

/**
 * Application initialization saga
 */
export function* bootstrap(): SagaIterator {
  const token = yield select(selectors.getAuthToken);

  yield put(actions.app.bootstrap.request());

  try {
    const isTokenValid = yield call(api.validateToken, { token });

    if (isTokenValid) {
      yield fork(fetchFeatures, actions.features.fetch());
      // waits until the features are fetched
      yield take(actions.features.fetch.success.type);

      yield put(actions.app.bootstrap.success());
    } else {
      yield put(actions.user.logout());
    }
  } catch (error) {
    yield put(actions.app.bootstrap.failure(error));
  }
}

export default function* sagaWatcher(): SagaIterator {
  yield all([takeLatest(actions.app.bootstrap.type, bootstrap)]);
}
