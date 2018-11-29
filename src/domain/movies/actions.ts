import { createAsyncAction } from "re-reduced";

import { Movie } from "./types";

export default {
  fetchMovies: createAsyncAction<void, Movie[]>("FETCH", "MOVIES")
};
