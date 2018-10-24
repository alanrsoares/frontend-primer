import { apiWorkerFactory } from "re-reduced";

import { actions, api } from "@domain/movies";

export default apiWorkerFactory(actions.fetchMovies, api.fetchMovies);
