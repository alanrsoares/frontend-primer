import { Movie } from "@domain/movies/types";
import actions from "@domain/movies/actions";

import { createLazyCollectionReducer } from "@helpers/reducers";

export default createLazyCollectionReducer<Movie>(actions.fetch, "id");
