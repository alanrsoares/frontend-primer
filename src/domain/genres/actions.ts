import { createAsyncAction } from "re-reduced";

import { Genre } from "@domain/genres";

export default {
  fetchGenres: createAsyncAction<void, Genre[]>("FETCH", "GENRES")
};
