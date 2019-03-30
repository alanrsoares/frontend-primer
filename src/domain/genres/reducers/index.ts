import { Genre } from "@domain/genres/types";
import actions from "@domain/genres/actions";
import { createAsyncCollectionReducer } from "@helpers/reducers";

export default createAsyncCollectionReducer<Genre>(actions.fetch, "id");
