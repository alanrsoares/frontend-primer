import { Movie } from "@domain/movies/types";
import actions from "@domain/movies/actions";

import { createAsyncCollectionReducer } from "@helpers/reducers";

export default createAsyncCollectionReducer<Movie>(actions.fetch, "id");
