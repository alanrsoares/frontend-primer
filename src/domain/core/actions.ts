import { createAsyncActions } from "@helpers/actions";
import { Feature, LoginPayload, UserProfile } from "@domain/core/types";

export default {
  features: {
    fetch: createAsyncActions<void, Feature[]>("FETCH", "CORE/FEATRUES")
  },
  user: {
    login: createAsyncActions<LoginPayload, UserProfile>("LOGIN", "CORE/USER")
  }
};
