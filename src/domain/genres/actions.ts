import { Genre } from "@domain/genres";
import { createAsyncActions } from "@helpers/actions";

export default {
  fetchList: createAsyncActions<void, Genre[]>("FETCH", "GENRES")
};
