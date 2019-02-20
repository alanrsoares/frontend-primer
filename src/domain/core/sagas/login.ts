import { apiWorkerFactory } from "re-reduced";

import actions from "@domain/core/actions";
import * as api from "@domain/core/api";
import { UserProfile, LoginPayload } from "../types";

const loginWorker = apiWorkerFactory<UserProfile, LoginPayload>(
  actions.user.login,
  api.login
);

export default loginWorker;
