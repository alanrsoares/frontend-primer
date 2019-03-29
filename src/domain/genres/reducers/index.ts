import { Genre } from "@domain/genres/types";
import actions from "@domain/genres/actions";
import { createLazyCollectionReducer } from "@helpers/reducers";

export default createLazyCollectionReducer<Genre>(actions.fetch, "id");
