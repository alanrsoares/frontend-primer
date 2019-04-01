import actions from "@domain/genres/actions";
import { createAsyncPaginatedCollectionReducer } from "@helpers/reducers";

export default createAsyncPaginatedCollectionReducer(actions.fetch, "id");
