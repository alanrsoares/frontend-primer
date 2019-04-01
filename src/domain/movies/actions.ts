import { createActions } from "re-reduced";

import { Movie } from "./types";
import { Paginated } from "@helpers/reducers";

export default createActions("MOVIES", create => ({
  fetch: create.asyncAction<Paginated<Movie>>(),
  fetchDetails: create.asyncAction<Movie, { id: string }>()
}));
