import { apiWorkerFactory } from "re-reduced";
import { put } from "redux-saga/effects";

import actions from "@domain/core/actions";
import * as api from "@domain/core/api";
import Axios from "axios";

const loginWorker = apiWorkerFactory(actions.user.login, api.login, {
  *onSuccess(result) {
    Axios.defaults.headers = { authorization: `Bearer ${result.token}` };
    yield put(actions.user.login.success(result));
  }
});

export default loginWorker;
