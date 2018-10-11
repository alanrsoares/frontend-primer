import { createAsyncActions } from "re-reduce";

import { Feature, LoginPayload, UserProfile } from "@domain/core/types";

export default {
  features: {
    fetch: createAsyncActions<void, Feature[]>("FETCH", "CORE/FEATRUES")
  },
  user: {
    login: createAsyncActions<LoginPayload, UserProfile>("LOGIN", "CORE/USER")
  }
};
