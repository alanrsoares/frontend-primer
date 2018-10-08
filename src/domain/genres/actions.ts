import { Genre } from "@domain/genres";
import { createAsyncActions } from "@helpers/actions";

export default {
  fetchList: createAsyncActions<{}, Genre[]>("FETCH", "GENRES")
};
