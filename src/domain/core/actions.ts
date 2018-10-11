import { createAsyncActions } from "@helpers/actions";
import { Feature } from "@domain/core/types";

export default {
  features: {
    fetch: createAsyncActions<void, Feature[]>("FETCH", "CORE/FEATRUES")
  }
};
