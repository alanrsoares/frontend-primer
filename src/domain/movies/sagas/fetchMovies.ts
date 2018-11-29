import { apiWorkerFactory } from "re-reduced";

import { actions, api } from "../";

export default apiWorkerFactory(actions.fetchMovies, api.fetchMovies);
