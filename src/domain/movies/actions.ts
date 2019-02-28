import { createActions } from "re-reduced";

import { Movie } from "./types";

export default createActions("MOVIES", create => ({
  fetch: create.asyncAction<Movie[]>()
}));
