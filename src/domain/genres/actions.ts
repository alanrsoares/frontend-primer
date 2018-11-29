import { createAsyncAction } from "re-reduced";

import { Genre } from "./types";

export default {
  fetchGenres: createAsyncAction<void, Genre[]>("FETCH", "GENRES")
};
