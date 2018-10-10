import { createAsyncActions } from "@helpers/actions";
import { Feature } from "@domain/core/types";

export default {
  features: {
    fetchList: createAsyncActions<void, Feature[]>("FETCH", "CORE/FEATRUES")
  }
};
