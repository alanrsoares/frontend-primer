import Axios from "axios";
import { SagaIterator } from "redux-saga";
import { all, takeLatest, put } from "redux-saga/effects";
import { apiWorkerFactory } from "re-reduced";

import actions from "./actions";
import * as api from "./api";

const login = apiWorkerFactory(actions.login, api.login, {
  *onSuccess(result) {
    Axios.defaults.headers = { authorization: `Bearer ${result.token}` };
    yield put(actions.login.success(result));
  }
});

export const logout = apiWorkerFactory(actions.logout, api.logout);

export const validateToken = apiWorkerFactory(
  actions.validateToken,
  api.validateToken
);

export default function* sagaWatcher(): SagaIterator {
  yield all([
    takeLatest(actions.login.type, login),
    takeLatest(actions.logout.type, logout),
    takeLatest(actions.validateToken.type, validateToken)
  ]);
}
