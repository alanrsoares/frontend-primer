import { Feature } from "./types";
import actions from "./actions";
import { createAsyncCollectionReducer } from "@helpers/reducers";

export default createAsyncCollectionReducer<Feature>(actions.fetch, "id");
