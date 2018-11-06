import { createAsyncAction } from "re-reduced";

import { Movie } from "@domain/movies";

export default {
  fetchMovies: createAsyncAction<void, Movie[]>("FETCH", "MOVIES")
};
