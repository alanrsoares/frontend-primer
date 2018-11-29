import { createAsyncAction } from "re-reduced";

import { Movie } from "./";

export default {
  fetchMovies: createAsyncAction<void, Movie[]>("FETCH", "MOVIES")
};
