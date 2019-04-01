import { createActions } from "re-reduced";

import { Paginated } from "@lib/types";
import { Movie } from "./types";

export default createActions("MOVIES", create => ({
  fetch: create.asyncAction<Paginated<Movie[]>>(),
  fetchDetails: create.asyncAction<Movie, { id: string }>()
}));
