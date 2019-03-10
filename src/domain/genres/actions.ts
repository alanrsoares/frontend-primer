import { createActions } from "re-reduced";

import { Genre } from "@domain/genres/types";

export default createActions("GENRES", create => ({
  fetch: create.asyncAction<Genre[]>(),
  fetchDetails: create.asyncAction<Genre, { id: string }>()
}));
