import { Genre } from "@domain/genres";
import { createAsyncActions } from "@helpers/actions";

export default {
  fetch: createAsyncActions<void, Genre[]>("FETCH", "GENRES")
};
