import { SagaIterator } from "redux-saga";
import { takeLatest, all } from "redux-saga/effects";

import actions from "@domain/core/actions";

import fetchFeatures from "./fetchFeatures";
import login from "./login";
import logout from "./logout";

export default function* sagaWatcher(): SagaIterator {
  yield all([
    takeLatest(actions.features.fetch.type, fetchFeatures),
    takeLatest(actions.user.login.type, login),
    takeLatest(actions.user.logout.type, logout)
  ]);
}
