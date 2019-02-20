import { apiWorkerFactory } from "re-reduced";

import actions from "@domain/core/actions";
import * as api from "@domain/core/api";

const loginWorker = apiWorkerFactory(actions.user.login, api.login);

export default loginWorker;
