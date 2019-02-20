import { createAsyncAction, createAction } from "re-reduced";

import {
  Feature,
  LoginPayload,
  UserProfile,
  Breadcrumb
} from "@domain/core/types";

export default {
  setBreadcrumbs: createAction<Breadcrumb[]>("SET_BREADCRUMBS", "CORE"),
  features: {
    fetch: createAsyncAction<Feature[]>("FETCH", "CORE/FEATRUES")
  },
  user: {
    login: createAsyncAction<UserProfile, LoginPayload>("LOGIN", "CORE/USER")
  }
};
