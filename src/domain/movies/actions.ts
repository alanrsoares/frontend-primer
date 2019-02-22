import { createActions } from "re-reduced";

import { Movie } from "./types";

export default createActions("MOVIES", create => ({
  fetchMovies: create.asyncAction<Movie[]>()
}));
