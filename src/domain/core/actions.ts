import { createAsyncActions } from "@helpers/actions";

export default {
  features: {
    fetchList: createAsyncActions("FETCH", "CORE/FEATRUES")
  }
};
