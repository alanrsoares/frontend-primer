import { apiWorkerFactory } from "re-reduced";

import { actions, api } from "../";

export default apiWorkerFactory(actions.fetchGenres, api.fetchGenres);
