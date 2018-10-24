import { createAsyncActions } from "re-reduced";

import { Movie } from "@domain/movies";

export default {
  fetchMovies: createAsyncActions<void, Movie[]>("FETCH", "MOVIES")
};
