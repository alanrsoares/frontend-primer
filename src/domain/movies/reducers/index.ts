import actions from "@domain/movies/actions";

import { createAsyncPaginatedCollectionReducer } from "@helpers/reducers";

export default createAsyncPaginatedCollectionReducer(actions.fetch, "id");
