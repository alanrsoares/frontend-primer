import { createAsyncAction } from "re-reduced";

import { Movie } from "./types";

export default {
  fetchMovies: createAsyncAction<Movie[]>("FETCH", "MOVIES")
};
