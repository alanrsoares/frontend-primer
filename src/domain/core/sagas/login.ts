import { apiWorkerFactory } from "re-reduced";

import { actions, api } from "../../../domain/core";

const loginWorker = apiWorkerFactory(actions.user.login, api.login);

export default loginWorker;
