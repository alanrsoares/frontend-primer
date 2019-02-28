import { apiWorkerFactory } from "re-reduced";

import actions from "@domain/core/actions";
import * as api from "@domain/core/api";

const logoutWorker = apiWorkerFactory(actions.user.logout, api.logout);

export default logoutWorker;
